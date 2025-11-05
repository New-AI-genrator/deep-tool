import { ToolEntry } from '../tools';

export const automotiveTransportationTools: ToolEntry[] = [
  // Autonomous Vehicles
  {
    name: 'Waymo AI',
    slug: 'waymo-ai',
    tagline: 'AI-powered autonomous driving and fleet management platform',
    logoUrl: '/logos/waymo-ai.png',
    website: 'https://www.waymo.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Automotive & Transportation',
    categorySlug: 'automotive-transportation',
    subcategory: 'Autonomous Vehicles',
    subcategorySlug: 'autonomous-vehicles',
    description: 'Waymo AI enhances autonomous driving with AI-powered perception systems, route optimization, safety protocols, and fleet management for commercial and consumer autonomous vehicle applications.',
    features: ['AI perception systems', 'Route optimization', 'Safety protocols', 'Fleet management', 'Sensor fusion', 'Behavior prediction', 'Mapping technology', 'Remote monitoring'],
    useCases: ['Autonomous ride-hailing', 'Commercial delivery', 'Fleet management', 'Safety monitoring', 'Route planning', 'Sensor integration', 'Data analysis', 'Urban mobility'],
    tags: ['autonomous-driving', 'ai-perception', 'route-optimization', 'fleet-management', 'safety-protocols'],
    rating: 4.7,
    reviewCount: 12000,
    alternatives: ['Tesla Autopilot', 'Cruise', 'Argo AI'],
    integrations: ['Vehicle sensors', 'GPS systems', 'Traffic data', 'Weather services', 'Mapping platforms', 'Cloud infrastructure', 'Mobile apps', 'Telematics systems'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.waymo.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  {
    name: 'Tesla AI',
    slug: 'tesla-ai',
    tagline: 'AI-enhanced electric vehicle autonomy and energy management',
    logoUrl: '/logos/tesla-ai.png',
    website: 'https://www.tesla.com/ai',
    pricing: 'paid',
    badges: ['popular', 'trending'],
    category: 'Automotive & Transportation',
    categorySlug: 'automotive-transportation',
    subcategory: 'Autonomous Vehicles',
    subcategorySlug: 'autonomous-vehicles',
    description: 'Tesla AI enhances electric vehicles with AI-powered autopilot systems, neural network processing, over-the-air updates, and energy optimization for sustainable transportation solutions.',
    features: ['AI autopilot systems', 'Neural network processing', 'Over-the-air updates', 'Energy optimization', 'Battery management', 'Performance tuning', 'Safety features', 'Mobile integration'],
    useCases: ['Autonomous driving', 'Energy management', 'Performance optimization', 'Safety enhancement', 'Software updates', 'Battery optimization', 'Navigation', 'Vehicle monitoring'],
    tags: ['electric-vehicles', 'ai-autopilot', 'neural-networks', 'energy-optimization', 'over-the-air-updates'],
    rating: 4.8,
    reviewCount: 45000,
    alternatives: ['Waymo', 'Cruise', 'Argo AI'],
    integrations: ['Supercharger network', 'Mobile apps', 'Home energy systems', 'Solar panels', 'Powerwall', 'Navigation systems', 'Entertainment systems', 'Smart home devices'],
    pricingDetails: {
      type: 'paid',
      price: 'Autopilot from $10,000, Full Self-Driving from $15,000',
      url: 'https://www.tesla.com/support/self-driving',
      description: 'One-time purchase for vehicle features'
    }
  },
  
  // Fleet Management
  {
    name: 'Geotab AI',
    slug: 'geotab-ai',
    tagline: 'AI-powered fleet tracking and transportation analytics platform',
    logoUrl: '/logos/geotab-ai.png',
    website: 'https://www.geotab.com/ai',
    pricing: 'freemium',
    badges: ['popular', 'enterprise'],
    category: 'Automotive & Transportation',
    categorySlug: 'automotive-transportation',
    subcategory: 'Fleet Management',
    subcategorySlug: 'fleet-management',
    description: 'Geotab AI enhances fleet management with AI-powered vehicle tracking, driver behavior analysis, maintenance optimization, and comprehensive transportation analytics for commercial fleets.',
    features: ['AI vehicle tracking', 'Driver behavior analysis', 'Maintenance optimization', 'Transportation analytics', 'Fuel management', 'Route optimization', 'Compliance reporting', 'Mobile app'],
    useCases: ['Fleet tracking', 'Driver monitoring', 'Maintenance scheduling', 'Fuel optimization', 'Route planning', 'Compliance management', 'Performance analysis', 'Cost reduction'],
    tags: ['fleet-management', 'ai-tracking', 'driver-analytics', 'maintenance-optimization', 'transportation-analytics'],
    rating: 4.6,
    reviewCount: 15000,
    alternatives: ['Samsara', 'Fleetio', 'Verizon Connect'],
    integrations: ['Vehicle telematics', 'GPS systems', 'Fuel cards', 'Maintenance systems', 'ERP platforms', 'Mobile apps', 'Cloud storage', 'Reporting tools'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free trial available, Starter from $29/device/month, Pro from $39/device/month, Enterprise pricing available',
      url: 'https://www.geotab.com/pricing',
      description: 'Tiered pricing based on device count and features'
    }
  },
  {
    name: 'Samsara AI',
    slug: 'samsara-ai',
    tagline: 'AI-enhanced fleet operations and industrial IoT platform',
    logoUrl: '/logos/samsara-ai.png',
    website: 'https://www.samsara.com/ai',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Automotive & Transportation',
    categorySlug: 'automotive-transportation',
    subcategory: 'Fleet Management',
    subcategorySlug: 'fleet-management',
    description: 'Samsara AI enhances fleet operations with AI-powered IoT sensors, real-time visibility, safety monitoring, and operational analytics for transportation and industrial fleets.',
    features: ['AI IoT sensors', 'Real-time visibility', 'Safety monitoring', 'Operational analytics', 'Vehicle diagnostics', 'Driver coaching', 'Incident detection', 'Mobile app'],
    useCases: ['Fleet visibility', 'Safety monitoring', 'Driver coaching', 'Incident detection', 'Vehicle diagnostics', 'Operational efficiency', 'Compliance management', 'Asset tracking'],
    tags: ['fleet-operations', 'ai-iot', 'safety-monitoring', 'operational-analytics', 'real-time-visibility'],
    rating: 4.7,
    reviewCount: 18000,
    alternatives: ['Geotab', 'Fleetio', 'Verizon Connect'],
    integrations: ['Vehicle sensors', 'GPS systems', 'Mobile apps', 'Cloud platforms', 'ERP systems', 'Maintenance software', 'Safety management', 'Reporting tools'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free trial available, Core from $39/device/month, Pro from $49/device/month, Enterprise pricing available',
      url: 'https://www.samsara.com/pricing',
      description: 'Tiered pricing based on device count and features'
    }
  },
  
  // Smart Mobility
  {
    name: 'Uber AI',
    slug: 'uber-ai',
    tagline: 'AI-powered ride-sharing and urban mobility platform',
    logoUrl: '/logos/uber-ai.png',
    website: 'https://www.uber.com/ai',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Automotive & Transportation',
    categorySlug: 'automotive-transportation',
    subcategory: 'Smart Mobility',
    subcategorySlug: 'smart-mobility',
    description: 'Uber AI enhances urban mobility with AI-powered demand forecasting, route optimization, dynamic pricing, and intelligent matching algorithms for ride-sharing and delivery services.',
    features: ['AI demand forecasting', 'Route optimization', 'Dynamic pricing', 'Intelligent matching', 'Safety features', 'Payment processing', 'Real-time tracking', 'Analytics dashboard'],
    useCases: ['Ride-sharing', 'Food delivery', 'Package delivery', 'Demand forecasting', 'Route optimization', 'Dynamic pricing', 'Safety monitoring', 'Urban mobility'],
    tags: ['ride-sharing', 'ai-forecasting', 'route-optimization', 'dynamic-pricing', 'urban-mobility'],
    rating: 4.5,
    reviewCount: 85000,
    alternatives: ['Lyft', 'Didi', 'Grab'],
    integrations: ['Mobile apps', 'Payment systems', 'Mapping platforms', 'Traffic data', 'Weather services', 'Social media', 'Restaurant platforms', 'E-commerce'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free for riders, Drivers earn based on rides completed',
      url: 'https://www.uber.com/sign-up',
      description: 'Commission-based model for drivers, free for riders'
    }
  },
  {
    name: 'Lyft AI',
    slug: 'lyft-ai',
    tagline: 'AI-enhanced transportation network and mobility services',
    logoUrl: '/logos/lyft-ai.png',
    website: 'https://www.lyft.com/ai',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Automotive & Transportation',
    categorySlug: 'automotive-transportation',
    subcategory: 'Smart Mobility',
    subcategorySlug: 'smart-mobility',
    description: 'Lyft AI enhances transportation networks with AI-powered dispatch algorithms, safety features, community engagement, and sustainable mobility solutions for riders and drivers.',
    features: ['AI dispatch algorithms', 'Safety features', 'Community engagement', 'Sustainable mobility', 'Real-time tracking', 'Payment processing', 'Driver incentives', 'Analytics tools'],
    useCases: ['Ride-sharing', 'Bike sharing', 'Scooter sharing', 'Safety enhancement', 'Community building', 'Sustainable transport', 'Driver support', 'Rider experience'],
    tags: ['transportation-network', 'ai-dispatch', 'safety-features', 'sustainable-mobility', 'community-engagement'],
    rating: 4.6,
    reviewCount: 35000,
    alternatives: ['Uber', 'Didi', 'Grab'],
    integrations: ['Mobile apps', 'Payment systems', 'Mapping platforms', 'Traffic data', 'Weather services', 'Social media', 'Bike sharing', 'Scooter sharing'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free for riders, Drivers earn based on rides completed',
      url: 'https://www.lyft.com/sign-up',
      description: 'Commission-based model for drivers, free for riders'
    }
  }
];