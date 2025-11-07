'use client';

import { SectionHeader } from '../../../components/SectionHeader';
import { 
  ChatBubbleLeftRightIcon,
  LightBulbIcon,
  ArrowsRightLeftIcon,
  UserIcon,
  CogIcon,
  ChartBarIcon,
  TagIcon,
  StarIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

export default function ChatbotDocumentation() {
  const features = [
    {
      title: "Enhanced Intent Recognition",
      description: "Identifies user intents including greetings, help requests, recommendations, comparisons, and personalized requests.",
      icon: <LightBulbIcon className="w-6 h-6" />
    },
    {
      title: "Advanced Filtering System",
      description: "Automatically extracts and applies filters for pricing, ratings, badges, categories, and features.",
      icon: <CogIcon className="w-6 h-6" />
    },
    {
      title: "Personalized Recommendations",
      description: "Provides tailored tool suggestions based on user preferences and interaction history.",
      icon: <UserIcon className="w-6 h-6" />
    },
    {
      title: "Detailed Tool Comparisons",
      description: "Offers side-by-side tool analysis with feature matching and rating differentials.",
      icon: <ArrowsRightLeftIcon className="w-6 h-6" />
    }
  ];

  const apiEndpoints = [
    {
      method: "POST",
      endpoint: "/api/chatbot",
      description: "Main endpoint for chat interactions",
      details: "Accepts user messages and context to provide tool recommendations and responses"
    },
    {
      method: "GET",
      endpoint: "/api/chatbot",
      description: "Retrieves chatbot information and capabilities",
      details: "Provides metadata about the chatbot system and its features"
    }
  ];

  const components = [
    {
      name: "AdvancedChatbot",
      type: "Floating Widget",
      description: "A floating chat widget that can be minimized and accessed from any page",
      features: ["Minimize/expand functionality", "Quick suggestion prompts", "Contextual response display"]
    },
    {
      name: "ChatbotPage",
      type: "Dedicated Page",
      description: "A full-page chat interface with enhanced capabilities and information panels",
      features: ["Detailed capability information", "Usage tips and best practices", "Enhanced tool display"]
    }
  ];

  const usageExamples = [
    {
      title: "Finding Tools",
      user: "Show me the best free AI image generators",
      system: "Displays free image generation tools sorted by rating"
    },
    {
      title: "Comparing Tools",
      user: "Compare Midjourney vs DALL-E",
      system: "Provides side-by-side comparison with feature analysis"
    },
    {
      title: "Personalized Recommendations",
      user: "Show me tools based on my preferences",
      system: "Displays tools tailored to user's category preferences"
    },
    {
      title: "Advanced Filtering",
      user: "Find project management tools with API integration that are highly rated",
      system: "Shows project management tools with API badges and 4+ star ratings"
    }
  ];

  const bestPractices = [
    "Be Specific: The more details you provide, the better the recommendations",
    "Mention Pricing: Include terms like 'free', 'paid', or 'enterprise' for better filtering",
    "Request Comparisons: Use terms like 'compare' or 'vs' for tool comparisons",
    "Ask for Personalization: Mention 'my preferences' or 'based on my history' for personalized results",
    "Specify Features: Mention specific features you need (API, mobile app, collaboration, etc.)"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <SectionHeader 
          title="AI Assistant Documentation" 
          subtitle="Learn how to use our advanced conversational AI system" 
        />
        
        <div className="bg-gray-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
              <DocumentTextIcon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Advanced AI Assistant</h2>
              <p className="text-gray-300">
                The DeepTool AI Assistant is an advanced conversational AI system designed to help users discover 
                and select the perfect AI tools for their specific needs. With enhanced natural language processing 
                capabilities, the assistant provides personalized recommendations, detailed tool comparisons, and 
                intelligent filtering.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-gray-800/70 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <CogIcon className="w-5 h-5 text-blue-400" />
              API Endpoints
            </h3>
            <div className="space-y-6">
              {apiEndpoints.map((endpoint, index) => (
                <div key={index} className="pb-4 border-b border-white/10 last:border-0 last:pb-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      endpoint.method === 'POST' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-sm bg-gray-700/50 px-2 py-1 rounded">{endpoint.endpoint}</code>
                  </div>
                  <p className="text-gray-300 text-sm mb-2">{endpoint.description}</p>
                  <p className="text-gray-400 text-xs">{endpoint.details}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <ChatBubbleLeftRightIcon className="w-5 h-5 text-purple-400" />
              Integration Components
            </h3>
            <div className="space-y-6">
              {components.map((component, index) => (
                <div key={index} className="pb-4 border-b border-white/10 last:border-0 last:pb-0">
                  <h4 className="font-medium text-white mb-1">{component.name} <span className="text-xs bg-gray-700 px-2 py-1 rounded text-gray-300">{component.type}</span></h4>
                  <p className="text-gray-300 text-sm mb-3">{component.description}</p>
                  <ul className="space-y-1">
                    {component.features.map((feature, featIndex) => (
                      <li key={featIndex} className="text-gray-400 text-xs flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mb-12">
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <LightBulbIcon className="w-5 h-5 text-yellow-400" />
            Usage Examples
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {usageExamples.map((example, index) => (
              <div key={index} className="bg-gray-700/30 rounded-xl p-5">
                <h4 className="font-medium text-white mb-3">{example.title}</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">User:</p>
                    <p className="text-sm bg-gray-600/30 p-3 rounded-lg">{example.user}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">System Response:</p>
                    <p className="text-sm bg-gray-600/30 p-3 rounded-lg">{example.system}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-gray-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <StarIcon className="w-5 h-5 text-green-400" />
            Best Practices for Users
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {bestPractices.map((practice, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gray-700/30 rounded-lg">
                <div className="mt-0.5 text-blue-400">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <span className="text-xs font-bold">{index + 1}</span>
                  </div>
                </div>
                <p className="text-gray-300">{practice}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}