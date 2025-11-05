import { ToolEntry } from '../tools';

export const legalComplianceTools: ToolEntry[] = [
  // Legal Research
  {
    name: 'LexisNexis AI',
    slug: 'lexisnexis-ai',
    tagline: 'AI-powered legal research and case law analysis platform',
    logoUrl: '/logos/lexisnexis-ai.png',
    website: 'https://www.lexisnexis.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Legal & Compliance',
    categorySlug: 'legal-compliance',
    subcategory: 'Legal Research',
    subcategorySlug: 'legal-research',
    description: 'LexisNexis AI enhances legal research with AI-powered case law analysis, precedent identification, legal citation checking, and regulatory compliance monitoring.',
    features: ['AI case law analysis', 'Precedent identification', 'Legal citation checking', 'Regulatory compliance', 'Document review', 'Legal analytics', 'Court data', 'Mobile access'],
    useCases: ['Legal research', 'Case preparation', 'Precedent analysis', 'Regulatory compliance', 'Document review', 'Legal writing', 'Court preparation', 'Client representation'],
    tags: ['legal-research', 'ai-analytics', 'case-law', 'precedent-identification', 'regulatory-compliance'],
    rating: 4.7,
    reviewCount: 15000,
    alternatives: ['Westlaw', 'Bloomberg Law', 'Casetext'],
    integrations: ['Microsoft Office', 'Google Workspace', 'PDF editors', 'Case management systems', 'Document automation', 'E-discovery platforms', 'Court filing systems', 'Legal databases'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.lexisnexis.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  {
    name: 'Westlaw AI',
    slug: 'westlaw-ai',
    tagline: 'AI-enhanced legal database and research platform',
    logoUrl: '/logos/westlaw-ai.png',
    website: 'https://www.westlaw.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Legal & Compliance',
    categorySlug: 'legal-compliance',
    subcategory: 'Legal Research',
    subcategorySlug: 'legal-research',
    description: 'Westlaw AI enhances legal research with AI-powered document analysis, case prediction, legal reasoning, and intelligent search across comprehensive legal databases.',
    features: ['AI document analysis', 'Case prediction', 'Legal reasoning', 'Intelligent search', 'Primary sources', 'Secondary sources', 'Practice tools', 'Expert analysis'],
    useCases: ['Legal research', 'Case analysis', 'Legal writing', 'Document review', 'Case prediction', 'Practice guidance', 'Client counseling', 'Court preparation'],
    tags: ['legal-database', 'ai-research', 'document-analysis', 'case-prediction', 'intelligent-search'],
    rating: 4.8,
    reviewCount: 20000,
    alternatives: ['LexisNexis', 'Bloomberg Law', 'Casetext'],
    integrations: ['Microsoft Office', 'Google Workspace', 'PDF editors', 'Case management systems', 'Document automation', 'E-discovery platforms', 'Court filing systems', 'Legal research tools'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.westlaw.com/pricing',
      description: 'Enterprise solution with custom pricing'
    }
  },
  
  // Contract Management
  {
    name: 'Ironclad AI',
    slug: 'ironclad-ai',
    tagline: 'AI-powered contract lifecycle management platform',
    logoUrl: '/logos/ironclad-ai.png',
    website: 'https://www.ironclad.com/ai',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Legal & Compliance',
    categorySlug: 'legal-compliance',
    subcategory: 'Contract Management',
    subcategorySlug: 'contract-management',
    description: 'Ironclad AI enhances contract management with AI-powered clause analysis, risk assessment, automated review, and intelligent contract negotiation workflows.',
    features: ['AI clause analysis', 'Risk assessment', 'Automated review', 'Negotiation workflows', 'Template library', 'E-signatures', 'Analytics dashboard', 'Integration hub'],
    useCases: ['Contract creation', 'Contract review', 'Risk assessment', 'Negotiation management', 'Contract storage', 'Compliance monitoring', 'Renewal tracking', 'Vendor management'],
    tags: ['contract-management', 'ai-analysis', 'risk-assessment', 'automated-review', 'negotiation-workflows'],
    rating: 4.6,
    reviewCount: 8500,
    alternatives: ['DocuSign CLM', 'Conga', 'ContractWorks'],
    integrations: ['Salesforce', 'HubSpot', 'NetSuite', 'QuickBooks', 'DocuSign', 'Adobe Sign', 'Microsoft Dynamics', 'Google Workspace'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free tier available, Professional from $65/user/month, Business from $95/user/month, Enterprise pricing available',
      url: 'https://www.ironclad.com/pricing',
      description: 'Different tiers based on features and user count'
    }
  },
  {
    name: 'DocuSign AI',
    slug: 'docusign-ai',
    tagline: 'AI-enhanced electronic signature and contract automation platform',
    logoUrl: '/logos/docusign-ai.png',
    website: 'https://www.docusign.com/ai',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Legal & Compliance',
    categorySlug: 'legal-compliance',
    subcategory: 'Contract Management',
    subcategorySlug: 'contract-management',
    description: 'DocuSign AI enhances electronic signatures with AI-powered document understanding, automated workflows, compliance monitoring, and intelligent contract analytics.',
    features: ['AI document understanding', 'Automated workflows', 'Compliance monitoring', 'Contract analytics', 'E-signatures', 'Mobile signing', 'Audit trail', 'API integration'],
    useCases: ['Document signing', 'Contract automation', 'Workflow management', 'Compliance tracking', 'Document storage', 'Audit preparation', 'Remote collaboration', 'Legal processes'],
    tags: ['electronic-signatures', 'ai-workflows', 'contract-automation', 'compliance-monitoring', 'document-analytics'],
    rating: 4.7,
    reviewCount: 45000,
    alternatives: ['Adobe Sign', 'HelloSign', 'PandaDoc'],
    integrations: ['Salesforce', 'Microsoft 365', 'Google Workspace', 'NetSuite', 'Workday', 'SAP', 'Box', 'Dropbox'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free tier available, Basic from $10/month, Standard from $25/month, Business Pro from $40/month',
      url: 'https://www.docusign.com/pricing',
      description: 'Different tiers based on features and document volume'
    }
  },
  
  // Regulatory Compliance
  {
    name: 'LogicGate AI',
    slug: 'logicgate-ai',
    tagline: 'AI-powered governance, risk, and compliance automation platform',
    logoUrl: '/logos/logicgate-ai.png',
    website: 'https://www.logicgate.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Legal & Compliance',
    categorySlug: 'legal-compliance',
    subcategory: 'Regulatory Compliance',
    subcategorySlug: 'regulatory-compliance',
    description: 'LogicGate AI enhances GRC with AI-powered risk assessment, compliance automation, policy management, and regulatory monitoring across complex regulatory landscapes.',
    features: ['AI risk assessment', 'Compliance automation', 'Policy management', 'Regulatory monitoring', 'Audit management', 'Reporting dashboard', 'Workflow automation', 'Mobile access'],
    useCases: ['Risk management', 'Compliance monitoring', 'Policy management', 'Audit preparation', 'Regulatory reporting', 'Incident management', 'Training management', 'Vendor risk'],
    tags: ['governance-risk-compliance', 'ai-assessment', 'policy-management', 'regulatory-monitoring', 'compliance-automation'],
    rating: 4.5,
    reviewCount: 6500,
    alternatives: ['RSA Archer', 'MetricStream', 'SAP GRC'],
    integrations: ['Microsoft 365', 'Google Workspace', 'ServiceNow', 'Jira', 'Salesforce', 'Workday', 'Active Directory', 'SIEM tools'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.logicgate.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  {
    name: 'Recall AI',
    slug: 'recall-ai',
    tagline: 'AI-powered data privacy and recall compliance platform',
    logoUrl: '/logos/recall-ai.png',
    website: 'https://www.recall.ai',
    pricing: 'freemium',
    badges: ['community-favorite', 'trending'],
    category: 'Legal & Compliance',
    categorySlug: 'legal-compliance',
    subcategory: 'Regulatory Compliance',
    subcategorySlug: 'regulatory-compliance',
    description: 'Recall AI enhances data privacy compliance with AI-powered data discovery, privacy rights management, breach detection, and automated compliance reporting for global regulations.',
    features: ['AI data discovery', 'Privacy rights management', 'Breach detection', 'Compliance reporting', 'Data mapping', 'Consent management', 'DSAR automation', 'Regulation tracking'],
    useCases: ['GDPR compliance', 'CCPA compliance', 'Data privacy management', 'Breach response', 'Privacy rights fulfillment', 'Compliance reporting', 'Data protection', 'Regulatory monitoring'],
    tags: ['data-privacy', 'ai-compliance', 'gdpr-compliance', 'breach-detection', 'privacy-rights'],
    rating: 4.6,
    reviewCount: 9500,
    alternatives: ['OneTrust', 'TrustArc', 'WireWheel'],
    integrations: ['Microsoft 365', 'Google Workspace', 'Salesforce', 'ServiceNow', 'Box', 'Dropbox', 'Slack', 'Zoom'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free tier available, Starter from $99/month, Professional from $299/month, Enterprise pricing available',
      url: 'https://www.recall.ai/pricing',
      description: 'Different tiers based on features and data volume'
    }
  }
];