"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowRight, FileText, BookOpen, Mail } from "lucide-react"
import Link from "next/link"

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void
    }
  }
}

const content = [
  {
    category: "Article",
    title: "How to package one video into 20 assets",
    excerpt: "Stop creating content from scratch. Learn our system for repurposing one piece into dozens of formats.",
    date: "October 12, 2025",
    readTime: "5 min read",
    slug: "package-video-into-assets",
  },
  {
    category: "Playbook",
    title: "Local SEO checklist for Four Corners businesses",
    excerpt: "A step-by-step guide to ranking higher in local search and attracting more customers in your area.",
    date: "October 12, 2025",
    readTime: "PDF Download",
    slug: "local-seo-checklist",
  },
  {
    category: "Flow Letter",
    title: "Why AI assistants are the new competitive advantage",
    excerpt: "How small businesses are using AI to provide 24/7 customer service without hiring more staff.",
    date: "October 12, 2025",
    readTime: "3 min read",
    slug: "ai-assistants-competitive-advantage",
  },
  {
    category: "Article",
    title: "The Four Corners Marketing Index Q1 2025",
    excerpt: "Local rankings, trends, and opportunities for businesses in Durango, Santa Fe, and beyond.",
    date: "October 12, 2025",
    readTime: "8 min read",
    slug: "four-corners-marketing-index-q1-2025",
  },
  {
    category: "Playbook",
    title: "Website performance checklist",
    excerpt: "Ensure your site loads fast and converts visitors with this comprehensive optimization guide.",
    date: "October 12, 2025",
    readTime: "PDF Download",
    slug: "website-performance-checklist",
  },
  {
    category: "Article",
    title: "Brand strategy for local businesses",
    excerpt: "How to define your positioning and stand out in a crowded market without a big budget.",
    date: "October 12, 2025",
    readTime: "6 min read",
    slug: "brand-strategy-local-businesses",
  },
]

const categories = ["All", "Article", "Playbook", "Flow Letter"]

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [email, setEmail] = useState("")

  const filteredContent = content.filter((item) => selectedCategory === "All" || item.category === selectedCategory)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Subscribe:", email)
    setEmail("")
  }

  const openCalendly = () => {
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({ url: "https://calendly.com/creative-flow-llc/30min" })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 gradient-hero text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Current</h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Always current, never noisy. Articles, playbooks, and insights to help your business grow.
            </p>

            {/* Newsletter Signup */}
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">Subscribe to The Flow Letter</h3>
                  <p className="text-sm text-white/80">Weekly insights delivered to your inbox</p>
                </div>
                <form onSubmit={handleSubscribe} className="flex gap-2 w-full md:w-auto">
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    required
                  />
                  <Button type="submit" variant="secondary">
                    Subscribe
                  </Button>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border bg-background sticky top-16 z-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "gradient-hero text-white" : "bg-transparent"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredContent.map((item) => (
              <Link key={item.slug} href={`/insights/${item.slug}`}>
                <Card className="p-6 hover:shadow-xl transition-shadow h-full cursor-pointer group">
                  <div className="flex items-center gap-2 mb-4">
                    {item.category === "Article" && <FileText className="text-primary" size={20} />}
                    {item.category === "Playbook" && <BookOpen className="text-primary" size={20} />}
                    {item.category === "Flow Letter" && <Mail className="text-primary" size={20} />}
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">{item.category}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors text-black">
                    {item.title}
                  </h3>
                  <p className="text-black/70 font-semibold mb-4 leading-relaxed">{item.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-black/60 font-medium">
                    <span>{item.date}</span>
                    <span>{item.readTime}</span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Want personalized insights?</h2>
            <p className="text-lg text-black/80 font-semibold mb-8">
              Book a strategy call and get custom recommendations for your business.
            </p>
            <Button size="lg" className="gradient-hero text-white" onClick={openCalendly}>
              Book a call <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
