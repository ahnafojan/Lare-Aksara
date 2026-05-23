import Image from "next/image";
import Link from "next/link";
import type { EventSummary } from "@/types";

type EventSectionProps = {
  events: EventSummary[];
};

function EmptyEventImage() {
  return (
    <div className="flex h-full min-h-32 items-center justify-center bg-[#E1F5EE]">
      <svg
        aria-hidden="true"
        viewBox="0 0 160 120"
        className="h-24 w-32"
        fill="none"
      >
        <rect x="28" y="28" width="104" height="64" rx="8" fill="#9FE1CB" stroke="#04342C" strokeWidth="1.5" />
        <path d="M44 74L66 52L82 66L96 50L118 74" stroke="#04342C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="108" cy="42" r="7" fill="#FFFFFF" stroke="#04342C" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

export default function EventSection({ events }: EventSectionProps) {
  return (
    <section id="event" className="bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-16 xl:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <span className="inline-flex min-h-11 items-center rounded-full border-[1.5px] border-[#1a1a1a] bg-[#04342C] px-4 py-2 text-base font-black text-[#FAF9F6]">
              Event
            </span>
            <h2 className="font-heading mt-5 text-3xl leading-tight text-[#04342C] sm:text-4xl md:text-5xl">
              Agenda temu, baca, gambar, dan bernyanyi.
            </h2>
          </div>
          <div className="hidden rounded-lg border-[1.5px] border-[#04342C] bg-[#9FE1CB] px-5 py-4 font-heading text-lg text-[#04342C] shadow-[2px_2px_0_#04342C] lg:block">
            Semua kegiatan
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-6">
          {events.length > 0 ? (
            events.map((event) => {
              const href = event.slug?.current
                ? `/event/${event.slug.current}`
                : "/#event";

              return (
                <Link
                  key={event._id}
                  href={href}
                  className="focus-soft soft-card group flex min-h-11 flex-col overflow-hidden bg-white transition-transform hover:-translate-y-0.5"
                >
                  <div className="relative aspect-[16/10] border-b-[1.5px] border-[#04342C]">
                    {event.gambar?.asset?.url ? (
                      <Image
                        src={event.gambar.asset.url}
                        alt={event.namaEvent}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      />
                    ) : (
                      <EmptyEventImage />
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-4 lg:p-5">
                    <h3 className="font-heading text-xl leading-tight text-[#04342C] sm:text-2xl">
                      {event.namaEvent}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-base leading-7 text-[#5F5E5A]">
                      {event.deskripsi}
                    </p>
                    <span className="mt-3 inline-flex min-h-11 items-center font-black text-[#1D9E75] group-hover:text-[#04342C]">
                      Lihat detail -&gt;
                    </span>
                  </div>
                </Link>
              );
            })
          ) : (
            <div className="soft-card bg-[#E1F5EE] p-6 text-[#5F5E5A] sm:col-span-2 lg:col-span-3">
              Event Lare Aksara akan segera tampil di sini.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
