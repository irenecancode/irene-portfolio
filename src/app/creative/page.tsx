import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { MasonryCollage, type CollageItem } from "@/components/MasonryCollage";
import { CreativeJumpNav, type JumpNavSection } from "@/components/CreativeJumpNav";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "Creative · Irene Cheung",
  description: "Illustration and creative work by Irene Cheung, product designer.",
};

const SECTIONS: JumpNavSection[] = [
  { id: "drawings", label: "Drawings" },
  { id: "ui-icons", label: "UI Icons" },
  { id: "bottega-lily", label: "Bottega Lily" },
];

// Not ranked by strength — Irene hasn't given a final order yet and more
// pieces are still coming. Deliberately shuffled (not upload order) so the
// few busier, full-background scenes are spaced out among the plain
// isolated-subject pieces rather than clumped together. Reorder freely;
// position is the only thing that determines both visual slot and tab
// order (see MasonryCollage). "Untitled_Artwork 197" (the croissant piece)
// was removed at Irene's request.
const DRAWING_ITEMS: CollageItem[] = [
  { type: "image", src: "/media/creative-12.webp", width: 587, height: 800, alt: "Illustration of a fluffy white dog walking with a red toy in its mouth" },
  { type: "image", src: "/media/creative-21.webp", width: 800, height: 725, alt: "Illustration of a gnome and a cat standing beneath a cherry blossom tree on a city street", size: "lg" },
  { type: "image", src: "/media/creative-08.webp", width: 800, height: 620, alt: "Illustration of two ripe, spotted bananas" },
  { type: "image", src: "/media/creative-17.webp", width: 734, height: 800, alt: "Illustration of a husky mid-leap" },
  { type: "image", src: "/media/creative-04.webp", width: 800, height: 618, alt: "Illustration of a group of dogs dancing together at a party", size: "lg" },
  { type: "image", src: "/media/creative-20.webp", width: 800, height: 668, alt: "Illustration of a gnome and a cat drinking beer together" },
  { type: "image", src: "/media/creative-01.webp", width: 800, height: 709, alt: "Illustration of two wooden crates overflowing with apples" },
  {
    type: "video",
    webm: "/media/creative-video-2.webm",
    hevc: "/media/creative-video-2-hevc.mp4",
    mp4: "/media/creative-video-2.mp4",
    posterPng: "/media/creative-video-2-poster.png",
    posterWebp: "/media/creative-video-2-poster.webp",
    width: 640,
    height: 640,
    alt: "Looping animation of a girl in a yellow raincoat holding an umbrella in the rain",
  },
  { type: "image", src: "/media/creative-16.webp", width: 490, height: 800, alt: "Illustration of a shiba inu standing and smiling, tail curled up" },
  { type: "image", src: "/media/creative-05.webp", width: 800, height: 618, alt: "Illustration of dogs working in a bakery decorated for Lunar New Year", size: "lg" },
  { type: "image", src: "/media/creative-13.webp", width: 800, height: 550, alt: "Illustration of a tricolor puppy lying on its back playfully" },
  { type: "image", src: "/media/creative-24.webp", width: 800, height: 596, alt: "Illustration of three dogs wearing Santa hats" },
  { type: "image", src: "/media/creative-09.webp", width: 800, height: 360, alt: "Illustration of a rainbow trout" },
  { type: "image", src: "/media/creative-19.webp", width: 800, height: 672, alt: "Illustration of a girl with blue hair sweeping with a broom beside a black cat" },
  { type: "image", src: "/media/creative-03.webp", width: 800, height: 618, alt: "Illustration of four dogs sitting nervously in a row, paws pressed together", size: "lg" },
  { type: "image", src: "/media/creative-14.webp", width: 555, height: 800, alt: "Illustration of a golden retriever puppy portrait wearing an orange bandana" },
  { type: "image", src: "/media/creative-11.webp", width: 800, height: 787, alt: "Illustration of two mandarin ducks in grass" },
  {
    type: "video",
    webm: "/media/creative-video-1.webm",
    hevc: "/media/creative-video-1-hevc.mp4",
    mp4: "/media/creative-video-1.mp4",
    posterPng: "/media/creative-video-1-poster.png",
    posterWebp: "/media/creative-video-1-poster.webp",
    width: 640,
    height: 882,
    alt: "Looping animation of a fluffy white dog pouring food into a bowl",
  },
  { type: "image", src: "/media/creative-07.webp", width: 800, height: 581, alt: "Illustration of a small brown dog curled up asleep" },
  { type: "image", src: "/media/creative-22.webp", width: 800, height: 644, alt: "Illustration of dogs and cats working behind the counter of a shop" },
  { type: "image", src: "/media/creative-02.webp", width: 632, height: 800, alt: "Illustration of a bundle of vegetables: kohlrabi, carrots, and kale tied together" },
  { type: "image", src: "/media/creative-18.webp", width: 800, height: 408, alt: "Illustration of a spotted dog curled up asleep on a pink blanket" },
  { type: "image", src: "/media/creative-10.webp", width: 800, height: 794, alt: "Illustration of a shiba inu standing in profile with a small flower marking" },
  { type: "image", src: "/media/creative-23.webp", width: 800, height: 769, alt: "Illustration of three sheep and goat faces" },
  { type: "image", src: "/media/creative-06.webp", width: 800, height: 461, alt: "Illustration of a golden dog curled up asleep on a pillow" },
];

type GridImage = { src: string; width: number; height: number; alt: string };

// Charlie's Acres farm-animal line icon set. Uniform library grid (not
// masonry) — 4x2 at desktop, so exactly 8 icons. Removed the balloon-animal
// icon and the duck side-profile (redundant with the front-facing duck) at
// Irene's request.
const UI_ICON_ITEMS: GridImage[] = [
  { src: "/media/ui-icon-01.webp", width: 296, height: 400, alt: "Line icon of a duck, facing forward" },
  { src: "/media/ui-icon-03.webp", width: 249, height: 357, alt: "Line icon of a goose" },
  { src: "/media/ui-icon-04.webp", width: 294, height: 227, alt: "Line icon of a pig" },
  { src: "/media/ui-icon-05.webp", width: 216, height: 288, alt: "Line icon of a rooster" },
  { src: "/media/ui-icon-06.webp", width: 300, height: 216, alt: "Line icon of a cow" },
  { src: "/media/ui-icon-07.webp", width: 232, height: 250, alt: "Line icon of a sheep" },
  { src: "/media/ui-icon-08.webp", width: 206, height: 278, alt: "Line icon of a turkey" },
  { src: "/media/ui-icon-10.webp", width: 296, height: 250, alt: "Line icon of a goat" },
];

// Bottega Lily product mockups. Uniform 2x2 grid.
const BOTTEGA_LILY_ITEMS: GridImage[] = [
  { src: "/media/bottega-mockup-01.webp", width: 800, height: 600, alt: "Folded fabric swatches printed with the Bottega Lily character pattern in terracotta and blush" },
  { src: "/media/bottega-mockup-02.webp", width: 800, height: 600, alt: "Roll of wrapping paper printed with the Bottega Lily character pattern on pink" },
  { src: "/media/bottega-mockup-03.webp", width: 800, height: 533, alt: "Close-up of a tote bag printed with a bird character pattern in sage green" },
  { src: "/media/bottega-mockup-04.webp", width: 800, height: 533, alt: "Close-up of a tote bag printed with a bird character pattern in terracotta" },
];

export default function Creative() {
  return (
    <div id="top" className="bg-grid-paper flex flex-1 flex-col">
      <Header active="creative" />

      <main className="flex-1">
        <section className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-10 md:py-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_260px] md:items-start">
            <div className="max-w-xl">
              <h1 className="font-display text-[38px] leading-tight font-normal text-ink text-balance">
                Creative
              </h1>
              <p className="mt-4 font-display text-xl font-normal text-ink">
                Illustration and other work I make outside of product design.
              </p>
              <p className="mt-6 text-lg text-ink">
                I enjoy illustration. It&apos;s always been my creative
                outlet, and my therapy when I feel stressed.
              </p>
              <p className="mt-6 text-lg text-ink">
                Lately I&apos;ve started a new e-shop selling digital prints
                on Etsy named{" "}
                <a
                  href="https://www.etsy.com/shop/BottegaLily"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-deep underline transition-opacity duration-200 hover:opacity-75 focus-visible:opacity-75"
                >
                  Bottega Lily
                </a>
                . You can follow my{" "}
                <a
                  href="https://www.instagram.com/dayday_tipsy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-deep underline transition-opacity duration-200 hover:opacity-75 focus-visible:opacity-75"
                >
                  Instagram
                </a>{" "}
                for new artwork.
              </p>
            </div>

            <div className="w-full max-w-[260px] md:justify-self-end">
              <Image
                src="/media/bottega-lily-logo.webp"
                alt="Bottega Lily logo"
                width={661}
                height={800}
                priority
                className="h-auto w-full"
              />
            </div>
          </div>
        </section>

        <CreativeJumpNav sections={SECTIONS} />

        <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
          <section id="drawings" className="scroll-mt-20 border-t border-ink/10 pt-16">
            <h2 className="font-display text-[30px] font-normal text-ink">Drawings</h2>
            <div className="mt-8">
              <MasonryCollage items={DRAWING_ITEMS} />
            </div>
          </section>

          <section id="ui-icons" className="scroll-mt-20 border-t border-ink/10 pt-16">
            <h2 className="font-display text-[30px] font-normal text-ink">UI Icons</h2>
            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {UI_ICON_ITEMS.map((item) => (
                <div key={item.src} className="flex aspect-square items-center justify-center p-4 hover:z-10">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    sizes="(min-width: 640px) 25vw, 45vw"
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-200 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </section>

          <section id="bottega-lily" className="scroll-mt-20 border-t border-ink/10 py-16">
            <h2 className="font-display text-[30px] font-normal text-ink">Bottega Lily</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {BOTTEGA_LILY_ITEMS.map((item) => (
                <div
                  key={item.src}
                  className="overflow-hidden rounded-md bg-surface shadow-[0_20px_50px_-25px_rgba(0,0,0,0.15)]"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    sizes="(min-width: 640px) 45vw, 90vw"
                    loading="lazy"
                    className="aspect-[4/3] h-auto w-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>

        <BackToTop />
      </main>

      <Footer />
    </div>
  );
}
