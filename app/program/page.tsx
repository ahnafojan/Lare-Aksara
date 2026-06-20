import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProgramSection from "@/components/ProgramSection";
import { siteConfig } from "@/lib/site";
import { getPrograms } from "@/sanity/lib/fetchers";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Program Literasi & Kesenian Anak",
  description:
    "Jelajahi program literasi, musik, dan seni rupa untuk anak-anak dari Lare Aksara di Banjarnegara.",
  alternates: {
    canonical: "/program",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/program",
    title: "Program Literasi & Kesenian Anak",
    description:
      "Jelajahi program literasi, musik, dan seni rupa untuk anak-anak dari Lare Aksara di Banjarnegara.",
    images: [
      {
        url: "/images/lare.JPG",
        alt: "Kegiatan program Lare Aksara",
      },
    ],
  },
};

export default async function ProgramPage() {
  const programs = await getPrograms();

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      <main className="pt-20">
        <ProgramSection programs={programs} headingAs="h1" />
      </main>
      <Footer />
    </div>
  );
}
