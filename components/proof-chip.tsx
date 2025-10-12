import type React from "react"
import { cn } from "@/lib/utils"

interface ProofChipProps {
  icon?: React.ReactNode
  label: string
  className?: string
}

export function ProofChip({ icon, label, className }: ProofChipProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-sm",
        className,
      )}
    >
      {icon && <span className="text-primary">{icon}</span>}
      <span className="text-sm font-medium text-foreground">{label}</span>
    </div>
  )
}
