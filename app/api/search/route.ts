import { NextResponse } from 'next/server';
import { getAllTools, type ToolEntry } from '../../../data/tools';

interface SearchResult {
  id: string;
  name: string;
  tagline: string;
  logoUrl: string;
  category: string;
  subcategory: string;
  pricing: string;
  badges?: string[];
  rating?: number;
  reviewCount?: number;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q') || '';
  const limit = parseInt(searchParams.get('limit') || '10', 10);
  
  try {
    // Get all tools
    const allTools = getAllTools();
    
    // Filter tools based on query
    const filteredTools = allTools.filter((tool: ToolEntry) => {
      if (!query) return true;
      
      const lowerQuery = query.toLowerCase();
      return (
        tool.name.toLowerCase().includes(lowerQuery) ||
        tool.description.toLowerCase().includes(lowerQuery) ||
        tool.category.toLowerCase().includes(lowerQuery) ||
        tool.subcategory.toLowerCase().includes(lowerQuery) ||
        (tool.tags && tool.tags.some(tag => tag.toLowerCase().includes(lowerQuery)))
      );
    });
    
    // Limit results
    const results = filteredTools.slice(0, limit);
    
    // Map to response format
    const formattedResults: SearchResult[] = results.map(tool => ({
      id: tool.slug,
      name: tool.name,
      tagline: tool.tagline,
      logoUrl: tool.logoUrl,
      category: tool.category,
      subcategory: tool.subcategory,
      pricing: tool.pricing,
      badges: tool.badges,
      rating: tool.rating,
      reviewCount: tool.reviewCount
    }));
    
    return NextResponse.json({
      success: true,
      query,
      count: results.length,
      total: filteredTools.length,
      results: formattedResults
    });
  } catch (error) {
    console.error('Search API error:', error);
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