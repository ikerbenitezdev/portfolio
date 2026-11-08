'use client';

import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navigation } from '../data/navigation';

export default function Header() {
  const [active, setActive] = useState('inicio');
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const marker = window.innerHeight * 0.3;
        const sections = navigation.map(({ id }) => document.getElementById(id)).filter((section): section is HTMLElement => section !== null);
        const current = sections.filter((section) => section.getBoundingClientRect().top <= marker).pop();
        setActive(current?.id ?? 'inicio');
      });
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-4 sm:top-4">
      <nav aria-label="Navegación principal" onKeyDown={(event) => { if (event.key === 'Escape' && open) { setOpen(false); menuButton.current?.focus(); } }} className="mx-auto max-w-6xl rounded-3xl border border-white/80 bg-white/90 p-2 shadow-glass backdrop-blur-xl">
        <div className="flex items-center justify-between gap-2">
          <a href="#inicio" className="rounded-full px-3 py-2 font-display text-sm font-bold text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-turquoise-700">Iker Benítez</a>
          <div className="hidden items-center gap-0.5 lg:flex">
            {navigation.map((item) => <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? 'location' : undefined} className={`rounded-full px-3 py-2 text-xs font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-turquoise-700 ${active === item.id ? 'bg-turquoise-100 text-turquoise-700' : 'text-slate-700 hover:bg-sky-100'}`}>{item.label}</a>)}
          </div>
          <button ref={menuButton} type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-full text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-turquoise-700 lg:hidden">{open ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}</button>
        </div>
        <div id="mobile-menu" hidden={!open} className={`${open ? 'grid' : 'hidden'} max-h-[70dvh] grid-cols-2 gap-1 overflow-y-auto p-2 lg:hidden`}>
          {navigation.map((item) => <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? 'location' : undefined} onClick={() => setOpen(false)} className={`rounded-xl px-3 py-3 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-turquoise-700 ${active === item.id ? 'bg-turquoise-100 text-turquoise-700' : 'text-slate-700'}`}>{item.label}</a>)}
        </div>
      </nav>
    </header>
  );
}
