"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { MapPin, Phone, Mail } from "lucide-react"

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void
    }
  }
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    website: "",
    location: "",
    budget: "",
    goal: "",
    timeline: "",
    assets: [] as string[],
    message: "",
    source: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  const toggleAsset = (asset: string) => {
    setFormData((prev) => ({
      ...prev,
      assets: prev.assets.includes(asset) ? prev.assets.filter((a) => a !== asset) : [...prev.assets, asset],
    }))
  }

  const openCalendly = () => {
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({ url: "https://calendly.com/creative-flow-llc/30min" })
    }
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">Let's Talk</h1>
              <p className="text-lg text-black/80 font-semibold">
                Tell us about your project and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="font-bold mb-4 text-black">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="text-primary mt-1" size={20} />
                      <div>
                        <div className="font-semibold text-black">Durango, CO</div>
                        <div className="text-sm text-black/70 font-medium">Serving the Four Corners</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="text-primary mt-1" size={20} />
                      <div>
                        <div className="font-semibold text-black">(303) 903-8733</div>
                        <div className="text-sm text-black/70 font-medium">Mon-Fri 9am-5pm MT</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="text-primary mt-1" size={20} />
                      <div>
                        <div className="font-semibold text-black">creativeflowadvertising@gmail.com</div>
                        <div className="text-sm text-black/70 font-medium">We reply within 24 hours</div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 gradient-accent text-white">
                  <h3 className="font-semibold mb-2">Free Strategy Call</h3>
                  <p className="text-sm text-white/90 mb-4">
                    Book a 15-minute call and we'll outline at least 3 low-lift wins for your business.
                  </p>
                  <Button variant="secondary" className="w-full" onClick={openCalendly}>
                    Schedule Call
                  </Button>
                </Card>
              </div>

              {/* Contact Form */}
              <Card className="lg:col-span-2 p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Email & Company */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Website & Location */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="website">Website</Label>
                      <Input
                        id="website"
                        type="url"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="location">Location *</Label>
                      <Select
                        value={formData.location}
                        onValueChange={(value) => setFormData({ ...formData, location: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select city" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="durango">Durango</SelectItem>
                          <SelectItem value="santa-fe">Santa Fe</SelectItem>
                          <SelectItem value="cortez">Cortez</SelectItem>
                          <SelectItem value="dolores">Dolores</SelectItem>
                          <SelectItem value="bayfield">Bayfield</SelectItem>
                          <SelectItem value="farmington">Farmington</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Budget & Goal */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="budget">Monthly Budget *</Label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) => setFormData({ ...formData, budget: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-5k">Under $5,000</SelectItem>
                          <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                          <SelectItem value="15k-30k">$15,000 - $30,000</SelectItem>
                          <SelectItem value="over-30k">Over $30,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="goal">Top Goal *</Label>
                      <Select
                        value={formData.goal}
                        onValueChange={(value) => setFormData({ ...formData, goal: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select goal" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bookings">More Bookings</SelectItem>
                          <SelectItem value="traffic">More Traffic</SelectItem>
                          <SelectItem value="authority">Build Authority</SelectItem>
                          <SelectItem value="launch">Launch Product</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <Label htmlFor="timeline">Timeline *</Label>
                    <Select
                      value={formData.timeline}
                      onValueChange={(value) => setFormData({ ...formData, timeline: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="When do you want to start?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">ASAP</SelectItem>
                        <SelectItem value="1-month">Within 1 month</SelectItem>
                        <SelectItem value="2-3-months">2-3 months</SelectItem>
                        <SelectItem value="exploring">Just exploring</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Assets */}
                  <div>
                    <Label className="mb-3 block">What assets do you have?</Label>
                    <div className="grid grid-cols-2 gap-3">
                      {["Logo", "Website", "Social Media", "Video", "Photography", "Brand Guidelines"].map((asset) => (
                        <Label
                          key={asset}
                          htmlFor={`asset-${asset}`}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <Checkbox
                            id={`asset-${asset}`}
                            checked={formData.assets.includes(asset)}
                            onCheckedChange={() => toggleAsset(asset)}
                          />
                          <span className="text-sm">{asset}</span>
                        </Label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message">Tell us about your project</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="What challenges are you facing? What are you hoping to achieve?"
                    />
                  </div>

                  {/* Source */}
                  <div>
                    <Label htmlFor="source">How did you find us?</Label>
                    <Select
                      value={formData.source}
                      onValueChange={(value) => setFormData({ ...formData, source: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="google">Google Search</SelectItem>
                        <SelectItem value="referral">Referral</SelectItem>
                        <SelectItem value="social">Social Media</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" size="lg" className="w-full gradient-hero text-white">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
