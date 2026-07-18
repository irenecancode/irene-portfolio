import Image from "next/image";
import { CollageVideo } from "@/components/CollageVideo";

export type CollageItem =
  | { type: "image"; src: string; alt: string; width: number; height: number; href?: string }
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
    }
  | { type: "placeholder"; slot: number; width: number; height: number };

// Above-the-fold pieces (roughly the first 2 rows at the 4-column desktop
// breakpoint) load eagerly; everything after that is lazy.
const PRIORITY_COUNT = 8;

// Matches the collage's column widths at each breakpoint (see
// MasonryCollage's columns-2 / xl2:columns-3) so the browser fetches an
// appropriately sized file instead of the largest one.
const SIZES = "(min-width: 1440px) 344px, 46vw";

function PlaceholderPiece({ slot, width, height }: { slot: number; width: number; height: number }) {
  return (
    <div
      className="flex w-full items-center justify-center rounded-md bg-[#d9d9d9]"
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <p className="text-center text-sm text-ink">
        {String(slot).padStart(2, "0")}
        <br />
        tbd
      </p>
    </div>
  );
}

function ImagePiece({ item, priority }: { item: Extract<CollageItem, { type: "image" }>; priority: boolean }) {
  const image = (
    <Image
      src={item.src}
      alt={item.alt}
      width={item.width}
      height={item.height}
      sizes={SIZES}
      loading={priority ? undefined : "lazy"}
      priority={priority}
      className="block h-auto w-full rounded-md"
    />
  );

  if (item.href) {
    const isExternal = item.href.startsWith("http");
    return (
      <a
        href={item.href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="block transition-opacity duration-200 hover:opacity-85 focus-visible:opacity-85"
      >
        {image}
      </a>
    );
  }

  return image;
}

function VideoPiece({ item, priority }: { item: Extract<CollageItem, { type: "video" }>; priority: boolean }) {
  const video = (
    <CollageVideo
      webm={item.webm}
      mp4={item.mp4}
      posterPng={item.posterPng}
      posterWebp={item.posterWebp}
      alt={item.alt}
      priority={priority}
    />
  );

  if (item.href) {
    const isExternal = item.href.startsWith("http");
    return (
      <a
        href={item.href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="block transition-opacity duration-200 hover:opacity-85 focus-visible:opacity-85"
      >
        {video}
      </a>
    );
  }

  return video;
}

export function MasonryCollage({ items }: { items: CollageItem[] }) {
  return (
    <div className="columns-2 gap-5 xl2:columns-3">
      {items.map((item, index) => {
        const priority = index < PRIORITY_COUNT;
        return (
          <div key={index} className="mb-5 break-inside-avoid">
            {item.type === "placeholder" && (
              <PlaceholderPiece slot={item.slot} width={item.width} height={item.height} />
            )}
            {item.type === "image" && <ImagePiece item={item} priority={priority} />}
            {item.type === "video" && <VideoPiece item={item} priority={priority} />}
          </div>
        );
      })}
    </div>
  );
}
