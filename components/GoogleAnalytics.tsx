'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { pageview } from '../lib/gtag';

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      const url = pathname + (searchParams?.toString() ? '?' + searchParams.toString() : '');
      pageview(url);
    }
  }, [pathname, searchParams]);

  return null;
}