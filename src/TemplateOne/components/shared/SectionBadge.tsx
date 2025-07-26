"use client"

import type React from "react"
import { motion } from "framer-motion"

interface SectionBadgeProps {
  children: React.ReactNode
}

export const SectionBadge: React.FC<SectionBadgeProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="inline-block mb-4"
    >
      <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium shadow-[0_4px_12px_rgba(59,130,246,0.15)]">
        {children}
      </span>
    </motion.div>
  )
}
