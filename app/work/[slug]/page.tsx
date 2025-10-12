import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const caseStudies: Record<
  string,
  {
    title: string
    location: string
    industry: string
    image: string
    problem: string
    approach: string[]
    outcome: string
    results: { label: string; value: string }[]
    testimonial?: { quote: string; author: string; role: string }
  }
> = {
  "diva-diamonds": {
    title: "Diva Diamonds",
    location: "Santa Fe, NM",
    industry: "Jewelry",
    image: "/luxury-jewelry-store-website-design.jpg",
    problem:
      "Diva Diamonds had beautiful jewelry but was invisible in local search. Despite being in the heart of Santa Fe's art district, they were losing customers to competitors who ranked higher on Google.",
    approach: [
      "Conducted comprehensive brand audit and messaging tune-up",
      "Rebuilt information architecture for better user experience",
      "Implemented local SEO strategy with location-specific content",
      "Added structured data and schema markup for rich results",
      "Optimized Google Business Profile with photos and posts",
    ],
    outcome:
      "Within 90 days, Diva Diamonds became the #1 ranked jewelry store in Santa Fe. Website traffic tripled, and phone inquiries increased by 250%. The store now consistently appears in the local 3-pack for high-intent searches.",
    results: [
      { label: "Search Ranking", value: "#1 in Santa Fe" },
      { label: "Traffic Increase", value: "+300%" },
      { label: "Phone Inquiries", value: "+250%" },
      { label: "Time to Results", value: "90 days" },
    ],
    testimonial: {
      quote:
        "Creative Flow transformed our online presence. We went from invisible to the top result in our market. The phone hasn't stopped ringing.",
      author: "Maria Rodriguez",
      role: "Owner, Diva Diamonds",
    },
  },
  "coops-auto-detailing": {
    title: "Coops Auto Detailing",
    location: "Albuquerque, NM",
    industry: "Auto Services",
    image: "/auto-detailing-service-website-modern-design.jpg",
    problem:
      "Coops had a dated website that loaded slowly and didn't work well on mobile. Potential customers were bouncing before they could even see the services offered.",
    approach: [
      "Designed and built a modern, mobile-first website",
      "Optimized performance with image compression and lazy loading",
      "Implemented online booking system for instant appointments",
      "Added before/after photo galleries to showcase work quality",
      "Set up conversion tracking and analytics",
    ],
    outcome:
      "The new website achieved a 95+ performance score and cut load times by 70%. Online bookings doubled within the first month, and the site now ranks in the 90th percentile for local auto detailing sites.",
    results: [
      { label: "Bookings", value: "+200%" },
      { label: "Performance Score", value: "95/100" },
      { label: "Load Time", value: "-70%" },
      { label: "Mobile Traffic", value: "+180%" },
    ],
    testimonial: {
      quote:
        "The new site is night and day. Customers tell us how easy it is to book, and we're getting twice as many appointments as before.",
      author: "Cooper Martinez",
      role: "Owner, Coops Auto Detailing",
    },
  },
  "lowdown-helmets": {
    title: "Lowdown Helmets",
    location: "Durango, CO",
    industry: "Outdoor Gear",
    image: "/outdoor-sports-helmet-brand-website.jpg",
    problem:
      "A new outdoor gear brand needed to establish credibility and launch their e-commerce store in a competitive market dominated by established players.",
    approach: [
      "Developed complete brand identity including logo, colors, and voice",
      "Created brand story that emphasized local craftsmanship and safety",
      "Built Shopify e-commerce site with custom product pages",
      "Designed packaging and marketing materials",
      "Launched with influencer partnerships and content strategy",
    ],
    outcome:
      "Lowdown Helmets successfully launched with a cohesive brand that resonates with outdoor enthusiasts. First-month sales exceeded projections by 40%, and the brand has been featured in three outdoor magazines.",
    results: [
      { label: "Launch Sales", value: "+40% vs target" },
      { label: "Press Features", value: "3 magazines" },
      { label: "Email List", value: "1,200 subscribers" },
      { label: "Social Following", value: "5,000+ followers" },
    ],
  },
  "desert-sun-coffee": {
    title: "Desert Sun Coffee",
    location: "Farmington, NM",
    industry: "Food & Beverage",
    image: "/coffee-shop-website-modern-design.jpg",
    problem:
      "Desert Sun Coffee was spending hours each day answering the same customer questions about hours, menu items, and catering. Staff needed to focus on in-store service.",
    approach: [
      "Built custom AI assistant trained on menu, hours, and policies",
      "Integrated chatbot on website and social media",
      "Set up automated responses for common inquiries",
      "Created escalation path for complex questions",
      "Monitored and refined responses based on customer feedback",
    ],
    outcome:
      "The AI assistant now handles 60% of customer inquiries automatically, freeing up staff time and providing instant answers 24/7. Customer satisfaction scores increased as response times dropped from hours to seconds.",
    results: [
      { label: "Support Reduction", value: "-60%" },
      { label: "Response Time", value: "Instant" },
      { label: "Customer Satisfaction", value: "+35%" },
      { label: "After-Hours Inquiries", value: "100% handled" },
    ],
    testimonial: {
      quote:
        "The AI assistant is like having an extra team member who never sleeps. Our customers love getting instant answers, and we love having more time to focus on making great coffee.",
      author: "James Chen",
      role: "Owner, Desert Sun Coffee",
    },
  },
  "nourish-nutrition": {
    title: "Nourish Nutrition",
    location: "Santa Fe, NM",
    industry: "Health & Wellness",
    image: "/nutrition-wellness-website-design.jpg",
    problem:
      "A nutritionist with great expertise but no time to create consistent content. Social media was sporadic, and the website blog hadn't been updated in months.",
    approach: [
      "Set up content packaging system to repurpose consultation recordings",
      "Created templates for social posts, blog articles, and email newsletters",
      "Established content calendar with automated scheduling",
      "Trained client on quick content capture methods",
      "Implemented analytics to track engagement and refine strategy",
    ],
    outcome:
      "From one 30-minute consultation, Nourish now generates 50+ content pieces per month across all channels. Social media engagement increased 200%, and the email list grew by 400 subscribers in 3 months.",
    results: [
      { label: "Content Output", value: "5x increase" },
      { label: "Social Engagement", value: "+200%" },
      { label: "Email Subscribers", value: "+400" },
      { label: "Time Saved", value: "15 hours/month" },
    ],
    testimonial: {
      quote:
        "I finally have a content system that works with my schedule instead of against it. My audience has grown more in 3 months than in the previous 2 years.",
      author: "Dr. Sarah Williams",
      role: "Founder, Nourish Nutrition",
    },
  },
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = caseStudies[params.slug]

  if (!study) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to all work
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-medium text-primary">{study.location}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">{study.industry}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{study.title}</h1>

              {/* Results Grid */}
              <div className="grid grid-cols-2 gap-4">
                {study.results.map((result, index) => (
                  <Card key={index} className="p-4">
                    <div className="text-2xl font-bold text-primary mb-1">{result.value}</div>
                    <div className="text-sm text-muted-foreground">{result.label}</div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
              <img src={study.image || "/placeholder.svg"} alt={study.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Challenge</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{study.problem}</p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Approach</h2>
            <div className="space-y-4">
              {study.approach.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full gradient-hero text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Results</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{study.outcome}</p>

            {study.testimonial && (
              <Card className="p-8 bg-card">
                <blockquote className="text-xl italic mb-6 leading-relaxed">"{study.testimonial.quote}"</blockquote>
                <div>
                  <div className="font-semibold">{study.testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{study.testimonial.role}</div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Want results like these?</h2>
            <p className="text-xl mb-8 text-white/90">Let's build your custom strategy and start growing.</p>
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
