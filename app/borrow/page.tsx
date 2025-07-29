"use client"

import { useState } from "react"
import { Search, Filter } from "lucide-react"
import NFTCollectionCard from "@/components/NFTCollectionCard"
import NFTCard from "@/components/NFTCard"
import LoanModal from "@/components/LoanModal"
import BorrowRequestCard from "@/components/BorrowRequestCard"
import ActivityFeed from "@/components/ActivityFeed"

const collections = [
  {
    id: 1,
    name: "Aptomingos",
    logo: "/placeholder.svg?height=60&width=60",
    pool: "1,200 APT",
    floorPrice: "15 APT",
    lowestAPY: "8.5%",
    minDuration: "3 days",
  },
  {
    id: 2,
    name: "Bruh Bears",
    logo: "/placeholder.svg?height=60&width=60",
    pool: "850 APT",
    floorPrice: "22 APT",
    lowestAPY: "12%",
    minDuration: "7 days",
  },
  {
    id: 3,
    name: "Tsunami NFT",
    logo: "/placeholder.svg?height=60&width=60",
    pool: "2,100 APT",
    floorPrice: "8 APT",
    lowestAPY: "6.2%",
    minDuration: "3 days",
  },
  {
    id: 4,
    name: "Aptos Monkeys",
    logo: "/placeholder.svg?height=60&width=60",
    pool: "650 APT",
    floorPrice: "18 APT",
    lowestAPY: "10.8%",
    minDuration: "5 days",
  },
]

const userNFTs = [
  {
    id: 1,
    name: "Aptomingos #1234",
    image: "/placeholder.svg?height=200&width=200",
    tokenId: "#1234",
    floorPrice: "15 APT",
    collection: "Aptomingos",
  },
  {
    id: 2,
    name: "Bruh Bear #567",
    image: "/placeholder.svg?height=200&width=200",
    tokenId: "#567",
    floorPrice: "22 APT",
    collection: "Bruh Bears",
  },
  {
    id: 3,
    name: "Tsunami #890",
    image: "/placeholder.svg?height=200&width=200",
    tokenId: "#890",
    floorPrice: "8 APT",
    collection: "Tsunami NFT",
  },
]

export default function BorrowPage() {
  const [selectedNFT, setSelectedNFT] = useState<any>(null)
  const [activeTab, setActiveTab] = useState("active")

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Borrow Against Your NFT
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            List your Aptos NFTs as collateral and request APT loans. Assets are held in secure escrow.
          </p>
        </div>

        {/* Verified Collections */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <span className="w-2 h-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full mr-3"></span>
            Verified NFT Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((collection) => (
              <NFTCollectionCard key={collection.id} collection={collection} />
            ))}
          </div>
        </section>

        {/* NFT Wallet Grid */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold flex items-center">
              <span className="w-2 h-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full mr-3"></span>
              Your NFTs
            </h2>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search NFTs..."
                  className="bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
              </div>
              <button className="glass-card p-2 hover:bg-white/10 transition-colors duration-300">
                <Filter className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {userNFTs.map((nft) => (
              <NFTCard key={nft.id} nft={nft} onRequestLoan={() => setSelectedNFT(nft)} />
            ))}
          </div>
        </section>

        {/* My Borrow Requests */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <span className="w-2 h-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full mr-3"></span>
            My Borrow Requests
          </h2>

          <div className="glass-card p-6">
            <div className="flex space-x-1 mb-6 bg-white/5 rounded-xl p-1">
              {["active", "matched", "repaid", "defaulted"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 capitalize ${
                    activeTab === tab ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <BorrowRequestCard
                nft={{
                  name: "Aptomingos #1234",
                  image: "/placeholder.svg?height=200&width=200",
                }}
                loanAmount="12 APT"
                apy="8.5%"
                duration="7 days"
                status="active"
              />
              <BorrowRequestCard
                nft={{
                  name: "Bruh Bear #567",
                  image: "/placeholder.svg?height=200&width=200",
                }}
                loanAmount="18 APT"
                apy="12%"
                duration="14 days"
                status="matched"
              />
            </div>
          </div>
        </section>

        {/* Activity Feed */}
        <ActivityFeed />

        {/* Loan Modal */}
        {selectedNFT && <LoanModal nft={selectedNFT} onClose={() => setSelectedNFT(null)} />}
      </div>
    </div>
  )
}
