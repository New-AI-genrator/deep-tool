import { ToolEntry } from '../tools';

export const musicEntertainmentTools: ToolEntry[] = [
  // Music Production
  {
    name: 'AIVA AI',
    slug: 'aiva-ai',
    tagline: 'AI-powered music composition and production platform',
    logoUrl: '/logos/aiva-ai.png',
    website: 'https://www.aiva.ai',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Music & Entertainment',
    categorySlug: 'music-entertainment',
    subcategory: 'Music Production',
    subcategorySlug: 'music-production',
    description: 'AIVA AI is an AI-powered music composition platform that helps musicians, producers, and content creators generate original musical pieces across various genres and styles.',
    features: ['AI composition', 'Multi-genre support', 'Customizable parameters', 'MIDI export', 'Audio rendering', 'Collaboration tools', 'Library management', 'Project sharing'],
    useCases: ['Music composition', 'Film scoring', 'Game soundtracks', 'Content creation', 'Educational projects', 'Commercial music', 'Personal projects', 'Collaborative work'],
    tags: ['music-composition', 'ai-music', 'music-production', 'film-scoring', 'content-creation'],
    rating: 4.6,
    reviewCount: 15000,
    alternatives: ['Amper Music', 'Jukedeck', 'Soundraw'],
    integrations: ['DAW software', 'Logic Pro', 'Ableton Live', 'FL Studio', 'Pro Tools', 'GarageBand', 'YouTube', 'Spotify'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free tier available, Pro from $19.99/month, Premium from $29.99/month',
      url: 'https://www.aiva.ai/pricing',
      description: 'Different tiers based on features and usage limits'
    }
  },
  {
    name: 'Amper Music AI',
    slug: 'amper-music-ai',
    tagline: 'AI-driven music creation and customization platform',
    logoUrl: '/logos/amper-music-ai.png',
    website: 'https://www.ampermusic.com',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Music & Entertainment',
    categorySlug: 'music-entertainment',
    subcategory: 'Music Production',
    subcategorySlug: 'music-production',
    description: 'Amper Music AI enhances the music creation platform with AI-powered composition tools, real-time customization, mood-based music generation, and professional-quality audio output.',
    features: ['AI composition', 'Real-time customization', 'Mood-based generation', 'Professional audio', 'Project management', 'Collaboration tools', 'Export options', 'Template library'],
    useCases: ['Video production', 'Content creation', 'Marketing materials', 'Presentations', 'Podcasts', 'Social media', 'Educational content', 'Commercial projects'],
    tags: ['music-creation', 'ai-composition', 'content-music', 'video-production', 'amper-music'],
    rating: 4.5,
    reviewCount: 12000,
    alternatives: ['AIVA', 'Jukedeck', 'Soundraw'],
    integrations: ['YouTube', 'Facebook', 'Instagram', 'TikTok', 'Adobe Premiere', 'Final Cut Pro', 'DaVinci Resolve', 'Dropbox'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free tier available, Creator from $9.99/month, Pro from $24.99/month, Enterprise pricing available',
      url: 'https://www.ampermusic.com/pricing',
      description: 'Different tiers based on features and usage limits'
    }
  },
  
  // Audio Editing
  {
    name: 'LALAL.AI AI',
    slug: 'lalal-ai',
    tagline: 'AI-powered audio processing and voice extraction platform',
    logoUrl: '/logos/lalal-ai.png',
    website: 'https://www.lalal.ai',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Music & Entertainment',
    categorySlug: 'music-entertainment',
    subcategory: 'Audio Editing',
    subcategorySlug: 'audio-editing',
    description: 'LALAL.AI AI enhances the audio processing platform with AI-powered voice extraction, music separation, noise reduction, and high-quality audio restoration.',
    features: ['Voice extraction', 'Music separation', 'Noise reduction', 'Audio restoration', 'High-quality processing', 'Batch processing', 'Format conversion', 'Cloud storage'],
    useCases: ['Voice isolation', 'Music remixing', 'Podcast editing', 'Audio restoration', 'Karaoke creation', 'Sound design', 'Content creation', 'Professional audio work'],
    tags: ['audio-processing', 'ai-audio', 'voice-extraction', 'music-separation', 'audio-restoration'],
    rating: 4.7,
    reviewCount: 18000,
    alternatives: ['Moises.ai', 'Splitter.ai', 'PhonicMind'],
    integrations: ['MP3', 'WAV', 'FLAC', 'AAC', 'OGG', 'M4A', 'YouTube', 'Dropbox'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free tier available, Lite from $9.90/month, Plus from $19.90/month, Pro from $34.90/month',
      url: 'https://www.lalal.ai/pricing',
      description: 'Different tiers based on processing minutes and features'
    }
  },
  {
    name: 'Moises.ai AI',
    slug: 'moises-ai',
    tagline: 'AI-powered music separation and audio editing platform',
    logoUrl: '/logos/moises-ai.png',
    website: 'https://moises.ai',
    pricing: 'freemium',
    badges: ['community-favorite', 'trending'],
    category: 'Music & Entertainment',
    categorySlug: 'music-entertainment',
    subcategory: 'Audio Editing',
    subcategorySlug: 'audio-editing',
    description: 'Moises.ai AI enhances the music separation platform with AI-powered stem extraction, pitch shifting, tempo changing, and collaborative audio editing tools.',
    features: ['Stem extraction', 'Pitch shifting', 'Tempo changing', 'Collaborative editing', 'Practice tools', 'Performance analysis', 'Format conversion', 'Cloud storage'],
    useCases: ['Music practice', 'Performance analysis', 'Content creation', 'Music education', 'Remixing', 'Karaoke', 'Audio editing', 'Collaborative projects'],
    tags: ['music-separation', 'ai-audio', 'stem-extraction', 'music-practice', 'audio-editing'],
    rating: 4.6,
    reviewCount: 14000,
    alternatives: ['LALAL.AI', 'Splitter.ai', 'PhonicMind'],
    integrations: ['MP3', 'WAV', 'FLAC', 'M4A', 'YouTube', 'SoundCloud', 'Dropbox', 'Google Drive'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free tier available, Creator from $9.99/month, Pro from $19.99/month, Enterprise pricing available',
      url: 'https://moises.ai/pricing',
      description: 'Different tiers based on processing minutes and features'
    }
  },
  
  // Live Performance
  {
    name: 'Endel AI',
    slug: 'endel-ai',
    tagline: 'AI-generated adaptive soundscapes for focus and relaxation',
    logoUrl: '/logos/endel-ai.png',
    website: 'https://endel.io',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Music & Entertainment',
    categorySlug: 'music-entertainment',
    subcategory: 'Live Performance',
    subcategorySlug: 'live-performance',
    description: 'Endel AI creates personalized, adaptive soundscapes that help users focus, relax, and sleep better using real-time environmental data and biometric inputs.',
    features: ['Adaptive soundscapes', 'Personalized audio', 'Biometric integration', 'Environmental data', 'Focus enhancement', 'Sleep improvement', 'Meditation support', 'Cross-platform sync'],
    useCases: ['Focus and productivity', 'Sleep improvement', 'Meditation', 'Relaxation', 'Gaming', 'Studying', 'Working', 'Wellness'],
    tags: ['adaptive-audio', 'ai-soundscapes', 'focus-music', 'sleep-aids', 'wellness-audio'],
    rating: 4.8,
    reviewCount: 22000,
    alternatives: ['Brain.fm', 'Calm', 'Noisli'],
    integrations: ['Apple Watch', 'Fitbit', 'Google Fit', 'Spotify', 'Apple Music', 'iOS', 'Android', 'Web browsers'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free tier available, Personal from $9.99/month, Family from $14.99/month',
      url: 'https://endel.io/pricing',
      description: 'Different tiers based on features and device limits'
    }
  },
  {
    name: 'LANDR AI',
    slug: 'landr-ai',
    tagline: 'AI-powered music mastering and distribution platform',
    logoUrl: '/logos/landr-ai.png',
    website: 'https://www.landr.com',
    pricing: 'freemium',
    badges: ['popular', 'community-favorite'],
    category: 'Music & Entertainment',
    categorySlug: 'music-entertainment',
    subcategory: 'Live Performance',
    subcategorySlug: 'live-performance',
    description: 'LANDR AI enhances the music mastering platform with AI-powered audio mastering, distribution services, collaborative tools, and royalty-free sample library.',
    features: ['AI mastering', 'Distribution services', 'Collaborative tools', 'Sample library', 'Analytics dashboard', 'Playlist pitching', 'Promotion tools', 'Royalty collection'],
    useCases: ['Music mastering', 'Distribution', 'Collaboration', 'Analytics', 'Promotion', 'Royalty collection', 'Playlist pitching', 'Content management'],
    tags: ['music-mastering', 'ai-audio', 'music-distribution', 'content-promotion', 'royalty-collection'],
    rating: 4.7,
    reviewCount: 25000,
    alternatives: ['eMastered', 'MixGenius', 'iZotope'],
    integrations: ['Spotify', 'Apple Music', 'YouTube', 'SoundCloud', 'Bandcamp', 'Tidal', 'Deezer', 'Instagram'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free tier available, Mastering from $4/track, Distribution from $2.99/month, Pro from $9.99/month',
      url: 'https://www.landr.com/pricing',
      description: 'Different services with various pricing models'
    }
  }
];