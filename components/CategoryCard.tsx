import Link from 'next/link';

type CategoryCardProps = {
  name: string;
  slug: string;
};

const getCategoryEmoji = (slug: string): string => {
  const emojiMap: Record<string, string> = {
    'creative-design': '🎨',
    'productivity-business': '📊',
    'development-engineering': '💻',
    'research-science': '🔬',
    'marketing-growth': '🚀',
    'legal-compliance': '⚖️',
    'health-biotechnology': '🧬',
    'finance-trading': '💹',
    'education-learning': '🎓',
    'gaming-metaverse': '🎮',
    'robotics-automation': '🤖',
    'cybersecurity-threat-intelligence': '🔒',
    'climate-sustainability': '🌱',
    'quantum-computing': '⚛️',
    'ai-infrastructure-mlops': '🧠',
    'ar-vr-spatial': '👓',
    'blockchain-nft': '⛓️',
    'mining-metals': '⛏️',
  };

  return emojiMap[slug] || '📁';
};

const colors = [
  'from-purple-600/20 to-blue-500/20',
  'from-emerald-500/20 to-teal-600/20',
  'from-pink-500/20 to-rose-500/20',
  'from-amber-500/20 to-orange-600/20',
  'from-violet-500/20 to-fuchsia-600/20',
  'from-cyan-500/20 to-blue-600/20',
];

export function CategoryCard({ name, slug }: CategoryCardProps) {
  const emoji = getCategoryEmoji(slug);
  const color = colors[Math.floor(Math.random() * colors.length)];
  
  return (
    <div className="group relative h-full transition-transform duration-300 hover:-translate-y-1">
      <Link href={`/categories/${slug}`}>
        <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${color} backdrop-blur-lg border border-white/10 p-6 h-full transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-500/20`}>
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-gradient-to-l from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col h-full">
            <div className="mb-4 p-3 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-2xl">
              {emoji}
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{name}</h3>
            <p className="text-sm text-white/70 mb-4">Explore cutting-edge tools</p>
            <div className="mt-auto pt-4 border-t border-white/10">
              <span className="text-xs font-medium text-blue-400 group-hover:text-blue-300 transition-colors flex items-center">
                Discover more
                <svg className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
        </div>
      </Link>
    </div>
  );
}
