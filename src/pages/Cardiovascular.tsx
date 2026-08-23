import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Pill, Lightbulb } from 'lucide-react';
import { getTherapyArea } from '@/data/content';

export default function Cardiovascular() {
  const ta = getTherapyArea('cardiovascular')!;
  const products = ta.products!;

  return (
    <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-10 sm:pt-14 pb-28">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="text-xs font-bold tracking-[0.18em] uppercase text-brand-600">
          Cardiovascular
        </span>
        <h1 className="mt-3 text-4xl sm:text-6xl font-black tracking-tight text-ink-900 leading-[1.02]">
          Choose a product.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-ink-600 leading-relaxed">
          The cardiovascular portfolio contains two products. Each has its own
          digital strategy .  select one to explore its ideas.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {products.map((p, i) => {
          const ideaCount = p.ideas.length;
          return (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.12,
              }}
            >
              <Link
                to={`/therapy-areas/cardiovascular/${p.id}`}
                className="group block h-full p-8 sm:p-10 rounded-3xl bg-white border border-ink-200 shadow-sm hover:shadow-xl hover:border-brand-200 transition-all duration-300 focus-ring relative overflow-hidden"
              >
                <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-brand-500/10 blur-2xl group-hover:bg-brand-500/20 transition-colors" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="grid place-items-center w-14 h-14 rounded-2xl bg-brand-500 text-white shadow-lg shadow-brand-500/25">
                      <Pill className="w-7 h-7" />
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-ink-100 text-ink-600 text-xs font-bold tracking-wide">
                      <Lightbulb className="w-3.5 h-3.5" />
                      {ideaCount} ideas
                    </span>
                  </div>
                  <h2 className="mt-7 text-3xl sm:text-4xl font-black tracking-tight text-ink-900">
                    {p.name}
                  </h2>
                  <p className="mt-3 text-base text-ink-600 leading-relaxed">
                    {p.positioning}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                    View ideas
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
