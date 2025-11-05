import { ToolEntry } from '../tools';

export const climateSustainabilityTools: ToolEntry[] = [
  // Carbon Management
  {
    name: 'Watershed',
    slug: 'watershed',
    tagline: 'Carbon accounting and climate management platform',
    logoUrl: '/logos/watershed.png',
    website: 'https://watershed.com',
    pricing: 'enterprise',
    badges: ['enterprise', 'trending'],
    category: 'Climate & Sustainability',
    categorySlug: 'climate-sustainability',
    subcategory: 'Carbon Management',
    subcategorySlug: 'carbon-management',
    description: 'Watershed is a comprehensive carbon accounting and climate management platform that helps companies measure, report, and reduce their carbon emissions across all scopes.',
    features: ['Carbon accounting', 'Scope 1-3 tracking', 'Reporting automation', 'Target setting', 'Decarbonization planning', 'Supply chain visibility', 'Regulatory compliance', 'Stakeholder reporting'],
    useCases: ['Corporate sustainability', 'ESG reporting', 'Carbon footprinting', 'Regulatory compliance', 'Supply chain decarbonization', 'Science-based targets', 'Investor reporting', 'Climate strategy'],
    tags: ['carbon-accounting', 'esg', 'sustainability', 'climate-action', 'carbon-footprint'],
    rating: 4.5,
    reviewCount: 1200,
    alternatives: ['Persefoni', 'Sphera', 'IBM Envizi'],
    integrations: ['ERP systems', 'Accounting software', 'Supply chain platforms', 'EHS systems', 'Cloud storage'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://watershed.com/contact/',
      description: 'Pricing based on company size and requirements'
    }
  },
  {
    name: 'Persefoni',
    slug: 'persefoni',
    tagline: 'AI-powered carbon accounting and ESG software',
    logoUrl: '/logos/persefoni.png',
    website: 'https://www.persefoni.com',
    pricing: 'enterprise',
    badges: ['enterprise'],
    category: 'Climate & Sustainability',
    categorySlug: 'climate-sustainability',
    subcategory: 'Carbon Management',
    subcategorySlug: 'carbon-management',
    description: 'Persefoni is an AI-powered carbon accounting and ESG software platform that helps organizations measure, manage, and monetize their environmental impact.',
    features: ['Carbon footprinting', 'AI-powered analytics', 'GHG protocol compliance', 'Scenario modeling', 'Target tracking', 'Investor reporting', 'Supply chain analytics', 'Regulatory updates'],
    useCases: ['ESG reporting', 'Carbon accounting', 'Sustainability management', 'Investor relations', 'Regulatory compliance', 'Supply chain sustainability', 'Climate risk assessment', 'Stakeholder communication'],
    tags: ['carbon-accounting', 'esg-software', 'ai-analytics', 'sustainability-management', 'climate-reporting'],
    rating: 4.3,
    reviewCount: 900,
    alternatives: ['Watershed', 'Sphera', 'IBM Envizi'],
    integrations: ['ERP systems', 'Accounting platforms', 'Supply chain tools', 'Data warehouses', 'Cloud services'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.persefoni.com/contact/',
      description: 'Enterprise licensing based on organizational needs'
    }
  },
  
  // Renewable Energy
  {
    name: 'HOMER Energy',
    slug: 'homer-energy',
    tagline: 'Microgrid design and optimization software',
    logoUrl: '/logos/homer-energy.png',
    website: 'https://www.homerenergy.com',
    pricing: 'freemium',
    badges: ['popular'],
    category: 'Climate & Sustainability',
    categorySlug: 'climate-sustainability',
    subcategory: 'Renewable Energy',
    subcategorySlug: 'renewable-energy',
    description: 'HOMER Energy provides software and training for designing and optimizing microgrids and distributed energy systems with renewable energy sources.',
    features: ['Microgrid modeling', 'Component optimization', 'Financial analysis', 'Sensitivity analysis', 'Load profiling', 'Resource assessment', 'Grid integration', 'Battery optimization'],
    useCases: ['Microgrid design', 'Renewable energy planning', 'Energy storage optimization', 'Rural electrification', 'Island power systems', 'Commercial energy planning', 'Military applications', 'Research and education'],
    tags: ['microgrids', 'renewable-energy', 'energy-storage', 'distributed-energy', 'microgrid-design'],
    rating: 4.4,
    reviewCount: 1500,
    alternatives: ['RETScreen', 'SAM', 'PLEXOS'],
    integrations: ['GIS systems', 'Weather data', 'Financial modeling', 'CAD software', 'Energy meters'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free trial, Professional from $2,400/year, Enterprise custom pricing',
      url: 'https://www.homerenergy.com/pricing.html',
      description: 'Different tiers for individual users, teams, and enterprises'
    }
  },
  {
    name: 'PVsyst',
    slug: 'pvsyst',
    tagline: 'Photovoltaic system simulation software',
    logoUrl: '/logos/pvsyst.png',
    website: 'https://www.pvsyst.com',
    pricing: 'paid',
    badges: ['popular'],
    category: 'Climate & Sustainability',
    categorySlug: 'climate-sustainability',
    subcategory: 'Renewable Energy',
    subcategorySlug: 'renewable-energy',
    description: 'PVsyst is specialized photovoltaic system simulation software that helps engineers and designers optimize solar PV installations through detailed modeling and performance prediction.',
    features: ['Solar irradiation analysis', 'Shading analysis', 'Module performance modeling', 'System losses calculation', 'Financial analysis', 'Weather data integration', '3D modeling', 'Performance ratio assessment'],
    useCases: ['Solar PV design', 'Performance optimization', 'Feasibility studies', 'Technical due diligence', 'Energy yield prediction', 'System monitoring', 'R&D applications', 'Academic research'],
    tags: ['solar-pv', 'photovoltaics', 'energy-simulation', 'solar-design', 'renewable-energy'],
    rating: 4.6,
    reviewCount: 2200,
    alternatives: ['SAM', 'PV*SOL', 'Helioscope'],
    integrations: ['Weather databases', 'GIS systems', 'CAD software', 'Financial tools', 'Monitoring platforms'],
    pricingDetails: {
      type: 'paid',
      price: 'Professional license from $1,500, Academic licenses available',
      url: 'https://www.pvsyst.com/pricing/',
      description: 'Licensing for professionals and academic users'
    }
  },
  
  // Environmental Monitoring
  {
    name: 'Planet Labs',
    slug: 'planet-labs',
    tagline: 'Earth observation and satellite imagery platform',
    logoUrl: '/logos/planet-labs.png',
    website: 'https://www.planet.com',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Climate & Sustainability',
    categorySlug: 'climate-sustainability',
    subcategory: 'Environmental Monitoring',
    subcategorySlug: 'environmental-monitoring',
    description: 'Planet Labs operates the world\'s largest constellation of Earth-imaging satellites, providing daily global coverage to monitor environmental changes and support sustainable decision-making.',
    features: ['Daily satellite imagery', 'PlanetScope constellation', 'SkySat high resolution', 'Analytics tools', 'Change detection', 'Time series analysis', 'API access', 'Cloud platform'],
    useCases: ['Environmental monitoring', 'Agricultural management', 'Forest conservation', 'Disaster response', 'Urban planning', 'Climate research', 'Supply chain monitoring', 'Compliance tracking'],
    tags: ['satellite-imagery', 'earth-observation', 'environmental-monitoring', 'climate-data', 'remote-sensing'],
    rating: 4.7,
    reviewCount: 3100,
    alternatives: ['DigitalGlobe', 'Airbus Defence and Space', 'EOS Data Analytics'],
    integrations: ['GIS platforms', 'Cloud services', 'Analytics tools', 'API frameworks', 'Machine learning platforms'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free for individuals, Team from $250/month, Enterprise custom pricing',
      url: 'https://www.planet.com/products/',
      description: 'Different plans for individual users, teams, and enterprises'
    }
  },
  {
    name: 'Descartes Labs',
    slug: 'descartes-labs',
    tagline: 'Geospatial analytics and Earth observation platform',
    logoUrl: '/logos/descartes-labs.png',
    website: 'https://www.descarteslabs.com',
    pricing: 'enterprise',
    badges: ['enterprise'],
    category: 'Climate & Sustainability',
    categorySlug: 'climate-sustainability',
    subcategory: 'Environmental Monitoring',
    subcategorySlug: 'environmental-monitoring',
    description: 'Descartes Labs provides geospatial analytics and Earth observation data to help organizations understand and predict changes in the physical world through machine learning and satellite imagery.',
    features: ['Satellite data access', 'Machine learning analytics', 'Geospatial processing', 'Time series analysis', 'Predictive modeling', 'Custom algorithms', 'Scalable infrastructure', 'API access'],
    useCases: ['Agricultural analytics', 'Supply chain monitoring', 'Climate risk assessment', 'Natural resource management', 'Disaster response', 'Market intelligence', 'Environmental compliance', 'Research applications'],
    tags: ['geospatial-analytics', 'earth-observation', 'satellite-data', 'machine-learning', 'climate-intelligence'],
    rating: 4.2,
    reviewCount: 800,
    alternatives: ['Planet Labs', 'Google Earth Engine', 'Microsoft Planetary Computer'],
    integrations: ['Cloud platforms', 'GIS software', 'Data science tools', 'API frameworks', 'Machine learning platforms'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.descarteslabs.com/contact/',
      description: 'Enterprise licensing based on usage and requirements'
    }
  }
];