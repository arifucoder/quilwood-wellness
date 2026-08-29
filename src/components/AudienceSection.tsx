import type { AudienceLayout } from "../types";
import SectionEyebrow from "./SectionEyebrow";
import AudienceTabs from "./AudienceTabs";
import AudienceCards from "./AudienceCards";
import AudienceRows from "./AudienceRows";

interface AudienceSectionProps {
  layout: AudienceLayout;
}

export default function AudienceSection({ layout }: AudienceSectionProps) {
  return (
    <section className="bg-canvas px-6 py-24 sm:px-10 lg:py-[140px]">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-16">
          <SectionEyebrow
            eyebrow="Who we serve"
            title="Writing for clarity, practice and healing"
            sub="Three audiences. One common thread — the page as a place to think clearly and heal honestly."
          />
        </div>
        {layout === "tabs" && <AudienceTabs />}
        {layout === "cards" && <AudienceCards />}
        {layout === "rows" && <AudienceRows />}
      </div>
    </section>
  );
}
