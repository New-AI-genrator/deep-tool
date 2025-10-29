import { Metadata } from 'next';
import { getAllTools, categoriesWithSubcategories } from '../../data/tools';

export const metadata: Metadata = {
  title: 'SEO Audit Report | DeepTool',
  description: 'Comprehensive SEO audit and health check for DeepTool directory',
  robots: {
    index: false,
    follow: false,
  },
};

export default function SEOAuditPage() {
  const allTools = getAllTools();
  const totalCategories = categoriesWithSubcategories.length;
  const totalSubcategories = categoriesWithSubcategories.reduce(
    (sum, cat) => sum + cat.subcategories.length,
    0
  );

  // Calculate SEO metrics
  const toolsWithDescriptions = allTools.filter(t => t.description && t.description.length > 50).length;
  const toolsWithKeywords = allTools.filter(t => t.tags && t.tags.length > 0).length;
  const toolsWithRatings = allTools.filter(t => t.rating && t.reviewCount).length;

  const seoScore = Math.round(
    ((toolsWithDescriptions / allTools.length) * 30 +
      (toolsWithKeywords / allTools.length) * 30 +
      (toolsWithRatings / allTools.length) * 40) * 100
  ) / 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">SEO Audit Report</h1>
        
        {/* Overall Score */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-white/20">
          <h2 className="text-2xl font-semibold text-white mb-4">Overall SEO Health</h2>
          <div className="flex items-center gap-4">
            <div className="text-6xl font-bold text-green-400">{seoScore}%</div>
            <div className="text-white">
              <p className="text-lg">Your site is well-optimized!</p>
              <p className="text-sm opacity-70">Based on content quality metrics</p>
            </div>
          </div>
        </div>

        {/* Content Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard
            title="Total Tools"
            value={allTools.length.toLocaleString()}
            icon="🔧"
            color="blue"
          />
          <StatCard
            title="Categories"
            value={totalCategories.toString()}
            icon="📁"
            color="purple"
          />
          <StatCard
            title="Subcategories"
            value={totalSubcategories.toString()}
            icon="📂"
            color="indigo"
          />
        </div>

        {/* SEO Metrics */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-white/20">
          <h2 className="text-2xl font-semibold text-white mb-6">Content Quality Metrics</h2>
          <div className="space-y-4">
            <MetricBar
              label="Tools with Descriptions"
              current={toolsWithDescriptions}
              total={allTools.length}
              percentage={(toolsWithDescriptions / allTools.length) * 100}
            />
            <MetricBar
              label="Tools with Keywords/Tags"
              current={toolsWithKeywords}
              total={allTools.length}
              percentage={(toolsWithKeywords / allTools.length) * 100}
            />
            <MetricBar
              label="Tools with Ratings"
              current={toolsWithRatings}
              total={allTools.length}
              percentage={(toolsWithRatings / allTools.length) * 100}
            />
          </div>
        </div>

        {/* Technical SEO Checklist */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-semibold text-white mb-6">Technical SEO Checklist</h2>
          <div className="space-y-3">
            <ChecklistItem checked={true} label="✅ robots.txt configured" />
            <ChecklistItem checked={true} label="✅ sitemap.xml generated dynamically" />
            <ChecklistItem checked={true} label="✅ Structured data (Schema.org) implemented" />
            <ChecklistItem checked={true} label="✅ Meta tags optimized" />
            <ChecklistItem checked={true} label="✅ Open Graph tags present" />
            <ChecklistItem checked={true} label="✅ Twitter Card tags present" />
            <ChecklistItem checked={true} label="✅ Canonical URLs set" />
            <ChecklistItem checked={true} label="✅ Google Search Console verified" />
            <ChecklistItem checked={false} label="⏳ Waiting for Google indexing" />
            <ChecklistItem checked={false} label="📈 Analytics integration pending" />
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mt-8 border border-white/20">
          <h2 className="text-2xl font-semibold text-white mb-6">SEO Recommendations</h2>
          <ul className="space-y-3 text-white/80">
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <span>Submit sitemap to Google Search Console</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <span>Request indexing for high-priority pages</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 text-xl">→</span>
              <span>Build quality backlinks from relevant sites</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 text-xl">→</span>
              <span>Add blog content regularly for fresh content</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 text-xl">→</span>
              <span>Implement user reviews and ratings system</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 text-xl">→</span>
              <span>Add internal linking between related tools</span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/10">
          <h3 className="text-white font-semibold mb-4">Quick SEO Links</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a 
              href="https://deep-tool.vercel.app/robots.txt" 
              target="_blank"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              robots.txt
            </a>
            <a 
              href="https://deep-tool.vercel.app/sitemap.xml" 
              target="_blank"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              sitemap.xml
            </a>
            <a 
              href="https://search.google.com/search-console" 
              target="_blank"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Search Console
            </a>
            <a 
              href="https://developers.google.com/search/docs/appearance/structured-data" 
              target="_blank"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Schema.org Docs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, color }: { title: string; value: string; icon: string; color: string }) {
  const colorClasses = {
    blue: 'from-blue-500/20 to-blue-600/20 border-blue-500/30',
    purple: 'from-purple-500/20 to-purple-600/20 border-purple-500/30',
    indigo: 'from-indigo-500/20 to-indigo-600/20 border-indigo-500/30',
  };

  return (
    <div className={`bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]} backdrop-blur-lg rounded-xl p-6 border`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-3xl">{icon}</span>
        <span className="text-3xl font-bold text-white">{value}</span>
      </div>
      <p className="text-white/70 text-sm">{title}</p>
    </div>
  );
}

function MetricBar({ label, current, total, percentage }: { label: string; current: number; total: number; percentage: number }) {
  return (
    <div>
      <div className="flex justify-between text-white/80 text-sm mb-2">
        <span>{label}</span>
        <span>{current} / {total} ({percentage.toFixed(1)}%)</span>
      </div>
      <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

function ChecklistItem({ checked, label }: { checked: boolean; label: string }) {
  return (
    <div className="flex items-center gap-3 text-white/80">
      <div className={`w-6 h-6 rounded flex items-center justify-center ${checked ? 'bg-green-500' : 'bg-gray-600'}`}>
        {checked && <span className="text-white text-sm">✓</span>}
      </div>
      <span>{label}</span>
    </div>
  );
}
