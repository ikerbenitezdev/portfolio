const tools = [
  { name: 'Next.js', icon: 'nextjs' }, { name: 'React', icon: 'react' }, { name: 'TypeScript', icon: 'typescript' },
  { name: 'Node.js', icon: 'nodejs' }, { name: 'PostgreSQL', icon: 'postgres' }, { name: 'MySQL', icon: 'mysql' },
  { name: 'MongoDB', icon: 'mongodb' }, { name: 'PHP', icon: 'php' }, { name: 'Tailwind', icon: 'tailwindcss' },
];

// Cinta de herramientas en bucle (CSS). Se detiene al pasar el ratón y con movimiento reducido.
export default function Marquee() {
  const row = (hidden: boolean) => (
    <ul className="marquee__row" aria-hidden={hidden || undefined}>
      {tools.map((t) => (
        <li key={t.name}><span className="marquee__icon"><img src={`/assets/icons/${t.icon}.svg`} alt="" width={28} height={28} loading="lazy" /></span>{t.name}<span className="marquee__sep" aria-hidden="true">✦</span></li>
      ))}
    </ul>
  );
  return (
    <section className="marquee" aria-label="Herramientas con las que trabajo">
      <div className="marquee__track">{row(false)}{row(true)}</div>
    </section>
  );
}
