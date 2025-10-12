import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ProofChip } from "@/components/proof-chip"
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const locations: Record<
  string,
  {
    name: string
    state: string
    description: string
    services: string[]
    caseStudy?: {
      title: string
      result: string
      slug: string
    }
    faq: { question: string; answer: string }[]
  }
> = {
  durango: {
    name: "Durango",
    state: "Colorado",
    description:
      "Serving businesses in Durango with brand strategy, websites, and content packaging. From outdoor gear companies to local restaurants, we help Durango businesses stand out online.",
    services: ["Brand Strategy", "Websites", "Content Packaging", "Local SEO", "AI Assistants"],
    caseStudy: {
      title: "Lowdown Helmets",
      result: "Launched premium outdoor gear brand with 40% above-target first-month sales",
      slug: "lowdown-helmets",
    },
    faq: [
      {
        question: "Do you work with businesses outside Durango?",
        answer:
          "Yes! While we're based in Durango, we serve the entire Four Corners region including Santa Fe, Cortez, Dolores, Bayfield, and Farmington.",
      },
      {
        question: "What industries do you specialize in?",
        answer:
          "We work with outdoor recreation, hospitality, retail, professional services, and health & wellness businesses in Durango.",
      },
      {
        question: "How long does a typical project take?",
        answer:
          "Most projects take 4-8 weeks from kickoff to launch. We'll give you a detailed timeline during our discovery call.",
      },
      {
        question: "What's your pricing?",
        answer:
          "Projects typically range from $5,000 to $30,000 depending on scope. We offer flexible payment plans and ongoing support options.",
      },
    ],
  },
  "santa-fe": {
    name: "Santa Fe",
    state: "New Mexico",
    description:
      "Marketing and brand strategy for Santa Fe businesses. We help art galleries, restaurants, and local services grow with websites that convert and SEO that ranks.",
    services: ["Local SEO", "Websites", "Brand Strategy", "Content Packaging", "Paid Ads"],
    caseStudy: {
      title: "Diva Diamonds",
      result: "#1 jewelry store in Santa Fe with 300% traffic increase",
      slug: "diva-diamonds",
    },
    faq: [
      {
        question: "How do you help with local SEO in Santa Fe?",
        answer:
          "We optimize your Google Business Profile, build location-specific content, implement schema markup, and create a citation strategy to rank higher in Santa Fe searches.",
      },
      {
        question: "Can you help with Spanish-language marketing?",
        answer: "Yes! We can create bilingual content and marketing materials to reach Santa Fe's diverse community.",
      },
      {
        question: "Do you understand the Santa Fe market?",
        answer:
          "Absolutely. We've worked with multiple Santa Fe businesses and understand the unique blend of art, culture, and tourism that drives the local economy.",
      },
      {
        question: "What results can I expect?",
        answer:
          "Most clients see measurable improvements in traffic, rankings, or bookings within 60-90 days. We set clear KPIs and track progress weekly.",
      },
    ],
  },
  cortez: {
    name: "Cortez",
    state: "Colorado",
    description:
      "Website design, SEO, and marketing for Cortez businesses. We help local companies compete online and attract customers from across the Four Corners.",
    services: ["Websites", "Local SEO", "Content Packaging", "Brand Strategy"],
    faq: [
      {
        question: "Why should Cortez businesses invest in marketing?",
        answer:
          "Cortez is a gateway to Mesa Verde and the Four Corners. Strong online presence helps you capture tourists and serve local customers year-round.",
      },
      {
        question: "How do you help seasonal businesses?",
        answer:
          "We create strategies that build awareness in the off-season and maximize bookings during peak times. Content and SEO work year-round.",
      },
      {
        question: "What's the typical ROI?",
        answer:
          "Most clients see 2-3x return on investment within 6 months through increased bookings, traffic, or sales.",
      },
      {
        question: "Do you offer ongoing support?",
        answer: "Yes! We offer monthly retainers for content creation, SEO maintenance, and performance optimization.",
      },
    ],
  },
  dolores: {
    name: "Dolores",
    state: "Colorado",
    description:
      "Marketing services for Dolores businesses. From outdoor recreation to local services, we help Dolores companies grow with smart digital strategy.",
    services: ["Websites", "Local SEO", "Brand Strategy", "Content Packaging"],
    faq: [
      {
        question: "How can small Dolores businesses compete online?",
        answer:
          "With focused local SEO, strong branding, and consistent content. You don't need a huge budget—just the right strategy.",
      },
      {
        question: "What makes your approach different?",
        answer:
          "We focus on what works for small businesses: clear messaging, fast websites, and local SEO that drives real customers.",
      },
      {
        question: "Can you help with social media?",
        answer:
          "Yes! We create content systems that make social media manageable and effective, even with limited time.",
      },
      {
        question: "How do we get started?",
        answer:
          "Book a free 15-minute strategy call. We'll discuss your goals and outline 3 quick wins you can implement right away.",
      },
    ],
  },
  bayfield: {
    name: "Bayfield",
    state: "Colorado",
    description:
      "Website design and marketing for Bayfield businesses. We help local companies build their online presence and attract customers from across the region.",
    services: ["Websites", "Local SEO", "Brand Strategy", "Content Packaging"],
    faq: [
      {
        question: "What services are most valuable for Bayfield businesses?",
        answer:
          "Local SEO and website optimization are crucial. Most customers search online before visiting, so you need to be visible and credible.",
      },
      {
        question: "How long until we see results?",
        answer:
          "Website improvements show immediate impact. SEO takes 60-90 days to gain traction. We track progress weekly so you always know where you stand.",
      },
      {
        question: "Do you work with agricultural businesses?",
        answer:
          "Yes! We've worked with farms, ranches, and ag-related businesses to build their brand and reach new customers.",
      },
      {
        question: "What's included in your website service?",
        answer:
          "Design, development, mobile optimization, SEO setup, analytics, and training. You'll own your site and know how to update it.",
      },
    ],
  },
  farmington: {
    name: "Farmington",
    state: "New Mexico",
    description:
      "Marketing and web design for Farmington businesses. We help local companies grow with brand strategy, websites, and AI-powered customer service.",
    services: ["Websites", "AI Assistants", "Local SEO", "Brand Strategy", "Content Packaging"],
    caseStudy: {
      title: "Desert Sun Coffee",
      result: "AI assistant handles 60% of customer inquiries, freeing up staff time",
      slug: "desert-sun-coffee",
    },
    faq: [
      {
        question: "What is an AI assistant and how can it help my business?",
        answer:
          "An AI assistant is a chatbot trained on your business info. It answers customer questions 24/7, handles bookings, and frees up your team.",
      },
      {
        question: "How much does an AI assistant cost?",
        answer:
          "Setup starts at $3,000 with monthly hosting around $200-500 depending on usage. Most businesses save more in staff time than they spend.",
      },
      {
        question: "Can you help with Google Ads in Farmington?",
        answer:
          "Yes! We manage Google Ads campaigns targeting Farmington and surrounding areas. We focus on high-intent keywords that drive real customers.",
      },
      {
        question: "Do you offer payment plans?",
        answer:
          "Yes! We offer flexible payment options for projects over $5,000. Ask about our plans during your strategy call.",
      },
    ],
  },
}

export default function LocationPage({ params }: { params: { city: string } }) {
  const location = locations[params.city]

  if (!location) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 gradient-hero text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={24} />
              <span className="text-lg">
                {location.name}, {location.state}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Marketing, Websites, and Content Packaging in {location.name}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">{location.description}</p>
          </div>
        </div>
      </section>

      {/* Case Study (if available) */}
      {location.caseStudy && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Featured Work in {location.name}</h2>
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-3">{location.caseStudy.title}</h3>
                <p className="text-lg text-muted-foreground mb-6">{location.caseStudy.result}</p>
                <Button variant="outline" asChild className="bg-transparent">
                  <Link href={`/work/${location.caseStudy.slug}`}>
                    Read case study <ArrowRight className="ml-2" size={16} />
                  </Link>
                </Button>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Services in {location.name}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {location.services.map((service) => (
                <ProofChip key={service} label={service} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {location.faq.map((item, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-lg font-bold mb-2">{item.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Start a project in {location.name}</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Book a free strategy call and discover at least 3 low-lift wins for your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="gradient-hero text-white" asChild>
                  <Link href="/contact">
                    Start a project <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-transparent">
                  <Link href="/strategy-canvas">Try Strategy Canvas</Link>
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>(303) 903-8733</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>creativeflowadvertising@gmail.com</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
