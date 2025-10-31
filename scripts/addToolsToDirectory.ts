#!/usr/bin/env node

/**
 * Script to efficiently add tools from JSON to the main tools.ts file
 */

import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read the additional tools from JSON file
const additionalToolsPath = join(__dirname, '../data/additional-tools.json');
const additionalTools = JSON.parse(fs.readFileSync(additionalToolsPath, 'utf-8'));

console.log(`Loaded ${additionalTools.length} tools from JSON file`);

// Read the current tools.ts file
const toolsTsPath = join(__dirname, '../data/tools.ts');
let toolsTsContent = fs.readFileSync(toolsTsPath, 'utf-8');

console.log('Adding tools to directory...');

// Group tools by subcategory
const toolsBySubcategory: Record<string, any[]> = {};

additionalTools.forEach((tool: any) => {
  const subcategorySlug = tool.subcategorySlug;
  if (!toolsBySubcategory[subcategorySlug]) {
    toolsBySubcategory[subcategorySlug] = [];
  }
  toolsBySubcategory[subcategorySlug].push(tool);
});

console.log('Tools grouped by subcategory:');
Object.keys(toolsBySubcategory).forEach(subcategory => {
  console.log(`  ${subcategory}: ${toolsBySubcategory[subcategory].length} tools`);
});

// Function to convert a tool object to the TypeScript format
function toolToTypeScript(tool: any): string {
  // Helper function to escape single quotes in strings
  const escapeQuotes = (str: string) => str.replace(/'/g, "\\'");
  
  // Format features array
  const features = tool.features.map((feature: string) => `        '${escapeQuotes(feature)}'`).join(',\n');
  
  // Format useCases array
  const useCases = tool.useCases.map((useCase: string) => `        '${escapeQuotes(useCase)}'`).join(',\n');
  
  // Format tags array if it exists
  const tags = tool.tags ? tool.tags.map((tag: string) => `'${escapeQuotes(tag)}'`).join(', ') : '';
  
  // Format badges array if it exists
  const badges = tool.badges ? tool.badges.map((badge: string) => `'${escapeQuotes(badge)}'`).join(', ') : '';
  
  // Format alternatives array if it exists
  const alternatives = tool.alternatives ? tool.alternatives.map((alt: string) => `'${escapeQuotes(alt)}'`).join(', ') : '';
  
  // Format integrations array if it exists
  const integrations = tool.integrations ? tool.integrations.map((integration: string) => `'${escapeQuotes(integration)}'`).join(', ') : '';
  
  // Format pricingDetails if it exists
  let pricingDetails = '';
  if (tool.pricingDetails) {
    pricingDetails = `,
      pricingDetails: {
        type: '${escapeQuotes(tool.pricingDetails.type)}',
        price: '${escapeQuotes(tool.pricingDetails.price)}',
        url: '${escapeQuotes(tool.pricingDetails.url)}',
        description: '${escapeQuotes(tool.pricingDetails.description)}'
      }`;
  }
  
  return `    {
      name: '${escapeQuotes(tool.name)}',
      slug: '${escapeQuotes(tool.slug)}',
      tagline: '${escapeQuotes(tool.tagline)}',
      logoUrl: '${escapeQuotes(tool.logoUrl)}',
      website: '${escapeQuotes(tool.website)}',
      pricing: '${escapeQuotes(tool.pricing)}',
      ${badges ? `badges: [${badges}],` : ''}
      category: '${escapeQuotes(tool.category)}',
      categorySlug: '${escapeQuotes(tool.categorySlug)}',
      subcategory: '${escapeQuotes(tool.subcategory)}',
      subcategorySlug: '${escapeQuotes(tool.subcategorySlug)}',
      description: '${escapeQuotes(tool.description)}',
      features: [
${features}
      ],
      useCases: [
${useCases}
      ],
      ${tags ? `tags: [${tags}],` : ''}
      rating: ${tool.rating},
      reviewCount: ${tool.reviewCount}${alternatives ? `,
      alternatives: [${alternatives}]` : ''}${integrations ? `,
      integrations: [${integrations}]` : ''}${pricingDetails}
    }`;
}

// Add tools to the appropriate subcategories in the file
let modifiedContent = toolsTsContent;
let toolsAdded = 0;

Object.keys(toolsBySubcategory).forEach(subcategorySlug => {
  const toolsToAdd = toolsBySubcategory[subcategorySlug];
  console.log(`\nAdding ${toolsToAdd.length} tools to subcategory: ${subcategorySlug}`);
  
  // Find the subcategory section in the file
  const subcategoryStart = `  '${subcategorySlug}': [`;
  const subcategoryIndex = modifiedContent.indexOf(subcategoryStart);
  
  if (subcategoryIndex !== -1) {
    // Find the end of the subcategory array
    const subcategoryEndIndex = modifiedContent.indexOf('  ],', subcategoryIndex);
    
    if (subcategoryEndIndex !== -1) {
      // Get the content before the closing bracket
      const beforeEnd = modifiedContent.substring(0, subcategoryEndIndex);
      const afterEnd = modifiedContent.substring(subcategoryEndIndex);
      
      // Create the tool entries
      const toolEntries = toolsToAdd.map(tool => toolToTypeScript(tool)).join(',\n');
      
      // Insert the new tools before the closing bracket
      modifiedContent = beforeEnd + ',\n' + toolEntries + '\n  ' + afterEnd;
      toolsAdded += toolsToAdd.length;
      console.log(`  Successfully added ${toolsToAdd.length} tools`);
    } else {
      console.log(`  Could not find end of subcategory array for ${subcategorySlug}`);
    }
  } else {
    console.log(`  Could not find subcategory ${subcategorySlug} in file`);
    
    // Try to find where we should add a new subcategory
    // This is more complex and would require creating a new subcategory section
    // For now, we'll skip this and focus on existing subcategories
  }
});

console.log(`\nTotal tools added: ${toolsAdded}`);

// Write the modified content back to the file
if (toolsAdded > 0) {
  fs.writeFileSync(toolsTsPath, modifiedContent);
  console.log('\nTools successfully added to tools.ts file!');
  console.log('Next steps:');
  console.log('1. Run "npm run build" to verify the changes');
  console.log('2. Start the development server with "npm run dev"');
  console.log('3. Visit http://localhost:3000 to see the new tools');
} else {
  console.log('\nNo tools were added. Please check the subcategory names match existing ones.');
}