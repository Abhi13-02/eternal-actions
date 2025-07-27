"use client"

import type React from "react"
import { motion } from "framer-motion"
import { FAQ_DATA } from "../../constants"
import { SectionBadge } from "../shared/SectionBadge"
import { SectionHeading } from "../shared/SectionHeading"
import { FAQItem } from "./FAQItem"

export const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <SectionBadge>FAQ</SectionBadge>
          <SectionHeading>
            Got Questions? <span className="text-blue-500">We&apos;ve Got Answers.</span>
          </SectionHeading>
          <p className="text-lg text-gray-600 mt-4">Quick, clear answers to help you get started with Nexora.</p>
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
          className="space-y-4"
        >
          {FAQ_DATA.map((faq, index) => (
            <FAQItem key={index} {...faq} index={index} />
          ))}
        </motion.div>

        {/* Integration Logos */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 bg-gray-900 rounded-2xl p-8"
        >
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              { name: "Slack", color: "bg-purple-500" },
              { name: "Notion", color: "bg-green-500" },
              { name: "Figma", color: "bg-red-500" },
              { name: "Google", color: "bg-yellow-500" },
              { name: "Discord", color: "bg-indigo-500" },
              { name: "Zoom", color: "bg-blue-500" },
              { name: "Trello", color: "bg-orange-500" },
              { name: "GitHub", color: "bg-gray-700" },
            ].map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className={`w-12 h-12 ${logo.color} rounded-lg flex items-center justify-center`}
              >
                <div className="w-6 h-6 bg-white rounded opacity-90"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
