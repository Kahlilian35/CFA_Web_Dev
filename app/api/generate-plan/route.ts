import { generateText } from "ai"

export const maxDuration = 30

type PlanRequest = {
  goal: string
  timeline: string
  market: string
  cities: string[]
  services: string[]
  budget: string
  teamSize: string
  assets: string[]
}

export async function POST(req: Request) {
  try {
    const data: PlanRequest = await req.json()

    const prompt = `You are an expert marketing strategist. Create a comprehensive, actionable ${data.timeline}-day marketing plan based on the following business context:

PRIMARY GOAL: ${data.goal}
TIMELINE: ${data.timeline} days
MARKET REACH: ${data.market}
TARGET CITIES: ${data.cities.join(", ")}
SERVICES NEEDED: ${data.services.join(", ")}
BUDGET RANGE: ${data.budget}
TEAM SIZE: ${data.teamSize}
EXISTING ASSETS: ${data.assets.join(", ")}

Create a detailed plan with the following sections:

1. EXECUTIVE SUMMARY (2-3 sentences summarizing the strategy)

2. WEEKLY BREAKDOWN (divide the ${data.timeline} days into weekly phases with specific, actionable tasks)

3. RECOMMENDED CHANNELS (list 4-6 marketing channels with brief rationale for each based on the goal and market)

4. KEY PERFORMANCE INDICATORS (list 5-7 specific, measurable KPIs with realistic target numbers based on industry benchmarks)

5. QUICK WINS (3-4 immediate actions they can take in the first week)

6. BUDGET ALLOCATION (suggest percentage breakdown across channels based on their budget range)

7. RISK MITIGATION (2-3 potential challenges and how to address them)

Make the plan specific to their goal of "${data.goal}" and tailored to a ${data.market} market. Use industry best practices and be concrete with numbers and timelines. Format the response in clear sections with bullet points.`

    const { text } = await generateText({
      model: "openai/gpt-4o",
      prompt,
      maxTokens: 3000,
      temperature: 0.7,
    })

    return Response.json({ plan: text })
  } catch (error) {
    console.error("[v0] Error generating plan:", error)
    return Response.json({ error: "Failed to generate plan" }, { status: 500 })
  }
}
