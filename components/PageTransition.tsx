"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export function PageTransition({ children }: { children: React.ReactNode }) {
	const key = usePathname();
	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={key}
				initial={{ opacity: 0, y: 8 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -8 }}
				transition={{ duration: 0.28, ease: 'easeOut' }}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
}
