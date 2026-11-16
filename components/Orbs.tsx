// Esferas de gradiente fijas detrás de toda la página. Flotan despacio (CSS) y se desplazan
// un poco con el scroll (Motion.tsx, data-orb). Son decoración: aria-hidden.
export default function Orbs() {
  return (
    <div className="orbs" aria-hidden="true">
      <span className="orb orb--blue" data-orb="0.35" />
      <span className="orb orb--coral" data-orb="-0.25" />
      <span className="orb orb--sun" data-orb="0.5" />
      <span className="orb orb--sky" data-orb="-0.4" />
    </div>
  );
}
