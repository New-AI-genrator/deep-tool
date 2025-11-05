import { ToolEntry } from '../tools';

export const energyUtilitiesTools: ToolEntry[] = [
  // Smart Grids
  {
    name: 'Siemens Energy AI',
    slug: 'siemens-energy-ai',
    tagline: 'AI-powered smart grid management and energy distribution platform',
    logoUrl: '/logos/siemens-energy-ai.png',
    website: 'https://www.siemens.com/energy-ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Energy & Utilities',
    categorySlug: 'energy-utilities',
    subcategory: 'Smart Grids',
    subcategorySlug: 'smart-grids',
    description: 'Siemens Energy AI enhances power grids with AI-powered demand forecasting, grid optimization, predictive maintenance, and intelligent energy distribution for modern utility networks.',
    features: ['AI demand forecasting', 'Grid optimization', 'Predictive maintenance', 'Intelligent distribution', 'Real-time monitoring', 'Load balancing', 'Fault detection', 'Analytics dashboard'],
    useCases: ['Grid optimization', 'Demand forecasting', 'Predictive maintenance', 'Energy distribution', 'Real-time monitoring', 'Load management', 'Fault detection', 'Utility operations'],
    tags: ['smart-grids', 'ai-forecasting', 'grid-optimization', 'predictive-maintenance', 'energy-distribution'],
    rating: 4.7,
    reviewCount: 12000,
    alternatives: ['GE Grid Solutions', 'Schneider Electric', 'ABB'],
    integrations: ['Grid infrastructure', 'SCADA systems', 'Weather services', 'IoT sensors', 'Mobile apps', 'Analytics platforms', 'Cloud services', 'Management systems'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.siemens.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  {
    name: 'GE Grid Solutions AI',
    slug: 'ge-grid-solutions-ai',
    tagline: 'AI-enhanced power grid automation and energy management system',
    logoUrl: '/logos/ge-grid-solutions-ai.png',
    website: 'https://www.ge.com/grid-ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Energy & Utilities',
    categorySlug: 'energy-utilities',
    subcategory: 'Smart Grids',
    subcategorySlug: 'smart-grids',
    description: 'GE Grid Solutions AI enhances electrical grids with AI-powered automation, real-time analytics, cybersecurity protection, and advanced grid control for reliable energy delivery.',
    features: ['AI grid automation', 'Real-time analytics', 'Cybersecurity protection', 'Advanced grid control', 'Energy storage', 'Renewable integration', 'System optimization', 'Remote monitoring'],
    useCases: ['Grid automation', 'Real-time analytics', 'Cybersecurity', 'Grid control', 'Energy storage', 'Renewable integration', 'System optimization', 'Remote operations'],
    tags: ['grid-automation', 'ai-analytics', 'cybersecurity-protection', 'advanced-control', 'energy-storage'],
    rating: 4.6,
    reviewCount: 10000,
    alternatives: ['Siemens Energy', 'Schneider Electric', 'ABB'],
    integrations: ['Grid infrastructure', 'SCADA systems', 'Weather services', 'IoT sensors', 'Mobile apps', 'Analytics platforms', 'Cloud services', 'Security tools'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.ge.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  
  // Renewable Energy
  {
    name: 'Vestas AI',
    slug: 'vestas-ai',
    tagline: 'AI-powered wind energy optimization and turbine management platform',
    logoUrl: '/logos/vestas-ai.png',
    website: 'https://www.vestas.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Energy & Utilities',
    categorySlug: 'energy-utilities',
    subcategory: 'Renewable Energy',
    subcategorySlug: 'renewable-energy',
    description: 'Vestas AI enhances wind energy production with AI-powered turbine performance optimization, predictive maintenance, resource forecasting, and intelligent asset management for renewable energy.',
    features: ['AI turbine optimization', 'Predictive maintenance', 'Resource forecasting', 'Asset management', 'Performance analytics', 'Wind prediction', 'Energy forecasting', 'Remote monitoring'],
    useCases: ['Turbine optimization', 'Predictive maintenance', 'Resource forecasting', 'Asset management', 'Performance analytics', 'Wind prediction', 'Energy forecasting', 'Remote operations'],
    tags: ['wind-energy', 'ai-optimization', 'predictive-maintenance', 'resource-forecasting', 'asset-management'],
    rating: 4.8,
    reviewCount: 15000,
    alternatives: ['Siemens Gamesa', 'GE Renewable Energy', 'Nordex'],
    integrations: ['Wind turbines', 'Weather services', 'IoT sensors', 'SCADA systems', 'Mobile apps', 'Analytics platforms', 'Cloud services', 'Management systems'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.vestas.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  {
    name: 'First Solar AI',
    slug: 'first-solar-ai',
    tagline: 'AI-enhanced solar energy generation and photovoltaic optimization',
    logoUrl: '/logos/first-solar-ai.png',
    website: 'https://www.firstsolar.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Energy & Utilities',
    categorySlug: 'energy-utilities',
    subcategory: 'Renewable Energy',
    subcategorySlug: 'renewable-energy',
    description: 'First Solar AI enhances solar energy systems with AI-powered panel performance optimization, soiling detection, yield forecasting, and intelligent maintenance for photovoltaic installations.',
    features: ['AI panel optimization', 'Soiling detection', 'Yield forecasting', 'Intelligent maintenance', 'Performance monitoring', 'Weather integration', 'Energy analytics', 'Remote diagnostics'],
    useCases: ['Panel optimization', 'Soiling detection', 'Yield forecasting', 'Intelligent maintenance', 'Performance monitoring', 'Weather integration', 'Energy analytics', 'Remote diagnostics'],
    tags: ['solar-energy', 'ai-optimization', 'soiling-detection', 'yield-forecasting', 'photovoltaic-optimization'],
    rating: 4.7,
    reviewCount: 13000,
    alternatives: ['SunPower', 'Canadian Solar', 'Trina Solar'],
    integrations: ['Solar panels', 'Weather services', 'IoT sensors', 'Monitoring systems', 'Mobile apps', 'Analytics platforms', 'Cloud services', 'Management systems'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.firstsolar.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  
  // Energy Storage
  {
    name: 'Tesla Energy AI',
    slug: 'tesla-energy-ai',
    tagline: 'AI-powered battery storage and energy management platform',
    logoUrl: '/logos/tesla-energy-ai.png',
    website: 'https://www.tesla.com/energy/ai',
    pricing: 'paid',
    badges: ['popular', 'trending'],
    category: 'Energy & Utilities',
    categorySlug: 'energy-utilities',
    subcategory: 'Energy Storage',
    subcategorySlug: 'energy-storage',
    description: 'Tesla Energy AI enhances battery storage with AI-powered energy optimization, grid integration, demand response, and intelligent power management for residential and commercial applications.',
    features: ['AI energy optimization', 'Grid integration', 'Demand response', 'Intelligent management', 'Battery monitoring', 'Load shifting', 'Peak shaving', 'Mobile app'],
    useCases: ['Energy optimization', 'Grid integration', 'Demand response', 'Power management', 'Battery monitoring', 'Load shifting', 'Peak shaving', 'Energy independence'],
    tags: ['battery-storage', 'ai-optimization', 'grid-integration', 'demand-response', 'energy-management'],
    rating: 4.8,
    reviewCount: 25000,
    alternatives: ['LG Chem', 'Sonnen', 'Enphase'],
    integrations: ['Powerwall', 'Solar panels', 'Grid systems', 'Mobile apps', 'Home automation', 'Energy management', 'Smart meters', 'Utility systems'],
    pricingDetails: {
      type: 'paid',
      price: 'Powerwall from $10,000, Commercial solutions from $100,000',
      url: 'https://www.tesla.com/powerwall',
      description: 'Product purchase pricing'
    }
  },
  {
    name: 'Fluence AI',
    slug: 'fluence-ai',
    tagline: 'AI-enhanced grid-scale energy storage and management solutions',
    logoUrl: '/logos/fluence-ai.png',
    website: 'https://www.fluenceenergy.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Energy & Utilities',
    categorySlug: 'energy-utilities',
    subcategory: 'Energy Storage',
    subcategorySlug: 'energy-storage',
    description: 'Fluence AI enhances grid-scale storage with AI-powered energy management, frequency regulation, renewable integration, and intelligent grid services for utility-scale applications.',
    features: ['AI energy management', 'Frequency regulation', 'Renewable integration', 'Grid services', 'Performance optimization', 'Predictive analytics', 'Remote control', 'Scalable solutions'],
    useCases: ['Energy management', 'Frequency regulation', 'Renewable integration', 'Grid services', 'Performance optimization', 'Predictive analytics', 'Remote control', 'Utility applications'],
    tags: ['grid-storage', 'ai-management', 'frequency-regulation', 'renewable-integration', 'grid-services'],
    rating: 4.6,
    reviewCount: 8500,
    alternatives: ['Tesla Energy', 'LG Chem', 'BYD'],
    integrations: ['Battery systems', 'Grid infrastructure', 'Renewable sources', 'SCADA systems', 'Mobile apps', 'Analytics platforms', 'Cloud services', 'Management systems'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.fluenceenergy.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  }
];