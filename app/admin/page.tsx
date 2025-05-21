import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export default async function AdminDashboard() {
  const supabase = createServerComponentClient({ cookies })

  // Fetch counts
  const { count: sermonsCount } = await supabase.from("sermons").select("*", { count: "exact", head: true })

  const { count: eventsCount } = await supabase.from("events").select("*", { count: "exact", head: true })

  const { count: announcementsCount } = await supabase.from("announcements").select("*", { count: "exact", head: true })

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">Sermons</CardTitle>
            <CardDescription>Total sermons uploaded</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{sermonsCount || 0}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">Events</CardTitle>
            <CardDescription>Upcoming and past events</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{eventsCount || 0}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">Announcements</CardTitle>
            <CardDescription>Active announcements</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{announcementsCount || 0}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Welcome to the Admin Dashboard</CardTitle>
          <CardDescription>Manage your church content from this central location</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Use the sidebar to navigate to different sections of the admin panel. You can manage sermons, events,
            announcements, and more.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
