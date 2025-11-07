import { Metadata } from 'next';
import { ToolCard } from '../../components/ToolCard';
import { SectionHeader } from '../../components/SectionHeader';

interface Tool {
  id: string;
  name: string;
  tagline: string;
  logoUrl: string;
  category: string;
  badges?: Array<'nexus-verified' | 'trending' | 'enterprise'>;
}

export const metadata: Metadata = {
  title: 'Your Favorites | DeepTool',
  description: 'Your saved and favorite tools',
};

export default function FavoritesPage() {
  // In a real implementation, you would get favorites from the server
  const favoriteTools: Tool[] = [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Your Favorites" 
          subtitle="Tools you've saved for later" 
        />
        
        {favoriteTools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteTools.map((tool) => (
              <ToolCard
                key={tool.id}
                name={tool.name}
                tagline={tool.tagline}
                logoUrl={tool.logoUrl}
                category={tool.category}
                id={tool.id}
                badges={tool.badges}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-4">No favorites yet</h3>
            <p className="text-gray-300 mb-6">
              Start exploring tools and save your favorites by clicking the heart icon.
            </p>
            <a 
              href="/tools" 
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
            >
              Discover Tools
            </a>
          </div>
        )}
      </div>
    </div>
  );
}