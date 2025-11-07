'use client';

import { useState, useEffect, useRef } from 'react';

interface SearchSuggestion {
  id: string;
  name: string;
  category: string;
  logoUrl: string;
}

export default function SearchSuggestions({ 
  query, 
  onSelect 
}: { 
  query: string; 
  onSelect: (suggestion: SearchSuggestion) => void; 
}) {
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }

    // Clear previous debounce timeout
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    // Debounce API calls
    debounceRef.current = setTimeout(async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(`/api/advanced-search?q=${encodeURIComponent(query)}&limit=5`);
        const data = await response.json();
        
        if (data.success) {
          setSuggestions(data.results);
        } else {
          setError(data.error || 'Failed to load suggestions');
        }
      } catch (err) {
        setError('Failed to load suggestions');
        console.error('Search suggestions error:', err);
      } finally {
        setLoading(false);
      }
    }, 300); // 300ms debounce

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [query]);

  if (!query.trim()) return null;

  return (
    <div className="absolute top-full left-0 w-full bg-gray-800 rounded-b-xl shadow-lg z-50 mt-1">
      {loading && (
        <div className="p-4">
          <div className="flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <span className="ml-2 text-sm text-gray-400">Searching...</span>
          </div>
        </div>
      )}
      
      {error && (
        <div className="p-4">
          <p className="text-sm text-red-400">{error}</p>
        </div>
      )}
      
      {!loading && !error && suggestions.length > 0 && (
        <div className="p-2">
          <div className="text-xs text-gray-400 px-2 py-1">Tools</div>
          {suggestions.map((suggestion) => (
            <button
              key={suggestion.id}
              onClick={() => onSelect(suggestion)}
              className="flex items-center w-full px-3 py-2 text-left hover:bg-gray-700 rounded-lg transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-gray-700 flex items-center justify-center mr-3">
                {suggestion.logoUrl ? (
                  <img 
                    src={suggestion.logoUrl} 
                    alt={suggestion.name} 
                    className="w-6 h-6 object-contain"
                  />
                ) : (
                  <span className="text-xs font-bold">{suggestion.name.charAt(0)}</span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-white truncate">
                  {suggestion.name}
                </div>
                <div className="text-xs text-gray-400 truncate">
                  {suggestion.category}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
      
      {!loading && !error && suggestions.length === 0 && query && (
        <div className="p-4">
          <p className="text-sm text-gray-400">No tools found for "{query}"</p>
        </div>
      )}
    </div>
  );
}