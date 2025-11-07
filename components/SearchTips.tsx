'use client';

import { LightBulbIcon } from '@heroicons/react/24/outline';

export default function SearchTips() {
  const tips = [
    {
      title: "Use Specific Terms",
      description: "Instead of 'AI tool', try 'AI image generator' or 'chatbot builder' for more precise results."
    },
    {
      title: "Combine Filters",
      description: "Use multiple filters together like '4+ stars' + 'free' to narrow down to high-quality free tools."
    },
    {
      title: "Try Sorting Options",
      description: "Sort by 'Highest Rated' or 'Most Reviewed' to find the most popular tools in a category."
    },
    {
      title: "Search by Features",
      description: "Look for tools by specific features like 'API integration' or 'mobile app' in the search box."
    },
    {
      title: "Use Category Filters",
      description: "Filter by category and subcategory to explore tools in specific domains like 'Marketing' or 'Development'."
    },
    {
      title: "Check Trending Tools",
      description: "Look at trending searches to discover what other users are finding valuable right now."
    }
  ];

  return (
    <div className="bg-gray-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
      <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
        <LightBulbIcon className="w-5 h-5 text-yellow-400" />
        Search Tips
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tips.map((tip, index) => (
          <div key={index} className="bg-gray-700/30 rounded-lg p-4 hover:bg-gray-700/50 transition-colors">
            <h3 className="font-medium text-white mb-2">{tip.title}</h3>
            <p className="text-sm text-gray-300">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}