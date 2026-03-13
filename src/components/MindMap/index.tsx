"use client"

import React from "react"

export type MindMapNode = {
  id: string
  label: string
  x: number // percent 0-100
  y: number // percent 0-100
}

export type MindMapLink = {
  from: string
  to: string
}

export type MindMapProps = {
  nodes: MindMapNode[]
  links: MindMapLink[]
  className?: string
}

export default function MindMap({ nodes, links, className }: MindMapProps) {
  const getNode = (id: string) => nodes.find(n => n.id === id)

  return (
    <div className={`relative mx-auto w-full max-w-5xl rounded-2xl bg-[#F1F0EC] px-8 py-12 shadow-sm ${className ?? ""}`}>
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
        {links.map(link => {
          const a = getNode(link.from)
          const b = getNode(link.to)
          if (!a || !b) return null

          const ax = (a.x / 100) * 100
          const ay = (a.y / 100) * 100
          const bx = (b.x / 100) * 100
          const by = (b.y / 100) * 100

          return (
            <line
              key={`${link.from}-${link.to}`}
              x1={`${ax}%`}
              y1={`${ay}%`}
              x2={`${bx}%`}
              y2={`${by}%`}
              stroke="#D3CFC3"
              strokeWidth={2}
              strokeLinecap="round"
            />
          )
        })}
      </svg>

      {nodes.map(node => (
        <div
          key={node.id}
          className="absolute flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#C9A227] bg-white text-center text-sm font-semibold text-[#1C1A16] shadow-sm"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
        >
          <span className="px-3">{node.label}</span>
        </div>
      ))}
    </div>
  )
}
