import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Copy, Check, Twitter, Facebook, Linkedin, Link2, Mail } from 'lucide-react';
// Simple button component to avoid external dependencies
const Button = ({
  variant = 'default',
  size = 'default',
  className = '',
  children,
  ...props
}: {
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none';
  
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700',
    ghost: 'hover:bg-gray-100 dark:hover:bg-gray-800',
    link: 'text-blue-600 underline-offset-4 hover:underline dark:text-blue-400',
  };

  const sizes = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 px-3 text-sm',
    lg: 'h-11 px-8',
    icon: 'h-10 w-10',
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export interface SocialShareProps {
  url?: string;
  title?: string;
  description?: string;
  via?: string;
  tags?: string[];
  className?: string;
  buttonClassName?: string;
  iconClassName?: string;
  showLabel?: boolean;
  showCount?: boolean;
  platforms?: Array<'twitter' | 'facebook' | 'linkedin' | 'copy' | 'email'>;
  buttonVariant?: 'default' | 'outline' | 'ghost' | 'link';
  buttonSize?: 'default' | 'sm' | 'lg' | 'icon';
  onShare?: (platform: string) => void;
}

interface ShareCounts {
  twitter?: number;
  facebook?: number;
  linkedin?: number;
  [key: string]: number | undefined;
}

export function SocialShare({
  url: propUrl,
  title = '',
  description = '',
  via = 'deeptool',
  tags = [],
  className = '',
  buttonClassName = '',
  iconClassName = '',
  showLabel = true,
  showCount = false,
  platforms = ['twitter', 'facebook', 'linkedin', 'copy'],
  buttonVariant = 'outline',
  buttonSize = 'default',
  onShare,
}: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  const [shareCounts, setShareCounts] = useState<ShareCounts>({});
  const [isClient, setIsClient] = useState(false);

  // Get the current URL if none provided
  const url = propUrl || 
    (typeof window !== 'undefined' ? window.location.href : '');

  // Set isClient to true after mount (for SSR)
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Reset copied state after 2 seconds
  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  // Fetch share counts
  useEffect(() => {
    if (!isClient || !showCount) return;

    const fetchShareCounts = async () => {
      try {
        // In a real app, you would fetch share counts from an API
        // For example, using a service like ShareThis or a custom API endpoint
        // This is a placeholder implementation
        const counts: ShareCounts = {};
        
        // Example: Fetch Twitter shares (requires a server endpoint)
        // const twitterResponse = await fetch(`/api/shares/twitter?url=${encodeURIComponent(url)}`);
        // const twitterData = await twitterResponse.json();
        // counts.twitter = twitterData.count || 0;
        
        setShareCounts(counts);
      } catch (error) {
        console.error('Error fetching share counts:', error);
      }
    };

    fetchShareCounts();
  }, [url, isClient, showCount]);

  const handleShare = (platform: string, e?: React.MouseEvent<HTMLButtonElement>) => {
    e?.preventDefault();
    
    const shareUrl = new URL(url);
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    const encodedDescription = encodeURIComponent(description);
    const encodedVia = encodeURIComponent(via);
    const encodedTags = tags.join(',');

    let shareLink = '';

    switch (platform) {
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}&via=${encodedVia}&hashtags=${encodedTags}`;
        window.open(shareLink, '_blank', 'width=550,height=420');
        break;
      
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`;
        window.open(shareLink, '_blank', 'width=580,height=296');
        break;
      
      case 'linkedin':
        shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        window.open(shareLink, '_blank', 'width=550,height=435');
        break;
      
      case 'email':
        shareLink = `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`;
        window.location.href = shareLink;
        break;
      
      case 'copy':
        if (navigator.clipboard) {
          navigator.clipboard.writeText(url).then(() => {
            setCopied(true);
          });
        } else {
          // Fallback for older browsers
          const textArea = document.createElement('textarea');
          textArea.value = url;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          setCopied(true);
        }
        break;
    }

    // Call the onShare callback if provided
    if (onShare) {
      onShare(platform);
    }
  };

  const getPlatformIcon = (platform: string) => {
    const size = buttonSize === 'sm' ? 16 : buttonSize === 'lg' ? 20 : 18;
    const className = cn('mr-2', iconClassName);
    
    switch (platform) {
      case 'twitter':
        return <Twitter size={size} className={className} />;
      case 'facebook':
        return <Facebook size={size} className={className} />;
      case 'linkedin':
        return <Linkedin size={size} className={className} />;
      case 'email':
        return <Mail size={size} className={className} />;
      case 'copy':
        return copied ? (
          <Check size={size} className={`${className} text-green-500`} />
        ) : (
          <Copy size={size} className={className} />
        );
      default:
        return <Link2 size={size} className={className} />;
    }
  };

  const getPlatformLabel = (platform: string) => {
    switch (platform) {
      case 'twitter':
        return 'Twitter';
      case 'facebook':
        return 'Facebook';
      case 'linkedin':
        return 'LinkedIn';
      case 'email':
        return 'Email';
      case 'copy':
        return copied ? 'Copied!' : 'Copy Link';
      default:
        return platform;
    }
  };

  if (!isClient) {
    return null; // Don't render on the server
  }

  return (
    <div className={cn('flex flex-wrap items-center gap-2', className)}>
      {platforms.map((platform) => (
        <Button
          key={platform}
          variant={buttonVariant}
          size={buttonSize}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleShare(platform, e)}
          className={cn(
            'flex items-center justify-center',
            buttonClassName,
            {
              'bg-blue-500 hover:bg-blue-600 text-white': platform === 'twitter',
              'bg-[#4267B2] hover:bg-[#365899] text-white': platform === 'facebook',
              'bg-[#0077B5] hover:bg-[#006097] text-white': platform === 'linkedin',
              'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700': 
                platform === 'copy' || platform === 'email',
            }
          )}
          aria-label={`Share on ${platform}`}
        >
          {getPlatformIcon(platform)}
          {showLabel && (
            <span className={cn(buttonSize === 'sm' ? 'text-xs' : 'text-sm')}>
              {getPlatformLabel(platform)}
            </span>
          )}
          {showCount && shareCounts[platform] !== undefined && (
            <span className="ml-1.5 text-xs font-medium">
              {shareCounts[platform]?.toLocaleString()}
            </span>
          )}
        </Button>
      ))}
      
      {/* Structured Data for Social Media */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: title,
            description: description,
            url: url,
            publisher: {
              '@type': 'Organization',
              name: 'DeepTool',
              logo: {
                '@type': 'ImageObject',
                url: 'https://deeptool.vercel.app/logo.png',
              },
            },
          }),
        }}
      />
    </div>
  );
}

export default SocialShare;
