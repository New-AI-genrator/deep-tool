"use client";

import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { SectionHeader } from '../../components/SectionHeader';
import { MagnifyingGlassIcon, SparklesIcon, FireIcon, ClockIcon, UserIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

interface BlogPost {
	id: number;
	title: string;
	excerpt: string;
	category: string;
	author: string;
	authorRole: string;
	authorImage: string;
	date: string;
	readTime: string;
	image: string;
	tags: string[];
	featured?: boolean;
	trending?: boolean;
	views?: string;
	likes?: number;
}

export default function BlogIndexPage() {
	const [selectedCategory, setSelectedCategory] = useState('all');

	const categories = [
		{ id: 'all', name: 'All Posts', count: 24 },
		{ id: 'ai-tools', name: 'AI Tools', count: 8 },
		{ id: 'tutorials', name: 'Tutorials', count: 6 },
		{ id: 'industry-news', name: 'Industry News', count: 5 },
		{ id: 'reviews', name: 'Reviews', count: 3 },
		{ id: 'guides', name: 'Guides', count: 2 }
	];

	const [searchQuery, setSearchQuery] = useState('');

	const blogPosts: BlogPost[] = [
		{
			id: 1,
			title: 'The Ultimate Guide to AI Tools in 2025',
			excerpt: 'Discover the most powerful AI tools that are transforming businesses and creative workflows. From ChatGPT to Midjourney, we cover everything you need to know.',
			category: 'guides',
			author: 'Sarah Chen',
			authorRole: 'AI Research Lead',
			authorImage: '👩‍💼',
			date: 'Jan 15, 2025',
			readTime: '8 min',
			image: '🤖',
			tags: ['AI', 'Tools', 'Guide'],
			featured: true,
			trending: true,
			views: '12.5K',
			likes: 1240
		},
		{
			id: 2,
			title: 'ChatGPT vs Claude vs Gemini: Which AI is Best?',
			excerpt: 'A comprehensive comparison of the top three AI chatbots. We test them on coding, writing, analysis, and more to help you choose the right one.',
			category: 'reviews',
			author: 'Michael Rodriguez',
			authorRole: 'Senior Tech Analyst',
			authorImage: '👨‍💻',
			date: 'Jan 12, 2025',
			readTime: '12 min',
			image: '⚡',
			tags: ['ChatGPT', 'Claude', 'Comparison'],
			featured: true,
			trending: true,
			views: '18.2K',
			likes: 2150
		},
		{
			id: 3,
			title: 'How to Build Your First AI Workflow',
			excerpt: 'Step-by-step tutorial on creating automated workflows using AI tools. Learn to connect ChatGPT, Zapier, and more for maximum productivity.',
			category: 'tutorials',
			author: 'Emma Thompson',
			authorRole: 'Automation Expert',
			authorImage: '👩‍💻',
			date: 'Jan 10, 2025',
			readTime: '15 min',
			image: '🔧',
			tags: ['Tutorial', 'Automation', 'Workflow'],
			views: '9.8K',
			likes: 856
		},
		{
			id: 4,
			title: 'Top 10 AI Tools for Content Creators in 2025',
			excerpt: 'From video editing to image generation, these AI tools will supercharge your content creation process and save you hours of work.',
			category: 'ai-tools',
			author: 'David Kim',
			authorRole: 'Creative Director',
			authorImage: '👨‍🎨',
			date: 'Jan 8, 2025',
			readTime: '10 min',
			image: '🎨',
			tags: ['Content Creation', 'Video', 'Design'],
			trending: true,
			views: '15.3K',
			likes: 1680
		},
		{
			id: 5,
			title: 'The Rise of AI in Web Development',
			excerpt: 'How AI coding assistants like GitHub Copilot and Cursor are revolutionizing the way developers write code and build applications.',
			category: 'industry-news',
			author: 'Alex Johnson',
			authorRole: 'Lead Developer',
			authorImage: '🧑‍💻',
			date: 'Jan 5, 2025',
			readTime: '7 min',
			image: '💻',
			tags: ['Development', 'Coding', 'AI'],
			views: '11.2K',
			likes: 945
		},
		{
			id: 6,
			title: 'Midjourney v6: What\'s New and How to Use It',
			excerpt: 'Explore the latest features in Midjourney v6, including improved text rendering, better consistency, and new style parameters.',
			category: 'ai-tools',
			author: 'Lisa Park',
			authorRole: 'AI Artist',
			authorImage: '👩‍🎨',
			date: 'Jan 3, 2025',
			readTime: '9 min',
			image: '🎭',
			tags: ['Midjourney', 'Image Generation', 'Tutorial'],
			views: '14.7K',
			likes: 1520
		},
		{
			id: 7,
			title: 'AI Ethics: Building Responsible AI Tools',
			excerpt: 'A deep dive into the ethical considerations of AI development, bias mitigation, and creating tools that benefit everyone.',
			category: 'industry-news',
			author: 'Dr. James Wilson',
			authorRole: 'AI Ethics Researcher',
			authorImage: '👨‍🔬',
			date: 'Dec 28, 2024',
			readTime: '11 min',
			image: '⚖️',
			tags: ['Ethics', 'AI Safety', 'Policy'],
			views: '8.9K',
			likes: 782
		},
		{
			id: 8,
			title: 'Automating Your Business with AI: A Complete Guide',
			excerpt: 'Learn how to implement AI automation in your business processes, from customer service to data analysis and marketing.',
			category: 'guides',
			author: 'Rachel Green',
			authorRole: 'Business Strategist',
			authorImage: '👩‍💼',
			date: 'Dec 25, 2024',
			readTime: '14 min',
			image: '🚀',
			tags: ['Business', 'Automation', 'Strategy'],
			views: '10.5K',
			likes: 1120
		},
		{
			id: 9,
			title: 'The Best Free AI Tools You Should Try Today',
			excerpt: 'Discover amazing free AI tools that rival their paid counterparts. Perfect for students, freelancers, and small businesses.',
			category: 'ai-tools',
			author: 'Tom Anderson',
			authorRole: 'Tech Reviewer',
			authorImage: '👨‍💼',
			date: 'Dec 22, 2024',
			readTime: '6 min',
			image: '🎁',
			tags: ['Free Tools', 'Budget', 'Resources'],
			views: '16.8K',
			likes: 1890
		}
	];

	const filteredPosts = selectedCategory === 'all' 
		? blogPosts 
		: blogPosts.filter(post => post.category === selectedCategory);

	const featuredPosts = blogPosts.filter(post => post.featured);

	const trendingPosts = blogPosts.filter(post => post.trending);

	return (
		<main className="min-h-screen bg-aether-obsidian relative overflow-hidden">
			{/* Animated Background */}
			<div className="absolute inset-0 opacity-30">
				<div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
				<div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
			</div>

			<div className="relative z-10 mx-auto max-w-7xl px-4 py-16 md:px-6">
				<SectionHeader 
					title="Blog & Insights" 
					subtitle="Expert insights, tutorials, and news about AI tools and technology" 
				/>

				{/* Premium Stats Bar */}
				<motion.div 
					className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					{[
						{ label: 'Total Articles', value: '24', icon: '📚', color: 'from-blue-500 to-cyan-500' },
						{ label: 'Expert Authors', value: '12+', icon: '👥', color: 'from-purple-500 to-pink-500' },
						{ label: 'Total Reads', value: '125K+', icon: '👁️', color: 'from-green-500 to-emerald-500' },
						{ label: 'Avg. Rating', value: '4.9', icon: '⭐', color: 'from-amber-500 to-orange-500' }
					].map((stat, index) => (
						<motion.div
							key={stat.label}
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="relative group"
						>
							<div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
								<div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
								<div className="relative">
									<div className="text-3xl mb-2">{stat.icon}</div>
									<div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
										{stat.value}
									</div>
									<div className="text-xs text-aether-mist">{stat.label}</div>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* Premium Search Bar */}
				<motion.div 
					className="mt-12"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					<div className="relative max-w-2xl mx-auto">
						<MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
						<input
							type="text"
							placeholder="Search articles by title, author, or topic..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder-aether-mist focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
						/>
						{searchQuery && (
							<button
								onClick={() => setSearchQuery('')}
								className="absolute right-4 top-1/2 transform -translate-y-1/2 text-aether-mist hover:text-white transition-colors"
							>
								✕
							</button>
						)}
					</div>
				</motion.div>

				{/* Featured Posts */}
				<motion.section 
					className="mt-16"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<div className="flex items-center justify-between mb-8">
						<h2 className="text-2xl font-bold text-white">Featured Articles</h2>
						<div className="h-1 flex-1 ml-6 bg-gradient-to-r from-blue-500/50 to-transparent rounded-full" />
					</div>
					
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
						{featuredPosts.map((post, index) => (
							<motion.article
								key={post.id}
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								whileHover={{ y: -8, scale: 1.02 }}
								className="group relative rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 p-8 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden"
							>
								{/* Animated Gradient Overlay */}
								<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
								
								{/* Shimmer Effect */}
								<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
									<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
								</div>
								
								<div className="relative z-10">
									<div className="flex items-center justify-between mb-4">
										<div className="flex items-center space-x-2">
											<span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 text-xs font-bold rounded-full border border-blue-500/30 backdrop-blur-sm flex items-center space-x-1">
												<SparklesIcon className="w-3 h-3" />
												<span>Featured</span>
											</span>
											{post.trending && (
												<span className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-400 text-xs font-bold rounded-full border border-orange-500/30 backdrop-blur-sm flex items-center space-x-1">
													<FireIcon className="w-3 h-3" />
													<span>Trending</span>
												</span>
											)}
										</div>
										<span className="text-5xl filter drop-shadow-lg">{post.image}</span>
									</div>
									
									<h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300 line-clamp-2">
										{post.title}
									</h3>
									
									<p className="text-aether-mist mb-6 line-clamp-2 leading-relaxed">
										{post.excerpt}
									</p>
									
									<div className="flex flex-wrap gap-2 mb-6">
										{post.tags.map(tag => (
											<span key={tag} className="px-3 py-1 bg-white/5 text-aether-mist text-xs rounded-lg border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300">
												#{tag}
											</span>
										))}
									</div>
									
									{/* Author Card */}
									<div className="flex items-center justify-between mb-6 pb-6 border-b border-white/10">
										<div className="flex items-center space-x-3">
											<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-xl">
												{post.authorImage}
											</div>
											<div>
												<div className="text-white font-semibold text-sm">{post.author}</div>
												<div className="text-aether-mist text-xs">{post.authorRole}</div>
											</div>
										</div>
										<div className="text-right">
											<div className="text-aether-mist text-xs">{post.date}</div>
											<div className="flex items-center space-x-1 text-aether-mist text-xs">
												<ClockIcon className="w-3 h-3" />
												<span>{post.readTime}</span>
											</div>
										</div>
									</div>
									
									{/* Engagement Metrics */}
									<div className="flex items-center justify-between">
										<div className="flex items-center space-x-4 text-sm">
											<div className="flex items-center space-x-1 text-aether-mist">
												<span>👁️</span>
												<span>{post.views}</span>
											</div>
											<div className="flex items-center space-x-1 text-aether-mist">
												<span>❤️</span>
												<span>{post.likes}</span>
											</div>
										</div>
										<Link 
											href={`/blog/${post.id}`}
											className="group/link px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 flex items-center space-x-2"
										>
											<span>Read Article</span>
											<span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
										</Link>
									</div>
								</div>
							</motion.article>
						))}
					</div>
				</motion.section>

				{/* Category Filter */}
				<motion.section 
					className="mt-20"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					<div className="flex items-center justify-between mb-8">
						<h2 className="text-2xl font-bold text-white">All Articles</h2>
					</div>

					<div className="flex flex-wrap gap-3 mb-12">
						{categories.map((category, index) => (
							<motion.button
								key={category.id}
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.3, delay: index * 0.05 }}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								onClick={() => setSelectedCategory(category.id)}
								className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
									selectedCategory === category.id
										? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25'
										: 'bg-white/5 text-aether-mist hover:bg-white/10 border border-white/10'
								}`}
							>
								{category.name}
								<span className="ml-2 text-xs opacity-70">({category.count})</span>
							</motion.button>
						))}
					</div>

					{/* Blog Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{filteredPosts.map((post, index) => (
							<motion.article
								key={post.id}
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								whileHover={{ y: -8, scale: 1.03 }}
								className="group relative rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 p-6 hover:bg-white/10 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden"
							>
								{/* Hover Gradient */}
								<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
								
								<div className="relative z-10">
									<div className="flex items-center justify-between mb-4">
										<div className="text-5xl filter drop-shadow-lg">{post.image}</div>
										{post.trending && (
											<span className="px-2 py-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-400 text-xs font-bold rounded-full border border-orange-500/30 flex items-center space-x-1">
												<FireIcon className="w-3 h-3" />
											</span>
										)}
									</div>
									
									<div className="flex items-center space-x-2 mb-3">
										<span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 text-xs font-bold rounded-lg border border-purple-500/30">
											{categories.find(c => c.id === post.category)?.name}
										</span>
										<div className="flex items-center space-x-1 text-aether-mist text-xs">
											<ClockIcon className="w-3 h-3" />
											<span>{post.readTime}</span>
										</div>
									</div>
									
									<h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300 line-clamp-2">
										{post.title}
									</h3>
									
									<p className="text-aether-mist text-sm mb-4 line-clamp-3 leading-relaxed">
										{post.excerpt}
									</p>
									
									{/* Author Info */}
									<div className="flex items-center space-x-2 mb-4 pb-4 border-b border-white/10">
										<div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-sm">
											{post.authorImage}
										</div>
										<div className="flex-1">
											<div className="text-white font-semibold text-xs">{post.author}</div>
											<div className="text-aether-mist text-xs">{post.date}</div>
										</div>
									</div>
									
									{/* Engagement & CTA */}
									<div className="flex items-center justify-between">
										<div className="flex items-center space-x-3 text-xs">
											<div className="flex items-center space-x-1 text-aether-mist">
												<span>👁️</span>
												<span>{post.views}</span>
											</div>
											<div className="flex items-center space-x-1 text-aether-mist">
												<span>❤️</span>
												<span>{post.likes}</span>
											</div>
										</div>
										<Link 
											href={`/blog/${post.id}`}
											className="group/link text-blue-400 hover:text-blue-300 font-semibold text-sm flex items-center space-x-1"
										>
											<span>Read</span>
											<span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
										</Link>
									</div>
								</div>
							</motion.article>
						))}
					</div>
				</motion.section>

				{/* Newsletter CTA */}
				<motion.section 
					className="mt-20"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<div className="rounded-3xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 p-12 text-center">
						<h3 className="text-3xl font-bold text-white mb-4">
							Never Miss an Update
						</h3>
						<p className="text-xl text-aether-mist mb-8 max-w-2xl mx-auto">
							Subscribe to our newsletter for the latest AI tools, tutorials, and industry insights delivered to your inbox.
						</p>
						<form 
							onSubmit={(e) => {
								e.preventDefault();
								const email = (e.target as HTMLFormElement).email.value;
								window.location.href = `mailto:huzaifakarim612@gmail.com?subject=Blog Newsletter Subscription&body=New subscriber: ${email}`;
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
								className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
							>
								Subscribe
							</motion.button>
						</form>
					</div>
				</motion.section>
			</div>
		</main>
	);
}
