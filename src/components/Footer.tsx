export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-6 pb-20 sm:px-10">
      <div className="border-t border-black/10 pt-14">
        <h2 className="font-display text-[32px] font-medium text-accent sm:text-[40px]">
          Irene Cheung
        </h2>
        <p className="mt-6 max-w-xl text-2xl text-ink">
          I enjoy building the tools other designers find boring. If your
          team has one, let&apos;s talk.
        </p>
        <a
          href="mailto:irenemycheung@gmail.com"
          className="mt-3 inline-block text-accent-deep underline transition-opacity duration-200 hover:opacity-75 focus-visible:opacity-75"
        >
          irenemycheung@gmail.com
        </a>

        <p className="mt-10 font-nav text-sm tracking-wide text-muted uppercase">
          Social
        </p>
        <ul className="mt-3 flex flex-col gap-2">
          <li>
            <a
              href="https://www.linkedin.com/in/irenemy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-ink underline-offset-4 transition-colors duration-200 hover:text-accent-deep hover:underline focus-visible:text-accent-deep focus-visible:underline"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/irenecancode"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-ink underline-offset-4 transition-colors duration-200 hover:text-accent-deep hover:underline focus-visible:text-accent-deep focus-visible:underline"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/dayday_tipsy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-ink underline-offset-4 transition-colors duration-200 hover:text-accent-deep hover:underline focus-visible:text-accent-deep focus-visible:underline"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
