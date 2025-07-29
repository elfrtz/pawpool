import Link from "next/link"
import { ArrowRight, Twitter, Github, Send, TrendingUp } from "lucide-react"
import StatsSection from "@/components/StatsSection"
import HowItWorksSection from "@/components/HowItWorksSection"
import LiquidBackground from "@/components/LiquidBackground"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* 3D Liquid Background */}
        <div className="absolute inset-0 z-0">
          <LiquidBackground />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center relative">
            <div className="relative z-10">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
                Make Your NFTs Liquid.
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Borrow APT against your Aptos NFTs. Fully on-chain, no middlemen, no selling.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/borrow" className="btn-primary flex items-center space-x-2 group">
                  <span>Start Borrowing</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link href="/lend" className="btn-outline flex items-center space-x-2">
                  <span>Start Lending</span>
                  <TrendingUp className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-lg font-semibold">Liqxos</span>
            </div>

            <div className="flex items-center space-x-6 mb-6 md:mb-0">
              <span className="text-sm text-gray-400">Built on Aptos</span>
              <span className="text-sm text-gray-400">•</span>
              <span className="text-sm text-gray-400">Powered by GUI</span>
            </div>

            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="text-center mt-8 pt-8 border-t border-white/10">
            <p className="text-sm text-gray-500 italic">No NFTs were harmed in the making of this site.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
