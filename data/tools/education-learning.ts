import { ToolEntry } from '../tools';

export const educationLearningTools: ToolEntry[] = [
  // Online Courses
  {
    name: 'Coursera AI',
    slug: 'coursera-ai',
    tagline: 'AI-powered online learning platform with university courses',
    logoUrl: '/logos/coursera-ai.png',
    website: 'https://www.coursera.org/ai',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Education & Learning',
    categorySlug: 'education-learning',
    subcategory: 'Online Courses',
    subcategorySlug: 'online-courses',
    description: 'Coursera AI enhances the online learning platform with AI-powered personalized learning paths, skill assessments, and career guidance.',
    features: ['Personalized learning', 'Skill assessments', 'Career guidance', 'University courses', 'Professional certificates', 'Degree programs', 'Mobile learning', 'Progress tracking'],
    useCases: ['Skill development', 'Career advancement', 'University education', 'Professional certification', 'Language learning', 'Technical skills', 'Business skills', 'Personal growth'],
    tags: ['online-learning', 'courses', 'skill-development', 'career-advancement', 'ai-education'],
    rating: 4.7,
    reviewCount: 35000,
    alternatives: ['edX', 'Udemy', 'LinkedIn Learning'],
    integrations: ['Google Workspace', 'Microsoft Office', 'Slack', 'Zoom', 'GitHub', 'Jupyter', 'Tableau', 'Salesforce'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free audit, Individual from $39/month, Premium from $59/month, Degree programs from $15000/year',
      url: 'https://www.coursera.org/courseraplus',
      description: 'Different tiers based on features and content access'
    }
  },
  {
    name: 'Udemy AI',
    slug: 'udemy-ai',
    tagline: 'AI-powered online course platform with lifetime access',
    logoUrl: '/logos/udemy-ai.png',
    website: 'https://www.udemy.com/ai/',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Education & Learning',
    categorySlug: 'education-learning',
    subcategory: 'Online Courses',
    subcategorySlug: 'online-courses',
    description: 'Udemy AI enhances the online course platform with AI-powered course recommendations, personalized learning paths, and skill assessments.',
    features: ['Course recommendations', 'Personalized learning', 'Lifetime access', 'Mobile learning', 'Instructor support', 'Certificate of completion', 'Skill assessments', 'Career paths'],
    useCases: ['Skill development', 'Career change', 'Technical skills', 'Business skills', 'Creative skills', 'Language learning', 'Personal projects', 'Professional development'],
    tags: ['online-learning', 'courses', 'skill-development', 'lifetime-access', 'ai-education'],
    rating: 4.6,
    reviewCount: 42000,
    alternatives: ['Coursera', 'edX', 'LinkedIn Learning'],
    integrations: ['Google Workspace', 'Microsoft Office', 'Slack', 'GitHub', 'Jupyter', 'Zoom', 'Notion', 'Trello'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free courses available, Individual courses from $10-200, Pro from $19.99/month',
      url: 'https://www.udemy.com/udemy-business/pricing/',
      description: 'Individual course purchases or subscription options'
    }
  },
  
  // Language Learning
  {
    name: 'Duolingo Max',
    slug: 'duolingo-max',
    tagline: 'AI-powered language learning with advanced features',
    logoUrl: '/logos/duolingo-max.png',
    website: 'https://www.duolingo.com/max',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Education & Learning',
    categorySlug: 'education-learning',
    subcategory: 'Language Learning',
    subcategorySlug: 'language-learning',
    description: 'Duolingo Max enhances the language learning app with advanced AI features including Explain My Answer and Roleplay conversations with AI tutors.',
    features: ['AI explanations', 'Roleplay conversations', 'Personalized learning', 'Speech recognition', 'Gamified learning', 'Progress tracking', 'Offline mode', 'Cultural insights'],
    useCases: ['Language learning', 'Conversation practice', 'Grammar improvement', 'Vocabulary building', 'Cultural understanding', 'Travel preparation', 'Professional development', 'Personal growth'],
    tags: ['language-learning', 'ai-tutor', 'conversation-practice', 'gamified-learning', 'ai-education'],
    rating: 4.8,
    reviewCount: 55000,
    alternatives: ['Babbel', 'Rosetta Stone', 'Busuu'],
    integrations: ['Google Play', 'App Store', 'Web browser', 'Apple Watch', 'Android Wear', 'Google Assistant', 'Siri'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free basic, Duolingo Max from $9.99/month',
      url: 'https://www.duolingo.com/plus',
      description: 'Free version with premium subscription option'
    }
  },
  {
    name: 'Babbel AI',
    slug: 'babbel-ai',
    tagline: 'AI-powered language learning with real-life dialogues',
    logoUrl: '/logos/babbel-ai.png',
    website: 'https://www.babbel.com/ai',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Education & Learning',
    categorySlug: 'education-learning',
    subcategory: 'Language Learning',
    subcategorySlug: 'language-learning',
    description: 'Babbel AI enhances the language learning platform with AI-powered speech recognition, personalized review sessions, and adaptive learning paths.',
    features: ['Speech recognition', 'Personalized reviews', 'Adaptive learning', 'Real-life dialogues', 'Cultural tips', 'Grammar lessons', 'Vocabulary training', 'Progress tracking'],
    useCases: ['Language learning', 'Conversation practice', 'Grammar improvement', 'Vocabulary building', 'Cultural understanding', 'Travel preparation', 'Business communication', 'Personal growth'],
    tags: ['language-learning', 'speech-recognition', 'real-life-dialogues', 'adaptive-learning', 'ai-education'],
    rating: 4.5,
    reviewCount: 18000,
    alternatives: ['Duolingo', 'Rosetta Stone', 'Busuu'],
    integrations: ['Google Play', 'App Store', 'Web browser', 'Apple Watch', 'Android Wear', 'Google Assistant'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free trial, 1 month from $12.95/month, 3 months from $10.95/month, 6 months from $8.95/month, 12 months from $6.95/month',
      url: 'https://www.babbel.com/pricing',
      description: 'Subscription-based with different time periods'
    }
  },
  
  // LMS
  {
    name: 'Canvas AI',
    slug: 'canvas-ai',
    tagline: 'AI-powered learning management system for education',
    logoUrl: '/logos/canvas-ai.png',
    website: 'https://www.instructure.com/canvas/ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'popular'],
    category: 'Education & Learning',
    categorySlug: 'education-learning',
    subcategory: 'LMS',
    subcategorySlug: 'lms',
    description: 'Canvas AI enhances the learning management system with AI-powered analytics, personalized learning paths, and automated grading capabilities.',
    features: ['AI analytics', 'Personalized learning', 'Automated grading', 'Course management', 'Student tracking', 'Collaboration tools', 'Mobile access', 'Integration capabilities'],
    useCases: ['Online education', 'Blended learning', 'Course management', 'Student assessment', 'Educator collaboration', 'Institution management', 'Progress tracking', 'Academic analytics'],
    tags: ['lms', 'learning-management', 'online-education', 'ai-analytics', 'educational-technology'],
    rating: 4.4,
    reviewCount: 22000,
    alternatives: ['Moodle', 'Blackboard', 'Google Classroom'],
    integrations: ['Google Workspace', 'Microsoft Office', 'Zoom', 'Slack', 'Turnitin', 'Panopto', 'H5P', 'LTI tools'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom pricing for institutions',
      url: 'https://www.instructure.com/contact',
      description: 'Institution-based licensing with custom pricing'
    }
  },
  {
    name: 'Google Classroom AI',
    slug: 'google-classroom-ai',
    tagline: 'AI-powered classroom management and learning platform',
    logoUrl: '/logos/google-classroom-ai.png',
    website: 'https://edu.google.com/products/classroom/ai/',
    pricing: 'free',
    badges: ['popular', 'community-favorite'],
    category: 'Education & Learning',
    categorySlug: 'education-learning',
    subcategory: 'LMS',
    subcategorySlug: 'lms',
    description: 'Google Classroom AI enhances the classroom management platform with AI-powered grading, personalized learning recommendations, and student progress insights.',
    features: ['AI grading', 'Personalized recommendations', 'Progress insights', 'Assignment management', 'Class communication', 'Resource sharing', 'Integration with Google Workspace', 'Mobile access'],
    useCases: ['Classroom management', 'Assignment distribution', 'Student assessment', 'Class communication', 'Resource sharing', 'Progress tracking', 'Educator collaboration', 'Remote learning'],
    tags: ['lms', 'classroom-management', 'google-workspace', 'ai-grading', 'educational-technology'],
    rating: 4.6,
    reviewCount: 65000,
    alternatives: ['Canvas', 'Moodle', 'Schoology'],
    integrations: ['Google Workspace', 'Google Drive', 'Docs', 'Sheets', 'Slides', 'Meet', 'YouTube', 'Kahoot'],
    pricingDetails: {
      type: 'free',
      price: 'Completely free for educational institutions',
      url: 'https://edu.google.com/products/classroom/',
      description: 'Free for educational institutions using Google Workspace for Education'
    }
  }
];