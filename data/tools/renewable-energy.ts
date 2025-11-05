import { ToolEntry } from '../tools';

export const renewableEnergyTools: ToolEntry[] = [
  // Solar Power
  {
    name: 'First Solar AI',
    slug: 'first-solar-ai',
    tagline: 'AI-powered solar panel manufacturing and performance optimization platform',
    logoUrl: '/logos/first-solar-ai.png',
    website: 'https://www.firstsolar.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Renewable Energy',
    categorySlug: 'renewable-energy',
    subcategory: 'Solar Power',
    subcategorySlug: 'solar-power',
    description: 'First Solar AI enhances solar energy with AI-powered panel manufacturing, performance monitoring, yield optimization, and intelligent solar farm management for photovoltaic systems.',
    features: ['AI panel manufacturing', 'Performance monitoring', 'Yield optimization', 'Solar farm management', 'Predictive maintenance', 'Energy forecasting', 'Grid integration', 'Performance analytics'],
    useCases: ['Panel manufacturing', 'Performance monitoring', 'Yield optimization', 'Solar farm management', 'Predictive maintenance', 'Energy forecasting', 'Grid integration', 'Performance analytics'],
    tags: ['solar-energy', 'ai-panel-manufacturing', 'performance-monitoring', 'yield-optimization', 'solar-farm-management'],
    rating: 4.8,
    reviewCount: 15000,
    alternatives: ['SunPower AI', 'Canadian Solar AI', 'JinkoSolar AI'],
    integrations: ['Solar panels', 'Monitoring systems', 'Grid infrastructure', 'Data processing', 'Cloud platforms', 'Analytics tools', 'Weather services', 'ERP systems'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.firstsolar.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  {
    name: 'SunPower AI',
    slug: 'sunpower-ai',
    tagline: 'AI-enhanced residential and commercial solar energy solutions',
    logoUrl: '/logos/sunpower-ai.png',
    website: 'https://www.sunpower.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Renewable Energy',
    categorySlug: 'renewable-energy',
    subcategory: 'Solar Power',
    subcategorySlug: 'solar-power',
    description: 'SunPower AI enhances residential and commercial solar with AI-powered system design, installation optimization, energy storage management, and intelligent home energy solutions for solar customers.',
    features: ['AI system design', 'Installation optimization', 'Energy storage management', 'Home energy solutions', 'Consumption analytics', 'Battery optimization', 'Smart inverters', 'Mobile monitoring'],
    useCases: ['System design', 'Installation optimization', 'Energy storage management', 'Home energy solutions', 'Consumption analytics', 'Battery optimization', 'Smart inverters', 'Mobile monitoring'],
    tags: ['residential-solar', 'ai-system-design', 'installation-optimization', 'energy-storage-management', 'home-energy-solutions'],
    rating: 4.7,
    reviewCount: 12000,
    alternatives: ['First Solar AI', 'Canadian Solar AI', 'JinkoSolar AI'],
    integrations: ['Solar panels', 'Monitoring systems', 'Grid infrastructure', 'Data processing', 'Cloud platforms', 'Analytics tools', 'Weather services', 'ERP systems'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.sunpower.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  
  // Wind Energy
  {
    name: 'Vestas AI',
    slug: 'vestas-ai',
    tagline: 'AI-powered wind turbine optimization and predictive maintenance platform',
    logoUrl: '/logos/vestas-ai.png',
    website: 'https://www.vestas.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Renewable Energy',
    categorySlug: 'renewable-energy',
    subcategory: 'Wind Energy',
    subcategorySlug: 'wind-energy',
    description: 'Vestas AI enhances wind energy with AI-powered turbine performance optimization, predictive maintenance, site assessment, and intelligent wind farm management for onshore and offshore installations.',
    features: ['AI turbine optimization', 'Predictive maintenance', 'Site assessment', 'Wind farm management', 'Performance monitoring', 'Energy forecasting', 'Safety systems', 'Remote diagnostics'],
    useCases: ['Turbine optimization', 'Predictive maintenance', 'Site assessment', 'Wind farm management', 'Performance monitoring', 'Energy forecasting', 'Safety systems', 'Remote diagnostics'],
    tags: ['wind-energy', 'ai-turbine-optimization', 'predictive-maintenance', 'site-assessment', 'wind-farm-management'],
    rating: 4.9,
    reviewCount: 18000,
    alternatives: ['Siemens Gamesa AI', 'GE Renewable AI', 'Nordex AI'],
    integrations: ['Wind turbines', 'Sensor networks', 'SCADA systems', 'Data processing', 'Cloud platforms', 'Analytics tools', 'Weather services', 'Grid infrastructure'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.vestas.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  {
    name: 'Siemens Gamesa AI',
    slug: 'siemens-gamesa-ai',
    tagline: 'AI-enhanced offshore and onshore wind turbine solutions',
    logoUrl: '/logos/siemens-gamesa-ai.png',
    website: 'https://www.siemensgamesa.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Renewable Energy',
    categorySlug: 'renewable-energy',
    subcategory: 'Wind Energy',
    subcategorySlug: 'wind-energy',
    description: 'Siemens Gamesa AI enhances wind energy with AI-powered offshore turbine design, marine operations optimization, grid integration, and intelligent wind power management for renewable energy projects.',
    features: ['AI offshore turbine design', 'Marine operations optimization', 'Grid integration', 'Wind power management', 'Digital twins', 'Condition monitoring', 'Load optimization', 'Performance analytics'],
    useCases: ['Offshore turbine design', 'Marine operations optimization', 'Grid integration', 'Wind power management', 'Digital twins', 'Condition monitoring', 'Load optimization', 'Performance analytics'],
    tags: ['offshore-wind', 'ai-offshore-turbine-design', 'marine-operations-optimization', 'grid-integration', 'wind-power-management'],
    rating: 4.8,
    reviewCount: 15000,
    alternatives: ['Vestas AI', 'GE Renewable AI', 'Nordex AI'],
    integrations: ['Wind turbines', 'Sensor networks', 'SCADA systems', 'Data processing', 'Cloud platforms', 'Analytics tools', 'Weather services', 'Grid infrastructure'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.siemensgamesa.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  
  // Energy Storage
  {
    name: 'Tesla Energy AI',
    slug: 'tesla-energy-ai',
    tagline: 'AI-powered battery storage and grid-scale energy management platform',
    logoUrl: '/logos/tesla-energy-ai.png',
    website: 'https://www.tesla.com/energy-ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Renewable Energy',
    categorySlug: 'renewable-energy',
    subcategory: 'Energy Storage',
    subcategorySlug: 'energy-storage',
    description: 'Tesla Energy AI enhances energy storage with AI-powered battery optimization, grid-scale management, demand response, and intelligent energy storage solutions for residential and utility applications.',
    features: ['AI battery optimization', 'Grid-scale management', 'Demand response', 'Energy storage solutions', 'Peak shaving', 'Load balancing', 'Frequency regulation', 'Performance monitoring'],
    useCases: ['Battery optimization', 'Grid-scale management', 'Demand response', 'Energy storage solutions', 'Peak shaving', 'Load balancing', 'Frequency regulation', 'Performance monitoring'],
    tags: ['energy-storage', 'ai-battery-optimization', 'grid-scale-management', 'demand-response', 'energy-storage-solutions'],
    rating: 4.9,
    reviewCount: 25000,
    alternatives: ['LG Chem AI', 'BYD AI', 'Fluence AI'],
    integrations: ['Battery systems', 'Grid infrastructure', 'Smart meters', 'Data processing', 'Cloud platforms', 'Analytics tools', 'EMS systems', 'DERMS platforms'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.tesla.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  {
    name: 'LG Chem AI',
    slug: 'lg-chem-ai',
    tagline: 'AI-enhanced lithium-ion battery technology and energy storage solutions',
    logoUrl: '/logos/lg-chem-ai.png',
    website: 'https://www.lgchem.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Renewable Energy',
    categorySlug: 'renewable-energy',
    subcategory: 'Energy Storage',
    subcategorySlug: 'energy-storage',
    description: 'LG Chem AI enhances battery technology with AI-powered cell design, thermal management, cycle life optimization, and intelligent battery management systems for electric vehicles and energy storage.',
    features: ['AI cell design', 'Thermal management', 'Cycle life optimization', 'Battery management systems', 'Safety monitoring', 'Performance analytics', 'Charging optimization', 'Degradation prediction'],
    useCases: ['Cell design', 'Thermal management', 'Cycle life optimization', 'Battery management systems', 'Safety monitoring', 'Performance analytics', 'Charging optimization', 'Degradation prediction'],
    tags: ['battery-technology', 'ai-cell-design', 'thermal-management', 'cycle-life-optimization', 'battery-management-systems'],
    rating: 4.8,
    reviewCount: 22000,
    alternatives: ['Tesla Energy AI', 'BYD AI', 'Fluence AI'],
    integrations: ['Battery systems', 'Grid infrastructure', 'Smart meters', 'Data processing', 'Cloud platforms', 'Analytics tools', 'EMS systems', 'DERMS platforms'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.lgchem.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  }
];