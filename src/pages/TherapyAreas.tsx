import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Lock, Sparkles } from 'lucide-react';
import { therapyAreas } from '@/data/content';

export default function TherapyAreas() {
  return (
    <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-10 sm:pt-14 pb-28">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="text-xs font-bold tracking-[0.18em] uppercase text-brand-600">
          Therapy Areas
        </span>
        <h1 className="mt-3 text-4xl sm:text-6xl font-black tracking-tight text-ink-900 leading-[1.02]">
          Where we focus.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-ink-600 leading-relaxed">
          Our proposal spans two therapy areas. Cardiovascular is fully
          developed today; Diabetes is an active area of exploration on our
          roadmap.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {therapyAreas.map((ta, i) => (
          <motion.div
            key={ta.id}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
              delay: i * 0.12,
            }}
          >
            {ta.available ? (
              <Link
                to={`/therapy-areas/${ta.id}`}
                className="group block h-full p-8 sm:p-10 rounded-3xl bg-white border border-ink-200 shadow-sm hover:shadow-xl hover:border-brand-200 transition-all duration-300 focus-ring relative overflow-hidden"
              >
                <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-brand-500/10 blur-2xl group-hover:bg-brand-500/20 transition-colors" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="grid place-items-center w-14 h-14 rounded-2xl bg-brand-500 text-white shadow-lg shadow-brand-500/25">
                      <Activity className="w-7 h-7" />
                    </span>
                    <span className="px-3 py-1.5 rounded-full bg-brand-50 text-brand-700 text-xs font-bold tracking-wide">
                      {ta.tagline}
                    </span>
                  </div>
                  <h2 className="mt-7 text-4xl font-black tracking-tight text-ink-900">
                    {ta.name}
                  </h2>
                  <p className="mt-3 text-base text-ink-600 leading-relaxed">
                    {ta.description}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                    Explore products
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ) : (
              <div className="h-full p-8 sm:p-10 rounded-3xl bg-ink-900 text-white border border-ink-800 relative overflow-hidden">
                <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-brand-500/20 blur-2xl animate-float-slow" />
                <div className="absolute -bottom-20 -left-10 w-48 h-48 rounded-full bg-brand-400/10 blur-2xl animate-float-slower" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="grid place-items-center w-14 h-14 rounded-2xl bg-white/10 text-white border border-white/15">
                      <Lock className="w-7 h-7" />
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold tracking-wide text-white">
                      <Sparkles className="w-3.5 h-3.5 text-brand-400" />
                      In Development
                    </span>
                  </div>
                  <h2 className="mt-7 text-4xl font-black tracking-tight">
                    {ta.name}
                  </h2>
                  <p className="mt-3 text-base text-ink-300 leading-relaxed">
                    {ta.description}
                  </p>
                  <Link
                    to="/strategy"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-brand-300 transition-colors focus-ring"
                  >
                    Back to Strategy
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
