import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-primary/95 to-primary text-primary-foreground relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('/images/texture-light.png')] opacity-5"></div>
      <div className="absolute -top-12 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-primary/20"></div>
      
      {/* Top wavy border */}
      <div className="absolute -top-10 left-0 right-0 h-20 overflow-hidden">
        <svg viewBox="0 0 1440 100" className="absolute bottom-0 w-full h-auto fill-primary/95 opacity-95">
          <path d="M0,40 C240,100 480,0 720,40 C960,80 1200,0 1440,60 L1440,100 L0,100 Z"></path>
        </svg>
      </div>
      
      <div className="container py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
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
              <h3 className="text-xl font-heading font-bold">Shekina Family</h3>
            </div>
            <p className="text-white/80 font-body">
              Transforming lives through the word of God. Join us in our mission to spread love, hope, and faith.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover-lift transition-transform p-2 bg-white/10 hover:bg-white/20 rounded-full">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover-lift transition-transform p-2 bg-white/10 hover:bg-white/20 rounded-full">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover-lift transition-transform p-2 bg-white/10 hover:bg-white/20 rounded-full">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover-lift transition-transform p-2 bg-white/10 hover:bg-white/20 rounded-full">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-6 text-xl font-heading font-bold relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-accent"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="hover:text-accent transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="h-3.5 w-3.5 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/sermons" className="hover:text-accent transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="h-3.5 w-3.5 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  Sermons
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-accent transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="h-3.5 w-3.5 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  Events
                </Link>
              </li>
              <li>
                <Link href="/give" className="hover:text-accent transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="h-3.5 w-3.5 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  Give
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-6 text-xl font-heading font-bold relative inline-block">
              Service Times
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-accent"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Clock className="h-5 w-5 text-accent flex-shrink-0" />
                <div>
                  <p className="font-medium">Fellowship Service</p>
                  <p className="text-sm text-white/70">Wednesday 10:00 PM - 3:00 AM</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-6 text-xl font-heading font-bold relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-accent"></span>
            </h3>
            <address className="not-italic space-y-4">
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                <div>
                  <p>1 Church Street</p>
                  <p className="text-sm text-white/70">Bariga, Lagos</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <p>(+234) 456-7890</p>
              </div>
              <div className="flex gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <p>info@shekinafamily.org</p>
              </div>
            </address>
          </div>
        </div>
        <div className="mt-16 border-t border-primary-foreground/20 pt-8 text-center">
          <div className="grid md:grid-cols-2 gap-4 items-center mb-8">
            <div className="md:order-1 md:text-right">
              <Button asChild variant="outline" className="border-white/20 hover:bg-white/10 rounded-full px-6">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
            <div className="text-left">
              <p className="text-white/80">
                Subscribe to our newsletter for updates
              </p>
              <div className="mt-3 flex max-w-md">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/10 border border-white/20 rounded-l-full py-2 px-4 w-full focus:outline-none focus:ring-1 focus:ring-accent"
                />
                <button className="bg-accent hover:bg-accent/80 text-accent-foreground px-4 rounded-r-full transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Shekina Family. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
