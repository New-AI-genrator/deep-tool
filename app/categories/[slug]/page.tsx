import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { categoriesWithSubcategories, getToolsByCategory } from '../../../data/tools';
import Link from 'next/link';
import { generateCategoryMetadata } from '../../../lib/seo';
import { BreadcrumbSchema } from '../../../components/StructuredData';
import UserPreferencesTracker from '../../../components/UserPreferencesTracker';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const category = categoriesWithSubcategories.find(
    (cat) => cat.slug === params.slug
  );

  if (!category) {
    return {
      title: 'Category Not Found • DeepTool',
      description: 'The requested category could not be found in our directory.'
    };
  }

  const tools = getToolsByCategory(category.slug);
  const subcategoryCount = category.subcategories.length;

  return generateCategoryMetadata({
    name: category.name,
    description: category.description,
    slug: category.slug,
    toolCount: tools.length,
    subcategoryCount: subcategoryCount,
  });
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categoriesWithSubcategories.find(
    (cat) => cat.slug === params.slug
  );

  if (!category) {
    notFound();
  }

  const tools = getToolsByCategory(category.slug);
  const subcategoryCount = category.subcategories.length;

  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: category.name, url: `/categories/${category.slug}` }
        ]} 
      />
      <UserPreferencesTracker category={category.name} />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">{category.name} Tools</h1>
            <p className="text-gray-300 max-w-2xl mx-auto mb-4">{category.description}</p>
            <div className="flex justify-center gap-6 text-sm">
              <div className="bg-gray-800/50 px-4 py-2 rounded-lg">
                <span className="text-gray-400">Tools: </span>
                <span className="font-semibold">{tools.length}+</span>
              </div>
              <div className="bg-gray-800/50 px-4 py-2 rounded-lg">
                <span className="text-gray-400">Subcategories: </span>
                <span className="font-semibold">{subcategoryCount}</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {category.subcategories.map((subcategory) => (
              <Link 
                href={`/categories/${category.slug}/${subcategory.slug}`}
                key={subcategory.slug}
                className="group"
              >
                <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors h-full">
                  <div className="text-4xl mb-4">{subcategory.icon}</div>
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                    {subcategory.name}
                  </h2>
                  <p className="text-gray-400 text-sm">{subcategory.description}</p>
                  <div className="mt-4 text-xs text-blue-400 group-hover:text-blue-300 transition-colors">
                    Explore tools →
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-semibold mb-6">About {category.name} Tools</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-4">
                {category.name} tools are essential for professionals and enthusiasts who want to enhance their productivity and capabilities in this field. 
                Our comprehensive directory features {tools.length}+ carefully curated tools across {subcategoryCount} specialized subcategories.
              </p>
              <p className="text-gray-300 mb-4">
                Whether you're a beginner looking to get started or an expert seeking advanced solutions, you'll find the perfect tools in our collection. 
                Each tool has been evaluated for quality, features, and user satisfaction to ensure you make the best choice for your needs.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-3">Why Choose Tools from Our Directory?</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Comprehensive comparison of features and pricing</li>
                <li>User reviews and ratings from real users</li>
                <li>Regular updates on new tools and versions</li>
                <li>Expert recommendations for different use cases</li>
                <li>Detailed tutorials and getting started guides</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  return categoriesWithSubcategories.map((category) => ({
    slug: category.slug,
  }));
}