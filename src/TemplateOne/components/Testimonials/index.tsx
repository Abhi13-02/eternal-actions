"use client"

import type React from "react"
import { motion } from "framer-motion"
import { TESTIMONIALS_DATA } from "../../constants"
import { SectionBadge } from "../shared/SectionBadge"
import { SectionHeading } from "../shared/SectionHeading"
import { TestimonialCard } from "./TestimonialCard"

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <SectionBadge>Testimonials</SectionBadge>
          <SectionHeading>
            What <span className="text-blue-500">Our Early Users</span> Are Saying
          </SectionHeading>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what users think about Nexora.
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TESTIMONIALS_DATA.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
