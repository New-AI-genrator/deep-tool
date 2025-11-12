import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';
import { cn } from '@/lib/utils';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  className?: string;
  isCurrent?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  listClassName?: string;
  itemClassName?: string;
  separator?: React.ReactNode;
  showHome?: boolean;
  homeHref?: string;
  homeLabel?: string;
  hideLastSeparator?: boolean;
  ariaLabel?: string;
}

export function Breadcrumbs({
  items,
  className = '',
  listClassName = '',
  itemClassName = '',
  separator = '/',
  showHome = true,
  homeHref = '/',
  homeLabel = 'Home',
  hideLastSeparator = false,
  ariaLabel = 'Breadcrumb navigation',
}: BreadcrumbsProps) {
  const pathname = usePathname();
  
  // Generate structured data for JSON-LD
  const generateStructuredData = () => {
    const itemListElement = items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href && { item: new URL(item.href, 'https://deeptool.vercel.app').toString() }),
    }));

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement,
    };
  };

  // Add home item if needed
  const breadcrumbItems = [
    ...(showHome
      ? [
          {
            label: homeLabel,
            href: homeHref,
            isCurrent: pathname === homeHref,
            className: 'text-aether-mist hover:text-white',
          },
        ]
      : []),
    ...items.map((item, index) => ({
      ...item,
      isCurrent: index === items.length - 1 && !item.href || pathname === item.href,
      className: cn(
        item.className,
        item.isCurrent || index === items.length - 1
          ? 'text-white font-medium'
          : 'text-aether-mist hover:text-white',
      ),
    })),
  ];

  return (
    <>
      <nav 
        aria-label={ariaLabel} 
        className={cn('mb-4 text-sm', className)}
      >
        <ol 
          className={cn('flex flex-wrap items-center gap-1', listClassName)}
          itemScope 
          itemType="https://schema.org/BreadcrumbList"
        >
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;
            const showSeparator = !(hideLastSeparator && isLast) && index < breadcrumbItems.length - 1;
            
            return (
              <Fragment key={index}>
                <li 
                  className={cn('flex items-center', itemClassName)}
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                >
                  {item.href && !item.isCurrent ? (
                    <Link
                      href={item.href}
                      className={cn('transition-colors duration-200', item.className)}
                      itemProp="item"
                      aria-current={item.isCurrent ? 'page' : undefined}
                    >
                      {item.icon && <span className="mr-1">{item.icon}</span>}
                      <span itemProp="name">{item.label}</span>
                      <meta itemProp="position" content={String(index + 1)} />
                    </Link>
                  ) : (
                    <span 
                      className={cn('text-white/80', item.className)}
                      itemProp="item"
                      aria-current={item.isCurrent ? 'page' : undefined}
                    >
                      {item.icon && <span className="mr-1">{item.icon}</span>}
                      <span itemProp="name">{item.label}</span>
                      <meta itemProp="position" content={String(index + 1)} />
                    </span>
                  )}
                </li>
                {showSeparator && (
                  <li 
                    className="mx-2 text-aether-mist/60" 
                    aria-hidden="true"
                  >
                    {separator}
                  </li>
                )}
              </Fragment>
            );
          })}
        </ol>
      </nav>
      
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateStructuredData()),
        }}
      />
    </>
  );
}

// Helper component for icon-based breadcrumbs
export function IconBreadcrumbs({ 
  items, 
  icon: Icon, 
  ...props 
}: Omit<BreadcrumbsProps, 'separator'> & { icon: React.ComponentType<{ className?: string }> }) {
  return (
    <Breadcrumbs
      {...props}
      items={items}
      separator={
        <Icon className="h-3 w-3 text-aether-mist/60" />
      }
    />
  );
}
