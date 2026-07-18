"use client";

import { useEffect, useLayoutEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { useAllowMotion } from "@/lib/useAllowMotion";

// useLayoutEffect warns during SSR; this project's client components can be
// server-rendered, so fall back to useEffect there.
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Fades and lifts content in as it scrolls into view. Content already in the
 * viewport on first paint (or with prefers-reduced-motion, or before JS
 * confirms motion is allowed) renders fully visible immediately — the reveal
 * only ever applies to content the user hasn't scrolled to yet.
 */
export function Reveal({
  children,
  as = "div",
  className = "",
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}) {
  const allowMotion = useAllowMotion();
  const ref = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(true);

  useIsomorphicLayoutEffect(() => {
    if (!allowMotion) return;
    const el = ref.current;
    if (!el || el.getBoundingClientRect().top < window.innerHeight) return;

    setRevealed(false);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [allowMotion]);

  const Tag = as;

  return (
    <Tag
      ref={ref}
      className={`${
        allowMotion
          ? `transition-all duration-700 ease-out ${revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`
          : ""
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
