import { geoNaturalEarth1, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import world from 'world-atlas/countries-110m.json';
import { travelContent, trips } from '../data/trips';

// Mapa fijo dibujado en el servidor: la tierra, un punto por viaje y un anillo en Menorca.
const W = 800;
const H = 560;

export default function TravelMap() {
  const land = feature(world, (world as { objects: { countries: unknown } }).objects.countries) as GeoJSON.FeatureCollection;
  const bounds: GeoJSON.Feature = {
    type: 'Feature',
    properties: {},
    geometry: { type: 'MultiPoint', coordinates: [[-19, 55], [77, 55], [-19, 1], [77, 1]] },
  };
  const projection = geoNaturalEarth1().fitExtent([[20, 20], [W - 20, H - 20]], bounds);
  projection.clipExtent([[0, 0], [W, H]]);
  const path = geoPath(projection);
  const d = land.features.map((f) => path(f) || '').join('');

  return (
    <svg className="travel-map" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice" role="img" aria-label={travelContent.mapLabel}>
      <path className="travel-map__land" d={d} />
      {trips.map((trip) => {
        const p = projection(trip.coordinates);
        if (!p) return null;
        return (
          <g key={trip.id} transform={`translate(${p[0].toFixed(1)} ${p[1].toFixed(1)})`}>
            {trip.isOrigin && <circle className="travel-map__ring" r="13" />}
            <circle className={trip.isOrigin ? 'travel-map__origin' : 'travel-map__dot'} r="6" />
          </g>
        );
      })}
    </svg>
  );
}
