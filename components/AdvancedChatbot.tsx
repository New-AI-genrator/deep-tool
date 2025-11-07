'use client';

import { useState, useRef, useEffect } from 'react';
import { 
  PaperAirplaneIcon, 
  ChatBubbleLeftRightIcon, 
  XMarkIcon, 
  ArrowPathIcon,
  LightBulbIcon,
  ArrowsRightLeftIcon,
  UserIcon,
  CogIcon,
  Bars3Icon,
  InformationCircleIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
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

interface ChatSuggestion {
  id: string;
  text: string;
  icon: React.ReactNode;
}

export default function AdvancedChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Chat suggestions for quick actions
  const chatSuggestions: ChatSuggestion[] = [
    { id: '1', text: 'Best AI image generators', icon: <LightBulbIcon className="w-4 h-4" /> },
    { id: '2', text: 'Free project management tools', icon: <CogIcon className="w-4 h-4" /> },
    { id: '3', text: 'Compare tools', icon: <ArrowsRightLeftIcon className="w-4 h-4" /> },
    { id: '4', text: 'Based on my preferences', icon: <UserIcon className="w-4 h-4" /> }
  ];

  // Initialize with a welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: '1',
          text: "Hello! I'm your DeepTool AI Assistant. I can help you find the perfect AI tools for your needs. What are you looking for today?",
          sender: 'bot',
          timestamp: new Date()
        }
      ]);
    }
  }, [isOpen, messages.length]);

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
            previousMessages: messages.slice(-5) // Send last 5 messages for context
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

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsMinimized(false);
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
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

  const handleSuggestionClick = (suggestion: string) => {
    handleSubmit(new Event('submit') as any, suggestion);
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 group"
      >
        <ChatBubbleLeftRightIcon className="w-6 h-6 transition-transform group-hover:scale-110" />
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className={`fixed bottom-24 right-6 z-50 w-full max-w-md ${isMinimized ? 'h-16' : 'h-[70vh] max-h-[600px]'} bg-gray-900 border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300`}>
          {/* Chat Header */}
          <div className="bg-gray-800/50 backdrop-blur-xl border-b border-white/10 p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <ChatBubbleLeftRightIcon className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">AI Assistant</h3>
                <p className="text-xs text-gray-400">DeepTool Assistant</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShowInfo(!showInfo)}
                className="text-gray-400 hover:text-white transition-colors"
                title="Chatbot info"
              >
                <InformationCircleIcon className="w-5 h-5" />
              </button>
              <button
                onClick={toggleMinimize}
                className="text-gray-400 hover:text-white transition-colors"
                title={isMinimized ? "Expand chat" : "Minimize chat"}
              >
                {isMinimized ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
              <button
                onClick={clearChat}
                className="text-gray-400 hover:text-white transition-colors"
                title="Clear chat"
              >
                <ArrowPathIcon className="w-5 h-5" />
              </button>
              <button
                onClick={toggleChat}
                className="text-gray-400 hover:text-white transition-colors"
                title="Close chat"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Chat Info Panel */}
          {showInfo && !isMinimized && (
            <div className="bg-gray-800/70 border-b border-white/10 p-4 text-sm">
              <div className="flex items-start gap-2">
                <SparklesIcon className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    I can help you find AI tools based on your specific needs. Try asking about tools for a particular use case, category, or feature.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    <span className="bg-blue-900/30 text-blue-300 px-2 py-1 rounded text-xs">Pricing</span>
                    <span className="bg-purple-900/30 text-purple-300 px-2 py-1 rounded text-xs">Features</span>
                    <span className="bg-cyan-900/30 text-cyan-300 px-2 py-1 rounded text-xs">Ratings</span>
                    <span className="bg-green-900/30 text-green-300 px-2 py-1 rounded text-xs">Categories</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Chat Content (only show when not minimized) */}
          {!isMinimized && (
            <>
              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-900 to-gray-800/50">
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
                    
                    <div className="max-w-[80%]">
                      <div
                        className={`rounded-2xl px-4 py-3 ${
                          message.sender === 'user'
                            ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                            : 'bg-gray-800/50 text-gray-100 border border-white/10'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        
                        {/* Intent and Filters Info */}
                        {message.intent && (
                          <div className="mt-2 text-xs text-gray-400 flex flex-wrap gap-2">
                            <span className="bg-blue-900/30 px-2 py-1 rounded flex items-center gap-1">
                              <Bars3Icon className="w-3 h-3" />
                              {message.intent}
                            </span>
                            {message.filters && Object.keys(message.filters).length > 0 && (
                              <span className="bg-purple-900/30 px-2 py-1 rounded flex items-center gap-1">
                                <CogIcon className="w-3 h-3" />
                                {Object.keys(message.filters).length} filter{Object.keys(message.filters).length > 1 ? 's' : ''}
                              </span>
                            )}
                          </div>
                        )}
                        
                        {/* Intelligence Events */}
                        {message.intelligenceEvents && message.intelligenceEvents.length > 0 && (
                          <div className="mt-3 space-y-3">
                            <h3 className="font-medium text-white flex items-center gap-2">
                              <SparklesIcon className="w-4 h-4 text-blue-400" />
                              Latest Market Intelligence:
                            </h3>
                            <div className="space-y-3">
                              {message.intelligenceEvents.map((event) => (
                                <div key={event.id} className="bg-gray-700/30 rounded-lg p-3 border border-white/5">
                                  <div className="flex items-start justify-between">
                                    <div className="flex items-center gap-2">
                                      <div className={`w-3 h-3 rounded-full ${
                                        event.impact === 'high' ? 'bg-red-500' : 
                                        event.impact === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                                      }`}></div>
                                      <span className="font-medium text-white">{event.tool}</span>
                                    </div>
                                    <span className="text-xs text-gray-400">{event.timestamp}</span>
                                  </div>
                                  <p className="text-sm text-gray-300 mt-2">{event.detail}</p>
                                  <div className="flex items-center justify-between mt-2">
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
                          <div className="mt-3 space-y-3">
                            <div className="grid grid-cols-1 gap-3">
                              {message.tools.map((tool) => (
                                <div key={tool.id} className="bg-gray-700/30 rounded-lg p-3 border border-white/5 hover:bg-gray-700/50 transition-colors">
                                  <div className="flex items-start gap-3">
                                    {tool.logoUrl ? (
                                      <img 
                                        src={tool.logoUrl} 
                                        alt={tool.name} 
                                        className="w-10 h-10 rounded-lg object-contain"
                                      />
                                    ) : (
                                      <div className="w-10 h-10 rounded-lg bg-gray-600 flex items-center justify-center">
                                        <span className="text-xs font-bold">{tool.name.charAt(0)}</span>
                                      </div>
                                    )}
                                    <div className="flex-1 min-w-0">
                                      <Link href={`/tools/${tool.id}`} className="font-medium text-white hover:text-blue-400 transition-colors truncate block">
                                        {tool.name}
                                      </Link>
                                      <p className="text-xs text-gray-300 truncate">{tool.tagline}</p>
                                      
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
                                      
                                      {/* Features and Use Cases */}
                                      {tool.features && tool.features.length > 0 && (
                                        <div className="mt-1 flex flex-wrap gap-1">
                                          {tool.features.slice(0, 3).map((feature: string, idx: number) => (
                                            <span key={idx} className="text-xs px-1.5 py-0.5 bg-gray-600 rounded text-gray-300">
                                              {feature}
                                            </span>
                                          ))}
                                        </div>
                                      )}
                                      
                                      <div className="flex items-center gap-2 mt-2 flex-wrap">
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
                                        <div className="mt-2 pt-2 border-t border-white/10">
                                          <div className="flex flex-wrap gap-2 text-xs">
                                            {tool.comparisonData.isHighlyRated && (
                                              <span className="px-1.5 py-0.5 bg-yellow-500/20 text-yellow-400 rounded">
                                                Highly Rated
                                              </span>
                                            )}
                                            {tool.comparisonData.isPopular && (
                                              <span className="px-1.5 py-0.5 bg-green-500/20 text-green-400 rounded">
                                                Popular
                                              </span>
                                            )}
                                            {tool.comparisonData.hasFreePlan && (
                                              <span className="px-1.5 py-0.5 bg-blue-500/20 text-blue-400 rounded">
                                                Free Plan
                                              </span>
                                            )}
                                            <span className="px-1.5 py-0.5 bg-purple-500/20 text-purple-400 rounded">
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
                        
                        <p className="text-xs mt-2 opacity-70">
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
                    <div className="bg-gray-800/50 text-gray-100 rounded-2xl px-4 py-3 border border-white/10">
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

              {/* Quick Suggestions */}
              {messages.length === 1 && (
                <div className="px-4 py-2 border-t border-white/10 bg-gray-800/30">
                  <p className="text-xs text-gray-400 mb-2">Quick suggestions:</p>
                  <div className="flex flex-wrap gap-2">
                    {chatSuggestions.map((suggestion) => (
                      <button
                        key={suggestion.id}
                        onClick={() => handleSuggestionClick(suggestion.text)}
                        className="flex items-center gap-1 text-xs px-2 py-1.5 bg-gray-700/50 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition-colors"
                      >
                        {suggestion.icon}
                        <span>{suggestion.text}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Chat Input */}
              <form onSubmit={handleSubmit} className="border-t border-white/10 p-4 bg-gray-800/50 backdrop-blur-xl">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask about AI tools..."
                    className="flex-1 px-4 py-3 bg-gray-700/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !inputValue.trim()}
                    className="px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:from-blue-600 hover:to-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center"
                  >
                    <PaperAirplaneIcon className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-2 text-center">
                  Ask me about tools, categories, features, or pricing
                </p>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
}