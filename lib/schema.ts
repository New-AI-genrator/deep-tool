export function generateBlogPostSchema(post: {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  updatedAt?: string;
  author: {
    name: string;
    url: string;
  };
  image: string;
  publisher: {
    name: string;
    logo: string;
  };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "url": post.url,
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt || post.publishedAt,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "url": post.author.url
    },
    "publisher": {
      "@type": "Organization",
      "name": post.publisher.name,
      "logo": {
        "@type": "ImageObject",
        "url": post.publisher.logo
      }
    },
    "image": post.image,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": post.url
    }
  };
}

export function generateWebPageSchema(page: {
  name: string;
  description: string;
  url: string;
  publisher: {
    name: string;
    logo: string;
  };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": page.name,
    "description": page.description,
    "url": page.url,
    "publisher": {
      "@type": "Organization",
      "name": page.publisher.name,
      "logo": {
        "@type": "ImageObject",
        "url": page.publisher.logo
      }
    }
  };
}

export function generateOrganizationSchema(org: {
  name: string;
  url: string;
  logo: string;
  description?: string;
  sameAs?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": org.name,
    "url": org.url,
    "logo": org.logo,
    "description": org.description || "",
    "sameAs": org.sameAs || []
  };
}
