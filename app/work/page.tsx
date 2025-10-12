"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProofChip } from "@/components/proof-chip"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const caseStudies = [
  {
    slug: "diva-diamonds",
    title: "Diva Diamonds",
    location: "Santa Fe",
    industry: "Jewelry",
    image: "/luxury-jewelry-store-website-design.jpg",
    description: "From lost in search to #1 jewelry site in Santa Fe",
    tags: ["#1 local rank", "Traffic ↑ 3x"],
    objective: "Local SEO",
  },
  {
    slug: "coops-auto-detailing",
    title: "Coops Auto Detailing",
    location: "Albuquerque",
    industry: "Auto Services",
    image: "/auto-detailing-service-website-modern-design.jpg",
    description: "Doubled bookings with new site and performance optimization",
    tags: ["Bookings ↑ 2x", "90th percentile"],
    objective: "Website",
  },
  {
    slug: "lowdown-helmets",
    title: "Lowdown Helmets",
    location: "Durango",
    industry: "Outdoor Gear",
    image: "/outdoor-sports-helmet-brand-website.jpg",
    description: "Premium brand identity and e-commerce launch",
    tags: ["Brand Launch", "E-commerce"],
    objective: "Brand Strategy",
  },
  {
    slug: "desert-sun-coffee",
    title: "Desert Sun Coffee",
    location: "Farmington",
    industry: "Food & Beverage",
    image: "/coffee-shop-website-modern-design.jpg",
    description: "AI assistant handles customer questions 24/7",
    tags: ["AI Assistant", "Support ↓ 60%"],
    objective: "AI",
  },
  {
    slug: "nourish-nutrition",
    title: "Nourish Nutrition",
    location: "Santa Fe",
    industry: "Health & Wellness",
    image: "/nutrition-wellness-website-design.jpg",
    description: "Content system generates 50+ assets per month",
    tags: ["Content ↑ 5x", "Engagement ↑ 200%"],
    objective: "Content",
  },
]

const filters = {
  industry: ["All", "Jewelry", "Auto Services", "Outdoor Gear", "Food & Beverage", "Health & Wellness"],
  objective: ["All", "Local SEO", "Website", "Brand Strategy", "AI", "Content"],
}

export default function WorkPage() {
  const [selectedIndustry, setSelectedIndustry] = useState("All")
  const [selectedObjective, setSelectedObjective] = useState("All")

  const filteredCases = caseStudies.filter((study) => {
    const industryMatch = selectedIndustry === "All" || study.industry === selectedIndustry
    const objectiveMatch = selectedObjective === "All" || study.objective === selectedObjective
    return industryMatch && objectiveMatch
  })

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black">Our Work</h1>
            <p className="text-xl text-black/80 leading-relaxed font-medium">
              Real results for Four Corners businesses. From local SEO wins to AI-powered customer service, we help
              brands grow with strategy that works.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border bg-background sticky top-16 z-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label className="text-sm font-bold mb-2 block text-black">Industry</label>
              <div className="flex flex-wrap gap-2">
                {filters.industry.map((industry) => (
                  <Button
                    key={industry}
                    variant={selectedIndustry === industry ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedIndustry(industry)}
                    className={selectedIndustry === industry ? "gradient-hero text-white" : "bg-transparent"}
                  >
                    {industry}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <label className="text-sm font-bold mb-2 block text-black">Objective</label>
              <div className="flex flex-wrap gap-2">
                {filters.objective.map((objective) => (
                  <Button
                    key={objective}
                    variant={selectedObjective === objective ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedObjective(objective)}
                    className={selectedObjective === objective ? "gradient-hero text-white" : "bg-transparent"}
                  >
                    {objective}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((study) => (
              <Link key={study.slug} href={`/work/${study.slug}`}>
                <Card className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all h-full">
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 relative overflow-hidden">
                    <img
                      src={study.image || "/placeholder.svg"}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm font-bold text-primary">{study.location}</span>
                      <span className="text-black/60">•</span>
                      <span className="text-sm text-black/70 font-semibold">{study.industry}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors text-black">
                      {study.title}
                    </h3>
                    <p className="text-black/80 mb-4 leading-relaxed font-semibold">{study.description}</p>
                    <div className="flex flex-wrap items-center gap-2">
                      {study.tags.map((tag) => (
                        <ProofChip key={tag} label={tag} />
                      ))}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {filteredCases.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-black/80 font-semibold">
                No case studies match your filters. Try adjusting them.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Behind the Scenes</h2>
            <p className="text-lg text-black/80 font-medium">
              A glimpse into our work with Four Corners businesses—from catering events to outdoor adventures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Catering/Food Service Image 1 */}
            <div className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-gradient-to-br from-purple-100 to-pink-100">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8EBC0B7A-91DE-432C-B96F-E5E4F9F660EE-5oA66mQnJLVC09unHXnImkdmJQeOFo.jpeg"
                alt="Catering service with food displays"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Skiing Portrait */}
            <div className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-gradient-to-br from-purple-100 to-pink-100">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lowdown-12-Bjz1gCGVk5WTvBngQVFC5kBpTdMUmI.jpeg"
                alt="Lowdown Helmets brand photography"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Skiing Action Shots */}
            <div className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-gradient-to-br from-purple-100 to-pink-100">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/C3E3BBD4-FC71-431C-9FB1-10C0C30BBB27-Rho2BwyncYrhUUXYHlFE71rRLHR12i.jpeg"
                alt="Action skiing photography"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Catering/Food Service Image 2 */}
            <div className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-gradient-to-br from-purple-100 to-pink-100">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/F3B67330-B993-42AB-94C2-932CCFB44945-iipd85BNSZbfCAwQ6XL9SbzUc5BMo4.jpeg"
                alt="Professional catering setup"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Video - spans 2 columns on larger screens */}
            <div className="group relative overflow-hidden rounded-lg aspect-[3/4] md:col-span-2 lg:col-span-2 bg-gradient-to-br from-purple-100 to-pink-100">
              <video
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/copy_69815238-1100-492C-A6FD-82ABFF6E938F-X7jZ1p3shbyxRWitZeihBLZtv00TiY.mov"
                className="w-full h-full object-cover"
                controls
                playsInline
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
      {/* </CHANGE> */}

      {/* CTA */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Ready to see results like these?</h2>
            <p className="text-xl mb-8 text-black/80 font-medium">
              Let's build your custom strategy and start growing.
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
