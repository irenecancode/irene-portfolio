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
    <header className="relative w-full px-8 pt-6 pb-[92px] sm:px-12 sm:py-8">
      <Link
        href="/"
        aria-label="Irene Cheung, home"
        className="absolute top-6 left-6 transition-opacity duration-200 hover:opacity-80 focus-visible:opacity-80 sm:top-1/2 sm:left-10 sm:-translate-y-1/2"
      >
        <Image
          src="/media/fox-logo.webp"
          alt=""
          width={52}
          height={42}
          priority
          className="h-auto w-10 sm:w-[52px]"
        />
      </Link>

      <div className="absolute top-[68px] left-1/2 -translate-x-1/2 text-center sm:top-1/2 sm:left-1/2 sm:-translate-y-1/2">
        <TitleTag className="font-display text-xl leading-tight font-black text-ink sm:text-[26px]">
          Irene Cheung
        </TitleTag>
        <p className="-mt-0.5 text-sm leading-tight text-muted sm:text-[15px]">Product Designer</p>
      </div>

      <nav className="absolute top-6 right-6 flex items-center gap-6 font-nav text-sm sm:top-1/2 sm:right-10 sm:-translate-y-1/2 sm:gap-7 sm:text-[15px]">
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
