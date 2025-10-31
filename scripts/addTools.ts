#!/usr/bin/env node

/**
 * Script to efficiently add new tools to the directory
 * This approach avoids working with the massive single file
 */

import fs from 'fs';
import path from 'path';

// Tool template for consistent structure
interface ToolTemplate {
  name: string;
  slug: string;
  tagline: string;
  logoUrl: string;
  website: string;
  pricing: 'free' | 'freemium' | 'paid' | 'enterprise' | 'community-favorite';
  badges?: ('nexus-verified' | 'trending' | 'enterprise' | 'new' | 'popular' | 'featured' | 'community-favorite')[];
  category: string;
  categorySlug: string;
  subcategory: string;
  subcategorySlug: string;
  description: string;
  features: string[];
  useCases: string[];
  tags?: string[];
  rating?: number;
  reviewCount?: number;
  alternatives?: string[];
  integrations?: string[];
  pricingDetails?: {
    type: 'free' | 'freemium' | 'paid' | 'enterprise' | 'community-favorite';
    price?: string;
    url: string;
    description?: string;
  };
}

// Sample tools to add (in a real scenario, this would come from an API or database)
const newTools: ToolTemplate[] = [
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
    description: 'Canva is a user-friendly graphic design platform that makes design accessible to everyone. With thousands of templates and an intuitive drag-and-drop interface, anyone can create professional designs.',
    features: [
      'Thousands of templates',
      'Drag-and-drop editor',
      'Brand kit for consistency',
      'Collaboration tools',
      'Photo editing',
      'Presentation tools',
      'Social media templates',
      'Print and digital assets'
    ],
    useCases: [
      'Social media graphics',
      'Marketing materials',
      'Presentations',
      'Flyers and posters',
      'Logo design',
      'Business cards'
    ],
    tags: ['design', 'templates', 'social-media', 'beginner-friendly'],
    rating: 4.7,
    reviewCount: 25600,
    alternatives: ['Figma', 'Adobe Photoshop', 'Crello'],
    integrations: ['Google Drive', 'Dropbox', 'Slack', 'Microsoft Teams'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free plan available, Pro from $12.99/month, Enterprise from $30/month',
      url: 'https://www.canva.com/pricing',
      description: 'Free plan with basic features, Pro for advanced tools, Enterprise for teams'
    }
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
    description: 'Figma is the first professional-grade online tool created specifically for interface design. It allows real-time collaboration and works directly in your browser.',
    features: [
      'Real-time collaboration',
      'Vector networks',
      'Prototyping',
      'Design systems',
      'Plugins and widgets',
      'Version history',
      'Cloud-based',
      'Cross-platform'
    ],
    useCases: [
      'UI/UX design',
      'Wireframing',
      'Prototyping',
      'Design systems',
      'Team collaboration',
      'User research'
    ],
    tags: ['design', 'ui', 'ux', 'collaboration', 'prototyping'],
    rating: 4.8,
    reviewCount: 15600,
    alternatives: ['Sketch', 'Adobe XD', 'InVision'],
    integrations: ['Slack', 'Jira', 'Notion', 'Zeplin', 'Abstract'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free plan available, Professional from $12/editor/month, Organization from $45/editor/month',
      url: 'https://www.figma.com/pricing',
      description: 'Free for individuals and small teams, paid plans for advanced features and organizations'
    }
  }
];

/**
 * Add tools to the appropriate category file
 */
async function addTools(tools: ToolTemplate[]): Promise<void> {
  console.log(`Adding ${tools.length} new tools...`);
  
  // Group tools by category
  const toolsByCategory: Record<string, ToolTemplate[]> = {};
  
  tools.forEach(tool => {
    const categorySlug = tool.categorySlug;
    if (!toolsByCategory[categorySlug]) {
      toolsByCategory[categorySlug] = [];
    }
    toolsByCategory[categorySlug].push(tool);
  });
  
  // Process each category
  for (const [categorySlug, categoryTools] of Object.entries(toolsByCategory)) {
    console.log(`Processing ${categoryTools.length} tools for category: ${categorySlug}`);
    
    // In a real implementation, we would:
    // 1. Check if category file exists
    // 2. Read existing tools from that file
    // 3. Merge new tools with existing ones
    // 4. Write back to file
    // 5. Update index file
    
    // For demonstration, we'll just log what would be done
    categoryTools.forEach(tool => {
      console.log(`  - Adding ${tool.name} to ${categorySlug}`);
    });
  }
  
  console.log('Tool addition process completed!');
}

/**
 * Validate tool data before adding
 */
function validateTool(tool: ToolTemplate): boolean {
  // Basic validation
  if (!tool.name || !tool.slug || !tool.category || !tool.subcategory) {
    console.error('Tool missing required fields');
    return false;
  }
  
  // Check for duplicate slugs (in a real implementation)
  // This would check against existing tools
  
  return true;
}

// Main execution
async function main() {
  console.log('Starting tool addition process...');
  
  // Validate all tools first
  const validTools = newTools.filter(tool => validateTool(tool));
  
  if (validTools.length !== newTools.length) {
    console.warn(`${newTools.length - validTools.length} tools failed validation`);
  }
  
  if (validTools.length > 0) {
    await addTools(validTools);
  } else {
    console.log('No valid tools to add');
  }
}

// Run the script
if (require.main === module) {
  main().catch(console.error);
}

export { addTools, validateTool };
export type { ToolTemplate };