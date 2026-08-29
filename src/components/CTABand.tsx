export default function CTABand() {
  return (
    <section className="bg-white px-6 py-24 sm:px-10 lg:py-[120px]">
      <div className="relative mx-auto max-w-[1180px] overflow-hidden rounded-[36px] bg-gradient-to-br from-sage-tint to-sky-soft px-6 py-20 text-center sm:px-16 lg:py-[90px]">
        <div className="pointer-events-none absolute -left-20 -top-20 h-[280px] w-[280px] rounded-full bg-coral-soft opacity-70 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-[320px] w-[320px] rounded-full bg-butter opacity-50 blur-3xl" />

        <div className="relative">
          <div className="mb-6 inline-block rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-sage-deep">
            Begin where you are
          </div>
          <h2 className="font-serif text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-[60px]">
            A page is the most patient
            <br />
            <span className="font-normal italic text-sage-deep">
              listener you'll ever meet.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-[600px] text-lg leading-relaxed text-muted">
            Join a free orientation session and find the program that fits
            the season you're in.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-coral px-8 py-[18px] text-[15px] font-semibold text-white no-underline shadow-[0_8px_24px_rgba(224,112,87,0.28)]"
            >
              Reserve a free orientation
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border-[1.5px] border-line bg-white px-8 py-[18px] text-[15px] font-semibold text-ink no-underline"
            >
              Download the prospectus
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
