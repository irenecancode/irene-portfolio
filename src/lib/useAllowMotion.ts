"use client";

import { useSyncExternalStore } from "react";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const query = window.matchMedia(REDUCED_MOTION_QUERY);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getSnapshot() {
  return !window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

/** Defaults to false (static/no-motion) on first paint and server render;
 * only reports true once we've confirmed the user allows motion. */
export function useAllowMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
