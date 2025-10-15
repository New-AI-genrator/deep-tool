"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ToolCard } from '../../components/ToolCard';

export function FeaturedPantheon() {
	const curatedSelections = [
		{
			title: "Tools of the Era",
			subtitle: "The most influential AI tools shaping our digital future",
			icon: "👑",
			color: "from-yellow-500 to-orange-500",
			tools: [
				{ 
					name: 'Midjourney', 
					slug: 'midjourney', 
					tagline: 'Imaginative image generation with unparalleled aesthetics and artistic vision.', 
					logoUrl: '/logos/midjourney.svg', 
					badges: ['nexus-verified', 'trending', 'award-winning'] as const,
					rating: 4.9,
					users: "15M+"
				},
				{ 
					name: 'Claude', 
					slug: 'claude', 
					tagline: 'Advanced language assistant for research, writing, and complex reasoning.', 
					logoUrl: '/logos/claude.svg', 
					badges: ['nexus-verified', 'enterprise'] as const,
					rating: 4.8,
					users: "8M+"
				},
				{ 
					name: 'Runway', 
					slug: 'runway', 
					tagline: 'Text-to-video and next-gen editing tools for creators and filmmakers.', 
					logoUrl: '/logos/runway.svg', 
					badges: ['nexus-verified', 'trending'] as const,
					rating: 4.7,
					users: "5M+"
				}
			]
		},
		{
			title: "Rising Stars",
			subtitle: "Breakthrough tools gaining momentum in the AI ecosystem",
			icon: "🚀",
			color: "from-purple-500 to-pink-500",
			tools: [
				{ 
					name: 'Perplexity AI', 
					slug: 'perplexity', 
					tagline: 'AI-powered search engine with real-time information and citations.', 
					logoUrl: '/logos/midjourney.svg', 
					badges: ['nexus-verified', 'trending'] as const,
					rating: 4.6,
					users: "2M+"
				},
				{ 
					name: 'Character.AI', 
					slug: 'character-ai', 
					tagline: 'Create and chat with AI characters for entertainment and education.', 
					logoUrl: '/logos/claude.svg', 
					badges: ['nexus-verified'] as const,
					rating: 4.5,
					users: "3M+"
				},
				{ 
					name: 'Notion AI', 
					slug: 'notion-ai', 
					tagline: 'Integrated AI writing assistant within your workspace.', 
					logoUrl: '/logos/runway.svg', 
					badges: ['nexus-verified', 'enterprise'] as const,
					rating: 4.4,
					users: "10M+"
				}
			]
		},
		{
			title: "Enterprise Elite",
			subtitle: "Corporate-grade solutions trusted by Fortune 500 companies",
			icon: "🏢",
			color: "from-blue-500 to-cyan-500",
			tools: [
				{ 
					name: 'OpenAI GPT-4', 
					slug: 'gpt-4', 
					tagline: 'Most advanced language model with enterprise security and compliance.', 
					logoUrl: '/logos/midjourney.svg', 
					badges: ['nexus-verified', 'enterprise', 'award-winning'] as const,
					rating: 4.9,
					users: "100M+"
				},
				{ 
					name: 'Microsoft Copilot', 
					slug: 'copilot', 
					tagline: 'AI assistant integrated across Microsoft 365 enterprise suite.', 
					logoUrl: '/logos/claude.svg', 
					badges: ['nexus-verified', 'enterprise'] as const,
					rating: 4.7,
					users: "50M+"
				},
				{ 
					name: 'Salesforce Einstein', 
					slug: 'einstein', 
					tagline: 'AI-powered CRM with predictive analytics and automation.', 
					logoUrl: '/logos/runway.svg', 
					badges: ['nexus-verified', 'enterprise'] as const,
					rating: 4.6,
					users: "25M+"
				}
			]
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
						<span className="text-sm font-medium text-aether-holo tracking-wider">FEATURED PANTHEON</span>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
						Curator's Selection
						<br />
						<span className="bg-gradient-to-r from-aether-holo to-white bg-clip-text text-transparent">
							Handpicked Excellence
						</span>
					</h2>
					<p className="text-xl text-aether-mist max-w-3xl mx-auto">
						Our expert curators have meticulously selected the finest AI tools across categories. 
						Each tool represents the pinnacle of innovation and utility in its domain.
					</p>
				</motion.div>

				<div className="space-y-16">
					{curatedSelections.map((selection, selectionIndex) => (
						<motion.div
							key={selection.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: selectionIndex * 0.2 }}
							viewport={{ once: true }}
							className="group"
						>
							<div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm p-8 hover:border-white/20 transition-all duration-500 overflow-hidden">
								{/* Background Gradient */}
								<div className={`absolute inset-0 bg-gradient-to-br ${selection.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
								
								{/* Header */}
								<div className="relative z-10 mb-8">
									<div className="flex items-center justify-between mb-4">
										<div className="flex items-center">
											<div className="text-4xl mr-4">{selection.icon}</div>
											<div>
												<h3 className="text-2xl font-bold text-white">{selection.title}</h3>
												<p className="text-aether-mist">{selection.subtitle}</p>
											</div>
										</div>
										<motion.div
											whileHover={{ scale: 1.1, rotate: 5 }}
											className="w-16 h-16 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center"
										>
											<span className="text-xl">→</span>
										</motion.div>
									</div>
								</div>

								{/* Tools Grid */}
								<div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
									{selection.tools.map((tool, toolIndex) => (
										<motion.div
											key={tool.slug}
											initial={{ opacity: 0, scale: 0.9 }}
											whileInView={{ opacity: 1, scale: 1 }}
											transition={{ duration: 0.6, delay: selectionIndex * 0.2 + toolIndex * 0.1 }}
											viewport={{ once: true }}
											whileHover={{ y: -8, scale: 1.02 }}
											className="group/tool"
										>
											<Link href={`/tools/${tool.slug}`} className="block">
												<div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-white/20 hover:bg-white/10 transition-all duration-300 overflow-hidden">
													{/* Tool Header */}
													<div className="flex items-start justify-between mb-4">
														<div className="flex items-center">
															<div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mr-3">
																<img src={tool.logoUrl} alt={tool.name} className="w-8 h-8" />
															</div>
															<div>
																<h4 className="text-lg font-bold text-white group-hover/tool:text-aether-holo transition-colors">
																	{tool.name}
																</h4>
																<div className="flex items-center mt-1">
																	<div className="flex items-center mr-3">
																		<span className="text-yellow-400 text-sm">★</span>
																		<span className="text-sm text-aether-mist ml-1">{tool.rating}</span>
																	</div>
																	<span className="text-xs text-aether-mist">{tool.users} users</span>
																</div>
															</div>
														</div>
														<div className="flex flex-wrap gap-1">
															{tool.badges.map((badge) => (
																<span
																	key={badge}
																	className="text-xs px-2 py-1 rounded-full bg-aether-holo/20 text-aether-holo border border-aether-holo/30"
																>
																	{badge.replace('-', ' ')}
																</span>
															))}
														</div>
													</div>

													{/* Tool Description */}
													<p className="text-sm text-aether-mist leading-relaxed mb-4">
														{tool.tagline}
													</p>

													{/* Action Button */}
													<motion.div
														whileHover={{ scale: 1.05 }}
														whileTap={{ scale: 0.95 }}
														className="w-full py-2 px-4 rounded-xl border border-aether-holo/30 bg-aether-holo/10 backdrop-blur-sm text-center hover:bg-aether-holo/20 transition-all duration-300"
													>
														<span className="text-sm font-medium text-aether-holo">
															Explore Tool →
														</span>
													</motion.div>
												</div>
											</Link>
										</motion.div>
									))}
								</div>

								{/* View All Button */}
								<motion.div
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									transition={{ duration: 0.5, delay: selectionIndex * 0.2 + 0.5 }}
									viewport={{ once: true }}
									className="relative z-10 mt-8 text-center"
								>
									<Link href="/tools" className="inline-block">
										<motion.div
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
											className="px-8 py-3 rounded-xl border border-aether-holo/30 bg-aether-holo/10 backdrop-blur-sm hover:bg-aether-holo/20 transition-all duration-300"
										>
											<span className="text-sm font-medium text-aether-holo">
												View All {selection.title} →
											</span>
										</motion.div>
									</Link>
								</motion.div>
							</div>
						</motion.div>
					))}
				</div>

				{/* Premium CTA */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					viewport={{ once: true }}
					className="mt-16 text-center"
				>
					<div className="rounded-3xl border border-white/10 bg-gradient-to-r from-aether-obsidian to-black/50 backdrop-blur-sm p-8">
						<h3 className="text-2xl font-bold text-white mb-4">
							Discover Your Perfect AI Stack
						</h3>
						<p className="text-aether-mist mb-6 max-w-2xl mx-auto">
							Use our AI-powered recommendation engine to find the ideal combination of tools for your specific needs and use cases.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="px-8 py-4 bg-gradient-to-r from-aether-holo to-aether-holo/80 text-black font-semibold rounded-2xl hover:shadow-holo transition-all duration-300"
							>
								Get Personalized Recommendations
							</motion.button>
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="px-8 py-4 border-2 border-aether-holo/50 text-aether-holo font-semibold rounded-2xl hover:bg-aether-holo/10 transition-all duration-300 backdrop-blur-sm"
							>
								Browse All Tools
							</motion.button>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
