'use client';

import { useEffect, useState } from 'react';
import { trackUserPreference } from '../lib/userPreferences';

interface UserPreferencesTrackerProps {
  category?: string;
  toolId?: string;
  interactionType?: 'view' | 'click' | 'favorite' | 'share';
}

export default function UserPreferencesTracker({ 
  category, 
  toolId, 
  interactionType = 'view' 
}: UserPreferencesTrackerProps) {
  const [hasTracked, setHasTracked] = useState(false);

  useEffect(() => {
    if (!hasTracked && (category || toolId)) {
      trackUserPreference({ category, toolId, interactionType });
      setHasTracked(true);
    }
  }, [category, toolId, interactionType, hasTracked]);

  return null;
}