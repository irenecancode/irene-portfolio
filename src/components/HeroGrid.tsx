"use client";

import { useEffect, useRef, useState, type CSSProperties, type MouseEvent } from "react";

/**
 * 6x3 hero grid (Irene's call, 2026-10-13): her 14 original pieces plus
 * two more (vegetables, coffee-dog), which went through two placements
 * same day before landing here — first their own row below lamb/ramen,
 * then stacked in pairs inside lamb/ramen's own cells, finally settled
 * into row 2's two empty columns (4 and 5) next to the text block,
 * where "slot A"/"slot B" pointed in her reference screenshot. That's
 * also why MIDDLE_ROW doesn't need the stack machinery the previous two
 * passes needed — every row-2 cell is back to being one plain image,
 * same as row 1 and row 3. Positions stay explicit col-start/row-start
 * (not auto-placement), since the center block's span would otherwise
 * shift where other cells land.
 *
 * Client component for three same-day interaction additions:
 * - Scroll parallax: top row drifts up, bottom row drifts down, row 2
 *   drifts a little of each, as the page scrolls past the hero.
 * - A 1.1x hover scale plus a cursor-follow tilt (a few degrees of
 *   rotateX/rotateY toward wherever the cursor is over that image).
 * - A staggered left-to-right reveal on first paint (opacity + a short
 *   rise, delayed per column), as a CSS keyframe animation (.hero-cell
 *   in globals.css) driven by a per-cell --delay — no React state, so no
 *   setState-in-effect, nothing stuck invisible in a background tab, and
 *   it plays with JS off.
 *
 * The three concerns (reveal / parallax / tilt) are three separately
 * nested layers, each owning one transform, instead of one element
 * trying to combine them into a single transform string: the reveal is
 * a Tailwind transition (so it can ease out once and then get out of
 * the way), the parallax is an inline style driven by scroll state
 * (no transition — it needs to track scroll instantly, not ease), and
 * the tilt is its own short-transition inline style driven by mouse
 * position. Mixing any of these into one shared `transition` would
 * make the other two laggy or jumpy.
 */
const TOP_ROW = [
  { col: 1, src: "hero-grid-hummingbird", alt: "A watercolor hummingbird in flight" },
  { col: 2, src: "hero-grid-tart", alt: "An illustrated custard tart" },
  { col: 3, src: "hero-grid-vscode", alt: "The VS Code logo" },
  { col: 4, src: "hero-grid-cookie", alt: "An illustrated frosted bun" },
  { col: 5, src: "hero-grid-shiba", alt: "An illustrated shiba inu" },
  { col: 6, src: "hero-grid-strawberries", alt: "An illustrated basket of strawberries" },
] as const;

const MIDDLE_ROW = [
  { col: 1, src: "hero-grid-lamb", alt: "An illustrated lamb" },
  { col: 4, src: "hero-grid-vegetables", alt: "An illustrated bundle of carrots, kohlrabi, and kale" },
  { col: 5, src: "hero-grid-coffee-dog", alt: "An illustrated cup of coffee with a dog's face in the foam" },
  { col: 6, src: "hero-grid-ramen", alt: "An illustrated cup of instant udon" },
] as const;

const BOTTOM_ROW = [
  { col: 1, src: "hero-grid-portafilter", alt: "An illustrated espresso portafilter" },
  { col: 2, src: "hero-grid-retriever", alt: "An illustrated golden retriever wearing a cone" },
  { col: 3, src: "hero-grid-figma", alt: "The Figma logo" },
  { col: 4, src: "hero-grid-cupcake", alt: "An illustrated frosted cupcake" },
  { col: 5, src: "hero-grid-github", alt: "The GitHub logo" },
  { col: 6, src: "hero-grid-sleeping-dog", alt: "An illustrated dog curled up asleep" },
] as const;

const ALL_CELLS = [
  ...TOP_ROW.map((cell) => ({ ...cell, row: 1 })),
  ...MIDDLE_ROW.map((cell) => ({ ...cell, row: 2 })),
  ...BOTTOM_ROW.map((cell) => ({ ...cell, row: 3 })),
];

const PARALLAX_DEPTH_BY_ROW: Record<number, number> = { 1: -0.06, 2: 0, 3: 0.06 };

const TILT_MAX_DEG = 10;

function TiltImage({ src, alt }: { src: string; alt: string }) {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    setTilt({
      rx: (0.5 - py) * TILT_MAX_DEG * 2,
      ry: (px - 0.5) * TILT_MAX_DEG * 2,
    });
  };

  return (
    <div
      className="h-full w-full transition-transform duration-150 ease-out"
      style={{
        transform: `perspective(500px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
    >
      <picture>
        <source srcSet={`/media/${src}.webp`} type="image/webp" />
        <img
          src={`/media/${src}.png`}
          alt={alt}
          className="h-full w-full object-contain transition-transform duration-300 hover:scale-110"
        />
      </picture>
    </div>
  );
}

export function HeroGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [parallaxOn, setParallaxOn] = useState(false);

  useEffect(() => {
    let raf = 0;
    const handleScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = containerRef.current;
        if (!el) return;
        setScrollOffset(-el.getBoundingClientRect().top);
      });
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Parallax is a wide-screen effect: on the 4-column phone layout the
    // grid is only a few rows deep and drifting images just look jittery.
    const mq = window.matchMedia("(min-width: 640px)");
    const syncParallax = () => setParallaxOn(mq.matches);
    syncParallax();
    mq.addEventListener("change", syncParallax);

    return () => {
      mq.removeEventListener("change", syncParallax);
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="mx-auto grid w-full grid-cols-4 gap-2 sm:grid-cols-6 sm:gap-5 lg:gap-7"
    >
      {ALL_CELLS.map(({ col, row, src, alt }, k) => {
        // Phone layout: 4 columns, first 8 images in rows 1-2, the name in
        // row 3, the last 8 in rows 4-5 (16 images = an exact 4x4 around
        // the text). Wide layout keeps the explicit 6-column placement.
        const mobileCol = (k % 4) + 1;
        const mobileRow = k < 8 ? Math.floor(k / 4) + 1 : Math.floor((k - 8) / 4) + 4;
        return (
          <div
            key={src}
            className="hero-cell aspect-square p-1 [grid-column-start:var(--mc)] [grid-row-start:var(--mr)] sm:p-3 sm:[grid-column-start:var(--c)] sm:[grid-row-start:var(--r)]"
            style={
              {
                "--c": col,
                "--r": row,
                "--mc": mobileCol,
                "--mr": mobileRow,
                "--delay": `${200 + (col - 1) * 170 + (row - 1) * 45}ms`,
              } as CSSProperties
            }
          >
            <div
              style={{ transform: `translateY(${parallaxOn ? scrollOffset * PARALLAX_DEPTH_BY_ROW[row] : 0}px)` }}
              className="h-full w-full"
            >
              <TiltImage src={src} alt={alt} />
            </div>
          </div>
        );
      })}

      <div className="col-span-4 col-start-1 row-start-3 flex flex-col items-start justify-center py-5 text-left sm:col-start-2 sm:row-start-2 sm:py-4">
        <h1 className="font-display text-2xl font-medium text-ink sm:text-3xl lg:text-4xl">Irene Cheung</h1>
        <p className="mt-1 font-nav text-xs tracking-wide text-muted uppercase lg:text-sm">
          product designer
        </p>
        {/* Forced break instead of a max-w wrap (Irene's call, 2026-10-13):
            "always a 2-liner" needs to hold regardless of viewport, and a
            max-w-driven wrap isn't reliable across breakpoints/font sizes. */}
        <p className="mt-3 text-[15px] leading-snug text-ink lg:text-lg">
          I design internal tools and data workflows
          <br />
          for engineers and researchers.
        </p>
      </div>
    </div>
  );
}
