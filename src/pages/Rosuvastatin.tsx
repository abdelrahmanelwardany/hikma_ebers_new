import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import IdeaCard from '@/components/IdeaCard';
import IdeaModal from '@/components/IdeaModal';
import { getProduct } from '@/data/content';
import Rosuvastatinn from '../../image/Rosuvastatin.jpeg';


export default function Rosuvastatin() {
  const product = getProduct('cardiovascular', 'rosuvastatin-ezetimibe')!;
  const ideas = product.ideas!;
  const total = ideas.length;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-10 sm:pt-14 pb-28">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
      >
        <div>
          <Link
            to="/therapy-areas/cardiovascular"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink-600 hover:text-brand-600 transition-colors"
            aria-label="Back to cardiovascular"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Cardiovascular
          </Link>
          <span className="mt-3 block text-xs font-bold tracking-[0.18em] uppercase text-brand-600">
            Rosuvastatin + Ezetimibe · Cardiovascular
          </span>
          <h1 className="mt-3 text-4xl sm:text-6xl font-black tracking-tight text-ink-900 leading-[1.02]">
            Rosuvastatin
            <br />
            + Ezetimibe
          </h1>
          <p className="mt-4 max-w-xl text-lg text-ink-600 leading-relaxed">
            {product.positioning}
          </p>
        </div>
        <img
          src={Rosuvastatinn}
          alt="Rosuvastatin"
          className="w-full lg:w-72 h-32 rounded-2xl shrink-0 object-cover"
        />
      </motion.div>

      <div className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-brand-50 border border-brand-100 text-sm font-semibold text-brand-700">
        A focused set of {total} ideas.
      </div>

      <div className="mt-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {ideas.map((idea, i) => (
            <IdeaCard
              key={idea.id}
              idea={idea}
              index={i}
              onOpen={() => setOpenIndex(i)}
            />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <IdeaModal
            idea={ideas[openIndex]}
            index={openIndex}
            total={total}
            onClose={() => setOpenIndex(null)}
            onPrev={() =>
              setOpenIndex((p) => (p === null ? p : (p - 1 + total) % total))
            }
            onNext={() =>
              setOpenIndex((p) => (p === null ? p : (p + 1) % total))
            }
          />
        )}
      </AnimatePresence>
    </div>
  );
}
