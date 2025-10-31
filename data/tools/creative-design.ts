import { ToolEntry } from '../tools';

export const creativeDesignTools: ToolEntry[] = [
  // AI Art Generation
  {
    name: 'Midjourney',
    slug: 'midjourney',
    tagline: 'AI art generation through Discord commands',
    logoUrl: '/logos/midjourney.png',
    website: 'https://www.midjourney.com',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Creative & Design',
    categorySlug: 'creative-design',
    subcategory: 'AI Art Generation',
    subcategorySlug: 'ai-art-generation',
    description: 'Midjourney is an AI art generation tool that creates images from text descriptions through a Discord bot interface. It\'s known for its distinctive aesthetic and high-quality outputs.',
    features: ['Text-to-image', 'Style customization', 'Image blending', 'Upscaling', 'Variation generation', 'Community features', 'Parameter controls', 'Grid creation'],
    useCases: ['Concept art', 'Digital painting', 'Logo design', 'Book covers', 'Social media content', 'NFT creation', 'Architecture visualization', 'Fashion design'],
    tags: ['ai-art', 'image-generation', 'text-to-image', 'creative-ai', 'midjourney'],
    rating: 4.7,
    reviewCount: 25000,
    alternatives: ['DALL-E', 'Stable Diffusion', 'Imagen'],
    integrations: ['Discord', 'Web API'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free trial, Basic from $10/month, Standard from $30/month',
      url: 'https://www.midjourney.com/pricing',
      description: 'Different tiers based on usage and features'
    }
  },
  {
    name: 'DALL-E 3',
    slug: 'dall-e-3',
    tagline: 'Advanced AI image generation by OpenAI',
    logoUrl: '/logos/dalle.png',
    website: 'https://openai.com/dall-e-3',
    pricing: 'paid',
    badges: ['popular', 'trending'],
    category: 'Creative & Design',
    categorySlug: 'creative-design',
    subcategory: 'AI Art Generation',
    subcategorySlug: 'ai-art-generation',
    description: 'DALL-E 3 is OpenAI\'s most advanced AI image generation model, integrated directly into ChatGPT Plus and available through API. It excels at creating detailed, accurate images from complex text prompts.',
    features: ['Text-to-image', 'High resolution', 'Prompt understanding', 'Style variation', 'Image editing', 'Aspect ratio control', 'Detailed outputs', 'API access'],
    useCases: ['Concept visualization', 'Product photography', 'Illustration', 'Marketing materials', 'Educational content', 'Creative projects', 'Prototyping', 'Social media graphics'],
    tags: ['ai-art', 'image-generation', 'openai', 'dalle', 'text-to-image'],
    rating: 4.8,
    reviewCount: 32000,
    alternatives: ['Midjourney', 'Stable Diffusion', 'Imagen'],
    integrations: ['ChatGPT', 'OpenAI API', 'Microsoft Designer'],
    pricingDetails: {
      type: 'paid',
      price: 'Included with ChatGPT Plus ($20/month) or API usage',
      url: 'https://openai.com/pricing',
      description: 'API pricing based on usage or subscription'
    }
  },
  // Additional tools would go here...
];