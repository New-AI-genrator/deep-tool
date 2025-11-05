import { ToolEntry } from '../tools';

export const productivityBusinessTools: ToolEntry[] = [
  // Project & Task Management
  {
    name: 'Notion AI',
    slug: 'notion-ai',
    tagline: 'All-in-one workspace with AI-powered productivity tools',
    logoUrl: '/logos/notion-ai.png',
    website: 'https://www.notion.so/product/ai',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Productivity & Business',
    categorySlug: 'productivity-business',
    subcategory: 'Project & Task Management',
    subcategorySlug: 'project-task-management',
    description: 'Notion AI is an all-in-one workspace that combines note-taking, project management, and AI-powered productivity tools to help teams organize and collaborate more effectively.',
    features: ['AI writing assistant', 'Task management', 'Document collaboration', 'Database creation', 'Template library', 'Real-time editing', 'Custom workflows', 'Integration capabilities'],
    useCases: ['Project planning', 'Team collaboration', 'Content creation', 'Knowledge management', 'Meeting notes', 'Task tracking', 'Document drafting', 'Workflow automation'],
    tags: ['productivity', 'project-management', 'ai-assistant', 'collaboration', 'workspace'],
    rating: 4.7,
    reviewCount: 15000,
    alternatives: ['ClickUp', 'Monday.com', 'Asana'],
    integrations: ['Slack', 'Google Drive', 'Microsoft Office', 'Zoom', 'Figma', 'GitHub', 'Trello', 'Calendar'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free for individuals, Plus from $8/month, Business from $15/month, Enterprise pricing available',
      url: 'https://www.notion.so/pricing',
      description: 'Different tiers based on features and team size'
    }
  },
  {
    name: 'ClickUp AI',
    slug: 'clickup-ai',
    tagline: 'AI-powered workspace for tasks, docs, and goals',
    logoUrl: '/logos/clickup-ai.png',
    website: 'https://clickup.com/ai',
    pricing: 'freemium',
    badges: ['popular'],
    category: 'Productivity & Business',
    categorySlug: 'productivity-business',
    subcategory: 'Project & Task Management',
    subcategorySlug: 'project-task-management',
    description: 'ClickUp AI enhances the ClickUp workspace with AI capabilities for task management, content creation, and productivity optimization.',
    features: ['AI content generation', 'Task automation', 'Meeting summarization', 'Goal tracking', 'Time tracking', 'Reporting', 'Custom views', 'Team collaboration'],
    useCases: ['Task management', 'Project tracking', 'Content creation', 'Meeting documentation', 'Team coordination', 'Goal setting', 'Performance tracking', 'Workflow optimization'],
    tags: ['productivity', 'project-management', 'ai-assistant', 'task-tracking', 'workspace'],
    rating: 4.6,
    reviewCount: 12000,
    alternatives: ['Notion AI', 'Monday.com', 'Asana'],
    integrations: ['Slack', 'Google Workspace', 'Microsoft Office', 'Zoom', 'GitHub', 'Figma', 'Trello', 'Calendar'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free for individuals, Unlimited from $7/month, Business from $12/month, Enterprise pricing available',
      url: 'https://clickup.com/pricing',
      description: 'Different tiers based on features and team size'
    }
  },
  
  // CRM & Sales Automation
  {
    name: 'Salesforce Einstein',
    slug: 'salesforce-einstein',
    tagline: 'AI-powered CRM for sales, service, and marketing',
    logoUrl: '/logos/salesforce-einstein.png',
    website: 'https://www.salesforce.com/products/einstein-ai/',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Productivity & Business',
    categorySlug: 'productivity-business',
    subcategory: 'CRM & Sales Automation',
    subcategorySlug: 'crm-sales-automation',
    description: 'Salesforce Einstein is an AI-powered CRM platform that helps businesses manage customer relationships, automate sales processes, and gain insights from customer data.',
    features: ['Predictive analytics', 'Lead scoring', 'Sales forecasting', 'Customer insights', 'Automated workflows', 'Email automation', 'Meeting insights', 'Service analytics'],
    useCases: ['Customer relationship management', 'Sales process automation', 'Lead qualification', 'Customer service optimization', 'Marketing personalization', 'Sales forecasting', 'Performance tracking', 'Team collaboration'],
    tags: ['crm', 'sales-automation', 'ai-analytics', 'customer-service', 'marketing'],
    rating: 4.5,
    reviewCount: 22000,
    alternatives: ['HubSpot', 'Pipedrive', 'Zoho CRM'],
    integrations: ['Microsoft Office', 'Google Workspace', 'Zoom', 'LinkedIn', 'Twitter', 'Facebook', 'Mailchimp', 'QuickBooks'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom pricing based on requirements',
      url: 'https://www.salesforce.com/products/sales-cloud/pricing/',
      description: 'Multiple editions with different feature sets'
    }
  },
  {
    name: 'HubSpot AI',
    slug: 'hubspot-ai',
    tagline: 'AI-powered inbound marketing and sales platform',
    logoUrl: '/logos/hubspot-ai.png',
    website: 'https://www.hubspot.com/products/crm/ai',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Productivity & Business',
    categorySlug: 'productivity-business',
    subcategory: 'CRM & Sales Automation',
    subcategorySlug: 'crm-sales-automation',
    description: 'HubSpot AI enhances the HubSpot CRM with AI capabilities for marketing, sales, and customer service automation.',
    features: ['Content generation', 'Email personalization', 'Meeting recording', 'Lead scoring', 'Sales automation', 'Marketing automation', 'Customer service tools', 'Analytics dashboard'],
    useCases: ['Lead generation', 'Email marketing', 'Sales automation', 'Customer service', 'Content creation', 'Marketing personalization', 'Performance tracking', 'Team collaboration'],
    tags: ['crm', 'sales-automation', 'ai-marketing', 'inbound-marketing', 'customer-service'],
    rating: 4.4,
    reviewCount: 18000,
    alternatives: ['Salesforce Einstein', 'Pipedrive', 'Zoho CRM'],
    integrations: ['Google Workspace', 'Microsoft Office', 'Zoom', 'LinkedIn', 'Facebook', 'Mailchimp', 'WordPress', 'Shopify'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free for individuals, Starter from $15/month, Professional from $800/month, Enterprise pricing available',
      url: 'https://www.hubspot.com/pricing/crm',
      description: 'Different tiers based on features and team size'
    }
  },
  
  // Data Analysis & Visualization
  {
    name: 'Tableau AI',
    slug: 'tableau-ai',
    tagline: 'AI-powered data visualization and business intelligence',
    logoUrl: '/logos/tableau-ai.png',
    website: 'https://www.tableau.com/products/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Productivity & Business',
    categorySlug: 'productivity-business',
    subcategory: 'Data Analysis & Visualization',
    subcategorySlug: 'data-analysis-visualization',
    description: 'Tableau AI enhances data visualization capabilities with AI-powered insights, natural language queries, and automated analysis.',
    features: ['Natural language queries', 'Automated insights', 'Predictive analytics', 'Data visualization', 'Dashboard creation', 'Collaboration tools', 'Data preparation', 'Real-time analytics'],
    useCases: ['Business intelligence', 'Data visualization', 'Performance tracking', 'Trend analysis', 'Predictive modeling', 'Dashboard creation', 'Data storytelling', 'Team collaboration'],
    tags: ['business-intelligence', 'data-visualization', 'ai-analytics', 'dashboard', 'analytics'],
    rating: 4.3,
    reviewCount: 15000,
    alternatives: ['Power BI', 'Looker', 'Qlik Sense'],
    integrations: ['Microsoft Office', 'Google Workspace', 'Salesforce', 'Snowflake', 'Amazon Redshift', 'SQL Server', 'Oracle', 'MySQL'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Creator from $70/month, Explorer from $35/month, Viewer from $12/month',
      url: 'https://www.tableau.com/pricing',
      description: 'Different roles and access levels with varying features'
    }
  },
  {
    name: 'Power BI AI',
    slug: 'power-bi-ai',
    tagline: 'Microsoft\'s AI-enhanced business analytics tool',
    logoUrl: '/logos/power-bi-ai.png',
    website: 'https://powerbi.microsoft.com/ai/',
    pricing: 'freemium',
    badges: ['enterprise', 'popular'],
    category: 'Productivity & Business',
    categorySlug: 'productivity-business',
    subcategory: 'Data Analysis & Visualization',
    subcategorySlug: 'data-analysis-visualization',
    description: 'Power BI AI brings AI capabilities to Microsoft\'s business analytics tool for data visualization, reporting, and insights.',
    features: ['Natural language queries', 'Automated insights', 'Data visualization', 'Dashboard creation', 'Collaboration tools', 'Data preparation', 'Real-time analytics', 'Integration with Microsoft ecosystem'],
    useCases: ['Business intelligence', 'Data visualization', 'Performance tracking', 'Report automation', 'Data storytelling', 'Dashboard creation', 'Team collaboration', 'Enterprise analytics'],
    tags: ['business-intelligence', 'data-visualization', 'ai-analytics', 'microsoft', 'analytics'],
    rating: 4.4,
    reviewCount: 20000,
    alternatives: ['Tableau AI', 'Looker', 'Qlik Sense'],
    integrations: ['Microsoft Office', 'Azure', 'Dynamics 365', 'SharePoint', 'Teams', 'Excel', 'SQL Server', 'Oracle'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free for individuals, Pro from $9.99/month, Premium from $20/month, Embedded pricing available',
      url: 'https://powerbi.microsoft.com/pricing/',
      description: 'Different tiers based on features and usage'
    }
  }
];