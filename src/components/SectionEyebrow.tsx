interface SectionEyebrowProps {
  eyebrow: string;
  title: string;
  sub?: string;
  align?: "center" | "left";
}

export default function SectionEyebrow({
  eyebrow,
  title,
  sub,
  align = "center",
}: SectionEyebrowProps) {
  const isCenter = align === "center";
  return (
    <div
      className={`max-w-[760px] ${isCenter ? "mx-auto text-center" : "text-left"}`}
    >
      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-sage-soft px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-sage-deep">
        {eyebrow}
      </div>
      <h2 className="font-serif text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[56px]">
        {title}
      </h2>
      {sub && (
        <p className="mt-5 text-lg leading-relaxed text-muted">{sub}</p>
      )}
    </div>
  );
}
