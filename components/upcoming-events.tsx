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
    <section className="py-24 bg-gradient-to-t from-muted/30 to-background relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div>
            <div className="inline-block mb-3">
              <span className="text-xs uppercase tracking-wider text-primary font-semibold border-l-2 border-accent pl-2">Calendar</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary/90 to-primary/60">
              Upcoming Events
            </h2>
            <div className="w-20 h-0.5 bg-accent mt-4"></div>
            <p className="text-muted-foreground mt-4 text-lg font-body">
              Join us for these special gatherings
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="mt-6 md:mt-0 hover:bg-primary/10 border border-primary/30 hover:border-primary px-6 py-2 transition-all duration-300 rounded-full"
          >
            <Link href="/events">View All Events</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayEvents.map((event, index) => (
            <Card
              key={event.id}
              className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-muted/20 hover:border-primary/30 rounded-xl animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48">
                <Image
                  src={event.image_url || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />
                <div className="absolute top-0 right-0 bg-accent/90 text-accent-foreground px-3 py-1.5 text-sm font-medium shadow-md">
                  {new Date(event.start_date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric'
                  })}
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="line-clamp-1 text-xl font-heading group-hover:text-primary transition-colors duration-300">
                  {event.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col space-y-3 p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 mt-0.5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">
                        {formatDate(event.start_date)}
                      </p>
                      {event.end_date && (
                        <p className="text-xs text-muted-foreground">
                          to {formatDate(event.end_date)}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <p className="text-sm">{formatTime(event.start_date)}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <p className="text-sm font-medium">{event.location}</p>
                  </div>
                </div>
                <p className="line-clamp-2 text-sm text-muted-foreground mt-2">
                  {event.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full hover:bg-accent/10 hover:border-accent/30 group"
                >
                  <Link href={`/events/${event.id}`} className="flex items-center justify-center gap-1">
                    Learn More
                    <svg className="w-4 h-4 mt-0.5 transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-16">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full blur-md bg-gradient-to-r from-primary/30 to-accent/30"></div>
            <Button asChild className="relative rounded-full bg-background hover:bg-background/90 text-foreground border border-primary/30 px-8 hover-lift">
              <Link href="/events">View All Upcoming Events</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
