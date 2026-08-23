import { type ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './Navbar';
import type { Crumb } from './Breadcrumb';
import { signatureConfig } from '@/signature/config';
import SignatureCursor from '@/signature/SignatureCursor';
import SignatureConsole from '@/signature/SignatureConsole';
import SignatureLoadingMark from '@/signature/SignatureLoadingMark';
import SignatureFooter from '@/signature/SignatureFooter';
import SignatureReveal from '@/signature/SignatureReveal';

export default function Layout({
  children,
  crumbs = [],
}: {
  children: ReactNode;
  crumbs?: Crumb[];
}) {
  const location = useLocation();
  const [revealOpen, setRevealOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-ink-50 text-ink-900">
      {signatureConfig.loadingMark && <SignatureLoadingMark />}
      {signatureConfig.customCursor && <SignatureCursor />}
      {signatureConfig.consoleEgg && <SignatureConsole />}

      <Navbar onLogoSecret={() => setRevealOpen(true)} />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="pt-10"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      {signatureConfig.footerWatermark && (
        <SignatureFooter onReveal={() => setRevealOpen(true)} />
      )}

      {signatureConfig.hiddenReveal && (
        <SignatureReveal
          open={revealOpen}
          onClose={() => setRevealOpen(false)}
        />
      )}
    </div>
  );
}
