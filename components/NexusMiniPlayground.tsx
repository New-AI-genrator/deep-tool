"use client";

import { useState } from 'react';

export function NexusMiniPlayground() {
	const [steps, setSteps] = useState<Array<{ id: number; name: string }>>([
		{ id: 1, name: 'Generate Image (Midjourney)' },
		{ id: 2, name: 'Upscale (Remaster)' },
		{ id: 3, name: 'Caption (LLM)' }
	]);
	return (
		<div className="rounded-2xl border border-[#2A2F3A] bg-aether-obsidian p-4">
			<h3 className="text-sm font-semibold text-white">Nexus Playground™</h3>
			<p className="mt-1 text-xs text-aether-mist">Chain steps and run a mini workflow.</p>
			<ol className="mt-3 space-y-2">
				{steps.map((s) => (
					<li key={s.id} className="rounded-xl border border-[#2A2F3A] bg-black/30 px-3 py-2 text-xs text-aether-mist">
						{s.name}
					</li>
				))}
			</ol>
			<button
				onClick={() => alert('Simulated run complete')}
				className="mt-3 w-full rounded-xl bg-aether-holo/10 px-3 py-2 text-xs font-medium text-aether-holo ring-1 ring-aether-holo/40 hover:bg-aether-holo/15"
			>
				Run Now
			</button>
		</div>
	);
}
