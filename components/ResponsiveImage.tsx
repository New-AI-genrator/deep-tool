"use client";

import { useState, useEffect } from 'react';
import { useMobileDetection } from '../hooks/useMobileDetection';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  mobileSrc?: string;
  tabletSrc?: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
}

export function ResponsiveImage({
  src,
  alt,
  mobileSrc,
  tabletSrc,
  width,
  height,
  className = '',
  priority = false,
  quality = 75,
  sizes
}: ResponsiveImageProps) {
  const { isMobile, isTablet } = useMobileDetection();
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let newSrc = src;
    
    // Use device-specific image if available
    if (isMobile && mobileSrc) {
      newSrc = mobileSrc;
    } else if (isTablet && tabletSrc) {
      newSrc = tabletSrc;
    }
    
    setImageSrc(newSrc);
  }, [isMobile, isTablet, src, mobileSrc, tabletSrc]);

  // Generate responsive sizes attribute
  const defaultSizes = isMobile 
    ? "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
    : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw";

  // Generate srcSet for different resolutions
  const generateSrcSet = (baseSrc: string) => {
    if (!width || !height) return undefined;
    
    const densities = [1, 1.5, 2];
    return densities.map(density => {
      const scaledWidth = Math.round(width * density);
      const scaledHeight = Math.round(height * density);
      return `${baseSrc}?w=${scaledWidth}&h=${scaledHeight}&q=${quality} ${density}x`;
    }).join(', ');
  };

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-xl" />
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes || defaultSizes}
        srcSet={generateSrcSet(imageSrc)}
        className={`${className} transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={() => setIsLoading(false)}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : undefined}
      />
      {isLoading && (
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={alt}
            width={width}
            height={height}
            className={className}
          />
        </noscript>
      )}
    </div>
  );
}