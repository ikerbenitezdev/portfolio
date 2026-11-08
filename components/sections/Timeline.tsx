'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import GlassCard from '../GlassCard';
import { useReducedMotionPreference } from '../useReducedMotionPreference';
import { timeline, timelineContent } from '../../data/timeline';

export default function Timeline() {
  const routeRef = useRef<HTMLOListElement>(null);
  const reducedMotion = useReducedMotionPreference();
  const { scrollYProgress } = useScroll({
    target: routeRef,
    offset: ['start 75%', 'end 75%'],
  });
  const boatPosition = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="recorrido" aria-labelledby="timeline-title" className="scroll-mt-8 px-6 py-20 sm:px-10 sm:py-28">
      <div className="relative mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-turquoise-700">{timelineContent.label}</p>
          <h2 id="timeline-title" className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-ink sm:text-6xl">{timelineContent.title}</h2>
          <p className="mt-5 text-base leading-8 text-slate-700 sm:text-lg">{timelineContent.description}</p>
        </div>
        <ol ref={routeRef} className="relative mt-14 space-y-8 pl-12 sm:mt-20 sm:space-y-12 sm:pl-20">
          {!reducedMotion && <motion.span aria-hidden="true" className="pointer-events-none absolute -left-1 z-20 -translate-y-1/2 text-xl sm:left-2" style={{ top: boatPosition }}>⛵</motion.span>}
          <svg aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 top-0 h-full w-8 sm:left-3" viewBox="0 0 32 1000" preserveAspectRatio="none">
            <path d="M16 0 C 2 100, 30 150, 16 250 S 2 400, 16 500 S 30 650, 16 750 S 2 900, 16 1000" fill="none" stroke="#b9ddd9" strokeWidth="2" vectorEffect="non-scaling-stroke" />
            {reducedMotion ? (
              <path d="M16 0 C 2 100, 30 150, 16 250 S 2 400, 16 500 S 30 650, 16 750 S 2 900, 16 1000" fill="none" stroke="#168f86" strokeWidth="3" vectorEffect="non-scaling-stroke" />
            ) : (
              <motion.path d="M16 0 C 2 100, 30 150, 16 250 S 2 400, 16 500 S 30 650, 16 750 S 2 900, 16 1000" fill="none" stroke="#168f86" strokeWidth="3" vectorEffect="non-scaling-stroke" style={{ pathLength: scrollYProgress }} />
            )}
          </svg>
          {timeline.map((milestone, index) => (
            <li key={milestone.title} className="relative">
              <span aria-hidden="true" className="absolute -left-[2.4rem] top-8 z-10 h-3 w-3 rounded-full bg-turquoise-700 ring-[6px] ring-white sm:-left-[3.55rem]" />
              <motion.div
                className="journey-entrance"
                initial={reducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <GlassCard className={`max-w-2xl p-6 sm:p-9 ${index % 2 ? 'sm:ml-auto' : ''}`}>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-turquoise-700">{String(index + 1).padStart(2, '0')} / {milestone.eyebrow}</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{milestone.title}</h3>
                  <p className="mt-4 text-base leading-8 text-slate-700">{milestone.description}</p>
                </GlassCard>
              </motion.div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
