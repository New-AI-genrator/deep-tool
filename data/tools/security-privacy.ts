import { ToolEntry } from '../tools';

export const securityPrivacyTools: ToolEntry[] = [
  // VPN Services
  {
    name: 'NordVPN AI',
    slug: 'nordvpn-ai',
    tagline: 'AI-powered VPN service with advanced security features',
    logoUrl: '/logos/nordvpn-ai.png',
    website: 'https://nordvpn.com/ai/',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Security & Privacy',
    categorySlug: 'security-privacy',
    subcategory: 'VPN Services',
    subcategorySlug: 'vpn-services',
    description: 'NordVPN AI enhances the VPN service with AI-powered threat detection, automatic connection optimization, smart server selection, and advanced privacy protection features.',
    features: ['AI threat detection', 'Automatic optimization', 'Smart server selection', 'Military-grade encryption', 'No-logs policy', 'Kill switch', 'Double VPN', 'CyberSec protection'],
    useCases: ['Online privacy', 'Secure browsing', 'Geo-restriction bypass', 'Public Wi-Fi protection', 'Streaming access', 'Torrenting security', 'Business security', 'Travel protection'],
    tags: ['vpn', 'online-privacy', 'cybersecurity', 'ai-security', 'network-protection'],
    rating: 4.7,
    reviewCount: 35000,
    alternatives: ['ExpressVPN', 'Surfshark', 'CyberGhost'],
    integrations: ['Windows', 'Mac', 'iOS', 'Android', 'Linux', 'Router', 'Browser extensions', 'Smart TVs'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free trial, Standard from $11.99/month, Plus from $9.99/month, Complete from $8.99/month',
      url: 'https://nordvpn.com/pricing/',
      description: 'Different tiers based on subscription length'
    }
  },
  {
    name: 'ExpressVPN AI',
    slug: 'expressvpn-ai',
    tagline: 'AI-enhanced premium VPN with global server network',
    logoUrl: '/logos/expressvpn-ai.png',
    website: 'https://www.expressvpn.com/ai',
    pricing: 'paid',
    badges: ['popular', 'enterprise'],
    category: 'Security & Privacy',
    categorySlug: 'security-privacy',
    subcategory: 'VPN Services',
    subcategorySlug: 'vpn-services',
    description: 'ExpressVPN AI enhances the premium VPN service with AI-powered connection optimization, threat intelligence, network performance monitoring, and advanced security protocols.',
    features: ['AI optimization', 'Threat intelligence', 'Performance monitoring', 'Military-grade encryption', 'No-logs policy', 'Network lock', 'Split tunneling', 'Private DNS'],
    useCases: ['Online privacy', 'Secure browsing', 'Streaming access', 'Business travel', 'Censorship circumvention', 'Torrenting security', 'Public Wi-Fi protection', 'Remote work'],
    tags: ['vpn', 'premium-vpn', 'ai-security', 'network-protection', 'streaming-vpn'],
    rating: 4.8,
    reviewCount: 28000,
    alternatives: ['NordVPN', 'Surfshark', 'CyberGhost'],
    integrations: ['Windows', 'Mac', 'iOS', 'Android', 'Linux', 'Router', 'Browser extensions', 'Gaming consoles'],
    pricingDetails: {
      type: 'paid',
      price: '1 month from $12.95/month, 6 months from $9.99/month, 12 months from $8.32/month',
      url: 'https://www.expressvpn.com/pricing',
      description: 'Subscription-based with longer plans offering discounts'
    }
  },
  
  // Password Managers
  {
    name: '1Password AI',
    slug: '1password-ai',
    tagline: 'AI-powered password manager with smart security features',
    logoUrl: '/logos/1password-ai.png',
    website: 'https://1password.com/ai/',
    pricing: 'freemium',
    badges: ['popular', 'enterprise'],
    category: 'Security & Privacy',
    categorySlug: 'security-privacy',
    subcategory: 'Password Managers',
    subcategorySlug: 'password-managers',
    description: '1Password AI enhances the password manager with AI-powered security alerts, smart password generation, breach monitoring, and automated security workflows.',
    features: ['AI security alerts', 'Smart password generation', 'Breach monitoring', 'Travel mode', 'Watchtower', 'Document storage', 'Secure sharing', 'Biometric login'],
    useCases: ['Password management', 'Security monitoring', 'Team collaboration', 'Document storage', 'Secure sharing', 'Breach protection', 'Travel security', 'Business security'],
    tags: ['password-manager', 'ai-security', 'credential-storage', 'security-monitoring', 'team-collaboration'],
    rating: 4.8,
    reviewCount: 22000,
    alternatives: ['Bitwarden', 'LastPass', 'Dashlane'],
    integrations: ['Browser extensions', 'Mobile apps', 'Desktop apps', 'Slack', 'Azure AD', 'Google Workspace', 'Okta', 'SCIM'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free for individuals, Personal from $2.99/month, Family from $4.99/month, Team from $7.99/month, Business from $19.95/month',
      url: 'https://1password.com/pricing/',
      description: 'Different tiers based on features and user count'
    }
  },
  {
    name: 'Bitwarden AI',
    slug: 'bitwarden-ai',
    tagline: 'AI-enhanced open-source password management solution',
    logoUrl: '/logos/bitwarden-ai.png',
    website: 'https://bitwarden.com/ai/',
    pricing: 'freemium',
    badges: ['community-favorite', 'popular'],
    category: 'Security & Privacy',
    categorySlug: 'security-privacy',
    subcategory: 'Password Managers',
    subcategorySlug: 'password-managers',
    description: 'Bitwarden AI enhances the open-source password manager with AI-powered security insights, password health monitoring, breach alerts, and smart autofill capabilities.',
    features: ['AI security insights', 'Password health monitoring', 'Breach alerts', 'Secure autofill', 'Document storage', 'Secure sharing', 'Two-factor authentication', 'Encryption'],
    useCases: ['Password management', 'Security monitoring', 'Team collaboration', 'Document storage', 'Secure sharing', 'Breach alerts', 'Password auditing', 'Open source security'],
    tags: ['password-manager', 'open-source', 'ai-security', 'credential-storage', 'security-monitoring'],
    rating: 4.7,
    reviewCount: 18000,
    alternatives: ['1Password', 'LastPass', 'Dashlane'],
    integrations: ['Browser extensions', 'Mobile apps', 'Desktop apps', 'CLI', 'API', 'Azure AD', 'Google Workspace', 'Okta'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free for individuals, Premium from $10/year, Families from $40/year, Teams from $36/year, Enterprise from $60/year',
      url: 'https://bitwarden.com/pricing/business/',
      description: 'Different tiers based on features and user count'
    }
  },
  
  // Antivirus
  {
    name: 'Bitdefender AI',
    slug: 'bitdefender-ai',
    tagline: 'AI-powered antivirus with advanced threat detection',
    logoUrl: '/logos/bitdefender-ai.png',
    website: 'https://www.bitdefender.com/ai/',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Security & Privacy',
    categorySlug: 'security-privacy',
    subcategory: 'Antivirus',
    subcategorySlug: 'antivirus',
    description: 'Bitdefender AI enhances the antivirus software with AI-powered threat detection, behavioral analysis, real-time protection, and advanced malware removal capabilities.',
    features: ['AI threat detection', 'Behavioral analysis', 'Real-time protection', 'Malware removal', 'Web protection', 'Vulnerability scanning', 'Performance optimization', 'Parental controls'],
    useCases: ['Malware protection', 'Real-time security', 'Web browsing safety', 'System optimization', 'Parental controls', 'Privacy protection', 'Identity theft prevention', 'Performance monitoring'],
    tags: ['antivirus', 'ai-security', 'malware-protection', 'real-time-security', 'threat-detection'],
    rating: 4.9,
    reviewCount: 42000,
    alternatives: ['Kaspersky', 'Norton', 'McAfee'],
    integrations: ['Windows', 'Mac', 'Android', 'iOS', 'Browser extensions', 'Email clients', 'Cloud services', 'Network devices'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free version available, Antivirus from $29.99/year, Internet Security from $39.99/year, Total Security from $49.99/year',
      url: 'https://www.bitdefender.com/solutions/',
      description: 'Different tiers based on features and device count'
    }
  },
  {
    name: 'Kaspersky AI',
    slug: 'kaspersky-ai',
    tagline: 'AI-enhanced cybersecurity suite with global threat intelligence',
    logoUrl: '/logos/kaspersky-ai.png',
    website: 'https://www.kaspersky.com/ai',
    pricing: 'paid',
    badges: ['popular', 'enterprise'],
    category: 'Security & Privacy',
    categorySlug: 'security-privacy',
    subcategory: 'Antivirus',
    subcategorySlug: 'antivirus',
    description: 'Kaspersky AI enhances the cybersecurity suite with AI-powered threat detection, global threat intelligence, behavioral analysis, and advanced endpoint protection.',
    features: ['AI threat detection', 'Global threat intelligence', 'Behavioral analysis', 'Endpoint protection', 'Web security', 'Email protection', 'Privacy protection', 'Password manager'],
    useCases: ['Malware protection', 'Endpoint security', 'Web browsing safety', 'Email security', 'Privacy protection', 'Identity theft prevention', 'Parental controls', 'Business security'],
    tags: ['antivirus', 'ai-security', 'threat-intelligence', 'endpoint-protection', 'cybersecurity'],
    rating: 4.8,
    reviewCount: 35000,
    alternatives: ['Bitdefender', 'Norton', 'McAfee'],
    integrations: ['Windows', 'Mac', 'Android', 'iOS', 'Browser extensions', 'Email clients', 'Cloud services', 'Network devices'],
    pricingDetails: {
      type: 'paid',
      price: 'Security Cloud from $24.99/year, Security Cloud Plus from $34.99/year, Security Cloud Premium from $49.99/year',
      url: 'https://www.kaspersky.com/pricing',
      description: 'Different tiers based on features and device count'
    }
  }
];