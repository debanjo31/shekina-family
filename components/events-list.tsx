"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, MapPin, Search } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Event = {
  id: string
  title: string
  description: string
  start_date: string
  end_date: string | null
  location: string
  image_url: string
}

interface EventsListProps {
  initialEvents: Event[]
}

export function EventsList({ initialEvents }: EventsListProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [events] = useState<Event[]>(initialEvents)

  // Get current date for filtering
  const currentDate = new Date()

  // Filter events based on search term
  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Separate upcoming and past events
  const upcomingEvents = filteredEvents.filter((event) => new Date(event.start_date) >= currentDate)

  const pastEvents = filteredEvents.filter((event) => new Date(event.start_date) < currentDate)

  // Placeholder events when database is empty
  const placeholderEvents: Event[] = [
    {
      id: "1",
      title: "Sunday Worship Service",
      description: "Join us for our weekly Sunday worship service",
      start_date: new Date(new Date().setDate(new Date().getDate() + 7)).toISOString(),
      end_date: null,
      location: "Main Sanctuary",
      image_url: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "2",
      title: "Prayer Conference",
      description: "Annual prayer conference with guest ministers",
      start_date: new Date(new Date().setDate(new Date().getDate() + 14)).toISOString(),
      end_date: new Date(new Date().setDate(new Date().getDate() + 16)).toISOString(),
      location: "Main Sanctuary",
      image_url: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "3",
      title: "Youth Conference",
      description: "Special conference for the youth ministry",
      start_date: new Date(new Date().setDate(new Date().getDate() + 21)).toISOString(),
      end_date: null,
      location: "Youth Center",
      image_url: "/placeholder.svg?height=200&width=300",
    },
  ]

  const displayUpcomingEvents = upcomingEvents.length > 0 ? upcomingEvents : placeholderEvents
  const displayPastEvents = pastEvents.length > 0 ? pastEvents : []

  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  function formatTime(dateString: string) {
    return new Date(dateString).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    })
  }

  return (
    <section className="py-16">
      <div className="container">
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming">
            {displayUpcomingEvents.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No upcoming events found matching your search.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayUpcomingEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={event.image_url || "/placeholder.svg"}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="line-clamp-1">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-start gap-2">
                        <Calendar className="h-4 w-4 mt-0.5 text-muted-foreground" />
                        <div>
                          <p className="text-sm">{formatDate(event.start_date)}</p>
                          {event.end_date && (
                            <p className="text-sm text-muted-foreground">to {formatDate(event.end_date)}</p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <p className="text-sm">{formatTime(event.start_date)}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <p className="text-sm">{event.location}</p>
                      </div>
                      <p className="line-clamp-2 text-sm pt-2">{event.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" size="sm" className="w-full">
                        <Link href={`/events/${event.id}`}>Learn More</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="past">
            {displayPastEvents.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No past events found matching your search.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayPastEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden opacity-80">
                    <div className="relative h-48">
                      <Image
                        src={event.image_url || "/placeholder.svg"}
                        alt={event.title}
                        fill
                        className="object-cover grayscale"
                      />
                      <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        Past Event
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="line-clamp-1">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-start gap-2">
                        <Calendar className="h-4 w-4 mt-0.5 text-muted-foreground" />
                        <div>
                          <p className="text-sm">{formatDate(event.start_date)}</p>
                          {event.end_date && (
                            <p className="text-sm text-muted-foreground">to {formatDate(event.end_date)}</p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <p className="text-sm">{event.location}</p>
                      </div>
                      <p className="line-clamp-2 text-sm pt-2">{event.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" size="sm" className="w-full">
                        <Link href={`/events/${event.id}`}>View Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
