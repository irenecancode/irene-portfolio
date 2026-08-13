/**
 * A torn-paper sheet that backs a section of any height without distorting.
 *
 * The old version stretched one <img> to the panel's box. That is fine when a
 * panel is close to the sheet's own proportions, but on mobile the Stack panel
 * is 3.4x taller than it is wide, and stack-paper.png is a collage: stretching
 * it smeared the pressed flowers along its bottom and right into streaks.
 *
 * So the sheet is drawn as three pieces instead. The torn top edge and the
 * bottom (which carries the collage) are rendered at their natural scale, and
 * only the sheet's flat interior fills the space between them. The interior is
 * a solid color sampled from the seam row, so the joins are invisible and the
 * paper reads the same at any panel height.
 */

type Props = {
  src: string;
  /** Natural pixel size of src, used to size each piece by aspect ratio. */
  naturalWidth: number;
  naturalHeight: number;
  /** Rows of src kept for the torn top edge. */
  topSlice: number;
  /** Rows of src kept for the bottom piece (the edge plus any collage). */
  bottomSlice: number;
  /** Sheet interior, sampled at the seam rows. */
  fill: string;
  /** Where the sheet's own left/right edges sit within src, as percentages. */
  fillInset?: { left: string; right: string };
  className?: string;
};

export function PaperBacking({
  src,
  naturalWidth,
  naturalHeight,
  topSlice,
  bottomSlice,
  fill,
  fillInset = { left: "0%", right: "0%" },
  className = "",
}: Props) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute flex flex-col ${className}`}
    >
      {/* Torn top edge, natural scale. */}
      <div
        className="relative w-full shrink-0 overflow-hidden"
        style={{ aspectRatio: `${naturalWidth} / ${topSlice}` }}
      >
        <img
          src={src}
          alt=""
          className="absolute top-0 left-0 w-full max-w-none"
          style={{ aspectRatio: `${naturalWidth} / ${naturalHeight}` }}
        />
      </div>

      {/* Sheet interior, then the bottom piece pinned to the panel's base.
          overflow-hidden clips the bottom piece's top when a panel is too
          short to hold both pieces; that region is flat interior, so the
          clip never shows. */}
      <div className="relative min-h-0 flex-1 overflow-hidden">
        <div
          className="absolute inset-y-0"
          style={{ left: fillInset.left, right: fillInset.right, background: fill }}
        />
        <div
          className="absolute inset-x-0 bottom-0 overflow-hidden"
          style={{ aspectRatio: `${naturalWidth} / ${bottomSlice}` }}
        >
          <img
            src={src}
            alt=""
            className="absolute bottom-0 left-0 w-full max-w-none"
            style={{ aspectRatio: `${naturalWidth} / ${naturalHeight}` }}
          />
        </div>
      </div>
    </div>
  );
}
