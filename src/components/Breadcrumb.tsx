import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export interface Crumb {
  label: string;
  to?: string;
}

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  if (items.length === 0) return null;
  return (
    <nav
      aria-label="Breadcrumb"
      className="mx-auto max-w-7xl px-5 sm:px-8 pt-20 sm:pt-24"
    >
      <ol className="flex flex-wrap items-center gap-1 text-sm">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <Fragment key={i}>
              <li>
                {item.to && !last ? (
                  <Link
                    to={item.to}
                    className="px-1.5 py-1 rounded-md text-ink-500 hover:text-brand-600 hover:bg-brand-50 transition-colors font-medium focus-ring"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    aria-current={last ? 'page' : undefined}
                    className={`px-1.5 py-1 rounded-md font-semibold ${
                      last ? 'text-ink-900' : 'text-ink-500'
                    }`}
                  >
                    {item.label}
                  </span>
                )}
              </li>
              {!last && (
                <li aria-hidden className="text-ink-300">
                  <ChevronRight className="w-3.5 h-3.5" />
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
