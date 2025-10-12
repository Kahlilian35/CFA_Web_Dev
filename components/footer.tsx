import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  const services = [
    { label: "Brand Strategy", href: "/services/brand-strategy" },
    { label: "Content Packaging", href: "/services/content-packaging" },
    { label: "Websites", href: "/services/websites" },
    { label: "Paid Ads", href: "/services/paid-ads" },
    { label: "AI Assistants", href: "/services/ai-assistants" },
  ]

  const locations = [
    { label: "Durango", href: "/locations/durango" },
    { label: "Santa Fe", href: "/locations/santa-fe" },
    { label: "Cortez", href: "/locations/cortez" },
    { label: "Dolores", href: "/locations/dolores" },
    { label: "Bayfield", href: "/locations/bayfield" },
    { label: "Farmington", href: "/locations/farmington" },
  ]

  const company = [
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Current", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="Creative Flow" className="h-10 w-auto object-contain" />
              <span className="font-bold text-lg">Creative Flow</span>
            </Link>
            <p className="text-accent-foreground/80 mb-6 leading-relaxed">
              Brand strategy, content packaging, and websites that click into place for the Four Corners region.
            </p>

            {/* Newsletter */}
            <div className="space-y-3">
              <p className="font-semibold text-sm">Subscribe to The Flow Letter</p>
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-accent-foreground/10 border-accent-foreground/20 text-accent-foreground placeholder:text-accent-foreground/50"
                />
                <Button type="submit" variant="secondary">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-accent-foreground/70 hover:text-accent-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-semibold mb-4">Locations</h3>
            <ul className="space-y-2">
              {locations.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-accent-foreground/70 hover:text-accent-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-accent-foreground/70 hover:text-accent-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-accent-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-accent-foreground/70 hover:text-accent-foreground">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-accent-foreground/70 hover:text-accent-foreground">
                Terms
              </Link>
              <Link href="/sitemap.xml" className="text-sm text-accent-foreground/70 hover:text-accent-foreground">
                Sitemap
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-accent-foreground/70 hover:text-accent-foreground transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-accent-foreground/70 hover:text-accent-foreground transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-accent-foreground/70 hover:text-accent-foreground transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-accent-foreground/70 hover:text-accent-foreground transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <p className="text-center text-sm text-accent-foreground/60 mt-6">
            © {new Date().getFullYear()} Creative Flow Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
