import { NextResponse } from 'next/server';
import { generateSitemap } from '@/lib/sitemap';

export async function GET() {
  try {
    // Generate sitemap
    const sitemap = await generateSitemap();
    
    // Return as XML response
    return new NextResponse(sitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate',
      },
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new NextResponse(null, { status: 500 });
  }
}
