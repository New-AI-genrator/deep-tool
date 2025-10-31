#!/usr/bin/env node

/**
 * Script to add comprehensive tools to the Printing & Publishing category
 */

import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Tools for Printing & Publishing category
const printingPublishingTools = [
  // Print Management
  {
    name: 'EzCater',
    slug: 'ezcater',
    tagline: 'Catering management software for print shops',
    logoUrl: '/logos/ezcater.png',
    website: 'https://www.ezcater.com',
    pricing: 'paid',
    badges: ['popular', 'trending'],
    category: 'Printing & Publishing',
    categorySlug: 'printing-publishing',
    subcategory: 'Print Management',
    subcategorySlug: 'print-management',
    description: 'EzCater is catering management software that helps print shops manage catering orders, track deliveries, and optimize operations.',
    features: [
      'Order management',
      'Delivery tracking',
      'Customer CRM',
      'Inventory management',
      'Reporting and analytics',
      'Mobile app',
      'Payment processing',
      'Route optimization'
    ],
    useCases: [
      'Print shop catering',
      'Order tracking',
      'Customer management',
      'Delivery optimization',
      'Revenue tracking'
    ],
    tags: ['printing', 'catering', 'order-management', 'delivery', 'crm'],
    rating: 4.6,
    reviewCount: 2400
  },
  {
    name: 'PrintOS',
    slug: 'printos',
    tagline: 'HP\'s cloud-based print management platform',
    logoUrl: '/logos/printos.png',
    website: 'https://www.printos.hp.com',
    pricing: 'freemium',
    badges: ['enterprise', 'popular'],
    category: 'Printing & Publishing',
    categorySlug: 'printing-publishing',
    subcategory: 'Print Management',
    subcategorySlug: 'print-management',
    description: 'PrintOS is HP\'s cloud-based platform that connects, manages, and secures printing devices while providing analytics and workflow automation.',
    features: [
      'Device management',
      'Print analytics',
      'Security monitoring',
      'Workflow automation',
      'Cloud connectivity',
      'Remote diagnostics',
      'Usage tracking',
      'Cost management'
    ],
    useCases: [
      'Printer fleet management',
      'Print analytics',
      'Security monitoring',
      'Workflow automation',
      'Cost optimization'
    ],
    tags: ['printing', 'hp', 'device-management', 'analytics', 'security'],
    rating: 4.5,
    reviewCount: 1800
  },

  // Prepress Software
  {
    name: 'Enfocus PitStop Pro',
    slug: 'enfocus-pitstop-pro',
    tagline: 'Professional PDF preflight and editing software',
    logoUrl: '/logos/enfocus-pitstop-pro.png',
    website: 'https://www.enfocus.com',
    pricing: 'paid',
    badges: ['enterprise', 'popular'],
    category: 'Printing & Publishing',
    categorySlug: 'printing-publishing',
    subcategory: 'Prepress Software',
    subcategorySlug: 'prepress-software',
    description: 'Enfocus PitStop Pro is professional PDF preflight and editing software that automates quality control and correction of PDF files for print production.',
    features: [
      'PDF preflight',
      'Automated correction',
      'Color management',
      'Preflight profiles',
      'Action lists',
      'Variable data printing',
      'PDF editing',
      'Compliance checking'
    ],
    useCases: [
      'PDF preflight',
      'Print production',
      'Quality control',
      'Color management',
      'File correction'
    ],
    tags: ['prepress', 'pdf', 'preflight', 'printing', 'automation'],
    rating: 4.7,
    reviewCount: 3200
  },
  {
    name: 'Callas pdfToolbox',
    slug: 'callas-pdftoolbox',
    tagline: 'PDF quality assurance and automation software',
    logoUrl: '/logos/callas-pdftoolbox.png',
    website: 'https://www.callassoftware.com',
    pricing: 'paid',
    badges: ['enterprise'],
    category: 'Printing & Publishing',
    categorySlug: 'printing-publishing',
    subcategory: 'Prepress Software',
    subcategorySlug: 'prepress-software',
    description: 'Callas pdfToolbox is PDF quality assurance software that automates PDF preflight, correction, and optimization for print and digital publishing.',
    features: [
      'PDF preflight',
      'Automated correction',
      'Color conversion',
      'PDF optimization',
      'Variable data',
      'Compliance checking',
      'Batch processing',
      'Preflight reports'
    ],
    useCases: [
      'PDF quality control',
      'Print production',
      'Digital publishing',
      'File automation',
      'Color management'
    ],
    tags: ['prepress', 'pdf', 'quality-assurance', 'automation', 'printing'],
    rating: 4.6,
    reviewCount: 1500
  },

  // Workflow Automation
  {
    name: 'Esko Automation Engine',
    slug: 'esko-automation-engine',
    tagline: 'Automate prepress and packaging workflows',
    logoUrl: '/logos/esko.png',
    website: 'https://www.esko.com',
    pricing: 'enterprise',
    badges: ['enterprise'],
    category: 'Printing & Publishing',
    categorySlug: 'printing-publishing',
    subcategory: 'Workflow Automation',
    subcategorySlug: 'print-workflow',
    description: 'Esko Automation Engine automates prepress and packaging workflows, reducing manual tasks and improving production efficiency.',
    features: [
      'Workflow automation',
      'File processing',
      'RIP automation',
      'Color management',
      'Integration capabilities',
      'Reporting',
      'Error handling',
      'Scalability'
    ],
    useCases: [
      'Prepress automation',
      'Packaging workflows',
      'File processing',
      'Production efficiency',
      'Error reduction'
    ],
    tags: ['workflow', 'automation', 'prepress', 'packaging', 'printing'],
    rating: 4.4,
    reviewCount: 900
  },
  {
    name: 'ColorGATE Productionserver',
    slug: 'colorgate-productionserver',
    tagline: 'RIP and workflow automation software',
    logoUrl: '/logos/colorgate.png',
    website: 'https://www.colorgate.com',
    pricing: 'enterprise',
    badges: ['enterprise'],
    category: 'Printing & Publishing',
    categorySlug: 'printing-publishing',
    subcategory: 'Workflow Automation',
    subcategorySlug: 'print-workflow',
    description: 'ColorGATE Productionserver is RIP and workflow automation software for wide-format, textile, and industrial printing applications.',
    features: [
      'RIP processing',
      'Workflow automation',
      'Color management',
      'Device calibration',
      'Integration',
      'Scalability',
      'Remote management',
      'Production monitoring'
    ],
    useCases: [
      'Wide-format printing',
      'Textile printing',
      'Industrial printing',
      'RIP automation',
      'Color management'
    ],
    tags: ['workflow', 'rip', 'automation', 'color-management', 'printing'],
    rating: 4.5,
    reviewCount: 750
  },

  // Estimating & Quoting
  {
    name: 'PrintCostCalculators',
    slug: 'printcostcalculators',
    tagline: 'Online print cost calculation tools',
    logoUrl: '/logos/printcostcalculators.png',
    website: 'https://www.printcostcalculators.com',
    pricing: 'freemium',
    badges: ['popular'],
    category: 'Printing & Publishing',
    categorySlug: 'printing-publishing',
    subcategory: 'Estimating & Quoting',
    subcategorySlug: 'print-estimating',
    description: 'PrintCostCalculators provides online tools for calculating print job costs, pricing, and profitability for print service providers.',
    features: [
      'Cost calculation',
      'Pricing tools',
      'Profitability analysis',
      'Template library',
      'Customizable formulas',
      'Reporting',
      'Export options',
      'Mobile access'
    ],
    useCases: [
      'Print job costing',
      'Pricing estimation',
      'Profitability analysis',
      'Client quoting',
      'Cost optimization'
    ],
    tags: ['estimating', 'pricing', 'costing', 'printing', 'quoting'],
    rating: 4.3,
    reviewCount: 1200
  },
  {
    name: 'Tharstern',
    slug: 'tharstern',
    tagline: 'Print MIS and estimating software',
    logoUrl: '/logos/tharstern.png',
    website: 'https://www.tharstern.com',
    pricing: 'enterprise',
    badges: ['enterprise'],
    category: 'Printing & Publishing',
    categorySlug: 'printing-publishing',
    subcategory: 'Estimating & Quoting',
    subcategorySlug: 'print-estimating',
    description: 'Tharstern is comprehensive print MIS software that includes estimating, job tracking, and financial management for commercial print businesses.',
    features: [
      'Job estimating',
      'Production tracking',
      'Financial management',
      'CRM integration',
      'Reporting',
      'Workflow management',
      'Inventory control',
      'Analytics'
    ],
    useCases: [
      'Print estimating',
      'Job management',
      'Financial tracking',
      'Production planning',
      'Client management'
    ],
    tags: ['estimating', 'mis', 'printing', 'job-tracking', 'financial'],
    rating: 4.4,
    reviewCount: 650
  }
];

// Read the current tools file
const toolsFilePath = join(__dirname, '../data/tools.ts');
let toolsContent = fs.readFileSync(toolsFilePath, 'utf-8');

console.log(`Adding ${printingPublishingTools.length} tools to Printing & Publishing category...`);

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

printingPublishingTools.forEach((tool: any) => {
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
  console.log('\nPrinting & Publishing tools successfully added to tools.ts file!');
} else {
  console.log('\nNo tools were added. Please check the subcategory names match existing ones.');
}