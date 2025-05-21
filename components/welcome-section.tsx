import { Button } from "@/components/ui/button";
import Image from "next/image";

export function WelcomeSection() {
  return (
    <section className="py-24 bg-muted/10 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('/images/texture-light.png')]"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-xs uppercase tracking-wider text-primary font-semibold border-l-2 border-accent pl-2">About Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 leading-tight">
              Welcome to <span className="highlight-text">Shekina Family</span>
            </h2>
            <div className="w-20 h-1 bg-accent"></div>
            <p className="text-lg font-body leading-relaxed text-muted-foreground">
              We are a vibrant, Bible-believing fellowship dedicated to
              transforming lives through the power of God's Word. Our mission is
              to raise disciples who live the kingdom life.
            </p>
            <p className="font-body text-muted-foreground">
              Whether you're seeking spiritual growth, community, or a place to
              worship, we invite you to join us. Experience the love,
              acceptance, and power of God in our services.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-lg hover-lift transition-all">
                <a href="/about">Learn More</a>
              </Button>
              <Button variant="outline" asChild size="lg" className="border-primary hover:bg-primary/5 transition-all">
                <a href="/contact">Visit Us</a>
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent z-10"></div>
            <Image
              src="/placeholder.svg?height=500&width=700"
              alt="Church congregation"
              fill
              className="object-cover hover:scale-105 transition-transform duration-5000"
            />
            <div className="absolute -bottom-1 -right-1 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
