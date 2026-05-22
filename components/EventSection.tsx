import Link from "next/link";
import type { EventSummary } from "@/types";

type EventSectionProps = {
  events: EventSummary[];
};

const dateFormatter = new Intl.DateTimeFormat("id-ID", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

function formatDate(date: string) {
  const value = new Date(date);

  if (Number.isNaN(value.getTime())) {
    return "Tanggal menyusul";
  }

  return dateFormatter.format(value);
}

export default function EventSection({ events }: EventSectionProps) {
  return (
    <section id="event" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border-[1.5px] border-[#1D9E75] bg-[#E1F5EE] px-4 py-2 text-sm font-black text-[#0F6E56]">
              Event
            </span>
            <h2 className="font-heading mt-5 text-3xl leading-tight text-[#04342C] sm:text-5xl">
              Agenda temu, baca, gambar, dan bernyanyi.
            </h2>
          </div>
          <div className="hidden rounded-lg border-[1.5px] border-[#04342C] bg-[#9FE1CB] px-5 py-4 font-heading text-lg text-[#04342C] shadow-[2px_2px_0_#04342C] md:block">
            Semua kegiatan
          </div>
        </div>

        <div className="mt-10 grid gap-5">
          {events.length > 0 ? (
            events.map((event) => {
              const href = event.slug?.current
                ? `/event/${event.slug.current}`
                : "/#event";

              return (
                <Link
                  key={event._id}
                  href={href}
                  className="focus-soft soft-card group grid gap-5 bg-white p-5 transition-transform hover:-translate-y-0.5 md:grid-cols-[220px_1fr_auto] md:items-center"
                >
                  <div className="rounded-lg border-[1.5px] border-[#1D9E75] bg-[#E1F5EE] px-4 py-3 text-[#04342C]">
                    <p className="font-heading text-xl">
                      {formatDate(event.tanggal)}
                    </p>
                    <p className="mt-1 text-sm font-bold text-[#5F5E5A]">
                      {event.lokasi}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl text-[#04342C]">
                      {event.namaEvent}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-7 text-[#5F5E5A]">
                      {event.deskripsi}
                    </p>
                  </div>
                  <span className="font-black text-[#1D9E75] group-hover:text-[#04342C]">
                    Lihat detail →
                  </span>
                </Link>
              );
            })
          ) : (
            <div className="soft-card bg-[#E1F5EE] p-6 text-[#5F5E5A]">
              Event Lare Aksara akan segera tampil di sini.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
