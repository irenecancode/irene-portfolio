import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { JourneyMap } from "@/components/JourneyMap";
import { Stack } from "@/components/Stack";
import { Footer } from "@/components/Footer";
import { Letter } from "@/components/Letter";
import { BackToTop } from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "About · Irene Cheung",
  description: "My design journey: experience, skills, and stack.",
};

// Same filled-chip style as the Creative page's glossary: band-palette
// fills (white type on the two dark ones), alternating big and small
// (her call, 2026-10-15) so the cloud has rhythm instead of one size, and
// each chip rests at a slight tilt so the row reads hand-placed, not
// gridded; hover straightens it.
const OFFLINE_MOMENTS: { label: string; chip: string; big: boolean; tilt: string }[] = [
  { label: "Dog", tilt: "-rotate-2", chip: "bg-[#fbf3b5] text-ink", big: true },
  { label: "Cat", tilt: "rotate-3", chip: "bg-[#cfe2f3] text-ink", big: false },
  { label: "Plants", tilt: "-rotate-1", chip: "bg-[#d3e2cc] text-ink", big: true },
  { label: "Birks", tilt: "rotate-2", chip: "bg-[#923626] text-white", big: true },
  { label: "Thrifting", tilt: "-rotate-3", chip: "bg-[#f2994a] text-ink", big: true },
  { label: "Video games", tilt: "rotate-1", chip: "bg-navy text-white", big: false },
  { label: "Soccer", tilt: "-rotate-2", chip: "bg-[#cfe2f3] text-ink", big: false },
];

export default function About() {
  return (
    <div id="top" className="flex flex-1 flex-col overflow-x-clip">
      <Header active="about" />

      <main className="flex-1">
        {/* About, rebuilt 2026-10-14 (Irene's call) to share Home/Creative's
            system: full-bleed color bands, white boxes, ink headings, chip
            words — replacing the torn-paper scrapbook panels. */}
        <section className="bg-bg">
          <div className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-10 md:py-16">
            <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
              <div className="max-w-3xl">
                <h1 className="font-display text-[27px] leading-tight font-normal text-ink sm:text-[38px]">
                  Product Designer &amp; Builder.
                  <br />
                  <span className="sm:whitespace-nowrap">Designing professionally since 2021.</span>
                </h1>
                <p className="mt-6 max-w-xl text-lg text-ink">
                  My offline moments: I enjoy the simple little things
                  happening in life.
                </p>
                <ul className="mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-2.5">
                  {OFFLINE_MOMENTS.map(({ label, chip, big, tilt }) => (
                    <li
                      key={label}
                      className={`${chip} ${tilt} ${big ? "text-[25px]" : "text-[20px]"} cursor-default px-3 py-0.5 font-display leading-tight whitespace-nowrap transition-transform duration-200 hover:-translate-y-0.5 hover:rotate-0`}
                    >
                      {label}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mx-auto w-[260px] rounded-xl bg-white p-4 shadow-[0_4px_14px_-2px_rgba(0,0,0,0.14)] sm:w-[300px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/media/about-photo.webp"
                  alt="Irene sitting outside a cafe with her golden retriever leaning against her"
                  width={900}
                  height={1195}
                  className="h-auto w-full rounded-md"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#cfe2f3]">
          <div className="mx-auto w-full max-w-7xl px-6 py-14 sm:px-10 sm:py-16">
            <h2 className="font-display text-[30px] font-normal text-ink sm:text-[36px]">
              My Design Journey Map
            </h2>
            <div className="mt-10 bg-white p-5 shadow-[0_4px_14px_-2px_rgba(0,0,0,0.14)] sm:p-8">
              <JourneyMap />
            </div>
          </div>
        </section>

        <section className="bg-[#d3e2cc]">
          <div className="mx-auto w-full max-w-7xl px-6 py-14 sm:px-10 sm:py-16">
            <Stack />
          </div>
        </section>

        <section>
          <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-6 px-6 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-16">
            <p className="font-display text-[26px] leading-snug font-normal text-ink sm:text-[30px]">
              Open for collaboration and new professional adventures.
              <br />
              Let&apos;s talk.
            </p>
            <a
              href="mailto:irenemycheung@gmail.com"
              aria-label="Email me"
              className="group/mail inline-block shrink-0 p-2"
            >
              <Letter className="w-[101px]" />
            </a>
          </div>
        </section>

        <BackToTop />
      </main>

      <div className="bg-grid-paper">
        <Footer />
      </div>
    </div>
  );
}
