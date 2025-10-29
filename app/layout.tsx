import './globals.css';
import type { ReactNode } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PageTransition } from '../components/PageTransition';
import { SearchOverlay } from '../components/SearchOverlay';
import { OrganizationSchema, WebSiteSchema } from '../components/StructuredData';

export const metadata = {
  other: {
    'google-adsense-account': 'ca-pub-2894915343289598',
  },
	title: 'DeepTool - World\'s Largest Tools Directory | 10,000+ Software & Services',
	description: 'Discover 10,000+ premium tools across 264 categories and 1,056 subcategories. Compare software, read reviews, and find the perfect tools for your business. The most comprehensive directory of SaaS, AI, crypto, gaming, and productivity tools.',
	keywords: 'tools directory, software comparison, saas tools, business software, productivity tools, ai tools, crypto tools, gaming tools, developer tools, marketing tools, design tools',
	authors: [{ name: 'DeepTool' }],
	creator: 'DeepTool',
	publisher: 'DeepTool',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL('https://deep-tool.vercel.app'),
	alternates: {
		canonical: '/',
	},
	openGraph: {
		title: 'DeepTool - World\'s Largest Tools Directory',
		description: 'Discover 10,000+ premium tools across 264 categories and 1,056 subcategories',
		url: 'https://deep-tool.vercel.app',
		siteName: 'DeepTool',
		images: [
			{
				url: '/og-image.png',
				width: 1200,
				height: 630,
				alt: 'DeepTool - Tools Directory',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'DeepTool - World\'s Largest Tools Directory',
		description: 'Discover 10,000+ premium tools across 264 categories',
		images: ['/twitter-image.png'],
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
	verification: {
		google: 'google48dadb8c7f2f2d13',
	},
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<head>
				<OrganizationSchema />
				<WebSiteSchema />
			</head>
			<body className="min-h-screen bg-aether-obsidian antialiased">
				<SearchOverlay />
				<Header />
				<div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
					<PageTransition>
						{children}
					</PageTransition>
				</div>
				<Footer />
			</body>
		</html>
	);
}
