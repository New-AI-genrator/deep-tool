'use client';

import { Metadata } from 'next';
import { ToolCard } from '../../components/ToolCard';
import { SectionHeader } from '../../components/SectionHeader';
import { getAllTools, ToolBadge } from '../../data/tools';
import TrendingSearches from '../../components/TrendingSearches';
import SearchFilters from '../../components/SearchFilters';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Suspense } from 'react';

interface SearchParams {
  query?: string;
  pricing?: string;
  rating?: string;
  badges?: string;
  sort?: string;
}

interface SearchFilters {
  pricing: string[];
  rating: number | null;
  badges: string[];
  sortBy: string;
}

// Separate component for the search content that uses hooks
function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const query = searchParams?.get('query') || '';
  const pricing = searchParams?.get('pricing') || '';
  const rating = searchParams?.get('rating') || '';
  const badges = searchParams?.get('badges') || '';
  const sort = searchParams?.get('sort') || '';
  
  // Get all tools
  const allTools = getAllTools();
  
  // Filter tools based on search parameters
  const filteredTools = allTools.filter(tool => {
    // Filter by query
    if (query && !tool.name.toLowerCase().includes(query.toLowerCase()) && 
        !tool.description.toLowerCase().includes(query.toLowerCase()) &&
        !tool.category.toLowerCase().includes(query.toLowerCase())) {
      return false;
    }
    
    // Filter by pricing
    if (pricing && tool.pricing !== pricing) {
      return false;
    }
    
    // Filter by rating
    if (rating && tool.rating && tool.rating < parseFloat(rating)) {
      return false;
    }
    
    // Filter by badges
    if (badges && tool.badges) {
      const badgeArray = badges.split(',');
      if (!badgeArray.some(badge => tool.badges?.includes(badge as ToolBadge))) {
        return false;
      }
    }
    
    return true;
  });
  
  // Sort tools
  const sortedTools = [...filteredTools].sort((a, b) => {
    switch (sort) {
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      case 'popular':
        return (b.reviewCount || 0) - (a.reviewCount || 0);
      case 'newest':
        // For this example, we'll sort by name since we don't have a date field
        return a.name.localeCompare(b.name);
      default:
        // Default sorting by relevance (we'll use name for simplicity)
        return a.name.localeCompare(b.name);
    }
  });
  
  // Limit to 24 results
  const results = sortedTools.slice(0, 24);
  
  const handleTrendingSearch = (searchQuery: string) => {
    router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
  };
  
  const handleFilterChange = (newFilters: SearchFilters) => {
    const params = new URLSearchParams();
    if (query) params.set('query', query);
    if (newFilters.pricing.length > 0) params.set('pricing', newFilters.pricing.join(','));
    if (newFilters.rating) params.set('rating', newFilters.rating.toString());
    if (newFilters.badges.length > 0) params.set('badges', newFilters.badges.join(','));
    if (newFilters.sortBy !== 'relevance') params.set('sort', newFilters.sortBy);
    
    router.push(`/search?${params.toString()}`);
  };
  
  const initialFilters: SearchFilters = {
    pricing: pricing ? pricing.split(',') : [],
    rating: rating ? parseFloat(rating) : null,
    badges: badges ? badges.split(',') : [],
    sortBy: sort || 'relevance'
  };

  return (
    <>
      {/* Search Input */}
      <div className="mb-8">
        <div className="relative max-w-3xl mx-auto">
          <input
            type="text"
            value={query}
            onChange={(e) => {
              const newQuery = e.target.value;
              const params = new URLSearchParams();
              if (newQuery) params.set('query', newQuery);
              if (pricing) params.set('pricing', pricing);
              if (rating) params.set('rating', rating);
              if (badges) params.set('badges', badges);
              if (sort) params.set('sort', sort);
              
              router.push(`/search?${params.toString()}`);
            }}
            onKeyPress={(e) => e.key === 'Enter' && router.push(`/search?query=${encodeURIComponent(query)}`)}
            placeholder="Search for AI tools, categories, features..."
            className="w-full px-6 py-4 bg-gray-800/50 border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all text-lg"
          />
          <button
            onClick={() => router.push(`/search?query=${encodeURIComponent(query)}`)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
          >
            Search
          </button>
        </div>
      </div>
      
      {/* Advanced Search Banner */}
      <div className="mb-8 bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-500/30 rounded-2xl p-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Want More Advanced Search Options?</h3>
            <p className="text-blue-200">
              Try our Advanced Search for better filtering, sorting, and discovery features.
            </p>
          </div>
          <Link 
            href="/advanced-search" 
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 whitespace-nowrap"
          >
            Go to Advanced Search
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
      
      <SearchFilters 
        onFilterChange={handleFilterChange} 
        initialFilters={initialFilters} 
      />
      
      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((tool) => (
            <ToolCard
              key={tool.slug}
              name={tool.name}
              tagline={tool.tagline}
              logoUrl={tool.logoUrl}
              category={tool.category}
              id={tool.slug}
              badges={tool.badges as Array<'nexus-verified' | 'trending' | 'enterprise'> | undefined}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold mb-4">No tools found</h3>
          <p className="text-gray-300 mb-6">
            Try adjusting your search criteria or browse our categories.
          </p>
          <div className="max-w-md mx-auto mb-8">
            <TrendingSearches onSearch={handleTrendingSearch} />
          </div>
          <div className="mt-8">
            <a 
              href="/categories" 
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
            >
              Browse Categories
            </a>
          </div>
        </div>
      )}
    </>
  );
}

// Loading component for Suspense fallback
function SearchLoading() {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default function SearchResultsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Search Tools" 
          subtitle="Find the perfect AI tools for your needs" 
        />
        
        <Suspense fallback={<SearchLoading />}>
          <SearchContent />
        </Suspense>
      </div>
    </div>
  );
}