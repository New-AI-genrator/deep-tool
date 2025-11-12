import { NextResponse } from 'next/server';
import { getAllBlogPosts } from '@/data/blog-posts';
import { getAllTools } from '@/data/tools';

const BASE_URL = 'https://deeptool.vercel.app';

type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

interface SitemapEntry {
  url: string;
  lastModified?: string | Date;
  changeFrequency?: ChangeFrequency;
  priority?: number;
}

export async function GET() {
  try {
    // Get all blog posts
    const blogPosts = await getAllBlogPosts();
    
    // Get all tools
    const tools = getAllTools();
    
    // Static routes
    const staticRoutes: SitemapEntry[] = [
      {
        url: BASE_URL,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
      {
        url: `${BASE_URL}/blog`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8,
      },
      {
        url: `${BASE_URL}/compare`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      },
    ];
    
    // Blog post routes
    const blogRoutes: SitemapEntry[] = blogPosts.map((post: any) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    }));
    
    // Tool routes
    const toolRoutes: SitemapEntry[] = tools.map((tool: any) => ({
      url: `${BASE_URL}/tools/${tool.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    }));
    
    const allRoutes = [...staticRoutes, ...blogRoutes, ...toolRoutes];
    
    // Generate XML sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allRoutes
        .map((route) => {
          return `
            <url>
              <loc>${route.url}</loc>
              <lastmod>${new Date(route.lastModified || new Date()).toISOString()}</lastmod>
              ${route.changeFrequency ? `<changefreq>${route.changeFrequency}</changefreq>` : ''}
              ${route.priority ? `<priority>${route.priority}</priority>` : ''}
            </url>
          `;
        })
        .join('')}
    </urlset>`;

    return new Response(sitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
      },
    });
    
  } catch (error) {
    console.error('Error generating sitemap:', error);
    
    // Return a minimal sitemap in case of error
    const errorSitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${BASE_URL}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
    </urlset>`;
    
    return new Response(errorSitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  }
}

// Ensure the sitemap is not statically generated
export const dynamic = 'force-dynamic';
