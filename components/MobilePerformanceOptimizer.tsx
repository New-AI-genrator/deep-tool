"use client";

import { useEffect, useState } from 'react';
import { useMobileDetection } from '../hooks/useMobileDetection';

export function MobilePerformanceOptimizer() {
  const { isMobile, isTablet, screenSize } = useMobileDetection();
  const [isOptimized, setIsOptimized] = useState(false);

  useEffect(() => {
    if (!isMobile && !isTablet) return;

    // Function to optimize for mobile performance
    const optimizeForMobile = () => {
      // Reduce animations on mobile
      if (isMobile) {
        document.documentElement.style.setProperty('--animation-speed', '0.1s');
        document.documentElement.style.setProperty('--transition-speed', '0.1s');
      } else if (isTablet) {
        document.documentElement.style.setProperty('--animation-speed', '0.2s');
        document.documentElement.style.setProperty('--transition-speed', '0.2s');
      }

      // Reduce image quality on mobile
      const images = document.querySelectorAll('img[data-src]');
      images.forEach(img => {
        if (isMobile) {
          const mobileSrc = img.getAttribute('data-src-mobile');
          if (mobileSrc) {
            img.setAttribute('src', mobileSrc);
          }
        }
      });

      // Reduce particle effects on mobile
      const particleContainers = document.querySelectorAll('.particle-container');
      particleContainers.forEach(container => {
        if (isMobile) {
          container.classList.add('particles-reduced');
        } else {
          container.classList.remove('particles-reduced');
        }
      });

      setIsOptimized(true);
    };

    // Function to restore normal performance
    const restorePerformance = () => {
      document.documentElement.style.setProperty('--animation-speed', '0.3s');
      document.documentElement.style.setProperty('--transition-speed', '0.3s');
      
      // Restore full particle effects
      const particleContainers = document.querySelectorAll('.particle-container');
      particleContainers.forEach(container => {
        container.classList.remove('particles-reduced');
      });

      setIsOptimized(false);
    };

    // Optimize based on device
    if (isMobile || isTablet) {
      optimizeForMobile();
    } else {
      restorePerformance();
    }

    // Listen for device changes
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newIsMobile = newWidth <= 768;
      const newIsTablet = newWidth > 768 && newWidth <= 1024;

      if (newIsMobile || newIsTablet) {
        optimizeForMobile();
      } else {
        restorePerformance();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      restorePerformance();
    };
  }, [isMobile, isTablet]);

  // Add CSS variables for performance optimization
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      :root {
        --animation-speed: 0.3s;
        --transition-speed: 0.3s;
      }
      
      .particles-reduced {
        display: none;
      }
      
      @media (max-width: 768px) {
        * {
          transition-duration: var(--transition-speed) !important;
          animation-duration: var(--animation-speed) !important;
        }
        
        .mobile-reduced-motion * {
          transition: none !important;
          animation: none !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
}