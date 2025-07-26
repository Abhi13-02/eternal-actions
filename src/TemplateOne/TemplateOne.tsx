"use client"

import type React from "react"
import { Navbar } from "./components/shared/Navbar"
import { Hero } from "./components/Hero"
import { Benefits } from "./components/Benefits"
import { Integrations } from "./components/Integrations"
import { Testimonials } from "./components/Testimonials"
import { FAQ } from "./components/FAQ"
import { Footer } from "./components/shared/Footer"

const TemplateOne: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Integrations />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default TemplateOne
