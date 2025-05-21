import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { UpcomingEvents } from "@/components/upcoming-events";
import { FeaturedSermons } from "@/components/featured-sermons";
import { WelcomeSection } from "@/components/welcome-section";
import { LiveService } from "@/components/live-service";
import { Announcements } from "@/components/announcements";
import { getSermons, getEvents, getAnnouncements } from "@/lib/server-data";

export default async function Home() {
  // Fetch data server-side
  const sermons = await getSermons();
  const events = await getEvents();
  const announcements = await getAnnouncements();

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <WelcomeSection />
      <FeaturedSermons initialSermons={sermons} />
      <LiveService />
      <UpcomingEvents initialEvents={events} />

      {/* <Announcements initialAnnouncements={announcements} /> */}
      <Footer />
    </main>
  );
}
