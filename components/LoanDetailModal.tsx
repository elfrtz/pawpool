"use client"

import { X, Shield, Clock, TrendingUp } from "lucide-react"
import Image from "next/image"

interface LoanRequest {
  id: number
  nft: {
    name: string
    image: string
    collection: string
  }
  requestedAmount: string
  apy: string
  duration: string
  borrower: string
}

export default function LoanDetailModal({ loan, onClose }: { loan: LoanRequest; onClose: () => void }) {
  const handleFundLoan = () => {
    // Handle loan funding
    console.log("Funding loan:", loan)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="glass-card max-w-lg w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-white">Loan Details</h2>

        <div className="flex items-center space-x-4 mb-6 p-4 bg-white/5 rounded-xl">
          <Image
            src={loan.nft.image || "/placeholder.svg"}
            alt={loan.nft.name}
            width={80}
            height={80}
            className="rounded-lg"
          />
          <div>
            <h3 className="font-semibold text-white">{loan.nft.name}</h3>
            <p className="text-sm text-gray-400">{loan.nft.collection}</p>
            <p className="text-xs text-gray-500 font-mono mt-1">By {loan.borrower}</p>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
            <span className="text-gray-400">Requested Amount</span>
            <span className="text-white font-semibold text-lg">{loan.requestedAmount}</span>
          </div>

          <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
            <span className="text-gray-400 flex items-center">
              <TrendingUp className="w-4 h-4 mr-2" />
              APY
            </span>
            <span className="text-green-400 font-semibold">{loan.apy}</span>
          </div>

          <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
            <span className="text-gray-400 flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Duration
            </span>
            <span className="text-white font-semibold">{loan.duration}</span>
          </div>
        </div>

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 mb-6">
          <div className="flex items-start space-x-3">
            <Shield className="w-5 h-5 text-blue-400 mt-0.5" />
            <div>
              <h4 className="text-white font-medium mb-1">Secure Escrow</h4>
              <p className="text-sm text-gray-300">
                The NFT is held in a secure smart contract. If the borrower defaults, the NFT automatically transfers to
                you.
              </p>
            </div>
          </div>
        </div>

        <div className="flex space-x-3">
          <button onClick={onClose} className="flex-1 btn-outline">
            Cancel
          </button>
          <button onClick={handleFundLoan} className="flex-1 btn-primary">
            Fund Now
          </button>
        </div>
      </div>
    </div>
  )
}
