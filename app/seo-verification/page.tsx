import { SectionHeader } from '../../components/SectionHeader';

export const metadata = {
  title: 'SEO Verification',
  description: 'Page for SEO verification purposes',
};

export default function SEOVerificationPage() {
  return (
    <div className="min-h-screen bg-aether-obsidian">
      <div className="mx-auto max-w-4xl px-4 py-16 md:px-6">
        <SectionHeader
          title="SEO Verification"
          subtitle="This page is used for search engine verification purposes."
        />

        <div className="mt-12 space-y-8 text-aether-mist">
          <section className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Search Engine Verification</h2>
            <p className="mb-4">
              This page contains meta tags and verification files needed for search engine verification.
            </p>
            
            <div className="bg-gray-900 rounded-lg p-4 mt-6">
              <h3 className="text-lg font-semibold text-white mb-2">Verification Status</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                  <span>Google Search Console: Verified</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
                  <span>Bing Webmaster Tools: Pending</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Sitemap Information</h2>
            <p className="mb-4">
              Our sitemap is automatically generated and updated with new content.
            </p>
            <div className="bg-gray-900 rounded-lg p-4">
              <p className="font-mono text-sm">
                Sitemap URL: https://deep-tool.vercel.app/sitemap.xml
              </p>
            </div>
          </section>

          <section className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Robots.txt</h2>
            <p className="mb-4">
              Our robots.txt file controls crawler access to the site.
            </p>
            <div className="bg-gray-900 rounded-lg p-4">
              <p className="font-mono text-sm">
                Robots.txt URL: https://deep-tool.vercel.app/robots.txt
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}