"use client";

import { useEffect, useState } from "react";

export type JumpNavSection = { id: string; label: string };

export function CreativeJumpNav({ sections }: { sections: JumpNavSection[] }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    // A thin band near the top of the viewport: whichever section is
    // crossing it is "current." Purely cosmetic — every section stays
    // rendered regardless of which link is marked active.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const topMost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActive(topMost.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="sticky top-0 z-20 border-b border-ink/10 bg-bg/95 backdrop-blur-sm">
      <nav
        aria-label="Creative categories"
        className="mx-auto flex w-full max-w-6xl gap-8 px-6 py-4 sm:px-10"
      >
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            aria-current={active === s.id ? "location" : undefined}
            className={`font-nav text-sm ${
              active === s.id ? "font-medium text-nav-active" : "text-ink"
            }`}
          >
            {s.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
