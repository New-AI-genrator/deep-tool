import { ToolEntry } from '../tools';

export const financeTradingTools: ToolEntry[] = [
  // Accounting
  {
    name: 'QuickBooks AI',
    slug: 'quickbooks-ai',
    tagline: 'AI-powered accounting software for small businesses',
    logoUrl: '/logos/quickbooks-ai.png',
    website: 'https://quickbooks.intuit.com/ai/',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Finance & Trading',
    categorySlug: 'finance-trading',
    subcategory: 'Accounting',
    subcategorySlug: 'accounting',
    description: 'QuickBooks AI enhances the popular accounting software with AI-powered features for automated bookkeeping, expense tracking, and financial insights.',
    features: ['Automated bookkeeping', 'Expense categorization', 'Invoice creation', 'Financial reporting', 'Tax preparation', 'Bank reconciliation', 'Cash flow monitoring', 'Business insights'],
    useCases: ['Bookkeeping automation', 'Expense tracking', 'Invoice management', 'Financial reporting', 'Tax preparation', 'Cash flow management', 'Business analytics', 'Small business accounting'],
    tags: ['accounting', 'bookkeeping', 'small-business', 'financial-management', 'ai-accounting'],
    rating: 4.6,
    reviewCount: 22000,
    alternatives: ['Xero', 'FreshBooks', 'Wave'],
    integrations: ['Bank feeds', 'PayPal', 'Stripe', 'Amazon', 'Shopify', 'Square', 'TSheets', 'Expensify'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free for individuals, Simple Start from $25/month, Essentials from $50/month, Plus from $80/month',
      url: 'https://quickbooks.intuit.com/pricing/',
      description: 'Different tiers based on business size and features'
    }
  },
  {
    name: 'Xero AI',
    slug: 'xero-ai',
    tagline: 'AI-powered cloud accounting software for businesses',
    logoUrl: '/logos/xero-ai.png',
    website: 'https://www.xero.com/ai/',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Finance & Trading',
    categorySlug: 'finance-trading',
    subcategory: 'Accounting',
    subcategorySlug: 'accounting',
    description: 'Xero AI enhances the cloud-based accounting software with AI capabilities for automated data entry, reconciliation, and financial insights.',
    features: ['Automated data entry', 'Bank reconciliation', 'Invoice management', 'Expense tracking', 'Financial reporting', 'Inventory management', 'Payroll integration', 'Multi-currency support'],
    useCases: ['Cloud accounting', 'Automated bookkeeping', 'Invoice management', 'Expense tracking', 'Financial reporting', 'Inventory management', 'Payroll processing', 'Multi-currency transactions'],
    tags: ['accounting', 'cloud-accounting', 'business-finance', 'ai-bookkeeping', 'financial-management'],
    rating: 4.5,
    reviewCount: 18000,
    alternatives: ['QuickBooks', 'FreshBooks', 'Wave'],
    integrations: ['Bank feeds', 'PayPal', 'Stripe', 'Shopify', 'Square', 'Gusto', 'Expensify', 'Google Workspace'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free for individuals, Early from $13/month, Growing from $37/month, Established from $70/month',
      url: 'https://www.xero.com/pricing/',
      description: 'Different tiers based on business size and features'
    }
  },
  
  // Trading Platforms
  {
    name: 'eToro AI',
    slug: 'etoro-ai',
    tagline: 'AI-powered social trading and investment platform',
    logoUrl: '/logos/etoro-ai.png',
    website: 'https://www.etoro.com/ai/',
    pricing: 'free',
    badges: ['popular', 'trending'],
    category: 'Finance & Trading',
    categorySlug: 'finance-trading',
    subcategory: 'Trading Platforms',
    subcategorySlug: 'trading-platforms',
    description: 'eToro AI enhances the social trading platform with AI-powered investment insights, portfolio management, and copy trading capabilities.',
    features: ['Copy trading', 'Social trading', 'AI insights', 'Portfolio management', 'Risk management', 'Market analysis', 'Educational resources', 'Mobile trading'],
    useCases: ['Stock trading', 'Crypto trading', 'Copy trading', 'Social investing', 'Portfolio management', 'Market analysis', 'Risk management', 'Educational investing'],
    tags: ['trading', 'investment', 'social-trading', 'copy-trading', 'ai-investing'],
    rating: 4.4,
    reviewCount: 15000,
    alternatives: ['Robinhood', 'TD Ameritrade', 'Interactive Brokers'],
    integrations: ['Bank transfers', 'Credit cards', 'PayPal', 'Apple Pay', 'Google Pay', 'Mobile apps', 'Web platform'],
    pricingDetails: {
      type: 'free',
      price: 'Free to use with commission fees on trades',
      url: 'https://www.etoro.com/fees/',
      description: 'Commission-free stock trading, fees on other assets'
    }
  },
  {
    name: 'Robinhood AI',
    slug: 'robinhood-ai',
    tagline: 'AI-powered commission-free trading platform',
    logoUrl: '/logos/robinhood-ai.png',
    website: 'https://robinhood.com/ai',
    pricing: 'free',
    badges: ['popular', 'trending'],
    category: 'Finance & Trading',
    categorySlug: 'finance-trading',
    subcategory: 'Trading Platforms',
    subcategorySlug: 'trading-platforms',
    description: 'Robinhood AI enhances the commission-free trading platform with AI-powered investment insights, market analysis, and personalized recommendations.',
    features: ['Commission-free trading', 'AI recommendations', 'Market analysis', 'Real-time data', 'Mobile-first design', 'Fractional shares', 'Crypto trading', 'Research tools'],
    useCases: ['Stock trading', 'Options trading', 'Crypto trading', 'Investment research', 'Portfolio management', 'Market monitoring', 'Fractional investing', 'Mobile trading'],
    tags: ['trading', 'investment', 'commission-free', 'mobile-trading', 'ai-investing'],
    rating: 4.3,
    reviewCount: 25000,
    alternatives: ['eToro', 'TD Ameritrade', 'Interactive Brokers'],
    integrations: ['Bank transfers', 'Debit card', 'Apple Pay', 'Google Pay', 'Mobile apps', 'Web platform'],
    pricingDetails: {
      type: 'free',
      price: 'Free to use with some premium features',
      url: 'https://robinhood.com/gold',
      description: 'Free trading with optional Robinhood Gold subscription'
    }
  },
  
  // Invoicing
  {
    name: 'FreshBooks AI',
    slug: 'freshbooks-ai',
    tagline: 'AI-powered invoicing and time tracking for freelancers',
    logoUrl: '/logos/freshbooks-ai.png',
    website: 'https://www.freshbooks.com/ai',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Finance & Trading',
    categorySlug: 'finance-trading',
    subcategory: 'Invoicing',
    subcategorySlug: 'invoicing',
    description: 'FreshBooks AI enhances the invoicing software with AI-powered features for automated time tracking, expense categorization, and financial insights.',
    features: ['AI invoicing', 'Time tracking', 'Expense management', 'Project management', 'Online payments', 'Financial reporting', 'Client management', 'Automated reminders'],
    useCases: ['Invoicing automation', 'Time tracking', 'Expense management', 'Project billing', 'Online payments', 'Financial reporting', 'Client management', 'Freelance accounting'],
    tags: ['invoicing', 'freelance', 'time-tracking', 'expense-management', 'ai-accounting'],
    rating: 4.5,
    reviewCount: 12000,
    alternatives: ['QuickBooks', 'Harvest', 'Zoho Invoice'],
    integrations: ['Bank feeds', 'PayPal', 'Stripe', 'Gusto', 'TSheets', 'Expensify', 'Google Workspace', 'Slack'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free for individuals, Lite from $15/month, Plus from $25/month, Premium from $50/month',
      url: 'https://www.freshbooks.com/pricing',
      description: 'Different tiers based on business size and features'
    }
  },
  {
    name: 'Zoho Invoice AI',
    slug: 'zoho-invoice-ai',
    tagline: 'AI-powered online invoicing and billing software',
    logoUrl: '/logos/zoho-invoice-ai.png',
    website: 'https://www.zoho.com/invoice/ai/',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Finance & Trading',
    categorySlug: 'finance-trading',
    subcategory: 'Invoicing',
    subcategorySlug: 'invoicing',
    description: 'Zoho Invoice AI enhances the online invoicing software with AI-powered features for automated billing, expense tracking, and financial insights.',
    features: ['AI invoicing', 'Time tracking', 'Expense management', 'Project management', 'Online payments', 'Financial reporting', 'Client portal', 'Automated workflows'],
    useCases: ['Online invoicing', 'Time tracking', 'Expense management', 'Project billing', 'Online payments', 'Financial reporting', 'Client management', 'Business automation'],
    tags: ['invoicing', 'online-billing', 'time-tracking', 'expense-management', 'ai-accounting'],
    rating: 4.4,
    reviewCount: 9500,
    alternatives: ['FreshBooks', 'QuickBooks', 'Harvest'],
    integrations: ['Bank feeds', 'PayPal', 'Stripe', 'Zoho CRM', 'Zoho Books', 'G Suite', 'Google Workspace', 'Slack'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free for individuals, Basic from $9/month, Standard from $19/month, Professional from $29/month',
      url: 'https://www.zoho.com/invoice/pricing.html',
      description: 'Different tiers based on business size and features'
    }
  }
];