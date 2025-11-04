import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Create __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// AI tools to add across various categories
const newAITools = [
  // Content Creation & Writing
  {
    name: "Jasper",
    slug: "jasper",
    tagline: "AI content generator for marketing teams",
    category: "Content Creation & Writing",
    categorySlug: "content-creation-writing",
    subcategory: "AI Writing Assistants",
    subcategorySlug: "ai-writing-assistants",
    description: "Jasper is an AI content creation tool that helps teams create high-quality content 10x faster. It's designed for marketers, copywriters, and content creators who want to scale their content production.",
    features: [
      "Over 50 templates for different content types",
      "Brand voice customization",
      "Long-form content assistant",
      "Grammarly integration",
      "Team collaboration features"
    ],
    useCases: [
      "Blog post writing",
      "Social media content creation",
      "Email marketing copy",
      "Product descriptions",
      "Website copy"
    ],
    tags: ["content-generation", "marketing", "copywriting", "team-collaboration"],
    rating: 4.6,
    reviewCount: 12500,
    pricing: "paid",
    website: "https://jasper.ai",
    alternatives: ["Copy.ai", "Writesonic", "Rytr"],
    integrations: ["Grammarly", "Notion", "Google Docs"]
  },
  {
    name: "Copy.ai",
    slug: "copy-ai",
    tagline: "AI-powered copywriting platform",
    category: "Content Creation & Writing",
    categorySlug: "content-creation-writing",
    subcategory: "AI Writing Assistants",
    subcategorySlug: "ai-writing-assistants",
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
    reviewCount: 18700,
    pricing: "freemium",
    website: "https://copy.ai",
    alternatives: ["Jasper", "Writesonic", "Rytr"],
    integrations: ["Shopify", "WordPress", "Google Sheets"]
  },
  {
    name: "Writesonic",
    slug: "writesonic",
    tagline: "AI writer that creates SEO-friendly content",
    category: "Content Creation & Writing",
    categorySlug: "content-creation-writing",
    subcategory: "AI Writing Assistments",
    subcategorySlug: "ai-writing-assistants",
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
    reviewCount: 9800,
    pricing: "freemium",
    website: "https://writesonic.com",
    alternatives: ["Jasper", "Copy.ai", "Rytr"],
    integrations: ["Surfer", "Google Docs", "WordPress"]
  },
  // Image & Design Tools
  {
    name: "Midjourney",
    slug: "midjourney",
    tagline: "AI art generation through Discord",
    category: "Image & Design",
    categorySlug: "image-design",
    subcategory: "AI Image Generation",
    subcategorySlug: "ai-image-generation",
    description: "Midjourney is an AI art generation tool that creates stunning visuals from text prompts. It's accessed through Discord and is known for its high-quality artistic outputs.",
    features: [
      "Text-to-image generation",
      "Style customization options",
      "Upscaling capabilities",
      "Variation creation",
      "Community collaboration"
    ],
    useCases: [
      "Concept art creation",
      "Social media graphics",
      "Book cover design",
      "Logo design",
      "Digital art"
    ],
    tags: ["image-generation", "artificial-intelligence", "creative-design", "digital-art"],
    rating: 4.8,
    reviewCount: 45200,
    pricing: "subscription",
    website: "https://midjourney.com",
    alternatives: ["DALL-E", "Stable Diffusion", "Adobe Firefly"],
    integrations: ["Discord", "Photoshop"]
  },
  {
    name: "DALL-E",
    slug: "dall-e",
    tagline: "AI system that creates realistic images from text",
    category: "Image & Design",
    categorySlug: "image-design",
    subcategory: "AI Image Generation",
    subcategorySlug: "ai-image-generation",
    description: "DALL-E is OpenAI's AI system that creates realistic images and art from natural language descriptions. It can combine concepts, attributes, and styles in creative ways.",
    features: [
      "Text-to-image generation",
      "Image editing capabilities",
      "Style variation options",
      "High-resolution outputs",
      "Creative concept blending"
    ],
    useCases: [
      "Illustration creation",
      "Product visualization",
      "Concept art",
      "Educational materials",
      "Marketing visuals"
    ],
    tags: ["image-generation", "openai", "creative-tools", "concept-art"],
    rating: 4.7,
    reviewCount: 38900,
    pricing: "paid",
    website: "https://openai.com/dall-e",
    alternatives: ["Midjourney", "Stable Diffusion", "Adobe Firefly"],
    integrations: ["OpenAI API"]
  },
  // Video Creation Tools
  {
    name: "Runway ML",
    slug: "runway-ml",
    tagline: "Creative suite powered by machine learning",
    category: "Video Creation",
    categorySlug: "video-creation",
    subcategory: "AI Video Editing",
    subcategorySlug: "ai-video-editing",
    description: "Runway ML is a creative toolkit that makes it easy to edit video using artificial intelligence. It offers a range of tools for green screen removal, object tracking, and more.",
    features: [
      "Green screen removal",
      "Object tracking",
      "Text animation",
      "AI-powered effects",
      "Collaborative editing"
    ],
    useCases: [
      "Video editing",
      "Content creation",
      "Marketing videos",
      "Educational content",
      "Social media videos"
    ],
    tags: ["video-editing", "machine-learning", "content-creation", "green-screen"],
    rating: 4.5,
    reviewCount: 7600,
    pricing: "freemium",
    website: "https://runwayml.com",
    alternatives: ["Descript", "Pictory", "Lumen5"],
    integrations: ["YouTube", "Vimeo"]
  },
  {
    name: "Pictory",
    slug: "pictory",
    tagline: "AI-powered video creation from text",
    category: "Video Creation",
    categorySlug: "video-creation",
    subcategory: "AI Video Generation",
    subcategorySlug: "ai-video-generation",
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
    reviewCount: 5200,
    pricing: "freemium",
    website: "https://pictory.ai",
    alternatives: ["Lumen5", "InVideo", "Animoto"],
    integrations: ["WordPress", "Google Drive", "Dropbox"]
  },
  // Coding & Development
  {
    name: "GitHub Copilot",
    slug: "github-copilot",
    tagline: "AI pair programmer",
    category: "Coding & Development",
    categorySlug: "coding-development",
    subcategory: "AI Code Assistants",
    subcategorySlug: "ai-code-assistants",
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
    reviewCount: 23400,
    pricing: "subscription",
    website: "https://copilot.github.com",
    alternatives: ["Tabnine", "Replit Ghostwriter", "Amazon CodeWhisperer"],
    integrations: ["Visual Studio Code", "JetBrains", "Neovim"]
  },
  {
    name: "Replit Ghostwriter",
    slug: "replit-ghostwriter",
    tagline: "AI-powered coding assistant",
    category: "Coding & Development",
    categorySlug: "coding-development",
    subcategory: "AI Code Assistants",
    subcategorySlug: "ai-code-assistants",
    description: "Replit Ghostwriter is an AI coding assistant that helps you write code faster. It provides intelligent code completions, generates entire functions, and explains existing code.",
    features: [
      "Intelligent code completion",
      "Function generation",
      "Code explanation",
      "Multi-language support",
      "Context-aware suggestions"
    ],
    useCases: [
      "Code completion",
      "Learning programming",
      "Code refactoring",
      "Debugging assistance",
      "Documentation generation"
    ],
    tags: ["coding-assistant", "programming", "developer-tools", "code-generation"],
    rating: 4.3,
    reviewCount: 8900,
    pricing: "freemium",
    website: "https://replit.com/site/ghostwriter",
    alternatives: ["GitHub Copilot", "Tabnine", "Amazon CodeWhisperer"],
    integrations: ["Replit", "VS Code", "JetBrains"]
  },
  // Business & Productivity
  {
    name: "Notion AI",
    slug: "notion-ai",
    tagline: "AI-powered workspace",
    category: "Business & Productivity",
    categorySlug: "business-productivity",
    subcategory: "AI Productivity Tools",
    subcategorySlug: "ai-productivity-tools",
    description: "Notion AI brings powerful AI capabilities directly into your Notion workspace. It can help you write, brainstorm, edit, and organize your work more efficiently.",
    features: [
      "AI writing assistant",
      "Content summarization",
      "Task creation from notes",
      "Smart templates",
      "Language translation"
    ],
    useCases: [
      "Document writing",
      "Meeting notes summarization",
      "Task management",
      "Content creation",
      "Knowledge base organization"
    ],
    tags: ["productivity", "workspace", "note-taking", "ai-assistant"],
    rating: 4.7,
    reviewCount: 15600,
    pricing: "freemium",
    website: "https://notion.so/ai",
    alternatives: ["Coda AI", "Craft", "Obsidian"],
    integrations: ["Notion", "Google Drive", "Slack"]
  },
  {
    name: "Otter.ai",
    slug: "otter-ai",
    tagline: "AI-powered meeting assistant",
    category: "Business & Productivity",
    categorySlug: "business-productivity",
    subcategory: "AI Meeting Assistants",
    subcategorySlug: "ai-meeting-assistants",
    description: "Otter.ai is a meeting transcription service that records audio, transcribes speech to text in real-time, and generates rich notes for meetings, interviews, and lectures.",
    features: [
      "Live transcription",
      "Speaker identification",
      "Searchable transcripts",
      "Summary generation",
      "Integration with video conferencing"
    ],
    useCases: [
      "Meeting transcription",
      "Interview recording",
      "Lecture notes",
      "Market research",
      "Training sessions"
    ],
    tags: ["transcription", "meeting-assistant", "productivity", "voice-recognition"],
    rating: 4.4,
    reviewCount: 11200,
    pricing: "freemium",
    website: "https://otter.ai",
    alternatives: ["Rev", "Temi", "Sonix"],
    integrations: ["Zoom", "Google Meet", "Microsoft Teams"]
  }
];

// Function to add tools to the tools.ts file
function addToolsToFile() {
  const toolsFilePath = path.join(__dirname, '../data/tools.ts');
  
  // Read the existing tools file
  let toolsContent = fs.readFileSync(toolsFilePath, 'utf8');
  
  // Find the position to insert new tools
  // We'll add them to the 'content-creation-writing-ai-writing-assistants' category
  const insertPosition = toolsContent.indexOf('// Add new tools for Content Creation & Writing > AI Writing Assistants');
  
  if (insertPosition === -1) {
    console.log("Could not find the insertion point in tools.ts");
    return;
  }
  
  // Create tool entries
  let toolEntries = '';
  newAITools.forEach(tool => {
    toolEntries += `
    {
      name: '${tool.name}',
      slug: '${tool.slug}',
      tagline: '${tool.tagline}',
      logoUrl: '/logos/${tool.slug}.png',
      website: '${tool.website}',
      pricing: '${tool.pricing}',
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
      reviewCount: ${tool.reviewCount},
      alternatives: [${tool.alternatives.map(a => `'${a}'`).join(', ')}],
      integrations: [${tool.integrations.map(i => `'${i}'`).join(', ')}]
    },
`;
  });
  
  // Insert the new tools
  const beforeInsert = toolsContent.substring(0, insertPosition);
  const afterInsert = toolsContent.substring(insertPosition);
  
  const updatedContent = beforeInsert + toolEntries + afterInsert;
  
  // Write the updated content back to the file
  fs.writeFileSync(toolsFilePath, updatedContent);
  
  console.log(`Successfully added ${newAITools.length} new AI tools to tools.ts`);
}

// Run the function
addToolsToFile();