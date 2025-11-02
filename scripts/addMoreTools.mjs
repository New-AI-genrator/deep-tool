#!/usr/bin/env node

/**
 * Script to add more tools to the directory
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Tool data to add
const newTools = [
  // Version Control Tools
  {
    name: 'Gitea',
    slug: 'gitea',
    tagline: 'Lightweight Git service that can run on your own server',
    logoUrl: '/logos/gitea.png',
    website: 'https://gitea.io',
    pricing: 'community-favorite',
    badges: ['community-favorite', 'trending'],
    category: 'Development & Engineering',
    categorySlug: 'development-engineering',
    subcategory: 'Version Control',
    subcategorySlug: 'version-control',
    description: 'Gitea is a lightweight Git service that can run on your own server. It\'s similar to GitHub, Bitbucket, and GitLab, but is open source and can be hosted yourself.',
    features: ['Git repository management', 'Code review', 'Issue tracking', 'Wiki support', 'Webhooks', 'LDAP integration', 'OAuth2 support', 'Docker support'],
    useCases: ['Self-hosted Git service', 'Private code repositories', 'Team collaboration', 'Open source projects', 'CI/CD integration', 'Code review workflows'],
    tags: ['git', 'version-control', 'self-hosted', 'open-source', 'code-review'],
    rating: 4.6,
    reviewCount: 3200,
    alternatives: ['GitHub', 'GitLab', 'Bitbucket'],
    integrations: ['Jenkins', 'Drone', 'Docker', 'LDAP', 'OAuth2'],
    pricingDetails: {
      type: 'community-favorite',
      price: 'Free open source',
      url: 'https://gitea.io/en-us/',
      description: 'Free and open source, self-hosted'
    }
  },
  {
    name: 'Phabricator',
    slug: 'phabricator',
    tagline: 'Open source collection of web applications for software development',
    logoUrl: '/logos/phabricator.png',
    website: 'https://phacility.com/phabricator/',
    pricing: 'community-favorite',
    badges: ['community-favorite', 'trending'],
    category: 'Development & Engineering',
    categorySlug: 'development-engineering',
    subcategory: 'Version Control',
    subcategorySlug: 'version-control',
    description: 'Phabricator is a collection of open source web applications that help software companies build better software. It includes applications for code review, repository hosting, bug tracking, and more.',
    features: ['Code review', 'Repository browsing', 'Bug tracking', 'Wiki', 'Task management', 'Continuous integration', 'Command line tools', 'Web interface'],
    useCases: ['Code review workflows', 'Bug tracking', 'Project management', 'Documentation', 'Team collaboration', 'Repository management', 'Continuous integration'],
    tags: ['code-review', 'bug-tracking', 'project-management', 'open-source', 'repository-management'],
    rating: 4.3,
    reviewCount: 1800,
    alternatives: ['GitHub', 'GitLab', 'Bitbucket'],
    integrations: ['Git', 'Mercurial', 'Subversion', 'Jenkins', 'Travis CI'],
    pricingDetails: {
      type: 'community-favorite',
      price: 'Free open source',
      url: 'https://github.com/phacility/phabricator',
      description: 'Free and open source'
    }
  },
  {
    name: 'RhodeCode',
    slug: 'rhodecode',
    tagline: 'Enterprise source code management platform',
    logoUrl: '/logos/rhodecode.png',
    website: 'https://rhodecode.com',
    pricing: 'enterprise',
    badges: ['enterprise', 'featured'],
    category: 'Development & Engineering',
    categorySlug: 'development-engineering',
    subcategory: 'Version Control',
    subcategorySlug: 'version-control',
    description: 'RhodeCode is an enterprise source code management platform that unifies Git, Mercurial, and Subversion repositories. It provides enterprise-grade security, compliance, and collaboration features.',
    features: ['Multi-VCS support', 'Enterprise security', 'Audit trails', 'Code review', 'Repository management', 'LDAP integration', 'SSO support', 'API access'],
    useCases: ['Enterprise Git management', 'Multi-VCS environments', 'Compliance requirements', 'Audit trails', 'Code review workflows', 'Repository security'],
    tags: ['git', 'mercurial', 'subversion', 'enterprise', 'code-review'],
    rating: 4.4,
    reviewCount: 900,
    alternatives: ['GitHub Enterprise', 'GitLab EE', 'Bitbucket Server'],
    integrations: ['LDAP', 'Active Directory', 'Jenkins', 'JIRA', 'Slack'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://rhodecode.com/pricing',
      description: 'Enterprise licensing with support'
    }
  },
  
  // DevOps Tools
  {
    name: 'Datadog',
    slug: 'datadog',
    tagline: 'Monitoring and analytics platform for cloud-scale applications',
    logoUrl: '/logos/datadog.png',
    website: 'https://www.datadoghq.com',
    pricing: 'paid',
    badges: ['popular', 'featured'],
    category: 'Development & Engineering',
    categorySlug: 'development-engineering',
    subcategory: 'DevOps',
    subcategorySlug: 'devops',
    description: 'Datadog is a monitoring and analytics platform for cloud-scale applications, providing unified DevOps monitoring from infrastructure to applications.',
    features: ['Infrastructure monitoring', 'Application performance monitoring', 'Log management', 'User experience monitoring', 'Synthetic monitoring', 'Security monitoring', 'APM', 'Dashboarding'],
    useCases: ['Cloud infrastructure monitoring', 'Microservices monitoring', 'Container monitoring', 'Log analysis', 'Performance optimization', 'Incident response', 'Business metrics tracking'],
    tags: ['monitoring', 'devops', 'cloud', 'apm', 'infrastructure'],
    rating: 4.7,
    reviewCount: 12500,
    alternatives: ['New Relic', 'AppDynamics', 'Prometheus'],
    integrations: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker', 'Nginx', 'MySQL'],
    pricingDetails: {
      type: 'paid',
      price: 'From $15/host/month',
      url: 'https://www.datadoghq.com/pricing/',
      description: 'Tiered pricing based on infrastructure and features'
    }
  },
  {
    name: 'New Relic',
    slug: 'new-relic',
    tagline: 'Observability platform built to help engineers create more perfect software',
    logoUrl: '/logos/new-relic.png',
    website: 'https://newrelic.com',
    pricing: 'freemium',
    badges: ['popular', 'featured'],
    category: 'Development & Engineering',
    categorySlug: 'development-engineering',
    subcategory: 'DevOps',
    subcategorySlug: 'devops',
    description: 'New Relic is an observability platform that helps engineers create more perfect software through full-stack visibility and AI-powered analytics.',
    features: ['Full-stack observability', 'AI-powered analytics', 'Real user monitoring', 'Infrastructure monitoring', 'APM', 'Log management', 'Synthetic monitoring', 'Mobile monitoring'],
    useCases: ['Application performance monitoring', 'Infrastructure monitoring', 'User experience optimization', 'Error tracking', 'Capacity planning', 'Digital business analytics'],
    tags: ['apm', 'observability', 'monitoring', 'devops', 'analytics'],
    rating: 4.6,
    reviewCount: 15200,
    alternatives: ['Datadog', 'AppDynamics', 'Dynatrace'],
    integrations: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker', 'Nginx', 'Apache'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free tier available, paid plans from $144/month',
      url: 'https://newrelic.com/pricing',
      description: 'Free tier with paid upgrades for advanced features'
    }
  },
  {
    name: 'Grafana',
    slug: 'grafana',
    tagline: 'Open source analytics and interactive visualization web application',
    logoUrl: '/logos/grafana.png',
    website: 'https://grafana.com',
    pricing: 'freemium',
    badges: ['popular', 'community-favorite'],
    category: 'Development & Engineering',
    categorySlug: 'development-engineering',
    subcategory: 'DevOps',
    subcategorySlug: 'devops',
    description: 'Grafana is an open source analytics and interactive visualization web application. It provides charts, graphs, and alerts when connected to supported data sources.',
    features: ['Dashboard creation', 'Data visualization', 'Alerting', 'Plugin architecture', 'Multi-data source support', 'Team collaboration', 'Sharing capabilities', 'Mobile support'],
    useCases: ['Infrastructure monitoring', 'Application performance monitoring', 'Business metrics tracking', 'IoT data visualization', 'Log analysis', 'Time series data visualization'],
    tags: ['monitoring', 'visualization', 'dashboard', 'open-source', 'time-series'],
    rating: 4.8,
    reviewCount: 22000,
    alternatives: ['Kibana', 'Prometheus', 'Datadog'],
    integrations: ['Prometheus', 'InfluxDB', 'Elasticsearch', 'AWS CloudWatch', 'Azure Monitor', 'Google Cloud Monitoring'],
    pricingDetails: {
      type: 'freemium',
      price: 'Open source free, Grafana Cloud from $9/month',
      url: 'https://grafana.com/pricing/',
      description: 'Open source version free, cloud service with paid tiers'
    }
  }
];

// Function to escape quotes in strings
function escapeQuotes(str) {
  return str.replace(/'/g, "\\'");
}

// Function to convert tool object to TypeScript format
function toolToTypeScript(tool) {
  // Format features array
  const features = tool.features.map((feature) => `        '${escapeQuotes(feature)}'`).join(',\n');
  
  // Format useCases array
  const useCases = tool.useCases.map((useCase) => `        '${escapeQuotes(useCase)}'`).join(',\n');
  
  // Format tags array
  const tags = tool.tags ? tool.tags.map((tag) => `'${escapeQuotes(tag)}'`).join(', ') : '';
  
  // Format badges array
  const badges = tool.badges ? tool.badges.map((badge) => `'${escapeQuotes(badge)}'`).join(', ') : '';
  
  // Format alternatives array
  const alternatives = tool.alternatives ? tool.alternatives.map((alt) => `'${escapeQuotes(alt)}'`).join(', ') : '';
  
  // Format integrations array
  const integrations = tool.integrations ? tool.integrations.map((integration) => `'${escapeQuotes(integration)}'`).join(', ') : '';
  
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
      reviewCount: ${tool.reviewCount}${tool.alternatives ? `,
      alternatives: [${alternatives}]` : ''}${tool.integrations ? `,
      integrations: [${integrations}]` : ''}${tool.pricingDetails ? `,
      pricingDetails: {
        type: '${escapeQuotes(tool.pricingDetails.type)}',
        price: '${escapeQuotes(tool.pricingDetails.price)}',
        url: '${escapeQuotes(tool.pricingDetails.url)}',
        description: '${escapeQuotes(tool.pricingDetails.description)}'
      }` : ''}
    }`;
}

// Read the tools.ts file
const toolsFilePath = path.join(__dirname, '../data/tools.ts');
let toolsContent = fs.readFileSync(toolsFilePath, 'utf8');

// Group tools by subcategory
const toolsBySubcategory = {};

newTools.forEach((tool) => {
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
    let currentIndex = toolsContent.indexOf('\n  ]', subcategoryIndex);
    
    if (currentIndex !== -1) {
      // Insert the new tools before the closing bracket
      const toolEntries = toolsToAdd.map(tool => toolToTypeScript(tool)).join(',\n');
      const beforeInsert = toolsContent.substring(0, currentIndex);
      const afterInsert = toolsContent.substring(currentIndex);
      toolsContent = beforeInsert + ',\n' + toolEntries + afterInsert;
      toolsAdded += toolsToAdd.length;
      console.log(`  Successfully added ${toolsToAdd.length} tools`);
    } else {
      console.log(`  Could not find proper array structure for subcategory ${subcategorySlug}`);
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