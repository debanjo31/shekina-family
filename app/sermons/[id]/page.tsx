import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SermonPlayer } from "@/components/sermon-player"

export default async function SermonPage({ params }: { params: { id: string } }) {
  const supabase = createServerComponentClient({ cookies })

  const { data: sermon } = await supabase.from("sermons").select("*").eq("id", params.id).single()

  if (!sermon) {
    notFound()
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <div className="relative h-[300px] md:h-[400px]">
          <Image
            src={sermon.thumbnail_url || "/placeholder.svg?height=400&width=1200"}
            alt={sermon.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container text-center text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{sermon.title}</h1>
              <p className="text-xl">
                {sermon.preacher} | {new Date(sermon.date).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        <div className="container py-12">
          <div className="max-w-3xl mx-auto">
            {sermon.scripture_reference && (
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Scripture Reference</h2>
                <p>{sermon.scripture_reference}</p>
              </div>
            )}

            {sermon.description && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Description</h2>
                <p>{sermon.description}</p>
              </div>
            )}

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Listen to Sermon</h2>
              {sermon.audio_url ? (
                <SermonPlayer audioUrl={sermon.audio_url} title={sermon.title} />
              ) : (
                <p className="text-muted-foreground">Audio not available for this sermon.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
