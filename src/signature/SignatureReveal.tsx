import { AnimatePresence, motion } from 'framer-motion';
import { EbersMark } from './EbersMark';

// Feature 5: a gated reveal. Triggered by clicking the footer mark OR
// triple-clicking the nav logo. Shows a single confident line about who
// crafted the experience, fading in and out gracefully.

export default function SignatureReveal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[250] grid place-items-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          aria-hidden
        >
          <motion.div
            className="pointer-events-auto flex items-center gap-4 px-6 py-5 rounded-2xl bg-ink-900 text-white shadow-2xl border border-ink-800 max-w-sm"
            initial={{ scale: 0.92, y: 12 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.94, y: 8 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-brand-400 shrink-0">
              <EbersMark size={32} strokeWidth={2.4} />
            </span>
            <div>
              <p className="text-base font-bold tracking-tight leading-snug">
                This experience was crafted by Ebers.
              </p>
              <p className="mt-1 text-xs text-ink-400 tracking-wide">
                Ideas → experiences.
              </p>
            </div>
            <button
              onClick={onClose}
              className="ml-2 text-ink-400 hover:text-white transition-colors focus-ring rounded-md p-1"
              aria-label="Dismiss"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
