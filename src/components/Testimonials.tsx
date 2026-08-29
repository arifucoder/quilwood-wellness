import { TESTIMONIALS } from "../data/testimonials";
import SectionEyebrow from "./SectionEyebrow";

function initials(name: string) {
  return name
    .split(" ")
    .map((s) => s[0])
    .slice(0, 2)
    .join("");
}

export default function Testimonials() {
  return (
    <section className="bg-white px-6 py-24 sm:px-10 lg:py-[140px]">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-16">
          <SectionEyebrow
            eyebrow="In their words"
            title="Real words from real participants"
          />
        </div>
        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.author}
              className={`m-0 flex flex-col gap-6 rounded-3xl p-9 ${t.colorClass}`}
            >
              <div className={`flex gap-1 ${t.accentClass}`}>
                {[0, 1, 2, 3, 4].map((s) => (
                  <span key={s} className="text-base">
                    ★
                  </span>
                ))}
              </div>
              <blockquote className="m-0 font-serif text-xl italic leading-snug tracking-tight text-ink">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3">
                <div
                  className={`flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white text-sm font-bold ${t.accentClass}`}
                >
                  {initials(t.author)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink">
                    {t.author}
                  </div>
                  <div className="text-[13px] text-muted">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
