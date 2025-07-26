"use client"

import type React from "react"
import { SectionBadge } from "../shared/SectionBadge"
import { SectionHeading } from "../shared/SectionHeading"
import { IntegrationIcon } from "./IntegrationIcon"

export const Integrations: React.FC = () => {
  const integrations = [
    { name: "Figma", color: "bg-purple-500", position: { top: "20%", left: "50%" } },
    { name: "Linear", color: "bg-blue-600", position: { top: "35%", left: "25%" } },
    { name: "Spark", color: "bg-black", position: { top: "35%", right: "25%" } },
    { name: "Notion", color: "bg-gray-800", position: { top: "55%", left: "15%" } },
    { name: "Time", color: "bg-blue-500", position: { top: "55%", left: "50%" } },
    { name: "Bolt", color: "bg-blue-600", position: { top: "55%", right: "15%" } },
    { name: "Grid", color: "bg-black", position: { top: "75%", left: "35%" } },
    { name: "Globe", color: "bg-purple-600", position: { top: "75%", right: "35%" } },
    { name: "Waves", color: "bg-blue-500", position: { bottom: "10%", left: "50%" } },
  ]

  return (
    <section id="integrations" className="py-20 px-4 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <SectionBadge>Integrations</SectionBadge>
          <SectionHeading>
            <span className="text-blue-500">Everything you need</span>, Talking Together
          </SectionHeading>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Your apps, your workflows, perfectly in sync. Just the way it should be.
          </p>
        </div>

        <div className="relative h-96 max-w-4xl mx-auto">
          {integrations.map((integration, index) => (
            <IntegrationIcon
              key={integration.name}
              name={integration.name}
              color={integration.color}
              position={integration.position}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
