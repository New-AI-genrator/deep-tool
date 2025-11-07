'use client';

import { useState, useEffect } from 'react';
import { ToolCard } from './ToolCard';
import { SectionHeader } from './SectionHeader';

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

export default function AdvancedPersonalizedRecommendations() {
  const [recommendedTools, setRecommendedTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/recommendations');
        const data = await response.json();
        
        if (data.success) {
          setRecommendedTools(data.recommendations);
        } else {
          setError(data.error || 'Failed to load recommendations');
        }
      } catch (err) {
        setError('Failed to load recommendations');
        console.error('Error fetching recommendations:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, []);

  if (loading) {
    return (
      <section className="mt-12">
        <SectionHeader 
          title="Recommended For You" 
          subtitle="Based on your interests and browsing history" 
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="h-32 bg-gray-800 rounded-2xl animate-pulse" />
          ))}
        </div>
      </section>
    );
  }

  if (error || recommendedTools.length === 0) {
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
            badges={tool.badges as any}
          />
        ))}
      </div>
    </section>
  );
}