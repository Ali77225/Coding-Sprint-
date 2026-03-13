"use client"

import { useMemo, useState } from "react"

const question = {
  title: "Quel événement de 1885 a organisé le partage de l'Afrique entre les puissances ?",
  subtitle: "FIRING TEMPERATURES",
  progress: {
    current: 1,
    total: 10,
  },
  options: [
    { id: "A", label: "Conférence de Vienne" },
    { id: "B", label: "Conférence de Berlin" },
    { id: "C", label: "Conférence d'Agadir" },
    { id: "D", label: "Conférence de Versailles" },
  ],
  correct: "B",
}

export default function RegisterPage() {
  const [selected, setSelected] = useState<string | null>(null)

  const progressPct = useMemo(
    () => Math.round((question.progress.current / question.progress.total) * 100),
    [question.progress.current, question.progress.total]
  )

  const isCorrect = selected === question.correct

  return (
    <div className="w-full bg-[#FAFAF8]">
      <div className="mx-auto flex min-h-[calc(100vh-72px)] max-w-3xl flex-col items-center justify-start px-4 py-10">
        <div className="w-full">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-widest text-[#9C9278]">
            <span>Quiz progress</span>
            <span>
              {question.progress.current}/{question.progress.total} Questions ({progressPct}%)
            </span>
          </div>

          <div className="h-2 w-full overflow-hidden rounded-full bg-[#F3F0E6]">
            <div
              className="h-full rounded-full bg-[#C9A227] transition-all"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#B6AE9D]">
            {question.subtitle}
          </p>
          <h1 className="max-w-2xl text-2xl font-semibold leading-snug text-[#1C1A16] sm:text-3xl">
            {question.title}
          </h1>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {question.options.map(option => {
            const isSelected = selected === option.id
            const shouldShowCorrect = selected !== null && option.id === question.correct
            const isWrongSelected = selected === option.id && !isCorrect

            let borderClass = "border-[#E0D8CC]"
            let bgClass = "bg-white"
            let textClass = "text-[#1C1A16]"

            if (shouldShowCorrect) {
              borderClass = "border-[#4F7A5D]"
              bgClass = "bg-[#F0F7EE]"
              textClass = "text-[#1C5A3A]"
            } else if (isWrongSelected) {
              borderClass = "border-[#D96A61]"
              bgClass = "bg-[#F9E6E2]"
              textClass = "text-[#A6372D]"
            } else if (isSelected) {
              borderClass = "border-[#C9A227]"
              bgClass = "bg-[#FFFBEB]"
              textClass = "text-[#1C1A16]"
            }

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setSelected(option.id)}
                className={`flex items-center gap-4 rounded-2xl border px-6 py-5 text-left transition-colors hover:border-[#C9A227] hover:bg-[#fffbeb] ${borderClass} ${bgClass} ${textClass}`}
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold ${
                    isSelected ? "border-[#C9A227] bg-[#C9A227] text-white" : "border-[#E0D8CC] bg-white text-[#1C1A16]"
                  }`}
                >
                  {option.id}
                </div>

                <span className="text-sm font-medium">{option.label}</span>

                {shouldShowCorrect && (
                  <span className="ml-auto text-sm font-semibold text-[#4F7A5D]">✓</span>
                )}

                {isWrongSelected && (
                  <span className="ml-auto text-sm font-semibold text-[#D96A61]">✕</span>
                )}
              </button>
            )
          })}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button
            type="button"
            className="w-full rounded-full border border-[#E0D8CC] bg-white px-8 py-3 text-sm font-semibold text-[#8A8070] transition hover:border-[#C9A227] hover:text-[#1C1A16] sm:w-auto"
            onClick={() => setSelected(null)}
          >
            Skip
          </button>
          <button
            type="button"
            disabled={!selected}
            className="w-full rounded-full bg-[#C9A227] px-8 py-3 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
            onClick={() => {
              if (!selected) return
              // TODO: advance to next question
              setSelected(null)
            }}
          >
            Continuer
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}
