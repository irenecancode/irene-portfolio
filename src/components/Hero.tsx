import { FoxHero } from "@/components/FoxHero";

function PinIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path
        d="M10 2a5.5 5.5 0 0 0-5.5 5.5c0 4.13 5.5 10 5.5 10s5.5-5.87 5.5-10A5.5 5.5 0 0 0 10 2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="7.5" r="1.8" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0" aria-hidden="true">
      <rect
        x="2.5"
        y="6"
        width="15"
        height="10"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M7 6V4.75A1.75 1.75 0 0 1 8.75 3h2.5A1.75 1.75 0 0 1 13 4.75V6"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M2.5 10.5h15" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

const BADGES = [
  { Icon: PinIcon, label: "San Francisco-based" },
  { Icon: BriefcaseIcon, label: "Ex-Meta R&D" },
];

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pt-4 pb-20 sm:px-10 sm:pt-8 sm:pb-28">
      <div className="mx-auto w-full max-w-xs sm:max-w-sm">
        <FoxHero />
      </div>

      <div className="hero-fade-up mt-12 grid grid-cols-1 gap-10 sm:mt-16 sm:grid-cols-2 sm:gap-16 lg:gap-24">
        <div>
          <h2 className="hero-caret font-display text-[32px] leading-tight font-medium text-accent text-balance sm:text-[40px]">
            Designer who builds and ships code.
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {BADGES.map(({ Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-navy bg-surface px-4 py-2 text-sm text-navy transition-colors duration-200 hover:bg-navy-tint"
              >
                <Icon />
                {label}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="max-w-[44ch] text-lg leading-7 text-ink">
            I design internal tools and data workflows for engineers and
            researchers. Currently developing Wilde Backyard, a nationwide
            wildlife reporting platform for research.
          </p>
          <p className="mt-4 text-sm text-accent-deep">Designing since 2021</p>
        </div>
      </div>
    </section>
  );
}
