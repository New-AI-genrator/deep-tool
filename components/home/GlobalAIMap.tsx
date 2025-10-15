"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function GlobalAIMap() {
	const [activeRegion, setActiveRegion] = useState<string | null>(null);

	const regions = [
		{
			name: "Silicon Valley",
			country: "USA",
			tools: 2847,
			companies: 156,
			funding: "$12.4B",
			coordinates: { x: 15, y: 35 },
			color: "from-blue-500 to-cyan-500",
			trending: ["OpenAI", "Anthropic", "Midjourney"]
		},
		{
			name: "London",
			country: "UK",
			tools: 1234,
			companies: 89,
			funding: "$3.2B",
			coordinates: { x: 48, y: 30 },
			color: "from-purple-500 to-pink-500",
			trending: ["DeepMind", "Stability AI", "Character.AI"]
		},
		{
			name: "Tel Aviv",
			country: "Israel",
			tools: 567,
			companies: 45,
			funding: "$1.8B",
			coordinates: { x: 52, y: 40 },
			color: "from-green-500 to-emerald-500",
			trending: ["Wix AI", "Monday.com", "Lightricks"]
		},
		{
			name: "Singapore",
			country: "Singapore",
			tools: 423,
			companies: 34,
			funding: "$890M",
			coordinates: { x: 75, y: 60 },
			color: "from-orange-500 to-red-500",
			trending: ["Grab AI", "Sea AI", "Razer AI"]
		},
		{
			name: "Beijing",
			country: "China",
			tools: 1890,
			companies: 123,
			funding: "$5.6B",
			coordinates: { x: 78, y: 35 },
			color: "from-yellow-500 to-orange-500",
			trending: ["Baidu AI", "ByteDance", "Tencent AI"]
		},
		{
			name: "Berlin",
			country: "Germany",
			tools: 678,
			companies: 56,
			funding: "$1.2B",
			coordinates: { x: 50, y: 25 },
			color: "from-indigo-500 to-purple-500",
			trending: ["SAP AI", "Siemens AI", "BMW AI"]
		}
	];

	const activityStream = [
		{ time: "2m ago", event: "New AI startup launched in Silicon Valley", region: "Silicon Valley", type: "launch" },
		{ time: "5m ago", event: "Major funding round announced in London", region: "London", type: "funding" },
		{ time: "8m ago", event: "Research breakthrough published from Tel Aviv", region: "Tel Aviv", type: "research" },
		{ time: "12m ago", event: "Partnership announced in Singapore", region: "Singapore", type: "partnership" },
		{ time: "15m ago", event: "New AI tool released in Beijing", region: "Beijing", type: "launch" },
		{ time: "18m ago", event: "Conference keynote delivered in Berlin", region: "Berlin", type: "event" }
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
						<span className="text-sm font-medium text-aether-holo tracking-wider">GLOBAL AI MAP</span>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
						Worldwide AI Innovation
						<br />
						<span className="bg-gradient-to-r from-aether-holo to-white bg-clip-text text-transparent">
							Real-time Activity Stream
						</span>
					</h2>
					<p className="text-xl text-aether-mist max-w-3xl mx-auto">
						Explore the global distribution of AI tools, companies, and innovation hubs. 
						Track real-time developments and emerging trends across continents.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Interactive World Map */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						viewport={{ once: true }}
						className="lg:col-span-2"
					>
						<div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-aether-obsidian to-black/50 backdrop-blur-sm p-8 overflow-hidden">
							{/* Map Background */}
							<div className="absolute inset-0 opacity-20">
								<svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
									{/* Simplified world map outline */}
									<path d="M10,20 L30,15 L50,20 L70,18 L85,25 L90,40 L85,60 L70,75 L50,80 L30,75 L15,70 L10,50 Z" 
										fill="none" stroke="rgba(0,229,255,0.3)" strokeWidth="0.5" />
									<path d="M20,30 L40,25 L60,30 L80,28 L85,45 L80,65 L60,70 L40,65 L25,60 L20,45 Z" 
										fill="none" stroke="rgba(0,229,255,0.2)" strokeWidth="0.3" />
								</svg>
							</div>

							{/* Interactive Region Points */}
							<div className="relative z-10 h-96">
								{regions.map((region, index) => (
									<motion.div
										key={region.name}
										initial={{ opacity: 0, scale: 0 }}
										whileInView={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
										viewport={{ once: true }}
										className="absolute group cursor-pointer"
										style={{
											left: `${region.coordinates.x}%`,
											top: `${region.coordinates.y}%`,
											transform: 'translate(-50%, -50%)'
										}}
										onMouseEnter={() => setActiveRegion(region.name)}
										onMouseLeave={() => setActiveRegion(null)}
									>
										<motion.div
											animate={{
												scale: activeRegion === region.name ? [1, 1.2, 1] : 1,
												opacity: activeRegion === region.name ? [0.8, 1, 0.8] : 0.8
											}}
											transition={{ duration: 2, repeat: Infinity }}
											className={`w-6 h-6 rounded-full bg-gradient-to-r ${region.color} border-2 border-white shadow-lg`}
										/>
										
										{/* Region Info Tooltip */}
										<motion.div
											initial={{ opacity: 0, y: 10 }}
											animate={{ 
												opacity: activeRegion === region.name ? 1 : 0,
												y: activeRegion === region.name ? 0 : 10
											}}
											className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-sm rounded-xl p-4 border border-white/20 min-w-64"
										>
											<div className="text-center">
												<h4 className="text-sm font-bold text-white mb-2">{region.name}</h4>
												<div className="text-xs text-aether-mist mb-3">{region.country}</div>
												<div className="grid grid-cols-3 gap-2 text-xs">
													<div>
														<div className="text-white font-semibold">{region.tools}</div>
														<div className="text-aether-mist">Tools</div>
													</div>
													<div>
														<div className="text-white font-semibold">{region.companies}</div>
														<div className="text-aether-mist">Companies</div>
													</div>
													<div>
														<div className="text-white font-semibold">{region.funding}</div>
														<div className="text-aether-mist">Funding</div>
													</div>
												</div>
												<div className="mt-3 pt-3 border-t border-white/20">
													<div className="text-xs text-aether-mist mb-1">Trending:</div>
													<div className="flex flex-wrap gap-1 justify-center">
														{region.trending.map((tool) => (
															<span key={tool} className="text-xs px-2 py-1 bg-aether-holo/20 text-aether-holo rounded-full">
																{tool}
															</span>
														))}
													</div>
												</div>
											</div>
										</motion.div>
									</motion.div>
								))}
							</div>

							{/* Map Legend */}
							<div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg p-3 border border-white/20">
								<div className="text-xs text-aether-mist mb-2">Innovation Hubs</div>
								<div className="flex items-center space-x-4 text-xs">
									<div className="flex items-center">
										<div className="w-2 h-2 bg-blue-500 rounded-full mr-1"></div>
										<span className="text-white">Major</span>
									</div>
									<div className="flex items-center">
										<div className="w-2 h-2 bg-purple-500 rounded-full mr-1"></div>
										<span className="text-white">Emerging</span>
									</div>
									<div className="flex items-center">
										<div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
										<span className="text-white">Growing</span>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Activity Stream */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						viewport={{ once: true }}
						className="lg:col-span-1"
					>
						<div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm p-8">
							<div className="flex items-center justify-between mb-6">
								<h3 className="text-xl font-bold text-white">Live Activity</h3>
								<div className="flex items-center">
									<div className="w-2 h-2 bg-aether-holo rounded-full mr-2 animate-pulse"></div>
									<span className="text-xs text-aether-mist">Real-time</span>
								</div>
							</div>

							<div className="space-y-4 max-h-96 overflow-y-auto">
								{activityStream.map((activity, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
										viewport={{ once: true }}
										className="flex items-start p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
									>
										<div className="flex-shrink-0 mr-3">
											<div className={`w-2 h-2 rounded-full ${
												activity.type === 'launch' ? 'bg-green-500' :
												activity.type === 'funding' ? 'bg-blue-500' :
												activity.type === 'research' ? 'bg-purple-500' :
												activity.type === 'partnership' ? 'bg-yellow-500' : 'bg-orange-500'
											}`} />
										</div>
										<div className="flex-1 min-w-0">
											<div className="flex items-center justify-between mb-1">
												<span className="text-xs text-aether-mist">{activity.time}</span>
												<span className="text-xs px-2 py-1 bg-aether-holo/20 text-aether-holo rounded-full">
													{activity.region}
												</span>
											</div>
											<p className="text-sm text-white">{activity.event}</p>
										</div>
									</motion.div>
								))}
							</div>
						</div>
					</motion.div>
				</div>

				{/* Global Statistics */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					viewport={{ once: true }}
					className="mt-16"
				>
					<div className="rounded-3xl border border-white/10 bg-gradient-to-r from-aether-obsidian to-black/50 backdrop-blur-sm p-8">
						<h3 className="text-2xl font-bold text-white mb-6 text-center">Global AI Landscape</h3>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
							{[
								{ label: "Active Regions", value: "89", icon: "🌍" },
								{ label: "Total Companies", value: "2.1K", icon: "🏢" },
								{ label: "Global Funding", value: "$45.2B", icon: "💰" },
								{ label: "Daily Activity", value: "156", icon: "⚡" }
							].map((stat, index) => (
								<motion.div
									key={stat.label}
									initial={{ opacity: 0, scale: 0.8 }}
									whileInView={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
									viewport={{ once: true }}
									className="text-center"
								>
									<div className="text-3xl mb-2">{stat.icon}</div>
									<div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
									<div className="text-sm text-aether-mist">{stat.label}</div>
								</motion.div>
							))}
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
