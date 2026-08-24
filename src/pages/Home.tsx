import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, HeartPulse, Layers, Sparkles } from 'lucide-react';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated brand background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-ink-50" />
        <div className="absolute -top-32 -right-24 w-[42rem] h-[42rem] rounded-full bg-brand-500/15 blur-3xl animate-float-slow" />
        <div className="absolute -bottom-40 -left-32 w-[38rem] h-[38rem] rounded-full bg-brand-300/20 blur-3xl animate-float-slower" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, var(--color-ink-900) 1px, transparent 1px), linear-gradient(to bottom, var(--color-ink-900) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pt-12 sm:pt-16 pb-20">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur border border-ink-200 text-xs font-semibold text-ink-700 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-500" />
              Digital Innovation Proposal
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-[2.75rem] sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] text-ink-900"
          >
            Engineering the
            <br />
            <span className="text-brand-500">digital future</span>
            <br />
            of Hikma.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-lg sm:text-xl text-ink-600 leading-relaxed"
          >
            A strategic partnership between Hikma Pharmaceuticals and Ebers.
            a full digital innovation blueprint across the cardiovascular portfolio.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              to="/strategy"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-brand-500 text-white text-base font-semibold shadow-lg shadow-brand-500/25 hover:bg-brand-600 hover:shadow-brand-500/30 transition-all focus-ring"
            >
              Enter the proposal
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/therapy-areas"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/80 backdrop-blur border border-ink-200 text-ink-800 text-base font-semibold hover:bg-white hover:border-ink-300 transition-all focus-ring"
            >
              Explore therapy areas
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats / framework preview */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-4 sm:grid-cols-3"
        >
          {[
            { icon: Layers, k: '1', v: 'Ideas category', d: 'All ideas in one place' },
            { icon: HeartPulse, k: '2', v: 'Therapy areas', d: 'Cardiovascular · Diabetes' },
            { icon: Sparkles, k: '15', v: 'Digital ideas', d: 'Across the cardiovascular portfolio' },
          ].map((s) => (
            <div
              key={s.v}
              className="p-6 rounded-2xl bg-white/70 backdrop-blur border border-ink-200 shadow-sm"
            >
              <s.icon className="w-6 h-6 text-brand-500" />
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-black text-ink-900">{s.k}</span>
                <span className="text-sm font-semibold text-ink-500">{s.v}</span>
              </div>
              <p className="mt-1 text-sm text-ink-500">{s.d}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Scroll cue */}
      <div className="sr-only">
        <Link to="/strategy">Continue to Strategy</Link>
      </div>
    </div>
  );
}
