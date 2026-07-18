export function BackToTop() {
  return (
    <div className="py-10">
      <div className="mx-auto flex w-full max-w-6xl justify-end px-6 sm:px-10">
        <a
          href="#top"
          className="rounded-md bg-navy px-8 py-3 text-base font-normal text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-90 focus-visible:-translate-y-0.5 focus-visible:shadow-lg focus-visible:brightness-90"
        >
          Back to top
        </a>
      </div>
    </div>
  );
}
