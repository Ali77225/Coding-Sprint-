"use client"
import "./globals.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useState, useCallback } from "react"

// XP pour débloquer les musiques
export const MUSIC_UNLOCKS: Record<number, string> = {
  30:  "🎵 Ambiance Study Lo-fi débloquée !",
  60:  "🎵 Musique Classique débloquée !",
  100: "🎵 Soundtrack Épique débloquée !",
}

const XP_PER_LEVEL = 150

export function useXP() {
  const [xp, setXp] = useState(0)
  const [level, setLevel] = useState(1)
  const [unlockedMusic, setUnlockedMusic] = useState<string[]>([])
  const [newUnlock, setNewUnlock] = useState<string | null>(null)

  const addXP = useCallback((amount: number) => {
    setXp(prev => {
      const next = prev + amount

      // Vérifier si une musique est débloquée à ce seuil
      Object.entries(MUSIC_UNLOCKS).forEach(([threshold, music]) => {
        const t = Number(threshold)
        if (prev < t && next >= t) {
          setUnlockedMusic(u => [...u, music])
          setNewUnlock(music)
          setTimeout(() => setNewUnlock(null), 4000)
        }
      })

      // Level up
      if (next >= XP_PER_LEVEL) {
        setLevel(l => l + 1)
        return next - XP_PER_LEVEL
      }

      return next
    })
  }, [])

  return { xp, maxXp: XP_PER_LEVEL, level, addXP, unlockedMusic, newUnlock }
}

// ADD THIS - The actual Layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-[calc(100vh-72px)]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}