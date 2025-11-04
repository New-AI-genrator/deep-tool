'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

export default function AdUnit({ 
  className = '',
  style = { display: 'block' },
  client = 'ca-pub-2894915343289598',
  slot,
  format = 'auto',
  responsive = 'true'
}: {
  className?: string;
  style?: React.CSSProperties;
  client?: string;
  slot: string;
  format?: string;
  responsive?: string;
}) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <ins
      className={`adsbygoogle ${className}`}
      style={style}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive}
    />
  );
}