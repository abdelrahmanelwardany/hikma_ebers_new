import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { EbersMark } from './EbersMark';

// Feature 2: a brief (≈500ms) animated mark that assembles itself on initial
// page load, then dissolves into the Home hero. Runs once per session.

export default function SignatureLoadingMark() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem('ebers-mark-shown')) {
      setShow(false);
      return;
    }
    sessionStorage.setItem('ebers-mark-shown', '1');
    const t = setTimeout(() => setShow(false), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[300] grid place-items-center bg-ink-50 pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          aria-hidden
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-brand-500"
          >
            <EbersMark size={56} strokeWidth={2.5} animate />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
