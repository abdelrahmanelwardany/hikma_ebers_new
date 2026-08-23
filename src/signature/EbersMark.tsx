// A minimal geometric "E" mark drawn from line segments — the Ebers brand
// glyph used across signature features. Rendered as SVG so it scales cleanly
// and can be animated stroke-by-stroke.

export function EbersMark({
  size = 24,
  strokeWidth = 2,
  className = '',
  animate = false,
}: {
  size?: number;
  strokeWidth?: number;
  className?: string;
  animate?: boolean;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden
    >
      {/* Three horizontal bars + left vertical spine forming a geometric E */}
      <line
        x1="4"
        y1="4"
        x2="20"
        y2="4"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        pathLength={1}
        {...(animate
          ? {
              strokeDasharray: 1,
              strokeDashoffset: 0,
              style: { animation: 'ebers-draw 0.5s ease-out both' },
            }
          : {})}
      />
      <line
        x1="4"
        y1="12"
        x2="16"
        y2="12"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        pathLength={1}
        {...(animate
          ? {
              strokeDasharray: 1,
              strokeDashoffset: 0,
              style: { animation: 'ebers-draw 0.5s ease-out 0.12s both' },
            }
          : {})}
      />
      <line
        x1="4"
        y1="20"
        x2="20"
        y2="20"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        pathLength={1}
        {...(animate
          ? {
              strokeDasharray: 1,
              strokeDashoffset: 0,
              style: { animation: 'ebers-draw 0.5s ease-out 0.24s both' },
            }
          : {})}
      />
      <line
        x1="4"
        y1="4"
        x2="4"
        y2="20"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        pathLength={1}
        {...(animate
          ? {
              strokeDasharray: 1,
              strokeDashoffset: 0,
              style: { animation: 'ebers-draw 0.5s ease-out 0.36s both' },
            }
          : {})}
      />
    </svg>
  );
}
