import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DonationForm } from "@/components/donation-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Landmark, Repeat, CreditCard } from "lucide-react"

export default function GivePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-4">Give</h1>
          <p className="text-xl max-w-2xl mx-auto">Support the ministry and help us spread the gospel</p>
        </div>
      </div>

      {/* Giving Information */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Your Generosity Makes a Difference</h2>
            <p className="text-lg">
              Your faithful giving supports our church's mission to spread the gospel, care for those in need, and build
              a community of believers. Thank you for your generosity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-2">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Tithes</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">Support the ongoing work and ministry of our church</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-2">
                  <Landmark className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Building Fund</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">
                  Contribute to our church building and expansion projects
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-2">
                  <Repeat className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Recurring Giving</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">
                  Set up automatic recurring donations for consistent support
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-2">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>One-Time Gift</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">Make a one-time donation to support our ministry</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Ways to Give</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-2">Online Giving</h4>
                  <p className="mb-2">
                    You can give securely online using the form on this page. We accept credit cards, debit cards, and
                    bank transfers.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-2">In-Person</h4>
                  <p className="mb-2">
                    You can give during our Sunday services or drop off your offering at the church office during
                    business hours.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-2">By Mail</h4>
                  <p className="mb-2">You can mail your check or money order to:</p>
                  <address className="not-italic">
                    Shekina Family Church
                    <br />
                    123 Church Street
                    <br />
                    City, State 12345
                  </address>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-2">Bank Transfer</h4>
                  <p>For direct bank transfers, please contact our finance office for account details.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Make a Donation</h3>
              <Card>
                <CardHeader>
                  <CardTitle>Donation Form</CardTitle>
                  <CardDescription>Your donation is secure and tax-deductible</CardDescription>
                </CardHeader>
                <CardContent>
                  <DonationForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Scripture & Testimonial */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-xl italic mb-6">
              "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion,
              for God loves a cheerful giver."
            </blockquote>
            <p className="font-semibold mb-12">- 2 Corinthians 9:7</p>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Testimonial</h3>
              <p className="italic mb-4">
                "Through the generosity of our church members, we've been able to support 10 missionary families,
                provide food for 200 families in need, and start a new youth program that has impacted dozens of young
                lives."
              </p>
              <p className="font-semibold">- Pastor John Doe</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
