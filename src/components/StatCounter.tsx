import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

// Animated number counter .  counts up from 0 to `value` when scrolled into view.
export default function StatCounter({
  value,
  suffix = '',
  raw = false,
  duration = 1400,
}: {
  value: number;
  suffix?: string;
  raw?: boolean; // display the raw number (e.g. founding year) without counting
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [display, setDisplay] = useState(raw ? value : 0);

  useEffect(() => {
    if (!inView || raw) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, raw, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
