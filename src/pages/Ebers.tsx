import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Atom,
  Award,
  Boxes,
  Calendar,
  Clapperboard,
  Cog,
  Glasses,
  Globe,
  GraduationCap,
  Handshake,
  HeartPulse,
  Mail,
  Phone,
  Quote,
  Refrigerator,
  Sparkles,
  Trophy,
  Wrench,
} from 'lucide-react';
import StatCounter from '@/components/StatCounter';
import {
  clients,
  ebersContact,
  ebersStats,
  industries,
  servicePillars,
  testimonials,
  whyEbers,
} from '@/data/ebers';

const iconMap: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  Glasses,
  GraduationCap,
  Clapperboard,
  HeartPulse,
  Atom,
  Calendar,
  Cog,
  Refrigerator,
  Award,
  Trophy,
  Sparkles,
  Wrench,
  Handshake,
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Ebers() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-ink-50" />
          <div className="absolute -top-32 -right-24 w-[40rem] h-[40rem] rounded-full bg-brand-500/15 blur-3xl animate-float-slow" />
          <div className="absolute -bottom-40 -left-32 w-[34rem] h-[34rem] rounded-full bg-brand-300/20 blur-3xl animate-float-slower" />
        </div>
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-32 sm:pt-20 pb-16">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="max-w-4xl"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur border border-ink-200 text-xs font-semibold text-ink-700 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-500" />
              The team behind this proposal
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="mt-6 text-[2.5rem] sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.98] text-ink-900"
            >
              Transforming complex ideas into
              <span className="text-brand-500"> immersive experiences.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-lg sm:text-xl text-ink-600 leading-relaxed"
            >
              We help organizations communicate, train, and engage through
              interactive 3D, VR, AR, and simulation solutions.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${ebersContact.email}`}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-brand-500 text-white text-base font-semibold shadow-lg shadow-brand-500/25 hover:bg-brand-600 transition-all focus-ring"
              >
                Let's Build Together
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={ebersContact.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/80 backdrop-blur border border-ink-200 text-ink-800 text-base font-semibold hover:bg-white hover:border-ink-300 transition-all focus-ring"
              >
                Visit ebers.uk
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are .  stat counters */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink-900">
            Who we are.
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-ink-600 leading-relaxed">
            Founded in 2014 and UK-incorporated, Ebers operates across the UAE,
            Egypt, and Saudi Arabia .  helping organizations communicate complex
            ideas with clarity, impact, and purpose across healthcare,
            education, industry, events, and marketing.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 grid-cols-2 lg:grid-cols-4">
          {ebersStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.1,
              }}
              className="p-6 rounded-2xl bg-white border border-ink-200 shadow-sm"
            >
              <div className="text-4xl sm:text-5xl font-black text-brand-500 tracking-tight">
                <StatCounter
                  value={s.value}
                  suffix={s.suffix}
                  raw={s.raw}
                />
              </div>
              <p className="mt-2 text-sm text-ink-500 font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What We Do .  service pillars */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink-900"
        >
          What we do.
        </motion.h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {servicePillars.map((pillar, pi) => {
            const Icon = iconMap[pillar.icon] ?? Sparkles;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                  delay: pi * 0.12,
                }}
                className="p-7 rounded-3xl bg-white border border-ink-200 shadow-sm hover:shadow-xl hover:border-brand-200 transition-all duration-300"
              >
                <span className="grid place-items-center w-12 h-12 rounded-2xl bg-brand-500 text-white shadow-lg shadow-brand-500/25">
                  <Icon className="w-6 h-6" strokeWidth={2.2} />
                </span>
                <h3 className="mt-5 text-xl font-extrabold tracking-tight text-ink-900">
                  {pillar.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {pillar.items.map((item) => (
                    <li key={item.name} className="flex gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-brand-500" />
                      <div>
                        <p className="text-sm font-bold text-ink-900">{item.name}</p>
                        <p className="text-sm text-ink-500 leading-relaxed mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Industries */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink-900"
        >
          Industries we serve.
        </motion.h2>
        <div className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {industries.map((ind, i) => {
            const Icon = iconMap[ind.icon] ?? Boxes;
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.08,
                }}
                className="group p-5 rounded-2xl bg-white border border-ink-200 shadow-sm hover:shadow-lg hover:border-brand-200 transition-all duration-300"
              >
                <span className="grid place-items-center w-10 h-10 rounded-xl bg-brand-50 text-brand-600 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" strokeWidth={2.2} />
                </span>
                <p className="mt-3 text-sm font-bold text-ink-900">{ind.name}</p>
                <p className="mt-1 text-xs text-ink-500 leading-relaxed">{ind.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Clients */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink-900">
            Trusted by global healthcare and industry leaders.
          </h2>
          <p className="mt-3 max-w-2xl text-ink-600">
            A selection of organizations we've partnered with .  with healthcare
            and pharma leading the roster.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
        >
          {clients.healthcare.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center px-4 py-6 rounded-2xl bg-brand-50 border border-brand-100"
            >
              <span className="text-lg font-extrabold tracking-tight text-brand-700">
                {name}
              </span>
            </div>
          ))}
          {clients.broader.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center px-4 py-6 rounded-2xl bg-white border border-ink-200"
            >
              <span className="text-lg font-bold tracking-tight text-ink-700">
                {name}
              </span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Why Ebers .  interactive expandable pillars */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink-900"
        >
          Why Ebers.
        </motion.h2>
        <p className="mt-3 max-w-2xl text-ink-600">
          Five reasons organizations choose us as their long-term digital
          partner.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {whyEbers.map((p, i) => {
            const Icon = iconMap[p.icon] ?? Sparkles;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.09,
                }}
                className="group p-6 rounded-2xl bg-white border border-ink-200 shadow-sm hover:shadow-xl hover:border-brand-200 hover:-translate-y-1 transition-all duration-300"
              >
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-brand-50 text-brand-600 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" strokeWidth={2.2} />
                </span>
                <h3 className="mt-4 text-lg font-extrabold tracking-tight text-ink-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-ink-500 leading-relaxed">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.12,
              }}
              className="p-7 rounded-3xl bg-ink-900 text-white relative overflow-hidden"
            >
              <div className="absolute -top-12 -right-10 w-40 h-40 rounded-full bg-brand-500/15 blur-2xl" />
              <Quote className="w-8 h-8 text-brand-400" />
              <blockquote className="mt-4 text-lg font-semibold leading-relaxed">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-4 text-sm text-ink-400">
                {t.context}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl bg-brand-500 text-white p-8 sm:p-14"
        >
          <div className="absolute -top-24 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl animate-float-slow" />
          <div className="absolute -bottom-28 -left-16 w-72 h-72 rounded-full bg-ink-950/10 blur-3xl animate-float-slower" />
          <div className="relative">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.05] max-w-2xl">
              Ready to bring the ideas in this proposal to life?
            </h2>
            <p className="mt-4 max-w-xl text-lg text-white/90 leading-relaxed">
              Great ideas deserve to be seen, heard, and experienced. Let's
              start the conversation.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${ebersContact.email}`}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-brand-600 text-base font-bold shadow-lg hover:bg-ink-100 transition-all focus-ring"
              >
                Let's Build Together
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={`tel:${ebersContact.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white/15 backdrop-blur border border-white/25 text-white text-base font-semibold hover:bg-white/25 transition-all focus-ring"
              >
                <Phone className="w-4 h-4" />
                {ebersContact.phone}
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/80">
              <a
                href={`mailto:${ebersContact.email}`}
                className="inline-flex items-center gap-2 hover:text-white transition-colors focus-ring rounded-md"
              >
                <Mail className="w-4 h-4" />
                {ebersContact.email}
              </a>
              <a
                href={ebersContact.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition-colors focus-ring rounded-md"
              >
                <Globe className="w-4 h-4" />
                {ebersContact.website}
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
