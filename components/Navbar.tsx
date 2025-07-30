"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import NotificationDropdown from "./NotificationDropdown"

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
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
              <Image src="/pawpool-logo.png" alt="PawPool Logo" width={32} height={32} />
            </div>
            <span className="text-xl logo-text">
              PawPool
            </span>
          </Link>

          {/* Navigation and Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://pawpool.gitbook.io/docs/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Docs
            </a>
            <Link href="/borrow" className="text-gray-300 hover:text-white transition-colors duration-300">
              Borrow
            </Link>
            <Link href="/lend" className="text-gray-300 hover:text-white transition-colors duration-300">
              Lend
            </Link>
            <NotificationDropdown />
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
              <a 
                href="https://pawpool.gitbook.io/docs/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Docs
              </a>
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
