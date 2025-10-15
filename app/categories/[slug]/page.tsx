import { notFound } from 'next/navigation';
import { categoriesWithSubcategories } from '../../../data/tools';
import Link from 'next/link';

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categoriesWithSubcategories.find(
    (cat) => cat.slug === params.slug
  );

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">{category.description}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return categoriesWithSubcategories.map((category) => ({
    slug: category.slug,
  }));
}
