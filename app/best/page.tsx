"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { SectionHeader } from '../../components/SectionHeader';
import { 
	TrophyIcon, 
	StarIcon, 
	FireIcon, 
	SparklesIcon,
	ChartBarIcon,
	UserGroupIcon,
	BoltIcon,
	CheckBadgeIcon
} from '@heroicons/react/24/solid';

interface BestTool {
	rank: number;
	name: string;
	slug: string;
	tagline: string;
	description: string;
	category: string;
	logo: string;
	rating: number;
	reviews: number;
	users: string;
	pricing: string;
	awards: string[];
	features: string[];
	useCases: string[];
	whyBest: string;
	trending?: boolean;
	verified?: boolean;
	enterprise?: boolean;
}

export default function BestToolsPage() {
	const [selectedCategory, setSelectedCategory] = useState('all');

	const categories = [
		{ id: 'all', name: 'All Categories', icon: '🌟' },
		{ id: 'ai-generation', name: 'AI Generation', icon: '🎨' },
		{ id: 'productivity', name: 'Productivity', icon: '⚡' },
		{ id: 'development', name: 'Development', icon: '💻' },
		{ id: 'design', name: 'Design', icon: '✨' },
		{ id: 'business', name: 'Business', icon: '📊' }
	];

	const bestTools: BestTool[] = [
		{
			rank: 1,
			name: 'ChatGPT',
			slug: 'chatgpt',
			tagline: 'The world\'s most advanced AI assistant',
			description: 'ChatGPT by OpenAI is revolutionizing how we interact with AI. From writing code to creative content, it\'s the most versatile AI tool available.',
			category: 'ai-generation',
			logo: '🤖',
			rating: 4.9,
			reviews: 2500000,
			users: '100M+',
			pricing: 'Freemium',
			awards: ['Best AI Tool 2024', 'Editor\'s Choice', 'Most Innovative'],
			features: ['Natural conversations', 'Code generation', 'Content writing', 'Data analysis', 'Image understanding'],
			useCases: ['Content creation', 'Programming', 'Research', 'Learning', 'Business automation'],
			whyBest: 'Unmatched versatility, constant improvements, and the largest user base make ChatGPT the gold standard for AI assistants.',
			trending: true,
			verified: true,
			enterprise: true
		},
		{
			rank: 2,
			name: 'Midjourney',
			slug: 'midjourney',
			tagline: 'Create stunning AI art in seconds',
			description: 'Midjourney is the leading AI image generation tool, known for its artistic quality and creative capabilities.',
			category: 'ai-generation',
			logo: '🎨',
			rating: 4.8,
			reviews: 850000,
			users: '15M+',
			pricing: 'Paid',
			awards: ['Best Image AI 2024', 'Creative Excellence', 'Top Design Tool'],
			features: ['Photorealistic images', 'Artistic styles', 'High resolution', 'Style consistency', 'Commercial use'],
			useCases: ['Digital art', 'Marketing visuals', 'Concept design', 'Social media', 'NFT creation'],
			whyBest: 'Midjourney produces the highest quality AI-generated images with unparalleled artistic control and consistency.',
			trending: true,
			verified: true
		},
		{
			rank: 3,
			name: 'Notion',
			slug: 'notion',
			tagline: 'All-in-one workspace for teams',
			description: 'Notion combines notes, docs, wikis, and project management in one powerful platform.',
			category: 'productivity',
			logo: '📝',
			rating: 4.7,
			reviews: 1200000,
			users: '30M+',
			pricing: 'Freemium',
			awards: ['Best Productivity Tool', 'Team Favorite', 'Innovation Award'],
			features: ['Flexible databases', 'Team collaboration', 'Templates', 'AI assistant', 'Integrations'],
			useCases: ['Project management', 'Documentation', 'Knowledge base', 'Personal notes', 'Team wikis'],
			whyBest: 'Notion\'s flexibility and all-in-one approach make it the ultimate workspace for individuals and teams.',
			verified: true,
			enterprise: true
		},
		{
			rank: 4,
			name: 'GitHub Copilot',
			slug: 'github-copilot',
			tagline: 'Your AI pair programmer',
			description: 'GitHub Copilot uses AI to suggest code and entire functions in real-time, dramatically accelerating development.',
			category: 'development',
			logo: '💻',
			rating: 4.6,
			reviews: 450000,
			users: '5M+',
			pricing: 'Paid',
			awards: ['Best Developer Tool', 'Innovation in AI', 'Developer\'s Choice'],
			features: ['Code suggestions', 'Multi-language', 'Context-aware', 'Test generation', 'Documentation'],
			useCases: ['Software development', 'Code review', 'Learning', 'Debugging', 'Refactoring'],
			whyBest: 'Copilot increases developer productivity by 55% and is trusted by millions of developers worldwide.',
			trending: true,
			verified: true
		},
		{
			rank: 5,
			name: 'Figma',
			slug: 'figma',
			tagline: 'Collaborative interface design tool',
			description: 'Figma is the industry-standard design tool for creating user interfaces, prototypes, and design systems.',
			category: 'design',
			logo: '✨',
			rating: 4.8,
			reviews: 980000,
			users: '4M+',
			pricing: 'Freemium',
			awards: ['Best Design Tool', 'Team Collaboration', 'Industry Standard'],
			features: ['Real-time collaboration', 'Prototyping', 'Design systems', 'Plugins', 'Dev handoff'],
			useCases: ['UI/UX design', 'Prototyping', 'Design systems', 'Wireframing', 'Team collaboration'],
			whyBest: 'Figma\'s collaborative features and comprehensive toolset make it the go-to choice for modern design teams.',
			verified: true,
			enterprise: true
		},
		{
			rank: 6,
			name: 'Slack',
			slug: 'slack',
			tagline: 'Where work happens',
			description: 'Slack is the leading team communication platform, connecting teams and streamlining workflows.',
			category: 'business',
			logo: '💬',
			rating: 4.6,
			reviews: 750000,
			users: '20M+',
			pricing: 'Freemium',
			awards: ['Best Communication Tool', 'Team Productivity', 'Enterprise Choice'],
			features: ['Channels', 'Direct messages', 'File sharing', 'Integrations', 'Video calls'],
			useCases: ['Team communication', 'Project collaboration', 'Remote work', 'Integration hub', 'Knowledge sharing'],
			whyBest: 'Slack\'s extensive integrations and intuitive interface make it essential for modern team communication.',
			verified: true,
			enterprise: true
		},
		{
			rank: 7,
			name: 'Canva',
			slug: 'canva',
			tagline: 'Design anything, publish anywhere',
			description: 'Canva democratizes design with an easy-to-use platform for creating professional graphics.',
			category: 'design',
			logo: '🎨',
			rating: 4.7,
			reviews: 1500000,
			users: '135M+',
			pricing: 'Freemium',
			awards: ['Most User-Friendly', 'Design Innovation', 'People\'s Choice'],
			features: ['Templates', 'Drag-and-drop', 'Brand kit', 'AI features', 'Collaboration'],
			useCases: ['Social media', 'Presentations', 'Marketing', 'Branding', 'Print design'],
			whyBest: 'Canva makes professional design accessible to everyone with its intuitive interface and vast template library.',
			trending: true,
			verified: true
		},
		{
			rank: 8,
			name: 'Grammarly',
			slug: 'grammarly',
			tagline: 'Write with confidence',
			description: 'Grammarly uses AI to improve your writing with real-time grammar, spelling, and style suggestions.',
			category: 'productivity',
			logo: '✍️',
			rating: 4.6,
			reviews: 890000,
			users: '30M+',
			pricing: 'Freemium',
			awards: ['Best Writing Tool', 'Editor\'s Pick', 'Productivity Champion'],
			features: ['Grammar check', 'Tone detection', 'Plagiarism', 'Style guide', 'AI writing'],
			useCases: ['Professional writing', 'Academic papers', 'Emails', 'Content creation', 'Business communication'],
			whyBest: 'Grammarly\'s AI-powered suggestions help millions write better, clearer, and more effective content daily.',
			verified: true
		},
		{
			rank: 9,
			name: 'Zapier',
			slug: 'zapier',
			tagline: 'Automate your work',
			description: 'Zapier connects your apps and automates workflows, saving time and eliminating repetitive tasks.',
			category: 'productivity',
			logo: '⚡',
			rating: 4.5,
			reviews: 520000,
			users: '5M+',
			pricing: 'Freemium',
			awards: ['Best Automation Tool', 'Integration Leader', 'Productivity Hero'],
			features: ['5000+ integrations', 'Multi-step zaps', 'AI automation', 'Webhooks', 'Custom logic'],
			useCases: ['Workflow automation', 'Data sync', 'Lead management', 'Social media', 'E-commerce'],
			whyBest: 'Zapier\'s extensive integrations and no-code approach make automation accessible to everyone.',
			verified: true,
			enterprise: true
		},
		{
			rank: 10,
			name: 'Loom',
			slug: 'loom',
			tagline: 'Async video messaging for work',
			description: 'Loom makes it easy to record and share video messages, perfect for remote teams and async communication.',
			category: 'business',
			logo: '🎥',
			rating: 4.7,
			reviews: 380000,
			users: '14M+',
			pricing: 'Freemium',
			awards: ['Best Video Tool', 'Remote Work Essential', 'Communication Innovation'],
			features: ['Screen recording', 'Webcam', 'Instant sharing', 'Transcripts', 'Analytics'],
			useCases: ['Team updates', 'Tutorials', 'Feedback', 'Sales demos', 'Customer support'],
			whyBest: 'Loom revolutionizes async communication with quick, personal video messages that save time and build connection.',
			trending: true,
			verified: true
		},
		// New tools for empty subcategories
		{
			rank: 11,
			name: 'Runway ML',
			slug: 'runway-ml',
			tagline: 'AI-powered video editing',
			description: 'Runway ML brings advanced AI video editing tools to creators, making professional video production accessible to everyone.',
			category: 'ai-generation',
			logo: '🎬',
			rating: 4.7,
			reviews: 120000,
			users: '2M+',
			pricing: 'Freemium',
			awards: ['Best Video AI Tool', 'Creative Innovation', 'Editor\'s Choice'],
			features: ['AI video editing', 'Green screen removal', 'Object tracking', 'Text animation', 'Style transfer'],
			useCases: ['Video editing', 'Content creation', 'Social media', 'Marketing videos', 'Short-form content'],
			whyBest: 'Runway ML democratizes professional video editing with powerful AI tools that were previously only available to experts.',
			trending: true,
			verified: true
		},
		{
			rank: 12,
			name: 'Claude',
			slug: 'claude',
			tagline: 'AI assistant with superior reasoning',
			description: 'Claude by Anthropic is an AI assistant focused on being helpful, harmless, and honest, with exceptional context understanding.',
			category: 'ai-generation',
			logo: '🧠',
			rating: 4.8,
			reviews: 450000,
			users: '20M+',
			pricing: 'Freemium',
			awards: ['Best Reasoning AI', 'Safest AI Assistant', 'Most Helpful'],
			features: ['Long context understanding', 'Code assistance', 'Document analysis', 'Safe responses', 'Creative writing'],
			useCases: ['Research assistance', 'Document analysis', 'Code review', 'Creative writing', 'Educational support'],
			whyBest: 'Claude excels at complex reasoning tasks and long-form content while maintaining strong safety and ethical standards.',
			verified: true,
			enterprise: true
		},
		{
			rank: 13,
			name: 'Linear',
			slug: 'linear',
			tagline: 'The fastest, most beautiful project management tool',
			description: 'Linear is a streamlined issue tracking and project management tool designed for high-performance teams.',
			category: 'productivity',
			logo: '🔗',
			rating: 4.9,
			reviews: 85000,
			users: '1.2M+',
			pricing: 'Paid',
			awards: ['Best Project Management', 'Fastest Tool', 'Design Excellence'],
			features: ['Issue tracking', 'Sprint planning', 'Time tracking', 'Team collaboration', 'GitHub integration'],
			useCases: ['Software development', 'Project management', 'Team coordination', 'Bug tracking', 'Release planning'],
			whyBest: 'Linear combines powerful project management features with an incredibly fast and beautiful interface that developers love.',
			verified: true,
			enterprise: true
		},
		{
			rank: 14,
			name: 'Vercel',
			slug: 'vercel',
			tagline: 'Develop. Preview. Ship.',
			description: 'Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.',
			category: 'development',
			logo: '▲',
			rating: 4.8,
			reviews: 210000,
			users: '3M+',
			pricing: 'Freemium',
			awards: ['Best Deployment Platform', 'Frontend Favorite', 'Developer Experience'],
			features: ['Instant deployments', 'Serverless functions', 'Edge network', 'Collaboration tools', 'Analytics'],
			useCases: ['Web development', 'Static site hosting', 'Serverless functions', 'Team collaboration', 'Performance optimization'],
			whyBest: 'Vercel provides the fastest deployment experience with global edge networks and seamless developer workflows.',
			trending: true,
			verified: true,
			enterprise: true
		},
		{
			rank: 15,
			name: 'Framer',
			slug: 'framer',
			tagline: 'Design and ship sites with AI',
			description: 'Framer is a powerful design and publishing tool that enables teams to create, manage, and scale beautiful websites.',
			category: 'design',
			logo: '📱',
			rating: 4.7,
			reviews: 95000,
			users: '800K+',
			pricing: 'Paid',
			awards: ['Best Website Builder', 'Design to Code', 'AI Integration'],
			features: ['Visual design', 'Responsive layouts', 'CMS integration', 'E-commerce', 'AI copywriting'],
			useCases: ['Website design', 'Prototyping', 'Content management', 'E-commerce sites', 'Landing pages'],
			whyBest: 'Framer bridges the gap between design and development with powerful visual tools and seamless publishing capabilities.',
			verified: true,
			enterprise: true
		}
	];

	const filteredTools = selectedCategory === 'all' 
		? bestTools 
		: bestTools.filter(tool => tool.category === selectedCategory);

	return (
		<main className="min-h-screen bg-aether-obsidian relative overflow-hidden">
			{/* Animated Background */}
			<div className="absolute inset-0 opacity-20">
				<div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/30 rounded-full blur-3xl animate-pulse" />
				<div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
				<div className="absolute top-1/2 left-1/2 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
			</div>

			<div className="relative z-10 mx-auto max-w-7xl px-4 py-16 md:px-6">
				<SectionHeader 
					title="🏆 Best Tools of 2025" 
					subtitle="Handpicked, tested, and ranked by our expert team. Only the absolute best make this list." 
				/>

				{/* Premium Stats */}
				<motion.div 
					className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					{[
						{ label: 'Top Tools', value: '10', icon: <TrophyIcon className="w-6 h-6" />, color: 'from-yellow-500 to-orange-500' },
						{ label: 'Avg Rating', value: '4.7', icon: <StarIcon className="w-6 h-6" />, color: 'from-blue-500 to-cyan-500' },
						{ label: 'Total Users', value: '350M+', icon: <UserGroupIcon className="w-6 h-6" />, color: 'from-purple-500 to-pink-500' },
						{ label: 'Total Reviews', value: '9.5M+', icon: <ChartBarIcon className="w-6 h-6" />, color: 'from-green-500 to-emerald-500' }
					].map((stat, index) => (
						<motion.div
							key={stat.label}
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="relative group"
						>
							<div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
								<div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
								<div className="relative">
									<div className={`text-${stat.color.split('-')[1]}-400 mb-2`}>{stat.icon}</div>
									<div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
										{stat.value}
									</div>
									<div className="text-xs text-aether-mist">{stat.label}</div>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* Category Filter */}
				<motion.div 
					className="mt-12"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					<div className="flex flex-wrap gap-3 justify-center">
						{categories.map((category, index) => (
							<motion.button
								key={category.id}
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.3, delay: index * 0.05 }}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								onClick={() => setSelectedCategory(category.id)}
								className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
									selectedCategory === category.id
										? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg shadow-yellow-500/25'
										: 'bg-white/5 text-aether-mist hover:bg-white/10 border border-white/10'
								}`}
							>
								<span className="text-xl">{category.icon}</span>
								<span>{category.name}</span>
							</motion.button>
						))}
					</div>
				</motion.div>

				{/* Best Tools List */}
				<motion.div 
					className="mt-16 space-y-6"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.4 }}
				>
					{filteredTools.map((tool, index) => (
						<motion.article
							key={tool.slug}
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							whileHover={{ scale: 1.02, y: -5 }}
							className="group relative rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 p-8 hover:border-yellow-500/50 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 overflow-hidden"
						>
							{/* Rank Badge */}
							<div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/50 group-hover:scale-110 transition-transform duration-300">
								<div className="text-center">
									<div className="text-2xl font-bold text-white">#{tool.rank}</div>
								</div>
							</div>

							{/* Gradient Overlay */}
							<div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-orange-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

							<div className="relative z-10 ml-16">
								<div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
									{/* Left: Logo & Basic Info */}
									<div className="flex-shrink-0 mb-6 lg:mb-0">
										<div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-5xl shadow-lg mb-4">
											{tool.logo}
										</div>
										<div className="flex flex-wrap gap-2">
											{tool.verified && (
												<span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 text-xs font-bold rounded-full border border-blue-500/30 flex items-center space-x-1">
													<CheckBadgeIcon className="w-3 h-3" />
													<span>Verified</span>
												</span>
											)}
											{tool.trending && (
												<span className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-400 text-xs font-bold rounded-full border border-orange-500/30 flex items-center space-x-1">
													<FireIcon className="w-3 h-3" />
													<span>Trending</span>
												</span>
											)}
											{tool.enterprise && (
												<span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 text-xs font-bold rounded-full border border-purple-500/30 flex items-center space-x-1">
													<BoltIcon className="w-3 h-3" />
													<span>Enterprise</span>
												</span>
											)}
										</div>
									</div>

									{/* Right: Content */}
									<div className="flex-1">
										<div className="flex items-start justify-between mb-4">
											<div>
												<h3 className="text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-400 transition-all duration-300">
													{tool.name}
												</h3>
												<p className="text-xl text-blue-400 mb-3">{tool.tagline}</p>
												<p className="text-aether-mist leading-relaxed mb-4">
													{tool.description}
												</p>
											</div>
										</div>

										{/* Stats Row */}
										<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
											<div className="text-center p-3 rounded-xl bg-white/5 border border-white/10">
												<div className="flex items-center justify-center space-x-1 text-yellow-400 mb-1">
													<StarIcon className="w-4 h-4" />
													<span className="text-lg font-bold">{tool.rating}</span>
												</div>
												<div className="text-xs text-aether-mist">Rating</div>
											</div>
											<div className="text-center p-3 rounded-xl bg-white/5 border border-white/10">
												<div className="text-lg font-bold text-white mb-1">{tool.reviews.toLocaleString()}</div>
												<div className="text-xs text-aether-mist">Reviews</div>
											</div>
											<div className="text-center p-3 rounded-xl bg-white/5 border border-white/10">
												<div className="text-lg font-bold text-white mb-1">{tool.users}</div>
												<div className="text-xs text-aether-mist">Users</div>
											</div>
											<div className="text-center p-3 rounded-xl bg-white/5 border border-white/10">
												<div className="text-lg font-bold text-white mb-1">{tool.pricing}</div>
												<div className="text-xs text-aether-mist">Pricing</div>
											</div>
										</div>

										{/* Awards */}
										<div className="mb-6">
											<div className="flex items-center space-x-2 mb-3">
												<TrophyIcon className="w-5 h-5 text-yellow-400" />
												<span className="text-sm font-semibold text-white">Awards & Recognition</span>
											</div>
											<div className="flex flex-wrap gap-2">
												{tool.awards.map(award => (
													<span key={award} className="px-3 py-1 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 text-yellow-400 text-xs font-semibold rounded-lg border border-yellow-500/20">
														🏆 {award}
													</span>
												))}
											</div>
										</div>

										{/* Why Best */}
										<div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-yellow-500/5 to-orange-500/5 border border-yellow-500/20">
											<div className="flex items-center space-x-2 mb-2">
												<SparklesIcon className="w-5 h-5 text-yellow-400" />
												<span className="text-sm font-semibold text-white">Why It's the Best</span>
											</div>
											<p className="text-sm text-aether-mist leading-relaxed">{tool.whyBest}</p>
										</div>

										{/* Features & Use Cases */}
										<div className="grid md:grid-cols-2 gap-6 mb-6">
											<div>
												<h4 className="text-sm font-semibold text-white mb-3">Key Features</h4>
												<ul className="space-y-2">
													{tool.features.map(feature => (
														<li key={feature} className="flex items-center space-x-2 text-sm text-aether-mist">
															<span className="text-green-400">✓</span>
															<span>{feature}</span>
														</li>
													))}
												</ul>
											</div>
											<div>
												<h4 className="text-sm font-semibold text-white mb-3">Best For</h4>
												<ul className="space-y-2">
													{tool.useCases.map(useCase => (
														<li key={useCase} className="flex items-center space-x-2 text-sm text-aether-mist">
															<span className="text-blue-400">→</span>
															<span>{useCase}</span>
														</li>
													))}
												</ul>
											</div>
										</div>

										{/* CTA */}
										<div className="flex items-center space-x-4">
											<Link 
												href={`/tool/${tool.slug}`}
												className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-xl hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50 flex items-center space-x-2"
											>
												<span>View Full Review</span>
												<span>→</span>
											</Link>
											<button className="px-6 py-3 bg-white/5 text-white font-semibold rounded-xl hover:bg-white/10 border border-white/10 transition-all duration-300">
												Try {tool.name}
											</button>
										</div>
									</div>
								</div>
							</div>
						</motion.article>
					))}
				</motion.div>

				{/* Bottom CTA */}
				<motion.div 
					className="mt-20"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<div className="rounded-3xl bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-amber-500/10 backdrop-blur-sm border border-yellow-500/20 p-12 text-center">
						<TrophyIcon className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
						<h3 className="text-3xl font-bold text-white mb-4">
							Want Your Tool Featured Here?
						</h3>
						<p className="text-xl text-aether-mist mb-8 max-w-2xl mx-auto">
							Submit your tool for review and join the ranks of the best tools in the industry.
						</p>
						<Link 
							href="/contact"
							className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-xl hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50"
						>
							<span>Submit Your Tool</span>
							<span>→</span>
						</Link>
					</div>
				</motion.div>
			</div>
		</main>
	);
}
