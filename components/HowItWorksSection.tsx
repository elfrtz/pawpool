import { Lock, FileText, RefreshCw } from "lucide-react"

const steps = [
  {
    icon: Lock,
    title: "Lock your NFT",
    description: "Your NFT is frozen in your wallet, ensuring it can't be sold or transferred while the loan is active.",
  },
  {
    icon: FileText,
    title: "Set or Accept Loan Terms",
    description: "Define your loan amount, duration, and interest rate, or accept offers from lenders.",
  },
  {
    icon: RefreshCw,
    title: "Repay or Default",
    description: "Repay your loan to unlock your NFT, or let it transfer to the lender if you default.",
  },
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            How PawPool Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Simple, secure, and transparent NFT-backed lending in three easy steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div
                key={step.title}
                className="glass-card glass-card-hover p-8 text-center group relative"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>

                <div className="flex justify-center mb-6 mt-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center group-hover:animate-pulse border border-blue-500/30">
                    <IconComponent className="w-8 h-8 text-blue-400" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4 text-white">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
