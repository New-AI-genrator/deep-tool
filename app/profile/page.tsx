import { Metadata } from 'next';
import { getUserPreferences, calculateCategoryPreferences } from '../../lib/userPreferences';
import { getAllTools, ToolBadge } from '../../data/tools';
import { ToolCard } from '../../components/ToolCard';

interface UserPreference {
  category?: string;
  toolId?: string;
  timestamp: number;
  interactionType: 'view' | 'click' | 'favorite' | 'share';
}

interface PreferenceScore {
  category: string;
  score: number;
}

export const metadata: Metadata = {
  title: 'Your Profile | DeepTool',
  description: 'View your personalized recommendations and preferences',
};

export default function ProfilePage() {
  // In a real implementation, you would get this data from the server/session
  const preferences: UserPreference[] = [];
  const categoryPreferences: PreferenceScore[] = calculateCategoryPreferences();
  const allTools = getAllTools();
  
  // Get top 5 recommended tools
  const recommendedTools = allTools
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Your Profile</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Personalized Recommendations</h2>
              <p className="text-gray-300 mb-6">Tools recommended based on your interests and browsing history</p>
              
              {recommendedTools.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {recommendedTools.map((tool) => (
                    <ToolCard
                      key={tool.slug}
                      name={tool.name}
                      tagline={tool.tagline}
                      logoUrl={tool.logoUrl}
                      category={tool.category}
                      id={tool.slug}
                      badges={tool.badges as Array<'nexus-verified' | 'trending' | 'enterprise'> | undefined}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-gray-400">No recommendations yet. Browse more tools to get personalized suggestions.</p>
              )}
            </div>
          </div>
          
          <div>
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Your Interests</h2>
              <p className="text-gray-300 mb-4">Categories you've shown interest in</p>
              
              {categoryPreferences.length > 0 ? (
                <div className="space-y-3">
                  {categoryPreferences.slice(0, 5).map((pref) => (
                    <div key={pref.category} className="flex items-center justify-between">
                      <span className="text-gray-200">{pref.category}</span>
                      <span className="text-sm text-gray-400">
                        {pref.score.toFixed(1)} pts
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400">No preferences recorded yet. Start browsing to build your profile.</p>
              )}
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700">
              <h2 className="text-2xl font-semibold mb-4">Activity</h2>
              <p className="text-gray-300 mb-4">Your recent activity on DeepTool</p>
              
              {preferences.length > 0 ? (
                <div className="space-y-3">
                  {preferences.slice(0, 5).map((pref, index) => (
                    <div key={index} className="text-sm text-gray-300">
                      {pref.category ? `Viewed ${pref.category} category` : 'Visited homepage'}
                      <span className="block text-xs text-gray-500">
                        {new Date(pref.timestamp).toLocaleDateString()}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400">No activity recorded yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}