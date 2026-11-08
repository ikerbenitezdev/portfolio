'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import GlassCard from '../GlassCard';
import { months, movementContent, profiles } from '../../data/movement';
import type { MovementApp, MovementImage, MovementProfile } from '../../types/movement';

const appNames: Record<MovementApp, string> = { strava: 'Strava', hevy: 'Hevy' };

function PostcardImage({ image }: { image: MovementImage }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <p role="alert" className="flex h-full items-center justify-center p-6 text-center text-sm text-slate-700">{movementContent.imageError}</p>;
  }

  return <Image src={image.image} alt={image.alt} fill sizes="(max-width: 767px) 80vw, (max-width: 1024px) 40vw, 460px" loading="lazy" className="object-contain" onError={() => setFailed(true)} />;
}

function MovementCard({ profile, image }: { profile: MovementProfile; image: MovementImage }) {
  const name = appNames[profile.app];
  const imageClassName = 'relative mt-5 block aspect-square w-full overflow-hidden rounded-2xl bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-turquoise-700';

  return (
    <GlassCard className="h-full p-4 text-left motion-safe:transition-[transform,box-shadow] motion-safe:duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_24px_70px_rgba(145,82,44,0.16)] sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {profile.logo && <Image src={profile.logo} alt={`Logo de ${name}`} width={44} height={44} className="h-11 w-11 object-contain" />}
          <div>
            <h3 className="font-display text-xl font-semibold text-ink">{name}</h3>
            {profile.username && <p className="text-sm text-slate-700">@{profile.username}</p>}
          </div>
        </div>
        {profile.url ? (
          <a href={profile.url} target="_blank" rel="noopener noreferrer" style={{ color: 'white' }} className="inline-flex min-h-11 items-center gap-1 rounded-full bg-ink px-4 py-2 text-sm font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-turquoise-700">
            Sígueme en {name}<ArrowUpRight aria-hidden="true" size={16} />
          </a>
        ) : <span className="text-xs text-slate-600">{movementContent.profilePending}</span>}
      </div>
      {profile.url ? (
        <a href={profile.url} target="_blank" rel="noopener noreferrer" aria-label={`Ver mi perfil de ${name}. ${image.alt}`} className={imageClassName}>
          <PostcardImage image={image} />
        </a>
      ) : (
        <div className={imageClassName}><PostcardImage image={image} /></div>
      )}
    </GlassCard>
  );
}

export default function Movement() {
  const month = months[0];

  return (
    <section id="movimiento" aria-labelledby="movement-title" className="relative overflow-hidden px-6 py-20 sm:px-10 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[min(48rem,90vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-orange-200/50 via-coral-100/70 to-sand-100/60 blur-3xl" />
      <div className="relative mx-auto max-w-5xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-turquoise-700">{movementContent.label}</p>
        <h2 id="movement-title" className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-ink sm:text-6xl">{movementContent.title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold leading-8 text-ink">{movementContent.subtitle}</p>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-700">{movementContent.description}</p>
        {month ? (
          <>
            {month.note && <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-700">{month.note}</p>}
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {profiles.map((profile) => {
                const image = month[profile.app];
                return image ? <MovementCard key={`${month.id}-${profile.app}`} profile={profile} image={image} /> : null;
              })}
            </div>
            {!month.strava && !month.hevy && <p className="mt-8 text-sm text-slate-700">{movementContent.noImages}</p>}
          </>
        ) : <p className="mt-8 text-sm text-slate-700">{movementContent.noImages}</p>}
      </div>
    </section>
  );
}
