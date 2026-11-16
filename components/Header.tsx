'use client';

import { useEffect, useState } from 'react';
import { navigation } from '../data/navigation';
import { heroContent } from '../data/timeline';

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`site-header${open ? ' is-open' : ''}`}>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <a className="site-header__logo" href="#top" onClick={() => setOpen(false)}>
        <span className="site-header__dot" aria-hidden="true" />{heroContent.name}
      </a>
      <nav className="site-header__nav" id="menu" aria-label="Principal">
        {navigation.map((item) => (
          <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}>{item.label}</a>
        ))}
        <a className="pill-button pill-button--small" href="#contacto" onClick={() => setOpen(false)}>{heroContent.primary}</a>
      </nav>
      <button className="site-header__toggle" type="button" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
        <span className="sr-only">{open ? 'Cerrar menú' : 'Abrir menú'}</span>
        <span aria-hidden="true" />
      </button>
    </header>
  );
}
