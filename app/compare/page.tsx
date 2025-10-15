import { headers } from 'next/headers';

function getQueryParam(name: string): string | null {
	const hdrs = headers();
	const url = hdrs.get('x-url') || '';
	try {
		const u = new URL(url, 'http://localhost');
		return u.searchParams.get(name);
	} catch {
		return null;
	}
}

function Kpi({ label, value, barPct, color }: { label: string; value: string; barPct: number; color: string }) {
	return (
		<div className="rounded-xl border border-[#2A2F3A] bg-aether-obsidian p-4">
			<div className="text-xs text-aether-mist">{label}</div>
			<div className="mt-1 text-sm text-white">{value}</div>
			<div className="mt-2 h-1.5 w-full rounded-full bg-white/10">
				<div className="h-1.5 rounded-full" style={{ width: `${barPct}%`, backgroundColor: color }} />
			</div>
		</div>
	);
}

export default function ComparePage() {
	const a = getQueryParam('a') || 'midjourney';
	const b = getQueryParam('b') || 'runway';
	return (
		<main>
			<h1 className="text-xl font-semibold text-white">Compare</h1>
			<p className="mt-1 text-sm text-aether-mist">Side-by-side comparison (placeholder metrics).</p>
			<div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
				<div>
					<h2 className="text-base font-semibold text-white capitalize">{a}</h2>
					<div className="mt-3 grid grid-cols-2 gap-3">
						<Kpi label="Latency" value="420 ms" barPct={78} color="#00F0FF" />
						<Kpi label="Cost/Output" value="$0.012" barPct={64} color="#E6D2A1" />
						<Kpi label="Accuracy" value="92.4%" barPct={92} color="#00F0FF" />
						<Kpi label="Uptime" value="99.95%" barPct={99} color="#E6D2A1" />
					</div>
				</div>
				<div>
					<h2 className="text-base font-semibold text-white capitalize">{b}</h2>
					<div className="mt-3 grid grid-cols-2 gap-3">
						<Kpi label="Latency" value="610 ms" barPct={54} color="#00F0FF" />
						<Kpi label="Cost/Output" value="$0.009" barPct={80} color="#E6D2A1" />
						<Kpi label="Accuracy" value="90.2%" barPct={90} color="#00F0FF" />
						<Kpi label="Uptime" value="99.90%" barPct={99} color="#E6D2A1" />
					</div>
				</div>
			</div>
		</main>
	);
}
