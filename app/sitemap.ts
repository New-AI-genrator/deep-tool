import { MetadataRoute } from 'next';
import { categoriesWithSubcategories, getAllTools } from '../data/tools';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://deeptool.com'; // Change to your domain
  
  // Homepage
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];

  // Category pages
  categoriesWithSubcategories.forEach((category) => {
    routes.push({
      url: `${baseUrl}/categories/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    });

    // Subcategory pages
    category.subcategories.forEach((subcategory) => {
      routes.push({
        url: `${baseUrl}/categories/${category.slug}/${subcategory.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    });
  });

  // Tool pages
  const tools = getAllTools();
  tools.forEach((tool) => {
    routes.push({
      url: `${baseUrl}/tool/${tool.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    });
  });

  return routes;
}
