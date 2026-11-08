import type { Metadata } from 'next';
import { Space_Grotesk, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { socialLinks } from '../data/social';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Iker Benítez | De isla en isla',
  description:
    'El recorrido de Iker Benítez: de Menorca a Barcelona, aprendiendo y construyendo de isla en isla.',
  metadataBase: new URL('https://ikerbenitez.dev'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Iker Benítez | De isla en isla',
    description:
      'Una historia de aprendizaje, dudas y pasos hacia nuevas islas.',
    type: 'website',
    locale: 'es_ES',
    url: '/',
    siteName: 'Iker Benítez',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iker Benítez | De isla en isla',
    description: 'Una historia de aprendizaje, dudas y pasos hacia nuevas islas.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${spaceGrotesk.variable} ${plusJakartaSans.variable}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Iker Benítez',
          url: 'https://ikerbenitez.dev',
          jobTitle: 'Desarrollador web',
          sameAs: socialLinks.flatMap((social) => social.url ? [social.url] : []),
        }).replace(/</g, '\\u003c') }} />
        {children}
      </body>
    </html>
  );
}
