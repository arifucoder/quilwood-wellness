import { IMG } from "../data/images";

export default function Founder() {
  return (
    <section className="relative overflow-hidden bg-sage-tint px-6 py-24 sm:px-10 lg:py-[140px]">
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-[320px] w-[320px] rounded-full bg-coral-soft opacity-60 blur-3xl" />
      <div className="relative mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-16 lg:grid-cols-[0.85fr_1fr] lg:gap-[90px]">
        <div
          className="relative h-[340px] overflow-hidden rounded-[32px] bg-cover bg-center shadow-lifted lg:h-[580px]"
          style={{ backgroundImage: `url(${IMG.founder})` }}
        >
          <div className="absolute bottom-5 left-5 rounded-2xl bg-white/96 px-5 py-4">
            <div className="text-xs font-bold uppercase tracking-wider text-sage-deep">
              Founder
            </div>
            <div className="mt-1 font-serif text-2xl font-bold text-ink">
              Dr. Maren Ashworth
            </div>
          </div>
        </div>
        <div>
          <div className="mb-5 inline-block rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-sage-deep">
            Meet the Founder
          </div>
          <h2 className="font-serif text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-[52px]">
            "I built this Centre for the
            <br />
            <span className="font-normal italic text-sage-deep">
              quiet hour after the hard day.
            </span>
            "
          </h2>
          <p className="mt-[1.625rem] text-[17px] leading-loose text-muted">
            Maren is a clinician, educator and author who has spent fifteen
            years working at the intersection of healthcare and the written
            word. Quillwood Wellness Centre brings together the tools she's
            relied on with her own patients — and her own life — into
            structured programs anyone can join.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3.5">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-sage-deep px-8 py-[1.125rem] text-[15px] font-semibold text-white no-underline shadow-soft"
            >
              Read Maren's story
            </a>
            <a
              href="#"
              className="rounded-full px-7 py-[1.125rem] text-[15px] font-semibold text-ink no-underline"
            >
              Speaking & media →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
