import Image from "next/image"
import { TrendingUp, Clock, Coins } from "lucide-react"

interface Collection {
  id: number
  name: string
  logo: string
  pool: string
  floorPrice: string
  lowestAPY: string
  minDuration: string
}

export default function NFTCollectionCard({ collection }: { collection: Collection }) {
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
            <Coins className="w-4 h-4 mr-1" />
            Pool
          </span>
          <span className="text-white font-medium">{collection.pool}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm flex items-center">
            <TrendingUp className="w-4 h-4 mr-1" />
            Floor Price
          </span>
          <span className="text-white font-medium">{collection.floorPrice}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm">Lowest APY</span>
          <span className="text-green-400 font-medium">{collection.lowestAPY}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            Min Duration
          </span>
          <span className="text-white font-medium">{collection.minDuration}</span>
        </div>
      </div>
    </div>
  )
}
