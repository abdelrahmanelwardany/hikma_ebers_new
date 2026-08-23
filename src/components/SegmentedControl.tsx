import { motion } from 'framer-motion';

export interface Segment {
  id: string;
  label: string;
  badge?: string | number;
}

export default function SegmentedControl({
  segments,
  value,
  onChange,
}: {
  segments: Segment[];
  value: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="inline-flex flex-wrap gap-1 p-1 rounded-2xl bg-ink-100 border border-ink-200">
      {segments.map((seg) => {
        const active = seg.id === value;
        return (
          <button
            key={seg.id}
            onClick={() => onChange(seg.id)}
            className={`relative px-4 sm:px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors focus-ring ${
              active ? 'text-white' : 'text-ink-600 hover:text-ink-900'
            }`}
          >
            {active && (
              <motion.span
                layoutId="segment-active"
                className="absolute inset-0 rounded-xl bg-brand-500 shadow-sm"
                transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
              />
            )}
            <span className="relative flex items-center gap-2">
              {seg.label}
              {seg.badge !== undefined && (
                <span
                  className={`grid place-items-center min-w-5 h-5 px-1.5 rounded-full text-[11px] font-bold ${
                    active
                      ? 'bg-white/25 text-white'
                      : 'bg-ink-200 text-ink-600'
                  }`}
                >
                  {seg.badge}
                </span>
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
}
