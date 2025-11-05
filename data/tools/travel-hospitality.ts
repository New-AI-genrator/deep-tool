import { ToolEntry } from '../tools';

export const travelHospitalityTools: ToolEntry[] = [
  // Travel Booking
  {
    name: 'Booking.com AI',
    slug: 'booking-com-ai',
    tagline: 'AI-powered travel booking platform with smart recommendations',
    logoUrl: '/logos/booking-com-ai.png',
    website: 'https://www.booking.com/ai',
    pricing: 'free',
    badges: ['popular', 'trending'],
    category: 'Travel & Hospitality',
    categorySlug: 'travel-hospitality',
    subcategory: 'Travel Booking',
    subcategorySlug: 'travel-booking',
    description: 'Booking.com AI enhances the travel booking platform with AI-powered accommodation recommendations, dynamic pricing, intelligent search filters, and personalized travel planning.',
    features: ['AI recommendations', 'Dynamic pricing', 'Smart search filters', 'Personalized planning', 'Real-time availability', 'Price comparison', 'Customer reviews', 'Mobile optimization'],
    useCases: ['Hotel booking', 'Vacation planning', 'Business travel', 'Group reservations', 'Last-minute bookings', 'Price optimization', 'Customer reviews', 'Travel management'],
    tags: ['travel-booking', 'ai-recommendations', 'hotel-reservations', 'vacation-planning', 'booking-com'],
    rating: 4.6,
    reviewCount: 75000,
    alternatives: ['Expedia', 'Agoda', 'Priceline'],
    integrations: ['Google Maps', 'Apple Maps', 'TripAdvisor', 'Airbnb', 'Skyscanner', 'Kayak', 'Hopper', 'Mobile apps'],
    pricingDetails: {
      type: 'free',
      price: 'Free for travelers, commission-based for partners',
      url: 'https://www.booking.com/index.html',
      description: 'Free for travelers, commission for accommodation partners'
    }
  },
  {
    name: 'Expedia AI',
    slug: 'expedia-ai',
    tagline: 'AI-enhanced travel booking and planning platform',
    logoUrl: '/logos/expedia-ai.png',
    website: 'https://www.expedia.com/ai',
    pricing: 'free',
    badges: ['popular', 'trending'],
    category: 'Travel & Hospitality',
    categorySlug: 'travel-hospitality',
    subcategory: 'Travel Booking',
    subcategorySlug: 'travel-booking',
    description: 'Expedia AI enhances the travel booking platform with AI-powered package deals, intelligent price predictions, personalized travel suggestions, and smart itinerary planning.',
    features: ['AI package deals', 'Price predictions', 'Personalized suggestions', 'Smart itinerary', 'Bundle discounts', 'Real-time updates', 'Customer support', 'Loyalty program'],
    useCases: ['Flight booking', 'Hotel reservations', 'Car rentals', 'Package deals', 'Travel planning', 'Price tracking', 'Itinerary management', 'Loyalty rewards'],
    tags: ['travel-booking', 'ai-planning', 'flight-reservations', 'package-deals', 'expedia'],
    rating: 4.5,
    reviewCount: 68000,
    alternatives: ['Booking.com', 'Priceline', 'Kayak'],
    integrations: ['Google Maps', 'Apple Maps', 'TripAdvisor', 'Hertz', 'Avis', 'Enterprise', 'Mobile apps', 'Social media'],
    pricingDetails: {
      type: 'free',
      price: 'Free for travelers, commission-based for partners',
      url: 'https://www.expedia.com/',
      description: 'Free for travelers, commission for travel partners'
    }
  },
  
  // Hospitality Management
  {
    name: 'Cloudbeds AI',
    slug: 'cloudbeds-ai',
    tagline: 'AI-powered hospitality management platform',
    logoUrl: '/logos/cloudbeds-ai.png',
    website: 'https://www.cloudbeds.com/ai',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Travel & Hospitality',
    categorySlug: 'travel-hospitality',
    subcategory: 'Hospitality Management',
    subcategorySlug: 'hospitality-management',
    description: 'Cloudbeds AI enhances the hospitality management platform with AI-powered revenue optimization, intelligent guest profiling, automated operations, and predictive analytics.',
    features: ['AI revenue optimization', 'Guest profiling', 'Automated operations', 'Predictive analytics', 'Channel management', 'Booking engine', 'Property management', 'Reporting dashboard'],
    useCases: ['Property management', 'Revenue optimization', 'Guest profiling', 'Channel management', 'Booking automation', 'Performance reporting', 'Team collaboration', 'Inventory control'],
    tags: ['hospitality-management', 'ai-optimization', 'property-management', 'revenue-optimization', 'cloudbeds'],
    rating: 4.7,
    reviewCount: 12000,
    alternatives: ['RoomRaccoon', 'Hotelogix', 'Roomsy'],
    integrations: ['Booking.com', 'Expedia', 'Airbnb', 'Google Hotels', 'TripAdvisor', 'OTA platforms', 'Accounting software', 'CRM systems'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free trial, Essentials from $39/month, Professional from $99/month, Enterprise from $199/month',
      url: 'https://www.cloudbeds.com/pricing',
      description: 'Different tiers based on property size and features'
    }
  },
  {
    name: 'RoomRaccoon AI',
    slug: 'roomraccoon-ai',
    tagline: 'AI-enhanced hotel operations and guest experience platform',
    logoUrl: '/logos/roomraccoon-ai.png',
    website: 'https://www.roomraccoon.com/ai',
    pricing: 'freemium',
    badges: ['community-favorite', 'trending'],
    category: 'Travel & Hospitality',
    categorySlug: 'travel-hospitality',
    subcategory: 'Hospitality Management',
    subcategorySlug: 'hospitality-management',
    description: 'RoomRaccoon AI enhances the hotel operations platform with AI-powered guest communication, intelligent task management, predictive maintenance, and personalized guest experiences.',
    features: ['AI guest communication', 'Task management', 'Predictive maintenance', 'Personalized experiences', 'Mobile check-in', 'Housekeeping management', 'Revenue tracking', 'Analytics dashboard'],
    useCases: ['Guest communication', 'Task automation', 'Housekeeping management', 'Maintenance scheduling', 'Revenue tracking', 'Guest satisfaction', 'Team coordination', 'Performance analytics'],
    tags: ['hotel-operations', 'ai-communication', 'guest-experience', 'task-management', 'roomraccoon'],
    rating: 4.6,
    reviewCount: 8500,
    alternatives: ['Cloudbeds', 'Hotelogix', 'Roomsy'],
    integrations: ['Booking.com', 'Expedia', 'Airbnb', 'Google Hotels', 'TripAdvisor', 'POS systems', 'Accounting software', 'CRM systems'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free trial, Starter from $29/month, Business from $79/month, Enterprise from $149/month',
      url: 'https://www.roomraccoon.com/pricing',
      description: 'Different tiers based on property size and features'
    }
  },
  
  // Travel Planning
  {
    name: 'Google Travel AI',
    slug: 'google-travel-ai',
    tagline: 'AI-powered travel planning and itinerary management',
    logoUrl: '/logos/google-travel-ai.png',
    website: 'https://travel.google.com/ai',
    pricing: 'free',
    badges: ['popular', 'trending'],
    category: 'Travel & Hospitality',
    categorySlug: 'travel-hospitality',
    subcategory: 'Travel Planning',
    subcategorySlug: 'travel-planning',
    description: 'Google Travel AI enhances the travel planning service with AI-powered itinerary creation, intelligent destination recommendations, real-time travel updates, and personalized travel insights.',
    features: ['AI itinerary creation', 'Destination recommendations', 'Real-time updates', 'Personalized insights', 'Map integration', 'Travel reminders', 'Expense tracking', 'Offline access'],
    useCases: ['Trip planning', 'Itinerary creation', 'Destination research', 'Travel updates', 'Expense tracking', 'Reservation management', 'Local recommendations', 'Offline access'],
    tags: ['travel-planning', 'ai-itinerary', 'destination-recommendations', 'trip-planning', 'google-travel'],
    rating: 4.8,
    reviewCount: 95000,
    alternatives: ['TripIt', 'Roadtrippers', 'Sygic Travel'],
    integrations: ['Google Maps', 'Gmail', 'Google Flights', 'Google Hotels', 'YouTube', 'Photos', 'Calendar', 'Mobile apps'],
    pricingDetails: {
      type: 'free',
      price: 'Completely free for all users',
      url: 'https://travel.google.com/',
      description: 'Free travel planning service'
    }
  },
  {
    name: 'TripIt AI',
    slug: 'tripit-ai',
    tagline: 'AI-enhanced travel organization and planning platform',
    logoUrl: '/logos/tripit-ai.png',
    website: 'https://www.tripit.com/ai',
    pricing: 'freemium',
    badges: ['popular', 'community-favorite'],
    category: 'Travel & Hospitality',
    categorySlug: 'travel-hospitality',
    subcategory: 'Travel Planning',
    subcategorySlug: 'travel-planning',
    description: 'TripIt AI enhances the travel organization platform with AI-powered itinerary consolidation, intelligent travel alerts, smart packing suggestions, and personalized travel recommendations.',
    features: ['AI itinerary consolidation', 'Travel alerts', 'Packing suggestions', 'Personalized recommendations', 'Calendar integration', 'Expense tracking', 'Travel sharing', 'Mobile notifications'],
    useCases: ['Itinerary organization', 'Travel alerts', 'Packing planning', 'Expense tracking', 'Calendar management', 'Travel sharing', 'Flight monitoring', 'Hotel confirmations'],
    tags: ['travel-organization', 'ai-consolidation', 'itinerary-management', 'trip-planning', 'tripit'],
    rating: 4.5,
    reviewCount: 25000,
    alternatives: ['Google Travel', 'Roadtrippers', 'Sygic Travel'],
    integrations: ['Gmail', 'Outlook', 'Google Calendar', 'Apple Calendar', 'Airline apps', 'Hotel apps', 'Car rental apps', 'Mobile apps'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free basic, Pro from $49/year',
      url: 'https://www.tripit.com/pro',
      description: 'Free basic version with premium Pro subscription'
    }
  }
];