import DonasiSection from "@/components/DonasiSection";
import EventSection from "@/components/EventSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProgramSection from "@/components/ProgramSection";
import ScrollReveal from "@/components/ScrollReveal";
import TentangSection from "@/components/TentangSection";
import { getEvents, getPrograms } from "@/sanity/lib/fetchers";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [programs, events] = await Promise.all([
    getPrograms(),
    getEvents(),
  ]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <ScrollReveal>
          <TentangSection />
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <ProgramSection programs={programs} />
        </ScrollReveal>
        <ScrollReveal delay={120}>
          <EventSection events={events} />
        </ScrollReveal>
        <ScrollReveal delay={160}>
          <DonasiSection />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
