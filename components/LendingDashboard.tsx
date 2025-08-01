import { useState } from "react";
import LendingDashboardCard from "./LendingDashboardCard";
import type { LendingDashboard } from "./LendingDashboardCard";

const lendingItems: LendingDashboard[] = [
  {
    nft: { name: "GUI Gang #1234", image: "/guigang-logo.png" },
    loanAmount: "12 APT",
    interestEarned: "1.2 APT",
    timeLeft: "3 days",
    status: "active",
  },
  {
    nft: { name: "AptoRobos #567", image: "/aptorobos-logo.png" },
    loanAmount: "18 APT",
    interestEarned: "2.8 APT",
    timeLeft: "Completed",
    status: "completed",
  },
  {
    nft: { name: "The Loonies #890", image: "/theloonies-logo.jpg" },
    loanAmount: "6 APT",
    interestEarned: "0.8 APT",
    timeLeft: "Defaulted",
    status: "defaulted",
  },
];

export default function LendingDashboard() {
  const [filter, setFilter] = useState("all");

  const filteredItems =
    filter === "all"
      ? lendingItems.sort((a, b) => a.status.localeCompare(b.status))
      : lendingItems.filter((item) => item.status === filter);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">My Lending Dashboard</h1>
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setFilter("all")}
          className={`btn ${filter === "all" ? "btn-primary" : "btn-outline"}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("active")}
          className={`btn ${filter === "active" ? "btn-primary" : "btn-outline"}`}
        >
          Active
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`btn ${filter === "completed" ? "btn-primary" : "btn-outline"}`}
        >
          Completed
        </button>
        <button
          onClick={() => setFilter("defaulted")}
          className={`btn ${filter === "defaulted" ? "btn-primary" : "btn-outline"}`}
        >
          Defaulted
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((item, index) => (
          <LendingDashboardCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
