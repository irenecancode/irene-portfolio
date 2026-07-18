"use client";

import { useSyncExternalStore } from "react";

const FOX_ALT = "Illustration of a fox wearing glasses, typing on a laptop.";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const query = window.matchMedia(REDUCED_MOTION_QUERY);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getAllowMotionSnapshot() {
  return !window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

export function FoxHero() {
  // Default to the static frame so no-JS and first paint are never motion;
  // only upgrade to the looping video once we've confirmed the user allows it.
  const allowMotion = useSyncExternalStore(subscribe, getAllowMotionSnapshot, () => false);

  if (!allowMotion) {
    return (
      <picture>
        <source srcSet="/media/fox-hero-poster.webp" type="image/webp" />
        <img src="/media/fox-hero-poster.png" alt={FOX_ALT} className="h-auto w-full" />
      </picture>
    );
  }

  return (
    <video
      className="h-auto w-full"
      autoPlay
      loop
      muted
      playsInline
      poster="/media/fox-hero-poster.png"
      aria-label={FOX_ALT}
    >
      {/* Order matters: Safari takes HEVC-alpha (hvc1), Chrome/Firefox skip it
          and take VP9-alpha webm. Plain mp4 last is the opaque last resort. */}
      <source src="/media/fox-hero-hevc.mp4" type='video/mp4; codecs="hvc1"' />
      <source src="/media/fox-hero.webm" type="video/webm" />
      <source src="/media/fox-hero.mp4" type="video/mp4" />
    </video>
  );
}
