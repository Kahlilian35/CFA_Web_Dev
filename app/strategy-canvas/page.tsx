"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, ArrowLeft, Download, Calendar, CheckCircle2, Loader2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

type FormData = {
  goal: string
  timeline: string
  market: string
  cities: string[]
  services: string[]
  budget: string
  teamSize: string
  assets: string[]
  email?: string
}

export default function StrategyCanvasPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    goal: "",
    timeline: "",
    market: "",
    cities: [],
    services: [],
    budget: "",
    teamSize: "",
    assets: [],
  })
  const [showResults, setShowResults] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [aiPlan, setAiPlan] = useState<string>("")

  const totalSteps = 5

  const handleNext = async () => {
    if (step < totalSteps) {
      setStep(step + 1)
    } else {
      setIsGenerating(true)
      try {
        const response = await fetch("/api/generate-plan", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        })
        const data = await response.json()
        setAiPlan(data.plan)
        setShowResults(true)
      } catch (error) {
        console.error("[v0] Failed to generate plan:", error)
        setShowResults(true)
      } finally {
        setIsGenerating(false)
      }
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const toggleArrayItem = (field: "cities" | "services" | "assets", value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value) ? prev[field].filter((item) => item !== value) : [...prev[field], value],
    }))
  }

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.goal && formData.timeline
      case 2:
        return formData.market && formData.cities.length > 0
      case 3:
        return formData.services.length > 0
      case 4:
        return formData.budget && formData.teamSize
      default:
        return true
    }
  }

  if (showResults) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-32 pb-20">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <CheckCircle2 className="text-primary" size={32} />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Your Custom Strategy Plan</h1>
                <p className="text-lg text-muted-foreground">
                  AI-powered marketing roadmap tailored to your business goals
                </p>
              </div>

              <Card className="p-8 mb-8 bg-white border-border">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Your Inputs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="font-semibold text-foreground">Primary Goal:</span>{" "}
                    <span className="text-muted-foreground capitalize">{formData.goal}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Timeline:</span>{" "}
                    <span className="text-muted-foreground">{formData.timeline} days</span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Market:</span>{" "}
                    <span className="text-muted-foreground capitalize">{formData.market}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Budget:</span>{" "}
                    <span className="text-muted-foreground">{formData.budget}</span>
                  </div>
                  <div className="md:col-span-2">
                    <span className="font-semibold text-foreground">Target Cities:</span>{" "}
                    <span className="text-muted-foreground">{formData.cities.join(", ")}</span>
                  </div>
                  <div className="md:col-span-2">
                    <span className="font-semibold text-foreground">Services:</span>{" "}
                    <span className="text-muted-foreground">{formData.services.join(", ")}</span>
                  </div>
                </div>
              </Card>

              {aiPlan && (
                <Card className="p-8 mb-8 bg-white border-border">
                  <h2 className="text-2xl font-bold mb-6 text-foreground">AI-Generated Strategy</h2>
                  <div className="prose prose-sm max-w-none">
                    <div className="whitespace-pre-wrap text-foreground leading-relaxed">{aiPlan}</div>
                  </div>
                </Card>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white flex-1" asChild>
                  <a href="/contact">
                    <Calendar className="mr-2" size={20} />
                    Book a Strategy Call
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="flex-1 border-border bg-transparent">
                  <Download className="mr-2" size={20} />
                  Download PDF
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">Strategy Canvas</h1>
              <p className="text-lg text-black/80 font-semibold">
                Answer a few questions to get your AI-powered marketing plan
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-12">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-semibold text-black">
                  Step {step} of {totalSteps}
                </span>
                <span className="text-sm text-black/70 font-medium">
                  {Math.round((step / totalSteps) * 100)}% complete
                </span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: `${(step / totalSteps) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Form Steps */}
            <Card className="p-8 bg-white border-border">
              <AnimatePresence mode="wait">
                {/* Step 1: Goal & Timeline */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <h2 className="text-2xl font-bold mb-2 text-black">What's your primary goal?</h2>
                      <p className="text-black/70 font-semibold mb-6">Choose the outcome that matters most right now</p>

                      <RadioGroup value={formData.goal} onValueChange={(value) => updateFormData("goal", value)}>
                        <div className="space-y-3">
                          {[
                            { value: "bookings", label: "Bookings", desc: "Get more customers and clients" },
                            { value: "traffic", label: "Traffic", desc: "Increase website visitors" },
                            { value: "authority", label: "Authority", desc: "Build brand recognition" },
                            { value: "launch", label: "Launch", desc: "Get a new product or service to market" },
                          ].map((option) => (
                            <Label
                              key={option.value}
                              htmlFor={option.value}
                              className="flex items-start gap-3 p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                            >
                              <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                              <div>
                                <div className="font-semibold text-black">{option.label}</div>
                                <div className="text-sm text-black/70 font-medium">{option.desc}</div>
                              </div>
                            </Label>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label className="text-base font-bold mb-3 block text-black">Timeline</Label>
                      <RadioGroup
                        value={formData.timeline}
                        onValueChange={(value) => updateFormData("timeline", value)}
                      >
                        <div className="grid grid-cols-3 gap-3">
                          {["30", "60", "90"].map((days) => (
                            <Label
                              key={days}
                              htmlFor={`timeline-${days}`}
                              className="flex items-center justify-center gap-2 p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                            >
                              <RadioGroupItem value={days} id={`timeline-${days}`} />
                              <span className="font-semibold text-black">{days} days</span>
                            </Label>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Market & Geography */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <h2 className="text-2xl font-bold mb-2 text-black">What's your market reach?</h2>
                      <p className="text-black/70 font-semibold mb-6">Define your geographic target</p>

                      <RadioGroup value={formData.market} onValueChange={(value) => updateFormData("market", value)}>
                        <div className="space-y-3">
                          {[
                            { value: "local", label: "Local", desc: "Serving specific cities or regions" },
                            { value: "regional", label: "Regional", desc: "Multi-state or broader area" },
                            { value: "national", label: "National", desc: "Nationwide audience" },
                          ].map((option) => (
                            <Label
                              key={option.value}
                              htmlFor={`market-${option.value}`}
                              className="flex items-start gap-3 p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                            >
                              <RadioGroupItem value={option.value} id={`market-${option.value}`} className="mt-1" />
                              <div>
                                <div className="font-semibold text-black">{option.label}</div>
                                <div className="text-sm text-black/70 font-medium">{option.desc}</div>
                              </div>
                            </Label>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label className="text-base font-bold mb-3 block text-black">
                        Target Cities (select all that apply)
                      </Label>
                      <div className="grid grid-cols-2 gap-3">
                        {["Durango", "Santa Fe", "Cortez", "Dolores", "Bayfield", "Farmington", "Other"].map((city) => (
                          <Label
                            key={city}
                            htmlFor={`city-${city}`}
                            className="flex items-center gap-2 p-3 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                          >
                            <Checkbox
                              id={`city-${city}`}
                              checked={formData.cities.includes(city)}
                              onCheckedChange={() => toggleArrayItem("cities", city)}
                            />
                            <span className="font-semibold text-black">{city}</span>
                          </Label>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Services */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <h2 className="text-2xl font-bold mb-2 text-black">Which services interest you?</h2>
                      <p className="text-black/70 font-semibold mb-6">Select up to 3 services</p>

                      <div className="space-y-3">
                        {[
                          {
                            value: "Brand Strategy",
                            desc: "Clarify your story, position, and messaging",
                          },
                          {
                            value: "Content Packaging",
                            desc: "Turn one asset into dozens of formats",
                          },
                          {
                            value: "Websites",
                            desc: "Fast, conversion-focused sites",
                          },
                          {
                            value: "Paid Ads",
                            desc: "Targeted campaigns that drive results",
                          },
                          {
                            value: "AI Assistants",
                            desc: "Custom AI tools for your business",
                          },
                        ].map((service) => (
                          <Label
                            key={service.value}
                            htmlFor={`service-${service.value}`}
                            className="flex items-start gap-3 p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                          >
                            <Checkbox
                              id={`service-${service.value}`}
                              checked={formData.services.includes(service.value)}
                              onCheckedChange={() => toggleArrayItem("services", service.value)}
                              disabled={formData.services.length >= 3 && !formData.services.includes(service.value)}
                            />
                            <div>
                              <div className="font-semibold text-black">{service.value}</div>
                              <div className="text-sm text-black/70 font-medium">{service.desc}</div>
                            </div>
                          </Label>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Budget & Team */}
                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <h2 className="text-2xl font-bold mb-2 text-black">Budget & Resources</h2>
                      <p className="text-black/70 font-semibold mb-6">
                        Help us tailor recommendations to your capacity
                      </p>

                      <div className="space-y-6">
                        <div>
                          <Label className="text-base font-bold mb-3 block text-black">Monthly Budget</Label>
                          <RadioGroup
                            value={formData.budget}
                            onValueChange={(value) => updateFormData("budget", value)}
                          >
                            <div className="space-y-3">
                              {[
                                { value: "under-5k", label: "Under $5,000" },
                                { value: "5k-15k", label: "$5,000 - $15,000" },
                                { value: "15k-30k", label: "$15,000 - $30,000" },
                                { value: "over-30k", label: "Over $30,000" },
                              ].map((option) => (
                                <Label
                                  key={option.value}
                                  htmlFor={`budget-${option.value}`}
                                  className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                                >
                                  <RadioGroupItem value={option.value} id={`budget-${option.value}`} />
                                  <span className="font-semibold text-black">{option.label}</span>
                                </Label>
                              ))}
                            </div>
                          </RadioGroup>
                        </div>

                        <div>
                          <Label className="text-base font-bold mb-3 block text-black">Team Size</Label>
                          <RadioGroup
                            value={formData.teamSize}
                            onValueChange={(value) => updateFormData("teamSize", value)}
                          >
                            <div className="grid grid-cols-2 gap-3">
                              {[
                                { value: "solo", label: "Just me" },
                                { value: "small", label: "2-5 people" },
                                { value: "medium", label: "6-20 people" },
                                { value: "large", label: "20+ people" },
                              ].map((option) => (
                                <Label
                                  key={option.value}
                                  htmlFor={`team-${option.value}`}
                                  className="flex items-center gap-2 p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                                >
                                  <RadioGroupItem value={option.value} id={`team-${option.value}`} />
                                  <span className="font-semibold text-black">{option.label}</span>
                                </Label>
                              ))}
                            </div>
                          </RadioGroup>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 5: Existing Assets */}
                {step === 5 && (
                  <motion.div
                    key="step5"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <h2 className="text-2xl font-bold mb-2 text-black">What assets do you already have?</h2>
                      <p className="text-black/70 font-semibold mb-6">Select all that apply</p>

                      <div className="grid grid-cols-2 gap-3">
                        {["Logo", "Website", "Social Media", "Video Footage", "Photography", "Brand Guidelines"].map(
                          (asset) => (
                            <Label
                              key={asset}
                              htmlFor={`asset-${asset}`}
                              className="flex items-center gap-2 p-3 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                            >
                              <Checkbox
                                id={`asset-${asset}`}
                                checked={formData.assets.includes(asset)}
                                onCheckedChange={() => toggleArrayItem("assets", asset)}
                              />
                              <span className="font-semibold text-black">{asset}</span>
                            </Label>
                          ),
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-base font-bold mb-3 block text-black">
                        Email (optional - to save your results)
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email || ""}
                        onChange={(e) => updateFormData("email", e.target.value)}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex gap-4 mt-8 pt-8 border-t border-border">
                {step > 1 && (
                  <Button variant="outline" onClick={handleBack} className="border-border bg-transparent">
                    <ArrowLeft className="mr-2" size={20} />
                    Back
                  </Button>
                )}
                <Button
                  className="bg-primary hover:bg-primary/90 text-white ml-auto"
                  onClick={handleNext}
                  disabled={!canProceed() || isGenerating}
                  size="lg"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="mr-2 animate-spin" size={20} />
                      Generating Plan...
                    </>
                  ) : (
                    <>
                      {step === totalSteps ? "Generate Plan" : "Continue"}
                      <ArrowRight className="ml-2" size={20} />
                    </>
                  )}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
