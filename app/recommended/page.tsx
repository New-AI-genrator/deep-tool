import { Metadata } from 'next';
import { getPersonalizedRecommendations } from '../../lib/userPreferences';
import { getAllTools } from '../../data/tools';
import { ToolCard } from '../../components/ToolCard';
import { SectionHeader } from '../../components/SectionHeader';

export const metadata: Metadata = {
  title: 'Recommended Tools | DeepTool',
  description: 'Personalized tool recommendations based on your interests',
};

export default function RecommendedToolsPage() {
  // In a real implementation, you would get user preferences from the server
  const allTools = getAllTools();
  const recommendedTools = getPersonalizedRecommendations(allTools, 20);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Recommended For You" 
          subtitle="Personalized tool recommendations based on your interests and browsing history" 
        />
        
        {recommendedTools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-4">No recommendations yet</h3>
            <p className="text-gray-300 mb-6">
              Start browsing tools and categories to build your personalized recommendations.
            </p>
            <a 
              href="/categories" 
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
            >
              Explore Categories
            </a>
          </div>
        )}
      </div>
    </div>
  );
}