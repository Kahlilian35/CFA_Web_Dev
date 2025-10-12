"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export function FourCornersPuzzle() {
  const [isComplete, setIsComplete] = useState(false)

  // Four Corners region outline represented as puzzle tiles
  // Simplified grid representation where 1 = tile, 0 = empty
  const puzzleGrid = [
    [0, 0, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 0, 0],
    [0, 1, 1, 0, 0, 0],
  ]

  // The "missing piece" position (center-right area)
  const missingPiece = { row: 2, col: 4 }

  const handleHover = () => {
    setIsComplete(true)
  }

  const handleLeave = () => {
    setIsComplete(false)
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
      <div className="grid grid-cols-6 gap-2 md:gap-3">
        {puzzleGrid.map((row, rowIndex) =>
          row.map((cell, colIndex) => {
            const isMissingPiece = rowIndex === missingPiece.row && colIndex === missingPiece.col
            const shouldShow = cell === 1

            if (!shouldShow && !isMissingPiece) {
              return <div key={`${rowIndex}-${colIndex}`} className="aspect-square" />
            }

            return (
              <motion.div
                key={`${rowIndex}-${colIndex}`}
                className="aspect-square rounded-lg relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: isMissingPiece && !isComplete ? 0.3 : 1,
                  scale: 1,
                  rotateY: isComplete && isMissingPiece ? [0, 180, 360] : 0,
                  z: isMissingPiece && !isComplete ? 32 : 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: (rowIndex * row.length + colIndex) * 0.03,
                  type: "spring",
                  stiffness: 100,
                }}
                style={{
                  background: isMissingPiece
                    ? "linear-gradient(135deg, rgb(217 184 255) 0%, rgb(143 99 255) 100%)"
                    : "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  boxShadow: isMissingPiece && !isComplete ? "0 8px 32px rgba(143, 99, 255, 0.4)" : "none",
                }}
              >
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/20 to-transparent" />

                {isMissingPiece && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center p-2"
                    animate={{
                      opacity: isComplete ? 1 : 0.5,
                    }}
                  >
                    <img src="/logo.png" alt="Creative Flow Wave" className="w-full h-full object-contain" />
                  </motion.div>
                )}
              </motion.div>
            )
          }),
        )}
      </div>

      <motion.div
        className="absolute top-1/2 left-1/2 w-16 h-16 md:w-20 md:h-20 rounded-lg pointer-events-none overflow-hidden"
        initial={{ x: "-50%", y: "-50%", rotate: 0 }}
        animate={{
          x: isComplete ? "calc(150% + 2rem)" : "-50%",
          y: isComplete ? "calc(-50% + 1rem)" : "-50%",
          rotate: isComplete ? 360 : 0,
          scale: isComplete ? 0.8 : 1,
          opacity: isComplete ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 15,
        }}
        style={{
          background: "linear-gradient(135deg, rgb(217 184 255) 0%, rgb(143 99 255) 100%)",
          boxShadow: "0 8px 32px rgba(143, 99, 255, 0.5)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
      >
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/30 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center p-2">
          <img src="/logo.png" alt="Creative Flow Wave" className="w-full h-full object-contain" />
        </div>
      </motion.div>

      {/* Completion glow effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          opacity: isComplete ? [0, 0.5, 0] : 0,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        style={{
          background: "radial-gradient(circle, rgba(143, 99, 255, 0.3) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />
    </div>
  )
}
