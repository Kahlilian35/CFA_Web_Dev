import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Award, Zap, TrendingUp, Target, Bot, BarChart } from "lucide-react"
import Link from "next/link"

const services = [
  {
    slug: "brand-strategy",
    icon: Award,
    title: "Brand Strategy",
    tagline: "Clarify your story, position, and messaging",
    description:
      "Stand out in your market with a brand strategy that defines who you are, what you offer, and why it matters. We help you articulate your unique value and connect with the right customers.",
    features: [
      "Brand story and positioning",
      "Messaging framework",
      "Competitive analysis",
      "Target audience research",
      "Visual identity direction",
    ],
    cta: "Learn more",
  },
  {
    slug: "content-packaging",
    icon: Zap,
    title: "Content Packaging",
    tagline: "Turn one asset into dozens of formats",
    description:
      "Stop creating content from scratch every time. Our content packaging system takes one piece of content and transforms it into 20+ assets optimized for every channel and platform.",
    features: [
      "Multi-format repurposing",
      "Platform optimization",
      "Content calendar planning",
      "Template systems",
      "Distribution strategy",
    ],
    cta: "Learn more",
  },
  {
    slug: "websites",
    icon: TrendingUp,
    title: "Websites",
    tagline: "Fast, conversion-focused sites",
    description:
      "Beautiful websites built to convert visitors into customers. We focus on performance, user experience, and SEO to ensure your site works as hard as you do.",
    features: [
      "Mobile-first design",
      "Performance optimization",
      "Local SEO setup",
      "Conversion tracking",
      "Ongoing maintenance",
    ],
    cta: "Learn more",
  },
  {
    slug: "paid-ads",
    icon: Target,
    title: "Paid Ads",
    tagline: "Targeted campaigns that drive results",
    description:
      "Reach the right people at the right time with data-driven ad campaigns. We manage Google Ads, Facebook, Instagram, and more to maximize your ROI.",
    features: [
      "Campaign strategy and setup",
      "Audience targeting",
      "Ad creative development",
      "Performance monitoring",
      "Monthly optimization",
    ],
    cta: "Learn more",
  },
  {
    slug: "ai-assistants",
    icon: Bot,
    title: "AI Assistants",
    tagline: "Custom AI tools for your business",
    description:
      "Automate customer service, lead qualification, and routine tasks with custom AI assistants trained on your business. Provide instant answers 24/7 while freeing up your team.",
    features: [
      "Custom chatbot development",
      "Knowledge base training",
      "Multi-channel integration",
      "Analytics and insights",
      "Continuous improvement",
    ],
    cta: "Learn more",
  },
  {
    slug: "ongoing-growth",
    icon: BarChart,
    title: "Ongoing Growth",
    tagline: "Monthly support and optimization",
    description:
      "Keep your marketing momentum going with ongoing support. We handle content, ads, SEO, and analytics so you can focus on running your business.",
    features: [
      "Monthly content creation",
      "Performance reporting",
      "Strategy adjustments",
      "Technical support",
      "Priority access",
    ],
    cta: "Learn more",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black">Services</h1>
            <p className="text-xl text-black/80 leading-relaxed font-medium">
              From brand strategy to AI assistants, we offer the tools and expertise to help Four Corners businesses
              grow with clarity and momentum.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {services.slice(0, 3).map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.slug} className="p-8 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center mb-6">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-black">{service.title}</h3>
                  <p className="text-black/80 mb-6 leading-relaxed font-semibold">{service.description}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    {service.cta} <ArrowRight size={16} />
                  </Link>
                </Card>
              )
            })}
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Additional Services</h2>
            <p className="text-lg text-black/80 font-semibold">Specialized solutions for specific needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.slice(3).map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.slug} className="p-6 hover:shadow-xl transition-shadow">
                  <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center mb-4">
                    <Icon className="text-white" size={20} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-black">{service.title}</h3>
                  <p className="text-sm text-black/70 mb-4 font-semibold">{service.tagline}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-primary text-sm font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    {service.cta} <ArrowRight size={14} />
                  </Link>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">How we work</h2>
            <p className="text-lg text-black/80 font-semibold">A proven process that delivers results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Discovery",
                description: "We learn about your business, goals, and challenges",
              },
              {
                step: "2",
                title: "Strategy",
                description: "We create a custom plan tailored to your needs",
              },
              {
                step: "3",
                title: "Execution",
                description: "We build, launch, and optimize your solution",
              },
              {
                step: "4",
                title: "Growth",
                description: "We measure, refine, and scale what works",
              },
            ].map((phase) => (
              <Card key={phase.step} className="p-6 text-center">
                <div className="w-12 h-12 rounded-full gradient-hero text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold mb-2 text-black">{phase.title}</h3>
                <p className="text-sm text-black/70 font-semibold">{phase.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Ready to get started?</h2>
            <p className="text-xl mb-8 text-black/80 font-medium">
              Book a free strategy call and discover at least 3 low-lift wins for your business.
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
