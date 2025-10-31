#!/usr/bin/env node

/**
 * Simple script to add tools to the tools.ts file
 */

import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read the current tools file
const toolsFilePath = join(__dirname, '../data/tools.ts');
let toolsContent = fs.readFileSync(toolsFilePath, 'utf-8');

console.log('Current tools file length:', toolsContent.length);

// Simple function to add tools without breaking the file
function addToolsSafely() {
  // We'll add just 5 tools for now to demonstrate the approach
  const toolsToAdd = [
    {
      name: 'Notion',
      slug: 'notion',
      tagline: 'All-in-one workspace for notes, tasks, wikis, and databases',
      logoUrl: '/logos/notion.png',
      website: 'https://www.notion.so',
      pricing: 'freemium',
      badges: ['popular', 'trending'],
      category: 'Productivity & Business',
      categorySlug: 'productivity-business',
      subcategory: 'Project Management',
      subcategorySlug: 'project-management',
      description: 'Notion is an all-in-one workspace that combines notes, tasks, wikis, and databases into a single, powerful tool.',
      features: [
        'Note taking',
        'Task management',
        'Database creation',
        'Team collaboration'
      ],
      useCases: [
        'Project planning',
        'Team wikis',
        'Personal organization'
      ],
      tags: ['productivity', 'notes', 'database', 'collaboration'],
      rating: 4.7,
      reviewCount: 15600
    },
    {
      name: 'Figma',
      slug: 'figma',
      tagline: 'The collaborative interface design tool',
      logoUrl: '/logos/figma.png',
      website: 'https://www.figma.com',
      pricing: 'freemium',
      badges: ['popular', 'featured'],
      category: 'Creative & Design',
      categorySlug: 'creative-design',
      subcategory: 'UI/UX Design',
      subcategorySlug: 'ui-ux-design',
      description: 'Figma is the first professional-grade online tool created specifically for interface design.',
      features: [
        'Real-time collaboration',
        'Vector networks',
        'Prototyping',
        'Design systems'
      ],
      useCases: [
        'UI/UX design',
        'Wireframing',
        'Prototyping'
      ],
      tags: ['design', 'ui', 'ux', 'collaboration'],
      rating: 4.7,
      reviewCount: 8900
    },
    {
      name: 'Canva',
      slug: 'canva',
      tagline: 'Easy-to-use graphic design platform for everyone',
      logoUrl: '/logos/canva.png',
      website: 'https://www.canva.com',
      pricing: 'freemium',
      badges: ['popular', 'featured'],
      category: 'Creative & Design',
      categorySlug: 'creative-design',
      subcategory: 'Graphic Design',
      subcategorySlug: 'graphic-design',
      description: 'Canva is a user-friendly graphic design platform that makes design accessible to everyone.',
      features: [
        'Thousands of templates',
        'Drag-and-drop editor',
        'Brand kit for consistency',
        'Collaboration tools'
      ],
      useCases: [
        'Social media graphics',
        'Marketing materials',
        'Presentations'
      ],
      tags: ['design', 'templates', 'social-media', 'beginner-friendly'],
      rating: 4.7,
      reviewCount: 12400
    }
  ];

  console.log(`Adding ${toolsToAdd.length} tools...`);

  // For each tool, we'll add it to the appropriate subcategory
  toolsToAdd.forEach(tool => {
    const subcategoryKey = `'${tool.subcategorySlug}': [`;
    const insertionIndex = toolsContent.indexOf(subcategoryKey);
    
    if (insertionIndex !== -1) {
      // Find the end of the subcategory array
      const arrayStart = insertionIndex + subcategoryKey.length;
      let bracketCount = 1;
      let currentIndex = arrayStart;
      
      while (bracketCount > 0 && currentIndex < toolsContent.length) {
        if (toolsContent[currentIndex] === '[') bracketCount++;
        if (toolsContent[currentIndex] === ']') bracketCount--;
        currentIndex++;
      }
      
      // Insert the tool before the closing bracket
      const toolString = `
    {
      name: '${tool.name}',
      slug: '${tool.slug}',
      tagline: '${tool.tagline}',
      logoUrl: '${tool.logoUrl}',
      website: '${tool.website}',
      pricing: '${tool.pricing}',
      badges: [${tool.badges.map(b => `'${b}'`).join(', ')}],
      category: '${tool.category}',
      categorySlug: '${tool.categorySlug}',
      subcategory: '${tool.subcategory}',
      subcategorySlug: '${tool.subcategorySlug}',
      description: '${tool.description}',
      features: [
        ${tool.features.map(f => `'${f}'`).join(',\n        ')}
      ],
      useCases: [
        ${tool.useCases.map(u => `'${u}'`).join(',\n        ')}
      ],
      tags: [${tool.tags.map(t => `'${t}'`).join(', ')}],
      rating: ${tool.rating},
      reviewCount: ${tool.reviewCount}
    },`;
      
      // Insert the tool before the closing bracket of the subcategory array
      const beforeInsert = toolsContent.substring(0, currentIndex - 1);
      const afterInsert = toolsContent.substring(currentIndex - 1);
      toolsContent = beforeInsert + toolString + afterInsert;
    }
  });

  // Write the updated content back to the file
  fs.writeFileSync(toolsFilePath, toolsContent);
  console.log('Tools added successfully!');
}

// Run the function
addToolsSafely();