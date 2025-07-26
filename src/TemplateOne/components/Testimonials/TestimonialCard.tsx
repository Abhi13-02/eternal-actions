"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Twitter, Instagram } from "lucide-react"

interface TestimonialCardProps {
  name: string
  role: string
  avatar: string
  content: string
  platform: string
  index: number
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, avatar, content, platform, index }) => {
  const getPlatformIcon = () => {
    switch (platform) {
      case "twitter":
        return <Twitter size={16} />
      case "instagram":
        return <Instagram size={16} />
      default:
        return <Twitter size={16} />
    }
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12),0_6px_20px_rgba(0,0,0,0.06)] transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <img src={avatar || "/placeholder.svg"} alt={name} className="w-10 h-10 rounded-full object-cover" />
          <div>
            <h4 className="font-semibold text-gray-900">{name}</h4>
            <p className="text-sm text-gray-600">{role}</p>
          </div>
        </div>
        <div className="text-gray-400 hover:text-gray-600 transition-colors">{getPlatformIcon()}</div>
      </div>

      {/* Content */}
      <p className="text-gray-700 leading-relaxed">"{content}"</p>
    </motion.div>
  )
}
