'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import SearchSuggestions from './SearchSuggestions';

interface SearchSuggestion {
  id: string;
  name: string;
  category: string;
  logoUrl: string;
}

export default function SearchOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

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

  const handleSearch = (searchQuery: string) => {
    if (searchQuery.trim()) {
      saveToHistory(searchQuery);
      setIsOpen(false);
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleSuggestionSelect = (suggestion: SearchSuggestion) => {
    setQuery(suggestion.name);
    setIsOpen(false);
    router.push(`/tools/${suggestion.id}`);
  };

  const handleHistorySelect = (historyQuery: string) => {
    setQuery(historyQuery);
    handleSearch(historyQuery);
  };

  const clearHistory = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('deeptool_search_history', JSON.stringify([]));
      setSearchHistory([]);
    }
  };

  // Open search overlay with Ctrl+K or Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      } else if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Focus input when overlay opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-start justify-center pt-20">
      <div 
        className="absolute inset-0"
        onClick={() => setIsOpen(false)}
      />
      
      <div className="relative w-full max-w-2xl mx-4">
        <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          {/* Search Input */}
          <div className="relative p-4 border-b border-gray-700">
            <MagnifyingGlassIcon className="absolute left-6 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch(query)}
              placeholder="Search 10,000+ tools across 264 categories..."
              className="w-full pl-12 pr-12 py-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
            />
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>
          
          {/* Search Suggestions */}
          <SearchSuggestions query={query} onSelect={handleSuggestionSelect} />
          
          {/* Search History */}
          {searchHistory.length > 0 && (
            <div className="p-4 border-b border-gray-700">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-medium text-gray-300">Recent Searches</h3>
                <button 
                  onClick={clearHistory}
                  className="text-xs text-gray-500 hover:text-gray-300"
                >
                  Clear
                </button>
              </div>
              <div className="space-y-2">
                {searchHistory.map((historyQuery, index) => (
                  <button
                    key={index}
                    onClick={() => handleHistorySelect(historyQuery)}
                    className="block w-full text-left px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    {historyQuery}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Search Tips */}
          <div className="p-4">
            <p className="text-xs text-gray-500">
              Press Enter to search • Press Esc to close • Ctrl+K to open search
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}