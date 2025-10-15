"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export async function DailyIntelligence() {
	const base = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
	let events: Array<any> = [];
	try {
		const res = await fetch(`${base}/api/intelligence`, { cache: 'no-store' });
		if (res.ok) {
			const data = await res.json();
			events = data.events;
		}
	} catch {}

	// Mock market data for demonstration
	const marketData = {
		totalFunding: 45.2,
		fundingGrowth: 12.5,
		newTools: 23,
		toolsGrowth: 8.3,
		activeUsers: 2.1,
		usersGrowth: 15.7
	};

	const newsItems = [
		{
			id: 1,
			title: "OpenAI announces GPT-5 with multimodal capabilities",
			category: "Product Launch",
			timestamp: "2 hours ago",
			impact: "high",
			source: "TechCrunch"
		},
		{
			id: 2,
			title: "Anthropic raises $4B Series C led by Amazon",
			category: "Funding",
			timestamp: "4 hours ago",
			impact: "high",
			source: "Forbes"
		},
		{
			id: 3,
			title: "Midjourney v6.1 introduces video generation",
			category: "Product Update",
			timestamp: "6 hours ago",
			impact: "medium",
			source: "The Verge"
		},
		{
			id: 4,
			title: "Google DeepMind unveils new robotics AI model",
			category: "Research",
			timestamp: "8 hours ago",
			impact: "medium",
			source: "Nature"
		},
		{
			id: 5,
			title: "Microsoft Copilot reaches 100M monthly users",
			category: "Milestone",
			timestamp: "12 hours ago",
			impact: "high",
			source: "Microsoft Blog"
		}
	];

	return (
		<section className="relative py-20 px-6">
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<div className="inline-flex items-center px-4 py-2 rounded-full border border-aether-holo/20 bg-aether-holo/5 backdrop-blur-sm mb-6">
						<div className="w-2 h-2 bg-aether-holo rounded-full mr-2 animate-pulse"></div>
						<span className="text-sm font-medium text-aether-holo tracking-wider">DAILY INTELLIGENCE</span>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
						Live AI Industry Intelligence
						<br />
						<span className="bg-gradient-to-r from-aether-holo to-white bg-clip-text text-transparent">
							Real-time Market Pulse
						</span>
					</h2>
					<p className="text-xl text-aether-mist max-w-3xl mx-auto">
						Stay ahead with real-time updates on AI tool launches, funding rounds, 
						market movements, and industry developments from around the globe.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Market Analytics */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						viewport={{ once: true }}
						className="lg:col-span-1"
					>
						<div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm p-8">
							<div className="flex items-center justify-between mb-6">
								<h3 className="text-xl font-bold text-white">Market Analytics</h3>
								<div className="flex items-center">
									<div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
									<span className="text-xs text-aether-mist">Live</span>
								</div>
							</div>

							<div className="space-y-6">
								{[
									{ label: "Total Funding (B)", value: marketData.totalFunding, growth: marketData.fundingGrowth, icon: "💰", color: "text-green-400" },
									{ label: "New Tools Today", value: marketData.newTools, growth: marketData.toolsGrowth, icon: "🔧", color: "text-blue-400" },
									{ label: "Active Users (M)", value: marketData.activeUsers, growth: marketData.usersGrowth, icon: "👥", color: "text-purple-400" }
								].map((metric, index) => (
									<motion.div
										key={metric.label}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
										viewport={{ once: true }}
										className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
									>
										<div className="flex items-center">
											<div className="text-2xl mr-3">{metric.icon}</div>
											<div>
												<div className="text-sm text-aether-mist">{metric.label}</div>
												<div className="text-lg font-bold text-white">{metric.value}</div>
											</div>
										</div>
										<div className="text-right">
											<div className={`text-sm font-semibold ${metric.color}`}>
												+{metric.growth}%
											</div>
											<div className="text-xs text-aether-mist">vs last month</div>
										</div>
									</motion.div>
								))}
							</div>
						</div>
					</motion.div>

					{/* Live News Ticker */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						viewport={{ once: true }}
						className="lg:col-span-2"
					>
						<div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm p-8">
							<div className="flex items-center justify-between mb-6">
								<h3 className="text-xl font-bold text-white">Live News Feed</h3>
								<div className="flex items-center">
									<div className="w-2 h-2 bg-aether-holo rounded-full mr-2 animate-pulse"></div>
									<span className="text-xs text-aether-mist">Real-time</span>
								</div>
							</div>

							<div className="space-y-4">
								{newsItems.map((item, index) => (
									<motion.div
										key={item.id}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
										viewport={{ once: true }}
										whileHover={{ x: 8, scale: 1.02 }}
										className="group"
									>
										<div className="flex items-start p-4 rounded-xl border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
											<div className="flex-shrink-0 mr-4">
												<div className={`w-3 h-3 rounded-full ${
													item.impact === 'high' ? 'bg-red-500' : 
													item.impact === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
												}`} />
											</div>
											<div className="flex-1 min-w-0">
												<div className="flex items-center justify-between mb-2">
													<span className="text-xs px-2 py-1 rounded-full bg-aether-holo/20 text-aether-holo border border-aether-holo/30">
														{item.category}
													</span>
													<span className="text-xs text-aether-mist">{item.timestamp}</span>
												</div>
												<h4 className="text-sm font-semibold text-white group-hover:text-aether-holo transition-colors mb-1">
													{item.title}
												</h4>
												<div className="text-xs text-aether-mist">Source: {item.source}</div>
											</div>
										</div>
									</motion.div>
								))}
							</div>

							{/* View All News Button */}
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ duration: 0.5, delay: 1 }}
								viewport={{ once: true }}
								className="mt-6 text-center"
							>
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="px-6 py-3 rounded-xl border border-aether-holo/30 bg-aether-holo/10 backdrop-blur-sm hover:bg-aether-holo/20 transition-all duration-300"
								>
									<span className="text-sm font-medium text-aether-holo">
										View All News →
									</span>
								</motion.button>
							</motion.div>
						</div>
					</motion.div>
				</div>

				{/* Tool of the Day */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					viewport={{ once: true }}
					className="mt-16"
				>
					<div className="rounded-3xl border border-white/10 bg-gradient-to-r from-aether-obsidian to-black/50 backdrop-blur-sm p-8">
						<div className="flex items-center justify-between mb-6">
							<div className="flex items-center">
								<div className="text-3xl mr-4">⭐</div>
								<div>
									<h3 className="text-2xl font-bold text-white">Tool of the Day</h3>
									<p className="text-aether-mist">Handpicked by our expert curators</p>
								</div>
							</div>
							<div className="text-right">
								<div className="text-sm text-aether-mist">Featured</div>
								<div className="text-xs text-aether-holo">Today</div>
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
							<div>
								<div className="flex items-center mb-4">
									<div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center mr-4">
										<img src="/logos/midjourney.svg" alt="Midjourney" className="w-10 h-10" />
									</div>
									<div>
										<h4 className="text-xl font-bold text-white">Midjourney</h4>
										<div className="flex items-center">
											<span className="text-yellow-400 text-sm">★</span>
											<span className="text-sm text-aether-mist ml-1">4.9</span>
											<span className="text-xs text-aether-mist ml-2">15M+ users</span>
										</div>
									</div>
								</div>
								<p className="text-aether-mist mb-4">
									Revolutionary AI art generator that transforms text prompts into stunning visual masterpieces. 
									Used by artists, designers, and creators worldwide to bring imagination to life.
								</p>
								<div className="flex flex-wrap gap-2 mb-4">
									<span className="text-xs px-2 py-1 rounded-full bg-aether-holo/20 text-aether-holo border border-aether-holo/30">
										nexus verified
									</span>
									<span className="text-xs px-2 py-1 rounded-full bg-aether-holo/20 text-aether-holo border border-aether-holo/30">
										trending
									</span>
									<span className="text-xs px-2 py-1 rounded-full bg-aether-holo/20 text-aether-holo border border-aether-holo/30">
										award winning
									</span>
								</div>
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="px-6 py-3 bg-gradient-to-r from-aether-holo to-aether-holo/80 text-black font-semibold rounded-xl hover:shadow-holo transition-all duration-300"
								>
									Explore Midjourney →
								</motion.button>
							</div>
							<div className="text-center">
								<div className="text-6xl mb-4">🎨</div>
								<div className="text-sm text-aether-mist">
									"Midjourney has fundamentally changed how we think about AI-generated art. 
									It's not just a tool—it's a creative partner."
								</div>
								<div className="text-xs text-aether-holo mt-2">— Digital Artist</div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
