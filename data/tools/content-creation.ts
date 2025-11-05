import { ToolEntry } from '../tools';

export const contentCreationTools: ToolEntry[] = [
  // Writing Tools
  {
    name: 'Jasper AI',
    slug: 'jasper-ai',
    tagline: 'AI-powered content creation and copywriting platform',
    logoUrl: '/logos/jasper-ai.png',
    website: 'https://www.jasper.ai',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Content Creation',
    categorySlug: 'content-creation',
    subcategory: 'Writing Tools',
    subcategorySlug: 'writing-tools',
    description: 'Jasper AI is an AI-powered content creation platform that helps marketers, writers, and businesses create high-quality content faster with AI-generated text, blog posts, and marketing copy.',
    features: ['AI writing assistant', 'Content templates', 'Plagiarism checker', 'Brand voice customization', 'Team collaboration', 'Content scheduler', 'SEO optimization', 'Multilingual support'],
    useCases: ['Blog writing', 'Marketing copy', 'Social media content', 'Email campaigns', 'Website content', 'Product descriptions', 'Ad copy', 'Content ideation'],
    tags: ['ai-writing', 'content-creation', 'copywriting', 'marketing-content', 'blog-writing'],
    rating: 4.7,
    reviewCount: 25000,
    alternatives: ['Copy.ai', 'Writesonic', 'Rytr'],
    integrations: ['Google Docs', 'WordPress', 'Notion', 'Surfer SEO', 'Grammarly', 'Slack', 'Chrome Extension', 'API'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free trial, Creator from $39/month, Teams from $99/month, Business from $199/month',
      url: 'https://www.jasper.ai/pricing',
      description: 'Different tiers based on features and team size'
    }
  },
  {
    name: 'Copy.ai',
    slug: 'copy-ai',
    tagline: 'AI-powered copywriting and content generation platform',
    logoUrl: '/logos/copy-ai.png',
    website: 'https://www.copy.ai',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Content Creation',
    categorySlug: 'content-creation',
    subcategory: 'Writing Tools',
    subcategorySlug: 'writing-tools',
    description: 'Copy.ai is an AI-powered copywriting platform that generates marketing copy, blog content, social media posts, and other written content using advanced AI models.',
    features: ['Copy generation', 'Content templates', 'Brand voice', 'Team collaboration', 'Content library', 'Plagiarism checker', 'SEO tools', 'Multilingual support'],
    useCases: ['Ad copy', 'Social media posts', 'Email campaigns', 'Website copy', 'Blog content', 'Product descriptions', 'Content ideation', 'Brand messaging'],
    tags: ['ai-copywriting', 'content-generation', 'marketing-copy', 'blog-content', 'social-media'],
    rating: 4.6,
    reviewCount: 18000,
    alternatives: ['Jasper AI', 'Writesonic', 'Rytr'],
    integrations: ['Google Docs', 'WordPress', 'Notion', 'Grammarly', 'Slack', 'Shopify', 'Webflow', 'API'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free trial, Pro from $49/month, Team from $99/month, Enterprise from $299/month',
      url: 'https://www.copy.ai/pricing',
      description: 'Different tiers based on features and usage limits'
    }
  },
  
  // Podcasting
  {
    name: 'Descript AI',
    slug: 'descript-ai',
    tagline: 'AI-powered audio and video editing as a document',
    logoUrl: '/logos/descript-ai.png',
    website: 'https://www.descript.com',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Content Creation',
    categorySlug: 'content-creation',
    subcategory: 'Podcasting',
    subcategorySlug: 'podcasting',
    description: 'Descript AI enhances the audio and video editing platform with AI-powered transcription, text-based editing, voice cloning, and automated video editing capabilities.',
    features: ['AI transcription', 'Text-based editing', 'Voice cloning', 'Automated editing', 'Screen recording', 'Collaboration tools', 'Publishing options', 'Overdub technology'],
    useCases: ['Podcast editing', 'Video editing', 'Transcription', 'Content repurposing', 'Voice cloning', 'Team collaboration', 'Remote recording', 'Content publishing'],
    tags: ['podcast-editing', 'ai-transcription', 'audio-editing', 'video-editing', 'content-repurposing'],
    rating: 4.8,
    reviewCount: 15000,
    alternatives: ['Audacity', 'Adobe Audition', 'Hindenburg'],
    integrations: ['Zoom', 'Google Drive', 'Dropbox', 'YouTube', 'Vimeo', 'Spotify', 'Apple Podcasts', 'RSS'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free for individuals, Creator from $15/month, Pro from $40/month, Enterprise pricing available',
      url: 'https://www.descript.com/pricing',
      description: 'Different tiers based on features and usage'
    }
  },
  {
    name: 'Anchor AI',
    slug: 'anchor-ai',
    tagline: 'AI-powered podcast creation and distribution platform',
    logoUrl: '/logos/anchor-ai.png',
    website: 'https://anchor.fm/ai',
    pricing: 'free',
    badges: ['popular', 'community-favorite'],
    category: 'Content Creation',
    categorySlug: 'content-creation',
    subcategory: 'Podcasting',
    subcategorySlug: 'podcasting',
    description: 'Anchor AI enhances the podcast creation platform with AI-powered editing tools, content suggestions, audience insights, and automated distribution to major podcast platforms.',
    features: ['AI editing tools', 'Content suggestions', 'Audience insights', 'Automated distribution', 'Monetization options', 'Analytics dashboard', 'Recording tools', 'Collaboration features'],
    useCases: ['Podcast creation', 'Content editing', 'Audience analysis', 'Distribution automation', 'Monetization', 'Performance tracking', 'Remote recording', 'Team collaboration'],
    tags: ['podcast-creation', 'ai-editing', 'content-distribution', 'audience-insights', 'monetization'],
    rating: 4.5,
    reviewCount: 22000,
    alternatives: ['Buzzsprout', 'Libsyn', 'Podbean'],
    integrations: ['Spotify', 'Apple Podcasts', 'Google Podcasts', 'Stitcher', 'Twitter', 'Facebook', 'Instagram', 'YouTube'],
    pricingDetails: {
      type: 'free',
      price: 'Completely free with optional monetization features',
      url: 'https://anchor.fm',
      description: 'Free platform with optional revenue sharing'
    }
  },
  
  // Streaming
  {
    name: 'StreamYard AI',
    slug: 'streamyard-ai',
    tagline: 'AI-powered live streaming and video production platform',
    logoUrl: '/logos/streamyard-ai.png',
    website: 'https://streamyard.com/ai',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Content Creation',
    categorySlug: 'content-creation',
    subcategory: 'Streaming',
    subcategorySlug: 'streaming',
    description: 'StreamYard AI enhances the live streaming platform with AI-powered production tools, automated content optimization, real-time graphics, and intelligent audience engagement features.',
    features: ['AI production tools', 'Automated optimization', 'Real-time graphics', 'Audience engagement', 'Multi-platform streaming', 'Recording capabilities', 'Branding tools', 'Analytics dashboard'],
    useCases: ['Live streaming', 'Webinars', 'Virtual events', 'Content production', 'Audience engagement', 'Brand promotion', 'Event broadcasting', 'Content recording'],
    tags: ['live-streaming', 'ai-production', 'virtual-events', 'content-broadcasting', 'audience-engagement'],
    rating: 4.6,
    reviewCount: 12000,
    alternatives: ['OBS Studio', 'Restream', 'Twitch Studio'],
    integrations: ['YouTube', 'Facebook', 'LinkedIn', 'Twitch', 'Twitter', 'Zoom', 'Google Meet', 'Microsoft Teams'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free for individuals, Professional from $20/month, Business from $50/month, Enterprise pricing available',
      url: 'https://streamyard.com/pricing',
      description: 'Different tiers based on features and concurrent streams'
    }
  },
  {
    name: 'OBS AI',
    slug: 'obs-ai',
    tagline: 'AI-enhanced open-source streaming and recording software',
    logoUrl: '/logos/obs-ai.png',
    website: 'https://obsproject.com/ai',
    pricing: 'free',
    badges: ['community-favorite', 'popular'],
    category: 'Content Creation',
    categorySlug: 'content-creation',
    subcategory: 'Streaming',
    subcategorySlug: 'streaming',
    description: 'OBS AI enhances the open-source streaming software with AI-powered scene switching, automated content analysis, intelligent audio processing, and advanced video encoding optimization.',
    features: ['AI scene switching', 'Content analysis', 'Audio processing', 'Video encoding', 'Multi-source streaming', 'Recording capabilities', 'Plugin ecosystem', 'Customization options'],
    useCases: ['Live streaming', 'Video recording', 'Content production', 'Gaming broadcasts', 'Educational content', 'Event coverage', 'Tutorial creation', 'Creative projects'],
    tags: ['live-streaming', 'open-source', 'video-recording', 'content-production', 'gaming-broadcasts'],
    rating: 4.7,
    reviewCount: 35000,
    alternatives: ['Streamlabs', 'XSplit', 'StreamYard'],
    integrations: ['Twitch', 'YouTube', 'Facebook', 'Twitter', 'LinkedIn', 'Zoom', 'Discord', 'Streamlabs'],
    pricingDetails: {
      type: 'free',
      price: 'Completely free and open source',
      url: 'https://obsproject.com/download',
      description: 'Open source software with community support'
    }
  }
];