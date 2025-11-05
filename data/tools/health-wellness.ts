import { ToolEntry } from '../tools';

export const healthWellnessTools: ToolEntry[] = [
  // Fitness Tracking
  {
    name: 'Fitbit AI',
    slug: 'fitbit-ai',
    tagline: 'AI-powered fitness and health tracking wearable',
    logoUrl: '/logos/fitbit-ai.png',
    website: 'https://www.fitbit.com/ai',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Health & Wellness',
    categorySlug: 'health-wellness',
    subcategory: 'Fitness Tracking',
    subcategorySlug: 'fitness-tracking',
    description: 'Fitbit AI enhances the fitness tracking wearable with AI-powered health insights, personalized coaching, and predictive health analytics.',
    features: ['Activity tracking', 'Heart rate monitoring', 'Sleep tracking', 'AI health insights', 'Personalized coaching', 'GPS tracking', 'Water resistance', 'Smartphone integration'],
    useCases: ['Fitness tracking', 'Health monitoring', 'Sleep analysis', 'Workout planning', 'Goal setting', 'Progress tracking', 'Health insights', 'Wellness optimization'],
    tags: ['fitness-tracking', 'wearable-tech', 'health-monitoring', 'ai-insights', 'wellness'],
    rating: 4.5,
    reviewCount: 45000,
    alternatives: ['Apple Watch', 'Garmin', 'Samsung Galaxy Watch'],
    integrations: ['Smartphones', 'iOS', 'Android', 'Strava', 'MyFitnessPal', 'Google Fit', 'Apple Health', 'Amazon Alexa'],
    pricingDetails: {
      type: 'freemium',
      price: 'Devices from $69.95, Premium subscription from $9.99/month',
      url: 'https://www.fitbit.com/versa',
      description: 'Device purchase with optional premium subscription'
    }
  },
  {
    name: 'Apple Watch AI',
    slug: 'apple-watch-ai',
    tagline: 'AI-powered smartwatch with comprehensive health features',
    logoUrl: '/logos/apple-watch-ai.png',
    website: 'https://www.apple.com/watch/ai/',
    pricing: 'paid',
    badges: ['popular', 'trending'],
    category: 'Health & Wellness',
    categorySlug: 'health-wellness',
    subcategory: 'Fitness Tracking',
    subcategorySlug: 'fitness-tracking',
    description: 'Apple Watch AI enhances the smartwatch with AI-powered health monitoring, ECG capabilities, fall detection, and personalized fitness coaching.',
    features: ['ECG monitoring', 'Fall detection', 'Blood oxygen monitoring', 'Heart rate tracking', 'GPS tracking', 'Water resistance', 'Fitness coaching', 'Health app integration'],
    useCases: ['Fitness tracking', 'Health monitoring', 'Emergency response', 'Workout tracking', 'Sleep monitoring', 'Medication reminders', 'Communication', 'Mobile payments'],
    tags: ['fitness-tracking', 'smartwatch', 'health-monitoring', 'ai-health', 'wearable-tech'],
    rating: 4.7,
    reviewCount: 65000,
    alternatives: ['Fitbit', 'Garmin', 'Samsung Galaxy Watch'],
    integrations: ['iPhone', 'iOS', 'Apple Health', 'Apple Fitness', 'Strava', 'MyFitnessPal', 'Spotify', 'Apple Pay'],
    pricingDetails: {
      type: 'paid',
      price: 'Apple Watch SE from $249, Series 9 from $399, Ultra from $799',
      url: 'https://www.apple.com/watch/',
      description: 'Device purchase with various models and features'
    }
  },
  
  // Mental Health
  {
    name: 'Calm AI',
    slug: 'calm-ai',
    tagline: 'AI-powered meditation and sleep improvement app',
    logoUrl: '/logos/calm-ai.png',
    website: 'https://www.calm.com/ai',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Health & Wellness',
    categorySlug: 'health-wellness',
    subcategory: 'Mental Health',
    subcategorySlug: 'mental-health',
    description: 'Calm AI enhances the meditation app with AI-powered personalized meditation sessions, sleep stories, and mental health insights.',
    features: ['Personalized meditation', 'Sleep stories', 'Breathing exercises', 'Meditation programs', 'Sleep tracking', 'Calm music', 'Masterclass sessions', 'Progress tracking'],
    useCases: ['Stress reduction', 'Sleep improvement', 'Meditation practice', 'Anxiety management', 'Mindfulness', 'Focus improvement', 'Relaxation', 'Mental wellness'],
    tags: ['meditation', 'mental-health', 'sleep-improvement', 'ai-wellness', 'mindfulness'],
    rating: 4.8,
    reviewCount: 32000,
    alternatives: ['Headspace', 'Insight Timer', 'Ten Percent Happier'],
    integrations: ['iOS', 'Android', 'Apple Watch', 'Google Fit', 'Samsung Health', 'Amazon Alexa', 'Google Assistant'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free limited content, Premium from $69.99/year or $14.99/month',
      url: 'https://www.calm.com/premium',
      description: 'Free version with premium subscription option'
    }
  },
  {
    name: 'Headspace AI',
    slug: 'headspace-ai',
    tagline: 'AI-powered mindfulness and meditation app',
    logoUrl: '/logos/headspace-ai.png',
    website: 'https://www.headspace.com/ai',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Health & Wellness',
    categorySlug: 'health-wellness',
    subcategory: 'Mental Health',
    subcategorySlug: 'mental-health',
    description: 'Headspace AI enhances the mindfulness app with AI-powered personalized meditation sessions, focus music, and mental health exercises.',
    features: ['Personalized meditation', 'Focus music', 'Sleep sounds', 'Meditation courses', 'Mindful movement', 'Kids content', 'SOS sessions', 'Progress tracking'],
    useCases: ['Meditation practice', 'Stress reduction', 'Focus improvement', 'Sleep enhancement', 'Anxiety management', 'Mindfulness', 'Emotional regulation', 'Mental wellness'],
    tags: ['meditation', 'mindfulness', 'mental-health', 'ai-wellness', 'stress-reduction'],
    rating: 4.6,
    reviewCount: 28000,
    alternatives: ['Calm', 'Insight Timer', 'Ten Percent Happier'],
    integrations: ['iOS', 'Android', 'Apple Watch', 'Google Fit', 'Samsung Health', 'Alexa', 'Google Assistant'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free limited content, Plus from $69.99/year or $12.99/month, Family from $99.99/year',
      url: 'https://www.headspace.com/subscription',
      description: 'Free version with premium subscription options'
    }
  },
  
  // Nutrition
  {
    name: 'MyFitnessPal AI',
    slug: 'myfitnesspal-ai',
    tagline: 'AI-powered calorie counting and nutrition tracking app',
    logoUrl: '/logos/myfitnesspal-ai.png',
    website: 'https://www.myfitnesspal.com/ai',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Health & Wellness',
    categorySlug: 'health-wellness',
    subcategory: 'Nutrition',
    subcategorySlug: 'nutrition',
    description: 'MyFitnessPal AI enhances the nutrition tracking app with AI-powered food recognition, personalized nutrition insights, and meal planning.',
    features: ['AI food recognition', 'Calorie tracking', 'Nutrition insights', 'Meal planning', 'Barcode scanning', 'Recipe importer', 'Progress tracking', 'Community support'],
    useCases: ['Calorie counting', 'Nutrition tracking', 'Weight management', 'Meal planning', 'Diet monitoring', 'Health improvement', 'Fitness support', 'Goal tracking'],
    tags: ['nutrition', 'calorie-tracking', 'diet-monitoring', 'ai-nutrition', 'health-app'],
    rating: 4.4,
    reviewCount: 55000,
    alternatives: ['Lose It!', 'Cronometer', 'FatSecret'],
    integrations: ['Apple Health', 'Google Fit', 'Fitbit', 'Garmin', 'Withings', 'Samsung Health', 'Strava', 'Apple Watch'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free basic, Premium from $9.99/month or $49.99/year',
      url: 'https://www.myfitnesspal.com/premium',
      description: 'Free version with premium subscription option'
    }
  },
  {
    name: 'Cronometer AI',
    slug: 'cronometer-ai',
    tagline: 'AI-powered nutrition tracking and biomarker monitoring',
    logoUrl: '/logos/cronometer-ai.png',
    website: 'https://www.cronometer.com/ai',
    pricing: 'freemium',
    badges: ['popular', 'community-favorite'],
    category: 'Health & Wellness',
    categorySlug: 'health-wellness',
    subcategory: 'Nutrition',
    subcategorySlug: 'nutrition',
    description: 'Cronometer AI enhances the nutrition tracking app with AI-powered biomarker monitoring, personalized nutrition insights, and detailed nutrient analysis.',
    features: ['Nutrient tracking', 'Biomarker monitoring', 'Nutrition insights', 'Recipe analysis', 'Food database', 'Meal planning', 'Progress tracking', 'Export capabilities'],
    useCases: ['Nutrition tracking', 'Biomarker monitoring', 'Health optimization', 'Diet analysis', 'Nutrient deficiency detection', 'Meal planning', 'Athletic performance', 'Longevity support'],
    tags: ['nutrition', 'biomarker-tracking', 'health-optimization', 'ai-nutrition', 'diet-analysis'],
    rating: 4.7,
    reviewCount: 15000,
    alternatives: ['MyFitnessPal', 'Lose It!', 'FatSecret'],
    integrations: ['Apple Health', 'Google Fit', 'Fitbit', 'Garmin', 'Withings', 'Samsung Health', 'Oura Ring', 'Whoop'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free basic, Gold from $6.67/month or $79.99/year',
      url: 'https://www.cronometer.com/pricing/',
      description: 'Free version with premium subscription option'
    }
  }
];