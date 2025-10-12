"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProofChip } from "@/components/proof-chip"
import { FourCornersPuzzle } from "@/components/four-corners-puzzle"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, TrendingUp, Award, Zap } from "lucide-react"
import Link from "next/link"

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void
    }
  }
}

export default function HomePage() {
  const openCalendly = () => {
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({ url: "https://calendly.com/creative-flow-llc/30min" })
    }
  }

  return (
    <div className="min-h-screen relative">
      <div className="relative z-10">
        <Navigation />

        {/* Hero Section - Four Corners Puzzle */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 gradient-hero noise-texture" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Puzzle Animation */}
              <div className="order-2 lg:order-1 flex justify-center">
                <FourCornersPuzzle />
              </div>

              {/* Right: Hero Content */}
              <div className="order-1 lg:order-2 text-foreground">
                {/* Proof Chips */}
                <div className="flex flex-wrap gap-3 mb-8">
                  <ProofChip
                    icon={<TrendingUp size={16} />}
                    label="Bookings ↑ 2x"
                    className="bg-primary/10 backdrop-blur-sm border-primary/20 text-foreground"
                  />
                  <ProofChip
                    icon={<Award size={16} />}
                    label="#1 local rank"
                    className="bg-primary/10 backdrop-blur-sm border-primary/20 text-foreground"
                  />
                  <ProofChip
                    icon={<Zap size={16} />}
                    label="AI assistant live"
                    className="bg-primary/10 backdrop-blur-sm border-primary/20 text-foreground"
                  />
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
                  Find your missing piece.
                </h1>
                <p className="text-lg md:text-xl mb-8 text-muted-foreground leading-relaxed">
                  Brand strategy, content packaging, and websites that click into place.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="gradient-hero text-white" asChild>
                    <Link href="/contact">
                      Start a project
                      <ArrowRight className="ml-2" size={20} />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-background border-border text-foreground hover:bg-accent"
                    onClick={openCalendly}
                  >
                    Book a call
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Wave decoration */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path
                d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                fill="rgb(250 245 255)"
              />
            </svg>
          </div>
        </section>

        {/* Services Trio */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Services that snap into place</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Three core offerings designed to help your business grow with clarity and momentum.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Brand Strategy */}
              <Card className="p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center mb-6">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Brand Strategy</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Clarify your story, position, and messaging to stand out in your market.
                </p>
                <Link
                  href="/services/brand-strategy"
                  className="text-primary font-medium inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight size={16} />
                </Link>
              </Card>

              {/* Content Packaging */}
              <Card className="p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mb-6">
                  <Zap className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Content Packaging</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Turn one piece of content into dozens of assets that work across every channel.
                </p>
                <Link
                  href="/services/content-packaging"
                  className="text-primary font-medium inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight size={16} />
                </Link>
              </Card>

              {/* Websites */}
              <Card className="p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-6">
                  <TrendingUp className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Websites</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Fast, beautiful sites built to convert visitors into customers and clients.
                </p>
                <Link
                  href="/services/websites"
                  className="text-primary font-medium inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight size={16} />
                </Link>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Work Preview */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Featured work</h2>
                <p className="text-lg text-muted-foreground">Real results for Four Corners businesses</p>
              </div>
              <Button variant="outline" asChild className="hidden md:inline-flex bg-transparent">
                <Link href="/work">
                  View all work <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Diva Diamonds */}
              <Card className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 relative overflow-hidden">
                  <img
                    src="/luxury-jewelry-store-website-design.jpg"
                    alt="Diva Diamonds website"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm font-medium text-primary">Santa Fe</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">Jewelry</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Diva Diamonds</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    From lost in search to #1 jewelry site in Santa Fe. Traffic and calls up with brand tune-up and SEO.
                  </p>
                  <div className="flex items-center gap-2">
                    <ProofChip label="#1 local rank" />
                    <ProofChip label="Traffic ↑ 3x" />
                  </div>
                </div>
              </Card>

              {/* Coops Auto Detailing */}
              <Card className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 relative overflow-hidden">
                  <img
                    src="/auto-detailing-service-website-modern-design.jpg"
                    alt="Coops Auto Detailing website"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm font-medium text-primary">Albuquerque</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">Auto Services</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Coops Auto Detailing</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    New site with performance fixes doubled bookings. Site score in 90th percentile locally.
                  </p>
                  <div className="flex items-center gap-2">
                    <ProofChip label="Bookings ↑ 2x" />
                    <ProofChip label="90th percentile" />
                  </div>
                </div>
              </Card>
            </div>

            <div className="mt-8 text-center md:hidden">
              <Button variant="outline" asChild className="w-full sm:w-auto bg-transparent">
                <Link href="/work">
                  View all work <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Strategy Canvas Teaser */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 gradient-accent opacity-10" />
              <div className="relative p-8 lg:p-16">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Get your custom strategy in 3 minutes
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Answer a few questions and receive a tailored 6-week marketing plan with channels, content cadence,
                    and KPIs.
                  </p>
                  <Button size="lg" className="gradient-hero text-white" asChild>
                    <Link href="/strategy-canvas">
                      Try Strategy Canvas <ArrowRight className="ml-2" size={20} />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Locations Ribbon */}
        <section className="py-20 bg-accent text-accent-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Serving the Four Corners region</h2>
              <p className="text-lg text-accent-foreground/80">
                Local expertise across New Mexico, Colorado, and beyond
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { name: "Durango", state: "CO" },
                { name: "Santa Fe", state: "NM" },
                { name: "Cortez", state: "CO" },
                { name: "Dolores", state: "CO" },
                { name: "Bayfield", state: "CO" },
                { name: "Farmington", state: "NM" },
              ].map((location) => (
                <Link
                  key={location.name}
                  href={`/locations/${location.name.toLowerCase().replace(" ", "-")}`}
                  className="text-center p-6 rounded-lg bg-accent-foreground/10 hover:bg-accent-foreground/20 transition-colors"
                >
                  <div className="text-2xl font-bold mb-1">{location.name}</div>
                  <div className="text-sm text-accent-foreground/70">{location.state}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Insights Teaser */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Current</h2>
                <p className="text-lg text-muted-foreground">Always current, never noisy.</p>
              </div>
              <Button variant="outline" asChild className="hidden md:inline-flex bg-transparent">
                <Link href="/insights">
                  View all <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  category: "Article",
                  title: "How to package one video into 20 assets",
                  date: "October 12, 2025",
                },
                {
                  category: "Playbook",
                  title: "Local SEO checklist for Four Corners businesses",
                  date: "October 12, 2025",
                },
                {
                  category: "Flow Letter",
                  title: "Why AI assistants are the new competitive advantage",
                  date: "October 12, 2025",
                },
              ].map((post, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-shadow cursor-pointer">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">{post.category}</span>
                  <h3 className="text-xl font-bold mt-3 mb-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center md:hidden">
              <Button variant="outline" asChild className="w-full sm:w-auto bg-transparent">
                <Link href="/insights">
                  View all <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 lg:py-32 gradient-hero text-white relative overflow-hidden">
          <div className="absolute inset-0 noise-texture" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Ready to find your missing piece?</h2>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Book a free strategy call and discover at least 3 low-lift wins for your business in 15 minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-hero text-white" asChild>
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
    </div>
  )
}
