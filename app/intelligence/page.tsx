"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../../components/SectionHeader';
import {
	ChartBarIcon,
	ArrowTrendingUpIcon,
	ArrowTrendingDownIcon,
	BoltIcon,
	SparklesIcon,
	FireIcon,
	ClockIcon,
	CurrencyDollarIcon,
	UserGroupIcon,
	RocketLaunchIcon,
	ExclamationTriangleIcon,
	CheckCircleIcon,
	InformationCircleIcon
} from '@heroicons/react/24/outline';

interface IntelligenceEvent {
	id: string;
	tool: string;
	type: 'price_change' | 'new_feature' | 'trending' | 'update' | 'alert' | 'milestone' | 'integration';
	detail: string;
	timestamp: string;
	impact: 'high' | 'medium' | 'low';
	category: string;
	change?: string;
}

interface TrendingTool {
	name: string;
	category: string;
	trend: number;
	users: string;
	logo: string;
}

interface MarketInsight {
	title: string;
	description: string;
	metric: string;
	change: number;
	icon: any;
	color: string;
}

export default function IntelligenceFeedPage() {
	const [selectedFilter, setSelectedFilter] = useState('all');

	const filters = [
		{ id: 'all', name: 'All Updates', icon: '📊' },
		{ id: 'trending', name: 'Trending', icon: '🔥' },
		{ id: 'price_change', name: 'Pricing', icon: '💰' },
		{ id: 'new_feature', name: 'Features', icon: '✨' },
		{ id: 'alert', name: 'Alerts', icon: '⚠️' }
	];

	const intelligenceEvents: IntelligenceEvent[] = [
		{
			id: '1',
			tool: 'ChatGPT',
			type: 'new_feature',
			detail: 'Launched GPT-4 Turbo with 128K context window and improved performance',
			timestamp: '2 hours ago',
			impact: 'high',
			category: 'AI Generation',
			change: '+40% faster'
		},
		{
			id: '2',
			tool: 'Midjourney',
			type: 'price_change',
			detail: 'Basic plan price increased from $10 to $12/month',
			timestamp: '5 hours ago',
			impact: 'medium',
			category: 'AI Generation',
			change: '+20%'
		},
		{
			id: '3',
			tool: 'Notion',
			type: 'trending',
			detail: 'Experiencing 300% surge in sign-ups after AI features announcement',
			timestamp: '8 hours ago',
			impact: 'high',
			category: 'Productivity',
			change: '+300%'
		},
		{
			id: '4',
			tool: 'GitHub Copilot',
			type: 'update',
			detail: 'Released Copilot Chat for all subscribers with multi-file editing',
			timestamp: '12 hours ago',
			impact: 'high',
			category: 'Development'
		},
		{
			id: '5',
			tool: 'Figma',
			type: 'new_feature',
			detail: 'Introduced AI-powered design suggestions and auto-layout improvements',
			timestamp: '1 day ago',
			impact: 'medium',
			category: 'Design'
		},
		{
			id: '6',
			tool: 'Canva',
			type: 'milestone',
			detail: 'Reached 150 million monthly active users worldwide',
			timestamp: '1 day ago',
			impact: 'high',
			category: 'Design',
			change: '150M users'
		},
		{
			id: '7',
			tool: 'Slack',
			type: 'integration',
			detail: 'Added native integration with Salesforce and HubSpot CRM',
			timestamp: '2 days ago',
			impact: 'medium',
			category: 'Business'
		},
		{
			id: '8',
			tool: 'Grammarly',
			type: 'alert',
			detail: 'Security update required - all users should update to latest version',
			timestamp: '2 days ago',
			impact: 'high',
			category: 'Productivity'
		},
		{
			id: '9',
			tool: 'Zapier',
			type: 'new_feature',
			detail: 'Launched AI Actions - automate workflows with natural language',
			timestamp: '3 days ago',
			impact: 'high',
			category: 'Productivity'
		},
		{
			id: '10',
			tool: 'Loom',
			type: 'trending',
			detail: 'Video views increased 450% following remote work trend',
			timestamp: '3 days ago',
			impact: 'medium',
			category: 'Business',
			change: '+450%'
		}
	];

	const trendingTools: TrendingTool[] = [
		{ name: 'ChatGPT', category: 'AI', trend: 95, users: '100M+', logo: '🤖' },
		{ name: 'Midjourney', category: 'Design', trend: 88, users: '15M+', logo: '🎨' },
		{ name: 'Notion', category: 'Productivity', trend: 82, users: '30M+', logo: '📝' },
		{ name: 'Canva', category: 'Design', trend: 79, users: '135M+', logo: '🎨' },
		{ name: 'GitHub Copilot', category: 'Dev', trend: 76, users: '5M+', logo: '💻' }
	];

	const marketInsights: MarketInsight[] = [
		{
			title: 'AI Tool Adoption',
			description: 'Companies adopting AI tools',
			metric: '87%',
			change: 23,
			icon: SparklesIcon,
			color: 'from-blue-500 to-cyan-500'
		},
		{
			title: 'Market Growth',
			description: 'YoY growth in tool usage',
			metric: '156%',
			change: 45,
			icon: ArrowTrendingUpIcon,
			color: 'from-green-500 to-emerald-500'
		},
		{
			title: 'New Launches',
			description: 'Tools launched this month',
			metric: '247',
			change: 12,
			icon: RocketLaunchIcon,
			color: 'from-purple-500 to-pink-500'
		},
		{
			title: 'Active Users',
			description: 'Total active users globally',
			metric: '2.3B',
			change: 18,
			icon: UserGroupIcon,
			color: 'from-orange-500 to-red-500'
		}
	];

	const filteredEvents = selectedFilter === 'all' 
		? intelligenceEvents 
		: intelligenceEvents.filter(event => event.type === selectedFilter);

	const getEventIcon = (type: string) => {
		switch (type) {
			case 'price_change': return <CurrencyDollarIcon className="w-5 h-5" />;
			case 'new_feature': return <SparklesIcon className="w-5 h-5" />;
			case 'trending': return <FireIcon className="w-5 h-5" />;
			case 'update': return <BoltIcon className="w-5 h-5" />;
			case 'alert': return <ExclamationTriangleIcon className="w-5 h-5" />;
			case 'milestone': return <CheckCircleIcon className="w-5 h-5" />;
			case 'integration': return <InformationCircleIcon className="w-5 h-5" />;
			default: return <InformationCircleIcon className="w-5 h-5" />;
		}
	};

	const getEventColor = (type: string) => {
		switch (type) {
			case 'price_change': return 'from-yellow-500 to-orange-500';
			case 'new_feature': return 'from-blue-500 to-cyan-500';
			case 'trending': return 'from-orange-500 to-red-500';
			case 'update': return 'from-purple-500 to-pink-500';
			case 'alert': return 'from-red-500 to-pink-500';
			case 'milestone': return 'from-green-500 to-emerald-500';
			case 'integration': return 'from-indigo-500 to-purple-500';
			default: return 'from-gray-500 to-slate-500';
		}
	};

	const getImpactBadge = (impact: string) => {
		const colors = {
			high: 'bg-red-500/20 text-red-400 border-red-500/30',
			medium: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
			low: 'bg-green-500/20 text-green-400 border-green-500/30'
		};
		return colors[impact as keyof typeof colors];
	};

	return (
		<main className="min-h-screen bg-aether-obsidian relative overflow-hidden">
			{/* Animated Background */}
			<div className="absolute inset-0 opacity-20">
				<div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" />
				<div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
				<div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
			</div>

			<div className="relative z-10 mx-auto max-w-7xl px-4 py-16 md:px-6">
				<SectionHeader 
					title="🧠 AI Intelligence Dashboard" 
					subtitle="Real-time insights, market trends, and tool analytics powered by AI" 
				/>

				{/* Market Insights */}
				<motion.div 
					className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					{marketInsights.map((insight, index) => (
						<motion.div
							key={insight.title}
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="relative group"
						>
							<div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
								<div className={`absolute inset-0 bg-gradient-to-br ${insight.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
								<div className="relative">
									<div className={`text-${insight.color.split('-')[1]}-400 mb-3`}>
										<insight.icon className="w-8 h-8" />
									</div>
									<div className={`text-3xl font-bold bg-gradient-to-r ${insight.color} bg-clip-text text-transparent mb-2`}>
										{insight.metric}
									</div>
									<div className="text-sm font-semibold text-white mb-1">{insight.title}</div>
									<div className="text-xs text-aether-mist mb-3">{insight.description}</div>
									<div className="flex items-center space-x-1 text-xs">
										<ArrowTrendingUpIcon className="w-3 h-3 text-green-400" />
										<span className="text-green-400 font-semibold">+{insight.change}%</span>
										<span className="text-aether-mist">this month</span>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* Trending Tools */}
				<motion.section 
					className="mt-16"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					<div className="flex items-center justify-between mb-8">
						<h2 className="text-2xl font-bold text-white flex items-center space-x-2">
							<FireIcon className="w-6 h-6 text-orange-400" />
							<span>Trending Now</span>
						</h2>
						<div className="h-1 flex-1 ml-6 bg-gradient-to-r from-orange-500/50 to-transparent rounded-full" />
					</div>

					<div className="grid grid-cols-1 md:grid-cols-5 gap-4">
						{trendingTools.map((tool, index) => (
							<motion.div
								key={tool.name}
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								whileHover={{ y: -5, scale: 1.05 }}
								className="relative rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 p-6 hover:border-orange-500/50 transition-all duration-300"
							>
								<div className="text-center">
									<div className="text-4xl mb-3">{tool.logo}</div>
									<div className="text-lg font-bold text-white mb-1">{tool.name}</div>
									<div className="text-xs text-aether-mist mb-3">{tool.category}</div>
									<div className="flex items-center justify-center space-x-2 mb-2">
										<div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
											<div 
												className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
												style={{ width: `${tool.trend}%` }}
											/>
										</div>
										<span className="text-xs font-bold text-orange-400">{tool.trend}</span>
									</div>
									<div className="text-xs text-aether-mist">{tool.users} users</div>
								</div>
							</motion.div>
						))}
					</div>
				</motion.section>

				{/* Intelligence Feed */}
				<motion.section 
					className="mt-16"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
				>
					<div className="flex items-center justify-between mb-8">
						<h2 className="text-2xl font-bold text-white flex items-center space-x-2">
							<ChartBarIcon className="w-6 h-6 text-blue-400" />
							<span>Live Intelligence Feed</span>
						</h2>
						<div className="flex items-center space-x-2">
							<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
							<span className="text-xs text-aether-mist">Live</span>
						</div>
					</div>

					{/* Filters */}
					<div className="flex flex-wrap gap-3 mb-8">
						{filters.map((filter, index) => (
							<motion.button
								key={filter.id}
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.3, delay: index * 0.05 }}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								onClick={() => setSelectedFilter(filter.id)}
								className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
									selectedFilter === filter.id
										? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25'
										: 'bg-white/5 text-aether-mist hover:bg-white/10 border border-white/10'
								}`}
							>
								<span>{filter.icon}</span>
								<span className="text-sm">{filter.name}</span>
							</motion.button>
						))}
					</div>

					{/* Events List */}
					<div className="space-y-4">
						{filteredEvents.map((event, index) => (
							<motion.div
								key={event.id}
								initial={{ opacity: 0, x: -30 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: index * 0.05 }}
								whileHover={{ x: 5 }}
								className="group relative rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 p-6 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300"
							>
								<div className="flex items-start space-x-4">
									{/* Icon */}
									<div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${getEventColor(event.type)} flex items-center justify-center text-white shadow-lg`}>
										{getEventIcon(event.type)}
									</div>

									{/* Content */}
									<div className="flex-1">
										<div className="flex items-start justify-between mb-2">
											<div>
												<h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
													{event.tool}
												</h3>
												<div className="flex items-center space-x-2 mt-1">
													<span className="text-xs text-aether-mist capitalize">
														{event.type.replace(/_/g, ' ')}
													</span>
													<span className="text-aether-mist">•</span>
													<span className="text-xs text-aether-mist">{event.category}</span>
												</div>
											</div>
											<div className="flex items-center space-x-2">
												{event.change && (
													<span className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 text-xs font-bold rounded-full border border-green-500/30">
														{event.change}
													</span>
												)}
												<span className={`px-3 py-1 text-xs font-bold rounded-full border ${getImpactBadge(event.impact)}`}>
													{event.impact.toUpperCase()}
												</span>
											</div>
										</div>
										<p className="text-aether-mist leading-relaxed mb-3">
											{event.detail}
										</p>
										<div className="flex items-center space-x-1 text-xs text-aether-mist">
											<ClockIcon className="w-3 h-3" />
											<span>{event.timestamp}</span>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</motion.section>

				{/* Bottom CTA */}
				<motion.div 
					className="mt-20"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<div className="rounded-3xl bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 p-12 text-center">
						<SparklesIcon className="w-16 h-16 text-blue-400 mx-auto mb-6" />
						<h3 className="text-3xl font-bold text-white mb-4">
							Get Intelligence Alerts
						</h3>
						<p className="text-xl text-aether-mist mb-8 max-w-2xl mx-auto">
							Subscribe to receive real-time updates about tool changes, pricing updates, and market trends.
						</p>
						<form 
							onSubmit={(e) => {
								e.preventDefault();
								const email = (e.target as HTMLFormElement).email.value;
								window.location.href = `mailto:huzaifakarim612@gmail.com?subject=Intelligence Alerts Subscription&body=Subscribe: ${email}`;
							}}
							className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
						>
							<input
								type="email"
								name="email"
								placeholder="Enter your email"
								required
								className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-aether-mist focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
							/>
							<motion.button
								type="submit"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
							>
								Subscribe
							</motion.button>
						</form>
					</div>
				</motion.div>
			</div>
		</main>
	);
}
