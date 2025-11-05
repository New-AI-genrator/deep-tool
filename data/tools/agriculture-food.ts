import { ToolEntry } from '../tools';

export const agricultureFoodTools: ToolEntry[] = [
  // Precision Farming
  {
    name: 'John Deere AI',
    slug: 'john-deere-ai',
    tagline: 'AI-powered precision agriculture and farm management platform',
    logoUrl: '/logos/john-deere-ai.png',
    website: 'https://www.deere.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Agriculture & Food',
    categorySlug: 'agriculture-food',
    subcategory: 'Precision Farming',
    subcategorySlug: 'precision-farming',
    description: 'John Deere AI enhances precision agriculture with AI-powered crop monitoring, yield prediction, equipment automation, and data-driven farm management solutions for modern agriculture.',
    features: ['AI crop monitoring', 'Yield prediction', 'Equipment automation', 'Data-driven management', 'Satellite imagery', 'Weather integration', 'Soil analysis', 'Mobile app'],
    useCases: ['Crop monitoring', 'Yield optimization', 'Resource management', 'Equipment automation', 'Data analysis', 'Weather planning', 'Soil health', 'Farm efficiency'],
    tags: ['precision-agriculture', 'ai-monitoring', 'yield-prediction', 'farm-management', 'crop-optimization'],
    rating: 4.7,
    reviewCount: 15000,
    alternatives: ['Trimble Agriculture', 'CNH Industrial', 'AgLeader'],
    integrations: ['GPS systems', 'Satellite imagery', 'Weather services', 'Soil sensors', 'Drone technology', 'Mobile apps', 'Cloud storage', 'Farm management software'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.deere.com/en/technology-products/',
      description: 'Enterprise solution with custom pricing'
    }
  },
  {
    name: 'Trimble Agriculture AI',
    slug: 'trimble-agriculture-ai',
    tagline: 'AI-enhanced farm management and precision agriculture solutions',
    logoUrl: '/logos/trimble-agriculture-ai.png',
    website: 'https://www.trimble.com/agriculture/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Agriculture & Food',
    categorySlug: 'agriculture-food',
    subcategory: 'Precision Farming',
    subcategorySlug: 'precision-farming',
    description: 'Trimble Agriculture AI enhances farm operations with AI-powered field mapping, variable rate application, automated guidance, and comprehensive farm data analytics for precision farming.',
    features: ['AI field mapping', 'Variable rate application', 'Automated guidance', 'Farm data analytics', 'Boundary mapping', 'Crop scouting', 'Harvest tracking', 'Reporting tools'],
    useCases: ['Field mapping', 'Application management', 'Guidance systems', 'Data analytics', 'Boundary definition', 'Crop monitoring', 'Harvest optimization', 'Resource planning'],
    tags: ['farm-management', 'ai-mapping', 'variable-rate', 'automated-guidance', 'data-analytics'],
    rating: 4.6,
    reviewCount: 12000,
    alternatives: ['John Deere', 'CNH Industrial', 'AgLeader'],
    integrations: ['GPS systems', 'Satellite imagery', 'Weather services', 'Soil sensors', 'Equipment systems', 'Mobile apps', 'Cloud platforms', 'Farm management software'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.trimble.com/agriculture/pricing',
      description: 'Enterprise solution with custom pricing'
    }
  },
  
  // Food Safety
  {
    name: 'Walmart Food Safety AI',
    slug: 'walmart-food-safety-ai',
    tagline: 'AI-powered food safety monitoring and traceability platform',
    logoUrl: '/logos/walmart-food-safety-ai.png',
    website: 'https://www.walmart.com/food-safety/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Agriculture & Food',
    categorySlug: 'agriculture-food',
    subcategory: 'Food Safety',
    subcategorySlug: 'food-safety',
    description: 'Walmart Food Safety AI enhances food safety with AI-powered supply chain monitoring, contamination detection, traceability systems, and real-time quality assurance for food products.',
    features: ['AI supply chain monitoring', 'Contamination detection', 'Traceability systems', 'Real-time quality assurance', 'Temperature monitoring', 'Batch tracking', 'Compliance reporting', 'Risk assessment'],
    useCases: ['Supply chain monitoring', 'Contamination detection', 'Product traceability', 'Quality assurance', 'Temperature control', 'Batch tracking', 'Compliance management', 'Risk mitigation'],
    tags: ['food-safety', 'ai-monitoring', 'contamination-detection', 'traceability', 'quality-assurance'],
    rating: 4.8,
    reviewCount: 8500,
    alternatives: ['IBM Food Trust', 'ChainPoint', 'Ripe Technology'],
    integrations: ['Supply chain systems', 'IoT sensors', 'Blockchain platforms', 'Temperature monitors', 'QR codes', 'Mobile apps', 'Cloud storage', 'Regulatory databases'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.walmart.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  {
    name: 'IBM Food Trust AI',
    slug: 'ibm-food-trust-ai',
    tagline: 'AI-enhanced food supply chain transparency and safety platform',
    logoUrl: '/logos/ibm-food-trust-ai.png',
    website: 'https://www.ibm.com/blockchain/solutions/food-trust/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Agriculture & Food',
    categorySlug: 'agriculture-food',
    subcategory: 'Food Safety',
    subcategorySlug: 'food-safety',
    description: 'IBM Food Trust AI enhances food safety with AI-powered blockchain traceability, contamination tracking, supplier verification, and comprehensive food safety analytics across the supply chain.',
    features: ['AI blockchain traceability', 'Contamination tracking', 'Supplier verification', 'Food safety analytics', 'Batch tracking', 'Quality certificates', 'Incident management', 'Compliance tools'],
    useCases: ['Supply chain traceability', 'Contamination tracking', 'Supplier verification', 'Quality management', 'Batch tracking', 'Certificate management', 'Incident response', 'Compliance reporting'],
    tags: ['food-traceability', 'ai-blockchain', 'contamination-tracking', 'supplier-verification', 'safety-analytics'],
    rating: 4.7,
    reviewCount: 9500,
    alternatives: ['Walmart Food Safety', 'ChainPoint', 'Ripe Technology'],
    integrations: ['Blockchain platforms', 'ERP systems', 'IoT sensors', 'QR codes', 'Mobile apps', 'Cloud storage', 'Regulatory databases', 'Supplier portals'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.ibm.com/blockchain/solutions/food-trust/pricing',
      description: 'Enterprise solution with custom pricing'
    }
  },
  
  // Sustainable Agriculture
  {
    name: 'Indigo Agriculture AI',
    slug: 'indigo-agriculture-ai',
    tagline: 'AI-powered sustainable farming and carbon credit platform',
    logoUrl: '/logos/indigo-agriculture-ai.png',
    website: 'https://www.indigoag.com/ai',
    pricing: 'freemium',
    badges: ['community-favorite', 'trending'],
    category: 'Agriculture & Food',
    categorySlug: 'agriculture-food',
    subcategory: 'Sustainable Agriculture',
    subcategorySlug: 'sustainable-agriculture',
    description: 'Indigo Agriculture AI enhances sustainable farming with AI-powered soil health monitoring, carbon sequestration tracking, regenerative practice recommendations, and marketplace for sustainable crops.',
    features: ['AI soil health monitoring', 'Carbon sequestration tracking', 'Regenerative practice recommendations', 'Sustainable crop marketplace', 'Weather integration', 'Data analytics', 'Farmer network', 'Carbon credit trading'],
    useCases: ['Soil health improvement', 'Carbon sequestration', 'Regenerative practices', 'Sustainable farming', 'Market access', 'Data analysis', 'Farmer collaboration', 'Environmental impact'],
    tags: ['sustainable-farming', 'ai-soil-monitoring', 'carbon-tracking', 'regenerative-agriculture', 'crop-marketplace'],
    rating: 4.6,
    reviewCount: 7500,
    alternatives: ['Cargill', 'Bayer', 'Granular'],
    integrations: ['Soil sensors', 'Weather services', 'Satellite imagery', 'Mobile apps', 'Carbon markets', 'Financial services', 'Agricultural databases', 'Research institutions'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free basic service, Premium features for advanced analytics',
      url: 'https://www.indigoag.com/pricing',
      description: 'Free basic service with premium options'
    }
  },
  {
    name: 'Cargill AI',
    slug: 'cargill-ai',
    tagline: 'AI-enhanced sustainable agriculture and food production platform',
    logoUrl: '/logos/cargill-ai.png',
    website: 'https://www.cargill.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Agriculture & Food',
    categorySlug: 'agriculture-food',
    subcategory: 'Sustainable Agriculture',
    subcategorySlug: 'sustainable-agriculture',
    description: 'Cargill AI enhances sustainable agriculture with AI-powered resource optimization, environmental impact monitoring, sustainable sourcing, and supply chain efficiency for food production.',
    features: ['AI resource optimization', 'Environmental impact monitoring', 'Sustainable sourcing', 'Supply chain efficiency', 'Water management', 'Energy optimization', 'Waste reduction', 'Reporting dashboard'],
    useCases: ['Resource optimization', 'Environmental monitoring', 'Sustainable sourcing', 'Supply chain efficiency', 'Water conservation', 'Energy management', 'Waste reduction', 'Impact reporting'],
    tags: ['sustainable-agriculture', 'ai-optimization', 'environmental-monitoring', 'sustainable-sourcing', 'supply-chain-efficiency'],
    rating: 4.5,
    reviewCount: 11000,
    alternatives: ['Indigo Agriculture', 'Bayer', 'Granular'],
    integrations: ['Agricultural sensors', 'Weather services', 'Satellite imagery', 'Supply chain systems', 'Mobile apps', 'Cloud platforms', 'Environmental databases', 'Research institutions'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.cargill.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  }
];