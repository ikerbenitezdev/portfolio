import { heroContent as h } from '../../data/timeline';
import { Pill, Ring, Star, Sun, Wave } from '../Shapes';

// Cada letra en su caja para que suba desde abajo al cargar (Motion.tsx).
function Chars({ text }: { text: string }) {
  return (
    <span className="hero__word" aria-hidden="true">
      {[...text].map((char, i) => (<span className="hero__char" key={i}>{char}</span>))}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <h1 id="hero-title" className="hero__name">
        <span className="sr-only">{h.name}, {h.role.toLowerCase()}. {h.route}.</span>
        <span className="hero__line hero__line--first">
          <Chars text={h.first} />
          <span className="hero__shapes">
            <span className="shape shape--portrait" data-speed={0.25} aria-hidden="true">
              <img src={h.portrait.src} alt="" width={720} height={720} fetchPriority="high" />
            </span>
            <Pill speed={0.6} />
            <Star speed={-0.4} />
          </span>
        </span>
        <span className="hero__line hero__line--last">
          <Sun className="hero__sun" speed={0.5} />
          <Chars text={h.last} />
        </span>
      </h1>
      <Ring className="hero__ring" speed={-0.7} />
      <Wave className="hero__wave" speed={-0.3} />

      <div className="hero__foot">
        <p className="hero__role"><strong>{h.role}</strong><br />{h.route}</p>
        <p className="hero__lead">{h.lead}</p>
        <div className="hero__actions">
          <a className="pill-button" href="#contacto">{h.primary}<span aria-hidden="true">→</span></a>
          <span className="hero__fact">{h.fact}</span>
        </div>
      </div>
    </section>
  );
}
