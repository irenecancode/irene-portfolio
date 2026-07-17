import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { JourneyMap } from "@/components/JourneyMap";
import { Stack } from "@/components/Stack";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "About · Irene Cheung",
  description: "My design journey: experience, skills, and stack.",
};

export default function About() {
  return (
    <div id="top" className="bg-grid-paper flex flex-1 flex-col">
      <Header active="about" />

      <main className="flex-1">
        <section className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-10 md:py-16">
          <div className="max-w-xl">
            <h1 className="font-display text-[38px] leading-tight font-normal text-ink text-balance">
              Product Designer &amp; Builder.
              <br />
              Designing professionally since 2021.
            </h1>
            <p className="mt-6 text-lg text-ink">
              When I&apos;m not designing, you can find me gaming, hanging out
              with my dog, dancing tango, or cheering for my favorite soccer
              team.
            </p>
            <h2 className="mt-10 font-sans text-[30px] font-semibold text-accent">
              My Design Journey Map
            </h2>
          </div>
        </section>

        <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
          <JourneyMap />
        </div>

        <section className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-10">
          <Stack />
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
