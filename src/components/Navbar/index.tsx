"use client"
import Link from "next/link"
import Image from "next/image"
import { User } from "lucide-react"

export default function Navbar() {
  const xp = 120
const maxXp = 150
const level = 1
  const progress = (xp / maxXp) * 100

  return (
    <nav className="w-full h-[72px] bg-[#FAFAF8] border-b border-[#E0D8CC] flex items-center justify-between px-10 sticky top-0 z-50">

      {/* Logo */}
      <Link href="/" className="flex items-center gap-3">
        <Image src="/wikipedia-logo.png" alt="Wikipedia Learn" width={40} height={40} />
        <span className="font-['Playfair_Display'] font-bold uppercase tracking-[0.2em] text-[#1C1A16] text-sm">
          Wikipedia Learn
        </span>
      </Link>

      {/* Nav links */}
      <div className="flex items-center gap-10">
        <Link href="/explore" className="text-[#1C1A16] uppercase tracking-[0.1em] text-[13px] font-medium hover:text-[#C9A227] transition-colors">
          Explore
        </Link>
        <Link href="/library" className="text-[#1C1A16] uppercase tracking-[0.1em] text-[13px] font-medium hover:text-[#C9A227] transition-colors">
          Library
        </Link>
        <Link href="/achievement" className="text-[#1C1A16] uppercase tracking-[0.1em] text-[13px] font-medium hover:text-[#C9A227] transition-colors">
          Achievement
        </Link>
      </div>

      {/* XP + Avatar */}
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-end gap-1">
          <div className="flex gap-4 text-[11px]">
            <span className="text-[#8A8070]">LVL {level}</span>
            <span className="text-[#C9A227] font-medium">XP {xp} / {maxXp}</span>
          </div>
          <div className="w-[120px] h-[4px] bg-[#E0D8CC] rounded-full">
            <div
              className="h-full bg-[#C9A227] rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="w-[40px] h-[40px] border border-[#E0D8CC] flex items-center justify-center cursor-pointer hover:border-[#C9A227] transition-colors">
          <User className="w-5 h-5 text-[#8A8070]" />
        </div>
      </div>

    </nav>
  )
}