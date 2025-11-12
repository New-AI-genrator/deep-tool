import React from 'react';
import Image from 'next/image';
import { FAQSection } from './FAQSection';
import { ImageOptimizer } from './ImageOptimizer';

interface Author {
  name: string;
  role: string;
  image: string;
}

interface EnhancedBlogPostProps {
  title: string;
  content: string;
  faqs?: Array<{ question: string; answer: string }>;
  coverImage: string;
  publishedAt: string;
  updatedAt?: string;
  author: Author;
  tags?: string[];
  readTime?: string;
  className?: string;
}

export function EnhancedBlogPost({
  title,
  content,
  faqs = [],
  coverImage,
  publishedAt,
  updatedAt,
  author,
  tags = [],
  readTime,
  className = '',
}: EnhancedBlogPostProps) {
  // Generate default FAQs if none provided
  const defaultFaqs = [
    {
      question: `What are the key benefits of ${title.split(' ')[0]}?`,
      answer: `The key benefits include [specific benefit 1], [specific benefit 2], and [specific benefit 3], making it an ideal solution for [target audience].`
    },
    {
      question: `How does ${title.split(' ')[0]} compare to traditional solutions?`,
      answer: `Unlike traditional solutions, ${title.split(' ')[0]} offers [specific advantage] with [specific metric] improvement in [specific area].`
    }
  ];

  const faqItems = faqs.length > 0 ? faqs : defaultFaqs;

  // Generate structured data for the blog post
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": content.substring(0, 160) + (content.length > 160 ? '...' : ''),
    "datePublished": new Date(publishedAt).toISOString(),
    "dateModified": updatedAt ? new Date(updatedAt).toISOString() : new Date(publishedAt).toISOString(),
    "author": {
      "@type": "Person",
      "name": author.name,
      "jobTitle": author.role,
      "image": author.image
    },
    "publisher": {
      "@type": "Organization",
      "name": "DeepTool",
      "logo": {
        "@type": "ImageObject",
        "url": "/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": typeof window !== 'undefined' ? window.location.href : ''
    },
    "keywords": tags.join(', '),
    "wordCount": content.split(' ').length,
    "timeRequired": readTime || 'PT5M',
    "articleSection": tags[0] || 'Technology',
    "articleBody": content
  };

  return (
    <article className={`max-w-4xl mx-auto px-4 py-8 ${className}`}>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{title}</h1>
        
        {/* Author and Date */}
        <div className="flex items-center text-gray-600 dark:text-gray-300 mb-6">
          <div className="relative w-10 h-10 mr-3">
            <Image
              src={author.image}
              alt={author.name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <p className="font-medium text-gray-900 dark:text-white">{author.name}</p>
            <p className="text-sm">
              {new Date(publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
              {updatedAt && (
                <span className="ml-2 text-xs text-gray-500">
                  (Updated: {new Date(updatedAt).toLocaleDateString()})
                </span>
              )}
              {readTime && <span className="mx-2">•</span>}
              {readTime && <span>{readTime} read</span>}
            </p>
          </div>
        </div>

        {/* Cover Image */}
        <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg mb-6">
          <ImageOptimizer
            src={coverImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 dark:bg-blue-900 dark:text-blue-100 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Main Content */}
      <div 
        className="prose prose-lg max-w-none dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      {/* FAQ Section */}
      <FAQSection faqs={faqItems} className="mt-16" />

      {/* Author Bio */}
      <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row items-start sm:items-center">
          <div className="relative w-20 h-20 mr-6 mb-4 sm:mb-0">
            <Image
              src={author.image}
              alt={author.name}
              fill
              className="rounded-full object-cover border-2 border-white dark:border-gray-800 shadow-md"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Written by {author.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">{author.role}</p>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              {author.name} is {author.role.toLowerCase()} at DeepTool, specializing in AI and machine learning technologies.
            </p>
          </div>
        </div>
      </footer>
    </article>
  );
}

export default EnhancedBlogPost;
