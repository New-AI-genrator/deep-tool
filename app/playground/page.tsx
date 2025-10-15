import { NexusMiniPlayground } from '../../components/NexusMiniPlayground';

export default function PlaygroundPage() {
	return (
		<main>
			<h1 className="text-xl font-semibold text-white">Nexus Playground™</h1>
			<p className="mt-2 text-sm text-aether-mist">Chain tools into workflows. This is a minimal placeholder.</p>
			<div className="mt-6 max-w-lg">
				<NexusMiniPlayground />
			</div>
		</main>
	);
}
