import { COURSES } from "../data/courses";

export default function Courses() {
  return (
    <section className="bg-white px-6 py-24 sm:px-10 lg:py-[140px]">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-10">
          <div>
            <div className="mb-[1.125rem] inline-block rounded-full bg-sage-soft px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-sage-deep">
              Featured CPD Courses
            </div>
            <h2 className="font-serif text-3xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl">
              Courses currently enrolling
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-sage-soft px-6 py-3.5 text-sm font-semibold text-sage-deep no-underline"
          >
            View all courses →
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {COURSES.map((c) => (
            <div
              key={c.title}
              className="flex flex-col overflow-hidden rounded-[20px] border border-line bg-white shadow-[0_6px_20px_rgba(45,106,79,0.05)]"
            >
              <div
                className="relative h-[200px] bg-cover bg-center"
                style={{ backgroundImage: `url(${c.img})` }}
              >
                <span className="absolute left-3.5 top-3.5 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-sage-deep">
                  {c.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="inline-block self-start rounded-full bg-coral-soft px-2.5 py-1 text-[11px] font-semibold text-coral-deep">
                  {c.hours}
                </div>
                <h4 className="my-3 flex-1 font-serif text-xl font-bold leading-tight tracking-tight text-ink">
                  {c.title}
                </h4>
                <div className="flex items-center justify-between border-t border-line pt-4">
                  <span className="text-xl font-bold text-ink">
                    {c.price}
                  </span>
                  <a
                    href="#"
                    className="rounded-full bg-sage-deep px-[1.125rem] py-2.5 text-[13px] font-semibold text-white no-underline"
                  >
                    Enrol →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
