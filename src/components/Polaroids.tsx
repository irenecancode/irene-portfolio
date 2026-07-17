export function Polaroids() {
  return (
    <div className="relative mx-auto h-64 w-72 shrink-0 sm:h-72 sm:w-80">
      <div className="absolute top-4 right-0 w-56 -rotate-6 rounded-sm bg-white p-3 pb-8 shadow-lg sm:w-64">
        <picture>
          <source srcSet="/media/photo-beach.webp" type="image/webp" />
          <img src="/media/photo-beach.png" alt="A beach beneath a coastal cliff" className="h-auto w-full" />
        </picture>
      </div>
      <div className="absolute top-0 left-0 w-56 rotate-3 rounded-sm bg-white p-3 pb-8 shadow-lg sm:w-64">
        <picture>
          <source srcSet="/media/photo-dog.webp" type="image/webp" />
          <img
            src="/media/photo-dog.png"
            alt="Irene kneeling in a garden with her golden retriever"
            className="h-auto w-full"
          />
        </picture>
      </div>
    </div>
  );
}
