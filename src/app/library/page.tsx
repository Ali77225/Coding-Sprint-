"use client"

import MindMap, { MindMapLink, MindMapNode } from "../../components/MindMap"

const nodes: MindMapNode[] = [
  { id: "a", label: "Première\n guerre\n mondiale", x: 20, y: 35 },
  { id: "b", label: "Première\n guerre\n mondiale", x: 50, y: 18 },
  { id: "c", label: "Première\n guerre\n mondiale", x: 80, y: 35 },
  { id: "d", label: "Première\n guerre\n mondiale", x: 35, y: 55 },
  { id: "e", label: "Première\n guerre\n mondiale", x: 65, y: 55 },
]

const links: MindMapLink[] = [
  { from: "a", to: "b" },
  { from: "b", to: "c" },
  { from: "b", to: "d" },
  { from: "b", to: "e" },
]

export default function LibraryPage() {
  return (
    <div className="w-full bg-[#FAFAF8] px-4 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A227]">
            CHAPTER 1 : ORIGINS
          </p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight text-[#1C1A16] sm:text-5xl">
            Antagonismes entre puissances européennes
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#6B6559]">
            Exploring the silent revolution of ceramic artistry and its role in the transition to
            sedentary human life.
          </p>
        </header>

        <section className="rounded-3xl bg-[#F4F2EE] p-10">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#9C9278]">
              Interactive syllabus
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-[#1C1A16]">
              Parcours de connaissances
            </h2>
          </div>

          <div className="mt-10">
            <MindMap nodes={nodes} links={links} />
          </div>
        </section>
      </div>
    </div>
  )
}
