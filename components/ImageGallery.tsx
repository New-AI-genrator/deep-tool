import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ImageGalleryProps {
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
    width: number;
    height: number;
  }>;
  className?: string;
  columns?: number;
  gap?: number;
  showCaptions?: boolean;
  enableLightbox?: boolean;
}

export default function ImageGallery({
  images,
  className = '',
  columns = 3,
  gap = 4,
  showCaptions = true,
  enableLightbox = true,
}: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    if (enableLightbox) {
      setSelectedImage(index);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const goToPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    } else if (selectedImage === 0) {
      setSelectedImage(images.length - 1);
    }
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null && selectedImage < images.length - 1) {
      setSelectedImage(selectedImage + 1);
    } else if (selectedImage === images.length - 1) {
      setSelectedImage(0);
    }
  };

  const gridTemplateColumns = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  }[columns] || 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';

  const gapClass = `gap-${gap}`;

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className={className}>
      <div className={`grid ${gridTemplateColumns} ${gapClass}`}>
        {images.map((image, index) => (
          <div 
            key={`${image.src}-${index}`}
            className="group relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 transition-all duration-300 hover:shadow-md"
            onClick={() => openLightbox(index)}
          >
            <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className={cn(
                  'h-full w-full object-cover transition-transform duration-300 group-hover:scale-105',
                  enableLightbox ? 'cursor-zoom-in' : ''
                )}
                sizes={`(max-width: 640px) 100vw, (max-width: 1024px) 50vw, ${100 / columns}vw`}
              />
            </div>
            {showCaptions && (image.caption || image.alt) && (
              <div className="p-3 text-sm text-gray-700 dark:text-gray-300">
                {image.caption || image.alt}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {enableLightbox && selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black bg-opacity-50 p-2 text-white hover:bg-opacity-75 focus:outline-none"
            onClick={goToPrev}
            aria-label="Previous image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          
          <div className="relative max-h-[90vh] max-w-[90vw]">
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              width={images[selectedImage].width}
              height={images[selectedImage].height}
              className="max-h-[90vh] w-auto max-w-full object-contain"
              priority
            />
            {showCaptions && (images[selectedImage].caption || images[selectedImage].alt) && (
              <div className="mt-2 text-center text-white">
                {images[selectedImage].caption || images[selectedImage].alt}
              </div>
            )}
          </div>
          
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black bg-opacity-50 p-2 text-white hover:bg-opacity-75 focus:outline-none"
            onClick={goToNext}
            aria-label="Next image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          
          <button 
            className="absolute right-4 top-4 rounded-full bg-black bg-opacity-50 p-2 text-white hover:bg-opacity-75 focus:outline-none"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white opacity-75">
            {selectedImage + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
}
