import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { JourneyMap } from "@/components/JourneyMap";
import { PaperBacking } from "@/components/PaperBacking";
import { Stack } from "@/components/Stack";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "About · Irene Cheung",
  description: "My design journey: experience, skills, and stack.",
};

export default function About() {
  return (
    /* The scrapbook decorations (torn paper, the photo's backing) are meant to
       run off the page edge. Between roughly 1000px and 1300px the container is
       nearly as wide as the window, so that bleed used to push the document
       wider than the viewport and scroll the whole page sideways. clip, not
       hidden: it crops without creating a scroll container. */
    <div id="top" className="bg-grid-paper flex flex-1 flex-col overflow-x-clip">
      <Header active="about" />

      <main className="flex-1">
        <section className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-10 md:py-16">
          <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <h1 className="font-display text-[38px] leading-tight font-normal text-ink">
                Product Designer &amp; Builder.
                <br />
                <span className="sm:whitespace-nowrap">Designing professionally since 2021.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-ink">
                My offline moments: I enjoy the simple little things happening
                in life. I love dogs and cats, plants, walking around in my
                Birks, thrifting, collecting antique goods, trying new recipes,
                playing video games, and watching soccer.
              </p>
            </div>

            {/* Photo collage: torn-paper backing, tilted photo on top */}
            <div className="relative mx-auto w-[280px] sm:w-[330px]">
              <img
                src="/media/torn-paper.png"
                alt=""
                className="absolute -top-8 -left-10 w-[125%] max-w-none -rotate-2"
              />
              <img
                src="/media/about-photo.webp"
                alt="Irene sitting outside a cafe with her golden retriever leaning against her"
                className="relative ml-auto mt-3 w-[82%] rotate-3 rounded-sm shadow-[0_18px_45px_-18px_rgba(0,0,0,0.35)]"
              />
            </div>
          </div>
        </section>

        <div className="mx-auto mt-14 mb-32 w-full max-w-6xl px-6 sm:px-10">
          <div className="relative">
            {/* Vertical bleed is fixed px, not a percentage: percentages track
                the panel's height, so a tall mobile panel bled further and
                further past the viewport. */}
            <PaperBacking
              src="/media/journey-paper.png"
              naturalWidth={483}
              naturalHeight={368}
              topSlice={40}
              bottomSlice={38}
              fill="#F1EEE4"
              fillInset={{ left: "0.5%", right: "0.5%" }}
              className="inset-x-[-6%] -top-5 -bottom-6 sm:inset-x-[-7%] sm:-top-8 sm:-bottom-10"
            />
            <div className="relative px-[5%] pt-[4%] pb-[5%]">
              <h2 className="font-sans text-[30px] font-semibold text-accent">
                My Design Journey Map
              </h2>
              <JourneyMap />
            </div>
          </div>
        </div>

        <section className="mx-auto w-full max-w-4xl px-6 pt-16 pb-36 sm:px-10">
          <div className="relative">
            {/* The old -13% side bleed measured 431px inside a 390px viewport,
                which was the page's only horizontal overflow. */}
            <PaperBacking
              src="/media/stack-paper.png"
              naturalWidth={768}
              naturalHeight={657}
              topSlice={80}
              bottomSlice={575}
              fill="#F3EFE7"
              fillInset={{ left: "11.1%", right: "8.9%" }}
              className="inset-x-[-6%] -top-8 -bottom-10 sm:inset-x-[-13%] sm:-top-12 sm:-bottom-16"
            />
            <div className="relative px-[8%] pt-[7%] pb-[12%]">
              <Stack />
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-5xl px-6 pb-8 text-center sm:px-10">
          <p className="text-[28px] text-ink lg:whitespace-nowrap">
            Open for collaboration and new professional adventures.
            <br />
            Let&apos;s talk.
          </p>
        </section>

        <BackToTop />
      </main>

      <Footer />
    </div>
  );
}
