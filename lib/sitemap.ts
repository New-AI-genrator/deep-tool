import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

interface SitemapEntry {
  url: string;
  lastModified?: Date | string;
  changeFrequency?:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never';
  priority?: number;
  images?: Array<{ url: string; caption?: string; title?: string }>;
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://deeptool.vercel.app';

export async function generateSitemap(entries: SitemapEntry[] = []) {
  // Add static pages
  const staticPages: SitemapEntry[] = [
    {
      url: '/',
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: '/blog',
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: '/tools',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: '/about',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: '/contact',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Get all blog posts
  const blogPosts = await getBlogPosts();
  const blogEntries: SitemapEntry[] = blogPosts.map((post) => ({
    url: `/blog/${post.slug}`,
    lastModified: post.updatedAt || post.publishedAt,
    changeFrequency: 'monthly',
    priority: 0.8,
    images: post.coverImage ? [{ url: new URL(post.coverImage, baseUrl).toString() }] : [],
  }));

  // Get all tools
  const tools = await getTools();
  const toolEntries: SitemapEntry[] = tools.map((tool: any) => {
    const entry: SitemapEntry = {
      url: `/tools/${tool.slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
    };

    // Add images if they exist
    if (tool.coverImage) {
      entry.images = [{
        url: new URL(tool.coverImage, baseUrl).toString(),
        caption: tool.name,
      }];
    }

    return entry;
  });

  // Combine all entries
  const allEntries = [...staticPages, ...blogEntries, ...toolEntries, ...entries];

  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  ${allEntries
    .map((entry) => {
      const url = new URL(entry.url, baseUrl).toString();
      const lastMod = entry.lastModified
        ? new Date(entry.lastModified).toISOString()
        : new Date().toISOString();
      const changeFreq = entry.changeFrequency || 'monthly';
      const priority = entry.priority?.toFixed(1) || '0.8';

      return `
    <url>
      <loc>${url}</loc>
      <lastmod>${lastMod}</lastmod>
      <changefreq>${changeFreq}</changefreq>
      <priority>${priority}</priority>
      ${entry.images?.map(
        (image) => `
      <image:image>
        <image:loc>${image.url}</image:loc>
        ${image.caption ? `<image:caption><![CDATA[${image.caption}]]></image:caption>` : ''}
        ${image.title ? `<image:title><![CDATA[${image.title}]]></image:title>` : ''}
      </image:image>`
      ).join('')}
    </url>`;
    })
    .join('')}
</urlset>`;

  // Create public directory if it doesn't exist
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Write sitemap to file
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);
  console.log(`Sitemap generated at: ${sitemapPath}`);

  // Generate sitemap index if needed (for large sites)
  if (allEntries.length > 50000) {
    await generateSitemapIndex();
  }

  return sitemapPath;
}

async function generateSitemapIndex() {
  // Implementation for large sites with multiple sitemap files
  // This is a placeholder for future implementation
  console.log('Generating sitemap index...');
}

async function getBlogPosts() {
  // Import your blog posts from your data source
  try {
    const { getAllBlogPosts } = await import('../data/blog-posts');
    return await getAllBlogPosts();
  } catch (error) {
    console.warn('Could not load blog posts for sitemap:', error);
    return [];
  }
}

async function getTools() {
  // Import your tools from your data source
  try {
    const { getAllTools } = await import('../data/tools');
    return await getAllTools();
  } catch (error) {
    console.warn('Could not load tools for sitemap:', error);
    return [];
  }
}

// Helper function to generate sitemap for dynamic routes
export async function generateDynamicSitemap(paths: string[]) {
  const entries: SitemapEntry[] = paths.map((path) => ({
    url: path,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return generateSitemap(entries);
}

// Generate robots.txt with sitemap reference
export function generateRobotsTxt() {
  const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

Sitemap: ${new URL('/sitemap.xml', baseUrl).toString()}
`;

  const publicDir = path.join(process.cwd(), 'public');
  const robotsTxtPath = path.join(publicDir, 'robots.txt');
  fs.writeFileSync(robotsTxtPath, robotsTxt);
  console.log(`robots.txt generated at: ${robotsTxtPath}`);
  return robotsTxtPath;
}
