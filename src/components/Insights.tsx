import { INSIGHTS } from "../data/insights";

export default function Insights() {
  return (
    <section className="bg-canvas px-6 py-24 sm:px-10 lg:py-[140px]">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-10">
          <div>
            <div className="mb-[1.125rem] inline-block rounded-full bg-sage-soft px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-sage-deep">
              Latest Insights
            </div>
            <h2 className="font-serif text-3xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl">
              Notes from the practice
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-sage-soft px-6 py-3.5 text-sm font-semibold text-sage-deep no-underline"
          >
            All articles →
          </a>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {INSIGHTS.map((p) => (
            <article key={p.title}>
              <div
                className="mb-[1.375rem] h-[280px] rounded-[20px] bg-cover bg-center"
                style={{ backgroundImage: `url(${p.img})` }}
              />
              <div
                className={`inline-block rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${p.softClass} ${p.colorClass}`}
              >
                {p.tag}
              </div>
              <h3 className="my-3 font-serif text-2xl font-bold leading-tight tracking-tight text-ink">
                {p.title}
              </h3>
              <div className="text-[13px] text-muted">
                {p.date} · 4 min read
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
