"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface SEOEnhancerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  contentType?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export function SEOEnhancer({
  title,
  description,
  keywords,
  contentType,
  publishedTime,
  modifiedTime,
  author,
  section,
  tags
}: SEOEnhancerProps) {
  const pathname = usePathname();

  useEffect(() => {
    // Update meta tags dynamically
    if (title) {
      document.title = title;
      const titleTag = document.querySelector('meta[property="og:title"]');
      if (titleTag) titleTag.setAttribute('content', title);
      const twitterTitle = document.querySelector('meta[name="twitter:title"]');
      if (twitterTitle) twitterTitle.setAttribute('content', title);
    }

    if (description) {
      const descriptionTag = document.querySelector('meta[name="description"]');
      if (descriptionTag) descriptionTag.setAttribute('content', description);
      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) ogDescription.setAttribute('content', description);
      const twitterDescription = document.querySelector('meta[name="twitter:description"]');
      if (twitterDescription) twitterDescription.setAttribute('content', description);
    }

    if (keywords && keywords.length > 0) {
      const keywordsTag = document.querySelector('meta[name="keywords"]');
      if (keywordsTag) keywordsTag.setAttribute('content', keywords.join(', '));
    }

    // Update canonical URL
    const canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) {
      canonicalTag.setAttribute('href', `https://deep-tool.vercel.app${pathname}`);
    }

    // Update Open Graph URL
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', `https://deep-tool.vercel.app${pathname}`);
    }

    // Add structured data for better SEO
    const existingScript = document.getElementById('seo-enhancer-json-ld');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = 'seo-enhancer-json-ld';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": contentType || "WebPage",
      "headline": title,
      "description": description,
      "datePublished": publishedTime,
      "dateModified": modifiedTime,
      "author": author ? {
        "@type": "Person",
        "name": author
      } : undefined,
      "keywords": keywords?.join(', '),
      "articleSection": section,
      "articleTag": tags,
      "publisher": {
        "@type": "Organization",
        "name": "DeepTool",
        "logo": {
          "@type": "ImageObject",
          "url": "https://deep-tool.vercel.app/logo.png"
        }
      }
    });
    document.head.appendChild(script);

    // Add AI-enhanced meta tags
    const aiEnhancedTags = [
      { name: 'ai-enhanced', content: 'true' },
      { name: 'ai-content-quality', content: 'premium' },
      { name: 'ai-content-type', content: contentType || 'directory' },
      { name: 'ai-content-category', content: section || 'tools' }
    ];

    aiEnhancedTags.forEach(tagData => {
      const existingTag = document.querySelector(`meta[name="${tagData.name}"]`);
      if (existingTag) {
        existingTag.setAttribute('content', tagData.content);
      } else {
        const metaTag = document.createElement('meta');
        metaTag.name = tagData.name;
        metaTag.content = tagData.content;
        document.head.appendChild(metaTag);
      }
    });

    return () => {
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [title, description, keywords, contentType, publishedTime, modifiedTime, author, section, tags, pathname]);

  return null;
}