type SectionHeaderProps = {
	title: string;
	subtitle?: string;
	action?: React.ReactNode;
};

export function SectionHeader({ title, subtitle, action }: SectionHeaderProps) {
	return (
		<div className="mb-6 flex items-end justify-between gap-4">
			<div>
				<div className="relative inline-block">
					<h2 className="text-base font-semibold tracking-wide text-white">{title}</h2>
					<div className="pointer-events-none absolute -bottom-1 left-0 h-px w-full bg-gradient-to-r from-aether-electrum/60 via-aether-holo/40 to-transparent" />
				</div>
				{subtitle && <p className="mt-2 text-xs text-aether-mist">{subtitle}</p>}
			</div>
			{action}
		</div>
	);
}
