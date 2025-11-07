'use client';

import { useState, useEffect } from 'react';

export default function TrendingSearches({ onSearch }: { onSearch: (query: string) => void }) {
  const [trendingSearches, setTrendingSearches] = useState<string[]>([]);

  useEffect(() => {
    // In a real implementation, you would fetch this from an API
    // For now, we'll use a static list of trending searches
    const mockTrending = [
      'AI image generator',
      'project management',
      'video editing',
      'SEO tools',
      'chatbot builder'
    ];
    
    setTrendingSearches(mockTrending);
  }, []);

  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold text-white mb-4">Trending Searches</h3>
      <div className="flex flex-wrap gap-2">
        {trendingSearches.map((search, index) => (
          <button
            key={index}
            onClick={() => onSearch(search)}
            className="px-3 py-1.5 bg-gray-700/50 hover:bg-gray-700 text-gray-300 hover:text-white rounded-full text-sm transition-colors"
          >
            {search}
          </button>
        ))}
      </div>
    </div>
  );
}