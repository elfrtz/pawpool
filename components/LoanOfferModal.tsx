"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface LoanOfferModalProps {
  onClose: () => void;
  collection: {
    name: string;
    logo: string;
    floorPrice: string;
  };
}

export default function LoanOfferModal({ onClose, collection }: LoanOfferModalProps) {
  const [loanAmount, setLoanAmount] = useState("");
  const [duration, setDuration] = useState("7d");
  const [interestRate, setInterestRate] = useState(80);

  const handleSubmit = () => {
    console.log("Loan offer submitted:", { 
      collection: collection.name,
      loanAmount, 
      duration, 
      interestRate 
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="glass-card max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex items-center space-x-3 mb-6">
          <img 
            src={collection.logo} 
            alt={collection.name} 
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h2 className="text-2xl font-bold text-white">Make Loan Offer</h2>
            <p className="text-gray-400">{collection.name}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-300 mb-2">Loan Amount (APT)</label>
              <input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                className="w-full bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                placeholder="Enter amount"
              />
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-300 mb-2">Loan Duration</label>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              >
                <option value="3d">3 days</option>
                <option value="7d">7 days</option>
                <option value="14d">14 days</option>
                <option value="30d">30 days</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Interest Rate: {interestRate}%</label>
            <input
              type="range"
              min="80"
              max="260"
              step="20"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>80%</span>
              <span>260%</span>
            </div>
            <p className="text-sm text-gray-300 mt-2">
              Interest (APT): <span className="text-white font-medium">{((Number(loanAmount) * interestRate) / 100).toFixed(2)} APT</span>
            </p>
          </div>
        </div>

        <button onClick={handleSubmit} className="w-full btn-primary mt-6">
          Submit Loan Offer
        </button>
      </div>
    </div>
  );
}
