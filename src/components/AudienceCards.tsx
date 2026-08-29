import { AUDIENCES } from "../data/audiences";

export default function AudienceCards() {
  return (
    <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
      {AUDIENCES.map((a, i) => (
        <div
          key={a.key}
          className="flex flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-card"
        >
          <div
            className="h-[220px] bg-cover bg-center"
            style={{ backgroundImage: `url(${a.image})` }}
          />
          <div className="flex flex-1 flex-col p-8">
            <div
              className="inline-block self-start rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider"
              style={{ background: a.accentSoft, color: a.accentDeep }}
            >
              0{i + 1} · For {a.short}
            </div>
            <h3 className="my-4 font-serif text-2xl font-bold leading-tight text-ink">
              {a.title}
            </h3>
            <ul className="grid flex-1 gap-2.5 p-0">
              {a.bullets.slice(0, 3).map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-3 text-sm text-muted"
                >
                  <span
                    className="h-[5px] w-[5px] rounded-full"
                    style={{ background: a.accentDeep }}
                  />
                  {b}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="mt-7 inline-flex items-center justify-center gap-2.5 self-stretch rounded-full px-6 py-4 text-sm font-semibold text-white no-underline"
              style={{ background: a.accentDeep }}
            >
              {a.cta} →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
