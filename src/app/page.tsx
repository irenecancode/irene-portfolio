import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectChips } from "@/components/ProjectChips";
import { CaseStudy } from "@/components/CaseStudy";
import { MoreProjectsCarousel } from "@/components/MoreProjectsCarousel";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

const MORE_PROJECTS = [
  {
    headline: "Operational Redesign Adopted by Corporate",
    body: "Three years behind the counter, turned into a feedback loop that Blue Bottle's corporate team adopted.",
    tags: ["Adopted", "Survey Design"],
    imageSrc: "/media/more-blue-bottle.png",
    imageAlt: "Two Blue Bottle survey screens: a visit-frequency question and a multi-select on whether customers were given enough information",
    imageWidth: 1237,
    imageHeight: 1451,
  },
  {
    headline: "Agentic Chat Moderation Tool for YouTube",
    body: "Created a dual-panel moderation dashboard for human moderators to make safe decisions at scale.",
    tags: ["Agentic Experience", "Concept", "Demo"],
    imageSrc: "/media/more-youtube-moderation.png",
    imageAlt: "A YouTube livestream with a Moderator Panel showing viewer counts, audience sentiment, an AI chat summary, and quick actions, alongside an Engagement Panel of live chat messages",
    imageWidth: 1920,
    imageHeight: 1199,
    imageClassName: "rounded-xl shadow-lg",
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
      <Header active="home" />

      <main className="flex-1">
        <Hero />

        <ProjectChips />

        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
          <div className="pt-16">
            <h2 className="font-display text-[34px] font-normal text-ink sm:text-[44px]">
              Case Studies
            </h2>

            <div className="case-study-list mx-auto mt-10 mb-16 grid w-full grid-cols-1 gap-8 sm:grid-cols-2">
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
                imageWebp="/media/case-tanmigo-hero.webp"
                imagePng="/media/case-tanmigo-hero.png"
                imageAlt="The live Tanmigo app showing a tango video alongside its timestamped annotations"
                mediaAspect="aspect-[3008/1446]"
                mediaClassName="rounded-xl shadow-[0_10px_28px_-6px_rgba(0,0,0,0.32)]"
                headline="A 0-to-1 video annotation platform for dancers"
                body="Bridging the gap between video discovery and physical practice, designed and built in code with an engineer."
                tags={["TypeScript", "Front-End Development", "Live Product"]}
              />
              <CaseStudy
                attribution="Claude Code"
                href="/claude-code"
                imageWebp="/media/case-claude-code-thumbnail.webp"
                imagePng="/media/case-claude-code-thumbnail.png"
                imageAlt="The Claude Code redesign prototype in VS Code: an .mcp.json file open beside the Claude panel, with a context log of edits and a bash command permission prompt"
                mediaAspect="aspect-[3018/1514]"
                mediaClassName="rounded-xl shadow-[0_10px_28px_-6px_rgba(0,0,0,0.32)]"
                headline="Developer experience in Claude Code"
                body="Restoring a sense of agency in AI coding tools, tested with a working prototype."
                tags={["Agentic Developer Experience", "Concept", "Prototype"]}
              />
              <CaseStudy
                attribution="Felidae Conservation Fund"
                imageWebp="/media/case-felidae-thumbnail.webp"
                imagePng="/media/case-felidae-thumbnail.png"
                imageAlt="The Felidae Conservation Fund homepage hero: a mountain lion on a rocky hillside, headlined 'The Cat in the Bottleneck'"
                mediaAspect="aspect-[1618/1050]"
                mediaClassName="rounded-xl shadow-[0_10px_28px_-6px_rgba(0,0,0,0.32)]"
                headline="Shipping a redesign on a nonprofit's legacy site"
                body="Rebuilding the public homepage for a wildlife conservation nonprofit on infrastructure it was never built for."
                tags={["Web Design", "Legacy Site", "HTML"]}
              />
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
          <div className="pt-16">
            <h2 className="font-display text-[34px] font-normal text-ink sm:text-[44px]">
              More Projects
            </h2>

            <MoreProjectsCarousel projects={MORE_PROJECTS} />
          </div>
        </div>

        <div className="mt-16 bg-navy py-16">
          <div className="mx-auto w-full max-w-7xl px-6 text-center sm:px-10">
            <div className="flex items-center justify-center gap-4">
              <h2 className="font-display text-[34px] font-normal text-white sm:text-[44px]">
                Open Resource
              </h2>
              <picture className="w-14 shrink-0 sm:w-24">
                <source srcSet="/media/open-resource-dove.webp" type="image/webp" />
                <img
                  src="/media/open-resource-dove.png"
                  alt="An illustrated blue dove carrying a balloon, with a small chick below"
                  className="h-auto w-full"
                  loading="lazy"
                />
              </picture>
            </div>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
              Building a portfolio can be fun, but it&apos;s also tedious.
              I&apos;d rather we learn from each other. If you&apos;re a
              designer who ships your own site,{" "}
              <a
                href="https://github.com/irenecancode/irene-portfolio"
                className="text-white underline decoration-white/50 underline-offset-4 transition-colors duration-200 hover:text-chip hover:decoration-chip focus-visible:text-chip"
              >
                the repo is public
              </a>
              .
            </p>

            <div className="mt-10 flex w-full items-center gap-6 sm:gap-8">
              <div className="grid min-w-0 flex-1 grid-cols-1 gap-6 sm:grid-cols-3">
              {RESOURCE_CARDS.map(({ label, href, lines }, i) => (
                <div
                  key={label}
                  className={`rounded-2xl bg-[#fffff0] p-7 text-left transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:rotate-0 hover:shadow-[0_0_28px_rgba(204,81,59,0.35)] ${
                    ["-rotate-1", "rotate-1", "-rotate-1"][i % 3]
                  }`}
                >
                  {href ? (
                    <a href={href} className="site-link font-display text-xl font-medium">
                      {label}
                    </a>
                  ) : (
                    <p className="font-display text-xl font-medium text-ink">{label}</p>
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
          </div>
        </div>

        <BackToTop wide />
      </main>

      <div className="bg-grid-paper">
        <Footer />
      </div>
    </div>
  );
}
