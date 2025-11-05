import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Create __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Additional AI tools to add across various categories
const additionalAITools = [
  // AI Writing Assistants (Content Creation > Writing Tools)
  {
    name: "Copy.ai",
    slug: "copy-ai",
    tagline: "AI-powered copywriting platform",
    category: "Content Creation",
    categorySlug: "content-creation",
    subcategory: "Writing Tools",
    subcategorySlug: "writing-tools",
    description: "Copy.ai helps you generate high-quality marketing copy in seconds. From social media posts to product descriptions, the platform offers templates for over 90 types of content.",
    features: [
      "90+ content templates",
      "Custom tone of voice",
      "Bulk content creation",
      "Content calendar",
      "Team workspaces"
    ],
    useCases: [
      "Social media posts",
      "Ad copy creation",
      "Email subject lines",
      "Product descriptions",
      "Website content"
    ],
    tags: ["copywriting", "marketing", "content-generation", "social-media"],
    rating: 4.4,
    reviewCount: 18700
  },
  {
    name: "Writesonic",
    slug: "writesonic",
    tagline: "AI writer that creates SEO-friendly content",
    category: "Content Creation",
    categorySlug: "content-creation",
    subcategory: "Writing Tools",
    subcategorySlug: "writing-tools",
    description: "Writesonic creates SEO-friendly content for blogs, ads, websites, and emails in seconds. It's powered by the latest GPT technology and optimized for conversions.",
    features: [
      "SEO-optimized blog posts",
      "Long-form content editor",
      "Content briefs with Surfer integration",
      "Fact-checking capabilities",
      "Multiple language support"
    ],
    useCases: [
      "Blog content creation",
      "Landing page copy",
      "Email campaigns",
      "Product descriptions",
      "Ad copywriting"
    ],
    tags: ["seo-content", "blog-writing", "content-marketing", "conversion-optimization"],
    rating: 4.3,
    reviewCount: 9800
  },
  {
    name: "Rytr",
    slug: "rytr",
    tagline: "AI writing assistant for content creation",
    category: "Content Creation",
    categorySlug: "content-creation",
    subcategory: "Writing Tools",
    subcategorySlug: "writing-tools",
    description: "Rytr is an AI writing assistant that helps you create high-quality content in minutes. It supports 40+ use cases and 30+ languages.",
    features: [
      "40+ use cases",
      "30+ languages support",
      "Tone of voice customization",
      "Plagiarism checker",
      "Browser extension"
    ],
    useCases: [
      "Content creation",
      "Email writing",
      "Social media posts",
      "Blog writing",
      "Business copy"
    ],
    tags: ["writing-assistant", "content-generation", "multilingual", "ai-tools"],
    rating: 4.5,
    reviewCount: 7600
  },
  
  // AI Image Generation (Creative & Design > AI Art Generation)
  {
    name: "Adobe Firefly",
    slug: "adobe-firefly",
    tagline: "Creative generation AI for design",
    category: "Creative & Design",
    categorySlug: "creative-design",
    subcategory: "AI Art Generation",
    subcategorySlug: "ai-art-generation",
    description: "Adobe Firefly is a family of creative generative AI models designed to generate images, text effects, and other content. It's integrated with Adobe's Creative Cloud suite.",
    features: [
      "Text-to-image generation",
      "Generative Fill",
      "Text effects",
      "Commercial use",
      "Integration with Photoshop"
    ],
    useCases: [
      "Digital art creation",
      "Photo editing",
      "Graphic design",
      "Concept visualization",
      "Marketing materials"
    ],
    tags: ["image-generation", "adobe", "creative-tools", "generative-ai"],
    rating: 4.6,
    reviewCount: 15400
  },
  {
    name: "Craiyon",
    slug: "craiyon",
    tagline: "Free AI image generator",
    category: "Creative & Design",
    categorySlug: "creative-design",
    subcategory: "AI Art Generation",
    subcategorySlug: "ai-art-generation",
    description: "Craiyon (formerly DALL-E Mini) is a free AI image generator that creates images from text descriptions. It's accessible through a web interface and doesn't require registration.",
    features: [
      "Free to use",
      "No registration required",
      "Multiple image outputs",
      "Web-based interface",
      "Community gallery"
    ],
    useCases: [
      "Concept art",
      "Social media visuals",
      "Creative inspiration",
      "Educational content",
      "Fun illustrations"
    ],
    tags: ["image-generation", "free-tools", "community-favorite", "beginner-friendly"],
    rating: 4.2,
    reviewCount: 23400
  },
  
  // AI Video Tools (Creative & Design > Video Editing)
  {
    name: "Pictory",
    slug: "pictory",
    tagline: "AI-powered video creation from text",
    category: "Creative & Design",
    categorySlug: "creative-design",
    subcategory: "Video Editing",
    subcategorySlug: "video-editing",
    description: "Pictory automatically creates videos from text content like blog posts, articles, and scripts. It uses AI to match relevant stock footage and images to your content.",
    features: [
      "Text-to-video conversion",
      "Automatic voiceover",
      "Brand customization",
      "Stock media library",
      "Social sharing"
    ],
    useCases: [
      "Blog to video conversion",
      "Social media content",
      "Marketing videos",
      "Educational content",
      "Product demos"
    ],
    tags: ["video-generation", "content-repurposing", "marketing", "social-media"],
    rating: 4.4,
    reviewCount: 5200
  },
  {
    name: "Synthesia",
    slug: "synthesia",
    tagline: "AI video generation with avatars",
    category: "Creative & Design",
    categorySlug: "creative-design",
    subcategory: "Video Editing",
    subcategorySlug: "video-editing",
    description: "Synthesia enables you to create professional videos from plain text in minutes. Choose from 125+ diverse AI avatars speaking in 120+ languages.",
    features: [
      "AI avatars",
      "120+ languages",
      "125+ avatars",
      "Text-to-video",
      "Brand customization"
    ],
    useCases: [
      "Training videos",
      "Marketing content",
      "Educational materials",
      "Corporate communications",
      "Product demos"
    ],
    tags: ["ai-video", "avatars", "multilingual", "training-videos"],
    rating: 4.7,
    reviewCount: 8900
  },
  
  // AI Code Assistants (Development & Engineering > Code Editors)
  {
    name: "GitHub Copilot",
    slug: "github-copilot",
    tagline: "AI pair programmer",
    category: "Development & Engineering",
    categorySlug: "development-engineering",
    subcategory: "Code Editors",
    subcategorySlug: "code-editors",
    description: "GitHub Copilot is an AI-powered code completion tool that helps developers write code faster. It suggests lines or blocks of code in real-time as you type.",
    features: [
      "Real-time code suggestions",
      "Multi-language support",
      "Natural language to code conversion",
      "Code explanation",
      "Test generation"
    ],
    useCases: [
      "Code completion",
      "Learning new languages",
      "Debugging assistance",
      "Code refactoring",
      "Documentation writing"
    ],
    tags: ["code-assistant", "programming", "developer-tools", "ai-coding"],
    rating: 4.6,
    reviewCount: 23400
  },
  {
    name: "Tabnine",
    slug: "tabnine",
    tagline: "AI code assistant for faster development",
    category: "Development & Engineering",
    categorySlug: "development-engineering",
    subcategory: "Code Editors",
    subcategorySlug: "code-editors",
    description: "Tabnine is an AI code assistant that helps developers write code faster with whole-line and full-function completions. It supports all programming languages and IDEs.",
    features: [
      "Whole-line completions",
      "Multi-language support",
      "IDE integration",
      "Team training",
      "Privacy-focused"
    ],
    useCases: [
      "Code completion",
      "Boilerplate reduction",
      "Learning best practices",
      "Team collaboration",
      "Productivity enhancement"
    ],
    tags: ["code-assistant", "productivity", "developer-tools", "ai-coding"],
    rating: 4.3,
      reviewCount: 12500
  },
  
  // AI Marketing Tools (Marketing & Growth > Analytics)
  {
    name: "Surfer SEO",
    slug: "surfer-seo",
    tagline: "Data-driven content creation platform",
    category: "Marketing & Growth",
    categorySlug: "marketing-growth",
    subcategory: "Analytics",
    subcategorySlug: "analytics",
    description: "Surfer SEO is a content creation platform that uses data to help you create content that ranks on search engines. It provides real-time SEO guidance as you write.",
    features: [
      "Content editor",
      "Keyword research",
      "SEO analyzer",
      "Content audit",
      "Team collaboration"
    ],
    useCases: [
      "SEO content creation",
      "Keyword optimization",
      "Content strategy",
      "Competitor analysis",
      "Team collaboration"
    ],
    tags: ["seo", "content-creation", "keyword-research", "analytics"],
    rating: 4.7,
    reviewCount: 6700
  },
  {
    name: "Frase",
    slug: "frase",
    tagline: "AI-powered content research and creation",
    category: "Marketing & Growth",
    categorySlug: "marketing-growth",
    subcategory: "Analytics",
    subcategorySlug: "analytics",
    description: "Frase helps you research, write, and optimize content to answer what your customers are searching for. It uses AI to analyze top-ranking content and provide insights.",
    features: [
      "Content research",
      "AI writer",
      "SEO optimization",
      "Content briefs",
      "Performance tracking"
    ],
    useCases: [
      "Content research",
      "SEO optimization",
      "Content creation",
      "Competitor analysis",
      "Topic clustering"
    ],
    tags: ["content-research", "seo", "ai-writing", "content-strategy"],
    rating: 4.5,
    reviewCount: 4300
  }
];

// Function to add tools to the tools.ts file
function addToolsToFile() {
  const toolsFilePath = path.join(__dirname, '../data/tools.ts');
  
  // Read the existing tools file
  let toolsContent = fs.readFileSync(toolsFilePath, 'utf8');
  
  // For each tool, we'll add it to the appropriate subcategory
  additionalAITools.forEach(tool => {
    const subcategoryKey = tool.subcategorySlug;
    
    // Create the tool entry
    const toolEntry = `
    {
      name: '${tool.name}',
      slug: '${tool.slug}',
      tagline: '${tool.tagline}',
      logoUrl: '/logos/${tool.slug}.png',
      website: 'https://www.${tool.slug}.com',
      pricing: 'freemium',
      badges: ${tool.reviewCount > 10000 ? "['popular', 'featured']" : "['trending']"},
      category: '${tool.category}',
      categorySlug: '${tool.categorySlug}',
      subcategory: '${tool.subcategory}',
      subcategorySlug: '${tool.subcategorySlug}',
      description: '${tool.description}',
      features: [${tool.features.map(f => `'${f}'`).join(', ')}],
      useCases: [${tool.useCases.map(u => `'${u}'`).join(', ')}],
      tags: [${tool.tags.map(t => `'${t}'`).join(', ')}],
      rating: ${tool.rating},
      reviewCount: ${tool.reviewCount}
    }`;
    
    // Find the subcategory section and insert the tool
    const subcategoryStart = toolsContent.indexOf(`'${subcategoryKey}': [`);
    if (subcategoryStart !== -1) {
      const insertPosition = toolsContent.indexOf(']', subcategoryStart);
      if (insertPosition !== -1) {
        // Insert the tool entry before the closing bracket
        const beforeInsert = toolsContent.substring(0, insertPosition);
        const afterInsert = toolsContent.substring(insertPosition);
        toolsContent = beforeInsert + (toolsContent[insertPosition - 1] !== '[' ? ',' : '') + toolEntry + afterInsert;
      }
    }
  });
  
  // Write the updated content back to the file
  fs.writeFileSync(toolsFilePath, toolsContent);
  
  console.log(`Successfully added ${additionalAITools.length} new AI tools to tools.ts`);
}

// Run the function
addToolsToFile();