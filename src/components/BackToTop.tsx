export function BackToTop() {
  return (
    <div className="py-10">
      <div className="mx-auto flex w-full max-w-6xl justify-end px-6 sm:px-10">
        <a
          href="#top"
          aria-label="Back to top"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-surface ring-1 ring-black/10 transition-all duration-200 hover:-translate-y-0.5 hover:ring-black/20 focus-visible:-translate-y-0.5"
        >
          <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
            <path d="M10 15V5m0 0l-5 5m5-5l5 5" stroke="#57534e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  );
}
