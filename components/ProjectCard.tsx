'use client';

import Image from 'next/image';
import { useId, useState } from 'react';
import { ArrowUpRight, Braces, ChevronDown, Github } from 'lucide-react';
import GlassCard from './GlassCard';
import { projectsContent, type Project } from '../data/projects';

function ProjectDetail({ label, children }: { label: string; children: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className="border-t border-ink/10">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-bold text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-turquoise-700"
      >
        {label}
        <ChevronDown aria-hidden="true" className={`h-4 w-4 shrink-0 motion-safe:transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <div id={id} hidden={!open} className="pb-4 text-sm leading-7 text-slate-700">{children}</div>
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <GlassCard className="group h-full overflow-hidden p-3 motion-safe:transition-[transform,box-shadow] motion-safe:duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_24px_70px_rgba(36,181,171,0.18)] sm:p-4">
      <div className={project.featured ? 'grid gap-2 lg:grid-cols-[1.05fr_0.95fr]' : ''}>
        <div className={`relative overflow-hidden rounded-2xl bg-sky-100 ${project.featured ? 'aspect-[16/10] lg:aspect-auto lg:min-h-[320px]' : 'aspect-[16/10]'}`}>
          <Image src={project.image.src} alt={project.image.alt} fill sizes={project.featured ? '(max-width: 1024px) 90vw, 560px' : '(max-width: 768px) 90vw, 560px'} className="object-cover" />
        </div>
        <div className="flex flex-col p-4 sm:p-6">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-turquoise-700">{project.featured ? `${projectsContent.featured} · ` : ''}{project.year}</p>
          <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{project.title}</h3>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">{project.summary}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li key={tech} className="inline-flex items-center gap-1.5 rounded-full border border-turquoise-700/10 bg-white/70 px-3 py-1.5 text-xs font-semibold text-ink">
                <Braces aria-hidden="true" className="h-3.5 w-3.5 text-turquoise-700" />{tech}
              </li>
            ))}
          </ul>
          {project.links && (project.links.demo || project.links.repo) && (
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold text-turquoise-700">
              {project.links.demo && <a className="inline-flex items-center gap-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4" href={project.links.demo}>{projectsContent.demo}<ArrowUpRight aria-hidden="true" className="h-4 w-4" /></a>}
              {project.links.repo && <a className="inline-flex items-center gap-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4" href={project.links.repo}>{projectsContent.repo}<Github aria-hidden="true" className="h-4 w-4" /></a>}
            </div>
          )}
          <div className="mt-6">
            <ProjectDetail label={projectsContent.why}>{project.why}</ProjectDetail>
            <ProjectDetail label={projectsContent.learned}>{project.learned}</ProjectDetail>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
