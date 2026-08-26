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

const TOOL_TIMELINE = [
  { phase: "Phase 1", tools: "Figma + Lovable" },
  { phase: "Phase 2", tools: "Figma MCP + Claude Code" },
  { phase: "Phase 3", tools: "VS Code + Claude Code" },
];



export default function TanmigoCaseStudy() {
  return (
    <div id="top" className="flex flex-1 flex-col">
      <div>
        <Header active="none" />

        <section className="mx-auto w-full max-w-6xl px-6 pt-4 pb-16 sm:px-10 sm:pt-8 sm:pb-24">

          <h1 className="font-display mt-8 w-full text-[32px] leading-tight font-normal text-ink sm:text-[40px] lg:whitespace-nowrap">
            A 0-to-1 video annotation platform for dancers
          </h1>
          <p className="mt-4 w-full text-lg leading-7 text-ink">
            Bridging the gap between video discovery and physical practice
            with a seamless, one-stop annotation experience, designed and
            built in code with an engineer.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="bg-chip px-3 py-1 text-xs font-medium text-accent-deep transition-colors duration-200 hover:bg-rust hover:text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>
      </div>

      <main className="flex-1 bg-surface">
        <Reveal as="section" className="mx-auto w-full max-w-6xl px-6 py-8 sm:px-10">
          <SummaryGrid fields={SUMMARY_FIELDS} />

          <p className="mt-10 text-xl leading-8 font-medium text-ink">
            As a designer, builder, and tango dancer, I designed the
            end-to-end experience and shipped the front-end myself.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <ToolCard title="Tool" tools={TOOLS} />
            <ListCard title="Core User Journey" items={CORE_USER_JOURNEY} />
          </div>
        </Reveal>

        <Reveal as="section" className="bg-[var(--color-reflection-bg)] px-6 py-14 sm:px-10 sm:py-16">
          <div className="mx-auto w-full max-w-6xl">
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
                  className="w-[70%] rounded-md"
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

        <Reveal as="section" className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-10">
          <h2 className="font-display text-[36px] font-normal text-ink/80">As a designer who ships code...</h2>

          <p className="mt-6 text-lg leading-7 text-ink">
            When I kicked off Tanmigo as a team of two, like other designers,
            I started off with Figma. But things shifted quickly, like the
            current industry: you can be surprised every day, or alter your
            workflow next week after something has launched. Tanmigo is no
            exception; adapting to new changes and testing the workflow has
            happened a couple of times.
          </p>

          {/* Tool timeline: one gradient bar with a tick per phase, sharing
              the table's width so the section reads as one aligned column. */}
          <div className="mx-auto mt-10 max-w-3xl">
            <div className="relative">
              <div
                className="h-1.5 w-full rounded-full bg-gradient-to-r from-accent/25 to-accent"
                aria-hidden="true"
              />
              {["0%", "33.333%", "66.667%"].map((left) => (
                <span
                  key={left}
                  className="absolute top-1/2 h-3.5 w-[3px] -translate-y-1/2 rounded-full bg-accent"
                  style={{ left }}
                  aria-hidden="true"
                />
              ))}
            </div>
            <ol className="mt-3 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {TOOL_TIMELINE.map((stop) => (
                <li key={stop.phase}>
                  <p className="font-nav text-sm font-medium text-muted uppercase">{stop.phase}</p>
                  <p className="mt-1 text-xl font-medium text-ink">{stop.tools}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <picture>
                <source srcSet="/media/tanmigo-visual-foundation-left.webp" type="image/webp" />
                <img
                  src="/media/tanmigo-visual-foundation-left.png"
                  alt="Tanmigo interface exploration testing layout and interaction variations"
                  className="mx-auto w-full max-w-[376px] rounded-md"
                />
              </picture>
              <p className="mt-2 text-center text-sm text-muted">
                Sticky notes were used to hand off details, and later I used a markdown file for design principles.
              </p>
            </div>
            <div>
              <picture>
                <source srcSet="/media/tanmigo-visual-foundation-right.webp" type="image/webp" />
                <img
                  src="/media/tanmigo-visual-foundation-right.png"
                  alt="Tanmigo design system tokens for color, type, and spacing"
                  className="mx-auto w-full max-w-[338px] rounded-md"
                />
              </picture>
              <p className="mt-2 text-center text-sm text-muted">
                This design system was later imported into CSS.
              </p>
            </div>
          </div>


        </Reveal>

        <Reveal as="section" className="bg-decision-bg px-6 py-14 sm:px-10 sm:py-16">
          <div className="mx-auto w-full max-w-6xl">
          <h2 className="font-display text-[36px] font-normal text-ink/80">
            3 reasons I adopted a new workflow with agents
          </h2>
          <h3 className="font-display mt-8 max-w-4xl text-[28px] leading-snug font-medium text-ink">
            Risks come after the power it brings to me, for example: code
            conflicts, the wrong base for a PR, and reinvented wheels when I
            ignored shadcn components by accident. These are lessons I
            learned by doing this project.
          </h3>
          <ol className="mt-10 flex flex-col gap-10">
            {[
              {
                n: "01",
                title: "It speeds up the production flow, without sacrificing quality",
                body: "Setting aside auto layout, design components, and variations, I even have more time to audit them from the perspective of art direction.",
              },
              {
                n: "02",
                title: "It fosters collaboration",
                body: "As a designer, I consider technical constraints: I ran pre-commit, tested my new features, staged deployments, and set up multiple small branches so that engineers can review my work faster and we can discuss technical details.",
              },
              {
                n: "03",
                title: "It provides a set of objective principles to reference",
                body: "Instead of countless sticky notes next to wireframes, a markdown file is powerful as it provides ground truth for everyone when shipping new features.",
              },
            ].map((item) => (
              <li key={item.n}>
                <p className="text-xl font-medium text-ink">
                  <span className="text-muted">{item.n}</span> {item.title}
                </p>
                <p className="mt-2 max-w-3xl text-lg leading-7 text-ink">{item.body}</p>
              </li>
            ))}
          </ol>


          <h3 className="mt-16 font-display text-xl font-medium text-ink">
            Workflow of designing Tanmigo{" "}
            <span className="text-base font-normal text-muted">(last updated: Aug 25)</span>
          </h3>
          {/* Stage -> scenario -> tool. Rowspans mirror the workflow: one tool
              often serves several scenarios, and the merged cells make that
              visible instead of repeating the name. */}
          <div className="mt-4 overflow-x-auto rounded-xl bg-surface p-6 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.15)] sm:p-8">
            <table className="mx-auto w-full min-w-[560px] max-w-3xl border-collapse text-center text-base">
              <thead>
                <tr>
                  <th scope="col" className="px-5 py-3 font-nav text-sm font-medium tracking-[0.06em] text-muted uppercase">Stage</th>
                  <th scope="col" className="border-l border-ink/10 px-4 py-3 font-nav text-sm font-medium tracking-[0.06em] text-muted uppercase">Scenario</th>
                  <th scope="col" className="border-l border-ink/10 px-4 py-3 font-nav text-sm font-medium tracking-[0.06em] text-muted uppercase">Tool</th>
                </tr>
              </thead>
              <tbody className="align-top">
                <tr>
                  <th scope="row" rowSpan={2} className="border-b border-ink/10 px-5 py-3 font-nav font-medium text-ink">Ideation</th>
                  <td className="border-l border-ink/10 px-4 py-3 text-ink">Sketch wireframes</td>
                  <td className="border-b border-l border-ink/10 px-4 py-3 font-medium text-ink">Figma, sometimes paper</td>
                </tr>
                <tr>
                  <td className="border-b border-l border-ink/10 px-4 py-3 text-ink">Showcase variations</td>
                  <td className="border-b border-l border-ink/10 px-4 py-3 font-medium text-ink">Figma</td>
                </tr>
                <tr>
                  <th scope="row" rowSpan={2} className="border-b border-ink/10 px-5 py-3 font-nav font-medium text-ink">Design</th>
                  <td className="border-l border-ink/10 px-4 py-3 text-ink">New components</td>
                  <td rowSpan={6} className="border-b border-l border-ink/10 px-4 py-3 align-middle font-medium text-ink">Claude Code via VS Code</td>
                </tr>
                <tr>
                  <td className="border-b border-l border-ink/10 px-4 py-3 text-ink">New features</td>
                </tr>
                <tr>
                  <th scope="row" rowSpan={2} className="border-b border-ink/10 px-5 py-3 font-nav font-medium text-ink">Maintenance</th>
                  <td className="border-l border-ink/10 px-4 py-3 text-ink">Design system maintenance</td>
                </tr>
                <tr>
                  <td className="border-b border-l border-ink/10 px-4 py-3 text-ink">Documentation</td>
                </tr>
                <tr>
                  <th scope="row" rowSpan={3} className="border-b border-ink/10 px-5 py-3 font-nav font-medium text-ink">Test</th>
                  <td className="border-l border-ink/10 px-4 py-3 text-ink">Manual test new feature</td>
                </tr>
                <tr>
                  <td className="border-l border-ink/10 px-4 py-3 text-ink">Test with automation and edge cases</td>
                </tr>
                <tr>
                  <td className="border-b border-l border-ink/10 px-4 py-3 text-ink">Test with real users</td>
                  <td className="border-b border-l border-ink/10 px-4 py-3 font-medium text-ink">FigJam</td>
                </tr>
                <tr>
                  <th scope="row" rowSpan={2} className="px-5 py-3 font-nav font-medium text-ink">Collaboration</th>
                  <td className="border-l border-ink/10 px-4 py-3 text-ink">Sync with engineer</td>
                  <td rowSpan={2} className="border-l border-ink/10 px-4 py-3 align-middle font-medium text-ink">GitHub</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-ink">Stage deployment</td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
        </Reveal>

        <Reveal as="section" className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-10">
          <h2 className="font-display text-[36px] font-normal text-ink/80">
            Metadata structure for annotations
          </h2>

          <p className="mt-6 text-lg leading-7 text-ink">
            Because features can be shipped so fast, communication is even
            more important when it comes to what kind of journey our users
            are going through and what the edge cases are. Tables and
            decision trees are commonly used for syncing.
          </p>

          {/* Decision tree drawn as one SVG (like the About journey map).
              Spine runs down the center; NO/secondary branches exit the
              diamond side-vertices; parallel outcomes merge on a bus before
              the next decision. Colors come from the runtime :root tokens. */}
          <svg
            viewBox="0 0 940 1900"
            role="img"
            aria-label="Decision tree for rendering an annotation card: empty notes reserve a timestamp layout; tagged text checks whether the tag was seen before and reuses its rail color or assigns the next hue family; untagged text uses the standard layout; notes longer than the preview cap truncate with Show more; videos with several dancers show the author's avatar and name; and the annotation currently playing gets an active highlight synced to the timeline"
            className="mx-auto mt-10 block h-auto w-full max-w-2xl"
          >
            <defs>
              <marker id="tree-arrow" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto">
                <path d="M0 0 L8 4 L0 8 Z" fill="#57534e" />
              </marker>
            </defs>

            {/* start: document */}
            <path d="M370 8 H552 L570 26 V72 H370 Z" fill="var(--color-surface)" stroke="#57534e" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M552 8 V26 H570 Z" fill="rgba(0,0,0,0.08)" stroke="#57534e" strokeWidth="1.5" strokeLinejoin="round" />
            <text x="470" y="46" textAnchor="middle" fontSize="15" fontWeight="500" fill="var(--color-ink)">New annotation data</text>
            <line x1="470" y1="72" x2="470" y2="106" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#tree-arrow)" />

            {/* D1: has text? NO exits the left vertex */}
            <polygon points="470,113 575,185 470,257 365,185" fill="var(--color-chip)" />
            <text x="470" y="190" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">Has text content?</text>
            <path d="M365 185 H234 Q220 185 220 199 V248" fill="none" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#tree-arrow)" />
            <text x="292" y="177" textAnchor="middle" fontSize="12" letterSpacing="1" fill="var(--color-muted)">NO</text>
            <rect x="100" y="254" width="240" height="64" rx="8" fill="var(--color-reflection-bg)" stroke="rgba(0,0,0,0.08)" />
            <text x="220" y="280" textAnchor="middle" fontSize="15" fill="var(--color-ink)">Show &quot;No note yet&quot;,</text>
            <text x="220" y="302" textAnchor="middle" fontSize="15" fill="var(--color-ink)">timestamp layout reserved</text>
            <line x1="470" y1="257" x2="470" y2="312" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#tree-arrow)" />
            <text x="484" y="292" fontSize="12" letterSpacing="1" fill="var(--color-muted)">YES</text>

            {/* D2: contains a tag? YES right to the tag-memory check, NO left to standard layout */}
            <polygon points="470,318 590,400 470,482 350,400" fill="var(--color-chip)" />
            <text x="470" y="394" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">Does the text</text>
            <text x="470" y="416" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">contain a tag?</text>
            <path d="M350 400 H254 Q240 400 240 414 V547" fill="none" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#tree-arrow)" />
            <text x="300" y="392" textAnchor="middle" fontSize="12" letterSpacing="1" fill="var(--color-muted)">NO</text>
            <path d="M590 400 H686 Q700 400 700 414 V497" fill="none" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#tree-arrow)" />
            <text x="640" y="392" textAnchor="middle" fontSize="12" letterSpacing="1" fill="var(--color-muted)">YES</text>

            <rect x="150" y="553" width="180" height="60" rx="8" fill="var(--color-reflection-bg)" stroke="rgba(0,0,0,0.08)" />
            <text x="240" y="578" textAnchor="middle" fontSize="15" fill="var(--color-ink)">Standard text</text>
            <text x="240" y="600" textAnchor="middle" fontSize="15" fill="var(--color-ink)">layout</text>

            {/* D2b: tag memory */}
            <polygon points="700,503 815,583 700,663 585,583" fill="var(--color-chip)" />
            <text x="700" y="577" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">Seen this tag</text>
            <text x="700" y="599" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">before?</text>
            <path d="M700 663 V676 Q700 690 686 690 H604 Q590 690 590 704 V716" fill="none" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#tree-arrow)" />
            <path d="M700 663 V676 Q700 690 714 690 H816 Q830 690 830 704 V716" fill="none" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#tree-arrow)" />
            <text x="640" y="682" textAnchor="middle" fontSize="12" letterSpacing="1" fill="var(--color-muted)">YES</text>
            <text x="774" y="682" textAnchor="middle" fontSize="12" letterSpacing="1" fill="var(--color-muted)">NO</text>
            <rect x="505" y="722" width="170" height="60" rx="8" fill="var(--color-reflection-bg)" stroke="rgba(0,0,0,0.08)" />
            <text x="590" y="747" textAnchor="middle" fontSize="15" fill="var(--color-ink)">Reuse its</text>
            <text x="590" y="769" textAnchor="middle" fontSize="15" fill="var(--color-ink)">rail color</text>
            <rect x="740" y="722" width="180" height="60" rx="8" fill="var(--color-reflection-bg)" stroke="rgba(0,0,0,0.08)" />
            <text x="830" y="747" textAnchor="middle" fontSize="15" fill="var(--color-ink)">Assign the next</text>
            <text x="830" y="769" textAnchor="middle" fontSize="15" fill="var(--color-ink)">hue family</text>

            {/* merge bus into D3 */}
            <path d="M240 613 V806 Q240 820 254 820 H456" fill="none" stroke="#57534e" strokeWidth="1.5" />
            <path d="M590 782 V806 Q590 820 576 820 H484" fill="none" stroke="#57534e" strokeWidth="1.5" />
            <path d="M830 782 V806 Q830 820 816 820 H484" fill="none" stroke="#57534e" strokeWidth="1.5" />
            <path d="M456 820 H470 M484 820 H470 M470 820 V850" fill="none" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#tree-arrow)" />

            {/* D3: preview cap */}
            <polygon points="470,856 590,933 470,1010 350,933" fill="var(--color-chip)" />
            <text x="470" y="927" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">Longer than the</text>
            <text x="470" y="949" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">preview cap?</text>
            <path d="M470 1010 V1026 Q470 1040 456 1040 H264 Q250 1040 250 1054 V1066" fill="none" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#tree-arrow)" />
            <path d="M470 1010 V1026 Q470 1040 484 1040 H676 Q690 1040 690 1054 V1066" fill="none" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#tree-arrow)" />
            <text x="352" y="1032" textAnchor="middle" fontSize="12" letterSpacing="1" fill="var(--color-muted)">YES</text>
            <text x="592" y="1032" textAnchor="middle" fontSize="12" letterSpacing="1" fill="var(--color-muted)">NO</text>
            <rect x="140" y="1072" width="220" height="52" rx="8" fill="var(--color-reflection-bg)" stroke="rgba(0,0,0,0.08)" />
            <text x="250" y="1103" textAnchor="middle" fontSize="15" fill="var(--color-ink)">Truncate with &quot;Show more&quot;</text>
            <rect x="595" y="1072" width="190" height="52" rx="8" fill="var(--color-reflection-bg)" stroke="rgba(0,0,0,0.08)" />
            <text x="690" y="1103" textAnchor="middle" fontSize="15" fill="var(--color-ink)">Render the full note</text>

            {/* merge bus into D4 */}
            <path d="M250 1124 V1162 Q250 1176 264 1176 H456" fill="none" stroke="#57534e" strokeWidth="1.5" />
            <path d="M690 1124 V1162 Q690 1176 676 1176 H484" fill="none" stroke="#57534e" strokeWidth="1.5" />
            <path d="M456 1176 H470 M484 1176 H470 M470 1176 V1208" fill="none" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#tree-arrow)" />

            {/* D4: one dancer or several */}
            <polygon points="470,1214 600,1300 470,1386 340,1300" fill="var(--color-chip)" />
            <text x="470" y="1294" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">One dancer or several</text>
            <text x="470" y="1316" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">on this video?</text>
            <path d="M470 1386 V1402 Q470 1416 456 1416 H264 Q250 1416 250 1430 V1442" fill="none" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#tree-arrow)" />
            <path d="M470 1386 V1402 Q470 1416 484 1416 H676 Q690 1416 690 1430 V1442" fill="none" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#tree-arrow)" />
            <text x="340" y="1408" textAnchor="middle" fontSize="12" letterSpacing="1" fill="var(--color-muted)">SEVERAL</text>
            <text x="600" y="1408" textAnchor="middle" fontSize="12" letterSpacing="1" fill="var(--color-muted)">ONE</text>
            <rect x="140" y="1448" width="220" height="52" rx="8" fill="var(--color-reflection-bg)" stroke="rgba(0,0,0,0.08)" />
            <text x="250" y="1479" textAnchor="middle" fontSize="15" fill="var(--color-ink)">Show avatar and name</text>
            <rect x="605" y="1448" width="170" height="52" rx="8" fill="var(--color-reflection-bg)" stroke="rgba(0,0,0,0.08)" />
            <text x="690" y="1479" textAnchor="middle" fontSize="15" fill="var(--color-ink)">Timestamp only</text>

            {/* merge bus into D5 */}
            <path d="M250 1500 V1538 Q250 1552 264 1552 H456" fill="none" stroke="#57534e" strokeWidth="1.5" />
            <path d="M690 1500 V1538 Q690 1552 676 1552 H484" fill="none" stroke="#57534e" strokeWidth="1.5" />
            <path d="M456 1552 H470 M484 1552 H470 M470 1552 V1584" fill="none" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#tree-arrow)" />

            {/* D5: playback state */}
            <polygon points="470,1590 590,1667 470,1744 350,1667" fill="var(--color-chip)" />
            <text x="470" y="1661" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">The one playing</text>
            <text x="470" y="1683" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">right now?</text>
            <path d="M470 1744 V1760 Q470 1774 456 1774 H264 Q250 1774 250 1788 V1800" fill="none" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#tree-arrow)" />
            <path d="M470 1744 V1760 Q470 1774 484 1774 H676 Q690 1774 690 1788 V1800" fill="none" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#tree-arrow)" />
            <text x="352" y="1766" textAnchor="middle" fontSize="12" letterSpacing="1" fill="var(--color-muted)">YES</text>
            <text x="592" y="1766" textAnchor="middle" fontSize="12" letterSpacing="1" fill="var(--color-muted)">NO</text>
            <rect x="130" y="1806" width="240" height="64" rx="8" fill="var(--color-reflection-bg)" stroke="rgba(0,0,0,0.08)" />
            <text x="250" y="1832" textAnchor="middle" fontSize="15" fill="var(--color-ink)">Active highlight,</text>
            <text x="250" y="1854" textAnchor="middle" fontSize="15" fill="var(--color-ink)">synced to the timeline</text>
            <rect x="615" y="1806" width="150" height="64" rx="8" fill="var(--color-reflection-bg)" stroke="rgba(0,0,0,0.08)" />
            <text x="690" y="1843" textAnchor="middle" fontSize="15" fill="var(--color-ink)">Rest state</text>
          </svg>

          <picture>
            <source srcSet="/media/tanmigo-annotation-page.webp" type="image/webp" />
            <img
              src="/media/tanmigo-annotation-page.png"
              alt="Tanmigo video page on a laptop: the player's timeline shows colored tag segments, and the annotation rail beside it renders each card by the decision path, with tag rails, a plain note, and timestamp pills"
              className="mt-12 w-full rounded-md ring-1 ring-black/10"
            />
          </picture>
          <p className="mt-2 text-center text-sm text-muted">
            {/* DRAFT caption: Irene to edit */}
            The result: every card renders by the same rules, and the
            timeline mirrors their tag colors.
          </p>
        </Reveal>



        <Reveal as="section" className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-10">
          <hr className="mb-16 border-ink/10" />

          <h2 className="font-display text-[36px] font-normal text-ink/80">The &quot;Failed&quot; Moment</h2>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <picture>
              <source srcSet="/media/tanmigo-failed-moment.webp" type="image/webp" />
              <img
                src="/media/tanmigo-failed-moment.png"
                alt="Abandoned annotation timeline design with a sequential panel and horizontal annotation strips shown at once"
                className="w-full max-w-[487px] self-start rounded-md"
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

        <Reveal as="section" className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-10">
          <hr className="mb-16 border-ink/10" />

          <h2 className="font-display text-[36px] font-normal text-ink/80">Live Product</h2>
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

        <Reveal as="section" className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-10">
          <ReflectionCard
            heading="Shipping my designs changed how I design."
            body="Once every state I sketched was mine to build and test, my components got simpler, and edge cases got named before the build instead of during it. Nothing teaches design restraint like implementing your own work."
            closing="Building from idea to pull request, I design with more intention."
          />
        </Reveal>

        <Reveal as="section" className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-10">
          <h2 className="font-display text-[36px] font-normal text-ink/80">Read more</h2>
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
