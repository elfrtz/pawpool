import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Liqxos - Make Your NFTs Liquid",
  description: "Borrow APT against your Aptos NFTs. Fully on-chain, no middlemen, no selling.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <div className="relative">
          <div className="fixed inset-0 bg-gradient-to-br from-blue-900/20 via-black to-blue-800/10 pointer-events-none" />
          <Navbar />
          <main className="relative z-10">{children}</main>
        </div>
      </body>
    </html>
  )
}
