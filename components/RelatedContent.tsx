import Link from 'next/link';
import Image from 'next/image';
import type { RelatedContent } from '@/lib/internal-linking';

interface RelatedContentProps {
  relatedContent: RelatedContent[];
  title?: string;
  className?: string;
}

export default function RelatedContent({
  relatedContent,
  title = 'You Might Also Like',
  className = '',
}: RelatedContentProps) {
  if (!relatedContent || relatedContent.length === 0) {
    return null;
  }

  return (
    <div className={`bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 ${className}`}>
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
        {title}
      </h3>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {relatedContent.map((item) => (
          <Link
            key={`${item.type}-${item.slug}`}
            href={`/${item.type === 'blog' ? 'blog' : 'tools'}/${item.slug}`}
            className="block group"
            aria-label={`Read more about ${item.title}`}
          >
            <div className="h-full border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md hover:border-blue-500 dark:hover:border-blue-400">
              {item.image && (
                <div className="relative h-40 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              <div className="p-4">
                <span className="inline-block px-2 py-1 text-xs font-medium text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-200 rounded-full mb-2">
                  {item.type === 'blog' ? 'Article' : 'Tool'}
                </span>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
