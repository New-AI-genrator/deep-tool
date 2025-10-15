import { SectionHeader } from '../../components/SectionHeader';

export default function PrivacyPolicy() {
	return (
		<div className="min-h-screen bg-aether-obsidian">
			<div className="mx-auto max-w-4xl px-4 py-16 md:px-6">
				<SectionHeader
					title="Privacy Policy"
					subtitle="Your privacy is our priority. Learn how we collect, use, and protect your information."
				/>

				<div className="mt-12 space-y-8 text-aether-mist">
					<section className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8">
						<h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
						<div className="space-y-4">
							<h3 className="text-xl font-semibold text-white">Personal Information</h3>
							<p>We may collect personal information that you voluntarily provide to us, including:</p>
							<ul className="list-disc list-inside space-y-2 ml-4">
								<li>Name and email address when you subscribe to our newsletter</li>
								<li>Contact information when you reach out to us</li>
								<li>Account information if you create an account</li>
								<li>Payment information for premium services (processed securely through third-party providers)</li>
							</ul>

							<h3 className="text-xl font-semibold text-white mt-6">Automatically Collected Information</h3>
							<p>We automatically collect certain information when you visit our website:</p>
							<ul className="list-disc list-inside space-y-2 ml-4">
								<li>IP address and device information</li>
								<li>Browser type and version</li>
								<li>Pages visited and time spent on our site</li>
								<li>Referring website information</li>
								<li>Cookies and similar tracking technologies</li>
							</ul>
						</div>
					</section>

					<section className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8">
						<h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
						<p>We use the collected information for the following purposes:</p>
						<ul className="list-disc list-inside space-y-2 ml-4 mt-4">
							<li>To provide and improve our AI tools discovery services</li>
							<li>To send you newsletters and updates about new AI tools</li>
							<li>To respond to your inquiries and provide customer support</li>
							<li>To analyze website usage and improve user experience</li>
							<li>To prevent fraud and ensure website security</li>
							<li>To comply with legal obligations</li>
						</ul>
					</section>

					<section className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8">
						<h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
						<p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
						<ul className="list-disc list-inside space-y-2 ml-4 mt-4">
							<li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our website</li>
							<li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
							<li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
							<li><strong>Consent:</strong> When you have given us explicit consent to share your information</li>
						</ul>
					</section>

					<section className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8">
						<h2 className="text-2xl font-bold text-white mb-4">4. Cookies and Tracking</h2>
						<p>We use cookies and similar technologies to enhance your browsing experience:</p>
						<ul className="list-disc list-inside space-y-2 ml-4 mt-4">
							<li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
							<li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
							<li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
						</ul>
						<p className="mt-4">You can control cookie settings through your browser preferences.</p>
					</section>

					<section className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8">
						<h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
						<p>We implement appropriate security measures to protect your personal information:</p>
						<ul className="list-disc list-inside space-y-2 ml-4 mt-4">
							<li>SSL encryption for data transmission</li>
							<li>Secure servers and databases</li>
							<li>Regular security audits and updates</li>
							<li>Limited access to personal information</li>
						</ul>
					</section>

					<section className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8">
						<h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
						<p>You have the following rights regarding your personal information:</p>
						<ul className="list-disc list-inside space-y-2 ml-4 mt-4">
							<li><strong>Access:</strong> Request a copy of your personal information</li>
							<li><strong>Correction:</strong> Update or correct inaccurate information</li>
							<li><strong>Deletion:</strong> Request deletion of your personal information</li>
							<li><strong>Portability:</strong> Receive your data in a structured format</li>
							<li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
						</ul>
					</section>

					<section className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8">
						<h2 className="text-2xl font-bold text-white mb-4">7. Third-Party Services</h2>
						<p>Our website may contain links to third-party websites and services. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.</p>
						
						<h3 className="text-xl font-semibold text-white mt-6">Google AdSense</h3>
						<p>We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your visits to our site and other sites on the Internet. You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-blue-400 hover:text-blue-300">Google Ad Settings</a>.</p>
					</section>

					<section className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8">
						<h2 className="text-2xl font-bold text-white mb-4">8. Children's Privacy</h2>
						<p>Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.</p>
					</section>

					<section className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8">
						<h2 className="text-2xl font-bold text-white mb-4">9. International Transfers</h2>
						<p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this privacy policy.</p>
					</section>

					<section className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8">
						<h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Policy</h2>
						<p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically.</p>
					</section>

					<section className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8">
						<h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
						<p>If you have any questions about this privacy policy or our data practices, please contact us:</p>
						<div className="mt-4 space-y-2">
							<p><strong>Email:</strong> privacy@aethernexus.com</p>
							<p><strong>Address:</strong> Aether Nexus, 123 Innovation Drive, Tech City, TC 12345</p>
						</div>
					</section>

					<div className="text-center text-sm text-aether-mist mt-12">
						<p>Last Updated: {new Date().toLocaleDateString()}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
