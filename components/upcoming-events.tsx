"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";

type Event = {
  id: string;
  title: string;
  description: string;
  start_date: string;
  end_date: string | null;
  location: string;
  image_url: string;
};

interface UpcomingEventsProps {
  initialEvents?: Event[];
}

export function UpcomingEvents({ initialEvents = [] }: UpcomingEventsProps) {
  // Use the initial events from server-side props
  const [events] = useState<Event[]>(initialEvents);

  // Placeholder events when database is empty
  const placeholderEvents: Event[] = [
    {
      id: "1",
      title: "Shekinah Men Conference",
      description: "Join us for our annual Shekinah Men Conference",
      start_date: "2025-05-20T10:00:00Z",
      end_date: null,
      location: "Main Sanctuary",
      image_url: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "2",
      title: "Prayer Conference",
      description: "Annual prayer conference with guest ministers",
      start_date: new Date(
        new Date().setDate(new Date().getDate() + 14)
      ).toISOString(),
      end_date: new Date(
        new Date().setDate(new Date().getDate() + 16)
      ).toISOString(),
      location: "Main Sanctuary",
      image_url: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "3",
      title: "Youth Conference",
      description: "Special conference for the youth ministry",
      start_date: new Date(
        new Date().setDate(new Date().getDate() + 21)
      ).toISOString(),
      end_date: null,
      location: "Youth Center",
      image_url: "/placeholder.svg?height=200&width=300",
    },
  ];

  const displayEvents = events.length > 0 ? events : placeholderEvents;

  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  function formatTime(dateString: string) {
    return new Date(dateString).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold">Upcoming Events</h2>
            <p className="text-muted-foreground mt-2">
              Join us for these special gatherings
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link href="/events">View All Events</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayEvents.map((event) => (
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
                      <p className="text-sm text-muted-foreground">
                        to {formatDate(event.end_date)}
                      </p>
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
      </div>
    </section>
  );
}
