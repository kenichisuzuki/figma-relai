import { Kicker } from './Kicker';
import { getCopy } from '../../lib/translations';
import { Strip } from './Strip';

export function Workflows() {
  const copy = getCopy().flows;

  return (
    <section id="flows" className="w-full">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 md:py-24">
        <div className="max-w-2xl">
          <Kicker>{copy.eyebrow}</Kicker>
          <h2 className="mt-3 font-heading text-[1.9rem] font-semibold leading-tight tracking-tight md:text-[2.5rem]">{copy.title}</h2>
        </div>
        <figure className="ticks mt-12 border border-border bg-card p-1.5">
          <video
            className="block h-auto w-full"
            style={{ aspectRatio: '2632 / 1514' }}
            controls
            preload="metadata"
            playsInline
            poster="/demo/f3-poster.jpg"
            src="/demo/f3-veto-demo.mp4"
            aria-label="A 40-second real session: two CTA buttons unified to amber, a headline rewritten, a write into the fenced DS page rejected by the file, and the edit verified."
          />
          <figcaption className="px-2 py-2 font-mono text-[10px] tracking-[0.08em] text-muted-foreground">
            one pass, unedited — bulk edit · a fence holds · verified ✓
          </figcaption>
        </figure>
        <div className="mt-12 grid gap-[0.5px] overflow-hidden border-[0.5px] border-border bg-border md:grid-cols-2">
          {copy.items.map((item) => (
            <article key={item.title} className="flex flex-col bg-background p-6 md:p-8">
              <h3 className="font-heading text-lg font-semibold tracking-tight">{item.title}</h3>
              <p className="t-prose mt-2.5 text-sm text-muted-foreground">{item.body}</p>
              <div className="mt-auto pt-5">
                <Strip label={item.tag} rows={item.rows} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
