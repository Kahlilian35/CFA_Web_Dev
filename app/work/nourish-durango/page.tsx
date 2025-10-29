import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NourishCaseStudy() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <Link
            href="/work"
            className="inline-flex items-center text-black/80 hover:text-black mb-8 font-semibold transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Work
          </Link>
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-lg font-bold text-black">Nourish Durango</span>
              <span className="text-black/60">•</span>
              <span className="text-lg text-black/80 font-semibold">Durango, CO</span>
              <span className="text-black/60">•</span>
              <span className="text-lg text-black/80 font-semibold">Food & Wellness</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black text-balance">
              Photo & Video Storytelling That Goes Deeper Than Food
            </h1>
            <p className="text-xl text-black/80 leading-relaxed font-medium">
              Capturing the warmth, care, and community behind a brand that nourishes more than just the body.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-0">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nourish-8-5Uw2kY07lJJ893Jj9UL5YvaHJddqFW.jpg"
              alt="Nourish Durango - Brand Photography"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">The Challenge</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-black/80 leading-relaxed font-medium mb-6">
                Nourish Durango came to us with a clear goal: to tell a story that went deeper than food. Their brand
                wasn't just about healthy meals — it was about connection, care, and community. They wanted visuals that
                reflected their values and captured what makes Nourish unique: real people, real food, and a genuine
                love for wellness.
              </p>
              <p className="text-lg text-black/80 leading-relaxed font-medium">
                The challenge was to create content that communicated the heart of the brand — not just what they do,
                but why they do it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Approach */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">The Approach</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-black/80 leading-relaxed font-medium mb-6">
                We began with story first — not the menu, but the mission. Our team spent time inside the space,
                learning the rhythms of the kitchen, the team dynamics, and the faces behind the brand.
              </p>
              <p className="text-lg text-black/80 leading-relaxed font-medium mb-6">
                Instead of a traditional photo shoot, we built a narrative around the feeling of being there: the warmth
                of a morning prep, the color and texture of fresh ingredients, and the calm joy of serving something
                nourishing.
              </p>
              <p className="text-lg text-black/80 leading-relaxed font-medium">
                Through a mix of photo and cinematic short-form video, we highlighted the why behind the brand —
                sustainability, local sourcing, and care in every detail. Every frame was designed to make viewers feel
                what Nourish stands for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Gallery - Two Column */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nourish-19-zluDCVN1EuTW9a1c9mmBI1wA22IPDu.jpg"
                alt="Nourish Durango - Meal preparation service"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nourish-14-5J2DM0XGAlZSYBoYBCqQpT24qwrju4.jpg"
                alt="Nourish Durango - Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Outcome */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">The Outcome</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-black/80 leading-relaxed font-medium mb-6">
                The final visuals became more than marketing assets — they became the visual identity of Nourish
                Durango. The imagery was used across their website, social media, and print materials, giving the brand
                a unified, heartfelt look that matched its purpose.
              </p>
              <p className="text-lg text-black/80 leading-relaxed font-medium">
                The content connected deeply with their community, helping Nourish stand out as more than just a local
                restaurant — but a brand that truly lives its values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Takeaway */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">The Takeaway</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-black/80 leading-relaxed font-medium">
                For Nourish Durango, storytelling was the ingredient that tied everything together. By capturing
                authenticity through visuals, Creative Flow helped turn their mission into a tangible experience — one
                that their customers could see, feel, and connect with.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Provided */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-black">Services Provided</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 rounded-lg bg-background">
                <h4 className="font-bold text-lg mb-2 text-black">Brand Photography</h4>
                <p className="text-black/80 font-medium">
                  Behind-the-scenes and lifestyle photography capturing the heart of the brand
                </p>
              </div>
              <div className="p-6 rounded-lg bg-background">
                <h4 className="font-bold text-lg mb-2 text-black">Video Production</h4>
                <p className="text-black/80 font-medium">
                  Cinematic short-form video content for social media and marketing
                </p>
              </div>
              <div className="p-6 rounded-lg bg-background">
                <h4 className="font-bold text-lg mb-2 text-black">Content Strategy</h4>
                <p className="text-black/80 font-medium">
                  Story-first approach focused on mission, values, and community connection
                </p>
              </div>
              <div className="p-6 rounded-lg bg-background">
                <h4 className="font-bold text-lg mb-2 text-black">Visual Identity</h4>
                <p className="text-black/80 font-medium">
                  Cohesive visual system for website, social media, and print materials
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Ready to tell your brand's story?</h2>
            <p className="text-xl mb-8 text-black/80 font-medium">
              Let's create visual content that connects with your audience and brings your mission to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Start your project <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                asChild
              >
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
