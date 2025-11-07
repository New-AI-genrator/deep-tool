'use client';

import { useState, useEffect, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ToolCard } from '../../components/ToolCard';
import { SectionHeader } from '../../components/SectionHeader';
import { getAllTools, ToolBadge, ToolPricing, categoriesWithSubcategories } from '../../data/tools';
import TrendingSearches from '../../components/TrendingSearches';
import AdvancedSearchFilters from '../../components/AdvancedSearchFilters';
import SearchAnalytics from '../../components/SearchAnalytics';
import SearchHistory from '../../components/SearchHistory';
import SearchTips from '../../components/SearchTips';
import { FunnelIcon } from '@heroicons/react/24/outline';
import { Suspense } from 'react';

interface SearchFilters {
  pricing: string[];
  minRating: number | null;
  badges: string[];
  category: string | null;
  subcategory: string | null;
  sortBy: string;
}

interface SearchResult {
  id: string;
  name: string;
  tagline: string;
  logoUrl: string;
  category: string;
  categorySlug: string;
  subcategory: string;
  subcategorySlug: string;
  pricing: ToolPricing;
  badges: ToolBadge[] | undefined;
  rating: number | undefined;
  reviewCount: number | undefined;
  relevanceScore: number;
}

// Separate component for the search content that uses hooks
function AdvancedSearchContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<SearchFilters>({
    pricing: [],
    minRating: null,
    badges: [],
    category: null,
    subcategory: null,
    sortBy: 'relevance'
  });
  const [offset, setOffset] = useState(0);
  const [limit] = useState(24);
  
  // Initialize from URL params
  useEffect(() => {
    const urlQuery = searchParams?.get('query') || '';
    const pricing = searchParams?.get('pricing') ? searchParams.get('pricing')?.split(',') || [] : [];
    const minRating = searchParams?.get('minRating') ? parseFloat(searchParams.get('minRating') || '0') : null;
    const badges = searchParams?.get('badges') ? searchParams.get('badges')?.split(',') || [] : [];
    const category = searchParams?.get('category') || null;
    const subcategory = searchParams?.get('subcategory') || null;
    const sortBy = searchParams?.get('sortBy') || 'relevance';
    
    setQuery(urlQuery);
    setFilters({
      pricing,
      minRating,
      badges,
      category,
      subcategory,
      sortBy
    });
  }, [searchParams]);
  
  // Fetch search results
  useEffect(() => {
    if (!query && filters.pricing.length === 0 && filters.badges.length === 0 && 
        !filters.minRating && !filters.category && !filters.subcategory) {
      setResults([]);
      setTotalResults(0);
      return;
    }
    
    const fetchResults = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const params = new URLSearchParams();
        if (query) params.set('q', query);
        if (filters.pricing.length > 0) params.set('pricing', filters.pricing.join(','));
        if (filters.minRating) params.set('minRating', filters.minRating.toString());
        if (filters.badges.length > 0) params.set('badges', filters.badges.join(','));
        if (filters.category) params.set('category', filters.category);
        if (filters.subcategory) params.set('subcategory', filters.subcategory);
        if (filters.sortBy) params.set('sortBy', filters.sortBy);
        params.set('offset', offset.toString());
        params.set('limit', limit.toString());
        
        const response = await fetch(`/api/advanced-search?${params.toString()}`);
        const data = await response.json();
        
        if (data.success) {
          setResults(data.results);
          setTotalResults(data.total);
        } else {
          setError(data.error || 'Failed to load search results');
        }
      } catch (err) {
        setError('Failed to load search results');
        console.error('Search error:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchResults();
  }, [query, filters, offset, limit]);
  
  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setOffset(0);
    
    // Save to search history
    if (typeof window !== 'undefined' && newQuery.trim()) {
      try {
        const history = JSON.parse(localStorage.getItem('deeptool_search_history') || '[]');
        // Add new query to the beginning and remove duplicates
        const updatedHistory = [newQuery, ...history.filter((q: string) => q !== newQuery)];
        // Keep only the last 10 searches
        const trimmedHistory = updatedHistory.slice(0, 10);
        localStorage.setItem('deeptool_search_history', JSON.stringify(trimmedHistory));
      } catch (error) {
        console.error('Error saving to search history:', error);
      }
    }
    
    // Update URL
    const params = new URLSearchParams();
    if (newQuery) params.set('query', newQuery);
    if (filters.pricing.length > 0) params.set('pricing', filters.pricing.join(','));
    if (filters.minRating) params.set('minRating', filters.minRating.toString());
    if (filters.badges.length > 0) params.set('badges', filters.badges.join(','));
    if (filters.category) params.set('category', filters.category);
    if (filters.subcategory) params.set('subcategory', filters.subcategory);
    if (filters.sortBy !== 'relevance') params.set('sortBy', filters.sortBy);
    
    router.push(`/advanced-search?${params.toString()}`);
  };
  
  const handleFilterChange = (newFilters: SearchFilters) => {
    setFilters(newFilters);
    setOffset(0);
    
    // Update URL
    const params = new URLSearchParams();
    if (query) params.set('query', query);
    if (newFilters.pricing.length > 0) params.set('pricing', newFilters.pricing.join(','));
    if (newFilters.minRating) params.set('minRating', newFilters.minRating.toString());
    if (newFilters.badges.length > 0) params.set('badges', newFilters.badges.join(','));
    if (newFilters.category) params.set('category', newFilters.category);
    if (newFilters.subcategory) params.set('subcategory', newFilters.subcategory);
    if (newFilters.sortBy !== 'relevance') params.set('sortBy', newFilters.sortBy);
    
    router.push(`/advanced-search?${params.toString()}`);
  };
  
  const handleTrendingSearch = (searchQuery: string) => {
    handleSearch(searchQuery);
  };
  
  const handlePageChange = (newOffset: number) => {
    setOffset(newOffset);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Get available categories and subcategories for filters
  const categories = useMemo(() => {
    return categoriesWithSubcategories.map(cat => ({
      name: cat.name,
      slug: cat.slug,
      subcategories: cat.subcategories.map(sub => ({
        name: sub.name,
        slug: sub.slug
      }))
    }));
  }, []);
  
  // Get available subcategories based on selected category
  const availableSubcategories = useMemo(() => {
    if (!filters.category) return [];
    const category = categoriesWithSubcategories.find(cat => cat.slug === filters.category);
    return category ? category.subcategories : [];
  }, [filters.category, categoriesWithSubcategories]);
  
  return (
    <>
      {/* Search Input */}
      <div className="mb-8">
        <div className="relative max-w-3xl mx-auto">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch(query)}
            placeholder="Search for AI tools, categories, features..."
            className="w-full px-6 py-4 bg-gray-800/50 border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all text-lg"
          />
          <button
            onClick={() => handleSearch(query)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
          >
            Search
          </button>
        </div>
      </div>
      
      {/* Search History */}
      {!query && results.length === 0 && (
        <div className="mb-8">
          <SearchHistory onSearch={handleSearch} />
        </div>
      )}
      
      {/* Trending Searches */}
      {!query && results.length === 0 && (
        <div className="mb-8">
          <TrendingSearches onSearch={handleTrendingSearch} />
        </div>
      )}
      
      {/* Search Tips */}
      {!query && results.length === 0 && (
        <div className="mb-8">
          <SearchTips />
        </div>
      )}
      
      {/* Search Analytics */}
      {!query && results.length === 0 && (
        <div className="mb-12">
          <SearchAnalytics />
        </div>
      )}
      
      {/* Filters */}
      <div className="mb-8">
        <AdvancedSearchFilters 
          onFilterChange={handleFilterChange} 
          initialFilters={filters}
          categories={categories}
          subcategories={availableSubcategories}
        />
      </div>
      
      {/* Results */}
      {loading ? (
        <div className="flex justify-center items-center py-12">
          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : error ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold mb-4">Error loading results</h3>
          <p className="text-gray-300 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
          >
            Retry
          </button>
        </div>
      ) : results.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {results.map((tool) => (
              <ToolCard
                key={tool.id}
                name={tool.name}
                tagline={tool.tagline}
                logoUrl={tool.logoUrl}
                category={tool.category}
                id={tool.id}
                badges={tool.badges as Array<'nexus-verified' | 'trending' | 'enterprise'> | undefined}
              />
            ))}
          </div>
          
          {/* Pagination */}
          {totalResults > limit && (
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={() => handlePageChange(Math.max(0, offset - limit))}
                disabled={offset === 0}
                className="px-4 py-2 bg-gray-800 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors"
              >
                Previous
              </button>
              
              <span className="text-gray-300">
                {offset + 1}-{Math.min(offset + limit, totalResults)} of {totalResults}
              </span>
              
              <button
                onClick={() => handlePageChange(offset + limit)}
                disabled={offset + limit >= totalResults}
                className="px-4 py-2 bg-gray-800 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors"
              >
                Next
              </button>
            </div>
          )}
        </>
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
function AdvancedSearchLoading() {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default function AdvancedSearchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <SectionHeader 
          title="Advanced Search" 
          subtitle="Refine your search with advanced filters" 
        />
        
        <Suspense fallback={<AdvancedSearchLoading />}>
          <AdvancedSearchContent />
        </Suspense>
      </div>
    </div>
  );
}