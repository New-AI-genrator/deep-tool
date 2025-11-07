'use client';

import { useState, useEffect } from 'react';
import { ChartBarIcon, FireIcon, ClockIcon } from '@heroicons/react/24/outline';

interface SearchTerm {
  term: string;
  count: number;
  change: number; // percentage change
}

export default function SearchAnalytics() {
  const [trendingSearches, setTrendingSearches] = useState<SearchTerm[]>([]);
  const [recentSearches, setRecentSearches] = useState<SearchTerm[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real implementation, you would fetch this data from an API
    // For now, we'll use mock data
    const mockTrendingSearches: SearchTerm[] = [
      { term: 'AI image generator', count: 12450, change: 12.5 },
      { term: 'project management', count: 9870, change: 8.3 },
      { term: 'video editing', count: 8760, change: 15.2 },
      { term: 'SEO tools', count: 7650, change: -2.1 },
      { term: 'chatbot builder', count: 6540, change: 22.7 },
      { term: 'content writing', count: 5430, change: 5.6 },
      { term: 'social media management', count: 4320, change: 9.8 },
      { term: 'data analysis', count: 3210, change: 3.4 }
    ];

    const mockRecentSearches: SearchTerm[] = [
      { term: 'AI transcription', count: 120, change: 0 },
      { term: 'virtual assistant', count: 95, change: 0 },
      { term: 'mind mapping', count: 87, change: 0 },
      { term: 'time tracking', count: 76, change: 0 },
      { term: 'email automation', count: 65, change: 0 }
    ];

    setTrendingSearches(mockTrendingSearches);
    setRecentSearches(mockRecentSearches);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
      <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
        <ChartBarIcon className="w-5 h-5" />
        Search Analytics
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Trending Searches */}
        <div>
          <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
            <FireIcon className="w-4 h-4 text-orange-500" />
            Trending Searches
          </h3>
          <div className="space-y-3">
            {trendingSearches.map((search, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 flex items-center justify-center bg-blue-500/20 text-blue-400 rounded text-sm font-bold">
                    {index + 1}
                  </div>
                  <span className="text-gray-200">{search.term}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-400">{search.count.toLocaleString()}</span>
                  <span className={`text-xs px-2 py-1 rounded ${search.change > 0 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                    {search.change > 0 ? '+' : ''}{search.change.toFixed(1)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Recent Searches */}
        <div>
          <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
            <ClockIcon className="w-4 h-4 text-blue-500" />
            Recent Searches
          </h3>
          <div className="space-y-3">
            {recentSearches.map((search, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-gray-200">{search.term}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-400">{search.count} searches</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}