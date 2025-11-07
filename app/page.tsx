import Link from 'next/link';
import { SectionHeader } from '../components/SectionHeader';
import { HeroSanctuary } from '../components/home/HeroSanctuary';
import { NexusGateway } from '../components/home/NexusGateway';
import { CathedralOfCategories } from '../components/home/CathedralOfCategories';
import { FeaturedPantheon } from '../components/home/FeaturedPantheon';
import { DailyIntelligence } from '../components/home/DailyIntelligence';
import { ExpertSanctum } from '../components/home/ExpertSanctum';
import { GlobalAIMap } from '../components/home/GlobalAIMap';
import { CollectionPageSchema, OrganizationSchema, WebSiteSchema } from '../components/StructuredData';
import { getAllTools } from '../data/tools';
import type { Metadata } from 'next';
import RealTimeRecommendations from '../components/RealTimeRecommendations';
import RecentlyViewed from '../components/RecentlyViewed';
import HomepageTracker from '../components/HomepageTracker';

export const metadata: Metadata = {
  title: 'DeepTool - World\'s Largest AI & Software Tools Directory | 10,000+ Tools',
  description: 'Discover 10,000+ premium AI tools, SaaS software, and productivity applications across 264 categories. Compare features, pricing, and reviews to find the perfect tools for your needs.',
  keywords: 'AI tools, software directory, SaaS tools, productivity tools, AI software, tool comparison, best tools 2025',
  authors: [{ name: 'DeepTool' }],
  creator: 'DeepTool',
  publisher: 'DeepTool',
  metadataBase: new URL('https://deep-tool.vercel.app'),
  alternates: {
    canonical: 'https://deep-tool.vercel.app',
  },
  openGraph: {
    title: 'DeepTool - World\'s Largest AI & Software Tools Directory',
    description: 'Discover 10,000+ premium AI tools, SaaS software, and productivity applications across 264 categories.',
    url: 'https://deep-tool.vercel.app',
    siteName: 'DeepTool',
    images: [
      {
        url: 'https://deep-tool.vercel.app/og-images/homepage.png',
        width: 1200,
        height: 630,
        alt: 'DeepTool - World\'s Largest AI & Software Tools Directory',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeepTool - World\'s Largest AI & Software Tools Directory',
    description: 'Discover 10,000+ premium AI tools, SaaS software, and productivity applications.',
    images: ['https://deep-tool.vercel.app/og-images/homepage.png'],
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

export default async function HomePage() {
	const allTools = getAllTools();
	
	return (
		<>
      <OrganizationSchema />
      <WebSiteSchema />
      <CollectionPageSchema
        name="DeepTool - World's Largest Tools Directory"
        description="Discover 10,000+ premium tools across 264 categories. The most comprehensive directory of SaaS, AI, and productivity tools."
        url="https://deep-tool.vercel.app"
        numberOfItems={allTools.length}
      />
			<main>
				<HomepageTracker />
				<HeroSanctuary />
				<NexusGateway />
				<CathedralOfCategories />
				<RealTimeRecommendations />
				<RecentlyViewed />
				<FeaturedPantheon />
				<DailyIntelligence />
				<ExpertSanctum />
				<GlobalAIMap />
			</main>
		</>
	);
}