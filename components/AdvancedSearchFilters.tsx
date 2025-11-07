'use client';

import { useState, useEffect } from 'react';
import { FunnelIcon, XMarkIcon, StarIcon, CurrencyDollarIcon, TagIcon, ArrowsUpDownIcon } from '@heroicons/react/24/outline';

interface SearchFiltersProps {
  onFilterChange: (filters: SearchFilters) => void;
  initialFilters: SearchFilters;
  categories: Array<{ name: string; slug: string; subcategories: Array<{ name: string; slug: string }> }>;
  subcategories: Array<{ name: string; slug: string }>;
}

interface SearchFilters {
  pricing: string[];
  minRating: number | null;
  badges: string[];
  category: string | null;
  subcategory: string | null;
  sortBy: string;
}

interface Category {
  name: string;
  slug: string;
  subcategories: Array<{ name: string; slug: string }>;
}

export default function AdvancedSearchFilters({ 
  onFilterChange, 
  initialFilters,
  categories,
  subcategories
}: SearchFiltersProps) {
  const [filters, setFilters] = useState<SearchFilters>(initialFilters);
  const [showFilters, setShowFilters] = useState(false);

  const pricingOptions = ['free', 'freemium', 'paid', 'enterprise'];
  const badgeOptions = ['nexus-verified', 'trending', 'enterprise', 'new', 'popular', 'featured', 'community-favorite'];
  const sortOptions = [
    { value: 'relevance', label: 'Most Relevant' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'reviews', label: 'Most Reviewed' },
    { value: 'name', label: 'Name (A-Z)' },
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
      minRating: null,
      badges: [],
      category: null,
      subcategory: null,
      sortBy: 'relevance'
    };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  const activeFilterCount = 
    filters.pricing.length + 
    filters.badges.length + 
    (filters.minRating ? 1 : 0) + 
    (filters.category ? 1 : 0) + 
    (filters.subcategory ? 1 : 0) + 
    (filters.sortBy !== 'relevance' ? 1 : 0);

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-white flex items-center gap-2">
          <FunnelIcon className="w-5 h-5" />
          Advanced Filters
        </h2>
        {activeFilterCount > 0 && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <XMarkIcon className="w-4 h-4" />
            Clear All ({activeFilterCount})
          </button>
        )}
      </div>
      
      <div className="bg-gray-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  onClick={() => toggleFilter('minRating', rating === filters.minRating ? null : rating)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    filters.minRating === rating
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
              <TagIcon className="w-4 h-4 inline mr-2" />
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
                  {badge.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-3">
              Category
            </label>
            <select
              value={filters.category || ''}
              onChange={(e) => {
                const category = e.target.value || null;
                toggleFilter('category', category);
                // Reset subcategory when category changes
                if (category !== filters.category) {
                  toggleFilter('subcategory', null);
                }
              }}
              className="w-full px-4 py-2 bg-gray-700/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500/50"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category.slug} value={category.slug}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Subcategory Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-3">
              Subcategory
            </label>
            <select
              value={filters.subcategory || ''}
              onChange={(e) => toggleFilter('subcategory', e.target.value || null)}
              disabled={!filters.category}
              className="w-full px-4 py-2 bg-gray-700/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500/50 disabled:opacity-50"
            >
              <option value="">All Subcategories</option>
              {subcategories.map((subcategory) => (
                <option key={subcategory.slug} value={subcategory.slug}>
                  {subcategory.name}
                </option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-3">
              <ArrowsUpDownIcon className="w-4 h-4 inline mr-2" />
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