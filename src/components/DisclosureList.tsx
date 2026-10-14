"use client";

import { useId, useState } from "react";

type Item = { n: string; title: string; body: string };

/**
 * Numbered reasons with progressive disclosure (Irene's call, 2026-10-14):
 * the three headlines stay visible, each followed by a down-chevron
 * button, and the supporting paragraph opens underneath on click. Items
 * are independent (opening one doesn't close another) so a reader can
 * compare two. Only the first starts open; the headlines alone are the
 * skimmable version of the argument.
 *
 * The body animates via grid-template-rows 0fr -> 1fr (height: auto
 * can't be transitioned), and `inert` while closed keeps its text out of
 * the tab order and the accessibility tree.
 */
export function DisclosureList({ items }: { items: readonly Item[] }) {
  const baseId = useId();
  // First item starts open as a hint that the rows expand (Irene's call,
  // 2026-10-14); the rest stay collapsed.
  const [open, setOpen] = useState<Record<string, boolean>>(() =>
    items[0] ? { [items[0].n]: true } : {},
  );

  return (
    <ol className="mt-10 flex flex-col gap-6">
      {items.map((item) => {
        const isOpen = !!open[item.n];
        const panelId = `${baseId}-${item.n}`;
        return (
          <li key={item.n}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen((cur) => ({ ...cur, [item.n]: !cur[item.n] }))}
              className="group flex w-full max-w-3xl items-start gap-3 text-left"
            >
              <span className="text-xl font-medium text-ink">
                <span className="text-muted">{item.n}</span> {item.title}
              </span>
              <span
                aria-hidden="true"
                className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-surface ring-1 ring-black/10 transition-colors duration-200 group-hover:ring-black/25"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                >
                  <path
                    d="M5 8l5 5 5-5"
                    stroke="#57534e"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>

            <div
              id={panelId}
              inert={!isOpen}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="mt-2 max-w-3xl text-lg leading-7 text-ink">{item.body}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
