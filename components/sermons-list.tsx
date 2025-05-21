"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Play, Search } from "lucide-react"

type Sermon = {
  id: string
  title: string
  description: string | null
  preacher: string | null
  date: string
  audio_url: string | null
  thumbnail_url: string | null
}

interface SermonsListProps {
  initialSermons: Sermon[]
}

export function SermonsList({ initialSermons }: SermonsListProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [sermons] = useState<Sermon[]>(initialSermons)

  const filteredSermons = sermons.filter(
    (sermon) =>
      sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (sermon.preacher && sermon.preacher.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (sermon.description && sermon.description.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  return (
    <section className="py-16">
      <div className="container">
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search sermons..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {filteredSermons.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No sermons found matching your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSermons.map((sermon) => (
              <Card key={sermon.id} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={sermon.thumbnail_url || "/placeholder.svg?height=200&width=300"}
                    alt={sermon.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button size="icon" variant="secondary" className="rounded-full">
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-1">{sermon.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    {sermon.preacher || "Unknown"} | {new Date(sermon.date).toLocaleDateString()}
                  </p>
                  <p className="line-clamp-2 text-sm">{sermon.description || "No description available."}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href={`/sermons/${sermon.id}`}>Listen Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
