import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb } from 'lucide-react';

const ideasFramework = [
  {
    icon: Lightbulb,
    label: 'Ideas',
    intent: 'Bring every concept together around the insight that matters most to patients and physicians.',
    desc: 'Disease awareness, HCP engagement, and thought leadership .  establishing the scientific ground and surfacing the gap.',
  },
];

export default function Strategy() {
  return (
    <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-10 sm:pt-14 pb-28">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="text-xs font-bold tracking-[0.18em] uppercase text-brand-600">
          The Framework
        </span>
        <h1 className="mt-3 text-4xl sm:text-6xl font-black tracking-tight text-ink-900 leading-[1.02]">
          An ideas framework built 
          <br />
          <span className="text-brand-500">around one strategic question.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-ink-600 leading-relaxed">
          Before any creative concept, we start with one question: why .  the real gap in belief or behavior .  before we ever get to how. Every idea starts from that insight and turns it into purposeful action.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="mt-16 relative">
        {/* connecting line */}
        <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-ink-200" />
        <motion.div
          className="hidden lg:block absolute top-16 left-0 h-0.5 bg-brand-500"
          initial={{ width: '0%' }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />

        <div className="grid gap-6 lg:gap-8 max-w-3xl">
          {ideasFramework.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.15,
              }}
              className="relative"
            >
              <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                <div className="relative z-10 grid place-items-center w-12 h-12 rounded-2xl bg-brand-500 text-white shadow-lg shadow-brand-500/25">
                  <s.icon className="w-6 h-6" />
                </div>
                <div className="lg:mt-5">
                  <h2 className="text-2xl font-extrabold tracking-tight text-ink-900 mt-0.5">
                    {s.label}
                  </h2>
                </div>
              </div>
              <div className="mt-4 p-6 rounded-2xl bg-white border border-ink-200 shadow-sm">
                <p className="text-base font-semibold text-ink-800 leading-snug">
                  {s.intent}
                </p>
                <p className="mt-3 text-sm text-ink-500 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-16 p-8 sm:p-10 rounded-3xl bg-ink-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
      >
        <div>
          <h3 className="text-2xl font-extrabold tracking-tight">
            See the framework in action.
          </h3>
          <p className="mt-1.5 text-ink-300">
            Explore how this approach shapes the cardiovascular portfolio.
          </p>
        </div>
        <Link
          to="/therapy-areas"
          className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-brand-500 text-white font-semibold hover:bg-brand-400 transition-colors focus-ring shrink-0"
        >
          Go to Therapy Areas
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </div>
  );
}
