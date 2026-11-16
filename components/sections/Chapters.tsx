import { chapters, chaptersContent as c } from '../../data/timeline';

// En pantallas anchas la sección se fija y los capítulos avanzan en horizontal (Motion.tsx).
export default function Chapters() {
  return (
    <section className="chapters" id="recorrido" aria-labelledby="recorrido-title">
      <div className="chapters__track">
        <div className="chapters__intro">
          <span className="label">{c.label}</span>
          <h2 id="recorrido-title" className="display">{c.title}</h2>
          <p className="lead">{c.lead}</p>
          <span className="chapters__hint" aria-hidden="true">Sigue bajando →</span>
        </div>
        {chapters.map((chapter, i) => (
          <article className="chapter" key={chapter.title}>
            <figure className="chapter__photo">
              <img src={chapter.image.src} srcSet={chapter.image.srcSet} sizes={chapter.image.srcSet ? "(max-width: 899px) 100vw, 60vw" : undefined} style={chapter.image.position ? { objectPosition: chapter.image.position } : undefined} alt={chapter.image.alt} width={chapter.image.width} height={chapter.image.height} loading="lazy" decoding="async" />
            </figure>
            <div className="chapter__text">
              <span className="chapter__number">{String(i + 1).padStart(2, '0')}</span>
              <h3>{chapter.title}</h3>
              <p>{chapter.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
