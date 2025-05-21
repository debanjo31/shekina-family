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
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/sermons" className="hover:underline">
                  Sermons
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:underline">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/give" className="hover:underline">
                  Give
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Service Times</h3>
            <ul className="space-y-2 text-sm">
              <li>Fellowship Service: Wednesday 10:00 PM - 3:00 AM</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Contact Us</h3>
            <address className="not-italic text-sm space-y-2">
              <p>1 Church Street</p>
              <p>Bariga, Lagos</p>
              <p>Phone: (=234) 456-7890</p>
              <p>Email: info@shekinafamily.org</p>
            </address>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Shekina Family. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
