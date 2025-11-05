import { ToolEntry } from '../tools';

export const researchScienceTools: ToolEntry[] = [
  // Academic Research Assistants
  {
    name: 'ResearchRabbit',
    slug: 'researchrabbit',
    tagline: 'AI-powered research assistant for literature discovery and organization',
    logoUrl: '/logos/researchrabbit.png',
    website: 'https://www.researchrabbit.ai',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Research & Science',
    categorySlug: 'research-science',
    subcategory: 'Academic Research Assistants',
    subcategorySlug: 'academic-research-assistants',
    description: 'ResearchRabbit is an AI-powered research assistant that helps researchers discover, organize, and visualize academic literature and their connections.',
    features: ['Literature discovery', 'Citation mapping', 'Research organization', 'Collaboration tools', 'PDF management', 'Reference generation', 'Research tracking', 'Team sharing'],
    useCases: ['Literature review', 'Research discovery', 'Citation management', 'Team collaboration', 'Research organization', 'Academic writing', 'Reference generation', 'Knowledge mapping'],
    tags: ['academic-research', 'literature-review', 'citation-management', 'research-assistant', 'scholarly-communication'],
    rating: 4.6,
    reviewCount: 8500,
    alternatives: ['Connected Papers', 'Litmaps', 'Zotero'],
    integrations: ['Zotero', 'Mendeley', 'Google Scholar', 'PubMed', 'Semantic Scholar', 'ORCID', 'ResearchGate', 'Academia.edu'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free for individuals, Pro from $9/month, Team from $29/month, Campus from $99/month',
      url: 'https://www.researchrabbit.ai/pricing',
      description: 'Different tiers based on features and team size'
    }
  },
  {
    name: 'Elicit',
    slug: 'elicit',
    tagline: 'AI research assistant for finding and summarizing academic papers',
    logoUrl: '/logos/elicit.png',
    website: 'https://elicit.org',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Research & Science',
    categorySlug: 'research-science',
    subcategory: 'Academic Research Assistants',
    subcategorySlug: 'academic-research-assistants',
    description: 'Elicit is an AI research assistant that helps researchers find relevant papers, extract key information, and synthesize findings without manually reading abstracts.',
    features: ['Paper discovery', 'Information extraction', 'Synthesis capabilities', 'Question answering', 'Evidence ranking', 'Research summarization', 'Collaboration tools', 'Export functionality'],
    useCases: ['Literature review', 'Research synthesis', 'Evidence gathering', 'Question answering', 'Paper discovery', 'Research summarization', 'Team collaboration', 'Academic writing'],
    tags: ['academic-research', 'literature-review', 'ai-assistant', 'research-synthesis', 'information-extraction'],
    rating: 4.7,
    reviewCount: 12000,
    alternatives: ['ResearchRabbit', 'Connected Papers', 'Semantic Scholar'],
    integrations: ['Google Scholar', 'PubMed', 'Semantic Scholar', 'Zotero', 'Notion', 'Slack', 'Discord', 'Email'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free for individuals, Researcher from $12/month, Team from $36/month, Enterprise pricing available',
      url: 'https://elicit.org/pricing',
      description: 'Different tiers based on features and usage limits'
    }
  },
  
  // Scientific Discovery & Simulation
  {
    name: 'DeepMind AlphaFold',
    slug: 'deepmind-alphafold',
    tagline: 'AI system for protein structure prediction',
    logoUrl: '/logos/alphafold.png',
    website: 'https://www.deepmind.com/research/highlighted-research/alphafold',
    pricing: 'free',
    badges: ['community-favorite', 'popular'],
    category: 'Research & Science',
    categorySlug: 'research-science',
    subcategory: 'Scientific Discovery & Simulation',
    subcategorySlug: 'scientific-discovery-simulation',
    description: 'AlphaFold is an AI system developed by DeepMind that predicts protein structures with unprecedented accuracy, revolutionizing structural biology and drug discovery.',
    features: ['Protein structure prediction', 'Accuracy assessment', 'Database access', 'Research tools', 'Visualization capabilities', 'API access', 'Collaboration features', 'Open data sharing'],
    useCases: ['Protein structure prediction', 'Drug discovery', 'Structural biology', 'Enzyme engineering', 'Disease research', 'Vaccine development', 'Biotechnology applications', 'Academic research'],
    tags: ['protein-structure', 'structural-biology', 'drug-discovery', 'bioinformatics', 'ai-research'],
    rating: 4.9,
    reviewCount: 15000,
    alternatives: ['RoseTTAFold', 'trRosetta', 'I-TASSER'],
    integrations: ['Protein Data Bank', 'UniProt', 'Ensembl', 'NCBI', 'EMBL-EBI', 'Google Colab', 'Docker', 'Python'],
    pricingDetails: {
      type: 'free',
      price: 'Completely free for research use',
      url: 'https://alphafold.ebi.ac.uk/',
      description: 'Open access to protein structure predictions and tools'
    }
  },
  {
    name: 'Schrödinger',
    slug: 'schrodinger',
    tagline: 'AI-powered molecular simulation and drug discovery platform',
    logoUrl: '/logos/schrodinger.png',
    website: 'https://www.schrodinger.com',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Research & Science',
    categorySlug: 'research-science',
    subcategory: 'Scientific Discovery & Simulation',
    subcategorySlug: 'scientific-discovery-simulation',
    description: 'Schrödinger is an AI-powered molecular simulation platform that enables researchers to model and predict molecular behavior for drug discovery and materials science.',
    features: ['Molecular modeling', 'Drug design', 'Virtual screening', 'Free energy calculations', 'Protein-ligand docking', 'QSAR modeling', 'ADMET prediction', 'Collaboration tools'],
    useCases: ['Drug discovery', 'Materials science', 'Protein engineering', 'Molecular dynamics', 'Virtual screening', 'Lead optimization', 'ADMET prediction', 'Research collaboration'],
    tags: ['molecular-modeling', 'drug-discovery', 'computational-chemistry', 'materials-science', 'ai-simulation'],
    rating: 4.5,
    reviewCount: 6800,
    alternatives: ['Autodock', 'GROMACS', 'AMBER'],
    integrations: ['Python', 'R', 'MATLAB', 'Excel', 'Slack', 'Jupyter', 'AWS', 'Azure'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Discovery from $1,000/month, Suite from $3,000/month, Enterprise pricing available',
      url: 'https://www.schrodinger.com/licensing',
      description: 'Different packages based on research needs and team size'
    }
  },
  
  // Data Mining & Literature Review
  {
    name: 'Iris AI',
    slug: 'iris-ai',
    tagline: 'AI-powered research assistant for scientific literature analysis',
    logoUrl: '/logos/iris-ai.png',
    website: 'https://iris.ai',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Research & Science',
    categorySlug: 'research-science',
    subcategory: 'Data Mining & Literature Review',
    subcategorySlug: 'data-mining-literature-review',
    description: 'Iris AI is an AI-powered research assistant that helps scientists and researchers navigate scientific literature through intelligent topic mapping and content analysis.',
    features: ['Topic mapping', 'Content analysis', 'Literature review', 'Research organization', 'Collaboration tools', 'Data visualization', 'Export capabilities', 'Custom filtering'],
    useCases: ['Literature review', 'Research planning', 'Topic exploration', 'Content analysis', 'Team collaboration', 'Research organization', 'Data visualization', 'Knowledge discovery'],
    tags: ['literature-review', 'research-assistant', 'topic-mapping', 'scientific-analysis', 'ai-literature'],
    rating: 4.4,
    reviewCount: 4200,
    alternatives: ['Elicit', 'ResearchRabbit', 'Semantic Scholar'],
    integrations: ['Zotero', 'Mendeley', 'EndNote', 'Google Scholar', 'PubMed', 'Semantic Scholar', 'ResearchGate', 'Academia.edu'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free for individuals, Researcher from $15/month, Team from $45/month, Enterprise pricing available',
      url: 'https://iris.ai/pricing/',
      description: 'Different tiers based on features and team size'
    }
  },
  {
    name: 'Dimensions AI',
    slug: 'dimensions-ai',
    tagline: 'AI-powered research analytics and insights platform',
    logoUrl: '/logos/dimensions-ai.png',
    website: 'https://www.dimensions.ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Research & Science',
    categorySlug: 'research-science',
    subcategory: 'Data Mining & Literature Review',
    subcategorySlug: 'data-mining-literature-review',
    description: 'Dimensions AI is an AI-powered research analytics platform that provides comprehensive insights into research publications, grants, patents, and clinical trials.',
    features: ['Research analytics', 'Grant tracking', 'Patent analysis', 'Clinical trial data', 'Institution benchmarking', 'Researcher profiling', 'Collaboration mapping', 'Data visualization'],
    useCases: ['Research analytics', 'Grant tracking', 'Patent analysis', 'Institution benchmarking', 'Researcher profiling', 'Collaboration mapping', 'Strategic planning', 'Performance evaluation'],
    tags: ['research-analytics', 'grant-tracking', 'patent-analysis', 'clinical-trials', 'research-insights'],
    rating: 4.6,
    reviewCount: 5800,
    alternatives: ['Web of Science', 'Scopus', 'Google Scholar'],
    integrations: ['ORCID', 'ResearchGate', 'Academia.edu', 'Zotero', 'Mendeley', 'Excel', 'Tableau', 'Power BI'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom pricing based on institutional needs',
      url: 'https://www.dimensions.ai/contact/',
      description: 'Institutional licensing with custom pricing'
    }
  }
];