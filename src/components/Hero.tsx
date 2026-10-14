import { HeroGrid } from "@/components/HeroGrid";

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 pt-4 pb-20 sm:px-10 sm:pt-8 sm:pb-28">
      <div className="hero-fade-up">
        <HeroGrid />
      </div>
    </section>
  );
}
