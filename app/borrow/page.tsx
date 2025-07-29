"use client"

import { useState } from "react"
import { Search, Filter, ChevronDown, ChevronUp } from "lucide-react"
import NFTCollectionCard from "@/components/NFTCollectionCard"
import NFTCard from "@/components/NFTCard"
import LoanModal from "@/components/LoanModal"
import BorrowRequestCard from "@/components/BorrowRequestCard"
import ActivityFeed from "@/components/ActivityFeed"

const collections = [
  {
    id: 1,
    name: "GUI Gang",
    logo: "/guigang-logo.png?height=60&width=60",
    pool: "1,200 APT",
    floorPrice: "7 APT",
    lowestAPY: "80%",
    minDuration: "3 days",
    offers: [
      { id: 1, lender: "0x1234...5678", amount: "12 APT", apy: "80%", duration: "7 days" },
      { id: 2, lender: "0x9876...5432", amount: "10 APT", apy: "100%", duration: "5 days" },
      { id: 3, lender: "0xabcd...efgh", amount: "15 APT", apy: "120%", duration: "10 days" },
    ]
  },
  {
    id: 2,
    name: "AptoRobos",
    logo: "/aptorobos-logo.png?height=60&width=60",
    pool: "850 APT",
    floorPrice: "14 APT",
    lowestAPY: "140%",
    minDuration: "7 days",
    offers: [
      { id: 1, lender: "0x2468...1357", amount: "20 APT", apy: "140%", duration: "14 days" },
      { id: 2, lender: "0x3691...2580", amount: "18 APT", apy: "160%", duration: "7 days" },
    ]
  },
  {
    id: 3,
    name: "The Loonies",
    logo: "/theloonies-logo.jpg?height=60&width=60",
    pool: "2,100 APT",
    floorPrice: "19 APT",
    lowestAPY: "180%",
    minDuration: "3 days",
    offers: [
      { id: 1, lender: "0x5555...9999", amount: "7 APT", apy: "180%", duration: "3 days" },
      { id: 2, lender: "0x7777...3333", amount: "8 APT", apy: "200%", duration: "5 days" },
      { id: 3, lender: "0x1111...8888", amount: "6 APT", apy: "220%", duration: "7 days" },
    ]
  },
  {
    id: 4,
    name: "Aptos Monkeys",
    logo: "/aptosmonkeys-logo.jpg?height=60&width=60",
    pool: "650 APT",
    floorPrice: "25 APT",
    lowestAPY: "240%",
    minDuration: "5 days",
    offers: [
      { id: 1, lender: "0x4444...6666", amount: "16 APT", apy: "240%", duration: "5 days" },
      { id: 2, lender: "0x2222...7777", amount: "17 APT", apy: "260%", duration: "8 days" },
    ]
  },
]

const userNFTs = [
  {
    id: 1,
    name: "GUI Gang #1234",
    image: "/guigang-logo.png?height=200&width=200",
    tokenId: "#1234",
    floorPrice: "15 APT",
    collection: "GUI Gang",
  },
  {
    id: 2,
    name: "AptoRobos #567",
    image: "/aptorobos-logo.png?height=200&width=200",
    tokenId: "#567",
    floorPrice: "22 APT",
    collection: "AptoRobos",
  },
  {
    id: 3,
    name: "The Loonies #890",
    image: "/theloonies-logo.jpg?height=200&width=200",
    tokenId: "#890",
    floorPrice: "8 APT",
    collection: "The Loonies",
  },
  {
    id: 4,
    name: "Aptos Monkeys #456",
    image: "/aptosmonkeys-logo.jpg?height=200&width=200",
    tokenId: "#456",
    floorPrice: "25 APT",
    collection: "Aptos Monkeys",
  },
]

export default function BorrowPage() {
  const [selectedNFT, setSelectedNFT] = useState<any>(null)
  const [activeTab, setActiveTab] = useState("active")
  const [expandedCollection, setExpandedCollection] = useState<number | null>(null)

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Borrow Against Your NFT
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            List your Aptos NFTs as collateral and request APT loans.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Left Column - Main Content */}
          <div className="space-y-16">
            {/* Verified Collections */}
            <section>
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <span className="w-2 h-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full mr-3"></span>
                Verified NFT Collections
              </h2>
              
              <div className="space-y-4">
                {collections.map((collection) => (
                  <div key={collection.id} className="glass-card p-4 rounded-xl">
                    {/* Collection Header */}
                    <div 
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => setExpandedCollection(expandedCollection === collection.id ? null : collection.id)}
                    >
                      <div className="flex items-center space-x-4">
                        <img 
                          src={collection.logo} 
                          alt={collection.name} 
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-white">{collection.name}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <span>Pool: {collection.pool}</span>
                            <span>Floor: {collection.floorPrice}</span>
                            <span>Best APY: {collection.lowestAPY}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-400">{collection.offers.length} offers</span>
                        {expandedCollection === collection.id ? (
                          <ChevronUp className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </div>
                    
                    {/* Dropdown Content */}
                    {expandedCollection === collection.id && (
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <h4 className="text-md font-medium text-white mb-3">Current Lend Offers</h4>
                        <div className="space-y-2">
                          {collection.offers.map((offer) => (
                            <div key={offer.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                              <div className="flex items-center space-x-4">
                                <div className="text-sm">
                                  <p className="text-white font-medium">{offer.lender}</p>
                                  <p className="text-gray-400">Lender</p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-6 text-sm">
                                <div className="text-center">
                                  <p className="text-white font-medium">{offer.amount}</p>
                                  <p className="text-gray-400">Amount</p>
                                </div>
                                <div className="text-center">
                                  <p className="text-white font-medium">{offer.apy}</p>
                                  <p className="text-gray-400">APY</p>
                                </div>
                                <div className="text-center">
                                  <p className="text-white font-medium">{offer.duration}</p>
                                  <p className="text-gray-400">Duration</p>
                                </div>
                                <button className="btn-primary text-sm px-4 py-2">
                                  Select
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Recent Activity */}
          <div>
            <div className="sticky top-24">
              <h2 className="text-xl font-semibold mb-6 flex items-center">
                <span className="w-2 h-6 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full mr-3"></span>
                Recent Activity
              </h2>
              
              <div className="glass-card p-4 space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
                {/* Sample Activity Items */}
                <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                  <img 
                    src="/guigang-logo.png?height=40&width=40" 
                    alt="GUI Gang" 
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">
                      Loan approved for GUI Gang #1234
                    </p>
                    <p className="text-xs text-gray-400">2 minutes ago</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                  <img 
                    src="/aptorobos-logo.png?height=40&width=40" 
                    alt="AptoRobos" 
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">
                      New offer on AptoRobos #567
                    </p>
                    <p className="text-xs text-gray-400">5 minutes ago</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                  <img 
                    src="/theloonies-logo.jpg?height=40&width=40" 
                    alt="The Loonies" 
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">
                      Loan repaid for The Loonies #890
                    </p>
                    <p className="text-xs text-gray-400">1 hour ago</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                  <img 
                    src="/aptosmonkeys-logo.jpg?height=40&width=40" 
                    alt="Aptos Monkeys" 
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">
                      Aptos Monkeys #456 listed
                    </p>
                    <p className="text-xs text-gray-400">3 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NFT Wallet Grid - Full Width */}
        <section className="mt-16">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {userNFTs.map((nft) => (
              <NFTCard key={nft.id} nft={nft} onRequestLoan={() => setSelectedNFT(nft)} />
            ))}
          </div>
        </section>

        {/* My Borrow Requests - Full Width */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <span className="w-2 h-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full mr-3"></span>
            My Borrow Requests
          </h2>

          <div className="glass-card p-6">
            <div className="flex space-x-1 mb-6 bg-white/5 rounded-xl p-1">
              {["all", "active", "matched", "repaid", "defaulted"].map((tab) => (
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {activeTab === "all" || activeTab === "active" ? (
                <BorrowRequestCard
                  nft={{
                    name: "GUI Gang #1234",
                    image: "/guigang-logo.png?height=200&width=200",
                  }}
                  loanAmount="12 APT"
                  apy="80%"
                  duration="7 days"
                  status="active"
                />
              ) : null}
              {activeTab === "all" || activeTab === "matched" ? (
                <BorrowRequestCard
                  nft={{
                    name: "AptoRobos #567",
                    image: "/aptorobos-logo.png?height=200&width=200",
                  }}
                  loanAmount="18 APT"
                  apy="140%"
                  duration="14 days"
                  status="matched"
                />
              ) : null}
              {activeTab === "all" || activeTab === "repaid" ? (
                <BorrowRequestCard
                  nft={{
                    name: "The Loonies #890",
                    image: "/theloonies-logo.jpg?height=200&width=200",
                  }}
                  loanAmount="6 APT"
                  apy="180%"
                  duration="7 days"
                  status="repaid"
                />
              ) : null}
              {activeTab === "all" || activeTab === "defaulted" ? (
                <BorrowRequestCard
                  nft={{
                    name: "Aptos Monkeys #456",
                    image: "/aptosmonkeys-logo.jpg?height=200&width=200",
                  }}
                  loanAmount="17 APT"
                  apy="260%"
                  duration="8 days"
                  status="defaulted"
                />
              ) : null}
            </div>
          </div>
        </section>

        {/* Loan Modal */}
        {selectedNFT && <LoanModal nft={selectedNFT} onClose={() => setSelectedNFT(null)} />}
      </div>
    </div>
  )
}
