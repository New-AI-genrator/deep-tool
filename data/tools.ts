// Types
export type ToolPricing = 'free' | 'freemium' | 'paid' | 'enterprise' | 'open-source';
export type ToolBadge = 'nexus-verified' | 'trending' | 'enterprise' | 'new' | 'popular' | 'featured' | 'community-favorite';

export interface ToolEntry {
  name: string;
  slug: string;
  tagline: string;
  logoUrl: string;
  website: string;
  pricing: ToolPricing;
  badges?: ToolBadge[];
  category: string;
  categorySlug: string;
  subcategory: string;
  subcategorySlug: string;
  description: string;
  features: string[];
  useCases: string[];
  tags?: string[];
  launchDate?: string;
  rating?: number;
  reviewCount?: number;
  alternatives?: string[];
  integrations?: string[];
  pricingDetails?: {
    type: ToolPricing;
    price?: string;
    url: string;
    description?: string;
  };
}

export interface Subcategory {
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export interface CategoryWithSubcategories {
  name: string;
  slug: string;
  description: string;
  icon: string;
  subcategories: Subcategory[];
}

// Categories and Subcategories
export const categoriesWithSubcategories: CategoryWithSubcategories[] = [
  {
    name: 'Creative & Design',
    slug: 'creative-design',
    description: 'Tools for designers, artists, and creative professionals',
    icon: '🎨',
    subcategories: [
      { name: 'AI Art Generation', slug: 'ai-art-generation', description: 'AI-powered image and art creation tools', icon: '🤖' },
      { name: 'Graphic Design', slug: 'graphic-design', description: 'Tools for creating visual content', icon: '✏️' },
      { name: 'Video Editing', slug: 'video-editing', description: 'Video creation and editing software', icon: '🎥' },
      { name: '3D Modeling', slug: '3d-modeling', description: '3D design and modeling tools', icon: '🖥️' },
      { name: 'UI/UX Design', slug: 'ui-ux-design', description: 'User interface and experience design tools', icon: '🎯' },
    ]
  },
  {
    name: 'Productivity & Business',
    slug: 'productivity-business',
    description: 'Tools to boost productivity and business operations',
    icon: '💼',
    subcategories: [
      { name: 'Project Management', slug: 'project-management', description: 'Tools for managing projects and tasks', icon: '📋' },
      { name: 'Note Taking', slug: 'note-taking', description: 'Digital note-taking and organization', icon: '📝' },
      { name: 'Communication', slug: 'communication', description: 'Team communication and collaboration', icon: '💬' },
      { name: 'CRM', slug: 'crm', description: 'Customer relationship management', icon: '🤝' },
    ]
  },
  {
    name: 'Development & Engineering',
    slug: 'development-engineering',
    description: 'Tools for developers and engineers',
    icon: '💻',
    subcategories: [
      { name: 'Code Editors', slug: 'code-editors', description: 'Code editing and IDE tools', icon: '⌨️' },
      { name: 'Version Control', slug: 'version-control', description: 'Source code management', icon: '🔄' },
      { name: 'APIs & Tools', slug: 'api-tools', description: 'API development and testing', icon: '🔌' },
      { name: 'DevOps', slug: 'devops', description: 'Development operations and CI/CD', icon: '⚙️' },
    ]
  },
  {
    name: 'Marketing & Growth',
    slug: 'marketing-growth',
    description: 'Tools for marketing, SEO, and business growth',
    icon: '📈',
    subcategories: [
      { name: 'SEO Tools', slug: 'seo-tools', description: 'Search engine optimization tools', icon: '🔍' },
      { name: 'Email Marketing', slug: 'email-marketing', description: 'Email campaign and automation tools', icon: '📧' },
      { name: 'Social Media', slug: 'social-media', description: 'Social media management and analytics', icon: '📱' },
      { name: 'Analytics', slug: 'analytics', description: 'Web and marketing analytics platforms', icon: '📊' },
    ]
  },
  {
    name: 'Research & Science',
    slug: 'research-science',
    description: 'Tools for research, data analysis, and scientific work',
    icon: '🔬',
    subcategories: [
      { name: 'Data Analysis', slug: 'data-analysis', description: 'Data analysis and visualization tools', icon: '📉' },
      { name: 'Research Tools', slug: 'research-tools', description: 'Academic and scientific research tools', icon: '📚' },
      { name: 'AI & ML', slug: 'ai-ml', description: 'Artificial intelligence and machine learning platforms', icon: '🤖' },
      { name: 'Lab Management', slug: 'lab-management', description: 'Laboratory and experiment management', icon: '🧪' },
    ]
  },
  {
    name: 'Finance & Trading',
    slug: 'finance-trading',
    description: 'Financial tools, trading platforms, and accounting software',
    icon: '💰',
    subcategories: [
      { name: 'Accounting', slug: 'accounting', description: 'Accounting and bookkeeping software', icon: '💵' },
      { name: 'Trading Platforms', slug: 'trading-platforms', description: 'Stock and crypto trading platforms', icon: '📈' },
      { name: 'Invoicing', slug: 'invoicing', description: 'Invoice and payment management', icon: '🧾' },
      { name: 'Financial Planning', slug: 'financial-planning', description: 'Budgeting and financial planning tools', icon: '💳' },
    ]
  },
  {
    name: 'Education & Learning',
    slug: 'education-learning',
    description: 'Educational platforms and learning management systems',
    icon: '📚',
    subcategories: [
      { name: 'Online Courses', slug: 'online-courses', description: 'E-learning and course platforms', icon: '🎓' },
      { name: 'Language Learning', slug: 'language-learning', description: 'Language learning applications', icon: '🗣️' },
      { name: 'LMS', slug: 'lms', description: 'Learning management systems', icon: '📖' },
      { name: 'Skill Development', slug: 'skill-development', description: 'Professional skill development platforms', icon: '🎯' },
    ]
  },
  {
    name: 'Health & Wellness',
    slug: 'health-wellness',
    description: 'Health tracking, fitness, and wellness applications',
    icon: '🏥',
    subcategories: [
      { name: 'Fitness Tracking', slug: 'fitness-tracking', description: 'Fitness and workout tracking apps', icon: '💪' },
      { name: 'Mental Health', slug: 'mental-health', description: 'Mental health and meditation apps', icon: '🧘' },
      { name: 'Nutrition', slug: 'nutrition', description: 'Diet and nutrition planning tools', icon: '🥗' },
      { name: 'Telemedicine', slug: 'telemedicine', description: 'Online healthcare and consultation', icon: '👨‍⚕️' },
    ]
  },
  {
    name: 'E-commerce & Retail',
    slug: 'ecommerce-retail',
    description: 'Online store platforms and retail management tools',
    icon: '🛒',
    subcategories: [
      { name: 'Store Builders', slug: 'store-builders', description: 'E-commerce platform builders', icon: '🏪' },
      { name: 'Payment Processing', slug: 'payment-processing', description: 'Payment gateways and processors', icon: '💳' },
      { name: 'Inventory Management', slug: 'inventory-management', description: 'Stock and inventory tracking', icon: '📦' },
      { name: 'Shipping & Logistics', slug: 'shipping-logistics', description: 'Shipping and delivery management', icon: '🚚' },
    ]
  },
  {
    name: 'Content Creation',
    slug: 'content-creation',
    description: 'Tools for creating and managing digital content',
    icon: '✍️',
    subcategories: [
      { name: 'Writing Tools', slug: 'writing-tools', description: 'Writing and editing software', icon: '📝' },
      { name: 'Podcasting', slug: 'podcasting', description: 'Podcast creation and hosting', icon: '🎙️' },
      { name: 'Streaming', slug: 'streaming', description: 'Live streaming platforms', icon: '📡' },
      { name: 'Content Management', slug: 'content-management', description: 'CMS and content organization', icon: '📋' },
    ]
  },
  {
    name: 'Security & Privacy',
    slug: 'security-privacy',
    description: 'Cybersecurity and privacy protection tools',
    icon: '🔒',
    subcategories: [
      { name: 'VPN Services', slug: 'vpn-services', description: 'Virtual private network services', icon: '🛡️' },
      { name: 'Password Managers', slug: 'password-managers', description: 'Password storage and management', icon: '🔑' },
      { name: 'Antivirus', slug: 'antivirus', description: 'Malware and virus protection', icon: '🦠' },
      { name: 'Encryption', slug: 'encryption', description: 'Data encryption tools', icon: '🔐' },
    ]
  },
  {
    name: 'Gaming & Entertainment',
    slug: 'gaming-entertainment',
    description: 'Gaming platforms and entertainment tools',
    icon: '🎮',
    subcategories: [
      { name: 'Game Development', slug: 'game-development', description: 'Game engines and development tools', icon: '🕹️' },
      { name: 'Gaming Platforms', slug: 'gaming-platforms', description: 'Digital game distribution platforms', icon: '🎯' },
      { name: 'Streaming Services', slug: 'streaming-services', description: 'Video and music streaming', icon: '📺' },
      { name: 'Music Production', slug: 'music-production', description: 'Music creation and editing software', icon: '🎵' },
    ]
  },
  {
    name: 'Travel & Hospitality',
    slug: 'travel-hospitality',
    description: 'Travel booking and hospitality management',
    icon: '✈️',
    subcategories: [
      { name: 'Booking Platforms', slug: 'booking-platforms', description: 'Travel and accommodation booking', icon: '🏨' },
      { name: 'Trip Planning', slug: 'trip-planning', description: 'Itinerary and trip planning tools', icon: '🗺️' },
      { name: 'Property Management', slug: 'property-management', description: 'Hotel and property management systems', icon: '🏢' },
      { name: 'Travel Insurance', slug: 'travel-insurance', description: 'Travel insurance and protection', icon: '🛡️' },
    ]
  },
  {
    name: 'Real Estate & Property',
    slug: 'real-estate-property',
    description: 'Real estate and property management tools',
    icon: '🏠',
    subcategories: [
      { name: 'Property Listings', slug: 'property-listings', description: 'Real estate listing platforms', icon: '🏘️' },
      { name: 'Property Management', slug: 'property-mgmt', description: 'Rental and property management', icon: '🔑' },
      { name: 'Virtual Tours', slug: 'virtual-tours', description: '3D property viewing tools', icon: '👁️' },
      { name: 'Real Estate CRM', slug: 'real-estate-crm', description: 'Client relationship management for realtors', icon: '📊' },
    ]
  },
  {
    name: 'Human Resources',
    slug: 'human-resources',
    description: 'HR management and recruitment tools',
    icon: '👥',
    subcategories: [
      { name: 'Recruitment', slug: 'recruitment', description: 'Hiring and applicant tracking systems', icon: '📝' },
      { name: 'Payroll', slug: 'payroll', description: 'Payroll processing and management', icon: '💰' },
      { name: 'Employee Management', slug: 'employee-management', description: 'Employee data and performance tracking', icon: '👔' },
      { name: 'Time Tracking', slug: 'time-tracking', description: 'Time and attendance tracking', icon: '⏰' },
    ]
  },
  {
    name: 'Legal & Compliance',
    slug: 'legal-compliance',
    description: 'Legal practice and compliance management',
    icon: '⚖️',
    subcategories: [
      { name: 'Contract Management', slug: 'contract-management', description: 'Contract creation and management', icon: '📄' },
      { name: 'Legal Research', slug: 'legal-research', description: 'Legal research and case management', icon: '📚' },
      { name: 'Compliance Tools', slug: 'compliance-tools', description: 'Regulatory compliance software', icon: '✅' },
      { name: 'Document Automation', slug: 'document-automation', description: 'Legal document generation', icon: '🤖' },
    ]
  },
  {
    name: 'Agriculture & Farming',
    slug: 'agriculture-farming',
    description: 'Agricultural technology and farm management',
    icon: '🌾',
    subcategories: [
      { name: 'Farm Management', slug: 'farm-management', description: 'Farm operations and planning software', icon: '🚜' },
      { name: 'Precision Agriculture', slug: 'precision-agriculture', description: 'GPS and sensor-based farming', icon: '🛰️' },
      { name: 'Livestock Management', slug: 'livestock-management', description: 'Animal tracking and health monitoring', icon: '🐄' },
      { name: 'Crop Monitoring', slug: 'crop-monitoring', description: 'Crop health and yield tracking', icon: '🌱' },
    ]
  },
  {
    name: 'Manufacturing & Supply Chain',
    slug: 'manufacturing-supply-chain',
    description: 'Manufacturing and supply chain management',
    icon: '🏭',
    subcategories: [
      { name: 'ERP Systems', slug: 'erp-systems', description: 'Enterprise resource planning', icon: '📊' },
      { name: 'Supply Chain', slug: 'supply-chain', description: 'Supply chain optimization tools', icon: '🔗' },
      { name: 'Quality Control', slug: 'quality-control', description: 'Quality assurance and testing', icon: '✓' },
      { name: 'Production Planning', slug: 'production-planning', description: 'Manufacturing planning and scheduling', icon: '📅' },
    ]
  },
  {
    name: 'Customer Support',
    slug: 'customer-support',
    description: 'Customer service and support platforms',
    icon: '🎧',
    subcategories: [
      { name: 'Help Desk', slug: 'help-desk', description: 'Ticketing and support systems', icon: '🎫' },
      { name: 'Live Chat', slug: 'live-chat', description: 'Real-time customer chat', icon: '💬' },
      { name: 'Knowledge Base', slug: 'knowledge-base', description: 'Self-service documentation', icon: '📖' },
      { name: 'Chatbots', slug: 'chatbots', description: 'AI-powered customer service bots', icon: '🤖' },
    ]
  },
  {
    name: 'Sales & CRM',
    slug: 'sales-crm',
    description: 'Sales automation and customer relationship tools',
    icon: '💼',
    subcategories: [
      { name: 'CRM Platforms', slug: 'crm-platforms', description: 'Customer relationship management', icon: '👥' },
      { name: 'Sales Automation', slug: 'sales-automation', description: 'Sales process automation', icon: '⚡' },
      { name: 'Lead Generation', slug: 'lead-generation', description: 'Lead capture and nurturing', icon: '🎯' },
      { name: 'Proposal Software', slug: 'proposal-software', description: 'Proposal and quote creation', icon: '📋' },
    ]
  },
  {
    name: 'Cloud & Infrastructure',
    slug: 'cloud-infrastructure',
    description: 'Cloud computing and IT infrastructure',
    icon: '☁️',
    subcategories: [
      { name: 'Cloud Hosting', slug: 'cloud-hosting', description: 'Cloud server and hosting services', icon: '🖥️' },
      { name: 'Database Services', slug: 'database-services', description: 'Database management systems', icon: '🗄️' },
      { name: 'Monitoring', slug: 'monitoring', description: 'Infrastructure monitoring tools', icon: '📡' },
      { name: 'Backup & Recovery', slug: 'backup-recovery', description: 'Data backup and disaster recovery', icon: '💾' },
    ]
  },
  {
    name: 'Collaboration & Remote Work',
    slug: 'collaboration-remote-work',
    description: 'Team collaboration and remote work tools',
    icon: '🤝',
    subcategories: [
      { name: 'Video Conferencing', slug: 'video-conferencing', description: 'Virtual meeting platforms', icon: '📹' },
      { name: 'Team Chat', slug: 'team-chat', description: 'Team messaging and communication', icon: '💬' },
      { name: 'File Sharing', slug: 'file-sharing', description: 'Cloud file storage and sharing', icon: '📁' },
      { name: 'Virtual Whiteboard', slug: 'virtual-whiteboard', description: 'Online collaboration boards', icon: '🎨' },
    ]
  },
  {
    name: 'Photography & Imaging',
    slug: 'photography-imaging',
    description: 'Photo editing and imaging software',
    icon: '📷',
    subcategories: [
      { name: 'Photo Editing', slug: 'photo-editing', description: 'Image editing and enhancement', icon: '🖼️' },
      { name: 'Stock Photos', slug: 'stock-photos', description: 'Stock photography platforms', icon: '📸' },
      { name: 'Photo Management', slug: 'photo-management', description: 'Photo organization and storage', icon: '🗂️' },
      { name: 'RAW Processing', slug: 'raw-processing', description: 'Professional RAW image processing', icon: '🎞️' },
    ]
  },
  {
    name: 'Automation & Integration',
    slug: 'automation-integration',
    description: 'Workflow automation and app integration',
    icon: '🔄',
    subcategories: [
      { name: 'Workflow Automation', slug: 'workflow-automation', description: 'Business process automation', icon: '⚙️' },
      { name: 'API Integration', slug: 'api-integration', description: 'App and service integration', icon: '🔌' },
      { name: 'RPA', slug: 'rpa', description: 'Robotic process automation', icon: '🤖' },
      { name: 'No-Code Automation', slug: 'no-code-automation', description: 'Visual automation builders', icon: '🎯' },
    ]
  },
  {
    name: 'IoT & Smart Devices',
    slug: 'iot-smart-devices',
    description: 'Internet of Things and smart device platforms',
    icon: '📱',
    subcategories: [
      { name: 'Smart Home', slug: 'smart-home', description: 'Home automation platforms', icon: '🏡' },
      { name: 'IoT Platforms', slug: 'iot-platforms', description: 'IoT device management', icon: '🌐' },
      { name: 'Wearables', slug: 'wearables', description: 'Wearable device software', icon: '⌚' },
      { name: 'Industrial IoT', slug: 'industrial-iot', description: 'Industrial IoT solutions', icon: '🏭' },
    ]
  },
  {
    name: 'Blockchain & Crypto',
    slug: 'blockchain-crypto',
    description: 'Blockchain technology and cryptocurrency tools',
    icon: '₿',
    subcategories: [
      { name: 'Crypto Wallets', slug: 'crypto-wallets', description: 'Cryptocurrency wallets', icon: '💰' },
      { name: 'Exchanges', slug: 'exchanges', description: 'Cryptocurrency trading platforms', icon: '💱' },
      { name: 'NFT Platforms', slug: 'nft-platforms', description: 'NFT marketplaces and tools', icon: '🎨' },
      { name: 'Blockchain Development', slug: 'blockchain-development', description: 'Blockchain development tools', icon: '⛓️' },
    ]
  },
  {
    name: 'Non-Profit & Social Impact',
    slug: 'nonprofit-social-impact',
    description: 'Tools for non-profits and social organizations',
    icon: '🌍',
    subcategories: [
      { name: 'Fundraising', slug: 'fundraising', description: 'Donation and fundraising platforms', icon: '💝' },
      { name: 'Volunteer Management', slug: 'volunteer-management', description: 'Volunteer coordination tools', icon: '🙋' },
      { name: 'Grant Management', slug: 'grant-management', description: 'Grant tracking and reporting', icon: '📊' },
      { name: 'Impact Measurement', slug: 'impact-measurement', description: 'Social impact analytics', icon: '📈' },
    ]
  },
  {
    name: 'Construction & Architecture',
    slug: 'construction-architecture',
    description: 'Construction management and architectural design tools',
    icon: '🏗️',
    subcategories: [
      { name: 'CAD Software', slug: 'cad-software', description: 'Computer-aided design tools', icon: '📐' },
      { name: 'Project Management', slug: 'construction-pm', description: 'Construction project management', icon: '📋' },
      { name: 'BIM Tools', slug: 'bim-tools', description: 'Building information modeling', icon: '🏢' },
      { name: 'Estimation', slug: 'estimation', description: 'Cost estimation and bidding', icon: '💰' },
    ]
  },
  {
    name: 'Event Management',
    slug: 'event-management',
    description: 'Event planning and management platforms',
    icon: '🎉',
    subcategories: [
      { name: 'Ticketing', slug: 'ticketing', description: 'Event ticketing and registration', icon: '🎫' },
      { name: 'Virtual Events', slug: 'virtual-events', description: 'Online event platforms', icon: '💻' },
      { name: 'Event Planning', slug: 'event-planning', description: 'Event coordination and planning', icon: '📅' },
      { name: 'Venue Management', slug: 'venue-management', description: 'Venue booking and management', icon: '🏟️' },
    ]
  },
  {
    name: 'Transportation & Logistics',
    slug: 'transportation-logistics',
    description: 'Fleet management and logistics optimization',
    icon: '🚛',
    subcategories: [
      { name: 'Fleet Management', slug: 'fleet-management', description: 'Vehicle tracking and management', icon: '🚗' },
      { name: 'Route Optimization', slug: 'route-optimization', description: 'Delivery route planning', icon: '🗺️' },
      { name: 'Warehouse Management', slug: 'warehouse-management', description: 'Warehouse operations software', icon: '📦' },
      { name: 'Freight Management', slug: 'freight-management', description: 'Freight and cargo tracking', icon: '🚢' },
    ]
  },
  {
    name: 'Energy & Utilities',
    slug: 'energy-utilities',
    description: 'Energy management and utility optimization',
    icon: '⚡',
    subcategories: [
      { name: 'Energy Monitoring', slug: 'energy-monitoring', description: 'Energy consumption tracking', icon: '📊' },
      { name: 'Smart Grid', slug: 'smart-grid', description: 'Smart grid management systems', icon: '🔌' },
      { name: 'Renewable Energy', slug: 'renewable-energy', description: 'Solar and wind energy management', icon: '☀️' },
      { name: 'Utility Billing', slug: 'utility-billing', description: 'Utility billing and metering', icon: '💵' },
    ]
  },
  {
    name: 'Food & Beverage',
    slug: 'food-beverage',
    description: 'Restaurant and food service management',
    icon: '🍽️',
    subcategories: [
      { name: 'POS Systems', slug: 'pos-systems', description: 'Point of sale systems', icon: '💳' },
      { name: 'Restaurant Management', slug: 'restaurant-management', description: 'Restaurant operations software', icon: '🍴' },
      { name: 'Recipe Management', slug: 'recipe-management', description: 'Recipe and menu planning', icon: '📖' },
      { name: 'Food Delivery', slug: 'food-delivery', description: 'Food delivery platforms', icon: '🛵' },
    ]
  },
  {
    name: 'Government & Public Sector',
    slug: 'government-public-sector',
    description: 'Government and civic technology solutions',
    icon: '🏛️',
    subcategories: [
      { name: 'Civic Engagement', slug: 'civic-engagement', description: 'Citizen engagement platforms', icon: '🗳️' },
      { name: 'Public Records', slug: 'public-records', description: 'Document and records management', icon: '📜' },
      { name: 'Emergency Management', slug: 'emergency-management', description: 'Emergency response systems', icon: '🚨' },
      { name: 'Permitting', slug: 'permitting', description: 'Permit and licensing systems', icon: '📋' },
    ]
  },
  {
    name: 'Insurance',
    slug: 'insurance',
    description: 'Insurance management and underwriting tools',
    icon: '🛡️',
    subcategories: [
      { name: 'Policy Management', slug: 'policy-management', description: 'Insurance policy administration', icon: '📄' },
      { name: 'Claims Processing', slug: 'claims-processing', description: 'Claims management systems', icon: '📝' },
      { name: 'Underwriting', slug: 'underwriting', description: 'Risk assessment and underwriting', icon: '📊' },
      { name: 'Insurance CRM', slug: 'insurance-crm', description: 'Customer relationship management', icon: '👥' },
    ]
  },
  {
    name: 'Media & Publishing',
    slug: 'media-publishing',
    description: 'Publishing and media production tools',
    icon: '📰',
    subcategories: [
      { name: 'Publishing Platforms', slug: 'publishing-platforms', description: 'Digital publishing tools', icon: '📚' },
      { name: 'News Management', slug: 'news-management', description: 'Newsroom and editorial systems', icon: '📰' },
      { name: 'Digital Asset Management', slug: 'digital-asset-management', description: 'Media asset organization', icon: '🗂️' },
      { name: 'Subscription Management', slug: 'subscription-management', description: 'Subscriber and paywall management', icon: '💳' },
    ]
  },
  {
    name: 'Sports & Fitness',
    slug: 'sports-fitness',
    description: 'Sports management and athletic performance tools',
    icon: '⚽',
    subcategories: [
      { name: 'Team Management', slug: 'team-management', description: 'Sports team organization', icon: '👥' },
      { name: 'Performance Analytics', slug: 'performance-analytics', description: 'Athletic performance tracking', icon: '📊' },
      { name: 'Facility Management', slug: 'facility-management', description: 'Sports facility booking', icon: '🏟️' },
      { name: 'Coaching Tools', slug: 'coaching-tools', description: 'Training and coaching software', icon: '📋' },
    ]
  },
  {
    name: 'Automotive',
    slug: 'automotive',
    description: 'Automotive industry and vehicle management',
    icon: '🚗',
    subcategories: [
      { name: 'Dealership Management', slug: 'dealership-management', description: 'Auto dealership software', icon: '🏪' },
      { name: 'Vehicle Diagnostics', slug: 'vehicle-diagnostics', description: 'Car diagnostic and repair tools', icon: '🔧' },
      { name: 'Fleet Tracking', slug: 'fleet-tracking', description: 'Vehicle fleet monitoring', icon: '📍' },
      { name: 'Auto Parts', slug: 'auto-parts', description: 'Parts inventory and ordering', icon: '⚙️' },
    ]
  },
  {
    name: 'Telecommunications',
    slug: 'telecommunications',
    description: 'Telecom and communication infrastructure',
    icon: '📡',
    subcategories: [
      { name: 'Network Management', slug: 'network-management', description: 'Telecom network monitoring', icon: '🌐' },
      { name: 'VoIP Services', slug: 'voip-services', description: 'Voice over IP platforms', icon: '☎️' },
      { name: 'SMS & Messaging', slug: 'sms-messaging', description: 'Bulk SMS and messaging APIs', icon: '💬' },
      { name: 'Billing Systems', slug: 'telecom-billing', description: 'Telecom billing and invoicing', icon: '💵' },
    ]
  },
  {
    name: 'Fashion & Apparel',
    slug: 'fashion-apparel',
    description: 'Fashion design and retail management',
    icon: '👗',
    subcategories: [
      { name: 'Fashion Design', slug: 'fashion-design', description: 'Apparel design software', icon: '✂️' },
      { name: 'Retail Management', slug: 'fashion-retail', description: 'Fashion retail POS and inventory', icon: '🏪' },
      { name: 'Trend Forecasting', slug: 'trend-forecasting', description: 'Fashion trend analysis', icon: '📈' },
      { name: 'Size & Fit', slug: 'size-fit', description: 'Virtual fitting and sizing tools', icon: '📏' },
    ]
  },
  {
    name: 'Beauty & Cosmetics',
    slug: 'beauty-cosmetics',
    description: 'Beauty industry and salon management',
    icon: '💄',
    subcategories: [
      { name: 'Salon Management', slug: 'salon-management', description: 'Salon booking and operations', icon: '💇' },
      { name: 'Virtual Try-On', slug: 'virtual-try-on', description: 'AR makeup and hair try-on', icon: '🪞' },
      { name: 'Inventory Management', slug: 'beauty-inventory', description: 'Beauty product inventory', icon: '📦' },
      { name: 'Client Management', slug: 'beauty-client', description: 'Client booking and CRM', icon: '👥' },
    ]
  },
  {
    name: 'Pet Care & Veterinary',
    slug: 'pet-care-veterinary',
    description: 'Pet care and veterinary practice management',
    icon: '🐾',
    subcategories: [
      { name: 'Veterinary Software', slug: 'veterinary-software', description: 'Vet practice management', icon: '🏥' },
      { name: 'Pet Tracking', slug: 'pet-tracking', description: 'Pet GPS and health monitoring', icon: '📍' },
      { name: 'Grooming Management', slug: 'grooming-management', description: 'Pet grooming scheduling', icon: '✂️' },
      { name: 'Pet Adoption', slug: 'pet-adoption', description: 'Animal shelter and adoption platforms', icon: '🐕' },
    ]
  },
  {
    name: 'Environmental & Sustainability',
    slug: 'environmental-sustainability',
    description: 'Environmental monitoring and sustainability tools',
    icon: '🌱',
    subcategories: [
      { name: 'Carbon Tracking', slug: 'carbon-tracking', description: 'Carbon footprint monitoring', icon: '🌍' },
      { name: 'Waste Management', slug: 'waste-management', description: 'Waste tracking and recycling', icon: '♻️' },
      { name: 'Environmental Monitoring', slug: 'environmental-monitoring', description: 'Air and water quality tracking', icon: '🌊' },
      { name: 'Sustainability Reporting', slug: 'sustainability-reporting', description: 'ESG and sustainability reporting', icon: '📊' },
    ]
  },
  {
    name: 'Dental & Orthodontics',
    slug: 'dental-orthodontics',
    description: 'Dental practice and orthodontic management',
    icon: '🦷',
    subcategories: [
      { name: 'Practice Management', slug: 'dental-practice', description: 'Dental office management software', icon: '🏥' },
      { name: 'Imaging & Diagnostics', slug: 'dental-imaging', description: 'Digital X-ray and imaging', icon: '📸' },
      { name: 'Patient Records', slug: 'dental-records', description: 'Electronic health records for dentistry', icon: '📋' },
      { name: 'Appointment Scheduling', slug: 'dental-scheduling', description: 'Patient booking and reminders', icon: '📅' },
    ]
  },
  {
    name: 'Childcare & Education',
    slug: 'childcare-education',
    description: 'Childcare centers and early education management',
    icon: '👶',
    subcategories: [
      { name: 'Daycare Management', slug: 'daycare-management', description: 'Childcare center operations', icon: '🏫' },
      { name: 'Parent Communication', slug: 'parent-communication', description: 'Parent engagement platforms', icon: '📱' },
      { name: 'Child Development', slug: 'child-development', description: 'Development tracking and assessment', icon: '📊' },
      { name: 'Billing & Payments', slug: 'childcare-billing', description: 'Tuition and payment processing', icon: '💳' },
    ]
  },
  {
    name: 'Libraries & Archives',
    slug: 'libraries-archives',
    description: 'Library management and digital archiving',
    icon: '📚',
    subcategories: [
      { name: 'Library Management', slug: 'library-management', description: 'Catalog and circulation systems', icon: '📖' },
      { name: 'Digital Archives', slug: 'digital-archives', description: 'Digital preservation and access', icon: '💾' },
      { name: 'Resource Discovery', slug: 'resource-discovery', description: 'Search and discovery tools', icon: '🔍' },
      { name: 'Membership Management', slug: 'library-membership', description: 'Member registration and tracking', icon: '👥' },
    ]
  },
  {
    name: 'Museums & Galleries',
    slug: 'museums-galleries',
    description: 'Museum and art gallery management systems',
    icon: '🖼️',
    subcategories: [
      { name: 'Collection Management', slug: 'collection-management', description: 'Artifact and artwork cataloging', icon: '🗂️' },
      { name: 'Visitor Management', slug: 'visitor-management', description: 'Ticketing and visitor tracking', icon: '🎫' },
      { name: 'Exhibition Planning', slug: 'exhibition-planning', description: 'Exhibition design and scheduling', icon: '🎨' },
      { name: 'Virtual Tours', slug: 'museum-virtual-tours', description: 'Online museum experiences', icon: '🌐' },
    ]
  },
  {
    name: 'Funeral & Memorial Services',
    slug: 'funeral-memorial',
    description: 'Funeral home and memorial service management',
    icon: '🕊️',
    subcategories: [
      { name: 'Funeral Home Management', slug: 'funeral-management', description: 'Operations and case management', icon: '🏢' },
      { name: 'Memorial Websites', slug: 'memorial-websites', description: 'Online memorial and tribute pages', icon: '💐' },
      { name: 'Cremation Services', slug: 'cremation-services', description: 'Cremation tracking and management', icon: '⚱️' },
      { name: 'Cemetery Management', slug: 'cemetery-management', description: 'Plot and burial records', icon: '🪦' },
    ]
  },
  {
    name: 'Wedding & Events',
    slug: 'wedding-events',
    description: 'Wedding planning and event coordination',
    icon: '💒',
    subcategories: [
      { name: 'Wedding Planning', slug: 'wedding-planning', description: 'Wedding coordination and checklists', icon: '💍' },
      { name: 'Vendor Management', slug: 'vendor-management', description: 'Vendor booking and contracts', icon: '📋' },
      { name: 'Guest Management', slug: 'guest-management', description: 'RSVP and seating arrangements', icon: '👥' },
      { name: 'Registry Services', slug: 'registry-services', description: 'Gift registry platforms', icon: '🎁' },
    ]
  },
  {
    name: 'Cleaning & Maintenance',
    slug: 'cleaning-maintenance',
    description: 'Cleaning services and facility maintenance',
    icon: '🧹',
    subcategories: [
      { name: 'Cleaning Scheduling', slug: 'cleaning-scheduling', description: 'Job scheduling and routing', icon: '📅' },
      { name: 'Facility Management', slug: 'facility-mgmt', description: 'Building maintenance tracking', icon: '🏢' },
      { name: 'Inspection Tools', slug: 'inspection-tools', description: 'Quality inspection and checklists', icon: '✅' },
      { name: 'Equipment Tracking', slug: 'equipment-tracking', description: 'Cleaning equipment inventory', icon: '🧰' },
    ]
  },
  {
    name: 'Waste & Recycling',
    slug: 'waste-recycling',
    description: 'Waste collection and recycling management',
    icon: '♻️',
    subcategories: [
      { name: 'Route Management', slug: 'waste-routing', description: 'Collection route optimization', icon: '🗺️' },
      { name: 'Recycling Tracking', slug: 'recycling-tracking', description: 'Material sorting and tracking', icon: '📊' },
      { name: 'Billing Systems', slug: 'waste-billing', description: 'Customer billing and invoicing', icon: '💵' },
      { name: 'Compliance Reporting', slug: 'waste-compliance', description: 'Environmental compliance tracking', icon: '📋' },
    ]
  },
  {
    name: 'Security & Surveillance',
    slug: 'security-surveillance',
    description: 'Physical security and surveillance systems',
    icon: '🔐',
    subcategories: [
      { name: 'Video Surveillance', slug: 'video-surveillance', description: 'CCTV and camera systems', icon: '📹' },
      { name: 'Access Control', slug: 'access-control', description: 'Door and entry management', icon: '🚪' },
      { name: 'Alarm Systems', slug: 'alarm-systems', description: 'Intrusion detection and alerts', icon: '🚨' },
      { name: 'Guard Management', slug: 'guard-management', description: 'Security personnel scheduling', icon: '👮' },
    ]
  },
  {
    name: 'Printing & Publishing',
    slug: 'printing-publishing',
    description: 'Print production and publishing workflow',
    icon: '🖨️',
    subcategories: [
      { name: 'Print Management', slug: 'print-management', description: 'Print job tracking and workflow', icon: '📄' },
      { name: 'Prepress Software', slug: 'prepress-software', description: 'Design preparation and proofing', icon: '🎨' },
      { name: 'Workflow Automation', slug: 'print-workflow', description: 'Production workflow automation', icon: '⚙️' },
      { name: 'Estimating & Quoting', slug: 'print-estimating', description: 'Job costing and quotes', icon: '💰' },
    ]
  },
  {
    name: 'Signage & Display',
    slug: 'signage-display',
    description: 'Digital signage and display management',
    icon: '🪧',
    subcategories: [
      { name: 'Digital Signage', slug: 'digital-signage', description: 'Content management for displays', icon: '📺' },
      { name: 'Menu Boards', slug: 'menu-boards', description: 'Restaurant menu display systems', icon: '🍔' },
      { name: 'Wayfinding', slug: 'wayfinding', description: 'Interactive directory systems', icon: '🗺️' },
      { name: 'Outdoor Advertising', slug: 'outdoor-advertising', description: 'Billboard and outdoor display', icon: '📢' },
    ]
  },
  {
    name: 'Laundry & Dry Cleaning',
    slug: 'laundry-dry-cleaning',
    description: 'Laundry service and dry cleaning management',
    icon: '🧺',
    subcategories: [
      { name: 'POS Systems', slug: 'laundry-pos', description: 'Point of sale for laundry services', icon: '💳' },
      { name: 'Route Management', slug: 'laundry-routing', description: 'Pickup and delivery routing', icon: '🚐' },
      { name: 'Inventory Tracking', slug: 'laundry-inventory', description: 'Garment tracking and tagging', icon: '👔' },
      { name: 'Customer Management', slug: 'laundry-customers', description: 'Customer profiles and preferences', icon: '👥' },
    ]
  },
  {
    name: 'Parking & Transportation',
    slug: 'parking-transportation',
    description: 'Parking management and public transit',
    icon: '🅿️',
    subcategories: [
      { name: 'Parking Management', slug: 'parking-management', description: 'Parking lot and garage operations', icon: '🚗' },
      { name: 'Payment Systems', slug: 'parking-payment', description: 'Parking payment and validation', icon: '💳' },
      { name: 'Transit Management', slug: 'transit-management', description: 'Public transportation systems', icon: '🚌' },
      { name: 'Bike Sharing', slug: 'bike-sharing', description: 'Bicycle rental and sharing platforms', icon: '🚲' },
    ]
  },
  {
    name: 'Vending & Kiosks',
    slug: 'vending-kiosks',
    description: 'Vending machine and self-service kiosk management',
    icon: '🏪',
    subcategories: [
      { name: 'Vending Management', slug: 'vending-management', description: 'Machine monitoring and inventory', icon: '🥤' },
      { name: 'Kiosk Software', slug: 'kiosk-software', description: 'Self-service kiosk platforms', icon: '🖥️' },
      { name: 'Payment Processing', slug: 'vending-payment', description: 'Cashless payment systems', icon: '💳' },
      { name: 'Route Planning', slug: 'vending-routing', description: 'Service route optimization', icon: '🗺️' },
    ]
  },
  {
    name: 'Lottery & Gaming',
    slug: 'lottery-gaming',
    description: 'Lottery systems and gaming platforms',
    icon: '🎰',
    subcategories: [
      { name: 'Lottery Management', slug: 'lottery-management', description: 'Lottery draw and ticket systems', icon: '🎫' },
      { name: 'Casino Management', slug: 'casino-management', description: 'Casino operations software', icon: '🃏' },
      { name: 'Sports Betting', slug: 'sports-betting', description: 'Sportsbook and betting platforms', icon: '⚽' },
      { name: 'Player Tracking', slug: 'player-tracking', description: 'Customer loyalty and tracking', icon: '👥' },
    ]
  },
  {
    name: 'Marine & Maritime',
    slug: 'marine-maritime',
    description: 'Maritime operations and vessel management',
    icon: '⚓',
    subcategories: [
      { name: 'Fleet Management', slug: 'marine-fleet', description: 'Vessel tracking and management', icon: '🚢' },
      { name: 'Port Operations', slug: 'port-operations', description: 'Port and terminal management', icon: '🏭' },
      { name: 'Navigation Systems', slug: 'navigation-systems', description: 'Marine navigation software', icon: '🧭' },
      { name: 'Maintenance Tracking', slug: 'marine-maintenance', description: 'Vessel maintenance and compliance', icon: '🔧' },
    ]
  },
  {
    name: 'Aviation & Aerospace',
    slug: 'aviation-aerospace',
    description: 'Aviation management and aerospace systems',
    icon: '✈️',
    subcategories: [
      { name: 'Flight Operations', slug: 'flight-operations', description: 'Flight planning and dispatch', icon: '🛫' },
      { name: 'Aircraft Maintenance', slug: 'aircraft-maintenance', description: 'MRO and maintenance tracking', icon: '🔧' },
      { name: 'Crew Management', slug: 'crew-management', description: 'Pilot and crew scheduling', icon: '👨‍✈️' },
      { name: 'Airport Operations', slug: 'airport-operations', description: 'Airport management systems', icon: '🛬' },
    ]
  },
  {
    name: 'Mining & Resources',
    slug: 'mining-resources',
    description: 'Mining operations and resource extraction',
    icon: '⛏️',
    subcategories: [
      { name: 'Mine Planning', slug: 'mine-planning', description: 'Mine design and planning software', icon: '🗺️' },
      { name: 'Fleet Management', slug: 'mining-fleet', description: 'Heavy equipment tracking', icon: '🚜' },
      { name: 'Safety Management', slug: 'mining-safety', description: 'Safety compliance and monitoring', icon: '⚠️' },
      { name: 'Resource Tracking', slug: 'resource-tracking', description: 'Ore and mineral tracking', icon: '💎' },
    ]
  },
  {
    name: 'Forestry & Timber',
    slug: 'forestry-timber',
    description: 'Forest management and timber operations',
    icon: '🌲',
    subcategories: [
      { name: 'Forest Management', slug: 'forest-management', description: 'Forestry planning and tracking', icon: '🌳' },
      { name: 'Timber Tracking', slug: 'timber-tracking', description: 'Log and lumber inventory', icon: '🪵' },
      { name: 'Harvesting Operations', slug: 'harvesting-operations', description: 'Logging operations management', icon: '🪓' },
      { name: 'Sustainability', slug: 'forestry-sustainability', description: 'Forest conservation and compliance', icon: '🌱' },
    ]
  },
  {
    name: 'Fishing & Aquaculture',
    slug: 'fishing-aquaculture',
    description: 'Commercial fishing and fish farming',
    icon: '🎣',
    subcategories: [
      { name: 'Fleet Management', slug: 'fishing-fleet', description: 'Fishing vessel tracking', icon: '🚤' },
      { name: 'Catch Tracking', slug: 'catch-tracking', description: 'Fish catch and quota management', icon: '🐟' },
      { name: 'Aquaculture Management', slug: 'aquaculture-management', description: 'Fish farm operations', icon: '🦐' },
      { name: 'Compliance', slug: 'fishing-compliance', description: 'Fishing regulations and reporting', icon: '📋' },
    ]
  },
  {
    name: 'Textiles & Manufacturing',
    slug: 'textiles-manufacturing',
    description: 'Textile production and garment manufacturing',
    icon: '🧵',
    subcategories: [
      { name: 'Production Planning', slug: 'textile-production', description: 'Manufacturing workflow management', icon: '🏭' },
      { name: 'Quality Control', slug: 'textile-quality', description: 'Fabric inspection and testing', icon: '✅' },
      { name: 'Inventory Management', slug: 'textile-inventory', description: 'Material and finished goods tracking', icon: '📦' },
      { name: 'Design Software', slug: 'textile-design', description: 'Pattern and textile design tools', icon: '🎨' },
    ]
  },
  {
    name: 'Jewelry & Luxury Goods',
    slug: 'jewelry-luxury',
    description: 'Jewelry retail and luxury goods management',
    icon: '💎',
    subcategories: [
      { name: 'Inventory Management', slug: 'jewelry-inventory', description: 'Jewelry tracking and cataloging', icon: '📿' },
      { name: 'Appraisal Tools', slug: 'appraisal-tools', description: 'Gemstone and jewelry valuation', icon: '💍' },
      { name: 'Retail Management', slug: 'jewelry-retail', description: 'POS and customer management', icon: '🏪' },
      { name: 'Custom Design', slug: 'custom-design', description: 'CAD for jewelry design', icon: '✨' },
    ]
  },
  {
    name: 'Pharmaceuticals & Biotech',
    slug: 'pharmaceuticals-biotech',
    description: 'Pharmaceutical research and biotechnology',
    icon: '💊',
    subcategories: [
      { name: 'Drug Discovery', slug: 'drug-discovery', description: 'Pharmaceutical R&D platforms', icon: '🔬' },
      { name: 'Clinical Trials', slug: 'clinical-trials', description: 'Clinical trial management systems', icon: '📊' },
      { name: 'Regulatory Compliance', slug: 'pharma-compliance', description: 'FDA and regulatory compliance', icon: '✅' },
      { name: 'Manufacturing', slug: 'pharma-manufacturing', description: 'Pharmaceutical production management', icon: '🏭' },
    ]
  },
  {
    name: 'Chemical & Materials',
    slug: 'chemical-materials',
    description: 'Chemical processing and materials science',
    icon: '🧪',
    subcategories: [
      { name: 'Process Control', slug: 'process-control', description: 'Chemical process automation', icon: '⚙️' },
      { name: 'Lab Management', slug: 'chemical-lab', description: 'Laboratory information systems', icon: '🔬' },
      { name: 'Safety Management', slug: 'chemical-safety', description: 'Chemical safety and compliance', icon: '⚠️' },
      { name: 'Inventory Control', slug: 'chemical-inventory', description: 'Chemical inventory tracking', icon: '📦' },
    ]
  },
  {
    name: 'Oil & Gas',
    slug: 'oil-gas',
    description: 'Petroleum and natural gas industry',
    icon: '🛢️',
    subcategories: [
      { name: 'Exploration', slug: 'oil-exploration', description: 'Seismic and exploration software', icon: '🗺️' },
      { name: 'Production Management', slug: 'oil-production', description: 'Well and production tracking', icon: '⚡' },
      { name: 'Pipeline Management', slug: 'pipeline-management', description: 'Pipeline monitoring and control', icon: '🔧' },
      { name: 'Refining', slug: 'refining', description: 'Refinery operations software', icon: '🏭' },
    ]
  },
  {
    name: 'Water & Wastewater',
    slug: 'water-wastewater',
    description: 'Water treatment and distribution systems',
    icon: '💧',
    subcategories: [
      { name: 'Treatment Plants', slug: 'water-treatment', description: 'Water treatment operations', icon: '🏭' },
      { name: 'Distribution Management', slug: 'water-distribution', description: 'Water network management', icon: '🚰' },
      { name: 'Quality Monitoring', slug: 'water-quality', description: 'Water quality testing and tracking', icon: '🔬' },
      { name: 'Billing Systems', slug: 'water-billing', description: 'Utility billing and metering', icon: '💵' },
    ]
  },
  {
    name: 'Telecommunications Infrastructure',
    slug: 'telecom-infrastructure',
    description: 'Telecom network and tower management',
    icon: '📡',
    subcategories: [
      { name: 'Tower Management', slug: 'tower-management', description: 'Cell tower and site management', icon: '🗼' },
      { name: 'Network Planning', slug: 'network-planning', description: 'RF planning and optimization', icon: '📊' },
      { name: 'Fiber Management', slug: 'fiber-management', description: 'Fiber optic network tracking', icon: '🔌' },
      { name: 'Asset Management', slug: 'telecom-assets', description: 'Telecom equipment tracking', icon: '📦' },
    ]
  },
  {
    name: 'Broadcasting & Media Production',
    slug: 'broadcasting-media',
    description: 'TV, radio, and media production',
    icon: '📻',
    subcategories: [
      { name: 'Broadcast Automation', slug: 'broadcast-automation', description: 'TV and radio automation', icon: '📺' },
      { name: 'Media Asset Management', slug: 'media-assets', description: 'Video and audio asset libraries', icon: '🎬' },
      { name: 'Playout Systems', slug: 'playout-systems', description: 'Broadcast playout and scheduling', icon: '⏯️' },
      { name: 'Studio Management', slug: 'studio-management', description: 'Production studio operations', icon: '🎙️' },
    ]
  },
  {
    name: 'Advertising & Marketing Tech',
    slug: 'advertising-martech',
    description: 'Ad tech and marketing automation platforms',
    icon: '📢',
    subcategories: [
      { name: 'Ad Networks', slug: 'ad-networks', description: 'Digital advertising platforms', icon: '🌐' },
      { name: 'Marketing Automation', slug: 'marketing-automation', description: 'Campaign automation tools', icon: '🤖' },
      { name: 'Attribution', slug: 'attribution', description: 'Marketing attribution and analytics', icon: '📊' },
      { name: 'Programmatic', slug: 'programmatic', description: 'Programmatic advertising platforms', icon: '💰' },
    ]
  },
  {
    name: 'Genealogy & Family History',
    slug: 'genealogy-family',
    description: 'Family tree and genealogy research',
    icon: '🌳',
    subcategories: [
      { name: 'Family Tree Software', slug: 'family-tree', description: 'Genealogy and family tree builders', icon: '👨‍👩‍👧‍👦' },
      { name: 'DNA Analysis', slug: 'dna-analysis', description: 'Genetic genealogy tools', icon: '🧬' },
      { name: 'Record Search', slug: 'record-search', description: 'Historical records databases', icon: '📜' },
      { name: 'Collaboration', slug: 'genealogy-collaboration', description: 'Family research sharing platforms', icon: '🤝' },
    ]
  },
  {
    name: 'Astrology & Spirituality',
    slug: 'astrology-spirituality',
    description: 'Astrology, meditation, and spiritual tools',
    icon: '🔮',
    subcategories: [
      { name: 'Astrology Software', slug: 'astrology-software', description: 'Birth chart and horoscope tools', icon: '⭐' },
      { name: 'Meditation Apps', slug: 'meditation-apps', description: 'Guided meditation platforms', icon: '🧘' },
      { name: 'Tarot & Divination', slug: 'tarot-divination', description: 'Digital tarot and oracle tools', icon: '🃏' },
      { name: 'Spiritual Communities', slug: 'spiritual-communities', description: 'Online spiritual networks', icon: '🕉️' },
    ]
  },
  {
    name: 'Hobbies & Crafts',
    slug: 'hobbies-crafts',
    description: 'Hobby management and crafting tools',
    icon: '🎨',
    subcategories: [
      { name: 'Crafting Tools', slug: 'crafting-tools', description: 'DIY and craft project software', icon: '✂️' },
      { name: 'Collection Management', slug: 'collection-management', description: 'Collectibles inventory and tracking', icon: '🏺' },
      { name: 'Pattern Design', slug: 'pattern-design', description: 'Knitting and sewing patterns', icon: '🧶' },
      { name: 'Community Platforms', slug: 'hobby-communities', description: 'Hobby enthusiast networks', icon: '👥' },
    ]
  },
  {
    name: 'Dating & Relationships',
    slug: 'dating-relationships',
    description: 'Dating platforms and relationship tools',
    icon: '💕',
    subcategories: [
      { name: 'Dating Platforms', slug: 'dating-platforms', description: 'Online dating and matchmaking', icon: '❤️' },
      { name: 'Relationship Coaching', slug: 'relationship-coaching', description: 'Couples therapy and coaching apps', icon: '💑' },
      { name: 'Event Planning', slug: 'dating-events', description: 'Singles events and meetups', icon: '🎉' },
      { name: 'Safety Tools', slug: 'dating-safety', description: 'Dating safety and verification', icon: '🛡️' },
    ]
  },
  {
    name: 'Genealogy Research',
    slug: 'genealogy-research',
    description: 'Historical and ancestry research tools',
    icon: '📖',
    subcategories: [
      { name: 'Archive Access', slug: 'archive-access', description: 'Historical document databases', icon: '📚' },
      { name: 'Census Records', slug: 'census-records', description: 'Census and vital records search', icon: '📋' },
      { name: 'Immigration Records', slug: 'immigration-records', description: 'Immigration and naturalization', icon: '🛳️' },
      { name: 'Military Records', slug: 'military-records', description: 'Military service records', icon: '🎖️' },
    ]
  },
  {
    name: 'Auction & Marketplace',
    slug: 'auction-marketplace',
    description: 'Online auction and marketplace platforms',
    icon: '🔨',
    subcategories: [
      { name: 'Auction Software', slug: 'auction-software', description: 'Online auction platforms', icon: '⚖️' },
      { name: 'Marketplace Management', slug: 'marketplace-management', description: 'Multi-vendor marketplace tools', icon: '🏪' },
      { name: 'Bidding Systems', slug: 'bidding-systems', description: 'Live and timed bidding', icon: '💰' },
      { name: 'Escrow Services', slug: 'escrow-services', description: 'Payment escrow and protection', icon: '🔒' },
    ]
  },
  {
    name: 'Crowdfunding & Donations',
    slug: 'crowdfunding-donations',
    description: 'Crowdfunding and donation platforms',
    icon: '💰',
    subcategories: [
      { name: 'Crowdfunding Platforms', slug: 'crowdfunding-platforms', description: 'Project crowdfunding sites', icon: '🚀' },
      { name: 'Donation Management', slug: 'donation-management', description: 'Charity and donation processing', icon: '💝' },
      { name: 'Peer-to-Peer', slug: 'peer-to-peer', description: 'P2P fundraising tools', icon: '🤝' },
      { name: 'Campaign Management', slug: 'campaign-management', description: 'Fundraising campaign tools', icon: '📊' },
    ]
  },
  {
    name: 'Subscription & Membership',
    slug: 'subscription-membership',
    description: 'Subscription and membership management',
    icon: '🎫',
    subcategories: [
      { name: 'Subscription Billing', slug: 'subscription-billing', description: 'Recurring billing platforms', icon: '💳' },
      { name: 'Membership Sites', slug: 'membership-sites', description: 'Member portal and content', icon: '🔐' },
      { name: 'Access Control', slug: 'membership-access', description: 'Member access management', icon: '🚪' },
      { name: 'Retention Tools', slug: 'retention-tools', description: 'Churn prevention and engagement', icon: '📈' },
    ]
  },
  {
    name: 'Influencer & Creator Economy',
    slug: 'influencer-creator',
    description: 'Creator tools and influencer platforms',
    icon: '🌟',
    subcategories: [
      { name: 'Creator Platforms', slug: 'creator-platforms', description: 'Content creator monetization', icon: '💰' },
      { name: 'Influencer Marketing', slug: 'influencer-marketing', description: 'Brand-influencer matching', icon: '🤝' },
      { name: 'Analytics', slug: 'creator-analytics', description: 'Creator performance analytics', icon: '📊' },
      { name: 'Sponsorship Management', slug: 'sponsorship-management', description: 'Brand deal management', icon: '📋' },
    ]
  },
  {
    name: 'Voice & Audio Tech',
    slug: 'voice-audio-tech',
    description: 'Voice recognition and audio technology',
    icon: '🎤',
    subcategories: [
      { name: 'Speech Recognition', slug: 'speech-recognition', description: 'Voice-to-text and transcription', icon: '🗣️' },
      { name: 'Voice Assistants', slug: 'voice-assistants', description: 'AI voice assistant platforms', icon: '🤖' },
      { name: 'Audio Processing', slug: 'audio-processing', description: 'Audio editing and enhancement', icon: '🎚️' },
      { name: 'Text-to-Speech', slug: 'text-to-speech', description: 'TTS and voice synthesis', icon: '🔊' },
    ]
  },
  {
    name: 'Translation & Localization',
    slug: 'translation-localization',
    description: 'Language translation and localization tools',
    icon: '🌐',
    subcategories: [
      { name: 'Machine Translation', slug: 'machine-translation', description: 'AI-powered translation', icon: '🤖' },
      { name: 'CAT Tools', slug: 'cat-tools', description: 'Computer-assisted translation', icon: '💻' },
      { name: 'Localization Management', slug: 'localization-management', description: 'Software and content localization', icon: '🗺️' },
      { name: 'Interpretation', slug: 'interpretation', description: 'Live interpretation platforms', icon: '🎧' },
    ]
  },
  {
    name: 'Accessibility & Assistive Tech',
    slug: 'accessibility-assistive',
    description: 'Accessibility and assistive technology',
    icon: '♿',
    subcategories: [
      { name: 'Screen Readers', slug: 'screen-readers', description: 'Visual accessibility tools', icon: '👁️' },
      { name: 'Captioning', slug: 'captioning', description: 'Video captioning and subtitles', icon: '📝' },
      { name: 'Mobility Aids', slug: 'mobility-aids', description: 'Mobility assistance technology', icon: '🦽' },
      { name: 'Communication Aids', slug: 'communication-aids', description: 'AAC and communication devices', icon: '💬' },
    ]
  },
  {
    name: 'Space & Satellite',
    slug: 'space-satellite',
    description: 'Space technology and satellite operations',
    icon: '🛰️',
    subcategories: [
      { name: 'Satellite Operations', slug: 'satellite-operations', description: 'Satellite control and monitoring', icon: '📡' },
      { name: 'Space Mission Planning', slug: 'space-mission', description: 'Mission design and planning', icon: '🚀' },
      { name: 'Ground Station', slug: 'ground-station', description: 'Ground station management', icon: '🗼' },
      { name: 'Space Data Analysis', slug: 'space-data', description: 'Satellite data processing', icon: '📊' },
    ]
  },
  {
    name: 'Weather & Climate',
    slug: 'weather-climate',
    description: 'Weather forecasting and climate monitoring',
    icon: '🌤️',
    subcategories: [
      { name: 'Weather Forecasting', slug: 'weather-forecasting', description: 'Meteorological prediction tools', icon: '⛈️' },
      { name: 'Climate Modeling', slug: 'climate-modeling', description: 'Climate simulation software', icon: '🌍' },
      { name: 'Weather Stations', slug: 'weather-stations', description: 'Weather monitoring equipment', icon: '🌡️' },
      { name: 'Storm Tracking', slug: 'storm-tracking', description: 'Hurricane and storm monitoring', icon: '🌪️' },
    ]
  },
  {
    name: 'Disaster Management',
    slug: 'disaster-management',
    description: 'Emergency response and disaster recovery',
    icon: '🚨',
    subcategories: [
      { name: 'Emergency Response', slug: 'emergency-response', description: 'Crisis management systems', icon: '🚑' },
      { name: 'Evacuation Planning', slug: 'evacuation-planning', description: 'Evacuation route planning', icon: '🚪' },
      { name: 'Resource Coordination', slug: 'resource-coordination', description: 'Emergency resource management', icon: '📦' },
      { name: 'Recovery Management', slug: 'recovery-management', description: 'Disaster recovery planning', icon: '🔄' },
    ]
  },
  {
    name: 'Robotics & Automation',
    slug: 'robotics-automation',
    description: 'Robotics systems and industrial automation',
    icon: '🤖',
    subcategories: [
      { name: 'Robot Control', slug: 'robot-control', description: 'Robotic control systems', icon: '🎮' },
      { name: 'Industrial Automation', slug: 'industrial-automation', description: 'Factory automation platforms', icon: '🏭' },
      { name: 'Robot Simulation', slug: 'robot-simulation', description: 'Robotics simulation software', icon: '💻' },
      { name: 'Collaborative Robots', slug: 'collaborative-robots', description: 'Cobot programming and control', icon: '🤝' },
    ]
  },
  {
    name: 'Drones & UAV',
    slug: 'drones-uav',
    description: 'Drone operations and unmanned aerial vehicles',
    icon: '🚁',
    subcategories: [
      { name: 'Flight Planning', slug: 'drone-flight-planning', description: 'Drone mission planning', icon: '🗺️' },
      { name: 'Fleet Management', slug: 'drone-fleet', description: 'Drone fleet operations', icon: '📊' },
      { name: 'Data Processing', slug: 'drone-data', description: 'Aerial imagery processing', icon: '📸' },
      { name: 'Delivery Systems', slug: 'drone-delivery', description: 'Drone delivery platforms', icon: '📦' },
    ]
  },
  {
    name: 'Virtual & Augmented Reality',
    slug: 'vr-ar',
    description: 'VR, AR, and mixed reality platforms',
    icon: '🥽',
    subcategories: [
      { name: 'VR Development', slug: 'vr-development', description: 'Virtual reality development tools', icon: '🎮' },
      { name: 'AR Applications', slug: 'ar-applications', description: 'Augmented reality platforms', icon: '📱' },
      { name: 'Mixed Reality', slug: 'mixed-reality', description: 'MR and spatial computing', icon: '🌐' },
      { name: 'VR Training', slug: 'vr-training', description: 'Virtual reality training systems', icon: '🎓' },
    ]
  },
  {
    name: 'Quantum Computing',
    slug: 'quantum-computing',
    description: 'Quantum computing platforms and tools',
    icon: '⚛️',
    subcategories: [
      { name: 'Quantum Development', slug: 'quantum-development', description: 'Quantum programming tools', icon: '💻' },
      { name: 'Quantum Simulation', slug: 'quantum-simulation', description: 'Quantum algorithm simulation', icon: '🔬' },
      { name: 'Cloud Quantum', slug: 'cloud-quantum', description: 'Cloud-based quantum computing', icon: '☁️' },
      { name: 'Quantum Optimization', slug: 'quantum-optimization', description: 'Quantum optimization solvers', icon: '📊' },
    ]
  },
  {
    name: 'Nanotechnology',
    slug: 'nanotechnology',
    description: 'Nanoscale research and manufacturing',
    icon: '🔬',
    subcategories: [
      { name: 'Nano Simulation', slug: 'nano-simulation', description: 'Molecular dynamics simulation', icon: '⚛️' },
      { name: 'Nano Fabrication', slug: 'nano-fabrication', description: 'Nanofabrication tools', icon: '🏭' },
      { name: 'Characterization', slug: 'nano-characterization', description: 'Nanomaterial analysis', icon: '🔍' },
      { name: 'Research Management', slug: 'nano-research', description: 'Nanotech research platforms', icon: '📚' },
    ]
  },
  {
    name: 'Bioinformatics',
    slug: 'bioinformatics',
    description: 'Computational biology and genomics',
    icon: '🧬',
    subcategories: [
      { name: 'Genome Analysis', slug: 'genome-analysis', description: 'DNA sequencing and analysis', icon: '🔬' },
      { name: 'Protein Modeling', slug: 'protein-modeling', description: 'Protein structure prediction', icon: '🧪' },
      { name: 'Phylogenetics', slug: 'phylogenetics', description: 'Evolutionary analysis tools', icon: '🌳' },
      { name: 'Biodata Management', slug: 'biodata-management', description: 'Biological data repositories', icon: '💾' },
    ]
  },
  {
    name: 'Neuroscience & Brain Tech',
    slug: 'neuroscience-brain',
    description: 'Neuroscience research and brain-computer interfaces',
    icon: '🧠',
    subcategories: [
      { name: 'Brain Imaging', slug: 'brain-imaging', description: 'fMRI and neuroimaging analysis', icon: '🔬' },
      { name: 'BCI Systems', slug: 'bci-systems', description: 'Brain-computer interfaces', icon: '🎮' },
      { name: 'Neural Analysis', slug: 'neural-analysis', description: 'Neural data analysis tools', icon: '📊' },
      { name: 'Cognitive Assessment', slug: 'cognitive-assessment', description: 'Cognitive testing platforms', icon: '🧩' },
    ]
  },
  {
    name: 'Renewable Energy Tech',
    slug: 'renewable-energy-tech',
    description: 'Solar, wind, and renewable energy systems',
    icon: '☀️',
    subcategories: [
      { name: 'Solar Management', slug: 'solar-management', description: 'Solar farm monitoring', icon: '🌞' },
      { name: 'Wind Energy', slug: 'wind-energy', description: 'Wind turbine management', icon: '💨' },
      { name: 'Energy Storage', slug: 'energy-storage', description: 'Battery and storage systems', icon: '🔋' },
      { name: 'Grid Integration', slug: 'grid-integration', description: 'Renewable grid management', icon: '⚡' },
    ]
  },
  {
    name: 'Electric Vehicles',
    slug: 'electric-vehicles',
    description: 'EV charging and fleet management',
    icon: '🔌',
    subcategories: [
      { name: 'Charging Networks', slug: 'ev-charging', description: 'EV charging station management', icon: '⚡' },
      { name: 'Fleet Management', slug: 'ev-fleet', description: 'Electric vehicle fleet tracking', icon: '🚗' },
      { name: 'Battery Management', slug: 'battery-management', description: 'EV battery monitoring', icon: '🔋' },
      { name: 'Route Optimization', slug: 'ev-routing', description: 'EV route and charging planning', icon: '🗺️' },
    ]
  },
  {
    name: 'Smart Cities',
    slug: 'smart-cities',
    description: 'Urban planning and smart city infrastructure',
    icon: '🏙️',
    subcategories: [
      { name: 'Urban Planning', slug: 'urban-planning', description: 'City planning and design tools', icon: '🗺️' },
      { name: 'Traffic Management', slug: 'traffic-management', description: 'Smart traffic control systems', icon: '🚦' },
      { name: 'Public Safety', slug: 'public-safety', description: 'City surveillance and safety', icon: '👮' },
      { name: 'Infrastructure Monitoring', slug: 'infrastructure-monitoring', description: 'City infrastructure sensors', icon: '🏗️' },
    ]
  },
  {
    name: 'Geospatial & GIS',
    slug: 'geospatial-gis',
    description: 'Geographic information systems and mapping',
    icon: '🗺️',
    subcategories: [
      { name: 'GIS Software', slug: 'gis-software', description: 'Geographic information systems', icon: '🌍' },
      { name: 'Remote Sensing', slug: 'remote-sensing', description: 'Satellite imagery analysis', icon: '🛰️' },
      { name: 'Mapping Tools', slug: 'mapping-tools', description: 'Digital mapping platforms', icon: '🗺️' },
      { name: 'Spatial Analysis', slug: 'spatial-analysis', description: 'Geospatial data analysis', icon: '📊' },
    ]
  },
  {
    name: 'Archaeology & Heritage',
    slug: 'archaeology-heritage',
    description: 'Archaeological research and heritage preservation',
    icon: '🏛️',
    subcategories: [
      { name: 'Site Documentation', slug: 'site-documentation', description: 'Archaeological site recording', icon: '📸' },
      { name: 'Artifact Management', slug: 'artifact-management', description: 'Artifact cataloging systems', icon: '🏺' },
      { name: '3D Reconstruction', slug: '3d-reconstruction', description: 'Heritage 3D modeling', icon: '🖥️' },
      { name: 'Conservation', slug: 'heritage-conservation', description: 'Heritage preservation tools', icon: '🛡️' },
    ]
  },
  {
    name: 'Astronomy & Astrophysics',
    slug: 'astronomy-astrophysics',
    description: 'Astronomical research and observation',
    icon: '🔭',
    subcategories: [
      { name: 'Telescope Control', slug: 'telescope-control', description: 'Observatory automation', icon: '🔭' },
      { name: 'Data Analysis', slug: 'astro-data-analysis', description: 'Astronomical data processing', icon: '📊' },
      { name: 'Planetarium Software', slug: 'planetarium-software', description: 'Sky simulation and visualization', icon: '🌌' },
      { name: 'Observation Planning', slug: 'observation-planning', description: 'Astronomical observation scheduling', icon: '📅' },
    ]
  },
  {
    name: 'Oceanography & Marine Science',
    slug: 'oceanography-marine',
    description: 'Ocean research and marine biology',
    icon: '🌊',
    subcategories: [
      { name: 'Ocean Monitoring', slug: 'ocean-monitoring', description: 'Oceanographic data collection', icon: '📡' },
      { name: 'Marine Biology', slug: 'marine-biology', description: 'Marine species research tools', icon: '🐠' },
      { name: 'Underwater Robotics', slug: 'underwater-robotics', description: 'ROV and AUV systems', icon: '🤖' },
      { name: 'Ocean Modeling', slug: 'ocean-modeling', description: 'Ocean current simulation', icon: '🌊' },
    ]
  },
  {
    name: 'Seismology & Geology',
    slug: 'seismology-geology',
    description: 'Earthquake monitoring and geological research',
    icon: '🌋',
    subcategories: [
      { name: 'Seismic Monitoring', slug: 'seismic-monitoring', description: 'Earthquake detection systems', icon: '📊' },
      { name: 'Geological Mapping', slug: 'geological-mapping', description: 'Geological survey tools', icon: '🗺️' },
      { name: 'Subsurface Imaging', slug: 'subsurface-imaging', description: 'Ground penetrating radar', icon: '🔬' },
      { name: 'Hazard Assessment', slug: 'hazard-assessment', description: 'Geological risk analysis', icon: '⚠️' },
    ]
  },
  {
    name: 'Meteorology & Atmospheric Science',
    slug: 'meteorology-atmospheric',
    description: 'Atmospheric research and weather science',
    icon: '🌡️',
    subcategories: [
      { name: 'Atmospheric Modeling', slug: 'atmospheric-modeling', description: 'Atmosphere simulation tools', icon: '🌍' },
      { name: 'Air Quality', slug: 'air-quality', description: 'Air pollution monitoring', icon: '💨' },
      { name: 'Radar Systems', slug: 'weather-radar', description: 'Weather radar analysis', icon: '📡' },
      { name: 'Climate Research', slug: 'climate-research', description: 'Climate science platforms', icon: '🔬' },
    ]
  },
  {
    name: 'Nuclear Energy',
    slug: 'nuclear-energy',
    description: 'Nuclear power plant operations and safety',
    icon: '☢️',
    subcategories: [
      { name: 'Plant Operations', slug: 'nuclear-operations', description: 'Nuclear facility management', icon: '🏭' },
      { name: 'Safety Systems', slug: 'nuclear-safety', description: 'Radiation monitoring and safety', icon: '⚠️' },
      { name: 'Waste Management', slug: 'nuclear-waste', description: 'Nuclear waste tracking', icon: '♻️' },
      { name: 'Compliance', slug: 'nuclear-compliance', description: 'Regulatory compliance tools', icon: '📋' },
    ]
  },
  {
    name: 'Logistics & Supply Chain Tech',
    slug: 'logistics-supply-tech',
    description: 'Advanced logistics and supply chain optimization',
    icon: '📦',
    subcategories: [
      { name: 'Last Mile Delivery', slug: 'last-mile-delivery', description: 'Final delivery optimization', icon: '🚚' },
      { name: 'Cross-Border Logistics', slug: 'cross-border-logistics', description: 'International shipping management', icon: '🌍' },
      { name: 'Cold Chain', slug: 'cold-chain', description: 'Temperature-controlled logistics', icon: '❄️' },
      { name: 'Reverse Logistics', slug: 'reverse-logistics', description: 'Returns and reverse supply chain', icon: '🔄' },
    ]
  },
  {
    name: 'Packaging & Labeling',
    slug: 'packaging-labeling',
    description: 'Packaging design and labeling systems',
    icon: '📦',
    subcategories: [
      { name: 'Package Design', slug: 'package-design', description: 'Packaging design software', icon: '🎨' },
      { name: 'Label Printing', slug: 'label-printing', description: 'Label design and printing', icon: '🏷️' },
      { name: 'Barcode Systems', slug: 'barcode-systems', description: 'Barcode generation and scanning', icon: '📊' },
      { name: 'Compliance Labeling', slug: 'compliance-labeling', description: 'Regulatory label compliance', icon: '✅' },
    ]
  },
  {
    name: 'Quality Assurance & Testing',
    slug: 'quality-assurance-testing',
    description: 'Quality control and product testing',
    icon: '✅',
    subcategories: [
      { name: 'Test Management', slug: 'test-management', description: 'QA test case management', icon: '📋' },
      { name: 'Automated Testing', slug: 'automated-testing', description: 'Test automation platforms', icon: '🤖' },
      { name: 'Defect Tracking', slug: 'defect-tracking', description: 'Bug and defect management', icon: '🐛' },
      { name: 'Performance Testing', slug: 'performance-testing', description: 'Load and performance testing', icon: '⚡' },
    ]
  },
  {
    name: 'Calibration & Metrology',
    slug: 'calibration-metrology',
    description: 'Measurement and calibration systems',
    icon: '📏',
    subcategories: [
      { name: 'Calibration Management', slug: 'calibration-management', description: 'Equipment calibration tracking', icon: '🔧' },
      { name: 'Measurement Systems', slug: 'measurement-systems', description: 'Precision measurement tools', icon: '📐' },
      { name: 'Standards Compliance', slug: 'standards-compliance', description: 'Metrology standards tracking', icon: '✅' },
      { name: 'Certificate Management', slug: 'certificate-management', description: 'Calibration certificate tracking', icon: '📜' },
    ]
  },
  {
    name: 'Intellectual Property',
    slug: 'intellectual-property',
    description: 'Patent and IP management systems',
    icon: '©️',
    subcategories: [
      { name: 'Patent Management', slug: 'patent-management', description: 'Patent portfolio management', icon: '📄' },
      { name: 'Trademark Management', slug: 'trademark-management', description: 'Trademark tracking and filing', icon: '™️' },
      { name: 'IP Analytics', slug: 'ip-analytics', description: 'Patent analytics and research', icon: '📊' },
      { name: 'Licensing', slug: 'ip-licensing', description: 'IP licensing management', icon: '🤝' },
    ]
  },
  {
    name: 'Franchising',
    slug: 'franchising',
    description: 'Franchise management and operations',
    icon: '🏪',
    subcategories: [
      { name: 'Franchise Management', slug: 'franchise-management', description: 'Multi-location franchise ops', icon: '🏢' },
      { name: 'Royalty Tracking', slug: 'royalty-tracking', description: 'Franchise fee management', icon: '💰' },
      { name: 'Compliance', slug: 'franchise-compliance', description: 'Franchise agreement compliance', icon: '📋' },
      { name: 'Training Systems', slug: 'franchise-training', description: 'Franchisee training platforms', icon: '🎓' },
    ]
  },
  {
    name: 'Coworking & Shared Spaces',
    slug: 'coworking-spaces',
    description: 'Coworking space and flexible office management',
    icon: '🏢',
    subcategories: [
      { name: 'Space Management', slug: 'space-management', description: 'Desk and room booking', icon: '🪑' },
      { name: 'Member Management', slug: 'coworking-members', description: 'Membership and billing', icon: '👥' },
      { name: 'Access Control', slug: 'coworking-access', description: 'Smart access and security', icon: '🔐' },
      { name: 'Community Platform', slug: 'community-platform', description: 'Member networking tools', icon: '🤝' },
    ]
  },
  {
    name: 'Rental & Leasing',
    slug: 'rental-leasing',
    description: 'Equipment and asset rental management',
    icon: '🔑',
    subcategories: [
      { name: 'Equipment Rental', slug: 'equipment-rental', description: 'Rental inventory management', icon: '🛠️' },
      { name: 'Vehicle Leasing', slug: 'vehicle-leasing', description: 'Car and vehicle rental systems', icon: '🚗' },
      { name: 'Contract Management', slug: 'lease-contracts', description: 'Lease agreement management', icon: '📄' },
      { name: 'Maintenance Tracking', slug: 'rental-maintenance', description: 'Rental asset maintenance', icon: '🔧' },
    ]
  },
  {
    name: 'Pawn & Resale',
    slug: 'pawn-resale',
    description: 'Pawn shop and resale business management',
    icon: '💍',
    subcategories: [
      { name: 'Pawn Management', slug: 'pawn-management', description: 'Pawn shop operations', icon: '🏪' },
      { name: 'Inventory Tracking', slug: 'pawn-inventory', description: 'Collateral and inventory tracking', icon: '📦' },
      { name: 'Loan Management', slug: 'pawn-loans', description: 'Pawn loan processing', icon: '💰' },
      { name: 'Compliance', slug: 'pawn-compliance', description: 'Regulatory compliance tracking', icon: '✅' },
    ]
  },
  {
    name: 'Timeshare & Vacation Rentals',
    slug: 'timeshare-vacation',
    description: 'Timeshare and vacation property management',
    icon: '🏖️',
    subcategories: [
      { name: 'Booking Management', slug: 'vacation-booking', description: 'Vacation rental reservations', icon: '📅' },
      { name: 'Property Management', slug: 'vacation-property', description: 'Multi-property management', icon: '🏠' },
      { name: 'Channel Management', slug: 'channel-management', description: 'Multi-platform listing sync', icon: '🌐' },
      { name: 'Guest Communication', slug: 'guest-communication', description: 'Automated guest messaging', icon: '💬' },
    ]
  },
  {
    name: 'Moving & Relocation',
    slug: 'moving-relocation',
    description: 'Moving company and relocation services',
    icon: '🚚',
    subcategories: [
      { name: 'Move Management', slug: 'move-management', description: 'Moving job coordination', icon: '📋' },
      { name: 'Inventory Tracking', slug: 'moving-inventory', description: 'Item tracking and cataloging', icon: '📦' },
      { name: 'Route Planning', slug: 'moving-routing', description: 'Moving truck routing', icon: '🗺️' },
      { name: 'Claims Management', slug: 'moving-claims', description: 'Damage claims processing', icon: '📝' },
    ]
  },
  {
    name: 'Self Storage',
    slug: 'self-storage',
    description: 'Storage facility management systems',
    icon: '🏢',
    subcategories: [
      { name: 'Facility Management', slug: 'storage-facility', description: 'Storage unit management', icon: '🏪' },
      { name: 'Access Control', slug: 'storage-access', description: 'Gate and unit access systems', icon: '🔐' },
      { name: 'Billing & Payments', slug: 'storage-billing', description: 'Automated billing systems', icon: '💳' },
      { name: 'Auctions', slug: 'storage-auctions', description: 'Delinquent unit auctions', icon: '🔨' },
    ]
  },
  {
    name: 'Courier & Delivery',
    slug: 'courier-delivery',
    description: 'Courier services and delivery management',
    icon: '📮',
    subcategories: [
      { name: 'Dispatch Management', slug: 'courier-dispatch', description: 'Courier dispatch systems', icon: '📡' },
      { name: 'Route Optimization', slug: 'courier-routing', description: 'Delivery route planning', icon: '🗺️' },
      { name: 'Proof of Delivery', slug: 'proof-delivery', description: 'Digital signature and POD', icon: '✍️' },
      { name: 'Tracking Systems', slug: 'courier-tracking', description: 'Real-time package tracking', icon: '📍' },
    ]
  },
  {
    name: 'Towing & Roadside',
    slug: 'towing-roadside',
    description: 'Towing and roadside assistance management',
    icon: '🚗',
    subcategories: [
      { name: 'Dispatch Systems', slug: 'towing-dispatch', description: 'Tow truck dispatch', icon: '📞' },
      { name: 'Fleet Management', slug: 'towing-fleet', description: 'Tow truck fleet tracking', icon: '🚛' },
      { name: 'Impound Management', slug: 'impound-management', description: 'Impound lot operations', icon: '🅿️' },
      { name: 'Billing & Invoicing', slug: 'towing-billing', description: 'Towing service billing', icon: '💵' },
    ]
  },
  {
    name: 'Locksmith Services',
    slug: 'locksmith-services',
    description: 'Locksmith business management',
    icon: '🔑',
    subcategories: [
      { name: 'Job Management', slug: 'locksmith-jobs', description: 'Service call management', icon: '📋' },
      { name: 'Key Tracking', slug: 'key-tracking', description: 'Key cutting and inventory', icon: '🔑' },
      { name: 'Mobile Dispatch', slug: 'locksmith-dispatch', description: 'Mobile locksmith dispatch', icon: '🚗' },
      { name: 'Security Systems', slug: 'locksmith-security', description: 'Lock and security installation', icon: '🔐' },
    ]
  },
  {
    name: 'Appliance Repair',
    slug: 'appliance-repair',
    description: 'Appliance repair service management',
    icon: '🔧',
    subcategories: [
      { name: 'Service Management', slug: 'appliance-service', description: 'Repair job scheduling', icon: '📅' },
      { name: 'Parts Inventory', slug: 'appliance-parts', description: 'Spare parts management', icon: '📦' },
      { name: 'Technician Dispatch', slug: 'appliance-dispatch', description: 'Field technician routing', icon: '🚐' },
      { name: 'Warranty Tracking', slug: 'warranty-tracking', description: 'Warranty and service history', icon: '📜' },
    ]
  },
  {
    name: 'HVAC & Plumbing',
    slug: 'hvac-plumbing',
    description: 'HVAC and plumbing service management',
    icon: '🔧',
    subcategories: [
      { name: 'Service Scheduling', slug: 'hvac-scheduling', description: 'Maintenance and repair scheduling', icon: '📅' },
      { name: 'Equipment Tracking', slug: 'hvac-equipment', description: 'HVAC system tracking', icon: '🌡️' },
      { name: 'Estimates & Quotes', slug: 'hvac-estimates', description: 'Job estimation tools', icon: '💰' },
      { name: 'Maintenance Plans', slug: 'maintenance-plans', description: 'Recurring maintenance contracts', icon: '📋' },
    ]
  },
  {
    name: 'Electrical Services',
    slug: 'electrical-services',
    description: 'Electrical contractor management',
    icon: '⚡',
    subcategories: [
      { name: 'Job Management', slug: 'electrical-jobs', description: 'Electrical project management', icon: '📋' },
      { name: 'Code Compliance', slug: 'electrical-compliance', description: 'Electrical code compliance', icon: '✅' },
      { name: 'Material Management', slug: 'electrical-materials', description: 'Electrical supplies inventory', icon: '📦' },
      { name: 'Inspection Tracking', slug: 'inspection-tracking', description: 'Electrical inspection management', icon: '🔍' },
    ]
  },
  {
    name: 'Telecommunications',
    slug: 'telecommunications',
    description: 'Telecom infrastructure and services',
    icon: '📡',
    subcategories: [
      { name: 'Network Planning', slug: 'telecom-network-planning', description: 'Telecom network design', icon: '🗺️' },
      { name: 'Tower Management', slug: 'tower-management', description: 'Cell tower operations', icon: '🗼' },
      { name: 'Fiber Optics', slug: 'fiber-optics', description: 'Fiber network management', icon: '💡' },
      { name: 'Billing Systems', slug: 'telecom-billing', description: 'Telecom billing platforms', icon: '💰' },
    ]
  },
  {
    name: 'Broadcasting & Media',
    slug: 'broadcasting-media',
    description: 'TV, radio, and streaming production',
    icon: '📺',
    subcategories: [
      { name: 'Broadcast Automation', slug: 'broadcast-automation', description: 'TV/radio automation systems', icon: '🤖' },
      { name: 'Live Production', slug: 'live-production', description: 'Live broadcast tools', icon: '🎬' },
      { name: 'Media Asset Management', slug: 'media-asset-management', description: 'Content library management', icon: '📚' },
      { name: 'Streaming Platforms', slug: 'streaming-platforms', description: 'Video streaming infrastructure', icon: '📡' },
    ]
  },
  {
    name: 'Publishing & Print',
    slug: 'publishing-print',
    description: 'Publishing and printing industry tools',
    icon: '📰',
    subcategories: [
      { name: 'Editorial Management', slug: 'editorial-management', description: 'Content editorial systems', icon: '✍️' },
      { name: 'Print Production', slug: 'print-production', description: 'Print workflow management', icon: '🖨️' },
      { name: 'Digital Publishing', slug: 'digital-publishing', description: 'E-book and digital content', icon: '📱' },
      { name: 'Subscription Management', slug: 'publishing-subscriptions', description: 'Publication subscriber systems', icon: '📬' },
    ]
  },
  {
    name: 'Photography & Video',
    slug: 'photography-video',
    description: 'Professional photography and videography',
    icon: '📸',
    subcategories: [
      { name: 'Photo Editing', slug: 'photo-editing-pro', description: 'Professional photo editing', icon: '🎨' },
      { name: 'Video Editing', slug: 'video-editing-pro', description: 'Professional video editing', icon: '🎬' },
      { name: 'Studio Management', slug: 'studio-management', description: 'Photography studio operations', icon: '🏢' },
      { name: 'Client Galleries', slug: 'client-galleries', description: 'Photo delivery platforms', icon: '🖼️' },
    ]
  },
  {
    name: 'Music Production',
    slug: 'music-production',
    description: 'Music creation and production tools',
    icon: '🎵',
    subcategories: [
      { name: 'DAW Software', slug: 'daw-software', description: 'Digital audio workstations', icon: '🎹' },
      { name: 'Audio Plugins', slug: 'audio-plugins', description: 'VST and audio effects', icon: '🎛️' },
      { name: 'Music Distribution', slug: 'music-distribution', description: 'Music release platforms', icon: '📀' },
      { name: 'Collaboration Tools', slug: 'music-collaboration', description: 'Remote music collaboration', icon: '🤝' },
    ]
  },
  {
    name: 'Gaming & Esports',
    slug: 'gaming-esports',
    description: 'Gaming industry and esports management',
    icon: '🎮',
    subcategories: [
      { name: 'Game Development', slug: 'game-development', description: 'Game engines and dev tools', icon: '🕹️' },
      { name: 'Tournament Management', slug: 'tournament-management', description: 'Esports tournament platforms', icon: '🏆' },
      { name: 'Streaming Tools', slug: 'gaming-streaming', description: 'Game streaming software', icon: '📹' },
      { name: 'Community Management', slug: 'gaming-community', description: 'Gaming community platforms', icon: '👥' },
    ]
  },
  {
    name: 'Animation & VFX',
    slug: 'animation-vfx',
    description: '3D animation and visual effects',
    icon: '🎬',
    subcategories: [
      { name: '3D Animation', slug: '3d-animation', description: '3D animation software', icon: '🎭' },
      { name: 'Motion Graphics', slug: 'motion-graphics', description: 'Motion design tools', icon: '🌀' },
      { name: 'VFX Compositing', slug: 'vfx-compositing', description: 'Visual effects compositing', icon: '✨' },
      { name: 'Rendering', slug: 'rendering-software', description: 'Render farm and engines', icon: '💻' },
    ]
  },
  {
    name: 'Architecture & CAD',
    slug: 'architecture-cad',
    description: 'Architectural design and CAD software',
    icon: '🏛️',
    subcategories: [
      { name: 'CAD Software', slug: 'cad-software', description: 'Computer-aided design', icon: '📐' },
      { name: 'BIM Tools', slug: 'bim-tools', description: 'Building information modeling', icon: '🏗️' },
      { name: 'Rendering & Visualization', slug: 'arch-rendering', description: 'Architectural rendering', icon: '🖼️' },
      { name: 'Project Collaboration', slug: 'arch-collaboration', description: 'Architecture team collaboration', icon: '👥' },
    ]
  },
  {
    name: 'Interior Design',
    slug: 'interior-design',
    description: 'Interior design and space planning',
    icon: '🛋️',
    subcategories: [
      { name: 'Space Planning', slug: 'space-planning', description: 'Room layout and planning', icon: '📏' },
      { name: '3D Visualization', slug: 'interior-3d', description: 'Interior 3D rendering', icon: '🏠' },
      { name: 'Material Selection', slug: 'material-selection', description: 'Material and finish libraries', icon: '🎨' },
      { name: 'Client Presentations', slug: 'interior-presentations', description: 'Design presentation tools', icon: '📊' },
    ]
  },
  {
    name: 'Landscaping & Outdoor',
    slug: 'landscaping-outdoor',
    description: 'Landscape design and outdoor services',
    icon: '🌳',
    subcategories: [
      { name: 'Landscape Design', slug: 'landscape-design', description: 'Outdoor space design tools', icon: '🏞️' },
      { name: 'Irrigation Planning', slug: 'irrigation-planning', description: 'Irrigation system design', icon: '💧' },
      { name: 'Maintenance Scheduling', slug: 'landscape-maintenance', description: 'Landscape service scheduling', icon: '📅' },
      { name: 'Plant Selection', slug: 'plant-selection', description: 'Plant database and selection', icon: '🌿' },
    ]
  },
  {
    name: 'Pest Control',
    slug: 'pest-control',
    description: 'Pest management and extermination',
    icon: '🐛',
    subcategories: [
      { name: 'Service Routing', slug: 'pest-routing', description: 'Pest control route optimization', icon: '🗺️' },
      { name: 'Treatment Tracking', slug: 'treatment-tracking', description: 'Pest treatment records', icon: '📋' },
      { name: 'Chemical Management', slug: 'chemical-management', description: 'Pesticide inventory tracking', icon: '🧪' },
      { name: 'Customer Portal', slug: 'pest-customer-portal', description: 'Client communication platform', icon: '💬' },
    ]
  },
  {
    name: 'Cleaning Services',
    slug: 'cleaning-services',
    description: 'Commercial and residential cleaning',
    icon: '🧹',
    subcategories: [
      { name: 'Scheduling', slug: 'cleaning-scheduling', description: 'Cleaning appointment management', icon: '📅' },
      { name: 'Staff Management', slug: 'cleaning-staff', description: 'Cleaning crew coordination', icon: '👥' },
      { name: 'Quality Control', slug: 'cleaning-quality', description: 'Cleaning inspection checklists', icon: '✅' },
      { name: 'Invoicing', slug: 'cleaning-invoicing', description: 'Cleaning service billing', icon: '💰' },
    ]
  },
  {
    name: 'Security Services',
    slug: 'security-services',
    description: 'Security guard and patrol services',
    icon: '🛡️',
    subcategories: [
      { name: 'Guard Management', slug: 'guard-management', description: 'Security personnel scheduling', icon: '👮' },
      { name: 'Patrol Tracking', slug: 'patrol-tracking', description: 'Security patrol monitoring', icon: '📍' },
      { name: 'Incident Reporting', slug: 'security-incidents', description: 'Security incident logs', icon: '📝' },
      { name: 'Access Control', slug: 'access-control', description: 'Building access management', icon: '🔐' },
    ]
  },
  {
    name: 'Waste Management',
    slug: 'waste-management',
    description: 'Waste collection and recycling services',
    icon: '♻️',
    subcategories: [
      { name: 'Route Optimization', slug: 'waste-routing', description: 'Waste collection routing', icon: '🚛' },
      { name: 'Fleet Tracking', slug: 'waste-fleet', description: 'Waste truck GPS tracking', icon: '📍' },
      { name: 'Recycling Management', slug: 'recycling-management', description: 'Recycling program tracking', icon: '♻️' },
      { name: 'Billing & Invoicing', slug: 'waste-billing', description: 'Waste service billing', icon: '💰' },
    ]
  },
  {
    name: 'Water & Utilities',
    slug: 'water-utilities',
    description: 'Water and utility management systems',
    icon: '💧',
    subcategories: [
      { name: 'Meter Reading', slug: 'meter-reading', description: 'Utility meter management', icon: '📊' },
      { name: 'Billing Systems', slug: 'utility-billing', description: 'Utility billing platforms', icon: '💰' },
      { name: 'Infrastructure Monitoring', slug: 'utility-infrastructure', description: 'Water system monitoring', icon: '🔧' },
      { name: 'Leak Detection', slug: 'leak-detection', description: 'Water leak detection systems', icon: '💦' },
    ]
  },
  {
    name: 'Funeral Services',
    slug: 'funeral-services',
    description: 'Funeral home management software',
    icon: '⚰️',
    subcategories: [
      { name: 'Arrangement Management', slug: 'funeral-arrangements', description: 'Funeral planning software', icon: '📋' },
      { name: 'Cremation Tracking', slug: 'cremation-tracking', description: 'Crematory management', icon: '🔥' },
      { name: 'Memorial Websites', slug: 'memorial-websites', description: 'Online obituary platforms', icon: '🌐' },
      { name: 'Accounting', slug: 'funeral-accounting', description: 'Funeral home accounting', icon: '💰' },
    ]
  },
  {
    name: 'Wedding Services',
    slug: 'wedding-services',
    description: 'Wedding planning and coordination',
    icon: '💍',
    subcategories: [
      { name: 'Planning Software', slug: 'wedding-planning', description: 'Wedding planning platforms', icon: '📅' },
      { name: 'Vendor Management', slug: 'wedding-vendors', description: 'Wedding vendor coordination', icon: '🤝' },
      { name: 'Guest Management', slug: 'wedding-guests', description: 'RSVP and guest tracking', icon: '👥' },
      { name: 'Registry Platforms', slug: 'wedding-registry', description: 'Wedding gift registries', icon: '🎁' },
    ]
  },
  {
    name: 'Event Production',
    slug: 'event-production',
    description: 'Event production and management',
    icon: '🎪',
    subcategories: [
      { name: 'Event Planning', slug: 'event-planning-pro', description: 'Professional event planning', icon: '📋' },
      { name: 'Ticketing Systems', slug: 'event-ticketing', description: 'Event ticket sales platforms', icon: '🎟️' },
      { name: 'Venue Management', slug: 'venue-management', description: 'Event venue operations', icon: '🏟️' },
      { name: 'AV Production', slug: 'av-production', description: 'Audio-visual production tools', icon: '🎬' },
    ]
  },
  {
    name: 'Catering Services',
    slug: 'catering-services',
    description: 'Catering and food service management',
    icon: '🍽️',
    subcategories: [
      { name: 'Menu Planning', slug: 'catering-menu', description: 'Catering menu management', icon: '📋' },
      { name: 'Order Management', slug: 'catering-orders', description: 'Catering order tracking', icon: '📦' },
      { name: 'Kitchen Production', slug: 'kitchen-production', description: 'Commercial kitchen management', icon: '👨‍🍳' },
      { name: 'Event Coordination', slug: 'catering-events', description: 'Catering event logistics', icon: '🎉' },
    ]
  },
  {
    name: 'Bakery & Pastry',
    slug: 'bakery-pastry',
    description: 'Bakery operations and management',
    icon: '🥐',
    subcategories: [
      { name: 'Recipe Management', slug: 'bakery-recipes', description: 'Bakery recipe databases', icon: '📖' },
      { name: 'Production Planning', slug: 'bakery-production', description: 'Baking production schedules', icon: '📅' },
      { name: 'Custom Orders', slug: 'bakery-custom-orders', description: 'Custom cake order systems', icon: '🎂' },
      { name: 'Inventory Control', slug: 'bakery-inventory', description: 'Bakery ingredient tracking', icon: '📦' },
    ]
  },
  {
    name: 'Coffee & Tea',
    slug: 'coffee-tea',
    description: 'Coffee shop and tea house management',
    icon: '☕',
    subcategories: [
      { name: 'POS Systems', slug: 'coffee-pos', description: 'Coffee shop point of sale', icon: '💳' },
      { name: 'Loyalty Programs', slug: 'coffee-loyalty', description: 'Customer loyalty platforms', icon: '🎁' },
      { name: 'Inventory Management', slug: 'coffee-inventory', description: 'Coffee bean and supply tracking', icon: '📦' },
      { name: 'Roasting Management', slug: 'coffee-roasting', description: 'Coffee roasting operations', icon: '🔥' },
    ]
  },
  {
    name: 'Bar & Nightclub',
    slug: 'bar-nightclub',
    description: 'Bar and nightclub operations',
    icon: '🍸',
    subcategories: [
      { name: 'POS Systems', slug: 'bar-pos', description: 'Bar point of sale systems', icon: '💳' },
      { name: 'Inventory Control', slug: 'bar-inventory', description: 'Liquor inventory management', icon: '🍾' },
      { name: 'Door Management', slug: 'door-management', description: 'Nightclub entry and security', icon: '🚪' },
      { name: 'Event Booking', slug: 'bar-events', description: 'Bar event management', icon: '🎉' },
    ]
  },
  {
    name: 'Brewery & Distillery',
    slug: 'brewery-distillery',
    description: 'Craft brewing and distilling operations',
    icon: '🍺',
    subcategories: [
      { name: 'Production Management', slug: 'brewing-production', description: 'Brewing batch tracking', icon: '🏭' },
      { name: 'Recipe Development', slug: 'brewing-recipes', description: 'Beer recipe management', icon: '📖' },
      { name: 'Distribution', slug: 'brewing-distribution', description: 'Brewery distribution management', icon: '🚚' },
      { name: 'Taproom POS', slug: 'taproom-pos', description: 'Taproom point of sale', icon: '💳' },
    ]
  },
  {
    name: 'Wine & Vineyard',
    slug: 'wine-vineyard',
    description: 'Winery and vineyard management',
    icon: '🍷',
    subcategories: [
      { name: 'Vineyard Management', slug: 'vineyard-management', description: 'Grape growing operations', icon: '🍇' },
      { name: 'Wine Production', slug: 'wine-production', description: 'Winemaking process tracking', icon: '🏭' },
      { name: 'Tasting Room', slug: 'tasting-room', description: 'Wine tasting room POS', icon: '🍷' },
      { name: 'Wine Club', slug: 'wine-club', description: 'Wine club membership management', icon: '👥' },
    ]
  },
  {
    name: 'Cannabis & Hemp',
    slug: 'cannabis-hemp',
    description: 'Cannabis cultivation and dispensary management',
    icon: '🌿',
    subcategories: [
      { name: 'Cultivation Management', slug: 'cannabis-cultivation', description: 'Cannabis growing operations', icon: '🌱' },
      { name: 'Dispensary POS', slug: 'dispensary-pos', description: 'Cannabis retail point of sale', icon: '💳' },
      { name: 'Compliance Tracking', slug: 'cannabis-compliance', description: 'Cannabis regulatory compliance', icon: '✅' },
      { name: 'Seed-to-Sale', slug: 'seed-to-sale', description: 'Cannabis supply chain tracking', icon: '📦' },
    ]
  },
  {
    name: 'Tobacco & Vape',
    slug: 'tobacco-vape',
    description: 'Tobacco and vape shop management',
    icon: '💨',
    subcategories: [
      { name: 'Retail Management', slug: 'tobacco-retail', description: 'Tobacco shop operations', icon: '🏪' },
      { name: 'Age Verification', slug: 'age-verification', description: 'Customer age verification systems', icon: '🆔' },
      { name: 'Inventory Tracking', slug: 'tobacco-inventory', description: 'Tobacco product inventory', icon: '📦' },
      { name: 'Compliance', slug: 'tobacco-compliance', description: 'Tobacco regulatory compliance', icon: '✅' },
    ]
  },
  {
    name: 'Jewelry & Watches',
    slug: 'jewelry-watches',
    description: 'Jewelry store and watchmaking tools',
    icon: '💎',
    subcategories: [
      { name: 'Inventory Management', slug: 'jewelry-inventory', description: 'Jewelry stock management', icon: '📦' },
      { name: 'Appraisal Software', slug: 'jewelry-appraisal', description: 'Jewelry valuation tools', icon: '💰' },
      { name: 'Repair Tracking', slug: 'jewelry-repair', description: 'Jewelry repair management', icon: '🔧' },
      { name: 'Custom Design', slug: 'jewelry-design', description: 'Custom jewelry CAD design', icon: '✨' },
    ]
  },
  {
    name: 'Pawn Shops',
    slug: 'pawn-shops',
    description: 'Pawn shop management systems',
    icon: '🏪',
    subcategories: [
      { name: 'Loan Management', slug: 'pawn-loans', description: 'Pawn loan tracking', icon: '💰' },
      { name: 'Inventory Control', slug: 'pawn-inventory', description: 'Pawn shop inventory', icon: '📦' },
      { name: 'Compliance Reporting', slug: 'pawn-compliance', description: 'Pawn shop regulatory compliance', icon: '📋' },
      { name: 'Customer Database', slug: 'pawn-customers', description: 'Pawn customer management', icon: '👥' },
    ]
  },
  {
    name: 'Auction Houses',
    slug: 'auction-houses',
    description: 'Auction management and bidding platforms',
    icon: '🔨',
    subcategories: [
      { name: 'Auction Management', slug: 'auction-management', description: 'Auction event planning', icon: '📅' },
      { name: 'Online Bidding', slug: 'online-bidding', description: 'Online auction platforms', icon: '💻' },
      { name: 'Catalog Management', slug: 'auction-catalog', description: 'Auction lot cataloging', icon: '📚' },
      { name: 'Payment Processing', slug: 'auction-payments', description: 'Auction payment systems', icon: '💳' },
    ]
  },
  {
    name: 'Antiques & Collectibles',
    slug: 'antiques-collectibles',
    description: 'Antique dealer and collectibles management',
    icon: '🏺',
    subcategories: [
      { name: 'Inventory Management', slug: 'antiques-inventory', description: 'Antique stock tracking', icon: '📦' },
      { name: 'Authentication', slug: 'antiques-authentication', description: 'Antique verification tools', icon: '🔍' },
      { name: 'Pricing Tools', slug: 'antiques-pricing', description: 'Antique valuation databases', icon: '💰' },
      { name: 'Online Marketplace', slug: 'antiques-marketplace', description: 'Antique selling platforms', icon: '🌐' },
    ]
  },
  {
    name: 'Art Galleries',
    slug: 'art-galleries',
    description: 'Art gallery and exhibition management',
    icon: '🖼️',
    subcategories: [
      { name: 'Collection Management', slug: 'art-collection', description: 'Art inventory management', icon: '🎨' },
      { name: 'Exhibition Planning', slug: 'exhibition-planning', description: 'Gallery exhibition tools', icon: '📅' },
      { name: 'Sales & Consignment', slug: 'art-sales', description: 'Art sales tracking', icon: '💰' },
      { name: 'Virtual Galleries', slug: 'virtual-galleries', description: 'Online art exhibitions', icon: '🌐' },
    ]
  },
  {
    name: 'Museums & Archives',
    slug: 'museums-archives',
    description: 'Museum collection and archive management',
    icon: '🏛️',
    subcategories: [
      { name: 'Collection Management', slug: 'museum-collection', description: 'Museum artifact databases', icon: '📚' },
      { name: 'Digital Archives', slug: 'digital-archives', description: 'Digital archival systems', icon: '💾' },
      { name: 'Visitor Management', slug: 'museum-visitors', description: 'Museum ticketing and tours', icon: '🎫' },
      { name: 'Conservation', slug: 'conservation-management', description: 'Artifact conservation tracking', icon: '🔬' },
    ]
  },
  {
    name: 'Libraries',
    slug: 'libraries',
    description: 'Library management systems',
    icon: '📚',
    subcategories: [
      { name: 'Catalog Systems', slug: 'library-catalog', description: 'Library cataloging software', icon: '📖' },
      { name: 'Circulation', slug: 'library-circulation', description: 'Book checkout systems', icon: '🔄' },
      { name: 'Digital Resources', slug: 'library-digital', description: 'E-book and digital lending', icon: '💻' },
      { name: 'Member Management', slug: 'library-members', description: 'Library membership systems', icon: '👥' },
    ]
  },
  {
    name: 'Bookstores',
    slug: 'bookstores',
    description: 'Bookstore management and retail',
    icon: '📖',
    subcategories: [
      { name: 'POS Systems', slug: 'bookstore-pos', description: 'Bookstore point of sale', icon: '💳' },
      { name: 'Inventory Management', slug: 'bookstore-inventory', description: 'Book stock management', icon: '📦' },
      { name: 'Online Store', slug: 'bookstore-online', description: 'Online book sales', icon: '🌐' },
      { name: 'Events & Readings', slug: 'bookstore-events', description: 'Author event management', icon: '🎤' },
    ]
  },
  {
    name: 'Comic & Game Stores',
    slug: 'comic-game-stores',
    description: 'Comic book and game shop management',
    icon: '🎮',
    subcategories: [
      { name: 'Inventory Management', slug: 'comic-inventory', description: 'Comic and game inventory', icon: '📦' },
      { name: 'Grading & Valuation', slug: 'comic-grading', description: 'Comic book grading tools', icon: '⭐' },
      { name: 'Tournament Management', slug: 'game-tournaments', description: 'Gaming tournament systems', icon: '🏆' },
      { name: 'Subscription Boxes', slug: 'comic-subscriptions', description: 'Comic subscription management', icon: '📬' },
    ]
  },
  {
    name: 'Toy Stores',
    slug: 'toy-stores',
    description: 'Toy retail and inventory management',
    icon: '🧸',
    subcategories: [
      { name: 'Retail Management', slug: 'toy-retail', description: 'Toy store operations', icon: '🏪' },
      { name: 'Inventory Tracking', slug: 'toy-inventory', description: 'Toy stock management', icon: '📦' },
      { name: 'Safety Compliance', slug: 'toy-safety', description: 'Toy safety regulations', icon: '✅' },
      { name: 'Online Sales', slug: 'toy-online', description: 'Toy e-commerce platforms', icon: '🌐' },
    ]
  },
  {
    name: 'Pet Stores & Services',
    slug: 'pet-stores-services',
    description: 'Pet retail and grooming services',
    icon: '🐾',
    subcategories: [
      { name: 'Retail Management', slug: 'pet-retail', description: 'Pet store operations', icon: '🏪' },
      { name: 'Grooming Scheduling', slug: 'pet-grooming', description: 'Pet grooming appointments', icon: '✂️' },
      { name: 'Boarding Management', slug: 'pet-boarding', description: 'Pet boarding operations', icon: '🏠' },
      { name: 'Veterinary Software', slug: 'pet-veterinary', description: 'Vet clinic management', icon: '🏥' },
    ]
  },
  {
    name: 'Aquarium & Marine',
    slug: 'aquarium-marine',
    description: 'Aquarium stores and marine services',
    icon: '🐠',
    subcategories: [
      { name: 'Livestock Management', slug: 'aquarium-livestock', description: 'Fish and coral inventory', icon: '🐟' },
      { name: 'Water Testing', slug: 'water-testing', description: 'Aquarium water quality tracking', icon: '💧' },
      { name: 'Maintenance Scheduling', slug: 'aquarium-maintenance', description: 'Tank maintenance services', icon: '🔧' },
      { name: 'Custom Builds', slug: 'aquarium-builds', description: 'Custom aquarium design', icon: '🏗️' },
    ]
  },
  {
    name: 'Garden Centers',
    slug: 'garden-centers',
    description: 'Garden center and nursery management',
    icon: '🌻',
    subcategories: [
      { name: 'Plant Inventory', slug: 'plant-inventory', description: 'Nursery stock management', icon: '🌱' },
      { name: 'Growing Schedules', slug: 'growing-schedules', description: 'Plant cultivation tracking', icon: '📅' },
      { name: 'Retail Operations', slug: 'garden-retail', description: 'Garden center POS', icon: '💳' },
      { name: 'Landscape Services', slug: 'garden-landscape', description: 'Landscape design services', icon: '🏞️' },
    ]
  },
  {
    name: 'Florists',
    slug: 'florists',
    description: 'Florist shop management and delivery',
    icon: '💐',
    subcategories: [
      { name: 'Order Management', slug: 'florist-orders', description: 'Flower order tracking', icon: '📋' },
      { name: 'Delivery Routing', slug: 'florist-delivery', description: 'Flower delivery logistics', icon: '🚚' },
      { name: 'Event Planning', slug: 'florist-events', description: 'Wedding and event florals', icon: '💒' },
      { name: 'Inventory Control', slug: 'florist-inventory', description: 'Flower stock management', icon: '🌹' },
    ]
  },
  {
    name: 'Tattoo & Piercing',
    slug: 'tattoo-piercing',
    description: 'Tattoo studio and piercing shop management',
    icon: '💉',
    subcategories: [
      { name: 'Appointment Booking', slug: 'tattoo-booking', description: 'Tattoo appointment scheduling', icon: '📅' },
      { name: 'Design Portfolio', slug: 'tattoo-portfolio', description: 'Artist portfolio management', icon: '🎨' },
      { name: 'Consent Forms', slug: 'tattoo-consent', description: 'Digital consent and waivers', icon: '📝' },
      { name: 'Aftercare Tracking', slug: 'tattoo-aftercare', description: 'Client aftercare management', icon: '💊' },
    ]
  },
  {
    name: 'Barber Shops',
    slug: 'barber-shops',
    description: 'Barbershop management and booking',
    icon: '💈',
    subcategories: [
      { name: 'Appointment Scheduling', slug: 'barber-scheduling', description: 'Barber booking systems', icon: '📅' },
      { name: 'POS Systems', slug: 'barber-pos', description: 'Barbershop point of sale', icon: '💳' },
      { name: 'Staff Management', slug: 'barber-staff', description: 'Barber scheduling and payroll', icon: '👥' },
      { name: 'Membership Programs', slug: 'barber-membership', description: 'Barber club memberships', icon: '🎫' },
    ]
  },
  {
    name: 'Nail Salons',
    slug: 'nail-salons',
    description: 'Nail salon management and booking',
    icon: '💅',
    subcategories: [
      { name: 'Booking Systems', slug: 'nail-booking', description: 'Nail appointment scheduling', icon: '📅' },
      { name: 'Service Menu', slug: 'nail-services', description: 'Nail service management', icon: '📋' },
      { name: 'Inventory Tracking', slug: 'nail-inventory', description: 'Nail polish and supply tracking', icon: '💄' },
      { name: 'Client Records', slug: 'nail-clients', description: 'Client preference tracking', icon: '📝' },
    ]
  },
  {
    name: 'Tanning Salons',
    slug: 'tanning-salons',
    description: 'Tanning salon management systems',
    icon: '☀️',
    subcategories: [
      { name: 'Bed Scheduling', slug: 'tanning-scheduling', description: 'Tanning bed booking', icon: '📅' },
      { name: 'Membership Management', slug: 'tanning-membership', description: 'Tanning package tracking', icon: '🎫' },
      { name: 'Equipment Maintenance', slug: 'tanning-equipment', description: 'Tanning bed maintenance', icon: '🔧' },
      { name: 'Compliance Tracking', slug: 'tanning-compliance', description: 'Tanning safety regulations', icon: '✅' },
    ]
  },
  {
    name: 'Massage & Bodywork',
    slug: 'massage-bodywork',
    description: 'Massage therapy and bodywork practices',
    icon: '💆',
    subcategories: [
      { name: 'Appointment Booking', slug: 'massage-booking', description: 'Massage scheduling systems', icon: '📅' },
      { name: 'Client Records', slug: 'massage-records', description: 'Client health history tracking', icon: '📋' },
      { name: 'Billing & Insurance', slug: 'massage-billing', description: 'Massage therapy billing', icon: '💰' },
      { name: 'Room Management', slug: 'massage-rooms', description: 'Treatment room scheduling', icon: '🚪' },
    ]
  },
  {
    name: 'Yoga & Pilates',
    slug: 'yoga-pilates',
    description: 'Yoga studio and Pilates management',
    icon: '🧘',
    subcategories: [
      { name: 'Class Scheduling', slug: 'yoga-scheduling', description: 'Yoga class management', icon: '📅' },
      { name: 'Membership Management', slug: 'yoga-membership', description: 'Studio membership systems', icon: '🎫' },
      { name: 'Instructor Management', slug: 'yoga-instructors', description: 'Instructor scheduling and pay', icon: '👥' },
      { name: 'Online Classes', slug: 'yoga-online', description: 'Virtual yoga platforms', icon: '💻' },
    ]
  },
  {
    name: 'Martial Arts',
    slug: 'martial-arts',
    description: 'Martial arts school management',
    icon: '🥋',
    subcategories: [
      { name: 'Student Management', slug: 'martial-arts-students', description: 'Student enrollment and tracking', icon: '👥' },
      { name: 'Belt Progression', slug: 'belt-progression', description: 'Rank and belt tracking', icon: '🥇' },
      { name: 'Class Scheduling', slug: 'martial-arts-classes', description: 'Class and training schedules', icon: '📅' },
      { name: 'Billing & Tuition', slug: 'martial-arts-billing', description: 'Tuition and payment management', icon: '💰' },
    ]
  },
  {
    name: 'Dance Studios',
    slug: 'dance-studios',
    description: 'Dance studio management and scheduling',
    icon: '💃',
    subcategories: [
      { name: 'Class Management', slug: 'dance-classes', description: 'Dance class scheduling', icon: '📅' },
      { name: 'Recital Planning', slug: 'dance-recitals', description: 'Dance recital management', icon: '🎭' },
      { name: 'Student Enrollment', slug: 'dance-enrollment', description: 'Student registration systems', icon: '📝' },
      { name: 'Costume Management', slug: 'dance-costumes', description: 'Costume inventory and ordering', icon: '👗' },
    ]
  },
  {
    name: 'Music Schools',
    slug: 'music-schools',
    description: 'Music school and lesson management',
    icon: '🎼',
    subcategories: [
      { name: 'Lesson Scheduling', slug: 'music-lessons', description: 'Music lesson booking', icon: '📅' },
      { name: 'Student Progress', slug: 'music-progress', description: 'Student practice tracking', icon: '📈' },
      { name: 'Recital Management', slug: 'music-recitals', description: 'Concert and recital planning', icon: '🎹' },
      { name: 'Instrument Rental', slug: 'instrument-rental', description: 'Instrument rental tracking', icon: '🎸' },
    ]
  },
  {
    name: 'Tutoring & Test Prep',
    slug: 'tutoring-test-prep',
    description: 'Tutoring services and test preparation',
    icon: '📝',
    subcategories: [
      { name: 'Session Scheduling', slug: 'tutoring-scheduling', description: 'Tutoring appointment booking', icon: '📅' },
      { name: 'Progress Tracking', slug: 'tutoring-progress', description: 'Student progress monitoring', icon: '📊' },
      { name: 'Test Prep', slug: 'test-prep', description: 'Standardized test preparation', icon: '✏️' },
      { name: 'Payment Management', slug: 'tutoring-payments', description: 'Tutoring billing systems', icon: '💰' },
    ]
  },
  {
    name: 'Childcare & Daycare',
    slug: 'childcare-daycare',
    description: 'Childcare center and daycare management',
    icon: '👶',
    subcategories: [
      { name: 'Enrollment Management', slug: 'childcare-enrollment', description: 'Child enrollment systems', icon: '📝' },
      { name: 'Attendance Tracking', slug: 'childcare-attendance', description: 'Daily attendance monitoring', icon: '✅' },
      { name: 'Parent Communication', slug: 'parent-communication', description: 'Parent messaging platforms', icon: '💬' },
      { name: 'Billing & Payments', slug: 'childcare-billing', description: 'Childcare tuition management', icon: '💰' },
    ]
  },
  {
    name: 'Preschool & Kindergarten',
    slug: 'preschool-kindergarten',
    description: 'Preschool and early childhood education',
    icon: '🎨',
    subcategories: [
      { name: 'Curriculum Planning', slug: 'preschool-curriculum', description: 'Early education curriculum', icon: '📚' },
      { name: 'Student Assessment', slug: 'preschool-assessment', description: 'Developmental tracking', icon: '📊' },
      { name: 'Parent Engagement', slug: 'preschool-parents', description: 'Parent communication tools', icon: '👨‍👩‍👧' },
      { name: 'Activity Planning', slug: 'preschool-activities', description: 'Activity and lesson planning', icon: '🎭' },
    ]
  },
  {
    name: 'K-12 Education',
    slug: 'k12-education',
    description: 'K-12 school management systems',
    icon: '🏫',
    subcategories: [
      { name: 'Student Information Systems', slug: 'student-information', description: 'Student records management', icon: '📋' },
      { name: 'Learning Management', slug: 'k12-lms', description: 'K-12 learning platforms', icon: '💻' },
      { name: 'Gradebook', slug: 'gradebook', description: 'Grade tracking systems', icon: '📊' },
      { name: 'Parent Portal', slug: 'parent-portal', description: 'Parent access platforms', icon: '👨‍👩‍👧‍👦' },
    ]
  },
  {
    name: 'Higher Education',
    slug: 'higher-education',
    description: 'College and university systems',
    icon: '🎓',
    subcategories: [
      { name: 'Admissions Management', slug: 'admissions-management', description: 'College admissions systems', icon: '📝' },
      { name: 'Course Management', slug: 'course-management', description: 'University course scheduling', icon: '📚' },
      { name: 'Research Management', slug: 'research-management', description: 'Academic research platforms', icon: '🔬' },
      { name: 'Alumni Relations', slug: 'alumni-relations', description: 'Alumni engagement systems', icon: '🎓' },
    ]
  },
  {
    name: 'Online Learning',
    slug: 'online-learning',
    description: 'E-learning and online course platforms',
    icon: '💻',
    subcategories: [
      { name: 'Course Creation', slug: 'course-creation', description: 'Online course builders', icon: '🎬' },
      { name: 'Video Hosting', slug: 'video-hosting-education', description: 'Educational video platforms', icon: '📹' },
      { name: 'Student Engagement', slug: 'student-engagement', description: 'Interactive learning tools', icon: '🎯' },
      { name: 'Certification', slug: 'certification-management', description: 'Certificate issuance systems', icon: '📜' },
    ]
  },
  {
    name: 'Corporate Training',
    slug: 'corporate-training',
    description: 'Employee training and development',
    icon: '👔',
    subcategories: [
      { name: 'LMS Platforms', slug: 'corporate-lms', description: 'Corporate learning management', icon: '💼' },
      { name: 'Compliance Training', slug: 'compliance-training', description: 'Regulatory training systems', icon: '✅' },
      { name: 'Skills Assessment', slug: 'skills-assessment', description: 'Employee skill tracking', icon: '📊' },
      { name: 'Onboarding', slug: 'employee-onboarding', description: 'New hire training systems', icon: '👋' },
    ]
  },
  {
    name: 'Language Learning',
    slug: 'language-learning',
    description: 'Language education and translation',
    icon: '🗣️',
    subcategories: [
      { name: 'Language Apps', slug: 'language-apps', description: 'Language learning platforms', icon: '📱' },
      { name: 'Translation Tools', slug: 'translation-tools', description: 'Translation software', icon: '🌐' },
      { name: 'Pronunciation Training', slug: 'pronunciation-training', description: 'Speech recognition tools', icon: '🎤' },
      { name: 'Language Schools', slug: 'language-schools', description: 'Language school management', icon: '🏫' },
    ]
  },
  {
    name: 'Driving Schools',
    slug: 'driving-schools',
    description: 'Driving instruction and DMV services',
    icon: '🚗',
    subcategories: [
      { name: 'Lesson Scheduling', slug: 'driving-scheduling', description: 'Driving lesson booking', icon: '📅' },
      { name: 'Student Progress', slug: 'driving-progress', description: 'Driver training tracking', icon: '📊' },
      { name: 'Vehicle Management', slug: 'driving-vehicles', description: 'Training vehicle tracking', icon: '🚙' },
      { name: 'Instructor Management', slug: 'driving-instructors', description: 'Instructor scheduling', icon: '👨‍🏫' },
    ]
  },
  {
    name: 'Aviation Training',
    slug: 'aviation-training',
    description: 'Flight school and pilot training',
    icon: '✈️',
    subcategories: [
      { name: 'Flight Scheduling', slug: 'flight-scheduling', description: 'Flight training scheduling', icon: '📅' },
      { name: 'Aircraft Management', slug: 'training-aircraft', description: 'Training aircraft tracking', icon: '🛩️' },
      { name: 'Certification Tracking', slug: 'pilot-certification', description: 'Pilot license management', icon: '📜' },
      { name: 'Simulator Training', slug: 'flight-simulator', description: 'Flight simulator management', icon: '🎮' },
    ]
  },
  {
    name: 'Maritime & Boating',
    slug: 'maritime-boating',
    description: 'Maritime training and boat services',
    icon: '⚓',
    subcategories: [
      { name: 'Boating Schools', slug: 'boating-schools', description: 'Boating education management', icon: '🚤' },
      { name: 'Marina Management', slug: 'marina-management', description: 'Marina operations systems', icon: '🏖️' },
      { name: 'Yacht Charter', slug: 'yacht-charter', description: 'Yacht rental management', icon: '⛵' },
      { name: 'Marine Services', slug: 'marine-services', description: 'Boat maintenance services', icon: '🔧' },
    ]
  },
  {
    name: 'Outdoor Recreation',
    slug: 'outdoor-recreation',
    description: 'Outdoor activities and adventure sports',
    icon: '🏕️',
    subcategories: [
      { name: 'Camping Reservations', slug: 'camping-reservations', description: 'Campground booking systems', icon: '⛺' },
      { name: 'Hiking & Trails', slug: 'hiking-trails', description: 'Trail management systems', icon: '🥾' },
      { name: 'Outdoor Gear Rental', slug: 'outdoor-gear-rental', description: 'Equipment rental platforms', icon: '🎒' },
      { name: 'Adventure Tours', slug: 'adventure-tours', description: 'Tour booking and management', icon: '🧗' },
    ]
  },
  {
    name: 'Ski Resorts',
    slug: 'ski-resorts',
    description: 'Ski resort and winter sports management',
    icon: '⛷️',
    subcategories: [
      { name: 'Lift Ticketing', slug: 'lift-ticketing', description: 'Ski pass management', icon: '🎫' },
      { name: 'Equipment Rental', slug: 'ski-rental', description: 'Ski equipment rental', icon: '🎿' },
      { name: 'Ski School', slug: 'ski-school', description: 'Ski lesson management', icon: '🏂' },
      { name: 'Resort Operations', slug: 'resort-operations', description: 'Ski resort management', icon: '🏔️' },
    ]
  },
  {
    name: 'Golf Courses',
    slug: 'golf-courses',
    description: 'Golf course and club management',
    icon: '⛳',
    subcategories: [
      { name: 'Tee Time Booking', slug: 'tee-time-booking', description: 'Golf tee time systems', icon: '📅' },
      { name: 'Membership Management', slug: 'golf-membership', description: 'Golf club memberships', icon: '🎫' },
      { name: 'Pro Shop', slug: 'golf-pro-shop', description: 'Golf retail management', icon: '🏪' },
      { name: 'Tournament Management', slug: 'golf-tournaments', description: 'Golf tournament systems', icon: '🏆' },
    ]
  },
  {
    name: 'Tennis & Racquet Sports',
    slug: 'tennis-racquet',
    description: 'Tennis club and racquet sports management',
    icon: '🎾',
    subcategories: [
      { name: 'Court Booking', slug: 'court-booking', description: 'Tennis court reservations', icon: '📅' },
      { name: 'League Management', slug: 'tennis-leagues', description: 'Tennis league systems', icon: '🏆' },
      { name: 'Coaching Programs', slug: 'tennis-coaching', description: 'Tennis lesson management', icon: '🎓' },
      { name: 'Pro Shop', slug: 'tennis-pro-shop', description: 'Tennis retail operations', icon: '🏪' },
    ]
  },
  {
    name: 'Swimming Pools',
    slug: 'swimming-pools',
    description: 'Pool management and aquatic facilities',
    icon: '🏊',
    subcategories: [
      { name: 'Pool Maintenance', slug: 'pool-maintenance', description: 'Pool service management', icon: '🔧' },
      { name: 'Swim Lessons', slug: 'swim-lessons', description: 'Swimming instruction management', icon: '🏊‍♂️' },
      { name: 'Facility Booking', slug: 'pool-booking', description: 'Pool facility reservations', icon: '📅' },
      { name: 'Lifeguard Management', slug: 'lifeguard-management', description: 'Lifeguard scheduling', icon: '🛟' },
    ]
  },
  {
    name: 'Bowling Alleys',
    slug: 'bowling-alleys',
    description: 'Bowling center management systems',
    icon: '🎳',
    subcategories: [
      { name: 'Lane Booking', slug: 'bowling-booking', description: 'Bowling lane reservations', icon: '📅' },
      { name: 'League Management', slug: 'bowling-leagues', description: 'Bowling league systems', icon: '🏆' },
      { name: 'POS Systems', slug: 'bowling-pos', description: 'Bowling center point of sale', icon: '💳' },
      { name: 'Equipment Rental', slug: 'bowling-rental', description: 'Shoe and ball rental', icon: '👟' },
    ]
  },
  {
    name: 'Amusement Parks',
    slug: 'amusement-parks',
    description: 'Theme park and attraction management',
    icon: '🎢',
    subcategories: [
      { name: 'Ticketing Systems', slug: 'park-ticketing', description: 'Theme park ticket sales', icon: '🎫' },
      { name: 'Queue Management', slug: 'queue-management', description: 'Ride wait time systems', icon: '⏱️' },
      { name: 'Season Pass', slug: 'season-pass', description: 'Annual pass management', icon: '🎟️' },
      { name: 'Food & Beverage', slug: 'park-food-beverage', description: 'Park concession management', icon: '🍔' },
    ]
  },
  {
    name: 'Zoos & Aquariums',
    slug: 'zoos-aquariums',
    description: 'Zoo and aquarium management systems',
    icon: '🦁',
    subcategories: [
      { name: 'Animal Management', slug: 'animal-management', description: 'Animal care and tracking', icon: '🐘' },
      { name: 'Visitor Management', slug: 'zoo-visitors', description: 'Zoo ticketing and tours', icon: '🎫' },
      { name: 'Conservation Programs', slug: 'conservation-programs', description: 'Wildlife conservation tracking', icon: '🌿' },
      { name: 'Education Programs', slug: 'zoo-education', description: 'Educational program management', icon: '📚' },
    ]
  },
  {
    name: 'Movie Theaters',
    slug: 'movie-theaters',
    description: 'Cinema and movie theater management',
    icon: '🎬',
    subcategories: [
      { name: 'Ticketing Systems', slug: 'cinema-ticketing', description: 'Movie ticket sales', icon: '🎟️' },
      { name: 'Concession Management', slug: 'cinema-concessions', description: 'Theater concession POS', icon: '🍿' },
      { name: 'Showtime Scheduling', slug: 'showtime-scheduling', description: 'Movie scheduling systems', icon: '📅' },
      { name: 'Loyalty Programs', slug: 'cinema-loyalty', description: 'Movie theater rewards', icon: '🎁' },
    ]
  },
  {
    name: 'Performing Arts',
    slug: 'performing-arts',
    description: 'Theater and performing arts management',
    icon: '🎭',
    subcategories: [
      { name: 'Ticketing & Box Office', slug: 'theater-ticketing', description: 'Theater ticket sales', icon: '🎫' },
      { name: 'Production Management', slug: 'production-management', description: 'Show production planning', icon: '🎬' },
      { name: 'Venue Management', slug: 'theater-venue', description: 'Theater operations systems', icon: '🏛️' },
      { name: 'Donor Management', slug: 'arts-donors', description: 'Arts fundraising platforms', icon: '💰' },
    ]
  },
  {
    name: 'Concert Venues',
    slug: 'concert-venues',
    description: 'Concert hall and music venue management',
    icon: '🎤',
    subcategories: [
      { name: 'Ticketing Systems', slug: 'concert-ticketing', description: 'Concert ticket sales', icon: '🎟️' },
      { name: 'Artist Management', slug: 'artist-management', description: 'Performer booking systems', icon: '🎸' },
      { name: 'Venue Operations', slug: 'concert-venue-ops', description: 'Concert venue management', icon: '🏟️' },
      { name: 'Merchandise Sales', slug: 'concert-merch', description: 'Concert merchandise POS', icon: '👕' },
    ]
  },
  {
    name: 'Sports Stadiums',
    slug: 'sports-stadiums',
    description: 'Stadium and arena management systems',
    icon: '🏟️',
    subcategories: [
      { name: 'Ticketing Systems', slug: 'stadium-ticketing', description: 'Sports ticket sales', icon: '🎫' },
      { name: 'Concession Management', slug: 'stadium-concessions', description: 'Stadium food & beverage', icon: '🌭' },
      { name: 'Parking Management', slug: 'stadium-parking', description: 'Stadium parking systems', icon: '🅿️' },
      { name: 'Suite Management', slug: 'luxury-suites', description: 'Luxury suite operations', icon: '🏆' },
    ]
  },
  {
    name: 'Convention Centers',
    slug: 'convention-centers',
    description: 'Convention and exhibition center management',
    icon: '🏢',
    subcategories: [
      { name: 'Event Booking', slug: 'convention-booking', description: 'Convention space booking', icon: '📅' },
      { name: 'Exhibitor Management', slug: 'exhibitor-management', description: 'Trade show exhibitor systems', icon: '🏪' },
      { name: 'Floor Planning', slug: 'floor-planning', description: 'Convention floor layout', icon: '🗺️' },
      { name: 'Registration Systems', slug: 'convention-registration', description: 'Attendee registration', icon: '📝' },
    ]
  },
  {
    name: 'Coworking Spaces',
    slug: 'coworking-spaces',
    description: 'Coworking and shared office management',
    icon: '🏢',
    subcategories: [
      { name: 'Space Booking', slug: 'coworking-booking', description: 'Desk and room reservations', icon: '📅' },
      { name: 'Member Management', slug: 'coworking-members', description: 'Coworking membership systems', icon: '👥' },
      { name: 'Access Control', slug: 'coworking-access', description: 'Building access management', icon: '🔐' },
      { name: 'Billing & Invoicing', slug: 'coworking-billing', description: 'Coworking space billing', icon: '💰' },
    ]
  },
  {
    name: 'Commercial Real Estate',
    slug: 'commercial-real-estate',
    description: 'Commercial property management',
    icon: '🏢',
    subcategories: [
      { name: 'Property Management', slug: 'commercial-property', description: 'Commercial building management', icon: '🏗️' },
      { name: 'Lease Management', slug: 'commercial-lease', description: 'Commercial lease tracking', icon: '📋' },
      { name: 'Tenant Portal', slug: 'tenant-portal', description: 'Tenant communication systems', icon: '💬' },
      { name: 'Maintenance Requests', slug: 'commercial-maintenance', description: 'Building maintenance tracking', icon: '🔧' },
    ]
  },
  {
    name: 'Residential Real Estate',
    slug: 'residential-real-estate',
    description: 'Residential property and apartment management',
    icon: '🏠',
    subcategories: [
      { name: 'Property Listings', slug: 'property-listings', description: 'Real estate listing platforms', icon: '📋' },
      { name: 'Apartment Management', slug: 'apartment-management', description: 'Multi-family property management', icon: '🏢' },
      { name: 'Rent Collection', slug: 'rent-collection', description: 'Online rent payment systems', icon: '💰' },
      { name: 'Tenant Screening', slug: 'tenant-screening', description: 'Background check services', icon: '🔍' },
    ]
  },
  {
    name: 'Vacation Rentals',
    slug: 'vacation-rentals',
    description: 'Short-term rental and Airbnb management',
    icon: '🏖️',
    subcategories: [
      { name: 'Booking Management', slug: 'vacation-booking', description: 'Vacation rental reservations', icon: '📅' },
      { name: 'Channel Management', slug: 'channel-management', description: 'Multi-platform listing sync', icon: '🌐' },
      { name: 'Guest Communication', slug: 'guest-communication', description: 'Guest messaging automation', icon: '💬' },
      { name: 'Cleaning Coordination', slug: 'rental-cleaning', description: 'Turnover cleaning scheduling', icon: '🧹' },
    ]
  },
  {
    name: 'Storage Facilities',
    slug: 'storage-facilities',
    description: 'Self-storage and warehouse management',
    icon: '📦',
    subcategories: [
      { name: 'Unit Management', slug: 'storage-units', description: 'Storage unit tracking', icon: '🏢' },
      { name: 'Access Control', slug: 'storage-access', description: 'Facility access systems', icon: '🔐' },
      { name: 'Billing Automation', slug: 'storage-billing', description: 'Automated rent collection', icon: '💰' },
      { name: 'Online Rentals', slug: 'storage-online', description: 'Online unit rental systems', icon: '🌐' },
    ]
  },
  {
    name: 'Parking Management',
    slug: 'parking-management',
    description: 'Parking lot and garage operations',
    icon: '🅿️',
    subcategories: [
      { name: 'Parking Reservations', slug: 'parking-reservations', description: 'Parking spot booking', icon: '📅' },
      { name: 'Access Control', slug: 'parking-access', description: 'Gate and barrier systems', icon: '🚧' },
      { name: 'Payment Systems', slug: 'parking-payments', description: 'Parking payment processing', icon: '💳' },
      { name: 'Enforcement', slug: 'parking-enforcement', description: 'Parking violation management', icon: '🚫' },
    ]
  },
  {
    name: 'Laundry Services',
    slug: 'laundry-services',
    description: 'Laundromat and dry cleaning management',
    icon: '🧺',
    subcategories: [
      { name: 'POS Systems', slug: 'laundry-pos', description: 'Laundry point of sale', icon: '💳' },
      { name: 'Route Management', slug: 'laundry-routes', description: 'Pickup and delivery routing', icon: '🚚' },
      { name: 'Order Tracking', slug: 'laundry-tracking', description: 'Laundry order management', icon: '📋' },
      { name: 'Equipment Monitoring', slug: 'laundry-equipment', description: 'Machine status tracking', icon: '🔧' },
    ]
  },
  {
    name: 'Vending Machines',
    slug: 'vending-machines',
    description: 'Vending machine operations and management',
    icon: '🥤',
    subcategories: [
      { name: 'Inventory Management', slug: 'vending-inventory', description: 'Vending stock tracking', icon: '📦' },
      { name: 'Route Optimization', slug: 'vending-routes', description: 'Vending machine routing', icon: '🗺️' },
      { name: 'Sales Analytics', slug: 'vending-analytics', description: 'Vending sales reporting', icon: '📊' },
      { name: 'Cashless Payments', slug: 'vending-payments', description: 'Card and mobile payments', icon: '💳' },
    ]
  },
  {
    name: 'ATM Management',
    slug: 'atm-management',
    description: 'ATM operations and cash management',
    icon: '🏧',
    subcategories: [
      { name: 'Cash Management', slug: 'atm-cash', description: 'ATM cash level monitoring', icon: '💵' },
      { name: 'Maintenance Tracking', slug: 'atm-maintenance', description: 'ATM service management', icon: '🔧' },
      { name: 'Transaction Monitoring', slug: 'atm-transactions', description: 'ATM transaction tracking', icon: '📊' },
      { name: 'Network Management', slug: 'atm-network', description: 'ATM network operations', icon: '🌐' },
    ]
  },
  {
    name: 'Car Wash Services',
    slug: 'car-wash-services',
    description: 'Car wash and detailing operations',
    icon: '🚗',
    subcategories: [
      { name: 'POS Systems', slug: 'car-wash-pos', description: 'Car wash point of sale', icon: '💳' },
      { name: 'Membership Programs', slug: 'car-wash-membership', description: 'Unlimited wash memberships', icon: '🎫' },
      { name: 'Fleet Management', slug: 'car-wash-fleet', description: 'Commercial fleet accounts', icon: '🚚' },
      { name: 'Equipment Monitoring', slug: 'car-wash-equipment', description: 'Wash equipment tracking', icon: '🔧' },
    ]
  },
  {
    name: 'Auto Detailing',
    slug: 'auto-detailing',
    description: 'Professional auto detailing services',
    icon: '✨',
    subcategories: [
      { name: 'Appointment Booking', slug: 'detailing-booking', description: 'Detailing appointment scheduling', icon: '📅' },
      { name: 'Service Packages', slug: 'detailing-packages', description: 'Detailing service management', icon: '📋' },
      { name: 'Mobile Detailing', slug: 'mobile-detailing', description: 'Mobile service routing', icon: '🚐' },
      { name: 'Customer Database', slug: 'detailing-customers', description: 'Vehicle history tracking', icon: '📝' },
    ]
  },
  {
    name: 'Oil Change & Lube',
    slug: 'oil-change-lube',
    description: 'Quick lube and oil change services',
    icon: '🛢️',
    subcategories: [
      { name: 'Service Tracking', slug: 'oil-change-tracking', description: 'Service history management', icon: '📋' },
      { name: 'Inventory Management', slug: 'lube-inventory', description: 'Oil and filter inventory', icon: '📦' },
      { name: 'Customer Reminders', slug: 'oil-change-reminders', description: 'Service reminder systems', icon: '🔔' },
      { name: 'POS Systems', slug: 'lube-pos', description: 'Quick lube point of sale', icon: '💳' },
    ]
  },
  {
    name: 'Tire Shops',
    slug: 'tire-shops',
    description: 'Tire sales and service management',
    icon: '🛞',
    subcategories: [
      { name: 'Inventory Management', slug: 'tire-inventory', description: 'Tire stock management', icon: '📦' },
      { name: 'Service Scheduling', slug: 'tire-scheduling', description: 'Tire installation booking', icon: '📅' },
      { name: 'Wheel Alignment', slug: 'wheel-alignment', description: 'Alignment service tracking', icon: '⚙️' },
      { name: 'Customer Database', slug: 'tire-customers', description: 'Vehicle tire history', icon: '📝' },
    ]
  },
  {
    name: 'Transmission Repair',
    slug: 'transmission-repair',
    description: 'Transmission specialist shops',
    icon: '⚙️',
    subcategories: [
      { name: 'Diagnostic Tools', slug: 'transmission-diagnostics', description: 'Transmission testing systems', icon: '🔍' },
      { name: 'Repair Tracking', slug: 'transmission-repairs', description: 'Transmission job management', icon: '🔧' },
      { name: 'Parts Inventory', slug: 'transmission-parts', description: 'Transmission parts tracking', icon: '📦' },
      { name: 'Warranty Management', slug: 'transmission-warranty', description: 'Repair warranty tracking', icon: '📜' },
    ]
  },
  {
    name: 'Muffler & Exhaust',
    slug: 'muffler-exhaust',
    description: 'Exhaust system repair shops',
    icon: '💨',
    subcategories: [
      { name: 'Service Management', slug: 'exhaust-service', description: 'Exhaust repair tracking', icon: '🔧' },
      { name: 'Parts Catalog', slug: 'exhaust-parts', description: 'Exhaust parts inventory', icon: '📦' },
      { name: 'Emissions Testing', slug: 'emissions-testing', description: 'Emissions test management', icon: '🧪' },
      { name: 'Customer Records', slug: 'exhaust-customers', description: 'Vehicle service history', icon: '📝' },
    ]
  },
  {
    name: 'Auto Glass Repair',
    slug: 'auto-glass-repair',
    description: 'Windshield and auto glass services',
    icon: '🪟',
    subcategories: [
      { name: 'Appointment Scheduling', slug: 'glass-scheduling', description: 'Glass repair booking', icon: '📅' },
      { name: 'Mobile Service', slug: 'mobile-glass', description: 'Mobile glass repair routing', icon: '🚐' },
      { name: 'Insurance Claims', slug: 'glass-insurance', description: 'Insurance claim processing', icon: '📋' },
      { name: 'Inventory Management', slug: 'glass-inventory', description: 'Glass stock management', icon: '📦' },
    ]
  },
  {
    name: 'Auto Body Shops',
    slug: 'auto-body-shops',
    description: 'Collision repair and body shops',
    icon: '🔨',
    subcategories: [
      { name: 'Estimating Software', slug: 'body-shop-estimates', description: 'Collision repair estimates', icon: '💰' },
      { name: 'Insurance Integration', slug: 'body-shop-insurance', description: 'Insurance claim systems', icon: '📋' },
      { name: 'Parts Ordering', slug: 'body-shop-parts', description: 'Auto parts procurement', icon: '📦' },
      { name: 'Photo Documentation', slug: 'body-shop-photos', description: 'Damage photo management', icon: '📸' },
    ]
  },
  {
    name: 'Auto Upholstery',
    slug: 'auto-upholstery',
    description: 'Auto interior and upholstery services',
    icon: '🪑',
    subcategories: [
      { name: 'Project Management', slug: 'upholstery-projects', description: 'Upholstery job tracking', icon: '📋' },
      { name: 'Material Inventory', slug: 'upholstery-materials', description: 'Fabric and leather inventory', icon: '📦' },
      { name: 'Custom Orders', slug: 'upholstery-custom', description: 'Custom interior orders', icon: '✨' },
      { name: 'Customer Gallery', slug: 'upholstery-gallery', description: 'Portfolio management', icon: '🖼️' },
    ]
  },
  {
    name: 'RV & Motorhome',
    slug: 'rv-motorhome',
    description: 'RV sales, service, and rental management',
    icon: '🚐',
    subcategories: [
      { name: 'RV Sales', slug: 'rv-sales', description: 'RV dealership management', icon: '🏪' },
      { name: 'RV Service', slug: 'rv-service', description: 'RV repair and maintenance', icon: '🔧' },
      { name: 'RV Rentals', slug: 'rv-rentals', description: 'RV rental management', icon: '📅' },
      { name: 'RV Parks', slug: 'rv-parks', description: 'RV park reservations', icon: '🏕️' },
    ]
  },
  {
    name: 'Motorcycle Shops',
    slug: 'motorcycle-shops',
    description: 'Motorcycle sales and service',
    icon: '🏍️',
    subcategories: [
      { name: 'Parts & Accessories', slug: 'motorcycle-parts', description: 'Motorcycle parts inventory', icon: '📦' },
      { name: 'Service Management', slug: 'motorcycle-service', description: 'Motorcycle repair tracking', icon: '🔧' },
      { name: 'Custom Builds', slug: 'motorcycle-custom', description: 'Custom motorcycle projects', icon: '✨' },
      { name: 'Riding Gear', slug: 'riding-gear', description: 'Apparel and gear sales', icon: '🧥' },
    ]
  },
  {
    name: 'Bicycle Shops',
    slug: 'bicycle-shops',
    description: 'Bike sales, service, and rentals',
    icon: '🚴',
    subcategories: [
      { name: 'Bike Sales', slug: 'bike-sales', description: 'Bicycle retail management', icon: '🏪' },
      { name: 'Bike Service', slug: 'bike-service', description: 'Bicycle repair tracking', icon: '🔧' },
      { name: 'Bike Rentals', slug: 'bike-rentals', description: 'Bicycle rental systems', icon: '📅' },
      { name: 'Custom Builds', slug: 'bike-custom', description: 'Custom bicycle assembly', icon: '✨' },
    ]
  },
  {
    name: 'Powersports',
    slug: 'powersports',
    description: 'ATV, UTV, and powersports dealers',
    icon: '🏎️',
    subcategories: [
      { name: 'Vehicle Sales', slug: 'powersports-sales', description: 'Powersports dealership', icon: '🏪' },
      { name: 'Parts Inventory', slug: 'powersports-parts', description: 'Powersports parts management', icon: '📦' },
      { name: 'Service Department', slug: 'powersports-service', description: 'Powersports repair shop', icon: '🔧' },
      { name: 'Rentals', slug: 'powersports-rentals', description: 'ATV and UTV rentals', icon: '📅' },
    ]
  },
  {
    name: 'Boat Dealers',
    slug: 'boat-dealers',
    description: 'Boat sales and marine dealerships',
    icon: '⛵',
    subcategories: [
      { name: 'Boat Sales', slug: 'boat-sales', description: 'Marine sales management', icon: '🏪' },
      { name: 'Marine Parts', slug: 'marine-parts', description: 'Boat parts inventory', icon: '📦' },
      { name: 'Boat Service', slug: 'boat-service', description: 'Marine service department', icon: '🔧' },
      { name: 'Boat Storage', slug: 'boat-storage', description: 'Boat storage management', icon: '🏢' },
    ]
  },
  {
    name: 'Aircraft Maintenance',
    slug: 'aircraft-maintenance',
    description: 'Aircraft service and maintenance',
    icon: '✈️',
    subcategories: [
      { name: 'Maintenance Tracking', slug: 'aircraft-maintenance-tracking', description: 'Aircraft service records', icon: '📋' },
      { name: 'Parts Inventory', slug: 'aircraft-parts', description: 'Aviation parts management', icon: '📦' },
      { name: 'Compliance Management', slug: 'aircraft-compliance', description: 'FAA compliance tracking', icon: '✅' },
      { name: 'Work Orders', slug: 'aircraft-work-orders', description: 'Aircraft repair orders', icon: '🔧' },
    ]
  },
  {
    name: 'Heavy Equipment',
    slug: 'heavy-equipment',
    description: 'Heavy machinery sales and service',
    icon: '🚜',
    subcategories: [
      { name: 'Equipment Sales', slug: 'equipment-sales', description: 'Heavy equipment dealership', icon: '🏪' },
      { name: 'Equipment Rentals', slug: 'equipment-rentals', description: 'Construction equipment rental', icon: '📅' },
      { name: 'Service Management', slug: 'equipment-service', description: 'Heavy equipment repair', icon: '🔧' },
      { name: 'Parts Department', slug: 'equipment-parts', description: 'Heavy equipment parts', icon: '📦' },
    ]
  },
  {
    name: 'Farm Equipment',
    slug: 'farm-equipment',
    description: 'Agricultural equipment dealers',
    icon: '🚜',
    subcategories: [
      { name: 'Tractor Sales', slug: 'tractor-sales', description: 'Farm equipment dealership', icon: '🏪' },
      { name: 'Parts Inventory', slug: 'farm-parts', description: 'Agricultural parts management', icon: '📦' },
      { name: 'Service Department', slug: 'farm-service', description: 'Farm equipment repair', icon: '🔧' },
      { name: 'Precision Ag', slug: 'precision-ag', description: 'Precision agriculture systems', icon: '🛰️' },
    ]
  },
  {
    name: 'Tool & Equipment Rental',
    slug: 'tool-equipment-rental',
    description: 'Tool and equipment rental services',
    icon: '🔨',
    subcategories: [
      { name: 'Rental Management', slug: 'tool-rental-management', description: 'Tool rental tracking', icon: '📅' },
      { name: 'Inventory Control', slug: 'tool-rental-inventory', description: 'Rental equipment inventory', icon: '📦' },
      { name: 'Maintenance Scheduling', slug: 'tool-maintenance', description: 'Equipment maintenance tracking', icon: '🔧' },
      { name: 'Customer Accounts', slug: 'tool-rental-customers', description: 'Rental customer management', icon: '👥' },
    ]
  },
  {
    name: 'Party & Event Rentals',
    slug: 'party-event-rentals',
    description: 'Party supply and event rental services',
    icon: '🎉',
    subcategories: [
      { name: 'Inventory Management', slug: 'party-rental-inventory', description: 'Party supply inventory', icon: '📦' },
      { name: 'Booking System', slug: 'party-rental-booking', description: 'Event rental reservations', icon: '📅' },
      { name: 'Delivery Scheduling', slug: 'party-rental-delivery', description: 'Rental delivery logistics', icon: '🚚' },
      { name: 'Contract Management', slug: 'party-rental-contracts', description: 'Rental agreements', icon: '📝' },
    ]
  },
  {
    name: 'Medical Equipment',
    slug: 'medical-equipment',
    description: 'Medical equipment sales and rental',
    icon: '🏥',
    subcategories: [
      { name: 'Equipment Sales', slug: 'medical-equipment-sales', description: 'Medical device sales', icon: '🏪' },
      { name: 'Equipment Rentals', slug: 'medical-equipment-rentals', description: 'Medical equipment rental', icon: '📅' },
      { name: 'Maintenance Tracking', slug: 'medical-equipment-maintenance', description: 'Medical device servicing', icon: '🔧' },
      { name: 'Compliance Management', slug: 'medical-equipment-compliance', description: 'FDA compliance tracking', icon: '✅' },
    ]
  },
  {
    name: 'Laboratory Equipment',
    slug: 'laboratory-equipment',
    description: 'Lab equipment and scientific instruments',
    icon: '🔬',
    subcategories: [
      { name: 'Equipment Management', slug: 'lab-equipment-management', description: 'Lab instrument tracking', icon: '📋' },
      { name: 'Calibration Tracking', slug: 'lab-calibration', description: 'Instrument calibration schedules', icon: '⚖️' },
      { name: 'Maintenance Logs', slug: 'lab-maintenance', description: 'Lab equipment maintenance', icon: '🔧' },
      { name: 'Inventory Control', slug: 'lab-inventory', description: 'Lab supplies inventory', icon: '📦' },
    ]
  },
  {
    name: 'Industrial Supplies',
    slug: 'industrial-supplies',
    description: 'Industrial supply distribution',
    icon: '🏭',
    subcategories: [
      { name: 'Inventory Management', slug: 'industrial-inventory', description: 'Industrial parts inventory', icon: '📦' },
      { name: 'Order Management', slug: 'industrial-orders', description: 'Industrial supply orders', icon: '📋' },
      { name: 'Customer Accounts', slug: 'industrial-customers', description: 'B2B customer management', icon: '👥' },
      { name: 'Vendor Management', slug: 'industrial-vendors', description: 'Supplier relationship management', icon: '🤝' },
    ]
  },
  {
    name: 'Safety Equipment',
    slug: 'safety-equipment',
    description: 'Safety gear and PPE suppliers',
    icon: '🦺',
    subcategories: [
      { name: 'PPE Inventory', slug: 'ppe-inventory', description: 'Safety equipment inventory', icon: '📦' },
      { name: 'Compliance Tracking', slug: 'safety-compliance', description: 'Safety regulation compliance', icon: '✅' },
      { name: 'Training Programs', slug: 'safety-training', description: 'Safety training management', icon: '🎓' },
      { name: 'Inspection Schedules', slug: 'safety-inspections', description: 'Safety equipment inspections', icon: '🔍' },
    ]
  },
  {
    name: 'Janitorial Supplies',
    slug: 'janitorial-supplies',
    description: 'Janitorial and cleaning supply distributors',
    icon: '🧼',
    subcategories: [
      { name: 'Product Catalog', slug: 'janitorial-catalog', description: 'Cleaning supply catalog', icon: '📚' },
      { name: 'Order Management', slug: 'janitorial-orders', description: 'Janitorial supply orders', icon: '📋' },
      { name: 'Route Delivery', slug: 'janitorial-delivery', description: 'Delivery route management', icon: '🚚' },
      { name: 'Customer Accounts', slug: 'janitorial-customers', description: 'Commercial customer accounts', icon: '👥' },
    ]
  },
  {
    name: 'Office Supplies',
    slug: 'office-supplies',
    description: 'Office supply stores and distributors',
    icon: '📎',
    subcategories: [
      { name: 'Inventory Management', slug: 'office-inventory', description: 'Office supply inventory', icon: '📦' },
      { name: 'E-commerce Platform', slug: 'office-ecommerce', description: 'Online office supply store', icon: '🌐' },
      { name: 'Corporate Accounts', slug: 'office-corporate', description: 'B2B office supply accounts', icon: '🏢' },
      { name: 'Furniture Sales', slug: 'office-furniture', description: 'Office furniture management', icon: '🪑' },
    ]
  },
  {
    name: 'Printing Services',
    slug: 'printing-services',
    description: 'Commercial printing and copy shops',
    icon: '🖨️',
    subcategories: [
      { name: 'Job Management', slug: 'printing-jobs', description: 'Print job tracking', icon: '📋' },
      { name: 'Estimating', slug: 'printing-estimates', description: 'Print job quoting', icon: '💰' },
      { name: 'Production Scheduling', slug: 'printing-production', description: 'Print production planning', icon: '📅' },
      { name: 'Shipping & Delivery', slug: 'printing-shipping', description: 'Print delivery management', icon: '🚚' },
    ]
  },
  {
    name: 'Sign Shops',
    slug: 'sign-shops',
    description: 'Sign making and installation services',
    icon: '🪧',
    subcategories: [
      { name: 'Design Tools', slug: 'sign-design', description: 'Sign design software', icon: '🎨' },
      { name: 'Production Management', slug: 'sign-production', description: 'Sign fabrication tracking', icon: '🏭' },
      { name: 'Installation Scheduling', slug: 'sign-installation', description: 'Sign install scheduling', icon: '📅' },
      { name: 'Permit Tracking', slug: 'sign-permits', description: 'Sign permit management', icon: '📋' },
    ]
  },
  {
    name: 'Screen Printing',
    slug: 'screen-printing',
    description: 'Screen printing and embroidery shops',
    icon: '👕',
    subcategories: [
      { name: 'Order Management', slug: 'screen-printing-orders', description: 'Custom apparel orders', icon: '📋' },
      { name: 'Design Management', slug: 'screen-printing-design', description: 'Artwork and design files', icon: '🎨' },
      { name: 'Production Tracking', slug: 'screen-printing-production', description: 'Print job production', icon: '🏭' },
      { name: 'Inventory Control', slug: 'screen-printing-inventory', description: 'Blank apparel inventory', icon: '📦' },
    ]
  },
  {
    name: 'Cryptocurrency & Blockchain',
    slug: 'cryptocurrency-blockchain',
    description: 'Crypto trading, wallets, and blockchain tools',
    icon: '₿',
    subcategories: [
      { name: 'Crypto Exchanges', slug: 'crypto-exchanges', description: 'Cryptocurrency trading platforms', icon: '💱' },
      { name: 'Crypto Wallets', slug: 'crypto-wallets', description: 'Digital currency wallets', icon: '👛' },
      { name: 'Blockchain Analytics', slug: 'blockchain-analytics', description: 'On-chain data analysis', icon: '📊' },
      { name: 'DeFi Platforms', slug: 'defi-platforms', description: 'Decentralized finance tools', icon: '🏦' },
    ]
  },
  {
    name: 'NFT & Digital Art',
    slug: 'nft-digital-art',
    description: 'NFT marketplaces and digital collectibles',
    icon: '🎨',
    subcategories: [
      { name: 'NFT Marketplaces', slug: 'nft-marketplaces', description: 'Buy and sell NFTs', icon: '🛒' },
      { name: 'NFT Creation Tools', slug: 'nft-creation', description: 'Mint and create NFTs', icon: '🎭' },
      { name: 'NFT Analytics', slug: 'nft-analytics', description: 'NFT market tracking', icon: '📈' },
      { name: 'Digital Collectibles', slug: 'digital-collectibles', description: 'Collectible platforms', icon: '🃏' },
    ]
  },
  {
    name: 'Web3 & Metaverse',
    slug: 'web3-metaverse',
    description: 'Decentralized web and virtual worlds',
    icon: '🌐',
    subcategories: [
      { name: 'Metaverse Platforms', slug: 'metaverse-platforms', description: 'Virtual world platforms', icon: '🏙️' },
      { name: 'Web3 Development', slug: 'web3-development', description: 'Decentralized app tools', icon: '⚙️' },
      { name: 'DAO Tools', slug: 'dao-tools', description: 'Decentralized organization management', icon: '🏛️' },
      { name: 'Virtual Real Estate', slug: 'virtual-real-estate', description: 'Metaverse land platforms', icon: '🏗️' },
    ]
  },
  {
    name: 'Gaming & Esports',
    slug: 'gaming-esports',
    description: 'Gaming platforms and esports tools',
    icon: '🎮',
    subcategories: [
      { name: 'Game Development', slug: 'game-development', description: 'Game creation engines', icon: '🛠️' },
      { name: 'Esports Platforms', slug: 'esports-platforms', description: 'Competitive gaming', icon: '🏆' },
      { name: 'Game Streaming', slug: 'game-streaming', description: 'Live streaming tools', icon: '📺' },
      { name: 'Gaming Communities', slug: 'gaming-communities', description: 'Gamer social platforms', icon: '👥' },
    ]
  },
  {
    name: 'Podcasting',
    slug: 'podcasting',
    description: 'Podcast creation and distribution',
    icon: '🎙️',
    subcategories: [
      { name: 'Podcast Hosting', slug: 'podcast-hosting', description: 'Podcast hosting platforms', icon: '☁️' },
      { name: 'Audio Editing', slug: 'podcast-editing', description: 'Podcast editing software', icon: '✂️' },
      { name: 'Podcast Analytics', slug: 'podcast-analytics', description: 'Listener analytics', icon: '📊' },
      { name: 'Podcast Monetization', slug: 'podcast-monetization', description: 'Podcast revenue tools', icon: '💰' },
    ]
  },
  {
    name: 'Music Production',
    slug: 'music-production',
    description: 'Music creation and production tools',
    icon: '🎵',
    subcategories: [
      { name: 'DAW Software', slug: 'daw-software', description: 'Digital audio workstations', icon: '🎛️' },
      { name: 'Music Distribution', slug: 'music-distribution', description: 'Release music online', icon: '📀' },
      { name: 'Sample Libraries', slug: 'sample-libraries', description: 'Sound sample collections', icon: '🎼' },
      { name: 'Music Collaboration', slug: 'music-collaboration', description: 'Collaborative music tools', icon: '🤝' },
    ]
  },
  {
    name: 'Video Streaming',
    slug: 'video-streaming',
    description: 'Live streaming and video platforms',
    icon: '📹',
    subcategories: [
      { name: 'Live Streaming', slug: 'live-streaming', description: 'Live video broadcasting', icon: '🔴' },
      { name: 'Video Hosting', slug: 'video-hosting', description: 'Video storage platforms', icon: '☁️' },
      { name: 'OTT Platforms', slug: 'ott-platforms', description: 'Over-the-top streaming', icon: '📺' },
      { name: 'Stream Management', slug: 'stream-management', description: 'Streaming workflow tools', icon: '⚙️' },
    ]
  },
  {
    name: 'Photography',
    slug: 'photography',
    description: 'Photography tools and services',
    icon: '📷',
    subcategories: [
      { name: 'Photo Editing', slug: 'photo-editing', description: 'Image editing software', icon: '✨' },
      { name: 'Photo Storage', slug: 'photo-storage', description: 'Cloud photo storage', icon: '☁️' },
      { name: 'Portfolio Websites', slug: 'photography-portfolio', description: 'Photographer portfolios', icon: '🖼️' },
      { name: 'Client Galleries', slug: 'client-galleries', description: 'Photo delivery platforms', icon: '📸' },
    ]
  },
  {
    name: 'Artificial Intelligence',
    slug: 'artificial-intelligence',
    description: 'AI platforms and machine learning',
    icon: '🤖',
    subcategories: [
      { name: 'AI Platforms', slug: 'ai-platforms', description: 'AI development platforms', icon: '🧠' },
      { name: 'Machine Learning', slug: 'machine-learning', description: 'ML model training', icon: '📊' },
      { name: 'Natural Language', slug: 'natural-language', description: 'NLP tools', icon: '💬' },
      { name: 'Computer Vision', slug: 'computer-vision', description: 'Image recognition AI', icon: '👁️' },
    ]
  },
  {
    name: 'Cybersecurity',
    slug: 'cybersecurity',
    description: 'Security tools and services',
    icon: '🔐',
    subcategories: [
      { name: 'Antivirus Software', slug: 'antivirus-software', description: 'Malware protection', icon: '🛡️' },
      { name: 'VPN Services', slug: 'vpn-services', description: 'Virtual private networks', icon: '🔒' },
      { name: 'Password Managers', slug: 'password-managers', description: 'Secure password storage', icon: '🔑' },
      { name: 'Security Testing', slug: 'security-testing', description: 'Penetration testing', icon: '🔍' },
    ]
  }
];

// Tools Data
export const toolsBySubcategory: Record<string, ToolEntry[]> = {
  // Creative & Design > AI Art Generation
  'ai-art-generation': [
    {
      name: 'Midjourney',
      slug: 'midjourney',
      tagline: 'AI-powered image generation from text prompts',
      logoUrl: '/logos/midjourney.png',
      website: 'https://www.midjourney.com',
      pricing: 'paid',
      badges: ['popular', 'featured'],
      category: 'Creative & Design',
      categorySlug: 'creative-design',
      subcategory: 'AI Art Generation',
      subcategorySlug: 'ai-art-generation',
      description: 'Midjourney is an independent research lab exploring new mediums of thought and expanding the imaginative powers of the human species.',
      features: [
        'Generate images from text prompts',
        'High-resolution outputs',
        'Multiple artistic styles',
        'Community gallery',
        'API access available'
      ],
      useCases: [
        'Concept art creation',
        'Marketing materials',
        'Social media content',
        'Creative inspiration'
      ],
      tags: ['AI', 'art', 'image-generation', 'design'],
      rating: 4.8,
      reviewCount: 1245
    },
    {
      name: 'DALL-E 3',
      slug: 'dalle-3',
      tagline: 'AI system that can create realistic images and art from natural language',
      logoUrl: '/logos/dalle.png',
      website: 'https://openai.com/dall-e-3',
      pricing: 'freemium',
      badges: ['featured', 'trending'],
      category: 'Creative & Design',
      categorySlug: 'creative-design',
      subcategory: 'AI Art Generation',
      subcategorySlug: 'ai-art-generation',
      description: 'DALL·E 3 is OpenAI\'s latest image generation model that creates highly detailed and contextually accurate images from natural language descriptions.',
      features: [
        'Text-to-image generation',
        'Image variations',
        'Inpainting',
        'High-quality outputs',
        'API access'
      ],
      useCases: [
        'Concept visualization',
        'Marketing materials',
        'Product design',
        'Creative exploration'
      ],
      tags: ['AI', 'image-generation', 'openai', 'design'],
      rating: 4.7,
      reviewCount: 980
    }
  ],
  
  // Creative & Design > Graphic Design
  'graphic-design': [
    {
      name: 'Figma',
      slug: 'figma',
      tagline: 'The collaborative interface design tool',
      logoUrl: '/logos/figma.png',
      website: 'https://www.figma.com',
      pricing: 'freemium',
      badges: ['popular', 'featured'],
      category: 'Creative & Design',
      categorySlug: 'creative-design',
      subcategory: 'Graphic Design',
      subcategorySlug: 'graphic-design',
      description: 'Figma is the first professional-grade online tool created specifically for interface design.',
      features: [
        'Real-time collaboration',
        'Vector networks',
        'Prototyping',
        'Design systems',
        'Plugins and widgets'
      ],
      useCases: [
        'UI/UX design',
        'Wireframing',
        'Prototyping',
        'Design systems'
      ],
      tags: ['design', 'ui', 'ux', 'collaboration'],
      rating: 4.7,
      reviewCount: 3560
    },
    {
      name: 'Adobe Photoshop',
      slug: 'adobe-photoshop',
      tagline: 'The world\'s best imaging and graphic design software',
      logoUrl: '/logos/photoshop.png',
      website: 'https://www.adobe.com/products/photoshop.html',
      pricing: 'paid',
      badges: ['popular', 'enterprise'],
      category: 'Creative & Design',
      categorySlug: 'creative-design',
      subcategory: 'Graphic Design',
      subcategorySlug: 'graphic-design',
      description: 'Create and enhance photographs, illustrations, and 3D artwork. Design websites and mobile apps. Edit videos, simulate real-life paintings, and more.',
      features: [
        'Advanced image editing',
        'Layer-based editing',
        'AI-powered tools',
        '3D design capabilities',
        'Extensive plugin support'
      ],
      useCases: [
        'Photo editing',
        'Digital painting',
        'Graphic design',
        'Web design'
      ],
      tags: ['design', 'photo-editing', 'adobe', 'graphics'],
      rating: 4.8,
      reviewCount: 12400
    }
  ],
  
  // Productivity & Business > Project Management
  'project-management': [
    {
      name: 'Notion',
      slug: 'notion',
      tagline: 'All-in-one workspace for notes, docs, and tasks',
      logoUrl: '/logos/notion.png',
      website: 'https://www.notion.so',
      pricing: 'freemium',
      badges: ['popular', 'featured'],
      category: 'Productivity & Business',
      categorySlug: 'productivity-business',
      subcategory: 'Project Management',
      subcategorySlug: 'project-management',
      description: 'A unified workspace that combines notes, docs, project management, and wikis in one place.',
      features: [
        'Customizable databases',
        'Task management',
        'Team collaboration',
        'Documentation',
        'Templates'
      ],
      useCases: [
        'Project management',
        'Knowledge base',
        'Team wiki',
        'Personal organization'
      ],
      tags: ['productivity', 'collaboration', 'docs', 'tasks'],
      rating: 4.8,
      reviewCount: 2870
    },
    {
      name: 'Asana',
      slug: 'asana',
      tagline: 'Work management platform for teams',
      logoUrl: '/logos/asana.png',
      website: 'https://asana.com',
      pricing: 'freemium',
      badges: ['popular', 'enterprise'],
      category: 'Productivity & Business',
      categorySlug: 'productivity-business',
      subcategory: 'Project Management',
      subcategorySlug: 'project-management',
      description: 'Asana is a web and mobile work management platform designed to help teams organize, track, and manage their work.',
      features: [
        'Task tracking',
        'Timeline views',
        'Workflow automation',
        'Team collaboration',
        'Reporting and analytics'
      ],
      useCases: [
        'Project tracking',
        'Team coordination',
        'Workflow management',
        'Goal tracking'
      ],
      tags: ['productivity', 'project-management', 'collaboration'],
      rating: 4.6,
      reviewCount: 5200
    },
    {
      name: 'Monday.com',
      slug: 'monday',
      tagline: 'Work OS for teams',
      logoUrl: '/logos/monday.png',
      website: 'https://monday.com',
      pricing: 'freemium',
      badges: ['popular', 'featured'],
      category: 'Productivity & Business',
      categorySlug: 'productivity-business',
      subcategory: 'Project Management',
      subcategorySlug: 'project-management',
      description: 'Monday.com is a Work OS that powers teams to run processes, projects, and workflows in one digital workspace.',
      features: ['Visual boards', 'Automation', 'Integrations', 'Time tracking', 'Custom workflows'],
      useCases: ['Project tracking', 'Team collaboration', 'Workflow automation', 'Resource management'],
      tags: ['project-management', 'collaboration', 'automation', 'workflows'],
      rating: 4.7,
      reviewCount: 14200
    },
    {
      name: 'Trello',
      slug: 'trello',
      tagline: 'Organize anything, together',
      logoUrl: '/logos/trello.png',
      website: 'https://trello.com',
      pricing: 'freemium',
      badges: ['popular'],
      category: 'Productivity & Business',
      categorySlug: 'productivity-business',
      subcategory: 'Project Management',
      subcategorySlug: 'project-management',
      description: 'Trello is a collaboration tool that organizes your projects into boards for easy task management.',
      features: ['Kanban boards', 'Power-ups', 'Automation', 'Templates', 'Mobile apps'],
      useCases: ['Task management', 'Team collaboration', 'Personal organization', 'Agile workflows'],
      tags: ['project-management', 'kanban', 'collaboration', 'tasks'],
      rating: 4.5,
      reviewCount: 28900
    },
    {
      name: 'ClickUp',
      slug: 'clickup',
      tagline: 'One app to replace them all',
      logoUrl: '/logos/clickup.png',
      website: 'https://clickup.com',
      pricing: 'freemium',
      badges: ['popular', 'trending'],
      category: 'Productivity & Business',
      categorySlug: 'productivity-business',
      subcategory: 'Project Management',
      subcategorySlug: 'project-management',
      description: 'ClickUp is an all-in-one productivity platform for teams to plan, organize, and collaborate.',
      features: ['Multiple views', 'Docs', 'Goals', 'Time tracking', 'Automation'],
      useCases: ['Project management', 'Task tracking', 'Documentation', 'Team collaboration'],
      tags: ['project-management', 'productivity', 'all-in-one', 'collaboration'],
      rating: 4.6,
      reviewCount: 19800
    },
    {
      name: 'Jira',
      slug: 'jira',
      tagline: 'Project management for agile teams',
      logoUrl: '/logos/jira.png',
      website: 'https://www.atlassian.com/software/jira',
      pricing: 'freemium',
      badges: ['popular', 'enterprise'],
      category: 'Productivity & Business',
      categorySlug: 'productivity-business',
      subcategory: 'Project Management',
      subcategorySlug: 'project-management',
      description: 'Jira is a powerful project management tool for agile teams to plan, track, and release software.',
      features: ['Scrum boards', 'Kanban boards', 'Roadmaps', 'Reports', 'Integrations'],
      useCases: ['Software development', 'Agile management', 'Bug tracking', 'Sprint planning'],
      tags: ['project-management', 'agile', 'scrum', 'software-development'],
      rating: 4.4,
      reviewCount: 34500
    },
    {
      name: 'Basecamp',
      slug: 'basecamp',
      tagline: 'Project management and team communication',
      logoUrl: '/logos/basecamp.png',
      website: 'https://basecamp.com',
      pricing: 'paid',
      badges: ['featured'],
      category: 'Productivity & Business',
      categorySlug: 'productivity-business',
      subcategory: 'Project Management',
      subcategorySlug: 'project-management',
      description: 'Basecamp is a real-time communication tool that helps teams stay on the same page.',
      features: ['Message boards', 'To-dos', 'Schedules', 'Docs', 'File storage'],
      useCases: ['Team communication', 'Project organization', 'Client collaboration'],
      tags: ['project-management', 'communication', 'collaboration'],
      rating: 4.3,
      reviewCount: 11200
    }
  ],

  // Cryptocurrency & Blockchain > Crypto Exchanges
  'crypto-exchanges': [
    {
      name: 'Binance',
      slug: 'binance',
      tagline: 'World\'s largest cryptocurrency exchange',
      logoUrl: '/logos/binance.png',
      website: 'https://www.binance.com',
      pricing: 'free',
      badges: ['popular', 'featured'],
      category: 'Cryptocurrency & Blockchain',
      categorySlug: 'cryptocurrency-blockchain',
      subcategory: 'Crypto Exchanges',
      subcategorySlug: 'crypto-exchanges',
      description: 'Binance is the world\'s largest cryptocurrency exchange by trading volume, offering trading in hundreds of cryptocurrencies.',
      features: ['Spot trading', 'Futures trading', 'Staking', 'NFT marketplace', 'Low fees'],
      useCases: ['Crypto trading', 'Investment', 'Staking rewards', 'DeFi access'],
      tags: ['crypto', 'trading', 'exchange', 'bitcoin'],
      rating: 4.5,
      reviewCount: 8900
    },
    {
      name: 'Coinbase',
      slug: 'coinbase',
      tagline: 'Buy, sell, and manage cryptocurrency',
      logoUrl: '/logos/coinbase.png',
      website: 'https://www.coinbase.com',
      pricing: 'free',
      badges: ['popular', 'enterprise'],
      category: 'Cryptocurrency & Blockchain',
      categorySlug: 'cryptocurrency-blockchain',
      subcategory: 'Crypto Exchanges',
      subcategorySlug: 'crypto-exchanges',
      description: 'Coinbase is a secure platform that makes it easy to buy, sell, and store cryptocurrency.',
      features: ['Easy to use', 'Secure storage', 'Institutional trading', 'Staking', 'Learn & Earn'],
      useCases: ['Beginner trading', 'Long-term holding', 'Earning crypto', 'Portfolio tracking'],
      tags: ['crypto', 'exchange', 'wallet', 'trading'],
      rating: 4.3,
      reviewCount: 12400
    },
    {
      name: 'Kraken',
      slug: 'kraken',
      tagline: 'Advanced cryptocurrency trading platform',
      logoUrl: '/logos/kraken.png',
      website: 'https://www.kraken.com',
      pricing: 'free',
      badges: ['featured'],
      category: 'Cryptocurrency & Blockchain',
      categorySlug: 'cryptocurrency-blockchain',
      subcategory: 'Crypto Exchanges',
      subcategorySlug: 'crypto-exchanges',
      description: 'Kraken is a trusted cryptocurrency exchange with advanced trading features and security.',
      features: ['Advanced trading', 'Margin trading', 'Futures', 'Staking', 'OTC desk'],
      useCases: ['Professional trading', 'Margin trading', 'Institutional investing'],
      tags: ['crypto', 'exchange', 'trading', 'advanced'],
      rating: 4.4,
      reviewCount: 6700
    }
  ],

  // Cryptocurrency & Blockchain > Crypto Wallets
  'crypto-wallets': [
    {
      name: 'MetaMask',
      slug: 'metamask',
      tagline: 'Crypto wallet & gateway to blockchain apps',
      logoUrl: '/logos/metamask.png',
      website: 'https://metamask.io',
      pricing: 'free',
      badges: ['popular', 'featured'],
      category: 'Cryptocurrency & Blockchain',
      categorySlug: 'cryptocurrency-blockchain',
      subcategory: 'Crypto Wallets',
      subcategorySlug: 'crypto-wallets',
      description: 'MetaMask is a cryptocurrency wallet and gateway to blockchain applications.',
      features: ['Browser extension', 'Mobile app', 'DApp browser', 'Token swaps', 'NFT support'],
      useCases: ['Web3 access', 'DeFi trading', 'NFT storage', 'Token management'],
      tags: ['wallet', 'web3', 'ethereum', 'defi'],
      rating: 4.6,
      reviewCount: 15200
    },
    {
      name: 'Ledger',
      slug: 'ledger',
      tagline: 'Hardware wallet for cryptocurrency',
      logoUrl: '/logos/ledger.png',
      website: 'https://www.ledger.com',
      pricing: 'paid',
      badges: ['featured', 'enterprise'],
      category: 'Cryptocurrency & Blockchain',
      categorySlug: 'cryptocurrency-blockchain',
      subcategory: 'Crypto Wallets',
      subcategorySlug: 'crypto-wallets',
      description: 'Ledger offers hardware wallets for secure cryptocurrency storage.',
      features: ['Cold storage', 'Multi-currency', 'Secure chip', 'Mobile app', 'Staking'],
      useCases: ['Secure storage', 'Long-term holding', 'Portfolio management'],
      tags: ['hardware-wallet', 'security', 'cold-storage'],
      rating: 4.7,
      reviewCount: 8900
    },
    {
      name: 'Trust Wallet',
      slug: 'trust-wallet',
      tagline: 'Multi-chain crypto wallet',
      logoUrl: '/logos/trust-wallet.png',
      website: 'https://trustwallet.com',
      pricing: 'free',
      badges: ['popular'],
      category: 'Cryptocurrency & Blockchain',
      categorySlug: 'cryptocurrency-blockchain',
      subcategory: 'Crypto Wallets',
      subcategorySlug: 'crypto-wallets',
      description: 'Trust Wallet is a secure, decentralized cryptocurrency wallet supporting multiple blockchains.',
      features: ['Multi-chain support', 'DApp browser', 'Staking', 'NFT gallery', 'Token swaps'],
      useCases: ['Mobile crypto storage', 'DeFi access', 'NFT collection'],
      tags: ['wallet', 'mobile', 'multi-chain', 'defi'],
      rating: 4.5,
      reviewCount: 11300
    }
  ],

  // NFT & Digital Art > NFT Marketplaces
  'nft-marketplaces': [
    {
      name: 'OpenSea',
      slug: 'opensea',
      tagline: 'The largest NFT marketplace',
      logoUrl: '/logos/opensea.png',
      website: 'https://opensea.io',
      pricing: 'free',
      badges: ['popular', 'featured'],
      category: 'NFT & Digital Art',
      categorySlug: 'nft-digital-art',
      subcategory: 'NFT Marketplaces',
      subcategorySlug: 'nft-marketplaces',
      description: 'OpenSea is the world\'s first and largest NFT marketplace for buying, selling, and discovering digital assets.',
      features: ['Multi-chain support', 'Gas-free listings', 'Collection offers', 'Rarity tools', 'Creator royalties'],
      useCases: ['NFT trading', 'Digital art collection', 'Creator monetization'],
      tags: ['nft', 'marketplace', 'ethereum', 'digital-art'],
      rating: 4.4,
      reviewCount: 9800
    },
    {
      name: 'Blur',
      slug: 'blur',
      tagline: 'NFT marketplace for pro traders',
      logoUrl: '/logos/blur.png',
      website: 'https://blur.io',
      pricing: 'free',
      badges: ['trending', 'featured'],
      category: 'NFT & Digital Art',
      categorySlug: 'nft-digital-art',
      subcategory: 'NFT Marketplaces',
      subcategorySlug: 'nft-marketplaces',
      description: 'Blur is an NFT marketplace built for professional traders with advanced features and zero fees.',
      features: ['Zero marketplace fees', 'Advanced analytics', 'Portfolio tracking', 'Sweep floor', 'Bulk listings'],
      useCases: ['Professional NFT trading', 'Portfolio management', 'Market analysis'],
      tags: ['nft', 'trading', 'marketplace', 'pro'],
      rating: 4.6,
      reviewCount: 5400
    },
    {
      name: 'Magic Eden',
      slug: 'magic-eden',
      tagline: 'Leading Solana NFT marketplace',
      logoUrl: '/logos/magic-eden.png',
      website: 'https://magiceden.io',
      pricing: 'free',
      badges: ['popular'],
      category: 'NFT & Digital Art',
      categorySlug: 'nft-digital-art',
      subcategory: 'NFT Marketplaces',
      subcategorySlug: 'nft-marketplaces',
      description: 'Magic Eden is the leading NFT marketplace on Solana with multi-chain support.',
      features: ['Multi-chain', 'Launchpad', 'Rarity tools', 'Low fees', 'Creator tools'],
      useCases: ['Solana NFTs', 'New collections', 'Trading'],
      tags: ['nft', 'solana', 'marketplace', 'multi-chain'],
      rating: 4.5,
      reviewCount: 7200
    }
  ],

  // Gaming & Esports > Game Development
  'game-development': [
    {
      name: 'Unity',
      slug: 'unity',
      tagline: 'Real-time 3D development platform',
      logoUrl: '/logos/unity.png',
      website: 'https://unity.com',
      pricing: 'freemium',
      badges: ['popular', 'featured', 'enterprise'],
      category: 'Gaming & Esports',
      categorySlug: 'gaming-esports',
      subcategory: 'Game Development',
      subcategorySlug: 'game-development',
      description: 'Unity is the world\'s leading platform for creating and operating real-time 3D content.',
      features: ['Cross-platform', '2D & 3D', 'Asset store', 'Visual scripting', 'Multiplayer'],
      useCases: ['Game development', 'AR/VR apps', 'Simulations', 'Architectural viz'],
      tags: ['game-engine', '3d', 'development', 'cross-platform'],
      rating: 4.7,
      reviewCount: 18900
    },
    {
      name: 'Unreal Engine',
      slug: 'unreal-engine',
      tagline: 'Most powerful real-time 3D creation tool',
      logoUrl: '/logos/unreal.png',
      website: 'https://www.unrealengine.com',
      pricing: 'free',
      badges: ['featured', 'enterprise'],
      category: 'Gaming & Esports',
      categorySlug: 'gaming-esports',
      subcategory: 'Game Development',
      subcategorySlug: 'game-development',
      description: 'Unreal Engine is the world\'s most open and advanced real-time 3D creation tool.',
      features: ['Photorealistic graphics', 'Blueprint visual scripting', 'Marketplace', 'Cross-platform', 'MetaHuman'],
      useCases: ['AAA games', 'Film production', 'Architecture', 'Virtual production'],
      tags: ['game-engine', '3d', 'graphics', 'aaa'],
      rating: 4.8,
      reviewCount: 14200
    },
    {
      name: 'Godot',
      slug: 'godot',
      tagline: 'Free and open source game engine',
      logoUrl: '/logos/godot.png',
      website: 'https://godotengine.org',
      pricing: 'open-source',
      badges: ['popular'],
      category: 'Gaming & Esports',
      categorySlug: 'gaming-esports',
      subcategory: 'Game Development',
      subcategorySlug: 'game-development',
      description: 'Godot is a feature-packed, cross-platform game engine to create 2D and 3D games.',
      features: ['Open source', 'Visual editor', 'GDScript', '2D & 3D', 'Lightweight'],
      useCases: ['Indie games', '2D games', 'Mobile games', 'Learning'],
      tags: ['game-engine', 'open-source', '2d', '3d'],
      rating: 4.6,
      reviewCount: 8700
    }
  ],

  // Podcasting > Podcast Hosting
  'podcast-hosting': [
    {
      name: 'Anchor',
      slug: 'anchor',
      tagline: 'Free podcast hosting by Spotify',
      logoUrl: '/logos/anchor.png',
      website: 'https://anchor.fm',
      pricing: 'free',
      badges: ['popular', 'featured'],
      category: 'Podcasting',
      categorySlug: 'podcasting',
      subcategory: 'Podcast Hosting',
      subcategorySlug: 'podcast-hosting',
      description: 'Anchor is the easiest way to make a podcast, brought to you by Spotify.',
      features: ['Free hosting', 'Distribution', 'Recording tools', 'Monetization', 'Analytics'],
      useCases: ['Podcast creation', 'Distribution', 'Monetization'],
      tags: ['podcast', 'hosting', 'spotify', 'free'],
      rating: 4.5,
      reviewCount: 12800
    },
    {
      name: 'Buzzsprout',
      slug: 'buzzsprout',
      tagline: 'Podcast hosting made easy',
      logoUrl: '/logos/buzzsprout.png',
      website: 'https://www.buzzsprout.com',
      pricing: 'freemium',
      badges: ['popular'],
      category: 'Podcasting',
      categorySlug: 'podcasting',
      subcategory: 'Podcast Hosting',
      subcategorySlug: 'podcast-hosting',
      description: 'Buzzsprout makes it easy to upload, host, and promote your podcast.',
      features: ['Easy upload', 'Distribution', 'Analytics', 'Website', 'Monetization'],
      useCases: ['Podcast hosting', 'Analytics', 'Growth'],
      tags: ['podcast', 'hosting', 'analytics'],
      rating: 4.7,
      reviewCount: 8900
    },
    {
      name: 'Transistor',
      slug: 'transistor',
      tagline: 'Professional podcast hosting',
      logoUrl: '/logos/transistor.png',
      website: 'https://transistor.fm',
      pricing: 'paid',
      badges: ['featured', 'enterprise'],
      category: 'Podcasting',
      categorySlug: 'podcasting',
      subcategory: 'Podcast Hosting',
      subcategorySlug: 'podcast-hosting',
      description: 'Transistor is professional podcast hosting and analytics for brands and businesses.',
      features: ['Unlimited shows', 'Private podcasts', 'Analytics', 'Team accounts', 'API'],
      useCases: ['Business podcasts', 'Multiple shows', 'Team collaboration'],
      tags: ['podcast', 'hosting', 'business', 'analytics'],
      rating: 4.8,
      reviewCount: 3400
    }
  ],

  // Music Production > DAW Software
  'daw-software': [
    {
      name: 'Ableton Live',
      slug: 'ableton-live',
      tagline: 'Music production and performance software',
      logoUrl: '/logos/ableton.png',
      website: 'https://www.ableton.com',
      pricing: 'paid',
      badges: ['popular', 'featured'],
      category: 'Music Production',
      categorySlug: 'music-production',
      subcategory: 'DAW Software',
      subcategorySlug: 'daw-software',
      description: 'Ableton Live is a digital audio workstation for music creation and performance.',
      features: ['Session view', 'MIDI sequencing', 'Audio effects', 'Max for Live', 'Push integration'],
      useCases: ['Music production', 'Live performance', 'Electronic music', 'Beat making'],
      tags: ['daw', 'music-production', 'electronic', 'live'],
      rating: 4.7,
      reviewCount: 9800
    },
    {
      name: 'FL Studio',
      slug: 'fl-studio',
      tagline: 'Complete software music production environment',
      logoUrl: '/logos/fl-studio.png',
      website: 'https://www.image-line.com',
      pricing: 'paid',
      badges: ['popular'],
      category: 'Music Production',
      categorySlug: 'music-production',
      subcategory: 'DAW Software',
      subcategorySlug: 'daw-software',
      description: 'FL Studio is a complete software music production environment, representing more than 20 years of innovative development.',
      features: ['Pattern-based sequencer', 'Piano roll', 'Mixer', 'Plugins', 'Lifetime free updates'],
      useCases: ['Beat making', 'Hip-hop production', 'EDM', 'Composition'],
      tags: ['daw', 'music-production', 'beats', 'edm'],
      rating: 4.6,
      reviewCount: 11200
    },
    {
      name: 'Logic Pro',
      slug: 'logic-pro',
      tagline: 'Professional music production for Mac',
      logoUrl: '/logos/logic-pro.png',
      website: 'https://www.apple.com/logic-pro',
      pricing: 'paid',
      badges: ['featured', 'enterprise'],
      category: 'Music Production',
      categorySlug: 'music-production',
      subcategory: 'DAW Software',
      subcategorySlug: 'daw-software',
      description: 'Logic Pro is a complete professional recording studio on the Mac.',
      features: ['Complete sound library', 'MIDI editing', 'Mixing', 'Mastering', 'Plugins'],
      useCases: ['Professional recording', 'Mixing', 'Mastering', 'Composition'],
      tags: ['daw', 'mac', 'professional', 'apple'],
      rating: 4.8,
      reviewCount: 7600
    }
  ],

  // Artificial Intelligence > AI Platforms
  'ai-platforms': [
    {
      name: 'ChatGPT',
      slug: 'chatgpt',
      tagline: 'AI-powered conversational assistant',
      logoUrl: '/logos/chatgpt.png',
      website: 'https://chat.openai.com',
      pricing: 'freemium',
      badges: ['popular', 'featured', 'trending'],
      category: 'Artificial Intelligence',
      categorySlug: 'artificial-intelligence',
      subcategory: 'AI Platforms',
      subcategorySlug: 'ai-platforms',
      description: 'ChatGPT is an AI-powered chatbot that can answer questions, write content, code, and more.',
      features: ['Natural conversation', 'Code generation', 'Content writing', 'Analysis', 'API access'],
      useCases: ['Content creation', 'Coding help', 'Research', 'Learning', 'Automation'],
      tags: ['ai', 'chatbot', 'gpt', 'openai'],
      rating: 4.8,
      reviewCount: 45600
    },
    {
      name: 'Claude',
      slug: 'claude',
      tagline: 'AI assistant by Anthropic',
      logoUrl: '/logos/claude.png',
      website: 'https://claude.ai',
      pricing: 'freemium',
      badges: ['featured', 'trending'],
      category: 'Artificial Intelligence',
      categorySlug: 'artificial-intelligence',
      subcategory: 'AI Platforms',
      subcategorySlug: 'ai-platforms',
      description: 'Claude is an AI assistant created by Anthropic that can help with analysis, writing, math, coding, and more.',
      features: ['Long context', 'Document analysis', 'Coding', 'Safety focused', 'API access'],
      useCases: ['Document analysis', 'Research', 'Coding', 'Writing'],
      tags: ['ai', 'assistant', 'anthropic', 'chatbot'],
      rating: 4.7,
      reviewCount: 12300
    },
    {
      name: 'Google Gemini',
      slug: 'google-gemini',
      tagline: 'Google\'s most capable AI model',
      logoUrl: '/logos/gemini.png',
      website: 'https://gemini.google.com',
      pricing: 'freemium',
      badges: ['featured', 'trending'],
      category: 'Artificial Intelligence',
      categorySlug: 'artificial-intelligence',
      subcategory: 'AI Platforms',
      subcategorySlug: 'ai-platforms',
      description: 'Gemini is Google\'s most capable AI model, built to be multimodal and highly efficient.',
      features: ['Multimodal', 'Google integration', 'Real-time info', 'Code generation', 'Image understanding'],
      useCases: ['Research', 'Content creation', 'Coding', 'Analysis'],
      tags: ['ai', 'google', 'multimodal', 'assistant'],
      rating: 4.6,
      reviewCount: 18900
    }
  ],

  // Cybersecurity > VPN Services
  'vpn-services': [
    {
      name: 'NordVPN',
      slug: 'nordvpn',
      tagline: 'Fast, secure, and private VPN service',
      logoUrl: '/logos/nordvpn.png',
      website: 'https://nordvpn.com',
      pricing: 'paid',
      badges: ['popular', 'featured'],
      category: 'Cybersecurity',
      categorySlug: 'cybersecurity',
      subcategory: 'VPN Services',
      subcategorySlug: 'vpn-services',
      description: 'NordVPN is a leading VPN service provider that offers secure and private internet access.',
      features: ['5400+ servers', 'No-logs policy', 'Kill switch', 'Split tunneling', 'Threat protection'],
      useCases: ['Privacy protection', 'Secure browsing', 'Geo-unblocking', 'Public WiFi security'],
      tags: ['vpn', 'security', 'privacy', 'encryption'],
      rating: 4.7,
      reviewCount: 23400
    },
    {
      name: 'ExpressVPN',
      slug: 'expressvpn',
      tagline: 'High-speed, secure VPN',
      logoUrl: '/logos/expressvpn.png',
      website: 'https://www.expressvpn.com',
      pricing: 'paid',
      badges: ['popular', 'featured'],
      category: 'Cybersecurity',
      categorySlug: 'cybersecurity',
      subcategory: 'VPN Services',
      subcategorySlug: 'vpn-services',
      description: 'ExpressVPN is a premium VPN service known for its speed and security.',
      features: ['Fast speeds', '94 countries', 'No-logs', 'Split tunneling', '24/7 support'],
      useCases: ['Streaming', 'Gaming', 'Privacy', 'Security'],
      tags: ['vpn', 'fast', 'security', 'streaming'],
      rating: 4.6,
      reviewCount: 19800
    },
    {
      name: 'Surfshark',
      slug: 'surfshark',
      tagline: 'Affordable VPN with unlimited devices',
      logoUrl: '/logos/surfshark.png',
      website: 'https://surfshark.com',
      pricing: 'paid',
      badges: ['popular'],
      category: 'Cybersecurity',
      categorySlug: 'cybersecurity',
      subcategory: 'VPN Services',
      subcategorySlug: 'vpn-services',
      description: 'Surfshark is an affordable VPN service that allows unlimited device connections.',
      features: ['Unlimited devices', 'CleanWeb', 'MultiHop', 'No-logs', 'Kill switch'],
      useCases: ['Family protection', 'Budget VPN', 'Multiple devices'],
      tags: ['vpn', 'affordable', 'unlimited', 'family'],
      rating: 4.5,
      reviewCount: 15600
    }
  ],

  // Cybersecurity > Password Managers
  'password-managers': [
    {
      name: '1Password',
      slug: '1password',
      tagline: 'The world\'s most-loved password manager',
      logoUrl: '/logos/1password.png',
      website: 'https://1password.com',
      pricing: 'paid',
      badges: ['popular', 'featured', 'enterprise'],
      category: 'Cybersecurity',
      categorySlug: 'cybersecurity',
      subcategory: 'Password Managers',
      subcategorySlug: 'password-managers',
      description: '1Password is a password manager that keeps you safe online with secure password storage and autofill.',
      features: ['Secure vault', 'Autofill', 'Password generator', 'Travel mode', 'Watchtower'],
      useCases: ['Password management', 'Team sharing', 'Secure notes', 'Family accounts'],
      tags: ['password', 'security', 'vault', 'encryption'],
      rating: 4.8,
      reviewCount: 14200
    },
    {
      name: 'LastPass',
      slug: 'lastpass',
      tagline: 'Password manager and digital vault',
      logoUrl: '/logos/lastpass.png',
      website: 'https://www.lastpass.com',
      pricing: 'freemium',
      badges: ['popular'],
      category: 'Cybersecurity',
      categorySlug: 'cybersecurity',
      subcategory: 'Password Managers',
      subcategorySlug: 'password-managers',
      description: 'LastPass is a password manager that stores encrypted passwords online.',
      features: ['Password vault', 'Autofill', 'Password generator', 'Secure sharing', 'Dark web monitoring'],
      useCases: ['Password storage', 'Auto-login', 'Secure sharing'],
      tags: ['password', 'security', 'vault'],
      rating: 4.4,
      reviewCount: 18900
    },
    {
      name: 'Bitwarden',
      slug: 'bitwarden',
      tagline: 'Open source password manager',
      logoUrl: '/logos/bitwarden.png',
      website: 'https://bitwarden.com',
      pricing: 'freemium',
      badges: ['popular', 'featured'],
      category: 'Cybersecurity',
      categorySlug: 'cybersecurity',
      subcategory: 'Password Managers',
      subcategorySlug: 'password-managers',
      description: 'Bitwarden is an open source password manager that stores sensitive information securely.',
      features: ['Open source', 'Cross-platform', 'Self-hosting', 'Password generator', 'Secure sharing'],
      useCases: ['Password management', 'Self-hosting', 'Team passwords'],
      tags: ['password', 'open-source', 'security'],
      rating: 4.7,
      reviewCount: 11200
    }
  ],

  // Video Streaming > Live Streaming
  'live-streaming': [
    {
      name: 'OBS Studio',
      slug: 'obs-studio',
      tagline: 'Free and open source streaming software',
      logoUrl: '/logos/obs.png',
      website: 'https://obsproject.com',
      pricing: 'open-source',
      badges: ['popular', 'featured'],
      category: 'Video Streaming',
      categorySlug: 'video-streaming',
      subcategory: 'Live Streaming',
      subcategorySlug: 'live-streaming',
      description: 'OBS Studio is free and open source software for video recording and live streaming.',
      features: ['Multi-platform', 'Scene composition', 'Audio mixer', 'Plugins', 'Studio mode'],
      useCases: ['Twitch streaming', 'YouTube live', 'Recording', 'Virtual events'],
      tags: ['streaming', 'recording', 'open-source', 'twitch'],
      rating: 4.8,
      reviewCount: 34500
    },
    {
      name: 'Streamlabs',
      slug: 'streamlabs',
      tagline: 'All-in-one live streaming software',
      logoUrl: '/logos/streamlabs.png',
      website: 'https://streamlabs.com',
      pricing: 'freemium',
      badges: ['popular'],
      category: 'Video Streaming',
      categorySlug: 'video-streaming',
      subcategory: 'Live Streaming',
      subcategorySlug: 'live-streaming',
      description: 'Streamlabs is a free and open source streaming software built on OBS with added features.',
      features: ['Widgets', 'Alerts', 'Chatbot', 'Themes', 'Multistream'],
      useCases: ['Gaming streams', 'Monetization', 'Viewer engagement'],
      tags: ['streaming', 'gaming', 'widgets', 'alerts'],
      rating: 4.5,
      reviewCount: 18900
    },
    {
      name: 'Restream',
      slug: 'restream',
      tagline: 'Stream to multiple platforms simultaneously',
      logoUrl: '/logos/restream.png',
      website: 'https://restream.io',
      pricing: 'freemium',
      badges: ['featured'],
      category: 'Video Streaming',
      categorySlug: 'video-streaming',
      subcategory: 'Live Streaming',
      subcategorySlug: 'live-streaming',
      description: 'Restream allows you to stream live video to 30+ platforms simultaneously.',
      features: ['Multistreaming', 'Chat aggregation', 'Analytics', 'Scheduling', 'Cloud streaming'],
      useCases: ['Multi-platform streaming', 'Audience growth', 'Professional broadcasting'],
      tags: ['multistream', 'streaming', 'broadcasting'],
      rating: 4.6,
      reviewCount: 8700
    }
  ],

  // Photography > Photo Editing
  'photo-editing': [
    {
      name: 'Adobe Lightroom',
      slug: 'adobe-lightroom',
      tagline: 'Professional photo editing and organization',
      logoUrl: '/logos/lightroom.png',
      website: 'https://www.adobe.com/products/photoshop-lightroom',
      pricing: 'paid',
      badges: ['popular', 'featured', 'enterprise'],
      category: 'Photography',
      categorySlug: 'photography',
      subcategory: 'Photo Editing',
      subcategorySlug: 'photo-editing',
      description: 'Adobe Lightroom is a cloud-based photo service for editing, organizing, storing, and sharing photos.',
      features: ['RAW editing', 'Presets', 'Cloud sync', 'Mobile app', 'AI-powered editing'],
      useCases: ['Professional photography', 'Batch editing', 'Photo organization'],
      tags: ['photo-editing', 'raw', 'adobe', 'professional'],
      rating: 4.7,
      reviewCount: 23400
    },
    {
      name: 'Capture One',
      slug: 'capture-one',
      tagline: 'Professional RAW image editing software',
      logoUrl: '/logos/capture-one.png',
      website: 'https://www.captureone.com',
      pricing: 'paid',
      badges: ['featured', 'enterprise'],
      category: 'Photography',
      categorySlug: 'photography',
      subcategory: 'Photo Editing',
      subcategorySlug: 'photo-editing',
      description: 'Capture One is professional photo editing software with powerful color grading and tethering.',
      features: ['Color grading', 'Tethered shooting', 'Layers', 'Styles', 'Batch processing'],
      useCases: ['Studio photography', 'Commercial work', 'Fashion photography'],
      tags: ['photo-editing', 'raw', 'professional', 'tethering'],
      rating: 4.6,
      reviewCount: 8900
    },
    {
      name: 'Luminar Neo',
      slug: 'luminar-neo',
      tagline: 'AI-powered photo editing',
      logoUrl: '/logos/luminar.png',
      website: 'https://skylum.com/luminar',
      pricing: 'paid',
      badges: ['trending'],
      category: 'Photography',
      categorySlug: 'photography',
      subcategory: 'Photo Editing',
      subcategorySlug: 'photo-editing',
      description: 'Luminar Neo is an innovative image editor with AI-powered tools for creative photo editing.',
      features: ['AI sky replacement', 'Portrait enhancement', 'Layers', 'Presets', 'Extensions'],
      useCases: ['Creative editing', 'Portrait retouching', 'Landscape photography'],
      tags: ['photo-editing', 'ai', 'creative', 'presets'],
      rating: 4.5,
      reviewCount: 12300
    }
  ],

  // Web3 & Metaverse > Metaverse Platforms
  'metaverse-platforms': [
    {
      name: 'Decentraland',
      slug: 'decentraland',
      tagline: 'Virtual world owned by its users',
      logoUrl: '/logos/decentraland.png',
      website: 'https://decentraland.org',
      pricing: 'free',
      badges: ['popular', 'featured'],
      category: 'Web3 & Metaverse',
      categorySlug: 'web3-metaverse',
      subcategory: 'Metaverse Platforms',
      subcategorySlug: 'metaverse-platforms',
      description: 'Decentraland is a decentralized virtual reality platform powered by Ethereum.',
      features: ['Virtual land ownership', 'NFT integration', 'Events', 'Gaming', 'Social spaces'],
      useCases: ['Virtual events', 'Digital real estate', 'Gaming', 'Social interaction'],
      tags: ['metaverse', 'web3', 'virtual-world', 'nft'],
      rating: 4.3,
      reviewCount: 6700
    },
    {
      name: 'The Sandbox',
      slug: 'the-sandbox',
      tagline: 'Create, play, and monetize in the metaverse',
      logoUrl: '/logos/sandbox.png',
      website: 'https://www.sandbox.game',
      pricing: 'free',
      badges: ['popular', 'trending'],
      category: 'Web3 & Metaverse',
      categorySlug: 'web3-metaverse',
      subcategory: 'Metaverse Platforms',
      subcategorySlug: 'metaverse-platforms',
      description: 'The Sandbox is a virtual world where players can build, own, and monetize gaming experiences.',
      features: ['VoxEdit creator', 'Game maker', 'LAND ownership', 'NFT marketplace', 'Play-to-earn'],
      useCases: ['Game creation', 'Virtual real estate', 'NFT trading', 'Events'],
      tags: ['metaverse', 'gaming', 'nft', 'web3'],
      rating: 4.4,
      reviewCount: 8900
    },
    {
      name: 'Spatial',
      slug: 'spatial',
      tagline: 'Virtual spaces for collaboration and events',
      logoUrl: '/logos/spatial.png',
      website: 'https://spatial.io',
      pricing: 'freemium',
      badges: ['featured'],
      category: 'Web3 & Metaverse',
      categorySlug: 'web3-metaverse',
      subcategory: 'Metaverse Platforms',
      subcategorySlug: 'metaverse-platforms',
      description: 'Spatial is a metaverse platform for virtual meetings, events, and galleries.',
      features: ['VR/AR support', 'NFT galleries', 'Virtual events', 'Custom spaces', 'Avatar customization'],
      useCases: ['Virtual meetings', 'Art exhibitions', 'Conferences', 'Team collaboration'],
      tags: ['metaverse', 'vr', 'collaboration', 'nft'],
      rating: 4.5,
      reviewCount: 4500
    }
  ],

  // Music Production > Music Distribution
  'music-distribution': [
    {
      name: 'DistroKid',
      slug: 'distrokid',
      tagline: 'Get your music on Spotify, Apple Music, and more',
      logoUrl: '/logos/distrokid.png',
      website: 'https://distrokid.com',
      pricing: 'paid',
      badges: ['popular', 'featured'],
      category: 'Music Production',
      categorySlug: 'music-production',
      subcategory: 'Music Distribution',
      subcategorySlug: 'music-distribution',
      description: 'DistroKid is the easiest way for musicians to get music into Spotify, Apple Music, and more.',
      features: ['Unlimited uploads', 'Keep 100% royalties', 'Fast distribution', 'YouTube monetization', 'Spotify pre-saves'],
      useCases: ['Independent artists', 'Music release', 'Streaming distribution'],
      tags: ['music-distribution', 'spotify', 'streaming', 'independent'],
      rating: 4.7,
      reviewCount: 15600
    },
    {
      name: 'TuneCore',
      slug: 'tunecore',
      tagline: 'Sell your music worldwide',
      logoUrl: '/logos/tunecore.png',
      website: 'https://www.tunecore.com',
      pricing: 'paid',
      badges: ['popular'],
      category: 'Music Production',
      categorySlug: 'music-production',
      subcategory: 'Music Distribution',
      subcategorySlug: 'music-distribution',
      description: 'TuneCore helps independent musicians make money and get their music heard on streaming platforms.',
      features: ['Global distribution', 'Publishing administration', 'YouTube monetization', 'Detailed analytics', 'Social media promotion'],
      useCases: ['Music distribution', 'Publishing rights', 'Revenue collection'],
      tags: ['music-distribution', 'publishing', 'streaming'],
      rating: 4.4,
      reviewCount: 11200
    },
    {
      name: 'CD Baby',
      slug: 'cd-baby',
      tagline: 'Independent music distribution',
      logoUrl: '/logos/cdbaby.png',
      website: 'https://cdbaby.com',
      pricing: 'paid',
      badges: ['featured'],
      category: 'Music Production',
      categorySlug: 'music-production',
      subcategory: 'Music Distribution',
      subcategorySlug: 'music-distribution',
      description: 'CD Baby is a digital music distribution service that helps independent musicians sell their music.',
      features: ['One-time fee', 'Physical distribution', 'Sync licensing', 'Show.co integration', 'Publishing services'],
      useCases: ['Music distribution', 'Physical sales', 'Sync opportunities'],
      tags: ['music-distribution', 'independent', 'physical', 'sync'],
      rating: 4.3,
      reviewCount: 9800
    }
  ],

  // Artificial Intelligence > Machine Learning
  'machine-learning': [
    {
      name: 'TensorFlow',
      slug: 'tensorflow',
      tagline: 'Open source machine learning framework',
      logoUrl: '/logos/tensorflow.png',
      website: 'https://www.tensorflow.org',
      pricing: 'open-source',
      badges: ['popular', 'featured'],
      category: 'Artificial Intelligence',
      categorySlug: 'artificial-intelligence',
      subcategory: 'Machine Learning',
      subcategorySlug: 'machine-learning',
      description: 'TensorFlow is an end-to-end open source platform for machine learning.',
      features: ['Neural networks', 'Model training', 'Deployment', 'TensorBoard', 'Keras integration'],
      useCases: ['Deep learning', 'Computer vision', 'NLP', 'Research'],
      tags: ['machine-learning', 'deep-learning', 'ai', 'open-source'],
      rating: 4.7,
      reviewCount: 28900
    },
    {
      name: 'PyTorch',
      slug: 'pytorch',
      tagline: 'Machine learning framework by Meta',
      logoUrl: '/logos/pytorch.png',
      website: 'https://pytorch.org',
      pricing: 'open-source',
      badges: ['popular', 'featured'],
      category: 'Artificial Intelligence',
      categorySlug: 'artificial-intelligence',
      subcategory: 'Machine Learning',
      subcategorySlug: 'machine-learning',
      description: 'PyTorch is an open source machine learning framework that accelerates the path from research to production.',
      features: ['Dynamic computation', 'Python-first', 'Strong GPU acceleration', 'Distributed training', 'Production deployment'],
      useCases: ['Research', 'Computer vision', 'NLP', 'Reinforcement learning'],
      tags: ['machine-learning', 'deep-learning', 'pytorch', 'research'],
      rating: 4.8,
      reviewCount: 24500
    },
    {
      name: 'Hugging Face',
      slug: 'hugging-face',
      tagline: 'The AI community building the future',
      logoUrl: '/logos/huggingface.png',
      website: 'https://huggingface.co',
      pricing: 'freemium',
      badges: ['popular', 'trending'],
      category: 'Artificial Intelligence',
      categorySlug: 'artificial-intelligence',
      subcategory: 'Machine Learning',
      subcategorySlug: 'machine-learning',
      description: 'Hugging Face is a platform for sharing and collaborating on machine learning models.',
      features: ['Model hub', 'Datasets', 'Transformers library', 'Inference API', 'Spaces'],
      useCases: ['NLP models', 'Model deployment', 'Collaboration', 'Research'],
      tags: ['machine-learning', 'nlp', 'transformers', 'models'],
      rating: 4.8,
      reviewCount: 19800
    }
  ],

  // Gaming & Esports > Esports Platforms
  'esports-platforms': [
    {
      name: 'Challengermode',
      slug: 'challengermode',
      tagline: 'Esports tournament platform',
      logoUrl: '/logos/challengermode.png',
      website: 'https://challengermode.com',
      pricing: 'freemium',
      badges: ['featured'],
      category: 'Gaming & Esports',
      categorySlug: 'gaming-esports',
      subcategory: 'Esports Platforms',
      subcategorySlug: 'esports-platforms',
      description: 'Challengermode is a platform for organizing and participating in esports tournaments.',
      features: ['Tournament creation', 'Automated brackets', 'Prize pools', 'Leaderboards', 'Team management'],
      useCases: ['Esports tournaments', 'Community competitions', 'Prize events'],
      tags: ['esports', 'tournaments', 'gaming', 'competitive'],
      rating: 4.5,
      reviewCount: 6700
    },
    {
      name: 'Toornament',
      slug: 'toornament',
      tagline: 'Esports tournament management',
      logoUrl: '/logos/toornament.png',
      website: 'https://www.toornament.com',
      pricing: 'freemium',
      badges: ['popular'],
      category: 'Gaming & Esports',
      categorySlug: 'gaming-esports',
      subcategory: 'Esports Platforms',
      subcategorySlug: 'esports-platforms',
      description: 'Toornament is a comprehensive platform for managing esports tournaments and leagues.',
      features: ['Tournament management', 'Multiple formats', 'Registration', 'Match reporting', 'Statistics'],
      useCases: ['Tournament organization', 'League management', 'Community events'],
      tags: ['esports', 'tournaments', 'management', 'leagues'],
      rating: 4.6,
      reviewCount: 5400
    },
    {
      name: 'Battlefy',
      slug: 'battlefy',
      tagline: 'Esports tournament platform',
      logoUrl: '/logos/battlefy.png',
      website: 'https://battlefy.com',
      pricing: 'freemium',
      badges: ['popular', 'featured'],
      category: 'Gaming & Esports',
      categorySlug: 'gaming-esports',
      subcategory: 'Esports Platforms',
      subcategorySlug: 'esports-platforms',
      description: 'Battlefy is the simplest way to start, manage, and find esports tournaments.',
      features: ['Tournament creation', 'Check-in system', 'Match lobbies', 'Prize distribution', 'Analytics'],
      useCases: ['Esports events', 'Online tournaments', 'Community gaming'],
      tags: ['esports', 'tournaments', 'competitive', 'gaming'],
      rating: 4.4,
      reviewCount: 8900
    }
  ],

  // NFT & Digital Art > NFT Creation Tools
  'nft-creation': [
    {
      name: 'Mintable',
      slug: 'mintable',
      tagline: 'Create and sell NFTs without code',
      logoUrl: '/logos/mintable.png',
      website: 'https://mintable.app',
      pricing: 'freemium',
      badges: ['featured'],
      category: 'NFT & Digital Art',
      categorySlug: 'nft-digital-art',
      subcategory: 'NFT Creation Tools',
      subcategorySlug: 'nft-creation',
      description: 'Mintable is a platform that allows anyone to create, buy, and sell NFTs without any coding knowledge.',
      features: ['Gasless minting', 'No-code creation', 'Marketplace', 'Auctions', 'Collections'],
      useCases: ['NFT creation', 'Digital art', 'Collectibles'],
      tags: ['nft', 'minting', 'no-code', 'marketplace'],
      rating: 4.3,
      reviewCount: 4500
    },
    {
      name: 'Manifold',
      slug: 'manifold',
      tagline: 'NFT creation platform for creators',
      logoUrl: '/logos/manifold.png',
      website: 'https://manifold.xyz',
      pricing: 'free',
      badges: ['featured', 'trending'],
      category: 'NFT & Digital Art',
      categorySlug: 'nft-digital-art',
      subcategory: 'NFT Creation Tools',
      subcategorySlug: 'nft-creation',
      description: 'Manifold is a platform that gives creators full ownership and control over their NFT smart contracts.',
      features: ['Custom contracts', 'Multi-chain', 'Royalty enforcement', 'Burn & redeem', 'Claim pages'],
      useCases: ['Professional NFT drops', 'Custom collections', 'Creator control'],
      tags: ['nft', 'smart-contracts', 'creator-tools', 'web3'],
      rating: 4.7,
      reviewCount: 3200
    },
    {
      name: 'Rarible',
      slug: 'rarible',
      tagline: 'Create, sell and collect NFTs',
      logoUrl: '/logos/rarible.png',
      website: 'https://rarible.com',
      pricing: 'free',
      badges: ['popular'],
      category: 'NFT & Digital Art',
      categorySlug: 'nft-digital-art',
      subcategory: 'NFT Creation Tools',
      subcategorySlug: 'nft-creation',
      description: 'Rarible is a multichain community-centric NFT marketplace and creation platform.',
      features: ['Lazy minting', 'Multi-chain', 'DAO governance', 'Royalties', 'Collections'],
      useCases: ['NFT creation', 'Trading', 'Community governance'],
      tags: ['nft', 'marketplace', 'dao', 'multi-chain'],
      rating: 4.4,
      reviewCount: 7800
    }
  ],

  // Cryptocurrency & Blockchain > DeFi Platforms
  'defi-platforms': [
    {
      name: 'Uniswap',
      slug: 'uniswap',
      tagline: 'Leading decentralized exchange',
      logoUrl: '/logos/uniswap.png',
      website: 'https://uniswap.org',
      pricing: 'free',
      badges: ['popular', 'featured'],
      category: 'Cryptocurrency & Blockchain',
      categorySlug: 'cryptocurrency-blockchain',
      subcategory: 'DeFi Platforms',
      subcategorySlug: 'defi-platforms',
      description: 'Uniswap is a decentralized exchange protocol that allows users to swap ERC-20 tokens.',
      features: ['Token swaps', 'Liquidity pools', 'Yield farming', 'Governance', 'Multi-chain'],
      useCases: ['Token trading', 'Liquidity provision', 'DeFi investing'],
      tags: ['defi', 'dex', 'ethereum', 'swaps'],
      rating: 4.6,
      reviewCount: 18900
    },
    {
      name: 'Aave',
      slug: 'aave',
      tagline: 'Decentralized lending protocol',
      logoUrl: '/logos/aave.png',
      website: 'https://aave.com',
      pricing: 'free',
      badges: ['popular', 'featured'],
      category: 'Cryptocurrency & Blockchain',
      categorySlug: 'cryptocurrency-blockchain',
      subcategory: 'DeFi Platforms',
      subcategorySlug: 'defi-platforms',
      description: 'Aave is a decentralized non-custodial liquidity protocol where users can participate as depositors or borrowers.',
      features: ['Lending & borrowing', 'Flash loans', 'Rate switching', 'Multi-chain', 'Governance'],
      useCases: ['Crypto lending', 'Earning interest', 'Flash loans'],
      tags: ['defi', 'lending', 'ethereum', 'yield'],
      rating: 4.5,
      reviewCount: 12300
    },
    {
      name: 'Curve Finance',
      slug: 'curve-finance',
      tagline: 'Stablecoin exchange',
      logoUrl: '/logos/curve.png',
      website: 'https://curve.fi',
      pricing: 'free',
      badges: ['featured'],
      category: 'Cryptocurrency & Blockchain',
      categorySlug: 'cryptocurrency-blockchain',
      subcategory: 'DeFi Platforms',
      subcategorySlug: 'defi-platforms',
      description: 'Curve is a decentralized exchange optimized for stablecoin trading with low slippage.',
      features: ['Stablecoin swaps', 'Low fees', 'Liquidity pools', 'Yield farming', 'Governance'],
      useCases: ['Stablecoin trading', 'Yield farming', 'Liquidity provision'],
      tags: ['defi', 'stablecoins', 'dex', 'yield'],
      rating: 4.4,
      reviewCount: 8700
    }
  ],

  // Creative & Design > Video Editing
  'video-editing': [
    {
      name: 'Adobe Premiere Pro',
      slug: 'adobe-premiere-pro',
      tagline: 'Professional video editing software',
      logoUrl: '/logos/premiere-pro.png',
      website: 'https://www.adobe.com/products/premiere',
      pricing: 'paid',
      badges: ['popular', 'featured', 'enterprise'],
      category: 'Creative & Design',
      categorySlug: 'creative-design',
      subcategory: 'Video Editing',
      subcategorySlug: 'video-editing',
      description: 'Adobe Premiere Pro is the industry-leading video editing software for film, TV, and web.',
      features: ['Multi-cam editing', 'Color grading', 'Audio editing', 'Motion graphics', 'VR editing'],
      useCases: ['Film editing', 'YouTube videos', 'Social media content', 'Commercials'],
      tags: ['video-editing', 'professional', 'adobe', 'film'],
      rating: 4.7,
      reviewCount: 45600
    },
    {
      name: 'Final Cut Pro',
      slug: 'final-cut-pro',
      tagline: 'Professional video editing for Mac',
      logoUrl: '/logos/final-cut-pro.png',
      website: 'https://www.apple.com/final-cut-pro',
      pricing: 'paid',
      badges: ['featured', 'enterprise'],
      category: 'Creative & Design',
      categorySlug: 'creative-design',
      subcategory: 'Video Editing',
      subcategorySlug: 'video-editing',
      description: 'Final Cut Pro is a revolutionary video editing application for Mac.',
      features: ['Magnetic timeline', '360° video', 'HDR support', 'Motion graphics', 'Color grading'],
      useCases: ['Professional editing', 'Film production', 'YouTube content', 'Documentaries'],
      tags: ['video-editing', 'mac', 'professional', 'apple'],
      rating: 4.6,
      reviewCount: 23400
    },
    {
      name: 'DaVinci Resolve',
      slug: 'davinci-resolve',
      tagline: 'Professional editing, color, effects and audio',
      logoUrl: '/logos/davinci-resolve.png',
      website: 'https://www.blackmagicdesign.com/products/davinciresolve',
      pricing: 'freemium',
      badges: ['popular', 'featured'],
      category: 'Creative & Design',
      categorySlug: 'creative-design',
      subcategory: 'Video Editing',
      subcategorySlug: 'video-editing',
      description: 'DaVinci Resolve combines professional 8K editing, color correction, visual effects and audio post production.',
      features: ['Color grading', 'Visual effects', 'Audio post', 'Collaboration', 'Free version'],
      useCases: ['Film editing', 'Color grading', 'Post-production', 'Professional video'],
      tags: ['video-editing', 'color-grading', 'professional', 'free'],
      rating: 4.8,
      reviewCount: 34500
    },
    {
      name: 'CapCut',
      slug: 'capcut',
      tagline: 'All-in-one video editor',
      logoUrl: '/logos/capcut.png',
      website: 'https://www.capcut.com',
      pricing: 'free',
      badges: ['popular', 'trending'],
      category: 'Creative & Design',
      categorySlug: 'creative-design',
      subcategory: 'Video Editing',
      subcategorySlug: 'video-editing',
      description: 'CapCut is a free, all-in-one video editing app for creating incredible videos.',
      features: ['Templates', 'Effects', 'Music library', 'Text animations', 'AI features'],
      useCases: ['TikTok videos', 'Social media', 'Quick edits', 'Mobile editing'],
      tags: ['video-editing', 'mobile', 'social-media', 'free'],
      rating: 4.6,
      reviewCount: 89000
    },
    {
      name: 'Filmora',
      slug: 'filmora',
      tagline: 'Easy-to-use video editing software',
      logoUrl: '/logos/filmora.png',
      website: 'https://filmora.wondershare.com',
      pricing: 'freemium',
      badges: ['popular'],
      category: 'Creative & Design',
      categorySlug: 'creative-design',
      subcategory: 'Video Editing',
      subcategorySlug: 'video-editing',
      description: 'Filmora is an intuitive video editing software for creators of all skill levels.',
      features: ['Drag and drop', 'Effects library', 'Audio editing', 'Color correction', 'Screen recording'],
      useCases: ['YouTube videos', 'Tutorials', 'Social media', 'Presentations'],
      tags: ['video-editing', 'beginner-friendly', 'youtube', 'easy'],
      rating: 4.4,
      reviewCount: 28900
    }
  ],

  // Marketing & Sales > Email Marketing
  'email-marketing': [
    {
      name: 'Mailchimp',
      slug: 'mailchimp',
      tagline: 'Email marketing and automation platform',
      logoUrl: '/logos/mailchimp.png',
      website: 'https://mailchimp.com',
      pricing: 'freemium',
      badges: ['popular', 'featured'],
      category: 'Marketing & Sales',
      categorySlug: 'marketing-sales',
      subcategory: 'Email Marketing',
      subcategorySlug: 'email-marketing',
      description: 'Mailchimp is an all-in-one marketing platform for small businesses.',
      features: ['Email campaigns', 'Automation', 'Landing pages', 'Analytics', 'Integrations'],
      useCases: ['Email newsletters', 'Marketing automation', 'Customer engagement', 'E-commerce'],
      tags: ['email-marketing', 'automation', 'newsletters', 'campaigns'],
      rating: 4.5,
      reviewCount: 67800
    },
    {
      name: 'ConvertKit',
      slug: 'convertkit',
      tagline: 'Email marketing for creators',
      logoUrl: '/logos/convertkit.png',
      website: 'https://convertkit.com',
      pricing: 'freemium',
      badges: ['popular', 'featured'],
      category: 'Marketing & Sales',
      categorySlug: 'marketing-sales',
      subcategory: 'Email Marketing',
      subcategorySlug: 'email-marketing',
      description: 'ConvertKit is the go-to marketing hub for creators that helps you grow and monetize your audience.',
      features: ['Visual automation', 'Landing pages', 'Forms', 'Sequences', 'Tagging'],
      useCases: ['Creator marketing', 'Course sales', 'Newsletter', 'Audience growth'],
      tags: ['email-marketing', 'creators', 'automation', 'landing-pages'],
      rating: 4.6,
      reviewCount: 12300
    },
    {
      name: 'Klaviyo',
      slug: 'klaviyo',
      tagline: 'Email and SMS marketing for e-commerce',
      logoUrl: '/logos/klaviyo.png',
      website: 'https://www.klaviyo.com',
      pricing: 'freemium',
      badges: ['featured', 'enterprise'],
      category: 'Marketing & Sales',
      categorySlug: 'marketing-sales',
      subcategory: 'Email Marketing',
      subcategorySlug: 'email-marketing',
      description: 'Klaviyo is a unified customer platform for email, SMS, and more.',
      features: ['Segmentation', 'Automation', 'SMS marketing', 'Analytics', 'E-commerce integration'],
      useCases: ['E-commerce marketing', 'Abandoned cart', 'Customer retention', 'Personalization'],
      tags: ['email-marketing', 'ecommerce', 'sms', 'automation'],
      rating: 4.7,
      reviewCount: 23400
    },
    {
      name: 'Brevo (Sendinblue)',
      slug: 'brevo',
      tagline: 'All-in-one marketing platform',
      logoUrl: '/logos/brevo.png',
      website: 'https://www.brevo.com',
      pricing: 'freemium',
      badges: ['popular'],
      category: 'Marketing & Sales',
      categorySlug: 'marketing-sales',
      subcategory: 'Email Marketing',
      subcategorySlug: 'email-marketing',
      description: 'Brevo is a complete marketing platform with email, SMS, chat, CRM, and marketing automation.',
      features: ['Email campaigns', 'SMS marketing', 'Chat', 'CRM', 'Marketing automation'],
      useCases: ['Email marketing', 'Customer communication', 'Marketing automation', 'Sales'],
      tags: ['email-marketing', 'sms', 'crm', 'automation'],
      rating: 4.5,
      reviewCount: 18900
    },
    {
      name: 'ActiveCampaign',
      slug: 'activecampaign',
      tagline: 'Email marketing, marketing automation, and CRM',
      logoUrl: '/logos/activecampaign.png',
      website: 'https://www.activecampaign.com',
      pricing: 'paid',
      badges: ['featured', 'enterprise'],
      category: 'Marketing & Sales',
      categorySlug: 'marketing-sales',
      subcategory: 'Email Marketing',
      subcategorySlug: 'email-marketing',
      description: 'ActiveCampaign combines email marketing, marketing automation, and CRM for powerful customer experiences.',
      features: ['Automation', 'CRM', 'Email marketing', 'Sales automation', 'Machine learning'],
      useCases: ['Marketing automation', 'Lead nurturing', 'Customer experience', 'Sales'],
      tags: ['email-marketing', 'automation', 'crm', 'sales'],
      rating: 4.6,
      reviewCount: 34500
    }
  ],

  // Development & Code > Code Editors
  'code-editors': [
    {
      name: 'Visual Studio Code',
      slug: 'vscode',
      tagline: 'Code editing. Redefined.',
      logoUrl: '/logos/vscode.png',
      website: 'https://code.visualstudio.com',
      pricing: 'open-source',
      badges: ['popular', 'featured'],
      category: 'Development & Code',
      categorySlug: 'development-code',
      subcategory: 'Code Editors',
      subcategorySlug: 'code-editors',
      description: 'Visual Studio Code is a lightweight but powerful source code editor with built-in support for JavaScript, TypeScript and Node.js.',
      features: ['IntelliSense', 'Debugging', 'Git integration', 'Extensions', 'Customizable'],
      useCases: ['Web development', 'Software development', 'Data science', 'DevOps'],
      tags: ['code-editor', 'ide', 'development', 'open-source'],
      rating: 4.9,
      reviewCount: 123000
    },
    {
      name: 'Sublime Text',
      slug: 'sublime-text',
      tagline: 'A sophisticated text editor for code, markup and prose',
      logoUrl: '/logos/sublime.png',
      website: 'https://www.sublimetext.com',
      pricing: 'paid',
      badges: ['popular'],
      category: 'Development & Code',
      categorySlug: 'development-code',
      subcategory: 'Code Editors',
      subcategorySlug: 'code-editors',
      description: 'Sublime Text is a sophisticated text editor for code, markup and prose.',
      features: ['Multiple selections', 'Command palette', 'Split editing', 'Plugin API', 'Fast performance'],
      useCases: ['Code editing', 'Text editing', 'Web development', 'Programming'],
      tags: ['code-editor', 'text-editor', 'fast', 'lightweight'],
      rating: 4.7,
      reviewCount: 45600
    },
    {
      name: 'JetBrains WebStorm',
      slug: 'webstorm',
      tagline: 'The smartest JavaScript IDE',
      logoUrl: '/logos/webstorm.png',
      website: 'https://www.jetbrains.com/webstorm',
      pricing: 'paid',
      badges: ['featured', 'enterprise'],
      category: 'Development & Code',
      categorySlug: 'development-code',
      subcategory: 'Code Editors',
      subcategorySlug: 'code-editors',
      description: 'WebStorm is a powerful IDE for modern JavaScript development.',
      features: ['Smart coding assistance', 'Debugging', 'Testing', 'Version control', 'Refactoring'],
      useCases: ['JavaScript development', 'React development', 'Node.js', 'TypeScript'],
      tags: ['ide', 'javascript', 'typescript', 'professional'],
      rating: 4.6,
      reviewCount: 23400
    },
    {
      name: 'Atom',
      slug: 'atom',
      tagline: 'A hackable text editor for the 21st Century',
      logoUrl: '/logos/atom.png',
      website: 'https://atom.io',
      pricing: 'open-source',
      badges: ['popular'],
      category: 'Development & Code',
      categorySlug: 'development-code',
      subcategory: 'Code Editors',
      subcategorySlug: 'code-editors',
      description: 'Atom is a free and open-source text and source code editor for macOS, Linux, and Windows.',
      features: ['Packages', 'Themes', 'Git integration', 'Cross-platform', 'Teletype'],
      useCases: ['Code editing', 'Web development', 'Collaboration', 'Customization'],
      tags: ['code-editor', 'open-source', 'hackable', 'github'],
      rating: 4.4,
      reviewCount: 34500
    }
  ],

  // Design Tools > UI/UX Design
  'ui-ux-design': [
    {
      name: 'Sketch',
      slug: 'sketch',
      tagline: 'Design tool for Mac',
      logoUrl: '/logos/sketch.png',
      website: 'https://www.sketch.com',
      pricing: 'paid',
      badges: ['popular', 'featured'],
      category: 'Creative & Design',
      categorySlug: 'creative-design',
      subcategory: 'UI/UX Design',
      subcategorySlug: 'ui-ux-design',
      description: 'Sketch is a design toolkit built to help you create your best work — from earliest ideas, through to final artwork.',
      features: ['Vector editing', 'Symbols', 'Prototyping', 'Collaboration', 'Plugins'],
      useCases: ['UI design', 'Web design', 'Mobile design', 'Prototyping'],
      tags: ['design', 'ui', 'ux', 'mac'],
      rating: 4.6,
      reviewCount: 28900
    },
    {
      name: 'Adobe XD',
      slug: 'adobe-xd',
      tagline: 'Design, prototype, and share',
      logoUrl: '/logos/adobe-xd.png',
      website: 'https://www.adobe.com/products/xd',
      pricing: 'freemium',
      badges: ['popular', 'featured'],
      category: 'Creative & Design',
      categorySlug: 'creative-design',
      subcategory: 'UI/UX Design',
      subcategorySlug: 'ui-ux-design',
      description: 'Adobe XD is a powerful, collaborative, easy-to-use platform for designing and prototyping.',
      features: ['Design systems', 'Prototyping', 'Collaboration', 'Plugins', 'Voice prototyping'],
      useCases: ['UI/UX design', 'Prototyping', 'Wireframing', 'Mobile design'],
      tags: ['design', 'ui', 'ux', 'prototyping', 'adobe'],
      rating: 4.5,
      reviewCount: 34500
    },
    {
      name: 'Framer',
      slug: 'framer',
      tagline: 'Design and publish sites that inspire',
      logoUrl: '/logos/framer.png',
      website: 'https://www.framer.com',
      pricing: 'freemium',
      badges: ['trending', 'featured'],
      category: 'Creative & Design',
      categorySlug: 'creative-design',
      subcategory: 'UI/UX Design',
      subcategorySlug: 'ui-ux-design',
      description: 'Framer is a web builder for creative pros. Design and publish sites that inspire.',
      features: ['No-code', 'Animations', 'CMS', 'Responsive', 'Interactive'],
      useCases: ['Website design', 'Prototyping', 'Interactive design', 'Landing pages'],
      tags: ['design', 'no-code', 'website-builder', 'prototyping'],
      rating: 4.7,
      reviewCount: 12300
    },
    {
      name: 'InVision',
      slug: 'invision',
      tagline: 'Digital product design platform',
      logoUrl: '/logos/invision.png',
      website: 'https://www.invisionapp.com',
      pricing: 'freemium',
      badges: ['featured'],
      category: 'Creative & Design',
      categorySlug: 'creative-design',
      subcategory: 'UI/UX Design',
      subcategorySlug: 'ui-ux-design',
      description: 'InVision is a digital product design platform powering the world\'s best user experiences.',
      features: ['Prototyping', 'Collaboration', 'Design system', 'Feedback', 'Handoff'],
      useCases: ['Prototyping', 'Design collaboration', 'User testing', 'Design systems'],
      tags: ['design', 'prototyping', 'collaboration', 'ux'],
      rating: 4.4,
      reviewCount: 23400
    }
  ],

  // Communication > Team Chat
  'team-chat': [
    {
      name: 'Slack',
      slug: 'slack',
      tagline: 'Where work happens',
      logoUrl: '/logos/slack.png',
      website: 'https://slack.com',
      pricing: 'freemium',
      badges: ['popular', 'featured', 'enterprise'],
      category: 'Communication',
      categorySlug: 'communication',
      subcategory: 'Team Chat',
      subcategorySlug: 'team-chat',
      description: 'Slack is a channel-based messaging platform that brings all your communication together.',
      features: ['Channels', 'Direct messages', 'File sharing', 'Integrations', 'Video calls'],
      useCases: ['Team communication', 'Project collaboration', 'Remote work', 'Integration hub'],
      tags: ['chat', 'communication', 'collaboration', 'team'],
      rating: 4.6,
      reviewCount: 89000
    },
    {
      name: 'Microsoft Teams',
      slug: 'microsoft-teams',
      tagline: 'Chat, meet, call, and collaborate',
      logoUrl: '/logos/teams.png',
      website: 'https://www.microsoft.com/microsoft-teams',
      pricing: 'freemium',
      badges: ['popular', 'enterprise'],
      category: 'Communication',
      categorySlug: 'communication',
      subcategory: 'Team Chat',
      subcategorySlug: 'team-chat',
      description: 'Microsoft Teams is a hub for teamwork in Microsoft 365.',
      features: ['Chat', 'Video meetings', 'File collaboration', 'Office integration', 'Apps'],
      useCases: ['Team collaboration', 'Video conferencing', 'Document collaboration', 'Enterprise communication'],
      tags: ['chat', 'video', 'microsoft', 'enterprise'],
      rating: 4.5,
      reviewCount: 123000
    },
    {
      name: 'Discord',
      slug: 'discord',
      tagline: 'Your place to talk and hang out',
      logoUrl: '/logos/discord.png',
      website: 'https://discord.com',
      pricing: 'freemium',
      badges: ['popular', 'trending'],
      category: 'Communication',
      categorySlug: 'communication',
      subcategory: 'Team Chat',
      subcategorySlug: 'team-chat',
      description: 'Discord is the easiest way to talk over voice, video, and text.',
      features: ['Voice channels', 'Text channels', 'Screen sharing', 'Bots', 'Communities'],
      useCases: ['Gaming communities', 'Team communication', 'Community building', 'Voice chat'],
      tags: ['chat', 'voice', 'gaming', 'community'],
      rating: 4.7,
      reviewCount: 234000
    },
    {
      name: 'Telegram',
      slug: 'telegram',
      tagline: 'Fast. Secure. Powerful.',
      logoUrl: '/logos/telegram.png',
      website: 'https://telegram.org',
      pricing: 'free',
      badges: ['popular'],
      category: 'Communication',
      categorySlug: 'communication',
      subcategory: 'Team Chat',
      subcategorySlug: 'team-chat',
      description: 'Telegram is a cloud-based mobile and desktop messaging app with a focus on security and speed.',
      features: ['Cloud-based', 'Channels', 'Groups', 'Bots', 'Secret chats'],
      useCases: ['Messaging', 'Communities', 'Broadcasting', 'Secure communication'],
      tags: ['messaging', 'secure', 'cloud', 'mobile'],
      rating: 4.6,
      reviewCount: 456000
    },
    {
      name: 'Blender',
      slug: 'blender',
      tagline: 'Free and open source 3D creation suite',
      logoUrl: '/logos/placeholder.png',
      website: 'https://www.blender.org/',
      pricing: 'open-source',
      badges: ['popular', 'featured'],
      category: 'Creative & Design',
      categorySlug: 'creative-design',
      subcategory: '3D Modeling',
      subcategorySlug: '3d-modeling',
      description: 'Blender is a free and open source 3D creation suite. It supports the entirety of the 3D pipeline—modeling, rigging, animation, simulation, rendering, compositing and motion tracking, video editing and 2D animation pipeline.',
      features: [
        '3D Modeling with polygons, curves, and NURBS surfaces',
        'Advanced sculpting tools and brushes',
        'Real-time viewport preview with Eevee renderer',
        'Path-traced rendering with Cycles',
        'Full animation support with rigging and skinning',
        'Physics simulations (smoke, fire, fluids, cloth, etc.)',
        'Video editing and compositing',
        'Python API for customization and add-ons'
      ],
      useCases: [
        '3D modeling for games and films',
        'Architectural visualization',
        'Product design and prototyping',
        'Motion graphics and animation',
        'VFX and post-production',
        '3D printing'
      ],
      tags: ['3d-modeling', 'animation', 'rendering', 'vfx', 'open-source'],
      launchDate: '1998-01-01',
      rating: 4.8,
      reviewCount: 4500,
      alternatives: ['Maya', '3ds Max', 'Cinema 4D'],
      integrations: ['Unity', 'Unreal Engine', 'Substance Painter', 'ZBrush'],
      pricingDetails: {
        type: 'open-source',
        price: 'Free',
        url: 'https://www.blender.org/download/',
        description: 'Completely free and open source under the GNU General Public License'
      }
    }
  ]
  
};

// Helper functions
export function getAllTools(): ToolEntry[] {
  return Object.values(toolsBySubcategory).flat();
}

export function getToolsByCategory(categorySlug: string): ToolEntry[] {
  return getAllTools().filter(tool => tool.categorySlug === categorySlug);
}

export function getToolsBySubcategory(subcategorySlug: string): ToolEntry[] {
  return toolsBySubcategory[subcategorySlug] || [];
}

export function getToolBySlug(slug: string): ToolEntry | undefined {
  return getAllTools().find(tool => tool.slug === slug);
}

export function getCategoryBySlug(slug: string): CategoryWithSubcategories | undefined {
  return categoriesWithSubcategories.find(cat => cat.slug === slug);
}

export function getSubcategoryBySlug(categorySlug: string, subcategorySlug: string): Subcategory | undefined {
  const category = getCategoryBySlug(categorySlug);
  return category?.subcategories.find(sub => sub.slug === subcategorySlug);
}
