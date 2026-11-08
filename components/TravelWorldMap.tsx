'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Minus, Plus, RotateCcw } from 'lucide-react';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps';
import world from 'world-atlas/countries-110m.json';
import GlassCard from './GlassCard';
import { travelContent, trips, type Trip } from '../data/trips';

type Position = { coordinates: [number, number]; zoom: number };
const initialPosition: Position = { coordinates: [10, 20], zoom: 1 };

export default function TravelWorldMap({ onSelect }: { onSelect: (trip: Trip) => void }) {
  const [position, setPosition] = useState<Position>(initialPosition);
  const [hovered, setHovered] = useState<Trip | null>(null);

  const changeZoom = (factor: number) => {
    setPosition((current) => ({ ...current, zoom: Math.min(12, Math.max(1, current.zoom * factor)) }));
  };

  return (
    <div className="relative overflow-hidden rounded-[1.4rem] border border-white/80 bg-gradient-to-br from-sky-100 via-turquoise-100 to-white">
      <p className="sr-only" id="map-help">{travelContent.mapHelp}</p>
      <ComposableMap
        projection="geoNaturalEarth1"
        projectionConfig={{ scale: 150 }}
        width={800}
        height={440}
        className="w-full touch-none"
        role="group"
        aria-label="Mapa de los lugares visitados"
        aria-describedby="map-help"
      >
        <ZoomableGroup
          center={position.coordinates}
          zoom={position.zoom}
          minZoom={1}
          maxZoom={12}
          onMoveEnd={({ coordinates, zoom }) => setPosition({ coordinates, zoom })}
        >
          <Geographies geography={world}>
            {({ geographies }) => geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} tabIndex={-1} aria-hidden="true" fill="#f7fcfc" stroke="#bfdedc" strokeWidth={0.7 / position.zoom} style={{ default: { outline: 'none' }, hover: { outline: 'none' }, pressed: { outline: 'none' } }} />
            ))}
          </Geographies>
          {trips.map((trip) => (
            <Marker key={trip.id} coordinates={trip.coordinates}>
              <g
                className="travel-marker"
                role="button"
                tabIndex={0}
                aria-label={`${trip.name}, ${trip.country}${trip.isOrigin ? ', origen' : ''}${trip.highlight ? ', viaje destacado' : ''}. Ver historia`}
                aria-describedby={hovered?.id === trip.id ? 'travel-map-tooltip' : undefined}
                onMouseEnter={() => setHovered(trip)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(trip)}
                onBlur={() => setHovered(null)}
                onClick={() => onSelect(trip)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    onSelect(trip);
                  }
                  if (event.key === 'Escape') setHovered(null);
                }}
                style={{ cursor: 'pointer' }}
                transform={`scale(${1 / position.zoom})`}
              >
                <circle r="13" fill="transparent" />
                <circle className="travel-marker-focus" r="11" fill="none" stroke="#16353c" strokeWidth="2" opacity="0" />
                <circle r={trip.highlight ? 9 : 6} fill={trip.isOrigin ? '#176a88' : trip.highlight ? '#c46350' : '#08756e'} opacity="0.22" className="motion-safe:animate-pulse" />
                <circle r={trip.highlight ? 5.5 : 4} fill={trip.isOrigin ? '#176a88' : trip.highlight ? '#c46350' : '#08756e'} stroke="white" strokeWidth="1.5" />
                {trip.isOrigin && <circle r="8" fill="none" stroke="#176a88" strokeWidth="1.5" />}
              </g>
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>
      {hovered && (
        <GlassCard id="travel-map-tooltip" role="tooltip" className="pointer-events-none absolute bottom-4 left-4 z-10 flex max-w-[min(20rem,calc(100%-5rem))] items-center gap-3 p-3">
          <Image src={hovered.photo} alt={`Imagen de ${hovered.name}`} width={64} height={48} className="h-12 w-16 shrink-0 rounded-lg object-cover" />
          <div><p className="text-sm font-bold text-ink">{hovered.name}</p><p className="text-xs leading-5 text-slate-700">{hovered.shortNote}</p></div>
        </GlassCard>
      )}
      <div className="absolute right-3 top-3 flex flex-col gap-2">
        <button type="button" aria-label="Acercar mapa" onClick={() => changeZoom(1.7)} disabled={position.zoom >= 12} className="grid h-11 w-11 place-items-center rounded-full border border-white bg-white/90 text-ink shadow-glass disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-turquoise-700"><Plus size={18} aria-hidden="true" /></button>
        <button type="button" aria-label="Alejar mapa" onClick={() => changeZoom(1 / 1.7)} disabled={position.zoom <= 1} className="grid h-11 w-11 place-items-center rounded-full border border-white bg-white/90 text-ink shadow-glass disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-turquoise-700"><Minus size={18} aria-hidden="true" /></button>
        <button type="button" aria-label="Restablecer mapa" onClick={() => setPosition(initialPosition)} className="grid h-11 w-11 place-items-center rounded-full border border-white bg-white/90 text-ink shadow-glass focus-visible:outline focus-visible:outline-2 focus-visible:outline-turquoise-700"><RotateCcw size={17} aria-hidden="true" /></button>
      </div>
    </div>
  );
}
