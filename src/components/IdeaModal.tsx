import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { type Idea } from '@/data/content';
import { Placeholder } from './Placeholder';
import { AudienceBadge, TypeBadge } from './IdeaCard';

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

const renderTextWithLinks = (text: string) => {
  const parts = text.split(/(https?:\/\/[^\s]+)/g);

  return parts.map((part, index) => {
    if (/^https?:\/\//.test(part)) {
      return (
        <a
          key={`${part}-${index}`}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-700 underline decoration-brand-400 underline-offset-2 hover:text-brand-800"
        >
          {part}
        </a>
      );
    }

    return <span key={`${part}-${index}`}>{part}</span>;
  });
};

export default function IdeaModal({
  idea,
  index,
  total,
  onClose,
  onPrev,
  onNext,
}: {
  idea: Idea;
  index: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const [imgIndex, setImgIndex] = useState(0);

  // Reset image index when the idea changes
  useEffect(() => {
    setImgIndex(0);
  }, [idea.id]);

  // Esc + arrow keys
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowLeft' && total > 1) {
        e.preventDefault();
        onPrev();
      } else if (e.key === 'ArrowRight' && total > 1) {
        e.preventDefault();
        onNext();
      }
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext, total]);

  // Focus trap
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const focusables = () =>
      Array.from(el.querySelectorAll<HTMLElement>(FOCUSABLE));
    closeBtn.current?.focus();
    const onTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const items = focusables();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    el.addEventListener('keydown', onTab);
    return () => el.removeEventListener('keydown', onTab);
  }, [idea.id]);

  const images = idea.imageUrls ?? (idea.imageUrl ? [idea.imageUrl] : idea.Images);
  const hasMultiple = images.length > 1;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-ink-950/55 backdrop-blur-sm"
          onClick={onClose}
          aria-hidden
        />

        {/* Panel */}
        <motion.div
          ref={ref}
          role="dialog"
          aria-modal="true"
          aria-label={idea.name}
          className="relative z-10 w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-3xl bg-white shadow-2xl border border-ink-200"
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Image header with multi-image toggle */}
          <div className="relative aspect-[16/8] sm:aspect-[16/6] overflow-hidden rounded-t-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={imgIndex}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                {idea.imageUrls || idea.imageUrl ? (
                  <img
                    src={images[imgIndex]}
                    alt={idea.name}
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                ) : (
                  <Placeholder
                    seed={images[imgIndex]}
                    className="absolute inset-0"
                    label="Placeholder image"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 to-transparent" />
              </motion.div>
            </AnimatePresence>

            <button
              ref={closeBtn}
              onClick={onClose}
              className="absolute top-4 right-4 grid place-items-center w-10 h-10 rounded-full bg-white/90 text-ink-800 hover:bg-white shadow-md hover:scale-105 transition-all focus-ring"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            {total > 1 && (
              <>
                <button
                  onClick={onPrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 rounded-full bg-white/90 text-ink-800 hover:bg-white shadow-md hover:scale-105 transition-all focus-ring"
                  aria-label="Previous idea"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={onNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 rounded-full bg-white/90 text-ink-800 hover:bg-white shadow-md hover:scale-105 transition-all focus-ring"
                  aria-label="Next idea"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-4 px-2.5 py-1 rounded-full bg-ink-950/55 text-white text-xs font-semibold backdrop-blur-sm">
                  {index + 1} / {total}
                </div>
              </>
            )}

            {/* Image toggle dots .  centered below the image area */}
            {hasMultiple && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-ink-950/35 backdrop-blur-sm">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIndex(i)}
                    aria-label={`View image ${i + 1} of ${images.length}`}
                    aria-pressed={i === imgIndex}
                    className={`w-2.5 h-2.5 rounded-full transition-all focus-ring ${
                      i === imgIndex
                        ? 'bg-white scale-110'
                        : 'bg-white/40 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-3 flex-wrap">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink-900">
                {idea.name}
              </h2>
              <TypeBadge type={idea.type} />
              <AudienceBadge audience={idea.audience} />
            </div>
            <p className="mt-3 text-base text-ink-600 leading-relaxed whitespace-pre-line">
              {renderTextWithLinks(idea.briefDescription)}
            </p>

            <div className="mt-6">
              <h3 className="text-xs font-bold tracking-[0.16em] uppercase text-brand-700">
                Objectives
              </h3>
              <ul className="mt-2.5 space-y-2">
                {idea.objectives.map((it, i) => (
                  <li
                    key={i}
                    className="flex gap-2.5 text-sm text-ink-700 leading-relaxed"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-brand-500" />
                    <span className="whitespace-pre-line">{it}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-2xl bg-brand-50 border border-brand-100 p-5">
              <h3 className="text-xs font-bold tracking-[0.16em] uppercase text-brand-700">
                Expected Outcome
              </h3>
              <p className="mt-2 text-sm text-ink-800 leading-relaxed whitespace-pre-line">
                {idea.expectedOutcome}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
