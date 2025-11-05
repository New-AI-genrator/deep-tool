import { ToolEntry } from '../tools';

export const mediaJournalismTools: ToolEntry[] = [
  // News Writing
  {
    name: 'Automated Insights AI',
    slug: 'automated-insights-ai',
    tagline: 'AI-powered automated news writing and content generation platform',
    logoUrl: '/logos/automated-insights-ai.png',
    website: 'https://www.automatedinsights.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Media & Journalism',
    categorySlug: 'media-journalism',
    subcategory: 'News Writing',
    subcategorySlug: 'news-writing',
    description: 'Automated Insights AI enhances news writing with AI-powered content generation, data storytelling, real-time reporting, and personalized news creation from structured data sources.',
    features: ['AI content generation', 'Data storytelling', 'Real-time reporting', 'Personalized news', 'Template customization', 'Brand voice matching', 'Multi-language support', 'Analytics integration'],
    useCases: ['Earnings reports', 'Sports recaps', 'Weather updates', 'Financial news', 'Local news automation', 'Data-driven storytelling', 'Content personalization', 'Newsroom efficiency'],
    tags: ['automated-writing', 'ai-journalism', 'data-storytelling', 'content-generation', 'news-automation'],
    rating: 4.6,
    reviewCount: 7500,
    alternatives: ['Narrative Science', 'Arria NLG', 'Yseop'],
    integrations: ['AP Stylebook', 'Reuters', 'Associated Press', 'Google News', 'Apple News', 'Social media platforms', 'CMS systems', 'Analytics tools'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.automatedinsights.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  {
    name: 'Narrative Science AI',
    slug: 'narrative-science-ai',
    tagline: 'AI-driven narrative generation and data journalism platform',
    logoUrl: '/logos/narrative-science-ai.png',
    website: 'https://www.narrativescience.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Media & Journalism',
    categorySlug: 'media-journalism',
    subcategory: 'News Writing',
    subcategorySlug: 'news-writing',
    description: 'Narrative Science AI enhances data journalism with AI-powered narrative generation, insight extraction, trend analysis, and automated report creation from complex datasets.',
    features: ['AI narrative generation', 'Insight extraction', 'Trend analysis', 'Automated reporting', 'Data visualization', 'Natural language processing', 'Customizable templates', 'Multi-format output'],
    useCases: ['Business intelligence reports', 'Market analysis', 'Financial summaries', 'Performance reviews', 'Research findings', 'Executive summaries', 'Investigative journalism', 'Data storytelling'],
    tags: ['narrative-generation', 'ai-analytics', 'data-journalism', 'insight-extraction', 'automated-reporting'],
    rating: 4.5,
    reviewCount: 6500,
    alternatives: ['Automated Insights', 'Arria NLG', 'Yseop'],
    integrations: ['Tableau', 'Power BI', 'Excel', 'Google Analytics', 'Salesforce', 'Oracle', 'SAP', 'SQL databases'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.narrativescience.com/pricing',
      description: 'Enterprise solution with custom pricing'
    }
  },
  
  // Fact Checking
  {
    name: 'Full Fact AI',
    slug: 'full-fact-ai',
    tagline: 'AI-powered fact checking and misinformation detection platform',
    logoUrl: '/logos/full-fact-ai.png',
    website: 'https://fullfact.org/ai',
    pricing: 'freemium',
    badges: ['community-favorite', 'trending'],
    category: 'Media & Journalism',
    categorySlug: 'media-journalism',
    subcategory: 'Fact Checking',
    subcategorySlug: 'fact-checking',
    description: 'Full Fact AI enhances fact checking with AI-powered claim detection, evidence verification, misinformation tracking, and automated fact-checking workflows for journalists and researchers.',
    features: ['AI claim detection', 'Evidence verification', 'Misinformation tracking', 'Automated workflows', 'Database integration', 'Real-time alerts', 'Collaboration tools', 'Reporting dashboard'],
    useCases: ['Political fact checking', 'Social media monitoring', 'News verification', 'Research validation', 'Academic integrity', 'Content moderation', 'Public information', 'Election coverage'],
    tags: ['fact-checking', 'ai-verification', 'misinformation-detection', 'claim-tracking', 'evidence-validation'],
    rating: 4.7,
    reviewCount: 8500,
    alternatives: ['Factmata', 'Logically', 'Chequeado'],
    integrations: ['Twitter', 'Facebook', 'YouTube', 'News APIs', 'Wikipedia', 'Government databases', 'Academic sources', 'Fact-checking networks'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free tier available, Pro from $49/month, Enterprise from $199/month',
      url: 'https://fullfact.org/pricing',
      description: 'Different tiers based on features and usage volume'
    }
  },
  {
    name: 'Logically AI',
    slug: 'logically-ai',
    tagline: 'AI-enhanced misinformation detection and content verification platform',
    logoUrl: '/logos/logically-ai.png',
    website: 'https://logically.ai',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Media & Journalism',
    categorySlug: 'media-journalism',
    subcategory: 'Fact Checking',
    subcategorySlug: 'fact-checking',
    description: 'Logically AI enhances content verification with AI-powered misinformation detection, source credibility assessment, claim validation, and real-time fact-checking for media organizations.',
    features: ['AI misinformation detection', 'Source credibility assessment', 'Claim validation', 'Real-time fact-checking', 'Content analysis', 'Trend monitoring', 'Risk scoring', 'API integration'],
    useCases: ['Social media monitoring', 'News verification', 'Brand protection', 'Crisis management', 'Content moderation', 'Research validation', 'Public safety', 'Election integrity'],
    tags: ['misinformation-detection', 'ai-verification', 'source-assessment', 'claim-validation', 'content-analysis'],
    rating: 4.6,
    reviewCount: 9500,
    alternatives: ['Full Fact', 'Factmata', 'Chequeado'],
    integrations: ['Twitter', 'Facebook', 'Instagram', 'LinkedIn', 'YouTube', 'News APIs', 'Government sources', 'Academic databases'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free tier available, Professional from $79/month, Enterprise from $299/month',
      url: 'https://logically.ai/pricing',
      description: 'Different tiers based on features and user count'
    }
  },
  
  // Media Production
  {
    name: 'Descript AI',
    slug: 'descript-ai',
    tagline: 'AI-powered video and podcast editing with text-based workflows',
    logoUrl: '/logos/descript-ai.png',
    website: 'https://www.descript.com/ai',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Media & Journalism',
    categorySlug: 'media-journalism',
    subcategory: 'Media Production',
    subcategorySlug: 'media-production',
    description: 'Descript AI enhances media production with AI-powered transcription, text-based video editing, voice cloning, automated captioning, and collaborative content creation tools.',
    features: ['AI transcription', 'Text-based editing', 'Voice cloning', 'Automated captioning', 'Screen recording', 'Collaboration tools', 'Stock media library', 'Export options'],
    useCases: ['Podcast editing', 'Video production', 'Content creation', 'Transcription services', 'Voiceover work', 'Remote collaboration', 'Social media content', 'Educational materials'],
    tags: ['video-editing', 'ai-transcription', 'podcast-production', 'text-editing', 'voice-cloning'],
    rating: 4.8,
    reviewCount: 25000,
    alternatives: ['Adobe Premiere Pro', 'Final Cut Pro', 'Camtasia'],
    integrations: ['Zoom', 'Google Drive', 'Dropbox', 'YouTube', 'Vimeo', 'Social media platforms', 'Cloud storage', 'Project management tools'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free tier available, Creator from $12/month, Pro from $24/month, Business from $60/month',
      url: 'https://www.descript.com/pricing',
      description: 'Different tiers based on features and usage limits'
    }
  },
  {
    name: 'Pictory AI',
    slug: 'pictory-ai',
    tagline: 'AI-powered video creation from text and articles',
    logoUrl: '/logos/pictory-ai.png',
    website: 'https://pictory.ai',
    pricing: 'freemium',
    badges: ['community-favorite', 'trending'],
    category: 'Media & Journalism',
    categorySlug: 'media-journalism',
    subcategory: 'Media Production',
    subcategorySlug: 'media-production',
    description: 'Pictory AI enhances video production with AI-powered content transformation, automatic scene generation, voiceover synthesis, and intelligent video editing from text inputs.',
    features: ['AI content transformation', 'Automatic scene generation', 'Voiceover synthesis', 'Intelligent editing', 'Brand customization', 'Template library', 'Export options', 'Analytics integration'],
    useCases: ['News summaries', 'Article videos', 'Social media content', 'Marketing videos', 'Educational content', 'Presentation videos', 'Content repurposing', 'Quick video creation'],
    tags: ['video-creation', 'ai-transformation', 'content-to-video', 'automatic-editing', 'voiceover-synthesis'],
    rating: 4.7,
    reviewCount: 12000,
    alternatives: ['Lumen5', 'InVideo', 'Animoto'],
    integrations: ['WordPress', 'Medium', 'Google Docs', 'Notion', 'YouTube', 'Facebook', 'LinkedIn', 'Twitter'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free tier available, Plus from $19/month, Pro from $39/month, Business from $99/month',
      url: 'https://pictory.ai/pricing',
      description: 'Different tiers based on features and video limits'
    }
  }
];