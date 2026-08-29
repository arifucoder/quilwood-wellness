const POINTS: [string, string][] = [
  ["AMA-recognised", "Hours count toward annual CPD requirements"],
  [
    "Independently reviewed",
    "Each course assessed against CPD Home standards",
  ],
  [
    "Reflective & evidence-informed",
    "Designed for measurable practice change",
  ],
];

const BADGE_STATS: [string, string, string][] = [
  ["120+", "CPD hours", "#2D6A4F"],
  ["AMA", "Recognised", "#C75A41"],
  ["2026", "Certified", "#4F94C7"],
];

export default function Accreditation() {
  return (
    <section className="relative overflow-hidden bg-sage-tint px-6 py-24 sm:px-10 lg:py-[120px]">
      <div className="pointer-events-none absolute -right-20 -top-20 h-[320px] w-[320px] rounded-full bg-butter opacity-50 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-[90px]">
        <div>
          <div className="mb-6 inline-block rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-sage-deep">
            Accredited Provider
          </div>
          <h2 className="font-serif text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-[52px]">
            CPD-accredited.
            <br />
            Recognised by the{" "}
            <span className="font-normal italic text-sage-deep">AMA</span>.
          </h2>
          <p className="mt-6 text-[17px] leading-loose text-muted">
            Quillwood Wellness Centre is a certified CPD Home learning
            provider for 2026, recognised by the Australian Medical
            Association. Every clinical course we deliver is independently
            reviewed for quality, rigour and outcomes — and credited toward
            your annual CPD requirements.
          </p>
          <div className="mt-9 grid gap-[1.125rem]">
            {POINTS.map(([t, d]) => (
              <div key={t} className="flex items-start gap-4">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-sage-deep text-sm font-bold text-white">
                  ✓
                </span>
                <div>
                  <div className="text-base font-semibold text-ink">{t}</div>
                  <div className="mt-0.5 text-sm text-muted">{d}</div>
                </div>
              </div>
            ))}
          </div>
          <a
            href="#"
            className="mt-10 inline-flex items-center gap-2.5 rounded-full bg-sage-deep px-8 py-[1.125rem] text-[15px] font-semibold text-white no-underline shadow-soft"
          >
            View accredited courses →
          </a>
        </div>

        <div className="rounded-[32px] bg-white p-8 shadow-[0_30px_70px_rgba(45,106,79,0.12)] sm:p-14">
          <div className="mb-7 text-center text-xs font-bold uppercase tracking-[0.18em] text-sage-deep">
            Certified Learning Provider · 2026
          </div>

          {/* Badge — drawn inline so it carries the Quillwood name */}
          <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-line bg-[radial-gradient(circle_at_30%_25%,_#E6F2EC_0%,_#FFFFFF_65%)]">
            <div className="p-6 text-center">
              <div className="mx-auto flex h-[110px] w-[110px] items-center justify-center rounded-full bg-sage-deep shadow-[0_12px_30px_rgba(45,106,79,0.25)]">
                <svg width="52" height="52" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18.5 3.5c-4.8.4-9 3-11.4 7.4C5.6 13.4 5 16 5 18.5c2.5 0 5.1-.6 7.6-2.1 4.4-2.4 7-6.6 7.4-11.4-.5-.5-1-1-1.5-1.5Z"
                    stroke="#fff"
                    strokeWidth="1.3"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M12.2 11.8 5.5 18.5"
                    stroke="#fff"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                  <circle cx="5" cy="19" r="1" fill="#A8D5BE" />
                </svg>
              </div>
              <div className="mt-5 font-serif text-2xl font-bold tracking-tight text-ink">
                Quillwood Wellness
              </div>
              <div className="mt-1.5 text-[10px] font-semibold tracking-[0.3em] text-sage-deep">
                — CENTRE —
              </div>
              <div className="mt-5 border-t border-dashed border-line pt-[1.125rem] text-xs font-semibold uppercase tracking-wider text-muted">
                AMA · CPD Home
                <br />
                <span className="mt-1.5 inline-block text-coral">
                  Accredited 2026
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 border-t border-line pt-7 text-center">
            {BADGE_STATS.map(([n, l, c]) => (
              <div key={l}>
                <div
                  className="font-serif text-[28px] font-bold tracking-tight sm:text-[34px]"
                  style={{ color: c }}
                >
                  {n}
                </div>
                <div className="mt-0.5 text-xs font-medium text-muted">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
