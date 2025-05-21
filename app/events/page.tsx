import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EventsList } from "@/components/events-list"
import { getEvents } from "@/lib/server-data"

export default async function EventsPage() {
  const events = await getEvents(100) // Get more events for the events page

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-4">Events</h1>
          <p className="text-xl max-w-2xl mx-auto">Join us for our upcoming events and gatherings</p>
        </div>
      </div>

      <EventsList initialEvents={events} />

      <Footer />
    </main>
  )
}
