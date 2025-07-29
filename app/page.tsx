"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Twitter, Github, Send, TrendingUp } from "lucide-react"
import StatsSection from "@/components/StatsSection"
import HowItWorksSection from "@/components/HowItWorksSection"
import LiquidBackground from "@/components/LiquidBackground"

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentSection, setCurrentSection] = useState(0)
  const sectionsRef = useRef<HTMLElement[]>([])

  const sections = [
    { id: 'hero', name: 'Hero' },
    { id: 'stats', name: 'Stats' },
    { id: 'how-it-works', name: 'How It Works' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = parseInt(entry.target.getAttribute('data-section') || '0')
            setCurrentSection(sectionIndex)
            
            // Add visible class for content animations
            const content = entry.target.querySelector('.section-content')
            if (content) {
              content.classList.add('visible')
            }
          }
        })
      },
      {
        threshold: 0.5,
        rootMargin: '-10% 0px -10% 0px'
      }
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  // Smooth scroll to section
  const scrollToSection = (index: number) => {
    const section = sectionsRef.current[index]
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Persistent Liquid Background - Always visible */}
      <div className="persistent-background">
        <LiquidBackground />
      </div>

      {/* Scrollable Content Container */}
      <div 
        ref={containerRef}
        className="section-container"
      >
        {/* Hero Section */}
        <section 
          ref={(el) => { if (el) sectionsRef.current[0] = el }}
          data-section="0"
          className="section-snap px-4 sm:px-6 lg:px-8"
        >
          <motion.div 
            className="section-content max-w-7xl mx-auto text-center w-full pt-24"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent leading-tight tracking-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Make Your NFTs Liquid.
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Borrow APT against your Aptos NFTs. Fully on-chain, secure, and trustless.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href="/borrow"
                className="btn-primary flex items-center space-x-3 group text-lg"
              >
                <span>Start Borrowing</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
              <Link
                href="/lend"
                className="btn-outline flex items-center space-x-3 text-lg"
              >
                <span>Start Lending</span>
                <TrendingUp className="w-6 h-6" />
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section 
          ref={(el) => { if (el) sectionsRef.current[1] = el }}
          data-section="1"
          className="section-snap px-4 sm:px-6 lg:px-8"
        >
          <motion.div 
            className="section-content max-w-7xl mx-auto w-full"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-20%" }}
          >
            <StatsSection />
          </motion.div>
        </section>

        {/* How It Works Section */}
        <section 
          ref={(el) => { if (el) sectionsRef.current[2] = el }}
          data-section="2"
          className="section-snap px-4 sm:px-6 lg:px-8"
        >
          <motion.div 
            className="section-content max-w-7xl mx-auto w-full"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-20%" }}
          >
            <HowItWorksSection />
          </motion.div>
        </section>
      </div>

      {/* Vertical Section Navigation */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
        <div className="flex flex-col items-end space-y-6">
          {sections.map((section, index) => (
            <div key={section.id} className="flex items-center group">
              <motion.div
                className="text-right mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: 20, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
              >
                <span className="text-sm text-white/70 font-medium bg-black/30 backdrop-blur-sm px-3 py-1 rounded-lg whitespace-nowrap">
                  {section.name}
                </span>
              </motion.div>
              <button
                onClick={() => scrollToSection(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 relative flex-shrink-0 ${
                  currentSection === index 
                    ? 'bg-blue-500 scale-125 shadow-lg shadow-blue-500/50' 
                    : 'bg-white/30 hover:bg-white/50 hover:scale-110'
                }`}
                aria-label={`Go to ${section.name} section`}
              >
                {currentSection === index && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-blue-400"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
