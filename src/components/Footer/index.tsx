"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#E0D8CC] bg-[#FAFAF8] text-[#8A8070] text-xs">
      <div className="mx-auto flex flex-col gap-2 px-10 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-6">
          <Link href="/archives" className="hover:text-[#C9A227] transition-colors">
            The Archives
          </Link>
          <Link href="/curation-policy" className="hover:text-[#C9A227] transition-colors">
            Curation Policy
          </Link>
          <Link href="/privacy" className="hover:text-[#C9A227] transition-colors">
            Privacy
          </Link>
        </div>

        <div className="text-right">
          Wiki Learn, for knowledge © 2026
        </div>
      </div>
    </footer>
  )
}
