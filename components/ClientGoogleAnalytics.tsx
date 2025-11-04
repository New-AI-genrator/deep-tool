'use client';

import { useEffect } from 'react';
import { pageview } from '../lib/gtag';

export default function ClientGoogleAnalytics() {
  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      // Use window.location for pathname and search params
      const url = window.location.pathname + window.location.search;
      pageview(url);
      
      // Also track subsequent navigation changes
      const handleRouteChange = () => {
        const newUrl = window.location.pathname + window.location.search;
        pageview(newUrl);
      };

      // Listen for route changes
      window.addEventListener('popstate', handleRouteChange);
      
      // Clean up event listener
      return () => {
        window.removeEventListener('popstate', handleRouteChange);
      };
    }
  }, []);

  // Return null to render nothing
  return null;
}