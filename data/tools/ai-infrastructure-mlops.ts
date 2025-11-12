import { ToolEntry } from '../tools';

export const aiInfrastructureMLOpsTools: ToolEntry[] = [
  // MLOps Platforms
  {
    name: 'Weights & Biases',
    slug: 'weights-biases',
    tagline: 'Developer tools for machine learning experiment tracking and model management',
    logoUrl: '/logos/weights-biases.png',
    website: 'https://wandb.ai',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'AI Infrastructure & MLOps',
    categorySlug: 'ai-infrastructure-mlops',
    subcategory: 'MLOps Platforms',
    subcategorySlug: 'mlops-platforms',
    description: 'Weights & Biases is a machine learning platform that helps developers track experiments, visualize model performance, and collaborate on ML projects. It provides tools for experiment tracking, dataset versioning, model management, and real-time collaboration.',
    features: ['Experiment tracking', 'Model versioning', 'Dataset versioning', 'Real-time collaboration', 'Hyperparameter optimization', 'Model registry', 'Deployment monitoring', 'CI/CD integration'],
    useCases: ['ML experiment tracking', 'Model performance monitoring', 'Team collaboration', 'Hyperparameter tuning', 'Model deployment', 'Research reproducibility', 'Production ML monitoring', 'A/B testing'],
    tags: ['mlops', 'machine-learning', 'experiment-tracking', 'model-management', 'ai-infrastructure'],
    rating: 4.6,
    reviewCount: 8500,
    alternatives: ['MLflow', 'Comet.ml', 'TensorBoard'],
    integrations: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'Fast.ai', 'Hugging Face'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free for individuals, Teams from $9/month per user, Enterprise pricing available',
      url: 'https://wandb.ai/site/pricing',
      description: 'Different tiers based on team size and features'
    }
  },
  {
    name: 'MLflow',
    slug: 'mlflow',
    tagline: 'Open source platform for the machine learning lifecycle',
    logoUrl: '/logos/mlflow.png',
    website: 'https://mlflow.org',
    pricing: 'free',
    badges: ['community-favorite', 'popular'],
    category: 'AI Infrastructure & MLOps',
    categorySlug: 'ai-infrastructure-mlops',
    subcategory: 'MLOps Platforms',
    subcategorySlug: 'mlops-platforms',
    description: 'MLflow is an open source platform for managing the end-to-end machine learning lifecycle. It provides tools for tracking experiments, packaging code into reproducible runs, and sharing and deploying models.',
    features: ['Experiment tracking', 'Model registry', 'Project packaging', 'Model serving', 'Reproducibility', 'Collaboration', 'Deployment management', 'Version control'],
    useCases: ['ML experiment tracking', 'Model versioning', 'Reproducible research', 'Model deployment', 'Team collaboration', 'Research management', 'Production ML', 'Model sharing'],
    tags: ['mlops', 'machine-learning', 'open-source', 'experiment-tracking', 'model-registry'],
    rating: 4.5,
    reviewCount: 12000,
    alternatives: ['Weights & Biases', 'Comet.ml', 'TensorBoard'],
    integrations: ['Python', 'R', 'Java', 'Scala', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras'],
    pricingDetails: {
      type: 'free',
      price: 'Completely free and open source',
      url: 'https://github.com/mlflow/mlflow',
      description: 'Open source project with community support'
    }
  },
  {
    name: 'Comet.ml',
    slug: 'comet-ml',
    tagline: 'ML platform for tracking experiments and managing models',
    logoUrl: '/logos/comet.png',
    website: 'https://www.comet.ml',
    pricing: 'freemium',
    badges: ['popular'],
    category: 'AI Infrastructure & MLOps',
    categorySlug: 'ai-infrastructure-mlops',
    subcategory: 'MLOps Platforms',
    subcategorySlug: 'mlops-platforms',
    description: 'Comet.ml is a machine learning platform that helps teams track, compare, and optimize their ML models. It provides experiment tracking, dataset versioning, model management, and collaboration features.',
    features: ['Experiment tracking', 'Model registry', 'Dataset versioning', 'Hyperparameter optimization', 'Collaboration tools', 'Model monitoring', 'Alerts and notifications', 'Team management'],
    useCases: ['ML experiment tracking', 'Model performance monitoring', 'Team collaboration', 'Hyperparameter tuning', 'Dataset management', 'Research reproducibility', 'Production monitoring', 'Model comparison'],
    tags: ['mlops', 'machine-learning', 'experiment-tracking', 'model-management', 'ai-infrastructure'],
    rating: 4.4,
    reviewCount: 6200,
    alternatives: ['Weights & Biases', 'MLflow', 'TensorBoard'],
    integrations: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'Fast.ai', 'Hugging Face', 'R'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free for individuals, Teams from $25/month, Enterprise pricing available',
      url: 'https://www.comet.ml/pricing',
      description: 'Different tiers based on team size and features'
    }
  },
  
  // Model Deployment
  {
    name: 'Seldon Core',
    slug: 'seldon-core',
    tagline: 'Open source MLOps platform for deploying machine learning models',
    logoUrl: '/logos/seldon.png',
    website: 'https://www.seldon.io/tech',
    pricing: 'free',
    badges: ['community-favorite', 'enterprise'],
    category: 'AI Infrastructure & MLOps',
    categorySlug: 'ai-infrastructure-mlops',
    subcategory: 'Model Deployment',
    subcategorySlug: 'model-deployment',
    description: 'Seldon Core is an open source platform for deploying machine learning models on Kubernetes. It provides tools for model serving, monitoring, and governance at scale.',
    features: ['Model serving', 'Kubernetes integration', 'A/B testing', 'Canary deployments', 'Model monitoring', 'Security', 'Governance', 'Multi-cloud support'],
    useCases: ['Model deployment at scale', 'Kubernetes ML operations', 'A/B testing models', 'Production model serving', 'Enterprise ML governance', 'Multi-cloud deployments', 'Model monitoring', 'Secure model serving'],
    tags: ['mlops', 'model-deployment', 'kubernetes', 'open-source', 'enterprise'],
    rating: 4.3,
    reviewCount: 3800,
    alternatives: ['KServe', 'Triton Inference Server', 'SageMaker'],
    integrations: ['Kubernetes', 'Docker', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'XGBoost', 'MLflow', 'Prometheus'],
    pricingDetails: {
      type: 'free',
      price: 'Open source and free to use',
      url: 'https://www.seldon.io/tech/products/core/',
      description: 'Enterprise support and consulting available'
    }
  },
  {
    name: 'KServe',
    slug: 'kserve',
    tagline: 'Standardized serverless ML inference platform on Kubernetes',
    logoUrl: '/logos/kserve.png',
    website: 'https://kserve.github.io/website/',
    pricing: 'free',
    badges: ['community-favorite'],
    category: 'AI Infrastructure & MLOps',
    categorySlug: 'ai-infrastructure-mlops',
    subcategory: 'Model Deployment',
    subcategorySlug: 'model-deployment',
    description: 'KServe is a Kubernetes-based serverless inference platform that provides a standardized, scalable, and secure way to deploy machine learning models.',
    features: ['Serverless deployment', 'Auto-scaling', 'Model serving', 'A/B testing', 'Canary deployments', 'Multi-framework support', 'Security', 'Monitoring'],
    useCases: ['Model serving on Kubernetes', 'Serverless ML inference', 'Auto-scaling ML services', 'Multi-framework deployment', 'Production model serving', 'Secure inference', 'Scalable deployments', 'Model monitoring'],
    tags: ['mlops', 'model-deployment', 'kubernetes', 'serverless', 'open-source'],
    rating: 4.2,
    reviewCount: 2900,
    alternatives: ['Seldon Core', 'Triton Inference Server', 'SageMaker'],
    integrations: ['Kubernetes', 'Docker', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'XGBoost', 'ONNX', 'Triton'],
    pricingDetails: {
      type: 'free',
      price: 'Completely free and open source',
      url: 'https://github.com/kserve/kserve',
      description: 'Open source project under CNCF'
    }
  },
  
  // Feature Stores
  {
    name: 'Feast',
    slug: 'feast',
    tagline: 'Open source feature store for machine learning',
    logoUrl: '/logos/feast.png',
    website: 'https://feast.dev',
    pricing: 'free',
    badges: ['community-favorite', 'popular'],
    category: 'AI Infrastructure & MLOps',
    categorySlug: 'ai-infrastructure-mlops',
    subcategory: 'Feature Stores',
    subcategorySlug: 'feature-stores',
    description: 'Feast is an open source feature store that helps teams manage and serve machine learning features. It provides a centralized repository for features and enables consistent feature access across training and serving.',
    features: ['Feature repository', 'Feature serving', 'Offline store', 'Online store', 'Feature transformations', 'Feature monitoring', 'Multi-cloud support', 'Framework integration'],
    useCases: ['Feature management', 'ML feature serving', 'Feature consistency', 'Training-serving skew prevention', 'Feature discovery', 'Data lineage', 'Feature versioning', 'Real-time features'],
    tags: ['mlops', 'feature-store', 'machine-learning', 'data-engineering', 'open-source'],
    rating: 4.1,
    reviewCount: 4200,
    alternatives: ['Tecton', 'AWS Feature Store', 'Vertex AI Feature Store'],
    integrations: ['Python', 'Spark', 'BigQuery', 'Redshift', 'Snowflake', 'Redis', 'GCS', 'S3'],
    pricingDetails: {
      type: 'free',
      price: 'Completely free and open source',
      url: 'https://github.com/feast-dev/feast',
      description: 'Open source project with community support'
    }
  },
  {
    name: 'Tecton',
    slug: 'tecton',
    tagline: 'Enterprise feature platform for machine learning',
    logoUrl: '/logos/tecton.png',
    website: 'https://www.tecton.ai',
    pricing: 'enterprise',
    badges: ['enterprise', 'trending'],
    category: 'AI Infrastructure & MLOps',
    categorySlug: 'ai-infrastructure-mlops',
    subcategory: 'Feature Stores',
    subcategorySlug: 'feature-stores',
    description: 'Tecton is an enterprise feature platform that helps data scientists and ML engineers build better models faster with feature engineering, feature serving, and feature monitoring.',
    features: ['Feature repository', 'Real-time features', 'Batch features', 'Feature monitoring', 'Data quality', 'Access control', 'Governance', 'Scalability'],
    useCases: ['Enterprise feature management', 'Real-time ML features', 'Feature engineering', 'Model performance improvement', 'Data quality monitoring', 'ML governance', 'Feature discovery', 'Team collaboration'],
    tags: ['mlops', 'feature-store', 'enterprise', 'real-time-features', 'machine-learning'],
    rating: 4.5,
    reviewCount: 1800,
    alternatives: ['Feast', 'AWS Feature Store', 'Vertex AI Feature Store'],
    integrations: ['Python', 'Spark', 'Snowflake', 'Redshift', 'BigQuery', 'Kafka', 'Redis', 'DynamoDB'],
    pricingDetails: {
      type: 'enterprise',
      price: 'Custom enterprise pricing',
      url: 'https://www.tecton.ai/contact/',
      description: 'Enterprise pricing based on usage and requirements'
    }
  },
  
  // Model Monitoring
  {
    name: 'Aporia',
    slug: 'aporia',
    tagline: 'Full-stack ML observability platform',
    logoUrl: '/logos/aporia.png',
    website: 'https://www.aporia.com',
    pricing: 'paid',
    badges: ['enterprise'],
    category: 'AI Infrastructure & MLOps',
    categorySlug: 'ai-infrastructure-mlops',
    subcategory: 'Model Monitoring',
    subcategorySlug: 'model-monitoring',
    description: 'Aporia provides full-stack ML observability to monitor, explain, and improve models in production with actionable insights and automated anomaly detection.',
    features: ['Model monitoring', 'Drift detection', 'Bias detection', 'Explainability', 'Performance tracking', 'Alerting', 'Root cause analysis', 'Data quality monitoring'],
    useCases: ['Production ML monitoring', 'Model performance tracking', 'ML model debugging', 'Regulatory compliance', 'Model risk management', 'ML system health'],
    tags: ['mlops', 'model-monitoring', 'ml-observability', 'ai-governance', 'ml-reliability'],
    rating: 4.7,
    reviewCount: 3200,
    alternatives: ['Arize', 'Fiddler', 'WhyLabs'],
    integrations: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'AWS SageMaker', 'Azure ML', 'GCP Vertex AI'],
    pricingDetails: {
      type: 'paid',
      price: 'Starts at $999/month',
      url: 'https://www.aporia.com/pricing',
      description: 'Pricing based on number of models and data volume'
    }
  },
  
  // Data Labeling
  {
    name: 'Label Studio',
    slug: 'label-studio',
    tagline: 'Open source data labeling platform',
    logoUrl: '/logos/label-studio.png',
    website: 'https://labelstud.io',
    pricing: 'free',
    badges: ['community-favorite'],
    category: 'AI Infrastructure & MLOps',
    categorySlug: 'ai-infrastructure-mlops',
    subcategory: 'Data Labeling',
    subcategorySlug: 'data-labeling',
    description: 'Label Studio is an open source data labeling tool for various data types including text, images, audio, and video with support for multiple machine learning frameworks.',
    features: ['Multi-format support', 'Collaborative labeling', 'Active learning', 'Quality control', 'Customizable UI', 'ML backend integration', 'API access', 'Self-hosted'],
    useCases: ['Training data creation', 'Data annotation', 'Model fine-tuning', 'Data quality improvement', 'Team collaboration', 'Active learning pipelines'],
    tags: ['data-labeling', 'open-source', 'ml-data', 'data-annotation', 'training-data'],
    rating: 4.6,
    reviewCount: 4200,
    alternatives: ['Labelbox', 'Prodigy', 'Amazon SageMaker Ground Truth'],
    integrations: ['Python', 'TensorFlow', 'PyTorch', 'Hugging Face', 'YOLO', 'COCO', 'Pascal VOC'],
    pricingDetails: {
      type: 'free',
      price: 'Free and open source',
      url: 'https://labelstud.io/pricing',
      description: 'Open source with premium cloud offering available'
    }
  },
  
  // Model Serving
  {
    name: 'BentoML',
    slug: 'bentoml',
    tagline: 'Open source model serving framework',
    logoUrl: '/logos/bentoml.png',
    website: 'https://www.bentoml.com',
    pricing: 'free',
    badges: ['community-favorite'],
    category: 'AI Infrastructure & MLOps',
    categorySlug: 'ai-infrastructure-mlops',
    subcategory: 'Model Serving',
    subcategorySlug: 'model-serving',
    description: 'BentoML is an open source framework for serving, deploying, and scaling machine learning models in production with high performance and low latency.',
    features: ['Model packaging', 'Docker support', 'Kubernetes native', 'Autoscaling', 'Monitoring', 'Batch processing', 'Model registry', 'REST/GRPC APIs'],
    useCases: ['Model deployment', 'ML model serving', 'Production ML', 'Microservices', 'Kubernetes deployment', 'Serverless ML'],
    tags: ['mlops', 'model-serving', 'open-source', 'kubernetes', 'ml-deployment'],
    rating: 4.5,
    reviewCount: 2800,
    alternatives: ['Seldon', 'KServe', 'TorchServe'],
    integrations: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'XGBoost', 'LightGBM', 'ONNX', 'MLflow'],
    pricingDetails: {
      type: 'free',
      price: 'Free and open source',
      url: 'https://www.bentoml.com/pricing',
      description: 'Open source with enterprise support available'
    }
  },
  
  // Workflow Orchestration
  {
    name: 'Prefect',
    slug: 'prefect',
    tagline: 'The easiest way to orchestrate and observe data workflows',
    logoUrl: '/logos/prefect.png',
    website: 'https://www.prefect.io',
    pricing: 'freemium',
    badges: ['popular'],
    category: 'AI Infrastructure & MLOps',
    categorySlug: 'ai-infrastructure-mlops',
    subcategory: 'Workflow Orchestration',
    subcategorySlug: 'workflow-orchestration',
    description: 'Prefect is a modern workflow orchestration platform that makes it easy to build, schedule, and monitor data workflows at scale with Python.',
    features: ['Workflow automation', 'Task scheduling', 'Dependency management', 'Distributed execution', 'UI dashboard', 'Error handling', 'Retry mechanisms', 'Event-driven workflows'],
    useCases: ['Data pipeline orchestration', 'ETL workflows', 'ML pipeline automation', 'Batch processing', 'Scheduled jobs', 'Data processing'],
    tags: ['workflow', 'orchestration', 'data-pipelines', 'mlops', 'automation'],
    rating: 4.7,
    reviewCount: 3800,
    alternatives: ['Airflow', 'Dagster', 'Kubeflow'],
    integrations: ['Python', 'Dask', 'Kubernetes', 'AWS', 'GCP', 'Azure', 'Docker', 'Snowflake'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free for individuals, Team from $20/month, Enterprise pricing available',
      url: 'https://www.prefect.io/pricing',
      description: 'Different tiers based on features and scale'
    }
  },
  
  // Experiment Tracking
  {
    name: 'Comet.ml',
    slug: 'comet-ml',
    tagline: 'ML platform for tracking experiments, models, and more',
    logoUrl: '/logos/comet-ml.png',
    website: 'https://www.comet.ml',
    pricing: 'freemium',
    badges: ['popular', 'trending'],
    category: 'AI Infrastructure & MLOps',
    categorySlug: 'ai-infrastructure-mlops',
    subcategory: 'Experiment Tracking',
    subcategorySlug: 'experiment-tracking',
    description: 'Comet.ml is a platform that helps data scientists and teams track, compare, explain, and optimize experiments and models across the machine learning lifecycle.',
    features: ['Experiment tracking', 'Model versioning', 'Hyperparameter optimization', 'Model monitoring', 'Collaboration tools', 'Visualization', 'Reproducibility', 'Integration with ML frameworks'],
    useCases: ['ML experiment management', 'Model comparison', 'Hyperparameter tuning', 'Team collaboration', 'Research reproducibility', 'Model debugging'],
    tags: ['mlops', 'experiment-tracking', 'machine-learning', 'model-management', 'ml-ops'],
    rating: 4.6,
    reviewCount: 5200,
    alternatives: ['Weights & Biases', 'MLflow', 'Neptune.ai'],
    integrations: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'XGBoost', 'LightGBM', 'Hugging Face'],
    pricingDetails: {
      type: 'freemium',
      price: 'Free for individuals, Teams from $179/month, Enterprise pricing available',
      url: 'https://www.comet.ml/pricing',
      description: 'Different tiers based on features and team size'
    }
  }
];