/**
 * The email icon: an airmail envelope that opens on hover (her
 * letter_default / letter_hover art, 2026-10-15). Both frames share one
 * crop, so the closed envelope sits at the bottom of the same box and the
 * flap + "aye yo!" simply appear above it.
 *
 * Must sit inside an element with the `group/mail` class (the mailto
 * link); that link's hover and focus drive the swap. `className` sets the
 * width.
 */
export function Letter({ className = "w-12" }: { className?: string }) {
  return (
    <span
      className={`relative block ${className} transition-transform duration-200 group-hover/mail:-rotate-3 group-hover/mail:scale-110 group-focus-visible/mail:-rotate-3 group-focus-visible/mail:scale-110`}
    >
      <picture>
        <source srcSet="/media/letter-default.webp" type="image/webp" />
        <img
          src="/media/letter-default.png"
          alt=""
          width={480}
          height={473}
          className="block h-auto w-full transition-opacity duration-150 group-hover/mail:opacity-0 group-focus-visible/mail:opacity-0"
        />
      </picture>
      <picture>
        <source srcSet="/media/letter-open.webp" type="image/webp" />
        <img
          src="/media/letter-open.png"
          alt=""
          width={480}
          height={473}
          loading="lazy"
          className="absolute inset-0 block h-full w-full opacity-0 transition-opacity duration-150 group-hover/mail:opacity-100 group-focus-visible/mail:opacity-100"
        />
      </picture>
    </span>
  );
}
