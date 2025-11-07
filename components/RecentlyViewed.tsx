'use client';

import { useState, useEffect } from 'react';
import { ToolCard } from './ToolCard';
import { SectionHeader } from './SectionHeader';
import { getRecentlyViewedTools } from '../lib/userPreferences';
import { getAllTools } from '../data/tools';

interface Tool {
  slug: string;
  name: string;
  tagline: string;
  logoUrl: string;
  category: string;
  pricing: string;
  badges?: string[];
  rating?: number;
  reviewCount?: number;
}

export default function RecentlyViewed() {
  const [recentlyViewed, setRecentlyViewed] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentlyViewed = async () => {
      try {
        const allTools = getAllTools();
        const recentlyViewedTools = getRecentlyViewedTools(allTools, 6);
        setRecentlyViewed(recentlyViewedTools);
      } catch (error) {
        console.error('Failed to fetch recently viewed tools:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentlyViewed();
  }, []);

  if (loading) {
    return (
      <section className="mt-12">
        <SectionHeader 
          title="Recently Viewed" 
          subtitle="Loading your recently viewed tools..." 
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="h-32 bg-gray-800 rounded-2xl animate-pulse" />
          ))}
        </div>
      </section>
    );
  }

  if (recentlyViewed.length === 0) {
    return null;
  }

  return (
    <section className="mt-12">
      <SectionHeader 
        title="Recently Viewed" 
        subtitle="Tools you've recently explored" 
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recentlyViewed.map((tool) => (
          <ToolCard 
            key={tool.slug} 
            name={tool.name}
            tagline={tool.tagline}
            logoUrl={tool.logoUrl}
            category={tool.category}
            id={tool.slug}
            badges={tool.badges as any}
          />
        ))}
      </div>
    </section>
  );
}