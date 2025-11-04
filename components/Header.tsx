"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const navItems = [
		{ name: 'Home', href: '/', exact: true },
		{ name: 'Categories', href: '/categories' },
		{ name: 'Blog', href: '/blog' },
		{ name: 'Tools', href: '/tools' },
		{ name: 'Best', href: '/best' },
		{ name: 'Intelligence', href: '/intelligence' },
		{ name: 'Pricing', href: '/pricing' },
		{ name: 'Ads', href: '/ad-example' } // Added Ad Example link
	];

	return (
		<motion.header 
			className={`sticky top-0 z-50 transition-all duration-300 ${
				scrolled 
					? 'bg-aether-obsidian/95 backdrop-blur-md border-b border-white/20 shadow-2xl' 
					: 'bg-aether-obsidian/80 backdrop-blur-sm border-b border-white/10'
			}`}
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
		>
			<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
				{/* Logo */}
				<Link href="/" className="flex items-center space-x-3 group">
					<div className="relative">
						<div className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.6)] group-hover:shadow-[0_0_30px_rgba(0,240,255,0.8)] transition-all duration-300" />
						<div className="absolute inset-0 h-3 w-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 animate-ping opacity-75 group-hover:opacity-100" />
					</div>
					<span className="text-lg font-bold tracking-wide text-white group-hover:text-blue-400 transition-colors duration-300">
						Aether Nexus
					</span>
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden items-center space-x-1 md:flex">
					{navItems.map((item, index) => (
						<Link
							key={item.name}
							href={item.href}
							className="relative px-4 py-2 text-sm font-medium text-aether-mist hover:text-white transition-colors duration-300 group"
						>
							{item.name}
							<div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
						</Link>
					))}
				</nav>

				{/* CTA Button */}
				<div className="hidden items-center space-x-4 md:flex">
					<Link
						href="/playground"
						className="px-4 py-2 text-sm font-medium text-aether-mist hover:text-white transition-colors duration-300"
					>
						Playground
					</Link>
					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<Link
							href="/pricing"
							className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
						>
							Get Started
						</Link>
					</motion.div>
				</div>

				{/* Mobile Menu Button */}
				<motion.button
					className="md:hidden rounded-xl p-2 text-aether-mist hover:bg-white/5 hover:text-white transition-all duration-300"
					onClick={() => setOpen((v) => !v)}
					aria-label="Toggle navigation"
					whileTap={{ scale: 0.95 }}
				>
					<svg 
						width="24" 
						height="24" 
						viewBox="0 0 24 24" 
						fill="none" 
						xmlns="http://www.w3.org/2000/svg"
						className={`transition-transform duration-300 ${open ? 'rotate-90' : ''}`}
					>
						<path 
							d="M4 6h16M4 12h16M4 18h16" 
							stroke="currentColor" 
							strokeWidth="2" 
							strokeLinecap="round" 
						/>
					</svg>
				</motion.button>
			</div>

			{/* Mobile Navigation */}
			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className="border-t border-white/10 bg-aether-obsidian/95 backdrop-blur-md md:hidden overflow-hidden"
					>
						<nav className="mx-auto max-w-7xl px-4 py-6 space-y-2">
							{navItems.map((item, index) => (
								<motion.div
									key={item.name}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.3, delay: index * 0.1 }}
								>
									<Link
										href={item.href}
										onClick={() => setOpen(false)}
										className="block rounded-xl px-4 py-3 text-sm font-medium text-aether-mist hover:bg-white/5 hover:text-white transition-all duration-300"
									>
										{item.name}
									</Link>
								</motion.div>
							))}
							
							{/* Mobile CTA */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
								className="pt-4 border-t border-white/10 mt-4"
							>
								<Link
									href="/playground"
									onClick={() => setOpen(false)}
									className="block rounded-xl px-4 py-3 text-sm font-medium text-aether-mist hover:bg-white/5 hover:text-white transition-all duration-300 mb-2"
								>
									Playground
								</Link>
								<Link
									href="/pricing"
									onClick={() => setOpen(false)}
									className="block rounded-xl px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 text-center"
								>
									Get Started
								</Link>
							</motion.div>
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.header>
	);
}