import { generateSitemap } from '@/lib/sitemap';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    // Generate sitemap using the existing function
    const sitemapXml = await generateSitemap();
    
    // Parse the XML back to an array of sitemap entries
    // This is a simplified version - you might need to adjust based on your generateSitemap output
    const entries: MetadataRoute.Sitemap = [
      {
        url: 'https://deeptool.vercel.app',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
      // Add more entries as needed
    ];
    
    return entries;
  } catch (error) {
    console.error('Error generating sitemap:', error);
    // Return a minimal sitemap in case of error
    return [
      {
        url: 'https://deeptool.vercel.app',
        lastModified: new Date(),
      },
    ];
  }
}

export const dynamic = 'force-dynamic'; // Ensure sitemap is generated on each request
