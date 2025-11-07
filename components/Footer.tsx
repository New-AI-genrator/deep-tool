"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

export function Footer() {
	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);
		return () => clearInterval(timer);
	}, []);

	const footerVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				staggerChildren: 0.1,
				ease: "easeOut"
			}
		}
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: "easeOut" }
		}
	};

	return (
		<motion.footer 
			className="relative mt-20 overflow-hidden border-t border-white/10 bg-gradient-to-b from-aether-obsidian to-black"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			variants={footerVariants}
		>
			{/* Animated Background */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 animate-pulse" />
				<svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
					{Array.from({ length: 20 }, (_, i) => (
						<motion.circle
							key={i}
							cx={Math.random() * 100}
							cy={Math.random() * 100}
							r="0.5"
							fill="url(#footerGradient)"
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 0.3, scale: 1 }}
							transition={{ duration: 2, delay: i * 0.1, repeat: Infinity, repeatType: "reverse" }}
						/>
					))}
					<defs>
						<radialGradient id="footerGradient" cx="50%" cy="50%" r="50%">
							<stop offset="0%" stopColor="#00E5FF" stopOpacity="0.8" />
							<stop offset="100%" stopColor="#C0C0C0" stopOpacity="0.3" />
						</radialGradient>
					</defs>
				</svg>
			</div>

			<div className="relative z-10 mx-auto max-w-7xl px-4 py-16 md:px-6">
				{/* Main Footer Content */}
				<div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
					{/* Brand Section */}
					<motion.div variants={itemVariants} className="lg:col-span-1">
						<div className="flex items-center space-x-3 mb-6">
							<div className="relative">
								<div className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.6)]" />
								<div className="absolute inset-0 h-3 w-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 animate-ping opacity-75" />
							</div>
							<h3 className="text-2xl font-bold text-white">Aether Nexus</h3>
						</div>
						<p className="text-aether-mist mb-6 leading-relaxed">
							The ultimate destination for discovering and orchestrating premium AI tools. 
							Experience luxury-grade intelligence at your fingertips.
						</p>
						<div className="flex space-x-4">
							{['Twitter', 'LinkedIn', 'GitHub', 'Discord'].map((social, index) => (
								<motion.div
									key={social}
									whileHover={{ scale: 1.1, y: -2 }}
									whileTap={{ scale: 0.95 }}
									className="group cursor-pointer"
								>
									<div className="h-10 w-10 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
										<span className="text-aether-mist group-hover:text-white text-sm font-medium">
											{social[0]}
										</span>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* Explore Section */}
					<motion.div variants={itemVariants}>
						<h4 className="text-lg font-semibold text-white mb-6 relative">
							Explore
							<div className="absolute -bottom-2 left-0 h-0.5 w-8 bg-gradient-to-r from-blue-400 to-cyan-400" />
						</h4>
						<ul className="space-y-3">
							{[
								{ name: 'Categories', href: '/categories' },
								{ name: 'AI Tools', href: '/tools' },
								{ name: 'Best Tools', href: '/best' },
								{ name: 'Blog', href: '/blog' },
								{ name: 'Intelligence', href: '/intelligence' },
								{ name: 'Playground', href: '/playground' }
							].map((item, index) => (
								<motion.li
									key={item.name}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									whileHover={{ x: 5 }}
								>
									<Link 
										href={item.href} 
										className="text-aether-mist hover:text-white transition-colors duration-300 flex items-center group"
									>
										<span className="w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 group-hover:w-4 mr-0 group-hover:mr-2" />
										{item.name}
									</Link>
								</motion.li>
							))}
						</ul>
					</motion.div>

					{/* Company Section */}
					<motion.div variants={itemVariants}>
						<h4 className="text-lg font-semibold text-white mb-6 relative">
							Company
							<div className="absolute -bottom-2 left-0 h-0.5 w-8 bg-gradient-to-r from-purple-400 to-pink-400" />
						</h4>
						<ul className="space-y-3">
							{[
								{ name: 'About Us', href: '/about' },
								{ name: 'Pricing', href: '/pricing' },
								{ name: 'Contact', href: '/contact' },
								{ name: 'Careers', href: '/careers' },
								{ name: 'Enterprise', href: '/enterprise' },
								{ name: 'Sitemap', href: '/sitemap' }
							].map((item, index) => (
								<motion.li
									key={item.name}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									whileHover={{ x: 5 }}
								>
									<Link 
										href={item.href} 
										className="text-aether-mist hover:text-white transition-colors duration-300 flex items-center group"
									>
										<span className="w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-4 mr-0 group-hover:mr-2" />
										{item.name}
									</Link>
								</motion.li>
							))}
						</ul>
					</motion.div>

					{/* Legal & Support Section */}
					<motion.div variants={itemVariants}>
						<h4 className="text-lg font-semibold text-white mb-6 relative">
							Legal & Support
							<div className="absolute -bottom-2 left-0 h-0.5 w-8 bg-gradient-to-r from-green-400 to-emerald-400" />
						</h4>
						<ul className="space-y-3">
							{[
								{ name: 'Privacy Policy', href: '/privacy' },
								{ name: 'Terms of Service', href: '/terms' },
								{ name: 'Cookie Policy', href: '/cookies' },
								{ name: 'DMCA', href: '/dmca' },
								{ name: 'Support', href: '/support' },
								{ name: 'FAQ', href: '/faq' }
							].map((item, index) => (
								<motion.li
									key={item.name}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									whileHover={{ x: 5 }}
								>
									<Link 
										href={item.href} 
										className="text-aether-mist hover:text-white transition-colors duration-300 flex items-center group"
									>
										<span className="w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 transition-all duration-300 group-hover:w-4 mr-0 group-hover:mr-2" />
										{item.name}
									</Link>
								</motion.li>
							))}
						</ul>
					</motion.div>

					{/* Search & AI Section */}
					<motion.div variants={itemVariants}>
						<h4 className="text-lg font-semibold text-white mb-6 relative">
							Search & AI
							<div className="absolute -bottom-2 left-0 h-0.5 w-8 bg-gradient-to-r from-yellow-400 to-orange-400" />
						</h4>
						<ul className="space-y-3">
							{[
								{ name: 'Basic Search', href: '/search' },
								{ name: 'Advanced Search', href: '/advanced-search' },
								{ name: 'AI Assistant', href: '/chatbot' },
								{ name: 'Categories', href: '/categories' },
								{ name: 'Trending Tools', href: '/best' }
							].map((item, index) => (
								<motion.li
									key={item.name}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									whileHover={{ x: 5 }}
								>
									<Link 
										href={item.href} 
										className="text-aether-mist hover:text-white transition-colors duration-300 flex items-center group"
									>
										{item.name === 'AI Assistant' && (
											<ChatBubbleLeftRightIcon className="w-4 h-4 mr-2 text-blue-400" />
										)}
										<span className="w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 transition-all duration-300 group-hover:w-4 mr-0 group-hover:mr-2" />
										{item.name}
									</Link>
								</motion.li>
							))}
						</ul>
					</motion.div>
				</div>

				{/* Newsletter Section */}
				<motion.div 
					variants={itemVariants}
					className="mt-16 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-8"
				>
					<div className="text-center">
						<h3 className="text-2xl font-bold text-white mb-4">
							Stay Ahead of the AI Revolution
						</h3>
						<p className="text-aether-mist mb-6 max-w-2xl mx-auto">
							Get exclusive access to the latest AI tools, insights, and updates delivered directly to your inbox.
						</p>
						<form 
							onSubmit={(e) => {
								e.preventDefault();
								const email = (e.target as HTMLFormElement).email.value;
								window.location.href = `mailto:huzaifakarim612@gmail.com?subject=Newsletter Subscription&body=New subscriber: ${email}`;
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
								className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 w-full sm:w-auto"
							>
								Subscribe
							</motion.button>
						</form>
					</div>
				</motion.div>

				{/* Bottom Bar */}
				<motion.div 
					variants={itemVariants}
					className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center"
				>
					<div className="text-aether-mist text-sm mb-4 md:mb-0 text-center md:text-left">
						© {currentTime.getFullYear()} Aether Nexus. All rights reserved.
					</div>
					<div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-aether-mist text-center">
						<span className="flex items-center">
							<div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
							All systems operational
						</span>
						<span>Made with ❤️ for the AI community</span>
					</div>
				</motion.div>
			</div>
		</motion.footer>
	);
}