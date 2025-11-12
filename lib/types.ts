// Common types used across the application

export interface Author {
  name: string;
  slug: string;
  bio?: string;
  avatar?: string;
  website?: string;
  twitter?: string;
  linkedin?: string;
}

export interface Category {
  name: string;
  slug: string;
  description?: string;
  icon?: string;
}

export interface Tag {
  name: string;
  slug: string;
  description?: string;
}

export interface Image {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export interface SeoMetadata {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  openGraph?: {
    type?: 'website' | 'article' | 'book' | 'profile' | 'video.movie';
    title?: string;
    description?: string;
    url?: string;
    siteName?: string;
    images?: Array<{
      url: string;
      width: number;
      height: number;
      alt?: string;
    }>;
    publishedTime?: string;
    modifiedTime?: string;
    authors?: string[];
    section?: string;
    tags?: string[];
  };
  twitter?: {
    card?: 'summary' | 'summary_large_image' | 'app' | 'player';
    site?: string;
    creator?: string;
    title?: string;
    description?: string;
    image?: string;
    imageAlt?: string;
  };
  robots?: {
    index?: boolean;
    follow?: boolean;
    noimageindex?: boolean;
    nosnippet?: boolean;
    notranslate?: boolean;
    noarchive?: boolean;
    maxSnippet?: number;
    maxImagePreview?: 'none' | 'standard' | 'large';
    maxVideoPreview?: number;
  };
  structuredData?: Record<string, any>;
  noindex?: boolean;
  nofollow?: boolean;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SocialShareItem {
  name: string;
  url: string;
  icon: React.ReactNode;
  color: string;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxVisiblePages?: number;
  previousLabel?: string;
  nextLabel?: string;
  className?: string;
}

export interface SeoFriendlyLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
  prefetch?: boolean;
  locale?: string | false;
  scroll?: boolean;
  shallow?: boolean;
  replace?: boolean;
  passHref?: boolean;
  legacyBehavior?: boolean;
}
