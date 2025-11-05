import { ToolEntry } from '../tools';

export const governmentPublicSectorTools: ToolEntry[] = [
  // Public Safety
  {
    name: 'Palantir Gotham AI',
    slug: 'palantir-gotham-ai',
    tagline: 'AI-powered public safety and law enforcement analytics platform',
    logoUrl: '/logos/palantir-gotham-ai.png',
    website: 'https://www.palantir.com/gotham-ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Government & Public Sector',
    categorySlug: 'government-public-sector',
    subcategory: 'Public Safety',
    subcategorySlug: 'public-safety',
    description: 'Palantir Gotham AI enhances public safety with AI-powered data integration, predictive policing, emergency response coordination, and comprehensive law enforcement analytics for government agencies.',
    features: ['AI data integration', 'Predictive policing', 'Emergency response', 'Law enforcement analytics', 'Real-time monitoring', 'Incident management', 'Resource allocation', 'Collaboration tools'],
    useCases: ['Data integration', 'Predictive policing', 'Emergency response', 'Law enforcement analytics', 'Real-time monitoring', 'Incident management', 'Resource allocation', 'Inter-agency collaboration'],
    tags: ['public-safety', 'ai-analytics', 'predictive-policing', 'emergency-response', 'law-enforcement'],
    rating: 4.6,
    reviewCount: 8500,
    alternatives: ['IBM i2', 'SAS Public Safety', 'Motorola Solutions'],
    integrations: ['Law enforcement systems', 'Emergency services', 'Database systems', 'GIS mapping', 'Mobile apps', 'Analytics platforms', 'Cloud services', 'Communication systems'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.palantir.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  {
    name: 'IBM i2 AI',
    slug: 'ibm-i2-ai',
    tagline: 'AI-enhanced intelligence analysis and public security platform',
    logoUrl: '/logos/ibm-i2-ai.png',
    website: 'https://www.ibm.com/i2-ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Government & Public Sector',
    categorySlug: 'government-public-sector',
    subcategory: 'Public Safety',
    subcategorySlug: 'public-safety',
    description: 'IBM i2 AI enhances intelligence operations with AI-powered data analysis, pattern recognition, threat assessment, and collaborative investigation tools for public safety agencies.',
    features: ['AI data analysis', 'Pattern recognition', 'Threat assessment', 'Investigation tools', 'Link analysis', 'Visualization tools', 'Reporting capabilities', 'Integration platform'],
    useCases: ['Intelligence analysis', 'Pattern recognition', 'Threat assessment', 'Investigation support', 'Link analysis', 'Data visualization', 'Report generation', 'Collaborative investigations'],
    tags: ['intelligence-analysis', 'ai-pattern-recognition', 'threat-assessment', 'investigation-tools', 'link-analysis'],
    rating: 4.5,
    reviewCount: 7500,
    alternatives: ['Palantir Gotham', 'SAS Public Safety', 'Motorola Solutions'],
    integrations: ['Law enforcement systems', 'Intelligence databases', 'GIS mapping', 'Mobile apps', 'Analytics platforms', 'Cloud services', 'Communication systems', 'Investigation tools'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.ibm.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  
  // Civic Services
  {
    name: 'Microsoft CityNext AI',
    slug: 'microsoft-citynext-ai',
    tagline: 'AI-powered smart city and civic service platform',
    logoUrl: '/logos/microsoft-citynext-ai.png',
    website: 'https://www.microsoft.com/citynext-ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Government & Public Sector',
    categorySlug: 'government-public-sector',
    subcategory: 'Civic Services',
    subcategorySlug: 'civic-services',
    description: 'Microsoft CityNext AI enhances civic services with AI-powered urban planning, citizen engagement, service delivery optimization, and smart city infrastructure management.',
    features: ['AI urban planning', 'Citizen engagement', 'Service optimization', 'Smart infrastructure', 'Data analytics', 'Mobile services', 'Collaboration tools', 'Reporting dashboard'],
    useCases: ['Urban planning', 'Citizen engagement', 'Service optimization', 'Smart infrastructure', 'Data analytics', 'Mobile services', 'Collaboration', 'Performance reporting'],
    tags: ['smart-city', 'ai-urban-planning', 'citizen-engagement', 'service-optimization', 'smart-infrastructure'],
    rating: 4.7,
    reviewCount: 12000,
    alternatives: ['Cisco Smart+Connected', 'Siemens Digital City', 'IBM Smarter Cities'],
    integrations: ['City infrastructure', 'IoT sensors', 'Mobile apps', 'Analytics platforms', 'Cloud services', 'Communication systems', 'Database systems', 'GIS mapping'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.microsoft.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  {
    name: 'Cisco Smart+Connected AI',
    slug: 'cisco-smart-connected-ai',
    tagline: 'AI-enhanced urban infrastructure and community services platform',
    logoUrl: '/logos/cisco-smart-connected-ai.png',
    website: 'https://www.cisco.com/smart-connected-ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Government & Public Sector',
    categorySlug: 'government-public-sector',
    subcategory: 'Civic Services',
    subcategorySlug: 'civic-services',
    description: 'Cisco Smart+Connected AI enhances community services with AI-powered network infrastructure, digital inclusion, public Wi-Fi, and intelligent urban service delivery solutions.',
    features: ['AI network infrastructure', 'Digital inclusion', 'Public Wi-Fi', 'Urban service delivery', 'Community engagement', 'Data security', 'Scalable solutions', 'Integration platform'],
    useCases: ['Network infrastructure', 'Digital inclusion', 'Public Wi-Fi', 'Urban service delivery', 'Community engagement', 'Data security', 'Scalable deployments', 'Service integration'],
    tags: ['urban-infrastructure', 'ai-networking', 'digital-inclusion', 'public-wifi', 'community-services'],
    rating: 4.6,
    reviewCount: 10000,
    alternatives: ['Microsoft CityNext', 'Siemens Digital City', 'IBM Smarter Cities'],
    integrations: ['City infrastructure', 'IoT sensors', 'Mobile apps', 'Analytics platforms', 'Cloud services', 'Communication systems', 'Database systems', 'GIS mapping'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.cisco.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  
  // Government Operations
  {
    name: 'Salesforce Government Cloud AI',
    slug: 'salesforce-government-cloud-ai',
    tagline: 'AI-powered constituent services and government operations platform',
    logoUrl: '/logos/salesforce-government-cloud-ai.png',
    website: 'https://www.salesforce.com/government-cloud-ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Government & Public Sector',
    categorySlug: 'government-public-sector',
    subcategory: 'Government Operations',
    subcategorySlug: 'government-operations',
    description: 'Salesforce Government Cloud AI enhances government operations with AI-powered constituent engagement, case management, regulatory compliance, and public service delivery optimization.',
    features: ['AI constituent engagement', 'Case management', 'Regulatory compliance', 'Service delivery', 'Workflow automation', 'Data analytics', 'Collaboration tools', 'Reporting dashboard'],
    useCases: ['Constituent engagement', 'Case management', 'Regulatory compliance', 'Service delivery', 'Workflow automation', 'Data analytics', 'Collaboration', 'Performance reporting'],
    tags: ['government-operations', 'ai-engagement', 'case-management', 'regulatory-compliance', 'service-delivery'],
    rating: 4.8,
    reviewCount: 15000,
    alternatives: ['SAP for Public Sector', 'Oracle Government', 'Tyler Technologies'],
    integrations: ['Government systems', 'Database systems', 'Mobile apps', 'Analytics platforms', 'Cloud services', 'Communication systems', 'Document management', 'Workflow systems'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.salesforce.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  {
    name: 'SAP for Public Sector AI',
    slug: 'sap-public-sector-ai',
    tagline: 'AI-enhanced public sector ERP and administrative services platform',
    logoUrl: '/logos/sap-public-sector-ai.png',
    website: 'https://www.sap.com/public-sector-ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Government & Public Sector',
    categorySlug: 'government-public-sector',
    subcategory: 'Government Operations',
    subcategorySlug: 'government-operations',
    description: 'SAP for Public Sector AI enhances administrative operations with AI-powered financial management, human resources, procurement, and integrated public sector ERP solutions.',
    features: ['AI financial management', 'Human resources', 'Procurement', 'ERP integration', 'Budget planning', 'Performance analytics', 'Compliance management', 'Reporting tools'],
    useCases: ['Financial management', 'Human resources', 'Procurement', 'ERP integration', 'Budget planning', 'Performance analytics', 'Compliance management', 'Administrative operations'],
    tags: ['public-sector-erp', 'ai-financial-management', 'human-resources', 'procurement', 'budget-planning'],
    rating: 4.7,
    reviewCount: 13000,
    alternatives: ['Salesforce Government Cloud', 'Oracle Government', 'Tyler Technologies'],
    integrations: ['Government systems', 'Database systems', 'Mobile apps', 'Analytics platforms', 'Cloud services', 'Communication systems', 'Document management', 'Workflow systems'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.sap.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  }
];