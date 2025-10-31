#!/usr/bin/env node

/**
 * Script to safely add new tools to the tools.ts file
 */

import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read the new tools from JSON file
const newToolsPath = join(__dirname, '../data/new-tools.json');
const newTools = JSON.parse(fs.readFileSync(newToolsPath, 'utf-8'));

console.log(`Loaded ${newTools.length} new tools from JSON file`);

// Read the current tools file
const toolsFilePath = join(__dirname, '../data/tools.ts');
let toolsContent = fs.readFileSync(toolsFilePath, 'utf-8');

console.log('Current tools file length:', toolsContent.length);

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
  const subcategoryIndex = toolsContent.indexOf(subcategoryKey);
  
  if (subcategoryIndex !== -1) {
    // Find the end of the subcategory array (the closing bracket)
    let bracketCount = 1;
    let currentIndex = subcategoryIndex + subcategoryKey.length;
    
    // Move past any whitespace
    while (currentIndex < toolsContent.length && /\s/.test(toolsContent[currentIndex])) {
      currentIndex++;
    }
    
    // If we're at an opening bracket, find the matching closing bracket
    if (toolsContent[currentIndex] === ']') {
      // Empty array, insert tools before the closing bracket
      const toolEntries = toolsToAdd.map(tool => toolToTypeScript(tool)).join(',\n');
      const beforeInsert = toolsContent.substring(0, currentIndex);
      const afterInsert = toolsContent.substring(currentIndex);
      toolsContent = beforeInsert + '\n' + toolEntries + (toolEntries ? ',\n' : '') + afterInsert;
      toolsAdded += toolsToAdd.length;
      console.log(`  Successfully added ${toolsToAdd.length} tools`);
    } else {
      // Non-empty array, find the end
      while (bracketCount > 0 && currentIndex < toolsContent.length) {
        if (toolsContent[currentIndex] === '[') bracketCount++;
        if (toolsContent[currentIndex] === ']') bracketCount--;
        currentIndex++;
      }
      
      // Insert the new tools before the closing bracket
      const toolEntries = toolsToAdd.map(tool => toolToTypeScript(tool)).join(',\n');
      const beforeInsert = toolsContent.substring(0, currentIndex - 1);
      const afterInsert = toolsContent.substring(currentIndex - 1);
      toolsContent = beforeInsert + ',\n' + toolEntries + '\n  ' + afterInsert;
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
  fs.writeFileSync(toolsFilePath, toolsContent);
  console.log('\nTools successfully added to tools.ts file!');
  console.log('Next steps:');
  console.log('1. Run "npm run build" to verify the changes');
  console.log('2. Start the development server with "npm run dev"');
  console.log('3. Visit http://localhost:3000 to see the new tools');
} else {
  console.log('\nNo tools were added. Please check the subcategory names match existing ones.');
}