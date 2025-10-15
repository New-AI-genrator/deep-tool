import Link from 'next/link';
import { SectionHeader } from '../components/SectionHeader';
import { HeroSanctuary } from '../components/home/HeroSanctuary';
import { NexusGateway } from '../components/home/NexusGateway';
import { CathedralOfCategories } from '../components/home/CathedralOfCategories';
import { FeaturedPantheon } from '../components/home/FeaturedPantheon';
import { DailyIntelligence } from '../components/home/DailyIntelligence';
import { ExpertSanctum } from '../components/home/ExpertSanctum';
import { GlobalAIMap } from '../components/home/GlobalAIMap';
import { WebsiteStructuredData, OrganizationStructuredData } from '../components/StructuredData';

export default async function HomePage() {
	return (
		<main>
			<WebsiteStructuredData 
				name="DeepTool"
				url="https://deeptool.com"
				description="World's largest tools directory with 10,000+ software and services across 264 categories"
			/>
			<OrganizationStructuredData 
				name="DeepTool"
				url="https://deeptool.com"
				logo="https://deeptool.com/logo.png"
				description="The most comprehensive directory of software tools and services"
				sameAs={[
					'https://twitter.com/deeptool',
					'https://linkedin.com/company/deeptool',
					'https://github.com/deeptool'
				]}
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
