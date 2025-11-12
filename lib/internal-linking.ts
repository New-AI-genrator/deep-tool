import { BlogPost, getAllBlogPosts } from '../data/blog-posts';
import { ToolEntry as Tool, toolsBySubcategory } from '../data/tools';

export interface RelatedContent {
  title: string;
  slug: string;
  description: string;
  type: 'blog' | 'tool';
  score: number;
  image?: string;
}

export async function findRelatedContent(
  content: string,
  currentSlug: string,
  limit: number = 3
): Promise<RelatedContent[]> {
  try {
    const allPosts = await getAllBlogPosts();
    // Flatten the tools from all subcategories
    const allTools = Object.values(toolsBySubcategory).flat();
    
    // Combine all content for analysis
    const allContent = [
      ...allPosts.map((p: BlogPost) => ({
        ...p,
        type: 'blog' as const,
        fullText: `${p.title} ${p.excerpt} ${p.tags?.join(' ') || ''}`.toLowerCase(),
      })),
      ...allTools.map((t: Tool) => ({
        ...t,
        type: 'tool' as const,
        fullText: `${t.name} ${t.description} ${t.category} ${t.tags?.join(' ') || ''}`.toLowerCase(),
      })),
    ];

    // Filter out the current item
    const otherContent = allContent.filter(item => 
      !(item.slug === currentSlug)
    );

    // Calculate TF-IDF scores
    const scores = otherContent.map(item => {
      let score = 0;
      
      // Simple term frequency-inverse document frequency (TF-IDF) calculation
      const terms = content.toLowerCase().split(/\s+/);
      const uniqueTerms = [...new Set(terms)];
      
      uniqueTerms.forEach(term => {
        if (term.length < 3) return; // Skip short terms
        
        // Term frequency in the document
        const tf = (item.fullText.match(new RegExp(term, 'gi')) || []).length;
        
        // Document frequency
        const df = otherContent.filter(
          doc => doc.fullText.includes(term)
        ).length;
        
        // Inverse document frequency
        const idf = Math.log(otherContent.length / (df + 1)) + 1;
        
        score += tf * idf;
      });
      
      // Boost score if the content shares tags or categories
      if ('tags' in item && Array.isArray(item.tags)) {
        score += item.tags.length * 0.5;
      }
      
      // Handle both blog and tool types
      if (item.type === 'blog') {
        return {
          title: item.title,
          slug: item.slug,
          description: item.excerpt,
          type: item.type,
          image: 'coverImage' in item ? item.coverImage : undefined,
          score,
        };
      } else {
        return {
          title: item.name,
          slug: item.slug,
          description: item.tagline,
          type: item.type,
          image: 'logoUrl' in item ? item.logoUrl : undefined,
          score,
        };
      }
    });

    // Sort by score and return top results
    return scores
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .filter(item => item.score > 0);
      
  } catch (error) {
    console.error('Error finding related content:', error);
    return [];
  }
}

// Helper function to extract text from HTML content
export function extractTextFromHtml(html: string): string {
  if (typeof document !== 'undefined') {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  }
  // Fallback for server-side rendering
  return html.replace(/<[^>]*>?/gm, '');
}

// Helper to generate internal links in content
export function processInternalLinks(content: string, baseUrl: string = ''): string {
  // This is a simplified example - you'd want to expand this based on your content structure
  return content.replace(
    /\[([^\]]+)\]\(\/blog\/([^)]+)\)/g, 
    `[$1](${baseUrl}/blog/$2)`
  );
}

// Helper to get the reading time of content
export function getReadingTime(content: string, wordsPerMinute = 200): number {
  const text = extractTextFromHtml(content);
  const wordCount = text.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}
