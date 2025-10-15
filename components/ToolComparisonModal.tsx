'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, CheckIcon, StarIcon, CurrencyDollarIcon, BoltIcon } from '@heroicons/react/24/outline';
import { ToolEntry } from '../data/tools';

interface ToolComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  tools: ToolEntry[];
}

export function ToolComparisonModal({ isOpen, onClose, tools }: ToolComparisonModalProps) {
  if (!isOpen || tools.length === 0) return null;

  const features = [
    'Pricing Model',
    'Rating',
    'Review Count',
    'Category',
    'Badges',
    'Key Features'
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-10 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-white/10 z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">Tool Comparison</h2>
                <p className="text-gray-400 text-sm">Compare features side by side</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <XMarkIcon className="w-6 h-6 text-gray-400" />
              </button>
            </div>

            {/* Comparison Table */}
            <div className="flex-1 overflow-auto p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {tools.slice(0, 3).map((tool, index) => (
                  <motion.div
                    key={tool.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-800/50 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden"
                  >
                    {/* Tool Header */}
                    <div className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-b border-white/10">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                        <span className="text-2xl">🚀</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{tool.name}</h3>
                      <p className="text-gray-400 text-sm mb-4">{tool.tagline}</p>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 text-yellow-500">
                          <StarIcon className="w-4 h-4 fill-current" />
                          <span className="text-sm font-semibold">{tool.rating}</span>
                        </div>
                        <span className="text-gray-500 text-sm">
                          ({tool.reviewCount} reviews)
                        </span>
                      </div>
                    </div>

                    {/* Tool Details */}
                    <div className="p-6 space-y-4">
                      {/* Pricing */}
                      <div>
                        <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                          <CurrencyDollarIcon className="w-4 h-4" />
                          <span>Pricing</span>
                        </div>
                        <div className="px-3 py-1.5 bg-blue-500/20 text-blue-400 rounded-lg text-sm font-medium inline-block">
                          {tool.pricing.charAt(0).toUpperCase() + tool.pricing.slice(1)}
                        </div>
                      </div>

                      {/* Category */}
                      <div>
                        <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                          <BoltIcon className="w-4 h-4" />
                          <span>Category</span>
                        </div>
                        <p className="text-white text-sm">{tool.category}</p>
                        <p className="text-gray-500 text-xs">{tool.subcategory}</p>
                      </div>

                      {/* Badges */}
                      <div>
                        <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                          <StarIcon className="w-4 h-4" />
                          <span>Badges</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {tool.badges.map((badge) => (
                            <span
                              key={badge}
                              className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs font-medium"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div>
                        <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                          <CheckIcon className="w-4 h-4" />
                          <span>Key Features</span>
                        </div>
                        <ul className="space-y-2">
                          {tool.features.slice(0, 5).map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <CheckIcon className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA */}
                      <a
                        href={tool.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white text-center rounded-lg font-medium transition-all shadow-lg shadow-blue-500/25"
                      >
                        Visit Website
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
