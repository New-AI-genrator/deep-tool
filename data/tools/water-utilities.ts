import { ToolEntry } from '../tools';

export const waterUtilitiesTools: ToolEntry[] = [
  // Water Treatment
  {
    name: 'Xylem AI',
    slug: 'xylem-ai',
    tagline: 'AI-powered water treatment and purification optimization platform',
    logoUrl: '/logos/xylem-ai.png',
    website: 'https://www.xylem.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Water & Utilities',
    categorySlug: 'water-utilities',
    subcategory: 'Water Treatment',
    subcategorySlug: 'water-treatment',
    description: 'Xylem AI enhances water treatment with AI-powered purification optimization, contaminant detection, quality monitoring, and intelligent water treatment plant management for municipal and industrial applications.',
    features: ['AI purification optimization', 'Contaminant detection', 'Quality monitoring', 'Plant management', 'Process automation', 'Energy efficiency', 'Chemical optimization', 'Predictive maintenance'],
    useCases: ['Water purification', 'Contaminant detection', 'Quality monitoring', 'Plant management', 'Process automation', 'Energy efficiency', 'Chemical optimization', 'Predictive maintenance'],
    tags: ['water-treatment', 'ai-purification', 'contaminant-detection', 'quality-monitoring', 'plant-management'],
    rating: 4.7,
    reviewCount: 9500,
    alternatives: ['Evoqua Water', 'Suez Water', 'Veolia'],
    integrations: ['Treatment systems', 'Sensor networks', 'SCADA systems', 'Laboratory equipment', 'Data processing', 'Cloud platforms', 'Analytics tools', 'Control systems'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.xylem.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  {
    name: 'Evoqua Water AI',
    slug: 'evoqua-water-ai',
    tagline: 'AI-enhanced industrial water treatment and recycling solutions',
    logoUrl: '/logos/evoqua-water-ai.png',
    website: 'https://www.evoqua.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Water & Utilities',
    categorySlug: 'water-utilities',
    subcategory: 'Water Treatment',
    subcategorySlug: 'water-treatment',
    description: 'Evoqua Water AI enhances industrial water management with AI-powered treatment processes, membrane filtration optimization, chemical dosing control, and intelligent water recycling for manufacturing operations.',
    features: ['AI treatment processes', 'Membrane optimization', 'Chemical dosing control', 'Water recycling', 'Process monitoring', 'Quality assurance', 'Energy management', 'Performance analytics'],
    useCases: ['Industrial treatment', 'Membrane filtration', 'Chemical dosing', 'Water recycling', 'Process monitoring', 'Quality assurance', 'Energy management', 'Performance analytics'],
    tags: ['industrial-water-treatment', 'ai-membrane-optimization', 'chemical-dosing', 'water-recycling', 'process-monitoring'],
    rating: 4.6,
    reviewCount: 8500,
    alternatives: ['Xylem', 'Suez Water', 'Veolia'],
    integrations: ['Treatment systems', 'Sensor networks', 'SCADA systems', 'Laboratory equipment', 'Data processing', 'Cloud platforms', 'Analytics tools', 'Control systems'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.evoqua.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  
  // Distribution Networks
  {
    name: 'Sensus AI',
    slug: 'sensus-ai',
    tagline: 'AI-powered smart water metering and distribution network platform',
    logoUrl: '/logos/sensus-ai.png',
    website: 'https://www.sensus.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Water & Utilities',
    categorySlug: 'water-utilities',
    subcategory: 'Distribution Networks',
    subcategorySlug: 'distribution-networks',
    description: 'Sensus AI enhances water distribution with AI-powered smart metering, leak detection, pressure management, and intelligent network optimization for municipal water utilities.',
    features: ['AI smart metering', 'Leak detection', 'Pressure management', 'Network optimization', 'Real-time monitoring', 'Consumption analytics', 'Billing automation', 'Customer engagement'],
    useCases: ['Smart metering', 'Leak detection', 'Pressure management', 'Network optimization', 'Real-time monitoring', 'Consumption analytics', 'Billing automation', 'Customer engagement'],
    tags: ['smart-water-metering', 'ai-leak-detection', 'pressure-management', 'network-optimization', 'real-time-monitoring'],
    rating: 4.8,
    reviewCount: 12000,
    alternatives: ['Badger Meter', 'Itron', 'Elster'],
    integrations: ['Water meters', 'Sensor networks', 'Communication systems', 'Billing systems', 'Data processing', 'Cloud platforms', 'Analytics tools', 'Customer portals'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.sensus.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  {
    name: 'Badger Meter AI',
    slug: 'badger-meter-ai',
    tagline: 'AI-enhanced water flow measurement and distribution analytics',
    logoUrl: '/logos/badger-meter-ai.png',
    website: 'https://www.badgermeter.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Water & Utilities',
    categorySlug: 'water-utilities',
    subcategory: 'Distribution Networks',
    subcategorySlug: 'distribution-networks',
    description: 'Badger Meter AI enhances water distribution with AI-powered flow measurement, consumption analytics, network modeling, and intelligent infrastructure management for utilities and municipalities.',
    features: ['AI flow measurement', 'Consumption analytics', 'Network modeling', 'Infrastructure management', 'Data visualization', 'Performance monitoring', 'Resource planning', 'Reporting tools'],
    useCases: ['Flow measurement', 'Consumption analytics', 'Network modeling', 'Infrastructure management', 'Data visualization', 'Performance monitoring', 'Resource planning', 'Reporting'],
    tags: ['water-flow-measurement', 'ai-consumption-analytics', 'network-modeling', 'infrastructure-management', 'data-visualization'],
    rating: 4.7,
    reviewCount: 10000,
    alternatives: ['Sensus', 'Itron', 'Elster'],
    integrations: ['Water meters', 'Sensor networks', 'Communication systems', 'Billing systems', 'Data processing', 'Cloud platforms', 'Analytics tools', 'Customer portals'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.badgermeter.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  
  // Wastewater Management
  {
    name: 'Veolia AI',
    slug: 'veolia-ai',
    tagline: 'AI-powered wastewater treatment and resource recovery platform',
    logoUrl: '/logos/veolia-ai.png',
    website: 'https://www.veolia.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Water & Utilities',
    categorySlug: 'water-utilities',
    subcategory: 'Wastewater Management',
    subcategorySlug: 'wastewater-management',
    description: 'Veolia AI enhances wastewater management with AI-powered treatment optimization, biogas production, nutrient recovery, and intelligent sludge processing for municipal and industrial facilities.',
    features: ['AI treatment optimization', 'Biogas production', 'Nutrient recovery', 'Sludge processing', 'Energy generation', 'Environmental compliance', 'Process automation', 'Performance analytics'],
    useCases: ['Wastewater treatment', 'Biogas production', 'Nutrient recovery', 'Sludge processing', 'Energy generation', 'Environmental compliance', 'Process automation', 'Performance analytics'],
    tags: ['wastewater-treatment', 'ai-biogas-production', 'nutrient-recovery', 'sludge-processing', 'energy-generation'],
    rating: 4.6,
    reviewCount: 11000,
    alternatives: ['Suez Water', 'Evoqua Water', 'Xylem'],
    integrations: ['Treatment systems', 'Sensor networks', 'SCADA systems', 'Laboratory equipment', 'Data processing', 'Cloud platforms', 'Analytics tools', 'Control systems'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.veolia.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  {
    name: 'Suez Water AI',
    slug: 'suez-water-ai',
    tagline: 'AI-enhanced water and wastewater resource management platform',
    logoUrl: '/logos/suez-water-ai.png',
    website: 'https://www.suez.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Water & Utilities',
    categorySlug: 'water-utilities',
    subcategory: 'Wastewater Management',
    subcategorySlug: 'wastewater-management',
    description: 'Suez Water AI enhances water resource management with AI-powered wastewater treatment, circular economy solutions, environmental monitoring, and intelligent utility operations for sustainable water services.',
    features: ['AI wastewater treatment', 'Circular economy solutions', 'Environmental monitoring', 'Utility operations', 'Resource optimization', 'Sustainability tracking', 'Compliance management', 'Performance reporting'],
    useCases: ['Wastewater treatment', 'Circular economy', 'Environmental monitoring', 'Utility operations', 'Resource optimization', 'Sustainability tracking', 'Compliance management', 'Performance reporting'],
    tags: ['wastewater-management', 'ai-circular-economy', 'environmental-monitoring', 'utility-operations', 'resource-optimization'],
    rating: 4.5,
    reviewCount: 9500,
    alternatives: ['Veolia', 'Evoqua Water', 'Xylem'],
    integrations: ['Treatment systems', 'Sensor networks', 'SCADA systems', 'Laboratory equipment', 'Data processing', 'Cloud platforms', 'Analytics tools', 'Control systems'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.suez.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  }
];