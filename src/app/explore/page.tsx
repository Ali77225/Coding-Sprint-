"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, Lock } from "lucide-react"

const domains = [
  {
    id: "rosetta",
    title: "The Rosetta Stone",
    subtitle: "Foundational Linguistics & The Decipherment of Hieroglyphs.",
    image: "https://picsum.photos/id/1011/800/520",
    number: "01",
    status: "default",
  },
  {
    id: "pottery",
    title: "Neolithic Pottery",
    subtitle: "The transition from nomadic life to sedentary agriculture.",
    image: "https://picsum.photos/id/1025/800/520",
    number: "02",
    status: "inProgress",
  },
  {
    id: "illuminated",
    title: "Illuminated Texts",
    subtitle: "Preserving knowledge through the Dark Ages.",
    image: "https://picsum.photos/id/1044/800/520",
    number: "03",
    status: "completed",
  },
]

export default function ExplorePage() {
  return (
    <div className="w-full bg-[#FAFAF8] px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <header className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A227]">
            current domain
          </p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight text-[#1C1A16] sm:text-5xl">
            Histoire
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#6B6559]">
            A curated exploration of human progress through the lens of archival evidence,
            spanning from the Neolithic revolution to the dawn of the digital age.
          </p>
        </header>

        <section className="mt-12 grid gap-0 sm:grid-cols-3">
          {domains.map(domain => {
            const isCompleted = domain.status === "completed"
            const isInProgress = domain.status === "inProgress"
            const href = domain.id === "rosetta" ? "/library" : undefined

            const card = (
              <article
                key={domain.id}
                className={`border border-[#E0D8CC] bg-white transition ${
                  isCompleted ? "opacity-50" : "hover:shadow-md"
                }`}
              >
                <div className="p-4">
                  <div className="relative overflow-hidden">
                    <img
                      src={domain.image}
                      alt={domain.title}
                      className="h-[352px] w-full object-cover"
                      loading="lazy"
                    />

                    {isInProgress && (
                      <span className="absolute right-3 top-3 rounded-full bg-[#C9A227] px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">
                        IN PROGRESS
                      </span>
                    )}

                    {isCompleted && (
                      <div className="absolute inset-0 bg-white/70" />
                    )}
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <span
                      className={`text-xs font-semibold uppercase tracking-widest ${
                        isCompleted ? "text-[#B6AE9D]" : "text-[#C9A227]"
                      }`}
                    >
                      {domain.number}
                    </span>
                    <span
                      className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                        isCompleted ? "border-[#D3D0C7]" : "border-[#C9A227]"
                      }`}
                    >
                      <span
                        className={`h-2 w-2 rounded-full ${
                          isCompleted ? "bg-[#D3D0C7]" : "bg-[#C9A227]"
                        }`}
                      />
                    </span>
                  </div>

                  <h2
                    className={`mt-2 text-xl font-semibold ${
                      isCompleted ? "text-[#B6AE9D]" : "text-[#1C1A16]"
                    }`}
                  >
                    {domain.title}
                  </h2>
                  <p
                    className={`mt-2 text-sm leading-relaxed ${
                      isCompleted ? "text-[#B6AE9D]" : "text-[#7B7466]"
                    }`}
                  >
                    {domain.subtitle}
                  </p>

                  {isCompleted && (
                    <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#B6AE9D]">
                      <Lock className="h-4 w-4" />
                      <span>Completed</span>
                    </div>
                  )}
                </div>
              </article>
            )

            return href ? (
              <Link key={domain.id} href={href} className="block">
                {card}
              </Link>
            ) : (
              card
            )
          })}
        </section>

        <footer className="mt-16 flex flex-col gap-6 border-t border-[#E0D8CC] pt-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#6B6559]">
              Alternative Archetypes
            </p>
            <div className="mt-4 grid gap-4 text-sm font-semibold text-[#1C1A16] sm:grid-cols-4">
              <span className="cursor-pointer hover:text-[#C9A227]">Sociology 101</span>
              <span className="cursor-pointer hover:text-[#C9A227]">Cosmology</span>
              <span className="cursor-pointer hover:text-[#C9A227]">Renaissance</span>
              <span className="cursor-pointer hover:text-[#C9A227]">Meta-Ethics</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="h-10 w-10 rounded-full border border-[#E0D8CC] bg-white text-[#1C1A16] shadow-sm transition hover:border-[#C9A227] hover:bg-white"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="h-10 w-10 rounded-full border border-[#E0D8CC] bg-white text-[#1C1A16] shadow-sm transition hover:border-[#C9A227] hover:bg-white"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </footer>
      </div>
    </div>
  )
}
