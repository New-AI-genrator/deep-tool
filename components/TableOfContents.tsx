import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
  className?: string;
  title?: string;
}

export default function TableOfContents({
  content,
  className = '',
  title = 'Table of Contents',
}: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Parse headings from content
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const headingElements = Array.from(
      doc.querySelectorAll('h2, h3, h4')
    ) as HTMLElement[];

    const extractedHeadings = headingElements.map((heading) => ({
      id: heading.id || heading.textContent?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '') || '',
      text: heading.textContent || '',
      level: parseInt(heading.tagName.charAt(1)),
    }));

    setHeadings(extractedHeadings);

    // Set up intersection observer for active heading detection
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '0% 0% -80% 0%',
        threshold: 0.1,
      }
    );

    // Observe all headings
    const headingElementsToObserve = Array.from(
      document.querySelectorAll('h2[id], h3[id], h4[id]')
    );
    headingElementsToObserve.forEach((element) => observer.observe(element));

    return () => {
      headingElementsToObserve.forEach((element) =>
        observer.unobserve(element)
      );
      observer.disconnect();
    };
  }, [content]);

  if (headings.length === 0) {
    return null;
  }

  const scrollToHeading = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      // Update URL without page reload
      window.history.pushState({}, '', `#${id}`);
    }
  };

  return (
    <div className={cn('sticky top-24', className)}>
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          {title}
        </h2>
        <nav aria-label="Table of contents">
          <ul className="space-y-2">
            {headings.map((heading) => (
              <li
                key={heading.id}
                className={cn(
                  'text-sm transition-colors duration-200',
                  {
                    'ml-0': heading.level === 2,
                    'ml-3': heading.level === 3,
                    'ml-6': heading.level === 4,
                    'text-blue-600 dark:text-blue-400 font-medium':
                      activeId === heading.id,
                    'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200':
                      activeId !== heading.id,
                  }
                )}
              >
                <a
                  href={`#${heading.id}`}
                  onClick={(e) => scrollToHeading(heading.id, e)}
                  className="block py-1 hover:underline"
                  aria-current={activeId === heading.id ? 'location' : undefined}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
