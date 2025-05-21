import { Button } from "@/components/ui/button"
import { Play, Calendar, Clock } from "lucide-react"

export function LiveService() {
  return (
    <section className="py-24 bg-gradient-to-r from-primary/95 to-primary text-primary-foreground relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('/images/texture-light.png')] opacity-5"></div>
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-4">
            <span className="px-4 py-1 border border-accent rounded-full text-accent text-sm font-medium animate-pulse-slow bg-black/10 backdrop-blur-sm">Live Every Wednesday</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
            Join Our Live Service
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90 font-body leading-relaxed">
            Can't make it in person? Join our live stream and be part of our global community of worshippers.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <Calendar className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">Every Wednesday</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <Clock className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">10:00 PM</span>
            </div>
          </div>
          
          <div className="relative inline-block group">
            <div className="absolute -inset-1 rounded-full blur bg-gradient-to-r from-accent to-white/80 opacity-70 group-hover:opacity-100 transition-opacity"></div>
            <Button asChild size="lg" variant="secondary" className="gap-2 relative px-8 py-6 rounded-full hover-lift transition-all duration-300 font-medium">
              <a href="/live">
                <Play className="h-5 w-5" />
                Watch Live
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
