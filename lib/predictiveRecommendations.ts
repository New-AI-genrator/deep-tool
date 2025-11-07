// Predictive Recommendation Engine
interface UserBehavior {
  categoryViews: Record<string, number>;
  toolInteractions: Record<string, number>;
  searchPatterns: string[];
  timeOnSite: number;
  sessionCount: number;
  lastVisit: number;
}

interface PredictiveScore {
  toolId: string;
  score: number;
  reasons: string[];
}

// Predictive recommendation algorithm
export function getPredictiveRecommendations(
  allTools: any[], 
  userBehavior: UserBehavior,
  limit: number = 10
): PredictiveScore[] {
  // Calculate scores for each tool based on user behavior
  const toolScores: PredictiveScore[] = allTools.map(tool => {
    const score = calculatePredictiveScore(tool, userBehavior);
    return {
      toolId: tool.slug,
      score: score.total,
      reasons: score.reasons
    };
  });
  
  // Sort by score and return top recommendations
  return toolScores
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

function calculatePredictiveScore(tool: any, userBehavior: UserBehavior): { total: number; reasons: string[] } {
  let total = 0;
  const reasons: string[] = [];
  
  // Category affinity score (0-40 points)
  if (userBehavior.categoryViews[tool.category]) {
    const categoryScore = Math.min(40, userBehavior.categoryViews[tool.category] * 5);
    total += categoryScore;
    if (categoryScore > 10) {
      reasons.push(`High interest in ${tool.category} tools`);
    }
  }
  
  // Tool interaction score (0-30 points)
  if (userBehavior.toolInteractions[tool.slug]) {
    const interactionScore = Math.min(30, userBehavior.toolInteractions[tool.slug] * 10);
    total += interactionScore;
    if (interactionScore > 15) {
      reasons.push(`Previously interacted with similar tools`);
    }
  }
  
  // Search pattern relevance (0-20 points)
  const searchRelevance = userBehavior.searchPatterns.filter(pattern => 
    tool.name.toLowerCase().includes(pattern) || 
    tool.tagline.toLowerCase().includes(pattern) ||
    tool.description?.toLowerCase().includes(pattern) ||
    tool.features?.some((f: string) => f.toLowerCase().includes(pattern))
  ).length * 5;
  
  total += Math.min(20, searchRelevance);
  if (searchRelevance > 5) {
    reasons.push(`Matches your recent search interests`);
  }
  
  // Quality score based on ratings and reviews (0-10 points)
  const qualityScore = tool.rating ? (tool.rating / 5) * 10 : 0;
  total += qualityScore;
  if (qualityScore > 7) {
    reasons.push(`Highly rated by users`);
  }
  
  // Recency boost for new tools (0-5 points)
  const oneWeekAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
  if (tool.addedDate && new Date(tool.addedDate).getTime() > oneWeekAgo) {
    total += 5;
    reasons.push(`Recently added tool`);
  }
  
  // Trending boost (0-5 points)
  if (tool.badges?.includes('trending')) {
    total += 5;
    reasons.push(`Currently trending`);
  }
  
  return { total, reasons };
}

// Generate personalized explanation for recommendations
export function generateRecommendationExplanation(scores: PredictiveScore[], allTools: any[]): string {
  if (scores.length === 0) return "Based on your activity, I've found some tools that might interest you.";
  
  const topTool = allTools.find(t => t.slug === scores[0].toolId);
  if (!topTool) return "Based on your activity, I've found some tools that might interest you.";
  
  // Get top reasons for the recommendation
  const reasons = scores[0].reasons.slice(0, 2);
  
  if (reasons.length === 0) {
    return `I recommend ${topTool.name} based on your activity patterns.`;
  }
  
  if (reasons.length === 1) {
    return `I recommend ${topTool.name} because ${reasons[0].toLowerCase()}.`;
  }
  
  return `I recommend ${topTool.name} because ${reasons[0].toLowerCase()} and ${reasons[1].toLowerCase()}.`;
}

// Predict next likely category of interest
export function predictNextCategory(userBehavior: UserBehavior, allCategories: string[]): string | null {
  // Find categories with highest view counts
  const sortedCategories = Object.entries(userBehavior.categoryViews)
    .sort(([,a], [,b]) => b - a)
    .map(([category]) => category);
  
  // Return the most viewed category that isn't already saturated
  for (const category of sortedCategories) {
    if (userBehavior.categoryViews[category] < 5) { // Not oversaturated
      return category;
    }
  }
  
  // If all categories are saturated, suggest something new
  const unexploredCategories = allCategories.filter(cat => !userBehavior.categoryViews[cat]);
  if (unexploredCategories.length > 0) {
    return unexploredCategories[Math.floor(Math.random() * unexploredCategories.length)];
  }
  
  return null;
}