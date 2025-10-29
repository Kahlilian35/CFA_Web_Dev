import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Lightbulb, Wrench, Rocket, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero - Top of Funnel */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-purple-100 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-black text-balance">
              Your Journey to Marketing Clarity
            </h1>
            <p className="text-xl md:text-2xl text-black/80 leading-relaxed font-medium mb-8 text-balance">
              We don't just deliver marketing services—we guide you through a proven process that puts the power in your
              hands.
            </p>
            <Button size="lg" asChild className="bg-purple-600 hover:bg-purple-700">
              <Link href="/contact">
                Start Your Journey <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Step 1: Discovery & Conversation */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-bold mb-6">
                  <MessageCircle size={32} />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">We Start with Conversation</h2>
                <p className="text-lg text-black/80 leading-relaxed mb-6 font-medium">
                  Every great solution begins with understanding. We sit down with you to discover your unique
                  challenges, barriers, and goals. No cookie-cutter approaches—just real conversations about what's
                  holding you back and where you want to go.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Identify your biggest marketing challenges",
                    "Uncover hidden barriers to growth",
                    "Define clear, actionable goals",
                    "Map out your ideal customer journey",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                      <span className="text-black/80 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">
                    Book a Discovery Call <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
              </div>
              <div className="lg:w-1/2">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lowdown-12-tbX8UrbGGBxqV0gC1gR2MQbVyxAuyt.jpg"
                  alt="Discovery conversation"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2: Education */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-pink-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-6">
                  <Lightbulb size={32} />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">We Teach You to Fish</h2>
                <p className="text-lg text-black/80 leading-relaxed mb-6 font-medium">
                  Knowledge is power. We don't just do the work for you—we educate you on how marketing actually works.
                  You'll understand the "why" behind every strategy, so you can make informed decisions and solve
                  problems on your own.
                </p>
                <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
                  <h3 className="text-xl font-bold mb-4 text-black">What You'll Learn:</h3>
                  <ul className="space-y-3">
                    {[
                      "How to identify your ideal customer",
                      "Content strategies that actually convert",
                      "SEO fundamentals for local businesses",
                      "Social media best practices",
                      "How to measure what matters",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-black/80 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/insights">
                    Explore Free Resources <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
              </div>
              <div className="lg:w-1/2">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lowdown-10%20%281%29-xLtKxuK2EZ8NPLqgKmlkgGBPoOfF4U.jpg"
                  alt="Education and learning"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3: Custom Solutions & Systems */}
      <section className="py-20 bg-gradient-to-b from-pink-50 to-orange-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="w-16 h-16 rounded-full bg-pink-600 text-white flex items-center justify-center text-2xl font-bold mb-6">
                  <Wrench size={32} />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">We Build Your System</h2>
                <p className="text-lg text-black/80 leading-relaxed mb-6 font-medium">
                  Based on what we've discovered together, we design and build custom systems tailored to your specific
                  needs. These aren't off-the-shelf solutions—they're tools and frameworks designed to put the power
                  directly in your hands.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    { title: "Strategy Canvas", desc: "Interactive planning tool" },
                    { title: "AI Assistants", desc: "Custom chatbots for your business" },
                    { title: "Content Systems", desc: "Repeatable content frameworks" },
                    { title: "SEO Foundations", desc: "Optimized web presence" },
                  ].map((item) => (
                    <div key={item.title} className="bg-white rounded-lg p-4 shadow-md">
                      <h4 className="font-bold text-black mb-1">{item.title}</h4>
                      <p className="text-sm text-black/70 font-medium">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <Button asChild variant="outline" size="lg">
                  <Link href="/strategy-canvas">
                    Try Strategy Canvas <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
              </div>
              <div className="lg:w-1/2">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lowdown-33-j18AcrMmgcI0l9jrMHB6ovtqGG8zox.jpg"
                  alt="Custom solutions"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 4: Custom Content Delivery */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-purple-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <div className="w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center text-2xl font-bold mb-6">
                  <Rocket size={32} />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">We Create When You Need It</h2>
                <p className="text-lg text-black/80 leading-relaxed mb-6 font-medium">
                  Sometimes you need expert execution. When custom content, design, or technical work is required, we
                  deliver high-quality assets that align perfectly with your brand and goals. From photography to web
                  design to video production—we've got you covered.
                </p>
                <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
                  <h3 className="text-xl font-bold mb-4 text-black">Custom Deliverables:</h3>
                  <ul className="space-y-3">
                    {[
                      "Professional photo & video production",
                      "Custom website design & development",
                      "Brand identity & visual assets",
                      "Content packages (20+ assets from one piece)",
                      "Paid ad campaigns & management",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-black/80 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
                  <Link href="/work">
                    View Our Work <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
              </div>
              <div className="lg:w-1/2">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/INDIA-14%20%281%29-jt5lDnfxqiMqVXhIWD2Phz2i1ISg8V.jpg"
                  alt="Custom content creation"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Result - Bottom of Funnel */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">The Result? You're in Control</h2>
            <p className="text-xl text-black/80 leading-relaxed mb-12 font-medium text-balance">
              At the end of our journey together, you'll have the knowledge, tools, and systems to drive your own
              marketing success. We're not here to create dependency—we're here to empower you.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { number: "90%", label: "Client Satisfaction" },
                { number: "3x", label: "Average ROI" },
                { number: "Across", label: "Four Corners" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">{stat.number}</div>
                  <div className="text-black/70 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 text-black/80 font-medium text-balance">
              Book a free strategy call and discover at least 3 low-lift wins for your business. No pressure, just
              clarity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Book Your Free Call <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-black hover:bg-white/20"
                asChild
              >
                <Link href="/strategy-canvas">Try Strategy Canvas Free</Link>
              </Button>
            </div>
            <p className="mt-6 text-black/70 font-medium">
              Or call us directly:{" "}
              <a href="tel:303-903-8733" className="font-bold text-black hover:underline">
                (303) 903-8733
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
