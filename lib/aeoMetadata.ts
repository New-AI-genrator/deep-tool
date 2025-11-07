// AI-Enhanced Optimization (AEO) Metadata Generator
// This module generates SEO metadata optimized by AI analysis of content

interface AEOContentAnalysis {
  primaryKeywords: string[];
  secondaryKeywords: string[];
  semanticKeywords: string[];
  contentCategory: string;
  contentIntent: string;
  targetAudience: string[];
  contentTone: string;
  contentDepth: number; // 1-10 scale
  contentFreshness: string; // 'evergreen' | 'timely' | 'breaking'
  contentAuthority: number; // 1-10 scale
}

interface AEOGeneratedMetadata {
  title: string;
  description: string;
  keywords: string[];
  contentType: string;
  contentCategory: string;
  contentIntent: string;
  targetAudience: string[];
  semanticTags: string[];
  structuredData: any;
}

export class AEOMetadataGenerator {
  // Generate AI-enhanced metadata based on content analysis
  static generateMetadata(
    contentAnalysis: AEOContentAnalysis,
    baseMetadata: any = {}
  ): AEOGeneratedMetadata {
    // Generate title with optimal length and keyword placement
    const title = this.generateTitle(contentAnalysis, baseMetadata.title);
    
    // Generate description with compelling CTA and keywords
    const description = this.generateDescription(contentAnalysis, baseMetadata.description);
    
    // Combine all keywords
    const keywords = this.generateKeywords(contentAnalysis);
    
    // Generate semantic tags for AI understanding
    const semanticTags = this.generateSemanticTags(contentAnalysis);
    
    // Generate structured data for rich snippets
    const structuredData = this.generateStructuredData(contentAnalysis, {
      title,
      description,
      keywords
    });
    
    return {
      title,
      description,
      keywords,
      contentType: contentAnalysis.contentCategory,
      contentCategory: contentAnalysis.contentCategory,
      contentIntent: contentAnalysis.contentIntent,
      targetAudience: contentAnalysis.targetAudience,
      semanticTags,
      structuredData
    };
  }
  
  // Generate optimized title
  private static generateTitle(
    analysis: AEOContentAnalysis,
    baseTitle?: string
  ): string {
    if (baseTitle && baseTitle.length <= 60) {
      return baseTitle;
    }
    
    const primaryKeyword = analysis.primaryKeywords[0] || '';
    const secondaryKeyword = analysis.secondaryKeywords[0] || '';
    
    let title = '';
    
    // Create title based on content intent
    switch (analysis.contentIntent) {
      case 'informational':
        title = `${primaryKeyword} Guide 2025 | ${secondaryKeyword} Insights`;
        break;
      case 'transactional':
        title = `Best ${primaryKeyword} | Compare ${secondaryKeyword} Tools`;
        break;
      case 'navigational':
        title = `${primaryKeyword} | ${secondaryKeyword} Directory`;
        break;
      default:
        title = `${primaryKeyword} | ${secondaryKeyword} | DeepTool`;
    }
    
    // Ensure title is within optimal length
    if (title.length > 60) {
      title = title.substring(0, 57) + '...';
    }
    
    return title;
  }
  
  // Generate compelling description
  private static generateDescription(
    analysis: AEOContentAnalysis,
    baseDescription?: string
  ): string {
    if (baseDescription && baseDescription.length <= 160) {
      return baseDescription;
    }
    
    const primaryKeyword = analysis.primaryKeywords[0] || '';
    const secondaryKeyword = analysis.secondaryKeywords[0] || '';
    const audience = analysis.targetAudience[0] || 'users';
    
    let description = '';
    
    // Create description based on content intent
    switch (analysis.contentIntent) {
      case 'informational':
        description = `Discover comprehensive ${primaryKeyword} insights for ${audience}. Learn about ${secondaryKeyword} with expert analysis and 2025 trends.`;
        break;
      case 'transactional':
        description = `Find the best ${primaryKeyword} tools for ${audience}. Compare ${secondaryKeyword} features, pricing, and reviews to make informed decisions.`;
        break;
      case 'navigational':
        description = `Browse our complete ${primaryKeyword} directory. Explore ${secondaryKeyword} tools organized by category for ${audience}.`;
        break;
      default:
        description = `Explore ${primaryKeyword} and ${secondaryKeyword} tools. The most comprehensive directory for ${audience} with expert reviews.`;
    }
    
    // Ensure description is within optimal length
    if (description.length > 160) {
      description = description.substring(0, 157) + '...';
    }
    
    return description;
  }
  
  // Generate comprehensive keyword list
  private static generateKeywords(analysis: AEOContentAnalysis): string[] {
    // Combine all keywords and remove duplicates
    const allKeywords = [
      ...analysis.primaryKeywords,
      ...analysis.secondaryKeywords,
      ...analysis.semanticKeywords
    ];
    
    // Remove duplicates and limit to 20 keywords
    return [...new Set(allKeywords)].slice(0, 20);
  }
  
  // Generate semantic tags for AI understanding
  private static generateSemanticTags(analysis: AEOContentAnalysis): string[] {
    const tags = [
      `intent:${analysis.contentIntent}`,
      `category:${analysis.contentCategory}`,
      `freshness:${analysis.contentFreshness}`,
      `depth:${analysis.contentDepth}`,
      `authority:${analysis.contentAuthority}`
    ];
    
    // Add audience tags
    analysis.targetAudience.forEach(audience => {
      tags.push(`audience:${audience}`);
    });
    
    // Add tone tag
    tags.push(`tone:${analysis.contentTone}`);
    
    return tags;
  }
  
  // Generate structured data for rich snippets
  private static generateStructuredData(
    analysis: AEOContentAnalysis,
    metadata: { title: string; description: string; keywords: string[] }
  ): any {
    const structuredData: any = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": metadata.title,
      "description": metadata.description,
      "keywords": metadata.keywords.join(', '),
      "articleSection": analysis.contentCategory,
      "articleBody": metadata.description,
      "publisher": {
        "@type": "Organization",
        "name": "DeepTool",
        "logo": {
          "@type": "ImageObject",
          "url": "https://deep-tool.vercel.app/logo.png"
        }
      }
    };
    
    // Add specific structured data based on content category
    switch (analysis.contentCategory) {
      case 'tool':
        structuredData["@type"] = "Product";
        structuredData["category"] = "Software";
        break;
      case 'category':
        structuredData["@type"] = "CollectionPage";
        break;
      case 'blog':
        structuredData["@type"] = "BlogPosting";
        structuredData["datePublished"] = new Date().toISOString();
        break;
    }
    
    return structuredData;
  }
}

// Predefined content analysis templates for common page types
export const AEO_TEMPLATES = {
  toolPage: {
    primaryKeywords: ['AI tool', 'software'],
    secondaryKeywords: ['features', 'pricing', 'reviews'],
    semanticKeywords: ['SaaS', 'productivity', 'business software'],
    contentCategory: 'tool',
    contentIntent: 'transactional',
    targetAudience: ['businesses', 'developers', 'professionals'],
    contentTone: 'informative',
    contentDepth: 8,
    contentFreshness: 'timely',
    contentAuthority: 7
  },
  
  categoryPage: {
    primaryKeywords: ['AI tools', 'software category'],
    secondaryKeywords: ['best tools', 'comparison'],
    semanticKeywords: ['directory', 'reviews', 'recommendations'],
    contentCategory: 'category',
    contentIntent: 'navigational',
    targetAudience: ['businesses', 'developers', 'professionals'],
    contentTone: 'informative',
    contentDepth: 7,
    contentFreshness: 'evergreen',
    contentAuthority: 8
  },
  
  blogPost: {
    primaryKeywords: ['AI trends', 'technology insights'],
    secondaryKeywords: ['2025', 'future'],
    semanticKeywords: ['innovation', 'analysis', 'expert opinion'],
    contentCategory: 'blog',
    contentIntent: 'informational',
    targetAudience: ['tech enthusiasts', 'business leaders'],
    contentTone: 'educational',
    contentDepth: 9,
    contentFreshness: 'timely',
    contentAuthority: 9
  }
};