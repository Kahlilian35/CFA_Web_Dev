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
    slug: "lowdown-helmets",
    title: "Lowdown Helmets",
    location: "Aspen",
    industry: "Outdoor Gear",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lowdown-12-tbX8UrbGGBxqV0gC1gR2MQbVyxAuyt.jpg",
    description: "Lifestyle photography and video content that became their marketing foundation",
    tags: ["Photography", "Video Production"],
    objective: "Brand Strategy",
  },
  {
    slug: "coops-auto-detailing",
    title: "Coops Auto Detailing",
    location: "Albuquerque",
    industry: "Auto Services",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-29%20at%202.53.47%E2%80%AFPM-VNpFnH90Ffl36XW1XoGIadT5Wceh71.jpg",
    description: "Website redesign and SEO strategy that drove 2-month booking backlog",
    tags: ["Web Design", "90th percentile SEO"],
    objective: "Website",
  },
  {
    slug: "nourish-durango",
    title: "Nourish Durango",
    location: "Durango",
    industry: "Food & Wellness",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nourish-8-5Uw2kY07lJJ893Jj9UL5YvaHJddqFW.jpg",
    description: "Visual storytelling that captured the heart of a wellness brand",
    tags: ["Photography", "Video Production"],
    objective: "Brand Strategy",
  },
]

const filters = {
  industry: ["All", "Outdoor Gear", "Auto Services", "Food & Wellness"],
  objective: ["All", "Brand Strategy", "Website"],
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

      {/* Behind the Scenes */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Behind the Scenes</h2>
            <p className="text-lg text-black/80 font-medium">
              A glimpse into our work with Four Corners businesses—from wellness brands to outdoor adventures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Nourish - Woman with meal container */}
            <div className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-gradient-to-br from-purple-100 to-pink-100">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nourish-8-5Uw2kY07lJJ893Jj9UL5YvaHJddqFW.jpg"
                alt="Nourish Durango brand photography"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Lowdown Helmets - Gold helmet portrait */}
            <div className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-gradient-to-br from-purple-100 to-pink-100">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lowdown-12-tbX8UrbGGBxqV0gC1gR2MQbVyxAuyt.jpg"
                alt="Lowdown Helmets lifestyle photography"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Toastee Club - Brand work */}
            <div className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-gradient-to-br from-purple-100 to-pink-100">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/INDIA-14%20%281%29-jt5lDnfxqiMqVXhIWD2Phz2i1ISg8V.jpg"
                alt="Toastee Club brand photography"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Nourish - Meal prep service */}
            <div className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-gradient-to-br from-purple-100 to-pink-100">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nourish-19-zluDCVN1EuTW9a1c9mmBI1wA22IPDu.jpg"
                alt="Nourish meal preparation"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Nourish - Team collaboration */}
            <div className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-gradient-to-br from-purple-100 to-pink-100">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nourish-14-5J2DM0XGAlZSYBoYBCqQpT24qwrju4.jpg"
                alt="Nourish team working together"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Coop's Auto Detailing - Collage */}
            <div className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-gradient-to-br from-purple-100 to-pink-100">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Q1Q4CtxLSgUiLt1UOi4zwzy4K7oq9E.jpg"
                alt="Coop's Auto Detailing work showcase"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

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
