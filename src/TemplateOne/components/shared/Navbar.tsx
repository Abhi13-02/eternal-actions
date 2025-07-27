"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { NAVIGATION_ITEMS } from "../../constants"
import Image from "next/image"
import { BookACallButton } from "./BookACallButton"

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("hero")
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = ["hero", "benefits", "integrations", "testimonials", "faq"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      window.history.pushState({}, "", href)
    }
    setMenuOpen(false)
  }

  const isHeroSection = activeSection === "hero"

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed sm:top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        isHeroSection ? "w-6xl" : "w-2xl"
      }${isScrolled ? " shadow-md" : ""}`}
    >
      <div className="bg-gray-100 sm:rounded-full px-2 py-1 shadow-blue-400 border-4 border-gray-200 ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Waitify" width={32} height={32} className="w-14 h-14" />
            <span className={`font-semibold text-lg ${isHeroSection ? "text-2xl" : "hidden"}`}>Waitify</span>
          </div>

          {/* Desktop nav items */}
          <div className="hidden md:flex items-center space-x-4">
            {NAVIGATION_ITEMS.map((item) => {
              const sectionId = item.href.replace("#", "")
              const isActive = activeSection === sectionId

              return (
                <motion.button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-white shadow-[0_4px_12px_rgba(59,130,246,0.4)]"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-blue-500 rounded-full shadow-[0_4px_12px_rgba(59,130,246,0.4)]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </motion.button>
              )
            })}
          </div>

          {/* Right side - BookACall button and Mobile menu */}
          <div className="flex items-center space-x-4">
            {/* BookACall Button - visible on desktop */}
            <div className="hidden md:block">
              <BookACallButton isHeroSection={isHeroSection} />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 focus:outline-none text-black"
              >
                {menuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute left-1/2 transform -translate-x-1/2 w-full bg-white rounded-b-3xl p-6 z-40 shadow-xl backdrop-blur-lg border border-white/30 md:hidden">
          <div className="flex flex-col items-center space-y-4">
            {NAVIGATION_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-800 hover:text-blue-600 text-lg font-medium"
              >
                {item.label}
              </button>
            ))}
            {/* Mobile BookACall Button */}
            <div className="mt-4">
              <BookACallButton isHeroSection={true} />
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  )
}
