import { useState, type FormEvent } from "react";
import Logo from "./Logo";

const COL_TITLE =
  "mb-[1.125rem] text-xs font-bold uppercase tracking-wider text-sage-deep";
const LINK =
  "mb-3 block text-sm font-medium text-charcoal no-underline hover:text-sage-deep";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    // Wire this up to your mailing list provider of choice.
    setSubmitted(true);
  }

  return (
    <footer className="border-t border-line bg-sage-tint px-6 pb-10 pt-20 text-ink sm:px-10 lg:pt-[100px]">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.4fr] lg:gap-[60px]">
          <div>
            <Logo size={52} />
            <p className="mt-[1.375rem] max-w-[280px] text-sm leading-relaxed text-muted">
              Therapeutic and reflective writing for clinicians, individuals
              and organisations across Australia.
            </p>
          </div>
          <div>
            <div className={COL_TITLE}>Programs</div>
            <a href="#" className={LINK}>
              CPD Courses
            </a>
            <a href="#" className={LINK}>
              For Individuals
            </a>
            <a href="#" className={LINK}>
              For Organisations
            </a>
            <a href="#" className={LINK}>
              NDIS Support
            </a>
          </div>
          <div>
            <div className={COL_TITLE}>About</div>
            <a href="#" className={LINK}>
              Our Centre
            </a>
            <a href="#" className={LINK}>
              Dr. Maren Ashworth
            </a>
            <a href="#" className={LINK}>
              Press & Media
            </a>
            <a href="#" className={LINK}>
              Contact
            </a>
          </div>
          <div>
            <div className={COL_TITLE}>Resources</div>
            <a href="#" className={LINK}>
              Free Guides
            </a>
            <a href="#" className={LINK}>
              Insights Blog
            </a>
            <a href="#" className={LINK}>
              FAQ
            </a>
            <a href="#" className={LINK}>
              Accreditation
            </a>
          </div>
          <div>
            <div className={COL_TITLE}>Stay in touch</div>
            <p className="mb-4 text-sm text-muted">
              A short note when new cohorts open. Nothing more.
            </p>
            {submitted ? (
              <p className="text-sm font-medium text-sage-deep">
                Thanks — you're on the list.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex rounded-full border border-line bg-white p-1.5"
              >
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 border-none bg-transparent px-4 py-2.5 text-sm text-ink outline-none placeholder:text-muted"
                />
                <button
                  type="submit"
                  className="rounded-full bg-sage-deep px-[1.375rem] py-2.5 text-[13px] font-semibold text-white"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-line pt-7 text-[13px] text-muted sm:flex-row">
          <div>
            © {new Date().getFullYear()} Quillwood Wellness Centre Pty Ltd.
            All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-inherit no-underline">
              Privacy
            </a>
            <a href="#" className="text-inherit no-underline">
              Terms
            </a>
            <a href="#" className="text-inherit no-underline">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
