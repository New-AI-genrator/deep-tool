'use client';
import { motion } from 'framer-motion';
import { StarIcon, BoltIcon, ArrowTrendingUpIcon, SparklesIcon } from '@heroicons/react/24/solid';
import { CheckBadgeIcon } from '@heroicons/react/24/outline';

interface PremiumBadgeProps {
  type: 'popular' | 'featured' | 'trending' | 'enterprise' | 'new' | 'verified';
  size?: 'sm' | 'md' | 'lg';
}

export function PremiumBadge({ type, size = 'md' }: PremiumBadgeProps) {
  const badges = {
    popular: {
      icon: <ArrowTrendingUpIcon className={size === 'sm' ? 'w-3 h-3' : 'w-4 h-4'} />,
      label: 'Popular',
      gradient: 'from-blue-500 to-cyan-500',
      glow: 'shadow-blue-500/50'
    },
    featured: {
      icon: <StarIcon className={size === 'sm' ? 'w-3 h-3' : 'w-4 h-4'} />,
      label: 'Featured',
      gradient: 'from-purple-500 to-pink-500',
      glow: 'shadow-purple-500/50'
    },
    trending: {
      icon: <BoltIcon className={size === 'sm' ? 'w-3 h-3' : 'w-4 h-4'} />,
      label: 'Trending',
      gradient: 'from-orange-500 to-red-500',
      glow: 'shadow-orange-500/50'
    },
    enterprise: {
      icon: <StarIcon className={size === 'sm' ? 'w-3 h-3' : 'w-4 h-4'} />,
      label: 'Enterprise',
      gradient: 'from-amber-500 to-yellow-500',
      glow: 'shadow-amber-500/50'
    },
    new: {
      icon: <SparklesIcon className={size === 'sm' ? 'w-3 h-3' : 'w-4 h-4'} />,
      label: 'New',
      gradient: 'from-emerald-500 to-teal-500',
      glow: 'shadow-emerald-500/50'
    },
    verified: {
      icon: <CheckBadgeIcon className={size === 'sm' ? 'w-3 h-3' : 'w-4 h-4'} />,
      label: 'Verified',
      gradient: 'from-indigo-500 to-purple-500',
      glow: 'shadow-indigo-500/50'
    }
  };

  const badge = badges[type];
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-xs',
    lg: 'px-4 py-1.5 text-sm'
  };

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      className={`inline-flex items-center gap-1.5 ${sizeClasses[size]} bg-gradient-to-r ${badge.gradient} text-white font-semibold rounded-full shadow-lg ${badge.glow}`}
    >
      {badge.icon}
      <span>{badge.label}</span>
    </motion.div>
  );
}
