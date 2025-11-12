import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import { cn } from '@/lib/utils';

interface VideoEmbedProps {
  url: string;
  title: string;
  description?: string;
  className?: string;
  aspectRatio?: '16/9' | '4/3' | '1/1';
  autoplay?: boolean;
  controls?: boolean;
  loop?: boolean;
  showInfo?: boolean;
  showRelated?: boolean;
  width?: number | string;
  height?: number | string;
  thumbnailUrl?: string;
  uploadDate?: string;
  duration?: string;
  publisherName?: string;
  publisherLogo?: string;
  loading?: 'lazy' | 'eager';
}

export default function VideoEmbed({
  url,
  title,
  description = '',
  className = '',
  aspectRatio = '16/9',
  autoplay = false,
  controls = true,
  loop = false,
  showInfo = true,
  showRelated = false,
  width = '100%',
  height = 'auto',
  thumbnailUrl = '',
  uploadDate = '',
  duration = '',
  publisherName = 'DeepTool',
  publisherLogo = 'https://deeptool.vercel.app/logo.png',
  loading = 'lazy',
}: VideoEmbedProps) {
  const videoRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isYouTube, setIsYouTube] = useState(false);
  const [isVimeo, setIsVimeo] = useState(false);
  const [videoId, setVideoId] = useState('');
  const [aspectRatioClass, setAspectRatioClass] = useState('aspect-video');

  // Extract video ID and set platform flags
  useEffect(() => {
    // Set aspect ratio class
    switch (aspectRatio) {
      case '16/9':
        setAspectRatioClass('aspect-video');
        break;
      case '4/3':
        setAspectRatioClass('aspect-4/3');
        break;
      case '1/1':
        setAspectRatioClass('aspect-square');
        break;
      default:
        setAspectRatioClass('aspect-video');
    }

    // Check if URL is from YouTube
    const youtubeMatch = url.match(
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i
    );

    if (youtubeMatch && youtubeMatch[1]) {
      setIsYouTube(true);
      setVideoId(youtubeMatch[1]);
      return;
    }

    // Check if URL is from Vimeo
    const vimeoMatch = url.match(
      /(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)/i
    );

    if (vimeoMatch && vimeoMatch[1]) {
      setIsVimeo(true);
      setVideoId(vimeoMatch[1]);
      return;
    }
  }, [url, aspectRatio]);

  // Load YouTube API if needed
  useEffect(() => {
    if (isYouTube && !(window as any).YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      (window as any).onYouTubeIframeAPIReady = () => {
        setIsLoaded(true);
      };
    } else if (isYouTube) {
      setIsLoaded(true);
    }
  }, [isYouTube]);

  // Generate embed URL based on platform
  const getEmbedUrl = () => {
    if (isYouTube) {
      const params = new URLSearchParams();
      if (!controls) params.append('controls', '0');
      if (autoplay) params.append('autoplay', '1');
      if (loop) params.append('loop', '1');
      if (!showInfo) params.append('showinfo', '0');
      if (!showRelated) {
        params.append('rel', '0');
      }
      return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
    }

    if (isVimeo) {
      const params = new URLSearchParams();
      if (!controls) params.append('controls', '0');
      if (autoplay) params.append('autoplay', '1');
      if (loop) params.append('loop', '1');
      if (!showInfo) params.append('title', '0');
      if (!showRelated) params.append('byline', '0&portrait=0');
      return `https://player.vimeo.com/video/${videoId}?${params.toString()}`;
    }

    return url;
  };

  // Generate VideoObject structured data
  const generateVideoObject = () => {
    return {
      '@context': 'https://schema.org',
      '@type': 'VideoObject',
      name: title,
      description: description || title,
      thumbnailUrl: thumbnailUrl || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
      uploadDate: uploadDate || new Date().toISOString(),
      duration: duration || 'PT1M',
      embedUrl: getEmbedUrl(),
      contentUrl: url,
      publisher: {
        '@type': 'Organization',
        name: publisherName,
        logo: {
          '@type': 'ImageObject',
          url: publisherLogo,
        },
      },
    };
  };

  if (!url) return null;

  return (
    <div className={cn('w-full', className)}>
      {/* Video Embed */}
      <div className="relative overflow-hidden rounded-lg bg-black">
        {isYouTube ? (
          <>
            {isLoaded ? (
              <div className={aspectRatioClass}>
                <iframe
                  src={getEmbedUrl()}
                  title={title}
                  allowFullScreen
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  loading={loading}
                />
              </div>
            ) : (
              <div className="flex h-64 items-center justify-center bg-gray-100 dark:bg-gray-800">
                <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-blue-500"></div>
              </div>
            )}
          </>
        ) : isVimeo ? (
          <div className={aspectRatioClass}>
            <iframe
              src={getEmbedUrl()}
              title={title}
              allowFullScreen
              className="h-full w-full"
              allow="autoplay; fullscreen; picture-in-picture"
              loading={loading}
            />
          </div>
        ) : (
          <div className={aspectRatioClass}>
            <video
              src={url}
              title={title}
              controls={controls}
              autoPlay={autoplay}
              loop={loop}
              className="h-full w-full"
              poster={thumbnailUrl}
              preload={loading}
            >
              <track kind="captions" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>

      {/* Video Title and Description */}
      {(title || description) && (
        <div className="mt-3">
          {title && <h3 className="text-lg font-medium text-gray-900 dark:text-white">{title}</h3>}
          {description && <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{description}</p>}
        </div>
      )}

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateVideoObject()),
        }}
      />
    </div>
  );
}
