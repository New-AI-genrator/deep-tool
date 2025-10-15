export type SubCategory = { name: string; slug: string };

export type SubCategoryMap = Record<string, SubCategory[]>;

export const subCategories: SubCategoryMap = {
	'creative-design': [
		{ name: 'Image & Art Generation', slug: 'image-art-generation' },
		{ name: 'Video Production & Editing', slug: 'video-production-editing' },
		{ name: 'Music & Audio Synthesis', slug: 'music-audio-synthesis' },
		{ name: '3D & Asset Creation', slug: '3d-asset-creation' },
		{ name: 'Writing & Storytelling', slug: 'writing-storytelling' }
	],
	'productivity-business': [
		{ name: 'Project & Task Management', slug: 'project-task-management' },
		{ name: 'CRM & Sales Automation', slug: 'crm-sales-automation' },
		{ name: 'Data Analysis & Visualization', slug: 'data-analysis-visualization' },
		{ name: 'Communication & Meetings', slug: 'communication-meetings' },
		{ name: 'Document & PDF Intelligence', slug: 'document-pdf-intelligence' }
	],
	'development-engineering': [
		{ name: 'Code Generation & Completion', slug: 'code-generation-completion' },
		{ name: 'Bug Detection & Code Quality', slug: 'bug-detection-code-quality' },
		{ name: 'API & DevOps Automation', slug: 'api-devops-automation' },
		{ name: 'Low-Code / No-Code Platforms', slug: 'low-code-no-code-platforms' },
		{ name: 'AI Model Deployment', slug: 'ai-model-deployment' }
	],
	'research-science': [
		{ name: 'Academic Research Assistants', slug: 'academic-research-assistants' },
		{ name: 'Scientific Discovery & Simulation', slug: 'scientific-discovery-simulation' },
		{ name: 'Data Mining & Literature Review', slug: 'data-mining-literature-review' },
		{ name: 'Computational Biology & Chemistry', slug: 'computational-biology-chemistry' },
		{ name: 'Lab Automation & ELN', slug: 'lab-automation-eln' }
	],
	'marketing-growth': [
		{ name: 'SEO & Content Strategy', slug: 'seo-content-strategy' },
		{ name: 'Social Media & Advertising', slug: 'social-media-advertising' },
		{ name: 'Market Research & Sentiment Analysis', slug: 'market-research-sentiment' },
		{ name: 'Personalization & CRO', slug: 'personalization-cro' },
		{ name: 'Attribution & MMM', slug: 'attribution-mmm' }
	]
};

// For categories without explicit entries above, we’ll fall back to generic subcategories.
export const genericSubs: SubCategory[] = [
	{ name: 'Discovery & Research', slug: 'discovery-research' },
	{ name: 'Automation & Orchestration', slug: 'automation-orchestration' },
	{ name: 'Analytics & Benchmarking', slug: 'analytics-benchmarking' },
	{ name: 'Security & Compliance', slug: 'security-compliance' },
	{ name: 'Integrations & Connectors', slug: 'integrations-connectors' }
];
