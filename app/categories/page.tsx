'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { categoriesWithSubcategories } from '../../data/tools';
import Link from 'next/link';
import { AdvancedSearch } from '../../components/AdvancedSearch';
import { StatsBar } from '../../components/StatsBar';
import { SparklesIcon, Squares2X2Icon, ListBulletIcon } from '@heroicons/react/24/outline';

export default function CategoriesPage() {
  const categories = categoriesWithSubcategories;
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<any>({});

  const handleSearch = (query: string, searchFilters: any) => {
    setSearchQuery(query);
    setFilters(searchFilters);
    // Implement search logic here
  };

  const filteredCategories = categories.filter(cat => 
    searchQuery === '' || 
    cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-float animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl animate-float animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 text-blue-400 text-xs font-medium tracking-widest mb-3 bg-blue-900/30 px-4 py-2 rounded-full border border-blue-500/20">
            <SparklesIcon className="w-4 h-4" />
            <span>WORLD'S LARGEST TOOLS DIRECTORY</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500">
            Explore 264 Categories
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Discover 10,000+ premium tools across 1,056 subcategories. The world's most comprehensive directory of software, services, and platforms.
          </p>
        </motion.div>

        {/* Advanced Search */}
        <AdvancedSearch onSearch={handleSearch} />

        {/* Stats Bar */}
        <div className="mb-12">
          <StatsBar />
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">All Categories</h2>
            <p className="text-gray-400 text-sm">
              {filteredCategories.length} categories found
            </p>
          </div>
          <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-xl border border-white/10 rounded-xl p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-all ${
                viewMode === 'grid'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Squares2X2Icon className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-all ${
                viewMode === 'list'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <ListBulletIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {categories.map((category, index) => {
            const colors = [
              'from-blue-500 to-cyan-500',
              'from-purple-500 to-pink-500',
              'from-emerald-500 to-teal-500',
              'from-amber-500 to-orange-500',
              'from-rose-500 to-pink-500',
              'from-indigo-500 to-purple-500'
            ];
            const color = colors[index % colors.length];
            
            return (
              <Link href={`/categories/${category.slug}`} key={category.slug}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.05 * index,
                    type: 'spring',
                    stiffness: 100,
                    damping: 10
                  }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.03,
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                  }}
                  className={`relative group bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-xl rounded-xl p-5 border border-white/5 hover:border-white/20 transition-all duration-300 overflow-hidden h-full flex flex-col cursor-pointer`}
                >
                  <div className="relative z-10 flex-1 flex flex-col">
                    <div className={`w-12 h-12 mb-4 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white shadow-lg`}>
                      <span className="text-2xl">{category.icon}</span>
                    </div>
                    <h2 className="text-lg font-bold mb-2 text-white">
                      {category.name}
                    </h2>
                    <p className="text-gray-400 text-xs mb-4 leading-relaxed flex-1">
                      {category.description}
                    </p>
                    <div className="mt-auto">
                      <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors text-xs font-medium">
                        <span>Explore</span>
                        <svg className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Subtle glow effect */}
                  <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${color} rounded-full filter blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  {/* Hover shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
