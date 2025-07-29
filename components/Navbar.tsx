"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isConnected, setIsConnected] = useState(false)

  const handleWalletClick = () => {
    setIsConnected(!isConnected)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Navigation */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="w-8 h-8">
              <Image src="/pawpool-logo.png" alt="PawPool Logo" width={32} height={32} />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              PawPool
            </span>
          </Link>

          {/* Navigation and Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/borrow" className="text-gray-300 hover:text-white transition-colors duration-300">
              Borrow
            </Link>
            <Link href="/lend" className="text-gray-300 hover:text-white transition-colors duration-300">
              Lend
            </Link>
            <button className="text-gray-300 hover:text-white transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <button
              onClick={handleWalletClick}
              className={`btn-primary ${isConnected ? 'bg-yellow-500 text-black hover:bg-yellow-600' : ''}`}
            >
              {isConnected ? 'Connected Wallet' : 'Connect Wallet'}
            </button>
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
