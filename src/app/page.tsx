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
    <div id="top" className="flex flex-1 flex-col">
      <Header active="home" titleAs="h1" />

      <main className="flex-1">
        <Hero />

        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
          <div className="border-t border-ink/10 pt-16">
            <h2 className="font-display text-[30px] font-normal text-ink">
              Case Studies
            </h2>

            <div className="mx-auto mt-10 mb-16 grid w-full grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-10">
              <CaseStudy
                attribution="Meta"
                href="/meta"
                imageWebp="/media/case-meta.webp"
                imagePng="/media/case-meta.png"
                imageAlt="Abstract wireframe dashboard with two tile grids side by side, marked NDA, with a close button in the corner"
                headline="The capture dashboard behind Codec Avatars"
                body="Redesigning the internal tool that orchestrates 300+ camera and sensor streams."
                tags={["Internal Tools", "Hardware R&D", "Shipped", "NDA Protected"]}
              />
              <CaseStudy
                attribution="tanmigo"
                href="/tanmigo"
                imageWebp="/media/case-tanmigo.webp"
                imagePng="/media/case-tanmigo.png"
                imageAlt="Three recreated Tanmigo annotation cards: dancers' timestamped notes tagging moments like an ocho and a sacada, one card still empty"
                headline="A 0-to-1 video annotation platform for dancers"
                body="Bridging the gap between video discovery and physical practice, designed and built in code with an engineer."
                tags={["TypeScript", "Front-End Development", "Live Product"]}
              />
              <CaseStudy
                attribution="Claude Code"
                href="/claude-code"
                imageWebp="/media/case-claude-code.webp"
                imagePng="/media/case-claude-code.png"
                imageAlt="Recreated Context panel from the Claude Code redesign concept: a timestamped log of the agent's edits, each with a reset link"
                headline="Developer experience in Claude Code"
                body="Restoring a sense of agency in AI coding tools, tested with a working prototype."
                tags={["Agentic Developer Experience", "Concept", "Prototype"]}
              />
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
          <div className="border-t border-ink/10 pt-16">
            <h2 className="font-display text-[30px] font-normal text-ink">
              More Projects
            </h2>

            <div className="mx-auto mt-10 mb-16 grid w-full grid-cols-1 gap-x-16 gap-y-12 sm:grid-cols-2">
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
                        className="border border-accent-deep px-3 py-1 text-xs font-medium text-accent-deep transition-colors duration-200 hover:bg-chip"
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

        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
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
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-3 sm:px-10">
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

      <div className="bg-grid-paper">
        <Footer />
      </div>
    </div>
  );
}
