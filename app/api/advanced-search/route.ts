import { NextResponse } from 'next/server';
import { getAllTools, ToolBadge } from '../../../data/tools';

// Helper function to calculate relevance score
function calculateRelevanceScore(tool: any, query: string, filters: any): number {
  let score = 0;
  const lowerQuery = query.toLowerCase();
  
  // Exact name match (highest weight)
  if (tool.name.toLowerCase() === lowerQuery) {
    score += 100;
  } else if (tool.name.toLowerCase().includes(lowerQuery)) {
    score += 50;
  }
  
  // Tagline match
  if (tool.tagline.toLowerCase().includes(lowerQuery)) {
    score += 30;
  }
  
  // Description match
  if (tool.description.toLowerCase().includes(lowerQuery)) {
    score += 20;
  }
  
  // Category/subcategory match
  if (tool.category.toLowerCase().includes(lowerQuery) || tool.subcategory.toLowerCase().includes(lowerQuery)) {
    score += 15;
  }
  
  // Tags match
  if (tool.tags && tool.tags.some((tag: string) => tag.toLowerCase().includes(lowerQuery))) {
    score += 10;
  }
  
  // Features match
  if (tool.features && tool.features.some((feature: string) => feature.toLowerCase().includes(lowerQuery))) {
    score += 5;
  }
  
  // Use cases match
  if (tool.useCases && tool.useCases.some((useCase: string) => useCase.toLowerCase().includes(lowerQuery))) {
    score += 5;
  }
  
  // Apply filters bonus
  if (filters.pricing && tool.pricing === filters.pricing) {
    score += 5;
  }
  
  if (filters.badges && tool.badges && tool.badges.some((badge: string) => filters.badges.includes(badge))) {
    score += 10;
  }
  
  // Rating bonus
  if (filters.minRating && tool.rating && tool.rating >= filters.minRating) {
    score += Math.round(tool.rating * 2);
  }
  
  return score;
}

// Helper function for fuzzy matching
function fuzzyMatch(str: string, query: string): boolean {
  const strLower = str.toLowerCase();
  const queryLower = query.toLowerCase();
  
  // Direct inclusion
  if (strLower.includes(queryLower)) return true;
  
  // Split query into words and check if all words are present
  const queryWords = queryLower.split(/\s+/);
  return queryWords.every(word => strLower.includes(word));
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q') || '';
  const limit = parseInt(searchParams.get('limit') || '24');
  const offset = parseInt(searchParams.get('offset') || '0');
  const sortBy = searchParams.get('sortBy') || 'relevance';
  const pricing = searchParams.get('pricing') || '';
  const minRating = searchParams.get('minRating') ? parseFloat(searchParams.get('minRating') || '0') : 0;
  const badges = searchParams.get('badges') ? searchParams.get('badges')?.split(',') : [];
  const category = searchParams.get('category') || '';
  const subcategory = searchParams.get('subcategory') || '';
  
  try {
    // Get all tools
    const allTools = getAllTools();
    
    // Apply filters
    const filteredTools = allTools.filter(tool => {
      // Query filter
      if (query) {
        const matchesQuery = 
          fuzzyMatch(tool.name, query) ||
          fuzzyMatch(tool.tagline, query) ||
          fuzzyMatch(tool.description, query) ||
          fuzzyMatch(tool.category, query) ||
          fuzzyMatch(tool.subcategory, query) ||
          (tool.tags && tool.tags.some(tag => fuzzyMatch(tag, query))) ||
          (tool.features && tool.features.some(feature => fuzzyMatch(feature, query))) ||
          (tool.useCases && tool.useCases.some(useCase => fuzzyMatch(useCase, query)));
          
        if (!matchesQuery) return false;
      }
      
      // Pricing filter
      if (pricing && tool.pricing !== pricing) {
        return false;
      }
      
      // Rating filter
      if (minRating && (!tool.rating || tool.rating < minRating)) {
        return false;
      }
      
      // Badges filter
      if (badges && badges.length > 0 && (!tool.badges || !badges.some(badge => tool.badges?.includes(badge as ToolBadge)))) {
        return false;
      }
      
      // Category filter
      if (category && tool.categorySlug !== category) {
        return false;
      }
      
      // Subcategory filter
      if (subcategory && tool.subcategorySlug !== subcategory) {
        return false;
      }
      
      return true;
    });
    
    // Calculate relevance scores for sorting
    const toolsWithScores = filteredTools.map(tool => ({
      ...tool,
      relevanceScore: calculateRelevanceScore(tool, query, { pricing, minRating, badges })
    }));
    
    // Sort tools
    const sortedTools = toolsWithScores.sort((a, b) => {
      switch (sortBy) {
        case 'relevance':
          return b.relevanceScore - a.relevanceScore;
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'reviews':
          return (b.reviewCount || 0) - (a.reviewCount || 0);
        case 'name':
          return a.name.localeCompare(b.name);
        case 'newest':
          // Since we don't have a date field, we'll sort by review count as a proxy for popularity/newness
          return (b.reviewCount || 0) - (a.reviewCount || 0);
        default:
          return b.relevanceScore - a.relevanceScore;
      }
    });
    
    // Apply pagination
    const paginatedTools = sortedTools.slice(offset, offset + limit);
    
    return NextResponse.json({
      success: true,
      query,
      count: paginatedTools.length,
      total: filteredTools.length,
      offset,
      limit,
      sortBy,
      filters: {
        pricing: pricing || null,
        minRating: minRating || null,
        badges: (badges && badges.length > 0) ? badges : null,
        category: category || null,
        subcategory: subcategory || null
      },
      results: paginatedTools.map(tool => ({
        id: tool.slug,
        name: tool.name,
        tagline: tool.tagline,
        logoUrl: tool.logoUrl,
        category: tool.category,
        categorySlug: tool.categorySlug,
        subcategory: tool.subcategory,
        subcategorySlug: tool.subcategorySlug,
        pricing: tool.pricing,
        badges: tool.badges,
        rating: tool.rating,
        reviewCount: tool.reviewCount,
        relevanceScore: tool.relevanceScore
      }))
    });
  } catch (error) {
    console.error('Advanced Search API error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Search failed',
        query,
        results: []
      },
      { status: 500 }
    );
  }
}