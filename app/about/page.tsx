"use client";

import { SectionHeader } from '../../components/SectionHeader';
import { motion } from 'framer-motion';

export default function AboutUs() {
	const stats = [
		{ number: "12,847+", label: "AI Tools Discovered", icon: "🔧" },
		{ number: "347", label: "Categories Covered", icon: "📂" },
		{ number: "89", label: "Countries Served", icon: "🌍" },
		{ number: "156", label: "Daily Updates", icon: "⚡" }
	];

	const team = [
		{
			name: "Huzaifa karim",
			role: "Founder & CEO",
			bio: "AI researcher with 10+ years experience in machine learning and product development.",
			avatar: "👨‍💻"
		},
		{
			name: "Sarah Johnson",
			role: "Head of Curation",
			bio: "Former tech journalist specializing in AI tools and emerging technologies.",
			avatar: "👩‍💻"
		},
		{
			name: "Marcus Rodriguez",
			role: "Lead Developer",
			bio: "Full-stack developer passionate about building scalable AI discovery platforms.",
			avatar: "👨‍💻"
		},
		{
			name: "Dr. Emily Watson",
			role: "AI Research Director",
			bio: "PhD in Computer Science with expertise in natural language processing and AI ethics.",
			avatar: "👩‍🔬"
		}
	];

	return (
		<div className="min-h-screen bg-aether-obsidian">
			<div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
				<SectionHeader
					title="About Aether Nexus"
					subtitle="We're on a mission to democratize access to the world's most powerful AI tools."
				/>

				{/* Hero Section */}
				<motion.section 
					className="mt-16 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-12"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					<div className="text-center max-w-4xl mx-auto">
						<h2 className="text-4xl font-bold text-white mb-6">
							Empowering Innovation Through AI Discovery
						</h2>
						<p className="text-xl text-aether-mist leading-relaxed mb-8">
							Founded in 2023, Aether Nexus emerged from a simple observation: the AI landscape was exploding with incredible tools, but finding the right ones was like searching for needles in a digital haystack. We set out to change that.
						</p>
						<p className="text-lg text-aether-mist leading-relaxed">
							Today, we're the premier destination for AI tool discovery, serving entrepreneurs, researchers, creators, and innovators worldwide. Our platform doesn't just list tools—we curate, analyze, and contextualize them to help you make informed decisions about the technologies that will shape your future.
						</p>
					</div>
				</motion.section>

				{/* Stats Section */}
				<motion.section 
					className="mt-20"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					<h3 className="text-3xl font-bold text-white text-center mb-12">
						Our Impact in Numbers
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{stats.map((stat, index) => (
							<motion.div
								key={stat.label}
								className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								whileHover={{ scale: 1.05, y: -5 }}
							>
								<div className="text-4xl mb-4">{stat.icon}</div>
								<div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
								<div className="text-aether-mist">{stat.label}</div>
							</motion.div>
						))}
					</div>
				</motion.section>

				{/* Mission Section */}
				<motion.section 
					className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.4 }}
				>
					<div>
						<h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
						<p className="text-lg text-aether-mist leading-relaxed mb-6">
							To accelerate human potential by making AI tools accessible, understandable, and actionable for everyone, regardless of their technical background.
						</p>
						<p className="text-lg text-aether-mist leading-relaxed mb-6">
							We believe that the future belongs to those who can effectively harness the power of AI. Our platform bridges the gap between cutting-edge technology and practical application.
						</p>
						<div className="space-y-4">
							<div className="flex items-center space-x-3">
								<div className="w-2 h-2 bg-blue-400 rounded-full" />
								<span className="text-white">Democratize AI access</span>
							</div>
							<div className="flex items-center space-x-3">
								<div className="w-2 h-2 bg-purple-400 rounded-full" />
								<span className="text-white">Curate quality tools</span>
							</div>
							<div className="flex items-center space-x-3">
								<div className="w-2 h-2 bg-cyan-400 rounded-full" />
								<span className="text-white">Educate and empower</span>
							</div>
						</div>
					</div>
					<div className="relative">
						<div className="rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-8 backdrop-blur-sm border border-white/10">
							<div className="text-center">
								<div className="text-6xl mb-4">🚀</div>
								<h4 className="text-2xl font-bold text-white mb-4">Innovation First</h4>
								<p className="text-aether-mist">
									We're constantly exploring the latest AI developments to bring you the most cutting-edge tools and insights.
								</p>
							</div>
						</div>
					</div>
				</motion.section>

				{/* Team Section */}
				<motion.section 
					className="mt-20"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.6 }}
				>
					<h3 className="text-3xl font-bold text-white text-center mb-12">
						Meet Our Team
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{team.map((member, index) => (
							<motion.div
								key={member.name}
								className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								whileHover={{ scale: 1.05, y: -5 }}
							>
								<div className="text-5xl mb-4">{member.avatar}</div>
								<h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
								<div className="text-blue-400 font-semibold mb-3">{member.role}</div>
								<p className="text-aether-mist text-sm">{member.bio}</p>
							</motion.div>
						))}
					</div>
				</motion.section>

				{/* Values Section */}
				<motion.section 
					className="mt-20"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.8 }}
				>
					<h3 className="text-3xl font-bold text-white text-center mb-12">
						Our Values
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{[
							{
								title: "Transparency",
								description: "We provide honest, unbiased reviews and clear information about every tool we feature.",
								icon: "🔍"
							},
							{
								title: "Quality",
								description: "We meticulously curate only the best AI tools, ensuring our users get access to premium solutions.",
								icon: "⭐"
							},
							{
								title: "Innovation",
								description: "We stay ahead of the curve, constantly discovering and featuring the latest AI breakthroughs.",
								icon: "💡"
							}
						].map((value, index) => (
							<motion.div
								key={value.title}
								className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								whileHover={{ scale: 1.05, y: -5 }}
							>
								<div className="text-4xl mb-4">{value.icon}</div>
								<h4 className="text-xl font-bold text-white mb-4">{value.title}</h4>
								<p className="text-aether-mist">{value.description}</p>
							</motion.div>
						))}
					</div>
				</motion.section>

				{/* CTA Section */}
				<motion.section 
					className="mt-20 text-center"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 1.0 }}
				>
					<div className="rounded-3xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 p-12">
						<h3 className="text-3xl font-bold text-white mb-6">
							Join the AI Revolution
						</h3>
						<p className="text-xl text-aether-mist mb-8 max-w-2xl mx-auto">
							Ready to discover the AI tools that will transform your work? Start exploring our curated collection today.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<motion.a
								href="/categories"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
							>
								Explore Categories
							</motion.a>
							<motion.a
								href="/contact"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
							>
								Get in Touch
							</motion.a>
						</div>
					</div>
				</motion.section>
			</div>
		</div>
	);
}
