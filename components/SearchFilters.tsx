'use client';

import { useState } from 'react';
import { FunnelIcon, XMarkIcon, ArrowTrendingUpIcon, StarIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

interface SearchFiltersProps {
  onFilterChange: (filters: SearchFilters) => void;
  initialFilters: SearchFilters;
}

interface SearchFilters {
  pricing: string[];
  rating: number | null;
  badges: string[];
  sortBy: string;
}

export default function SearchFilters({ onFilterChange, initialFilters }: SearchFiltersProps) {
  const [filters, setFilters] = useState<SearchFilters>(initialFilters);
  const [showFilters, setShowFilters] = useState(false);

  const pricingOptions = ['free', 'freemium', 'paid'];
  const badgeOptions = ['popular', 'featured', 'trending', 'enterprise', 'new'];
  const sortOptions = [
    { value: 'relevance', label: 'Most Relevant' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'newest', label: 'Newest First' }
  ];

  const toggleFilter = (type: keyof SearchFilters, value: any) => {
    let newFilters;
    
    if (type === 'pricing' || type === 'badges') {
      const currentArray = filters[type] as string[];
      const newArray = currentArray.includes(value)
        ? currentArray.filter(item => item !== value)
        : [...currentArray, value];
      newFilters = { ...filters, [type]: newArray };
    } else {
      newFilters = { ...filters, [type]: value };
    }
    
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = {
      pricing: [],
      rating: null,
      badges: [],
      sortBy: 'relevance'
    };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  const activeFilterCount = 
    filters.pricing.length + 
    filters.badges.length + 
    (filters.rating ? 1 : 0) + 
    (filters.sortBy !== 'relevance' ? 1 : 0);

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-white">Filters</h2>
        {activeFilterCount > 0 && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <XMarkIcon className="w-4 h-4" />
            Clear All
          </button>
        )}
      </div>
      
      <div className="bg-gray-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
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
      </div>
    </div>
  );
}