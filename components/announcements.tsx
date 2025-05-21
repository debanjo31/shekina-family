"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Announcement = {
  id: string
  title: string
  content: string
  created_at: string
}

interface AnnouncementsProps {
  initialAnnouncements?: Announcement[]
}

export function Announcements({ initialAnnouncements = [] }: AnnouncementsProps) {
  // Use the initial announcements from server-side props
  const [announcements] = useState<Announcement[]>(initialAnnouncements)

  // Placeholder announcements when database is empty
  const placeholderAnnouncements: Announcement[] = [
    {
      id: "1",
      title: "Church Picnic Next Saturday",
      content: "Join us for our annual church picnic next Saturday at 12:00 PM in Central Park.",
      created_at: new Date().toISOString(),
    },
    {
      id: "2",
      title: "Volunteer Opportunities",
      content:
        "We need volunteers for our upcoming community outreach program. Please sign up at the information desk.",
      created_at: new Date().toISOString(),
    },
    {
      id: "3",
      title: "New Bible Study Series",
      content: "Starting next Wednesday, we will begin a new Bible study series on the book of Romans.",
      created_at: new Date().toISOString(),
    },
  ]

  const displayAnnouncements = announcements.length > 0 ? announcements : placeholderAnnouncements

  if (displayAnnouncements.length === 0) {
    return null
  }

  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">Announcements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayAnnouncements.map((announcement) => (
            <Card key={announcement.id}>
              <CardHeader>
                <CardTitle className="text-xl">{announcement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{announcement.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
