import { navigation } from '../data/navigation';
import { footerContent as f, socialLinks } from '../data/social';
import { heroContent } from '../data/timeline';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <p className="site-footer__tagline">{f.tagline}</p>
        <nav aria-label="Pie de página" className="site-footer__links">
          {navigation.map((item) => (<a key={item.id} href={`#${item.id}`}>{item.label}</a>))}
          <a href="#contacto">Contacto</a>
        </nav>
        <ul className="site-footer__social">
          {socialLinks.map((s) => (<li key={s.name}><a href={s.url} rel="noopener">{s.name} <span aria-hidden="true">↗</span></a></li>))}
        </ul>
      </div>
      <p className="site-footer__name" aria-hidden="true">{heroContent.first}<span>{heroContent.last}</span></p>
      <div className="site-footer__legal">
        <span>© 2026 {heroContent.name}</span>
        <span>{f.madeWith}</span>
        <a href="/creditos">{f.credits}</a>
        <a href="#top">Volver arriba ↑</a>
      </div>
    </footer>
  );
}
