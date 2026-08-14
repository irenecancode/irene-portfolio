import Image from "next/image";
import Link from "next/link";

type HeaderProps = {
  active: "home" | "creative" | "about" | "none";
  /** Only the home page's copy of this title should be the page's single <h1>. */
  titleAs?: "h1" | "p";
};

export function Header({ active, titleAs = "p" }: HeaderProps) {
  const TitleTag = titleAs;

  return (
    <header className="relative w-full px-[26px] pt-[26px] pb-[86px] sm:px-[38px] sm:py-[38px]">
      <Link
        href="/"
        aria-label="Irene Cheung, home"
        className="absolute top-[19px] left-[19px] transition-opacity duration-200 hover:opacity-80 focus-visible:opacity-80 lg:top-1/2 lg:left-8 lg:-translate-y-1/2"
      >
        <Image
          src="/media/fox-logo.webp"
          alt=""
          width={52}
          height={42}
          priority
          className="h-auto w-8 sm:w-[42px]"
        />
      </Link>

      <Link
        href="/"
        className="absolute top-[54px] left-1/2 -translate-x-1/2 text-center transition-opacity duration-200 hover:opacity-80 focus-visible:opacity-80 lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2"
      >
        <TitleTag className="font-display text-[18px] leading-tight font-black text-ink sm:text-[26px]">
          Irene Cheung
        </TitleTag>
        <p className="-mt-0.5 text-[13px] leading-tight text-muted sm:text-[18px]">Product Designer</p>
      </Link>

      <nav className="absolute top-[19px] right-[19px] flex items-center gap-[19px] font-nav text-[14px] sm:gap-[22px] sm:text-[14px] lg:top-1/2 lg:right-8 lg:-translate-y-1/2">
        <Link
          href="/"
          className={`transition-colors duration-200 ${active === "home" ? "text-nav-active" : "text-ink hover:text-nav-active focus-visible:text-nav-active"}`}
        >
          Home
        </Link>
        <Link
          href="/creative"
          className={`transition-colors duration-200 ${active === "creative" ? "text-nav-active" : "text-ink hover:text-nav-active focus-visible:text-nav-active"}`}
        >
          Creative
        </Link>
        <Link
          href="/about"
          className={`transition-colors duration-200 ${active === "about" ? "text-nav-active" : "text-ink hover:text-nav-active focus-visible:text-nav-active"}`}
        >
          About
        </Link>
      </nav>
    </header>
  );
}
