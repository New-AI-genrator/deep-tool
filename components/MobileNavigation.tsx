"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HomeIcon, 
  MagnifyingGlassIcon, 
  ChatBubbleLeftRightIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { useMobileDetection } from '../hooks/useMobileDetection';

interface NavItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  exact?: boolean;
}

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isMobile } = useMobileDetection();

  // Only render on mobile devices
  if (!isMobile) {
    return null;
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems: NavItem[] = [
    { name: 'Home', href: '/', icon: <HomeIcon className="w-5 h-5" /> },
    { name: 'Search', href: '/search', icon: <MagnifyingGlassIcon className="w-5 h-5" /> },
    { name: 'Chatbot', href: '/chatbot', icon: <ChatBubbleLeftRightIcon className="w-5 h-5" /> },
    { name: 'Categories', href: '/categories' },
    { name: 'Tools', href: '/tools' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <>
      {/* Floating Mobile Navigation Button */}
      <motion.button
        className={`fixed bottom-6 right-6 z-40 rounded-full p-4 shadow-lg backdrop-blur-md transition-all duration-300 ${
          scrolled 
            ? 'bg-aether-obsidian/90 border border-white/20' 
            : 'bg-aether-obsidian/80 border border-white/10'
        }`}
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        aria-label="Open navigation menu"
      >
        <Bars3Icon className="w-6 h-6 text-white" />
      </motion.button>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-aether-obsidian/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-6 right-6 z-50 rounded-full p-3 text-white hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(false)}
              whileTap={{ scale: 0.9 }}
              aria-label="Close navigation menu"
            >
              <XMarkIcon className="w-6 h-6" />
            </motion.button>

            {/* Navigation Content */}
            <div className="flex flex-col h-full pt-16 pb-8">
              {/* Main Navigation */}
              <nav className="flex-1 overflow-y-auto px-6">
                <ul className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-4 w-full p-4 rounded-2xl text-white hover:bg-white/10 transition-all duration-300"
                      >
                        {item.icon && (
                          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5">
                            {item.icon}
                          </div>
                        )}
                        <span className="text-lg font-medium">{item.name}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Bottom Actions */}
              <div className="px-6 pt-6 border-t border-white/10">
                <div className="grid grid-cols-2 gap-4">
                  <Link
                    href="/pricing"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl text-center hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/favorites"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 bg-white/10 text-white font-semibold rounded-xl text-center hover:bg-white/20 transition-all duration-300"
                  >
                    Favorites
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}