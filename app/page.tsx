import DonasiSection from "@/components/DonasiSection";
import EventSection from "@/components/EventSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProgramSection from "@/components/ProgramSection";
import StatsBar from "@/components/StatsBar";
import TentangSection from "@/components/TentangSection";
import { client } from "@/sanity/lib/client";
import { EVENTS_QUERY, PROGRAMS_QUERY } from "@/sanity/lib/queries";
import type { EventSummary, Program } from "@/types";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [programs, events] = await Promise.all([
    client.fetch<Program[]>(PROGRAMS_QUERY),
    client.fetch<EventSummary[]>(EVENTS_QUERY),
  ]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <TentangSection />
        <ProgramSection programs={programs} />
        <EventSection events={events} />
        <DonasiSection />
      </main>
      <Footer />
    </div>
  );
}
