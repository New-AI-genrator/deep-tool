# Google Analytics and AdSense Setup Guide

## Google Analytics 4 Setup

### 1. Get Your Google Analytics 4 Measurement ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property or select an existing one
3. Navigate to Admin > Property > Data Streams
4. Select your data stream or create a new one for your website
5. Find your Measurement ID (it looks like `G-XXXXXXXXXX`)

### 2. Configure Environment Variables

Add your Measurement ID to your environment variables:

```bash
# In .env.local for development
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# In Vercel dashboard for production
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 3. Verify Implementation

1. Start your development server: `npm run dev`
2. Visit http://localhost:3000
3. Open Chrome DevTools > Network tab
4. Filter for "gtag" or "google-analytics"
5. You should see requests to Google Analytics

## Google AdSense Setup

### 1. Current Implementation

The site already has AdSense configured in the layout:

```html
<meta name="google-adsense-account" content="ca-pub-2894915343289598">
```

And the AdSense script is included in the layout:

```jsx
<Script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2894915343289598"
  crossOrigin="anonymous"
  strategy="afterInteractive"
/>
```

### 2. Add Ad Units to Pages

To display ads, you need to add ad units to your pages. Create a component for ads:

```jsx
// components/AdUnit.tsx
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
```

### 3. Using Ad Units in Pages

```jsx
// Example usage in a page
import AdUnit from '../components/AdUnit';

export default function HomePage() {
  return (
    <div>
      <h1>Content</h1>
      
      {/* Leaderboard ad */}
      <AdUnit 
        slot="1234567890" 
        format="horizontal" 
        className="my-4"
      />
      
      <p>More content...</p>
    </div>
  );
}
```

## Privacy Policy Updates for AdSense

For Google AdSense approval, update your privacy policy to include:

1. Disclosure that you use Google AdSense
2. Information about how Google uses cookies
3. Link to Google's privacy policy
4. Instructions on how users can opt out

Example additions to your privacy policy:

```markdown
## Google AdSense and Advertising

We use Google AdSense to display advertisements on our website. Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the DART cookie enables it to serve ads to our users based on their visit to our site and other sites on the Internet.

Users may opt out of the use of the DART cookie by visiting the [Google ad and content network privacy policy](https://www.google.com/policies/technologies/ads/).
```

## Verification Steps

### 1. Google Analytics Verification

1. Check that the gtag script is loading in the page source
2. Verify events are being sent in Google Analytics Realtime reports
3. Confirm pageviews are tracked correctly

### 2. Google AdSense Verification

1. Ensure the AdSense script is in the `<head>` section
2. Check that ads are displaying correctly on your pages
3. Verify your AdSense account shows the site as verified

### 3. Search Console Verification

1. Add your site to Google Search Console
2. Verify ownership using the existing meta tag
3. Submit your sitemap: `https://deep-tool.vercel.app/sitemap.xml`

## Troubleshooting

### Common Issues

1. **Ads not showing**: 
   - Check if your AdSense account is approved
   - Verify the ad client ID is correct
   - Ensure you're not blocking your own ads

2. **Analytics not tracking**:
   - Confirm the Measurement ID is correct
   - Check that the gtag script is loading
   - Verify there are no JavaScript errors

3. **Environment variables not loading**:
   - Ensure variables are prefixed with `NEXT_PUBLIC_`
   - Restart the development server after changes
   - Check that .env files are in the correct location

## Next Steps for Full Optimization

1. **Add structured data for articles and tools**
2. **Implement user reviews and ratings**
3. **Create comparison pages for popular tools**
4. **Add FAQ sections for featured snippets**
5. **Optimize Core Web Vitals**
6. **Submit sitemap to Google Search Console**
7. **Set up conversion tracking for AdSense optimization**