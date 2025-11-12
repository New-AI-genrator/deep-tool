import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { getBlogPostBySlug, getAllBlogPosts, getTrendingPosts } from '../../../data/blog-posts';
import { generateBlogMetadata } from '../../../lib/seo';
import { ClockIcon, UserIcon, CalendarIcon, TagIcon, ShareIcon, BookOpenIcon } from '@heroicons/react/24/outline';

// Import our new components
import dynamic from 'next/dynamic';

// Import utility functions
import { formatDate } from '../../../lib/utils';
import { generateBlogPostSchema, generateOrganizationSchema } from '../../../lib/schema';

// Helper function to handle both default and named exports
const dynamicImport = (path: string, exportName?: string) => 
  import(path).then(module => {
    if (exportName && module[exportName]) {
      return module[exportName];
    }
    return module.default || module;
  });

// Dynamically import components with no SSR
const SocialShare = dynamic(
  () => dynamicImport('../../../components/SocialShare'),
  { 
    ssr: false, 
    loading: () => <div className="h-6 w-6" /> 
  }
) as React.ComponentType<any>;

const Breadcrumbs = dynamic(
  () => dynamicImport('../../../components/Breadcrumbs', 'Breadcrumbs'),
  { 
    ssr: false, 
    loading: () => <div className="h-4 w-full bg-gray-100 rounded" /> 
  }
) as React.ComponentType<any>;

const TableOfContents = dynamic(
  () => dynamicImport('../../../components/TableOfContents', 'TableOfContents'),
  { 
    ssr: false, 
    loading: () => <div className="h-64 w-full bg-gray-100 rounded" /> 
  }
) as React.ComponentType<any>;

const ImageGallery = dynamic(
  () => dynamicImport('../../../components/ImageGallery', 'ImageGallery'),
  { 
    ssr: false, 
    loading: () => <div className="h-64 w-full bg-gray-100 rounded" /> 
  }
) as React.ComponentType<any>;

const VideoEmbed = dynamic(
  () => dynamicImport('../../../components/VideoEmbed', 'VideoEmbed'),
  { 
    ssr: false, 
    loading: () => <div className="h-64 w-full bg-gray-100 rounded" /> 
  }
) as React.ComponentType<any>;

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
}

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found | DeepTool Blog',
    };
  }

  // Safely extend the post type with optional fields
  const authorDefaults = {
    role: 'Author',
    image: '',
    website: '',
    twitter: '',
    bio: '',
    ...post.author
  };

  const postWithDefaults: BlogPost = {
    ...post,
    updatedAt: post.updatedAt || post.publishedAt,
    author: {
      ...authorDefaults,
      avatar: (post.author as any).avatar || post.author.image || ''
    },
    readTime: Math.ceil(post.content.split(/\s+/).length / 200)
  };

  // Create base metadata
  const baseMetadata = generateBlogMetadata({
    title: postWithDefaults.title,
    description: postWithDefaults.excerpt,
    slug: postWithDefaults.slug,
    publishedAt: postWithDefaults.publishedAt,
    tags: postWithDefaults.tags || [],
  });

  // Add additional metadata properties
  const metadata = {
    ...baseMetadata,
    openGraph: {
      ...baseMetadata.openGraph,
      type: 'article',
      publishedTime: postWithDefaults.publishedAt,
      modifiedTime: postWithDefaults.updatedAt,
      authors: [postWithDefaults.author.name],
      tags: postWithDefaults.tags,
      images: [
        {
          url: postWithDefaults.coverImage,
          width: 1200,
          height: 630,
          alt: postWithDefaults.title,
        },
      ],
    },
    twitter: {
      ...baseMetadata.twitter,
      card: 'summary_large_image',
    },
  };

  // Add additional metadata
  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      ...metadata.twitter,
      card: 'summary_large_image',
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getTrendingPosts().filter(p => p.slug !== post.slug).slice(0, 3);

  // Extract FAQ data from content (simple approach)
  const faqs = extractFAQsFromContent(post.content);
  const readingTime = getReadingTime(post.content);

  // Generate breadcrumb items
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: post.title, href: `/blog/${post.slug}` },
  ];

  // Generate schema.org data
  const blogPostSchema = generateBlogPostSchema({
    title: post.title,
    description: post.excerpt,
    url: `https://deeptool.vercel.app/blog/${post.slug}`,
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt || post.publishedAt,
    author: {
      name: post.author.name,
      url: post.author.website || 'https://deeptool.vercel.app/about',
    },
    image: post.coverImage,
    publisher: {
      name: 'DeepTool',
      logo: 'https://deeptool.vercel.app/logo.png',
    },
  });

  const organizationSchema = generateOrganizationSchema({
    name: 'DeepTool',
    url: 'https://deeptool.vercel.app',
    logo: 'https://deeptool.vercel.app/logo.png',
    description: 'AI-powered tools for developers and content creators',
    sameAs: [
      'https://twitter.com/deeptool',
      'https://github.com/deeptool',
    ],
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs */}
      <Breadcrumbs 
        items={breadcrumbItems} 
        className="mb-6" 
        ariaLabel="Breadcrumb navigation"
      />
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <main className="flex-1">
          <article className="prose dark:prose-invert max-w-none">
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
              
              {/* Author and Metadata */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center">
                  {post.author && (post.author.avatar || post.author.image) && (
                    <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                      <Image
                        src={(post.author.avatar || post.author.image) as string}
                        alt={post.author.name || 'Author'}
                        width={40}
                        height={40}
                        className="object-cover"
                        onError={(e) => {
                          // Fallback to a placeholder image if the image fails to load
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = '/images/avatar-placeholder.png';
                        }}
                      />
                    </div>
                  )}
                  <div>
                    <div className="font-medium">{post.author?.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {formatDate(post.publishedAt)}
                      {post.updatedAt && post.updatedAt !== post.publishedAt && (
                        <span className="ml-2 text-xs">
                          (Updated: {formatDate(post.updatedAt)})
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 gap-4">
                  <div className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-1.5" />
                    {readingTime} min read
                  </div>
                  <div className="flex items-center">
                    <BookOpenIcon className="h-4 w-4 mr-1.5" />
                    {Math.ceil(post.content.split(/\s+/).length / 200)} min read
                  </div>
                </div>
              </div>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <Link 
                      key={tag} 
                      href={`/blog/tag/${tag.toLowerCase()}`} 
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      <TagIcon className="h-3.5 w-3.5 mr-1.5" />
                      {tag}
                    </Link>
                  ))}
                </div>
              )}
              
              {/* Cover Image */}
              {post.coverImage && (
                <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    width={1200}
                    height={630}
                    className="w-full h-auto object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                </div>
              )}
            </header>

            {/* Article Content */}
            <div className="prose dark:prose-invert max-w-none">
              {formatMarkdown(post.content)}
            </div>
            
            {/* Social Sharing */}
            <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h3 className="text-lg font-medium">Share this article</h3>
                <SocialShare 
                  title={post.title}
                  description={post.excerpt}
                  url={`https://deeptool.vercel.app/blog/${post.slug}`}
                  tags={post.tags}
                  via="deeptool"
                  buttonVariant="outline"
                  buttonSize="sm"
                  showLabel={false}
                  className="flex-wrap justify-start sm:justify-end"
                />
              </div>
            </div>
            
            {/* Author Bio */}
            {post?.author && (
              <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  {(post.author.avatar || post.author.image) && (
                    <div className="relative h-16 w-16 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={(post.author.avatar || post.author.image) as string}
                        alt={post.author.name || 'Author'}
                        width={64}
                        height={64}
                        className="object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = '/images/avatar-placeholder.png';
                        }}
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg font-semibold">About {post.author.name}</h3>
                    {post.author.bio && (
                      <p className="mt-2 text-gray-700 dark:text-gray-300">
                        {post.author.bio}
                      </p>
                    )}
                    {(post.author.website || post.author.twitter) && (
                      <div className="mt-3 flex gap-3">
                        {post.author.website && (
                          <a 
                            href={post.author.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                          >
                            Website
                          </a>
                        )}
                        {post.author.twitter && (
                          <a 
                            href={`https://twitter.com/${post.author.twitter}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                          >
                            Twitter
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </article>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost: BlogPost) => (
                  <article key={relatedPost.slug} className="group border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <Link href={`/blog/${relatedPost.slug}`} className="block h-full">
                      {relatedPost.coverImage && (
                        <div className="h-48 relative bg-gray-100 dark:bg-gray-800">
                          <Image
                            src={relatedPost.coverImage}
                            alt={relatedPost.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      )}
                      <div className="p-5">
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-3">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-500">
                          <span>{formatDate(relatedPost.publishedAt)}</span>
                          <span className="mx-2">•</span>
                          <span>{Math.ceil(relatedPost.content.split(/\s+/).length / 200)} min read</span>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          )}
        </main>
        
        {/* Sidebar */}
        <aside className="lg:w-80 flex-shrink-0">
          {/* Table of Contents */}
          <div className="sticky top-24">
            <TableOfContents content={post.content} />
            
            {/* Newsletter Signup */}
            <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
              <h3 className="text-lg font-semibold mb-3">Subscribe to our newsletter</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Get the latest articles and resources sent straight to your inbox.
              </p>
              <form className="space-y-3">
                <div>
                  <label htmlFor="email" className="sr-only">Email address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
            
            {/* Popular Tags */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {['AI', 'Machine Learning', 'Tutorial', 'Productivity', 'Development', 'Design'].map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog/tag/${tag.toLowerCase()}`}
                    className="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      )}
    </div>
  );
}

// Simple markdown formatter (you can use a library like marked or remark for production)
function formatMarkdown(content: string): string {
  let html = content
    // Headers
    .replace(/^### (.*$)/gim, '<h3 class="text-2xl font-bold mt-8 mb-4 text-white">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-3xl font-bold mt-10 mb-4 text-white">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold mt-12 mb-6 text-white">$1</h1>')
    // Images
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<div class="my-6"><img src="$2" alt="$1" class="rounded-lg shadow-lg w-full max-w-2xl mx-auto" loading="lazy" /></div>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    // Lists
    .replace(/^\- (.*$)/gim, '<li class="ml-6 mb-2">$1</li>')
    .replace(/^\d+\. (.*$)/gim, '<li class="ml-6 mb-2 list-decimal">$1</li>')
    // Code blocks
    .replace(/```([\s\S]*?)```/g, '<pre class="bg-black/40 p-4 rounded-lg my-4 overflow-x-auto"><code class="text-green-400">$1</code></pre>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code class="bg-black/40 px-2 py-1 rounded text-green-400">$1</code>')
    // Paragraphs
    .replace(/\n\n/g, '</p><p class="mb-4">')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">$1</a>');

  // Wrap in paragraph tags
  html = '<p class="mb-4">' + html + '</p>';

  // Wrap lists in ul tags
  html = html.replace(/(<li.*<\/li>)/s, '<ul class="list-disc space-y-2 my-4">$1</ul>');

  return html;
}

// Extract FAQ data from content
function extractFAQsFromContent(content: string): Array<{ question: string; answer: string }> {
  const faqs: Array<{ question: string; answer: string }> = [];
  
  // Split content into lines and look for FAQ patterns
  const lines = content.split('\n');
  let inFAQSection = false;
  let currentQuestion = '';
  let currentAnswer = '';
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Check if this is a potential question (h3 header that looks like a question)
    if (line.startsWith('### ')) {
      const potentialQuestion = line.substring(4).trim();
      
      // Check if it looks like a question
      if (potentialQuestion && 
          (potentialQuestion.toLowerCase().includes('what') || 
           potentialQuestion.toLowerCase().includes('how') || 
           potentialQuestion.toLowerCase().includes('why') || 
           potentialQuestion.toLowerCase().includes('when') || 
           potentialQuestion.toLowerCase().includes('where') || 
           potentialQuestion.toLowerCase().includes('which') || 
           potentialQuestion.toLowerCase().includes('can') ||
           potentialQuestion.toLowerCase().includes('should') ||
           potentialQuestion.toLowerCase().includes('do'))) {
        
        // Save previous FAQ if we have one
        if (currentQuestion && currentAnswer) {
          faqs.push({
            question: currentQuestion,
            answer: currentAnswer.trim().replace(/\s+/g, ' ')
          });
        }
        
        // Start new FAQ
        currentQuestion = potentialQuestion;
        currentAnswer = '';
        inFAQSection = true;
        continue;
      }
    }
    
    // Collect answer content
    if (inFAQSection && line && !line.startsWith('#')) {
      currentAnswer += line + ' ';
    }
    
    // End FAQ section when we hit another header
    if (inFAQSection && line.startsWith('#')) {
      if (currentQuestion && currentAnswer) {
        faqs.push({
          question: currentQuestion,
          answer: currentAnswer.trim().replace(/\s+/g, ' ')
        });
      }
      inFAQSection = false;
      currentQuestion = '';
      currentAnswer = '';
    }
  }
  
  // Don't forget the last FAQ
  if (currentQuestion && currentAnswer) {
    faqs.push({
      question: currentQuestion,
      answer: currentAnswer.trim().replace(/\s+/g, ' ')
    });
  }
  
  return faqs;
}