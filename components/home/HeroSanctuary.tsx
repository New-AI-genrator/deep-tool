"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function HeroSanctuary() {
	const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

	useEffect(() => {
		const generateParticles = () => {
			const newParticles = Array.from({ length: 50 }, (_, i) => ({
				id: i,
				x: Math.random() * 100,
				y: Math.random() * 100,
				delay: Math.random() * 2
			}));
			setParticles(newParticles);
		};
		generateParticles();
	}, []);

	return (
		<section className="relative min-h-screen overflow-hidden flex items-center justify-center" style={{
			background: `
				radial-gradient(ellipse 1200px 800px at 50% 0%, rgba(0,229,255,0.15), transparent 70%),
				radial-gradient(ellipse 1000px 600px at 0% 100%, rgba(229,228,226,0.12), transparent 70%),
				radial-gradient(ellipse 800px 400px at 100% 50%, rgba(192,192,192,0.08), transparent 70%),
				linear-gradient(180deg, #0A0B12 0%, #000000 100%)
			`
		}}>
			{/* Animated Particle Background */}
			<div className="absolute inset-0">
				{particles.map((particle) => (
					<motion.div
						key={particle.id}
						className="absolute w-1 h-1 bg-gradient-to-r from-aether-holo to-white rounded-full opacity-60"
						style={{
							left: `${particle.x}%`,
							top: `${particle.y}%`,
						}}
						animate={{
							y: [0, -20, 0],
							opacity: [0.3, 0.8, 0.3],
							scale: [0.8, 1.2, 0.8],
						}}
						transition={{
							duration: 3 + Math.random() * 2,
							repeat: Infinity,
							delay: particle.delay,
							ease: "easeInOut"
						}}
					/>
				))}
			</div>

			{/* Neural Network Lines */}
			<svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
				{Array.from({ length: 20 }, (_, i) => (
					<motion.line
						key={i}
						x1={Math.random() * 100}
						y1={Math.random() * 100}
						x2={Math.random() * 100}
						y2={Math.random() * 100}
						stroke="url(#gradient)"
						strokeWidth="0.1"
						initial={{ pathLength: 0 }}
						animate={{ pathLength: 1 }}
						transition={{ duration: 2, delay: i * 0.1 }}
					/>
				))}
				<defs>
					<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" stopColor="#00E5FF" stopOpacity="0.8" />
						<stop offset="100%" stopColor="#C0C0C0" stopOpacity="0.4" />
					</linearGradient>
				</defs>
			</svg>

			{/* Main Content */}
			<div className="relative z-10 text-center max-w-6xl mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: "easeOut" }}
				>
					{/* Brand Badge */}
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="inline-flex items-center px-4 py-2 rounded-full border border-aether-holo/30 bg-aether-holo/10 backdrop-blur-sm mb-8"
					>
						<div className="w-2 h-2 bg-aether-holo rounded-full mr-2 animate-pulse"></div>
						<span className="text-sm font-medium text-aether-holo tracking-wider">AETHERIUM NEXUS</span>
					</motion.div>

					{/* Main Headline */}
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.4 }}
						className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6"
						style={{
							fontFamily: 'system-ui, -apple-system, sans-serif',
							fontWeight: 800,
							letterSpacing: '-0.02em',
							lineHeight: 0.9
						}}
					>
						THE AI UNIVERSE
						<br />
						<span className="bg-gradient-to-r from-aether-holo via-white to-aether-mist bg-clip-text text-transparent">
							CURATED
						</span>
					</motion.h1>

					{/* Subtitle */}
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.6 }}
						className="text-xl md:text-2xl text-aether-mist mb-8 max-w-3xl mx-auto leading-relaxed"
					>
						Every AI tool in existence, perfectly organized and expertly reviewed. 
						<br />
						<span className="text-white font-medium">The Louvre of AI Tools.</span>
					</motion.p>

					{/* CTA Buttons */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.8 }}
						className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
					>
						<motion.button
							whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,229,255,0.3)" }}
							whileTap={{ scale: 0.95 }}
							className="px-8 py-4 bg-gradient-to-r from-aether-holo to-aether-holo/80 text-black font-semibold rounded-2xl text-lg hover:shadow-holo transition-all duration-300"
						>
							Explore 12,847 Tools
						</motion.button>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="px-8 py-4 border-2 border-aether-holo/50 text-aether-holo font-semibold rounded-2xl text-lg hover:bg-aether-holo/10 transition-all duration-300 backdrop-blur-sm"
						>
							Watch Demo
						</motion.button>
					</motion.div>

					{/* Stats Bar */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 1 }}
						className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
					>
						{[
							{ label: "AI Tools", value: "12,847", suffix: "+" },
							{ label: "Categories", value: "347", suffix: "" },
							{ label: "Countries", value: "89", suffix: "" },
							{ label: "Updates", value: "Daily", suffix: "" }
						].map((stat, index) => (
							<motion.div
								key={stat.label}
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
								className="text-center"
							>
								<div className="text-2xl md:text-3xl font-bold text-white mb-1">
									{stat.value}
									<span className="text-aether-holo">{stat.suffix}</span>
								</div>
								<div className="text-sm text-aether-mist">{stat.label}</div>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</div>

			{/* Magnetic Scroll Indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 1.5 }}
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
			>
				<motion.div
					animate={{ y: [0, 8, 0] }}
					transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
					className="flex flex-col items-center text-aether-mist"
				>
					<div className="text-xs mb-2 tracking-wider">SCROLL TO EXPLORE</div>
					<motion.div
						animate={{ scale: [1, 1.2, 1] }}
						transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
						className="w-6 h-10 border-2 border-aether-holo/50 rounded-full flex justify-center"
					>
						<motion.div
							animate={{ y: [0, 12, 0] }}
							transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
							className="w-1 h-3 bg-aether-holo rounded-full mt-2"
						/>
					</motion.div>
				</motion.div>
			</motion.div>
		</section>
	);
}
