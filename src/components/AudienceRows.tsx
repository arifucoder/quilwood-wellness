import { AUDIENCES } from "../data/audiences";

export default function AudienceRows() {
  return (
    <div className="grid gap-16 lg:gap-20">
      {AUDIENCES.map((a, i) => {
        const reversed = i % 2 === 1;
        return (
          <div
            key={a.key}
            className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20 ${
              reversed ? "lg:[direction:rtl]" : ""
            }`}
          >
            <div className="lg:[direction:ltr]">
              <div
                className="mb-4 inline-block rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider"
                style={{ background: a.accentSoft, color: a.accentDeep }}
              >
                0{i + 1} · For {a.label}
              </div>
              <h3 className="font-serif text-3xl font-bold leading-[1.12] tracking-tight text-ink sm:text-[44px]">
                {a.title}
              </h3>
              <p className="mt-[1.125rem] text-base leading-relaxed text-muted">
                {a.blurb}
              </p>
              <a
                href="#"
                className="mt-7 inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-[1.125rem] text-[15px] font-semibold text-white no-underline"
                style={{ background: a.accentDeep }}
              >
                {a.cta} →
              </a>
            </div>
            <div
              className="h-[300px] rounded-3xl bg-cover bg-center lg:h-[460px] lg:[direction:ltr]"
              style={{ backgroundImage: `url(${a.image})` }}
            />
          </div>
        );
      })}
    </div>
  );
}
