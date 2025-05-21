import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-4">About Shekina Family</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Learn about our church, our mission, and our vision for the community
          </p>
        </div>
      </div>

      {/* Welcome Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Welcome to Our Church</h2>
              <p className="mb-4">
                Shekina Family is a vibrant, Bible-believing church dedicated to transforming lives through the power of
                God's Word. Our church is a place where people can come together to worship, learn, and grow in their
                faith.
              </p>
              <p className="mb-4">
                We believe that the church is not just a building, but a family of believers united by their love for
                God and for one another. Our doors are open to everyone, regardless of background or life situation.
              </p>
              <p>
                Whether you're seeking spiritual growth, community, or a place to worship, we invite you to join us.
                Experience the love, acceptance, and power of God in our services.
              </p>
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

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="mb-4">
                To transform lives through the power of God's Word, raising disciples who live the kingdom life and
                impact their communities.
              </p>
              <p>
                We are committed to sharing the love of Christ, providing spiritual guidance, and supporting our
                community through outreach and service.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="mb-4">
                To be a beacon of hope and transformation, raising generations of believers who are grounded in faith
                and empowered to influence society.
              </p>
              <p>
                We envision a church that extends beyond its walls, reaching the lost, healing the broken, and bringing
                the light of Christ to every corner of our community and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Beliefs */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What We Believe</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Our core beliefs are rooted in the Bible and guide everything we do
            </p>
            <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-3">The Bible</h3>
              <p>
                We believe the Bible is the inspired, infallible Word of God and our ultimate authority for faith and
                practice.
              </p>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-3">Salvation</h3>
              <p>
                We believe salvation comes through faith in Jesus Christ alone, by grace through faith, not by works.
              </p>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-3">The Trinity</h3>
              <p>We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit.</p>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-3">The Church</h3>
              <p>
                We believe the Church is the body of Christ, called to worship, fellowship, discipleship, ministry, and
                evangelism.
              </p>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-3">Holy Spirit</h3>
              <p>
                We believe in the present ministry of the Holy Spirit, empowering believers to live godly lives and
                serve effectively.
              </p>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-3">Christ's Return</h3>
              <p>We believe in the personal, visible return of Christ to establish His kingdom on earth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership</h2>
            <p className="text-lg max-w-2xl mx-auto">Meet the dedicated team that guides our church</p>
            <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src="/placeholder.svg?height=200&width=200" alt="Senior Pastor" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">Pastor John Doe</h3>
              <p className="text-primary">Senior Pastor</p>
              <p className="mt-2">Leading our church with wisdom and compassion since 2010.</p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Associate Pastor"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Pastor Jane Smith</h3>
              <p className="text-primary">Associate Pastor</p>
              <p className="mt-2">Overseeing our worship and youth ministries with passion and dedication.</p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src="/placeholder.svg?height=200&width=200" alt="Elder" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">Elder David Johnson</h3>
              <p className="text-primary">Church Elder</p>
              <p className="mt-2">Serving the church community and providing spiritual guidance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We'd love to welcome you to our church family. Join us for our next service!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="secondary" size="lg">
              <a href="/contact">Visit Us</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
            >
              <a href="/sermons">Listen to Sermons</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
