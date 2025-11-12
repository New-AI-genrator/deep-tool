'use client';

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { ClockIcon, UserIcon, CalendarIcon, TagIcon, ShareIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import { getBlogPostBySlug, getAllBlogPosts, getTrendingPosts } from '../../../data/blog-posts';
import { generateBlogMetadata } from '../../../lib/seo';
import { formatDate } from '../../../lib/utils';
import { generateBlogPostSchema, generateOrganizationSchema } from '../../../lib/schema';

'use client';

import dynamicImport from 'next/dynamic';
import { Suspense } from 'react';

// Simple loading components
const LoadingIcon = () => <div className="h-6 w-6 animate-pulse bg-gray-200 rounded" />;
const LoadingBreadcrumbs = () => <div className="h-4 w-full bg-gray-100 rounded" />;
const LoadingTOC = () => <div className="h-64 w-full bg-gray-100 rounded" />;
const LoadingGallery = () => <div className="w-full h-64 bg-gray-100 rounded" />;
const LoadingVideo = () => <div className="aspect-video w-full bg-gray-100 rounded" />;

// Dynamic imports with simplified typing
const DynamicSocialShare = dynamicImport<{}>(
  () => import('../../../components/SocialShare').then(mod => mod.default) as any, 
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
  images?: string[];
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

// Rest of your component code...