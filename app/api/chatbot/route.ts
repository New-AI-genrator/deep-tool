import { NextResponse } from 'next/server';
import { getAllTools, categoriesWithSubcategories, ToolPricing, ToolBadge } from '../../../data/tools';
import { calculateCategoryPreferences, getUserPreferences } from '../../../lib/userPreferences';
import { getPredictiveRecommendations, generateRecommendationExplanation, predictNextCategory } from '../../../lib/predictiveRecommendations';

interface ToolComparisonData {
  nameLength: number;
  hasFreePlan: boolean;
  isHighlyRated: boolean;
  isPopular: boolean;
  badgesCount: number;
  featureMatchCount: number;
  pricingTier: string;
}

// Add intelligence event interface
interface IntelligenceEvent {
  id: string;
  tool: string;
  type: 'price_change' | 'new_feature' | 'trending' | 'update' | 'alert' | 'milestone' | 'integration';
  detail: string;
  timestamp: string;
  impact: 'high' | 'medium' | 'low';
  category: string;
  change?: string;
}

// Add conversation context interface
interface ConversationContext {
  userId?: string;
  sessionId: string;
  history: ChatMessage[];
  preferences: {
    categories?: string[];
    pricing?: string[];
    features?: string[];
    lastInteraction?: number;
  };
}

// Add chat message interface
interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  tools?: any[];
  intelligenceEvents?: any[];
  intent?: string;
  filters?: any;
}

// Enhanced chatbot responses with more context
const greetingResponses = [
  "Hello! I'm your DeepTool AI Assistant. I can help you find the perfect AI tools for your needs. What are you looking for today?",
  "Hi there! I'm here to help you discover amazing AI tools. Tell me what you're looking for!",
  "Welcome! I'm your personal AI tool advisor. What kind of tools do you need?",
  "Greetings! I'm your AI-powered tool expert. How can I assist you in finding the perfect solution today?"
];

const helpResponses = [
  "I can help you find AI tools based on your specific needs. Try asking about tools for a particular use case, category, or feature.",
  "You can ask me about tools in specific categories like 'design', 'marketing', or 'development', or ask for tools with specific features.",
  "I can recommend tools based on pricing, ratings, or specific capabilities. What are you looking for?",
  "I specialize in matching you with the perfect tools. You can ask me to compare tools, find tools with specific features, or recommend tools based on your preferences."
];

const toolResponses = [
  "Based on your query, I found several tools that might be helpful.",
  "Here are some recommendations that match your requirements.",
  "I've analyzed your request and found the following tools.",
  "These tools are highly rated and match your search criteria.",
  "Based on similar user requests, these tools are recommended.",
  "After analyzing your needs, I've curated these top recommendations for you."
];

const personalizedResponses = [
  "Based on your preferences, I've found some tools you might like.",
  "Here are some personalized recommendations for you.",
  "These tools align with your interests and previous interactions.",
  "Taking into account your preferences, I've selected these tools that match your profile.",
  "These recommendations are tailored specifically to your interests and usage patterns."
];

const comparisonResponses = [
  "Here's a comparison of the tools you requested:",
  "I've compared these tools based on your criteria:",
  "Here's how these tools stack up against each other:",
  "Here's a detailed comparison to help you make the best choice:",
  "I've analyzed these tools side-by-side to highlight their differences:"
];

const intelligenceResponses = [
  "Here's the latest market intelligence I found related to your query:",
  "I've discovered some recent developments in the AI tool landscape:",
  "Based on real-time intelligence, here are the latest updates:",
  "Here's what's happening right now in the AI tools market:"
];

const contextualResponses = [
  "Based on our previous conversation, I've refined my recommendations for you.",
  "Taking into account what we've discussed earlier, here are some relevant tools.",
  "Building on our conversation history, I've found these tools that might interest you.",
  "Since you mentioned {category} before, I've found some related tools that might be useful."
];

// Tool categories for context
const toolCategories = categoriesWithSubcategories.map(cat => ({
  name: cat.name,
  slug: cat.slug,
  description: cat.description,
  subcategories: cat.subcategories.map(sub => ({
    name: sub.name,
    slug: sub.slug,
    description: sub.description
  }))
}));

// Function to extract keywords from message
function extractKeywords(message: string): string[] {
  // Remove common stop words and extract meaningful keywords
  const stopWords = new Set([
    'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 
    'is', 'are', 'was', 'were', 'be', 'been', 'have', 'has', 'had', 'do', 'does', 'did', 
    'will', 'would', 'could', 'should', 'can', 'may', 'might', 'must', 'shall', 'i', 'you',
    'we', 'they', 'he', 'she', 'it', 'them', 'us', 'me', 'my', 'your', 'our', 'their'
  ]);
  
  return message
    .toLowerCase()
    .replace(/[^\w\s]/g, '') // Remove punctuation
    .split(/\s+/)
    .filter(word => word.length > 2 && !stopWords.has(word));
}

// Function to identify intent from message
function identifyIntent(message: string): 'greeting' | 'help' | 'comparison' | 'recommendation' | 'personalized' | 'intelligence' | 'default' {
  const lowerMessage = message.toLowerCase();
  
  // Greeting intent
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey') || 
      lowerMessage.includes('good morning') || lowerMessage.includes('good afternoon') || lowerMessage.includes('good evening')) {
    return 'greeting';
  }
  
  // Help intent
  if (lowerMessage.includes('help') || lowerMessage.includes('what can you do') || lowerMessage.includes('how do i') ||
      lowerMessage.includes('assist') || lowerMessage.includes('support')) {
    return 'help';
  }
  
  // Comparison intent
  if (lowerMessage.includes('compare') || lowerMessage.includes('vs') || lowerMessage.includes('versus') || 
      lowerMessage.includes('difference') || lowerMessage.includes('better than') || lowerMessage.includes('which is better')) {
    return 'comparison';
  }
  
  // Intelligence intent
  if (lowerMessage.includes('trend') || lowerMessage.includes('news') || lowerMessage.includes('update') || 
      lowerMessage.includes('latest') || lowerMessage.includes('new') || lowerMessage.includes('happen') ||
      lowerMessage.includes('market') || lowerMessage.includes('intelligence') || lowerMessage.includes('insight')) {
    return 'intelligence';
  }
  
  // Personalized intent
  if (lowerMessage.includes('my') || lowerMessage.includes('prefer') || lowerMessage.includes('like') || 
      lowerMessage.includes('interest') || lowerMessage.includes('recommend for me') || lowerMessage.includes('based on my')) {
    return 'personalized';
  }
  
  // Recommendation intent (default for tool-related queries)
  if (lowerMessage.includes('tool') || lowerMessage.includes('software') || lowerMessage.includes('app') || 
      lowerMessage.includes('platform') || lowerMessage.includes('solution') || lowerMessage.includes('find') ||
      lowerMessage.includes('looking for') || lowerMessage.includes('need')) {
    return 'recommendation';
  }
  
  return 'default';
}

// Function to extract filters from message
function extractFilters(message: string): { 
  pricing?: ToolPricing; 
  minRating?: number; 
  badges?: ToolBadge[]; 
  categories?: string[]; 
  features?: string[];
  sortBy?: 'rating' | 'popularity' | 'newest';
  limit?: number;
} {
  const lowerMessage = message.toLowerCase();
  const filters: { 
    pricing?: ToolPricing; 
    minRating?: number; 
    badges?: ToolBadge[]; 
    categories?: string[]; 
    features?: string[];
    sortBy?: 'rating' | 'popularity' | 'newest';
    limit?: number;
  } = {};
  
  // Extract pricing preferences
  if (lowerMessage.includes('free')) {
    filters.pricing = 'free';
  } else if (lowerMessage.includes('paid')) {
    filters.pricing = 'paid';
  } else if (lowerMessage.includes('freemium')) {
    filters.pricing = 'freemium';
  } else if (lowerMessage.includes('enterprise')) {
    filters.pricing = 'enterprise';
  }
  
  // Extract rating preferences
  if (lowerMessage.includes('4 star') || lowerMessage.includes('4-star') || lowerMessage.includes('highly rated')) {
    filters.minRating = 4;
  } else if (lowerMessage.includes('5 star') || lowerMessage.includes('5-star')) {
    filters.minRating = 5;
  }
  
  // Extract badge preferences
  const badges: ToolBadge[] = [];
  if (lowerMessage.includes('trending')) badges.push('trending');
  if (lowerMessage.includes('popular')) badges.push('popular');
  if (lowerMessage.includes('verified')) badges.push('nexus-verified');
  if (lowerMessage.includes('enterprise')) badges.push('enterprise');
  if (lowerMessage.includes('new')) badges.push('new');
  if (lowerMessage.includes('featured')) badges.push('featured');
  if (lowerMessage.includes('community')) badges.push('community-favorite');
  
  if (badges.length > 0) {
    filters.badges = badges;
  }
  
  // Extract category preferences from keywords
  const categories: string[] = [];
  toolCategories.forEach(category => {
    const categoryText = `${category.name} ${category.description}`.toLowerCase();
    const subcategoryText = category.subcategories.map(sub => `${sub.name} ${sub.description}`).join(' ').toLowerCase();
    
    if (lowerMessage.includes(category.name.toLowerCase()) || categoryText.includes(lowerMessage)) {
      categories.push(category.name);
    }
    
    category.subcategories.forEach(subcategory => {
      if (lowerMessage.includes(subcategory.name.toLowerCase()) || subcategoryText.includes(lowerMessage)) {
        categories.push(subcategory.name);
      }
    });
  });
  
  if (categories.length > 0) {
    filters.categories = categories;
  }
  
  // Extract feature preferences (simple approach)
  const features: string[] = [];
  const featureKeywords = [
    'api', 'integration', 'mobile', 'desktop', 'web', 'cloud', 'ai', 'machine learning',
    'automation', 'collaboration', 'analytics', 'reporting', 'dashboard', 'interface',
    'customization', 'template', 'workflow', 'security', 'privacy', 'encryption',
    'collaborative', 'real-time', 'offline', 'multi-language', 'export', 'import',
    'notification', 'calendar', 'scheduler', 'crm', 'email', 'social media'
  ];
  
  featureKeywords.forEach(feature => {
    if (lowerMessage.includes(feature)) {
      features.push(feature);
    }
  });
  
  if (features.length > 0) {
    filters.features = features;
  }
  
  // Extract sorting preferences
  if (lowerMessage.includes('best') || lowerMessage.includes('highest rated') || lowerMessage.includes('top rated')) {
    filters.sortBy = 'rating';
  } else if (lowerMessage.includes('popular') || lowerMessage.includes('most used')) {
    filters.sortBy = 'popularity';
  } else if (lowerMessage.includes('new') || lowerMessage.includes('latest')) {
    filters.sortBy = 'newest';
  }
  
  // Extract limit (number of results)
  const limitMatch = lowerMessage.match(/(\d+)\s*(?:results|tools|recommendations)/);
  if (limitMatch) {
    filters.limit = Math.min(parseInt(limitMatch[1]), 10); // Cap at 10 results
  }
  
  return filters;
}

// Function to match tools based on query and filters
function matchTools(
  allTools: any[], 
  keywords: string[], 
  filters: { 
    pricing?: ToolPricing; 
    minRating?: number; 
    badges?: ToolBadge[]; 
    categories?: string[]; 
    features?: string[];
    sortBy?: 'rating' | 'popularity' | 'newest';
    limit?: number;
  }
): any[] {
  // Score tools based on keyword matches and filters
  const scoredTools = allTools.map(tool => {
    let score = 0;
    const toolText = `${tool.name} ${tool.tagline} ${tool.description} ${tool.category} ${tool.subcategory}`.toLowerCase();
    
    // Score based on keyword matches
    keywords.forEach(keyword => {
      if (toolText.includes(keyword)) {
        score += 20;
      }
      
      // Boost for exact name matches
      if (tool.name.toLowerCase() === keyword) {
        score += 50;
      }
    });
    
    // Apply filters
    if (filters.pricing && tool.pricing === filters.pricing) {
      score += 25;
    }
    
    if (filters.minRating && tool.rating && tool.rating >= filters.minRating) {
      score += Math.round(tool.rating * 5);
    }
    
    if (filters.badges && tool.badges) {
      const badgeMatches = filters.badges.filter(badge => tool.badges?.includes(badge)).length;
      score += badgeMatches * 15;
    }
    
    if (filters.categories) {
      const categoryMatches = filters.categories.filter(cat => 
        tool.category.toLowerCase().includes(cat.toLowerCase()) || 
        tool.subcategory.toLowerCase().includes(cat.toLowerCase())
      ).length;
      score += categoryMatches * 20;
    }
    
    if (filters.features && tool.features) {
      const featureMatches = filters.features.filter(feature => 
        tool.features.some((f: string) => f.toLowerCase().includes(feature))
      ).length;
      score += featureMatches * 10;
    }
    
    // Boost score for highly rated tools
    if (tool.rating && tool.rating >= 4.5) {
      score += 10;
    }
    
    // Boost score for tools with many reviews
    if (tool.reviewCount && tool.reviewCount >= 100) {
      score += 5;
    }
    
    return { ...tool, score };
  });
  
  // Filter and sort tools by score
  let filteredTools = scoredTools.filter(tool => tool.score > 0);
  
  // Apply sorting
  switch (filters.sortBy) {
    case 'rating':
      filteredTools.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      break;
    case 'popularity':
      filteredTools.sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0));
      break;
    case 'newest':
      // Assuming tools have a date field, otherwise sort by ID/name
      filteredTools.sort((a, b) => b.score - a.score);
      break;
    default:
      filteredTools.sort((a, b) => b.score - a.score);
  }
  
  // Apply limit
  const limit = filters.limit || 8;
  return filteredTools.slice(0, limit);
}

// Enhanced function to get personalized recommendations with predictive analytics
function getPersonalizedRecommendations(allTools: any[], userId?: string): any[] {
  try {
    // Get user preferences (in a real implementation, this would come from the request)
    const categoryScores = calculateCategoryPreferences();
    
    // If no preferences, return popular tools
    if (categoryScores.length === 0) {
      return allTools
        .filter(tool => tool.rating && tool.rating >= 4.5)
        .sort((a, b) => (b.rating || 0) - (a.rating || 0))
        .slice(0, 5);
    }
    
    // Create a mock user behavior based on preferences for demonstration
    const userBehavior = {
      categoryViews: Object.fromEntries(categoryScores.map(({ category, score }) => [category, Math.round(score)])),
      toolInteractions: {},
      searchPatterns: [],
      timeOnSite: 1200, // 20 minutes
      sessionCount: 5,
      lastVisit: Date.now() - 3600000 // 1 hour ago
    };
    
    // Get predictive recommendations
    const predictiveScores = getPredictiveRecommendations(allTools, userBehavior, 8);
    
    // Map scores to tools
    const recommendedTools = predictiveScores.map(score => {
      const tool = allTools.find(t => t.slug === score.toolId);
      if (tool) {
        return {
          ...tool,
          predictiveScore: score.score,
          recommendationReasons: score.reasons
        };
      }
      return null;
    }).filter(Boolean) as any[];
    
    return recommendedTools;
  } catch (error) {
    console.error('Error getting personalized recommendations:', error);
    // Fallback to popular tools
    return allTools
      .filter(tool => tool.rating && tool.rating >= 4.5)
      .sort((a, b) => (b.rating || 0) - (a.rating || 0))
      .slice(0, 5);
  }
}

// Enhanced function to compare tools with more detailed analysis
function compareTools(tools: any[], featuresToCompare?: string[]): any[] {
  // For comparison, we'll return the same tools but with enhanced comparison data
  return tools.map(tool => ({
    ...tool,
    comparisonData: {
      nameLength: tool.name.length,
      hasFreePlan: tool.pricing === 'free' || tool.pricing === 'freemium',
      isHighlyRated: tool.rating && tool.rating >= 4.5,
      isPopular: tool.reviewCount && tool.reviewCount >= 500,
      badgesCount: tool.badges ? tool.badges.length : 0,
      featureMatchCount: featuresToCompare && tool.features ? 
        featuresToCompare.filter(f => tool.features.includes(f)).length : 0,
      pricingTier: tool.pricing,
      lastUpdated: tool.lastUpdated || new Date().toISOString()
    } as ToolComparisonData
  }));
}

// Function to get market intelligence data
async function getMarketIntelligence(): Promise<IntelligenceEvent[]> {
  try {
    // In a real implementation, this would fetch from the intelligence API
    // For now, we'll return mock data based on the existing intelligence dashboard
    return [
      {
        id: '1',
        tool: 'ChatGPT',
        type: 'new_feature',
        detail: 'Launched GPT-4 Turbo with 128K context window and improved performance',
        timestamp: '2 hours ago',
        impact: 'high',
        category: 'AI Generation',
        change: '+40% faster'
      },
      {
        id: '2',
        tool: 'Midjourney',
        type: 'price_change',
        detail: 'Basic plan price increased from $10 to $12/month',
        timestamp: '5 hours ago',
        impact: 'medium',
        category: 'AI Generation',
        change: '+20%'
      },
      {
        id: '3',
        tool: 'Notion',
        type: 'trending',
        detail: 'Experiencing 300% surge in sign-ups after AI features announcement',
        timestamp: '8 hours ago',
        impact: 'high',
        category: 'Productivity',
        change: '+300%'
      },
      {
        id: '4',
        tool: 'GitHub Copilot',
        type: 'update',
        detail: 'Released Copilot Chat for all subscribers with multi-file editing',
        timestamp: '12 hours ago',
        impact: 'high',
        category: 'Development'
      },
      {
        id: '5',
        tool: 'Figma',
        type: 'new_feature',
        detail: 'Introduced AI-powered design suggestions and auto-layout improvements',
        timestamp: '1 day ago',
        impact: 'medium',
        category: 'Design',
        change: '+25% efficiency'
      }
    ];
  } catch (error) {
    console.error('Error fetching market intelligence:', error);
    return [];
  }
}

// Function to match intelligence events based on keywords
function matchIntelligenceEvents(events: IntelligenceEvent[], keywords: string[]): IntelligenceEvent[] {
  return events.filter(event => {
    const eventText = `${event.tool} ${event.detail} ${event.category}`.toLowerCase();
    return keywords.some(keyword => eventText.includes(keyword));
  });
}

// Function to extract user preferences from conversation history
function extractUserPreferences(history: ChatMessage[]): { categories: string[]; pricing: string[]; features: string[] } {
  const categories: string[] = [];
  const pricing: string[] = [];
  const features: string[] = [];
  
  // Look through the last 5 messages for preference indicators
  const recentMessages = history.slice(-5);
  
  recentMessages.forEach(message => {
    if (message.sender === 'user') {
      const lowerText = message.text.toLowerCase();
      
      // Extract categories
      if (lowerText.includes('design')) categories.push('Design');
      if (lowerText.includes('marketing')) categories.push('Marketing');
      if (lowerText.includes('development')) categories.push('Development');
      if (lowerText.includes('productivity')) categories.push('Productivity');
      if (lowerText.includes('writing')) categories.push('Writing');
      if (lowerText.includes('image') || lowerText.includes('photo')) categories.push('Image Generation');
      
      // Extract pricing preferences
      if (lowerText.includes('free')) pricing.push('free');
      if (lowerText.includes('paid')) pricing.push('paid');
      if (lowerText.includes('freemium')) pricing.push('freemium');
      if (lowerText.includes('enterprise')) pricing.push('enterprise');
      
      // Extract feature preferences
      if (lowerText.includes('api')) features.push('API');
      if (lowerText.includes('integration')) features.push('Integration');
      if (lowerText.includes('collaboration')) features.push('Collaboration');
      if (lowerText.includes('mobile')) features.push('Mobile');
      if (lowerText.includes('analytics')) features.push('Analytics');
    }
  });
  
  return {
    categories: [...new Set(categories)], // Remove duplicates
    pricing: [...new Set(pricing)],
    features: [...new Set(features)]
  };
}

// Function to apply contextual learning to tool recommendations
function applyContextualLearning(tools: any[], context: ConversationContext): any[] {
  // If we have user preferences, boost scores for matching tools
  if (context.preferences.categories && context.preferences.categories.length > 0) {
    return tools.map(tool => {
      let scoreBoost = 0;
      
      // Boost for category matches
      if (context.preferences.categories?.includes(tool.category)) {
        scoreBoost += 20;
      }
      
      // Boost for pricing matches
      if (context.preferences.pricing?.includes(tool.pricing)) {
        scoreBoost += 15;
      }
      
      // Boost for feature matches
      if (context.preferences.features && tool.features) {
        const featureMatches = context.preferences.features.filter(feature => 
          tool.features.some((f: string) => f.toLowerCase().includes(feature.toLowerCase()))
        ).length;
        scoreBoost += featureMatches * 10;
      }
      
      return {
        ...tool,
        score: (tool.score || 0) + scoreBoost,
        contextualBoost: scoreBoost
      };
    }).sort((a, b) => (b.score || 0) - (a.score || 0));
  }
  
  return tools;
}

// Enhanced function to generate contextual response
function generateResponse(
  message: string, 
  tools: any[], 
  intent: 'greeting' | 'help' | 'comparison' | 'recommendation' | 'personalized' | 'intelligence' | 'default',
  isPersonalized: boolean = false,
  filters: any = {},
  intelligenceEvents: IntelligenceEvent[] = [],
  context?: ConversationContext
): string {
  const lowerMessage = message.toLowerCase();
  
  switch (intent) {
    case 'greeting':
      return greetingResponses[Math.floor(Math.random() * greetingResponses.length)];
    
    case 'help':
      return helpResponses[Math.floor(Math.random() * helpResponses.length)];
    
    case 'comparison':
      return comparisonResponses[Math.floor(Math.random() * comparisonResponses.length)];
    
    case 'intelligence':
      if (intelligenceEvents.length > 0) {
        return intelligenceResponses[Math.floor(Math.random() * intelligenceResponses.length)];
      }
      return "I couldn't find any recent market intelligence matching your query. Would you like me to help you find tools instead?";
    
    case 'personalized':
      return personalizedResponses[Math.floor(Math.random() * personalizedResponses.length)];
    
    case 'recommendation':
    case 'default':
      // Check if we have contextual information to enhance the response
      if (context && context.history.length > 1) {
        const preferences = extractUserPreferences(context.history);
        if (preferences.categories.length > 0 || preferences.pricing.length > 0 || preferences.features.length > 0) {
          // Use a contextual response
          let response = contextualResponses[Math.floor(Math.random() * contextualResponses.length)];
          if (preferences.categories.length > 0) {
            response = response.replace('{category}', preferences.categories[0]);
          }
          return response;
        }
      }
      
      if (tools.length > 0) {
        if (isPersonalized) {
          return personalizedResponses[Math.floor(Math.random() * personalizedResponses.length)];
        }
        return toolResponses[Math.floor(Math.random() * toolResponses.length)];
      }
      
      // Provide specific feedback based on filters
      const filterDetails = [];
      if (filters.pricing) filterDetails.push(`pricing: ${filters.pricing}`);
      if (filters.minRating) filterDetails.push(`minimum rating: ${filters.minRating} stars`);
      if (filters.badges && filters.badges.length > 0) filterDetails.push(`badges: ${filters.badges.join(', ')}`);
      if (filters.categories && filters.categories.length > 0) filterDetails.push(`categories: ${filters.categories.join(', ')}`);
      
      if (filterDetails.length > 0) {
        return `I couldn't find tools matching your specific criteria (${filterDetails.join(', ')}). Would you like to broaden your search or try different filters?`;
      }
      
      return "I couldn't find any tools matching your request. Could you provide more details about what you're looking for?";
    
    default:
      return "I found some tools that might be relevant to your request. Let me know if you need more specific recommendations!";
  }
}

export async function POST(request: Request) {
  try {
    const { message, context, userId } = await request.json();
    
    // Get all tools
    const allTools = getAllTools();
    
    // Extract keywords from message
    const keywords = extractKeywords(message);
    
    // Identify intent
    const intent = identifyIntent(message);
    
    // Extract filters
    const filters = extractFilters(message);
    
    let recommendedTools: any[] = [];
    let isPersonalized = false;
    let intelligenceEvents: IntelligenceEvent[] = [];
    let conversationContext: ConversationContext = {
      userId,
      sessionId: Date.now().toString(),
      history: context?.previousMessages || [],
      preferences: {}
    };
    
    // Extract user preferences from conversation history
    if (conversationContext.history.length > 0) {
      conversationContext.preferences = extractUserPreferences(conversationContext.history);
    }
    
    // Handle different intents
    switch (intent) {
      case 'intelligence':
        // Get market intelligence data
        intelligenceEvents = await getMarketIntelligence();
        // Filter events based on keywords
        intelligenceEvents = matchIntelligenceEvents(intelligenceEvents, keywords);
        break;
        
      case 'personalized':
        recommendedTools = getPersonalizedRecommendations(allTools, userId);
        isPersonalized = true;
        break;
        
      case 'comparison':
        // For comparison, we'll first find tools and then add comparison data
        const comparisonTools = matchTools(allTools, keywords, filters);
        recommendedTools = compareTools(comparisonTools, filters.features);
        break;
        
      case 'recommendation':
      case 'default':
        recommendedTools = matchTools(allTools, keywords, filters);
        
        // Apply contextual learning if we have conversation history
        if (conversationContext.history.length > 0) {
          recommendedTools = applyContextualLearning(recommendedTools, conversationContext);
        }
        
        // If no matches, get popular tools
        if (recommendedTools.length === 0) {
          recommendedTools = allTools
            .filter(tool => tool.rating && tool.rating >= 4.5)
            .sort((a, b) => (b.rating || 0) - (a.rating || 0))
            .slice(0, 5);
        }
        break;
        
      case 'greeting':
      case 'help':
        // For greeting and help, we might still want to show some popular tools
        recommendedTools = allTools
          .filter(tool => tool.rating && tool.rating >= 4.5)
          .sort((a, b) => (b.rating || 0) - (a.rating || 0))
          .slice(0, 3);
        break;
    }
    
    // Generate a contextual response
    const responseText = generateResponse(message, recommendedTools, intent, isPersonalized, filters, intelligenceEvents, conversationContext);
    
    // Format tools for response
    const formattedTools = recommendedTools.map(tool => ({
      id: tool.slug,
      name: tool.name,
      tagline: tool.tagline,
      logoUrl: tool.logoUrl,
      category: tool.category,
      categorySlug: tool.categorySlug,
      subcategory: tool.subcategory,
      subcategorySlug: tool.subcategorySlug,
      pricing: tool.pricing,
      rating: tool.rating,
      reviewCount: tool.reviewCount,
      badges: tool.badges,
      features: tool.features ? tool.features.slice(0, 5) : [],
      useCases: tool.useCases ? tool.useCases.slice(0, 3) : [],
      comparisonData: tool.comparisonData,
      contextualBoost: tool.contextualBoost || 0,
      predictiveScore: tool.predictiveScore || 0,
      recommendationReasons: tool.recommendationReasons || []
    }));
    
    // Format intelligence events for response
    const formattedEvents = intelligenceEvents.map(event => ({
      id: event.id,
      tool: event.tool,
      type: event.type,
      detail: event.detail,
      timestamp: event.timestamp,
      impact: event.impact,
      category: event.category,
      change: event.change
    }));
    
    return NextResponse.json({
      success: true,
      response: responseText,
      tools: formattedTools,
      intelligenceEvents: formattedEvents,
      intent,
      filters: Object.keys(filters).length > 0 ? filters : null,
      timestamp: new Date().toISOString(),
      toolCount: formattedTools.length,
      eventCount: formattedEvents.length,
      context: {
        preferences: conversationContext.preferences
      }
    });
  } catch (error) {
    console.error('Chatbot API error:', error);
    return NextResponse.json({
      success: false,
      response: "I'm sorry, I encountered an error processing your request. Please try again.",
      tools: [],
      intelligenceEvents: [],
      intent: 'default',
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}

// GET endpoint for chatbot info
export async function GET() {
  return NextResponse.json({
    name: "DeepTool AI Assistant",
    description: "An AI-powered assistant to help you find the perfect tools",
    version: "2.1",
    capabilities: [
      "Advanced tool recommendations based on your needs",
      "Personalized suggestions using your preferences",
      "Tool comparisons and feature analysis",
      "Category and subcategory guidance",
      "Pricing and feature filtering",
      "Trending tool insights",
      "Natural language understanding",
      "Context-aware conversations",
      "Multi-dimensional tool evaluation"
    ],
    categories: toolCategories.length,
    tools: getAllTools().length,
    lastUpdated: new Date().toISOString(),
    documentation: "/chatbot/documentation"
  });
}
