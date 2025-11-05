import { ToolEntry } from '../tools';

export const maritimeShippingTools: ToolEntry[] = [
  // Fleet Management
  {
    name: 'Maersk AI',
    slug: 'maersk-ai',
    tagline: 'AI-powered maritime fleet management and vessel optimization platform',
    logoUrl: '/logos/maersk-ai.png',
    website: 'https://www.maersk.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Maritime & Shipping',
    categorySlug: 'maritime-shipping',
    subcategory: 'Fleet Management',
    subcategorySlug: 'fleet-management',
    description: 'Maersk AI enhances maritime operations with AI-powered vessel routing, fuel optimization, weather analysis, and intelligent fleet management for container shipping and logistics companies.',
    features: ['AI vessel routing', 'Fuel optimization', 'Weather analysis', 'Fleet management', 'Port optimization', 'Safety monitoring', 'Predictive maintenance', 'Operational efficiency'],
    useCases: ['Vessel routing', 'Fuel optimization', 'Weather analysis', 'Fleet management', 'Port optimization', 'Safety monitoring', 'Predictive maintenance', 'Operational efficiency'],
    tags: ['maritime-operations', 'ai-vessel-routing', 'fuel-optimization', 'weather-analysis', 'fleet-management'],
    rating: 4.8,
    reviewCount: 28000,
    alternatives: ['MSC AI', 'CMA CGM AI', 'COSCO'],
    integrations: ['Vessel systems', 'Weather services', 'Port databases', 'Data processing', 'Cloud platforms', 'Analytics tools', 'GPS tracking', 'Maintenance platforms'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.maersk.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  {
    name: 'MSC AI',
    slug: 'msc-ai',
    tagline: 'AI-enhanced container shipping and maritime logistics solutions',
    logoUrl: '/logos/msc-ai.png',
    website: 'https://www.msc.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Maritime & Shipping',
    categorySlug: 'maritime-shipping',
    subcategory: 'Fleet Management',
    subcategorySlug: 'fleet-management',
    description: 'MSC AI enhances container shipping with AI-powered cargo tracking, port scheduling, vessel performance monitoring, and intelligent logistics optimization for global maritime transport.',
    features: ['AI cargo tracking', 'Port scheduling', 'Vessel performance monitoring', 'Logistics optimization', 'Load planning', 'Route optimization', 'Fuel management', 'Emissions tracking'],
    useCases: ['Cargo tracking', 'Port scheduling', 'Vessel performance monitoring', 'Logistics optimization', 'Load planning', 'Route optimization', 'Fuel management', 'Emissions tracking'],
    tags: ['container-shipping', 'ai-cargo-tracking', 'port-scheduling', 'vessel-performance-monitoring', 'logistics-optimization'],
    rating: 4.7,
    reviewCount: 25000,
    alternatives: ['Maersk AI', 'CMA CGM AI', 'COSCO'],
    integrations: ['Vessel systems', 'Weather services', 'Port databases', 'Data processing', 'Cloud platforms', 'Analytics tools', 'GPS tracking', 'Maintenance platforms'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.msc.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  
  // Port Operations
  {
    name: 'Port of Rotterdam AI',
    slug: 'port-of-rotterdam-ai',
    tagline: 'AI-powered smart port operations and cargo handling platform',
    logoUrl: '/logos/port-of-rotterdam-ai.png',
    website: 'https://www.portofrotterdam.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Maritime & Shipping',
    categorySlug: 'maritime-shipping',
    subcategory: 'Port Operations',
    subcategorySlug: 'port-operations',
    description: 'Port of Rotterdam AI enhances port operations with AI-powered cargo handling, berth allocation, terminal optimization, and intelligent port management for maritime logistics hubs.',
    features: ['AI cargo handling', 'Berth allocation', 'Terminal optimization', 'Port management', 'Traffic control', 'Security monitoring', 'Performance analytics', 'Sustainability tracking'],
    useCases: ['Cargo handling', 'Berth allocation', 'Terminal optimization', 'Port management', 'Traffic control', 'Security monitoring', 'Performance analytics', 'Sustainability tracking'],
    tags: ['smart-port-operations', 'ai-cargo-handling', 'berth-allocation', 'terminal-optimization', 'port-management'],
    rating: 4.9,
    reviewCount: 15000,
    alternatives: ['Port of Singapore AI', 'Port of Shanghai AI', 'DP World'],
    integrations: ['Port equipment', 'Cargo systems', 'Security systems', 'Data processing', 'Cloud platforms', 'Analytics tools', 'GPS tracking', 'Communication networks'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.portofrotterdam.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  {
    name: 'Port of Singapore AI',
    slug: 'port-of-singapore-ai',
    tagline: 'AI-enhanced maritime port efficiency and logistics coordination platform',
    logoUrl: '/logos/port-of-singapore-ai.png',
    website: 'https://www.mpa.gov.sg/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Maritime & Shipping',
    categorySlug: 'maritime-shipping',
    subcategory: 'Port Operations',
    subcategorySlug: 'port-operations',
    description: 'Port of Singapore AI enhances maritime logistics with AI-powered vessel traffic management, cargo inspection, customs processing, and intelligent port coordination for international shipping hubs.',
    features: ['AI vessel traffic management', 'Cargo inspection', 'Customs processing', 'Port coordination', 'Queue management', 'Security screening', 'Documentation automation', 'Compliance tracking'],
    useCases: ['Vessel traffic management', 'Cargo inspection', 'Customs processing', 'Port coordination', 'Queue management', 'Security screening', 'Documentation automation', 'Compliance tracking'],
    tags: ['maritime-logistics', 'ai-vessel-traffic-management', 'cargo-inspection', 'customs-processing', 'port-coordination'],
    rating: 4.8,
    reviewCount: 12000,
    alternatives: ['Port of Rotterdam AI', 'Port of Shanghai AI', 'DP World'],
    integrations: ['Port equipment', 'Cargo systems', 'Security systems', 'Data processing', 'Cloud platforms', 'Analytics tools', 'GPS tracking', 'Communication networks'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.mpa.gov.sg/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  
  // Supply Chain Logistics
  {
    name: 'DHL Maritime AI',
    slug: 'dhl-maritime-ai',
    tagline: 'AI-powered maritime logistics and global supply chain optimization',
    logoUrl: '/logos/dhl-maritime-ai.png',
    website: 'https://www.dhl.com/maritime-ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Maritime & Shipping',
    categorySlug: 'maritime-shipping',
    subcategory: 'Supply Chain Logistics',
    subcategorySlug: 'supply-chain-logistics',
    description: 'DHL Maritime AI enhances global logistics with AI-powered shipment tracking, customs optimization, delivery scheduling, and intelligent supply chain management for maritime cargo operations.',
    features: ['AI shipment tracking', 'Customs optimization', 'Delivery scheduling', 'Supply chain management', 'Inventory optimization', 'Demand forecasting', 'Route planning', 'Cost analytics'],
    useCases: ['Shipment tracking', 'Customs optimization', 'Delivery scheduling', 'Supply chain management', 'Inventory optimization', 'Demand forecasting', 'Route planning', 'Cost analytics'],
    tags: ['maritime-logistics', 'ai-shipment-tracking', 'customs-optimization', 'delivery-scheduling', 'supply-chain-management'],
    rating: 4.7,
    reviewCount: 35000,
    alternatives: ['FedEx Maritime AI', 'UPS Maritime AI', 'Kuehne + Nagel'],
    integrations: ['Logistics systems', 'Customs databases', 'Tracking platforms', 'Data processing', 'Cloud platforms', 'Analytics tools', 'Mobile apps', 'ERP systems'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.dhl.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  {
    name: 'FedEx Maritime AI',
    slug: 'fedex-maritime-ai',
    tagline: 'AI-enhanced ocean freight and international shipping solutions',
    logoUrl: '/logos/fedex-maritime-ai.png',
    website: 'https://www.fedex.com/maritime-ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Maritime & Shipping',
    categorySlug: 'maritime-shipping',
    subcategory: 'Supply Chain Logistics',
    subcategorySlug: 'supply-chain-logistics',
    description: 'FedEx Maritime AI enhances ocean freight with AI-powered package tracking, delivery optimization, customs clearance, and intelligent international shipping for global cargo operations.',
    features: ['AI package tracking', 'Delivery optimization', 'Customs clearance', 'International shipping', 'Real-time visibility', 'Predictive analytics', 'Customer notifications', 'Performance reporting'],
    useCases: ['Package tracking', 'Delivery optimization', 'Customs clearance', 'International shipping', 'Real-time visibility', 'Predictive analytics', 'Customer notifications', 'Performance reporting'],
    tags: ['ocean-freight', 'ai-package-tracking', 'delivery-optimization', 'customs-clearance', 'international-shipping'],
    rating: 4.6,
    reviewCount: 32000,
    alternatives: ['DHL Maritime AI', 'UPS Maritime AI', 'Kuehne + Nagel'],
    integrations: ['Logistics systems', 'Customs databases', 'Tracking platforms', 'Data processing', 'Cloud platforms', 'Analytics tools', 'Mobile apps', 'ERP systems'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.fedex.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  }
];