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
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold">Latest Sermons</h2>
            <p className="text-muted-foreground mt-2">
              Listen to our most recent messages
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link href="/sermons">View All Sermons</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displaySermons.map((sermon) => (
            <Card key={sermon.id} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={sermon.thumbnail_url || "/placeholder.svg"}
                  alt={sermon.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="rounded-full"
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
