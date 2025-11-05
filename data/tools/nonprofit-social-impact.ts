import { ToolEntry } from '../tools';

export const nonprofitSocialImpactTools: ToolEntry[] = [
  // Fundraising
  {
    name: 'Classy AI',
    slug: 'classy-ai',
    tagline: 'AI-powered fundraising and donor engagement platform',
    logoUrl: '/logos/classy-ai.png',
    website: 'https://www.classy.org/ai',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Nonprofit & Social Impact',
    categorySlug: 'nonprofit-social-impact',
    subcategory: 'Fundraising',
    subcategorySlug: 'fundraising',
    description: 'Classy AI enhances nonprofit fundraising with AI-powered donor insights, personalized giving experiences, campaign optimization, and predictive donor engagement strategies.',
    features: ['AI donor insights', 'Personalized giving', 'Campaign optimization', 'Predictive engagement', 'Peer-to-peer fundraising', 'Event management', 'Donor management', 'Analytics dashboard'],
    useCases: ['Online fundraising', 'Donor retention', 'Campaign management', 'Peer-to-peer fundraising', 'Event fundraising', 'Major gift solicitation', 'Monthly giving programs', 'Donor stewardship'],
    tags: ['fundraising-platform', 'ai-donor-insights', 'campaign-optimization', 'donor-engagement', 'nonprofit-fundraising'],
    rating: 4.7,
    reviewCount: 12000,
    alternatives: ['Donorbox', 'GiveLively', 'Qgiv'],
    integrations: ['Salesforce', 'Mailchimp', 'Constant Contact', 'Google Analytics', 'Facebook Fundraisers', 'Instagram', 'Twitter', 'YouTube'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free tier available, Essential from $99/month, Premier from $299/month, Enterprise from $599/month',
      url: 'https://www.classy.org/pricing',
      description: 'Different tiers based on features and transaction volume'
    }
  },
  {
    name: 'Donorbox AI',
    slug: 'donorbox-ai',
    tagline: 'AI-enhanced donation processing and donor management platform',
    logoUrl: '/logos/donorbox-ai.png',
    website: 'https://donorbox.org/ai',
    pricing: 'freemium',
    badges: ['community-favorite', 'trending'],
    category: 'Nonprofit & Social Impact',
    categorySlug: 'nonprofit-social-impact',
    subcategory: 'Fundraising',
    subcategorySlug: 'fundraising',
    description: 'Donorbox AI enhances donation processing with AI-powered donor segmentation, recurring giving optimization, fraud detection, and automated donor communication workflows.',
    features: ['AI donor segmentation', 'Recurring giving optimization', 'Fraud detection', 'Automated communication', 'Multi-currency support', 'Mobile optimization', 'Embeddable forms', 'Analytics reporting'],
    useCases: ['Online donations', 'Recurring giving', 'Peer-to-peer fundraising', 'Event fundraising', 'Tribute fundraising', 'Corporate matching', 'Grant management', 'Donor retention'],
    tags: ['donation-processing', 'ai-segmentation', 'recurring-giving', 'fraud-detection', 'donor-management'],
    rating: 4.8,
    reviewCount: 15000,
    alternatives: ['Classy', 'GiveLively', 'Qgiv'],
    integrations: ['Mailchimp', 'Constant Contact', 'Salesforce', 'Google Analytics', 'Facebook', 'QuickBooks', 'Xero', 'Zapier'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free tier available, Basic from $29/month, Pro from $79/month, Premium from $149/month',
      url: 'https://donorbox.org/pricing',
      description: 'Different tiers based on features and transaction volume'
    }
  },
  
  // Volunteer Management
  {
    name: 'VolunteerHub AI',
    slug: 'volunteerhub-ai',
    tagline: 'AI-powered volunteer coordination and community engagement platform',
    logoUrl: '/logos/volunteerhub-ai.png',
    website: 'https://www.volunteerhub.com/ai',
    pricing: 'freemium',
    badges: ['community-favorite', 'trending'],
    category: 'Nonprofit & Social Impact',
    categorySlug: 'nonprofit-social-impact',
    subcategory: 'Volunteer Management',
    subcategorySlug: 'volunteer-management',
    description: 'VolunteerHub AI enhances volunteer management with AI-powered matching algorithms, skill-based placement, automated scheduling, and impact measurement tools.',
    features: ['AI matching algorithms', 'Skill-based placement', 'Automated scheduling', 'Impact measurement', 'Communication tools', 'Mobile app', 'Reporting dashboard', 'Integration hub'],
    useCases: ['Volunteer recruitment', 'Skill matching', 'Event coordination', 'Community engagement', 'Volunteer retention', 'Impact tracking', 'Team management', 'Communication automation'],
    tags: ['volunteer-management', 'ai-matching', 'skill-placement', 'automated-scheduling', 'community-engagement'],
    rating: 4.6,
    reviewCount: 8500,
    alternatives: ['SignUpGenius', 'Better Impact', 'VolunteerLocal'],
    integrations: ['Salesforce', 'Mailchimp', 'Google Workspace', 'Microsoft 365', 'Facebook', 'Twitter', 'LinkedIn', 'Eventbrite'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free tier available, Starter from $49/month, Growth from $99/month, Enterprise from $199/month',
      url: 'https://www.volunteerhub.com/pricing',
      description: 'Different tiers based on organization size and features'
    }
  },
  {
    name: 'Better Impact AI',
    slug: 'better-impact-ai',
    tagline: 'AI-enhanced volunteer management and community engagement system',
    logoUrl: '/logos/better-impact-ai.png',
    website: 'https://www.betterimpact.com/ai',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Nonprofit & Social Impact',
    categorySlug: 'nonprofit-social-impact',
    subcategory: 'Volunteer Management',
    subcategorySlug: 'volunteer-management',
    description: 'Better Impact AI enhances community engagement with AI-powered volunteer matching, opportunity recommendations, communication automation, and outcome tracking for social impact organizations.',
    features: ['AI volunteer matching', 'Opportunity recommendations', 'Communication automation', 'Outcome tracking', 'Mobile app', 'Custom forms', 'Reporting tools', 'Integration capabilities'],
    useCases: ['Volunteer coordination', 'Community programs', 'Event management', 'Skills-based volunteering', 'Group volunteering', 'Corporate volunteering', 'Youth engagement', 'Senior programs'],
    tags: ['community-engagement', 'ai-matching', 'volunteer-coordination', 'opportunity-recommendations', 'outcome-tracking'],
    rating: 4.5,
    reviewCount: 7500,
    alternatives: ['VolunteerHub', 'SignUpGenius', 'VolunteerLocal'],
    integrations: ['Salesforce', 'Mailchimp', 'Constant Contact', 'Google Workspace', 'Microsoft 365', 'Facebook', 'Eventbrite', 'Zoom'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free tier available, Essential from $39/month, Professional from $79/month, Enterprise from $149/month',
      url: 'https://www.betterimpact.com/pricing',
      description: 'Different tiers based on organization size and features'
    }
  },
  
  // Impact Measurement
  {
    name: 'LogicStream AI',
    slug: 'logicstream-ai',
    tagline: 'AI-powered social impact measurement and outcomes tracking',
    logoUrl: '/logos/logicstream-ai.png',
    website: 'https://www.logicstream.com/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Nonprofit & Social Impact',
    categorySlug: 'nonprofit-social-impact',
    subcategory: 'Impact Measurement',
    subcategorySlug: 'impact-measurement',
    description: 'LogicStream AI enhances social impact measurement with AI-powered data analysis, outcome prediction, beneficiary tracking, and comprehensive reporting for grant-funded programs.',
    features: ['AI data analysis', 'Outcome prediction', 'Beneficiary tracking', 'Comprehensive reporting', 'Grant management', 'Logic model builder', 'Dashboard analytics', 'Mobile data collection'],
    useCases: ['Program evaluation', 'Grant reporting', 'Impact assessment', 'Beneficiary tracking', 'Outcome measurement', 'Data visualization', 'Stakeholder reporting', 'Performance monitoring'],
    tags: ['impact-measurement', 'ai-analytics', 'outcome-tracking', 'beneficiary-management', 'grant-reporting'],
    rating: 4.6,
    reviewCount: 6500,
    alternatives: ['Socialsuite', 'Sopact', 'Evaluated Labs'],
    integrations: ['Salesforce', 'Google Sheets', 'Excel', 'Tableau', 'Power BI', 'Survey tools', 'Mobile data collection', 'GIS mapping'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.logicstream.com/contact',
      description: 'Enterprise solution with custom pricing'
    }
  },
  {
    name: 'Socialsuite AI',
    slug: 'socialsuite-ai',
    tagline: 'AI-enhanced social impact analytics and reporting platform',
    logoUrl: '/logos/socialsuite-ai.png',
    website: 'https://socialsuite.com/ai',
    pricing: 'freemium',
    badges: ['community-favorite', 'trending'],
    category: 'Nonprofit & Social Impact',
    categorySlug: 'nonprofit-social-impact',
    subcategory: 'Impact Measurement',
    subcategorySlug: 'impact-measurement',
    description: 'Socialsuite AI enhances nonprofit reporting with AI-powered impact analytics, story collection, beneficiary feedback, and automated report generation for stakeholders and funders.',
    features: ['AI impact analytics', 'Story collection', 'Beneficiary feedback', 'Automated reporting', 'Survey tools', 'Data visualization', 'Dashboard reporting', 'Export capabilities'],
    useCases: ['Impact reporting', 'Storytelling', 'Beneficiary engagement', 'Funder communication', 'Annual reporting', 'Grant applications', 'Performance tracking', 'Stakeholder updates'],
    tags: ['social-impact', 'ai-analytics', 'story-collection', 'beneficiary-feedback', 'automated-reporting'],
    rating: 4.7,
    reviewCount: 9500,
    alternatives: ['LogicStream', 'Sopact', 'Evaluated Labs'],
    integrations: ['Salesforce', 'Mailchimp', 'Google Workspace', 'Microsoft 365', 'SurveyMonkey', 'Typeform', 'Social media', 'Website CMS'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free tier available, Starter from $59/month, Growth from $119/month, Enterprise from $249/month',
      url: 'https://socialsuite.com/pricing',
      description: 'Different tiers based on features and organization size'
    }
  }
];