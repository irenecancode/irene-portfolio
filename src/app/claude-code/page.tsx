import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { ReflectionCard } from "@/components/ReflectionCard";
import { Lead } from "@/components/Lead";
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
  title: "Claude Code — Case Study",
  description: "A concept project prototyping how developers can keep agency and control while coding with AI agents in Claude Code via VS Code.",
};

const TAGS = ["Agentic Developer Experience", "Concept", "Prototype"];

const SUMMARY_FIELDS: SummaryField[] = [
  { Icon: TagIcon, label: "Category", value: "Developer Experience" },
  { Icon: BuildingIcon, label: "Org", value: "Concept Project" },
  { Icon: ProductIcon, label: "Product", value: "Claude Code via VS Code" },
  { Icon: PersonIcon, label: "Role", value: "Sole Designer, Prototyper" },
  {
    Icon: ChallengeIcon,
    label: "Core Challenge",
    numbered: true,
    list: [
      "Users lose agency when forced to approve a wall of confusing commands",
      "Users lose track of their progress over time",
    ],
  },
  {
    Icon: ImpactIcon,
    label: "Impact",
    numbered: true,
    list: [
      "Shipped a React simulator to test the flow without waiting for backend development",
      "Tested alternative designs before building the final layout",
    ],
  },
];

const TOOLS = [
  { name: "VS Code", desc: "Front-end Development", icon: "vscode" },
  { name: "Figma", desc: "Design System, Prototyping", icon: "figma" },
  { name: "GitHub", desc: "Version Control", icon: "github" },
  { name: "Claude Code", desc: "Agentic Coding", icon: "claude-code" },
];

const KEY_WORKFLOWS = [
  "Action Summarization",
  "Progressive Disclosure",
  "Mutation-level Tracking",
  "State Restoration",
];

const PROBLEM_SPACE = [
  "A coding agent asks them to approve a step that they don't understand",
  "Overwhelmed by a whole wall of details and code",
  "Lose track of what they've achieved",
];

type ChangeStep = {
  number: string;
  beforeLabel: string;
  beforeCaption: string;
  beforeImage: string;
  beforeAlt: string;
  beforeAspect: string;
  afterLabel: string;
  afterCaption: string;
  afterImage: string;
  afterAlt: string;
  afterAspect: string;
  /** Percent (0-100) positions within the After screenshot's own height, one per status marker. Line continues past the image to a hook+arrow pointing at the first takeaway. */
  annotationDots?: number[];
  /** Single-takeaway steps skip the "01" numeral since there's nothing to enumerate. */
  hideNumerals?: boolean;
  takeaways: string[];
  quote?: { text: string; attribution: string };
};

const CHANGES: ChangeStep[] = [
  {
    number: "01",
    beforeLabel: "Ambiguous Text Hierarchy",
    beforeCaption: "React Simulator",
    beforeImage: "claude-code-01-before",
    beforeAlt: "Claude Code activity feed showing raw thinking, read, and edit steps with no summary",
    beforeAspect: "471/373",
    afterLabel: "Bordered One-verb Summary",
    afterCaption: "Proposed React Simulator",
    afterImage: "claude-code-01-after",
    afterAlt: "Proposed React Simulator with the same activity feed condensed into bordered one-verb summaries",
    afterAspect: "482/345",
    annotationDots: [8.7, 19.7, 53.5, 88.3],
    hideNumerals: true,
    takeaways: [
      "Summarize actions, technical or non-technical, with one verb (think, read, edit, run, etc.)",
    ],
  },
  {
    number: "02",
    beforeLabel: "Design feels like a black box",
    beforeCaption: "Actual Claude Code interface (via VS Code)",
    beforeImage: "claude-code-02-before",
    beforeAlt: "Claude Code permission dialog asking to allow a bash command with no context on risk",
    beforeAspect: "520/265",
    afterLabel: "Progressive disclosure of increasing level of detail and technicality",
    afterCaption: "Proposed React Simulator",
    afterImage: "claude-code-02-after",
    afterAlt: "Proposed permission dialog with a plain-language summary and risk assessment shown before the technical command",
    afterAspect: "605/276",
    annotationDots: [18, 29, 39],
    quote: {
      text: "I feel bypassed, like I'm becoming the agent for the AI, because I just kept pressing the auto-accept button.",
      attribution: "Gen AI prototyper, Claude Code user",
    },
    takeaways: [
      "Provide a high-level summary about what command is leading the user to",
      "2-sentence risk assessment beforehand, colored with yellow for low risk, red for high risk",
      "Technical part comes last",
    ],
  },
];

const NEW_FEATURE = {
  number: "03",
  items: [
    {
      Icon: ClockIcon,
      label: "Session History",
      prefix: "logs ",
      emphasis: "session-level activity",
      suffix: " (already exists).",
    },
    {
      Icon: ListIcon,
      label: "Live Change Log",
      prefix: "now captures ",
      emphasis: "mutation-level precision",
      suffix: " (new!).",
    },
  ],
  image: "claude-code-03-bigger-picture",
  alt: "Proposed sidebar interface for changing icons, with a live change log panel tracking each edit",
  aspect: "713/478",
  closeUpImage: "claude-code-03-close-up",
  closeUpAlt: "Close-up of the live change log panel showing timestamped edit history",
  closeUpAspect: "311/265",
  takeaways: [
    "Records every mutation with timestamp",
    "Updates ongoing agent actions in real time with instant, scannable summaries",
    "Lets developers snap back to a prior historical state instantly",
  ],
};

type UseCaseImage = { src: string; alt: string; aspect: string; scale?: number };

type UseCase = {
  number: string;
  question: string;
  images: [UseCaseImage, UseCaseImage];
  consequence: string;
  guardrail: string;
};

const USE_CASES: UseCase[] = [
  {
    number: "01",
    question: "What happens if the user clicks reset?",
    images: [
      {
        src: "claude-code-scenario1-consequence",
        alt: "Verify icon styles run step showing the process aborted and workspace reset to a prior commit state",
        aspect: "446/232",
      },
      {
        src: "claude-code-scenario1-guardrail",
        alt: "Reset confirmation warning explaining the action will undo current and subsequent code modifications",
        aspect: "347/308",
        scale: 0.9,
      },
    ],
    consequence:
      "If the user clicks reset for log B, mutations that happened after B (C, D, E, F, G) would be reset as well. It shows up as a Modify action in the chat.",
    guardrail: "The user is warned and needs to explicitly confirm the state reset.",
  },
  {
    number: "02",
    question: "What happens if the user wants to undo it (e.g., a misclick)?",
    images: [
      {
        src: "claude-code-scenario2-consequence",
        alt: "Change log entry showing an undo option after a reset action",
        aspect: "396/354",
        scale: 0.9,
      },
      {
        src: "claude-code-scenario2-guardrail",
        alt: "Change log showing the reset action and restored state still visible after changes are discarded",
        aspect: "487/299",
        scale: 0.9,
      },
    ],
    consequence: "The user can “undo” the reset.",
    guardrail:
      "The agent would still show the reset and the state, even though the changes are discarded.",
  },
];

const GUIDELINES = [
  "Interact directly with the prototype to experience the proposed UX live.",
  "Explore two distinct scenarios via the top simulator tabs: feature development and troubleshooting.",
  'Click the "Ask Claude..." input in the chat panel to launch the active interactive flows.',
];

const COMPARISON_COLUMNS = [
  "Asked to approve an action they don't understand",
  "Feel overwhelmed by a wall of details",
  "Lose track of what they've achieved",
  "Misfit mental model",
];

const COMPARISON_ROWS = [
  { label: "CLAUDE.md", values: ["Partial", "Partial", "Partial", "Yes"] },
  { label: "Proposed UI", values: ["Yes", "Yes", "Yes", "Partial"] },
];

function ClockIcon({ className = "h-5 w-5 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M10 6v4l3 2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ListIcon({ className = "h-5 w-5 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path
        d="M7 5.5h9M7 10h9M7 14.5h9"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="3.5" cy="5.5" r="1" fill="currentColor" />
      <circle cx="3.5" cy="10" r="1" fill="currentColor" />
      <circle cx="3.5" cy="14.5" r="1" fill="currentColor" />
    </svg>
  );
}

/**
 * Hook that continues a straight vertical trail: drawn from local (0,0) with
 * no fill/transform offset, so its top-left origin can be placed exactly at
 * the trail line's end point and the stroke reads as one unbroken line.
 */
function AnnotationHook({
  className = "h-6 w-6",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
      <path
        d="M0 0 V9 Q0 17 9 17 H13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M10 13 L15 17 L10 21"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default function ClaudeCodeCaseStudy() {
  return (
    <div id="top" className="flex flex-1 flex-col">
      <div className="bg-grid-paper">
        <Header active="none" />

        <section className="mx-auto w-full max-w-6xl px-6 pt-4 pb-16 sm:px-10 sm:pt-8 sm:pb-24">
          <div className="card-gradient rounded-md p-6 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.15)]">
            <picture>
              <source srcSet="/media/case-claude-code.webp" type="image/webp" />
              <img
                src="/media/case-claude-code.png"
                alt="Claude Code chat interface mid-conversation, showing a Bash tool call and a permission prompt to allow running git status"
                className="mx-auto w-full max-w-2xl"
              />
            </picture>
          </div>

          <h1 className="font-display mt-8 max-w-3xl text-[32px] leading-tight font-normal text-ink text-balance sm:text-[40px]">
            Developer&apos;s experience in Claude Code via VS Code
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-ink">
            Experimenting better sense of agency in an IDE editor environment
            for developers with functional prototype.
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
            I noticed a gap in the agentic coding workflow: I hated the
            feeling of being forced to approve walls of commands before
            understanding them.
          </Lead>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-ink">
            I started a concept project to reimagine how we can maintain
            agency and control while coding with AI agents.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <ToolCard title="Tool" tools={TOOLS} />
            <ListCard title="Key Workflows" items={KEY_WORKFLOWS} />
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10">
          <p className="font-nav text-sm font-medium text-muted uppercase">Problem Space</p>
          <Lead className="mt-4">Users lose their sense of agency when:</Lead>
          <ol className="mt-6 flex max-w-3xl flex-col gap-3">
            {PROBLEM_SPACE.map((item, i) => (
              <li key={item} className="text-base text-ink">
                <span className="text-muted">{String(i + 1).padStart(2, "0")}</span>{" "}
                {item}
              </li>
            ))}
          </ol>

          <h3 className="font-display mt-10 max-w-3xl text-[28px] font-medium text-ink">
            Constraints
          </h3>
          <p className="mt-2 max-w-3xl text-lg leading-7 text-ink">
            Stay inside Claude Code&apos;s existing design system and the VS
            Code environment, so the changes work for every expertise level
            with minimal disruption.
          </p>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10">
          <hr className="mb-16 border-accent/30" />

          <h2 className="font-display text-[36px] font-normal text-ink">
            The 3 things I changed
          </h2>

          <div className="mt-12 flex flex-col gap-16">
            {CHANGES.map((step, i) => (
              <div key={step.number}>
                {i > 0 && <hr className="mb-16 border-accent/30" />}

                <p className="font-display text-3xl font-medium text-accent-deep">
                  {step.number}
                </p>

                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <p className="font-nav text-xs font-medium text-muted uppercase">Before</p>
                    <h3 className="font-display mt-1 text-2xl font-medium text-ink">
                      {step.beforeLabel}
                    </h3>
                    <picture>
                      <source srcSet={`/media/${step.beforeImage}.webp`} type="image/webp" />
                      <img
                        src={`/media/${step.beforeImage}.png`}
                        alt={step.beforeAlt}
                        style={{ aspectRatio: step.beforeAspect }}
                        className="mt-6 w-full rounded-md object-cover"
                      />
                    </picture>
                    <p className="mt-3 text-center text-sm text-muted">{step.beforeCaption}</p>

                    {step.quote && (
                      <blockquote className="mt-8 text-base text-ink italic">
                        &quot;{step.quote.text}&quot;
                        <footer className="mt-1 text-sm text-muted not-italic">
                          {step.quote.attribution}
                        </footer>
                      </blockquote>
                    )}
                  </div>
                  <div className="relative">
                    <p className="font-nav text-xs font-medium text-muted uppercase">After</p>
                    <h3 className="font-display mt-1 text-2xl font-medium text-ink">
                      {step.afterLabel}
                    </h3>

                    <div className="relative mt-6">
                      <picture>
                        <source srcSet={`/media/${step.afterImage}.webp`} type="image/webp" />
                        <img
                          src={`/media/${step.afterImage}.png`}
                          alt={step.afterAlt}
                          style={{ aspectRatio: step.afterAspect }}
                          className="w-full rounded-md object-cover"
                        />
                      </picture>

                      {step.annotationDots && (
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute top-0 left-0 hidden h-full w-0 -translate-x-4 sm:block"
                        >
                          {/* One unbroken line: first dot, straight through the image, past its
                              bottom edge, then the hook's own path takes over for the last
                              stretch so the curve+arrowhead reads as the same stroke. */}
                          <div
                            className="absolute left-0 w-0 border-l-2 border-navy"
                            style={{
                              top: `${step.annotationDots[0]}%`,
                              height: `calc(${100 - step.annotationDots[0]}% + 70px)`,
                            }}
                          />
                          {step.annotationDots.map((y, idx) => (
                            <span
                              key={idx}
                              className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-navy"
                              style={{ top: `${y}%` }}
                            />
                          ))}
                          <AnnotationHook
                            className="absolute h-6 w-6 text-navy"
                            style={{ top: "calc(100% + 70px)", left: 0 }}
                          />
                        </div>
                      )}
                    </div>

                    <p className="mt-3 text-center text-sm text-muted">{step.afterCaption}</p>

                    <div className={`mt-10 flex flex-col gap-4 ${step.hideNumerals ? "pl-1" : "pl-6"}`}>
                      {step.takeaways.map((t, j) => (
                        <p key={t} className="text-base text-ink">
                          {!step.hideNumerals && (
                            <span className="font-medium text-accent-deep">
                              {String(j + 1).padStart(2, "0")}
                            </span>
                          )}
                          {!step.hideNumerals && " "}
                          {t}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div>
              <hr className="mb-16 border-accent/30" />

              <p className="font-display text-3xl font-medium text-accent-deep">
                {NEW_FEATURE.number}
              </p>
              <p className="mt-1 font-nav text-xs font-medium text-muted uppercase">New Feature</p>

              <div className="mt-8 flex max-w-2xl flex-col gap-4">
                {NEW_FEATURE.items.map(({ Icon, label, prefix, emphasis, suffix }) => (
                  <p key={label} className="flex items-start gap-3 text-xl leading-8 text-ink">
                    <Icon className="mt-1.5 h-6 w-6 shrink-0 text-ink" />
                    <span>
                      <span className="font-medium">{label}</span> {prefix}
                      <em className="italic">{emphasis}</em>
                      {suffix}
                    </span>
                  </p>
                ))}
              </div>

              {/* Desktop: annotated screenshot with connector line into the takeaways timeline */}
              <div
                className="relative mx-auto mt-16 hidden lg:block"
                style={{ width: 860 * 1.15, height: 560 * 1.15 }}
              >
               <div style={{ width: 860, height: 560, transform: "scale(1.15)", transformOrigin: "top left" }}>
                <picture>
                  <source srcSet={`/media/${NEW_FEATURE.image}.webp`} type="image/webp" />
                  <img
                    src={`/media/${NEW_FEATURE.image}.png`}
                    alt={NEW_FEATURE.alt}
                    className="absolute top-0 left-0 rounded-md object-cover"
                    style={{ width: 460, aspectRatio: NEW_FEATURE.aspect }}
                  />
                </picture>

                {/* Ring traced around the screenshot's own circular icon (the sidebar-icon
                    trigger), with a straight line pointing from its edge to the close-up. */}
                <span
                  className="absolute rounded-full border-2 border-navy"
                  style={{ left: 450, top: 9, width: 16, height: 16, transform: "translate(-50%, -50%)" }}
                />
                <div
                  className="absolute h-0 border-t-2 border-navy"
                  style={{ left: 457, top: 12, width: 128, transformOrigin: "0 0", transform: "rotate(22.8deg)" }}
                />

                <div className="absolute" style={{ width: 260, top: -95, left: 555 }}>
                  <picture>
                    <source srcSet={`/media/${NEW_FEATURE.closeUpImage}.webp`} type="image/webp" />
                    <img
                      src={`/media/${NEW_FEATURE.closeUpImage}.png`}
                      alt={NEW_FEATURE.closeUpAlt}
                      className="w-full"
                      style={{ aspectRatio: NEW_FEATURE.closeUpAspect }}
                    />
                  </picture>
                </div>

                {/* Straight trail down from the same ring to the takeaways, same precise
                    technique as the "01"/"02" screenshots. */}
                <div
                  className="absolute w-0 border-l-2 border-navy"
                  style={{ left: 450, top: 17, height: 100 }}
                />
                <AnnotationHook
                  className="absolute h-6 w-6 text-navy"
                  style={{ left: 450, top: 17 + 100 }}
                />

                <div className="absolute" style={{ left: 473, top: 124, width: 860 - 473 }}>
                  <ul className="flex flex-col gap-4">
                    {NEW_FEATURE.takeaways.map((t, j) => (
                      <li key={t} className="text-base text-ink">
                        <span className="font-medium text-accent-deep">
                          {String(j + 1).padStart(2, "0")}
                        </span>{" "}
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
               </div>
              </div>

              {/* Mobile/tablet: simple stacked fallback, no connector illustration */}
              <div className="mt-12 flex flex-col gap-8 lg:hidden">
                <div className="relative mx-auto w-full max-w-md">
                  <picture>
                    <source srcSet={`/media/${NEW_FEATURE.image}.webp`} type="image/webp" />
                    <img
                      src={`/media/${NEW_FEATURE.image}.png`}
                      alt={NEW_FEATURE.alt}
                      style={{ aspectRatio: NEW_FEATURE.aspect }}
                      className="w-full rounded-md object-cover"
                    />
                  </picture>
                  <div className="absolute -top-4 -right-4 w-[55%] sm:w-[45%]">
                    <picture>
                      <source srcSet={`/media/${NEW_FEATURE.closeUpImage}.webp`} type="image/webp" />
                      <img
                        src={`/media/${NEW_FEATURE.closeUpImage}.png`}
                        alt={NEW_FEATURE.closeUpAlt}
                        style={{ aspectRatio: NEW_FEATURE.closeUpAspect }}
                        className="w-full"
                      />
                    </picture>
                  </div>
                </div>

                <ul className="mx-auto flex w-full max-w-md flex-col gap-4">
                  {NEW_FEATURE.takeaways.map((t, j) => (
                    <li key={t} className="text-base text-ink">
                      <span className="font-medium text-accent-deep">
                        {String(j + 1).padStart(2, "0")}
                      </span>{" "}
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-decision-bg px-6 py-16 sm:px-10">
          <div className="mx-auto w-full max-w-6xl">
            <h2 className="font-display text-[36px] font-normal text-ink">Use cases</h2>

            <div className="flex flex-col gap-14">
              {USE_CASES.map((scenario) => (
                <div key={scenario.number} className="mt-10">
                  <p className="font-nav text-sm font-medium text-accent-deep uppercase">
                    Scenario {scenario.number}
                  </p>
                  <h3 className="font-display mt-1 text-xl font-medium text-ink">
                    {scenario.question}
                  </h3>

                  <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <picture className="sm:col-start-1 sm:row-start-1">
                      <source srcSet={`/media/${scenario.images[0].src}.webp`} type="image/webp" />
                      <img
                        src={`/media/${scenario.images[0].src}.png`}
                        alt={scenario.images[0].alt}
                        style={{
                          aspectRatio: scenario.images[0].aspect,
                          width: `${(scenario.images[0].scale ?? 1) * 100}%`,
                        }}
                        className="mx-auto rounded-md object-cover"
                      />
                    </picture>
                    <div className="rounded-md bg-surface p-6 sm:col-start-1 sm:row-start-2">
                      <h3 className="font-display text-xl font-medium text-accent-deep">
                        Consequence
                      </h3>
                      <p className="mt-2 text-base text-ink">{scenario.consequence}</p>
                    </div>
                    <picture className="sm:col-start-2 sm:row-start-1">
                      <source srcSet={`/media/${scenario.images[1].src}.webp`} type="image/webp" />
                      <img
                        src={`/media/${scenario.images[1].src}.png`}
                        alt={scenario.images[1].alt}
                        style={{
                          aspectRatio: scenario.images[1].aspect,
                          width: `${(scenario.images[1].scale ?? 1) * 100}%`,
                        }}
                        className="mx-auto rounded-md object-cover"
                      />
                    </picture>
                    <div className="rounded-md bg-surface p-6 sm:col-start-2 sm:row-start-2">
                      <h3 className="font-display text-xl font-medium text-accent-deep">
                        Guardrail
                      </h3>
                      <p className="mt-2 text-base text-ink">{scenario.guardrail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10">
          <h2 className="font-display text-[36px] font-normal text-ink">Video Prototype</h2>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-ink">
            The feature development workflow demonstrates how you work with
            coding agents that provide more visibility into their actions.
          </p>

          <div className="mt-8 flex flex-col items-center gap-8 sm:flex-row sm:justify-center">
            <video
              className="aspect-[850/1168] w-full max-w-sm rounded-md"
              controls
              muted
              playsInline
              poster="/media/claude-code-feature-workflow-poster.png"
            >
              <source src="/media/claude-code-feature-workflow.webm" type="video/webm" />
              <source src="/media/claude-code-feature-workflow.mp4" type="video/mp4" />
            </video>
            <video
              className="aspect-[844/1150] w-full max-w-sm rounded-md"
              controls
              muted
              playsInline
              poster="/media/claude-code-feature-workflow-2-poster.png"
            >
              <source src="/media/claude-code-feature-workflow-2.webm" type="video/webm" />
              <source src="/media/claude-code-feature-workflow-2.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10">
          <h2 className="font-display text-[36px] font-normal text-ink">Clickable Prototype</h2>

          <p className="mt-4 font-nav text-sm font-medium text-muted uppercase">Guidelines</p>
          <ol className="mt-4 flex flex-col gap-3">
            {GUIDELINES.map((item, i) => (
              <li key={item} className="max-w-2xl text-base text-ink">
                <span className="text-muted">{String(i + 1).padStart(2, "0")}</span> {item}
              </li>
            ))}
          </ol>

          <picture>
            <source srcSet="/media/claude-code-clickable-prototype.webp" type="image/webp" />
            <img
              src="/media/claude-code-clickable-prototype.png"
              alt="Clickable prototype VS Code interface showing the change-the-side-bar-icons flow and MCP server configuration"
              style={{ aspectRatio: "812/430" }}
              className="mt-6 w-full rounded-md object-cover"
            />
          </picture>

          <div className="mt-4 flex flex-wrap gap-6">
            <a
              href="https://irenecancode.github.io/Claude-Code-Re-design/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted underline"
            >
              Live prototype ↗
            </a>
            <a
              href="https://github.com/irenecancode/Claude-Code-Re-design"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted underline"
            >
              GitHub repo ↗
            </a>
          </div>
        </section>

        <section className="bg-decision-bg px-6 py-16 sm:px-10">
          <div className="mx-auto w-full max-w-6xl">
            <p className="font-nav text-sm font-medium text-muted uppercase">
              The Alternative Experiment
            </p>
            <Lead className="mt-4">
              Before proposing UI at all, I tested whether CLAUDE.md
              instructions could solve this without interface changes.
            </Lead>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div>
                <picture>
                  <source srcSet="/media/claude-code-alt-before.webp" type="image/webp" />
                  <img
                    src="/media/claude-code-alt-before.png"
                    alt="Terminal screenshot of the original experience before any CLAUDE.md guidance was added"
                    className="aspect-[4/5] w-full rounded-md object-cover"
                  />
                </picture>
                <p className="mt-2 text-center text-sm text-muted">Before</p>
              </div>
              <div>
                <picture>
                  <source srcSet="/media/claude-code-alt-md.webp" type="image/webp" />
                  <img
                    src="/media/claude-code-alt-md.png"
                    alt="Terminal screenshot of the same experience after adding personalized CLAUDE.md instructions"
                    className="aspect-[4/5] w-full rounded-md object-cover"
                  />
                </picture>
                <p className="mt-2 text-center text-sm text-muted">With CLAUDE.md</p>
              </div>
              <div>
                <picture>
                  <source srcSet="/media/claude-code-alt-proposed-ux.webp" type="image/webp" />
                  <img
                    src="/media/claude-code-alt-proposed-ux.png"
                    alt="Mockup of the proposed UI changes tested as an alternative to CLAUDE.md-only guidance"
                    className="aspect-[4/5] w-full rounded-md object-cover"
                  />
                </picture>
                <p className="mt-2 text-center text-sm text-muted">Proposed UX</p>
              </div>
            </div>

            <h3 className="font-display mt-10 text-xl font-medium text-ink">
              Are UI changes needed if you can personalize CLAUDE.md?
            </h3>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                <caption className="sr-only">
                  Comparison of CLAUDE.md-only guidance versus the proposed UI, against four user
                  problems
                </caption>
                <thead>
                  <tr className="border-b border-ink/10">
                    <th scope="col" className="py-3 pr-4 font-nav font-medium text-ink">
                      Problem
                    </th>
                    {COMPARISON_COLUMNS.map((col) => (
                      <th key={col} scope="col" className="py-3 pr-4 font-nav font-medium text-ink">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row, i) => (
                    <tr
                      key={row.label}
                      className={i < COMPARISON_ROWS.length - 1 ? "border-b border-ink/10" : ""}
                    >
                      <th scope="row" className="py-3 pr-4 font-nav font-medium text-ink">
                        {row.label}
                      </th>
                      {row.values.map((value, j) => (
                        <td
                          key={j}
                          className={value === "Yes" ? "py-3 pr-4 text-accent-deep" : "py-3 pr-4 text-muted"}
                        >
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-10 font-nav text-sm font-medium text-muted uppercase">Summary</p>
            <ol className="mt-4 flex flex-col gap-3">
              <li className="max-w-2xl text-base text-ink">
                <span className="text-muted">01</span> Coding agent UX is more than just text
                prompts and responses. UI changes are needed too.
              </li>
              <li className="max-w-2xl text-base text-ink">
                <span className="text-muted">02</span> These complement CLAUDE.md files instead
                of competing with them.
              </li>
            </ol>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10">
          <ReflectionCard
            heading="I challenge my own answer before anyone else can."
            body="Before proposing any UI, I tested the counterargument: could better CLAUDE.md instructions solve this with no interface changes at all? Mapping exactly where they fall short is what made the final design defensible instead of just plausible."
            closing="Given more time, I'd design what the change log becomes when you share it: a structured session summary a developer can hand to teammates, covering what changed, why, and what needs review, instead of a raw list of results."
          />
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10">
          <h2 className="font-display text-[36px] font-normal text-ink">Read more</h2>
          <div className="mx-auto mt-10 grid w-full grid-cols-1 gap-8 sm:grid-cols-2">
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
              headline="A 0-to-1 Video Annotation Platform for Dancers"
              body="Bridging the gap between video discovery and physical practice with a seamless, one-stop annotation experience, designed and built in code with an engineer."
              tags={["TypeScript", "Front-End Development", "Live Product"]}
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
