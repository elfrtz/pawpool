"use client"

import { useEffect, useState } from "react"
import { TrendingUp, Users, Coins, Zap } from "lucide-react"

const stats = [
  { label: "Total Value Locked", value: 1240000, prefix: "$", suffix: "", icon: TrendingUp },
  { label: "NFTs Onboarded", value: 354, prefix: "", suffix: "", icon: Coins },
  { label: "Loans Matched", value: 218, prefix: "", suffix: "", icon: Users },
  { label: "Active Lenders", value: 89, prefix: "", suffix: "", icon: Zap },
]

function AnimatedCounter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value])

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(2) + "M"
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K"
    }
    return num.toString()
  }

  return (
    <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div
                key={stat.label}
                className="glass-card glass-card-hover p-8 text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:animate-pulse">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>
                <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                <p className="text-gray-400 mt-2 font-medium">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
