import Link from "next/link"
import { BookOpen, Compass, Trophy, Globe } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F0E8] flex flex-col">
      <section className="flex-1 flex flex-col items-center justify-center text-center px-8 py-24">
        <div className="w-20 h-20 rounded-full bg-[#F5EDD6] flex items-center justify-center mb-8">
          <BookOpen className="w-9 h-9 text-[#C9A227]" />
        </div>
        <h1 className="font-['Playfair_Display'] font-bold text-7xl text-[#1C1A16] mb-6">
          Wikipedia Learn
        </h1>
        <p className="text-[#8A8070] font-light text-lg max-w-md mb-10 leading-relaxed">
          Explorez la connaissance encyclopédique à travers des parcours interactifs et gamifiés.
        </p>
        <div className="flex gap-4">
          <Link href="/login" className="bg-[#C9A227] text-white rounded-full px-10 py-3 font-semibold">
            Démarrer
          </Link>
          <button className="bg-white border border-[#E0D8CC] text-[#1C1A16] rounded-full px-10 py-3">
            En savoir plus
          </button>
        </div>
      </section>
      <section className="bg-[#EDE8DF] py-20 px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-12 text-center">
          {[
            { icon: Compass, label: "Parcours", desc: "Des itinéraires thématiques pour approfondir chaque sujet." },
            { icon: Trophy, label: "Gamification", desc: "Gagnez des badges et validez vos acquis en vous amusant." },
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