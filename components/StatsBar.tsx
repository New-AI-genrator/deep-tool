'use client';
import { motion } from 'framer-motion';
import { Squares2X2Icon, CubeIcon, ArrowTrendingUpIcon, RectangleStackIcon } from '@heroicons/react/24/outline';

export function StatsBar() {
  const stats = [
    { 
      icon: <CubeIcon className="w-5 h-5" />, 
      value: '10,000+', 
      label: 'Premium Tools',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: <RectangleStackIcon className="w-5 h-5" />, 
      value: '264', 
      label: 'Categories',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      icon: <Squares2X2Icon className="w-5 h-5" />, 
      value: '1,056', 
      label: 'Subcategories',
      color: 'from-emerald-500 to-teal-500'
    },
    { 
      icon: <ArrowTrendingUpIcon className="w-5 h-5" />, 
      value: '500+', 
      label: 'Added Monthly',
      color: 'from-amber-500 to-orange-500'
    }
  ];

  return (
    <div className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-y border-white/5">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} mb-3 shadow-lg`}>
                <div className="text-white">
                  {stat.icon}
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
