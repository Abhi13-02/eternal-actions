"use client"

import type React from "react"
import { motion } from "framer-motion"

interface BookACallButtonProps {
  isHeroSection: boolean
}

export const BookACallButton: React.FC<BookACallButtonProps> = ({ isHeroSection }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative overflow-hidden group transition-all duration-500 ease-in-out
        ${isHeroSection 
          ? "px-6 py-2 rounded-full" 
          : "w-10 h-10 rounded-full"
        }
        bg-white border-2 border-gray-200 hover:bg-blue-500 hover:border-blue-500
        shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_24px_rgba(59,130,246,0.3)]
        flex items-center justify-center
      `}
    >
      {/* Phone Icon - always present but positioned differently */}
      <motion.div
        className="text-gray-700 group-hover:text-white transition-colors duration-300"
        animate={{
          x: isHeroSection ? 0 : 0,
          opacity: 1
        }}
        transition={{ duration: 0.3 }}
      >
        <svg 
          className="w-5 h-5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      </motion.div>

      {/* Text - only visible when expanded */}
      {isHeroSection && (
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.3 }}
          className="ml-2 text-sm font-medium text-gray-700 group-hover:text-white"
        >
          Book a call
        </motion.span>
      )}

      {/* Hover effect background */}
      <motion.div
        className="absolute inset-0 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ zIndex: -1 }}
      />
    </motion.button>
  )
} 