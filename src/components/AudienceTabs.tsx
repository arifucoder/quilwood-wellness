import { useState } from "react";
import { AUDIENCES } from "../data/audiences";

export default function AudienceTabs() {
  const [active, setActive] = useState(0);
  const a = AUDIENCES[active];

  return (
    <div>
      <div className="mb-16 flex flex-wrap justify-center gap-3.5">
        {AUDIENCES.map((aud, i) => {
          const isActive = i === active;
          return (
            <button
              key={aud.key}
              onClick={() => setActive(i)}
              className="inline-flex items-center gap-3 rounded-full px-8 py-5 text-[15px] font-semibold transition-colors"
              style={{
                border: isActive
                  ? `2px solid ${aud.accentDeep}`
                  : "1.5px solid #E5EBE8",
                background: isActive ? aud.accentSoft : "#FFFFFF",
                color: isActive ? aud.accentDeep : "#2D4A3E",
                boxShadow: isActive ? `0 10px 24px ${aud.accentSoft}` : "none",
              }}
            >
              <span
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[13px] font-bold"
                style={{
                  background: isActive ? aud.accentDeep : "#FAFCFB",
                  color: isActive ? "#FFFFFF" : "#5A7A6A",
                }}
              >
                {i + 1}
              </span>
              For {aud.label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 items-center gap-14 rounded-[32px] border border-line bg-white p-8 shadow-[0_20px_50px_rgba(45,106,79,0.06)] sm:p-12 lg:grid-cols-2 lg:gap-[70px]">
        <div>
          <div
            className="mb-5 inline-block rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider"
            style={{ background: a.accentSoft, color: a.accentDeep }}
          >
            0{active + 1} · For {a.short}
          </div>
          <h3 className="font-serif text-3xl font-bold leading-tight tracking-tight text-ink sm:text-[46px]">
            {a.title}
          </h3>
          <p className="mt-5 text-[17px] leading-relaxed text-muted">
            {a.blurb}
          </p>
          <ul className="mt-8 grid gap-3.5 p-0">
            {a.bullets.map((b) => (
              <li
                key={b}
                className="flex items-center gap-3.5 text-[15px] text-charcoal"
              >
                <span
                  className="inline-flex h-[1.625rem] w-[1.625rem] flex-shrink-0 items-center justify-center rounded-full text-[13px] font-bold"
                  style={{ background: a.accentSoft, color: a.accentDeep }}
                >
                  ✓
                </span>
                {b}
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="mt-10 inline-flex items-center justify-center gap-2.5 rounded-full px-9 py-5 text-base font-semibold text-white no-underline"
            style={{
              background: a.accentDeep,
              boxShadow: `0 10px 24px ${a.accentSoft}`,
            }}
          >
            {a.cta} <span className="text-lg">→</span>
          </a>
        </div>

        <div
          className="relative h-[340px] overflow-hidden rounded-3xl bg-cover bg-center lg:h-[520px]"
          style={{ backgroundImage: `url(${a.image})` }}
        >
          <div className="absolute bottom-6 left-6 flex items-center gap-3.5 rounded-2xl bg-white/96 px-5 py-4 text-[13px] font-medium text-charcoal">
            <div
              className="h-2.5 w-2.5 rounded-full"
              style={{
                background: a.accentDeep,
                boxShadow: `0 0 0 4px ${a.accentSoft}`,
              }}
            />
            Now enrolling · {a.short} cohort
          </div>
        </div>
      </div>
    </div>
  );
}
