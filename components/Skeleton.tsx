type SkeletonBlockProps = {
  className?: string;
};

export function SkeletonBlock({ className = "" }: SkeletonBlockProps) {
  return (
    <div
      className={`animate-pulse rounded-lg bg-[#9FE1CB]/55 ${className}`}
      aria-hidden="true"
    />
  );
}

export function LandingPageSkeleton() {
  return (
    <div className="min-h-screen overflow-hidden bg-white">
      <div className="h-20 border-b-[1.5px] border-[#04342C] bg-white" />
      <section className="bg-[#04342C] px-4 pb-16 pt-32 sm:px-6 md:px-8 lg:px-16 xl:px-8">
        <div className="mx-auto grid min-h-[70vh] max-w-7xl items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SkeletonBlock className="h-11 w-64 rounded-full" />
            <SkeletonBlock className="mt-6 h-16 w-full max-w-3xl sm:h-24" />
            <SkeletonBlock className="mt-5 h-28 w-full max-w-2xl" />
            <div className="mt-8 grid gap-3 sm:flex">
              <SkeletonBlock className="h-12 w-full sm:w-44" />
              <SkeletonBlock className="h-12 w-full sm:w-40" />
            </div>
          </div>
          <SkeletonBlock className="hidden aspect-[4/3] w-full max-w-md justify-self-end lg:block" />
        </div>
      </section>
      <section className="px-4 py-10 sm:px-6 md:px-8 lg:px-16 xl:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-3">
          <SkeletonBlock className="h-24" />
          <SkeletonBlock className="h-24" />
          <SkeletonBlock className="h-24" />
        </div>
      </section>
      <section className="px-4 py-14 sm:px-6 md:px-8 lg:px-16 xl:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 md:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonBlock key={index} className="aspect-[4/5]" />
          ))}
        </div>
      </section>
    </div>
  );
}

export function EventDetailSkeleton() {
  return (
    <div className="min-h-screen overflow-hidden bg-white">
      <div className="h-20 border-b-[1.5px] border-[#04342C] bg-white" />
      <div className="border-b-[1.5px] border-[#04342C] bg-[#E1F5EE] px-4 py-3 sm:px-6 md:px-8 lg:px-16 xl:px-8">
        <SkeletonBlock className="h-11 w-44 rounded-full bg-white/70" />
      </div>
      <section className="flex min-h-[60vh] items-end bg-black px-4 py-10 sm:px-6 md:px-8 lg:px-16 xl:px-8">
        <div className="w-full max-w-4xl">
          <SkeletonBlock className="h-16 w-full max-w-3xl bg-white/25 md:h-24" />
          <SkeletonBlock className="mt-4 h-5 w-56 bg-white/25" />
        </div>
      </section>
      <section className="grid md:grid-cols-[1fr_280px]">
        <div className="order-2 p-6 md:order-1 md:border-r-[1.5px] md:border-[#04342C]">
          <SkeletonBlock className="h-5 w-40" />
          <SkeletonBlock className="mt-4 h-28 w-full" />
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <SkeletonBlock key={index} className="aspect-[4/3]" />
            ))}
          </div>
        </div>
        <aside className="order-1 bg-[#E1F5EE] p-4 md:order-2">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
            <SkeletonBlock className="h-24 bg-white/70" />
            <SkeletonBlock className="h-24 bg-white/70" />
          </div>
          <SkeletonBlock className="mt-3 h-11 bg-[#1D9E75]/70" />
        </aside>
      </section>
    </div>
  );
}
