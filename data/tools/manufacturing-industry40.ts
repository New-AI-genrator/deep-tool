import { ToolEntry } from '../tools';

export const manufacturingIndustry40Tools: ToolEntry[] = [
  // Predictive Maintenance
  {
    name: 'Siemens MindSphere AI',
    slug: 'siemens-mindsphere-ai',
    tagline: 'AI-powered industrial IoT and predictive maintenance platform',
    logoUrl: '/logos/siemens-mindsphere-ai.png',
    website: 'https://www.siemens.com/mindsphere-ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Manufacturing & Industry 4.0',
    categorySlug: 'manufacturing-industry40',
    subcategory: 'Predictive Maintenance',
    subcategorySlug: 'predictive-maintenance',
    description: 'Siemens MindSphere AI enhances industrial operations with AI-powered predictive maintenance, equipment monitoring, anomaly detection, and data analytics for manufacturing assets.',
    features: ['AI predictive maintenance', 'Equipment monitoring', 'Anomaly detection', 'Data analytics', 'Real-time insights', 'Asset performance', 'Failure prediction', 'Integration platform'],
    useCases: ['Equipment monitoring', 'Predictive maintenance', 'Anomaly detection', 'Asset performance', 'Failure prediction', 'Operational efficiency', 'Cost reduction', 'Downtime prevention'],
    tags: ['industrial-iot', 'ai-maintenance', 'predictive-analytics', 'equipment-monitoring', 'anomaly-detection'],
    rating: 4.7,
    reviewCount: 12000,
    alternatives: ['GE Predix', 'PTC ThingWorx', 'Rockwell Automation'],
    integrations: ['Industrial equipment', 'Sensors', 'SCADA systems', 'ERP systems', 'Cloud platforms', 'Mobile apps', 'Analytics tools', 'Maintenance systems'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.siemens.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  {
    name: 'GE Predix AI',
    slug: 'ge-predix-ai',
    tagline: 'AI-enhanced industrial asset performance and maintenance platform',
    logoUrl: '/logos/ge-predix-ai.png',
    website: 'https://www.ge.com/predix-ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Manufacturing & Industry 4.0',
    categorySlug: 'manufacturing-industry40',
    subcategory: 'Predictive Maintenance',
    subcategorySlug: 'predictive-maintenance',
    description: 'GE Predix AI enhances industrial asset management with AI-powered performance optimization, predictive diagnostics, condition monitoring, and industrial analytics for manufacturing operations.',
    features: ['AI performance optimization', 'Predictive diagnostics', 'Condition monitoring', 'Industrial analytics', 'Asset visibility', 'Risk assessment', 'Maintenance planning', 'Digital twins'],
    useCases: ['Asset performance', 'Predictive diagnostics', 'Condition monitoring', 'Industrial analytics', 'Risk assessment', 'Maintenance planning', 'Digital twins', 'Operational insights'],
    tags: ['asset-performance', 'ai-diagnostics', 'condition-monitoring', 'industrial-analytics', 'predictive-maintenance'],
    rating: 4.6,
    reviewCount: 10000,
    alternatives: ['Siemens MindSphere', 'PTC ThingWorx', 'Rockwell Automation'],
    integrations: ['Industrial equipment', 'Sensors', 'SCADA systems', 'ERP systems', 'Cloud platforms', 'Mobile apps', 'Analytics tools', 'Maintenance systems'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.ge.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  
  // Quality Control
  {
    name: 'Cognex AI',
    slug: 'cognex-ai',
    tagline: 'AI-powered machine vision and quality inspection platform',
    logoUrl: '/logos/cognex-ai.png',
    website: 'https://www.cognex.com/ai',
    pricing: 'paid',
    badges: ['popular', 'trending'],
    category: 'Manufacturing & Industry 4.0',
    categorySlug: 'manufacturing-industry40',
    subcategory: 'Quality Control',
    subcategorySlug: 'quality-control',
    description: 'Cognex AI enhances manufacturing quality with AI-powered machine vision, defect detection, automated inspection, and real-time quality analytics for production lines.',
    features: ['AI machine vision', 'Defect detection', 'Automated inspection', 'Quality analytics', 'Barcode reading', 'Pattern matching', 'Measurement tools', 'Integration capabilities'],
    useCases: ['Quality inspection', 'Defect detection', 'Automated inspection', 'Barcode reading', 'Pattern matching', 'Measurement', 'Production monitoring', 'Quality analytics'],
    tags: ['machine-vision', 'ai-inspection', 'defect-detection', 'quality-control', 'automated-inspection'],
    rating: 4.8,
    reviewCount: 15000,
    alternatives: ['Keyence', 'Microscan', 'Basler'],
    integrations: ['Production lines', 'Cameras', 'PLC systems', 'MES systems', 'ERP systems', 'Cloud platforms', 'Mobile apps', 'Analytics tools'],
    pricingDetails: {
      type: 'paid',
      price: 'Hardware from $5,000, Software licensing from $10,000',
      url: 'https://www.cognex.com/pricing',
      description: 'Hardware and software pricing'
    }
  },
  {
    name: 'Keyence AI',
    slug: 'keyence-ai',
    tagline: 'AI-enhanced industrial automation and quality control solutions',
    logoUrl: '/logos/keyence-ai.png',
    website: 'https://www.keyence.com/ai',
    pricing: 'paid',
    badges: ['popular', 'trending'],
    category: 'Manufacturing & Industry 4.0',
    categorySlug: 'manufacturing-industry40',
    subcategory: 'Quality Control',
    subcategorySlug: 'quality-control',
    description: 'Keyence AI enhances industrial automation with AI-powered sensing technology, precision measurement, defect inspection, and intelligent quality control for manufacturing processes.',
    features: ['AI sensing technology', 'Precision measurement', 'Defect inspection', 'Quality control', 'Vision systems', 'Sensor integration', 'Data logging', 'Real-time monitoring'],
    useCases: ['Sensing technology', 'Precision measurement', 'Defect inspection', 'Quality control', 'Vision systems', 'Sensor integration', 'Data logging', 'Process monitoring'],
    tags: ['industrial-automation', 'ai-sensing', 'precision-measurement', 'defect-inspection', 'quality-control'],
    rating: 4.7,
    reviewCount: 13000,
    alternatives: ['Cognex', 'Microscan', 'Basler'],
    integrations: ['Production lines', 'Sensors', 'Vision systems', 'PLC systems', 'MES systems', 'ERP systems', 'Cloud platforms', 'Mobile apps'],
    pricingDetails: {
      type: 'paid',
      price: 'Hardware from $3,000, Software licensing from $8,000',
      url: 'https://www.keyence.com/pricing',
      description: 'Hardware and software pricing'
    }
  },
  
  // Supply Chain Optimization
  {
    name: 'SAP Leonardo AI',
    slug: 'sap-leonardo-ai',
    tagline: 'AI-powered supply chain visibility and optimization platform',
    logoUrl: '/logos/sap-leonardo-ai.png',
    website: 'https://www.sap.com/leonardo-ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Manufacturing & Industry 4.0',
    categorySlug: 'manufacturing-industry40',
    subcategory: 'Supply Chain Optimization',
    subcategorySlug: 'supply-chain-optimization',
    description: 'SAP Leonardo AI enhances supply chain operations with AI-powered demand forecasting, inventory optimization, logistics planning, and intelligent supply chain analytics.',
    features: ['AI demand forecasting', 'Inventory optimization', 'Logistics planning', 'Supply chain analytics', 'Risk management', 'Supplier collaboration', 'Order management', 'Integration platform'],
    useCases: ['Demand forecasting', 'Inventory optimization', 'Logistics planning', 'Supply chain analytics', 'Risk management', 'Supplier collaboration', 'Order management', 'Procurement optimization'],
    tags: ['supply-chain', 'ai-forecasting', 'inventory-optimization', 'logistics-planning', 'demand-forecasting'],
    rating: 4.6,
    reviewCount: 18000,
    alternatives: ['Oracle SCM', 'JDA Software', 'Kinaxis'],
    integrations: ['ERP systems', 'WMS systems', 'TMS systems', 'Supplier portals', 'Cloud platforms', 'Mobile apps', 'Analytics tools', 'IoT devices'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.sap.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  {
    name: 'Oracle SCM AI',
    slug: 'oracle-scm-ai',
    tagline: 'AI-enhanced supply chain management and planning platform',
    logoUrl: '/logos/oracle-scm-ai.png',
    website: 'https://www.oracle.com/scm-ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Manufacturing & Industry 4.0',
    categorySlug: 'manufacturing-industry40',
    subcategory: 'Supply Chain Optimization',
    subcategorySlug: 'supply-chain-optimization',
    description: 'Oracle SCM AI enhances supply chain planning with AI-powered optimization algorithms, demand sensing, inventory management, and collaborative supply chain execution.',
    features: ['AI optimization algorithms', 'Demand sensing', 'Inventory management', 'Supply chain execution', 'Planning automation', 'Risk assessment', 'Performance analytics', 'Integration capabilities'],
    useCases: ['Supply chain planning', 'Demand sensing', 'Inventory management', 'Supply chain execution', 'Planning automation', 'Risk assessment', 'Performance analytics', 'Collaborative planning'],
    tags: ['supply-chain-management', 'ai-optimization', 'demand-sensing', 'inventory-management', 'planning-automation'],
    rating: 4.5,
    reviewCount: 16000,
    alternatives: ['SAP Leonardo', 'JDA Software', 'Kinaxis'],
    integrations: ['ERP systems', 'WMS systems', 'TMS systems', 'Supplier portals', 'Cloud platforms', 'Mobile apps', 'Analytics tools', 'IoT devices'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.oracle.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  }
];