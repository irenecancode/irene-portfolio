"use client";

const CHIPS = [
  { name: "Wilde Pod powered by Mega-detector", caption: "ML pipeline to capture wildlife" },
  { name: "Tanmigo", caption: "Video annotation platform" },
  {
    name: "My First Art Show",
    caption: "Dog portraits in Bernal Heights!",
  },
] as const;

export function ProjectChips() {
  return (
    <div className="bg-[var(--color-reflection-bg)] py-16">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 sm:grid-cols-2 sm:px-10">
        <div>
          <h2 className="hero-caret font-display text-[40px] leading-tight font-medium text-ink text-balance sm:text-[56px]">
            Designer who builds and ships code
          </h2>
          <div className="mt-6 flex items-center gap-1.5 text-[15px] font-medium text-ink">
            <span aria-hidden="true" className="text-base leading-none">📍</span>
            <span>San Francisco | ex-Meta R&D</span>
          </div>
        </div>

        <div>
          <h3 className="font-display text-2xl font-normal text-ink sm:text-3xl">
            Designing...
          </h3>
          <div className="chip-cloud mt-6 flex flex-wrap gap-3">
            {CHIPS.map((chip) => {
              const isColored = chip.name !== "My First Art Show";
              return (
                <div key={chip.name} className="chip-item group relative">
                  <h3
                    className={
                      isColored
                        ? "font-display inline-block cursor-default rounded-md bg-navy px-5 py-2.5 text-xl font-semibold text-white transition-colors duration-200 sm:text-2xl"
                        : "font-display inline-block cursor-default rounded-md border-2 border-navy bg-transparent px-5 py-2.5 text-xl font-semibold text-navy transition-colors duration-200 sm:text-2xl"
                    }
                  >
                    {chip.name}
                  </h3>
                  <div className="pointer-events-none absolute top-full left-1/2 z-10 mt-2 w-max max-w-[220px] -translate-x-1/2 rounded-sm border-2 border-accent-deep bg-surface px-3 py-2 text-center text-sm text-ink opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100">
                    {chip.caption}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
