"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const slides = [
  {
    image: "/images/hero1.jpg",
    title: "Welcome to Shekina Family",
    subtitle: "A place of worship, fellowship and spiritual growth",
    cta: "Join Us",
    ctaLink: "/about",
  },
  {
    image: "/images/hero2.jpg",
    title: "Wednesday Service",
    subtitle: "Join us every Wednesday at 10:00 PM",
    cta: "Watch Live",
    ctaLink: "/live",
  },
  {
    image: "/images/hero2.jpg",
    title: "Latest Sermons",
    subtitle: "Listen to our latest messages",
    cta: "Listen Now",
    ctaLink: "/sermons",
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1));
  const next = () =>
    setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[600px] md:h-[700px] overflow-hidden bg-gradient-to-b from-background/5 to-background/20">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-all duration-700 transform",
            index === current
              ? "opacity-100 translate-x-0"
              : index < current
              ? "opacity-0 -translate-x-full"
              : "opacity-0 translate-x-full"
          )}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            priority
            className="object-cover transition-transform duration-10000 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-up">
              {slide.title}
            </h1>
            <p className="text-lg md:text-2xl mb-8 max-w-2xl animate-fade-up delay-200 opacity-90">
              {slide.subtitle}
            </p>
            <Button
              asChild
              size="lg"
              className="animate-fade-up delay-400 bg-primary/90 hover:bg-primary shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href={slide.ctaLink}>{slide.cta}</a>
            </Button>
          </div>
        </div>
      ))}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-black/20"
        onClick={prev}
      >
        <ChevronLeft className="h-8 w-8" />
        <span className="sr-only">Previous slide</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-black/20"
        onClick={next}
      >
        <ChevronRight className="h-8 w-8" />
        <span className="sr-only">Next slide</span>
      </Button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-colors",
              index === current ? "bg-white" : "bg-white/50"
            )}
            onClick={() => setCurrent(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
