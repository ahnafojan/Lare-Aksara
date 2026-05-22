import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import EventActivityGallery from "@/components/EventActivityGallery";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ShareEventButton from "@/components/ShareEventButton";
import { getEventBySlug } from "@/sanity/lib/fetchers";

type EventDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamic = "force-dynamic";

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

function CalendarIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none">
      <path
        d="M7 3V6M17 3V6M4.5 9H19.5M6 5H18C19.1 5 20 5.9 20 7V18C20 19.1 19.1 20 18 20H6C4.9 20 4 19.1 4 18V7C4 5.9 4.9 5 6 5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none">
      <path
        d="M12 21C15.5 17.5 18 14.4 18 10.5C18 7.2 15.3 4.5 12 4.5C8.7 4.5 6 7.2 6 10.5C6 14.4 8.5 17.5 12 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M12 12.5C13.1 12.5 14 11.6 14 10.5C14 9.4 13.1 8.5 12 8.5C10.9 8.5 10 9.4 10 10.5C10 11.6 10.9 12.5 12 12.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      <main className="pt-20">
        <div className="border-b-[1.5px] border-[#04342C] bg-[#E1F5EE] px-4 py-3 sm:px-6 md:px-8 lg:px-16 xl:px-8">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-start">
            <Link
              href="/event"
              className="focus-soft inline-flex min-h-11 items-center gap-2 rounded-full border-[1.5px] border-[#04342C] bg-white px-4 text-base font-black text-[#04342C] shadow-[1px_1px_0_#9FE1CB] transition-transform hover:-translate-y-0.5"
            >
              <span aria-hidden="true">&larr;</span>
              <span>Kembali ke Event</span>
            </Link>
          </div>
        </div>

        <section className="relative flex min-h-[60vh] overflow-hidden bg-black">
          {event.gambar?.asset?.url ? (
            <Image
              src={event.gambar.asset.url}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          ) : null}
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/45 to-transparent" />

          <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-end px-4 pb-12 sm:px-6 md:px-8 md:pb-16 lg:px-16 xl:px-8">
            <h1 className="font-heading max-w-5xl text-4xl leading-tight text-white md:text-6xl">
              {event.namaEvent}
            </h1>
            <p className="mt-3 text-base font-semibold text-white/80">
              {event.lokasi}
            </p>
          </div>
        </section>

        <section className="grid md:grid-cols-[1fr_280px]">
          <div className="order-2 border-[#04342C] p-6 md:order-1 md:border-r-[1.5px]">
            <section>
              <p className="mb-2 text-base font-black text-[#1D9E75]">
                Tentang Event
              </p>
              <p className="border-l-[3px] border-[#1D9E75] pl-3 text-[14px] leading-[1.7] text-[var(--color-text-secondary)]">
                {event.deskripsi}
              </p>
            </section>

            <section className="mt-10">
              <p className="mb-3 border-b-[1.5px] border-[#E1F5EE] pb-1.5 text-base font-black text-[#1D9E75]">
                Kegiatan Dalam Event
              </p>

              <EventActivityGallery kegiatan={event.kegiatan} />
            </section>
          </div>

          <aside className="order-1 bg-[#E1F5EE] px-4 py-5 md:order-2 md:px-4">
            <div className="flex flex-col gap-3 md:sticky md:top-5">
              <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
                <div className="rounded-lg border-[1.5px] border-[#04342C] bg-white px-3.5 py-3 shadow-[2px_2px_0_#04342C]">
                  <p className="flex items-center gap-2 text-base font-black text-[#1D9E75]">
                    <CalendarIcon />
                    <span>Tanggal</span>
                  </p>
                  <p className="font-display mt-2 text-[16px] font-bold leading-tight text-[#04342C]">
                    {formatDate(event.tanggal)}
                  </p>
                </div>

                <div className="rounded-lg border-[1.5px] border-[#04342C] bg-white px-3.5 py-3 shadow-[2px_2px_0_#04342C]">
                  <p className="flex items-center gap-2 text-base font-black text-[#1D9E75]">
                    <PinIcon />
                    <span>Lokasi</span>
                  </p>
                  <p className="font-display mt-2 text-[16px] font-bold leading-tight text-[#04342C]">
                    {event.lokasi}
                  </p>
                </div>
              </div>

              <ShareEventButton title={event.namaEvent} />
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
}
