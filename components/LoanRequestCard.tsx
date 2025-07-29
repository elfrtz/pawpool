"use client"

import Image from "next/image"
import { Clock, TrendingUp, User } from "lucide-react"

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

export default function LoanRequestCard({ request, onFundLoan }: { request: LoanRequest; onFundLoan: () => void }) {
  return (
    <div className="glass-card glass-card-hover p-4 group">
      <div className="relative mb-4">
        <Image
          src={request.nft.image || "/placeholder.svg"}
          alt={request.nft.name}
          width={200}
          height={200}
          className="w-full h-48 object-cover rounded-xl"
        />
        <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-sm rounded-lg px-2 py-1">
          <span className="text-xs text-white">{request.nft.collection}</span>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <h3 className="font-semibold text-white truncate">{request.nft.name}</h3>

        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm">Requested</span>
          <span className="text-white font-medium">{request.requestedAmount}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm flex items-center">
            <TrendingUp className="w-3 h-3 mr-1" />
            APY
          </span>
          <span className="text-green-400 font-medium">{request.apy}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            Duration
          </span>
          <span className="text-white font-medium">{request.duration}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm flex items-center">
            <User className="w-3 h-3 mr-1" />
            Borrower
          </span>
          <span className="text-white font-mono text-xs">{request.borrower}</span>
        </div>
      </div>

      <button onClick={onFundLoan} className="w-full btn-primary text-sm py-2 group-hover:animate-glow">
        Fund Loan
      </button>
    </div>
  )
}
