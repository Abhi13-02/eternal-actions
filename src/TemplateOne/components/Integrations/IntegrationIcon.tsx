"use client"

import type React from "react"
import { motion } from "framer-motion"

interface IntegrationIconProps {
  name: string
  color: string
  position: React.CSSProperties
  delay: number
}

export const IntegrationIcon: React.FC<IntegrationIconProps> = ({ name, color, position, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.1, y: -5 }}
      className="absolute"
      style={position}
      aria-label={name}
      title={name}
    >
      <div
        className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.12),0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.16),0_6px_20px_rgba(0,0,0,0.08)] transition-all duration-300`}
      >
        <div className="w-6 h-6 bg-white rounded opacity-80"></div>
      </div>
    </motion.div>
  )
}
