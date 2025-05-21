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
import { Play } from "lucide-react";

type Sermon = {
  id: string;
  title: string;
  description: string | null;
  preacher: string | null;
  date: string;
  audio_url: string | null;
  thumbnail_url: string | null;
};

interface FeaturedSermonsProps {
  initialSermons?: Sermon[];
}

export function FeaturedSermons({ initialSermons = [] }: FeaturedSermonsProps) {
  // Use the initial sermons from server-side props
  const [sermons] = useState<Sermon[]>(initialSermons);

  // Placeholder sermons when database is empty
  const placeholderSermons: Sermon[] = [
    {
      id: "1",
      title: "The Power of Faith",
      description: "Discover how faith can move mountains in your life",
      preacher: "Pastor B",
      date: "2025-05-14",
      audio_url: "#",
      thumbnail_url: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "2",
      title: "Walking in Divine Favor",
      description: "Understanding God's favor in your daily walk",
      preacher: "Pastor B",
      date: "2024-05-07",
      audio_url: "#",
      thumbnail_url: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "3",
      title: "The Grace of God",
      description: "Experiencing God's unmerited favor in your life",
      preacher: "Pastor B",
      date: "2023-04-30",
      audio_url: "#",
      thumbnail_url: "/placeholder.svg?height=200&width=300",
    },
  ];

  const displaySermons = sermons.length > 0 ? sermons : placeholderSermons;

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20 relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div>
            <div className="inline-block mb-3">
              <span className="text-xs uppercase tracking-wider text-primary font-semibold border-l-2 border-accent pl-2">Our Teachings</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Latest Sermons
            </h2>
            <div className="w-20 h-0.5 bg-accent mt-4"></div>
            <p className="text-muted-foreground mt-4 text-lg font-body">
              Listen to our most recent messages
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="mt-6 md:mt-0 hover:bg-primary/10 border border-primary/30 hover:border-primary px-6 py-2 transition-all duration-300 rounded-full"
          >
            <Link href="/sermons">View All Sermons</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displaySermons.map((sermon, index) => (
            <Card
              key={sermon.id}
              className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-muted/20 hover:border-primary/30 rounded-xl animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-60">
                <Image
                  src={sermon.thumbnail_url || "/placeholder.svg"}
                  alt={sermon.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm group-hover:backdrop-blur-none">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="rounded-full bg-accent text-accent-foreground hover:scale-110 transition-transform duration-300 shadow-lg w-14 h-14"
                  >
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-xs text-white/80 bg-black/40 w-fit px-2 py-1 rounded-md backdrop-blur-sm">
                    {new Date(sermon.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </p>
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="line-clamp-1 font-heading text-xl font-semibold">{sermon.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-primary font-medium mb-3 flex items-center">
                  <span className="inline-block w-1 h-1 rounded-full bg-accent mr-2"></span>
                  {sermon.preacher || "Unknown"}
                </p>
                <p className="line-clamp-2 text-sm text-muted-foreground">
                  {sermon.description || "No description available."}
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" size="sm" className="w-full hover:bg-accent/10 hover:border-accent/30 group">
                  <Link href={`/sermons/${sermon.id}`} className="flex items-center justify-center gap-1">
                    Listen Now
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
              <Link href="/sermons">Browse All Sermons</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
