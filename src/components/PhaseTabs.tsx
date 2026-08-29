"use client";

import { useRef, useState, type KeyboardEvent, type MouseEvent, type ReactNode } from "react";

type PhaseTab = { label: string; content: ReactNode };

/* Tabbed container for the "How I ran it" phase trees: chip-style tab
   buttons (active = accent-deep fill, hover = rust, matching the site chip
   grammar), full ARIA tabs pattern with arrow-key navigation. The tablist
   lives INSIDE the white card and sticks with a surface background, so
   scrolling a tall tree slides the diagram under white, not under the
   band's terracotta. Panels stay mounted (hidden) so switching is instant. */
export function PhaseTabs({ tabs }: { tabs: PhaseTab[] }) {
  const [active, setActive] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  /* Switching mid-scroll would otherwise strand the reader partway down
     the NEW chart; jump back so the fresh tree starts under the tabs. */
  function activate(i: number) {
    setActive(i);
    /* Deferred past React's panel swap, else the layout change cancels the
       scroll. setTimeout, not rAF: rAF pauses on hidden pages. Instant, not
       smooth: the content under the cursor is changing anyway. */
    setTimeout(() => {
      const el = wrapperRef.current;
      if (el && el.getBoundingClientRect().top < 0) {
        el.scrollIntoView({ block: "start" });
      }
    }, 0);
  }

  /* In-chart phase references (data-phase-link on SVG groups) act as
     links to their tab; delegation keeps the trees server-rendered. */
  function onPhaseLink(e: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>) {
    const target = (e.target as Element).closest?.("[data-phase-link]");
    if (!target) return;
    if ("key" in e) {
      if (e.key !== "Enter" && e.key !== " ") return;
      e.preventDefault();
    }
    const i = Number(target.getAttribute("data-phase-link"));
    if (!Number.isNaN(i) && i >= 0 && i < tabs.length) activate(i);
  }

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>, i: number) {
    let next: number | null = null;
    if (e.key === "ArrowRight") next = (i + 1) % tabs.length;
    if (e.key === "ArrowLeft") next = (i - 1 + tabs.length) % tabs.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = tabs.length - 1;
    if (next === null) return;
    e.preventDefault();
    activate(next);
    document.getElementById(`phase-tab-${next}`)?.focus();
  }

  return (
    <div ref={wrapperRef} className="w-full" onClick={onPhaseLink} onKeyDown={onPhaseLink}>
      <div
        role="tablist"
        aria-label="Design process phases"
        className="sticky top-0 z-10 flex flex-wrap justify-center gap-2 bg-surface py-4"
      >
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            type="button"
            role="tab"
            id={`phase-tab-${i}`}
            aria-selected={i === active}
            aria-controls={`phase-panel-${i}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => activate(i)}
            onKeyDown={(e) => onKeyDown(e, i)}
            className={
              i === active
                ? "bg-accent-deep px-4 py-2 text-sm font-medium text-white"
                : "bg-chip px-4 py-2 text-sm font-medium text-accent-deep transition-colors duration-200 hover:bg-rust hover:text-white"
            }
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab, i) => (
        <div
          key={tab.label}
          role="tabpanel"
          id={`phase-panel-${i}`}
          aria-labelledby={`phase-tab-${i}`}
          hidden={i !== active}
          className="pt-4"
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
