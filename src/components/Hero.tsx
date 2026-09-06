import { IMG } from "../data/images";

const STATS: [string, string][] = [
	["8,400+", "Participants supported"],
	["120+", "CPD-accredited hours"],
	["35", "Partner organisations"],
	["4.9★", "Average participant rating"],
];

export default function Hero() {
	return (
		<section className="relative overflow-hidden bg-gradient-to-br from-[#E8F5EF] via-[#FDF6F0] to-[#FCE8E8] pt-20">
			{/* Ambient blobs */}
			<div className="pointer-events-none absolute left-[-120px] top-[100px] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,_#C8EDD9_0%,_transparent_70%)] opacity-80 blur-xl" />
			<div className="pointer-events-none absolute right-[-100px] top-[60px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,_#FDD9C8_0%,_transparent_70%)] opacity-75 blur-xl" />
			<div className="pointer-events-none absolute right-[280px] top-[420px] hidden h-[200px] w-[200px] rounded-full bg-[radial-gradient(circle,_#FEF3C7_0%,_transparent_70%)] opacity-70 blur-xl lg:block" />

			<div className="relative mx-auto max-w-[1100px] px-6 text-center sm:px-10">
				<div className="mb-9 inline-flex items-center gap-2.5 rounded-full border border-sage-deep/20 bg-white/85 px-5 py-2.5 text-sm font-semibold text-sage-deep shadow-[0_4px_14px_rgba(45,106,79,0.08)] backdrop-blur">
					<span className="inline-block h-2 w-2 rounded-full bg-coral shadow-[0_0_0_3px_rgba(224,112,87,0.18)]" />
					For stress · anxiety · burnout · recovery
				</div>

				<h1 className="hero-fade balance font-serif text-5xl font-bold leading-[1.04] tracking-tight text-ink sm:text-7xl lg:text-[88px]">
					Find your way —
					<br />
					<em className="font-normal not-italic italic text-sage-deep">
						one <span className="italic text-coral">page</span>,
					</em>{" "}
					at a time. arif
				</h1>

				<p className="mx-auto mt-8 max-w-[620px] text-lg leading-relaxed text-muted">
					Evidence-informed writing programs for clinicians, individuals and organisations navigating stress, anxiety,
					burnout and recovery. CPD-accredited. Quietly powerful.
				</p>

				<div className="mt-11 flex flex-wrap items-center justify-center gap-3.5">
					<a
						href="#"
						className="inline-flex items-center justify-center gap-2.5 rounded-full bg-coral px-8 py-[18px] text-[15px] font-semibold text-white no-underline shadow-[0_8px_24px_rgba(224,112,87,0.28)]"
					>
						Begin your journey →
					</a>
					<a
						href="#"
						className="inline-flex items-center justify-center gap-2.5 rounded-full border-[1.5px] border-line bg-white px-8 py-[18px] text-[15px] font-semibold text-ink no-underline"
					>
						Explore programs
					</a>
				</div>

				<div className="mt-11 flex flex-wrap items-center justify-center gap-7 text-sm text-muted">
					<span className="inline-flex items-center gap-2">
						<span className="text-coral">★★★★★</span> 4.9 from{" "}
						<strong className="font-semibold text-charcoal">2,400+</strong> participants
					</span>
					<span className="h-1 w-1 rounded-full bg-line" />
					<span>
						<strong className="font-semibold text-charcoal">AMA-recognised</strong> CPD provider
					</span>
					<span className="h-1 w-1 rounded-full bg-line" />
					<span>
						<strong className="font-semibold text-charcoal">NDIS</strong> plan-managed
					</span>
				</div>
			</div>

			<div className="relative mt-16 px-6 sm:px-10">
				<div
					className="relative mx-auto h-[560px] max-w-[1280px] overflow-hidden rounded-[32px] bg-cover bg-center shadow-lifted"
					style={{
						backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(26,61,46,0.45)), url(${IMG.hero})`,
					}}
				>
					<div className="absolute left-8 top-8 flex items-center gap-3.5 rounded-2xl bg-white/96 px-5 py-4 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
						<div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-sage-soft text-xl text-sage-deep">
							✿
						</div>
						<div>
							<div className="text-xs font-medium text-muted">Today's prompt</div>
							<div className="text-[15px] font-semibold text-ink">Write 5 minutes of breath.</div>
						</div>
					</div>

					<div className="absolute right-8 top-8 rounded-2xl bg-white/96 px-5 py-4 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
						<div className="flex items-center gap-2">
							<span className="h-2 w-2 rounded-full bg-sage shadow-[0_0_0_4px_theme(colors.sage.soft)]" />
							<span className="text-[13px] font-semibold text-ink">Live cohort starting May 14</span>
						</div>
					</div>

					<div className="absolute bottom-10 left-10 max-w-[560px] font-serif text-2xl italic leading-snug tracking-tight text-white sm:text-[28px]">
						"The act of writing is the act of discovering what you believe."
					</div>
				</div>
			</div>

			<div className="mx-auto mt-[70px] grid max-w-[1100px] grid-cols-2 gap-y-8 px-6 pb-24 sm:px-10 lg:grid-cols-4 lg:gap-y-0">
				{STATS.map(([n, l], i) => (
					<div key={l} className={`px-6 text-center ${i === 0 ? "" : "lg:border-l lg:border-line"}`}>
						<div className="font-serif text-4xl font-bold tracking-tight text-sage-deep sm:text-[46px]">{n}</div>
						<div className="mt-1.5 text-[13px] font-medium text-muted">{l}</div>
					</div>
				))}
			</div>
		</section>
	);
}
