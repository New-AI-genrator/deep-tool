'use client';

import { useState, useRef, useEffect } from 'react';
import { 
  PaperAirplaneIcon, 
  ChatBubbleLeftRightIcon, 
  ArrowPathIcon,
  LightBulbIcon,
  ArrowsRightLeftIcon,
  UserIcon,
  CogIcon,
  SparklesIcon,
  InformationCircleIcon,
  ChartBarIcon,
  TagIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import { SectionHeader } from '../../components/SectionHeader';
import Link from 'next/link';

interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  tools?: any[];
  intelligenceEvents?: any[];
  intent?: string;
  filters?: any;
}

export default function TestChatbotPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize with a welcome message
  useEffect(() => {
    setMessages([
      {
        id: '1',
        text: "Hello! I'm your DeepTool AI Assistant. I can help you find the perfect AI tools for your needs. What are you looking for today?",
        sender: 'bot',
        timestamp: new Date()
      }
    ]);
  }, []);

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent, customMessage?: string) => {
    e.preventDefault();
    
    const messageToSend = customMessage || inputValue;
    
    if (!messageToSend.trim() || isLoading) return;
    
    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: messageToSend,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    
    try {
      // Call the chatbot API
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: messageToSend,
          context: {
            previousMessages: messages.slice(-3) // Send last 3 messages for context
          }
        })
      });
      
      const data = await response.json();
      
      // Add bot response
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: data.response,
        sender: 'bot',
        timestamp: new Date(),
        tools: data.tools,
        intelligenceEvents: data.intelligenceEvents,
        intent: data.intent,
        filters: data.filters
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      // Add error message
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I'm having trouble connecting right now. Please try again later.",
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: '1',
        text: "Hello! I'm your DeepTool AI Assistant. I can help you find the perfect AI tools for your needs. What are you looking for today?",
        sender: 'bot',
        timestamp: new Date()
      }
    ]);
  };

  // Test scenarios
  const testScenarios = [
    {
      id: '1',
      title: 'Find Image Generators',
      description: 'Discover the best AI image generation tools',
      icon: <SparklesIcon className="w-5 h-5" />,
      query: 'Best AI image generators with free plans'
    },
    {
      id: '2',
      title: 'Compare Tools',
      description: 'Compare specific tools side-by-side',
      icon: <ArrowsRightLeftIcon className="w-5 h-5" />,
      query: 'Compare Midjourney vs DALL-E vs Stable Diffusion'
    },
    {
      id: '3',
      title: 'Personalized',
      description: 'Get recommendations based on your preferences',
      icon: <UserIcon className="w-5 h-5" />,
      query: 'Show me tools based on my preferences'
    },
    {
      id: '4',
      title: 'Project Management',
      description: 'Find project management tools with specific features',
      icon: <CogIcon className="w-5 h-5" />,
      query: 'Free project management tools with API integration and collaboration features'
    }
  ];

  const handleTestScenario = (query: string) => {
    handleSubmit(new Event('submit') as any, query);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <SectionHeader 
          title="Advanced AI Assistant" 
          subtitle="Test the enhanced capabilities of our AI-powered tool discovery system" 
        />
        
        <div className="flex flex-col lg:flex-row gap-8 mb-6">
          <div className="bg-gray-800/50 backdrop-blur-xl border border-white/10 rounded-xl p-4 flex items-center gap-3">
            <InformationCircleIcon className="w-5 h-5 text-blue-400 flex-shrink-0" />
            <p className="text-sm text-gray-300">
              This is our advanced AI Assistant testing page. For technical details, see the <Link href="/chatbot/documentation" className="text-blue-400 hover:underline">documentation</Link>.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Test Scenarios */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <LightBulbIcon className="w-5 h-5 text-yellow-400" />
                Test Scenarios
              </h3>
              <p className="text-gray-300 text-sm mb-6">
                Try these predefined scenarios to see the advanced capabilities of our AI Assistant.
              </p>
              
              <div className="space-y-4">
                {testScenarios.map((scenario) => (
                  <button
                    key={scenario.id}
                    onClick={() => handleTestScenario(scenario.query)}
                    disabled={isLoading}
                    className="w-full text-left p-4 bg-gray-700/30 hover:bg-gray-700/50 rounded-xl border border-white/5 transition-all disabled:opacity-50"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 text-blue-400">
                        {scenario.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-white">{scenario.title}</h4>
                        <p className="text-sm text-gray-400 mt-1">{scenario.description}</p>
                        <p className="text-xs text-gray-500 mt-2 font-mono">"{scenario.query}"</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/10">
                <h4 className="font-medium text-white mb-3">Capabilities Showcase</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-blue-900/20 p-3 rounded-lg border border-blue-500/20">
                    <div className="flex items-center gap-2 text-blue-400 mb-1">
                      <ChartBarIcon className="w-4 h-4" />
                      <span className="text-xs font-medium">Intent Recognition</span>
                    </div>
                    <p className="text-xs text-gray-300">Understands your request type</p>
                  </div>
                  <div className="bg-purple-900/20 p-3 rounded-lg border border-purple-500/20">
                    <div className="flex items-center gap-2 text-purple-400 mb-1">
                      <TagIcon className="w-4 h-4" />
                      <span className="text-xs font-medium">Smart Filtering</span>
                    </div>
                    <p className="text-xs text-gray-300">Applies relevant filters automatically</p>
                  </div>
                  <div className="bg-green-900/20 p-3 rounded-lg border border-green-500/20">
                    <div className="flex items-center gap-2 text-green-400 mb-1">
                      <StarIcon className="w-4 h-4" />
                      <span className="text-xs font-medium">Personalization</span>
                    </div>
                    <p className="text-xs text-gray-300">Tailors results to your preferences</p>
                  </div>
                  <div className="bg-cyan-900/20 p-3 rounded-lg border border-cyan-500/20">
                    <div className="flex items-center gap-2 text-cyan-400 mb-1">
                      <ArrowsRightLeftIcon className="w-4 h-4" />
                      <span className="text-xs font-medium">Comparisons</span>
                    </div>
                    <p className="text-xs text-gray-300">Provides detailed tool comparisons</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Chat Container */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/50 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col h-[70vh]">
              {/* Chat Header */}
              <div className="bg-gray-800/70 border-b border-white/10 p-4 flex justify-between items-center rounded-t-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <ChatBubbleLeftRightIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-white">Advanced AI Assistant</h2>
                    <p className="text-sm text-gray-400">Enhanced tool discovery capabilities</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowInfo(!showInfo)}
                    className="flex items-center gap-2 px-3 py-2 bg-gray-700/50 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition-colors"
                  >
                    <InformationCircleIcon className="w-4 h-4" />
                    <span className="text-sm">Info</span>
                  </button>
                  <button
                    onClick={clearChat}
                    className="flex items-center gap-2 px-3 py-2 bg-gray-700/50 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition-colors"
                  >
                    <ArrowPathIcon className="w-4 h-4" />
                    <span className="text-sm">Clear Chat</span>
                  </button>
                </div>
              </div>

              {/* Chat Info Panel */}
              {showInfo && (
                <div className="bg-gray-800/70 border-b border-white/10 p-4 text-sm">
                  <div className="flex items-start gap-3">
                    <SparklesIcon className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-white mb-1">Enhanced AI Assistant Features</h3>
                      <p className="text-gray-300 mb-3">
                        Our advanced AI Assistant now includes enhanced intent recognition, smarter filtering, personalized recommendations, and detailed tool comparisons.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-900/30 text-blue-300 px-2 py-1 rounded text-xs">
                          Advanced NLP
                        </span>
                        <span className="bg-purple-900/30 text-purple-300 px-2 py-1 rounded text-xs">
                          Context Awareness
                        </span>
                        <span className="bg-cyan-900/30 text-cyan-300 px-2 py-1 rounded text-xs">
                          Multi-dimensional Filtering
                        </span>
                        <span className="bg-green-900/30 text-green-300 px-2 py-1 rounded text-xs">
                          Personalized Recommendations
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-gradient-to-b from-gray-900/50 to-gray-800/30">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {message.sender === 'bot' && (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mr-3 flex-shrink-0">
                        <ChatBubbleLeftRightIcon className="w-4 h-4 text-white" />
                      </div>
                    )}
                    
                    <div className="max-w-[85%]">
                      <div
                        className={`rounded-2xl px-5 py-3 ${
                          message.sender === 'user'
                            ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white ml-auto'
                            : 'bg-gray-800/70 text-gray-100 border border-white/10'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        
                        {/* Intent and Filters Info */}
                        {message.intent && (
                          <div className="mt-2 text-xs text-gray-400 flex flex-wrap gap-2">
                            <span className="bg-blue-900/30 px-2 py-1 rounded flex items-center gap-1">
                              <span className="capitalize">{message.intent}</span>
                            </span>
                            {message.filters && Object.keys(message.filters).length > 0 && (
                              <span className="bg-purple-900/30 px-2 py-1 rounded">
                                {Object.keys(message.filters).length} filter{Object.keys(message.filters).length > 1 ? 's' : ''} applied
                              </span>
                            )}
                          </div>
                        )}
                        
                        {/* Intelligence Events */}
                        {message.intelligenceEvents && message.intelligenceEvents.length > 0 && (
                          <div className="mt-4 space-y-4">
                            <h3 className="font-medium text-white flex items-center gap-2">
                              <SparklesIcon className="w-4 h-4 text-blue-400" />
                              Latest Market Intelligence:
                            </h3>
                            <div className="grid grid-cols-1 gap-4">
                              {message.intelligenceEvents.map((event) => (
                                <div key={event.id} className="bg-gray-700/30 rounded-xl p-4 border border-white/5">
                                  <div className="flex items-start justify-between">
                                    <div className="flex items-center gap-3">
                                      <div className={`w-3 h-3 rounded-full mt-1.5 ${
                                        event.impact === 'high' ? 'bg-red-500' : 
                                        event.impact === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                                      }`}></div>
                                      <div>
                                        <h4 className="font-medium text-white">{event.tool}</h4>
                                        <p className="text-sm text-gray-300">{event.detail}</p>
                                      </div>
                                    </div>
                                    <span className="text-xs text-gray-400">{event.timestamp}</span>
                                  </div>
                                  <div className="flex items-center justify-between mt-3">
                                    <span className="text-xs px-2 py-1 bg-gray-600 rounded text-gray-300">
                                      {event.category}
                                    </span>
                                    {event.change && (
                                      <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded">
                                        {event.change}
                                      </span>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {/* Tool Recommendations */}
                        {message.tools && message.tools.length > 0 && (
                          <div className="mt-4 space-y-4">
                            <h3 className="font-medium text-white flex items-center gap-2">
                              <SparklesIcon className="w-4 h-4 text-blue-400" />
                              Recommended Tools:
                            </h3>
                            <div className="grid grid-cols-1 gap-4">
                              {message.tools.map((tool) => (
                                <div key={tool.id} className="bg-gray-700/30 rounded-xl p-4 border border-white/5 hover:bg-gray-700/50 transition-colors">
                                  <div className="flex items-start gap-3">
                                    {tool.logoUrl ? (
                                      <img 
                                        src={tool.logoUrl} 
                                        alt={tool.name} 
                                        className="w-12 h-12 rounded-lg object-contain"
                                      />
                                    ) : (
                                      <div className="w-12 h-12 rounded-lg bg-gray-600 flex items-center justify-center">
                                        <span className="text-sm font-bold">{tool.name.charAt(0)}</span>
                                      </div>
                                    )}
                                    <div className="flex-1 min-w-0">
                                      <Link href={`/tools/${tool.id}`} className="font-medium text-white hover:text-blue-400 transition-colors truncate block">
                                        {tool.name}
                                      </Link>
                                      <p className="text-xs text-gray-300 mt-1 truncate">{tool.tagline}</p>
                                      
                                      {/* Recommendation Reasons */}
                                      {tool.recommendationReasons && tool.recommendationReasons.length > 0 && (
                                        <div className="mt-2 text-xs text-blue-300 bg-blue-900/20 p-2 rounded">
                                          <span className="font-medium">Why we recommend this:</span>
                                          <ul className="mt-1 space-y-1">
                                            {tool.recommendationReasons.slice(0, 2).map((reason: string, idx: number) => (
                                              <li key={idx} className="flex items-start gap-1">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></div>
                                                <span>{reason}</span>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      )}
                                      
                                      {/* Features */}
                                      {tool.features && tool.features.length > 0 && (
                                        <div className="mt-2 flex flex-wrap gap-1">
                                          {tool.features.slice(0, 3).map((feature: string, idx: number) => (
                                            <span key={idx} className="text-xs px-1.5 py-0.5 bg-gray-600 rounded text-gray-300">
                                              {feature}
                                            </span>
                                          ))}
                                        </div>
                                      )}
                                      
                                      <div className="flex items-center gap-3 mt-3 flex-wrap">
                                        {tool.rating && (
                                          <span className="text-xs text-yellow-400 flex items-center">
                                            <StarIcon className="w-3 h-3 mr-1" />
                                            <span>{tool.rating}</span>
                                            <span className="text-gray-500 mx-1">•</span>
                                            <span className="text-gray-400">{tool.reviewCount} reviews</span>
                                          </span>
                                        )}
                                        <span className="text-xs px-2 py-1 bg-gray-600 rounded text-gray-300">
                                          {tool.pricing}
                                        </span>
                                        {tool.badges && tool.badges.map((badge: string) => (
                                          <span key={badge} className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded">
                                            {badge.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                          </span>
                                        ))}
                                      </div>
                                      
                                      {/* Use Cases */}
                                      {tool.useCases && tool.useCases.length > 0 && (
                                        <div className="mt-2">
                                          <p className="text-xs text-gray-400">Use cases: {tool.useCases.join(', ')}</p>
                                        </div>
                                      )}
                                      
                                      {/* Comparison Data */}
                                      {tool.comparisonData && (
                                        <div className="mt-3 pt-3 border-t border-white/10">
                                          <div className="flex flex-wrap gap-2">
                                            {tool.comparisonData.isHighlyRated && (
                                              <span className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded">
                                                Highly Rated
                                              </span>
                                            )}
                                            {tool.comparisonData.isPopular && (
                                              <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded">
                                                Popular
                                              </span>
                                            )}
                                            {tool.comparisonData.hasFreePlan && (
                                              <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded">
                                                Free Plan
                                              </span>
                                            )}
                                            <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-400 rounded">
                                              {tool.comparisonData.badgesCount} badges
                                            </span>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        <p className="text-xs mt-3 opacity-70">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mr-3 flex-shrink-0">
                      <ChatBubbleLeftRightIcon className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-gray-800/70 text-gray-100 rounded-2xl px-5 py-3 border border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                      <p className="text-xs mt-2 text-gray-400">Analyzing your request...</p>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSubmit} className="border-t border-white/10 p-4 bg-gray-800/70 rounded-b-2xl">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask about AI tools, categories, features, or pricing..."
                    className="flex-1 px-5 py-3 bg-gray-700/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !inputValue.trim()}
                    className="px-5 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:from-blue-600 hover:to-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center"
                  >
                    <PaperAirplaneIcon className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-2 text-center">
                  Examples: "Best AI image generators", "Compare tools", "Based on my preferences"
                </p>
              </form>
            </div>
            
            {/* Additional Information */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-800/50 backdrop-blur-xl border border-white/10 rounded-xl p-4">
                <h4 className="font-medium text-white mb-2 flex items-center gap-2">
                  <ChartBarIcon className="w-4 h-4 text-blue-400" />
                  Enhanced Intent Recognition
                </h4>
                <p className="text-sm text-gray-400">
                  Our AI now better understands your request type and provides more accurate responses.
                </p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-xl border border-white/10 rounded-xl p-4">
                <h4 className="font-medium text-white mb-2 flex items-center gap-2">
                  <CogIcon className="w-4 h-4 text-purple-400" />
                  Advanced Filtering
                </h4>
                <p className="text-sm text-gray-400">
                  Automatically applies relevant filters based on your query for more precise results.
                </p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-xl border border-white/10 rounded-xl p-4">
                <h4 className="font-medium text-white mb-2 flex items-center gap-2">
                  <UserIcon className="w-4 h-4 text-green-400" />
                  Personalized Experience
                </h4>
                <p className="text-sm text-gray-400">
                  Tailors recommendations based on your preferences and interaction history.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}