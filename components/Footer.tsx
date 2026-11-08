'use client';

import { useEffect, useState } from 'react';
import { contactContent } from '../data/social';

export default function Footer() {
  const [year, setYear] = useState<number>();
  useEffect(() => { setYear(new Date().getFullYear()); }, []);

  return (
    <footer className="px-6 pb-10 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-ink/10 pt-7 text-sm text-slate-700">
        <span>{year && `© ${year} · `}{contactContent.footer}</span>
        <a href="#inicio" className="font-bold text-turquoise-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-turquoise-700">{contactContent.backToTop}</a>
      </div>
    </footer>
  );
}
