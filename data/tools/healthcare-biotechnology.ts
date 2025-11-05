import { ToolEntry } from '../tools';

export const healthcareBiotechnologyTools: ToolEntry[] = [
  // Medical Imaging AI
  {
    name: 'Butterfly iQ',
    slug: 'butterfly-iq',
    tagline: 'Handheld whole-body ultrasound with smartphone connectivity',
    logoUrl: '/logos/butterfly-iq.png',
    website: 'https://www.butterflynetwork.com',
    pricing: 'paid',
    badges: ['popular', 'trending'],
    category: 'Health & Biotechnology',
    categorySlug: 'health-biotechnology',
    subcategory: 'Medical Imaging AI',
    subcategorySlug: 'medical-imaging-ai',
    description: 'Butterfly iQ is a handheld, whole-body ultrasound system that connects directly to smartphones and tablets. It uses semiconductor technology to create a portable, affordable ultrasound solution with AI-powered guidance.',
    features: ['Handheld ultrasound probe', 'Smartphone connectivity', 'AI guidance', 'Telemedicine support', 'Cloud storage', 'Image sharing', 'Training modules', 'Specialty applications'],
    useCases: ['Point-of-care ultrasound', 'Emergency medicine', 'Primary care', 'Telemedicine', 'Medical education', 'Remote healthcare', 'Sports medicine', 'Pediatric imaging'],
    tags: ['medical-imaging', 'ultrasound', 'point-of-care', 'telemedicine', 'healthcare-ai'],
    rating: 4.6,
    reviewCount: 3200,
    alternatives: ['Clarius', 'SonoSite', 'GE Healthcare Vivid'],
    integrations: ['iOS', 'Android', 'EHR systems', 'Cloud storage', 'Telemedicine platforms'],
    pricingDetails: {
      type: 'paid',
      price: 'Starting at $1,999 for the probe, subscription from $39/month',
      url: 'https://www.butterflynetwork.com/pricing',
      description: 'Hardware and software subscription model'
    }
  },
  {
    name: 'Zebra Medical Vision',
    slug: 'zebra-medical-vision',
    tagline: 'AI-powered medical imaging analytics platform',
    logoUrl: '/logos/zebra-medical.png',
    website: 'https://www.zebra-med.com',
    pricing: 'enterprise',
    badges: ['enterprise', 'trending'],
    category: 'Health & Biotechnology',
    categorySlug: 'health-biotechnology',
    subcategory: 'Medical Imaging AI',
    subcategorySlug: 'medical-imaging-ai',
    description: 'Zebra Medical Vision provides AI-powered medical imaging analytics that help radiologists detect and diagnose conditions from medical scans with high accuracy.',
    features: ['Automated scan analysis', 'Radiology workflow', 'Disease detection', 'Risk scoring', 'Report generation', 'Quality assurance', 'Integration capabilities', 'Multi-modality support'],
    useCases: ['Radiology departments', 'Healthcare systems', 'Medical imaging centers', 'Clinical decision support', 'Population health', 'Early disease detection', 'Radiologist productivity', 'Quality improvement'],
    tags: ['medical-imaging', 'radiology', 'ai-diagnostics', 'healthcare-analytics', 'disease-detection'],
    rating: 4.4,
    reviewCount: 1800,
    alternatives: ['Aidoc', 'Aira', 'Enlitic'],
    integrations: ['PACS systems', 'EHR platforms', 'DICOM viewers', 'Cloud storage', 'Radiology information systems'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.zebra-med.com/contact',
      description: 'Enterprise licensing based on volume and features'
    }
  },
  
  // Drug Discovery AI
  {
    name: 'DeepMind AlphaFold',
    slug: 'deepmind-alphafold',
    tagline: 'AI system for protein structure prediction',
    logoUrl: '/logos/alphafold.png',
    website: 'https://www.deepmind.com/research/highlighted-research/alphafold',
    pricing: 'free',
    badges: ['community-favorite', 'trending'],
    category: 'Health & Biotechnology',
    categorySlug: 'health-biotechnology',
    subcategory: 'Drug Discovery AI',
    subcategorySlug: 'drug-discovery-ai',
    description: 'AlphaFold is an AI system developed by DeepMind that predicts protein structures with unprecedented accuracy, revolutionizing structural biology and drug discovery.',
    features: ['Protein structure prediction', 'Database access', 'Research tools', 'Open source models', 'API access', 'Visualization tools', 'Sequence analysis', 'Structural biology'],
    useCases: ['Drug discovery', 'Protein engineering', 'Structural biology research', 'Enzyme design', 'Therapeutic development', 'Academic research', 'Biotechnology innovation', 'Pharmaceutical R&D'],
    tags: ['drug-discovery', 'protein-structure', 'structural-biology', 'ai-research', 'biotechnology'],
    rating: 4.8,
    reviewCount: 5600,
    alternatives: ['RoseTTAFold', 'ESMFold', 'ColabFold'],
    integrations: ['Python', 'Jupyter Notebooks', 'Google Colab', 'Research databases', 'Molecular visualization'],
    pricingDetails: {
      type: 'free',
      price: 'Completely free for research use',
      url: 'https://github.com/google-deepmind/alphafold',
      description: 'Open source research tool'
    }
  },
  {
    name: 'Atomwise',
    slug: 'atomwise',
    tagline: 'AI-powered drug discovery platform',
    logoUrl: '/logos/atomwise.png',
    website: 'https://www.atomwise.com',
    pricing: 'enterprise',
    badges: ['enterprise'],
    category: 'Health & Biotechnology',
    categorySlug: 'health-biotechnology',
    subcategory: 'Drug Discovery AI',
    subcategorySlug: 'drug-discovery-ai',
    description: 'Atomwise uses AI to predict how small molecules will bind to proteins, accelerating drug discovery and reducing development costs for pharmaceutical companies.',
    features: ['Molecular binding prediction', 'Virtual screening', 'Lead optimization', 'Toxicity prediction', 'ADMET modeling', 'Target identification', 'Drug repurposing', 'Collaborative platform'],
    useCases: ['Pharmaceutical R&D', 'Biotech innovation', 'Academic research', 'Drug repurposing', 'Lead compound discovery', 'Toxicity screening', 'Therapeutic development', 'Molecular design'],
    tags: ['drug-discovery', 'ai-pharma', 'molecular-modeling', 'virtual-screening', 'lead-optimization'],
    rating: 4.3,
    reviewCount: 2100,
    alternatives: ['Schrödinger', 'Relay Therapeutics', 'Exscientia'],
    integrations: ['Chemical databases', 'Molecular visualization', 'Research platforms', 'Data analytics', 'Collaboration tools'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.atomwise.com/contact/',
      description: 'Licensing based on research scope and partnership terms'
    }
  },
  
  // Genomics & Precision Medicine
  {
    name: 'Illumina DRAGEN',
    slug: 'illumina-dragen',
    tagline: 'Real-time genomic data analysis platform',
    logoUrl: '/logos/illumina.png',
    website: 'https://www.illumina.com/products/by-type/informatics-products/dragen-bio-it-platform.html',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Health & Biotechnology',
    categorySlug: 'health-biotechnology',
    subcategory: 'Genomics & Precision Medicine',
    subcategorySlug: 'genomics-precision-medicine',
    description: 'DRAGEN is Illumina\'s real-time genomic data analysis platform that provides ultra-rapid secondary analysis of sequencing data for clinical and research applications.',
    features: ['Real-time analysis', 'Secondary analysis', 'Variant calling', 'RNA quantification', 'Germline and somatic analysis', 'HLA typing', 'Quality metrics', 'Cloud deployment'],
    useCases: ['Clinical genomics', 'Cancer research', 'Population screening', 'Precision medicine', 'Pharmacogenomics', 'Infectious disease', 'Rare disease diagnosis', 'Research applications'],
    tags: ['genomics', 'dna-sequencing', 'precision-medicine', 'variant-calling', 'bioinformatics'],
    rating: 4.5,
    reviewCount: 2800,
    alternatives: ['DNAnexus', 'Seven Bridges', 'Veracyte'],
    integrations: ['Illumina sequencers', 'EHR systems', 'Cloud platforms', 'Research databases', 'Clinical decision support'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Hardware and software licensing',
      url: 'https://www.illumina.com/products/by-type/informatics-products/dragen-bio-it-platform.html',
      description: 'Hardware appliance or cloud service options'
    }
  },
  {
    name: 'Tempus',
    slug: 'tempus',
    tagline: 'AI-powered precision medicine platform',
    logoUrl: '/logos/tempus.png',
    website: 'https://www.tempus.com',
    pricing: 'enterprise',
    badges: ['enterprise', 'trending'],
    category: 'Health & Biotechnology',
    categorySlug: 'health-biotechnology',
    subcategory: 'Genomics & Precision Medicine',
    subcategorySlug: 'genomics-precision-medicine',
    description: 'Tempus is a technology company building the world\'s largest library of clinical and molecular data with analytical and AI capabilities to enable personalized medicine.',
    features: ['Molecular profiling', 'Clinical data integration', 'AI-powered analytics', 'Treatment recommendations', 'Outcome tracking', 'Research collaboration', 'Data security', 'Regulatory compliance'],
    useCases: ['Oncology care', 'Precision medicine', 'Clinical research', 'Drug development', 'Patient stratification', 'Treatment selection', 'Outcome prediction', 'Healthcare innovation'],
    tags: ['precision-medicine', 'oncology', 'clinical-data', 'molecular-profiling', 'ai-healthcare'],
    rating: 4.4,
    reviewCount: 1900,
    alternatives: ['Foundation Medicine', 'Guardant Health', 'Personalis'],
    integrations: ['EHR systems', 'Lab information systems', 'Research platforms', 'Clinical trial systems', 'Telemedicine'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.tempus.com/contact/',
      description: 'Partnership and licensing models for healthcare systems'
    }
  }
];