import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SermonsList } from "@/components/sermons-list"
import { getSermons } from "@/lib/server-data"

export default async function SermonsPage() {
  const sermons = await getSermons(100) // Get more sermons for the sermons page

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-4">Sermons</h1>
          <p className="text-xl max-w-2xl mx-auto">Listen to our latest messages and grow in your faith</p>
        </div>
      </div>
      <SermonsList initialSermons={sermons} />
      <Footer />
    </main>
  )
}
