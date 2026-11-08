'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import GlassCard from '../GlassCard';
import { travelContent, trips, type Trip } from '../../data/trips';

const TravelWorldMap = dynamic(() => import('../TravelWorldMap'), {
  ssr: false,
  loading: () => <p role="status" className="flex aspect-[800/440] items-center justify-center rounded-2xl bg-sky-100 text-sm text-slate-700">{travelContent.mapLoading}</p>,
});

function TripDialog({ trip, onClose }: { trip: Trip; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.showModal();
    return () => { if (dialog.open) dialog.close(); };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="trip-dialog-title"
      onClose={onClose}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          event.preventDefault();
          event.currentTarget.close();
        }
      }}
      onClick={(event) => { if (event.target === event.currentTarget) event.currentTarget.close(); }}
      className="fixed inset-x-0 bottom-0 top-auto m-0 max-h-[90dvh] w-full max-w-none overflow-y-auto rounded-t-[2rem] border-0 bg-white p-0 text-ink shadow-2xl backdrop:bg-ink/50 sm:inset-y-0 sm:left-auto sm:right-0 sm:h-full sm:max-h-none sm:w-[min(30rem,100%)] sm:rounded-none"
    >
      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-turquoise-700">{trip.isOrigin ? travelContent.origin : trip.highlight ? travelContent.highlight : trip.country}</p>
          <button autoFocus type="button" aria-label="Cerrar historia" onClick={() => dialogRef.current?.close()} className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-turquoise-100 text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-turquoise-700"><X size={20} aria-hidden="true" /></button>
        </div>
        <h3 id="trip-dialog-title" className="mt-4 font-display text-4xl font-semibold tracking-tight">{trip.name}</h3>
        <p className="mt-2 text-sm text-slate-700">{trip.country}{trip.year ? ` · ${trip.year}` : ''}</p>
        <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-2xl bg-sky-100">
          <Image src={trip.photo} alt={`Imagen de ${trip.name}`} fill sizes="(max-width: 640px) 90vw, 430px" className="object-cover" />
        </div>
        <p className="mt-6 text-base leading-8 text-slate-700">{trip.story || trip.shortNote}</p>
        {!trip.story && <p className="mt-4 text-sm leading-6 text-slate-600">{travelContent.pending}</p>}
      </div>
    </dialog>
  );
}

export default function TravelMap() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mapReady, setMapReady] = useState(false);
  const [view, setView] = useState<'map' | 'list'>('map');
  const [selected, setSelected] = useState<Trip | null>(null);
  const countries = new Set(trips.map((trip) => trip.country)).size;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setMapReady(true);
        observer.disconnect();
      }
    }, { rootMargin: '400px' });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="viajes" aria-labelledby="travel-title" className="px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-turquoise-700">{travelContent.label}</p>
            <h2 id="travel-title" className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-ink sm:text-6xl">{travelContent.title}</h2>
            <p className="mt-5 text-base leading-8 text-slate-700 sm:text-lg">{travelContent.description}</p>
          </div>
          <p className="text-sm font-semibold text-turquoise-700">{trips.length} lugares, {countries} países</p>
        </div>
        <GlassCard className="mt-10 p-4 sm:p-6">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
            <p className="max-w-xl text-sm leading-6 text-slate-700">{travelContent.mapHelp}</p>
            <div className="flex gap-1 rounded-full bg-turquoise-100/70 p-1" role="group" aria-label="Vista de viajes">
              <button type="button" aria-pressed={view === 'map'} onClick={() => setView('map')} className={`rounded-full px-4 py-2 text-sm font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-turquoise-700 ${view === 'map' ? 'bg-white text-ink shadow-sm' : 'text-slate-700'}`}>{travelContent.map}</button>
              <button type="button" aria-pressed={view === 'list'} onClick={() => setView('list')} className={`rounded-full px-4 py-2 text-sm font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-turquoise-700 ${view === 'list' ? 'bg-white text-ink shadow-sm' : 'text-slate-700'}`}>{travelContent.list}</button>
            </div>
          </div>
          {view === 'map' && (mapReady ? <TravelWorldMap onSelect={setSelected} /> : <p role="status" className="flex aspect-[800/440] items-center justify-center rounded-2xl bg-sky-100 text-sm text-slate-700">{travelContent.mapLoading}</p>)}
          <ul className={view === 'map' ? 'sr-only focus-within:not-sr-only' : 'grid gap-3 sm:grid-cols-2 lg:grid-cols-3'} aria-label="Lista de lugares">
            {trips.map((trip) => (
              <li key={trip.id}>
                <button type="button" onClick={() => setSelected(trip)} className="flex w-full items-center justify-between gap-3 rounded-2xl border border-turquoise-700/10 bg-white/70 p-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-turquoise-700">
                  <span><span className="block font-bold text-ink">{trip.name}{trip.isOrigin ? ` · ${travelContent.origin}` : ''}{trip.highlight ? ` · ${travelContent.highlight}` : ''}</span><span className="mt-1 block text-sm text-slate-700">{trip.country} · {trip.shortNote}</span></span>
                  <ArrowUpRight aria-hidden="true" className="h-5 w-5 shrink-0 text-turquoise-700" />
                </button>
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>
      {selected && <TripDialog trip={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
