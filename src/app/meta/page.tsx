import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { ReflectionCard } from "@/components/ReflectionCard";
import { Reveal } from "@/components/Reveal";
import { Lead } from "@/components/Lead";
import { SummaryGrid, type SummaryField } from "@/components/SummaryGrid";
import { PhaseTabs } from "@/components/PhaseTabs";
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
  title: "Meta · Irene Cheung",
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

/* Research-phase decision tree (from the frequency-x-severity brainstorm,
   2026-08-28). Same visual language as the Tanmigo annotation tree: chip
   diamonds, stone #57534e lines with solid arrowheads, reflection-bg
   outcomes. Sits inside the phase flow's white card. */
function ResearchPhaseTree() {
  return (
    <>
    <div
      tabIndex={0}
      role="group"
      aria-label="Research-phase decision tree, scrolls sideways"
      className="overflow-x-auto overscroll-x-contain"
    >
    <svg
      viewBox="0 0 940 1140"
      role="img"
      aria-label="Research-phase decision tree: a pain point spotted in the lab is first checked for repetition. One-off pain is triaged by severity into a guardrail or a watchlist. Repetitive pain is checked against tracked metrics, and a miss means fixing the measurement first. Evidence that supports the PM or engineer's claim is attached to the claim; evidence that contradicts it must be reproduced, then shown in the listener's language, leading into the design phase."
      className="mx-auto block h-auto w-full min-w-[680px] max-w-4xl"
    >
      <defs>
        <marker id="res-arrow" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8 Z" fill="#57534e" />
        </marker>
      </defs>

      {/* start */}
      <rect x="350" y="8" width="240" height="56" rx="8" fill="var(--color-surface)" stroke="#57534e" strokeWidth="1.5" />
      <text x="470" y="42" textAnchor="middle" fontSize="15" fontWeight="500" fill="var(--color-ink)">Pain point spotted in the lab</text>
      <line x1="470" y1="64" x2="470" y2="106" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#res-arrow)" />

      {/* D1: repetitive? */}
      <polygon points="470,113 575,185 470,257 365,185" fill="var(--color-chip)" />
      <text x="470" y="190" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">Is it repetitive?</text>
      <path d="M365 185 H214 Q200 185 200 199 V268" fill="none" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#res-arrow)" />
      <text x="300" y="177" textAnchor="middle" fontSize="12" letterSpacing="1" fill="var(--color-muted)">NO</text>
      <line x1="470" y1="257" x2="470" y2="312" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#res-arrow)" />
      <text x="484" y="292" fontSize="12" letterSpacing="1" fill="var(--color-muted)">YES</text>

      {/* D1b: one-time severity triage */}
      <polygon points="200,274 305,340 200,406 95,340" fill="var(--color-chip)" />
      <text x="200" y="332" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">Was the one-time</text>
      <text x="200" y="354" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">impact severe?</text>
      <path d="M200 406 V420 Q200 434 186 434 H134 Q120 434 120 448 V464" fill="none" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#res-arrow)" />
      <path d="M200 406 V420 Q200 434 214 434 H306 Q320 434 320 448 V464" fill="none" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#res-arrow)" />
      <text x="140" y="426" textAnchor="middle" fontSize="12" letterSpacing="1" fill="var(--color-muted)">YES</text>
      <text x="266" y="426" textAnchor="middle" fontSize="12" letterSpacing="1" fill="var(--color-muted)">NO</text>
      <rect x="30" y="470" width="180" height="64" rx="8" fill="var(--color-reflection-bg)" stroke="rgba(0,0,0,0.08)" />
      <text x="120" y="496" textAnchor="middle" fontSize="15" fill="var(--color-ink)">Treat it as a risk:</text>
      <text x="120" y="518" textAnchor="middle" fontSize="15" fill="var(--color-ink)">design a guardrail</text>
      <rect x="230" y="470" width="180" height="64" rx="8" fill="var(--color-reflection-bg)" stroke="rgba(0,0,0,0.08)" />
      <text x="320" y="496" textAnchor="middle" fontSize="15" fill="var(--color-ink)">Log it and watch</text>
      <text x="320" y="518" textAnchor="middle" fontSize="15" fill="var(--color-ink)">for recurrence</text>

      {/* D2: metric gate */}
      <polygon points="470,318 590,400 470,482 350,400" fill="var(--color-chip)" />
      <text x="470" y="394" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">Is it related to</text>
      <text x="470" y="416" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">the metrics?</text>
      <path d="M590 400 H726 Q740 400 740 414 V474" fill="none" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#res-arrow)" />
      <text x="645" y="392" textAnchor="middle" fontSize="12" letterSpacing="1" fill="var(--color-muted)">NO</text>
      <rect x="630" y="480" width="220" height="64" rx="8" fill="var(--color-reflection-bg)" stroke="rgba(0,0,0,0.08)" />
      <text x="740" y="506" textAnchor="middle" fontSize="15" fill="var(--color-ink)">A metric is missing.</text>
      <text x="740" y="528" textAnchor="middle" fontSize="15" fill="var(--color-ink)">Fix the measurement first</text>
      <line x1="470" y1="482" x2="470" y2="534" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#res-arrow)" />
      <text x="484" y="514" fontSize="12" letterSpacing="1" fill="var(--color-muted)">YES</text>

      {/* D3: claim gate */}
      <polygon points="470,540 600,625 470,710 340,625" fill="var(--color-chip)" />
      <text x="470" y="618" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">Does it support the</text>
      <text x="470" y="640" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">PM or engineer&apos;s claim?</text>
      <path d="M600 625 H746 Q760 625 760 639 V684" fill="none" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#res-arrow)" />
      <text x="655" y="617" textAnchor="middle" fontSize="12" letterSpacing="1" fill="var(--color-muted)">YES</text>
      <rect x="650" y="690" width="220" height="64" rx="8" fill="var(--color-reflection-bg)" stroke="rgba(0,0,0,0.08)" />
      <text x="760" y="716" textAnchor="middle" fontSize="15" fill="var(--color-ink)">Attach the evidence</text>
      <text x="760" y="738" textAnchor="middle" fontSize="15" fill="var(--color-ink)">to the claim</text>
      <line x1="470" y1="710" x2="470" y2="764" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#res-arrow)" />
      <text x="484" y="742" fontSize="12" letterSpacing="1" fill="var(--color-muted)">NO</text>

      {/* D4: reproduce gate */}
      <polygon points="470,770 585,840 470,910 355,840" fill="var(--color-chip)" />
      <text x="470" y="845" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">Can I reproduce it?</text>
      <path d="M355 840 H214 Q200 840 200 854 V914" fill="none" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#res-arrow)" />
      <text x="280" y="832" textAnchor="middle" fontSize="12" letterSpacing="1" fill="var(--color-muted)">NO</text>
      <rect x="110" y="920" width="180" height="64" rx="8" fill="var(--color-reflection-bg)" stroke="rgba(0,0,0,0.08)" />
      <text x="200" y="946" textAnchor="middle" fontSize="15" fill="var(--color-ink)">Keep collecting</text>
      <text x="200" y="968" textAnchor="middle" fontSize="15" fill="var(--color-ink)">evidence</text>
      <line x1="470" y1="910" x2="470" y2="960" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#res-arrow)" />
      <text x="484" y="940" fontSize="12" letterSpacing="1" fill="var(--color-muted)">YES</text>

      {/* final outcome, handing off to the design phase */}
      <rect x="320" y="966" width="300" height="88" rx="8" fill="var(--color-reflection-bg)" stroke="rgba(0,0,0,0.08)" />
      <text x="470" y="994" textAnchor="middle" fontSize="15" fill="var(--color-ink)">Show it in the listener&apos;s language:</text>
      <text x="470" y="1016" textAnchor="middle" fontSize="15" fill="var(--color-ink)">metrics for the PM,</text>
      <text x="470" y="1038" textAnchor="middle" fontSize="15" fill="var(--color-ink)">feasibility for the engineer</text>
      <line x1="470" y1="1054" x2="470" y2="1094" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#res-arrow)" />
      <g data-phase-link="1" role="button" tabIndex={0} aria-label="Open the design phase tab" className="cursor-pointer">
        <text x="470" y="1122" textAnchor="middle" fontSize="12" letterSpacing="1" textDecoration="underline" fill="var(--color-accent-deep)">DESIGN PHASE</text>
      </g>
    </svg>
    </div>
    <p className="mt-3 text-sm text-muted min-[760px]:hidden">
      Scroll sideways to see the whole diagram.
    </p>
    </>
  );
}

/* Design-phase decision tree (brainstorm 2026-08-28). Cyclic where the
   research tree is a funnel: failed gates feed one shared Iterate node on
   the left edge, which loops back to the top of the phase. Constraint
   failures exit right to an engineer sync instead (iterating alone cannot
   answer a feasibility question). Same Tanmigo tree language. */
function DesignPhaseTree() {
  return (
    <>
    <div
      tabIndex={0}
      role="group"
      aria-label="Design-phase decision tree, scrolls sideways"
      className="overflow-x-auto overscroll-x-contain"
    >
    <svg
      viewBox="0 -100 940 1850"
      role="img"
      aria-label="Design-phase decision tree: a new design is first checked against technical constraints, and a failure exits to an engineer sync asking whether the limit is hard or negotiable. Then gates for covered edge cases, the design already considering how to handle unknown edge cases (a no means keeping a human in the loop and making the system communicate the unknown well for error handling, then continuing), users knowing how to recover from errors, users knowing when to pull in an engineer, the design holding across all three rigs, and reusing an existing pattern versus inventing one (inventing must be justified or fall back to the design system). Failed gates loop back through a shared Iterate node. The final gate, being able to explain what the added code does, leads to the testing phase; failing it means revising the code."
      className="mx-auto block h-auto w-full min-w-[680px] max-w-4xl"
    >
      <defs>
        <marker id="des-arrow" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8 Z" fill="#57534e" />
        </marker>
      </defs>

      {/* start */}
      <rect x="370" y="-92" width="200" height="56" rx="8" fill="var(--color-surface)" stroke="#57534e" strokeWidth="1.5" />
      <text x="470" y="-58" textAnchor="middle" fontSize="15" fontWeight="500" fill="var(--color-ink)">New design</text>
      <line x1="470" y1="-36" x2="470" y2="22" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#des-arrow)" />

      {/* D1: technical constraints */}
      <polygon points="470,30 610,90 470,150 330,90" fill="var(--color-chip)" />
      <text x="470" y="84" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">Does it fit the</text>
      <text x="470" y="106" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">technical constraints?</text>
      <path d="M610 90 H736 Q750 90 750 104 V150" fill="none" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#des-arrow)" />
      <text x="660" y="82" textAnchor="middle" fontSize="12" letterSpacing="1" fill="var(--color-muted)">NO</text>
      <rect x="630" y="156" width="240" height="64" rx="8" fill="var(--color-reflection-bg)" stroke="rgba(0,0,0,0.08)" />
      <text x="750" y="182" textAnchor="middle" fontSize="15" fill="var(--color-ink)">Sync with the engineer:</text>
      <text x="750" y="204" textAnchor="middle" fontSize="15" fill="var(--color-ink)">hard limit or negotiable?</text>
      <line x1="470" y1="150" x2="470" y2="224" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#des-arrow)" />
      <text x="484" y="172" fontSize="12" letterSpacing="1" fill="var(--color-muted)">YES</text>

      {/* shared Iterate node; failed gates loop back in above D2 */}
      <rect x="30" y="150" width="120" height="64" rx="8" fill="var(--color-surface)" stroke="#57534e" strokeWidth="1.5" />
      <text x="90" y="188" textAnchor="middle" fontSize="15" fontWeight="500" fill="var(--color-ink)">Iterate</text>
      <path d="M90 150 V104 Q90 90 104 90 H322" fill="none" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#des-arrow)" />

      {/* D2: covered edge cases */}
      <polygon points="470,230 590,290 470,350 350,290" fill="var(--color-chip)" />
      <text x="470" y="284" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">Did we cover</text>
      <text x="470" y="306" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">the edge cases too?</text>
      <path d="M350 290 H104 Q90 290 90 276 V218" fill="none" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#des-arrow)" />
      <text x="300" y="282" textAnchor="middle" fontSize="12" letterSpacing="1" fill="var(--color-muted)">NO</text>
      <line x1="470" y1="350" x2="470" y2="404" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#des-arrow)" />
      <text x="484" y="384" fontSize="12" letterSpacing="1" fill="var(--color-muted)">YES</text>

      {/* D3: unknown edge cases; a NO designs the handling, then merges back */}
      <polygon points="470,410 600,470 470,530 340,470" fill="var(--color-chip)" />
      <text x="470" y="464" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">Does the design handle</text>
      <text x="470" y="486" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">unknown edge cases yet?</text>
      <path d="M600 470 H736 Q750 470 750 484 V534" fill="none" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#des-arrow)" />
      <text x="650" y="462" textAnchor="middle" fontSize="12" letterSpacing="1" fill="var(--color-muted)">NO</text>
      <rect x="630" y="540" width="240" height="106" rx="8" fill="var(--color-reflection-bg)" stroke="rgba(0,0,0,0.08)" />
      <text x="750" y="568" textAnchor="middle" fontSize="15" fill="var(--color-ink)">Keep human in the loop,</text>
      <text x="750" y="590" textAnchor="middle" fontSize="15" fill="var(--color-ink)">and make sure the system</text>
      <text x="750" y="612" textAnchor="middle" fontSize="15" fill="var(--color-ink)">communicates the unknown</text>
      <text x="750" y="634" textAnchor="middle" fontSize="15" fill="var(--color-ink)">well for error handling</text>
      <line x1="470" y1="530" x2="470" y2="684" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#des-arrow)" />
      <text x="484" y="560" fontSize="12" letterSpacing="1" fill="var(--color-muted)">YES</text>
      <path d="M750 646 V736 Q750 750 736 750 H606" fill="none" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#des-arrow)" />

      {/* D4: error recovery */}
      <polygon points="470,690 600,750 470,810 340,750" fill="var(--color-chip)" />
      <text x="470" y="744" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">Do our users know how to</text>
      <text x="470" y="766" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">proceed with error recovery?</text>
      <path d="M340 750 H104 Q90 750 90 736 V290" fill="none" stroke="#57534e" strokeWidth="1.5" />
      <text x="300" y="742" textAnchor="middle" fontSize="12" letterSpacing="1" fill="var(--color-muted)">NO</text>
      <line x1="470" y1="810" x2="470" y2="884" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#des-arrow)" />
      <text x="484" y="864" fontSize="12" letterSpacing="1" fill="var(--color-muted)">YES</text>

      {/* D5: when to pull in an engineer */}
      <polygon points="470,890 600,950 470,1010 340,950" fill="var(--color-chip)" />
      <text x="470" y="944" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">Do they know when to</text>
      <text x="470" y="966" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">pull in an engineer too?</text>
      <path d="M340 950 H104 Q90 950 90 936 V750" fill="none" stroke="#57534e" strokeWidth="1.5" />
      <text x="300" y="942" textAnchor="middle" fontSize="12" letterSpacing="1" fill="var(--color-muted)">NO</text>
      <line x1="470" y1="1010" x2="470" y2="1084" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#des-arrow)" />
      <text x="484" y="1064" fontSize="12" letterSpacing="1" fill="var(--color-muted)">YES</text>

      {/* D6: the three-rigs gate */}
      <polygon points="470,1090 590,1150 470,1210 350,1150" fill="var(--color-chip)" />
      <text x="470" y="1144" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">Does it hold across</text>
      <text x="470" y="1166" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">all three rigs?</text>
      <path d="M350 1150 H104 Q90 1150 90 1136 V950" fill="none" stroke="#57534e" strokeWidth="1.5" />
      <text x="300" y="1142" textAnchor="middle" fontSize="12" letterSpacing="1" fill="var(--color-muted)">NO</text>
      <line x1="470" y1="1210" x2="470" y2="1244" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#des-arrow)" />
      <text x="484" y="1234" fontSize="12" letterSpacing="1" fill="var(--color-muted)">YES</text>

      {/* D7: reuse or invent; inventing must be justified, then merges back */}
      <polygon points="470,1250 610,1310 470,1370 330,1310" fill="var(--color-chip)" />
      <text x="470" y="1304" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">Am I reusing an existing</text>
      <text x="470" y="1326" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">pattern or inventing one?</text>
      <path d="M610 1310 H736 Q750 1310 750 1324 V1380" fill="none" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#des-arrow)" />
      <text x="672" y="1302" textAnchor="middle" fontSize="12" letterSpacing="1" fill="var(--color-muted)">INVENTING</text>
      <rect x="630" y="1386" width="240" height="64" rx="8" fill="var(--color-reflection-bg)" stroke="rgba(0,0,0,0.08)" />
      <text x="750" y="1412" textAnchor="middle" fontSize="15" fill="var(--color-ink)">Justify it, or fall back</text>
      <text x="750" y="1434" textAnchor="middle" fontSize="15" fill="var(--color-ink)">to the design system</text>
      <line x1="470" y1="1370" x2="470" y2="1504" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#des-arrow)" />
      <text x="484" y="1404" fontSize="12" letterSpacing="1" fill="var(--color-muted)">REUSING</text>
      <path d="M750 1450 V1566 Q750 1580 736 1580 H606" fill="none" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#des-arrow)" />

      {/* D8: the designer-who-ships gate */}
      <polygon points="470,1510 600,1580 470,1650 340,1580" fill="var(--color-chip)" />
      <text x="470" y="1574" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">Can I explain the high-level</text>
      <text x="470" y="1596" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">summary of the added code?</text>
      <path d="M340 1580 H214 Q200 1580 200 1594 V1654" fill="none" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#des-arrow)" />
      <text x="280" y="1572" textAnchor="middle" fontSize="12" letterSpacing="1" fill="var(--color-muted)">NO</text>
      <rect x="110" y="1660" width="180" height="52" rx="8" fill="var(--color-reflection-bg)" stroke="rgba(0,0,0,0.08)" />
      <text x="200" y="1691" textAnchor="middle" fontSize="15" fill="var(--color-ink)">Revise the code</text>
      <line x1="470" y1="1650" x2="470" y2="1700" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#des-arrow)" />
      <text x="484" y="1682" fontSize="12" letterSpacing="1" fill="var(--color-muted)">YES</text>
      <g data-phase-link="2" role="button" tabIndex={0} aria-label="Open the testing phase tab" className="cursor-pointer">
        <text x="470" y="1730" textAnchor="middle" fontSize="12" letterSpacing="1" textDecoration="underline" fill="var(--color-accent-deep)">TESTING PHASE</text>
      </g>
    </svg>
    </div>
    <p className="mt-3 text-sm text-muted min-[760px]:hidden">
      Scroll sideways to see the whole diagram.
    </p>
    </>
  );
}

/* Testing-phase decision tree (brainstorm 2026-08-28). Starts from the
   prototype, ends where the section's arrow-chain lead ends: ship in
   increments. Failed gates route back to the design or research phase;
   the error-rate gate closes the loop with the research phase's metrics. */
function TestingPhaseTree() {
  return (
    <>
    <div
      tabIndex={0}
      role="group"
      aria-label="Testing-phase decision tree, scrolls sideways"
      className="overflow-x-auto overscroll-x-contain"
    >
    <svg
      viewBox="0 0 940 1350"
      role="img"
      aria-label="Testing-phase decision tree: a prototype must be tested in a real session rather than a demo, users must understand it without explanation (a no goes back to the design phase), and the error rate must move against the baseline; if it does not, the follow-up asks whether the fix or the metric was wrong, routing back to the design or research phase. Trade-offs that break a non-negotiable mean redesigning around it. If someone's wishlist is not achievable, the tree asks whether they would be happy with an alternative: yes offers the alternative, no renegotiates the scope. Passing every gate ends at ship in increments."
      className="mx-auto block h-auto w-full min-w-[680px] max-w-4xl"
    >
      <defs>
        <marker id="test-arrow" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8 Z" fill="#57534e" />
        </marker>
      </defs>

      {/* start */}
      <rect x="370" y="8" width="200" height="56" rx="8" fill="var(--color-surface)" stroke="#57534e" strokeWidth="1.5" />
      <text x="470" y="42" textAnchor="middle" fontSize="15" fontWeight="500" fill="var(--color-ink)">Prototype</text>
      <line x1="470" y1="64" x2="470" y2="106" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#test-arrow)" />

      {/* D1: real conditions */}
      <polygon points="470,113 600,185 470,257 340,185" fill="var(--color-chip)" />
      <text x="470" y="179" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">Did we test it in a real</text>
      <text x="470" y="201" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">session, not a demo?</text>
      <path d="M600 185 H736 Q750 185 750 199 V250" fill="none" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#test-arrow)" />
      <text x="650" y="177" textAnchor="middle" fontSize="12" letterSpacing="1" fill="var(--color-muted)">NO</text>
      <rect x="630" y="256" width="240" height="64" rx="8" fill="var(--color-reflection-bg)" stroke="rgba(0,0,0,0.08)" />
      <text x="750" y="282" textAnchor="middle" fontSize="15" fill="var(--color-ink)">Run it again in a</text>
      <text x="750" y="304" textAnchor="middle" fontSize="15" fill="var(--color-ink)">real capture session</text>
      <line x1="470" y1="257" x2="470" y2="312" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#test-arrow)" />
      <text x="484" y="292" fontSize="12" letterSpacing="1" fill="var(--color-muted)">YES</text>

      {/* D2: unexplained use */}
      <polygon points="470,318 600,390 470,462 340,390" fill="var(--color-chip)" />
      <text x="470" y="384" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">Do users understand it</text>
      <text x="470" y="406" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">without me explaining?</text>
      <path d="M340 390 H214 Q200 390 200 404 V455" fill="none" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#test-arrow)" />
      <text x="300" y="382" textAnchor="middle" fontSize="12" letterSpacing="1" fill="var(--color-muted)">NO</text>
      <g data-phase-link="1" role="button" tabIndex={0} aria-label="Open the design phase tab" className="cursor-pointer">
        <rect x="90" y="461" width="220" height="64" rx="8" fill="var(--color-reflection-bg)" stroke="rgba(0,0,0,0.08)" />
        <text x="200" y="487" textAnchor="middle" fontSize="15" textDecoration="underline" fill="var(--color-accent-deep)">Back to the</text>
        <text x="200" y="509" textAnchor="middle" fontSize="15" textDecoration="underline" fill="var(--color-accent-deep)">design phase</text>
      </g>
      <line x1="470" y1="462" x2="470" y2="517" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#test-arrow)" />
      <text x="484" y="497" fontSize="12" letterSpacing="1" fill="var(--color-muted)">YES</text>

      {/* D3: the metric gate, closing the loop with the research phase */}
      <polygon points="470,523 610,595 470,667 330,595" fill="var(--color-chip)" />
      <text x="470" y="589" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">Did the error rate move</text>
      <text x="470" y="611" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">against the baseline?</text>
      <path d="M610 595 H726 Q740 595 740 609 V656" fill="none" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#test-arrow)" />
      <text x="660" y="587" textAnchor="middle" fontSize="12" letterSpacing="1" fill="var(--color-muted)">NO</text>
      <polygon points="740,662 855,730 740,798 625,730" fill="var(--color-chip)" />
      <text x="740" y="724" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">Wrong fix, or</text>
      <text x="740" y="746" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">wrong metric?</text>
      <path d="M740 798 V812 Q740 826 726 826 H644 Q630 826 630 840 V856" fill="none" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#test-arrow)" />
      <path d="M740 798 V812 Q740 826 754 826 H836 Q850 826 850 840 V856" fill="none" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#test-arrow)" />
      <text x="672" y="818" textAnchor="middle" fontSize="12" letterSpacing="1" fill="var(--color-muted)">FIX</text>
      <text x="814" y="818" textAnchor="middle" fontSize="12" letterSpacing="1" fill="var(--color-muted)">METRIC</text>
      <g data-phase-link="1" role="button" tabIndex={0} aria-label="Open the design phase tab" className="cursor-pointer">
        <rect x="535" y="862" width="190" height="64" rx="8" fill="var(--color-reflection-bg)" stroke="rgba(0,0,0,0.08)" />
        <text x="630" y="888" textAnchor="middle" fontSize="15" textDecoration="underline" fill="var(--color-accent-deep)">Back to the</text>
        <text x="630" y="910" textAnchor="middle" fontSize="15" textDecoration="underline" fill="var(--color-accent-deep)">design phase</text>
      </g>
      <g data-phase-link="0" role="button" tabIndex={0} aria-label="Open the research phase tab" className="cursor-pointer">
        <rect x="755" y="862" width="180" height="64" rx="8" fill="var(--color-reflection-bg)" stroke="rgba(0,0,0,0.08)" />
        <text x="845" y="888" textAnchor="middle" fontSize="15" textDecoration="underline" fill="var(--color-accent-deep)">Back to the</text>
        <text x="845" y="910" textAnchor="middle" fontSize="15" textDecoration="underline" fill="var(--color-accent-deep)">research phase</text>
      </g>
      <line x1="470" y1="667" x2="470" y2="722" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#test-arrow)" />
      <text x="484" y="702" fontSize="12" letterSpacing="1" fill="var(--color-muted)">YES</text>

      {/* D4: trade-offs vs non-negotiables */}
      <polygon points="470,728 610,800 470,872 330,800" fill="var(--color-chip)" />
      <text x="470" y="794" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">Do the trade-offs break</text>
      <text x="470" y="816" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">a non-negotiable?</text>
      <path d="M330 800 H214 Q200 800 200 814 V865" fill="none" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#test-arrow)" />
      <text x="290" y="792" textAnchor="middle" fontSize="12" letterSpacing="1" fill="var(--color-muted)">YES</text>
      <rect x="90" y="871" width="220" height="64" rx="8" fill="var(--color-reflection-bg)" stroke="rgba(0,0,0,0.08)" />
      <text x="200" y="897" textAnchor="middle" fontSize="15" fill="var(--color-ink)">Redesign around</text>
      <text x="200" y="919" textAnchor="middle" fontSize="15" fill="var(--color-ink)">the non-negotiable</text>
      <line x1="470" y1="872" x2="470" y2="927" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#test-arrow)" />
      <text x="484" y="907" fontSize="12" letterSpacing="1" fill="var(--color-muted)">NO</text>

      {/* D5: the wishlist negotiation */}
      <polygon points="470,933 610,1005 470,1077 330,1005" fill="var(--color-chip)" />
      <text x="470" y="999" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">Is someone&apos;s wishlist</text>
      <text x="470" y="1021" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">not achievable?</text>
      <path d="M610 1005 H736 Q750 1005 750 1019 V1066" fill="none" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#test-arrow)" />
      <text x="660" y="997" textAnchor="middle" fontSize="12" letterSpacing="1" fill="var(--color-muted)">YES</text>
      <polygon points="750,1072 865,1140 750,1208 635,1140" fill="var(--color-chip)" />
      <text x="750" y="1134" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">Would they be happy</text>
      <text x="750" y="1156" textAnchor="middle" fontSize="15" fill="var(--color-accent-deep)">with an alternative?</text>
      <path d="M750 1208 V1222 Q750 1236 736 1236 H654 Q640 1236 640 1250 V1266" fill="none" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#test-arrow)" />
      <path d="M750 1208 V1222 Q750 1236 764 1236 H846 Q860 1236 860 1250 V1266" fill="none" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#test-arrow)" />
      <text x="682" y="1228" textAnchor="middle" fontSize="12" letterSpacing="1" fill="var(--color-muted)">YES</text>
      <text x="818" y="1228" textAnchor="middle" fontSize="12" letterSpacing="1" fill="var(--color-muted)">NO</text>
      <rect x="545" y="1272" width="190" height="64" rx="8" fill="var(--color-reflection-bg)" stroke="rgba(0,0,0,0.08)" />
      <text x="640" y="1298" textAnchor="middle" fontSize="15" fill="var(--color-ink)">Offer the</text>
      <text x="640" y="1320" textAnchor="middle" fontSize="15" fill="var(--color-ink)">alternative</text>
      <rect x="765" y="1272" width="170" height="64" rx="8" fill="var(--color-reflection-bg)" stroke="rgba(0,0,0,0.08)" />
      <text x="850" y="1298" textAnchor="middle" fontSize="15" fill="var(--color-ink)">Renegotiate</text>
      <text x="850" y="1320" textAnchor="middle" fontSize="15" fill="var(--color-ink)">the scope</text>
      <line x1="470" y1="1077" x2="470" y2="1132" stroke="#57534e" strokeWidth="1.5" markerEnd="url(#test-arrow)" />
      <text x="484" y="1112" fontSize="12" letterSpacing="1" fill="var(--color-muted)">NO</text>

      {/* the section's promise, kept */}
      <rect x="350" y="1138" width="240" height="56" rx="8" fill="var(--color-surface)" stroke="#57534e" strokeWidth="1.5" />
      <text x="470" y="1172" textAnchor="middle" fontSize="15" fontWeight="500" fill="var(--color-ink)">Ship in increments</text>
    </svg>
    </div>
    <p className="mt-3 text-sm text-muted min-[760px]:hidden">
      Scroll sideways to see the whole diagram.
    </p>
    </>
  );
}

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
      <div>
        <Header active="none" />

        <section className="mx-auto w-full max-w-6xl px-6 pt-4 pb-16 sm:px-10 sm:pt-8 sm:pb-24">

          <h1 className="font-display mt-8 w-full text-[32px] leading-tight font-normal text-ink sm:text-[40px] lg:whitespace-nowrap">
            The capture dashboard behind Meta&apos;s Codec Avatars
          </h1>
          <p className="mt-4 w-full text-lg leading-7 text-ink">
            Redesigning the internal tool that orchestrates 300+ camera and
            sensor streams, as the team&apos;s only designer and a daily
            operator of the system.
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

          <Lead className="mt-10">
            Hired to run the captures, I became the team&apos;s only
            designer and redesigned the dashboard I used every day.
          </Lead>
          <p className="mt-4 w-full text-lg leading-7 text-ink">
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
        </Reveal>

        <Reveal as="section" className="bg-reflection-bg py-14 sm:py-16">
          <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
            <p className="font-nav text-sm font-medium text-muted uppercase">Background</p>
            <Lead className="mt-4">
              Codec Avatars represent Meta&apos;s long-term research project
              to create photorealistic, real-time digital identities that use
              neural networks to mirror human expression and presence in&nbsp;VR.
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
              className="mt-2 inline-block text-sm text-accent-deep underline underline-offset-2 hover:no-underline"
            >
              Source
            </a>
          </div>
        </Reveal>

        <Reveal as="section" className="w-full py-10">
          <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
            <h2 className="font-display text-[36px] font-normal text-ink/80">
              For a bit of context
            </h2>
            <div>
              <p className="mt-4 text-lg leading-7 text-ink">
                This is the exact physical infrastructure I designed for, and
                operated daily. A capture session inside this dome runs 300+
                synchronized camera and IMU streams at once.
              </p>

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
        </Reveal>

        <Reveal as="section" className="bg-decision-bg py-14 sm:py-16">
          <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
            <h2 className="font-display text-[36px] font-normal text-ink/80">How I ran it</h2>
            <Lead className="mt-4">
              Audit the existing dashboard → shadow and interview operators
              (myself included) → clickable prototypes → engineering review →
              operator testing → ship in increments
            </Lead>

          <p className="mt-4 w-full max-w-3xl text-lg leading-7 text-ink">
            These are the questions I ask myself as I design. There are no
            standard procedures, always case by case. Indeed, in some work
            environments, like a leaner team, things get shipped without user
            testing. But in the case of Meta, the dashboard was not only used
            by the lab I worked for, it impacted multiple locations. I need to be
            able to challenge my design well before it breaks.
          </p>

          </div>
        </Reveal>

        <Reveal as="section" className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-10">
            <PhaseTabs
              tabs={[
                { label: "Research phase", content: <ResearchPhaseTree /> },
                { label: "Design phase", content: <DesignPhaseTree /> },
                { label: "Testing phase", content: <TestingPhaseTree /> },
              ]}
            />
        </Reveal>

        <Reveal as="section" className="w-full py-10">
          <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
            <h2 className="font-display text-[36px] font-normal text-ink/80">
              I design technical tools in three layers, from the backend up
            </h2>
            <div>
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
                    {i > 0 && <hr className="mb-10 border-ink/10" />}
                    <span className="inline-block rounded-full bg-navy px-5 py-2 font-nav text-sm font-medium text-white transition-[filter] duration-200 hover:brightness-90">
                      {layer.label}
                    </span>
                    <p className="mt-4 text-xl leading-8 text-muted">{layer.question}</p>
                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                      {layer.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-navy-tint px-3 py-1 text-xs font-medium text-navy transition-colors duration-200 hover:bg-navy hover:text-white"
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
        </Reveal>

        <Reveal as="section" className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-10">
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
        </Reveal>

        <Reveal as="section" className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-10">
          <h2 className="font-display text-[36px] font-normal text-ink/80">Read more</h2>
          <div className="mx-auto mt-10 grid w-full grid-cols-1 gap-8 sm:grid-cols-2">
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
        </Reveal>

        <BackToTop />
      </main>

      <div className="bg-grid-paper">
        <Footer />
      </div>
    </div>
  );
}
