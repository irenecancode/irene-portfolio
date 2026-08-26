import Link from "next/link";

type CaseStudyProps = {
  attribution: string;
  headline: string;
  body: string;
  tags: string[];
  href?: string;
  /** How the cover sits in its media field. Full-bleed covers use "cover"
      (the default); transparent or odd-ratio assets use "contain" with a
      mediaBg field behind them. */
  fit?: "cover" | "contain";
  mediaBg?: string;
} & (
  | { placeholder?: false; imageWebp: string; imagePng: string; imageAlt: string }
  | { placeholder: true; imageWebp?: never; imagePng?: never; imageAlt?: never }
);

export function CaseStudy(props: CaseStudyProps) {
  const { attribution, headline, body, tags, href, fit = "cover", mediaBg } = props;
  const className = "flex flex-col";
  const linkClassName =
    className +
    " group rounded-sm transition-transform duration-200 hover:-translate-y-1 focus-visible:-translate-y-1";

  const imgClassName =
    fit === "cover"
      ? "h-full w-full object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.03] motion-safe:group-focus-visible:scale-[1.03]"
      : "max-h-[88%] max-w-[80%] object-contain transition-transform duration-300 motion-safe:group-hover:scale-[1.03] motion-safe:group-focus-visible:scale-[1.03]";

  const content = (
    <>
      {props.placeholder ? (
        <div className="flex aspect-video w-full items-center justify-center bg-surface ring-1 ring-black/5">
          <p className="text-sm text-ink">thumbnail, tbd</p>
        </div>
      ) : (
        <div
          className={`flex aspect-video w-full items-center justify-center overflow-hidden ${mediaBg ?? ""}`}
        >
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

      <div className="pt-5">
        <p className="font-nav text-xs font-medium tracking-[0.08em] text-muted uppercase">{attribution}</p>
        <h3 className="font-display mt-1 text-[22px] font-medium text-ink text-balance transition-colors duration-200 group-hover:text-accent-deep group-focus-visible:text-accent-deep">
          {headline}
        </h3>
        <p className="mt-2.5 line-clamp-2 text-[15px] leading-6 text-ink">{body}</p>

        <div className="mt-3.5 flex flex-nowrap gap-2 overflow-hidden">
          {tags.map((tag) => (
            <span
              key={tag}
              className="whitespace-nowrap bg-chip px-2.5 py-0.5 text-[11px] font-medium text-accent-deep transition-colors duration-200 group-hover:bg-rust group-hover:text-white group-focus-visible:bg-rust group-focus-visible:text-white"
            >
              {tag}
            </span>
          ))}
        </div>
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

  return <div className={className}>{content}</div>;
}
