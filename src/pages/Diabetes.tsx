import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, HeartPulse, Layers, Sparkles } from 'lucide-react';

export default function Diabetes() {
  return (
    <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-10 sm:pt-14 pb-28">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-3xl bg-ink-900 text-white p-8 sm:p-14"
      >
        <div className="absolute -top-24 -right-20 w-96 h-96 rounded-full bg-brand-500/25 blur-3xl animate-float-slow" />
        <div className="absolute -bottom-32 -left-24 w-80 h-80 rounded-full bg-brand-400/15 blur-3xl animate-float-slower" />

        <div className="relative">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold backdrop-blur">
            <Sparkles className="w-3.5 h-3.5 text-brand-400" />
            Diabetes strategy
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-black tracking-tight leading-[1.02]">
            Diabetes is on the horizon.
          </h1>
          <p className="mt-5 max-w-lg text-lg text-ink-300 leading-relaxed">
            This area is being shaped around the same strategic rhythm as the cardiovascular portfolio — ideas built to move from insight to action.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/therapy-areas"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white text-ink-900 text-sm font-semibold hover:bg-ink-100 transition-colors focus-ring"
            >
              Back to therapy areas
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/strategy"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-brand-500 text-white text-sm font-semibold hover:bg-brand-400 transition-colors focus-ring"
            >
              View strategy framework
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
            </Link>
          </div>
        </div>
      </motion.div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          { title: 'Insight-led', body: 'A strong narrative arc that starts with the real patient and physician challenge.' },
          { title: 'Scalable', body: 'Digital concepts designed to grow from congress activation to wider engagement.' },
          { title: 'Purposeful', body: 'Every idea is structured to support the product story.' },
        ].map((item) => (
          <div key={item.title} className="rounded-2xl border border-ink-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="grid place-items-center w-10 h-10 rounded-xl bg-brand-50 text-brand-600">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-ink-900">{item.title}</h2>
            </div>
            <p className="mt-3 text-sm text-ink-600 leading-relaxed">{item.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-ink-200 bg-white p-8 shadow-sm">
        <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">
          <Layers className="w-4 h-4" />
          Coming soon
        </div>
        <p className="mt-3 max-w-2xl text-lg text-ink-600 leading-relaxed">
          The diabetes section will soon host its own portfolio of ideas, shaped with the same rigor and clarity as the cardiovascular work.
        </p>
      </div>
    </div>
  );
}
