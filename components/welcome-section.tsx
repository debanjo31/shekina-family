import { Button } from "@/components/ui/button";
import Image from "next/image";

export function WelcomeSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Welcome to Shekina Family
            </h2>
            <p className="text-lg mb-6">
              We are a vibrant, Bible-believing fellowship dedicated to
              transforming lives through the power of God's Word. Our mission is
              to raise disciples who live the kingdom life.
            </p>
            <p className="mb-6">
              Whether you're seeking spiritual growth, community, or a place to
              worship, we invite you to join us. Experience the love,
              acceptance, and power of God in our services.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href="/about">Learn More</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/contact">Visit Us</a>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Church congregation"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
