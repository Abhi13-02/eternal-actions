"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Users, Zap, TrendingUp, Shield, Settings, Link } from "lucide-react"

interface BenefitCardProps {
  icon: string
  title: string
  description: string
  index: number
}

export const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description, index }) => {
  const getIcon = (iconName: string) => {
    const iconProps = { size: 24, className: "text-blue-500" }
    switch (iconName) {
      case "users":
        return <Users {...iconProps} />
      case "zap":
        return <Zap {...iconProps} />
      case "trending-up":
        return <TrendingUp {...iconProps} />
      case "shield":
        return <Shield {...iconProps} />
      case "settings":
        return <Settings {...iconProps} />
      case "link":
        return <Link {...iconProps} />
      default:
        return <Zap {...iconProps} />
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
      className="text-center group"
    >
      {/* Icon Container with 3D Shadow */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.04)] group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.12),0_6px_20px_rgba(0,0,0,0.06)] transition-all duration-300"
      >
        {getIcon(icon)}
      </motion.div>

      {/* Content */}
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  )
}
