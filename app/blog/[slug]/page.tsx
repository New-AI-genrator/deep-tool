import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { getBlogPostBySlug, getAllBlogPosts } from '../../../data/blog-posts';
import { generateBlogMetadata } from '../../../lib/seo';

// Add getReadingTime utility function
const getReadingTime = (content: string): number => {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};

interface Props {
  params: {
    slug: string;
  };
}

export const dynamicParams = true; // Enable dynamic params

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await Promise.resolve(params);
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }
  
  const baseUrl = 'https://deep-tool.vercel.app';
  const imageUrl = post.coverImage && typeof post.coverImage === 'string' && post.coverImage.startsWith('http') 
    ? post.coverImage 
    : `${baseUrl}/api/og?title=${encodeURIComponent(post.title)}`;
  
  return {
    title: post.title,
    description: post.metaDescription || post.excerpt,
    keywords: [...post.tags, post.category, 'AI tools', 'productivity', 'technology', 'review', 'tutorial'].join(', '),
    openGraph: {
      title: post.title,
      description: post.metaDescription || post.excerpt,
      url: `${baseUrl}/blog/${post.slug}`,
      siteName: 'DeepTool Blog',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription || post.excerpt,
      images: [imageUrl],
    },
    alternates: {
      canonical: `${baseUrl}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await Promise.resolve(params);
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const readTime = post.readTime || getReadingTime(post.content);
  const publishedDate = format(new Date(post.publishedAt), 'MMMM d, yyyy');
  const updatedDate = post.updatedAt ? format(new Date(post.updatedAt), 'MMMM d, yyyy') : null;

  // Import client component dynamically
  const BlogPostClient = (await import('./BlogPostClient')).default;

  return (
    <BlogPostClient 
      post={post} 
      publishedDate={publishedDate} 
      updatedDate={updatedDate}
      readTime={readTime}
    />
  );
}