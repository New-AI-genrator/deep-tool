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
  InformationCircleIcon
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

export default function ChatbotPage() {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim() || isLoading) return;
    
    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputValue,
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
          message: inputValue,
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <SectionHeader 
          title="AI Assistant" 
          subtitle="Chat with our AI to discover the perfect tools for your needs" 
        />
        
        <div className="flex flex-col lg:flex-row gap-8 mb-6">
          <div className="bg-gray-800/50 backdrop-blur-xl border border-white/10 rounded-xl p-4 flex items-center gap-3">
            <InformationCircleIcon className="w-5 h-5 text-blue-400 flex-shrink-0" />
            <p className="text-sm text-gray-300">
              This is our advanced AI Assistant. For technical details, see the <Link href="/chatbot/documentation" className="text-blue-400 hover:underline">documentation</Link>.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Chat Container */}
          <div className="flex-1">
            <div className="bg-gray-800/50 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col h-[70vh]">
              {/* Chat Header */}
              <div className="bg-gray-800/70 border-b border-white/10 p-4 flex justify-between items-center rounded-t-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <ChatBubbleLeftRightIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-white">DeepTool AI Assistant</h2>
                    <p className="text-sm text-gray-400">Always here to help you find the perfect tools</p>
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
                      <h3 className="font-medium text-white mb-1">How to get the best results</h3>
                      <p className="text-gray-300 mb-3">
                        I can help you find AI tools based on your specific needs. Try asking about tools for a particular use case, category, or feature.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-900/30 text-blue-300 px-2 py-1 rounded text-xs flex items-center gap-1">
                          <LightBulbIcon className="w-3 h-3" />
                          Be specific about your needs
                        </span>
                        <span className="bg-purple-900/30 text-purple-300 px-2 py-1 rounded text-xs flex items-center gap-1">
                          <CogIcon className="w-3 h-3" />
                          Mention pricing preferences
                        </span>
                        <span className="bg-cyan-900/30 text-cyan-300 px-2 py-1 rounded text-xs flex items-center gap-1">
                          <ArrowsRightLeftIcon className="w-3 h-3" />
                          Ask for comparisons
                        </span>
                        <span className="bg-green-900/30 text-green-300 px-2 py-1 rounded text-xs flex items-center gap-1">
                          <UserIcon className="w-3 h-3" />
                          Request personalized recommendations
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
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                          {tool.features.slice(0, 2).map((feature: string, idx: number) => (
                                            <span key={idx} className="text-xs px-1.5 py-0.5 bg-gray-600 rounded text-gray-300">
                                              {feature}
                                            </span>
                                          ))}
                                        </div>
                                      )}
                                      
                                      <div className="flex items-center gap-3 mt-2 flex-wrap">
                                        {tool.rating && (
                                          <span className="text-xs text-yellow-400 flex items-center">
                                            <span className="mr-1">{tool.rating}</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                          </span>
                                        )}
                                        <span className="text-xs px-2 py-1 bg-gray-600 rounded text-gray-300">
                                          {tool.pricing}
                                        </span>
                                        {tool.badges && tool.badges.includes('trending') && (
                                          <span className="text-xs px-2 py-1 bg-orange-500/20 text-orange-400 rounded">
                                            Trending
                                          </span>
                                        )}
                                        {tool.badges && tool.badges.includes('nexus-verified') && (
                                          <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded">
                                            Verified
                                          </span>
                                        )}
                                      </div>
                                      
                                      {/* Use Cases */}
                                      {tool.useCases && tool.useCases.length > 0 && (
                                        <div className="mt-2">
                                          <p className="text-xs text-gray-400">Use cases: {tool.useCases.join(', ')}</p>
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
                  Examples: "Best AI image generators", "Free project management tools", "SEO tools with API"
                </p>
              </form>
            </div>
          </div>
          
          {/* Sidebar with Chatbot Info */}
          <div className="lg:w-80">
            <div className="bg-gray-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <SparklesIcon className="w-5 h-5 text-blue-400" />
                About the AI Assistant
              </h3>
              <p className="text-gray-300 text-sm mb-6">
                Our AI Assistant helps you discover the perfect tools for your needs by understanding your requirements and matching them with our extensive database of 10,000+ AI tools.
              </p>
              
              <div className="space-y-4">
                <div className="bg-gray-700/30 p-4 rounded-xl">
                  <h4 className="font-medium text-white mb-2">Capabilities</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></div>
                      <span>Advanced tool recommendations based on your needs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></div>
                      <span>Personalized suggestions using your preferences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></div>
                      <span>Tool comparisons and feature analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></div>
                      <span>Category and subcategory guidance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></div>
                      <span>Pricing and feature filtering</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></div>
                      <span>Trending tool insights</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-700/30 p-4 rounded-xl">
                  <h4 className="font-medium text-white mb-2">Tips for Best Results</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 flex-shrink-0"></div>
                      <span>Be specific about your needs and use cases</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 flex-shrink-0"></div>
                      <span>Mention pricing preferences (free, paid, freemium)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 flex-shrink-0"></div>
                      <span>Ask about specific features or integrations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 flex-shrink-0"></div>
                      <span>Request comparisons between specific tools</span>
                    </li>
                  </ul>
                </div>
                
                <div className="pt-4">
                  <Link 
                    href="/advanced-search" 
                    className="block w-full text-center px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-xl transition-all"
                  >
                    Advanced Search
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}