import { FoxHero } from "@/components/FoxHero";

const BADGES = ["San Francisco-based", "Ex-Meta R&D"];

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 pt-4 pb-20 sm:px-10 sm:pt-8 sm:pb-28">
      <div className="mx-auto w-full max-w-[416px] sm:max-w-[500px]">
        <FoxHero />
      </div>

      <div className="hero-fade-up mt-12 grid grid-cols-1 gap-10 sm:mt-16 sm:grid-cols-[1fr_1.45fr] sm:gap-10 lg:gap-14">
        <div>
          <h2 className="hero-caret font-display text-[32px] leading-tight font-medium text-accent text-balance sm:text-[40px]">
            Designer who builds and ships code.
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {BADGES.map((label) => (
              <span
                key={label}
                className="inline-flex items-center gap-2.5 bg-chip px-4 py-2 text-sm text-accent-deep transition duration-200 hover:brightness-[0.97]"
              >
                <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                {label}
              </span>
            ))}
          </div>
          <p className="font-script mt-6 max-w-[40ch] text-[21px] leading-[1.7] text-ink">
            I design internal tools and data workflows for engineers and
            researchers.
          </p>
        </div>

        <div>
          <p className="font-nav text-xs font-medium tracking-[0.14em] text-muted uppercase">
            Currently building
          </p>
          <ul className="mt-3 border-t border-black/10">
            {[
              ["Wilde Backyard", "a nationwide wildlife reporting platform"],
              ["WildePod", "an annotation tool for its detection pipeline"],
              ["Tanmigo", "in beta"],
            ].map(([name, blurb]) => (
              <li
                key={name}
                className="flex items-baseline justify-between gap-6 border-b border-black/10 py-3.5"
              >
                <span className="shrink-0 text-[17px] font-semibold text-ink">{name}</span>
                <span className="text-right text-[15px] leading-6 text-muted">{blurb}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-right text-sm text-accent-deep">Designing since 2021</p>
        </div>
      </div>
    </section>
  );
}
