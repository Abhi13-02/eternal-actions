"use client"

import type React from "react"
import { motion } from "framer-motion"

interface SectionHeadingProps {
  children: React.ReactNode
  className?: string
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ children, className = "" }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 ${className}`}
    >
      {children}
    </motion.h2>
  )
}
