import { ToolEntry } from '../tools';

export const constructionInfrastructureTools: ToolEntry[] = [
  // Project Planning
  {
    name: 'Autodesk Construction AI',
    slug: 'autodesk-construction-ai',
    tagline: 'AI-powered construction planning and building design platform',
    logoUrl: '/logos/autodesk-construction-ai.png',
    website: 'https://www.autodesk.com/construction-ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Construction & Infrastructure',
    categorySlug: 'construction-infrastructure',
    subcategory: 'Project Planning',
    subcategorySlug: 'project-planning',
    description: 'Autodesk Construction AI enhances construction planning with AI-powered 3D modeling, design optimization, material estimation, and intelligent project scheduling for building and infrastructure projects.',
    features: ['AI 3D modeling', 'Design optimization', 'Material estimation', 'Project scheduling', 'Collaboration tools', 'Risk assessment', 'Budget planning', 'Timeline management'],
    useCases: ['3D modeling', 'Design optimization', 'Material estimation', 'Project scheduling', 'Collaboration', 'Risk assessment', 'Budget planning', 'Timeline management'],
    tags: ['construction-planning', 'ai-3d-modeling', 'design-optimization', 'material-estimation', 'project-scheduling'],
    rating: 4.8,
    reviewCount: 25000,
    alternatives: ['Trimble Construction AI', 'Bentley Systems AI', 'Procore'],
    integrations: ['CAD software', 'Project management tools', 'ERP systems', 'Design tools', 'Cloud platforms', 'Analytics tools', 'Collaboration tools', 'Mobile apps'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.autodesk.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  {
    name: 'Trimble Construction AI',
    slug: 'trimble-construction-ai',
    tagline: 'AI-enhanced construction surveying and project management solutions',
    logoUrl: '/logos/trimble-construction-ai.png',
    website: 'https://www.trimble.com/construction-ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Construction & Infrastructure',
    categorySlug: 'construction-infrastructure',
    subcategory: 'Project Planning',
    subcategorySlug: 'project-planning',
    description: 'Trimble Construction AI enhances project planning with AI-powered site surveying, GPS mapping, construction layout, and intelligent project coordination for civil engineering and building projects.',
    features: ['AI site surveying', 'GPS mapping', 'Construction layout', 'Project coordination', 'Data visualization', 'Stakeout automation', 'As-built documentation', 'Quality control'],
    useCases: ['Site surveying', 'GPS mapping', 'Construction layout', 'Project coordination', 'Data visualization', 'Stakeout automation', 'As-built documentation', 'Quality control'],
    tags: ['construction-surveying', 'ai-site-surveying', 'gps-mapping', 'construction-layout', 'project-coordination'],
    rating: 4.7,
    reviewCount: 18000,
    alternatives: ['Autodesk Construction AI', 'Bentley Systems AI', 'Procore'],
    integrations: ['CAD software', 'Project management tools', 'ERP systems', 'Design tools', 'Cloud platforms', 'Analytics tools', 'Collaboration tools', 'Mobile apps'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.trimble.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  
  // Site Management
  {
    name: 'Procore AI',
    slug: 'procore-ai',
    tagline: 'AI-powered construction site management and workflow optimization',
    logoUrl: '/logos/procore-ai.png',
    website: 'https://www.procore.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Construction & Infrastructure',
    categorySlug: 'construction-infrastructure',
    subcategory: 'Site Management',
    subcategorySlug: 'site-management',
    description: 'Procore AI enhances construction site management with AI-powered workflow automation, safety monitoring, quality control, and intelligent resource allocation for active construction projects.',
    features: ['AI workflow automation', 'Safety monitoring', 'Quality control', 'Resource allocation', 'Document management', 'Communication tools', 'Progress tracking', 'Compliance management'],
    useCases: ['Workflow automation', 'Safety monitoring', 'Quality control', 'Resource allocation', 'Document management', 'Communication', 'Progress tracking', 'Compliance management'],
    tags: ['site-management', 'ai-workflow-automation', 'safety-monitoring', 'quality-control', 'resource-allocation'],
    rating: 4.9,
    reviewCount: 35000,
    alternatives: ['BuildSmart AI', 'Fieldwire AI', 'PlanGrid'],
    integrations: ['Construction equipment', 'Mobile devices', 'ERP systems', 'Safety systems', 'Data processing', 'Cloud platforms', 'Analytics tools', 'Communication tools'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.procore.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  {
    name: 'BuildSmart AI',
    slug: 'buildsmart-ai',
    tagline: 'AI-enhanced construction productivity and site safety platform',
    logoUrl: '/logos/buildsmart-ai.png',
    website: 'https://www.buildsmart.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Construction & Infrastructure',
    categorySlug: 'construction-infrastructure',
    subcategory: 'Site Management',
    subcategorySlug: 'site-management',
    description: 'BuildSmart AI enhances construction productivity with AI-powered worker safety monitoring, equipment tracking, material management, and intelligent site supervision for active construction sites.',
    features: ['AI worker safety monitoring', 'Equipment tracking', 'Material management', 'Site supervision', 'Incident prevention', 'Productivity analytics', 'Resource scheduling', 'Performance reporting'],
    useCases: ['Worker safety monitoring', 'Equipment tracking', 'Material management', 'Site supervision', 'Incident prevention', 'Productivity analytics', 'Resource scheduling', 'Performance reporting'],
    tags: ['construction-productivity', 'ai-worker-safety-monitoring', 'equipment-tracking', 'material-management', 'site-supervision'],
    rating: 4.8,
    reviewCount: 22000,
    alternatives: ['Procore AI', 'Fieldwire AI', 'PlanGrid'],
    integrations: ['Construction equipment', 'Mobile devices', 'ERP systems', 'Safety systems', 'Data processing', 'Cloud platforms', 'Analytics tools', 'Communication tools'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.buildsmart.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  
  // Infrastructure Maintenance
  {
    name: 'Bentley Systems AI',
    slug: 'bentley-systems-ai',
    tagline: 'AI-powered infrastructure asset management and maintenance optimization',
    logoUrl: '/logos/bentley-systems-ai.png',
    website: 'https://www.bentley.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Construction & Infrastructure',
    categorySlug: 'construction-infrastructure',
    subcategory: 'Infrastructure Maintenance',
    subcategorySlug: 'infrastructure-maintenance',
    description: 'Bentley Systems AI enhances infrastructure maintenance with AI-powered asset monitoring, predictive maintenance, condition assessment, and intelligent infrastructure management for public and private facilities.',
    features: ['AI asset monitoring', 'Predictive maintenance', 'Condition assessment', 'Infrastructure management', 'Digital twins', 'Performance analytics', 'Lifecycle planning', 'Cost optimization'],
    useCases: ['Asset monitoring', 'Predictive maintenance', 'Condition assessment', 'Infrastructure management', 'Digital twins', 'Performance analytics', 'Lifecycle planning', 'Cost optimization'],
    tags: ['infrastructure-maintenance', 'ai-asset-monitoring', 'predictive-maintenance', 'condition-assessment', 'infrastructure-management'],
    rating: 4.7,
    reviewCount: 28000,
    alternatives: ['IBM Maximo AI', 'SAP EAM AI', 'Infor EAM'],
    integrations: ['Infrastructure systems', 'Sensor networks', 'Maintenance platforms', 'Data processing', 'Cloud platforms', 'Analytics tools', 'GIS mapping', 'ERP systems'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.bentley.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  {
    name: 'IBM Maximo AI',
    slug: 'ibm-maximo-ai',
    tagline: 'AI-enhanced asset management and infrastructure operations platform',
    logoUrl: '/logos/ibm-maximo-ai.png',
    website: 'https://www.ibm.com/maximo-ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Construction & Infrastructure',
    categorySlug: 'construction-infrastructure',
    subcategory: 'Infrastructure Maintenance',
    subcategorySlug: 'infrastructure-maintenance',
    description: 'IBM Maximo AI enhances infrastructure operations with AI-powered work order management, maintenance scheduling, asset tracking, and intelligent facility management for buildings and infrastructure.',
    features: ['AI work order management', 'Maintenance scheduling', 'Asset tracking', 'Facility management', 'Compliance monitoring', 'Resource optimization', 'Performance tracking', 'Reporting dashboard'],
    useCases: ['Work order management', 'Maintenance scheduling', 'Asset tracking', 'Facility management', 'Compliance monitoring', 'Resource optimization', 'Performance tracking', 'Reporting'],
    tags: ['asset-management', 'ai-work-order-management', 'maintenance-scheduling', 'asset-tracking', 'facility-management'],
    rating: 4.6,
    reviewCount: 32000,
    alternatives: ['Bentley Systems AI', 'SAP EAM AI', 'Infor EAM'],
    integrations: ['Infrastructure systems', 'Sensor networks', 'Maintenance platforms', 'Data processing', 'Cloud platforms', 'Analytics tools', 'GIS mapping', 'ERP systems'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.ibm.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  }
];