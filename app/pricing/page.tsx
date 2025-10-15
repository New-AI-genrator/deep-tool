"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { SectionHeader } from '../../components/SectionHeader';
import {
	CheckIcon,
	XMarkIcon,
	SparklesIcon,
	RocketLaunchIcon,
	BuildingOfficeIcon,
	StarIcon,
	BoltIcon,
	ShieldCheckIcon,
	ChartBarIcon,
	UserGroupIcon
} from '@heroicons/react/24/outline';

interface PricingPlan {
	name: string;
	tagline: string;
	price: string;
	period: string;
	description: string;
	features: string[];
	notIncluded?: string[];
	popular?: boolean;
	cta: string;
	icon: any;
	color: string;
	savings?: string;
}

export default function PricingPage() {
	const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

	const plans: PricingPlan[] = [
		{
			name: 'Free',
			tagline: 'Perfect for exploring',
			price: billingCycle === 'monthly' ? '$0' : '$0',
			period: 'forever',
			description: 'Get started with essential features to discover and compare tools.',
			features: [
				'Access to 10,000+ tools directory',
				'Basic search and filters',
				'Compare up to 2 tools',
				'Read reviews and ratings',
				'Community support',
				'Weekly newsletter'
			],
			notIncluded: [
				'Advanced analytics',
				'API access',
				'Priority support',
				'Custom integrations'
			],
			cta: 'Get Started Free',
			icon: SparklesIcon,
			color: 'from-gray-500 to-slate-500'
		},
		{
			name: 'Pro',
			tagline: 'For power users',
			price: billingCycle === 'monthly' ? '$29' : '$290',
			period: billingCycle === 'monthly' ? '/month' : '/year',
			description: 'Unlock advanced features and insights for professional tool discovery.',
			features: [
				'Everything in Free',
				'Unlimited tool comparisons',
				'Advanced search & filters',
				'Save favorites & collections',
				'Intelligence alerts',
				'API access (10K calls/month)',
				'Advanced analytics dashboard',
				'Export data & reports',
				'Priority email support',
				'Early access to new features',
				'Remove ads',
				'Custom tool recommendations'
			],
			popular: true,
			cta: 'Start Pro Trial',
			icon: RocketLaunchIcon,
			color: 'from-blue-500 to-cyan-500',
			savings: billingCycle === 'yearly' ? 'Save $58/year' : undefined
		},
		{
			name: 'Enterprise',
			tagline: 'For teams & organizations',
			price: 'Custom',
			period: 'pricing',
			description: 'Tailored solutions with dedicated support for your organization.',
			features: [
				'Everything in Pro',
				'Unlimited team members',
				'SSO & SAML authentication',
				'Advanced security & compliance',
				'Unlimited API calls',
				'White-label options',
				'Custom integrations',
				'Dedicated account manager',
				'24/7 priority support',
				'Custom SLA',
				'Training & onboarding',
				'Advanced reporting & analytics',
				'Custom tool database',
				'Private tool submissions'
			],
			cta: 'Contact Sales',
			icon: BuildingOfficeIcon,
			color: 'from-purple-500 to-pink-500'
		}
	];

	const comparisonFeatures = [
		{
			category: 'Core Features',
			features: [
				{ name: 'Tools Directory Access', free: '10,000+', pro: '10,000+', enterprise: '10,000+' },
				{ name: 'Tool Comparisons', free: '2 at a time', pro: 'Unlimited', enterprise: 'Unlimited' },
				{ name: 'Search & Filters', free: 'Basic', pro: 'Advanced', enterprise: 'Advanced + Custom' },
				{ name: 'Favorites & Collections', free: false, pro: true, enterprise: true },
				{ name: 'Reviews & Ratings', free: 'Read only', pro: 'Read & Write', enterprise: 'Read & Write' }
			]
		},
		{
			category: 'Intelligence & Insights',
			features: [
				{ name: 'Intelligence Feed', free: 'Limited', pro: 'Full access', enterprise: 'Full access + Custom' },
				{ name: 'Price Alerts', free: false, pro: true, enterprise: true },
				{ name: 'Analytics Dashboard', free: false, pro: true, enterprise: 'Advanced' },
				{ name: 'Custom Reports', free: false, pro: 'Basic', enterprise: 'Advanced' },
				{ name: 'Data Export', free: false, pro: 'CSV', enterprise: 'CSV, JSON, API' }
			]
		},
		{
			category: 'API & Integrations',
			features: [
				{ name: 'API Access', free: false, pro: '10K calls/month', enterprise: 'Unlimited' },
				{ name: 'Webhooks', free: false, pro: '5 webhooks', enterprise: 'Unlimited' },
				{ name: 'Custom Integrations', free: false, pro: false, enterprise: true },
				{ name: 'White-label Options', free: false, pro: false, enterprise: true }
			]
		},
		{
			category: 'Support & Security',
			features: [
				{ name: 'Support', free: 'Community', pro: 'Email (24h)', enterprise: '24/7 Priority' },
				{ name: 'SSO/SAML', free: false, pro: false, enterprise: true },
				{ name: 'Audit Logs', free: false, pro: false, enterprise: true },
				{ name: 'Custom SLA', free: false, pro: false, enterprise: true },
				{ name: 'Dedicated Manager', free: false, pro: false, enterprise: true }
			]
		}
	];

	const renderFeatureValue = (value: any) => {
		if (typeof value === 'boolean') {
			return value ? (
				<CheckIcon className="w-5 h-5 text-green-400 mx-auto" />
			) : (
				<XMarkIcon className="w-5 h-5 text-gray-600 mx-auto" />
			);
		}
		return <span className="text-sm text-white">{value}</span>;
	};

	return (
		<main className="min-h-screen bg-aether-obsidian relative overflow-hidden">
			{/* Animated Background */}
			<div className="absolute inset-0 opacity-20">
				<div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
				<div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
				<div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
			</div>

			<div className="relative z-10 mx-auto max-w-7xl px-4 py-16 md:px-6">
				<SectionHeader 
					title="💎 Simple, Transparent Pricing" 
					subtitle="Choose the perfect plan for your needs. No hidden fees, cancel anytime." 
				/>

				{/* Billing Toggle */}
				<motion.div 
					className="mt-12 flex items-center justify-center space-x-4"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<span className={`text-sm font-semibold ${billingCycle === 'monthly' ? 'text-white' : 'text-aether-mist'}`}>
						Monthly
					</span>
					<button
						onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
						className="relative w-16 h-8 rounded-full bg-white/10 border border-white/20 transition-all duration-300"
					>
						<motion.div
							className="absolute top-1 left-1 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
							animate={{ x: billingCycle === 'yearly' ? 32 : 0 }}
							transition={{ type: 'spring', stiffness: 500, damping: 30 }}
						/>
					</button>
					<span className={`text-sm font-semibold ${billingCycle === 'yearly' ? 'text-white' : 'text-aether-mist'}`}>
						Yearly
					</span>
					{billingCycle === 'yearly' && (
						<motion.span
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 text-xs font-bold rounded-full border border-green-500/30"
						>
							Save 17%
						</motion.span>
					)}
				</motion.div>

				{/* Pricing Cards */}
				<motion.div 
					className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					{plans.map((plan, index) => (
						<motion.div
							key={plan.name}
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							whileHover={{ y: -10, scale: 1.02 }}
							className={`relative rounded-3xl backdrop-blur-xl border p-8 transition-all duration-500 ${
								plan.popular
									? 'bg-gradient-to-br from-white/15 to-white/5 border-blue-500/50 shadow-2xl shadow-blue-500/20'
									: 'bg-gradient-to-br from-white/10 to-white/5 border-white/10 hover:border-white/20'
							}`}
						>
							{/* Popular Badge */}
							{plan.popular && (
								<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
									<span className="px-4 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center space-x-1">
										<StarIcon className="w-3 h-3" />
										<span>MOST POPULAR</span>
									</span>
								</div>
							)}

							{/* Icon */}
							<div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6 shadow-lg`}>
								<plan.icon className="w-8 h-8 text-white" />
							</div>

							{/* Plan Info */}
							<h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
							<p className="text-sm text-aether-mist mb-6">{plan.tagline}</p>

							{/* Price */}
							<div className="mb-6">
								<div className="flex items-baseline space-x-2">
									<span className={`text-5xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
										{plan.price}
									</span>
									<span className="text-aether-mist text-sm">{plan.period}</span>
								</div>
								{plan.savings && (
									<p className="text-xs text-green-400 mt-2">{plan.savings}</p>
								)}
							</div>

							<p className="text-sm text-aether-mist mb-8">{plan.description}</p>

							{/* CTA Button */}
							<Link
								href="/contact"
								className={`block w-full py-4 text-center font-bold rounded-xl transition-all duration-300 mb-8 ${
									plan.popular
										? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 shadow-lg hover:shadow-blue-500/50'
										: 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
								}`}
							>
								{plan.cta}
							</Link>

							{/* Features */}
							<div className="space-y-4">
								<p className="text-xs font-semibold text-white uppercase tracking-wider">What's included:</p>
								<ul className="space-y-3">
									{plan.features.map((feature, i) => (
										<li key={i} className="flex items-start space-x-3">
											<CheckIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
											<span className="text-sm text-aether-mist">{feature}</span>
										</li>
									))}
								</ul>
								{plan.notIncluded && plan.notIncluded.length > 0 && (
									<ul className="space-y-3 pt-4 border-t border-white/10">
										{plan.notIncluded.map((feature, i) => (
											<li key={i} className="flex items-start space-x-3">
												<XMarkIcon className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
												<span className="text-sm text-gray-600">{feature}</span>
											</li>
										))}
									</ul>
								)}
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* Feature Comparison Table */}
				<motion.section 
					className="mt-24"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold text-white mb-4">Compare All Features</h2>
						<p className="text-aether-mist">Detailed breakdown of what's included in each plan</p>
					</div>

					<div className="rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden">
						{comparisonFeatures.map((category, categoryIndex) => (
							<div key={category.category}>
								{/* Category Header */}
								<div className="bg-white/5 px-8 py-4 border-b border-white/10">
									<h3 className="text-lg font-bold text-white">{category.category}</h3>
								</div>

								{/* Features */}
								{category.features.map((feature, featureIndex) => (
									<div
										key={featureIndex}
										className="grid grid-cols-4 gap-4 px-8 py-4 border-b border-white/10 hover:bg-white/5 transition-colors"
									>
										<div className="col-span-1 flex items-center">
											<span className="text-sm text-white font-medium">{feature.name}</span>
										</div>
										<div className="flex items-center justify-center">
											{renderFeatureValue(feature.free)}
										</div>
										<div className="flex items-center justify-center">
											{renderFeatureValue(feature.pro)}
										</div>
										<div className="flex items-center justify-center">
											{renderFeatureValue(feature.enterprise)}
										</div>
									</div>
								))}
							</div>
						))}
					</div>
				</motion.section>

				{/* Trust Indicators */}
				<motion.section 
					className="mt-24"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
						{[
							{ icon: ShieldCheckIcon, title: 'Secure & Safe', desc: 'Enterprise-grade security' },
							{ icon: BoltIcon, title: 'Fast Support', desc: '24/7 priority assistance' },
							{ icon: ChartBarIcon, title: 'Analytics', desc: 'Detailed insights & reports' },
							{ icon: UserGroupIcon, title: '10K+ Users', desc: 'Trusted by professionals' }
						].map((item, index) => (
							<motion.div
								key={item.title}
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
							>
								<item.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
								<h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
								<p className="text-xs text-aether-mist">{item.desc}</p>
							</motion.div>
						))}
					</div>
				</motion.section>

				{/* FAQ Section */}
				<motion.section 
					className="mt-24"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
						<p className="text-aether-mist">Everything you need to know about our pricing</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{[
							{
								q: 'Can I change plans later?',
								a: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.'
							},
							{
								q: 'What payment methods do you accept?',
								a: 'We accept all major credit cards, PayPal, and wire transfers for Enterprise plans.'
							},
							{
								q: 'Is there a free trial?',
								a: 'Yes! Pro plan comes with a 14-day free trial. No credit card required to start.'
							},
							{
								q: 'What happens when I cancel?',
								a: 'You can cancel anytime. Your account remains active until the end of your billing period.'
							},
							{
								q: 'Do you offer refunds?',
								a: 'Yes, we offer a 30-day money-back guarantee if you\'re not satisfied with our service.'
							},
							{
								q: 'Can I get a custom plan?',
								a: 'Absolutely! Contact our sales team to discuss custom plans tailored to your needs.'
							}
						].map((faq, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6"
							>
								<h4 className="text-lg font-bold text-white mb-3">{faq.q}</h4>
								<p className="text-aether-mist">{faq.a}</p>
							</motion.div>
						))}
					</div>
				</motion.section>

				{/* Bottom CTA */}
				<motion.div 
					className="mt-24"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<div className="rounded-3xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 p-12 text-center">
						<RocketLaunchIcon className="w-16 h-16 text-blue-400 mx-auto mb-6" />
						<h3 className="text-3xl font-bold text-white mb-4">
							Still Have Questions?
						</h3>
						<p className="text-xl text-aether-mist mb-8 max-w-2xl mx-auto">
							Our team is here to help you choose the right plan and answer any questions you may have.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								href="/contact"
								className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
							>
								Contact Sales
							</Link>
							<Link
								href="/about"
								className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 border border-white/20 transition-all duration-300"
							>
								Learn More
							</Link>
						</div>
					</div>
				</motion.div>
			</div>
		</main>
	);
}
