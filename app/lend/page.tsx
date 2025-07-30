"use client"

import { useState } from "react"
import { Zap } from "lucide-react"
import CollectionOverviewCard from "@/components/CollectionOverviewCard"
import LoanRequestCard from "@/components/LoanRequestCard"
import LendingDashboardCard from "@/components/LendingDashboardCard"
import LoanDetailModal from "@/components/LoanDetailModal"
import LoanOfferModal from "@/components/LoanOfferModal"

const collections = [
	{
		id: 1,
		name: "GUI Gang",
		logo: "/guigang-logo.png?height=60&width=60",
		pool: "1,200 APT",
		floorPrice: "7 APT",
		lowestAPY: "80%",
		minDuration: "3 days",
		loanDemand: "1,200 APT",
		avgAPY: "80%",
		avgDuration: "3 days",
	},
	{
		id: 2,
		name: "AptoRobos",
		logo: "/aptorobos-logo.png?height=60&width=60",
		pool: "850 APT",
		floorPrice: "14 APT",
		lowestAPY: "140%",
		minDuration: "7 days",
		loanDemand: "850 APT",
		avgAPY: "140%",
		avgDuration: "7 days",
	},
	{
		id: 3,
		name: "The Loonies",
		logo: "/theloonies-logo.jpg?height=60&width=60",
		pool: "2,100 APT",
		floorPrice: "19 APT",
		lowestAPY: "180%",
		minDuration: "3 days",
		loanDemand: "2,100 APT",
		avgAPY: "180%",
		avgDuration: "3 days",
	},
	{
		id: 4,
		name: "Aptos Monkeys",
		logo: "/aptosmonkeys-logo.jpg?height=60&width=60",
		pool: "650 APT",
		floorPrice: "25 APT",
		lowestAPY: "240%",
		minDuration: "5 days",
		loanDemand: "650 APT",
		avgAPY: "240%",
		avgDuration: "5 days",
	},
]

const loanRequests = [
	{
		id: 1,
		nft: {
			name: "GUI Gang #1234",
			image: "/guigang-logo.png?height=200&width=200",
			collection: "GUI Gang",
		},
		requestedAmount: "12 APT",
		apy: "80%",
		duration: "7 days",
		borrower: "0x1234...5678",
	},
	{
		id: 2,
		nft: {
			name: "AptoRobos #567",
			image: "/aptorobos-logo.png?height=200&width=200",
			collection: "AptoRobos",
		},
		requestedAmount: "18 APT",
		apy: "140%",
		duration: "14 days",
		borrower: "0x8765...4321",
	},
	{
		id: 3,
		nft: {
			name: "The Loonies #890",
			image: "/theloonies-logo.jpg?height=200&width=200",
			collection: "The Loonies",
		},
		requestedAmount: "6 APT",
		apy: "180%",
		duration: "3 days",
		borrower: "0x9876...1234",
	},
]

export default function LendPage() {
	const [selectedLoan, setSelectedLoan] = useState<any>(null)
	const [activeTab, setActiveTab] = useState("active")
	const [sortBy, setSortBy] = useState("highest-apy")
	const [isLoanOfferModalOpen, setIsLoanOfferModalOpen] = useState(false)
	const [selectedCollection, setSelectedCollection] = useState<any>(null)

	const handleMakeOffer = (collection: any) => {
		setSelectedCollection(collection)
		setIsLoanOfferModalOpen(true)
	}

	return (
		<div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				{/* Page Header */}
				<div className="text-center mb-12">
					<h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
						Earn APT by Funding NFT-Backed Loans
					</h1>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto">
						Review loan offers backed by NFTs. Fund loans, earn yield, and receive
						NFTs if borrowers default.
					</p>
				</div>

				{/* GUI Boost Promo */}
				<section className="mb-16">
					<div className="glass-card p-8 text-center relative overflow-hidden">
						<div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 animate-pulse" />
						<div className="relative z-10">
							<div className="flex justify-center mb-4">
								<Zap className="w-12 h-12 text-yellow-400 animate-bounce" />
							</div>
							<h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
								Boost Your Lending with $GUI
							</h3>
							<p className="text-gray-300 mb-6 max-w-2xl mx-auto">
								Stake $GUI tokens to get lending priority and earn bonus rewards on
								all your funded loans.
							</p>
							<button className="btn-primary bg-gradient-to-r from-yellow-500 to-blue-600 hover:from-yellow-600 hover:to-blue-700">
								Boost Your Lending
							</button>
						</div>
					</div>
				</section>

				{/* Collections Overview */}
				<section className="mb-16">
					<h2 className="text-2xl font-semibold mb-6 flex items-center">
						<span className="w-2 h-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full mr-3"></span>
						Verified Collections Overview
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{collections.map((collection) => (
							<CollectionOverviewCard
								key={collection.id}
								collection={collection}
								onMakeOffer={() => handleMakeOffer(collection)}
							/>
						))}
					</div>
				</section>

				{/* Filter & Sort Panel */}
				<section className="mb-8">
					<div className="glass-card p-6">
						<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
							<div className="flex flex-wrap gap-4">
								<select className="bg-gray-800 text-white border border-white/10 rounded-xl px-4 py-2 focus:outline-none focus:border-blue-500">
									<option value="">All Collections</option>
									<option value="aptomingos">Aptomingos</option>
									<option value="bruh-bears">Bruh Bears</option>
									<option value="tsunami">Tsunami NFT</option>
								</select>

								<select className="bg-gray-800 text-white border border-white/10 rounded-xl px-4 py-2 focus:outline-none focus:border-blue-500">
									<option value="">APY Range</option>
									<option value="0-5">0-5%</option>
									<option value="5-10">5-10%</option>
									<option value="10-15">10-15%</option>
									<option value="15+">15%+</option>
								</select>

								<select className="bg-gray-800 text-white border border-white/10 rounded-xl px-4 py-2 focus:outline-none focus:border-blue-500">
									<option value="">Duration</option>
									<option value="1-3">1-3 days</option>
									<option value="3-7">3-7 days</option>
									<option value="7-14">7-14 days</option>
									<option value="14+">14+ days</option>
								</select>
							</div>

							<div className="flex items-center space-x-4">
								<span className="text-gray-400 text-sm">Sort by:</span>
								<select
									value={sortBy}
									onChange={(e) => setSortBy(e.target.value)}
									className="bg-gray-800 text-white border border-white/10 rounded-xl px-4 py-2 focus:outline-none focus:border-blue-500"
								>
									<option value="highest-apy">Highest APY</option>
									<option value="shortest-duration">Shortest Duration</option>
									<option value="newest">Newest</option>
									<option value="lowest-amount">Lowest Amount</option>
								</select>
							</div>
						</div>
					</div>
				</section>

				{/* Loan Requests Feed */}
				<section className="mb-16">
					<h2 className="text-2xl font-semibold mb-6 flex items-center">
						<span className="w-2 h-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full mr-3"></span>
						Open Loan Requests
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{loanRequests.map((request) => (
							<LoanRequestCard
								key={request.id}
								request={request}
								onFundLoan={() => setSelectedLoan(request)}
							/>
						))}
					</div>
				</section>

				{/* My Lending Dashboard */}
				<section className="mb-16">
					<h2 className="text-2xl font-semibold mb-6 flex items-center">
						<span className="w-2 h-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full mr-3"></span>
						My Lending Dashboard
					</h2>

					<div className="glass-card p-6">
						<div className="flex space-x-1 mb-6 bg-white/5 rounded-xl p-1">
							{["active", "completed", "defaulted"].map((tab) => (
								<button
									key={tab}
									onClick={() => setActiveTab(tab)}
									className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 capitalize ${
										activeTab === tab
											? "bg-blue-600 text-white"
											: "text-gray-400 hover:text-white hover:bg-white/5"
									}`}
								>
									{tab}
								</button>
							))}
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							<LendingDashboardCard
								nft={{
									name: "GUI Gang #1234",
									image: "/guigang-logo.png?height=200&width=200",
								}}
								loanAmount="12 APT"
								interestEarned="1.2 APT"
								timeLeft="3 days"
								status="active"
							/>
							<LendingDashboardCard
								nft={{
									name: "AptoRobos #567",
									image: "/aptorobos-logo.png?height=200&width=200",
								}}
								loanAmount="18 APT"
								interestEarned="2.8 APT"
								timeLeft="Completed"
								status="completed"
							/>
							<LendingDashboardCard
								nft={{
									name: "The Loonies #890",
									image: "/theloonies-logo.jpg?height=200&width=200",
								}}
								loanAmount="6 APT"
								interestEarned="0.8 APT"
								timeLeft="Defaulted"
								status="defaulted"
							/>
						</div>
					</div>
				</section>

				{/* Loan Detail Modal */}
				{selectedLoan && (
					<LoanDetailModal loan={selectedLoan} onClose={() => setSelectedLoan(null)} />
				)}

				{/* Loan Offer Modal */}
				{isLoanOfferModalOpen && selectedCollection && (
					<LoanOfferModal 
						collection={selectedCollection} 
						onClose={() => {
							setIsLoanOfferModalOpen(false)
							setSelectedCollection(null)
						}} 
					/>
				)}
			</div>
		</div>
	)
}
