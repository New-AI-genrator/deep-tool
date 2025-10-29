import Link from 'next/link';
import { SectionHeader } from '../components/SectionHeader';
import { HeroSanctuary } from '../components/home/HeroSanctuary';
import { NexusGateway } from '../components/home/NexusGateway';
import { CathedralOfCategories } from '../components/home/CathedralOfCategories';
import { FeaturedPantheon } from '../components/home/FeaturedPantheon';
import { DailyIntelligence } from '../components/home/DailyIntelligence';
import { ExpertSanctum } from '../components/home/ExpertSanctum';
import { GlobalAIMap } from '../components/home/GlobalAIMap';
import { CollectionPageSchema } from '../components/StructuredData';
import { getAllTools } from '../data/tools';

export default async function HomePage() {
	const allTools = getAllTools();
	
	return (
		<main>
			<CollectionPageSchema
				name="DeepTool - World's Largest Tools Directory"
				description="Discover 10,000+ premium tools across 264 categories. The most comprehensive directory of SaaS, AI, and productivity tools."
				url="https://deep-tool.vercel.app"
				numberOfItems={allTools.length}
			/>
			<HeroSanctuary />
			<NexusGateway />
			<CathedralOfCategories />
			<FeaturedPantheon />
			<DailyIntelligence />
			<ExpertSanctum />
			<GlobalAIMap />
		</main>
	);
}
