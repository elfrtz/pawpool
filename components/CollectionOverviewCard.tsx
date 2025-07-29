import Image from "next/image"
import { TrendingUp, Clock, Activity } from "lucide-react"

interface Collection {
  id: number
  name: string
  logo: string
  loanDemand: string
  floorPrice: string
  avgAPY: string
  avgDuration: string
}

export default function CollectionOverviewCard({ collection }: { collection: Collection }) {
  return (
    <div className="glass-card glass-card-hover p-6 cursor-pointer group">
      <div className="flex items-center space-x-4 mb-4">
        <Image
          src={collection.logo || "/placeholder.svg"}
          alt={collection.name}
          width={48}
          height={48}
          className="rounded-xl"
        />
        <div>
          <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
            {collection.name}
          </h3>
          <p className="text-sm text-gray-400">Verified Collection</p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm flex items-center">
            <Activity className="w-4 h-4 mr-1" />
            Loan Demand
          </span>
          <span className="text-white font-medium">{collection.loanDemand}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm flex items-center">
            <TrendingUp className="w-4 h-4 mr-1" />
            Floor Price
          </span>
          <span className="text-white font-medium">{collection.floorPrice}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm">Avg APY</span>
          <span className="text-green-400 font-medium">{collection.avgAPY}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            Avg Duration
          </span>
          <span className="text-white font-medium">{collection.avgDuration}</span>
        </div>
      </div>
    </div>
  )
}
