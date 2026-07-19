import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CaseStudy } from "@/components/CaseStudy";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

const MORE_PROJECTS = [
  {
    headline: "Operational Redesign Adopted by Corporate",
    body: "Three years behind the counter, turned into a feedback loop that Blue Bottle's corporate team adopted.",
    tags: ["Adopted", "Survey Design"],
  },
  {
    headline: "Agentic Chat Moderation Tool for YouTube",
    body: "Created a dual-panel moderation dashboard for human moderators to make safe decisions at scale.",
    tags: ["Agentic Experience", "Concept", "Demo"],
  },
] as const;

const RESOURCE_CARDS = [
  {
    label: "CLAUDE.md",
    href: "https://github.com/irenecancode/irene-portfolio/blob/main/CLAUDE.md",
    lines: ["Accessibility Guidelines", "Design Tokens"],
  },
  {
    label: "Tech Stack",
    href: null,
    lines: ["Next.js + Tailwind + TypeScript"],
  },
  {
    label: "Tools I used",
    href: null,
    lines: ["VS Code", "Claude Code", "Figma"],
  },
  {
    label: "Disclaimer",
    href: "https://github.com/irenecancode/irene-portfolio",
    lines: ["Code is public. Artwork and content: all rights reserved."],
  },
] as const;

export default function Home() {
  return (
    <div id="top" className="bg-grid-paper flex flex-1 flex-col">
      <Header active="home" titleAs="h1" />

      <main className="flex-1">
        <Hero />

        <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
          <div className="border-t border-ink/10 pt-16">
            <h2 className="font-display text-[30px] font-normal text-ink">
              Case Studies
            </h2>
            <p className="mt-1 text-base text-ink">Click to see more</p>

            <div className="mx-auto mt-10 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
              <CaseStudy
                attribution="Meta"
                href="/meta"
                imageWebp="/media/case-meta.webp"
                imagePng="/media/case-meta.png"
                imageAlt="MUGSY capture dome shown from inside: a 171-camera rig recording at 11MP and 90Hz"
                headline="The capture dashboard behind Codec Avatars"
                body="Redesigning the internal tool that orchestrates 300+ camera and sensor streams, as the team's only designer and a daily operator of the system. (Details abstracted under NDA)"
                tags={["Internal Tools", "Hardware R&D", "Shipped", "NDA Protected"]}
              />
              <CaseStudy
                attribution="tanmigo"
                href="/tanmigo"
                imageWebp="/media/case-tanmigo.webp"
                imagePng="/media/case-tanmigo.png"
                imageAlt="Tanmigo interface showing a tango video paired with an annotation panel for tagging embrace, footwork, and axis"
                headline="A 0-to-1 video annotation platform for dancers"
                body="Bridging the gap between video discovery and physical practice with a seamless, one-stop annotation experience, designed and built in code with an engineer."
                tags={["TypeScript", "Front-End Development", "Live Product"]}
              />
              <CaseStudy
                attribution="Felidae Conservation Fund"
                imageWebp="/media/case-felidae.webp"
                imagePng="/media/case-felidae.png"
                imageAlt="Wildlife sighting report form, Media Upload step, with an uploaded photo of two ducks and auto-detected camera metadata"
                headline="The submission flow behind Wilde Backyard"
                body="Redesigning the multi-step flow where the public submits trail-camera, home-security, and phone media for wildlife research, shipping the front-end myself. Full case study in progress."
                tags={["Research Tool", "Front-end Development", "Live Product", "Case Study in Progress"]}
              />
              <CaseStudy
                attribution="Claude Code"
                href="/claude-code"
                imageWebp="/media/case-claude-code.webp"
                imagePng="/media/case-claude-code.png"
                imageAlt="Claude Code chat interface mid-conversation, showing a Bash tool call and a permission prompt to allow running git status"
                headline="Developer experience in Claude Code"
                body="Restoring a sense of agency in AI coding tools, tested with a working prototype."
                tags={["Agentic Developer Experience", "Concept", "Prototype"]}
              />
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
          <div className="border-t border-ink/10 pt-16">
            <h2 className="font-display text-[30px] font-normal text-ink">
              More Projects
            </h2>

            <div className="mx-auto mt-10 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
              {MORE_PROJECTS.map((project) => (
                <div key={project.headline}>
                  <h3 className="font-display text-[22px] font-medium text-ink text-balance">
                    {project.headline}
                  </h3>
                  <p className="mt-3 text-base leading-6 text-ink">{project.body}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-navy px-3 py-1 text-xs font-medium text-navy transition-colors duration-200 hover:bg-navy-tint"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
          <div className="border-t border-ink/10 pt-16 pb-4 text-center">
            <h2 className="font-display text-[30px] font-normal text-ink">
              Open Resource
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-ink">
              Building a portfolio can be fun, but it&apos;s also tedious.
              I&apos;d rather we learn from each other. If you&apos;re a
              designer who ships your own site,{" "}
              <a
                href="https://github.com/irenecancode/irene-portfolio"
                className="text-navy underline-offset-4 transition-colors duration-200 hover:text-accent-deep hover:underline focus-visible:text-accent-deep focus-visible:underline"
              >
                the repo is public
              </a>
              .
            </p>
          </div>
        </div>

        <div className="py-14">
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 sm:px-10 lg:grid-cols-4">
            {RESOURCE_CARDS.map(({ label, href, lines }) => (
              <div
                key={label}
                className="rounded-md bg-surface p-6 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.15)]"
              >
                {href ? (
                  <a
                    href={href}
                    className="font-nav text-sm font-medium text-navy underline-offset-4 transition-colors duration-200 hover:text-accent-deep hover:underline focus-visible:text-accent-deep focus-visible:underline"
                  >
                    {label}
                  </a>
                ) : (
                  <p className="font-nav text-sm font-medium text-navy">{label}</p>
                )}
                <div className="mt-3 flex flex-col gap-1">
                  {lines.map((line) => (
                    <p key={line} className="text-base text-ink">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <BackToTop />
      </main>

      <Footer />
    </div>
  );
}
