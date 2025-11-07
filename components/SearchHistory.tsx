'use client';

import { useState, useEffect } from 'react';
import { ClockIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function SearchHistory({ onSearch }: { onSearch: (query: string) => void }) {
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  useEffect(() => {
    // Load search history from localStorage
    if (typeof window !== 'undefined') {
      try {
        const history = JSON.parse(localStorage.getItem('deeptool_search_history') || '[]');
        setSearchHistory(history.slice(0, 10)); // Show only the last 10 searches
      } catch (error) {
        console.error('Error loading search history:', error);
      }
    }
  }, []);

  const clearHistory = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('deeptool_search_history', JSON.stringify([]));
      setSearchHistory([]);
    }
  };

  if (searchHistory.length === 0) return null;

  return (
    <div className="bg-gray-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
          <ClockIcon className="w-5 h-5" />
          Recent Searches
        </h3>
        <button
          onClick={clearHistory}
          className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
        >
          <XMarkIcon className="w-4 h-4" />
          Clear
        </button>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {searchHistory.map((query, index) => (
          <button
            key={index}
            onClick={() => onSearch(query)}
            className="px-3 py-1.5 bg-gray-700/50 hover:bg-gray-700 text-gray-300 hover:text-white rounded-full text-sm transition-colors flex items-center gap-1"
          >
            <ClockIcon className="w-3 h-3" />
            {query}
          </button>
        ))}
      </div>
    </div>
  );
}