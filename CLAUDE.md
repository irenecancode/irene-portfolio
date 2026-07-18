@AGENTS.md
# CLAUDE.md — the rules for my portfolio site

Hi, I'm Irene. This file keeps my coding agents (and me) honest while we
build irenecheung.net together in Next.js + Tailwind + TypeScript. The repo
is public, so this file has two audiences: the agent working in this repo,
and anyone who found it through my site.

If you're here to borrow: the sections people usually want are
**Accessibility**, **Tech gotchas**, and **The no-GIF motion pattern**.
They're written so you can paste them into your own CLAUDE.md — swap my
hex codes for yours and keep the ratios.

## Accessibility (WCAG AA)

Portable. Lines marked [mine] are specific to my palette — test your own
colors with any contrast checker before trusting them.

- Semantic HTML: exactly one h1 per page, h2 for section titles, h3 for
  card titles. Eyebrow labels, captions, and body text are p or span —
  never a heading tag just because the text is small and bold.
- Landmarks on every page: header, nav, main, footer.
- Every page gets its own title tag and meta description.
- Alt text: an image that carries information gets one descriptive
  sentence. Pure decoration (blobs, textures, stickers) gets alt="".
  Any icon-only link needs an accessible name via aria-label or
  visually-hidden text.
- Contrast, with the real AA numbers: normal text needs 4.5:1 against
  its background; large text (24px+, or roughly 19px bold) needs 3:1.
  [mine] Terracotta #CC513B measures 4.37:1 on white — fails for body
  text, fine for large headings and button fills. Small text uses deep
  terracotta #923626 (7.56:1). Tanmigo blue #1DB2E5 is never text on a
  light background.
- Keyboard: everything reachable by tab, in a sensible order, with a
  visible :focus-visible outline.
- Motion: respect prefers-reduced-motion. Content is readable by
  default — nothing sits invisible waiting for a scroll trigger.
  Animation is a bonus, never a gate.
- Before calling a page done: read the heading outline the way a screen
  reader would, tab through the whole page, zoom to 200% (text should
  reflow, not clip or scroll sideways), and check 390 / 768 / 1024 /
  1440px. A tablet should get a real tablet layout, not stretched
  mobile.

## Tech gotchas (learned the hard way — also portable)

- Tailwind v4's @theme inline tokens are build-time only. They don't
  exist as runtime CSS variables, so plain-CSS rules (body,
  :focus-visible, custom font classes) must reference variables that
  actually exist at runtime: next/font's variables or :root tokens.
  This silently reverted my fonts twice before I wrote it down.
- Turbopack ignores touch (mtime-only changes). To force a CSS rebuild,
  change real file content.

## The no-GIF motion pattern (portable)

No raw GIFs, ever — my fox was an 18MB gif once. Every animation ships
as: a static poster image by default, upgraded to a looping WebM/MP4
only after JS confirms motion is allowed. See src/lib/useAllowMotion.ts,
used by FoxHero, DoodleBrain, and CollageVideo. Reduced-motion users get
a crisp still, everyone else gets the loop, and nobody downloads 18MB.

## My copy rules

- Plain, full sentences. No "it's not X, it's Y" constructions, no
  dramatic one-word fragments, no marketing adjectives.
- No em dashes in site copy.
- No metrics I can't defend out loud. If I didn't measure it, it
  doesn't go on the site.
- No photos taken inside Meta labs. Publicly published imagery with a
  visible source link is fine. The name "Quest Pro" is fine (my call,
  2026-07-17) — but never caption the Mugsy dome as a Quest Pro;
  they're different hardware.
- Fix my grammar. Don't rewrite my sentences.

## Design rules

- Grid-paper background: Home, About, and Creative get it full-page,
  with the header content sitting inside the grid. Case study pages get
  it only on the hero band and the footer; the main content between
  them is explicit white (bg-surface). Never put the grid behind
  paragraph text — texture frames reading, it shouldn't accompany it.
- The grid is drawn in CSS (fixed 80x80px tiles — see .bg-grid-paper in
  globals.css), never a stretched image, so cells stay square at every
  viewport width. If the lines ever fight legibility, lower --grid-line,
  don't remove the texture.
- Body text: max-width ~660px, 16–17px, line-height 1.6. Section titles
  32–40px+. Strong size contrast is the goal. The wider rule: containers
  scale with the viewport, text measure never does.
- One left rail: every section, including the footer and back-to-top
  band, shares the site container (max-w-6xl, px-6 sm:px-10). Footer
  and BackToTop own that wrapper internally — never nest them inside a
  page's narrower text column, or their edges drift off the rail. (This
  happened on /meta and /about before it became a rule.)
- Illustrations (the fox, hand-drawn diagrams) are identity moments:
  hero, case-study covers, footer. Don't scatter them as decoration.
- Header: logo pinned absolute-left, site title absolute-center, nav
  absolute-right, each positioned independently inside a relative
  header — my explicit spec, keep it. Mobile stacks the title on its
  own row (see Header.tsx). An earlier grid-areas version measured
  centered but rendered off-center for me once; absolute positioning is
  the defensive choice either way.
- "Case Studies" heading and its "Click to see more" caption: left-
  aligned on the rail, not centered.
- Back to top: navy (#3C5889) fill, white text, right-aligned within
  the site container, in its own grid-textured band above the footer.
  Always the shared <BackToTop> component.
- Footer: left-aligned on the rail. Name in terracotta, body in ink,
  gray uppercase "Social" label, then LinkedIn / GitHub / Instagram as
  plain stacked text links (not icon buttons), plus the mailto link.

## Design tokens

Colors: follow the Figma site file (link in the build log below). The
only reason to deviate is a contrast failure against the accessibility
rules above — then pick a passing value and tell me. Current sampled
tokens live in globals.css with usage comments.

Type: one family, Hanken Grotesk (Google Fonts via next/font), for
everything — headings, body, nav, labels. Hierarchy comes from weight,
size, and color, never from switching families. UI labels differentiate
with uppercase + letter-spacing + smaller size. The header's site title
is weight 900, sized as a masthead at desktop: 26px title, 15px
subtitle and nav, ~52px fox logo (mobile keeps its smaller tuned
sizes — all desktop bumps are sm:-scoped in Header.tsx). Never use the "London Tube" font anywhere (unlicensed
Johnston clone — its TTF must never be committed) and don't reintroduce
Roboto.

Spacing: section gap 96–140px · heading-to-body 12–16px · paragraph
gap 24px.

Interaction: horizontal scrollers are focusable, arrow-key navigable,
and never hijack the wheel.

## Build log & working notes

Everything below is running memory between me and my build agents: what
got decided, what drifted, and what to check before "fixing" something
that looks odd. It's messy on purpose — building in the open includes
the notes.

- Build from my references and screenshots; follow the UI exactly. The
  old live site (irenecheung.net) is NOT the source of truth for this
  rebuild.
- Never touch DNS or anything about the live irenecheung.net. It stays
  untouched until I switch it myself.
- Source-of-truth design file: my Figma Site,
  https://www.figma.com/site/biQs3RDV8GBaONPLsXq66P/Site — viewable
  anonymously, just slow to navigate by automation (ctrl+scroll zooms,
  plain scroll pans; the in-app Find tool is the fastest way to a
  specific string). When a screenshot and this file disagree, or this
  file is silent, check the Figma and update this file — it started
  life written from screenshots and has had real mistakes (ink color,
  tag-pill color, footer layout).
- The repo is public now: github.com/irenecancode/irene-portfolio. The
  Open Resource cards (CLAUDE.md, Disclaimer) and the footer GitHub
  link all point at it.
- Home page structure: Hero → Case Studies (2x2 grid) → More Project
  (2 plain cards) → Open Resource (intro + 4 info cards) → Back to top
  → Footer. The Figma content shifts over time (Blue Bottle moved from
  Case Studies to More Project; a Claude Code card replaced it) — re-
  check the Figma before assuming a card's section.
- More Project cards are deliberately plain: headline + body + outlined
  tag pills (border-navy, transparent fill) directly on the page
  background. No white card, no shadow, no image, no attribution. The
  outline pills are part of what signals "secondary" — don't let this
  section drift back into the filled-pill <CaseStudy> look (it did
  once; caught 2026-07-16). Implemented inline in page.tsx.
- Case-study pages built: /meta, /tanmigo, /claude-code. Cards link via
  the href prop on <CaseStudy>. Felidae and Blue Bottle have no pages
  yet — Felidae's card keeps its in-progress copy and no href until the
  case study exists.
- The shared case-study skeleton (the only parts that must repeat):
  hero band with grid texture → h1/subtitle/tags → <SummaryGrid> (six
  fields, each with its own semantic icon — the Figma's single repeated
  icon was a placeholder, not a design) → intro paragraphs → bordered
  info cards (<ToolCard>/<ListCard>/<ImageImpactCard> in
  OutlineCard.tsx) → page-specific middle → <ReflectionCard> ("Becoming
  a better designer", #F5FFDA, DoodleBrain docked right with the no-GIF
  motion pattern) → "Read more" (two <CaseStudy> cards in the fixed
  rotation meta → tanmigo → claude-code) → <BackToTop> → <Footer>.
- Each case study's MIDDLE is different by design (Meta: ops-tool
  story; Tanmigo: shipped-product story; Claude Code: concept +
  prototype). Don't force identical middles — only the skeleton
  repeats.
- Type scale below case-study heroes: h2 sections are 36px on the full
  frame; most carry a 28px lead line via the shared <Lead> component
  (max-w-3xl, ~46–56 characters per line measured in a real browser).
  One measure for every lead — no per-instance widths. A lead that
  exceeds ~4 lines gets split: first sentence or two stay in <Lead>,
  the rest demotes to body. Accepted deviations: the "how I ran it"
  arrow-chain lead runs 3 lines (2 would need ~87cpl); ReflectionCard's
  body is narrower (max-w-2xl) to leave room for the DoodleBrain — both
  deliberate, don't "fix".
- Background tints are pixel-sampled from Figma, not eyeballed:
  --color-reflection-bg #F5FFDA, --color-decision-bg #FFECE6. The same
  pass fixed real AA failures: several small labels wore text-accent
  (#CC513B, 4.37:1) and were switched to text-accent-deep (7.56:1);
  text-accent stays on true 30px+ headings. Two ink-opacity
  approximations were replaced with the sampled --color-muted #666666.
- Meta's System Impact card contains the literal string "Quest Pro" on
  purpose (my override, 2026-07-17). Don't silently remove it — ask.
- Paragraph lengths and wording on built pages are verified against
  Figma. Don't tighten or summarize them on sight, even if they look
  long for a portfolio.
- Case-study hero images double as homepage thumbnails: one
  case-<name>.webp/png per project in public/media, cropped from the
  Figma exports in refs/ (the exports had a soft blush card baked in;
  crops keep only the opaque content so the site's own wrapper supplies
  the card look). Remaining PlaceholderImage usage (Tanmigo's video
  prototype, some Claude Code screenshots) still needs real assets.
- /meta history worth knowing: its "three layers" heading was corrected
  2026-07-16 from retired copy ("Three Layers to demystify the AI Black
  Box"); a few Background/Problem lines were reconstructed from
  truncated screenshots (single-word completions, low risk, flagged).

## Process rules

- Small, frequent commits with messages that say what changed ("add
  case study card grid"), never one giant commit. The history is
  public and part of the portfolio.
- Files sometimes change outside a session (I edit, or another agent
  does). If anything looks different from your memory of it, run git
  diff and re-read this file before continuing.
