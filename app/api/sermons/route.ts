import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import type { Database } from "@/lib/database.types"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const limit = searchParams.get("limit") ? Number.parseInt(searchParams.get("limit") as string) : 10

  const supabase = createRouteHandlerClient<Database>({ cookies })

  try {
    const { data, error } = await supabase
      .from("sermons")
      .select("id, title, description, preacher, date, audio_url, thumbnail_url")
      .order("date", { ascending: false })
      .limit(limit)

    if (error) throw error

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching sermons:", error)
    return NextResponse.json([], { status: 500 })
  }
}
