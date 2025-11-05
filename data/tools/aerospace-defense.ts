import { ToolEntry } from '../tools';

export const aerospaceDefenseTools: ToolEntry[] = [
  // Mission Planning
  {
    name: 'Lockheed Martin AI',
    slug: 'lockheed-martin-ai',
    tagline: 'AI-powered aerospace mission planning and satellite operations platform',
    logoUrl: '/logos/lockheed-martin-ai.png',
    website: 'https://www.lockheedmartin.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Aerospace & Defense',
    categorySlug: 'aerospace-defense',
    subcategory: 'Mission Planning',
    subcategorySlug: 'mission-planning',
    description: 'Lockheed Martin AI enhances aerospace operations with AI-powered mission planning, satellite constellation management, orbital mechanics, and autonomous spacecraft operations for defense and commercial missions.',
    features: ['AI mission planning', 'Satellite constellation management', 'Orbital mechanics', 'Autonomous operations', 'Trajectory optimization', 'Resource allocation', 'Risk assessment', 'Real-time monitoring'],
    useCases: ['Mission planning', 'Satellite operations', 'Orbital mechanics', 'Autonomous spacecraft', 'Trajectory optimization', 'Resource management', 'Risk assessment', 'Real-time monitoring'],
    tags: ['aerospace-mission-planning', 'ai-satellite-operations', 'orbital-mechanics', 'autonomous-spacecraft', 'trajectory-optimization'],
    rating: 4.7,
    reviewCount: 8500,
    alternatives: ['Boeing AI', 'Northrop Grumman', 'Raytheon'],
    integrations: ['Satellite systems', 'Ground stations', 'Navigation systems', 'Communication networks', 'Simulation software', 'Data analytics', 'Cloud platforms', 'Mission control'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.lockheedmartin.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  {
    name: 'Boeing AI',
    slug: 'boeing-ai',
    tagline: 'AI-enhanced aircraft design and aerospace engineering platform',
    logoUrl: '/logos/boeing-ai.png',
    website: 'https://www.boeing.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Aerospace & Defense',
    categorySlug: 'aerospace-defense',
    subcategory: 'Mission Planning',
    subcategorySlug: 'mission-planning',
    description: 'Boeing AI enhances aerospace engineering with AI-powered aircraft design optimization, flight path planning, aerodynamic analysis, and intelligent manufacturing for commercial and military aviation.',
    features: ['AI aircraft design', 'Flight path planning', 'Aerodynamic analysis', 'Intelligent manufacturing', 'Performance optimization', 'Safety assessment', 'Maintenance planning', 'Simulation tools'],
    useCases: ['Aircraft design', 'Flight planning', 'Aerodynamic analysis', 'Manufacturing optimization', 'Performance tuning', 'Safety assessment', 'Maintenance planning', 'Flight simulation'],
    tags: ['aircraft-design', 'ai-flight-planning', 'aerodynamic-analysis', 'intelligent-manufacturing', 'performance-optimization'],
    rating: 4.8,
    reviewCount: 12000,
    alternatives: ['Lockheed Martin AI', 'Northrop Grumman', 'Airbus'],
    integrations: ['CAD software', 'Simulation tools', 'Manufacturing systems', 'Flight systems', 'Navigation equipment', 'Data analytics', 'Cloud platforms', 'Engineering tools'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.boeing.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  
  // Surveillance & Reconnaissance
  {
    name: 'Raytheon AI',
    slug: 'raytheon-ai',
    tagline: 'AI-powered defense surveillance and reconnaissance systems',
    logoUrl: '/logos/raytheon-ai.png',
    website: 'https://www.raytheon.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Aerospace & Defense',
    categorySlug: 'aerospace-defense',
    subcategory: 'Surveillance & Reconnaissance',
    subcategorySlug: 'surveillance-reconnaissance',
    description: 'Raytheon AI enhances defense capabilities with AI-powered radar systems, signal intelligence, threat detection, and autonomous surveillance platforms for military and homeland security applications.',
    features: ['AI radar systems', 'Signal intelligence', 'Threat detection', 'Autonomous surveillance', 'Image recognition', 'Data fusion', 'Real-time analytics', 'Command & control'],
    useCases: ['Radar operations', 'Signal intelligence', 'Threat detection', 'Surveillance operations', 'Image recognition', 'Data fusion', 'Real-time analytics', 'Command & control'],
    tags: ['defense-surveillance', 'ai-radar-systems', 'signal-intelligence', 'threat-detection', 'autonomous-surveillance'],
    rating: 4.6,
    reviewCount: 9500,
    alternatives: ['Lockheed Martin', 'Northrop Grumman', 'BAE Systems'],
    integrations: ['Radar systems', 'Sensor networks', 'Communication systems', 'Data processing', 'Command centers', 'Satellite systems', 'Cloud platforms', 'Analytics tools'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.raytheon.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  {
    name: 'Northrop Grumman AI',
    slug: 'northrop-grumman-ai',
    tagline: 'AI-enhanced intelligence gathering and reconnaissance platforms',
    logoUrl: '/logos/northrop-grumman-ai.png',
    website: 'https://www.northropgrumman.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Aerospace & Defense',
    categorySlug: 'aerospace-defense',
    subcategory: 'Surveillance & Reconnaissance',
    subcategorySlug: 'surveillance-reconnaissance',
    description: 'Northrop Grumman AI enhances intelligence operations with AI-powered sensor fusion, pattern recognition, automated target identification, and cyber-secure reconnaissance for defense applications.',
    features: ['AI sensor fusion', 'Pattern recognition', 'Target identification', 'Cyber-secure reconnaissance', 'Data analytics', 'Image processing', 'Signal analysis', 'Integration platform'],
    useCases: ['Sensor fusion', 'Pattern recognition', 'Target identification', 'Reconnaissance operations', 'Data analytics', 'Image processing', 'Signal analysis', 'Intelligence gathering'],
    tags: ['intelligence-gathering', 'ai-sensor-fusion', 'pattern-recognition', 'target-identification', 'cyber-secure-reconnaissance'],
    rating: 4.7,
    reviewCount: 11000,
    alternatives: ['Raytheon', 'Lockheed Martin', 'BAE Systems'],
    integrations: ['Sensor systems', 'Reconnaissance platforms', 'Data processing', 'Communication networks', 'Cybersecurity tools', 'Cloud platforms', 'Analytics tools', 'Command systems'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.northropgrumman.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  
  // Cybersecurity
  {
    name: 'BAE Systems AI',
    slug: 'bae-systems-ai',
    tagline: 'AI-powered aerospace cybersecurity and electronic warfare platform',
    logoUrl: '/logos/bae-systems-ai.png',
    website: 'https://www.baesystems.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Aerospace & Defense',
    categorySlug: 'aerospace-defense',
    subcategory: 'Cybersecurity',
    subcategorySlug: 'cybersecurity',
    description: 'BAE Systems AI enhances aerospace security with AI-powered cyber threat detection, electronic warfare systems, secure communications, and autonomous defense mechanisms for military platforms.',
    features: ['AI cyber threat detection', 'Electronic warfare', 'Secure communications', 'Autonomous defense', 'Network security', 'Encryption', 'Intrusion detection', 'Response automation'],
    useCases: ['Cyber threat detection', 'Electronic warfare', 'Secure communications', 'Autonomous defense', 'Network security', 'Encryption', 'Intrusion detection', 'Automated response'],
    tags: ['aerospace-cybersecurity', 'ai-threat-detection', 'electronic-warfare', 'secure-communications', 'autonomous-defense'],
    rating: 4.5,
    reviewCount: 7500,
    alternatives: ['Raytheon', 'Lockheed Martin', 'Northrop Grumman'],
    integrations: ['Network systems', 'Communication equipment', 'Electronic warfare systems', 'Security tools', 'Command centers', 'Cloud platforms', 'Analytics tools', 'Defense systems'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.baesystems.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  {
    name: 'General Dynamics AI',
    slug: 'general-dynamics-ai',
    tagline: 'AI-enhanced defense systems and secure communications platform',
    logoUrl: '/logos/general-dynamics-ai.png',
    website: 'https://www.generaldynamics.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Aerospace & Defense',
    categorySlug: 'aerospace-defense',
    subcategory: 'Cybersecurity',
    subcategorySlug: 'cybersecurity',
    description: 'General Dynamics AI enhances defense communications with AI-powered secure networking, encryption technologies, threat intelligence, and integrated cybersecurity solutions for military operations.',
    features: ['AI secure networking', 'Encryption technologies', 'Threat intelligence', 'Integrated cybersecurity', 'Network monitoring', 'Vulnerability assessment', 'Incident response', 'Compliance management'],
    useCases: ['Secure networking', 'Encryption', 'Threat intelligence', 'Cybersecurity operations', 'Network monitoring', 'Vulnerability assessment', 'Incident response', 'Compliance management'],
    tags: ['defense-cybersecurity', 'ai-secure-networking', 'encryption-technologies', 'threat-intelligence', 'integrated-cybersecurity'],
    rating: 4.6,
    reviewCount: 8500,
    alternatives: ['BAE Systems', 'Raytheon', 'Lockheed Martin'],
    integrations: ['Network infrastructure', 'Communication systems', 'Security tools', 'Data processing', 'Command centers', 'Cloud platforms', 'Analytics tools', 'Military systems'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.generaldynamics.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  }
];