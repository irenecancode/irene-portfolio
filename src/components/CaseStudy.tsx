import Link from "next/link";

type CaseStudyProps = {
  attribution: string;
  headline: string;
  body: string;
  tags: string[];
  href?: string;
} & (
  | { placeholder?: false; imageWebp: string; imagePng: string; imageAlt: string }
  | { placeholder: true; imageWebp?: never; imagePng?: never; imageAlt?: never }
);

export function CaseStudy(props: CaseStudyProps) {
  const { attribution, headline, body, tags, href } = props;
  const className =
    "flex flex-col overflow-hidden rounded-xl bg-surface ring-1 ring-black/5 shadow-[0_16px_40px_-24px_rgba(0,0,0,0.18)]";
  const linkClassName =
    className +
    " group transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_28px_60px_-24px_rgba(0,0,0,0.28)] focus-visible:-translate-y-1 focus-visible:shadow-[0_28px_60px_-24px_rgba(0,0,0,0.28)]";

  const content = (
    <>
      {props.placeholder ? (
        <div className="flex h-[280px] items-center justify-center bg-surface">
          <p className="text-sm text-ink">thumbnail, tbd</p>
        </div>
      ) : (
        <div className="flex h-[280px] items-center justify-center overflow-hidden bg-surface px-6 sm:px-8">
          <picture className="contents">
            <source srcSet={props.imageWebp} type="image/webp" />
            <img
              src={props.imagePng}
              alt={props.imageAlt}
              className="max-h-[225px] w-auto max-w-[86%] object-contain transition-transform duration-300 motion-safe:group-hover:scale-[1.04] motion-safe:group-focus-visible:scale-[1.04]"
              loading="lazy"
            />
          </picture>
        </div>
      )}

      <div className="px-5 pt-4 pb-5 sm:px-6">
      <p className="font-nav text-xs font-medium tracking-[0.08em] text-muted uppercase">{attribution}</p>
      <h3 className="font-display mt-0.5 text-[22px] font-medium text-ink text-balance transition-colors duration-200 group-hover:text-accent-deep group-focus-visible:text-accent-deep">
        {headline}
      </h3>
      <p className="mt-2.5 line-clamp-2 text-[15px] leading-6 text-ink">{body}</p>

      <div className="mt-3.5 flex flex-nowrap gap-2 overflow-hidden">
        {tags.map((tag) => (
          <span
            key={tag}
            className="whitespace-nowrap rounded-full bg-navy-tint px-2.5 py-0.5 text-[11px] font-medium text-navy transition-colors duration-200 group-hover:bg-navy group-hover:text-white group-focus-visible:bg-navy group-focus-visible:text-white"
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
