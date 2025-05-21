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
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              Latest Sermons
            </h2>
            <p className="text-muted-foreground mt-3 text-lg">
              Listen to our most recent messages
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="mt-4 md:mt-0 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Link href="/sermons">View All Sermons</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displaySermons.map((sermon) => (
            <Card
              key={sermon.id}
              className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-muted/40 hover:border-primary/40"
            >
              <div className="relative h-56">
                <Image
                  src={sermon.thumbnail_url || "/placeholder.svg"}
                  alt={sermon.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="rounded-full bg-primary/90 text-primary-foreground hover:scale-110 transition-transform duration-300"
                  >
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-1">{sermon.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  {sermon.preacher || "Unknown"} |{" "}
                  {new Date(sermon.date).toLocaleDateString()}
                </p>
                <p className="line-clamp-2 text-sm">
                  {sermon.description || "No description available."}
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href={`/sermons/${sermon.id}`}>Listen Now</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
