import { ToolEntry } from '../tools';

export const marketingGrowthTools: ToolEntry[] = [
  // SEO & Content Strategy
  {
    name: 'Surfer SEO',
    slug: 'surfer-seo',
    tagline: 'AI-powered SEO platform for content creation and optimization',
    logoUrl: '/logos/surfer-seo.png',
    website: 'https://surfer.ai',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Marketing & Growth',
    categorySlug: 'marketing-growth',
    subcategory: 'SEO & Content Strategy',
    subcategorySlug: 'seo-content-strategy',
    description: 'Surfer SEO is an AI-powered platform that helps content creators and marketers optimize their content for search engines and improve their organic traffic.',
    features: ['Content editor', 'Keyword research', 'SERP analysis', 'Content audit', 'Backlink analysis', 'Rank tracking', 'AI writing assistant', 'Competitor analysis'],
    useCases: ['Content optimization', 'Keyword research', 'SEO strategy', 'Content planning', 'Competitor analysis', 'Rank tracking', 'Link building', 'Content auditing'],
    tags: ['seo', 'content-marketing', 'keyword-research', 'content-optimization', 'digital-marketing'],
    rating: 4.7,
    reviewCount: 9500,
    alternatives: ['MarketMuse', 'Clearscope', 'Frase'],
    integrations: ['WordPress', 'Google Search Console', 'Google Analytics', 'Ahrefs', 'SEMrush', 'Yoast', 'Grammarly', 'Notion'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free for individuals, Essential from $59/month, Professional from $119/month, Team from $229/month',
      url: 'https://surfer.ai/pricing/',
      description: 'Different tiers based on features and team size'
    }
  },
  {
    name: 'Frase AI',
    slug: 'frase-ai',
    tagline: 'AI content optimization platform for SEO and content marketing',
    logoUrl: '/logos/frase-ai.png',
    website: 'https://www.frase.io',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Marketing & Growth',
    categorySlug: 'marketing-growth',
    subcategory: 'SEO & Content Strategy',
    subcategorySlug: 'seo-content-strategy',
    description: 'Frase AI is an AI-powered content optimization platform that helps marketers and content creators research, write, and optimize content for better search engine rankings.',
    features: ['Content briefs', 'AI writer', 'Content optimizer', 'SERP analysis', 'Topic research', 'Competitor analysis', 'Keyword clustering', 'Performance tracking'],
    useCases: ['Content research', 'SEO optimization', 'Content creation', 'Competitor analysis', 'Keyword clustering', 'Content auditing', 'Performance tracking', 'Team collaboration'],
    tags: ['seo', 'content-marketing', 'ai-writing', 'content-optimization', 'keyword-research'],
    rating: 4.6,
    reviewCount: 7200,
    alternatives: ['Surfer SEO', 'MarketMuse', 'Clearscope'],
    integrations: ['WordPress', 'Google Docs', 'Notion', 'Google Search Console', 'Ahrefs', 'SEMrush', 'Grammarly', 'Slack'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free for individuals, Basic from $14.99/month, Pro from $44.99/month, Business from $114.99/month',
      url: 'https://www.frase.io/pricing/',
      description: 'Different tiers based on features and usage limits'
    }
  },
  
  // Social Media & Advertising
  {
    name: 'AdCreative AI',
    slug: 'adcreative-ai',
    tagline: 'AI-powered ad creative generation and optimization platform',
    logoUrl: '/logos/adcreative-ai.png',
    website: 'https://www.adcreative.ai',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Marketing & Growth',
    categorySlug: 'marketing-growth',
    subcategory: 'Social Media & Advertising',
    subcategorySlug: 'social-media-advertising',
    description: 'AdCreative AI is an AI-powered platform that helps marketers create high-performing ad creatives for social media and digital advertising campaigns.',
    features: ['Ad creative generation', 'A/B testing', 'Performance analytics', 'Template library', 'Brand guidelines', 'Multi-platform support', 'Collaboration tools', 'Campaign management'],
    useCases: ['Ad creative creation', 'Social media advertising', 'A/B testing', 'Campaign optimization', 'Brand consistency', 'Team collaboration', 'Performance tracking', 'Content scaling'],
    tags: ['advertising', 'social-media', 'ai-creative', 'digital-marketing', 'campaign-optimization'],
    rating: 4.5,
    reviewCount: 5800,
    alternatives: ['AdZis', 'Pebblely', 'Canva'],
    integrations: ['Facebook Ads', 'Google Ads', 'Instagram', 'LinkedIn', 'Twitter', 'Shopify', 'WooCommerce', 'Magento'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free for individuals, Starter from $29/month, Pro from $79/month, Agency from $199/month',
      url: 'https://www.adcreative.ai/pricing',
      description: 'Different tiers based on features and usage limits'
    }
  },
  {
    name: 'Lately AI',
    slug: 'lately-ai',
    tagline: 'AI-powered social media content creation and scheduling platform',
    logoUrl: '/logos/lately-ai.png',
    website: 'https://www.lately.ai',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Marketing & Growth',
    categorySlug: 'marketing-growth',
    subcategory: 'Social Media & Advertising',
    subcategorySlug: 'social-media-advertising',
    description: 'Lately AI is an AI-powered platform that helps marketers create, optimize, and schedule social media content across multiple platforms.',
    features: ['Content generation', 'Video repurposing', 'Analytics dashboard', 'Content calendar', 'Brand voice consistency', 'Multi-platform posting', 'Performance tracking', 'Team collaboration'],
    useCases: ['Social media content creation', 'Video repurposing', 'Content scheduling', 'Brand consistency', 'Performance tracking', 'Team collaboration', 'Audience engagement', 'Content scaling'],
    tags: ['social-media', 'content-creation', 'ai-marketing', 'video-marketing', 'content-scheduling'],
    rating: 4.4,
    reviewCount: 4200,
    alternatives: ['Hootsuite', 'Buffer', 'Sprout Social'],
    integrations: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'YouTube', 'TikTok', 'Google Analytics', 'Salesforce'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free for individuals, Creator from $24/month, Grow from $49/month, Scale from $99/month',
      url: 'https://www.lately.ai/pricing',
      description: 'Different tiers based on features and usage limits'
    }
  },
  
  // Market Research & Sentiment Analysis
  {
    name: 'Brandwatch Consumer Intelligence',
    slug: 'brandwatch-consumer-intelligence',
    tagline: 'AI-powered consumer insights and market research platform',
    logoUrl: '/logos/brandwatch.png',
    website: 'https://www.brandwatch.com/products/consumer-intelligence',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Marketing & Growth',
    categorySlug: 'marketing-growth',
    subcategory: 'Market Research & Sentiment Analysis',
    subcategorySlug: 'market-research-sentiment',
    description: 'Brandwatch Consumer Intelligence is an AI-powered platform that provides deep consumer insights and market research through social media listening and data analysis.',
    features: ['Social listening', 'Sentiment analysis', 'Trend identification', 'Competitor analysis', 'Audience segmentation', 'Campaign tracking', 'Crisis management', 'Influencer identification'],
    useCases: ['Brand monitoring', 'Market research', 'Sentiment analysis', 'Competitor analysis', 'Campaign evaluation', 'Crisis management', 'Influencer marketing', 'Product development'],
    tags: ['market-research', 'sentiment-analysis', 'social-listening', 'consumer-insights', 'brand-monitoring'],
    rating: 4.3,
    reviewCount: 3500,
    alternatives: ['Sprinklr', 'Meltwater', 'Talkwalker'],
    integrations: ['Salesforce', 'HubSpot', 'Google Analytics', 'Tableau', 'Power BI', 'Excel', 'Slack', 'Twitter'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.brandwatch.com/contact/',
      description: 'Enterprise pricing based on requirements and usage'
    }
  },
  {
    name: 'Crimson Hexagon',
    slug: 'crimson-hexagon',
    tagline: 'AI-powered social media analytics and consumer insights platform',
    logoUrl: '/logos/crimson-hexagon.png',
    website: 'https://www.crimsonhexagon.com',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Marketing & Growth',
    categorySlug: 'marketing-growth',
    subcategory: 'Market Research & Sentiment Analysis',
    subcategorySlug: 'market-research-sentiment',
    description: 'Crimson Hexagon (now part of Brandwatch) is an AI-powered social media analytics platform that provides consumer insights and market research through advanced text analytics.',
    features: ['Social media analytics', 'Sentiment analysis', 'Image recognition', 'Trend analysis', 'Audience insights', 'Brand monitoring', 'Campaign measurement', 'Competitive intelligence'],
    useCases: ['Consumer insights', 'Brand monitoring', 'Campaign measurement', 'Competitive analysis', 'Trend identification', 'Product development', 'Market research', 'Crisis management'],
    tags: ['social-analytics', 'sentiment-analysis', 'market-research', 'consumer-insights', 'brand-monitoring'],
    rating: 4.2,
    reviewCount: 2800,
    alternatives: ['Brandwatch', 'Sprinklr', 'Meltwater'],
    integrations: ['Salesforce', 'Tableau', 'Power BI', 'Excel', 'Google Analytics', 'Facebook', 'Twitter', 'Instagram'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.brandwatch.com/contact/',
      description: 'Enterprise pricing based on requirements and usage'
    }
  }
];