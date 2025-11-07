'use client';

import { useEffect } from 'react';
import { trackUserPreference } from '../lib/userPreferences';

export default function HomepageTracker() {
  useEffect(() => {
    // Track that user visited the homepage
    trackUserPreference({ category: 'homepage' });
  }, []);

  return null;
}