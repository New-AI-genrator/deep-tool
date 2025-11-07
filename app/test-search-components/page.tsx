'use client';

import { useState } from 'react';
import AdvancedSearchFilters from '../../components/AdvancedSearchFilters';
import SearchAnalytics from '../../components/SearchAnalytics';
import SearchHistory from '../../components/SearchHistory';
import TrendingSearches from '../../components/TrendingSearches';

export default function TestSearchComponents() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = [
    {
      name: 'Creative & Design',
      slug: 'creative-design',
      subcategories: [
        { name: 'AI Art Generation', slug: 'ai-art-generation' },
        { name: 'Graphic Design', slug: 'graphic-design' }
      ]
    },
    {
      name: 'Development & Engineering',
      slug: 'development-engineering',
      subcategories: [
        { name: 'Code Editors', slug: 'code-editors' },
        { name: 'Version Control', slug: 'version-control' }
      ]
    }
  ];
  
  const subcategories = [
    { name: 'AI Art Generation', slug: 'ai-art-generation' },
    { name: 'Graphic Design', slug: 'graphic-design' }
  ];
  
  const initialFilters = {
    pricing: [],
    minRating: null,
    badges: [],
    category: null,
    subcategory: null,
    sortBy: 'relevance'
  };
  
  const handleFilterChange = (filters: any) => {
    console.log('Filters changed:', filters);
  };
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log('Search query:', query);
  };
  
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Search Components Test</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Advanced Search Filters */}
          <div className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Advanced Search Filters</h2>
            <AdvancedSearchFilters 
              onFilterChange={handleFilterChange} 
              initialFilters={initialFilters}
              categories={categories}
              subcategories={subcategories}
            />
          </div>
          
          {/* Search Analytics */}
          <div className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Search Analytics</h2>
            <SearchAnalytics />
          </div>
          
          {/* Search History */}
          <div className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Search History</h2>
            <SearchHistory onSearch={handleSearch} />
          </div>
          
          {/* Trending Searches */}
          <div className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Trending Searches</h2>
            <TrendingSearches onSearch={handleSearch} />
          </div>
        </div>
        
        <div className="mt-8 bg-gray-800 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Test Results</h2>
          <p className="text-gray-300">
            If you can see all the search components above, they are working correctly.
            Check the browser console for filter change events.
          </p>
          <p className="mt-4 text-gray-400">
            Current search query: <span className="font-mono">{searchQuery}</span>
          </p>
        </div>
      </div>
    </div>
  );
}