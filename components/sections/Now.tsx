import GlassCard from '../GlassCard';
import { diaryEntries, nowBlocks, nowContent } from '../../data/now';

function formatDate(date: string) {
  return new Intl.DateTimeFormat('es-ES', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`));
}

export default function Now() {
  return (
    <section id="ahora" aria-labelledby="now-title" className="px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-turquoise-700">{nowContent.label}</p>
        <h2 id="now-title" className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-ink sm:text-6xl">{nowContent.title}</h2>
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">{nowContent.description}</p>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <GlassCard className="p-6 sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-turquoise-700">{nowContent.updatedLabel} · <time dateTime={nowContent.lastUpdated}>{formatDate(nowContent.lastUpdated)}</time></p>
            <div className="mt-6 grid gap-7 sm:grid-cols-2">
              {nowBlocks.map((block) => <div key={block.title}><h3 className="font-display text-xl font-semibold text-ink">{block.title}</h3><p className="mt-2 text-sm leading-7 text-slate-700">{block.text}</p></div>)}
            </div>
          </GlassCard>
          <div>
            <h3 className="mb-2 font-display text-2xl font-semibold text-ink">{nowContent.diaryTitle}</h3>
            <p className="mb-4 text-sm text-slate-600">{nowContent.sample}</p>
            <ol className="space-y-3">
              {diaryEntries.slice(0, 3).map((entry) => (
                <li key={`${entry.date}-${entry.title}`}>
                  <GlassCard className="p-5">
                    <time dateTime={entry.date} className="text-xs font-bold uppercase tracking-[0.12em] text-turquoise-700">{formatDate(entry.date)}</time>
                    <h4 className="mt-2 font-display text-lg font-semibold text-ink">{entry.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-700">{entry.text}</p>
                  </GlassCard>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
