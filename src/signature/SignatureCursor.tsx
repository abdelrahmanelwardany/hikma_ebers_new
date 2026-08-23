import { useEffect, useRef, useState } from 'react';
import { EbersMark } from './EbersMark';

// Feature 1: a subtle cursor ring that follows the pointer and morphs into
// the Ebers "E" glyph when hovering interactive elements (cards, buttons,
// links). Hidden by default on touch devices.

const INTERACTIVE = 'a[href], button:not([disabled]), [role="button"]';

export default function SignatureCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return; // skip touch

    let raf = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let cx = x;
    let cy = y;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      setVisible(true);
      const target = e.target as HTMLElement | null;
      if (target && target.closest(INTERACTIVE)) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };
    const onLeave = () => setVisible(false);

    const tick = () => {
      cx += (x - cx) * 0.18;
      cy += (y - cy) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${cx}px, ${cy}px)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={ringRef}
      className="fixed top-0 left-0 z-[200] pointer-events-none"
      style={{ willChange: 'transform' }}
      aria-hidden
    >
      <div
        className="relative -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out"
        style={{
          width: hovering ? 34 : 22,
          height: hovering ? 34 : 22,
        }}
      >
        {hovering ? (
          <div
            className="absolute inset-0 grid place-items-center text-brand-500"
            style={{ animation: 'ebers-cursor-in 0.18s ease-out both' }}
          >
            <EbersMark size={20} strokeWidth={2.4} />
          </div>
        ) : (
          <div className="absolute inset-0 rounded-full border border-brand-500/40" />
        )}
      </div>
    </div>
  );
}
