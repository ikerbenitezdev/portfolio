import { projects, projectsContent as c } from '../../data/projects';

// Logos reales de las herramientas (public/assets/icons).
const icons: Record<string, string> = {
  'Next.js': 'nextjs', TypeScript: 'typescript', PostgreSQL: 'postgres', React: 'react', PHP: 'php',
  MySQL: 'mysql', Tailwind: 'tailwindcss', 'Node.js': 'nodejs', MongoDB: 'mongodb',
  Supabase: 'supabase', Resend: 'resend', Astro: 'astro', 'Google Auth': 'google-icon',
};

export default function Projects() {
  return (
    <section className="projects" id="proyectos" aria-labelledby="proyectos-title">
      <div className="section-head" data-reveal>
        <span className="label">{c.label}</span>
        <h2 id="proyectos-title" className="display">{c.title}</h2>
        <p className="lead">{c.lead}</p>
      </div>

      <ol className="projects__list">
        {projects.map((project, i) => (
          <li className="project" id={project.id} key={project.id} data-reveal>
            <div className="project__info">
              <span className="project__number">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="project__name">{project.name}</h3>
              <p className="project__kind">{project.kind} · {project.year}</p>
              <p className="project__summary">{project.summary}</p>
              {project.stack.length > 0 && (
                <ul className="chips" aria-label="Herramientas">
                  {project.stack.map((tool) => (
                    <li className="chip" key={tool}>
                      {icons[tool] && <img src={`/assets/icons/${icons[tool]}.svg`} alt="" width={18} height={18} loading="lazy" />}
                      {tool}
                    </li>
                  ))}
                </ul>
              )}
              {(project.url || project.repo) && (
                <p className="project__links">
                  {project.url && <a className="text-link" href={project.url} target="_blank" rel="noopener">Ver web<span className="sr-only"> de {project.name}</span> <span aria-hidden="true">↗</span></a>}
                  {project.repo && <a className="text-link" href={project.repo} target="_blank" rel="noopener">Ver código<span className="sr-only"> de {project.name}</span> <span aria-hidden="true">↗</span></a>}
                </p>
              )}
            </div>
            <div className={`project__screens project__screens--${project.screens.length}`}>
              {project.screens.map((screen) => (
                <figure className="screen" key={screen.src}>
                  <img src={screen.src} alt={screen.alt} width={800} height={350} loading="lazy" />
                </figure>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
