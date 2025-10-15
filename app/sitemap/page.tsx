import Link from 'next/link';

export default function SitemapPage() {
	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/categories', label: 'Categories' },
		{ href: '/tools', label: 'Tools' },
		{ href: '/best', label: 'Best' },
		{ href: '/intelligence', label: 'Intelligence' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/pricing', label: 'Pricing' },
		{ href: '/playground', label: 'Playground' }
	];
	return (
		<main>
			<h1 className="text-xl font-semibold text-white">Sitemap</h1>
			<ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-aether-mist md:grid-cols-3">
				{links.map((l) => (
					<li key={l.href}>
						<Link href={l.href} className="hover:text-white">{l.label}</Link>
					</li>
				))}
			</ul>
		</main>
	);
}
