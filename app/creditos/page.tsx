import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Créditos de las fotografías: Iker Benítez',
  description: 'Autoría y licencia de las fotografías de Wikimedia Commons que usa el portfolio de Iker Benítez.',
  robots: { index: false },
};

const credits = [
  { what: 'Barcelona al atardecer', by: 'Walkerssk', licence: 'CC0', url: 'https://commons.wikimedia.org/wiki/File:Barcelona_city_view_at_sunset.jpg' },
];

export default function CreditsPage() {
  return (
    <main className="credits-page">
      <h1 className="display">Créditos de las fotografías</h1>
      <p className="lead">La foto de Barcelona del recorrido es de Wikimedia Commons. El resto de fotos y las capturas de los proyectos son mías.</p>
      <ul>
        {credits.map((c) => (
          <li key={c.url}>
            <a className="text-link" href={c.url} rel="noopener">{c.what}</a>
            <span>{c.by}, {c.licence}</span>
          </li>
        ))}
      </ul>
      <a className="text-link" href="/">Volver al portfolio</a>
    </main>
  );
}
