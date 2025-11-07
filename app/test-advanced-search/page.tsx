'use client';

import { useState, useEffect } from 'react';
import AdvancedSearchFilters from '../../components/AdvancedSearchFilters';
import { categoriesWithSubcategories } from '../../data/tools';

export default function TestAdvancedSearch() {
  const [categories, setCategories] = useState<any[]>([]);
  
  useEffect(() => {
    // Transform categories data for the filters component
    const transformedCategories = categoriesWithSubcategories.map(cat => ({
      name: cat.name,
      slug: cat.slug,
      subcategories: cat.subcategories.map(sub => ({
        name: sub.name,
        slug: sub.slug
      }))
    }));
    
    setCategories(transformedCategories);
  }, []);
  
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
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Advanced Search Test</h1>
        
        <div className="mb-8">
          <AdvancedSearchFilters 
            onFilterChange={handleFilterChange} 
            initialFilters={initialFilters}
            categories={categories}
            subcategories={[]}
          />
        </div>
        
        <div className="bg-gray-800 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Test Results</h2>
          <p className="text-gray-300">
            If you can see the advanced search filters above, the component is working correctly.
          </p>
        </div>
      </div>
    </div>
  );
}