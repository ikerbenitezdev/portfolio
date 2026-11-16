import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, Instrument_Sans } from 'next/font/google';
import './globals.css';
import { socialLinks } from '../data/social';

const display = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
const body = Instrument_Sans({ subsets: ['latin'], variable: '--font-body', display: 'swap' });

const title = 'Iker Benítez: desarrollador web de Menorca en Barcelona';
const description = 'Estudio Ingeniería Informática y hago webs para negocios pequeños: un torneo de fútbol, una casa rural y un catálogo de pescado.';

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL('https://ikerbenitez.dev'),
  openGraph: { title, description: 'Cuatro proyectos web y el recorrido de Menorca a Barcelona.', type: 'website', locale: 'es_ES', siteName: 'Iker Benítez', images: ['/share.jpg'] },
  twitter: { card: 'summary_large_image', title, description: 'Cuatro proyectos web y el recorrido de Menorca a Barcelona.', images: ['/share.jpg'] },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#f2eee5' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Iker Benítez',
          jobTitle: 'Desarrollador web',
          sameAs: socialLinks.map((s) => s.url),
        }).replace(/</g, '\\u003c') }} />
        {children}
      </body>
    </html>
  );
}
