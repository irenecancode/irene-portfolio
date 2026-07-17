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
    "flex flex-col rounded-md bg-surface p-6 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.15)] sm:p-8";

  const content = (
    <>
      {props.placeholder ? (
        <div className="flex aspect-[4/3] items-center justify-center rounded-md bg-[#d9d9d9]">
          <p className="text-sm text-ink">thumbnail, tbd</p>
        </div>
      ) : (
        <div className="card-gradient rounded-md p-6">
          <picture>
            <source srcSet={props.imageWebp} type="image/webp" />
            <img
              src={props.imagePng}
              alt={props.imageAlt}
              className="mx-auto aspect-[4/3] w-full max-w-2xl object-contain"
              loading="lazy"
            />
          </picture>
        </div>
      )}

      <h3 className="font-display mt-6 text-[22px] font-medium text-ink text-balance">
        {headline}
      </h3>
      <p className="mt-1 font-nav text-sm text-muted">{attribution}</p>
      <p className="mt-3 text-base leading-6 text-ink">{body}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-navy-tint px-3 py-1 text-xs font-medium text-navy"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
}
