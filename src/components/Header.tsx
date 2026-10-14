import Image from "next/image";
import Link from "next/link";

type HeaderProps = {
  active: "home" | "creative" | "about" | "none";
};

/** Hand-drawn circle marking the active nav link (Irene's call, 2026-10-13,
    from her stuut.ai-style reference). A closed loop with a slight
    overshoot near the start, like a pen that circled back past where it
    began — same sketchy-but-deliberate hand-drawn language used
    elsewhere on the site, just a path instead of a tiled background so
    it can stretch to fit each
    link's own width/height via preserveAspectRatio="none". Quiet by
    design (same-day follow-up): it's the only signal for "current page"
    now — the active link no longer recolors to the accent, which read as
    an error state, not a selection. Circle uses currentColor, so it
    inherits the link's plain text-ink black instead of carrying its own
    color. viewBox height padded to 56 (path points reach y=53) with
    overflow-visible as a second guard — either alone fixes the clipping
    that showed up at y=50, but both together mean a future path tweak
    can't silently reintroduce it.

    Two same-day follow-ups: (1) "too round, should be long" — width/height
    used to be stretched by different percentages (150%/260%), which
    canceled out the link's own wide-short shape into something close to
    a square/circle; now both axes scale by the same 170%, so the oval
    keeps the link's natural landscape proportions instead of fighting
    them. (2) "too ink-y, more crayon-y like my art style" — a crayon
    stroke isn't a clean mathematical line, so an SVG filter
    (feTurbulence + feDisplacementMap) jitters the path's edge into
    something closer to her pastel/crayon illustrations' grainy stroke,
    and the path is drawn twice (a fainter, slightly offset second pass
    underneath) to fake the layered, uneven pigment build-up of a real
    crayon stroke instead of one uniform-width ink line. */
function NavCircle() {
  return (
    <svg
      viewBox="0 0 100 56"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="pointer-events-none absolute top-1/2 left-1/2 h-[170%] w-[170%] -translate-x-1/2 -translate-y-1/2 overflow-visible"
    >
      <defs>
        <filter id="nav-circle-crayon" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.09 0.15" numOctaves="2" seed="4" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
      <path
        d="M58.5,3.6 C78.4,5.4 92.3,18.2 89.8,32.3 C87.8,45.8 69.6,53.2 49.8,52.1 C29.9,50.8 9.7,42.3 8.2,28.4 C6.4,14.2 24.1,2.3 46.3,3.1 C52.1,3.4 55.8,4.2 53.6,6.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
        filter="url(#nav-circle-crayon)"
      />
      <path
        d="M58,3 C78,5 92,18 90,32 C88,46 70,53 50,52 C30,51 10,42 8,28 C6,14 24,2 46,3 C52,3.3 56,4 54,7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.85"
        filter="url(#nav-circle-crayon)"
      />
    </svg>
  );
}

export function Header({ active }: HeaderProps) {
  return (
    <header className="relative w-full bg-surface px-[26px] pt-[26px] pb-[108px] sm:px-[38px] sm:pt-[38px] sm:pb-[58px]">
      <Link
        href="/"
        aria-label="Irene Cheung, home"
        className="absolute top-[54px] left-1/2 -translate-x-1/2 text-center transition-opacity duration-200 hover:opacity-80 focus-visible:opacity-80 lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2"
      >
        <p className="inline-block">
          <Image
            src="/media/fox-logo.webp"
            alt="Irene Cheung"
            width={52}
            height={42}
            priority
            className="h-auto w-10 sm:w-14"
          />
        </p>
      </Link>

      <nav className="absolute top-[19px] right-[19px] flex items-center gap-[19px] font-nav text-[14px] sm:gap-[22px] sm:text-[14px] lg:top-1/2 lg:right-8 lg:-translate-y-1/2">
        <Link
          href="/"
          className={`relative text-ink transition-colors duration-200 ${active === "home" ? "" : "hover:text-nav-active focus-visible:text-nav-active"}`}
        >
          {active === "home" && <NavCircle />}
          Home
        </Link>
        <Link
          href="/creative"
          className={`relative text-ink transition-colors duration-200 ${active === "creative" ? "" : "hover:text-nav-active focus-visible:text-nav-active"}`}
        >
          {active === "creative" && <NavCircle />}
          Creative
        </Link>
        <Link
          href="/about"
          className={`relative text-ink transition-colors duration-200 ${active === "about" ? "" : "hover:text-nav-active focus-visible:text-nav-active"}`}
        >
          {active === "about" && <NavCircle />}
          About
        </Link>
      </nav>
    </header>
  );
}
