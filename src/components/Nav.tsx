import Logo from "./Logo";

const LINKS = [
  "About",
  "CPD Courses",
  "For Clinicians",
  "For Individuals",
  "For Organisations",
  "Insights",
  "Contact",
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur-md backdrop-saturate-150">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-8 px-6 py-4 sm:px-10">
        <a href="#" className="no-underline">
          <Logo size={44} />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium text-charcoal no-underline hover:text-sage-deep"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden text-sm font-medium text-muted no-underline hover:text-ink sm:inline"
          >
            Sign in
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-sage-deep px-5 py-3 text-sm font-semibold text-white no-underline"
          >
            Book a session →
          </a>
        </div>
      </div>
    </header>
  );
}
