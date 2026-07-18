import type { ComponentType } from "react";

export type SummaryField = {
  Icon: ComponentType<{ className?: string }>;
  label: string;
  value?: string;
  list?: string[];
  numbered?: boolean;
};

export function SummaryGrid({ fields }: { fields: SummaryField[] }) {
  return (
    <div className="rounded-md bg-black/[0.03] p-6 sm:p-8">
      <p className="font-nav text-sm font-medium text-navy">Summary</p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {fields.map(({ Icon, label, value, list, numbered }) => (
          <div
            key={label}
            className="rounded-md bg-surface p-6 transition-transform duration-200 motion-safe:hover:scale-110"
          >
            <Icon className="h-6 w-6 text-ink" />
            <p className="mt-3 font-nav text-sm font-medium text-navy uppercase">{label}</p>
            {value && <p className="mt-1 text-base text-ink">{value}</p>}
            {list && (
              <ul className="mt-1 flex flex-col gap-0.5">
                {list.map((item, i) => (
                  <li key={item} className="text-base text-ink">
                    {numbered && (
                      <span className="text-muted">{String(i + 1).padStart(2, "0")} </span>
                    )}
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
