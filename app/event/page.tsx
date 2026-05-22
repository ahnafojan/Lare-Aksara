import EventSection from "@/components/EventSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { client } from "@/sanity/lib/client";
import { EVENTS_QUERY } from "@/sanity/lib/queries";
import type { EventSummary } from "@/types";

export const dynamic = "force-dynamic";

export default async function EventPage() {
  const events = await client.fetch<EventSummary[]>(EVENTS_QUERY);

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
