'use client';

import { useState, useEffect } from 'react';
import { SectionHeader } from '../../../components/SectionHeader';

export default function ChatbotAPITest() {
  const [apiData, setApiData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChatbotInfo = async () => {
      try {
        const response = await fetch('/api/chatbot');
        const data = await response.json();
        setApiData(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch chatbot information');
        setLoading(false);
      }
    };

    fetchChatbotInfo();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p>Loading chatbot information...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white flex items-center justify-center">
        <div className="text-center bg-red-900/30 p-6 rounded-xl border border-red-500/30 max-w-md">
          <h2 className="text-xl font-bold text-red-400 mb-2">Error</h2>
          <p className="text-red-300">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <SectionHeader 
          title="Chatbot API Test" 
          subtitle="View information about the enhanced AI Assistant" 
        />
        
        <div className="bg-gray-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">{apiData.name}</h2>
              <p className="text-gray-300 mb-6">{apiData.description}</p>
              
              <div className="bg-gray-700/30 rounded-xl p-4 mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-white">Version</h3>
                  <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                    {apiData.version}
                  </span>
                </div>
                <p className="text-sm text-gray-400">
                  Last updated: {new Date(apiData.lastUpdated).toLocaleDateString()}
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold text-white mb-3">Documentation</h3>
                <a 
                  href={apiData.documentation} 
                  className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all"
                >
                  View Documentation
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">Capabilities</h3>
              <div className="space-y-3">
                {apiData.capabilities.map((capability: string, index: number) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-700/30 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">{capability}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-700/30 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-white">{apiData.categories}</p>
                <p className="text-gray-400 text-sm">Categories</p>
              </div>
              <div className="bg-gray-700/30 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-white">{apiData.tools}</p>
                <p className="text-gray-400 text-sm">Tools</p>
              </div>
              <div className="bg-gray-700/30 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-white">2</p>
                <p className="text-gray-400 text-sm">Components</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}