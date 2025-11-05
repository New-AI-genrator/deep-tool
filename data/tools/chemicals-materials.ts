import { ToolEntry } from '../tools';

export const chemicalsMaterialsTools: ToolEntry[] = [
  // Molecular Design
  {
    name: 'Materials Studio AI',
    slug: 'materials-studio-ai',
    tagline: 'AI-powered materials modeling and molecular design platform',
    logoUrl: '/logos/materials-studio-ai.png',
    website: 'https://www.materialsstudio.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Chemicals & Materials',
    categorySlug: 'chemicals-materials',
    subcategory: 'Molecular Design',
    subcategorySlug: 'molecular-design',
    description: 'Materials Studio AI enhances materials research with AI-powered molecular modeling, quantum chemistry calculations, property prediction, and intelligent material design for chemical and materials science applications.',
    features: ['AI molecular modeling', 'Quantum chemistry', 'Property prediction', 'Material design', 'Structure optimization', 'Reaction modeling', 'Data visualization', 'Research collaboration'],
    useCases: ['Molecular modeling', 'Quantum chemistry', 'Property prediction', 'Material design', 'Structure optimization', 'Reaction modeling', 'Data visualization', 'Research collaboration'],
    tags: ['molecular-modeling', 'ai-quantum-chemistry', 'property-prediction', 'material-design', 'structure-optimization'],
    rating: 4.8,
    reviewCount: 9500,
    alternatives: ['Schrödinger', 'Gaussian', 'Molpro'],
    integrations: ['Research databases', 'Molecular visualization', 'Laboratory equipment', 'Data processing', 'Cloud platforms', 'Analytics tools', 'Collaboration tools', 'Scientific software'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.materialsstudio.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  {
    name: 'Schrödinger Materials AI',
    slug: 'schrodinger-materials-ai',
    tagline: 'AI-enhanced computational chemistry and materials science platform',
    logoUrl: '/logos/schrodinger-materials-ai.png',
    website: 'https://www.schrodinger.com/materials-ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Chemicals & Materials',
    categorySlug: 'chemicals-materials',
    subcategory: 'Molecular Design',
    subcategorySlug: 'molecular-design',
    description: 'Schrödinger Materials AI enhances materials discovery with AI-powered quantum mechanics, molecular dynamics, property calculations, and intelligent compound optimization for chemical and pharmaceutical research.',
    features: ['AI quantum mechanics', 'Molecular dynamics', 'Property calculations', 'Compound optimization', 'Binding affinity', 'ADMET prediction', 'Computational chemistry', 'Workflow automation'],
    useCases: ['Quantum mechanics', 'Molecular dynamics', 'Property calculations', 'Compound optimization', 'Binding affinity', 'ADMET prediction', 'Computational chemistry', 'Workflow automation'],
    tags: ['computational-chemistry', 'ai-quantum-mechanics', 'molecular-dynamics', 'property-calculations', 'compound-optimization'],
    rating: 4.7,
    reviewCount: 8500,
    alternatives: ['Materials Studio', 'Gaussian', 'Molpro'],
    integrations: ['Research databases', 'Molecular visualization', 'Laboratory equipment', 'Data processing', 'Cloud platforms', 'Analytics tools', 'Collaboration tools', 'Scientific software'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.schrodinger.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  
  // Process Optimization
  {
    name: 'Aspen AI',
    slug: 'aspen-ai',
    tagline: 'AI-powered chemical process optimization and plant operations platform',
    logoUrl: '/logos/aspen-ai.png',
    website: 'https://www.aspentech.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Chemicals & Materials',
    categorySlug: 'chemicals-materials',
    subcategory: 'Process Optimization',
    subcategorySlug: 'process-optimization',
    description: 'Aspen AI enhances chemical manufacturing with AI-powered process simulation, optimization algorithms, energy management, and intelligent plant operations for chemical and petrochemical facilities.',
    features: ['AI process simulation', 'Optimization algorithms', 'Energy management', 'Plant operations', 'Safety monitoring', 'Quality control', 'Predictive maintenance', 'Performance analytics'],
    useCases: ['Process simulation', 'Optimization algorithms', 'Energy management', 'Plant operations', 'Safety monitoring', 'Quality control', 'Predictive maintenance', 'Performance analytics'],
    tags: ['chemical-process-optimization', 'ai-process-simulation', 'energy-management', 'plant-operations', 'safety-monitoring'],
    rating: 4.9,
    reviewCount: 15000,
    alternatives: ['Honeywell UOP', 'KBC', 'Chemstations'],
    integrations: ['Process equipment', 'Control systems', 'SCADA systems', 'Data processing', 'Cloud platforms', 'Analytics tools', 'Safety systems', 'ERP systems'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.aspentech.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  {
    name: 'Honeywell UOP AI',
    slug: 'honeywell-uop-ai',
    tagline: 'AI-enhanced refining and petrochemical process optimization',
    logoUrl: '/logos/honeywell-uop-ai.png',
    website: 'https://www.honeywelluop.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Chemicals & Materials',
    categorySlug: 'chemicals-materials',
    subcategory: 'Process Optimization',
    subcategorySlug: 'process-optimization',
    description: 'Honeywell UOP AI enhances refining operations with AI-powered catalyst optimization, process control, yield maximization, and intelligent plant management for oil refining and petrochemical production.',
    features: ['AI catalyst optimization', 'Process control', 'Yield maximization', 'Plant management', 'Energy efficiency', 'Emissions reduction', 'Safety systems', 'Performance monitoring'],
    useCases: ['Catalyst optimization', 'Process control', 'Yield maximization', 'Plant management', 'Energy efficiency', 'Emissions reduction', 'Safety systems', 'Performance monitoring'],
    tags: ['refining-optimization', 'ai-catalyst-optimization', 'process-control', 'yield-maximization', 'plant-management'],
    rating: 4.8,
    reviewCount: 12000,
    alternatives: ['Aspen', 'KBC', 'Chemstations'],
    integrations: ['Process equipment', 'Control systems', 'SCADA systems', 'Data processing', 'Cloud platforms', 'Analytics tools', 'Safety systems', 'ERP systems'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.honeywelluop.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  
  // Quality Control
  {
    name: 'Thermo Fisher Scientific Materials AI',
    slug: 'thermo-fisher-scientific-materials-ai',
    tagline: 'AI-powered materials characterization and quality analysis platform',
    logoUrl: '/logos/thermo-fisher-scientific-materials-ai.png',
    website: 'https://www.thermofisher.com/materials-ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Chemicals & Materials',
    categorySlug: 'chemicals-materials',
    subcategory: 'Quality Control',
    subcategorySlug: 'quality-control',
    description: 'Thermo Fisher Scientific Materials AI enhances materials quality with AI-powered spectroscopy analysis, compositional testing, property verification, and intelligent quality assurance for chemical and materials production.',
    features: ['AI spectroscopy analysis', 'Compositional testing', 'Property verification', 'Quality assurance', 'Defect detection', 'Batch monitoring', 'Data analytics', 'Compliance tracking'],
    useCases: ['Spectroscopy analysis', 'Compositional testing', 'Property verification', 'Quality assurance', 'Defect detection', 'Batch monitoring', 'Data analytics', 'Compliance tracking'],
    tags: ['materials-characterization', 'ai-spectroscopy-analysis', 'compositional-testing', 'property-verification', 'quality-assurance'],
    rating: 4.7,
    reviewCount: 18000,
    alternatives: ['Agilent Technologies', 'PerkinElmer', 'Bruker'],
    integrations: ['Analytical instruments', 'Laboratory equipment', 'Data processing', 'Cloud platforms', 'Analytics tools', 'Quality systems', 'ERP systems', 'Compliance tools'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.thermofisher.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  {
    name: 'Agilent Technologies AI',
    slug: 'agilent-technologies-ai',
    tagline: 'AI-enhanced analytical instrumentation and materials testing solutions',
    logoUrl: '/logos/agilent-technologies-ai.png',
    website: 'https://www.agilent.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Chemicals & Materials',
    categorySlug: 'chemicals-materials',
    subcategory: 'Quality Control',
    subcategorySlug: 'quality-control',
    description: 'Agilent Technologies AI enhances materials testing with AI-powered chromatography analysis, mass spectrometry, elemental analysis, and intelligent quality control for chemical and materials characterization.',
    features: ['AI chromatography analysis', 'Mass spectrometry', 'Elemental analysis', 'Quality control', 'Sample processing', 'Data interpretation', 'Instrument automation', 'Performance analytics'],
    useCases: ['Chromatography analysis', 'Mass spectrometry', 'Elemental analysis', 'Quality control', 'Sample processing', 'Data interpretation', 'Instrument automation', 'Performance analytics'],
    tags: ['analytical-instrumentation', 'ai-chromatography-analysis', 'mass-spectrometry', 'elemental-analysis', 'quality-control'],
    rating: 4.6,
    reviewCount: 15000,
    alternatives: ['Thermo Fisher Scientific', 'PerkinElmer', 'Bruker'],
    integrations: ['Analytical instruments', 'Laboratory equipment', 'Data processing', 'Cloud platforms', 'Analytics tools', 'Quality systems', 'ERP systems', 'Compliance tools'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.agilent.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  }
];