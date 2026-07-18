import Image from "next/image";
import { CollageVideo } from "@/components/CollageVideo";

export type CollageItem =
  | { type: "image"; src: string; alt: string; width: number; height: number; href?: string; size?: "sm" | "lg" }
  | {
      type: "video";
      webm: string;
      mp4: string;
      posterPng: string;
      posterWebp: string;
      alt: string;
      width: number;
      height: number;
      href?: string;
      size?: "sm" | "lg";
    }
  | { type: "placeholder"; slot: number; width: number; height: number; size?: "sm" | "lg" };

const PRIORITY_COUNT = 8;

// Row-flow "justified gallery": each piece gets a fixed height per
// breakpoint, and its width follows automatically from its own aspect
// ratio (via CSS aspect-ratio) — pieces keep their natural proportions
// instead of being cropped, and wrap responsively with no dead gaps. This
// replaced a CSS-column masonry, which can't give individual items
// different sizes at all (every item is forced to its column's exact
// width). "lg" pieces (the full-background scenes) were bumped to 1.2x and
// "sm" pieces to 0.8x of the size every piece originally shared, then "sm"
// was bumped again to 1.1x of that 0.8x value at Irene's follow-up request
// (110/140/170 -> 121/154/187).
const HEIGHT_CLASS: Record<"sm" | "lg", string> = {
  sm: "h-[121px] sm:h-[154px] xl2:h-[187px]",
  lg: "h-[165px] sm:h-[210px] xl2:h-[255px]",
};

// [mobile, sm, xl2] px heights, mirrored from HEIGHT_CLASS above — Tailwind
// needs the literal class strings, this feeds the `sizes` hint math.
const TIER_HEIGHTS: Record<"sm" | "lg", [number, number, number]> = {
  sm: [121, 154, 187],
  lg: [165, 210, 255],
};

// hover:z-10 lifts the zoomed piece above its neighbors, since these pieces
// float free in the gallery flow rather than sitting in a clipped card.
const HOVER_ZOOM = "transition-transform duration-200 hover:z-10 hover:scale-110";

function sizesFor(width: number, height: number, size: "sm" | "lg") {
  const [base, sm, xl2] = TIER_HEIGHTS[size];
  const ratio = width / height;
  return `(min-width: 1440px) ${Math.round(xl2 * ratio)}px, (min-width: 640px) ${Math.round(sm * ratio)}px, ${Math.round(base * ratio)}px`;
}

function PlaceholderPiece({
  slot,
  width,
  height,
  size,
}: {
  slot: number;
  width: number;
  height: number;
  size: "sm" | "lg";
}) {
  return (
    <div
      className={`flex w-auto shrink-0 items-center justify-center rounded-md bg-[#d9d9d9] ${HEIGHT_CLASS[size]}`}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <p className="px-3 text-center text-sm text-ink">
        {String(slot).padStart(2, "0")}
        <br />
        tbd
      </p>
    </div>
  );
}

function ImagePiece({ item, priority }: { item: Extract<CollageItem, { type: "image" }>; priority: boolean }) {
  const size = item.size ?? "sm";
  const image = (
    <Image
      src={item.src}
      alt={item.alt}
      width={item.width}
      height={item.height}
      sizes={sizesFor(item.width, item.height, size)}
      loading={priority ? undefined : "lazy"}
      priority={priority}
      className={`block w-auto max-w-none shrink-0 rounded-md ${HEIGHT_CLASS[size]} ${HOVER_ZOOM}`}
    />
  );

  if (item.href) {
    const isExternal = item.href.startsWith("http");
    return (
      <a
        href={item.href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="block shrink-0 transition-opacity duration-200 hover:opacity-85 focus-visible:opacity-85"
      >
        {image}
      </a>
    );
  }

  return image;
}

function VideoPiece({ item, priority }: { item: Extract<CollageItem, { type: "video" }>; priority: boolean }) {
  const size = item.size ?? "sm";
  const video = (
    <CollageVideo
      webm={item.webm}
      mp4={item.mp4}
      posterPng={item.posterPng}
      posterWebp={item.posterWebp}
      alt={item.alt}
      priority={priority}
      className={`block w-auto max-w-none shrink-0 rounded-md ${HEIGHT_CLASS[size]} ${HOVER_ZOOM}`}
    />
  );

  if (item.href) {
    const isExternal = item.href.startsWith("http");
    return (
      <a
        href={item.href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="block shrink-0 transition-opacity duration-200 hover:opacity-85 focus-visible:opacity-85"
      >
        {video}
      </a>
    );
  }

  return video;
}

export function MasonryCollage({ items }: { items: CollageItem[] }) {
  return (
    <div className="flex flex-wrap gap-5">
      {items.map((item, index) => {
        const priority = index < PRIORITY_COUNT;
        const size = item.size ?? "sm";
        if (item.type === "placeholder") {
          return (
            <PlaceholderPiece key={index} slot={item.slot} width={item.width} height={item.height} size={size} />
          );
        }
        if (item.type === "video") {
          return <VideoPiece key={index} item={item} priority={priority} />;
        }
        return <ImagePiece key={index} item={item} priority={priority} />;
      })}
    </div>
  );
}
