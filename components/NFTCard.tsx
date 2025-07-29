"use client"

import Image from "next/image"
import { ExternalLink } from "lucide-react"

interface NFT {
  id: number
  name: string
  image: string
  tokenId: string
  floorPrice: string
  collection: string
}

export default function NFTCard({ nft, onRequestLoan }: { nft: NFT; onRequestLoan: () => void }) {
  return (
    <div className="glass-card glass-card-hover p-4 group">
      <div className="relative mb-4">
        <Image
          src={nft.image || "/placeholder.svg"}
          alt={nft.name}
          width={200}
          height={200}
          className="w-full h-48 object-cover rounded-xl"
        />
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-black/50 backdrop-blur-sm rounded-lg p-2 hover:bg-black/70 transition-colors duration-300">
            <ExternalLink className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <h3 className="font-semibold text-white truncate">{nft.name}</h3>
        <p className="text-sm text-gray-400">{nft.collection}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">Floor Price</span>
          <span className="text-white font-medium">{nft.floorPrice}</span>
        </div>
      </div>

      <button onClick={onRequestLoan} className="w-full btn-primary text-sm py-2">
        Request Loan
      </button>
    </div>
  )
}
