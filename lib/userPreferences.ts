// User Preferences Tracking System
interface UserPreference {
  category?: string;
  toolId?: string;
  timestamp: number;
  interactionType: 'view' | 'click' | 'favorite' | 'share';
}

export interface PreferenceScore {
  category: string;
  score: number;
}

const PREFERENCE_STORAGE_KEY = 'deeptool_user_preferences';
const MAX_PREFERENCES = 100;

// Track user preference when they view a category or tool
export function trackUserPreference(preference: { 
  category?: string; 
  toolId?: string;
  interactionType?: 'view' | 'click' | 'favorite' | 'share';
}) {
  if (typeof window === 'undefined') return;

  try {
    const preferences: UserPreference[] = JSON.parse(
      localStorage.getItem(PREFERENCE_STORAGE_KEY) || '[]'
    );

    // Add new preference
    preferences.push({
      ...preference,
      interactionType: preference.interactionType || 'view',
      timestamp: Date.now(),
    });

    // Keep only the most recent preferences
    if (preferences.length > MAX_PREFERENCES) {
      preferences.splice(0, preferences.length - MAX_PREFERENCES);
    }

    localStorage.setItem(PREFERENCE_STORAGE_KEY, JSON.stringify(preferences));
  } catch (error) {
    console.error('Error tracking user preference:', error);
  }
}

// Get user preferences from localStorage
export function getUserPreferences(): UserPreference[] {
  if (typeof window === 'undefined') return [];

  try {
    return JSON.parse(localStorage.getItem(PREFERENCE_STORAGE_KEY) || '[]');
  } catch (error) {
    console.error('Error getting user preferences:', error);
    return [];
  }
}

// Calculate preference scores for categories
export function calculateCategoryPreferences(): PreferenceScore[] {
  const preferences = getUserPreferences();
  const categoryScores: Record<string, number> = {};

  preferences.forEach((pref) => {
    if (pref.category) {
      // More recent preferences have higher weight
      const timeWeight = Math.max(0.1, 1 - (Date.now() - pref.timestamp) / (30 * 24 * 60 * 60 * 1000)); // 30 days decay
      
      // Different interaction types have different weights
      let interactionWeight = 1;
      switch (pref.interactionType) {
        case 'view': interactionWeight = 1; break;
        case 'click': interactionWeight = 2; break;
        case 'favorite': interactionWeight = 3; break;
        case 'share': interactionWeight = 2.5; break;
      }
      
      const score = timeWeight * interactionWeight;
      categoryScores[pref.category] = (categoryScores[pref.category] || 0) + score;
    }
  });

  // Convert to array and sort by score
  return Object.entries(categoryScores)
    .map(([category, score]) => ({ category, score }))
    .sort((a, b) => b.score - a.score);
}

// Advanced recommendation algorithm
export function getAdvancedRecommendations(allTools: any[], limit = 10): any[] {
  const preferences = getUserPreferences();
  const categoryScores = calculateCategoryPreferences();
  
  // If no preferences, return popular tools
  if (categoryScores.length === 0) {
    return allTools
      .filter(tool => tool.rating >= 4.5 && tool.reviewCount >= 100)
      .sort((a, b) => (b.rating * b.reviewCount) - (a.rating * a.reviewCount))
      .slice(0, limit);
  }

  // Create a map of category scores for quick lookup
  const categoryScoreMap = Object.fromEntries(
    categoryScores.map(({ category, score }) => [category, score])
  );

  // Score tools based on multiple factors
  const scoredTools = allTools.map(tool => {
    // Category preference score
    const categoryScore = categoryScoreMap[tool.category] || 0;
    
    // Quality score based on rating and review count
    const qualityScore = tool.rating ? (tool.rating / 5) * Math.log10(tool.reviewCount || 1) : 0;
    
    // Recency score (newer tools get a boost)
    const recencyScore = tool.addedDate ? 
      Math.max(0, 1 - (Date.now() - new Date(tool.addedDate).getTime()) / (90 * 24 * 60 * 60 * 1000)) : 0;
    
    // Popularity score
    const popularityScore = Math.log10(tool.reviewCount || 1);
    
    // Combined score with weights
    const score = 
      (categoryScore * 0.4) + 
      (qualityScore * 0.3) + 
      (recencyScore * 0.15) + 
      (popularityScore * 0.15) +
      (Math.random() * 0.1); // Add some randomness for discovery
    
    return { ...tool, score };
  });

  // Sort by score and return top tools
  return scoredTools
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

// Get personalized tool recommendations
export function getPersonalizedRecommendations(allTools: any[], limit = 10): any[] {
  return getAdvancedRecommendations(allTools, limit);
}

// Get user's favorite tools
export function getFavoriteTools(allTools: any[]): any[] {
  const preferences = getUserPreferences();
  const favoriteToolIds = new Set(
    preferences
      .filter(pref => pref.interactionType === 'favorite' && pref.toolId)
      .map(pref => pref.toolId)
  );

  return allTools.filter(tool => favoriteToolIds.has(tool.id));
}

// Get recently viewed tools
export function getRecentlyViewedTools(allTools: any[], limit = 10): any[] {
  const preferences = getUserPreferences();
  
  // Get recently viewed tools (excluding favorites to avoid duplication)
  const recentlyViewedIds = preferences
    .filter(pref => pref.toolId && pref.interactionType !== 'favorite')
    .sort((a, b) => b.timestamp - a.timestamp)
    .map(pref => pref.toolId)
    .filter((id, index, arr) => arr.indexOf(id) === index) // Remove duplicates
    .slice(0, limit);

  // Map IDs to tools
  const toolMap = new Map();
  allTools.forEach(tool => {
    if (tool.id) {
      toolMap.set(tool.id, tool);
    }
  });
  
  const result = [];
  for (const id of recentlyViewedIds) {
    const tool = toolMap.get(id);
    if (tool) {
      result.push(tool);
    }
  }
  return result;
}