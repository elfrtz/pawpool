"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { TrendingUp, Users, Coins } from "lucide-react"

const stats = [
	{ label: "Total Value Locked", value: 1240000, prefix: "$", suffix: "", icon: TrendingUp },
	{ label: "Active Loan Value", value: 500000, prefix: "$", suffix: "", icon: Coins },
	{ label: "Active Loans", value: 218, prefix: "", suffix: "", icon: Users },
]

const AnimatedCounter = ({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) => {
	const [count, setCount] = useState(0)
	const [isAnimating, setIsAnimating] = useState(false)

	useEffect(() => {
		setIsAnimating(true)
		const duration = 2500
		const steps = 100
		const increment = value / steps
		let current = 0

		const timer = setInterval(() => {
			current += increment
			if (current >= value) {
				setCount(value)
				setIsAnimating(false)
				clearInterval(timer)
			} else {
				setCount(Math.floor(current))
			}
		}, duration / steps)

		return () => {
			clearInterval(timer)
			setIsAnimating(false)
		}
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
		<motion.span 
			className="text-4xl md:text-5xl font-bold gradient-text inline-block"
			animate={isAnimating ? { 
				scale: [1, 1.05, 1],
			} : {}}
			transition={{ duration: 0.1, repeat: isAnimating ? Infinity : 0 }}
		>
			{prefix}
			<motion.span
				key={count}
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.3, ease: "easeOut" }}
			>
				{formatNumber(count)}
			</motion.span>
			{suffix}
		</motion.span>
	)
}

export default function StatsSection() {
	return (
		<section className="py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<motion.div 
					className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-center"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.8, staggerChildren: 0.2 }}
					viewport={{ once: true }}
				>
					{stats.map((stat, index) => {
						const IconComponent = stat.icon
						return (
							<motion.div
								key={stat.label}
								className="glass-card glass-card-hover p-10 text-center group relative overflow-hidden"
								initial={{ opacity: 0, y: 80, scale: 0.9 }}
								whileInView={{ opacity: 1, y: 0, scale: 1 }}
								transition={{ 
									duration: 0.8, 
									delay: index * 0.15,
									ease: [0.25, 0.46, 0.45, 0.94]
								}}
								viewport={{ once: true, margin: "-10%" }}
							>
								{/* Subtle background gradient overlay */}
								<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity duration-500 rounded-3xl"></div>
								
								<div className="relative z-10">
									<motion.div 
										className="flex justify-center mb-6"
										whileHover={{ scale: 1.1, rotate: 5 }}
										transition={{ duration: 0.3 }}
									>
										<div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 transition-all duration-500">
											<IconComponent className="w-8 h-8 text-white" />
										</div>
									</motion.div>
									<motion.div 
										className="mb-3"
										initial={{ opacity: 0 }}
										whileInView={{ opacity: 1 }}
										transition={{ delay: index * 0.2 + 0.3 }}
									>
										<AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
									</motion.div>
									<motion.p 
										className="text-gray-300 text-lg font-medium tracking-wide"
										initial={{ opacity: 0 }}
										whileInView={{ opacity: 1 }}
										transition={{ delay: index * 0.2 + 0.4 }}
									>
										{stat.label}
									</motion.p>
								</div>
							</motion.div>
						)
					})}
				</motion.div>
			</div>
		</section>
	)
}
