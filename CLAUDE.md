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
  terracotta #923626 (7.56:1). De-warning pass 2026-08-25 (my call):
  deep terracotta is for interactive text only — links, active nav,
  chip text; non-interactive labels (eyebrows, TOOL/journey headers,
  list numerals, captions) use --color-muted gray so small dark-red
  text stops reading as a warning. Chip hover fills use --color-rust
  #8a4a2e (6.8:1 with white). Tanmigo blue #1DB2E5 is never text on a
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
- next dev does NOT fail on TypeScript errors, but next build (and
  therefore Vercel) does. A broken deploy doesn't show an error on the
  site — Vercel silently keeps serving the last good deploy. If a push
  hasn't appeared in production within a minute, run `npx next build`
  locally; it reproduces the failure with the real error message.
- Found 2026-10-12, after a long session of mysterious ghost errors:
  `next dev` and `next build` share the same `.next` directory, and
  running a build while a dev server is live corrupts the dev server's
  cache — the dev server keeps serving CSS/JS from before the most
  recent edit, with no warning, sometimes surviving a dev-server
  restart. Symptom: the browser console (or `next dev`'s own stdout)
  shows a ReferenceError or stale CSS for code that was already
  changed on disk — e.g. a rule confirmed present in globals.css
  missing entirely from `document.styleSheets` in the running page.
  Fix: stop the dev server, `rm -rf .next`, restart it. Prevention:
  don't run `npx next build` as a casual sanity check while a dev
  server for the same project is running — use it only for an actual
  pre-deploy check, and expect to `rm -rf .next` + restart dev
  afterward if you do.
- Transparent video is a three-trap pipeline. (1) Encoding: VP9 keeps
  alpha only with -pix_fmt yuva420p and -auto-alt-ref 0; HEVC-alpha: do NOT
  use ffmpeg's hevc_videotoolbox — its alpha layer is ignored by
  iOS/macOS Safari (renders a white box: the base layer without its
  alpha). The Safari-valid pipeline is Apple's own avconvert:
  ffmpeg gif -> ProRes 4444 .mov (-c:v prores_ks -profile:v 4444
  -pix_fmt yuva444p10le), then avconvert --preset
  PresetHEVCHighestQualityWithAlpha. Keeps the hvc1 tag. (2) Probing:
  ffprobe reports yuv420p even when alpha IS present (it's a side
  plane) — verify by decoding a frame with -c:v libvpx-vp9 and checking
  the PNG for transparent pixels, or the webm's alpha_mode tag.
  (3) Browsers: Safari can't play VP9-alpha, Chrome can't play
  HEVC-alpha — so source order must be hvc1 mp4 first, webm second,
  plain mp4 last. Encode commands live in the git history
  (fox-hero/doodle-brain, 2026-07-18).

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

- Quiet background (my call, 2026-08-25, part of the consumer-facing
  pass): every page body is almost-white (--color-bg #fffdfc). The
  grid-paper texture appears in exactly one place — the footer band on
  every page, which keeps the old blush base (--color-grid-bg #fff4f4).
  This replaced the full-page grid on Home/About/Creative and the
  case-page hero-band grid; don't reintroduce grid anywhere else.
  Never put the grid behind paragraph text — texture frames reading,
  it shouldn't accompany it.
- Exceptions (my call, 2026-10-12, home page only): two full-bleed
  color bands now break "quiet background" — "Open Resource" (solid
  --color-navy, white text, bordered white cards) and the project-name
  chips band right after the hero (--color-reflection-bg #F5FFDA, the
  same pale yellow already used for case-study ReflectionCards).
  Reference for the vibrant direction: stuut.ai's color-blocked
  sections. Two bands is still "a couple of accents," not a reversal —
  but it's one more than last time this note was written, so if a
  third gets added, stop and actually rewrite this rule instead of
  appending another exception.
- Size contrast on the home page (my call, 2026-10-12, after looking
  at a type-scale audit): tried bumping the three section h2s ("Case
  Studies," "More Projects," "Open Resource") and the yellow-section
  headline to font-bold first, then reversed that same day — the fix
  I actually wanted was bigger size jumps, not heavier weight. Weight
  stayed at font-normal (h2s) / font-medium (headline); sizes went up
  instead: the three h2s from a flat 30px (no responsive change) to
  34px mobile / 44px desktop, and the yellow headline from 32/40 to
  40/56. Card titles (22px), body, and labels are untouched, so the
  ladder is now body → card title (22) → section h2 (34/44) → headline
  (40/56), a much bigger jump than the old 11-40px-at-mostly-400-500
  cluster. This is a visible step away from the quieter, lower-contrast
  type the 2026-08-25 pass intentionally went for — if that gets
  revisited, this is the tension to weigh.
- The grid is drawn in CSS (fixed 80x80px tiles — see .bg-grid-paper in
  globals.css), never a stretched image, so cells stay square at every
  viewport width. If the lines ever fight legibility, lower --grid-line,
  don't remove the texture.
- Body text: max-width ~660px, 16–17px, line-height 1.6. Section titles
  32–40px+. Strong size contrast is the goal. The wider rule: containers
  scale with the viewport, text measure never does.
- No orphans: a paragraph never ends with a single word alone on its
  last line. p, li, and h3 get text-wrap: pretty in globals.css (h3
  because <Lead> renders as h3). If a specific line still strands a
  word, join the last two words with &nbsp; in the JSX.
- One left rail: every section, including the footer and back-to-top
  band, shares the site container (max-w-6xl, px-6 sm:px-10; the home
  page's rail is max-w-7xl as of 2026-08-25 — see the build log). Footer
  and BackToTop own that wrapper internally — never nest them inside a
  page's narrower text column, or their edges drift off the rail. (This
  happened on /meta and /about before it became a rule.) Case Studies
  briefly deviated from this (2026-10-12, widened to max-w-[1600px] to
  fill dead space the two-column <CaseStudyRow> left at max-w-7xl) and
  was reverted the next day (2026-10-13, Irene's call: "Case Studies
  and More Projects are not left aligned") once the real fix landed —
  see the grid-ratio note below. Back on the shared max-w-7xl rail
  with everything else now.
- Illustrations (the fox, hand-drawn diagrams) are identity moments:
  hero, case-study covers, footer. Don't scatter them as decoration.
- Pending (my call, 2026-10-12): the fox hero video/poster was pulled
  from the home page Hero — it was the only illustration on the page
  and read as disconnected from everything else there. In its place:
  <HeroGrid> (src/components/HeroGrid.tsx), originally a 3x3 grid,
  widened the same day to 5x3 for more placeholder cells. The center
  isn't a single 1/5-width cell — at that width the name/title/bio
  text wrapped into 8+ cramped lines — it's a block spanning 3 of the
  5 columns in the middle row (col-span-3 col-start-2 row-start-2),
  flanked by one placeholder on each side. So there are 12 square
  placeholders, not 14, plus the wider center block. Every cell's grid
  position is explicit (col-start-N/row-start-N via inline style on
  the 12 placeholders, driven by the PLACEHOLDERS array; Tailwind
  classes on the fixed center block) rather than left to grid
  auto-placement — auto-placement doesn't know to route around a
  multi-column span cleanly, and inline style is correct here anyway
  since the positions are data-driven: a className built from a
  template literal (`col-start-${col}`) would never generate real
  Tailwind CSS, since the scanner needs the literal class string at
  build time. The 12 placeholders are waiting on real artwork — my
  drawings (Creative page illustrations, Bottega Lily mockups) plus
  new hand-drawn icons (GitHub, Figma, etc.) once those exist as
  files. Swap a placeholder div for a real <Image> per cell as art
  shows up; don't touch the center block. FoxHero.tsx and its video
  assets are untouched, not deleted, in case the fox comes back. Grid
  width is fluid (my call, 2026-10-12): w-[clamp(380px,62vw,1080px)]
  as of a same-day bump (was clamp(300px,45vw,760px) — "make the grids
  bigger"), not a fixed max-width, so it visibly grows as the viewport
  widens instead of capping out small. The center block's text scales
  with it at the lg: step (text-2xl/3xl/4xl etc., bumped the same
  pass) so it doesn't look tiny inside much bigger placeholder cells
  on a wide screen.
- Pending above resolved 2026-10-13 (my call): swapped all 12
  placeholders for 14 real pieces — her illustrations (hummingbird,
  tart, bun/cookie, shiba, strawberries, lamb, ramen, portafilter,
  golden retriever, sleeping dog, cupcake) plus three tool icons
  (VS Code, Figma, GitHub) — per her reference screenshot's exact
  order. Grid widened from 5 to 6 columns so the center text block
  could span 4 columns (col-span-4 col-start-2 row-start-2) instead of
  3, since 14 image cells read better on an even split than 12. Source
  files came from ~/Desktop/portfolio images/grid_1.png -
  grid_14.png (one unused bonus file, felidae_thumbnail.png, left
  untouched there); two files were both labeled "grid_6" in her
  screenshot, disambiguated on disk as grid_6.png (strawberries) and
  grid_6-1.png (the bun/cookie). Copied into public/media as
  hero-grid-<subject>.png, webp siblings generated via the Python PIL
  method (sips/ffmpeg still don't do webp on this machine). Each image
  cell is aspect-square with p-3 padding (no background, no border —
  both dropped same-day, see below), the image itself object-contain
  inside a <picture> (webp source, png fallback) — same pattern as
  every other image on the site. FoxHero.tsx is still untouched.
  Same-day follow-ups: the cell border was dropped first ("remove the
  border of the grid images"). Then the white canvas each
  illustration/icon shipped on: a border-connected-component flood
  fill (scipy.ndimage.label on a near-white mask, seeded from the four
  image edges rather than a flat color threshold) knocks out only the
  background that's contiguous with the canvas edge, so fully-enclosed
  whites inside the art — the VS Code triangle, highlight dots — stay
  opaque; a 1.5px Gaussian blur on the resulting alpha mask softens the
  cutout edge instead of leaving it jagged. That fixed the PNGs, but
  the white still showed ("the white backgrounds are still there??") —
  turned out the cells also had bg-surface (#ffffff) behind the now-
  transparent images, same visual result as before. Dropped bg-surface
  from the cell entirely; the page's own --color-bg shows through.
  Lesson: a wrapping bg-surface box reads as "white background" just as
  much as an opaque image does — check both before calling a
  transparency fix done.
- Case Studies row, all four cards (2026-10-13, my call, two passes):
  first pass swapped Tanmigo's thumbnail from case-tanmigo.png (the
  recreated-mockup cover) to case-tanmigo-hero.png/webp — the same
  screenshot used as the Live Product video's poster on /tanmigo, i.e.
  the actual product, not a recreation — using fit="contain" +
  mediaBg="bg-surface" instead of the default fit="cover", since it's a
  wider-than-16:9 screenshot (2.08:1 vs the card's aspect-video) and
  cover would've cropped it. Felidae's "Coming Soon" text placeholder
  also got a real thumbnail in that pass: case-felidae-thumbnail.png/
  webp, the actual felidaefund.org homepage hero ("The Cat in the
  Bottleneck"), sourced from the same ~/Desktop/portfolio images
  folder as the hero-grid art — still no href/case page, so the card
  stays non-clickable, only the visual was asked for. Second pass: her
  "center the thumbnails of case studies" meant all four, not just
  Tanmigo, and Felidae's fit="cover" default was actually cropping its
  CTAs (its 1.541:1 image is narrower than the 1.778:1 aspect-video
  box, so cover crops top+bottom — specifically the nav bar and the
  Read/Donate buttons). So Meta, Claude Code, and Felidae all got
  fit="contain" + mediaBg="bg-surface" too. Meta and Claude Code's
  images are exactly 1120x630 (16:9), so contain vs. cover is a no-op
  for them visually — only Felidae and Tanmigo actually needed it.
  CaseStudy.tsx already supported fit/mediaBg; this is just the first
  time they're used across the board instead of only on one card.
- More Projects carousel (2026-10-13, my call, two passes): frame
  sized up 1.5x — was h-72/w-64 (sm: h-80/w-72), now h-[432px]/
  w-[384px] (sm: h-[480px]/w-[432px]), arbitrary-value classes since
  1.5x those spacing-scale steps doesn't land on another Tailwind
  token. Dropped the blurred 10%-wide next-project peek at the row's
  right edge (added 2026-10-12, reversed 2026-10-13 — "the blur section
  is weird") along with the now-unused `nextProject` variable; the two
  position dots are back to being the only "more to see" signal.
  Image swapped again 2026-10-13 (my call): the YouTube moderation
  project now uses more-youtube-moderation.png (from youtube_mod.png
  in ~/Desktop/portfolio images) instead of more-chat-moderation.png
  — a full livestream screenshot (Moderator Panel + Engagement Panel
  side panels over a live video) instead of just the floating
  moderator-panel card. New file, not an overwrite — old
  more-chat-moderation.png/webp left in place, unused, same FoxHero
  precedent. imageWidth/imageHeight updated to the new file's actual
  1920x1199 (was 540x790) since <Image> needs those to match. Got the
  same rounded-xl shadow-lg treatment as the Felidae/Tanmigo case-study
  thumbnails same day ("add the same radius and shadow like case
  study") via a new imageClassName field on the carousel's Project
  type — applied only to this real-screenshot entry, not Blue Bottle's
  illustrated floating-phone mockup, which doesn't want a rectangular
  frame around an irregular cutout.
  Second pass ("remove the white backgrounds"): two separate causes,
  same as the hero-grid lesson above — the frame's own bg-surface was
  dropped, AND more-blue-bottle.png turned out to have a fully opaque
  white canvas baked into the file itself (alpha was 255 everywhere;
  more-chat-moderation.png already had real transparency, so only
  blue-bottle needed it). Same border-connected flood-fill treatment
  as the hero-grid art — the phones' dark bezels correctly keep the
  outer white margin from merging with the legitimately-white app
  screens inside each phone, so only the canvas margin was knocked out.
- More Projects arrow button, hover bug fixed (2026-10-13, my call —
  "don't drag down when people hover on it"): at the sm: breakpoint the
  button is absolutely centered via top-1/2 + -translate-y-1/2, but
  hover:-translate-y-0.5 set the same transform property, so hovering
  replaced the -50% centering with a fixed -2px offset and the button
  visibly dropped out of vertical-center. <BackToTop> never had this
  bug since its own hover lift has no competing base transform to
  clobber. Fix: dropped the hover/focus-visible translate entirely —
  transition-colors + hover:ring-black/20 only, no motion on hover.
- HeroGrid width: sized up twice same day (1.2x, then 1.5x more on top
  — each multiplier applied to the then-current value, not back to the
  original 5x3 placeholder-grid size), landing on
  w-[clamp(684px,111.6vw,1944px)] — then that broke the page ("need to
  zoom out to see everything"). Root cause: vw is relative to the
  *viewport*, not HeroGrid's own parent, and 111.6vw is >100vw by
  construction — the grid was rendering wider than the viewport itself
  on every screen between ~613px and ~1742px wide, and the 684px floor
  overflowed anything narrower than that. <Hero>'s wrapping <section>
  already constrains width safely (max-w-7xl + px-6/px-10), so the fix
  was to stop computing width from the viewport at all: plain w-full,
  inheriting that already-safe parent width instead of a vw-based
  clamp. Lesson for next time a "bigger" request lands on a vw-based
  clamp: check the vw term never approaches 100vw, or switch to a
  parent-relative width instead of fighting the math. Center bio copy ("I design
  internal tools and data workflows for engineers and researchers.")
  is a forced 2-liner now, not a max-w-driven wrap: a hard <br/> after
  "workflows" replaces max-w-[32ch], since "always a 2-liner" has to
  hold at every breakpoint/font-size and a wrap boundary isn't
  reliable for that the way an explicit break is.
- ProjectChips location/employer line collapsed from two stacked
  lines to one (2026-10-13, my call): "📍San Francisco" and "Ex-Meta
  R&D" were separate <span>s; now one line, "San Francisco | ex-Meta
  R&D" (note the lowercase "ex", her spelling), pin emoji still
  leading.
- Case Studies summary-card feature removed "for now" (2026-10-13, my
  call): <CaseStudyRow> (which wrapped each card in <CaseStudyRowShell>
  for the hover-reveal quick-facts panel) is no longer used on the
  homepage — page.tsx renders <CaseStudy> directly now, one per
  project, each wrapped in a plain max-w-[78%] div (1.3x the old
  thumbnail width: the row used to split 3fr/2fr, so the card was 60%
  of the rail; 1.3 × 60% = 78%). CaseStudyRow.tsx, CaseStudyRowShell.tsx,
  and CaseStudyQuickFacts.tsx are untouched but unused — same as
  FoxHero.tsx, kept in case the summary panel comes back. The
  META_SUMMARY/TANMIGO_SUMMARY/CLAUDE_CODE_SUMMARY quick-facts data
  that lived in page.tsx was deleted outright (not preserved) since it
  only existed to feed that panel and is trivial to re-author if the
  feature returns — the each case-study page's own SUMMARY_FIELDS
  (full six fields) is untouched either way.
- Gotcha hit again (2026-10-13): editing page.tsx while npm run dev was
  running left Turbopack serving a stale compiled chunk that still
  referenced the just-deleted CaseStudyRow, throwing "CaseStudyRow is
  not defined" — same failure mode as the documented next build/next
  dev cache collision below, but this time from a stale browser tab
  holding an old RSC payload, not from a literal `next build` run: a
  fresh tab against the same (even cache-cleared, restarted) server
  still repro'd the error, while the server's own logs were clean.
  Closing the tab and opening a new one against the running server
  fixed it with no server restart needed — worth trying before
  reaching for `rm -rf .next` if the server logs don't show the error
  but the browser does.
- Felidae and Tanmigo thumbnails got rounded-xl + shadow-lg
  (2026-10-13, my call — "like the NDA one"): case-meta's card already
  draws its own rounded corner + soft shadow as part of the
  recreated-mockup artwork (it's a fake browser window, drawn that way
  on purpose), so Meta and Claude Code never needed CSS framing.
  Felidae and Tanmigo are real screenshots with square corners and no
  shadow baked in, so they needed it added. First pass put it on the
  media box (the aspect-video wrapper); wrong layer — with fit="contain"
  the image doesn't fill that box, so rounding the box just grew a
  rounded, mostly-empty frame around the photo ("not border radius as a
  border layout, just rounder the images"). Moved to the img itself:
  CaseStudy.tsx's mediaClassName prop now appends to imgClassName, not
  the wrapper's className — only passed on those two cards, not a new
  default.
- "Irene Cheung" in <HeroGrid>'s center block (2026-10-13, my call —
  "cancel the accent, make it h1 with the san serif"): was a script-
  font, accent-colored <p>; now font-display (Hanken, sans) + text-ink
  (plain black) + a real <h1>. That meant resolving a conflict, not
  just swapping classes — Header.tsx's fox-logo link was already the
  home page's <h1> (via a titleAs="h1" prop passed only from
  page.tsx), and a page can't have two. Moved the h1 to this text,
  which is the more sensible element for it anyway (visible text vs.
  an image-only heading); page.tsx now calls <Header active="home" />
  with no titleAs. Since nothing anywhere called titleAs="h1" once that
  one call site was gone, dropped the whole titleAs/TitleTag prop from
  Header.tsx too — dead flexibility nothing used, not worth keeping
  "in case."
- Accent script font removed site-wide (2026-10-13, my call — "remove
  the accent font across the site"): Satisfy (the cursive "accent
  font", loaded as --font-script) is gone entirely — the Google Fonts
  import, the --font-script variable, the .font-script CSS class, all
  three of its call sites (Footer's "irene cheung" sign-off, About's
  "My Design Journey Map", Stack's "Stack" heading). All three now use
  font-display (Hanken, sans) instead; accent color on those headings
  was left alone since only the font was in scope, not the color.
- HeroGrid's text block ("Irene Cheung" / "product designer" / the bio
  line) switched from centered to left-aligned same day (my call):
  items-start + text-left instead of items-center + text-center; the
  block's own grid position (col-span-4 col-start-2 row-start-2)
  didn't change, just how its own text sits inside it.
- Case Studies section rebuilt as a 2x2 grid (2026-10-13, my call,
  from a stuut.ai-style reference: a bordered card with a bold title,
  "Industry: X" meta line, description, and a "Read More" button,
  shown both as a single card and as a 2x2 grid of them — explicitly
  told not to copy its rotated corner "memo"/logo-card decoration).
  Decided over two quick questions: keep the project screenshots
  (don't go text-only like the reference) and keep the tag chips
  rather than replacing them with an Industry-style label — just add
  a Read More button on top of what's there. case-study-list went from
  flex flex-col gap-14 (single column, each card max-w-[78%]) to grid
  grid-cols-1 sm:grid-cols-2 gap-8 (true 2x2 for exactly 4 cards, full
  grid-cell width, no more max-w wrapper divs). CaseStudy.tsx's card
  itself: border border-ink/10 + bg-black/[0.04] (the "light grey"),
  hover:bg-chip (the "light terracotta" — reusing the existing chip
  token rather than inventing a new color), rounded-lg, p-6 padding
  around everything (image + text) now that the card is a real
  bordered box and not just a link wrapping loose content. Dropped the
  old hover:-translate-y-1 lift — the reference's only hover signal is
  the color fill, no motion. Tag chips changed from bg-chip to
  bg-surface (white): they used to sit on a white card and already
  used the terracotta tint themselves, but now the *card* takes that
  tint on hover, so a chip left on bg-chip would've disappeared into
  the hovered card background — white keeps them legible in both
  states. Tags also switched flex-nowrap+overflow-hidden to flex-wrap,
  since clipping read worse than wrapping once cards stopped being
  78%-width. New "Read More" affordance is a plain bordered <span>
  (not a nested link — the whole card is already the <Link>),
  darkening its border on hover along with everything else via
  group-hover. CaseStudyRowShell.tsx/CaseStudyQuickFacts.tsx and the
  .case-study-row sibling-dim CSS are still untouched/unused (the
  earlier "for now" removal) — left alone on purpose so that dormant
  feature doesn't silently lose its CSS if it's ever turned back on.
- Case Studies whitespace fixed at the root, not patched again
  (2026-10-13, my call — "i don't like the white space of the case
  study bento, remove it" + "felidae one should be a bento box too"):
  the real cause was forcing every card into aspect-video (16:9)
  regardless of its image's actual shape, then papering over mismatches
  with fit="contain" + mediaBg="bg-surface" letterbox bars — which is
  exactly the visible "white space." Replaced fit/mediaBg with a
  mediaAspect prop (default aspect-video) so each card's media box
  matches its own image's real aspect ratio instead: Meta/Claude Code
  stay aspect-video (they already are 1120x630), Tanmigo is
  aspect-[3008/1446], Felidae is aspect-[1618/1050] — both via Tailwind
  arbitrary values, both literal strings in page.tsx so the scanner
  picks them up. Every card now fills its box edge to edge, object-cover,
  no crop and no bars, which also happens to suit "bento" literally —
  real bento compartments are different sizes, not forced-uniform. Also
  swapped which element gets the dark-terracotta hover treatment ("read
  more should be the one, instead of the tags"): tags are now static
  (bg-surface text-accent-deep, no hover state), and the Read More
  pill takes border/bg/text accent-deep + white text on group-hover —
  the inverse of how it worked before.
- HeroGrid parallax + hover (2026-10-13, my call): the component is a
  Client Component now (useEffect needs it) — a scroll listener
  (rAF-throttled) measures the grid's own distance scrolled past the
  top of the viewport and applies translateY(offset * depth) per
  section, depth signed by row so the top row drifts up, the bottom
  row drifts down, and the two flanking stacks drift a little of each
  — the grid visually "opens up" on scroll instead of translating as
  one rigid block. Every image also gets hover:scale-110 (plain CSS,
  independent of the parallax transform — both apply to the same img
  without conflict since one's on the wrapper div's inline style, the
  other's a Tailwind class on the img itself).
- HeroGrid's extra flanking pair reworked same day ("grid_a and grid_b
  should be same line with lambchop instead of creating another row"):
  the earlier fix had grown the center text block to row-span-2 and
  added a literal new row underneath lamb/ramen — technically "parallel"
  but it visibly added a whole second band, doubling how tall the
  flanking section read. Reverted to 3 rows total, text block back to
  row-span-1; grid_a (vegetables) and grid_b (coffee-dog) now live
  inside the SAME row-2 flanking cells as lamb/ramen, each flanking
  column rendering a flex-col pair (gap-3, each image flex-1 min-h-0)
  instead of one aspect-square image — so those two cells are short
  rectangles stacked in pairs now, not squares, trading the uniform
  square-cell look in just those two spots for fitting both pieces
  into the existing row instead of growing the page.
- More Projects carousel auto-advances now (2026-10-13, my call — "auto
  navigate to the next one with latency"): a 6s setTimeout per slide
  (AUTO_ADVANCE_MS), restarting on every index change — including a
  manual click via the arrow button — so clicking doesn't immediately
  get overridden by the timer a moment later. Standard setTimeout
  pattern; note for future verification in this sandboxed browser pane
  specifically, not a code concern: a backgrounded tab
  (document.hidden === true, which this preview pane's tab reports
  even when "selected") gets its timers throttled/paused by Chromium,
  so testing the auto-advance by waiting in this tool won't reliably
  show it firing — that's the browser's power-saving behavior, not a
  bug, and doesn't affect a real foregrounded visitor.
- HeroGrid flanking-stack bug fixed (2026-10-13, same day as the pair
  itself): the stack wrapper (lamb+vegetables, ramen+coffee-dog) had no
  height constraint — `flex flex-col` with no aspect-square — so each
  image rendered at its own natural square size and the pair doubled
  row 2's height instead of sharing one row's worth of space, which is
  exactly the "remains 3 rows" bug she flagged from a screenshot
  (visible as a big gap splitting what should've been one row into
  two bands). Fixed by giving the stack wrapper the same aspect-square
  as every other cell, with a grid-rows-2 split inside it so the two
  images actually share that fixed height instead of each claiming
  their own. Confirmed by measuring: row 1/2/3 are now all exactly the
  same height.
- CaseStudy.tsx bug fixed (2026-10-13 — "felidae should have a bento
  box too"): the no-href branch (Felidae, no case-study page yet)
  rendered with a bare unstyled `className` ("flex flex-col") while
  the href branch had all the border/bg/padding "bento box" styling —
  so Felidae was never a bento box at all, just loose content. Both
  branches now share one `baseBoxClassName` (border + bg-black/[0.04]
  + rounded-lg + p-6); only the interactive bits (group + hover:bg-chip)
  stay link-only, since a card with no destination shouldn't look
  clickable. The Read More button is now conditional on `href` for the
  same reason — it was never shown for Felidae before either, but now
  that's an intentional omission instead of an accident of the broken
  styling.
- More Projects carousel now slides instead of cutting (2026-10-13,
  my call — "like left to right, instead of powerpoint"): restructured
  into a single flex track holding all projects side by side
  (`translateX(-${index * 100}%)`, transition-transform duration-500),
  so advancing — auto or manual — visibly slides the next project in
  from the right instead of swapping content in place. The arrow
  button and the position dots moved outside the overflow-hidden
  track (previously part of the same flex row) so they stay fixed in
  place and don't slide with the content.
- HeroGrid's extra pair settled into their final spot (2026-10-13, third
  placement that day — her reference screenshot marked "slot A"/"slot B"
  directly in row 2's two empty columns, next to the text). Vegetables
  is col 4, coffee-dog is col 5, both row 2, same as every other cell —
  no more stack-pair machinery at all now; MIDDLE_ROW is back to four
  plain single-image cells (lamb, vegetables, coffee-dog, ramen), same
  shape as TOP_ROW/BOTTOM_ROW. Cleaner than either previous attempt.
- HeroGrid interaction pass (2026-10-13, three ideas she picked from a
  list I offered): cursor-follow tilt (rotateX/rotateY toward the
  cursor, ±10°, via TiltImage's own onMouseMove/local state) layered
  underneath the existing hover:scale-110 and scroll parallax — three
  separate nested elements, each owning one transform, specifically so
  they don't fight over one `transform` string or inherit each other's
  transition timing (parallax must track scroll instantly; the reveal
  and the tilt each want their own short transition). Also replaced the
  mount-triggered reveal's requestAnimationFrame with a plain state set
  in the same useEffect: rAF callbacks are paused entirely in a
  backgrounded tab (confirmed in this session's preview pane, which
  reports document.hidden === true), so a page opened into a background
  tab would've stayed invisible until foregrounded — a real edge case,
  not just a sandbox artifact. Direct state-set works regardless since
  the initial hidden class already committed before the effect runs.
- Case Studies: two more of the same offered ideas, added via the
  existing CaseStudy.tsx (2026-10-13). Hover-dim reuses a CSS rule that
  was already sitting dormant in globals.css from the old (now-unused)
  CaseStudyRowShell — case-study-row + case-study-list:has(...) — so
  adding the `case-study-row` class to CaseStudy's own box reactivated
  it for free, no new CSS needed; confirmed hovered card stays opacity
  1 while its siblings drop to 0.45. The Read More button is now
  src/components/MagneticButton.tsx, a small client component that
  nudges itself up to 10px toward the cursor within a 50px radius
  (falling off to nothing past that) — wrapped in an invisible p-3 -m-3
  hit-zone so the pull starts a little before the cursor actually
  reaches the button, which is what reads as "magnetic" instead of a
  hover wobble. It's the only client piece in CaseStudy.tsx; the rest
  stays a Server Component.
- Home page section order: swapped to ProjectChips-then-Hero, then
  reverted back to Hero-then-ProjectChips the same day ("move the
  yellow section back, show the grid images first") — back to the
  original order. Purely page.tsx JSX reordering both times, no
  component changes either way.
- Case study text aligned across cards (2026-10-14, my call — "all 4
  case studies should be aligned in text"): each card's media box
  matches its own image's aspect ratio (that's how the whitespace got
  fixed), which meant a row's two cards had different image heights and
  their text started at different y's. Cards are now CSS subgrids
  (row-span-6 grid grid-rows-subgrid gap-y-0) spanning six of the
  list's implicit row tracks — media, attribution, headline, body,
  tags, button — so each row of the 2x2 shares those tracks and
  headline lines up with headline, tags with tags, Read More with Read
  More. The shorter image sits vertically centered in the shared media
  track (a few px of air above/below, not letterbox bars). Verified at
  1280px: child tops identical across the two cards in each row, 32px
  between rows. Felidae's empty button row is just an empty track.
- Claude Code thumbnail swapped (2026-10-14, my call): the recreated
  Context-panel mockup (case-claude-code.png) is replaced by her real
  prototype screenshot, case-claude-code-thumbnail.png/webp (from
  claudecode_thumbnail.png, 3018x1514, opaque), with mediaAspect
  aspect-[3018/1514] and the same rounded-xl + shadow as Tanmigo and
  Felidae. Old case-claude-code.png/webp left on disk, unused.
  "Add shades to felidae and tanmigo too": the shadow was there
  already (shadow-lg) but invisible — the media box had overflow-hidden,
  which clips an image's own box-shadow at the box edge. Removed
  overflow-hidden from the media box (the img is exactly box-sized
  with object-cover, so it clipped nothing real) and swapped
  shadow-lg for a stronger shared shadow-[0_10px_28px_-6px_rgba(0,0,0,0.32)]
  on all three screenshot cards. Meta keeps none: its NDA card draws
  its own.
- Card fill + hover (2026-10-14, my call): the flat cool grey
  (black/[0.04]) read as disabled UI against the warm page, so the
  idle card is a faint warm tint (#fbf6f3), and hover gives
  bg-chip plus a light terracotta glow (0 0 28px rgba(204,81,59,.28)).
  Gotcha: the unlayered .case-study-row { transition } rule in
  globals.css beats Tailwind's layered transition utilities, so the
  fill/glow transition lives there (opacity + background-color +
  box-shadow), not in the card's classes. "Coming Soon" pill is a
  solid border now, not dashed.
- Card fill revised again same day (2026-10-14, my call): the faint
  warm tint still read grey, so idle is ivory (#fffff0), and hover
  keeps the ivory fill and only adds the soft terracotta glow
  (rgba(204,81,59,.35), 28px) — the bg-chip hover fill is gone. It's
  a visibly yellower ivory than the page's #fffdfc; if it ever reads
  too yellow, #fffdf3 is the quieter option.
- Case card fill, third pass (2026-10-14): ivory #fffff0 read too
  yellow, so it's now #fbf7ee — a lighter, warmer ivory leaning
  beige. Case cards only; the Open Resource cards stay #fffff0.
- Claude Code 01/02 connectors (2026-10-14, my call — "the text should
  meet at the arrow ends", from annotated screenshots where the
  arrowhead ended ~45px above the first takeaway line): the trail's
  last stretch used to be a guessed 70px below the image, but the real
  distance depends on the caption row, the subgrid row gaps, and the
  takeaways' margin-top (about 45px more than the guess). Now the
  trail is three pieces tied to the cells that actually own the
  geometry: dots + line down to the image's bottom edge (in the image
  wrapper), a middle segment inside the caption <p> (top:-36 =
  mt-3 + 24px row gap, bottom:-24 = the next row gap), and the
  AnnotationHook inside the takeaways cell at top:-5, so the arrowhead
  (17px down the 24px hook) sits at the cell's first line center
  (12px). Annotated steps lost the takeaways' mt-10 at sm+ (kept it on
  mobile where the trail is hidden) and pl-12 -> pl-8 so the text sits
  ~16px right of the tip. Measured at 1280px: arrow tip vs first-line
  center within 1px on both 01 and 02. Cost of the tighter fit: those
  takeaways now sit closer under the caption than before.
- Progressive disclosure on /tanmigo's "3 reasons I adopted a new
  workflow with agents" (2026-10-14, her idea: a down button after each
  point): new client component DisclosureList.tsx replaces the plain
  <ol>. Each reason's number + headline stays visible with a circular
  down-chevron after it (same ring-1 ring-black/10 family as the
  carousel arrow); clicking the row opens its paragraph underneath and
  flips the chevron. Item 01 starts open (her call, as a hint that the
  rows expand) and 02/03 start collapsed (the three headlines are the
  skim version of the argument); items are independent, so two can be
  open to compare. Body animates via grid-template-rows 0fr->1fr
  (height:auto isn't transitionable) + opacity; `inert` while closed
  keeps collapsed text out of tab order and the a11y tree; the row is a
  real <button> with aria-expanded/aria-controls. The intro paragraph
  above it and the workflow table below are untouched.
- Hero grid images downsized (2026-10-14, my call, after a perf
  review): the 16 hero-grid-*.png/.webp were 1606x1606 but display at
  ~150px (desktop) / ~72px (phone). Re-exported in place at 480px wide
  (~3x the largest display size, so still crisp on retina), alpha
  preserved: PNG+WebP combined 18.9MB -> 2.1MB; the WebP actually
  served to modern browsers is ~0.4MB total for all 16. Originals
  remain in ~/Desktop/portfolio images. Not applied to the case-study
  thumbnails (Felidae's PNG is still 2.8MB) — that's the next place to
  look if page weight matters again.
- Hero grid on phones (2026-10-14, my call, her "4x4" pick over a
  scrolling-strips alternative): at 390px the 6-column grid left
  images ~26px (50px cells minus p-3). Below sm it's now 4 columns:
  first 8 images (6 top row + lamb + vegetables) in rows 1-2, the name
  block in row 3 (col-start-1, full width), last 8 (coffee-dog, ramen
  + the 6 bottom-row images) in rows 4-5 — 16 images divides exactly
  into 4x4, nothing orphaned. Cells use p-1 below sm (p-3 from sm up),
  gap-2 (gap-5/7 above). Placement is data-driven CSS vars (--c/--r
  desktop, --mc/--mr mobile) fed to arbitrary-property classes
  [grid-column-start:var(--mc)] sm:[grid-column-start:var(--c)], since
  Tailwind can't generate classes from interpolated numbers. Scroll
  parallax is off below sm (matchMedia, min-width 640px). Result at
  390px: 72px images, no horizontal overflow; desktop unchanged (6
  cols, 150px images at 1280).
- Read-more cards + link hover + table line (2026-10-14, my call):
  the "Read more" CaseStudy cards at the bottom of /meta, /claude-code
  and /tanmigo were still on the old thumbnails (case-tanmigo.png,
  case-claude-code.png); they now use case-tanmigo-hero and
  case-claude-code-thumbnail with the same aspect + shade as the
  home page (Meta's card unchanged). .site-link now also tilts -3deg and
  scales 1.08 on hover/focus (display:inline-block, origin left, off
  under prefers-reduced-motion), the same answer as the footer
  envelope. The /claude-code CLAUDE.md-vs-Proposed UI comparison table
  got a row divider (border-b border-ink/10 on every body row but the
  last) so CLAUDE.md and Proposed UI read as separate rows. Gotcha hit
  again: after editing globals.css the dev server kept serving the
  previous CSS chunk, even to a freshly opened tab (the rule list from
  document.styleSheets lacked the new declarations) — cleared .next's
  contents and restarted the server, which fixed it. rm of the .next
  dir itself reports "Permission denied" in this sandbox but the
  contents do go.
- ProjectChips: Wilde Backyard chip deleted ("designing..." has three
  chips now: Wilde Pod powered by Mega-detector, Tanmigo, My First Art
  Show).
- Small trims (2026-10-14, my call): envelope w-20 -> w-16 (0.8x); the
  "Timeline <-> card colour" screenshot and its caption ("The result:
  every card renders by the same rules...") were deleted from /tanmigo's
  tag-autocomplete pair (left image + caption stay, in the same
  half-width grid cell; tanmigo-annotation-rails.* files left on disk,
  unused); case card fill went #fbf7ee -> #fefcf8, close to white.
  Follow-up same day: the remaining autocomplete image is centered
  (mx-auto, sm:w-[calc(50%-1rem)] — same width it had in the 2-col
  grid, no longer a grid at all) instead of sitting left in a half
  empty row.
- Footer email popup made copyable (2026-10-14, her bug report: "really
  hard to copy the email address"): it was pointer-events-none,
  dropped under the envelope with an 8px gap, and gone the moment the
  cursor left the icon, so there was no way to move onto the address
  or select it. Now it sits flush to the envelope's right (no gap to
  cross), uses invisible+opacity (so it can't catch clicks while
  hidden) instead of pointer-events-none, the address is select-all
  (one click selects it), and if navigator.clipboard.writeText fails
  the Copy button selects the address text as a fallback so Cmd/Ctrl+C
  works. Hover-only still means touch users just get the mailto.
- Cleanup + reveal + chip captions (2026-10-14, my call): the bouquet
  is gone from Open Resource (picture, its spacers, and the files
  open-resource-flowers.*). The email envelope lost its white tile +
  terracotta ring/glow on hover ("delete the white tile and terracotta
  glow"); the tilt + 1.1x scale is its whole selected state now. Hero
  grid reveal is a strict left-to-right sweep: delay = 200ms +
  170ms per column (+45ms per row within a column), 700ms ease-out,
  so column 1 lands ~200ms and column 6 ~1.05s — before this it was
  row-weighted (90ms/row vs 40ms/col), which read as top-to-bottom.
  "Designing..." chips: "Wilde Pod powered by Mega-detector" (hover:
  "ML pipeline to capture wildlife" — fixed "wildlifes"),
  "Tanmigo" ("Video annotation platform"), "My First Art Show" ("Dog
  portraits in Bernal Heights!", capitalized Heights). Wilde Backyard
  unchanged.
- Footer (2026-10-14, my call): the ↗ came off LinkedIn/GitHub/
  Instagram ("because it's footer") — the footer's social list needs
  no external-link cue; the arrow rule still applies to inline links
  elsewhere. "Email me" is now her hand-drawn envelope
  (email-me.png/webp, bbox-cropped, 320px wide, from "email me.png")
  rendered at w-20, still a mailto link with aria-label="Email me" and
  the hover popup (address + Copy) intact. Selected state on
  hover/focus: white tile with a 1.5px terracotta ring + soft glow,
  envelope tilts -3deg and scales 1.1. First try used the bg-chip fill,
  which is nearly the footer band's own pink and didn't read as
  selected; white is what makes it pop on that band.
- Open Resource pass (2026-10-14, my call, from an annotated
  screenshot): dropped the border-t divider above More Projects; the
  Disclaimer label lost its ↗ (kept as a plain site-link); the dove
  moved up beside the "Open Resource" heading (w-14 sm:w-24, inline
  with the h2); the bouquet was cropped (bottom 28% of the stem cut off
  the file itself, now 520x685), made 1.5x (w-[16.5%] max 225px), and
  positioned absolutely at -bottom-16 so it sits on the navy band's
  bottom edge instead of floating beside the cards. Hidden spacers of
  the same width flank the cards so they stay centered.
- Open Resource cards re-laid-out, not re-written (2026-10-14, my
  call): "less techy" means the layout, not the content — she's
  applying for tech jobs and the copy should stay technical. Cards are
  now rounded-2xl ivory with a slight alternating tilt (-1/+1/-1deg,
  straightening on hover with the same terracotta glow), labels are
  larger display-font headings instead of small navy caps, and no
  hard-edged white box/border. Text unchanged.
- One link style (2026-10-14, my call): .site-link in globals.css —
  ink text, faint underline, accent-deep on hover — replaces the old
  accent-deep-underlined links, which read as form errors. A trailing
  ↗ marks links that leave the page, including mailto (Email me ↗,
  since it hands off to the mail app). Applied to the Claude Code
  links, tanmigo.com, Meta (source), Creative's Etsy/Instagram, and
  the footer email + social links. The navy Open Resource section's
  white-underline links are a separate on-dark style, left as is.
- Open Resource flanked by two illustrations (2026-10-14): purple
  bouquet left, blue dove right (open-resource-flowers/-dove, cropped
  to bbox, 520px wide), in a flex row around the three cards, hidden
  below sm. The bouquet's muted purple is low-contrast on the navy
  band; watch that.
- Header's bottom squiggle removed entirely (2026-10-13, my call —
  "remove the curly blue line"): dropped the <div className="border-
  squiggle"> and, since nothing else used that class, the whole
  .border-squiggle rule in globals.css too (was a tiled hand-drawn SVG
  wave, light blue, under the header nav). Header's bottom edge is a
  plain straight line now.
- Header: nav absolute-right, positioned independently inside a
  relative header — my explicit spec, keep it. There's only one fox
  mark now, centered (w-10 sm:w-14): the corner logo link was removed
  2026-10-12 since having it twice (corner + center) was redundant
  once the center slot stopped being "site title" (my name +
  "Product Designer") and became the fox again — my name reads big in
  <HeroGrid> instead. The header's bottom edge is a hand-drawn
  squiggle (.border-squiggle in globals.css) instead of a straight
  border, my call the same day — it's a tileable SVG background, not
  an image, so it never stretches. Stroke is light blue
  (--color-navy-tint #d1dcf0, not black) at an 80px tile (wider =
  lower frequency than the first pass) as of a same-day follow-up.
  Mobile stacks the nav the same way
  as before. An earlier grid-areas version measured centered but
  rendered off-center for me once; absolute positioning is the
  defensive choice either way.
- "Case Studies" heading: left-aligned on the rail, not centered. Its
  old "Click to see more" caption was removed 2026-08-25 as redundant —
  don't reintroduce it.
- Back to top (quieted 2026-08-25, my call): a small circular
  icon-only button — surface fill, thin ring, gray up arrow, subtle
  lift on hover — right-aligned within the site container, above the
  footer. The old navy filled button is retired. Always the shared
  <BackToTop> component; keep the aria-label. Takes an optional `wide`
  prop (2026-10-13, my call: "the up button should be more right
  aligned...compare to the > button") — plain <BackToTop /> stays on
  max-w-6xl with symmetric px-6/px-10, which every non-home page uses;
  <BackToTop wide /> (home page only, where More Projects' carousel
  arrow sits close by) switches to max-w-7xl with an asymmetric
  pl-6/pl-10 + smaller pr-3/pr-5, so it lands visibly to the right of
  that arrow instead of just matching it. Don't add `wide` to the
  other pages — they're still on the narrower rail.
- Footer: left-aligned on the rail. Name in terracotta, body in ink,
  gray uppercase "Social" label, then LinkedIn / GitHub / Instagram as
  plain stacked text links (not icon buttons). The email link reads
  "Email me" (my call, 2026-10-13 — was the bare address), still a
  real mailto: link; hovering it reveals a popup with the actual
  address plus a one-click Copy button (navigator.clipboard, with a
  2-second "Copied!" swap and a silent catch if the browser denies
  clipboard-write — it still shows the address to copy by hand
  either way). Footer became a Client Component for this (useState for
  the copied flag); it had no other interactivity before.

## Design tokens

Colors: follow the Figma site file (link in the build log below). The
only reason to deviate is a contrast failure against the accessibility
rules above — then pick a passing value and tell me. Current sampled
tokens live in globals.css with usage comments.

Type: one family, Hanken Grotesk (Google Fonts via next/font), for
everything — headings, body, nav, labels. Hierarchy comes from weight,
size, and color, never from switching families. One exception (my
call, originally 2026-08-25 as Beth Ellen; tried Pacifico 2026-10-12
for Bottega Lily consistency, rejected same day as too bold with no
lighter weight available; settled on **Satisfy** instead): a
handwriting script via next/font (--font-script, .font-script in
globals.css), used for the hero signature line (the bio sentence under
the headline), the About page's scrapbook headings (journey map +
stack), and the footer's sign-off name — never for nav or body text.

The header wordmark briefly got its own treatment (2026-10-12): my
real handwriting, drawn and exported as a transparent PNG
(public/media/signature-wordmark.png, "cheung" digitally shifted down
~42px so it sits on the same baseline as "irene" — the raw scan had it
floating above the line). Same day, the header's center slot was
redone to just show the fox mark instead (see Design rules → Header)
and my name moved to <HeroGrid>'s center cell in Hanken, not script —
so signature-wordmark.png is currently unused. It's a good asset,
just not wired into the header anymore; don't delete it, and redo the
baseline check above if it gets reused somewhere.

Script needs ~1.3x the size of the sans it replaced for its three
current usages. The "Product Designer" subtitle (wherever it still
appears) stays Hanken. Legibility was compared against Betania Patmos
and Homemade Apple before picking the original (Beth Ellen) script.
UI labels differentiate with uppercase + letter-spacing + smaller
size. Header sizing as of 2026-10-12: fox mark only, w-10 mobile /
w-14 desktop (sm:-scoped in Header.tsx), nav 14px. Never use the
"London Tube" font anywhere (unlicensed Johnston clone — its TTF must
never be committed) and don't reintroduce Roboto.

The big page h1s (About, Creative) are 27px on mobile and 38px from sm
up. They used to be a flat 38px at every width, which was the only h1
on the site with no mobile size at all; 0.7x on mobile was my call
(2026-08-14). The case-study h1s are a separate, already-tuned pair of
sizes (32px mobile, 40px desktop) and were deliberately left alone.

Spacing: section gap 96–140px · heading-to-body 12–16px · paragraph
gap 24px.

Interaction: horizontal scrollers are focusable, arrow-key navigable,
and never hijack the wheel.

## Build log & working notes

- metadataBase is https://irenecheung.net (switched 2026-07-18; the
  vercel.app URL remains as an alias). The og-image itself
  is public/media/og-image.png (1200x630).

Everything below is running memory between me and my build agents: what
got decided, what drifted, and what to check before "fixing" something
that looks odd. It's messy on purpose — building in the open includes
the notes.

- /tanmigo page additions, 2026-10-13 (my call), all sourced from real
  screenshots in ~/Downloads/tanmigo case study/, copied into
  public/media and renamed: a third image (tanmigo-color-system.png/
  webp, from "Color design system.png") now sits under the sticky-notes
  + CSS-tokens pair, captioned "The design system now lives in code,
  here's the color, and components with reference to shadcn." Right
  after the decision tree, the single tanmigo-annotation-page.png hero
  was replaced by two real screenshots side by side:
  tanmigo-annotation-autocomplete.png (the # tag autocomplete, from
  "Annotation_auto complete.png") and tanmigo-annotation-rails.png
  (scrub bar ↔ card color, from "Annotation card_scrub bar timeline
  color.png") — tanmigo-annotation-page.png itself is now unused, not
  deleted. The Live Product section got a real demo video
  (public/media/tanmigo-demo.mp4, <video controls>, no autoplay/loop —
  this is a deliberate watch, not an ambient no-GIF loop) under the
  tanmigo.com line ("...or you can watch the product demo"), compressed
  from a 150MB+ .mov source down to a few MB (scale 1600 wide, libx264
  crf 23, no audio track — the source has none). The video's source
  file got swapped once already same day ("swap this one to the
  current one") by just overwriting tanmigo-demo.mp4 at the same path
  — no code change needed when only the video content changes, only
  when the filename does. Its poster is case-tanmigo-hero.png/webp
  (from "Hero.png" in that same folder) — not the older
  case-tanmigo.png/webp (the recreated-mockup cover used elsewhere);
  "the current hero image" meant this new real screenshot specifically.

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
- Home page structure: Hero → Case Studies (three covers in one row,
  since 2026-08-25) → More Project (carousel, 2026-10-12) → Open
  Resource (intro + 4 info cards) → Back to top → Footer. Hero itself
  changed 2026-10-12: <Hero> is now just <HeroGrid> (5x3 placeholder
  grid, name in center — the bio line "I design internal tools..."
  also lives in that center cell now, under "product designer," in
  plain Hanken, not script; it used to sit in Hero/ProjectChips). The
  headline + location/Ex-Meta line moved into <ProjectChips> as its
  left column, with the project-name chips (Wilde Pod / Wilde Backyard
  / Tanmigo / My First Art Show) as the right column under a
  "Designing..." h3 — both columns share one full-bleed yellow band
  between Hero and Case Studies. The San Francisco line uses a 📍
  emoji, not an SVG pin — simplest way to get a colored, slightly-3D
  pin without a custom asset. Chip styling (my call, 2026-10-12,
  revised same day): Wilde Pod / Wilde Backyard / Tanmigo are solid
  --color-navy pills, white text, rounded-md (less round than a full
  pill, and NOT the site's square chip either — this one spot takes
  cues from stuut.ai's tag-cloud reference, not the site's own chip
  convention). My First Art Show is an outline variant of the same
  shape — border-2 border-navy, transparent fill, navy text — not
  plain text; it still reads as lighter-weight than the solid three
  without disappearing into the yellow background. Its caption is real
  now, not a placeholder: "Art show of dog portraits in Pinhole Coffee
  at Bernal Heights." Hover reveals a bold-bordered (border-2
  border-accent-deep) caption popup underneath each, stuut-style —
  and as of a same-day follow-up, hovering any one chip dims + blurs
  the other three (.chip-cloud / .chip-item in globals.css, CSS
  :has(), no JS) so its caption reads as the focus instead of
  competing with three equally-sharp labels. See
  Design rules → fox/grid pending note and the quiet-background
  exceptions above. The Felidae /
  Wilde
  Backyard card was cut from Case Studies 2026-08-25 (my call: no case
  page, project not shipped, little UI to show) — its assets stay in
  public/media for when the case study exists. Re-added 2026-10-12 as
  a 4th, non-clickable "Coming Soon" card (no href prop, so <CaseStudy>
  renders a plain div, not a <Link> — no hover lift).
  The Figma content shifts over time (Blue Bottle moved from
  Case Studies to More Project; a Claude Code card replaced it) — re-
  check the Figma before assuming a card's section.
- Case Studies layout (my call, 2026-10-12): one column now, not a
  grid — each project is a full-width row via <CaseStudyRow>
  (src/components/CaseStudyRow.tsx), card on the left, right half
  intentionally blank at rest. Hovering a row fades in a quick-facts
  panel for that project into the blank space. This used to be the
  full six-field <SummaryGrid> (same component as the case-study
  pages); trimmed 2026-10-13 (my call, after "the summary card is a
  lot" feedback) to <CaseStudyQuickFacts>
  (src/components/CaseStudyQuickFacts.tsx) — Category/Org/Product/Role
  only. First version dropped the per-field bordered cards for a flat
  label/value grid; brought the rectangle back the same day (my call)
  at p-4, lighter than <SummaryGrid>'s p-6, since four one-line facts
  still read better in their own box than run together, just don't
  need as much room as the six-field version. Core Challenge and
  Impact — arguably the best content, which is exactly why they're
  saved for the click-through instead of given
  away in a hover — stay only on each case-study page's own
  <SummaryGrid>, untouched. META_SUMMARY etc. in page.tsx now hold just
  those 4 fields (still hand-copied from each page's own
  SUMMARY_FIELDS, still no shared source — same drift risk as before,
  just across fewer fields now). Felidae has no case page, so its row gets no summaryFields
  prop — right side just stays blank, nothing to reveal. Hidden
  entirely on mobile (sm:block) since hover doesn't translate to touch.
  The reveal went through three passes before landing (all 2026-10-12):
  (1) absolute + overflow-y-auto clipped to the card's height, which
  forced an internal scroll to see all six fields; (2) absolute +
  natural height with no clip, which fixed the scroll but let the
  panel float free of the row and overlap the card below it — the two
  sides no longer shared a bottom edge; (3) current: the summary
  mounts into normal document flow (conditionally rendered, not just
  opacity-faded) only while hovered, so the row's own grid height
  grows to fit it via default align-items: stretch, and later rows
  reflow down with no overlap. That conditional mount is why
  <CaseStudyRow> split into two files: hover state has to live in a
  Client Component, but the panel's Icon fields are functions, and
  React Server Components can't pass functions as props into a Client
  Component — only already-rendered elements. So <CaseStudyRow>
  (Server) renders <CaseStudyQuickFacts> itself and hands the result to
  <CaseStudyRowShell> (Client, src/components/CaseStudyRowShell.tsx)
  as a plain `summary` node; the Shell owns onMouseEnter/Leave and
  conditionally renders that node. Don't try to move the icon
  components into the Shell or pass raw SummaryField[] across that
  boundary — same error again. Follow-up the same day: since a row
  grows taller on hover, hovering one near the bottom of the viewport
  could reveal a summary the user then had to scroll to see. The
  Shell's onMouseEnter now double-rAFs (one tick for React to commit
  the reveal, one for the browser to lay it out) then checks
  getBoundingClientRect() — if the row isn't now fully within the
  viewport, it scrollIntoView({behavior:"smooth", block:"center"}).
  Only fires when not already fully visible, so a row already in view
  doesn't jump. Hovering one row also dims the other three to 0.45
  opacity (.case-study-list / .case-study-row in globals.css, same
  CSS :has() pattern as the chip cloud, opacity only, no blur — these
  rows carry real content that should stay legible even de-emphasized,
  unlike the small chip labels).
  One more same-day pass on this interaction: a 250ms hover latency
  (HOVER_LATENCY_MS in CaseStudyRowShell.tsx) before the reveal fires
  at all, so a cursor just passing through the row doesn't trigger it;
  the reveal itself is now a real opacity transition (summary mounts
  at opacity 0, flips to 1 a frame later — can't transition a node
  that doesn't exist yet) over 500ms (TRANSITION_MS), same duration
  the left card uses to dim to 0.6 opacity while its own summary is
  showing; and the auto-scroll's native behavior:"smooth" was swapped
  for animatedScrollIntoView(), a manual rAF scroll over 700ms
  (SCROLL_DURATION_MS) with ease-in-out, since scrollIntoView's native
  smoothing has no duration control and read as too quick. All three
  constants live at the top of CaseStudyRowShell.tsx if these need
  retuning again. The row's column split (2026-10-13, my call, after
  "too many space on the right before hover"): sm:grid-cols-[2fr_1fr]
  on the row, not sm:grid-cols-2 — a strict 50/50 made the blank rest
  state look like half the row was dead space, since the card doesn't
  need that much room and the quick-facts panel needs even less. This
  is also what let Case Studies go back to the shared max-w-7xl rail
  (see the "One left rail" exception note above) instead of the wider
  container that was papering over the same problem: a wider card at
  2/3 of max-w-7xl filled the visual gap without needing extra width.
- More Project cards (headline + body + outlined tag pills,
  border-accent-deep, transparent fill, square corners since the
  2026-08-25 chip restyle) stay deliberately plain text-wise — no
  white card, no shadow, no attribution — but as of 2026-10-12 they do
  carry a real screenshot each (Blue Bottle survey flow, the YouTube
  moderator panel), shown one project at a time via
  <MoreProjectsCarousel> (src/components/MoreProjectsCarousel.tsx),
  because the section read as "lacking visuals" with text alone. The
  image sits in a fixed frame (h-72/h-80, no border — the border read
  as fussy at this size) specifically so it stays legible instead of
  shrinking to fit two side by side. Navigation is a single "›" button
  (not the dots) that advances and wraps around; the two dots are
  plain, non-interactive position indicators now — my call 2026-10-12,
  after the first version made the dots clickable, which wasn't the
  ask. The arrow button's look went through a couple of passes same
  day (red-tinted fill, then a neutral grey fill) before landing on
  matching <BackToTop> exactly — bg-surface, ring-1 ring-black/10,
  hover:ring-black/20 + a small lift, same #57534e stroke icon, just
  pointing right instead of up — so the two "move" affordances on the
  page read as one family instead of two different button styles.
  Count hints added 2026-10-12, then reversed 2026-10-13 (both Irene's
  call): the "Next project" caption and the "{n} of {total}" text are
  gone again — replaced by a blurred 10%-wide peek of the next
  project's own image at the row's right edge (absolute inset-y-0
  right-0 w-[10%], scale-150 object-cover object-left blur-md, with a
  gradient fade to --color-bg over it) instead of a text hint. The
  dots alone are back to being the only indicator; no aria-live
  counter. The outline pills still signal
  "secondary" vs. the filled-pill <CaseStudy> look — don't let that
  distinction drift (it did once; caught 2026-07-16).
- Chip restyle 2026-08-25 (my call, part of the consumer-facing pass):
  every chip on the site is now a square-cornered rectangle (no
  border-radius) in light orange — bg --color-chip #ffece6 with
  accent-deep text, hover inverts to accent-deep/white. This replaced
  the rounded navy-tint pills everywhere: case-card tags, case-page
  hero tags, More Project outline pills (outline went navy →
  accent-deep), and the hero badges (outline → filled). The one
  exception is /meta's Data/Logic/UX framework section, which keeps
  its navy rounded pills — don't convert it.
- Case-study pages built: /meta, /tanmigo, /claude-code. Cards link via
  the href prop on <CaseStudy>. Felidae and Blue Bottle have no pages
  yet — Felidae's card was removed from the home grid 2026-08-25 and
  returns when its case study exists.
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
- Case cards restyled again 2026-08-25 (Irene's call; supersedes both
  the Figma card look and the earlier white-box restyle): no bounding
  box at all. Each card is a bare 16:9 cover (aspect-video, full-bleed
  object-cover; transparent/odd-ratio assets use fit="contain" with a
  mediaBg field) with the text stacked under it — uppercase
  attribution overline, 22px title, 15px body clamped to 2 lines (trim
  copy to fit rather than letting the ellipsis cut mid-sentence),
  single-row nowrap tags (filled — the More Project outline
  distinction stands), and a motion-safe cover zoom + lift on hover.
  Covers are art-directed compositions, not raw captures — sources in
  refs/*-cover.html, rendered at 2x via headless Chrome (see the
  case-meta note below for the command).
- The home page rail widened to max-w-7xl on 2026-08-25 (Irene's call)
  so the hero headline, section headings, and the case-card grid share
  one wider edge. Other pages stay on max-w-6xl.
- Case-study hero images (2026-08-25): no background card — the image
  sits directly on the hero band's grid paper. Width caps are 0.75x of
  native and deliberate (Tanmigo/Meta 384px, Claude Code 315px): the
  assets are only 455-571px wide, and anything above native renders
  soft/compressed. Don't re-enlarge without a 2x recapture.
- Case-study hero images double as homepage thumbnails: one
  case-<name>.webp/png per project in public/media, cropped from the
  Figma exports in refs/ (the exports had a soft blush card baked in;
  crops keep only the opaque content so the site's own wrapper supplies
  the card look). Exception: all three covers are art-directed compositions,
  not captures, rendered at 2x from refs/*-cover.html via headless
  Chrome (add --default-background-color=00000000 for the transparent
  ones). case-meta is a deliberate NDA joke (my call, 2026-08-25): a
  skeleton wireframe dashboard — line chart, two tile grids, a lone
  close button — with NDA stamped in the middle; nothing real is
  shown by construction. case-tanmigo recreates three annotation
  cards from the live product; case-claude-code recreates the
  Context-panel concept. Regenerate with:
  chrome --headless --screenshot --window-size=1120,630
  --force-device-scale-factor=2 refs/<name>-cover.html. Remaining PlaceholderImage usage (Tanmigo's video
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
