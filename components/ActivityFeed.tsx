import { Clock, ExternalLink } from "lucide-react"

const activities = [
  {
    id: 1,
    action: "Aptomingos #82 loaned for 28 APT @ 12%",
    timestamp: "2 minutes ago",
    txHash: "0x1234...5678",
  },
  {
    id: 2,
    action: "Bruh Bear #12 repaid with 14% interest",
    timestamp: "15 minutes ago",
    txHash: "0x8765...4321",
  },
  {
    id: 3,
    action: "Tsunami #33 defaulted — sent to lender",
    timestamp: "1 hour ago",
    txHash: "0x9876...1234",
  },
  {
    id: 4,
    action: "Aptos Monkey #456 loan request created",
    timestamp: "2 hours ago",
    txHash: "0x5432...8765",
  },
]

export default function ActivityFeed() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6 flex items-center">
        <span className="w-2 h-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full mr-3"></span>
        Recent Activity
      </h2>

      <div className="glass-card p-6">
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300"
            >
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <div>
                  <p className="text-white text-sm">{activity.action}</p>
                  <p className="text-gray-400 text-xs flex items-center mt-1">
                    <Clock className="w-3 h-3 mr-1" />
                    {activity.timestamp}
                  </p>
                </div>
              </div>

              <button className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
