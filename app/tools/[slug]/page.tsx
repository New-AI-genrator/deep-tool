import type { Metadata } from 'next';
import { NexusMiniPlayground } from '../../../components/NexusMiniPlayground';

export const dynamicParams = true;

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
	return {
		title: `${params.slug} • Aether Nexus`,
		description: 'Tool details, benchmarks, and a mini Nexus Playground.'
	};
}

export default function ToolDetailPage({ params }: { params: { slug: string } }) {
	const { slug } = params;
	return (
		<main className="grid grid-cols-1 gap-8 md:grid-cols-3">
			<section className="md:col-span-2">
				<h1 className="text-2xl font-semibold text-white capitalize">{slug.replace(/-/g, ' ')}</h1>
				<p className="mt-2 text-sm text-aether-mist">Overview • Features • Pricing • Benchmarks • Integrations • Reviews</p>
				<div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
					<div className="rounded-xl border border-[#2A2F3A] bg-aether-obsidian p-4 text-center">
						<div className="text-xs text-aether-mist">Latency</div>
						<div className="mt-1 text-sm text-white">~ 420 ms</div>
					</div>
					<div className="rounded-xl border border-[#2A2F3A] bg-aether-obsidian p-4 text-center">
						<div className="text-xs text-aether-mist">Cost / Output</div>
						<div className="mt-1 text-sm text-white">$0.012</div>
					</div>
					<div className="rounded-xl border border-[#2A2F3A] bg-aether-obsidian p-4 text-center">
						<div className="text-xs text-aether-mist">Accuracy</div>
						<div className="mt-1 text-sm text-white">92.4%</div>
					</div>
					<div className="rounded-xl border border-[#2A2F3A] bg-aether-obsidian p-4 text-center">
						<div className="text-xs text-aether-mist">Uptime (30d)</div>
						<div className="mt-1 text-sm text-white">99.95%</div>
					</div>
				</div>
				<div className="mt-8 rounded-2xl border border-[#2A2F3A] bg-aether-obsidian p-6">
					<h2 className="text-base font-semibold text-white">Overview</h2>
					<p className="mt-2 text-sm text-aether-mist">This is a placeholder description. Integrate real data later via the backend.</p>
				</div>
			</section>
			<aside className="md:col-span-1">
				<NexusMiniPlayground />
			</aside>
		</main>
	);
}
