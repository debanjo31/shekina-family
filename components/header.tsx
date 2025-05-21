"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Sermons", href: "/sermons" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-accent animate-pulse-slow">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Shekina Family Logo"
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="hidden font-heading text-xl font-semibold tracking-tight sm:inline-block">
              Shekina Family
            </span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-8">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-all duration-300 hover:text-primary relative group",
                pathname === item.href
                  ? "text-primary font-semibold"
                  : "text-muted-foreground"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.label}
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full",
                pathname === item.href ? "w-full" : "w-0"
              )}></span>
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/give" className="hidden md:block">
            <Button 
              size="sm" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md hover-lift transition-transform"
            >
              Give Now
            </Button>
          </Link>
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button 
                variant="outline" 
                size="icon" 
                aria-label="Menu"
                className="border border-primary/20 hover:bg-primary/5"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l border-l-accent/30">
              <div className="flex flex-col gap-8 px-2 py-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full border-2 border-accent overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Shekina Family Logo"
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="font-heading text-lg font-semibold">Shekina Family</span>
                </div>
                
                <div className="space-y-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        "flex text-base font-medium px-3 py-2 rounded-md transition-all duration-200",
                        pathname === item.href
                          ? "text-primary font-semibold bg-primary/10"
                          : "text-muted-foreground hover:bg-muted hover:text-primary"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                
                <Link href="/give" onClick={() => setIsMenuOpen(false)}>
                  <Button 
                    size="sm" 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    Give Now
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
