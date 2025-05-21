import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Share2 } from "lucide-react"

export default async function EventPage({ params }: { params: { id: string } }) {
  const supabase = createServerComponentClient({ cookies })

  const { data: event } = await supabase.from("events").select("*").eq("id", params.id).single()

  if (!event) {
    notFound()
  }

  // Format date and time
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    })
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="relative h-[300px] md:h-[400px]">
        <Image
          src={event.image_url || "/placeholder.svg?height=400&width=1200"}
          alt={event.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{event.title}</h1>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(event.start_date)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{formatTime(event.start_date)}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{event.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold">Event Details</h2>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-sm text-muted-foreground">Date & Time</h3>
                <p className="font-medium">
                  {formatDate(event.start_date)} at {formatTime(event.start_date)}
                </p>
                {event.end_date && (
                  <p className="text-sm text-muted-foreground">
                    To: {formatDate(event.end_date)} at {formatTime(event.end_date)}
                  </p>
                )}
              </div>
              <div>
                <h3 className="font-semibold text-sm text-muted-foreground">Location</h3>
                <p className="font-medium">{event.location}</p>
              </div>
            </div>
          </div>

          <div className="prose max-w-none">
            <h3 className="text-xl font-bold mb-4">About This Event</h3>
            <p className="whitespace-pre-line">{event.description}</p>
          </div>

          <div className="mt-8 flex justify-center">
            <Button size="lg">Register for This Event</Button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
