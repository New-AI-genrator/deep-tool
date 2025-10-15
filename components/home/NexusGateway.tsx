"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function NexusGateway() {
	const [counters, setCounters] = useState({
		tools: 0,
		categories: 0,
		countries: 0,
		updates: 0
	});

	const targetCounters = {
		tools: 12847,
		categories: 347,
		countries: 89,
		updates: 156
	};

	useEffect(() => {
		const animateCounters = () => {
			const duration = 2000;
			const steps = 60;
			const stepDuration = duration / steps;

			let step = 0;
			const timer = setInterval(() => {
				step++;
				const progress = step / steps;
				const easeOut = 1 - Math.pow(1 - progress, 3);

				setCounters({
					tools: Math.floor(targetCounters.tools * easeOut),
					categories: Math.floor(targetCounters.categories * easeOut),
					countries: Math.floor(targetCounters.countries * easeOut),
					updates: Math.floor(targetCounters.updates * easeOut)
				});

				if (step >= steps) {
					clearInterval(timer);
					setCounters(targetCounters);
				}
			}, stepDuration);

			return () => clearInterval(timer);
		};

		const timeout = setTimeout(animateCounters, 500);
		return () => clearTimeout(timeout);
	}, []);

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
						<span className="text-sm font-medium text-aether-holo tracking-wider">THE NEXUS GATEWAY</span>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
						The World's Most Sophisticated
						<br />
						<span className="bg-gradient-to-r from-aether-holo to-white bg-clip-text text-transparent">
							AI Tools Directory
						</span>
					</h2>
					<p className="text-xl text-aether-mist max-w-3xl mx-auto">
						Every AI tool in existence, perfectly organized and expertly reviewed. 
						The definitive digital compass for navigating the future of artificial intelligence.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Interactive Stats */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						viewport={{ once: true }}
						className="space-y-8"
					>
						<div className="grid grid-cols-2 gap-6">
							{[
								{ label: "AI Tools", value: counters.tools.toLocaleString(), icon: "🔧", color: "from-blue-500 to-cyan-500" },
								{ label: "Categories", value: counters.categories, icon: "📂", color: "from-purple-500 to-pink-500" },
								{ label: "Countries", value: counters.countries, icon: "🌍", color: "from-green-500 to-emerald-500" },
								{ label: "Daily Updates", value: counters.updates, icon: "⚡", color: "from-yellow-500 to-orange-500" }
							].map((stat, index) => (
								<motion.div
									key={stat.label}
									initial={{ opacity: 0, scale: 0.8 }}
									whileInView={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
									viewport={{ once: true }}
									whileHover={{ scale: 1.05, y: -5 }}
									className="relative group"
								>
									<div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300"
										style={{ background: `linear-gradient(135deg, ${stat.color.split(' ')[0]?.replace('from-', '') || '#3B82F6'}, ${stat.color.split(' ')[1]?.replace('to-', '') || '#06B6D4'})` }}
									/>
									<div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-white/20 transition-all duration-300">
										<div className="flex items-center justify-between mb-3">
											<div className="text-2xl">{stat.icon}</div>
											<div className="text-xs text-aether-mist">{stat.label}</div>
										</div>
										<div className="text-3xl font-bold text-white">
											{stat.value}
											{stat.label === "AI Tools" && <span className="text-aether-holo">+</span>}
										</div>
									</div>
								</motion.div>
							))}
						</div>

						{/* Real-time Activity Feed */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.6 }}
							viewport={{ once: true }}
							className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
						>
							<div className="flex items-center justify-between mb-4">
								<h3 className="text-lg font-semibold text-white">Live Activity</h3>
								<div className="flex items-center">
									<div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
									<span className="text-xs text-aether-mist">Real-time</span>
								</div>
							</div>
							<div className="space-y-3">
								{[
									"New tool: QuantumCode AI added to Code Synthesis",
									"Update: Midjourney v6.1 released",
									"Review: Claude 3.5 Sonnet analysis complete",
									"Trending: Runway ML usage up 340%"
								].map((activity, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
										viewport={{ once: true }}
										className="flex items-center text-sm text-aether-mist"
									>
										<div className="w-1 h-1 bg-aether-holo rounded-full mr-3"></div>
										{activity}
									</motion.div>
								))}
							</div>
						</motion.div>
					</motion.div>

					{/* 3D Globe Visualization */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						viewport={{ once: true }}
						className="relative"
					>
						<div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-aether-obsidian to-black/50 backdrop-blur-sm p-12 overflow-hidden">
							{/* Animated Background Pattern */}
							<div className="absolute inset-0 opacity-20">
								<svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
									{Array.from({ length: 50 }, (_, i) => (
										<motion.circle
											key={i}
											cx={Math.random() * 100}
											cy={Math.random() * 100}
											r="0.5"
											fill="url(#globeGradient)"
											initial={{ opacity: 0, scale: 0 }}
											animate={{ opacity: 1, scale: 1 }}
											transition={{ duration: 1, delay: i * 0.02 }}
										/>
									))}
									<defs>
										<radialGradient id="globeGradient" cx="50%" cy="50%" r="50%">
											<stop offset="0%" stopColor="#00E5FF" stopOpacity="0.8" />
											<stop offset="100%" stopColor="#C0C0C0" stopOpacity="0.3" />
										</radialGradient>
									</defs>
								</svg>
							</div>

							{/* Globe Container */}
							<div className="relative z-10 flex items-center justify-center h-80">
								<motion.div
									animate={{ rotate: 360 }}
									transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
									className="relative w-64 h-64"
								>
									{/* Globe Sphere */}
									<div className="absolute inset-0 rounded-full border-2 border-aether-holo/30 bg-gradient-to-br from-aether-holo/20 to-transparent backdrop-blur-sm">
										{/* Grid Lines */}
										<svg className="w-full h-full" viewBox="0 0 100 100">
											{Array.from({ length: 8 }, (_, i) => (
												<g key={i}>
													<motion.line
														x1="0" y1={i * 12.5} x2="100" y2={i * 12.5}
														stroke="rgba(0,229,255,0.3)" strokeWidth="0.5"
														initial={{ pathLength: 0 }}
														animate={{ pathLength: 1 }}
														transition={{ duration: 2, delay: i * 0.1 }}
													/>
													<motion.line
														x1={i * 12.5} y1="0" x2={i * 12.5} y2="100"
														stroke="rgba(0,229,255,0.3)" strokeWidth="0.5"
														initial={{ pathLength: 0 }}
														animate={{ pathLength: 1 }}
														transition={{ duration: 2, delay: i * 0.1 }}
													/>
												</g>
											))}
										</svg>
									</div>

									{/* Data Points */}
									{Array.from({ length: 20 }, (_, i) => (
										<motion.div
											key={i}
											className="absolute w-2 h-2 bg-aether-holo rounded-full"
											style={{
												left: `${20 + Math.random() * 60}%`,
												top: `${20 + Math.random() * 60}%`,
											}}
											animate={{
												scale: [1, 1.5, 1],
												opacity: [0.6, 1, 0.6],
											}}
											transition={{
												duration: 2 + Math.random(),
												repeat: Infinity,
												delay: Math.random() * 2,
											}}
										/>
									))}
								</motion.div>
							</div>

							{/* Globe Label */}
							<div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center">
								<div className="text-sm font-semibold text-white mb-1">Global AI Distribution</div>
								<div className="text-xs text-aether-mist">Real-time tool locations worldwide</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
