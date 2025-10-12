"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function InteractiveGradient() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsHovering(true)
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  const gradientOpacity = isHomePage ? 1 : 0.35

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-500"
      style={{
        background: isHovering
          ? `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 1), rgba(217, 184, 255, 0.6) 30%, rgba(143, 99, 255, 0.8) 60%, rgba(90, 51, 168, 0.9) 100%)`
          : "radial-gradient(circle at 50% 50%, rgba(217, 184, 255, 0.4), rgba(143, 99, 255, 0.6), rgba(90, 51, 168, 0.8))",
        opacity: gradientOpacity,
      }}
    />
  )
}
