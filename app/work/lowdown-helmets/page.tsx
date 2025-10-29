import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function LowdownCaseStudy() {
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
              <span className="text-lg font-bold text-black">Lowdown Helmets</span>
              <span className="text-black/60">•</span>
              <span className="text-lg text-black/80 font-semibold">Aspen, CO</span>
              <span className="text-black/60">•</span>
              <span className="text-lg text-black/80 font-semibold">Outdoor Gear</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black text-balance">
              Visual Storytelling – Photo & Video Production
            </h1>
            <p className="text-xl text-black/80 leading-relaxed font-medium">
              Capturing the heart of a brand through authentic visuals that celebrate riders and the spirit of
              adventure.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-0">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lowdown-12-tbX8UrbGGBxqV0gC1gR2MQbVyxAuyt.jpg"
              alt="Lowdown Helmets - Brand Photography"
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
                Lowdown Helmets came to us with a clear mission: to capture the heart of their brand through visuals
                that went beyond product shots. Their helmets weren't just safety gear — they were a statement of
                lifestyle, individuality, and the thrill of the ride.
              </p>
              <p className="text-lg text-black/80 leading-relaxed font-medium">
                The challenge was to create photo and video content that communicated that story authentically and
                connected with their audience on a human level.
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
                Our team started by immersing ourselves in the brand's culture — understanding the riders, the energy,
                and what "lowdown" truly meant. We developed a content strategy focused on storytelling instead of
                sales.
              </p>
              <p className="text-lg text-black/80 leading-relaxed font-medium mb-6">
                Rather than filming in a studio, we hit the road with their community of riders, capturing unscripted
                moments of adventure, grit, and connection.
              </p>
              <p className="text-lg text-black/80 leading-relaxed font-medium">
                Each shot was designed to evoke a feeling — freedom, adrenaline, and the quiet pride of craftsmanship.
                We used natural light, cinematic movement, and bold color grading to stay true to the brand's raw and
                grounded personality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Gallery 1 - Two Column */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lowdown-10%20%281%29-xLtKxuK2EZ8NPLqgKmlkgGBPoOfF4U.jpg"
                alt="Lowdown Helmets - Blue helmet portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lowdown-33-j18AcrMmgcI0l9jrMHB6ovtqGG8zox.jpg"
                alt="Lowdown Helmets - Action skiing shot"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="aspect-[9/16] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
                <video
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMB_jB0jlr-dYsF8j186F5blbpgLS7KXRBJ3AVFWd.mov"
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="aspect-[9/16] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
                <video
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Reel%202-FqLxe2ZU2BemROm0hhMQ2jXJ4ap7o2.mp4"
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
        </div>
      </section>

      {/* The Outcome */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">The Outcome</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-black/80 leading-relaxed font-medium mb-6">
                The result was a series of photo and video assets that told the Lowdown story — a visual narrative that
                celebrated riders and the spirit of the open road. The content became the foundation for their marketing
                campaigns, website visuals, and social storytelling.
              </p>
              <p className="text-lg text-black/80 leading-relaxed font-medium">
                It wasn't just about showing a product — it was about showing what it feels like to wear one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Takeaway */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">The Takeaway</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-black/80 leading-relaxed font-medium">
                For Lowdown Helmets, storytelling wasn't an add-on — it became the strategy. By focusing on real people
                and real moments, Creative Flow helped the brand express its identity in a way that resonated with
                riders everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Provided */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-black">Services Provided</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 rounded-lg bg-muted/30">
                <h4 className="font-bold text-lg mb-2 text-black">Photo Production</h4>
                <p className="text-black/80 font-medium">
                  On-location lifestyle and action photography capturing authentic brand moments
                </p>
              </div>
              <div className="p-6 rounded-lg bg-muted/30">
                <h4 className="font-bold text-lg mb-2 text-black">Video Production</h4>
                <p className="text-black/80 font-medium">
                  Cinematic video content for marketing campaigns and social media
                </p>
              </div>
              <div className="p-6 rounded-lg bg-muted/30">
                <h4 className="font-bold text-lg mb-2 text-black">Content Strategy</h4>
                <p className="text-black/80 font-medium">
                  Storytelling framework focused on lifestyle and community over product features
                </p>
              </div>
              <div className="p-6 rounded-lg bg-muted/30">
                <h4 className="font-bold text-lg mb-2 text-black">Brand Storytelling</h4>
                <p className="text-black/80 font-medium">
                  Visual narrative development that connects with target audience emotionally
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
              Let's create visual content that connects with your audience and drives results.
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
