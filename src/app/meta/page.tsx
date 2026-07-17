import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { ReflectionCard } from "@/components/ReflectionCard";
import { Lead } from "@/components/Lead";
import { SummaryGrid, type SummaryField } from "@/components/SummaryGrid";
import { ToolCard, ImageImpactCard, ListCard } from "@/components/OutlineCard";
import { CaseStudy } from "@/components/CaseStudy";
import {
  TagIcon,
  BuildingIcon,
  ProductIcon,
  PersonIcon,
  ChallengeIcon,
  ImpactIcon,
} from "@/components/icons/SummaryIcons";

export const metadata: Metadata = {
  title: "Meta — Case Study",
  description: "The capture dashboard behind Meta's Codec Avatars: redesigning the internal tool that orchestrates 300+ camera and sensor streams at Meta Reality Labs.",
};

const TAGS = ["Internal Tools", "Hardware R&D", "Shipped", "NDA Protected"];

const SUMMARY_FIELDS: SummaryField[] = [
  { Icon: TagIcon, label: "Category", value: "Internal Research Dashboard" },
  { Icon: BuildingIcon, label: "Org", value: "R&D Engineering & Spatial Computing" },
  { Icon: ProductIcon, label: "Product", value: "Meta Reality Labs, Codec Avatars" },
  { Icon: PersonIcon, label: "Role", value: "Only designer on a five-person project team" },
  {
    Icon: ChallengeIcon,
    label: "Core Challenge",
    numbered: true,
    list: [
      "Real-time data with near-zero tolerance for latency",
      "Years of inherited design debt",
      "Ambiguous error-handling protocols",
      "Delayed sensor capture schedules",
    ],
  },
  {
    Icon: ImpactIcon,
    label: "Impact",
    numbered: true,
    list: [
      "Delivered a UI specification and multi-state verification guidelines for the engineering team",
      "Rapidly prototyped and user-tested a complex troubleshooting flow within one day",
    ],
  },
];

const TOOLS = [
  { name: "Figma", desc: "Design System, Prototyping", icon: "figma" },
  { name: "Miro", desc: "Card-Sorting, UX research synthesis", icon: "miro" },
];

const PROBLEM_SPACE = [
  "The old dashboard showed nearly all 300+ streams at once, with equal visual weight",
  "Nothing told the operator what mattered right now",
  "Camera lag, sync drift, and system-health errors surfaced late",
  "A mid-session failure could invalidate the capture, and cascade into the day's back-to-back schedule",
];

const THREE_LAYERS = [
  {
    label: "Data",
    question: "What do the sensors see and feel? And what do they miss?",
    tags: ["Telemetry data", "Edge cases", "Latency"],
  },
  {
    label: "Logic",
    question: "What does the system make of it all? What matters, and what's a no-no?",
    tags: ["System states", "Guardrail", "Confidence level"],
  },
  {
    label: "UX",
    question: "And what does the operator get? What's happening, and what do I do next?",
    tags: ["Error handling", "Explainability", "Predictability", "Ability to override", "Stakeholders' mental model"],
  },
];

function PlaceholderImage({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-md bg-[#d9d9d9] ${className}`}
    >
      <p className="px-4 text-center text-sm text-ink">{label}</p>
    </div>
  );
}

export default function MetaCaseStudy() {
  return (
    <div id="top" className="flex flex-1 flex-col">
      <div className="bg-grid-paper">
        <Header active="none" />

        <section className="mx-auto w-full max-w-6xl px-6 pt-4 pb-16 sm:px-10 sm:pt-8 sm:pb-24">
          <div className="card-gradient rounded-md p-6 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.15)]">
            <picture>
              <source srcSet="/media/case-meta.webp" type="image/webp" />
              <img
                src="/media/case-meta.png"
                alt="MUGSY capture dome shown from inside: a 171-camera rig recording at 11MP and 90Hz"
                className="mx-auto w-full max-w-2xl"
              />
            </picture>
          </div>

          <h1 className="font-display mt-8 max-w-3xl text-[32px] leading-tight font-normal text-ink text-balance sm:text-[40px]">
            The capture dashboard behind Meta&apos;s Codec Avatars
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-ink">
            Redesigning the internal tool that orchestrates 300+ camera and
            sensor streams, as the team&apos;s only designer and a daily
            operator of the system.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-navy-tint px-3 py-1 text-xs font-medium text-navy"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>
      </div>

      <main className="flex-1 bg-surface">
        <section className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-10">
          <SummaryGrid fields={SUMMARY_FIELDS} />

          <Lead className="mt-10">
            Hired to run the captures, I became the team&apos;s only
            designer and redesigned the dashboard I used every day.
          </Lead>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-ink">
            The redesigned flows let operators resolve pipeline failures
            themselves instead of stopping a session to pull in engineers.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <ToolCard title="Tool" tools={TOOLS} />
            <ImageImpactCard
              title="System Impact"
              items={[
                { label: "Codec Avatars", icon: "meta-icon-codec-avatars" },
                { label: "Quest Pro", icon: "meta-icon-quest-pro" },
              ]}
            />
            <ListCard
              title="Stakeholder"
              items={["TPM", "Engineers", "System Integrators", "Research Operators"]}
            />
          </div>
        </section>

        <section className="bg-[var(--color-reflection-bg)] px-6 py-16 sm:px-10">
          <div className="mx-auto max-w-3xl">
            <p className="font-nav text-sm font-medium text-muted uppercase">Background</p>
            <Lead className="mt-4">
              Codec Avatars represent Meta&apos;s long-term research project
              to create photorealistic, real-time digital identities that use
              neural networks to mirror human expression and presence in VR.
            </Lead>

            <p className="mt-10 font-nav text-sm font-medium text-muted uppercase">Problem Space</p>
            <p className="mt-4 text-lg leading-7 text-ink">
              One missed failure could cost the capture, or the whole day&apos;s schedule.
            </p>
            <ol className="mt-6 flex flex-col gap-3">
              {PROBLEM_SPACE.map((item, i) => (
                <li key={item} className="text-base text-ink">
                  <span className="text-muted">{String(i + 1).padStart(2, "0")}</span>{" "}
                  {item}
                </li>
              ))}
            </ol>

            <p className="mt-6 text-lg leading-7 text-ink">
              I knew exactly where it hurt, because I ran these sessions every day.
            </p>

            <picture>
              <source srcSet="/media/meta-codec-avatar-render.webp" type="image/webp" />
              <img
                src="/media/meta-codec-avatar-render.png"
                alt="Comparison of Codec Avatar renders: relit 3D face captures above matching source photos of the same six people"
                className="mt-8 aspect-[3/2] w-full max-w-2xl rounded-md object-cover"
              />
            </picture>
            <a
              href="https://mixed-news.com/en/meta-codec-avatars-gaussian-splatting/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm text-muted underline"
            >
              Source
            </a>
          </div>
        </section>

        <section className="w-full px-6 py-16 sm:px-10">
          <div className="mx-auto w-full max-w-6xl">
            <h2 className="font-display text-[36px] font-normal text-ink">
              For a bit of context
            </h2>
            <div className="mx-auto max-w-3xl">
              <Lead className="mt-4">
                This is the exact physical infrastructure I designed for, and
                operated daily. A capture session inside this dome runs 300+
                synchronized camera and IMU streams at once.
              </Lead>

              <picture>
                <source srcSet="/media/meta-capture-dome.webp" type="image/webp" />
                <img
                  src="/media/meta-capture-dome.png"
                  alt="Two fisheye views inside the MUGSY capture dome, showing rings of cameras surrounding an empty operator chair"
                  className="mt-6 aspect-video w-full rounded-md object-cover"
                />
              </picture>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <picture>
                  <source srcSet="/media/meta-camera-array-1.webp" type="image/webp" />
                  <img
                    src="/media/meta-camera-array-1.png"
                    alt="Grayscale camera-array capture grid showing a subject's face from many synchronized angles"
                    className="aspect-[6/7] w-full rounded-md object-cover"
                  />
                </picture>
                <picture>
                  <source srcSet="/media/meta-camera-array-2.webp" type="image/webp" />
                  <img
                    src="/media/meta-camera-array-2.png"
                    alt="Color camera-array capture grid showing a subject's face and shoulders from many synchronized angles"
                    className="aspect-[8/5] w-full rounded-md object-cover"
                  />
                </picture>
              </div>

              <p className="mt-6 text-lg leading-7 text-ink">
                One dashboard had to work for three very different capture rigs.
              </p>
              <p className="mt-4 text-lg leading-7 text-ink">
                Each rig produced different data and failed in different ways. A
                normal reading on one rig could mean trouble on another. I needed
                one interface that stayed legible across all three, without
                asking operators to hold three mental models.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-decision-bg px-6 py-16 sm:px-10">
          <div className="mx-auto w-full max-w-6xl">
            <h2 className="font-display text-[36px] font-normal text-ink">How I ran it</h2>
            <Lead className="mx-auto mt-4">
              Audit the existing dashboard → shadow and interview operators
              (myself included) → clickable prototypes → engineering review →
              operator testing → ship in increments
            </Lead>
          </div>

          <div className="mx-auto mt-10 grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-md bg-surface p-6">
              <h3 className="font-display text-xl font-medium text-accent-deep">
                From research to decision
              </h3>

              <p className="mt-4 font-nav text-sm font-medium text-ink">Repetitive signals</p>
              <p className="mt-1 text-base text-ink">
                My decisions came from repetitive pain points I watched in
                the lab every day, connected to the metrics our PM tracked.
              </p>

              <p className="mt-4 font-nav text-sm font-medium text-ink">Designed for errors</p>
              <p className="mt-1 text-base text-ink">
                &quot;Edge cases&quot; weren&apos;t rare here. They happened
                daily, and most gave off warning signs before they became
                failures. So I designed defensively: recovery mechanisms for
                the failures we could detect, clickable prototypes reviewed
                with engineers, and testing with the operators who would
                actually run them.
              </p>
            </div>

            <div className="rounded-md bg-surface p-6">
              <h3 className="font-display text-xl font-medium text-accent-deep">
                From collaboration to decision
              </h3>

              <p className="mt-4 font-nav text-sm font-medium text-ink">
                Building internal tools is about trade-offs
              </p>
              <p className="mt-1 text-base text-ink">
                No one dominates the design: engineering, research, and
                operations each had a wishlist, and my job was balancing them
                while building guardrails that let those wishlists ship
                safely.
              </p>

              <p className="mt-4 font-nav text-sm font-medium text-ink">
                Design with human in the loop
              </p>
              <p className="mt-1 text-base text-ink">
                Neither the AI nor the human is completely trustworthy, so
                the dashboard had to keep a human in the loop and make the
                handoff clear: some moments the operator can resolve things
                alone, and some moments you pull in an engineer. The
                dashboard&apos;s job was to know the difference.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full px-6 py-16 sm:px-10">
          <div className="mx-auto w-full max-w-6xl">
            <h2 className="font-display text-[36px] font-normal text-ink">
              I design technical tools in three layers, from the backend up
            </h2>
            <div className="mx-auto max-w-3xl">
              <Lead className="mt-4">
                This project taught me to think in layers. The dashboard itself
                stays under NDA, so what I can show is the thinking: how I broke
                an unfamiliar, deeply technical system into pieces until I could
                see where design would help.
              </Lead>
              <p className="mt-4 text-lg leading-7 text-ink">
                I was new to R&amp;D when I started. Building this framework is
                how I stopped being new.
              </p>

              <div className="mt-10 flex flex-col gap-10">
                {THREE_LAYERS.map((layer, i) => (
                  <div key={layer.label} className="text-center">
                    {i > 0 && <hr className="mb-10 border-accent/30" />}
                    <span className="inline-block rounded-full bg-navy px-5 py-2 font-nav text-sm font-medium text-white">
                      {layer.label}
                    </span>
                    <p className="mt-4 text-xl leading-8 text-muted">{layer.question}</p>
                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                      {layer.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-navy-tint px-3 py-1 text-xs font-medium text-navy"
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
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10">
          <ReflectionCard
            heading="Design became decisions the team could act on."
            body={'PMs, engineers, and designers speak different love languages. So I stopped presenting "UI" and started speaking the listener’s.'}
            items={[
              {
                label: "TPM",
                text: "Design changes translated into the metrics they already tracked: capture throughput, failed sessions, time lost to errors.",
              },
              {
                label: "Engineers",
                text: "Feasibility first. No static handoffs. I brought clickable prototypes and iterated with them inside their constraints.",
              },
            ]}
          />
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10">
          <h2 className="font-display text-[36px] font-normal text-ink">Read more</h2>
          <div className="mx-auto mt-10 grid w-full grid-cols-1 gap-8 sm:grid-cols-2">
            <CaseStudy
              attribution="tanmigo"
              href="/tanmigo"
              imageWebp="/media/case-tanmigo.webp"
              imagePng="/media/case-tanmigo.png"
              imageAlt="Tanmigo interface showing a tango video paired with an annotation panel for tagging embrace, footwork, and axis"
              headline="A 0-to-1 Video Annotation Platform for Dancers"
              body="Bridging the gap between video discovery and physical practice with a seamless, one-stop annotation experience, designed and built in code with an engineer."
              tags={["TypeScript", "Front-End Development", "Live Product"]}
            />
            <CaseStudy
              attribution="Claude Code"
              href="/claude-code"
              imageWebp="/media/case-claude-code.webp"
              imagePng="/media/case-claude-code.png"
              imageAlt="Claude Code chat interface mid-conversation, showing a Bash tool call and a permission prompt to allow running git status"
              headline="Developer's experience in Claude Code via VS Code"
              body="Experimenting better sense of agency in an IDE editor environment for developers with functional prototype."
              tags={["Agentic Developer Experience", "Concept", "Prototype"]}
            />
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
