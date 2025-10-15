"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export function CathedralOfCategories() {
	const realms = [
		{ 
			title: 'Creative Realm', 
			icon: '🎨',
			color: 'from-purple-500 to-pink-500',
			tools: 1247,
			items: [
				{ name: 'Visual Arts Sanctuary', tools: 78, description: 'Image generation, art creation, visual design' },
				{ name: 'Literary Arts Gallery', tools: 154, description: 'Writing assistants, content creation, storytelling' },
				{ name: 'Sonic Composition Studio', tools: 89, description: 'Music generation, audio production, sound design' },
				{ name: 'Cinematic Production Theater', tools: 67, description: 'Video creation, animation, film production' },
				{ name: '3D Asset Creation Lab', tools: 45, description: '3D modeling, asset generation, spatial design' },
				{ name: 'Design & UI/UX Atelier', tools: 92, description: 'Interface design, user experience, prototyping' }
			]
		},
		{ 
			title: 'Professional Domain', 
			icon: '💼',
			color: 'from-blue-500 to-cyan-500',
			tools: 2156,
			items: [
				{ name: 'Enterprise Intelligence Core', tools: 234, description: 'Business analytics, enterprise AI, corporate solutions' },
				{ name: 'Financial Analytics Terminal', tools: 156, description: 'Trading algorithms, risk analysis, fintech tools' },
				{ name: 'Legal Precision Matrix', tools: 89, description: 'Legal research, contract analysis, compliance' },
				{ name: 'Medical Diagnostics Hub', tools: 134, description: 'Healthcare AI, medical imaging, diagnostics' },
				{ name: 'Marketing & Growth Engine', tools: 198, description: 'SEO tools, advertising, growth hacking' },
				{ name: 'HR & Talent Intelligence', tools: 87, description: 'Recruitment, talent management, workforce analytics' }
			]
		},
		{ 
			title: 'Technical Universe', 
			icon: '⚙️',
			color: 'from-green-500 to-emerald-500',
			tools: 3456,
			items: [
				{ name: 'Code Synthesis Engine', tools: 287, description: 'Code generation, programming assistants, development' },
				{ name: 'Data Science Observatory', tools: 198, description: 'Data analysis, ML models, statistical tools' },
				{ name: 'DevOps Automation Nexus', tools: 145, description: 'Infrastructure, deployment, monitoring' },
				{ name: 'Security Intelligence Grid', tools: 167, description: 'Cybersecurity, threat detection, privacy' },
				{ name: 'API & Integration Hub', tools: 123, description: 'API management, integrations, webhooks' },
				{ name: 'Cloud & Infrastructure', tools: 98, description: 'Cloud services, serverless, containerization' }
			]
		},
		{ 
			title: 'Emerging Frontiers', 
			icon: '🚀',
			color: 'from-orange-500 to-red-500',
			tools: 567,
			items: [
				{ name: 'Quantum Computing Interface', tools: 34, description: 'Quantum algorithms, quantum ML, quantum simulation' },
				{ name: 'Neuro-Tech Integration', tools: 28, description: 'Brain-computer interfaces, neural networks' },
				{ name: 'Spatial Computing Suite', tools: 56, description: 'AR/VR, mixed reality, spatial AI' },
				{ name: 'Bio-Digital Fusion', tools: 42, description: 'Biotech AI, synthetic biology, bioinformatics' },
				{ name: 'Robotics & Automation', tools: 78, description: 'Robotic systems, autonomous agents, automation' },
				{ name: 'Climate & Sustainability', tools: 65, description: 'Environmental AI, climate modeling, green tech' }
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
						<span className="text-sm font-medium text-aether-holo tracking-wider">CATHEDRAL OF CATEGORIES</span>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
						Master Classification System
						<br />
						<span className="bg-gradient-to-r from-aether-holo to-white bg-clip-text text-transparent">
							347 Categories, 12,847 Tools
						</span>
					</h2>
					<p className="text-xl text-aether-mist max-w-3xl mx-auto">
						Every AI tool meticulously organized into a hierarchical taxonomy. 
						Navigate the universe of artificial intelligence with precision and elegance.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{realms.map((realm, realmIndex) => (
						<motion.div
							key={realm.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: realmIndex * 0.2 }}
							viewport={{ once: true }}
							className="group"
						>
							<div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm p-8 hover:border-white/20 transition-all duration-500 overflow-hidden">
								{/* Background Gradient */}
								<div className={`absolute inset-0 bg-gradient-to-br ${realm.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
								
								{/* Header */}
								<div className="relative z-10 mb-6">
									<div className="flex items-center justify-between mb-4">
										<div className="flex items-center">
											<div className="text-3xl mr-3">{realm.icon}</div>
											<div>
												<h3 className="text-xl font-bold text-white">{realm.title}</h3>
												<div className="text-sm text-aether-mist">{realm.tools.toLocaleString()} tools</div>
											</div>
										</div>
										<motion.div
											whileHover={{ scale: 1.1, rotate: 5 }}
											className="w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center"
										>
											<span className="text-lg">→</span>
										</motion.div>
									</div>
								</div>

								{/* Categories Grid */}
								<div className="relative z-10 grid grid-cols-1 gap-3">
									{realm.items.map((item, itemIndex) => (
										<motion.div
											key={item.name}
											initial={{ opacity: 0, x: -20 }}
											whileInView={{ opacity: 1, x: 0 }}
											transition={{ duration: 0.5, delay: realmIndex * 0.2 + itemIndex * 0.1 }}
											viewport={{ once: true }}
											whileHover={{ x: 8, scale: 1.02 }}
											className="group/item"
										>
											<Link href="/categories" className="block">
												<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
													<div className="flex items-center justify-between mb-2">
														<h4 className="text-sm font-semibold text-white group-hover/item:text-aether-holo transition-colors">
															{item.name}
														</h4>
														<div className="text-xs text-aether-mist bg-white/10 px-2 py-1 rounded-full">
															{item.tools}
														</div>
													</div>
													<p className="text-xs text-aether-mist leading-relaxed">
														{item.description}
													</p>
												</div>
											</Link>
										</motion.div>
									))}
								</div>

								{/* View All Button */}
								<motion.div
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									transition={{ duration: 0.5, delay: realmIndex * 0.2 + 0.5 }}
									viewport={{ once: true }}
									className="relative z-10 mt-6"
								>
									<Link href="/categories" className="block">
										<motion.div
											whileHover={{ scale: 1.02 }}
											whileTap={{ scale: 0.98 }}
											className="w-full py-3 px-4 rounded-xl border border-aether-holo/30 bg-aether-holo/10 backdrop-blur-sm text-center hover:bg-aether-holo/20 transition-all duration-300"
										>
											<span className="text-sm font-medium text-aether-holo">
												Explore All {realm.tools.toLocaleString()} Tools →
											</span>
										</motion.div>
									</Link>
								</motion.div>
							</div>
						</motion.div>
					))}
				</div>

				{/* Master Stats */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.8 }}
					viewport={{ once: true }}
					className="mt-16"
				>
					<div className="rounded-3xl border border-white/10 bg-gradient-to-r from-aether-obsidian to-black/50 backdrop-blur-sm p-8">
						<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
							{[
								{ label: "Total Categories", value: "347", icon: "📂" },
								{ label: "Total Tools", value: "12,847", icon: "🔧" },
								{ label: "Countries Covered", value: "89", icon: "🌍" },
								{ label: "Languages Supported", value: "47", icon: "🌐" }
							].map((stat, index) => (
								<motion.div
									key={stat.label}
									initial={{ opacity: 0, scale: 0.8 }}
									whileInView={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
									viewport={{ once: true }}
									className="text-center"
								>
									<div className="text-2xl mb-2">{stat.icon}</div>
									<div className="text-2xl font-bold text-white mb-1">
										{stat.value}
									</div>
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
