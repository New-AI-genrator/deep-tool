"use client";

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { masterCategories } from '../data/categories';
import { subCategories, genericSubs } from '../data/subcategories';
import { toolsBySubcategory } from '../data/tools';

function normalize(str: string) {
	return str.toLowerCase();
}

export function SearchOverlay() {
	const [open, setOpen] = useState(false);
	const [q, setQ] = useState('');

	useEffect(() => {
		function onKey(e: KeyboardEvent) {
			const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
			if ((isMac ? e.metaKey : e.ctrlKey) && e.key.toLowerCase() === 'k') {
				e.preventDefault();
				setOpen((v) => !v);
			}
		}
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, []);

	useEffect(() => {
		if (open) setTimeout(() => document.getElementById('global-search-input')?.focus(), 0);
	}, [open]);

	const results = useMemo(() => {
		if (!q) return [] as Array<{ label: string; href: string; type: string }>;
		const n = normalize(q);
		const items: Array<{ label: string; href: string; type: string }> = [];
		for (const c of masterCategories) {
			if (normalize(c.name).includes(n)) items.push({ label: c.name, href: `/categories/${c.slug}`, type: 'Category' });
			const subs = subCategories[c.slug] || genericSubs;
			for (const s of subs) {
				if (normalize(s.name).includes(n)) items.push({ label: `${c.name} › ${s.name}`, href: `/categories/${c.slug}/${s.slug}`, type: 'Subcategory' });
				const tools = toolsBySubcategory[s.slug] || [];
				for (const t of tools) {
					if (normalize(t.name).includes(n)) items.push({ label: `${t.name}`, href: `/tools/${t.slug}`, type: 'Tool' });
				}
			}
		}
		return items.slice(0, 20);
	}, [q]);

	if (!open) return null;
	return (
		<div className="fixed inset-0 z-50 bg-black/60 p-4 backdrop-blur">
			<div className="mx-auto w-full max-w-2xl rounded-2xl border border-[#2A2F3A] bg-aether-obsidian p-3">
				<div className="flex items-center gap-2">
					<input
						id="global-search-input"
						value={q}
						onChange={(e) => setQ(e.target.value)}
						placeholder="Search categories, subcategories, tools... (Esc to close)"
						className="w-full rounded-md border border-[#2A2F3A] bg-black/30 px-3 py-2 text-sm text-white outline-none placeholder:text-aether-mist focus:ring-1 focus:ring-aether-holo/40"
					/>
					<button onClick={() => setOpen(false)} className="rounded-md px-2 py-1 text-xs text-aether-mist hover:bg-white/5">Close</button>
				</div>
				<div className="mt-3 max-h-80 overflow-auto">
					{results.length === 0 && <div className="p-3 text-xs text-aether-mist">Type to search…</div>}
					<ul className="space-y-1">
						{results.map((r, i) => (
							<li key={i}>
								<Link href={r.href} onClick={() => setOpen(false)} className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-aether-mist hover:bg-white/5 hover:text-white">
									<span>{r.label}</span>
									<span className="text-[10px] text-aether-mist/70">{r.type}</span>
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="mt-2 flex items-center justify-end text-[10px] text-aether-mist/70">Press Ctrl/Cmd+K to toggle</div>
			</div>
		</div>
	);
}
