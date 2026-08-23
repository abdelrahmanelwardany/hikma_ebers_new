import { motion } from 'framer-motion';
import { type Idea } from '@/data/content';
import { Placeholder } from './Placeholder';

const typeStyles: Record<string, string> = {
  AR: 'bg-orange-100 text-orange-700',
  VR: 'bg-violet-100 text-violet-700',
  Video: 'bg-blue-100 text-blue-700',
  Gamification: 'bg-emerald-100 text-emerald-700',
  '3D content': 'bg-cyan-100 text-cyan-700',
  '3D content - AR': 'bg-cyan-100 text-cyan-700',
  Webinar: 'bg-sky-100 text-sky-700',
  'Digital Material': 'bg-indigo-100 text-indigo-700',
  'Event activity': 'bg-amber-100 text-amber-700',
  Activation: 'bg-fuchsia-100 text-fuchsia-700',
  'ecosystem platform': 'bg-brand-100 text-brand-700',
  'interactive Web': 'bg-brand-100 text-brand-700',
  'Interactive Web': 'bg-brand-100 text-brand-700',
};

const audienceStyles: Record<string, string> = {
  Patient: 'bg-rose-100 text-rose-700',
  HCP: 'bg-slate-100 text-slate-700',
  Both: 'bg-violet-100 text-violet-700',
};

export function TypeBadge({
  type,
  className = '',
}: {
  type: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold tracking-wide ${
        typeStyles[type] ?? 'bg-ink-100 text-ink-700'
      } ${className}`}
    >
      {type}
    </span>
  );
}

export function AudienceBadge({
  audience,
  className = '',
}: {
  audience: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold tracking-wide ${
        audienceStyles[audience] ?? 'bg-ink-100 text-ink-700'
      } ${className}`}
    >
      {audience}
    </span>
  );
}

export default function IdeaCard({
  idea,
  index,
  onOpen,
}: {
  idea: Idea;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.button
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{
        duration: 0.32,
        ease: [0.22, 1, 0.36, 1],
        delay: Math.min(index * 0.05, 0.4),
      }}
      whileHover={{ y: -6 }}
      onClick={onOpen}
      className="group text-left bg-white rounded-2xl border border-ink-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-200 transition-all duration-300 focus-ring"
      aria-label={`Open idea: ${idea.name}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        {idea.imageUrls?.[0] || idea.imageUrl ? (
          <img
            src={idea.imageUrls?.[0] ?? idea.imageUrl}
            alt={idea.name}
            className="absolute inset-0 w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <Placeholder
            seed={idea.images[0]}
            className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
            label="Placeholder"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/30 via-transparent to-transparent" />
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <TypeBadge type={idea.type} />
          <AudienceBadge audience={idea.audience} />
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-base font-bold text-ink-900 leading-snug group-hover:text-brand-600 transition-colors">
          {idea.name}
        </h3>
        <p className="mt-1.5 text-sm text-ink-500 leading-relaxed line-clamp-2 whitespace-pre-line">
          {idea.shortDescription}
        </p>
        <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-600 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          View details
        </span>
      </div>
    </motion.button>
  );
}
