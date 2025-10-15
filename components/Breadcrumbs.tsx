import Link from 'next/link';

type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
	return (
		<nav aria-label="Breadcrumb" className="mb-4 text-xs text-aether-mist">
			<ol className="flex flex-wrap items-center gap-1">
				{items.map((it, i) => (
					<li key={i} className="flex items-center">
						{it.href ? (
							<Link href={it.href} className="hover:text-white">
								{it.label}
							</Link>
						) : (
							<span className="text-white/80">{it.label}</span>
						)}
						{i < items.length - 1 && <span className="mx-2 text-aether-mist/60">/</span>}
					</li>
				))}
			</ol>
		</nav>
	);
}
