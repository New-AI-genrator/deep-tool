import { ToolEntry } from '../tools';

export const sportsFitnessTools: ToolEntry[] = [
  // Athletic Training
  {
    name: 'Whoop AI',
    slug: 'whoop-ai',
    tagline: 'AI-powered wearable for athletic performance and recovery',
    logoUrl: '/logos/whoop-ai.png',
    website: 'https://www.whoop.com/ai',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Sports & Fitness',
    categorySlug: 'sports-fitness',
    subcategory: 'Athletic Training',
    subcategorySlug: 'athletic-training',
    description: 'Whoop AI enhances the athletic wearable with AI-powered performance insights, recovery optimization, strain analysis, and personalized training recommendations.',
    features: ['AI performance insights', 'Recovery optimization', 'Strain analysis', 'Sleep tracking', 'Heart rate monitoring', 'Personalized recommendations', 'Team analytics', 'Mobile app'],
    useCases: ['Athletic training', 'Performance monitoring', 'Recovery optimization', 'Sleep analysis', 'Heart rate tracking', 'Team sports', 'Individual sports', 'Fitness improvement'],
    tags: ['wearable-tech', 'ai-fitness', 'performance-tracking', 'recovery-optimization', 'athletic-training'],
    rating: 4.7,
    reviewCount: 25000,
    alternatives: ['Garmin', 'Fitbit', 'Polar'],
    integrations: ['Strava', 'TrainingPeaks', 'MyFitnessPal', 'Apple Health', 'Google Fit', 'Instagram', 'Twitter', 'Team apps'],
    pricingDetails: {
      type: 'freemium',
      price: 'Device purchase required, Membership from $30/month',
      url: 'https://www.whoop.com/pages/membership',
      description: 'Device purchase with subscription membership'
    }
  },
  {
    name: 'Garmin AI',
    slug: 'garmin-ai',
    tagline: 'AI-enhanced GPS sports watches and fitness trackers',
    logoUrl: '/logos/garmin-ai.png',
    website: 'https://www.garmin.com/ai',
    pricing: 'paid',
    badges: ['popular', 'enterprise'],
    category: 'Sports & Fitness',
    categorySlug: 'sports-fitness',
    subcategory: 'Athletic Training',
    subcategorySlug: 'athletic-training',
    description: 'Garmin AI enhances GPS sports watches with AI-powered training plans, performance analysis, race predictions, and adaptive workout recommendations.',
    features: ['AI training plans', 'Performance analysis', 'Race predictions', 'Adaptive workouts', 'GPS tracking', 'Heart rate monitoring', 'Multisport support', 'Smart notifications'],
    useCases: ['Running', 'Cycling', 'Swimming', 'Hiking', 'Multisport training', 'Race preparation', 'Performance tracking', 'Outdoor activities'],
    tags: ['gps-tracking', 'ai-training', 'sports-watches', 'performance-analysis', 'multisport'],
    rating: 4.8,
    reviewCount: 45000,
    alternatives: ['Whoop', 'Polar', 'Suunto'],
    integrations: ['Strava', 'TrainingPeaks', 'MyFitnessPal', 'Apple Health', 'Google Fit', 'Komoot', 'Runtastic', 'Endomondo'],
    pricingDetails: {
      type: 'paid',
      price: 'Devices from $199.99 to $999.99',
      url: 'https://www.garmin.com/en-US/wearables/',
      description: 'Device purchase with various models and price points'
    }
  },
  
  // Team Sports
  {
    name: 'Catapult AI',
    slug: 'catapult-ai',
    tagline: 'AI-powered athlete monitoring and performance analytics',
    logoUrl: '/logos/catapult-ai.png',
    website: 'https://www.catapultsports.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Sports & Fitness',
    categorySlug: 'sports-fitness',
    subcategory: 'Team Sports',
    subcategorySlug: 'team-sports',
    description: 'Catapult AI enhances athlete monitoring with AI-powered performance analytics, injury prevention, workload management, and team strategy optimization.',
    features: ['AI performance analytics', 'Injury prevention', 'Workload management', 'Team strategy', 'Biomechanical analysis', 'Video integration', 'Reporting dashboard', 'Mobile app'],
    useCases: ['Professional sports', 'College athletics', 'Team training', 'Performance analysis', 'Injury prevention', 'Workload monitoring', 'Strategy development', 'Player development'],
    tags: ['athlete-monitoring', 'ai-analytics', 'performance-tracking', 'injury-prevention', 'team-sports'],
    rating: 4.6,
    reviewCount: 8500,
    alternatives: ['Stats Perform', 'Hudl', 'Dartfish'],
    integrations: ['Video analysis', 'EHR systems', 'Communication apps', 'GPS tracking', 'Heart rate monitors', 'Force plates', 'Timing systems', 'Cloud storage'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.catapultsports.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  {
    name: 'Stats Perform AI',
    slug: 'stats-perform-ai',
    tagline: 'AI-powered sports analytics and performance insights',
    logoUrl: '/logos/stats-perform-ai.png',
    website: 'https://www.statsperform.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Sports & Fitness',
    categorySlug: 'sports-fitness',
    subcategory: 'Team Sports',
    subcategorySlug: 'team-sports',
    description: 'Stats Perform AI enhances sports analytics with AI-powered performance insights, predictive modeling, tactical analysis, and fan engagement metrics.',
    features: ['AI performance insights', 'Predictive modeling', 'Tactical analysis', 'Fan engagement', 'Video analysis', 'Data visualization', 'Reporting tools', 'API access'],
    useCases: ['Professional sports', 'Broadcasting', 'Fantasy sports', 'Sports betting', 'Team analysis', 'Player evaluation', 'Tactical planning', 'Fan engagement'],
    tags: ['sports-analytics', 'ai-insights', 'predictive-modeling', 'tactical-analysis', 'fan-engagement'],
    rating: 4.7,
    reviewCount: 12000,
    alternatives: ['Catapult', 'Hudl', 'Dartfish'],
    integrations: ['Broadcast systems', 'Social media', 'Fantasy platforms', 'Betting sites', 'Video analysis', 'Data warehouses', 'Cloud platforms', 'Mobile apps'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.statsperform.com/contact-us',
      description: 'Enterprise solution with custom pricing'
    }
  },
  
  // Fitness Apps
  {
    name: 'MyFitnessPal AI',
    slug: 'myfitnesspal-ai',
    tagline: 'AI-powered calorie tracking and nutrition management',
    logoUrl: '/logos/myfitnesspal-ai.png',
    website: 'https://www.myfitnesspal.com/ai',
    pricing: 'freemium',
    badges: ['popular', 'community-favorite'],
    category: 'Sports & Fitness',
    categorySlug: 'sports-fitness',
    subcategory: 'Fitness Apps',
    subcategorySlug: 'fitness-apps',
    description: 'MyFitnessPal AI enhances the nutrition tracking app with AI-powered food recognition, personalized nutrition insights, meal planning, and fitness integration.',
    features: ['AI food recognition', 'Personalized nutrition', 'Meal planning', 'Fitness integration', 'Barcode scanning', 'Recipe importer', 'Community support', 'Progress tracking'],
    useCases: ['Calorie tracking', 'Nutrition management', 'Weight loss', 'Muscle gain', 'Meal planning', 'Diet monitoring', 'Fitness support', 'Health improvement'],
    tags: ['nutrition-tracking', 'ai-nutrition', 'calorie-counting', 'meal-planning', 'health-app'],
    rating: 4.5,
    reviewCount: 55000,
    alternatives: ['Lose It!', 'Cronometer', 'FatSecret'],
    integrations: ['Apple Health', 'Google Fit', 'Fitbit', 'Garmin', 'Strava', 'Withings', 'Samsung Health', 'Apple Watch'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free basic, Premium from $9.99/month or $49.99/year',
      url: 'https://www.myfitnesspal.com/premium',
      description: 'Free version with premium subscription option'
    }
  },
  {
    name: 'Strava AI',
    slug: 'strava-ai',
    tagline: 'AI-enhanced social fitness tracking and community platform',
    logoUrl: '/logos/strava-ai.png',
    website: 'https://www.strava.com/ai',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Sports & Fitness',
    categorySlug: 'sports-fitness',
    subcategory: 'Fitness Apps',
    subcategorySlug: 'fitness-apps',
    description: 'Strava AI enhances the social fitness platform with AI-powered performance analysis, route recommendations, social challenges, and personalized training plans.',
    features: ['AI performance analysis', 'Route recommendations', 'Social challenges', 'Personalized training', 'Segment competition', 'Activity tracking', 'Community features', 'Goal setting'],
    useCases: ['Activity tracking', 'Performance analysis', 'Route planning', 'Social competition', 'Training plans', 'Goal setting', 'Community engagement', 'Progress tracking'],
    tags: ['fitness-tracking', 'ai-analytics', 'social-fitness', 'route-planning', 'community-platform'],
    rating: 4.8,
    reviewCount: 65000,
    alternatives: ['Nike Run Club', 'Adidas Running', 'Under Armour Record'],
    integrations: ['Garmin', 'Fitbit', 'Apple Watch', 'Polar', 'Suunto', 'Apple Health', 'Google Fit', 'TrainingPeaks'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free basic, Summit from $9.99/month or $71.88/year',
      url: 'https://www.strava.com/subscription',
      description: 'Free version with premium subscription option'
    }
  }
];