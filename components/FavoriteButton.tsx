'use client';

import { useState, useEffect } from 'react';

interface FavoriteButtonProps {
  toolId: string;
}

export default function FavoriteButton({ toolId }: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if tool is in favorites
    const checkFavoriteStatus = () => {
      if (typeof window !== 'undefined') {
        try {
          const favorites = JSON.parse(localStorage.getItem('deeptool_favorites') || '[]');
          setIsFavorite(favorites.includes(toolId));
        } catch (error) {
          console.error('Error checking favorite status:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    checkFavoriteStatus();
  }, [toolId]);

  const toggleFavorite = () => {
    if (typeof window !== 'undefined') {
      try {
        const favorites = JSON.parse(localStorage.getItem('deeptool_favorites') || '[]');
        let newFavorites;
        
        if (isFavorite) {
          // Remove from favorites
          newFavorites = favorites.filter((id: string) => id !== toolId);
        } else {
          // Add to favorites
          newFavorites = [...favorites, toolId];
        }
        
        localStorage.setItem('deeptool_favorites', JSON.stringify(newFavorites));
        setIsFavorite(!isFavorite);
      } catch (error) {
        console.error('Error toggling favorite:', error);
      }
    }
  };

  if (isLoading) {
    return (
      <div className="w-6 h-6 bg-gray-700 rounded-full animate-pulse" />
    );
  }

  return (
    <button
      onClick={toggleFavorite}
      className={`p-1 rounded-full ${
        isFavorite 
          ? 'text-red-500 hover:text-red-400' 
          : 'text-gray-400 hover:text-gray-300'
      } transition-colors`}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-5 w-5" 
        viewBox="0 0 20 20" 
        fill={isFavorite ? "currentColor" : "none"}
        stroke="currentColor"
      >
        <path 
          fillRule="evenodd" 
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" 
          clipRule="evenodd" 
        />
      </svg>
    </button>
  );
}