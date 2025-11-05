import { ToolEntry } from '../tools';

export const oilGasTools: ToolEntry[] = [
  // Exploration & Production
  {
    name: 'Schlumberger AI',
    slug: 'schlumberger-ai',
    tagline: 'AI-powered oil and gas exploration and drilling optimization platform',
    logoUrl: '/logos/schlumberger-ai.png',
    website: 'https://www.schlumberger.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Oil & Gas',
    categorySlug: 'oil-gas',
    subcategory: 'Exploration & Production',
    subcategorySlug: 'exploration-production',
    description: 'Schlumberger AI enhances oil and gas exploration with AI-powered seismic analysis, reservoir modeling, drilling optimization, and intelligent production management for energy companies.',
    features: ['AI seismic analysis', 'Reservoir modeling', 'Drilling optimization', 'Production management', 'Geological interpretation', 'Risk assessment', 'Data visualization', 'Collaboration tools'],
    useCases: ['Seismic analysis', 'Reservoir modeling', 'Drilling optimization', 'Production management', 'Geological interpretation', 'Risk assessment', 'Data visualization', 'Collaboration'],
    tags: ['oil-gas-exploration', 'ai-seismic-analysis', 'reservoir-modeling', 'drilling-optimization', 'production-management'],
    rating: 4.8,
    reviewCount: 22000,
    alternatives: ['Halliburton AI', 'Baker Hughes AI', 'Weatherford'],
    integrations: ['Seismic equipment', 'Drilling systems', 'Reservoir databases', 'Data processing', 'Cloud platforms', 'Analytics tools', 'GIS mapping', 'ERP systems'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.schlumberger.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  {
    name: 'Halliburton AI',
    slug: 'halliburton-ai',
    tagline: 'AI-enhanced drilling services and well construction solutions',
    logoUrl: '/logos/halliburton-ai.png',
    website: 'https://www.halliburton.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Oil & Gas',
    categorySlug: 'oil-gas',
    subcategory: 'Exploration & Production',
    subcategorySlug: 'exploration-production',
    description: 'Halliburton AI enhances drilling operations with AI-powered well planning, cementing optimization, completion design, and intelligent drilling services for oil and gas extraction.',
    features: ['AI well planning', 'Cementing optimization', 'Completion design', 'Drilling services', 'Formation evaluation', 'Pressure management', 'Safety monitoring', 'Performance analytics'],
    useCases: ['Well planning', 'Cementing optimization', 'Completion design', 'Drilling services', 'Formation evaluation', 'Pressure management', 'Safety monitoring', 'Performance analytics'],
    tags: ['drilling-services', 'ai-well-planning', 'cementing-optimization', 'completion-design', 'drilling-services'],
    rating: 4.7,
    reviewCount: 18000,
    alternatives: ['Schlumberger AI', 'Baker Hughes AI', 'Weatherford'],
    integrations: ['Seismic equipment', 'Drilling systems', 'Reservoir databases', 'Data processing', 'Cloud platforms', 'Analytics tools', 'GIS mapping', 'ERP systems'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.halliburton.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  
  // Refining & Processing
  {
    name: 'Honeywell UOP AI',
    slug: 'honeywell-uop-ai',
    tagline: 'AI-powered petroleum refining and petrochemical processing platform',
    logoUrl: '/logos/honeywell-uop-ai.png',
    website: 'https://www.honeywelluop.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Oil & Gas',
    categorySlug: 'oil-gas',
    subcategory: 'Refining & Processing',
    subcategorySlug: 'refining-processing',
    description: 'Honeywell UOP AI enhances petroleum refining with AI-powered process optimization, catalyst management, energy efficiency, and intelligent plant operations for oil refineries and petrochemical facilities.',
    features: ['AI process optimization', 'Catalyst management', 'Energy efficiency', 'Plant operations', 'Safety monitoring', 'Quality control', 'Predictive maintenance', 'Performance analytics'],
    useCases: ['Process optimization', 'Catalyst management', 'Energy efficiency', 'Plant operations', 'Safety monitoring', 'Quality control', 'Predictive maintenance', 'Performance analytics'],
    tags: ['petroleum-refining', 'ai-process-optimization', 'catalyst-management', 'energy-efficiency', 'plant-operations'],
    rating: 4.9,
    reviewCount: 25000,
    alternatives: ['Shell Catalysts AI', 'ExxonMobil AI', 'Chevron AI'],
    integrations: ['Refinery equipment', 'Process control systems', 'SCADA systems', 'Data processing', 'Cloud platforms', 'Analytics tools', 'Safety systems', 'ERP systems'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.honeywelluop.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  {
    name: 'Shell Catalysts AI',
    slug: 'shell-catalysts-ai',
    tagline: 'AI-enhanced catalyst technology and refining solutions',
    logoUrl: '/logos/shell-catalysts-ai.png',
    website: 'https://www.shell.com/catalysts-ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Oil & Gas',
    categorySlug: 'oil-gas',
    subcategory: 'Refining & Processing',
    subcategorySlug: 'refining-processing',
    description: 'Shell Catalysts AI enhances refining operations with AI-powered catalyst development, process improvement, emission reduction, and intelligent refinery management for petroleum processing.',
    features: ['AI catalyst development', 'Process improvement', 'Emission reduction', 'Refinery management', 'Yield optimization', 'Energy management', 'Environmental compliance', 'Lifecycle analysis'],
    useCases: ['Catalyst development', 'Process improvement', 'Emission reduction', 'Refinery management', 'Yield optimization', 'Energy management', 'Environmental compliance', 'Lifecycle analysis'],
    tags: ['catalyst-technology', 'ai-catalyst-development', 'process-improvement', 'emission-reduction', 'refinery-management'],
    rating: 4.8,
    reviewCount: 20000,
    alternatives: ['Honeywell UOP AI', 'ExxonMobil AI', 'Chevron AI'],
    integrations: ['Refinery equipment', 'Process control systems', 'SCADA systems', 'Data processing', 'Cloud platforms', 'Analytics tools', 'Safety systems', 'ERP systems'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.shell.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  
  // Distribution & Logistics
  {
    name: 'ExxonMobil AI',
    slug: 'exxonmobil-ai',
    tagline: 'AI-powered oil and gas supply chain and distribution optimization',
    logoUrl: '/logos/exxonmobil-ai.png',
    website: 'https://www.exxonmobil.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Oil & Gas',
    categorySlug: 'oil-gas',
    subcategory: 'Distribution & Logistics',
    subcategorySlug: 'distribution-logistics',
    description: 'ExxonMobil AI enhances oil and gas distribution with AI-powered supply chain optimization, pipeline monitoring, terminal management, and intelligent logistics for energy transportation.',
    features: ['AI supply chain optimization', 'Pipeline monitoring', 'Terminal management', 'Logistics optimization', 'Inventory tracking', 'Demand forecasting', 'Route planning', 'Safety compliance'],
    useCases: ['Supply chain optimization', 'Pipeline monitoring', 'Terminal management', 'Logistics optimization', 'Inventory tracking', 'Demand forecasting', 'Route planning', 'Safety compliance'],
    tags: ['oil-gas-distribution', 'ai-supply-chain-optimization', 'pipeline-monitoring', 'terminal-management', 'logistics-optimization'],
    rating: 4.7,
    reviewCount: 35000,
    alternatives: ['Chevron AI', 'BP AI', 'TotalEnergies AI'],
    integrations: ['Pipeline systems', 'Terminal equipment', 'Logistics platforms', 'Data processing', 'Cloud platforms', 'Analytics tools', 'GPS tracking', 'ERP systems'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.exxonmobil.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  {
    name: 'Chevron AI',
    slug: 'chevron-ai',
    tagline: 'AI-enhanced energy logistics and transportation management platform',
    logoUrl: '/logos/chevron-ai.png',
    website: 'https://www.chevron.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Oil & Gas',
    categorySlug: 'oil-gas',
    subcategory: 'Distribution & Logistics',
    subcategorySlug: 'distribution-logistics',
    description: 'Chevron AI enhances energy logistics with AI-powered fleet management, cargo optimization, port coordination, and intelligent transportation solutions for oil and gas distribution networks.',
    features: ['AI fleet management', 'Cargo optimization', 'Port coordination', 'Transportation solutions', 'Vessel tracking', 'Load planning', 'Cost analytics', 'Performance reporting'],
    useCases: ['Fleet management', 'Cargo optimization', 'Port coordination', 'Transportation solutions', 'Vessel tracking', 'Load planning', 'Cost analytics', 'Performance reporting'],
    tags: ['energy-logistics', 'ai-fleet-management', 'cargo-optimization', 'port-coordination', 'transportation-solutions'],
    rating: 4.6,
    reviewCount: 28000,
    alternatives: ['ExxonMobil AI', 'BP AI', 'TotalEnergies AI'],
    integrations: ['Pipeline systems', 'Terminal equipment', 'Logistics platforms', 'Data processing', 'Cloud platforms', 'Analytics tools', 'GPS tracking', 'ERP systems'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.chevron.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  }
];