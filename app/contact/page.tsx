"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../../components/SectionHeader';

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
		category: 'general'
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		
		// Send email using mailto or form service
		const mailtoLink = `mailto:huzaifakarim612@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
			`Name: ${formData.name}\nEmail: ${formData.email}\nCategory: ${formData.category}\n\nMessage:\n${formData.message}`
		)}`;
		
		// Open mailto link
		window.location.href = mailtoLink;
		
		// Show success message
		await new Promise(resolve => setTimeout(resolve, 1000));
		setIsSubmitted(true);
		setIsSubmitting(false);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const contactMethods = [
		{
			title: 'General Inquiries',
			email: 'huzaifakarim612@gmail.com',
			description: 'For general questions, partnerships, and media inquiries.',
			icon: '📧'
		},
		{
			title: 'Technical Support',
			email: 'huzaifakarim612@gmail.com',
			description: 'Get help with technical issues, API access, and integrations.',
			icon: '🔧'
		},
		{
			title: 'Business Development',
			email: 'huzaifakarim612@gmail.com',
			description: 'Partnership opportunities, enterprise solutions, and collaborations.',
			icon: '🤝'
		},
		{
			title: 'Press & Media',
			email: 'huzaifakarim612@gmail.com',
			description: 'Media inquiries, press releases, and interview requests.',
			icon: '📰'
		}
	];

	const faqs = [
		{
			question: 'How do I submit a new AI tool to your platform?',
			answer: 'You can submit a new AI tool through our contact form by selecting "Tool Submission" as the category. Please include the tool name, website, description, and key features.'
		},
		{
			question: 'Do you offer API access to your tool database?',
			answer: 'Yes, we offer API access for developers and businesses. Contact our technical support team to learn about our API plans and integration options.'
		},
		{
			question: 'How can I become a verified tool on your platform?',
			answer: 'Tools can become verified through our rigorous review process. Contact our business development team to learn about verification requirements and benefits.'
		},
		{
			question: 'Do you offer enterprise solutions?',
			answer: 'Yes, we provide enterprise solutions including custom integrations, white-label options, and dedicated support. Contact our business team for more information.'
		},
		{
			question: 'How often do you update your tool database?',
			answer: 'We update our database daily with new tools, features, and information. Our team continuously monitors the AI landscape to ensure we have the latest tools.'
		},
		{
			question: 'Can I suggest new categories or features?',
			answer: 'Absolutely! We welcome suggestions for new categories, features, and improvements. Use our contact form with "Feature Request" as the category.'
		}
	];

	return (
		<div className="min-h-screen bg-aether-obsidian">
			<div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
				<SectionHeader
					title="Get in Touch"
					subtitle="We'd love to hear from you. Reach out for partnerships, support, or just to say hello."
				/>

				{/* Contact Methods */}
				<motion.section 
					className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					{contactMethods.map((method, index) => (
						<motion.div
							key={method.title}
							className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:bg-white/10 transition-all duration-300"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							whileHover={{ scale: 1.05, y: -5 }}
						>
							<div className="text-3xl mb-4">{method.icon}</div>
							<h3 className="text-lg font-bold text-white mb-2">{method.title}</h3>
							<p className="text-aether-mist text-sm mb-4">{method.description}</p>
							<a
								href={`mailto:${method.email}`}
								className="text-blue-400 hover:text-blue-300 text-sm font-medium"
							>
								{method.email}
							</a>
						</motion.div>
					))}
				</motion.section>

				{/* Contact Form */}
				<motion.section 
					className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					{/* Form */}
					<div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8">
						<h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
						
						{isSubmitted ? (
							<motion.div 
								className="text-center py-8"
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5 }}
							>
								<div className="text-6xl mb-4">✅</div>
								<h4 className="text-xl font-bold text-white mb-4">Message Sent!</h4>
								<p className="text-aether-mist mb-6">
									Thank you for reaching out. We'll get back to you within 24 hours.
								</p>
								<button
									onClick={() => {
										setIsSubmitted(false);
										setFormData({ name: '', email: '', subject: '', message: '', category: 'general' });
									}}
									className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-all duration-300"
								>
									Send Another Message
								</button>
							</motion.div>
						) : (
							<form onSubmit={handleSubmit} className="space-y-6">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<label className="block text-sm font-medium text-white mb-2">
											Name *
										</label>
										<input
											type="text"
											name="name"
											value={formData.name}
											onChange={handleChange}
											required
											className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-aether-mist focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
											placeholder="Your name"
										/>
									</div>
									<div>
										<label className="block text-sm font-medium text-white mb-2">
											Email *
										</label>
										<input
											type="email"
											name="email"
											value={formData.email}
											onChange={handleChange}
											required
											className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-aether-mist focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
											placeholder="your@email.com"
										/>
									</div>
								</div>

								<div>
									<label className="block text-sm font-medium text-white mb-2">
										Category
									</label>
									<select
										name="category"
										value={formData.category}
										onChange={handleChange}
										className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
									>
										<option value="general">General Inquiry</option>
										<option value="tool-submission">Tool Submission</option>
										<option value="partnership">Partnership</option>
										<option value="support">Technical Support</option>
										<option value="feature-request">Feature Request</option>
										<option value="press">Press & Media</option>
										<option value="other">Other</option>
									</select>
								</div>

								<div>
									<label className="block text-sm font-medium text-white mb-2">
										Subject *
									</label>
									<input
										type="text"
										name="subject"
										value={formData.subject}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-aether-mist focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
										placeholder="Brief subject line"
									/>
								</div>

								<div>
									<label className="block text-sm font-medium text-white mb-2">
										Message *
									</label>
									<textarea
										name="message"
										value={formData.message}
										onChange={handleChange}
										required
										rows={6}
										className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-aether-mist focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none"
										placeholder="Tell us more about your inquiry..."
									/>
								</div>

								<motion.button
									type="submit"
									disabled={isSubmitting}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
								>
									{isSubmitting ? (
										<div className="flex items-center justify-center space-x-2">
											<div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
											<span>Sending...</span>
										</div>
									) : (
										'Send Message'
									)}
								</motion.button>
							</form>
						)}
					</div>

					{/* Additional Info */}
					<div className="space-y-8">
						<div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8">
							<h3 className="text-2xl font-bold text-white mb-6">Why Contact Us?</h3>
							<div className="space-y-4">
								<div className="flex items-start space-x-3">
									<div className="w-2 h-2 bg-blue-400 rounded-full mt-2" />
									<div>
										<h4 className="text-white font-semibold">Tool Submissions</h4>
										<p className="text-aether-mist text-sm">Submit new AI tools for our platform</p>
									</div>
								</div>
								<div className="flex items-start space-x-3">
									<div className="w-2 h-2 bg-purple-400 rounded-full mt-2" />
									<div>
										<h4 className="text-white font-semibold">Partnerships</h4>
										<p className="text-aether-mist text-sm">Explore collaboration opportunities</p>
									</div>
								</div>
								<div className="flex items-start space-x-3">
									<div className="w-2 h-2 bg-green-400 rounded-full mt-2" />
									<div>
										<h4 className="text-white font-semibold">Support</h4>
										<p className="text-aether-mist text-sm">Get help with technical issues</p>
									</div>
								</div>
								<div className="flex items-start space-x-3">
									<div className="w-2 h-2 bg-yellow-400 rounded-full mt-2" />
									<div>
										<h4 className="text-white font-semibold">Feedback</h4>
										<p className="text-aether-mist text-sm">Share your ideas and suggestions</p>
									</div>
								</div>
							</div>
						</div>

						<div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8">
							<h3 className="text-2xl font-bold text-white mb-6">Response Time</h3>
							<div className="space-y-4">
								<div className="flex justify-between items-center">
									<span className="text-aether-mist">General Inquiries</span>
									<span className="text-white font-semibold">24 hours</span>
								</div>
								<div className="flex justify-between items-center">
									<span className="text-aether-mist">Technical Support</span>
									<span className="text-white font-semibold">12 hours</span>
								</div>
								<div className="flex justify-between items-center">
									<span className="text-aether-mist">Partnerships</span>
									<span className="text-white font-semibold">48 hours</span>
								</div>
								<div className="flex justify-between items-center">
									<span className="text-aether-mist">Press Inquiries</span>
									<span className="text-white font-semibold">24 hours</span>
								</div>
							</div>
						</div>
					</div>
				</motion.section>

				{/* FAQ Section */}
				<motion.section 
					className="mt-20"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.4 }}
				>
					<h3 className="text-3xl font-bold text-white text-center mb-12">
						Frequently Asked Questions
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{faqs.map((faq, index) => (
							<motion.div
								key={index}
								className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
							>
								<h4 className="text-lg font-bold text-white mb-3">{faq.question}</h4>
								<p className="text-aether-mist">{faq.answer}</p>
							</motion.div>
						))}
					</div>
				</motion.section>

				{/* CTA Section */}
				<motion.section 
					className="mt-20 text-center"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.6 }}
				>
					<div className="rounded-3xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 p-12">
						<h3 className="text-3xl font-bold text-white mb-6">
							Ready to Connect?
						</h3>
						<p className="text-xl text-aether-mist mb-8 max-w-2xl mx-auto">
							Join thousands of AI enthusiasts, developers, and innovators who trust Aether Nexus for their AI tool discovery.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<motion.a
								href="/tools"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
							>
								Explore Tools
							</motion.a>
							<motion.a
								href="/about"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
							>
								Learn More
							</motion.a>
						</div>
					</div>
				</motion.section>
			</div>
		</div>
	);
}
