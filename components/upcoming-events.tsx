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
    <section className="py-24 bg-gradient-to-t from-muted/50 to-background">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary/90 to-primary/60">
              Upcoming Events
            </h2>
            <p className="text-muted-foreground mt-3 text-lg">
              Join us for these special gatherings
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="mt-4 md:mt-0 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Link href="/events">View All Events</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayEvents.map((event) => (
            <Card
              key={event.id}
              className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-muted/40 hover:border-primary/40"
            >
              <div className="relative h-56">
                <Image
                  src={event.image_url || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-1 text-xl group-hover:text-primary transition-colors duration-300">
                  {event.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 mt-0.5 text-primary/80" />
                  <div>
                    <p className="text-sm font-medium">
                      {formatDate(event.start_date)}
                    </p>
                    {event.end_date && (
                      <p className="text-sm text-muted-foreground">
                        to {formatDate(event.end_date)}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary/70" />
                  <p className="text-sm">{formatTime(event.start_date)}</p>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary/70" />
                  <p className="text-sm">{event.location}</p>
                </div>
                <p className="line-clamp-2 text-sm text-muted-foreground">
                  {event.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
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
