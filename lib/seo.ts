import { Metadata } from 'next';

const baseUrl = 'https://deep-tool.vercel.app';

export function generateToolMetadata({
  name,
  description,
  category,
  subcategory,
  slug,
  rating,
  reviewCount,
}: {
  name: string;
  description: string;
  category: string;
  subcategory: string;
  slug: string;
  rating?: number;
  reviewCount?: number;
}): Metadata {
  const title = `${name} - ${subcategory} Tool | DeepTool`;
  const metaDescription = description.length > 160 
    ? description.substring(0, 157) + '...' 
    : description;
  
  const url = `${baseUrl}/tools/${slug}`;
  const imageUrl = `${baseUrl}/og-images/${slug}.png`;

  return {
    title,
    description: metaDescription,
    keywords: `${name}, ${subcategory}, ${category}, software tool, ${name} review, ${name} alternative, best ${subcategory} tool`,
    authors: [{ name: 'DeepTool' }],
    creator: 'DeepTool',
    publisher: 'DeepTool',
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: metaDescription,
      url,
      siteName: 'DeepTool',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${name} - ${subcategory} Tool`,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: metaDescription,
      images: [imageUrl],
      creator: '@deeptool',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      'article:published_time': new Date().toISOString(),
      'article:modified_time': new Date().toISOString(),
      'article:section': category,
      'article:tag': `${subcategory}, ${category}, software tools`,
    },
  };
}

export function generateCategoryMetadata({
  name,
  description,
  slug,
  toolCount,
  subcategoryCount,
}: {
  name: string;
  description: string;
  slug: string;
  toolCount: number;
  subcategoryCount: number;
}): Metadata {
  const title = `${name} Tools & Software | ${toolCount}+ Options | DeepTool`;
  const metaDescription = `Discover ${toolCount}+ ${name} tools across ${subcategoryCount} subcategories. Compare features, pricing, and reviews. Find the best ${name} software for your needs.`;
  
  const url = `${baseUrl}/categories/${slug}`;

  return {
    title,
    description: metaDescription,
    keywords: `${name}, ${name} tools, ${name} software, best ${name} tools, ${name} comparison, ${name} reviews`,
    authors: [{ name: 'DeepTool' }],
    creator: 'DeepTool',
    publisher: 'DeepTool',
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: metaDescription,
      url,
      siteName: 'DeepTool',
      images: [
        {
          url: `${baseUrl}/og-images/categories/${slug}.png`,
          width: 1200,
          height: 630,
          alt: `${name} Tools Directory`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: metaDescription,
      images: [`${baseUrl}/og-images/categories/${slug}.png`],
      creator: '@deeptool',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function generateSubcategoryMetadata({
  name,
  categoryName,
  description,
  categorySlug,
  subcategorySlug,
  toolCount,
}: {
  name: string;
  categoryName: string;
  description: string;
  categorySlug: string;
  subcategorySlug: string;
  toolCount: number;
}): Metadata {
  const title = `Best ${name} Tools & Software | ${toolCount}+ Options | DeepTool`;
  const metaDescription = `Compare ${toolCount}+ ${name} tools. Read reviews, check pricing, and find the perfect ${name} solution. Part of our ${categoryName} directory.`;
  
  const url = `${baseUrl}/categories/${categorySlug}/${subcategorySlug}`;

  return {
    title,
    description: metaDescription,
    keywords: `${name}, ${name} tools, ${name} software, best ${name}, ${categoryName}, ${name} comparison, ${name} reviews, top ${name} tools`,
    authors: [{ name: 'DeepTool' }],
    creator: 'DeepTool',
    publisher: 'DeepTool',
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: metaDescription,
      url,
      siteName: 'DeepTool',
      images: [
        {
          url: `${baseUrl}/og-images/subcategories/${subcategorySlug}.png`,
          width: 1200,
          height: 630,
          alt: `${name} Tools Directory`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: metaDescription,
      images: [`${baseUrl}/og-images/subcategories/${subcategorySlug}.png`],
      creator: '@deeptool',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
