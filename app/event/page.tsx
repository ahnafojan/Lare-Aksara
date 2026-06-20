import type { Metadata } from "next";
import EventSection from "@/components/EventSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { siteConfig } from "@/lib/site";
import { getEvents } from "@/sanity/lib/fetchers";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Event Literasi & Kesenian Anak",
  description:
    "Lihat agenda literasi, menggambar, musik, dan kegiatan kreatif anak dari Lare Aksara di Banjarnegara.",
  alternates: {
    canonical: "/event",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/event",
    title: "Event Literasi & Kesenian Anak",
    description:
      "Lihat agenda literasi, menggambar, musik, dan kegiatan kreatif anak dari Lare Aksara di Banjarnegara.",
    images: [
      {
        url: "/images/hero.jpg",
        alt: "Kegiatan Lare Aksara bersama anak-anak",
      },
    ],
  },
};

export default async function EventPage() {
  const events = await getEvents();

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      <main className="pt-20">
        <EventSection events={events} headingAs="h1" />
      </main>
      <Footer />
    </div>
  );
}
