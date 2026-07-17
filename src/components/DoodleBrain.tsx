"use client";

import { useSyncExternalStore } from "react";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const query = window.matchMedia(REDUCED_MOTION_QUERY);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getAllowMotionSnapshot() {
  return !window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

export function DoodleBrain({ className = "" }: { className?: string }) {
  // Default to the static frame so no-JS and first paint are never motion;
  // only upgrade to the looping video once we've confirmed the user allows it.
  const allowMotion = useSyncExternalStore(subscribe, getAllowMotionSnapshot, () => false);

  if (!allowMotion) {
    return (
      <picture>
        <source srcSet="/media/doodle-brain-poster.webp" type="image/webp" />
        <img src="/media/doodle-brain-poster.png" alt="" className={className} />
      </picture>
    );
  }

  return (
    <video
      className={className}
      autoPlay
      loop
      muted
      playsInline
      poster="/media/doodle-brain-poster.png"
      aria-hidden="true"
    >
      <source src="/media/doodle-brain.webm" type="video/webm" />
      <source src="/media/doodle-brain.mp4" type="video/mp4" />
    </video>
  );
}
