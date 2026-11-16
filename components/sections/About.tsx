import TravelMap from '../TravelMap';
import { nowContent as n, nowItems } from '../../data/now';
import { travelContent, trips } from '../../data/trips';
import { months, profiles } from '../../data/movement';
import { Island, Sun } from '../Shapes';

export default function About() {
  const month = months[0];
  const places = trips.filter((t) => !t.isOrigin);
  return (
    <section className="about" id="ahora" aria-labelledby="ahora-title">
      <div className="about__intro">
        <div data-reveal>
          <span className="label">{n.label}</span>
          <h2 id="ahora-title" className="display">{n.title}</h2>
          <p className="lead">{n.lead}</p>
          <ul className="checklist">
            {nowItems.map((item) => (
              <li key={item.title}>
                <span className="checklist__mark" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <span><strong>{item.title}</strong>{item.text}</span>
              </li>
            ))}
          </ul>
          <p className="about__updated">{n.updated}</p>
        </div>
        <div className="about__visual" data-reveal>
          <Sun className="about__sun" speed={0.4} />
          <figure className="about__shot"><img src={n.image.src} alt={n.image.alt} width={n.image.width} height={n.image.height} loading="lazy" /></figure>
          <Island className="about__island" speed={-0.5} />
        </div>
      </div>

      <h3 className="about__subtitle" data-reveal>Fuera del código</h3>
      <div className="bento">
        <div className="bento__card bento__card--map" data-reveal>
          <div className="bento__copy">
            <p className="bento__big">{places.length}</p>
            <p className="bento__label">{travelContent.title} {travelContent.titleMuted}</p>
          </div>
          <TravelMap />
          <p className="bento__places">{places.map((p) => p.name).join(' · ')}</p>
        </div>
        {month?.strava && (
          <figure className="bento__card bento__card--shot" data-reveal>
            <img src={month.strava.image} alt={month.strava.alt} width={720} height={720} loading="lazy" />
          </figure>
        )}
        {month?.hevy && (
          <figure className="bento__card bento__card--shot" data-reveal>
            <img src={month.hevy.image} alt={month.hevy.alt} width={720} height={720} loading="lazy" />
          </figure>
        )}
        <div className="bento__card bento__card--sport" data-reveal>
          <p className="bento__big">27 h</p>
          <p className="bento__label">de deporte en {month?.label}. Moverme me despeja entre tareas largas.</p>
          <p className="bento__links">
            {profiles.map((p) => (<a key={p.app} className="text-link" href={p.url} rel="noopener">{p.label} <span aria-hidden="true">↗</span></a>))}
          </p>
        </div>
      </div>
    </section>
  );
}
