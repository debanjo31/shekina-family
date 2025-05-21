import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import type { Database } from "@/lib/database.types"

export async function getSermons(limit = 3) {
  const supabase = createServerComponentClient<Database>({ cookies })

  try {
    const { data } = await supabase
      .from("sermons")
      .select("id, title, description, preacher, date, audio_url, thumbnail_url")
      .order("date", { ascending: false })
      .limit(limit)

    return data || []
  } catch (error) {
    console.error("Error fetching sermons:", error)
    return []
  }
}

export async function getEvents(limit = 3) {
  const supabase = createServerComponentClient<Database>({ cookies })

  try {
    const { data } = await supabase
      .from("events")
      .select("id, title, description, start_date, end_date, location, image_url")
      .gte("start_date", new Date().toISOString())
      .order("start_date", { ascending: true })
      .limit(limit)

    return data || []
  } catch (error) {
    console.error("Error fetching events:", error)
    return []
  }
}

export async function getAnnouncements(limit = 3) {
  const supabase = createServerComponentClient<Database>({ cookies })

  try {
    const { data } = await supabase
      .from("announcements")
      .select("id, title, content, created_at")
      .order("created_at", { ascending: false })
      .limit(limit)

    return data || []
  } catch (error) {
    console.error("Error fetching announcements:", error)
    return []
  }
}
