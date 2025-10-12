import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Heart, Users, Lightbulb, Target, Facebook, Instagram, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">About Us</h1>
            <p className="text-xl text-foreground/90 leading-relaxed font-medium">A Message from our Founders</p>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Kahlil */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Kahlil</h2>
              <div className="text-lg text-foreground/90 leading-relaxed font-medium space-y-4">
                <p>
                  My name, has always held a special meaning to me. It means "trustworthy or loyal friend." My name,
                  being so unique and "different," has always pushed me to truly embrace it and allow it to shape who I
                  have become. Being a caring and loyal friend is an attribute that I take pride in, and I strive to
                  bring that characteristic with me into my work as well.
                </p>
                <p>
                  I hope to bring that friendship to the family-owned and local businesses of Durango that have been
                  falling behind in marketing. Every business deserves to showcase their craft, art, or service, and I
                  hope to help you shine a light on what you hold dearest.
                </p>
              </div>
            </div>

            {/* Wes */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Wes</h2>
              <div className="text-lg text-foreground/90 leading-relaxed font-medium space-y-4">
                <p>
                  Born and raised in Colorado, I'm a Fort Lewis College graduate with a passion for adventure and
                  storytelling. As an educator, digital marketer, and creative storyteller, I strive to inspire growth
                  and authentic connection. My work blends heart and strategy, crafting compelling narratives that leave
                  a lasting impact.
                </p>
                <p>
                  From leading wilderness expeditions to capturing moments in the Himalayas, I seek out experiences that
                  shape perspective. I believe every story deserves to be told with purpose and passion. Through
                  education, media, and outdoor exploration, I empower others to share their unique journey. Adventure
                  fuels my creativity, and connection drives my work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Our Mission: Empowering Local Businesses to Thrive
            </h2>
            <p className="text-lg text-foreground/90 leading-relaxed font-medium">
              At Creative Flow Advertising, our mission is to empower Durango's local businesses to thrive by leveraging
              the transformative power of AI. We believe that every small business deserves access to cutting-edge tools
              that simplify operations, improve efficiency, and unlock growth potential. By providing innovative AI
              consulting and tailored solutions, we help businesses streamline processes, make data-driven decisions,
              and connect with their ideal customers more effectively. Our goal is to enhance your business's
              productivity, optimize your resources, and contribute to the success of our cherished community by making
              AI accessible and impactful for local enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Our Story: Local Roots, Fresh Perspectives
            </h2>
            <p className="text-lg text-foreground/90 leading-relaxed font-medium">
              Founded by passionate, local, college students, Creative Flow Advertising is deeply rooted in the Durango
              community. Leveraging local resources and personal connections, we bring a fresh perspective to the
              marketing landscape. Our founder's firsthand experience with the city's culture and dynamics enables us to
              craft strategies that resonate both with local businesses and the tourists they aim to attract. By
              combining academic insights with real-world applications, we offer a unique blend of youthful innovation
              and hometown pride. We're committed to supporting our fellow local businesses, fostering growth, and
              showcasing the best that Durango has to offer.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Values</h2>
            <p className="text-lg text-muted-foreground font-medium">What guides everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Local First",
                description: "We're committed to the Four Corners region and the businesses that make it thrive.",
              },
              {
                icon: Users,
                title: "Partnership",
                description: "We work with you, not for you. Your success is our success.",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "We embrace new tools and strategies to give you a competitive edge.",
              },
              {
                icon: Target,
                title: "Results",
                description: "We measure what matters and optimize until we hit your goals.",
              },
            ].map((value) => {
              const Icon = value.icon
              return (
                <Card key={value.title} className="p-6 text-center">
                  <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium">{value.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">How We Work</h2>
            <div className="space-y-8">
              {[
                {
                  title: "Discovery",
                  description:
                    "We start by understanding your business, your market, and your goals. No assumptions, just questions.",
                },
                {
                  title: "Strategy",
                  description:
                    "We create a custom plan that fits your budget, timeline, and resources. You'll know exactly what to expect.",
                },
                {
                  title: "Execution",
                  description: "We build, launch, and optimize. You'll see progress every week, not just at the end.",
                },
                {
                  title: "Growth",
                  description:
                    "We measure results, refine what works, and scale your success. Marketing that compounds over time.",
                },
              ].map((phase, index) => (
                <div key={phase.title} className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full gradient-hero text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{phase.title}</h3>
                    <p className="text-foreground/90 leading-relaxed font-medium">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Community Commitment</h2>
            <p className="text-lg text-foreground/90 leading-relaxed mb-8 font-medium">
              We believe in giving back to the communities we serve. That's why we dedicate 10% of our time to pro bono
              work for local nonprofits and community organizations. If you're working to make the Four Corners a better
              place, we want to help.
            </p>
            <Button variant="outline" asChild className="bg-transparent">
              <Link href="/contact">
                Apply for pro bono support <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Connect With Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">Connect With Us</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Social Media */}
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">Social Media</h3>
                <div className="space-y-3">
                  <a
                    href="https://facebook.com/creativeflowads"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground/90 hover:text-foreground transition-colors"
                  >
                    <Facebook size={20} />
                    <span className="font-medium">creativeflowads</span>
                  </a>
                  <a
                    href="https://instagram.com/creativeflowads"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground/90 hover:text-foreground transition-colors"
                  >
                    <Instagram size={20} />
                    <span className="font-medium">creativeflowads</span>
                  </a>
                </div>
              </Card>

              {/* Contact Info */}
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">Contact Info</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-foreground/90">
                    <MapPin size={20} />
                    <span className="font-medium">Durango CO 81303</span>
                  </div>
                  <a
                    href="tel:+13039038733"
                    className="flex items-center gap-3 text-foreground/90 hover:text-foreground transition-colors"
                  >
                    <Phone size={20} />
                    <span className="font-medium">(303) 903-8733</span>
                  </a>
                </div>
              </Card>
            </div>

            <p className="text-center text-sm text-muted-foreground">
              Copyright © 2025 Creative Flow Advertising LLC - All Rights Reserved.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Let's work together</h2>
            <p className="text-xl mb-8 text-white/90 font-medium">
              Ready to find your missing piece? Book a free strategy call and let's talk about your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Start a project <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                asChild
              >
                <Link href="/strategy-canvas">Try Strategy Canvas</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
