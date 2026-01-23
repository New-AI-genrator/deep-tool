'use client';

import { ClockIcon, UserIcon, CalendarIcon, TagIcon } from '@heroicons/react/24/outline';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { format } from 'date-fns';
import { Suspense } from 'react';

// Simple loading components
const LoadingIcon = () => <div className="h-6 w-6 animate-pulse bg-gray-200 rounded" />;
const LoadingBreadcrumbs = () => <div className="h-4 w-full bg-gray-100 rounded" />;
const LoadingTOC = () => <div className="h-64 w-full bg-gray-100 rounded" />;
const LoadingGallery = () => <div className="w-full h-64 bg-gray-100 rounded" />;
const LoadingVideo = () => <div className="aspect-video w-full bg-gray-100 rounded" />;

// Define SocialShare props interface
interface SocialShareProps {
  url: string;
  title: string;
  description: string;
  className?: string;
}

// Dynamic imports with simplified typing
const DynamicSocialShare = dynamic<SocialShareProps>(
  () => import('../../../components/SocialShare').then(mod => ({
    default: (props: SocialShareProps) => {
      const { url, title, description, ...rest } = props;
      return <mod.default url={url} title={title} description={description} {...rest} />;
    }
  })), 
  { 
    ssr: false, 
    loading: LoadingIcon
  }
);

const DynamicBreadcrumbs = dynamic<{
  items: Array<{ label: string; href: string }>;
  className?: string;
  ariaLabel?: string;
}>(
  () => import('../../../components/Breadcrumbs').then(mod => mod.Breadcrumbs) as any, 
  { 
    ssr: false, 
    loading: LoadingBreadcrumbs
  }
);

const DynamicTableOfContents = dynamic<{
  content: string;
  className?: string;
}>(
  () => import('../../../components/TableOfContents').then(mod => mod.default) as any,
  { 
    ssr: false,
    loading: LoadingTOC
  }
);

// Simplified interfaces
interface ImageGalleryProps {
  images: string[] | Array<{
    src: string;
    alt: string;
    caption?: string;
    width?: number;
    height?: number;
  }>;
  className?: string;
}

interface VideoEmbedProps {
  url: string;
  className?: string;
  title?: string;
  controls?: boolean;
}

const DynamicImageGallery = dynamic<ImageGalleryProps>(
  () => import('../../../components/ImageGallery').then(mod => {
    const Component = mod.default;
    return function WrappedImageGallery(props: ImageGalleryProps) {
      const images = (Array.isArray(props.images) 
        ? props.images.every(img => typeof img === 'string')
          ? (props.images as string[]).map((src: string) => ({ 
              src, 
              alt: '', 
              width: 1200, 
              height: 800 
            }))
          : (props.images as Array<{src: string, alt: string, width?: number, height?: number}>).map(img => ({
              ...img,
              width: img.width || 1200,
              height: img.height || 800
            }))
        : []
      ) as Array<{src: string, alt: string, width: number, height: number}>;
      
      return <Component {...props} images={images} />;
    };
  }),
  { 
    ssr: false,
    loading: LoadingGallery
  }
);

const DynamicVideoEmbed = dynamic<VideoEmbedProps>(
  () => import('../../../components/VideoEmbed').then(mod => {
    const Component = mod.default;
    return function WrappedVideoEmbed({ title = 'Video', ...props }: VideoEmbedProps) {
      return <Component {...props} title={title} controls={props.controls ?? true} />;
    };
  }),
  { 
    ssr: false,
    loading: LoadingVideo
  }
);

// Add getReadingTime utility function
const getReadingTime = (content: string): number => {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};

interface Author {
  name: string;
  role?: string;
  image?: string;
  website?: string;
  twitter?: string;
  bio?: string;
  avatar?: string;
}

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  author: Author;
  readTime?: string | number;
  images?: string[] | Array<{
    src: string;
    alt?: string;
    caption?: string;
    width?: number;
    height?: number;
  }>;
  videoUrl?: string;
  metaDescription?: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface BlogPostClientProps {
  post: BlogPost;
  publishedDate: string;
  updatedDate: string | null;
  readTime: string | number;
}

export default function BlogPostClient({ post, publishedDate, updatedDate, readTime }: BlogPostClientProps) {
  // Generate sample FAQs based on the post content and title
  const generateFAQs = (): FAQItem[] => {
    const faqs: FAQItem[] = [];
    
    // Add some general FAQs related to the post topic
    if (post.title.includes('AI') || post.title.includes('ChatGPT')) {
      faqs.push(
        {
          question: "What are the benefits of using AI tools in 2025?",
          answer: "AI tools offer significant benefits including automation of repetitive tasks, enhanced creativity, faster data analysis, and improved communication. They're becoming essential for staying competitive in various industries."
        },
        {
          question: "How do I choose the right AI tool for my needs?",
          answer: "Consider your specific use case, budget, integration with existing tools, learning curve, and support quality. Start with free tiers to experiment before investing in paid plans."
        }
      );
    }
    
    // Add specific FAQ based on title
    faqs.push({
      question: `What makes ${post.title.replace('?', '')} important?`,
      answer: `Based on the content of this article, ${post.title} is important because it addresses key challenges and provides actionable insights that can help readers improve their productivity and achieve better results.`
    });
    
    // Add a general question about implementation
    faqs.push({
      question: "How can I implement the strategies mentioned in this article?",
      answer: "The article provides step-by-step guidance and practical examples. Start by implementing one strategy at a time, measure the results, and gradually incorporate more advanced techniques as you become comfortable."
    });
    
    return faqs;
  };
  
  const faqs = generateFAQs();
  
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <DynamicBreadcrumbs 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: post.title, href: `/blog/${post.slug}` },
          ]}
          ariaLabel="Breadcrumb navigation"
        />
      </div>

      <article className="prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-8">
          <div className="flex items-center mr-6">
            <UserIcon className="h-4 w-4 mr-1" />
            <span>{post.author.name}</span>
          </div>
          <div className="flex items-center mr-6">
            <CalendarIcon className="h-4 w-4 mr-1" />
            <time dateTime={post.publishedAt}>{publishedDate}</time>
          </div>
          <div className="flex items-center">
            <ClockIcon className="h-4 w-4 mr-1" />
            <span>{readTime} min read</span>
          </div>
        </div>

        {post.coverImage && typeof post.coverImage === 'string' && post.coverImage.startsWith('http') ? (
          <div className="mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              width={1200}
              height={630}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        ) : (
          // Fallback for when coverImage is not a valid URL (like emoji)
          <div className="mb-8 rounded-lg overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 h-64 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">{post.title}</h1>
          </div>
        )}

        <div className="prose-lg max-w-none">
          {/* Render content with proper heading structure */}
          <div className="blog-content">
          {(() => {
            // Split content into blocks (paragraphs, headings, lists)
            const blocks = [];
            let currentBlock: string[] = [];
            const lines = post.content.split('\n');
            
            for (let i = 0; i < lines.length; i++) {
              const line = lines[i];
              
              // If line is a heading, flush current block and add heading
              if (line.trim().startsWith('# ')) {
                if (currentBlock.length > 0) {
                  blocks.push({ type: 'paragraph', content: currentBlock.join('\n') });
                  currentBlock = [];
                }
                blocks.push({ type: 'h1', content: line.substring(2) });
              } else if (line.trim().startsWith('## ')) {
                if (currentBlock.length > 0) {
                  blocks.push({ type: 'paragraph', content: currentBlock.join('\n') });
                  currentBlock = [];
                }
                blocks.push({ type: 'h2', content: line.substring(3) });
              } else if (line.trim().startsWith('### ')) {
                if (currentBlock.length > 0) {
                  blocks.push({ type: 'paragraph', content: currentBlock.join('\n') });
                  currentBlock = [];
                }
                blocks.push({ type: 'h3', content: line.substring(4) });
              } else if (line.trim().startsWith('#### ')) {
                if (currentBlock.length > 0) {
                  blocks.push({ type: 'paragraph', content: currentBlock.join('\n') });
                  currentBlock = [];
                }
                blocks.push({ type: 'h4', content: line.substring(5) });
              } else if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
                // Handle list items
                if (currentBlock.length > 0) {
                  blocks.push({ type: 'paragraph', content: currentBlock.join('\n') });
                  currentBlock = [];
                }
                
                // Collect all consecutive list items
                const listItems = [];
                while (i < lines.length && (lines[i].trim().startsWith('- ') || lines[i].trim().startsWith('* '))) {
                  listItems.push(lines[i].substring(2));
                  i++;
                }
                i--; // Adjust for loop increment
                blocks.push({ type: 'ul', content: listItems });
              } else if (/^\d+\.\s/.test(line.trim())) {
                // Handle ordered list items
                if (currentBlock.length > 0) {
                  blocks.push({ type: 'paragraph', content: currentBlock.join('\n') });
                  currentBlock = [];
                }
                
                // Collect all consecutive ordered list items
                const listItems = [];
                while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
                  listItems.push(lines[i].substring(lines[i].indexOf('. ') + 2));
                  i++;
                }
                i--; // Adjust for loop increment
                blocks.push({ type: 'ol', content: listItems });
              } else if (line.trim() === '') {
                // Empty line - flush current block
                if (currentBlock.length > 0) {
                  blocks.push({ type: 'paragraph', content: currentBlock.join('\n') });
                  currentBlock = [];
                }
              } else {
                // Regular content line
                currentBlock.push(line);
              }
            }
            
            // Flush any remaining content
            if (currentBlock.length > 0) {
              blocks.push({ type: 'paragraph', content: currentBlock.join('\n') });
            }
            
            // Render all blocks
            return blocks.map((block, index) => {
              switch (block.type) {
                case 'h1':
                  return <h1 key={index} className="text-3xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">{block.content}</h1>;
                case 'h2':
                  return <h2 key={index} className="text-2xl font-bold mt-7 mb-3 text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">{block.content}</h2>;
                case 'h3':
                  return <h3 key={index} className="text-xl font-bold mt-6 mb-2 text-gray-900 dark:text-white">{block.content}</h3>;
                case 'h4':
                  return <h4 key={index} className="text-lg font-semibold mt-5 mb-2 text-gray-800 dark:text-gray-200">{block.content}</h4>;
                case 'ul':
                  return (
                    <ul key={index} className="list-disc ml-6 mb-4 space-y-2">
                      {(block.content as string[]).map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-700 dark:text-gray-300">{item}</li>
                      ))}
                    </ul>
                  );
                case 'ol':
                  return (
                    <ol key={index} className="list-decimal ml-6 mb-4 space-y-2">
                      {(block.content as string[]).map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-700 dark:text-gray-300">{item}</li>
                      ))}
                    </ol>
                  );
                case 'paragraph':
                  return (
                    <div key={index} className="mb-4">
                      {(block.content as string).split('\n').map((paraLine, paraIndex) => (
                        <p key={paraIndex} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {paraLine}
                        </p>
                      ))}
                    </div>
                  );
                default:
                  return null;
              }
            });
          })()}
          </div>
        </div>

        {/* Safely handle images array */}
        {Array.isArray((post as any).images) && (post as any).images.length > 0 && (
          <div className="mt-12">
            <DynamicImageGallery images={(post as any).images} />
          </div>
        )}

        {/* Safely handle videoUrl */}
        {(post as any).videoUrl && (
          <div className="mt-12">
            <DynamicVideoEmbed url={(post as any).videoUrl} />
          </div>
        )}

        {/* FAQ Section for SEO */}
        <section className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                <details className="p-4">
                  <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer list-none">
                    <div className="flex justify-between items-center">
                      <span>{faq.question}</span>
                      <span className="ml-4 text-lg">+</span>
                    </div>
                  </summary>
                  <div className="mt-2 pt-2 text-gray-700 dark:text-gray-300">
                    {faq.answer}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </section>

        {(post.tags && post.tags.length > 0) && (
          <div className="mt-12 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
              >
                <TagIcon className="h-4 w-4 mr-1" />
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>

      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-medium">Share this article</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Share this article with your friends and colleagues
            </p>
          </div>
          <DynamicSocialShare
            url={`https://deeptool.vercel.app/blog/${post.slug}`}
            title={post.title}
            description={post.excerpt}
          />
        </div>
      </div>
    </div>
  );
}