"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import UserPreferencesTracker from './UserPreferencesTracker';
import FavoriteButton from './FavoriteButton';

export type ToolCardProps = {
	name: string;
	tagline: string;
	logoUrl: string;
	category?: string;
	id?: string;
	badges?: Array<'nexus-verified' | 'trending' | 'enterprise'>;
	onClick?: () => void;
};

export function ToolCard({ name, tagline, logoUrl, category, id, badges = [], onClick }: ToolCardProps) {
	return (
		<motion.button
			onClick={onClick}
			whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,240,255,0.18)' }}
			whileTap={{ scale: 0.98 }}
			className="group relative flex w-full items-center justify-between overflow-hidden rounded-2xl border border-[#2A2F3A] bg-aether-obsidian p-5 text-left transition-colors duration-300"
			style={{
				backgroundImage:
					'radial-gradient(1200px 200px at 100% 0%, rgba(0,240,255,0.08), transparent), radial-gradient(800px 160px at 0% 100%, rgba(230,210,161,0.07), transparent)'
			}}
		>
			<UserPreferencesTracker category={category} toolId={id} />
			<div className="flex items-center gap-4">
				<div className="relative h-12 w-12 overflow-hidden rounded-xl ring-1 ring-[#2A2F3A]">
					<Image src={logoUrl} alt={`${name} logo`} fill className="object-contain" />
				</div>
				<div>
					<div className="flex items-center gap-2">
						<h3 className="text-[15px] font-semibold tracking-wide text-white">{name}</h3>
						{badges.includes('nexus-verified') && (
							<span className="rounded-md bg-[rgba(230,210,161,0.12)] px-2 py-0.5 text-[10px] font-medium text-aether-electrum ring-1 ring-[rgba(230,210,161,0.35)]">
								Nexus Verified
							</span>
						)}
						{badges.includes('enterprise') && (
							<span className="rounded-md bg-[rgba(0,240,255,0.08)] px-2 py-0.5 text-[10px] font-medium text-aether-holo ring-1 ring-[rgba(0,240,255,0.35)]">
								Enterprise
							</span>
						)}
						{badges.includes('trending') && (
							<span className="rounded-md bg-[rgba(255,255,255,0.06)] px-2 py-0.5 text-[10px] font-medium text-aether-mist ring-1 ring-[rgba(255,255,255,0.16)]">
								Trending
							</span>
						)}
					</div>
					<p className="mt-1 line-clamp-2 text-[12px] text-aether-mist">{tagline}</p>
				</div>
			</div>
			{id && (
				<div className="absolute top-2 right-2">
					<FavoriteButton toolId={id} />
				</div>
			)}
			<div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
				<div className="absolute -right-10 -top-10 h-40 w-40 rotate-12 rounded-full bg-[radial-gradient(circle,rgba(0,240,255,0.22),rgba(0,240,255,0)_60%)]" />
				<div className="absolute -bottom-12 -left-12 h-44 w-44 -rotate-6 rounded-full bg-[radial-gradient(circle,rgba(230,210,161,0.18),rgba(230,210,161,0)_60%)]" />
			</div>
		</motion.button>
	);
}