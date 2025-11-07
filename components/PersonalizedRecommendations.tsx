'use client';

import { useState, useEffect } from 'react';
import { getPersonalizedRecommendations } from '../lib/userPreferences';
import { ToolCard } from './ToolCard';
import { SectionHeader } from './SectionHeader';

interface PersonalizedRecommendationsProps {
  allTools: any[];
  limit?: number;
}

export default function PersonalizedRecommendations({ allTools, limit = 6 }: PersonalizedRecommendationsProps) {
  const [recommendedTools, setRecommendedTools] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (allTools && allTools.length > 0) {
      const recommendations = getPersonalizedRecommendations(allTools, limit);
      setRecommendedTools(recommendations);
      setLoading(false);
    }
  }, [allTools, limit]);

  if (loading || recommendedTools.length === 0) {
    return null;
  }

  return (
    <section className="mt-12">
      <SectionHeader 
        title="Recommended For You" 
        subtitle="Based on your interests and browsing history" 
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recommendedTools.map((tool) => (
          <ToolCard 
            key={tool.slug} 
            name={tool.name}
            tagline={tool.tagline}
            logoUrl={tool.logoUrl}
            category={tool.category}
            id={tool.slug}
            badges={tool.badges}
          />
        ))}
      </div>
    </section>
  );
}