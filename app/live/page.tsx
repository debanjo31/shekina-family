import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Facebook, Youtube, Radio } from "lucide-react";

export default function LivePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-4">Watch Live</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Join our services live on your preferred platform
          </p>
        </div>
      </div>

      {/* Streaming Platforms */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* YouTube */}
              <div className="bg-background p-8 rounded-lg shadow-sm text-center">
                <div className="mx-auto bg-red-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Youtube className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">YouTube</h3>
                <p className="text-muted-foreground mb-4">
                  Watch our services in HD quality with live chat
                </p>
                <Button asChild className="bg-red-600 hover:bg-red-700">
                  <a
                    href="https://youtube.com/@shekinafamily"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch on YouTube
                  </a>
                </Button>
              </div>

              {/* Mixlr */}
              <div className="bg-background p-8 rounded-lg shadow-sm text-center">
                <div className="mx-auto bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Radio className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Mixlr</h3>
                <p className="text-muted-foreground mb-4">
                  Listen to our audio stream for low-bandwidth connections
                </p>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href="https://mixlr.com/shekinafamily"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Listen on Mixlr
                  </a>
                </Button>
              </div>

              {/* Facebook */}
              <div className="bg-background p-8 rounded-lg shadow-sm text-center">
                <div className="mx-auto bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Facebook className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Facebook</h3>
                <p className="text-muted-foreground mb-4">
                  Join our community and watch live on Facebook
                </p>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href="https://facebook.com/shekinafamily"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch on Facebook
                  </a>
                </Button>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Service Times</h2>
              <p className="text-lg mb-2">
                Join us every Wednesday at 10:00 PM - 3:00 AM
              </p>
              <p className="text-muted-foreground">
                All our services are streamed live on these platforms. Choose
                the one that works best for you!
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
