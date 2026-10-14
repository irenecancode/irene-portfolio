import Link from "next/link";
import { MagneticButton } from "@/components/MagneticButton";

type CaseStudyProps = {
  attribution: string;
  headline: string;
  body: string;
  tags: string[];
  href?: string;
  /** The media box's own aspect ratio, as a Tailwind aspect-* class.
      Defaults to aspect-video (16/9). Forcing every card into 16:9
      regardless of its source image's real shape is what caused the
      "white space" complaint (2026-10-13) — a narrower or wider image
      inside a fixed-ratio box either needed cropping (contain+mediaBg,
      which just moved the problem into visible letterbox bars) or lost
      content. Matching the box to the image's own ratio instead means
      every card fills edge to edge with no bars and no crop — which
      also happens to suit a literal bento box, where compartments are
      different sizes, not a forced-uniform grid. */
  mediaAspect?: string;
  /** Extra classes for the image itself (not its media box) — e.g. a
      rounder radius + shadow on the photo/screenshot for a card whose
      image doesn't already carry that framing the way case-meta's
      recreated NDA card does (Felidae and Tanmigo's real screenshots
      wanted it, Meta/Claude Code's recreated mockups already draw
      their own). */
  mediaClassName?: string;
} & (
  | { placeholder?: false; imageWebp: string; imagePng: string; imageAlt: string; placeholderLabel?: never }
  | { placeholder: true; imageWebp?: never; imagePng?: never; imageAlt?: never; placeholderLabel?: string }
);

export function CaseStudy(props: CaseStudyProps) {
  const { attribution, headline, body, tags, href, mediaAspect = "aspect-video", mediaClassName } = props;
  // Same bordered "bento box" box either way (border/bg/padding) — only
  // the interactive bits (group + hover-to-chip) are link-only, since a
  // card with no href yet (Felidae, pending its own case-study page)
  // isn't actually clickable and shouldn't look like it is. Before this
  // fix the no-href branch used a bare `className` with none of this,
  // which is why Felidae was the one card not reading as a bento box.
  // case-study-row reactivates a dormant globals.css rule from the
  // earlier (now-unused) CaseStudyRowShell: hovering one card dims its
  // siblings, opacity only (no blur — real content, not decoration).
  //
  // Each card is a subgrid spanning 6 of the list's row tracks (media,
  // attribution, headline, body, tags, button), so cards that share a
  // row of the 2x2 line up row by row — headline with headline, tags
  // with tags — even though their media boxes have different heights
  // (each matches its own image's aspect ratio). The shorter media
  // sits centered in its track instead of every card being forced to
  // one image shape. gap-y-0 overrides the list's row gap inside the
  // card so the 6 rows stay tight; the gap between card rows is the
  // list's own.
  const baseBoxClassName =
    "case-study-row row-span-6 grid grid-rows-subgrid gap-y-0 rounded-lg border border-ink/10 bg-[#fefcf8] p-6";
  const linkClassName = `${baseBoxClassName} group hover:shadow-[0_0_28px_rgba(204,81,59,0.35)] focus-visible:shadow-[0_0_28px_rgba(204,81,59,0.35)]`;

  const imgClassName =
    "h-full w-full object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.03] motion-safe:group-focus-visible:scale-[1.03]" +
    (mediaClassName ? ` ${mediaClassName}` : "");

  const content = (
    <>
      <div className="flex items-center justify-center">
        {props.placeholder ? (
          <div className={`flex ${mediaAspect} w-full items-center justify-center`}>
            <div className="flex items-center justify-center bg-bg px-10 py-6 ring-1 ring-black/10">
              <p className="font-display text-base font-medium tracking-wide text-muted uppercase">
                {props.placeholderLabel ?? "thumbnail, tbd"}
              </p>
            </div>
          </div>
        ) : (
          <div className={`flex ${mediaAspect} w-full items-center justify-center`}>
            <picture className="contents">
              <source srcSet={props.imageWebp} type="image/webp" />
              <img
                src={props.imagePng}
                alt={props.imageAlt}
                className={imgClassName}
                loading="lazy"
              />
            </picture>
          </div>
        )}
      </div>

      <p className="mt-5 font-nav text-xs font-medium tracking-[0.08em] text-muted uppercase">{attribution}</p>
      <h3 className="font-display mt-1 text-[22px] font-medium text-ink text-balance transition-colors duration-200 group-hover:text-accent-deep group-focus-visible:text-accent-deep">
        {headline}
      </h3>
      <p className="mt-2.5 line-clamp-2 text-[15px] leading-6 text-ink">{body}</p>

      <div className="mt-3.5 flex flex-wrap content-start gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="whitespace-nowrap bg-surface px-2.5 py-0.5 text-[11px] font-medium text-accent-deep"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-5 self-start justify-self-start">
        {href ? (
          <MagneticButton className="inline-block border border-ink/25 px-4 py-1.5 text-sm font-medium text-ink transition-colors duration-200 group-hover:border-accent-deep group-hover:bg-accent-deep group-hover:text-white group-focus-visible:border-accent-deep group-focus-visible:bg-accent-deep group-focus-visible:text-white">
            Read More
          </MagneticButton>
        ) : (
          <span className="inline-block border border-ink/25 px-4 py-1.5 text-sm font-medium text-muted">
            Coming Soon
          </span>
        )}
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={linkClassName}>
        {content}
      </Link>
    );
  }

  return <div className={baseBoxClassName}>{content}</div>;
}
