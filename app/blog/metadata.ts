import { Metadata } from 'next';

export function getBlogMetadata(): Metadata {
  return {
    title: 'DeepTool Blog | AI Tools, Tutorials & Industry Insights',
    description: 'Discover the latest insights, tutorials, and news about AI tools, productivity, and the future of work. Stay updated with expert analysis and practical guides.',
    openGraph: {
      title: 'DeepTool Blog',
      description: 'AI tools, productivity tips, and industry insights',
      type: 'website',
      locale: 'en_US',
    },
  };
}