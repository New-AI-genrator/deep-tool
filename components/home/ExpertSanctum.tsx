"use client";

import { motion } from 'framer-motion';

export function ExpertSanctum() {
	const testimonials = [
		{
			name: "Dr. Sarah Chen",
			title: "CTO, Global Enterprise",
			company: "Fortune 500 Tech Company",
			avatar: "👩‍💼",
			quote: "Aetherium Nexus has become our definitive resource for AI tool evaluation. The curation quality and depth of analysis is unmatched in the industry.",
			rating: 5
		},
		{
			name: "Marcus Rodriguez",
			title: "AI Research Director",
			company: "Stanford AI Lab",
			avatar: "👨‍🔬",
			quote: "The platform's comprehensive coverage and expert insights have accelerated our research by months. It's like having a team of AI experts on demand.",
			rating: 5
		},
		{
			name: "Elena Volkov",
			title: "Product Manager",
			company: "Leading AI Startup",
			avatar: "👩‍💻",
			quote: "We've discovered game-changing tools through Aetherium Nexus that we never would have found otherwise. The recommendation engine is incredibly accurate.",
			rating: 5
		}
	];

	const researchHighlights = [
		{
			title: "AI Tool Adoption Patterns in Enterprise",
			authors: "Dr. Chen, Dr. Rodriguez, et al.",
			journal: "Nature Machine Intelligence",
			impact: "High",
			date: "2024",
			abstract: "Comprehensive analysis of enterprise AI tool adoption across 500+ companies, revealing key success factors and implementation strategies."
		},
		{
			title: "Comparative Analysis of Large Language Models",
			authors: "AI Research Consortium",
			journal: "Journal of AI Research",
			impact: "High",
			date: "2024",
			abstract: "Benchmark study comparing performance, efficiency, and cost-effectiveness of leading LLMs across diverse use cases."
		},
		{
			title: "The Future of AI Tool Ecosystems",
			authors: "MIT Technology Review",
			journal: "MIT Technology Review",
			impact: "Medium",
			date: "2024",
			abstract: "Exploration of emerging trends in AI tool development and their implications for the future of work and creativity."
		}
	];

	const universitySpotlights = [
		{
			name: "Stanford AI Lab",
			location: "Stanford, CA",
			focus: "Natural Language Processing",
			projects: 12,
			partnerships: 8
		},
		{
			name: "MIT CSAIL",
			location: "Cambridge, MA",
			focus: "Computer Vision & Robotics",
			projects: 15,
			partnerships: 12
		},
		{
			name: "DeepMind Research",
			location: "London, UK",
			focus: "Reinforcement Learning",
			projects: 8,
			partnerships: 6
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
						<span className="text-sm font-medium text-aether-holo tracking-wider">EXPERT SANCTUM</span>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
						Industry Authority
						<br />
						<span className="bg-gradient-to-r from-aether-holo to-white bg-clip-text text-transparent">
							Trusted by Leaders
						</span>
					</h2>
					<p className="text-xl text-aether-mist max-w-3xl mx-auto">
						Join thousands of industry leaders, researchers, and innovators who rely on Aetherium Nexus 
						for their AI tool discovery and evaluation needs.
					</p>
				</motion.div>

				{/* Testimonials */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					viewport={{ once: true }}
					className="mb-16"
				>
					<h3 className="text-2xl font-bold text-white mb-8 text-center">What Industry Leaders Say</h3>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{testimonials.map((testimonial, index) => (
							<motion.div
								key={testimonial.name}
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
								viewport={{ once: true }}
								whileHover={{ y: -8, scale: 1.02 }}
								className="group"
							>
								<div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm p-6 hover:border-white/20 transition-all duration-300">
									<div className="flex items-center mb-4">
										<div className="text-3xl mr-3">{testimonial.avatar}</div>
										<div>
											<h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
											<div className="text-sm text-aether-mist">{testimonial.title}</div>
											<div className="text-xs text-aether-holo">{testimonial.company}</div>
										</div>
									</div>
									<div className="flex items-center mb-3">
										{Array.from({ length: testimonial.rating }, (_, i) => (
											<span key={i} className="text-yellow-400 text-sm">★</span>
										))}
									</div>
									<blockquote className="text-sm text-aether-mist leading-relaxed italic">
										"{testimonial.quote}"
									</blockquote>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Research Highlights */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					viewport={{ once: true }}
					className="mb-16"
				>
					<h3 className="text-2xl font-bold text-white mb-8 text-center">Research Highlights</h3>
					<div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm p-8">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							{researchHighlights.map((research, index) => (
								<motion.div
									key={research.title}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
									viewport={{ once: true }}
									whileHover={{ x: 8, scale: 1.02 }}
									className="group"
								>
									<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
										<div className="flex items-center justify-between mb-3">
											<span className={`text-xs px-2 py-1 rounded-full ${
												research.impact === 'High' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
												research.impact === 'Medium' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
												'bg-green-500/20 text-green-400 border border-green-500/30'
											}`}>
												{research.impact} Impact
											</span>
											<span className="text-xs text-aether-mist">{research.date}</span>
										</div>
										<h4 className="text-sm font-bold text-white group-hover:text-aether-holo transition-colors mb-2">
											{research.title}
										</h4>
										<div className="text-xs text-aether-mist mb-3">
											{research.authors} • {research.journal}
										</div>
										<p className="text-xs text-aether-mist leading-relaxed">
											{research.abstract}
										</p>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</motion.div>

				{/* University Spotlights */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					viewport={{ once: true }}
					className="mb-16"
				>
					<h3 className="text-2xl font-bold text-white mb-8 text-center">Academic Partnerships</h3>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{universitySpotlights.map((university, index) => (
							<motion.div
								key={university.name}
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
								viewport={{ once: true }}
								whileHover={{ y: -8, scale: 1.02 }}
								className="group"
							>
								<div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm p-6 hover:border-white/20 transition-all duration-300">
									<div className="text-center">
										<div className="text-4xl mb-4">🎓</div>
										<h4 className="text-lg font-bold text-white group-hover:text-aether-holo transition-colors mb-2">
											{university.name}
										</h4>
										<div className="text-sm text-aether-mist mb-3">{university.location}</div>
										<div className="text-xs text-aether-holo mb-4">{university.focus}</div>
										<div className="grid grid-cols-2 gap-4 text-center">
											<div>
												<div className="text-lg font-bold text-white">{university.projects}</div>
												<div className="text-xs text-aether-mist">Projects</div>
											</div>
											<div>
												<div className="text-lg font-bold text-white">{university.partnerships}</div>
												<div className="text-xs text-aether-mist">Partnerships</div>
											</div>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Enterprise Adoption Stats */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.8 }}
					viewport={{ once: true }}
					className="text-center"
				>
					<div className="rounded-3xl border border-white/10 bg-gradient-to-r from-aether-obsidian to-black/50 backdrop-blur-sm p-8">
						<h3 className="text-2xl font-bold text-white mb-6">Enterprise Adoption</h3>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
							{[
								{ label: "Fortune 500 Companies", value: "89%", icon: "🏢" },
								{ label: "Universities", value: "156", icon: "🎓" },
								{ label: "Research Labs", value: "234", icon: "🔬" },
								{ label: "Startups", value: "2.1K", icon: "🚀" }
							].map((stat, index) => (
								<motion.div
									key={stat.label}
									initial={{ opacity: 0, scale: 0.8 }}
									whileInView={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
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
