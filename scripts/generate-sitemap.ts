import { generateSitemap, generateRobotsTxt } from '../lib/sitemap';
import { getAllBlogPosts } from '../data/blog-posts';
import { getAllTools } from '../data/tools';

async function main() {
  try {
    console.log('Starting sitemap generation...');
    
    // Generate sitemap
    await generateSitemap();
    
    // Generate robots.txt
    generateRobotsTxt();
    
    console.log('Sitemap and robots.txt generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

main();
