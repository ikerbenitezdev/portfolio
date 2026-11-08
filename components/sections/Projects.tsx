'use client';

import { motion } from 'framer-motion';
import ProjectCard from '../ProjectCard';
import { useReducedMotionPreference } from '../useReducedMotionPreference';
import { projects, projectsContent } from '../../data/projects';

export default function Projects() {
  const reducedMotion = useReducedMotionPreference();

  return (
    <section id="proyectos" aria-labelledby="projects-title" className="scroll-mt-8 px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-turquoise-700">{projectsContent.label}</p>
          <h2 id="projects-title" className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-ink sm:text-6xl">{projectsContent.title}</h2>
          <p className="mt-5 text-base leading-8 text-slate-700 sm:text-lg">{projectsContent.description}</p>
        </div>
        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`journey-entrance ${project.featured ? 'md:col-span-2' : ''}`}
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
