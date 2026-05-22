import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
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

function EmptyActivityImage() {
  return (
    <div className="flex h-full min-h-56 items-center justify-center bg-[#E1F5EE]">
      <svg
        aria-hidden="true"
        viewBox="0 0 160 120"
        className="h-32 w-40"
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
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <section className="border-b-[1.5px] border-[#04342C] bg-[#E1F5EE] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-7xl">
            <Link
              href="/#event"
              className="focus-soft inline-flex rounded-lg border-[1.5px] border-[#04342C] bg-white px-4 py-2 text-sm font-black text-[#04342C] shadow-[2px_2px_0_#9FE1CB] transition-transform hover:-translate-y-0.5"
            >
              ← Kembali ke event
            </Link>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
              <div>
                <span className="inline-flex rounded-full border-[1.5px] border-[#1D9E75] bg-white px-4 py-2 text-sm font-black text-[#0F6E56]">
                  Event Lare Aksara
                </span>
                <h1 className="font-heading mt-5 text-4xl leading-tight text-[#04342C] sm:text-6xl">
                  {event.namaEvent}
                </h1>
                <p className="mt-6 max-w-4xl text-base leading-8 text-[#5F5E5A] sm:text-lg">
                  {event.deskripsi}
                </p>
              </div>

              <aside className="soft-card bg-white p-6">
                <p className="text-sm font-black uppercase text-[#1D9E75]">
                  Tanggal
                </p>
                <p className="font-heading mt-2 text-2xl text-[#04342C]">
                  {formatDate(event.tanggal)}
                </p>
                <div className="my-5 h-px bg-[#04342C]" />
                <p className="text-sm font-black uppercase text-[#1D9E75]">
                  Lokasi
                </p>
                <p className="mt-2 font-bold leading-7 text-[#5F5E5A]">
                  {event.lokasi}
                </p>
              </aside>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-7xl">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border-[1.5px] border-[#1D9E75] bg-[#E1F5EE] px-4 py-2 text-sm font-black text-[#0F6E56]">
                Kegiatan dalam event
              </span>
              <h2 className="font-heading mt-5 text-3xl leading-tight text-[#04342C] sm:text-5xl">
                Potongan aktivitas yang dirawat bersama.
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {event.kegiatan && event.kegiatan.length > 0 ? (
                event.kegiatan.map((kegiatan) => (
                  <article key={kegiatan._key} className="soft-card overflow-hidden bg-white">
                    <div className="relative aspect-[4/3] border-b-[1.5px] border-[#04342C]">
                      {kegiatan.gambar?.asset?.url ? (
                        <Image
                          src={kegiatan.gambar.asset.url}
                          alt={kegiatan.judulKegiatan}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        />
                      ) : (
                        <EmptyActivityImage />
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="font-heading text-2xl leading-tight text-[#04342C]">
                        {kegiatan.judulKegiatan}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#5F5E5A]">
                        {kegiatan.deskripsiSingkat}
                      </p>
                    </div>
                  </article>
                ))
              ) : (
                <div className="soft-card bg-[#E1F5EE] p-6 text-[#5F5E5A] md:col-span-2 lg:col-span-3">
                  Rincian kegiatan untuk event ini akan segera tampil.
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
