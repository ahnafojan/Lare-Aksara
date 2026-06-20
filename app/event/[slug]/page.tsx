import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import BackButton from "@/components/BackButton";
import EventActivityGallery from "@/components/EventActivityGallery";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ShareEventButton from "@/components/ShareEventButton";
import { absoluteUrl, createExcerpt, serializeJsonLd, siteConfig } from "@/lib/site";
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

export async function generateMetadata({
  params,
}: EventDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) {
    return {
      title: "Event tidak ditemukan",
      robots: { index: false, follow: false },
    };
  }

  const description = createExcerpt(event.deskripsi);
  const imageUrl = event.gambar?.asset?.url ?? absoluteUrl("/images/hero.jpg");
  const eventUrl = `/event/${encodeURIComponent(slug)}`;

  return {
    title: event.namaEvent,
    description,
    alternates: {
      canonical: eventUrl,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: eventUrl,
      title: event.namaEvent,
      description,
      images: [
        {
          url: imageUrl,
          alt: `Dokumentasi ${event.namaEvent}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: event.namaEvent,
      description,
      images: [imageUrl],
    },
  };
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

  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.namaEvent,
    description: event.deskripsi,
    startDate: event.tanggal,
    url: absoluteUrl(`/event/${slug}`),
    image: event.gambar?.asset?.url ? [event.gambar.asset.url] : undefined,
    location: {
      "@type": "Place",
      name: event.lokasi,
    },
    organizer: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(eventJsonLd) }}
      />
      <Navbar />
      <main className="pt-20">
        <section className="relative flex min-h-[430px] overflow-hidden bg-[#07110D]">
          {event.gambar?.asset?.url ? (
            <Image
              src={event.gambar.asset.url}
              alt={`Dokumentasi ${event.namaEvent}`}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          ) : null}
          <div className="absolute inset-0 bg-[#07110D]/80" />

          {!event.gambar?.asset?.url ? (
            <p className="absolute inset-0 flex items-center justify-center text-base font-semibold text-white/10">
              [ foto event ]
            </p>
          ) : null}

          <div className="relative z-10 mx-auto flex w-full max-w-[1520px] flex-col px-4 py-6 sm:px-6 md:px-8 lg:px-14 xl:px-16">
            <BackButton href="/event" label="Kembali ke Event" />

            <div className="mt-auto pb-8 md:pb-9">
              <h1 className="font-heading max-w-5xl text-4xl leading-tight text-white md:text-5xl">
                {event.namaEvent}
              </h1>
              <p className="mt-2 text-base font-semibold text-white/90">
                {event.lokasi}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid w-full max-w-[1520px] gap-7 px-4 py-7 sm:px-6 md:grid-cols-[minmax(0,1fr)_300px] md:gap-x-9 md:gap-y-10 md:px-8 lg:grid-cols-[minmax(0,1fr)_330px] lg:px-14 xl:px-16">
            <section className="md:col-start-1 md:row-start-1">
              <p className="mb-3 text-base font-black text-[#007A5E]">
                Tentang Event
              </p>
              <p className="border-l-[3px] border-[#007A5E] pl-4 text-[14px] leading-[1.7] text-[var(--color-text-secondary)]">
                {event.deskripsi}
              </p>
            </section>

            <section className="md:col-start-1 md:row-start-2">
              <p className="mb-3 border-b border-[#E5E5E5] pb-1.5 text-base font-black text-[#007A5E]">
                Kegiatan Dalam Event
              </p>

              <EventActivityGallery kegiatan={event.kegiatan} />
            </section>

            <aside className="md:col-start-2 md:row-start-2 md:justify-self-stretch md:pt-[42px]">
              <div className="flex w-full flex-col gap-3 md:sticky md:top-24">
                <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
                  <div className="w-full rounded-lg border border-[#DDDDDD] bg-transparent px-4 py-4 md:min-h-[92px] md:bg-white md:px-5 md:py-4">
                    <p className="flex items-center gap-2 text-sm font-black text-[#007A5E]">
                      <CalendarIcon />
                      <span>Tanggal</span>
                    </p>
                    <time
                      dateTime={event.tanggal}
                      className="font-display mt-2 block text-[16px] font-bold leading-tight text-[#04342C]"
                    >
                      {formatDate(event.tanggal)}
                    </time>
                  </div>

                  <div className="w-full rounded-lg border border-[#DDDDDD] bg-transparent px-4 py-4 md:min-h-[92px] md:bg-white md:px-5 md:py-4">
                    <p className="flex items-center gap-2 text-sm font-black text-[#007A5E]">
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
