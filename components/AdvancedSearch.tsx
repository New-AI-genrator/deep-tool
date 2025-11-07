'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MagnifyingGlassIcon, FunnelIcon, XMarkIcon, ArrowTrendingUpIcon, StarIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

interface AdvancedSearchProps {
  onSearch: (query: string, filters: SearchFilters) => void;
}

interface SearchFilters {
  pricing: string[];
  rating: number | null;
  badges: string[];
  sortBy: string;
}

export function AdvancedSearch({ onSearch }: AdvancedSearchProps) {
  const [query, setQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({
    pricing: [],
    rating: null,
    badges: [],
    sortBy: 'relevance'
  });

  // Load search history from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const history = JSON.parse(localStorage.getItem('deeptool_search_history') || '[]');
        setSearchHistory(history.slice(0, 5)); // Show only the last 5 searches
      } catch (error) {
        console.error('Error loading search history:', error);
      }
    }
  }, []);

  // Save search query to history
  const saveToHistory = (searchQuery: string) => {
    if (typeof window !== 'undefined' && searchQuery.trim()) {
      try {
        const history = JSON.parse(localStorage.getItem('deeptool_search_history') || '[]');
        // Add new query to the beginning and remove duplicates
        const updatedHistory = [searchQuery, ...history.filter((q: string) => q !== searchQuery)];
        // Keep only the last 10 searches
        const trimmedHistory = updatedHistory.slice(0, 10);
        localStorage.setItem('deeptool_search_history', JSON.stringify(trimmedHistory));
        setSearchHistory(trimmedHistory.slice(0, 5)); // Update state with last 5
      } catch (error) {
        console.error('Error saving to search history:', error);
      }
    }
  };

  const pricingOptions = ['free', 'freemium', 'paid'];
  const badgeOptions = ['popular', 'featured', 'trending', 'enterprise', 'new'];
  const sortOptions = [
    { value: 'relevance', label: 'Most Relevant' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'newest', label: 'Newest First' }
  ];

  const handleSearch = () => {
    if (query.trim()) {
      saveToHistory(query);
      onSearch(query, filters);
      setShowHistory(false);
    }
  };

  const handleHistorySelect = (historyQuery: string) => {
    setQuery(historyQuery);
    setShowHistory(false);
    // Trigger search with the selected query
    saveToHistory(historyQuery);
    onSearch(historyQuery, filters);
  };

  const toggleFilter = (type: keyof SearchFilters, value: any) => {
    if (type === 'pricing' || type === 'badges') {
      const currentArray = filters[type] as string[];
      const newArray = currentArray.includes(value)
        ? currentArray.filter(item => item !== value)
        : [...currentArray, value];
      setFilters({ ...filters, [type]: newArray });
    } else {
      setFilters({ ...filters, [type]: value });
    }
  };

  const clearFilters = () => {
    setFilters({
      pricing: [],
      rating: null,
      badges: [],
      sortBy: 'relevance'
    });
  };

  const clearHistory = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('deeptool_search_history', JSON.stringify([]));
      setSearchHistory([]);
    }
  };

  const activeFilterCount = 
    filters.pricing.length + 
    filters.badges.length + 
    (filters.rating ? 1 : 0) + 
    (filters.sortBy !== 'relevance' ? 1 : 0);

  return (
    <div className="w-full max-w-4xl mx-auto mb-12">
      {/* Search Bar */}
      <div className="relative">
        <div className="relative flex items-center">
          <MagnifyingGlassIcon className="absolute left-4 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setShowHistory(true)}
            onBlur={() => {
              // Delay hiding history to allow for clicks on history items
              setTimeout(() => setShowHistory(false), 200);
            }}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="Search 10,000+ tools across 264 categories..."
            className="w-full pl-12 pr-32 py-4 bg-gray-800/50 backdrop-blur-xl border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
          />
          <div className="absolute right-2 flex items-center gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 hover:bg-gray-700 rounded-xl text-sm font-medium text-white transition-all"
            >
              <FunnelIcon className="w-4 h-4" />
              Filters
              {activeFilterCount > 0 && (
                <span className="px-2 py-0.5 bg-blue-500 text-white text-xs rounded-full">
                  {activeFilterCount}
                </span>
              )}
            </button>
            <button
              onClick={handleSearch}
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-xl text-sm font-medium text-white transition-all shadow-lg shadow-blue-500/25"
            >
              Search
            </button>
          </div>
        </div>

        {/* Search History Dropdown */}
        {showHistory && searchHistory.length > 0 && (
          <div className="absolute top-full left-0 w-full bg-gray-800 rounded-b-xl shadow-lg z-50 mt-1">
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-medium text-gray-300">Recent Searches</h3>
                <button 
                  onClick={clearHistory}
                  className="text-xs text-gray-500 hover:text-gray-300"
                >
                  Clear
                </button>
              </div>
              <div className="space-y-1">
                {searchHistory.map((historyQuery, index) => (
                  <button
                    key={index}
                    onMouseDown={() => handleHistorySelect(historyQuery)} // Use onMouseDown to prevent blur
                    className="block w-full text-left px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    {historyQuery}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Advanced Filters Panel */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 bg-gray-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Advanced Filters</h3>
              {activeFilterCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <XMarkIcon className="w-4 h-4" />
                  Clear All
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pricing Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  <CurrencyDollarIcon className="w-4 h-4 inline mr-2" />
                  Pricing Model
                </label>
                <div className="flex flex-wrap gap-2">
                  {pricingOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => toggleFilter('pricing', option)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        filters.pricing.includes(option)
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Rating Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  <StarIcon className="w-4 h-4 inline mr-2" />
                  Minimum Rating
                </label>
                <div className="flex gap-2">
                  {[4, 4.5, 5].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => toggleFilter('rating', rating)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        filters.rating === rating
                          ? 'bg-yellow-500 text-white'
                          : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {rating}+ ⭐
                    </button>
                  ))}
                </div>
              </div>

              {/* Badges Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  <ArrowTrendingUpIcon className="w-4 h-4 inline mr-2" />
                  Badges
                </label>
                <div className="flex flex-wrap gap-2">
                  {badgeOptions.map((badge) => (
                    <button
                      key={badge}
                      onClick={() => toggleFilter('badges', badge)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        filters.badges.includes(badge)
                          ? 'bg-purple-500 text-white'
                          : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {badge.charAt(0).toUpperCase() + badge.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Sort By
                </label>
                <select
                  value={filters.sortBy}
                  onChange={(e) => toggleFilter('sortBy', e.target.value)}
                  className="w-full px-4 py-2 bg-gray-700/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500/50"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}