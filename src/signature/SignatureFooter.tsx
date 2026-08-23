import { EbersMark } from './EbersMark';

// Feature 3: a barely-there footer watermark — a small geometric mark + a
// short oblique tagline fragment, in low-contrast type. Positioned like a
// watermark, not a credit line. Clicking the mark triggers Feature 5.

export default function SignatureFooter({
  onReveal,
}: {
  onReveal: () => void;
}) {
  return (
    <footer className="border-t border-ink-200/60 mt-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 flex items-center justify-between">
        <span className="text-[11px] text-ink-400 font-medium tracking-wide">
          Hikma Pharmaceuticals — Digital Innovation Proposal
        </span>
        <button
          onClick={onReveal}
          className="group flex items-center gap-2 focus-ring rounded-md"
          aria-label="Signature mark"
          title=""
        >
          <span className="text-ink-300 group-hover:text-ink-400 transition-colors">
            <EbersMark size={14} strokeWidth={2} />
          </span>
          <span className="text-[10px] text-ink-300/70 group-hover:text-ink-400/80 transition-colors tracking-[0.12em] lowercase">
            ideas → experiences
          </span>
        </button>
      </div>
    </footer>
  );
}
