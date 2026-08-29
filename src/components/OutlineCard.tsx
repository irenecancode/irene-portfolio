type ToolEntry = {
  name: string;
  desc: string;
  icon: string;
};

export function ToolCard({ title, tools }: { title: string; tools: ToolEntry[] }) {
  return (
    <div className="rounded-md border border-accent/30 p-6 transition-shadow duration-200 hover:shadow-[0_0_20px_rgba(209,220,240,0.5)]">
      <p className="font-nav text-sm font-medium text-muted uppercase">{title}</p>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {tools.map((tool) => (
          <div key={tool.name} className="flex items-start gap-3">
            <picture className="shrink-0">
              <source srcSet={`/media/stack-${tool.icon}.webp`} type="image/webp" />
              <img
                src={`/media/stack-${tool.icon}.png`}
                alt=""
                className="h-8 w-8 object-contain"
                loading="lazy"
              />
            </picture>
            <div>
              <p className="text-base font-medium text-ink">{tool.name}</p>
              <p className="text-sm text-muted">{tool.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ListCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-md border border-accent/30 p-6 transition-shadow duration-200 hover:shadow-[0_0_20px_rgba(209,220,240,0.5)]">
      <p className="font-nav text-sm font-medium text-muted uppercase">{title}</p>
      <ul className="mt-4 flex flex-col gap-2">
        {items.map((item) => (
          <li key={item} className="text-base text-ink">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ImageImpactCard({
  title,
  items,
}: {
  title: string;
  items: { label: string; icon?: string }[];
}) {
  return (
    <div className="rounded-md border border-accent/30 p-6 transition-shadow duration-200 hover:shadow-[0_0_20px_rgba(209,220,240,0.5)]">
      <p className="font-nav text-sm font-medium text-muted uppercase">{title}</p>
      <div className="mt-4 flex flex-col gap-4">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-3">
            {item.icon ? (
              <picture className="shrink-0">
                <source srcSet={`/media/${item.icon}.webp`} type="image/webp" />
                <img
                  src={`/media/${item.icon}.png`}
                  alt=""
                  className="h-10 w-10 rounded object-cover"
                  loading="lazy"
                />
              </picture>
            ) : (
              <div className="h-10 w-10 shrink-0 rounded bg-[#d9d9d9]" />
            )}
            <p className="text-base font-medium text-ink">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
