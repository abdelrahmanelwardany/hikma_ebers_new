import { useEffect, useRef, useState } from 'react';

// Returns the image URL for a given query, cached per-query.
// Uses the Pexels "src" pattern .  but since we can't call MCP at runtime in the
// browser, we use a deterministic gradient placeholder instead, themed to brand.
const cache = new Map<string, string>();

function gradientFor(seed: string): string {
  // Deterministic brand-tinted gradient as a data-driven placeholder.
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) | 0;
  const a = Math.abs(h) % 360;
  const r1 = `hsl(${a % 20}, 80%, 60%)`;
  const r2 = `hsl(${(a + 30) % 40}, 75%, 50%)`;
  return `linear-gradient(135deg, ${r1}, ${r2})`;
}

export function usePlaceholderImage(query: string): string {
  const key = query;
  if (cache.has(key)) return cache.get(key)!;
  const g = gradientFor(query);
  cache.set(key, g);
  return g;
}

// A visual placeholder block component.
export function Placeholder({
  seed,
  className = '',
  label,
}: {
  seed: string;
  className?: string;
  label?: string;
}) {
  const bg = usePlaceholderImage(seed);
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: bg }}
    >
      {/* subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.12] mix-blend-overlay"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 70%, white 1px, transparent 1px)',
          backgroundSize: '32px 32px, 48px 48px',
        }}
      />
      {label && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white/70 text-xs font-medium tracking-wide uppercase">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}

// Hook: persist a value in sessionStorage keyed by route.
export function usePersistentState<T>(
  key: string,
  initial: T,
): [T, (v: T) => void] {
  const [state, setState] = useState<T>(() => {
    try {
      const raw = sessionStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : initial;
    } catch {
      return initial;
    }
  });
  const ref = useRef(key);
  ref.current = key;
  useEffect(() => {
    try {
      sessionStorage.setItem(ref.current, JSON.stringify(state));
    } catch {
      /* ignore */
    }
  }, [state]);
  return [state, setState];
}
