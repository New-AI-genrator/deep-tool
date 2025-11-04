'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { pageview } from '../lib/gtag';

export default function ClientGoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined' && pathname) {
      const url = pathname + (searchParams?.toString() ? '?' + searchParams.toString() : '');
      pageview(url);
    }
  }, [pathname, searchParams]);

  // Return null to render nothing
  return null;
}