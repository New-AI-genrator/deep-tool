import { ToolEntry } from '../tools';

export const developmentEngineeringTools: ToolEntry[] = [
  // Code Generation & Completion
  {
    name: 'GitHub Copilot',
    slug: 'github-copilot',
    tagline: 'AI pair programmer that helps you write code faster',
    logoUrl: '/logos/github-copilot.png',
    website: 'https://github.com/features/copilot',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Development & Engineering',
    categorySlug: 'development-engineering',
    subcategory: 'Code Generation & Completion',
    subcategorySlug: 'code-generation-completion',
    description: 'GitHub Copilot is an AI-powered code completion tool that helps developers write code faster by suggesting entire lines or blocks of code based on comments and existing code.',
    features: ['Code suggestions', 'Multi-language support', 'IDE integration', 'Context-aware completion', 'Code explanation', 'Test generation', 'Documentation generation', 'Refactoring suggestions'],
    useCases: ['Code completion', 'Learning new languages', 'Boilerplate reduction', 'Code refactoring', 'Test writing', 'Documentation creation', 'Debugging assistance', 'Performance optimization'],
    tags: ['code-assistant', 'ai-programming', 'developer-tools', 'code-generation', 'ide'],
    rating: 4.8,
    reviewCount: 25000,
    alternatives: ['Amazon CodeWhisperer', 'Tabnine', 'Replit Ghostwriter'],
    integrations: ['Visual Studio Code', 'JetBrains IDEs', 'Neovim', 'Visual Studio', 'GitHub', 'Azure DevOps', 'GitLab', 'Bitbucket'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free for verified students and popular open source projects, Individual from $10/month, Business from $19/month per user',
      url: 'https://github.com/features/copilot#pricing',
      description: 'Different tiers based on user type and features'
    }
  },
  {
    name: 'Amazon CodeWhisperer',
    slug: 'amazon-codewhisperer',
    tagline: 'AI coding companion that generates code suggestions in real-time',
    logoUrl: '/logos/amazon-codewhisperer.png',
    website: 'https://aws.amazon.com/codewhisperer/',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Development & Engineering',
    categorySlug: 'development-engineering',
    subcategory: 'Code Generation & Completion',
    subcategorySlug: 'code-generation-completion',
    description: 'Amazon CodeWhisperer is an AI-powered coding companion that generates code suggestions in real-time as you type, supporting multiple programming languages and IDEs.',
    features: ['Real-time suggestions', 'Security scanning', 'Reference tracking', 'Multi-language support', 'IDE integration', 'Customization options', 'Code explanation', 'Best practice recommendations'],
    useCases: ['Code completion', 'Security vulnerability detection', 'Learning best practices', 'Boilerplate reduction', 'Code refactoring', 'Documentation creation', 'Debugging assistance', 'Performance optimization'],
    tags: ['code-assistant', 'ai-programming', 'developer-tools', 'code-generation', 'aws'],
    rating: 4.6,
    reviewCount: 12000,
    alternatives: ['GitHub Copilot', 'Tabnine', 'Replit Ghostwriter'],
    integrations: ['Visual Studio Code', 'JetBrains IDEs', 'AWS Cloud9', 'Visual Studio', 'Lambda', 'CodeBuild', 'CodePipeline', 'CloudFormation'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free for individuals, Professional from $19/month per user',
      url: 'https://aws.amazon.com/codewhisperer/pricing/',
      description: 'Free tier with professional option for advanced features'
    }
  },
  
  // Bug Detection & Code Quality
  {
    name: 'Snyk Code',
    slug: 'snyk-code',
    tagline: 'AI-powered static analysis for finding and fixing vulnerabilities',
    logoUrl: '/logos/snyk-code.png',
    website: 'https://snyk.io/product/snyk-code/',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Development & Engineering',
    categorySlug: 'development-engineering',
    subcategory: 'Bug Detection & Code Quality',
    subcategorySlug: 'bug-detection-code-quality',
    description: 'Snyk Code is an AI-powered static analysis tool that helps developers find and fix security vulnerabilities and quality issues in their code.',
    features: ['Static analysis', 'Security vulnerability detection', 'Quality issue identification', 'IDE integration', 'Pull request scanning', 'Remediation guidance', 'Issue prioritization', 'Team collaboration'],
    useCases: ['Security vulnerability detection', 'Code quality improvement', 'Compliance monitoring', 'Developer education', 'Risk assessment', 'Issue remediation', 'Team collaboration', 'Continuous integration'],
    tags: ['code-quality', 'security', 'static-analysis', 'vulnerability-detection', 'devsecops'],
    rating: 4.5,
    reviewCount: 8500,
    alternatives: ['SonarQube', 'DeepSource', 'CodeClimate'],
    integrations: ['GitHub', 'GitLab', 'Bitbucket', 'Azure DevOps', 'Jenkins', 'CircleCI', 'Travis CI', 'Docker'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free for open source projects, Teams from $25/month per developer, Enterprise pricing available',
      url: 'https://snyk.io/plans/',
      description: 'Different tiers based on team size and features'
    }
  },
  {
    name: 'DeepSource',
    slug: 'deepsource',
    tagline: 'Continuous code quality and security analysis platform',
    logoUrl: '/logos/deepsource.png',
    website: 'https://deepsource.io',
    pricing: 'freemium',
    badges: ['popular', 'community-favorite'],
    category: 'Development & Engineering',
    categorySlug: 'development-engineering',
    subcategory: 'Bug Detection & Code Quality',
    subcategorySlug: 'bug-detection-code-quality',
    description: 'DeepSource is a continuous code quality and security analysis platform that helps developers find and fix issues in their code before they reach production.',
    features: ['Static analysis', 'Security vulnerability detection', 'Code quality metrics', 'Pull request analysis', 'Issue tracking', 'Remediation guidance', 'Team dashboards', 'Integration capabilities'],
    useCases: ['Code quality improvement', 'Security vulnerability detection', 'Developer productivity', 'Compliance monitoring', 'Issue tracking', 'Team collaboration', 'Continuous integration', 'Performance optimization'],
    tags: ['code-quality', 'static-analysis', 'security', 'continuous-integration', 'devops'],
    rating: 4.4,
    reviewCount: 6200,
    alternatives: ['Snyk Code', 'SonarQube', 'CodeClimate'],
    integrations: ['GitHub', 'GitLab', 'Bitbucket', 'Azure DevOps', 'CircleCI', 'Travis CI', 'Jenkins', 'AWS CodeBuild'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free for open source projects, Pro from $19/month per developer, Enterprise pricing available',
      url: 'https://deepsource.io/pricing/',
      description: 'Different tiers based on team size and features'
    }
  },
  
  // API & DevOps Automation
  {
    name: 'Postman AI',
    slug: 'postman-ai',
    tagline: 'API platform with AI-powered tools for development and testing',
    logoUrl: '/logos/postman-ai.png',
    website: 'https://www.postman.com/api-platform/ai/',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'Development & Engineering',
    categorySlug: 'development-engineering',
    subcategory: 'API & DevOps Automation',
    subcategorySlug: 'api-devops-automation',
    description: 'Postman AI enhances the Postman API platform with AI-powered tools for API development, testing, and documentation.',
    features: ['API generation', 'Test automation', 'Documentation creation', 'Mock server generation', 'API monitoring', 'Collaboration tools', 'Security testing', 'Performance testing'],
    useCases: ['API development', 'Test automation', 'Documentation creation', 'API monitoring', 'Team collaboration', 'Security testing', 'Performance optimization', 'DevOps automation'],
    tags: ['api', 'devops', 'testing', 'automation', 'developer-tools'],
    rating: 4.7,
    reviewCount: 18000,
    alternatives: ['Insomnia', 'Swagger', 'Hoppscotch'],
    integrations: ['GitHub', 'GitLab', 'Bitbucket', 'Jenkins', 'CircleCI', 'Travis CI', 'AWS', 'Azure'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free for individuals, Basic from $7/month per user, Professional from $15/month per user, Enterprise pricing available',
      url: 'https://www.postman.com/pricing/',
      description: 'Different tiers based on team size and features'
    }
  },
  {
    name: 'Jenkins AI',
    slug: 'jenkins-ai',
    tagline: 'AI-enhanced automation server for continuous integration and delivery',
    logoUrl: '/logos/jenkins-ai.png',
    website: 'https://www.jenkins.io',
    pricing: 'free',
    badges: ['community-favorite', 'popular'],
    category: 'Development & Engineering',
    categorySlug: 'development-engineering',
    subcategory: 'API & DevOps Automation',
    subcategorySlug: 'api-devops-automation',
    description: 'Jenkins AI enhances the popular automation server with AI capabilities for smarter build processes, predictive analytics, and automated optimization.',
    features: ['Continuous integration', 'Continuous delivery', 'Build automation', 'Test automation', 'Deployment automation', 'Monitoring and alerting', 'Plugin ecosystem', 'Distributed builds'],
    useCases: ['Continuous integration', 'Continuous delivery', 'Build automation', 'Test automation', 'Deployment automation', 'Release management', 'Performance monitoring', 'Team collaboration'],
    tags: ['devops', 'ci-cd', 'automation', 'continuous-integration', 'open-source'],
    rating: 4.3,
    reviewCount: 22000,
    alternatives: ['GitLab CI', 'GitHub Actions', 'CircleCI'],
    integrations: ['GitHub', 'GitLab', 'Bitbucket', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'Google Cloud'],
    pricingDetails: {
      type: 'free',
      price: 'Completely free and open source',
      url: 'https://www.jenkins.io/download/',
      description: 'Open source project with community support'
    }
  }
];