import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "Creative · Irene Cheung",
  description: "Illustration and creative work by Irene Cheung, product designer.",
};

type Piece = { src: string; width: number; height: number; alt: string };

type Series = {
  id: string;
  title: string;
  tags: string[];
  /** Full-bleed band color. Whole class strings, written out literally so
      Tailwind's scanner can see them. */
  bg: string;
  /** Light text on dark bands. */
  onDark?: boolean;
  /** Fixed box width in px at sm and up. The set spans the whole rail:
      first column flush with the title, last flush with the right edge,
      the leftover width becoming the gaps between boxes. */
  boxW: number;
  /**
   * Her Figma placement: identical boxes in vertical columns, each column
   * nudged up or down so the set reads as a gentle wave. `pieces` stay in
   * reading (row-major) order; `cols` splits them into columns.
   */
  stagger: {
    cols: number;
    /** Per-column vertical offset, in box heights. Only differences matter
        (the smallest becomes 0). */
    offsets: number[];
    /** width / height of one box, used to turn box-heights into % padding. */
    ratio: number;
    /** Tailwind aspect class for the box, written literally. */
    boxClass: string;
    fit: "cover" | "contain";
    /** Padding around contained art, a Tailwind p-* class (default p-4). */
    pad?: string;
  };
  pieces: Piece[];
};

/** Her pre-composed white tiles (Procreate canvases exported as-is). */
const series = (n: string, width: number, height: number, alt: string): Piece => ({
  src: `/media/series/${n}.webp`,
  width,
  height,
  alt,
});

const img = (n: string, width: number, height: number, alt: string): Piece => ({
  src: `/media/trim/${n}.webp`,
  width,
  height,
  alt,
});

/*
 * Creative page, rebuilt 2026-10-14 (Irene's call, from a reference of
 * full-bleed colored sections holding white cards): five series, each a
 * colored band in the order she gave — light yellow, dark terracotta,
 * light blue, light terracotta, dark blue (the site navy) — with a
 * left-aligned title, tag chips, and every piece in its own white box.
 * Nature (Montessori) and Motions were cut on 2026-10-15.
 *
 * Which pieces belong to which series is MY sort, not hers: she named the
 * series and tags but not the files. Move a piece by moving its line
 * between arrays.
 */
const SERIES: Series[] = [
  {
    id: "dog-series",
    title: "Dog series",
    tags: ["Procreate"],
    bg: "bg-[#fbf3b5]",
    boxW: 209,
    stagger: {
      cols: 4,
      // From her Figma: col 2 sits highest, col 4 lowest.
      offsets: [0, -0.25, -0.07, 0.25],
      ratio: 1422 / 1777,
      boxClass: "aspect-[1422/1777]",
      fit: "cover",
    },
    pieces: [
      series("dog-1", 640, 800, "Illustration of a black-and-tan shiba inu standing and smiling"),
      series("dog-2", 640, 800, "Illustration of a red shiba inu sitting"),
      series("dog-3", 640, 800, "Illustration of a fluffy white Samoyed with its tongue out"),
      series("dog-4", 640, 800, "Illustration of a golden retriever's face in a cup of coffee"),
      series("dog-5", 640, 800, "Illustration of a tricolor puppy lying on its back with a cherry on its belly"),
      series("dog-6", 640, 800, "Illustration of a golden retriever puppy wearing an orange bandana"),
      series("dog-7", 640, 800, "Illustration of a white dog curled up asleep on a pink pillow"),
      series("dog-8", 640, 800, "Illustration of a husky mid-leap"),
    ],
  },
  {
    id: "cafe-series",
    title: "Cafe series",
    tags: ["Procreate"],
    bg: "bg-[#923626]",
    onDark: true,
    boxW: 209,
    stagger: {
      cols: 4,
      offsets: [0, 0.15, 0.28, 0.14],
      ratio: 1422 / 1777,
      boxClass: "aspect-[1422/1777]",
      fit: "cover",
    },
    pieces: [
      series("cafe-1", 640, 800, "Illustration of a bamboo matcha whisk dripping green tea"),
      series("cafe-2", 640, 800, "Illustration of a cornet pastry filled with cream"),
      series("cafe-3", 640, 800, "Illustration of a pour-over coffee set with a dripper and glass server"),
      series("cafe-4", 640, 800, "Illustration of a slice of chocolate layer cake"),
      series("cafe-5", 640, 800, "Illustration of a latte with latte art in a speckled cup and saucer"),
      series("cafe-6", 640, 800, "Illustration of an iced matcha latte in a tall glass"),
      series("cafe-7", 640, 800, "Illustration of thick toast with a pat of butter"),
      series("cafe-8", 640, 800, "Illustration of a golden-brown baked pastry"),
    ],
  },
  {
    id: "animal-ui-icons",
    title: "Animal UI icons",
    tags: ["Charlie's Acres", "Illustrator"],
    bg: "bg-[#cfe2f3]",
    // 0.7x of the previous 278px boxes (195px), in her staggered pattern.
    boxW: 195,
    stagger: {
      cols: 4,
      offsets: [0, 0.18, 0.06, 0.26],
      ratio: 1,
      boxClass: "aspect-square",
      fit: "contain",
      // 1.2x the previous p-4 (16px).
      pad: "p-[19px]",
    },
    pieces: [
      img("ui-icon-01", 266, 362, "Line icon of a duck, facing forward"),
      img("ui-icon-03", 221, 316, "Line icon of a goose"),
      img("ui-icon-04", 263, 201, "Line icon of a pig"),
      img("ui-icon-05", 192, 258, "Line icon of a rooster"),
      img("ui-icon-06", 266, 181, "Line icon of a cow"),
      img("ui-icon-07", 199, 218, "Line icon of a sheep"),
      img("ui-icon-08", 176, 245, "Line icon of a turkey"),
      img("ui-icon-10", 260, 218, "Line icon of a goat"),
    ],
  },
  {
    id: "animal-series",
    title: "Animal series",
    tags: ["Charlie's Acres", "Procreate"],
    bg: "bg-[#f2cfc4]",
    // 1.3x of the previous 209px boxes.
    boxW: 272,
    stagger: {
      cols: 4,
      // A shallow valley: the two middle pieces hang lowest.
      offsets: [0, 0.16, 0.32, 0.16],
      ratio: 1422 / 1583,
      boxClass: "aspect-[1422/1583]",
      fit: "contain",
    },
    pieces: [
      series("animal-1", 640, 703, "Illustration of geese, ducks and a chicken gathered together"),
      series("animal-2", 640, 712, "Illustrations of a sheep in a wheelchair, a calf in a jersey, a sleeping pig and a tray of piglets"),
      series("animal-3", 640, 712, "Illustrations of sheep faces, including two lambs touching noses"),
      series("animal-4", 640, 712, "Illustrations of a turkey, sheep, calves and a cow eating grass"),
    ],
  },
  {
    id: "pattern-design",
    title: "Pattern design",
    tags: ["Procreate", "Photoshop"],
    bg: "bg-navy",
    onDark: true,
    // 0.7x of the previous ~584px boxes (409px), in her staggered pattern.
    boxW: 409,
    stagger: {
      cols: 2,
      // Right column hangs half a box lower (was 0.22) so the four mockups
      // zig-zag clearly (her call, 2026-10-15).
      offsets: [0, 0.5],
      ratio: 4 / 3,
      boxClass: "aspect-[4/3]",
      fit: "cover",
    },
    pieces: [
      img("bottega-mockup-01", 800, 600, "Folded fabric swatches printed with the Bottega Lily character pattern in terracotta and blush"),
      img("bottega-mockup-02", 800, 600, "Roll of wrapping paper printed with the Bottega Lily character pattern on pink"),
      img("bottega-mockup-03", 800, 533, "Close-up of a tote bag printed with a bird character pattern in sage green"),
      img("bottega-mockup-04", 800, 533, "Close-up of a tote bag printed with a bird character pattern in terracotta"),
    ],
  },
];

/*
 * Glossary chips (her words, 2026-10-15): two per series, in section order,
 * each filled with its band's color and linking to that band. Size follows
 * how many pieces the series holds, on a much smaller scale than the first
 * version.
 */
const GLOSSARY: { seriesId: string; words: string[] }[] = [
  { seriesId: "dog-series", words: ["Dog", "Shiba"] },
  { seriesId: "cafe-series", words: ["Pour over", "French toast"] },
  { seriesId: "animal-ui-icons", words: ["UI icons", "Duck"] },
  { seriesId: "animal-series", words: ["Sheep", "Sanctuary"] },
  { seriesId: "pattern-design", words: ["Terracotta", "Bouquet"] },
];

// Same resting tilts as the About page's chips; hover straightens them.
const TILTS = ["-rotate-2", "rotate-3", "-rotate-1", "rotate-2", "-rotate-3", "rotate-1"];

const GLOSSARY_BY_SERIES = GLOSSARY.flatMap(({ seriesId, words }) => {
  const s = SERIES.find((x) => x.id === seriesId)!;
  return words.map((word) => ({
    word,
    seriesId,
    count: s.pieces.length,
    bg: s.bg,
    onDark: !!s.onDark,
  }));
});

// Shuffled (her call, 2026-10-15) so the colors and sizes interleave
// instead of reading as five pairs. A fixed order, not Math.random(), so
// server and client render the same thing; no two neighbors share a fill.
const CHIP_ORDER = [
  "Dog",
  "Pour over",
  "Sheep",
  "UI icons",
  "Terracotta",
  "Shiba",
  "Sanctuary",
  "French toast",
  "Duck",
  "Bouquet",
];

const GLOSSARY_CHIPS = CHIP_ORDER.map(
  (word) => GLOSSARY_BY_SERIES.find((c) => c.word === word)!,
);

/**
 * Her Figma placement: identical boxes stacked in columns, each column
 * nudged down by a different amount so the set reads as a gentle wave.
 * The nudge is padding-top as a % of the column's own width — percentage
 * padding resolves against the grid area's width, which here equals one
 * box's width, so `offset * (1 / ratio)` is exactly that many box-heights.
 * (margin-top/translate would either not reserve the space or not scale.)
 * Below sm the columns drop to a plain 2-up grid with no offset.
 */
function StaggerColumns({ series, priority }: { series: Series; priority: boolean }) {
  const cfg = series.stagger;
  const min = Math.min(...cfg.offsets);
  const columns: Piece[][] = Array.from({ length: cfg.cols }, () => []);
  series.pieces.forEach((piece, i) => columns[i % cfg.cols].push(piece));

  return (
    <div
      className="mt-10 grid w-full grid-cols-2 gap-2 sm:grid-cols-[repeat(var(--n),var(--w))] sm:justify-between"
      style={{ "--n": cfg.cols, "--w": `${series.boxW}px` } as CSSProperties}
    >
      {columns.map((column, c) => (
        <div
          key={c}
          className="flex flex-col gap-2 sm:pt-[var(--pt)]"
          style={{ "--pt": `${((cfg.offsets[c] - min) / cfg.ratio) * 100}%` } as CSSProperties}
        >
          {column.map((piece) => (
            <div
              key={piece.src}
              className={`${cfg.boxClass} relative overflow-hidden bg-white shadow-[0_4px_14px_-2px_rgba(0,0,0,0.14)]`}
            >
              <Image
                src={piece.src}
                alt={piece.alt}
                width={piece.width}
                height={piece.height}
                sizes="(min-width: 640px) 300px, 45vw"
                priority={priority}
                loading={priority ? undefined : "lazy"}
                className={`absolute inset-0 h-full w-full transition-transform duration-300 hover:scale-105 ${
                  cfg.fit === "cover" ? "object-cover" : `object-contain ${cfg.pad ?? "p-4"}`
                }`}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function Creative() {
  return (
    <div id="top" className="flex flex-1 flex-col">
      <Header active="creative" />

      <main className="flex-1">
        <section className="mx-auto w-full max-w-7xl px-6 pt-10 pb-12 sm:px-10 md:pt-16 md:pb-14">
          <h1 className="font-display text-[27px] leading-tight font-normal text-ink text-balance sm:text-[38px]">
            Creative
          </h1>

          {/* Glossary: filled chips in each series' band color (white type on
              the two dark bands), sized by how many pieces the series
              holds. Each chip jumps to its section. */}
          <nav aria-label="Jump to a series" className="mt-6">
            <ul className="flex flex-wrap items-center gap-x-2.5 gap-y-2.5">
              {GLOSSARY_CHIPS.map(({ word, count, seriesId, bg, onDark }, n) => (
                <li key={word}>
                  <a
                    href={`#${seriesId}`}
                    className={`${bg} ${onDark ? "text-white" : "text-ink"} ${TILTS[n % TILTS.length]} inline-block whitespace-nowrap px-3 py-0.5 font-display leading-tight transition-transform duration-200 hover:-translate-y-0.5 hover:rotate-0 focus-visible:-translate-y-0.5 focus-visible:rotate-0`}
                    style={{ fontSize: `${15 + count * 1.25}px` }}
                  >
                    {word}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        {SERIES.map((series, i) => (
          <section
            key={series.id}
            id={series.id}
            className={`${series.bg} ${series.onDark ? "text-white" : "text-ink"}`}
          >
            <div className="mx-auto w-full max-w-7xl px-6 py-14 sm:px-10 sm:py-16">
              <h2 className="font-display text-[30px] font-normal sm:text-[36px]">{series.title}</h2>
              {series.tags.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {series.tags.map((tag) => (
                    <li
                      key={tag}
                      className="cursor-default bg-white px-2.5 py-0.5 text-[11px] font-medium text-ink transition-[transform,background-color,color] duration-200 hover:-translate-y-0.5 hover:bg-ink hover:text-white"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
              <StaggerColumns series={series} priority={i === 0} />
            </div>
          </section>
        ))}

        <BackToTop />
      </main>

      <div className="bg-grid-paper">
        <Footer />
      </div>
    </div>
  );
}
