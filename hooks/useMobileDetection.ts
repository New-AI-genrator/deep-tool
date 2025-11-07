"use client";

import { useState, useEffect } from 'react';

export function useMobileDetection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0
  });

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setScreenSize({ width, height });
      
      // Mobile detection based on screen width
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };

    // Check on mount
    checkDevice();

    // Check on resize
    window.addEventListener('resize', checkDevice);

    // Clean up event listener
    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  return {
    isMobile,
    isTablet,
    isDesktop: !isMobile && !isTablet,
    screenSize
  };
}