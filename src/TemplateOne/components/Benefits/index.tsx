"use client"

import type React from "react"
import { motion } from "framer-motion"
import { BENEFITS_DATA } from "../../constants"
import { SectionBadge } from "../shared/SectionBadge"
import { SectionHeading } from "../shared/SectionHeading"
import { BenefitCard } from "./BenefitCard"

export const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <SectionBadge>Benefits</SectionBadge>
          <SectionHeading>
            Why <span className="text-blue-500">Choose Nexora</span>?
          </SectionHeading>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Everything you need to collaborate, create, and scale, all in one place.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {BENEFITS_DATA.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
