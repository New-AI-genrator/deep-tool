import { notFound } from 'next/navigation';
import { categoriesWithSubcategories, toolsBySubcategory } from '../../../../data/tools';
import Link from 'next/link';
import UserPreferencesTracker from '../../../../components/UserPreferencesTracker';

export default async function SubcategoryPage({ 
  params 
}: { 
  params: { slug: string; sub: string } 
}) {
  const resolvedParams = await Promise.resolve(params);
  const category = categoriesWithSubcategories.find(
    (cat) => cat.slug === resolvedParams.slug
  );
  
  const subcategory = category?.subcategories.find(
    (sub) => sub.slug === resolvedParams.sub
  );
  
  const tools = toolsBySubcategory[`${resolvedParams.slug}-${resolvedParams.sub}`] || 
               toolsBySubcategory[resolvedParams.sub] || [];

  if (!category || !subcategory) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center text-sm text-gray-400 mb-8" aria-label="Breadcrumb">
          <Link href="/categories" className="hover:text-white">Categories</Link>
          <span className="mx-2">/</span>
          <Link href={`/categories/${category.slug}`} className="hover:text-white">
            {category.name}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white">{subcategory.name}</span>
        </nav>
        <UserPreferencesTracker category={category.name} />
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{subcategory.name}</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">{subcategory.description}</p>
        </div>
        
        {tools.length === 0 ? (
          <div className="text-center text-gray-400 py-12">
            <p>No tools available in this category yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <a
                key={tool.slug}
                href={tool.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gray-700 flex items-center justify-center mr-4">
                      {tool.logoUrl ? (
                        <img 
                          src={tool.logoUrl} 
                          alt={`${tool.name} logo`} 
                          className="w-8 h-8 object-contain"
                        />
                      ) : (
                        <span className="text-2xl">{tool.name.charAt(0)}</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                        {tool.name}
                      </h2>
                      <p className="text-sm text-gray-400">{tool.tagline}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{tool.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tool.badges?.map((badge) => (
                      <span 
                        key={badge}
                        className="px-2 py-1 text-xs rounded-full bg-blue-900/50 text-blue-300"
                      >
                        {badge}
                      </span>
                    ))}
                    <span className="px-2 py-1 text-xs rounded-full bg-gray-700/50 text-gray-300 ml-auto">
                      {tool.pricing}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-sm text-blue-400 group-hover:underline">
                    Visit Website
                    <svg 
                      className="w-4 h-4 ml-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                      />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const params: { slug: string; sub: string }[] = [];
  
  categoriesWithSubcategories.forEach((category) => {
    category.subcategories.forEach((subcategory) => {
      params.push({
        slug: category.slug,
        sub: subcategory.slug,
      });
    });
  });
  
  return params;
}
