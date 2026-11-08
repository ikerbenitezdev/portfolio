'use client';

import { motion } from 'framer-motion';
import { ArrowDownRight, Check } from 'lucide-react';
import GlassCard from '../GlassCard';
import { useReducedMotionPreference } from '../useReducedMotionPreference';
import { firstYes } from '../../data/firstYes';

export default function FirstYes() {
  const reducedMotion = useReducedMotionPreference();

  return (
    <section id="primer-si" aria-labelledby="first-yes-title" className="px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <GlassCard className="overflow-hidden p-7 sm:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-turquoise-700">{firstYes.label}</p>
              <h2 id="first-yes-title" className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-ink sm:text-6xl">{firstYes.title}</h2>
              <div className="mt-6 space-y-4 text-base leading-8 text-slate-700 sm:text-lg">
                {firstYes.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              {firstYes.amounts?.show && (
                <p className="mt-6 text-sm font-semibold text-turquoise-700">
                  {firstYes.amounts.project} · {firstYes.amounts.maintenance}
                </p>
              )}
            </div>
            <div>
              <motion.div
                className="journey-entrance rounded-3xl bg-gradient-to-br from-sky-100 via-turquoise-100 to-sand-100 p-6 sm:p-8"
                initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <p className="font-display text-xl text-slate-600">{firstYes.doubt}</p>
                <ArrowDownRight aria-hidden="true" className="my-4 h-6 w-6 text-turquoise-700" />
                <p className="font-display text-4xl font-semibold tracking-tight text-turquoise-700 sm:text-5xl">{firstYes.affirmation}</p>
              </motion.div>
              <h3 className="mt-9 font-display text-xl font-semibold text-ink">{firstYes.learningTitle}</h3>
              <ul className="mt-4 space-y-3">
                {firstYes.learnings.map((learning) => (
                  <li key={learning} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                    <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-turquoise-700" />
                    <span>{learning}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
