"use client";

import { useState, type MouseEvent, type ReactNode } from "react";

const PULL_RADIUS = 50; // px from center before the pull falls off to nothing
const MAX_PULL = 10; // px, how far the button can nudge toward the cursor

/**
 * A button that nudges slightly toward the cursor as it gets close
 * (Irene's call, 2026-10-13, one of three named interaction ideas she
 * picked). The hoverable zone is padded a bit past the button's own
 * edges (p-3 -m-3, net zero layout shift) so the pull starts just
 * before the cursor actually reaches the button, which is what makes
 * it read as "magnetic" rather than just a hover wobble.
 */
export function MagneticButton({ children, className }: { children: ReactNode; className?: string }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLSpanElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);
    if (dist > PULL_RADIUS) {
      setOffset({ x: 0, y: 0 });
      return;
    }
    const pull = (1 - dist / PULL_RADIUS) * MAX_PULL;
    const angle = Math.atan2(dy, dx);
    setOffset({ x: Math.cos(angle) * pull, y: Math.sin(angle) * pull });
  };

  return (
    <span className="-m-3 inline-block p-3" onMouseMove={handleMouseMove} onMouseLeave={() => setOffset({ x: 0, y: 0 })}>
      <span
        className={className}
        style={{ transform: `translate(${offset.x}px, ${offset.y}px)`, transition: "transform 150ms ease-out" }}
      >
        {children}
      </span>
    </span>
  );
}
