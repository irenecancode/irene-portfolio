@AGENTS.md
# Irene's portfolio site



## Copy rules (audited — do not violate)
- Voice: plain full sentences. No "it's not X, it's Y" constructions,
  no dramatic one-word fragments, no marketing adjectives.
- Banned in site copy and alt text: invented percentage metrics
  (especially "25% data integrity") and photos taken inside Meta labs.
  "Quest Pro" is ALLOWED (Irene's explicit ruling, 2026-07-17) — but
  never caption the Mugsy dome as a Quest Pro; they are different
  hardware.
- No em-dash
- Check grammatical mistakes, and don't rewrite

## Design rules
- Grid-paper background placement: Hero and top section for all, make sure "home", "creative", and "about" sit right inside the grid
  case study pages get it ONLY on the hero/top section and the footer.
- Grid image is saved under media, named grid reference; adjust opacity if accessibility constrat is not met 
- Body text: max-width ~660px, 16–17px, line-height 1.6.
  Section titles 32–40px+. Strong size contrast is the goal.
- Illustrations (fox, hand-drawn diagrams) are identity moments:
  hero, case-study covers, footer. Don't scatter them as decoration.
- fox.gif is 18MB — never ship it as-is. Compress or convert to a short
  looping video with a static fallback.
- Header layout: logo absolute-left, site title absolute-center
  (`left-1/2 -translate-x-1/2`), nav absolute-right — each pinned
  independently via `position: absolute` inside a `relative` header,
  per Irene's explicit spec. (An earlier CSS-grid-areas version was
  also verified mathematically centered at every tested width, but she
  reported an off-center render we couldn't reproduce; absolute
  positioning is both what she asked for and the most defensive option
  regardless of the root cause.) Mobile stacks the title on its own row
  below logo/nav using breakpoint-specific top offsets — see
  Header.tsx.
- "Case Studies" section: heading and the "Click to see more" caption
  under it are both left-aligned, not centered.
- "Back to top": navy fill (#3C5889) with white text, right-aligned within the content column
  (not centered), sitting inside its own grid-paper-textured band just
  above the footer. Shared as `<BackToTop>` (src/components/BackToTop.tsx)
  — every page renders this component rather than inlining the markup.
- Footer: left-aligned (not centered). "Irene Cheung" heading in
  terracotta. Body line in black. A gray uppercase "Social" label, then
  LinkedIn / GitHub / Instagram as plain stacked text links — NOT
  icon buttons. (The mailto link stays too; it just wasn't visible in
  the Figma crop this was checked against.)
- The footer and back-to-top band always use the site container
  (max-w-6xl), never a page's local text column. One left rail, all
  pages. `<Footer>` (src/components/Footer.tsx) and `<BackToTop>` each
  own their own max-w-6xl/px-6 sm:px-10 wrapper internally — never nest
  either inside a narrower page-level container (e.g. a case study's
  max-w-3xl prose column), or their left/right edges will drift off the
  rail that the hero headline and section titles sit on. Caught on
  /meta and /about: the About page's back-to-top was hand-rolled with
  `flex justify-center` and no site container at all, floating dead
  center instead of right-aligned to the rail.

## Tech gotchas (learned the hard way)
- Tailwind's @theme inline tokens are BUILD-TIME only: they do not exist
  as runtime CSS variables. Any plain-CSS rule (body, .font-display,
  :focus-visible etc.) must reference variables that actually exist at
  runtime: the next/font variables (--font-hanken) or :root tokens.
  This bug has silently reverted fonts twice already.
- Turbopack ignores mtime-only changes (touch): to force a CSS rebuild,
  make a real content change.

## Process rules
- Use Irene's reference and screenshots to build, follow exactly the UI elements; not based on irenecheung.net
- Never touch DNS or anything about the live irenecheung.net —
  it stays untouched until Irene switches it herself.
- Source-of-truth design file: Irene's Figma Site at
  https://www.figma.com/site/biQs3RDV8GBaONPLsXq66P/Site — it's viewable
  anonymously (no login needed), just slow to navigate via automation
  (canvas needs ctrl+scroll to zoom, plain scroll pans, and the in-app
  "Find" tool is the fastest way to jump to a specific text string).
  When a screenshot and this file disagree, or this file is silent on a
  value, check the Figma file and update this file — it was originally
  written by an agent from screenshots and has had mistakes in it
  (e.g. the ink color, the tag-pill color, the footer layout).
- That Figma file's "Webpages" list revealed the live site has (or is
  meant to have) dedicated case-study pages: /tanmigo, /blue-bottle,
  /meta, plus /about and template pages /page-2, /page-3. /meta is now
  built (see below); /tanmigo and /blue-bottle are not. Case-study cards
  that link to a built page use the `href` prop on `<CaseStudy>` — only
  the Meta card has one so far.
- Home page has more sections than the original build: Case Studies
  (2x2 grid) → "More Project" (2 cards, exploratory/concept work, not
  shipped) → "Open Resource" (intro line + 4 info cards: CLAUDE.md,
  Tech Stack, Tools I used, Disclaimer) → Back to top → Footer. The
  Figma content changes over time — e.g. Blue Bottle moved from Case
  Studies into More Project and was replaced by a new Claude Code
  card. Always re-check the Figma before assuming a card's section.
- "More Project" cards are deliberately plain, not `<CaseStudy>` cards:
  headline + body + tag pills directly on the page background, no
  white card box, no shadow, no image/thumbnail, no attribution line.
  Tag pills here are outlined (`border border-navy`, transparent fill,
  navy text), NOT the filled `bg-navy-tint` pills used everywhere else
  (the 4 real case studies, case-study hero tags) — the outline is
  part of what signals "secondary." Confirmed against Irene's
  screenshots 2026-07-16 after the section had drifted to reuse
  `<CaseStudy>`'s filled-pill treatment, making it look identical to
  the section above it. Implemented inline in `src/app/page.tsx`
  (`MORE_PROJECTS` array) rather than as a shared component, since
  it's a one-off, simpler-than-`<CaseStudy>` pattern only used here.
- The "CLAUDE.md" and "Disclaimer" cards in Open Resource are meant to
  link to this repo on GitHub, but the repo isn't public yet. They're
  rendered as plain (non-linked) text for now — wire up real `href`s
  once Irene has pushed the repo and given the URL.
- /meta (case-study detail page) is built from Figma node 1107-108722,
  but navigating that specific frame via automation got unreliable
  after enough zoom/pan round-trips (keyboard shortcuts like Shift+1
  stopped registering). The page covers hero → category/product/core
  challenge → tools → background → problem space → "for a bit of
  context" → "how I ran it" → two decision cards → "I design technical
  tools in three layers, from the backend up" (corrected 2026-07-16;
  was previously "Three Layers to demystify the AI Black Box," which
  Irene confirmed is retired copy) → back to top. Content below that
  heading (a literal three-layer breakdown looked like it continued)
  wasn't confirmed — screenshots at that scroll position showed
  fragments that may belong to the Tanmigo page's near-identical
  template instead. Verify with Irene before extending. The hero paragraph under
  "Background" and two of the "Core Challenge"/"Problem Space" bullets
  were reconstructed from truncated screenshot text (single obvious
  word completions like "latency" and "streams at once") — low risk,
  but not verbatim-confirmed like the rest of the page.
- /meta and /tanmigo (both built) share a real, confirmed pattern: grid-paper
  on the hero band and footer only — the `<main>` in between must be
  explicit `bg-surface` (white). It was inheriting the blush page
  background from `body` by default (that default is correct for
  Home/About, which are blush+grid-paper full-page, but wrong for case
  studies) until caught against the Figma reference. `<h1>` = case title, `<h2>` = section
  titles, `<h3>` = two-card callouts, and — most importantly — a shared
  `<ReflectionCard>` component (src/components/ReflectionCard.tsx) that
  closes every case study: fixed eyebrow "Becoming a better designer",
  pale yellow-green bg (--color-reflection-bg, #F5FFDA), heading, body,
  then either a stakeholder-breakdown list (Meta: TPM/Engineers) or an
  italic closing line (Tanmigo), plus the doodle-brain illustration
  docked to the right on sm+ screens — animated (`<DoodleBrain>`,
  src/components/DoodleBrain.tsx), same prefers-reduced-motion pattern
  as `<FoxHero>`: static poster by default, upgrades to the looping
  alpha-WebM/MP4 once JS confirms motion is allowed. When building
  /blue-bottle, reuse `<ReflectionCard>` — don't rebuild the pattern inline.
- Beyond the shared wrapper, each case study's MIDDLE content is
  different by design (Meta: Background/Problem Space/Three Layers
  reflecting an internal ops tool; Tanmigo: Design Strategy/Rapid
  Prototyping/The "Failed" Moment reflecting a shipped product build).
  Don't force identical middle sections across pages — only the
  hero/tags, ReflectionCard, back-to-top, and footer are the literal
  repeating pattern.
- The exact background tints are now pixel-sampled from Figma, not
  eyeballed: --color-reflection-bg #F5FFDA (Background band +
  ReflectionCard), --color-decision-bg #FFECE6 (the two-card decision
  band on /meta). Both corrected from earlier guesses during the
  "follow Figma colors, only deviate for AA failures" pass.
- That same pass found real AA violations: `text-accent` (#CC513B,
  4.37:1) was used on several small/sub-24px elements — the /meta
  decision-card `<h3>` titles, the OutlineCard title labels (Tool/
  System Impact/Stakeholder/Core User Journey), and a couple of
  Tanmigo's small labels. All switched to `text-accent-deep` (7.56:1).
  `text-accent` stays correct on the actual large headings (Hero,
  Footer, Stack, About — all 30px+). Also replaced two `text-ink/70`
  opacity approximations (Header's "Product Designer" subtitle, Meta's
  Three-Layers question text) with the real sampled `--color-muted`
  (#666666) token now that we know it's a flat swatch, not an ink tint.
- Another real shared pattern (found after the first pass on /meta and
  /tanmigo missed it entirely): right after the hero tags, every case
  study has a "Summary" block — `<SummaryGrid>` (src/components/SummaryGrid.tsx),
  a light-gray card holding 6 fields (Category, Org, Product, Role, Core
  Challenge, Impact), each with its own semantic icon
  (src/components/icons/SummaryIcons.tsx — tag/building/box/person/
  warning-shield/target). The Figma source reused one identical icon
  for all 6, which was a placeholder, not intentional — giving each
  field a distinct icon was the one deliberate change asked for here.
  Below that: 1-2 intro paragraphs, then a row of bordered
  (`border-accent/30`) cards — `<ToolCard>` (icon+name+desc, reuses the
  same public/media/stack-*.webp icons as the About page's Stack
  component), `<ListCard>` (plain bullet list, e.g. Stakeholder / Core
  User Journey), `<ImageImpactCard>` (Meta only, System Impact). All
  three live in src/components/OutlineCard.tsx.
- Type scale below the hero (added 2026-07-16, first found on /meta):
  `<h2>` section titles are 36px, left-aligned, spanning the section's
  full `max-w-5xl` frame. Directly under most of them sits a "lead"
  paragraph — a 28px, medium-weight statement — via the shared
  `<Lead>` component (src/components/Lead.tsx): `max-w-3xl`, left-
  aligned text, block-centered (`mx-auto`) so it reads as a narrower,
  inset column under the full-width h2. `<Lead>` is the single shared
  measure for every 28px intro across /meta, /tanmigo, and
  `ReflectionCard` — don't give individual instances their own
  max-width. Measured with a real headless browser (not eyeballed):
  this yields roughly 46-56 characters per line at desktop widths,
  landing near the 50-60cpl target but not exact for every string —
  natural variance from word length, not a bug. One confirmed
  exception: a lead exceeding ~4 lines gets split, first 1-2 sentences
  stay in `<Lead>`, the rest demotes to a normal body `<p>` below it
  (done for the three-layers intro). One accepted deviation: the "how
  I ran it" arrow-chain lead runs 3 lines, not the 2 Irene originally
  guessed — reaching 2 lines would need ~87 characters/line, well
  outside the shared measure, so 3 lines was kept rather than special-
  casing that instance's width. ReflectionCard's own body text is
  narrower still (`max-w-2xl`, ~42cpl) because that component reserves
  room for the DoodleBrain illustration beside it — Irene confirmed
  this is a deliberate exception, not something to widen to match.
- Meta's System Impact card includes the literal string "Quest Pro" —
  Irene explicitly overrode the audited copy-rule ban on that name for
  this one instance. Don't silently "fix" it back out; if it looks
  wrong in a future pass, ask before touching it.
- Paragraph lengths/wording on these pages are intentional — verified
  against Figma, not summarized or tightened. Don't shorten them on
  sight even if they look long for a portfolio site.
- Home page's case-study cards link out via the `href` prop on
  `<CaseStudy>` now that /meta and /tanmigo exist. Blue Bottle's card
  still has no href — add one when /blue-bottle is built.
- Hero images for all four homepage case studies (Felidae, Meta,
  Tanmigo, Claude Code) plus the matching homepage thumbnails are
  `case-<name>.webp/png` in `public/media` — one shared file for both
  uses per case study, same as the pre-existing pattern. The 2026-07-16
  set was cropped from Figma exports in `refs/` (`meta thumbnail.png`,
  `tanmigo thumbnail.png`, `Claude_thumbnail.png`, `felidae
  thumbnail.png`): each export had a soft blush card/shadow baked in
  around the actual screenshot (a fully-opaque rectangle sits inside a
  ~60%-alpha padded card), so the crop keeps only the fully-opaque
  content and lets the site's own `card-gradient` wrapper supply the
  card look. This replaced Meta's old logo-overlay image and Tanmigo's
  old laptop+phone mockup composite with plainer screenshot crops —
  confirmed with Irene as the intended direction before overwriting.
  Felidae has no dedicated page yet, so it only got the homepage
  thumbnail; its card still has placeholder headline/body text and no
  href. Remaining `PlaceholderImage` usage (Tanmigo's video prototype,
  Claude Code's before/after and use-case screenshots) is unrelated
  non-hero content and still needs real assets.
- Every built case-study page (`/meta`, `/tanmigo`, `/claude-code`)
  ends with a "Read more" section, right before `<BackToTop>`, in the
  exact `<CaseStudy>` card format used on the homepage grid. It shows
  the other two case studies in a fixed rotation — meta → tanmigo →
  claude-code → meta → ... — so each page lists the next two names in
  that cycle (e.g. Meta's page shows Tanmigo then Claude Code;
  Tanmigo's shows Claude Code then Meta). Felidae isn't in the
  rotation since it has no page. When Blue Bottle gets a page, decide
  with Irene whether it joins this rotation or stays separate.

## Accessibility rules (WCAG AA — non-negotiable, from the July 2026 audit)
- Semantic HTML everywhere: exactly ONE <h1> per page ("Irene Cheung" on
  home; the case-study title on case pages). <h2> for section titles,
  <h3> for card titles. Eyebrow labels (MY ROLE, BACKGROUND), captions,
  and body text are <p> or <span> — never heading tags.
- Landmarks: <header>, <nav>, <main>, <footer> on every page.
- Every page gets a unique <title> ("Irene Cheung — Product Designer",
  "Tanmigo — Case Study") and its own meta description.
- Alt text: evidence images (dome photo, product screenshots, diagrams)
  get one descriptive sentence. True decoration (blobs, stickers,
  gradients) gets alt="". Any icon-only link (e.g. the header logo)
  MUST have an accessible name: aria-label or visually-hidden text.
  (Footer social links are plain text — LinkedIn / GitHub / Instagram —
  not icon buttons, so this mainly applies elsewhere.)
- Contrast, measured: small text on light backgrounds uses deep
  terracotta #923626 (7.56:1), NEVER #CC513B (4.37:1 — fails AA for
  body text). #CC513B is allowed only for large headings (24px+ or
  19px bold), button fills, and decoration. Tanmigo blue #1DB2E5 is
  never text on a light background.
- Focus: visible :focus-visible outline on every interactive element;
  logical tab order; site fully navigable by keyboard.
- Motion: respect prefers-reduced-motion (animations off or instant).
  Content must never be invisible waiting for a scroll trigger —
  sections render readable by default; animation is enhancement only.
- Before any page is "done": check headings with a screen-reader
  outline, tab through it, and verify at 390 / 768 / 1024 / 1440px —
  a real tablet layout, not stretched mobile.

## Design tokens & reference

## Colors
- Follow the colors used from the figma site link Irene provided; only case to change it: it violates the accessibility guidelines, replace it with the color that pasts the accessibility check, and inform Irene

## Type
- Body: 16–17px, line-height 1.6, max-width ~660px
- Section titles: 32–40px+
- One font family: Hanken Grotesk (via Google Fonts / next/font) for
  everything: headings, body, nav, UI labels. Hierarchy comes from
  weight, size, and color, never from switching families. UI labels
  (eyebrows, tags) differentiate with uppercase + letter-spacing +
  smaller size, not a different font. Never use the "London Tube" font
  anywhere: it is an unlicensed Johnston clone, and its TTF must never
  be committed to this repo. Do not reintroduce Roboto.
- The header's "Irene Cheung" site title uses font-weight 900

## Spacing
- Section gap: 96–140px · Heading-to-body: 12–16px · Paragraph gap: 24px

## Interaction 
- horizontal scrollers: focusable, arrow-key navigable, no scroll-jacking