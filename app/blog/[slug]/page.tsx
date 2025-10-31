import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBlogPostBySlug, getAllBlogPosts, getTrendingPosts } from '../../../data/blog-posts';
import { SoftwareApplicationSchema, BreadcrumbSchema } from '../../../components/StructuredData';
import { generateBlogMetadata } from '../../../lib/seo';
import { ClockIcon, UserIcon, CalendarIcon, TagIcon, HeartIcon, EyeIcon, ShareIcon } from '@heroicons/react/24/outline';

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

  return generateBlogMetadata({
    title: post.title,
    description: post.excerpt,
    slug: post.slug,
    publishedAt: post.publishedAt,
    tags: post.tags,
  });
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getTrendingPosts().filter(p => p.slug !== post.slug).slice(0, 3);

  const breadcrumbItems = [
    { name: 'Home', url: 'https://deep-tool.vercel.app' },
    { name: 'Blog', url: 'https://deep-tool.vercel.app/blog' },
    { name: post.title, url: `https://deep-tool.vercel.app/blog/${post.slug}` },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Article Header */}
      <div className="relative bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
          {/* Category Badge */}
          <Link
            href={`/blog?category=${post.category}`}
            className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-6 hover:bg-blue-500/30 transition"
          >
            {post.category.charAt(0).toUpperCase() + post.category.slice(1).replace('-', ' ')}
          </Link>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <div className="text-2xl">{post.author.image}</div>
              <div>
                <div className="text-white font-medium">{post.author.name}</div>
                <div className="text-sm">{post.author.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <CalendarIcon className="w-5 h-5" />
              <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>

            <div className="flex items-center gap-2">
              <ClockIcon className="w-5 h-5" />
              <span>{post.readTime}</span>
            </div>

            {post.views && (
              <div className="flex items-center gap-2">
                <EyeIcon className="w-5 h-5" />
                <span>{post.views.toLocaleString()} views</span>
              </div>
            )}

            {post.likes && (
              <div className="flex items-center gap-2">
                <HeartIcon className="w-5 h-5" />
                <span>{post.likes.toLocaleString()} likes</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <article className="prose prose-invert prose-lg max-w-none">
          <div 
            className="text-gray-200 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: formatMarkdown(post.content) }}
          />
        </article>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex items-center gap-2 mb-4 text-gray-400">
            <TagIcon className="w-5 h-5" />
            <span className="font-medium">Tags:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded-full text-sm text-gray-300 border border-white/10 transition cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Share Buttons */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex items-center gap-4">
            <span className="text-gray-400 font-medium flex items-center gap-2">
              <ShareIcon className="w-5 h-5" />
              Share:
            </span>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=https://deep-tool.vercel.app/blog/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 rounded-lg transition"
            >
              Twitter
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=https://deep-tool.vercel.app/blog/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 rounded-lg transition"
            >
              LinkedIn
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=https://deep-tool.vercel.app/blog/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-700/20 hover:bg-blue-700/30 text-blue-300 rounded-lg transition"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-white mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/blog/${relatedPost.slug}`}
                className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition"
              >
                <div className="text-4xl mb-4">{relatedPost.coverImage}</div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition line-clamp-2">
                  {relatedPost.title}
                </h3>
                <p className="text-sm text-gray-400 line-clamp-2">{relatedPost.excerpt}</p>
                <div className="mt-4 text-sm text-gray-500">{relatedPost.readTime}</div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Back to Blog */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
        >
          ← Back to Blog
        </Link>
      </div>
    </main>
  );
}

// Simple markdown formatter (you can use a library like marked or remark for production)
function formatMarkdown(content: string): string {
  let html = content
    // Headers
    .replace(/^### (.*$)/gim, '<h3 class="text-2xl font-bold mt-8 mb-4 text-white">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-3xl font-bold mt-10 mb-4 text-white">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold mt-12 mb-6 text-white">$1</h1>')
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