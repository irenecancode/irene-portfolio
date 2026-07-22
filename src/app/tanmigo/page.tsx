import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { ReflectionCard } from "@/components/ReflectionCard";
import { Reveal } from "@/components/Reveal";
import { SummaryGrid, type SummaryField } from "@/components/SummaryGrid";
import { ToolCard, ListCard } from "@/components/OutlineCard";
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
  title: "Tanmigo · Irene Cheung",
  description: "A 0-to-1 video annotation platform for dancers: bridging video discovery and physical practice, designed and built in code with an engineer.",
};

const TAGS = ["Data Annotation", "Type Script", "Front-End Development", "Live Product"];

const SUMMARY_FIELDS: SummaryField[] = [
  { Icon: TagIcon, label: "Category", value: "Data Annotation" },
  { Icon: BuildingIcon, label: "Org", value: "Side Project" },
  { Icon: ProductIcon, label: "Product", value: "Tanmigo.com" },
  { Icon: PersonIcon, label: "Role", value: "Sole Designer, front-end developer (AI-assisted)" },
  {
    Icon: ChallengeIcon,
    label: "Core Challenge",
    numbered: true,
    list: [
      "Underutilized backend metadata for UX",
      '"Blank-sheet anxiety" during user annotation',
      "Fragmented video retrieval and organization workflows",
    ],
  },
  {
    Icon: ImpactIcon,
    label: "Impact",
    numbered: true,
    list: [
      "Shipped production-ready code and launched the beta",
      "Onboarded 5+ active beta users",
    ],
  },
];

const TOOLS = [
  { name: "VS Code", desc: "Front-end Development", icon: "vscode" },
  { name: "Figma", desc: "Design System, Prototyping", icon: "figma" },
  { name: "Gemini CLI", desc: "Code Review", icon: "gemini-cli" },
  { name: "GitHub", desc: "Version Control", icon: "github" },
  { name: "Claude Code", desc: "Agentic Coding", icon: "claude-code" },
  { name: "Lovable", desc: "Prototyping", icon: "lovable" },
];

const CORE_USER_JOURNEY = [
  "Ingestion",
  "Annotation",
  "Curation",
  "Workspace architecture",
  "Visual Foundation",
];

const PROBLEM_SPACE = [
  "Videos are scattered across YouTube, phone albums, Instagram, and Facebook; various sources leading to chaotic collections",
  "One video contains nuances that make how you save and annotate it important",
];

const RAPID_PROTOTYPING = [
  {
    time: "2 hours",
    title: "A working prototype in Lovable",
    body: "Two hours in Lovable got me a working prototype, not a mockup: real clicks, real data fields. Its job was to determine which version of iteration is better, define priority, and leaves question worth real user testing.",
    image: "tanmigo-prototype-2hr",
    alt: "Tanmigo prototype in Lovable showing the video library and annotation panel",
    aspect: "594/329",
  },
  {
    time: "6 hours",
    title: "Quick sync + Information Architecture + User Testing",
    body: "Ideas are grounded by interviewing in person and remote through card sorting. Insights moved quickly to a new branch, followed by a test run to make sure they were safe to merge.",
    image: "tanmigo-prototype-6hr",
    alt: "Card sorting boards ranking what information dancers need first when reviewing an annotation",
    aspect: "591/392",
  },
];

export default function TanmigoCaseStudy() {
  return (
    <div id="top" className="flex flex-1 flex-col">
      <div className="bg-grid-paper">
        <Header active="none" />

        <section className="mx-auto w-full max-w-6xl px-6 pt-4 pb-16 sm:px-10 sm:pt-8 sm:pb-24">
          <div className="card-gradient rounded-md p-6 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.15)]">
            <picture>
              <source srcSet="/media/case-tanmigo.webp" type="image/webp" />
              <img
                src="/media/case-tanmigo.png"
                alt="Tanmigo interface showing a tango video paired with an annotation panel for tagging embrace, footwork, and axis"
                className="mx-auto w-full max-w-2xl"
              />
            </picture>
          </div>

          <h1 className="font-display mt-8 max-w-3xl text-[32px] leading-tight font-normal text-ink text-balance sm:text-[40px]">
            A 0-to-1 video annotation platform for dancers
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-ink">
            Bridging the gap between video discovery and physical practice
            with a seamless, one-stop annotation experience, designed and
            built in code with an engineer.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-navy-tint px-3 py-1 text-xs font-medium text-navy transition-colors duration-200 hover:bg-navy hover:text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>
      </div>

      <main className="flex-1 bg-surface">
        <Reveal as="section" className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-10">
          <SummaryGrid fields={SUMMARY_FIELDS} />

          <p className="mt-10 max-w-2xl text-xl leading-8 font-medium text-ink">
            As a designer, builder, and tango dancer, I designed the
            end-to-end experience and shipped the front-end myself.
          </p>
          <p className="mt-4 text-lg text-ink">TBD</p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <ToolCard title="Tool" tools={TOOLS} />
            <ListCard title="Core User Journey" items={CORE_USER_JOURNEY} />
          </div>
        </Reveal>

        <Reveal as="section" className="bg-[var(--color-reflection-bg)] px-6 py-16 sm:px-10">
          <div className="mx-auto max-w-3xl">
            <p className="font-nav text-sm font-medium text-muted uppercase">Background</p>
            <p className="mt-4 text-lg leading-7 text-ink">
              Tango is a dance where you can practice for ten years, and
              still feel like a beginner.
            </p>

            <p className="mt-10 font-nav text-sm font-medium text-muted uppercase">Problem Space</p>
            <p className="mt-4 text-lg leading-7 text-ink">
              Eight of the ten dancers I interviewed have playlists and
              curations to study tango movements outside of the dance floor.
            </p>
            <ol className="mt-6 flex flex-col gap-3">
              {PROBLEM_SPACE.map((item, i) => (
                <li key={item} className="text-base text-ink">
                  <span className="text-muted">{String(i + 1).padStart(2, "0")}</span>{" "}
                  {item}
                </li>
              ))}
            </ol>

            <div className="mt-8 grid grid-cols-1 items-center gap-6 sm:grid-cols-2">
              <picture>
                <source srcSet="/media/tanmigo-background.webp" type="image/webp" />
                <img
                  src="/media/tanmigo-background.png"
                  alt="A tango couple mid-dance, annotated with labels pointing to axis, disassociation, weight transfer, intention, and interpretation of music"
                  className="aspect-[4/5] w-full rounded-md object-cover"
                />
              </picture>
              <div>
                <p className="text-xl leading-8 text-ink">
                  If we look at a single second of captured tango, what
                  nuances can we see?
                </p>
                <p className="mt-2 text-sm text-muted">(yes, that&apos;s me!)</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal as="section" className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-10">
          <h2 className="font-display text-[36px] font-normal text-ink">Design Strategy</h2>

          <p className="mt-6 font-nav text-sm font-medium text-accent-deep uppercase">
            Designed the data before the screens
          </p>
          <p className="mt-2 text-lg leading-7 text-ink">
            Before sketching a single wireframe, I designed the metadata
            structure for annotations: what gets captured when a video comes
            in, and what makes a moment findable again later. That structure
            ended up deciding most of the UI for me.
          </p>

          <p className="mt-6 font-nav text-sm font-medium text-accent-deep uppercase">
            Information Architecture
          </p>
          <p className="mt-2 text-lg leading-7 text-ink">
            The core decision: the system captures what it can know on its
            own, and dancers add only what they know. That&apos;s what keeps
            a thousand-clip library manageable.
          </p>

          <picture>
            <source srcSet="/media/tanmigo-source-diagram.webp" type="image/webp" />
            <img
              src="/media/tanmigo-source-diagram.png"
              alt="Flow diagram: YouTube, Google Photos, and Tango Class or Milonga footage feed into Tanmigo, which combines auto-metadata with human intent, then routes into a Personal Library, Public Search, and Collaborators"
              className="mt-6 aspect-video w-full rounded-md object-cover"
            />
          </picture>
        </Reveal>

        <Reveal as="section" className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-10">
          <h2 className="font-display text-[36px] font-normal text-ink">Rapid prototyping</h2>
          <p className="mt-4 text-lg leading-7 text-ink">
            From first concept to usability testing in 8 hours. Early on,
            the UX audits and rebuild ideas felt abstract when I tried to
            communicate them. I used Lovable as a sandbox to demonstrate
            multiple clickable iterations. Shortlisted ideas then moved to
            my local dev environment, ran through the test plan, and shipped
            once they passed.
          </p>

          <div className="mt-8 flex flex-col gap-10">
            {RAPID_PROTOTYPING.map((step) => (
              <div
                key={step.time}
                className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2"
              >
                <div>
                  <p className="font-nav text-sm font-medium text-accent-deep">{step.time}</p>
                  <p className="mt-1 text-xl font-medium text-ink">{step.title}</p>
                  <p className="mt-2 text-lg leading-7 text-ink">{step.body}</p>
                </div>
                <picture>
                  <source srcSet={`/media/${step.image}.webp`} type="image/webp" />
                  <img
                    src={`/media/${step.image}.png`}
                    alt={step.alt}
                    style={{ aspectRatio: step.aspect }}
                    className="w-full rounded-md object-cover"
                  />
                </picture>
              </div>
            ))}
          </div>

          <hr className="my-10 border-accent/30" />

          <h3 className="font-display text-xl font-medium text-ink">
            The risk of building high-fidelity so quickly — here is how I see things.
          </h3>
          <p className="mt-4 text-lg leading-7 text-ink">
            I see design as a tool for communication, aligning constraints
            with different mental models. As a solo designer working with
            engineers, abstract card sorting or low-fidelity prototyping
            often fails to resonate. They don&apos;t show how things behave
            in various use cases, nor do they answer the &quot;what-if&quot;
            questions that every developer cares about. Building
            high-fidelity prototypes is how I reach consensus and define
            priorities with engineering.
          </p>
          <p className="mt-4 text-lg leading-7 text-ink">
            To me, that is the essence of design: we design for better
            communication.
          </p>
        </Reveal>

        <Reveal as="section" className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-10">
          <hr className="mb-16 border-accent/30" />

          <h2 className="font-display text-[36px] font-normal text-ink">Visual Foundations</h2>
          <p className="mt-4 text-lg leading-7 text-ink">
            I still have my pixel-perfect moments: gathering design feedback
            on how things should look, moving blocks to test out ideas, and
            establishing an accessible design system that agents can
            reference.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <picture>
                <source srcSet="/media/tanmigo-visual-foundation-left.webp" type="image/webp" />
                <img
                  src="/media/tanmigo-visual-foundation-left.png"
                  alt="Tanmigo interface exploration testing layout and interaction variations"
                  className="aspect-[376/433] w-full rounded-md object-cover"
                />
              </picture>
              <p className="mt-2 text-center text-sm text-muted">
                Refining user behavior through iteration.
              </p>
            </div>
            <div>
              <picture>
                <source srcSet="/media/tanmigo-visual-foundation-right.webp" type="image/webp" />
                <img
                  src="/media/tanmigo-visual-foundation-right.png"
                  alt="Tanmigo design system tokens for color, type, and spacing"
                  className="aspect-[338/432] w-full rounded-md object-cover"
                />
              </picture>
              <p className="mt-2 text-center text-sm text-muted">
                This design system was later imported into CSS.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal as="section" className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-10">
          <hr className="mb-16 border-accent/30" />

          <h2 className="font-display text-[36px] font-normal text-ink">The &quot;Failed&quot; Moment</h2>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <picture>
              <source srcSet="/media/tanmigo-failed-moment.webp" type="image/webp" />
              <img
                src="/media/tanmigo-failed-moment.png"
                alt="Abandoned annotation timeline design with a sequential panel and horizontal annotation strips shown at once"
                className="aspect-[487/320] w-full self-start rounded-md object-cover"
              />
            </picture>
            <div>
              <p className="text-lg leading-7 text-ink">
                There is one iteration I eventually gave up on, but it taught
                me a lot. While working on the annotation journey, I
                identified a gap in how users find specific annotations and
                tested a solution on Lovable. However, it ended up confusing
                users. Having a sequential panel and horizontal annotation
                strips at the same time left them unsure of where to look.
              </p>
              <p className="mt-4 text-lg leading-7 text-ink">
                Lesson learned: Stick to one primary element; having two
                primary elements only confuses users. Clear intention keeps
                the UX grounded.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal as="section" className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-10">
          <hr className="mb-16 border-accent/30" />

          <h2 className="font-display text-[36px] font-normal text-ink">Live Product</h2>
          <p className="mt-4 text-lg leading-7 text-ink">
            YouTube → Tanmigo: A One-Stop Annotation Journey.
          </p>

          <p className="mt-4 text-sm text-muted">
            While these features are currently in active development, you
            can explore the functional MVP at{" "}
            <a
              href="https://www.tanmigo.com"
              className="text-accent-deep underline underline-offset-2 hover:no-underline"
            >
              www.tanmigo.com
            </a>
            .
          </p>
        </Reveal>

        <Reveal as="section" className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10">
          <ReflectionCard
            heading="Shipping my designs changed how I design."
            body="Once every state I sketched was mine to build and test, my components got simpler, and edge cases got named before the build instead of during it. Nothing teaches design restraint like implementing your own work."
            closing="Building from idea to pull request, I design with more intention."
          />
        </Reveal>

        <Reveal as="section" className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10">
          <h2 className="font-display text-[36px] font-normal text-ink">Read more</h2>
          <div className="mx-auto mt-10 grid w-full grid-cols-1 gap-8 sm:grid-cols-2">
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
          </div>
        </Reveal>

        <BackToTop />
      </main>

      <div className="bg-grid-paper">
        <Footer />
      </div>
    </div>
  );
}
