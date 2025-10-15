"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { SectionHeader } from '../../components/SectionHeader';
import { toolsBySubcategory } from '../../data/tools';
import { masterCategories } from '../../data/categories';

export default function ToolsPage() {
	const [selectedCategory, setSelectedCategory] = useState<string>('all');
	const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
	const [searchQuery, setSearchQuery] = useState('');
	const [sortBy, setSortBy] = useState<'name' | 'popularity' | 'newest'>('popularity');
	const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

	// Get all tools flattened
	const allTools = Object.values(toolsBySubcategory).flat();
	
	// Filter tools based on search and category
	const filteredTools = allTools.filter(tool => {
		const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			tool.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
			tool.description.toLowerCase().includes(searchQuery.toLowerCase());
		
		const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
		const matchesSubcategory = selectedSubcategory === 'all' || tool.subcategory === selectedSubcategory;
		
		return matchesSearch && matchesCategory && matchesSubcategory;
	});

	// Sort tools
	const sortedTools = [...filteredTools].sort((a, b) => {
		switch (sortBy) {
			case 'name':
				return a.name.localeCompare(b.name);
			case 'newest':
				return (b.badges?.includes('new') ? 1 : 0) - (a.badges?.includes('new') ? 1 : 0);
			case 'popularity':
			default:
				const aScore = (a.badges?.includes('popular') ? 3 : 0) + 
					(a.badges?.includes('trending') ? 2 : 0) + 
					(a.badges?.includes('nexus-verified') ? 1 : 0);
				const bScore = (b.badges?.includes('popular') ? 3 : 0) + 
					(b.badges?.includes('trending') ? 2 : 0) + 
					(b.badges?.includes('nexus-verified') ? 1 : 0);
				return bScore - aScore;
		}
	});

	// Get unique subcategories for selected category
	const getSubcategories = () => {
		if (selectedCategory === 'all') return [];
		return [...new Set(allTools
			.filter(tool => tool.category === selectedCategory)
			.map(tool => tool.subcategory))];
	};

	const subcategories = getSubcategories();

	// Get category stats
	const getCategoryStats = () => {
		return masterCategories.map(category => {
			const categoryTools = allTools.filter(tool => tool.category === category.name);
			return {
				...category,
				toolCount: categoryTools.length,
				verifiedCount: categoryTools.filter(tool => tool.badges?.includes('nexus-verified')).length
			};
		}).filter(cat => cat.toolCount > 0);
	};

	const categoryStats = getCategoryStats();

	return (
		<div className="min-h-screen bg-aether-obsidian">
			<div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
				<SectionHeader
					title="AI Tools Universe"
					subtitle="Discover the world's most powerful AI tools, curated and organized for maximum impact."
				/>

				{/* Stats Overview */}
				<motion.div 
					className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					{[
						{ number: allTools.length.toLocaleString(), label: 'Total Tools', icon: '🔧', color: 'from-blue-500 to-cyan-500' },
						{ number: masterCategories.length.toString(), label: 'Categories', icon: '📂', color: 'from-purple-500 to-pink-500' },
						{ number: allTools.filter(tool => tool.badges?.includes('nexus-verified')).length.toString(), label: 'Verified', icon: '✅', color: 'from-green-500 to-emerald-500' },
						{ number: allTools.filter(tool => tool.pricing === 'free').length.toString(), label: 'Free Tools', icon: '🆓', color: 'from-yellow-500 to-orange-500' }
					].map((stat, index) => (
						<motion.div
							key={stat.label}
							className="relative group"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							whileHover={{ scale: 1.05, y: -5 }}
						>
							<div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300"
								style={{ background: `linear-gradient(135deg, ${stat.color.split(' ')[0]?.replace('from-', '') || '#3B82F6'}, ${stat.color.split(' ')[2]?.replace('to-', '') || '#06B6D4'})` }}
							/>
							<div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-white/20 transition-all duration-300">
								<div className="flex items-center justify-between mb-3">
									<div className="text-2xl">{stat.icon}</div>
									<div className="text-xs text-aether-mist">{stat.label}</div>
								</div>
								<div className="text-3xl font-bold text-white">
									{stat.number}
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* Search and Filters */}
				<motion.div 
					className="mt-16 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					<div className="flex flex-col lg:flex-row gap-6">
						{/* Search */}
						<div className="flex-1">
							<div className="relative">
								<input
									type="text"
									placeholder="Search AI tools..."
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
									className="w-full px-4 py-3 pl-12 rounded-xl bg-white/5 border border-white/10 text-white placeholder-aether-mist focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
								/>
								<div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-aether-mist">
									<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M21 21L16.514 16.506M19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									</svg>
								</div>
							</div>
						</div>

						{/* Category Filter */}
						<div className="lg:w-64">
							<select
								value={selectedCategory}
								onChange={(e) => {
									setSelectedCategory(e.target.value);
									setSelectedSubcategory('all');
								}}
								className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
							>
								<option value="all">All Categories</option>
								{categoryStats.map(category => (
									<option key={category.slug} value={category.name}>
										{category.name} ({category.toolCount})
									</option>
								))}
							</select>
						</div>

						{/* Subcategory Filter */}
						{subcategories.length > 0 && (
							<div className="lg:w-64">
								<select
									value={selectedSubcategory}
									onChange={(e) => setSelectedSubcategory(e.target.value)}
									className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
								>
									<option value="all">All Subcategories</option>
									{subcategories.map(subcategory => (
										<option key={subcategory} value={subcategory}>
											{subcategory}
										</option>
									))}
								</select>
							</div>
						)}

						{/* Sort */}
						<div className="lg:w-48">
							<select
								value={sortBy}
								onChange={(e) => setSortBy(e.target.value as 'name' | 'popularity' | 'newest')}
								className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
							>
								<option value="popularity">Most Popular</option>
								<option value="newest">Newest</option>
								<option value="name">Alphabetical</option>
							</select>
						</div>

						{/* View Mode */}
						<div className="flex rounded-xl bg-white/5 border border-white/10 p-1">
							<button
								onClick={() => setViewMode('grid')}
								className={`px-3 py-2 rounded-lg transition-all duration-300 ${
									viewMode === 'grid' 
										? 'bg-blue-500 text-white' 
										: 'text-aether-mist hover:text-white'
								}`}
							>
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
									<rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
									<rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
									<rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
								</svg>
							</button>
							<button
								onClick={() => setViewMode('list')}
								className={`px-3 py-2 rounded-lg transition-all duration-300 ${
									viewMode === 'list' 
										? 'bg-blue-500 text-white' 
										: 'text-aether-mist hover:text-white'
								}`}
							>
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<line x1="8" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
									<line x1="8" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
									<line x1="8" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
									<line x1="3" y1="6" x2="3.01" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
									<line x1="3" y1="12" x2="3.01" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
									<line x1="3" y1="18" x2="3.01" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
								</svg>
							</button>
						</div>
					</div>
				</motion.div>

				{/* Results Count */}
				<motion.div 
					className="mt-8 flex items-center justify-between"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.3 }}
				>
					<div className="text-aether-mist">
						Showing {sortedTools.length} of {allTools.length} tools
					</div>
					<div className="text-sm text-aether-mist">
						{searchQuery && `Search: "${searchQuery}"`}
					</div>
				</motion.div>

				{/* Tools Grid/List */}
				<motion.div 
					className={`mt-8 ${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}`}
					layout
				>
					<AnimatePresence mode="popLayout">
						{sortedTools.map((tool, index) => (
							<motion.div
								key={tool.slug}
								layout
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -30 }}
								transition={{ duration: 0.3, delay: index * 0.05 }}
								whileHover={{ scale: 1.02, y: -5 }}
								className={`group cursor-pointer ${
									viewMode === 'grid' 
										? 'rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 p-6' 
										: 'rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 p-4'
								}`}
							>
								{viewMode === 'grid' ? (
									<div>
										{/* Header */}
										<div className="flex items-start justify-between mb-4">
											<div className="flex items-center space-x-3">
												<div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
													<span className="text-2xl">🔧</span>
												</div>
												<div>
													<h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
														{tool.name}
													</h3>
													<div className="text-sm text-aether-mist">{tool.category}</div>
												</div>
											</div>
											<div className="flex space-x-1">
												{tool.badges?.map(badge => (
													<span
														key={badge}
														className={`px-2 py-1 rounded-lg text-xs font-medium ${
															badge === 'nexus-verified' ? 'bg-green-500/20 text-green-400' :
															badge === 'trending' ? 'bg-blue-500/20 text-blue-400' :
															badge === 'popular' ? 'bg-purple-500/20 text-purple-400' :
															badge === 'new' ? 'bg-yellow-500/20 text-yellow-400' :
															'bg-gray-500/20 text-gray-400'
														}`}
													>
														{badge === 'nexus-verified' ? '✓' : badge}
													</span>
												))}
											</div>
										</div>

										{/* Tagline */}
										<p className="text-aether-mist mb-4 line-clamp-2">{tool.tagline}</p>

										{/* Pricing */}
										<div className="flex items-center justify-between mb-4">
											<span className={`px-3 py-1 rounded-lg text-sm font-medium ${
												tool.pricing === 'free' ? 'bg-green-500/20 text-green-400' :
												tool.pricing === 'freemium' ? 'bg-blue-500/20 text-blue-400' :
												tool.pricing === 'paid' ? 'bg-purple-500/20 text-purple-400' :
												'bg-gray-500/20 text-gray-400'
											}`}>
												{tool.pricing === 'free' ? '🆓 Free' :
												tool.pricing === 'freemium' ? '🔄 Freemium' :
												tool.pricing === 'paid' ? '💳 Paid' : '🏢 Enterprise'}
											</span>
											<a
												href={tool.website}
												target="_blank"
												rel="noopener noreferrer"
												className="text-blue-400 hover:text-blue-300 text-sm font-medium"
												onClick={(e) => e.stopPropagation()}
											>
												Visit →
											</a>
										</div>

										{/* Features */}
										<div className="space-y-2">
											<div className="text-sm font-medium text-white">Key Features:</div>
											<div className="flex flex-wrap gap-2">
												{tool.features.slice(0, 3).map(feature => (
													<span
														key={feature}
														className="px-2 py-1 rounded-lg bg-white/5 text-xs text-aether-mist"
													>
														{feature}
													</span>
												))}
												{tool.features.length > 3 && (
													<span className="px-2 py-1 rounded-lg bg-white/5 text-xs text-aether-mist">
														+{tool.features.length - 3} more
													</span>
												)}
											</div>
										</div>
									</div>
								) : (
									<div className="flex items-center justify-between">
										<div className="flex items-center space-x-4">
											<div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
												<span className="text-lg">🔧</span>
											</div>
											<div>
												<h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
													{tool.name}
												</h3>
												<p className="text-sm text-aether-mist">{tool.tagline}</p>
												<div className="flex items-center space-x-4 mt-1">
													<span className="text-xs text-aether-mist">{tool.category}</span>
													<span className={`px-2 py-1 rounded text-xs ${
														tool.pricing === 'free' ? 'bg-green-500/20 text-green-400' :
														tool.pricing === 'freemium' ? 'bg-blue-500/20 text-blue-400' :
														tool.pricing === 'paid' ? 'bg-purple-500/20 text-purple-400' :
														'bg-gray-500/20 text-gray-400'
													}`}>
														{tool.pricing}
													</span>
												</div>
											</div>
										</div>
										<div className="flex items-center space-x-3">
											<div className="flex space-x-1">
												{tool.badges?.slice(0, 2).map(badge => (
													<span
														key={badge}
														className={`px-2 py-1 rounded text-xs ${
															badge === 'nexus-verified' ? 'bg-green-500/20 text-green-400' :
															badge === 'trending' ? 'bg-blue-500/20 text-blue-400' :
															badge === 'popular' ? 'bg-purple-500/20 text-purple-400' :
															badge === 'new' ? 'bg-yellow-500/20 text-yellow-400' :
															'bg-gray-500/20 text-gray-400'
														}`}
													>
														{badge === 'nexus-verified' ? '✓' : badge}
													</span>
												))}
											</div>
											<a
												href={tool.website}
												target="_blank"
												rel="noopener noreferrer"
												className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-all duration-300 text-sm font-medium"
												onClick={(e) => e.stopPropagation()}
											>
												Visit
											</a>
										</div>
									</div>
								)}
							</motion.div>
						))}
					</AnimatePresence>
				</motion.div>

				{/* Empty State */}
				{filteredTools.length === 0 && (
					<motion.div 
						className="text-center py-16"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.3 }}
					>
						<div className="text-6xl mb-4">🔍</div>
						<h3 className="text-2xl font-bold text-white mb-4">No tools found</h3>
						<p className="text-aether-mist mb-6">
							Try adjusting your search criteria or browse all categories.
						</p>
						<button
							onClick={() => {
								setSearchQuery('');
								setSelectedCategory('all');
								setSelectedSubcategory('all');
							}}
							className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-all duration-300"
						>
							Clear Filters
						</button>
					</motion.div>
				)}

				{/* CTA Section */}
				<motion.div 
					className="mt-20 text-center"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<div className="rounded-3xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 p-12">
						<h3 className="text-3xl font-bold text-white mb-6">
							Can't Find What You're Looking For?
						</h3>
						<p className="text-xl text-aether-mist mb-8 max-w-2xl mx-auto">
							We're constantly adding new AI tools to our database. Submit a tool suggestion or request a specific category.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<motion.a
								href="/contact"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
							>
								Suggest a Tool
							</motion.a>
							<motion.a
								href="/categories"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
							>
								Browse Categories
							</motion.a>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
}