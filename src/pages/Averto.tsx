import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import IdeaCard from '@/components/IdeaCard';
import IdeaModal from '@/components/IdeaModal';
import { Placeholder } from '@/components/Placeholder';
import {
  getProduct,
} from '@/data/content';
import avertoImage from '../../image/Averto.jpeg';

export default function Averto() {
  const product = getProduct('cardiovascular', 'averto')!;
  const ideas = product.ideas;
  const [openIdeaId, setOpenIdeaId] = useState<string | null>(null);
  const total = ideas.length;
  const openIdea = openIdeaId ? ideas.find((idea) => idea.id === openIdeaId) : null;
  const openIndex = openIdeaId
    ? ideas.findIndex((idea) => idea.id === openIdeaId)
    : -1;

  return (
    <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-10 sm:pt-14 pb-28">
      {/* Header */}
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
            Averto · Cardiovascular
          </span>
          <h1 className="mt-3 text-4xl sm:text-6xl font-black tracking-tight text-ink-900 leading-[1.02]">
            Averto
          </h1>
          <p className="mt-4 max-w-xl text-lg text-ink-600 leading-relaxed">
            {product.positioning}
          </p>
        </div>
        <img
          src={avertoImage}
          alt="Averto graphic"
          className="w-full lg:w-72 h-32 rounded-2xl object-cover shrink-0"
        />
      </motion.div>

      {/* Idea grid */}
      <div className="mt-8">
        <div className="flex items-baseline justify-between gap-4 mb-5">
          <h2 className="text-2xl font-extrabold tracking-tight text-ink-900">
            Ideas
          </h2>
          <span className="text-sm font-semibold text-ink-500">
            {total} ideas
          </span>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key="ideas"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {ideas.map((idea, i) => (
              <IdeaCard
                key={idea.id}
                idea={idea}
                index={i}
                onOpen={() => setOpenIdeaId(idea.id)}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {openIdea && (
          <IdeaModal
            idea={openIdea}
            index={openIndex >= 0 ? openIndex : 0}
            total={total}
            onClose={() => setOpenIdeaId(null)}
            onPrev={() => {
              const prevIndex = (openIndex - 1 + total) % total;
              const prevIdea = ideas[prevIndex];
              if (prevIdea) {
                setOpenIdeaId(prevIdea.id);
              }
            }}
            onNext={() => {
              const nextIndex = (openIndex + 1) % total;
              const nextIdea = ideas[nextIndex];
              if (nextIdea) {
                setOpenIdeaId(nextIdea.id);
              }
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
