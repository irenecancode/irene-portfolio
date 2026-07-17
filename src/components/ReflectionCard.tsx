import { DoodleBrain } from "@/components/DoodleBrain";
import { Lead } from "@/components/Lead";

type ReflectionItem = {
  label: string;
  text: string;
};

type ReflectionCardProps = {
  heading: string;
  body: string;
  items?: ReflectionItem[];
  closing?: string;
};

export function ReflectionCard({ heading, body, items, closing }: ReflectionCardProps) {
  return (
    <div className="flex flex-col gap-8 rounded-md bg-[var(--color-reflection-bg)] p-8 sm:flex-row sm:items-center sm:p-10">
      <div className="max-w-2xl flex-1">
        <p className="font-nav text-sm text-muted">Becoming a better designer</p>
        <h2 className="font-display mt-2 text-[36px] font-normal text-ink text-balance">
          {heading}
        </h2>
        <Lead className="mt-4">{body}</Lead>

        {items && items.length > 0 && (
          <dl className="mt-6 flex flex-col gap-4">
            {items.map((item) => (
              <div key={item.label}>
                <dt className="font-nav text-sm text-ink italic">{item.label}</dt>
                <dd className="text-base text-ink">{item.text}</dd>
              </div>
            ))}
          </dl>
        )}

        {closing && (
          <p className="mt-6 text-base text-ink italic">{closing}</p>
        )}
      </div>

      <DoodleBrain className="hidden w-40 shrink-0 sm:block" />
    </div>
  );
}
