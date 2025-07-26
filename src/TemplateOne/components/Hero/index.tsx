"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { SITE_CONFIG } from "../../constants"

export const Hero: React.FC = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Email submitted:", email)
  }

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto shadow-[0_8px_32px_rgba(59,130,246,0.3),0_4px_16px_rgba(59,130,246,0.2)]">
            <div className="w-8 h-8 bg-white rounded-full"></div>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
            Welcome to <span className="text-blue-500">Nexora</span>
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{SITE_CONFIG.tagline}</h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed"
        >
          {SITE_CONFIG.description}
        </motion.p>

        {/* Waitlist Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Join our waitlist</h3>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">{SITE_CONFIG.waitlistDescription}</p>

          {/* Email Form with 3D Shadow */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-[0_4px_16px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)] focus:shadow-[0_8px_24px_rgba(59,130,246,0.15),0_4px_12px_rgba(59,130,246,0.1)] transition-all duration-300"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 flex items-center justify-center shadow-[0_4px_16px_rgba(34,197,94,0.3),0_2px_8px_rgba(34,197,94,0.2)] hover:shadow-[0_8px_24px_rgba(34,197,94,0.4),0_4px_12px_rgba(34,197,94,0.3)]"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </motion.button>
            </div>
          </form>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 font-medium shadow-[0_4px_16px_rgba(59,130,246,0.2),0_2px_8px_rgba(59,130,246,0.1)] hover:shadow-[0_8px_24px_rgba(59,130,246,0.3),0_4px_12px_rgba(59,130,246,0.2)]"
          >
            Join
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
