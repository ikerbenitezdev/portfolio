import { statementContent as s } from '../../data/timeline';
import { Ring, Star } from '../Shapes';

// La frase se enciende palabra a palabra al hacer scroll (Motion.tsx); sin movimiento se lee entera.
export default function Statement() {
  const words = s.before.split(' ');
  const strong = s.strong.split(' ');
  return (
    <section className="statement" id="isla" aria-label={s.label}>
      <Star className="statement__star" speed={0.6} />
      <Ring className="statement__ring" speed={-0.5} />
      <span className="label label--light">{s.label}</span>
      <p className="statement__text">
        {words.map((w, i) => (<span className="statement__word" key={i}>{w} </span>))}
        {strong.map((w, i) => (<span className="statement__word statement__word--strong" key={`s${i}`}>{w}{i < strong.length - 1 ? ' ' : ''}</span>))}
        <span className="statement__word">.</span>
      </p>
    </section>
  );
}
