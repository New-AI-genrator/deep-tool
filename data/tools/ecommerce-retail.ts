import { ToolEntry } from '../tools';

export const ecommerceRetailTools: ToolEntry[] = [
  // Store Builders
  {
    name: 'Shopify AI',
    slug: 'shopify-ai',
    tagline: 'AI-powered e-commerce platform for online stores',
    logoUrl: '/logos/shopify-ai.png',
    website: 'https://www.shopify.com/ai',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'E-commerce & Retail',
    categorySlug: 'ecommerce-retail',
    subcategory: 'Store Builders',
    subcategorySlug: 'store-builders',
    description: 'Shopify AI enhances the e-commerce platform with AI-powered tools for product descriptions, customer service, inventory management, and personalized shopping experiences.',
    features: ['AI product descriptions', 'Smart customer service', 'Inventory optimization', 'Personalized recommendations', 'Automated marketing', 'Fraud protection', 'Multi-channel selling', 'Analytics dashboard'],
    useCases: ['Online store creation', 'Product management', 'Customer service', 'Inventory optimization', 'Marketing automation', 'Sales analytics', 'Multi-channel selling', 'Fraud prevention'],
    tags: ['ecommerce', 'online-store', 'ai-commerce', 'retail-technology', 'shop-management'],
    rating: 4.7,
    reviewCount: 45000,
    alternatives: ['WooCommerce', 'BigCommerce', 'Magento'],
    integrations: ['Facebook', 'Instagram', 'Google', 'Amazon', 'eBay', 'Pinterest', 'TikTok', 'PayPal'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free for 3 days, Basic from $29/month, Shopify from $79/month, Advanced from $299/month',
      url: 'https://www.shopify.com/pricing',
      description: 'Different tiers based on features and sales volume'
    }
  },
  {
    name: 'WooCommerce AI',
    slug: 'woocommerce-ai',
    tagline: 'AI-enhanced WordPress e-commerce plugin',
    logoUrl: '/logos/woocommerce-ai.png',
    website: 'https://woocommerce.com/ai/',
    pricing: 'freemium',
    badges: ['popular', 'community-favorite'],
    category: 'E-commerce & Retail',
    categorySlug: 'ecommerce-retail',
    subcategory: 'Store Builders',
    subcategorySlug: 'store-builders',
    description: 'WooCommerce AI enhances the WordPress e-commerce plugin with AI-powered product recommendations, smart pricing, inventory forecasting, and customer insights.',
    features: ['AI recommendations', 'Smart pricing', 'Inventory forecasting', 'Customer insights', 'Marketing automation', 'Payment processing', 'Shipping integration', 'Analytics'],
    useCases: ['WordPress store creation', 'Product management', 'Inventory forecasting', 'Customer insights', 'Marketing automation', 'Payment processing', 'Shipping management', 'Sales analytics'],
    tags: ['ecommerce', 'wordpress', 'ai-plugin', 'retail-technology', 'store-builder'],
    rating: 4.6,
    reviewCount: 32000,
    alternatives: ['Shopify', 'BigCommerce', 'Magento'],
    integrations: ['WordPress', 'PayPal', 'Stripe', 'Mailchimp', 'Google Analytics', 'Facebook', 'Instagram', 'Amazon'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free plugin with optional paid extensions',
      url: 'https://woocommerce.com/pricing/',
      description: 'Free core plugin with premium extensions'
    }
  },
  
  // Payment Processing
  {
    name: 'Stripe AI',
    slug: 'stripe-ai',
    tagline: 'AI-powered payment processing platform',
    logoUrl: '/logos/stripe-ai.png',
    website: 'https://stripe.com/ai',
    pricing: 'paid',
    badges: ['popular', 'enterprise'],
    category: 'E-commerce & Retail',
    categorySlug: 'ecommerce-retail',
    subcategory: 'Payment Processing',
    subcategorySlug: 'payment-processing',
    description: 'Stripe AI enhances the payment processing platform with AI-powered fraud detection, smart routing, dynamic currency conversion, and automated reconciliation.',
    features: ['AI fraud detection', 'Smart routing', 'Dynamic currency conversion', 'Automated reconciliation', 'Subscription management', 'Payout automation', 'Tax calculation', 'Dispute management'],
    useCases: ['Payment processing', 'Fraud prevention', 'Currency conversion', 'Subscription management', 'Payout automation', 'Tax calculation', 'Dispute resolution', 'Financial reporting'],
    tags: ['payment-processing', 'ai-payments', 'fraud-detection', 'financial-technology', 'ecommerce-payments'],
    rating: 4.8,
    reviewCount: 28000,
    alternatives: ['PayPal', 'Square', 'Authorize.Net'],
    integrations: ['Shopify', 'WooCommerce', 'Magento', 'BigCommerce', 'Salesforce', 'QuickBooks', 'Xero', 'Mailchimp'],
    pricingDetails: {
      type: 'paid',
      price: '2.9% + $0.30 per transaction',
      url: 'https://stripe.com/pricing',
      description: 'Percentage-based pricing with no monthly fees'
    }
  },
  {
    name: 'PayPal AI',
    slug: 'paypal-ai',
    tagline: 'AI-enhanced digital payment platform',
    logoUrl: '/logos/paypal-ai.png',
    website: 'https://www.paypal.com/ai',
    pricing: 'paid',
    badges: ['popular', 'trending'],
    category: 'E-commerce & Retail',
    categorySlug: 'ecommerce-retail',
    subcategory: 'Payment Processing',
    subcategorySlug: 'payment-processing',
    description: 'PayPal AI enhances the digital payment platform with AI-powered risk assessment, smart checkout experiences, personalized offers, and fraud prevention.',
    features: ['AI risk assessment', 'Smart checkout', 'Personalized offers', 'Fraud prevention', 'Working capital', 'Dispute resolution', 'Tax management', 'Reporting'],
    useCases: ['Digital payments', 'Risk assessment', 'Checkout optimization', 'Fraud prevention', 'Working capital', 'Dispute resolution', 'Tax management', 'Financial reporting'],
    tags: ['payment-processing', 'digital-payments', 'ai-finance', 'ecommerce-payments', 'financial-technology'],
    rating: 4.5,
    reviewCount: 55000,
    alternatives: ['Stripe', 'Square', 'Authorize.Net'],
    integrations: ['Shopify', 'WooCommerce', 'eBay', 'Facebook', 'Instagram', 'Amazon', 'QuickBooks', 'Xero'],
    pricingDetails: {
      type: 'paid',
      price: '2.9% + $0.30 per transaction for domestic, 3.9% + $0.30 for international',
      url: 'https://www.paypal.com/webapps/mpp/merchant-fees',
      description: 'Percentage-based pricing with no monthly fees'
    }
  },
  
  // Inventory Management
  {
    name: 'TradeGecko AI',
    slug: 'tradegecko-ai',
    tagline: 'AI-powered inventory and order management platform',
    logoUrl: '/logos/tradegecko-ai.png',
    website: 'https://www.tradegecko.com/ai',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'E-commerce & Retail',
    categorySlug: 'ecommerce-retail',
    subcategory: 'Inventory Management',
    subcategorySlug: 'inventory-management',
    description: 'TradeGecko AI enhances the inventory management platform with AI-powered demand forecasting, automated purchasing, smart warehouse optimization, and multi-channel inventory sync.',
    features: ['AI demand forecasting', 'Automated purchasing', 'Warehouse optimization', 'Multi-channel sync', 'Order management', 'Supplier management', 'Reporting dashboard', 'API integration'],
    useCases: ['Inventory management', 'Demand forecasting', 'Purchase automation', 'Warehouse optimization', 'Order management', 'Supplier management', 'Multi-channel sync', 'Reporting'],
    tags: ['inventory-management', 'ai-forecasting', 'supply-chain', 'retail-operations', 'warehouse-management'],
    rating: 4.4,
    reviewCount: 12000,
    alternatives: ['Zoho Inventory', 'Cin7', 'DEAR Inventory'],
    integrations: ['Shopify', 'WooCommerce', 'Amazon', 'eBay', 'Xero', 'QuickBooks', 'ShipStation', 'FedEx'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free for 14 days, Starter from $39/month, Pro from $79/month, Enterprise from $199/month',
      url: 'https://www.tradegecko.com/pricing',
      description: 'Different tiers based on features and business size'
    }
  },
  {
    name: 'Zoho Inventory AI',
    slug: 'zoho-inventory-ai',
    tagline: 'AI-powered inventory management for growing businesses',
    logoUrl: '/logos/zoho-inventory-ai.png',
    website: 'https://www.zoho.com/inventory/ai/',
    pricing: 'freemium',
    badges: ['popular', 'community-favorite'],
    category: 'E-commerce & Retail',
    categorySlug: 'ecommerce-retail',
    subcategory: 'Inventory Management',
    subcategorySlug: 'inventory-management',
    description: 'Zoho Inventory AI enhances the inventory management software with AI-powered stock predictions, automated reordering, smart warehouse management, and integrated shipping.',
    features: ['AI stock predictions', 'Automated reordering', 'Warehouse management', 'Integrated shipping', 'Order management', 'Multi-channel sync', 'Reporting dashboard', 'API integration'],
    useCases: ['Inventory tracking', 'Stock prediction', 'Automated reordering', 'Warehouse management', 'Order fulfillment', 'Shipping integration', 'Multi-channel sync', 'Reporting'],
    tags: ['inventory-management', 'ai-tracking', 'stock-management', 'retail-operations', 'warehouse-optimization'],
    rating: 4.3,
    reviewCount: 9500,
    alternatives: ['TradeGecko', 'Cin7', 'DEAR Inventory'],
    integrations: ['Shopify', 'WooCommerce', 'Amazon', 'eBay', 'Zoho Books', 'QuickBooks', 'ShipStation', 'UPS'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free for 14 days, Basic from $29/month, Standard from $59/month, Professional from $89/month',
      url: 'https://www.zoho.com/inventory/pricing.html',
      description: 'Different tiers based on features and business size'
    }
  }
];