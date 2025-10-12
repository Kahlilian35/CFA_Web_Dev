"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, BookOpen } from "lucide-react"

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void
    }
  }
}

export default function LocalSEOChecklistPage() {
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
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <BookOpen size={24} />
              <span className="text-sm font-semibold uppercase tracking-wide">Playbook</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Local SEO Checklist for Four Corners Businesses
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90">
              <span>October 12, 2025</span>
              <span>•</span>
              <span>PDF Download</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-xl leading-relaxed text-black/80 font-medium">
              If you run a small business in the Four Corners region – be it a cozy café in Durango, a gallery in
              Cortez, or a tour service in Farmington – local SEO is the key to being found by nearby customers. Local
              SEO (Search Engine Optimization) is all about making your business show up when people search "[business
              type] near me" or "[service] in [town]".
            </p>
            <p className="text-lg leading-relaxed text-black/70 font-medium mt-6">
              And here's why it matters: 4 in 5 consumers use search engines to find local information, and a whopping
              88% of mobile local searches lead to a visit or call within a day. That means if someone in Durango
              searches "best bike shop near me," you want to be the one they see – and visit minutes later.
            </p>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black">
              Local SEO Checklist: 10 Steps to Get Found in Your Community
            </h2>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-black">
                      1. Claim and Optimize Your Google Business Profile
                    </h3>
                    <p className="text-black/70 font-medium leading-relaxed mb-4">
                      This is the #1 step for local SEO success. Claim your free Google Business Profile and fill it out
                      completely. Ensure your business name, address, and phone number are exactly correct (and
                      consistent with what's on your website). Choose the right categories for your business.
                    </p>
                    <p className="text-black/70 font-medium leading-relaxed">
                      <strong>Pro tip:</strong> Upload high-quality photos of your business and products – profiles with
                      photos get more engagement. Regularly post updates (specials, events, blog posts) to your Google
                      profile.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-black">
                      2. Ensure NAP Consistency (Name, Address, Phone)
                    </h3>
                    <p className="text-black/70 font-medium leading-relaxed mb-4">
                      Consistency is crucial: your business Name, Address, Phone number (NAP) must be identical
                      everywhere online. That means the same spelling, abbreviations, and format on your website, Google
                      profile, Yelp, Facebook, Yellow Pages, everywhere.
                    </p>
                    <p className="text-black/70 font-medium leading-relaxed">
                      <strong>Pro tip:</strong> Make a spreadsheet of all places your business is listed and update them
                      whenever something changes. Consistent NAP = stronger trust from Google.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-black">3. Target Local Keywords on Your Website</h3>
                    <p className="text-black/70 font-medium leading-relaxed mb-4">
                      Your website's content should scream "local." Research and include localized keywords that your
                      customers might search. For example: "wedding photographer in Durango", "Farmington NM auto
                      repair", or "best tacos Cortez Colorado".
                    </p>
                    <p className="text-black/70 font-medium leading-relaxed">
                      Sprinkle those terms naturally throughout your site: in page titles, headings, product/service
                      descriptions, and blog posts. Also mention landmarks or neighborhoods if relevant.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-black">
                      4. Create Location-Specific Landing Pages (if applicable)
                    </h3>
                    <p className="text-black/70 font-medium leading-relaxed">
                      If your business serves multiple towns or locations in the Four Corners, consider making a page
                      for each. For example, a home cleaning service might have one page for "Cleaning Services in
                      Durango" and another for "Cleaning Services in Farmington". Each page should have content tailored
                      to that location.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-black">
                      5. List Your Business on Four Corners Directories & Listings
                    </h3>
                    <p className="text-black/70 font-medium leading-relaxed mb-4">
                      Beyond Google, make sure your business is listed on other local and industry directories. For the
                      Four Corners region specifically, there are community resources like the Visit Four Corners
                      business directory that covers Durango, Cortez, Farmington, etc.
                    </p>
                    <p className="text-black/70 font-medium leading-relaxed">
                      Additionally, get on major platforms: Yelp, TripAdvisor, Facebook, Apple Maps, Bing Places,
                      Angie's List, and any niche sites relevant to your industry.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 6 */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-black">6. Encourage and Manage Customer Reviews</h3>
                    <p className="text-black/70 font-medium leading-relaxed mb-4">
                      Local businesses live and die by their reputation – both in the real world and online. Reviews are
                      a huge part of local SEO. Search engines see a steady flow of positive reviews as a signal of
                      trust and quality. Plus, 87% of consumers read online reviews for local businesses before choosing
                      one.
                    </p>
                    <p className="text-black/70 font-medium leading-relaxed">
                      <strong>Tip:</strong> Aim for a steady trickle of new reviews. 5 new reviews this month and 5 next
                      month is better than 10 all at once then silence – consistency looks more natural.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 7 */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-black">
                      7. Optimize Your Website's On-Page SEO for Local
                    </h3>
                    <p className="text-black/70 font-medium leading-relaxed mb-4">
                      Beyond content and keywords, there are a few technical on-page things to check:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-black/70 font-medium">
                      <li>
                        <strong>Title Tags & Meta Descriptions:</strong> Include your business name and location
                      </li>
                      <li>
                        <strong>Header Tags (H1, H2):</strong> Use headings that mention your services and location
                      </li>
                      <li>
                        <strong>Footer NAP:</strong> Put your business name, address, phone in the footer
                      </li>
                      <li>
                        <strong>Embed a Google Map:</strong> Add a map of your location on your contact page
                      </li>
                      <li>
                        <strong>Schema Markup:</strong> Implement LocalBusiness schema for better search visibility
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 8 */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-black">8. Build Local Links (and Relationships)</h3>
                    <p className="text-black/70 font-medium leading-relaxed mb-4">
                      Links back to your site (backlinks) are a classic SEO factor, and for local SEO, local backlinks
                      are especially valuable. Think of it as digital word-of-mouth.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-black/70 font-medium">
                      <li>Join local chambers and organizations</li>
                      <li>Sponsor or participate in community events</li>
                      <li>Send press releases to local news outlets</li>
                      <li>Partner with complementary businesses</li>
                      <li>Create shareable local content</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 9 */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-black">9. Mobile Optimization & Fast Load Times</h3>
                    <p className="text-black/70 font-medium leading-relaxed mb-4">
                      Most local searches happen on mobile devices (think tourists looking for "pizza near me" on their
                      phones). So your website must be mobile-friendly and quick. Make sure your site is responsive and
                      loads fast.
                    </p>
                    <p className="text-black/70 font-medium leading-relaxed">
                      Use tools like Google's Mobile-Friendly Test and PageSpeed Insights to identify issues. A smooth
                      mobile experience can encourage instantaneous actions – like a "Call now" or "Get Directions"
                      click.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 10 */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-black">
                      10. Monitor Your Local SEO and Keep Optimizing
                    </h3>
                    <p className="text-black/70 font-medium leading-relaxed mb-4">
                      SEO isn't one-and-done – especially local SEO. Set up tools to track how you're doing:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-black/70 font-medium">
                      <li>
                        <strong>Google Search Console & Analytics:</strong> Track queries and performance
                      </li>
                      <li>
                        <strong>Google Business Profile Insights:</strong> See how many people viewed your listing
                      </li>
                      <li>
                        <strong>Local Rank Trackers:</strong> Monitor your ranking for specific local keywords
                      </li>
                      <li>
                        <strong>Reviews and Mentions:</strong> Watch for new reviews and respond promptly
                      </li>
                      <li>
                        <strong>Keep Listings Updated:</strong> Update hours, address, and other info as needed
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black">
              Quick-Answer FAQs (Answer Engine Optimized)
            </h2>

            <div className="space-y-6">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-3 text-black">
                  What is local SEO and why does it matter for Four Corners businesses?
                </h3>
                <p className="text-black/70 font-medium leading-relaxed">
                  Local SEO is the process of optimizing your online presence to attract more business from relevant
                  local searches. It's crucial for Four Corners businesses because so many consumers use Google or Maps
                  to find nearby services. If you rank well locally, you get more foot traffic and calls. In fact, 46%
                  of all Google searches have local intent.
                </p>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-3 text-black">
                  How can I improve my local search ranking quickly?
                </h3>
                <p className="text-black/70 font-medium leading-relaxed">
                  Start with your Google Business Profile – claim it, verify it, and fill out every section. Ensure your
                  name, address, phone are consistent across all sites. Get a few fresh 5-star reviews from happy
                  customers. Make sure your website clearly lists your location and has relevant keywords. These are the
                  low-hanging fruits that often yield immediate improvement.
                </p>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-3 text-black">
                  What are the main factors that affect local SEO rankings?
                </h3>
                <p className="text-black/70 font-medium leading-relaxed">
                  Google has three primary factors for local rankings: <strong>Relevance</strong> (how well your listing
                  matches what someone is searching), <strong>Proximity</strong> (how close your business is to the
                  searcher), and <strong>Prominence</strong> (how well-known and trusted your business is through
                  reviews, links, and listings).
                </p>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-3 text-black">What are "Four Corners local listings"?</h3>
                <p className="text-black/70 font-medium leading-relaxed">
                  "Four Corners local listings" refer to online directories and listings specific to the Four Corners
                  region (where Colorado, New Mexico, Arizona, and Utah meet). This includes platforms like
                  VisitFourCorners.com, local chamber of commerce pages, tourism guides, and city-specific directories
                  that help residents and tourists find businesses in Farmington, Cortez, Durango, and surrounding
                  areas.
                </p>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-3 text-black">How does voice search (AEO) change local SEO?</h3>
                <p className="text-black/70 font-medium leading-relaxed">
                  Voice search often uses local intent queries, like "Where is the nearest pizza place?" To optimize for
                  voice – sometimes called Answer Engine Optimization (AEO) – ensure your information is very clear and
                  structured. Have an FAQ on your site answering common questions, keep your Google listing updated, and
                  use natural language keywords. If your general local SEO is strong, you're likely in good shape for
                  voice queries too.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Ready to dominate local search?</h2>
            <p className="text-lg text-black/80 font-semibold mb-8 leading-relaxed">
              By following this checklist, your Four Corners business will be well on its way to dominating local search
              results. Local SEO is your ticket to turning online searches into storefront visits. It might take a bit
              of effort to set up, but the payoff – being the business everyone in town finds first – is well worth it.
            </p>
            <Button size="lg" className="gradient-hero text-white" onClick={openCalendly}>
              Get personalized SEO help <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
