'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { heroPortrait } from '../portfolio-data';
import { useReducedMotionPreference } from '../useReducedMotionPreference';
import { heroContent } from '../../data/timeline';

export default function Hero() {
  const reducedMotion = useReducedMotionPreference();
  const [showNote, setShowNote] = useState(false);

  return (
    <section id="inicio" className="relative flex min-h-[min(100svh,900px)] items-center overflow-hidden px-6 pb-24 pt-32 sm:px-10" aria-labelledby="hero-title">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 md:grid-cols-[1.25fr_0.75fr] md:gap-16">
        <motion.div
          className="journey-entrance"
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.22em] text-turquoise-700">{heroContent.label} · {heroContent.name}</p>
          <h1 id="hero-title" className="max-w-[14ch] font-display text-[clamp(3rem,7vw,6.2rem)] font-semibold leading-[1.05] tracking-[-0.055em] text-ink">
            {heroContent.headline}
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-slate-700 sm:text-lg">{heroContent.description}</p>
          <a href="#recorrido" className="mt-9 inline-flex min-h-12 items-center gap-4 rounded-full bg-ink px-6 py-3 text-sm font-bold text-white shadow-glass hover:bg-turquoise-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-turquoise-700">
            {heroContent.action} <span aria-hidden="true">↓</span>
          </a>
        </motion.div>
        <motion.div
          className="journey-entrance relative mx-auto w-full max-w-[340px]"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: reducedMotion ? 0 : 0.15, ease: 'easeOut' }}
        >
          <div aria-hidden="true" className="absolute -inset-8 rounded-full bg-gradient-to-br from-turquoise-100 via-sky-100 to-coral-100 blur-3xl" />
          <div className="glass-card relative rotate-3 p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.1rem] bg-sky-100">
              <Image src={heroPortrait} alt="Iker Benítez" fill priority sizes="(max-width: 768px) 80vw, 340px" className="object-cover" />
            </div>
            <button type="button" onClick={() => setShowNote(!showNote)} aria-expanded={showNote} aria-controls="island-note" aria-label={heroContent.islandButton} className="absolute -bottom-5 -left-2 grid h-12 w-12 place-items-center rounded-full border border-white bg-sand-100 text-xl shadow-glass focus-visible:outline focus-visible:outline-2 focus-visible:outline-turquoise-700">🏝</button>
            <p id="island-note" hidden={!showNote} role="status" className="absolute left-0 top-full mt-8 rounded-2xl bg-white/95 p-3 text-sm font-semibold text-ink shadow-glass">{heroContent.islandNote}</p>
          </div>
        </motion.div>
      </div>
      <motion.div
        aria-hidden="true"
        className="journey-scroll-indicator absolute bottom-7 left-6 flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-turquoise-700 sm:left-10"
        animate={reducedMotion ? undefined : { y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-lg">↓</span> {heroContent.scroll}
      </motion.div>
    </section>
  );
}
