import Image from "next/image"
import { Clock, TrendingUp } from "lucide-react"

export interface LendingDashboard {
  nft: {
    name: string
    image: string
  }
  loanAmount: string
  interestEarned: string
  timeLeft: string
  status: "active" | "completed" | "defaulted"
}

const statusColors = {
  active: "bg-green-500/20 text-green-400 border-green-500/30",
  completed: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  defaulted: "bg-red-500/20 text-red-400 border-red-500/30",
}

export default function LendingDashboardCard({ nft, loanAmount, interestEarned, timeLeft, status }: LendingDashboard) {
  return (
    <div className="glass-card glass-card-hover p-4">
      <div className="flex items-center space-x-3 mb-4">
        <Image src={nft.image || "/placeholder.svg"} alt={nft.name} width={48} height={48} className="rounded-lg" />
        <div className="flex-1">
          <h3 className="font-semibold text-white text-sm">{nft.name}</h3>
          <span className={`inline-block px-2 py-1 rounded-lg text-xs border ${statusColors[status]} capitalize`}>
            {status}
          </span>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm">Loan Amount</span>
          <span className="text-white font-medium">{loanAmount}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm flex items-center">
            <TrendingUp className="w-3 h-3 mr-1" />
            Interest Earned
          </span>
          <span className="text-green-400 font-medium">{interestEarned}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            Time Left
          </span>
          <span className="text-white font-medium">{timeLeft}</span>
        </div>
      </div>

      {status === "active" && <button className="w-full btn-outline text-sm py-2">View Details</button>}

      {status === "completed" && <button className="w-full btn-primary text-sm py-2">Withdraw Funds</button>}

      {status === "defaulted" && <button className="w-full btn-primary text-sm py-2">Claim NFT</button>}
    </div>
  )
}
