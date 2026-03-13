"use client"
import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { BookOpen, Compass, Trophy, Globe, Search } from "lucide-react"
import { searchWiki } from "../lib/wikipedia"

export default function Home() {
  const router = useRouter()
  const [query, setQuery] = useState("")
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [showInfo, setShowInfo] = useState(false)
  const debounceRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (query.length < 2) { setSuggestions([]); return }
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(async () => {
      const results = await searchWiki(query)
      setSuggestions(results)
      setShowSuggestions(true)
    }, 300)
  }, [query])

  function handleSearch(topic?: string) {
    const q = topic || query
    if (!q.trim()) return
    const slug = q.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")
    router.push(`/explore/${slug}?q=${encodeURIComponent(q)}`)
  }

  return (
    <div className="min-h-screen bg-[#F5F0E8] flex flex-col">

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-8 py-20">
        <div className="w-20 h-20 rounded-full bg-[#F5EDD6] flex items-center justify-center mb-8">
          <BookOpen className="w-9 h-9 text-[#C9A227]" />
        </div>
        <h1 className="font-['Playfair_Display'] font-bold text-7xl text-[#1C1A16] mb-4">
          Wikipedia Learn
        </h1>
        <p className="text-[#8A8070] font-light text-lg max-w-md mb-10 leading-relaxed">
          Explorez la connaissance encyclopédique à travers des parcours interactifs et gamifiés.
        </p>

        {/* Barre de recherche */}
        <div className="relative w-full max-w-xl mb-4">
          <div className="flex items-center bg-[#C9A227] rounded-full px-6 py-4 shadow-md">
            <Search className="w-5 h-5 text-white mr-3 flex-shrink-0" />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSearch()}
              placeholder="Faites votre recherche..."
              className="bg-transparent text-white placeholder-white/80 flex-1 outline-none text-lg font-medium"
            />
          </div>

          {/* Suggestions */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-[#E0D8CC] overflow-hidden z-50">
              {suggestions.map(s => (
                <button
                  key={s}
                  onClick={() => { setQuery(s); setShowSuggestions(false); handleSearch(s) }}
                  className="w-full text-left px-6 py-3 hover:bg-[#F5F0E8] text-[#1C1A16] text-sm border-b border-[#F5F0E8] last:border-0 transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* En savoir plus */}
        <button
          onClick={() => setShowInfo(!showInfo)}
          className="bg-white border border-[#E0D8CC] text-[#1C1A16] rounded-full px-8 py-3 font-medium hover:border-[#C9A227] transition-colors"
        >
          En savoir plus
        </button>

        {/* Info panel */}
        {showInfo && (
          <div className="mt-8 max-w-lg bg-white border border-[#E0D8CC] rounded-2xl p-8 text-left shadow-md">
            <h3 className="font-['Playfair_Display'] font-bold text-xl text-[#1C1A16] mb-4">
              Comment ça fonctionne ?
            </h3>
            <ol className="space-y-3 text-sm text-[#3D3A30] leading-relaxed">
              <li><span className="text-[#C9A227] font-bold">1.</span> Recherchez n'importe quel sujet Wikipedia</li>
              <li><span className="text-[#C9A227] font-bold">2.</span> Explorez les chapitres clés sous forme de cartes</li>
              <li><span className="text-[#C9A227] font-bold">3.</span> Naviguez dans la carte mentale interactive</li>
              <li><span className="text-[#C9A227] font-bold">4.</span> Testez vos connaissances avec des quiz</li>
              <li><span className="text-[#C9A227] font-bold">5.</span> Gagnez des XP et débloquez des musiques d'ambiance</li>
            </ol>
          </div>
        )}
      </section>

      {/* Features */}
      <section className="bg-[#EDE8DF] py-16 px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-12 text-center">
          {[
            { icon: Compass, label: "Parcours", desc: "Des itinéraires thématiques pour approfondir chaque sujet." },
            { icon: Trophy, label: "Gamification", desc: "Gagnez des XP et débloquez des musiques en vous amusant." },
            { icon: Globe, label: "Découverte", desc: "L'immensité de Wikipédia, structurée pour l'apprentissage." },
          ].map(({ icon: Icon, label, desc }) => (
            <div key={label} className="flex flex-col items-center gap-3">
              <Icon className="w-6 h-6 text-[#C9A227]" />
              <p className="font-semibold text-[#1C1A16]">{label}</p>
              <p className="text-sm text-[#8A8070] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
