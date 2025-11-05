import { ToolEntry } from '../tools';

export const telecommunicationsIoTTools: ToolEntry[] = [
  // Network Management
  {
    name: 'Cisco DNA AI',
    slug: 'cisco-dna-ai',
    tagline: 'AI-powered network automation and intent-based networking platform',
    logoUrl: '/logos/cisco-dna-ai.png',
    website: 'https://www.cisco.com/dna-ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Telecommunications & IoT',
    categorySlug: 'telecommunications-iot',
    subcategory: 'Network Management',
    subcategorySlug: 'network-management',
    description: 'Cisco DNA AI enhances network management with AI-powered automation, predictive analytics, security assurance, and intent-based policies for enterprise networking infrastructure.',
    features: ['AI network automation', 'Predictive analytics', 'Security assurance', 'Intent-based policies', 'Network visibility', 'Performance optimization', 'Troubleshooting', 'Mobile app'],
    useCases: ['Network automation', 'Performance optimization', 'Security monitoring', 'Policy management', 'Troubleshooting', 'Capacity planning', 'Network visibility', 'Compliance management'],
    tags: ['network-automation', 'ai-analytics', 'security-assurance', 'intent-based-networking', 'enterprise-networking'],
    rating: 4.7,
    reviewCount: 15000,
    alternatives: ['Juniper Mist', 'Aruba Networks', 'Extreme Networks'],
    integrations: ['Network devices', 'Cloud platforms', 'Security tools', 'Monitoring systems', 'Mobile apps', 'API integrations', 'Analytics platforms', 'Management systems'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.cisco.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  {
    name: 'Juniper Mist AI',
    slug: 'juniper-mist-ai',
    tagline: 'AI-driven wireless networking and network operations platform',
    logoUrl: '/logos/juniper-mist-ai.png',
    website: 'https://www.juniper.net/mist-ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Telecommunications & IoT',
    categorySlug: 'telecommunications-iot',
    subcategory: 'Network Management',
    subcategorySlug: 'network-management',
    description: 'Juniper Mist AI enhances wireless networking with AI-driven operations, automated troubleshooting, user experience insights, and proactive network optimization for enterprise environments.',
    features: ['AI-driven operations', 'Automated troubleshooting', 'User experience insights', 'Proactive optimization', 'Wireless analytics', 'Security monitoring', 'Performance tracking', 'API integration'],
    useCases: ['Wireless optimization', 'User experience monitoring', 'Troubleshooting', 'Performance analysis', 'Security monitoring', 'Capacity planning', 'Network automation', 'Service assurance'],
    tags: ['wireless-networking', 'ai-operations', 'user-experience', 'automated-troubleshooting', 'network-optimization'],
    rating: 4.6,
    reviewCount: 12000,
    alternatives: ['Cisco DNA', 'Aruba Networks', 'Extreme Networks'],
    integrations: ['Wireless access points', 'Network switches', 'Security platforms', 'Cloud services', 'Mobile apps', 'Analytics tools', 'Management systems', 'API frameworks'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.juniper.net/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  
  // IoT Platforms
  {
    name: 'AWS IoT Core AI',
    slug: 'aws-iot-core-ai',
    tagline: 'AI-enhanced IoT device management and data analytics platform',
    logoUrl: '/logos/aws-iot-core-ai.png',
    website: 'https://aws.amazon.com/iot-core/ai',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Telecommunications & IoT',
    categorySlug: 'telecommunications-iot',
    subcategory: 'IoT Platforms',
    subcategorySlug: 'iot-platforms',
    description: 'AWS IoT Core AI enhances IoT deployments with AI-powered device management, real-time analytics, predictive maintenance, and secure connectivity for connected devices at scale.',
    features: ['AI device management', 'Real-time analytics', 'Predictive maintenance', 'Secure connectivity', 'Device provisioning', 'Data processing', 'Rule engine', 'Integration hub'],
    useCases: ['Device management', 'Real-time analytics', 'Predictive maintenance', 'Data processing', 'Security monitoring', 'Edge computing', 'Integration', 'Scalable deployments'],
    tags: ['iot-platform', 'ai-device-management', 'real-time-analytics', 'predictive-maintenance', 'secure-connectivity'],
    rating: 4.8,
    reviewCount: 25000,
    alternatives: ['Microsoft Azure IoT', 'Google Cloud IoT', 'IBM Watson IoT'],
    integrations: ['AWS services', 'Edge devices', 'Analytics platforms', 'Machine learning', 'Mobile apps', 'API gateways', 'Database systems', 'Security tools'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free tier available, Pay-as-you-go pricing',
      url: 'https://aws.amazon.com/iot-core/pricing',
      description: 'Free tier with pay-as-you-go pricing'
    }
  },
  {
    name: 'Microsoft Azure IoT AI',
    slug: 'microsoft-azure-iot-ai',
    tagline: 'AI-powered IoT analytics and edge computing platform',
    logoUrl: '/logos/microsoft-azure-iot-ai.png',
    website: 'https://azure.microsoft.com/iot-ai',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Telecommunications & IoT',
    categorySlug: 'telecommunications-iot',
    subcategory: 'IoT Platforms',
    subcategorySlug: 'iot-platforms',
    description: 'Microsoft Azure IoT AI enhances connected solutions with AI-powered analytics, edge intelligence, device provisioning, and comprehensive IoT security for enterprise deployments.',
    features: ['AI analytics', 'Edge intelligence', 'Device provisioning', 'IoT security', 'Data visualization', 'Machine learning', 'Integration capabilities', 'Monitoring tools'],
    useCases: ['IoT analytics', 'Edge computing', 'Device management', 'Security monitoring', 'Data visualization', 'Machine learning', 'Integration', 'Enterprise deployments'],
    tags: ['iot-analytics', 'ai-edge-intelligence', 'device-provisioning', 'iot-security', 'enterprise-iot'],
    rating: 4.7,
    reviewCount: 22000,
    alternatives: ['AWS IoT Core', 'Google Cloud IoT', 'IBM Watson IoT'],
    integrations: ['Azure services', 'Edge devices', 'Analytics platforms', 'Machine learning', 'Mobile apps', 'API gateways', 'Database systems', 'Security tools'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free tier available, Pay-as-you-go pricing',
      url: 'https://azure.microsoft.com/pricing',
      description: 'Free tier with pay-as-you-go pricing'
    }
  },
  
  // 5G & Connectivity
  {
    name: 'Ericsson AI',
    slug: 'ericsson-ai',
    tagline: 'AI-powered 5G network optimization and telecommunications platform',
    logoUrl: '/logos/ericsson-ai.png',
    website: 'https://www.ericsson.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Telecommunications & IoT',
    categorySlug: 'telecommunications-iot',
    subcategory: '5G & Connectivity',
    subcategorySlug: '5g-connectivity',
    description: 'Ericsson AI enhances telecommunications with AI-powered 5G optimization, network slicing, spectrum efficiency, and intelligent connectivity solutions for next-generation networks.',
    features: ['AI 5G optimization', 'Network slicing', 'Spectrum efficiency', 'Intelligent connectivity', 'Network automation', 'Performance monitoring', 'Service assurance', 'API integration'],
    useCases: ['5G optimization', 'Network slicing', 'Spectrum management', 'Connectivity optimization', 'Network automation', 'Performance monitoring', 'Service assurance', 'Telecom innovation'],
    tags: ['5g-optimization', 'ai-network-slicing', 'spectrum-efficiency', 'intelligent-connectivity', 'telecom-innovation'],
    rating: 4.6,
    reviewCount: 18000,
    alternatives: ['Nokia', 'Huawei', 'Samsung Networks'],
    integrations: ['Telecom infrastructure', 'Network equipment', 'Cloud platforms', 'Analytics tools', 'Mobile apps', 'API frameworks', 'Management systems', 'Security platforms'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.ericsson.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  {
    name: 'Nokia AI',
    slug: 'nokia-ai',
    tagline: 'AI-enhanced telecommunications infrastructure and 5G solutions',
    logoUrl: '/logos/nokia-ai.png',
    website: 'https://www.nokia.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Telecommunications & IoT',
    categorySlug: 'telecommunications-iot',
    subcategory: '5G & Connectivity',
    subcategorySlug: '5g-connectivity',
    description: 'Nokia AI enhances telecom infrastructure with AI-powered network performance, automated operations, edge computing capabilities, and future-ready 5G connectivity solutions.',
    features: ['AI network performance', 'Automated operations', 'Edge computing', '5G connectivity', 'Network optimization', 'Service automation', 'Performance analytics', 'Integration platform'],
    useCases: ['Network performance', 'Automated operations', 'Edge computing', '5G deployment', 'Network optimization', 'Service automation', 'Performance analytics', 'Infrastructure management'],
    tags: ['telecom-infrastructure', 'ai-performance', 'automated-operations', 'edge-computing', '5g-solutions'],
    rating: 4.5,
    reviewCount: 16000,
    alternatives: ['Ericsson', 'Huawei', 'Samsung Networks'],
    integrations: ['Telecom infrastructure', 'Network equipment', 'Cloud platforms', 'Analytics tools', 'Mobile apps', 'API frameworks', 'Management systems', 'Security platforms'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.nokia.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  }
];