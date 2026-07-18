"use client";

import { useAllowMotion } from "@/lib/useAllowMotion";

export function CollageVideo({
  webm,
  mp4,
  posterPng,
  posterWebp,
  alt,
  priority,
  className = "block h-auto w-full rounded-md",
}: {
  webm: string;
  mp4: string;
  posterPng: string;
  posterWebp: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  // Same reduced-motion pattern as FoxHero: static poster by default,
  // only upgrades to the looping video once motion is confirmed allowed.
  const allowMotion = useAllowMotion();

  if (!allowMotion) {
    return (
      <picture>
        <source srcSet={posterWebp} type="image/webp" />
        <img src={posterPng} alt={alt} className={className} loading={priority ? "eager" : "lazy"} />
      </picture>
    );
  }

  return (
    <video className={className} autoPlay loop muted playsInline poster={posterPng} aria-label={alt}>
      <source src={webm} type="video/webm" />
      <source src={mp4} type="video/mp4" />
    </video>
  );
}
