import Image, { ImageProps } from 'next/image';
import { useState, useEffect } from 'react';

interface ImageOptimizerProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fallbackSrc?: string;
}

export function ImageOptimizer({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  fallbackSrc = '/images/placeholder.jpg',
  ...props
}: ImageOptimizerProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setIsLoading(true);
    setIsError(false);
  }, [src]);

  const handleError = () => {
    if (!isError && fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
      setIsError(true);
    } else {
      setIsLoading(false);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  // Generate blur data URL for placeholder
  const blurDataURL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

  return (
    <div 
      className={`relative overflow-hidden ${className} ${isLoading ? 'bg-gray-100 animate-pulse' : ''}`}
      style={{ width, height }}
    >
      <Image
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${!isLoading ? 'opacity-100' : 'opacity-0'}`}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        quality={85}
        placeholder="blur"
        blurDataURL={blurDataURL}
        onError={handleError}
        onLoad={handleLoad}
        {...props}
      />
    </div>
  );
}

export default ImageOptimizer;
