#!/usr/bin/env node

/**
 * Script to add missing subcategories and tools to the tools.ts file
 */

import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read the current tools file
const toolsFilePath = join(__dirname, '../data/tools.ts');
let toolsContent = fs.readFileSync(toolsFilePath, 'utf-8');

// Define the missing subcategories
const missingSubcategories = [
  {
    key: 'parent-communication',
    content: `  // Childcare & Education > Parent Communication
  'parent-communication': [
  ],`
  },
  {
    key: 'child-development',
    content: `  // Childcare & Education > Child Development
  'child-development': [
  ],`
  },
  {
    key: 'childcare-billing',
    content: `  // Childcare & Education > Billing & Payments
  'childcare-billing': [
  ],`
  }
];

// Add the missing subcategories to the toolsBySubcategory object
let modifiedContent = toolsContent;
let lastSubcategoryIndex = 0;

// Find the end of the toolsBySubcategory object (before the closing semicolon)
const toolsBySubcategoryEnd = modifiedContent.lastIndexOf('};');

if (toolsBySubcategoryEnd !== -1) {
  // Insert each missing subcategory before the closing brace
  for (const subcategory of missingSubcategories) {
    // Check if the subcategory already exists
    if (modifiedContent.indexOf(`'${subcategory.key}': [`) === -1) {
      // Insert the subcategory before the closing brace
      const beforeInsert = modifiedContent.substring(0, toolsBySubcategoryEnd);
      const afterInsert = modifiedContent.substring(toolsBySubcategoryEnd);
      modifiedContent = beforeInsert + '\n' + subcategory.content + '\n' + afterInsert;
      console.log(`Added subcategory: ${subcategory.key}`);
    } else {
      console.log(`Subcategory already exists: ${subcategory.key}`);
    }
  }
}

// Now add the tools to their respective subcategories
const newToolsPath = join(__dirname, '../data/childcare-education-tools.json');
const newTools = JSON.parse(fs.readFileSync(newToolsPath, 'utf-8'));

console.log(`Loaded ${newTools.length} new tools from JSON file`);

// Function to escape single quotes in strings
function escapeQuotes(str: string): string {
  if (typeof str !== 'string') return str;
  return str.replace(/'/g, "\\'");
}

// Function to convert a tool object to TypeScript format
function toolToTypeScript(tool: any): string {
  // Format features array
  const features = tool.features.map((feature: string) => `        '${escapeQuotes(feature)}'`).join(',\n');
  
  // Format useCases array
  const useCases = tool.useCases.map((useCase: string) => `        '${escapeQuotes(useCase)}'`).join(',\n');
  
  // Format tags array
  const tags = tool.tags ? tool.tags.map((tag: string) => `'${escapeQuotes(tag)}'`).join(', ') : '';
  
  // Format badges array
  const badges = tool.badges ? tool.badges.map((badge: string) => `'${escapeQuotes(badge)}'`).join(', ') : '';
  
  return `    {
      name: '${escapeQuotes(tool.name)}',
      slug: '${escapeQuotes(tool.slug)}',
      tagline: '${escapeQuotes(tool.tagline)}',
      logoUrl: '${escapeQuotes(tool.logoUrl)}',
      website: '${escapeQuotes(tool.website)}',
      pricing: '${escapeQuotes(tool.pricing)}',
      badges: [${badges}],
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
      tags: [${tags}],
      rating: ${tool.rating},
      reviewCount: ${tool.reviewCount}
    }`;
}

// Group tools by subcategory
const toolsBySubcategory: Record<string, any[]> = {};

newTools.forEach((tool: any) => {
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

// Add tools to the appropriate subcategories in the file
let toolsAdded = 0;

Object.keys(toolsBySubcategory).forEach(subcategorySlug => {
  const toolsToAdd = toolsBySubcategory[subcategorySlug];
  console.log(`\nAdding ${toolsToAdd.length} tools to subcategory: ${subcategorySlug}`);
  
  // Find the subcategory section in the file
  const subcategoryKey = `'${subcategorySlug}': [`;
  const subcategoryIndex = modifiedContent.indexOf(subcategoryKey);
  
  if (subcategoryIndex !== -1) {
    // Find the end of the subcategory array (the closing bracket)
    let bracketCount = 1;
    let currentIndex = subcategoryIndex + subcategoryKey.length;
    
    // Move past any whitespace
    while (currentIndex < modifiedContent.length && /\s/.test(modifiedContent[currentIndex])) {
      currentIndex++;
    }
    
    // If we're at an opening bracket, find the matching closing bracket
    if (modifiedContent[currentIndex] === ']') {
      // Empty array, insert tools before the closing bracket
      const toolEntries = toolsToAdd.map(tool => toolToTypeScript(tool)).join(',\n');
      const beforeInsert = modifiedContent.substring(0, currentIndex);
      const afterInsert = modifiedContent.substring(currentIndex);
      modifiedContent = beforeInsert + '\n' + toolEntries + (toolEntries ? ',\n' : '') + afterInsert;
      toolsAdded += toolsToAdd.length;
      console.log(`  Successfully added ${toolsToAdd.length} tools`);
    } else {
      // Non-empty array, find the end
      while (bracketCount > 0 && currentIndex < modifiedContent.length) {
        if (modifiedContent[currentIndex] === '[') bracketCount++;
        if (modifiedContent[currentIndex] === ']') bracketCount--;
        currentIndex++;
      }
      
      // Insert the new tools before the closing bracket
      const toolEntries = toolsToAdd.map(tool => toolToTypeScript(tool)).join(',\n');
      const beforeInsert = modifiedContent.substring(0, currentIndex - 1);
      const afterInsert = modifiedContent.substring(currentIndex - 1);
      modifiedContent = beforeInsert + ',\n' + toolEntries + '\n  ' + afterInsert;
      toolsAdded += toolsToAdd.length;
      console.log(`  Successfully added ${toolsToAdd.length} tools`);
    }
  } else {
    console.log(`  Could not find subcategory ${subcategorySlug} in file`);
  }
});

console.log(`\nTotal tools added: ${toolsAdded}`);

// Write the modified content back to the file
if (toolsAdded > 0) {
  fs.writeFileSync(toolsFilePath, modifiedContent);
  console.log('\nTools successfully added to tools.ts file!');
  console.log('Next steps:');
  console.log('1. Run "npm run build" to verify the changes');
  console.log('2. Start the development server with "npm run dev"');
  console.log('3. Visit http://localhost:3000 to see the new tools');
} else {
  console.log('\nNo tools were added. Please check the subcategory names match existing ones.');
}