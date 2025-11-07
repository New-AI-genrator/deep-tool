import type { Metadata } from 'next';
import { NexusMiniPlayground } from '../../../components/NexusMiniPlayground';
import { generateToolMetadata } from '../../../lib/seo';
import { getToolBySlug } from '../../../data/tools';
import { BreadcrumbSchema, SoftwareApplicationSchema } from '../../../components/StructuredData';
import AdUnit from '../../../components/AdUnit';
import UserPreferencesTracker from '../../../components/UserPreferencesTracker';

export const dynamicParams = true;

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const tool = getToolBySlug(params.slug);
  
  if (!tool) {
    return {
      title: 'Tool Not Found • DeepTool',
      description: 'The requested tool could not be found in our directory.'
    };
  }
  
  return generateToolMetadata({
    name: tool.name,
    description: tool.description,
    category: tool.category,
    subcategory: tool.subcategory,
    slug: tool.slug,
    rating: tool.rating,
    reviewCount: tool.reviewCount,
    features: tool.features,
    tags: tool.tags,
  });
}

export default function ToolDetailPage({ params }: { params: { slug: string } }) {
  const tool = getToolBySlug(params.slug);
  
  if (!tool) {
    return (
      <main className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <section className="md:col-span-2">
          <h1 className="text-2xl font-semibold text-white">Tool Not Found</h1>
          <p className="mt-2 text-sm text-aether-mist">The requested tool could not be found in our directory.</p>
        </section>
      </main>
    );
  }
  
  return (
    <>
      <UserPreferencesTracker toolId={tool.slug} />
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: tool.category, url: `/categories/${tool.categorySlug}` },
          { name: tool.subcategory, url: `/categories/${tool.categorySlug}/${tool.subcategorySlug}` },
          { name: tool.name, url: `/tools/${tool.slug}` }
        ]} 
      />
      <SoftwareApplicationSchema
        name={tool.name}
        description={tool.description}
        url={`https://deep-tool.vercel.app/tools/${tool.slug}`}
        rating={tool.rating}
        reviewCount={tool.reviewCount}
        category={tool.category}
        pricing={tool.pricing}
        features={tool.features}
        tags={tool.tags}
      />
      <UserPreferencesTracker category={tool.category} toolId={tool.slug} />
      <main className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <section className="md:col-span-2">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
              {/* Tool logo would go here */}
              <span className="text-white font-bold">{tool.name.charAt(0)}</span>
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-white">{tool.name}</h1>
              <p className="text-sm text-aether-mist">{tool.tagline}</p>
            </div>
          </div>
          
          <AdUnit 
            slot="1234567894" 
            format="horizontal" 
            className="my-4"
          />
          
          <div className="flex flex-wrap gap-2 mb-6">
            {tool.badges && tool.badges.map((badge) => (
              <span key={badge} className="px-2 py-1 text-xs rounded-full bg-blue-900/50 text-blue-300 border border-blue-700/50">
                {badge}
              </span>
            ))}
            <span className="px-2 py-1 text-xs rounded-full bg-purple-900/50 text-purple-300 border border-purple-700/50">
              {tool.pricing}
            </span>
          </div>
          
          <p className="mt-2 text-sm text-aether-mist">{tool.description}</p>
          
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-xl border border-[#2A2F3A] bg-aether-obsidian p-4 text-center">
              <div className="text-xs text-aether-mist">Rating</div>
              <div className="mt-1 text-sm text-white">{tool.rating ? `${tool.rating}/5` : 'N/A'}</div>
            </div>
            <div className="rounded-xl border border-[#2A2F3A] bg-aether-obsidian p-4 text-center">
              <div className="text-xs text-aether-mist">Reviews</div>
              <div className="mt-1 text-sm text-white">{tool.reviewCount ? tool.reviewCount.toLocaleString() : 'N/A'}</div>
            </div>
            <div className="rounded-xl border border-[#2A2F3A] bg-aether-obsidian p-4 text-center">
              <div className="text-xs text-aether-mist">Category</div>
              <div className="mt-1 text-sm text-white">{tool.category}</div>
            </div>
            <div className="rounded-xl border border-[#2A2F3A] bg-aether-obsidian p-4 text-center">
              <div className="text-xs text-aether-mist">Pricing</div>
              <div className="mt-1 text-sm text-white capitalize">{tool.pricing}</div>
            </div>
          </div>
          
          <AdUnit 
            slot="1234567895" 
            format="horizontal" 
            className="my-6"
          />
          
          <div className="mt-8 rounded-2xl border border-[#2A2F3A] bg-aether-obsidian p-6">
            <h2 className="text-base font-semibold text-white mb-4">Key Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {tool.features.map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-aether-mist">
                  <span className="text-green-500 mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-8 rounded-2xl border border-[#2A2F3A] bg-aether-obsidian p-6">
            <h2 className="text-base font-semibold text-white mb-4">Use Cases</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {tool.useCases.map((useCase, index) => (
                <li key={index} className="flex items-center text-sm text-aether-mist">
                  <span className="text-blue-500 mr-2">•</span>
                  {useCase}
                </li>
              ))}
            </ul>
          </div>
          
          {tool.alternatives && tool.alternatives.length > 0 && (
            <div className="mt-8 rounded-2xl border border-[#2A2F3A] bg-aether-obsidian p-6">
              <h2 className="text-base font-semibold text-white mb-4">Popular Alternatives</h2>
              <div className="flex flex-wrap gap-2">
                {tool.alternatives.map((alternative, index) => (
                  <span key={index} className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-300 border border-gray-700">
                    {alternative}
                  </span>
                ))}
              </div>
            </div>
          )}
        </section>
        <aside className="md:col-span-1">
          <NexusMiniPlayground />
          
          <AdUnit 
            slot="1234567896" 
            format="vertical" 
            className="my-6"
          />
          
          {tool.pricingDetails && (
            <div className="mt-6 rounded-2xl border border-[#2A2F3A] bg-aether-obsidian p-6">
              <h2 className="text-base font-semibold text-white mb-4">Pricing</h2>
              <p className="text-sm text-aether-mist mb-2">{tool.pricingDetails.description}</p>
              {tool.pricingDetails.price && (
                <p className="text-lg font-semibold text-white">{tool.pricingDetails.price}</p>
              )}
              <a 
                href={tool.pricingDetails.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-3 inline-block px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                View Pricing
              </a>
            </div>
          )}
          
          <div className="mt-6 rounded-2xl border border-[#2A2F3A] bg-aether-obsidian p-6">
            <h2 className="text-base font-semibold text-white mb-4">Visit Tool</h2>
            <a 
              href={tool.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full px-4 py-2 text-center bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors block"
            >
              Go to {tool.name}
            </a>
          </div>
        </aside>
      </main>
    </>
  );
}