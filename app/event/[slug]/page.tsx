import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ShareEventButton from "@/components/ShareEventButton";
import { client } from "@/sanity/lib/client";
import { EVENT_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import type { EventDetail } from "@/types";

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

function EmptyActivityImage() {
  return (
    <div className="flex h-full min-h-32 items-center justify-center bg-[#E1F5EE]">
      <svg
        aria-hidden="true"
        viewBox="0 0 160 120"
        className="h-24 w-32"
        fill="none"
      >
        <rect x="34" y="70" width="92" height="18" rx="6" fill="#5DCAA5" stroke="#04342C" strokeWidth="1.5" />
        <rect x="28" y="88" width="104" height="18" rx="6" fill="#9FE1CB" stroke="#04342C" strokeWidth="1.5" />
        <path d="M44 30C57 20 70 21 82 34V82C70 72 57 71 44 80V30Z" fill="#E1F5EE" stroke="#04342C" strokeWidth="1.5" />
        <path d="M82 34C95 21 108 20 120 30V80C108 71 95 72 82 82V34Z" fill="#FFFFFF" stroke="#04342C" strokeWidth="1.5" />
        <path d="M82 34V82" stroke="#04342C" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { slug } = await params;
  const event = await client.fetch<EventDetail | null>(EVENT_BY_SLUG_QUERY, {
    slug,
  });

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

              <div className="grid grid-cols-2 gap-2.5 md:grid-cols-2 lg:grid-cols-3">
                {event.kegiatan && event.kegiatan.length > 0 ? (
                  event.kegiatan.map((kegiatan) => (
                    <article
                      key={kegiatan._key}
                      className="overflow-hidden rounded-lg border-[1.5px] border-[#04342C] bg-white shadow-[2px_2px_0_#04342C]"
                    >
                      <div className="relative aspect-video border-b-[1.5px] border-[#04342C]">
                        {kegiatan.gambar?.asset?.url ? (
                          <Image
                            src={kegiatan.gambar.asset.url}
                            alt={kegiatan.judulKegiatan}
                            fill
                            className="object-cover"
                            sizes="(min-width: 1024px) 24vw, (min-width: 768px) 50vw, 100vw"
                          />
                        ) : (
                          <EmptyActivityImage />
                        )}
                      </div>
                      <h3 className="font-heading px-2 pb-1 pt-2 text-base font-bold leading-snug text-[#04342C] sm:px-2.5 sm:text-lg">
                        {kegiatan.judulKegiatan}
                      </h3>
                      <p className="line-clamp-2 px-2 pb-2 text-xs leading-[1.5] text-[#5F5E5A] sm:px-2.5 sm:pb-2.5 sm:text-sm">
                        {kegiatan.deskripsiSingkat}
                      </p>
                      {kegiatan.linkKegiatan ? (
                        <a
                          href={kegiatan.linkKegiatan}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mx-2 mb-2 inline-flex min-h-11 items-center justify-center rounded-md border-[1.5px] border-[#04342C] bg-[#1D9E75] px-2 text-center text-xs font-black leading-tight text-white shadow-[2px_2px_0_#04342C] transition-transform hover:-translate-y-0.5 sm:mx-2.5 sm:mb-2.5 sm:px-3 sm:text-sm"
                        >
                          Dokumentasi -&gt;
                        </a>
                      ) : null}
                    </article>
                  ))
                ) : (
                  <div className="rounded-lg border-[1.5px] border-[#04342C] bg-[#E1F5EE] p-4 text-[14px] text-[#5F5E5A] md:col-span-2 lg:col-span-3">
                    Rincian kegiatan untuk event ini akan segera tampil.
                  </div>
                )}
              </div>
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
