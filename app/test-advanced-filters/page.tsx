'use client';

import AdvancedSearchFilters from '../../components/AdvancedSearchFilters';

export default function TestPage() {
  const categories = [
    {
      name: 'Category 1',
      slug: 'category-1',
      subcategories: [
        { name: 'Subcategory 1', slug: 'subcategory-1' },
        { name: 'Subcategory 2', slug: 'subcategory-2' }
      ]
    }
  ];

  const subcategories = [
    { name: 'Subcategory 1', slug: 'subcategory-1' },
    { name: 'Subcategory 2', slug: 'subcategory-2' }
  ];

  const handleFilterChange = (filters: any) => {
    console.log('Filters changed:', filters);
  };

  const initialFilters = {
    pricing: [],
    minRating: null,
    badges: [],
    category: null,
    subcategory: null,
    sortBy: 'relevance'
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Test Advanced Search Filters</h1>
      <AdvancedSearchFilters 
        onFilterChange={handleFilterChange} 
        initialFilters={initialFilters}
        categories={categories}
        subcategories={subcategories}
      />
    </div>
  );
}