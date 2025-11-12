'use client';

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { ClockIcon, UserIcon, CalendarIcon, TagIcon, ShareIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import dynamicImport from 'next/dynamic';
import { Suspense } from 'react';
import { getBlogPostBySlug, getAllBlogPosts, getTrendingPosts } from '../../../data/blog-posts';
import { generateBlogMetadata } from '../../../lib/seo';
import { formatDate } from '../../../lib/utils';
import { generateBlogPostSchema, generateOrganizationSchema } from '../../../lib/schema';

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
const DynamicSocialShare = dynamicImport<SocialShareProps>(
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

const DynamicBreadcrumbs = dynamicImport<{
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

const DynamicTableOfContents = dynamicImport<{
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

const DynamicImageGallery = dynamicImport<ImageGalleryProps>(
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

const DynamicVideoEmbed = dynamicImport<VideoEmbedProps>(
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
}

interface Props {
  params: {
    slug: string;
  };
}

export const dynamicConfig = 'force-static';
export const revalidate = 3600; // Revalidate at most every hour
export const dynamicParams = true; // Enable dynamic params

export default function BlogPostPage({ params }: Props) {
  const { slug } = params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const readTime = post.readTime || getReadingTime(post.content);
  const publishedDate = format(new Date(post.publishedAt), 'MMMM d, yyyy');
  const updatedDate = post.updatedAt ? format(new Date(post.updatedAt), 'MMMM d, yyyy') : null;

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

        {post.coverImage && (
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
        )}

        <div className="prose-lg">
          {post.content}
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