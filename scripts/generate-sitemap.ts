import { generateSitemap, generateRobotsTxt } from '../lib/sitemap.js';

// Mock data functions since we're using static generation
async function getAllBlogPosts() {
  // This will be populated by Next.js at build time
  return [];
}

async function getAllTools() {
  // This will be populated by Next.js at build time
  return [];
}

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
