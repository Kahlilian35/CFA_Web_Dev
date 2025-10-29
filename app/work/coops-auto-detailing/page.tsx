import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function CoopsDetailingCaseStudy() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-sm font-bold text-black/80">Rio Rancho, New Mexico</span>
              <span className="text-black/60">•</span>
              <span className="text-sm font-bold text-black/80">Auto Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black">Coop's Auto Detailing</h1>
            <p className="text-xl md:text-2xl text-black/80 leading-relaxed font-medium mb-8">
              From local secret to top-ranked detailing service — booked out for two months straight
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                <span className="font-bold text-black">90th Percentile Ranking</span>
              </div>
              <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                <span className="font-bold text-black">2 Months Booked</span>
              </div>
              <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                <span className="font-bold text-black">Website + Local SEO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-0">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-29%20at%202.53.47%E2%80%AFPM-VNpFnH90Ffl36XW1XoGIadT5Wceh71.jpg"
              alt="Coop's Auto Detailing luxury car service"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">The Challenge</h2>
            <p className="text-lg text-black/80 leading-relaxed mb-6 font-medium">
              Coop's Detailing had built a strong reputation in Rio Rancho through word-of-mouth and repeat customers —
              but online, the business was almost invisible. With no dedicated website and limited presence on Google,
              new customers had a hard time finding him.
            </p>
            <p className="text-lg text-black/80 leading-relaxed font-medium">
              Coop wanted a simple, professional site that would boost his local visibility and help him stay
              consistently booked without relying solely on referrals.
            </p>
          </div>
        </div>
      </section>

      {/* The Approach */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">The Approach</h2>
            <p className="text-lg text-black/80 leading-relaxed mb-8 font-medium">
              Creative Flow Advertising built a modern, mobile-optimized website that told Coop's story — honest,
              hardworking, and built on quality service. We paired that with a focused local SEO strategy designed to
              capture search traffic from Rio Rancho and the surrounding area.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-black mb-1">Local Keyword Optimization</p>
                  <p className="text-black/80 font-medium">
                    Optimizing on-page content for high-intent local keywords (like "car detailing Rio Rancho" and
                    "mobile auto detailing near me")
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-black mb-1">Google Business Profile Enhancement</p>
                  <p className="text-black/80 font-medium">
                    Setting up and enhancing his Google Business Profile with accurate info, visuals, and regular
                    updates
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-black mb-1">Local Authority Building</p>
                  <p className="text-black/80 font-medium">
                    Building local backlinks and listings to increase authority and search visibility
                  </p>
                </div>
              </div>
            </div>

            <p className="text-lg text-black/80 leading-relaxed font-medium">
              Every part of the site — from structure to copy — was created to convert casual browsers into booked
              customers, while keeping the look and tone true to Coop's brand.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black">
              Professional Service, Premium Results
            </h2>

            {/* Services Overview Image */}
            <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-29%20at%202.55.34%E2%80%AFPM-0NHDMDBNxWpbaZoid44FMXJ0BVFny9.jpg"
                alt="Coop's Auto Detailing service packages"
                className="w-full h-auto"
              />
            </div>

            {/* Photo Collage */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Q1Q4CtxLSgUiLt1UOi4zwzy4K7oq9E.jpg"
                alt="Coop's Auto Detailing work showcase"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Outcome */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">The Outcome</h2>
            <p className="text-lg text-black/80 leading-relaxed mb-6 font-medium">
              Within a short time after launch, Coop's Detailing saw a major jump in local search performance — ranking
              in the <span className="font-bold text-primary">90th percentile of Rio Rancho businesses</span> for local
              web visibility.
            </p>
            <p className="text-lg text-black/80 leading-relaxed font-medium">
              That visibility turned into action: Coop's calendar filled fast, and before long, he was{" "}
              <span className="font-bold text-primary">booked out for two full months</span>, driven primarily by new
              customers who found him online for the first time.
            </p>
          </div>
        </div>
      </section>

      {/* The Takeaway */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">The Takeaway</h2>
            <p className="text-lg text-black/80 leading-relaxed mb-6 font-medium">
              For Coop's Detailing, the difference was visibility. With a website built for his audience and optimized
              for his market, Coop went from being a local secret to a top-ranked detailing service in Rio Rancho.
            </p>
            <p className="text-lg text-black/80 leading-relaxed font-medium">
              Creative Flow helped him transform digital presence into steady growth — proof that when your story is
              easy to find, business follows.
            </p>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black">Services Delivered</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                <h3 className="text-xl font-bold mb-4 text-black">Website Design</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-black/80 font-medium">Mobile-optimized design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-black/80 font-medium">Service showcase pages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-black/80 font-medium">Online booking integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-black/80 font-medium">Brand storytelling</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                <h3 className="text-xl font-bold mb-4 text-black">Local SEO Strategy</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-black/80 font-medium">Keyword research & optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-black/80 font-medium">Google Business Profile setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-black/80 font-medium">Local directory listings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-black/80 font-medium">Backlink building</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Ready to grow your local business?</h2>
            <p className="text-xl mb-8 text-black/80 font-medium">
              Let's build a website and SEO strategy that brings customers to your door.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Start your project <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/work">View more work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
