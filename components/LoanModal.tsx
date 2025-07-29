"use client"

import { useState } from "react"
import { X, Info } from "lucide-react"
import Image from "next/image"

interface NFT {
  id: number
  name: string
  image: string
  tokenId: string
  floorPrice: string
  collection: string
}

export default function LoanModal({ nft, onClose }: { nft: NFT; onClose: () => void }) {
  const [loanAmount, setLoanAmount] = useState("")
  const [duration, setDuration] = useState("7d")
  const [interestRate, setInterestRate] = useState(10)
  const [useGUI, setUseGUI] = useState(false)

  const handleSubmit = () => {
    // Handle loan request submission
    console.log("Loan request submitted:", { nft, loanAmount, duration, interestRate, useGUI })
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="glass-card max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-white">Request Loan</h2>

        <div className="flex items-center space-x-4 mb-6 p-4 bg-white/5 rounded-xl">
          <Image src={nft.image || "/placeholder.svg"} alt={nft.name} width={60} height={60} className="rounded-lg" />
          <div>
            <h3 className="font-semibold text-white">{nft.name}</h3>
            <p className="text-sm text-gray-400">Floor: {nft.floorPrice}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Loan Amount (APT)</label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              placeholder="Enter amount"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Loan Duration</label>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
            >
              <option value="3d">3 days</option>
              <option value="7d">7 days</option>
              <option value="14d">14 days</option>
              <option value="30d">30 days</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Interest Rate: {interestRate}%</label>
            <input
              type="range"
              min="5"
              max="25"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>5%</span>
              <span>25%</span>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
            <input
              type="checkbox"
              id="useGUI"
              checked={useGUI}
              onChange={(e) => setUseGUI(e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-transparent border-2 border-blue-500 rounded focus:ring-blue-500"
            />
            <label htmlFor="useGUI" className="text-sm text-white flex items-center">
              <Info className="w-4 h-4 mr-2 text-blue-400" />
              Repay with $GUI and save 20%
            </label>
          </div>
        </div>

        <button onClick={handleSubmit} className="w-full btn-primary mt-6">
          Submit Loan Request
        </button>
      </div>
    </div>
  )
}
