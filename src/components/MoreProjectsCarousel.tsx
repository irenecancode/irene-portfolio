"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const AUTO_ADVANCE_MS = 6000;

type Project = {
  headline: string;
  body: string;
  tags: readonly string[];
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  /** Extra classes for the image itself — e.g. rounded-xl shadow-lg for
      a real screenshot that doesn't already carry that framing, same
      treatment and same reasoning as CaseStudy's mediaClassName (Irene's
      call, 2026-10-13). Illustrated mockups like Blue Bottle's floating
      phones don't want this — only real rectangular screenshots do. */
  imageClassName?: string;
};

export function MoreProjectsCarousel({ projects }: { projects: readonly Project[] }) {
  const [index, setIndex] = useState(0);

  /* Auto-advance with latency (Irene's call, 2026-10-13) — a long-enough
     pause to actually read the card (6s) before it moves on. Restarts
     from `index` so a manual click (via the button) also resets the
     wait instead of immediately auto-advancing a second time right
     after. */
  useEffect(() => {
    if (projects.length <= 1) return;
    const timer = setTimeout(() => {
      setIndex((current) => (current + 1) % projects.length);
    }, AUTO_ADVANCE_MS);
    return () => clearTimeout(timer);
  }, [index, projects.length]);

  return (
    <div className="relative mt-10 mb-16">
      {/* Slides left-to-right now, not a hard cut (Irene's call,
          2026-10-13 — "like left to right, instead of powerpoint"): every
          project sits side by side in one track, and advancing just
          translateX's the whole track instead of swapping content
          in place. The nav button and dots live outside this
          overflow-hidden track so they don't slide with it. */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {projects.map((project) => (
            <div
              key={project.headline}
              className="flex w-full shrink-0 flex-col items-center gap-8 sm:flex-row sm:items-center sm:pr-24"
            >
              <div className="flex h-[432px] w-[384px] shrink-0 items-center justify-center sm:h-[480px] sm:w-[432px]">
                <Image
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  width={project.imageWidth}
                  height={project.imageHeight}
                  className={`max-h-full max-w-full object-contain ${project.imageClassName ?? ""}`}
                />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="font-display text-[22px] font-medium text-ink text-balance">
                  {project.headline}
                </h3>
                <p className="mt-3 text-base leading-6 text-ink">{project.body}</p>
                <div className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-accent-deep/40 px-2.5 py-0.5 text-[11px] font-medium text-accent-deep transition-colors duration-200 hover:bg-chip"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Show next project"
        onClick={() => setIndex((current) => (current + 1) % projects.length)}
        className="z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface ring-1 ring-black/10 transition-colors duration-200 hover:ring-black/20 sm:absolute sm:top-1/2 sm:right-0 sm:-translate-y-1/2"
      >
        <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
          <path d="M8 5l5 5-5 5" stroke="#57534e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="relative mt-8 flex items-center justify-center gap-2" aria-hidden="true">
        {projects.map((p, i) => (
          <span
            key={p.headline}
            className={`h-2.5 w-2.5 rounded-full ${i === index ? "bg-accent-deep" : "bg-ink/15"}`}
          />
        ))}
      </div>
    </div>
  );
}
