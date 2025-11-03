"use client";

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';
import { getAllBlogPosts, getBlogCategories } from '../../data/blog-posts';
import { SectionHeader } from '../../components/SectionHeader';
import { MagnifyingGlassIcon, SparklesIcon, FireIcon, ClockIcon } from '@heroicons/react/24/outline';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  publishedAt: string;
  readTime: string;
  coverImage: string;
  tags: string[];
  featured?: boolean;
  trending?: boolean;
  views?: number;
  likes?: number;
}

export default function BlogIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Get blog data
  const blogPosts: BlogPost[] = getAllBlogPosts();
  const categories = [
    { id: 'all', name: 'All Posts', count: blogPosts.length },
    ...getBlogCategories().map(cat => ({
      id: cat.id,
      name: cat.id.charAt(0).toUpperCase() + cat.id.slice(1).replace('-', ' '),
      count: cat.count
    }))
  ];

  // Filter posts
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      const matchesSearch = searchQuery === '' || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [blogPosts, selectedCategory, searchQuery]);

  const featuredPosts = blogPosts.filter(post => post.featured);
  const trendingPosts = blogPosts.filter(post => post.trending);

  // Generate keywords for SEO
  const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];
  const keywords = [...allTags, 'AI tools', 'productivity', 'technology', 'software', 'reviews'].join(', ');

  return (
    <>
      <Head>
        <title>DeepTool Blog - AI Tools, Productivity & Technology Insights</title>
        <meta name="description" content="Discover the latest insights, tutorials, and news about AI tools, productivity software, and technology trends. Stay updated with expert reviews and guides." />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content="DeepTool Blog - AI Tools, Productivity & Technology Insights" />
        <meta property="og:description" content="Discover the latest insights, tutorials, and news about AI tools, productivity software, and technology trends. Stay updated with expert reviews and guides." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://deep-tool.vercel.app/blog" />
        <meta property="og:site_name" content="DeepTool Blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DeepTool Blog - AI Tools, Productivity & Technology Insights" />
        <meta name="twitter:description" content="Discover the latest insights, tutorials, and news about AI tools, productivity software, and technology trends. Stay updated with expert reviews and guides." />
        <link rel="canonical" href="https://deep-tool.vercel.app/blog" />
      </Head>

      <main className="min-h-screen bg-aether-obsidian relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 md:px-6">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <SparklesIcon className="w-8 h-8 text-blue-400" />
              <h1 className="text-4xl font-bold text-white">DeepTool Blog</h1>
            </div>
            
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Insights, tutorials, and news about AI tools, productivity, and the future of work
            </p>
            
            <p className="text-gray-500 mt-4">
              Stay updated with the latest AI tools, productivity tips, and industry insights
            </p>
          </motion.div>

          {/* Search and Filter */}
          <div className="mb-12 max-w-3xl mx-auto">
            <div className="relative mb-8">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Search articles, topics, or keywords..."
                className="block w-full pl-10 pr-3 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category.id 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
                >
                  {category.name} <span className="text-gray-400">({category.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Featured Posts */}
          {selectedCategory === 'all' && searchQuery === '' && featuredPosts.length > 0 && (
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-16"
            >
              <div className="flex items-center gap-2 mb-6">
                <SparklesIcon className="w-5 h-5 text-yellow-400" />
                <h2 className="text-2xl font-bold text-white">Featured Articles</h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredPosts.slice(0, 3).map((post, index) => (
                  <Link 
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl">{post.coverImage}</div>
                      {post.featured && (
                        <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs font-medium rounded-full flex items-center gap-1">
                          <SparklesIcon className="w-3 h-3" />
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <div className="text-lg">{post.author.image}</div>
                        <div>
                          <div className="text-gray-300 font-medium">{post.author.name}</div>
                          <div className="text-xs">{post.readTime}</div>
                        </div>
                      </div>
                      <div className="text-xs">
                        {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.section>
          )}

          {/* Trending Posts */}
          {selectedCategory === 'all' && searchQuery === '' && trendingPosts.length > 0 && (
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-16"
            >
              <div className="flex items-center gap-2 mb-6">
                <FireIcon className="w-5 h-5 text-red-400" />
                <h2 className="text-2xl font-bold text-white">Trending Now</h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {trendingPosts.slice(0, 4).map((post) => (
                  <Link 
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-2xl mt-1">{post.coverImage}</div>
                      <div>
                        <h3 className="font-bold text-white mb-2 group-hover:text-purple-400 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <ClockIcon className="w-3 h-3" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.section>
          )}

          {/* All Posts */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                {selectedCategory === 'all' ? 'All Articles' : 
                 categories.find(c => c.id === selectedCategory)?.name + ' Articles'}
                <span className="text-gray-400 text-lg font-normal ml-2">({filteredPosts.length})</span>
              </h2>
            </div>

            {filteredPosts.length === 0 ? (
              <div className="text-center py-16 bg-white/5 rounded-2xl border border-white/10">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-white mb-2">No articles found</h3>
                <p className="text-gray-400 mb-6">Try adjusting your search or filter criteria</p>
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <Link 
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl">{post.coverImage}</div>
                      <div className="flex gap-2">
                        {post.featured && (
                          <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs font-medium rounded-full">
                            Featured
                          </span>
                        )}
                        {post.trending && (
                          <span className="px-2 py-1 bg-red-500/20 text-red-300 text-xs font-medium rounded-full">
                            Trending
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span 
                          key={tag} 
                          className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <div className="text-lg">{post.author.image}</div>
                        <div>
                          <div className="text-gray-300 font-medium">{post.author.name}</div>
                          <div className="text-xs">{post.readTime}</div>
                        </div>
                      </div>
                      <div className="text-xs">
                        {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </motion.section>

          {/* Load More Button */}
          {filteredPosts.length > 0 && (
            <div className="text-center mt-12">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </main>
    </>
  );
}