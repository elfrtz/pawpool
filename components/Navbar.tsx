"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Droplets } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center group-hover:animate-pulse">
              <Droplets className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              Liqxos
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#how-it-works" className="text-gray-300 hover:text-white transition-colors duration-300">
              How it Works
            </Link>
            <Link href="/borrow" className="text-gray-300 hover:text-white transition-colors duration-300">
              Borrow
            </Link>
            <Link href="/lend" className="text-gray-300 hover:text-white transition-colors duration-300">
              Lend
            </Link>
            <button className="btn-primary">Connect Wallet</button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-white/10 pt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link href="#how-it-works" className="text-gray-300 hover:text-white transition-colors duration-300">
                How it Works
              </Link>
              <Link href="/borrow" className="text-gray-300 hover:text-white transition-colors duration-300">
                Borrow
              </Link>
              <Link href="/lend" className="text-gray-300 hover:text-white transition-colors duration-300">
                Lend
              </Link>
              <button className="btn-primary w-full">Connect Wallet</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
