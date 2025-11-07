import { NextResponse } from 'next/server';
import { getAllTools } from '../../../data/tools';
import { getAdvancedRecommendations } from '../../../lib/userPreferences';

export async function GET(request: Request) {
  try {
    const allTools = getAllTools();
    const recommendations = getAdvancedRecommendations(allTools, 12);
    
    return NextResponse.json({
      success: true,
      recommendations: recommendations,
      count: recommendations.length
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch recommendations'
    }, { status: 500 });
  }
}
