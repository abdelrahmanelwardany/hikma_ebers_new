import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Compass, Sparkles, Activity } from 'lucide-react';
import { Placeholder } from '@/components/Placeholder';

export default function DiabetesPage() {
  return (
    <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-10 sm:pt-14 pb-28">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-3xl bg-ink-900 text-white p-8 sm:p-14"
      >
        {/* Ambient brand motion */}
        <div className="absolute -top-24 -right-20 w-96 h-96 rounded-full bg-brand-500/25 blur-3xl animate-float-slow" />
        <div className="absolute -bottom-32 -left-24 w-80 h-80 rounded-full bg-brand-400/15 blur-3xl animate-float-slower" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />

        <div className="relative grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold backdrop-blur">
              <Sparkles className="w-3.5 h-3.5 text-brand-400" />
              Next in our roadmap
            </span>
            <h1 className="mt-6 text-4xl sm:text-6xl font-black tracking-tight leading-[1.02]">
              Diabetes . 
              <br />
              <span className="text-brand-400">in active development.</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-ink-300 leading-relaxed">
              We are actively shaping a dedicated digital strategy for the
              diabetes therapy area. This section will house a full portfolio of
              ideas .  built on the same insight-led framework as the proposal
              evolves.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/therapy-areas"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white text-ink-900 text-sm font-semibold hover:bg-ink-100 transition-colors focus-ring"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Therapy Areas
              </Link>
              <Link
                to="/strategy"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-brand-500 text-white text-sm font-semibold hover:bg-brand-400 transition-colors focus-ring"
              >
                Review the Strategy
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Abstract illustration block */}
          <div className="relative">
            <Placeholder
              seed="diabetes-coming-soon"
              className="w-full h-64 sm:h-80 rounded-2xl"
              label="In development"
            />
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-3 p-6 pointer-events-none">
              {Array.from({ length: 9 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + i * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm grid place-items-center"
                >
                  {i === 4 ? (
                    <Activity className="w-6 h-6 text-brand-400" />
                  ) : (
                    <Compass className="w-4 h-4 text-white/40" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
