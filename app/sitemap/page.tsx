import Link from 'next/link';
import { getAllBlogPosts, BlogPost } from '../../data/blog-posts';
import { getAllTools, ToolEntry } from '../../data/tools';

export default function SitemapPage() {
  const blogPosts: BlogPost[] = getAllBlogPosts();
  const tools: ToolEntry[] = getAllTools();
  
  // Group tools by category
  const toolsByCategory: Record<string, ToolEntry[]> = {};
  tools.forEach((tool: ToolEntry) => {
    if (!toolsByCategory[tool.categorySlug]) {
      toolsByCategory[tool.categorySlug] = [];
    }
    toolsByCategory[tool.categorySlug].push(tool);
  });
  
  // Group blog posts by category
  const postsByCategory: Record<string, BlogPost[]> = {};
  blogPosts.forEach((post: BlogPost) => {
    if (!postsByCategory[post.category]) {
      postsByCategory[post.category] = [];
    }
    postsByCategory[post.category].push(post);
  });

  return (
    <div className="min-h-screen bg-aether-obsidian text-text-mist py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-accent-electrum mb-4">Sitemap</h1>
          <p className="text-xl text-text-mist/80">Complete directory of all pages on DeepTool</p>
        </div>
        
        {/* Tools Section */}
        <div className="bg-aether-charcoal rounded-xl p-8 mb-8 border border-accent-holo/20">
          <h2 className="text-2xl font-bold text-accent-electrum mb-6">Tools Directory</h2>
          
          {Object.entries(toolsByCategory).map(([categoryId, categoryTools]) => (
            <div key={categoryId} className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4 capitalize">
                {categoryId.replace('-', ' ')} Tools
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {categoryTools.map((tool: ToolEntry) => (
                  <li key={tool.slug}>
                    <Link 
                      href={`/tools/${tool.slug}`} 
                      className="text-blue-400 hover:text-blue-300 transition"
                    >
                      {tool.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Blog Section */}
        <div className="bg-aether-charcoal rounded-xl p-8 mb-8 border border-accent-holo/20">
          <h2 className="text-2xl font-bold text-accent-electrum mb-6">Blog Posts</h2>
          
          {Object.entries(postsByCategory).map(([category, categoryPosts]) => (
            <div key={category} className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4 capitalize">
                {category.replace('-', ' ')} Articles
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {categoryPosts.map((post: BlogPost) => (
                  <li key={post.slug}>
                    <Link 
                      href={`/blog/${post.slug}`} 
                      className="text-blue-400 hover:text-blue-300 transition"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Other Pages */}
        <div className="bg-aether-charcoal rounded-xl p-8 border border-accent-holo/20">
          <h2 className="text-2xl font-bold text-accent-electrum mb-6">Other Pages</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <li><Link href="/" className="text-blue-400 hover:text-blue-300 transition">Home</Link></li>
            <li><Link href="/about" className="text-blue-400 hover:text-blue-300 transition">About</Link></li>
            <li><Link href="/categories" className="text-blue-400 hover:text-blue-300 transition">Categories</Link></li>
            <li><Link href="/blog" className="text-blue-400 hover:text-blue-300 transition">Blog</Link></li>
            <li><Link href="/tools" className="text-blue-400 hover:text-blue-300 transition">All Tools</Link></li>
            <li><Link href="/best" className="text-blue-400 hover:text-blue-300 transition">Best Tools</Link></li>
            <li><Link href="/compare" className="text-blue-400 hover:text-blue-300 transition">Compare Tools</Link></li>
            <li><Link href="/contact" className="text-blue-400 hover:text-blue-300 transition">Contact</Link></li>
            <li><Link href="/privacy" className="text-blue-400 hover:text-blue-300 transition">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-blue-400 hover:text-blue-300 transition">Terms of Service</Link></li>
            <li><Link href="/pricing" className="text-blue-400 hover:text-blue-300 transition">Pricing</Link></li>
            <li><Link href="/seo-audit" className="text-blue-400 hover:text-blue-300 transition">SEO Audit</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}