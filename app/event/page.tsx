import EventSection from "@/components/EventSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getEvents } from "@/sanity/lib/fetchers";

export const dynamic = "force-dynamic";

export default async function EventPage() {
  const events = await getEvents();

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      <main className="pt-20">
        <EventSection events={events} />
      </main>
      <Footer />
    </div>
  );
}
