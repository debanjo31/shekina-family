import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export function LiveService() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Live Service</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Can't make it in person? Join our live stream every Wednesday at 10:00 PM
        </p>
        <Button asChild size="lg" variant="secondary" className="gap-2">
          <a href="/live">
            <Play className="h-5 w-5" />
            Watch Live
          </a>
        </Button>
      </div>
    </section>
  )
}
