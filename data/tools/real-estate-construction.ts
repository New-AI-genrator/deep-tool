import { ToolEntry } from '../tools';

export const realEstateConstructionTools: ToolEntry[] = [
  // Property Management
  {
    name: 'AppFolio AI',
    slug: 'appfolio-ai',
    tagline: 'AI-powered property management and tenant screening platform',
    logoUrl: '/logos/appfolio-ai.png',
    website: 'https://www.appfolio.com/ai',
    pricing: 'paid',
    badges: ['popular', 'enterprise'],
    category: 'Real Estate & Construction',
    categorySlug: 'real-estate-construction',
    subcategory: 'Property Management',
    subcategorySlug: 'property-management',
    description: 'AppFolio AI enhances property management with AI-powered tenant screening, predictive maintenance, automated rent collection, and intelligent lease management.',
    features: ['AI tenant screening', 'Predictive maintenance', 'Automated rent collection', 'Lease management', 'Financial reporting', 'Work order management', 'Tenant portal', 'Mobile app'],
    useCases: ['Residential property management', 'Commercial property management', 'Tenant screening', 'Rent collection', 'Maintenance scheduling', 'Financial reporting', 'Lease management', 'Portfolio optimization'],
    tags: ['property-management', 'ai-screening', 'tenant-management', 'rent-collection', 'maintenance-optimization'],
    rating: 4.6,
    reviewCount: 12000,
    alternatives: ['Buildium', 'Rent Manager', 'Yardi'],
    integrations: ['QuickBooks', 'Xero', 'Bank of America', 'Chase', 'Plaid', 'Twilio', 'DocuSign', 'Google Maps'],
    pricingDetails: {
      type: 'paid',
      price: 'Starting at $10/property/month, Custom enterprise pricing',
      url: 'https://www.appfolio.com/pricing',
      description: 'Tiered pricing based on property count and features'
    }
  },
  {
    name: 'Buildium AI',
    slug: 'buildium-ai',
    tagline: 'AI-enhanced property management software for landlords and managers',
    logoUrl: '/logos/buildium-ai.png',
    website: 'https://www.buildium.com/ai',
    pricing: 'paid',
    badges: ['popular', 'trending'],
    category: 'Real Estate & Construction',
    categorySlug: 'real-estate-construction',
    subcategory: 'Property Management',
    subcategorySlug: 'property-management',
    description: 'Buildium AI enhances property management software with AI-powered financial insights, tenant communication automation, maintenance optimization, and portfolio analytics.',
    features: ['AI financial insights', 'Tenant communication automation', 'Maintenance optimization', 'Portfolio analytics', 'Accounting integration', 'Online payments', 'Maintenance tracking', 'Reporting dashboard'],
    useCases: ['Multi-family property management', 'Single-family rentals', 'HOA management', 'Commercial properties', 'Financial tracking', 'Tenant communication', 'Maintenance management', 'Portfolio analysis'],
    tags: ['property-software', 'ai-analytics', 'tenant-communication', 'financial-insights', 'maintenance-tracking'],
    rating: 4.5,
    reviewCount: 9500,
    alternatives: ['AppFolio', 'Rent Manager', 'Yardi'],
    integrations: ['QuickBooks', 'Xero', 'Chase', 'Wells Fargo', 'Twilio', 'DocuSign', 'Google Maps', 'MLS'],
    pricingDetails: {
      type: 'paid',
      price: 'Starting at $249/month for 250 units, Custom pricing for larger portfolios',
      url: 'https://www.buildium.com/pricing',
      description: 'Pricing based on unit count and features'
    }
  },
  
  // Construction Planning
  {
    name: 'Autodesk AI',
    slug: 'autodesk-ai',
    tagline: 'AI-powered construction design and project planning platform',
    logoUrl: '/logos/autodesk-ai.png',
    website: 'https://www.autodesk.com/ai',
    pricing: 'freemium',
    badges: ['popular', 'enterprise'],
    category: 'Real Estate & Construction',
    categorySlug: 'real-estate-construction',
    subcategory: 'Construction Planning',
    subcategorySlug: 'construction-planning',
    description: 'Autodesk AI enhances construction design with AI-powered generative design, project optimization, risk assessment, and collaborative planning tools.',
    features: ['AI generative design', 'Project optimization', 'Risk assessment', 'Collaborative planning', '3D modeling', 'BIM integration', 'Cloud collaboration', 'Mobile access'],
    useCases: ['Architectural design', 'Engineering projects', 'Construction planning', 'Project collaboration', 'Risk assessment', 'Resource optimization', 'Timeline management', 'Budget planning'],
    tags: ['construction-design', 'ai-planning', 'bim-software', 'project-optimization', 'risk-assessment'],
    rating: 4.7,
    reviewCount: 25000,
    alternatives: ['Trimble', 'Bentley Systems', 'Graphisoft'],
    integrations: ['Revit', 'AutoCAD', 'Navisworks', 'BIM 360', 'Microsoft Project', 'Primavera', 'Procore', 'Bluebeam'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free trial available, Individual from $220/month, Business from $440/month, Enterprise pricing available',
      url: 'https://www.autodesk.com/subscription',
      description: 'Different tiers based on user type and features'
    }
  },
  {
    name: 'Procore AI',
    slug: 'procore-ai',
    tagline: 'AI-enhanced construction project management and collaboration platform',
    logoUrl: '/logos/procore-ai.png',
    website: 'https://www.procore.com/ai',
    pricing: 'paid',
    badges: ['enterprise', 'popular'],
    category: 'Real Estate & Construction',
    categorySlug: 'real-estate-construction',
    subcategory: 'Construction Planning',
    subcategorySlug: 'construction-planning',
    description: 'Procore AI enhances construction project management with AI-powered scheduling optimization, resource allocation, quality control, and safety monitoring.',
    features: ['AI scheduling optimization', 'Resource allocation', 'Quality control', 'Safety monitoring', 'Document management', 'Financial tracking', 'Subcontractor management', 'Mobile platform'],
    useCases: ['Construction project management', 'Resource planning', 'Quality assurance', 'Safety compliance', 'Document management', 'Financial tracking', 'Subcontractor coordination', 'Timeline optimization'],
    tags: ['construction-management', 'ai-scheduling', 'resource-allocation', 'quality-control', 'safety-monitoring'],
    rating: 4.8,
    reviewCount: 18000,
    alternatives: ['BuildTools', 'CoConstruct', 'Fieldwire'],
    integrations: ['QuickBooks', 'Sage', 'Oracle', 'Microsoft Project', 'AutoCAD', 'Bluebeam', 'Box', 'Google Drive'],
    pricingDetails: {
      type: 'paid',
      price: 'Custom enterprise pricing',
      url: 'https://www.procore.com/pricing',
      description: 'Enterprise solution with custom pricing'
    }
  },
  
  // Real Estate Investment
  {
    name: 'Reonomy AI',
    slug: 'reonomy-ai',
    tagline: 'AI-powered commercial real estate data and investment platform',
    logoUrl: '/logos/reonomy-ai.png',
    website: 'https://reonomy.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Real Estate & Construction',
    categorySlug: 'real-estate-construction',
    subcategory: 'Real Estate Investment',
    subcategorySlug: 'real-estate-investment',
    description: 'Reonomy AI enhances commercial real estate investment with AI-powered property data, market analysis, investment opportunity identification, and portfolio optimization.',
    features: ['AI property data', 'Market analysis', 'Investment identification', 'Portfolio optimization', 'Lead generation', 'Property valuation', 'Risk assessment', 'Reporting tools'],
    useCases: ['Commercial real estate investment', 'Property research', 'Market analysis', 'Investment opportunity identification', 'Portfolio management', 'Lead generation', 'Property valuation', 'Risk assessment'],
    tags: ['commercial-real-estate', 'ai-analytics', 'investment-platform', 'property-data', 'market-analysis'],
    rating: 4.6,
    reviewCount: 7500,
    alternatives: ['CoStar', 'LoopNet', 'CREXi'],
    integrations: ['Salesforce', 'HubSpot', 'Outlook', 'Google Workspace', 'Yardi', 'RealPage', 'MRI Software', 'Tableau'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://reonomy.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  {
    name: 'Realtor.com AI',
    slug: 'realtor-com-ai',
    tagline: 'AI-enhanced residential real estate search and investment platform',
    logoUrl: '/logos/realtor-com-ai.png',
    website: 'https://www.realtor.com/ai',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Real Estate & Construction',
    categorySlug: 'real-estate-construction',
    subcategory: 'Real Estate Investment',
    subcategorySlug: 'real-estate-investment',
    description: 'Realtor.com AI enhances residential real estate search with AI-powered home valuation, neighborhood insights, investment analysis, and personalized property recommendations.',
    features: ['AI home valuation', 'Neighborhood insights', 'Investment analysis', 'Personalized recommendations', 'Market trends', 'Property alerts', 'Virtual tours', 'Mobile app'],
    useCases: ['Home buying', 'Home selling', 'Real estate investment', 'Market research', 'Neighborhood analysis', 'Property valuation', 'Investment planning', 'Portfolio management'],
    tags: ['residential-real-estate', 'ai-valuation', 'property-search', 'investment-analysis', 'neighborhood-insights'],
    rating: 4.7,
    reviewCount: 35000,
    alternatives: ['Zillow', 'Redfin', 'Trulia'],
    integrations: ['Google Maps', 'Apple Maps', 'Facebook', 'Twitter', 'Instagram', 'Mortgage calculators', 'School districts', 'Crime data'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free for basic search, Premium features from $49.99/month',
      url: 'https://www.realtor.com/premium',
      description: 'Free basic service with premium subscription options'
    }
  }
];