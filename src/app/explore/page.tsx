"use client";

import React from 'react';
import Link from 'next/link';
import { Lock, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * PAGE EXPLORE - Respectant les contraintes du README_EQUIPE.md
 * - Pas de <form>
 * - Tailwind uniquement
 * - Polices: Playfair Display (titres) & Inter (corps)
 */

const courses = [
  { id: "01", title: "The Rosetta Stone", desc: "Foundational Linguistics & The Decipherment of Hieroglyphs.", status: "done", image: "/images/rosetta.jpg" },
  { id: "02", title: "Neolithic Pottery", desc: "The transition from nomadic life to sedentary agriculture.", status: "in-progress", image: "/images/pottery.jpg" },
  { id: "03", title: "Illuminated Texts", desc: "Preserving knowledge through the Dark Ages.", status: "locked", image: "/images/texts.jpg" },
];

const archetypes = [
  { category: "SOCIAL SCIENCE", title: "Sociology 101", active: true },
  { category: "PHYSICS", title: "Cosmology", active: false },
  { category: "ARTS", title: "Renaissance", active: false },
  { category: "LOGIC", title: "Meta-Ethics", active: false },
];

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-[#F5F0E8] pt-16 pb-20 px-6 font-inter">
      <div className="max-w-5xl mx-auto">
        
        {/* GRILLE DE CARDS (3 COLONNES) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {courses.map((course) => (
            <Link 
              key={course.id} 
              href={course.status === "locked" ? "#" : `/learn/${course.id}`}
              className={`group block bg-white border border-[#E0D8CC] overflow-hidden transition-all duration-300 ${
                course.status === "locked" ? "bg-[#E8E4DC] cursor-not-allowed opacity-80" : "hover:shadow-md cursor-pointer"
              }`}
            >
              {/* IMAGE PLACEHOLDER */}
              <div className="relative h-[260px] bg-stone-300">
                {/* Badge IN PROGRESS */}
                {course.status === "in-progress" && (
                  <div className="absolute top-3 right-3 bg-[#C9A227] text-white text-[10px] font-bold uppercase px-2 py-1 tracking-widest z-20">
                    IN PROGRESS
                  </div>
                )}

                {/* OVERLAY LOCKED */}
                {course.status === "locked" && (
                  <div className="absolute inset-0 bg-[#E8E4DC]/40 backdrop-blur-[2px] flex items-center justify-center z-20">
                    <Lock className="text-[#8A8070]" size={32} />
                  </div>
                )}
              </div>

              {/* CONTENU TEXTE */}
              <div className="p-4 space-y-2">
                <div className="flex items-center gap-2">
                  {course.status === "locked" ? (
                    <Lock size={12} className="text-[#8A8070]" />
                  ) : (
                    <span className="text-[#C9A227] font-semibold text-xs tracking-tighter">{course.id}</span>
                  )}
                </div>
                
                <h3 className={`text-[22px] font-serif font-bold leading-tight ${
                  course.status === "locked" ? "italic text-[#8A8070]" : "text-[#1C1A16]"
                }`}>
                  {course.title}
                </h3>
                
                <p className={`text-[13px] leading-relaxed ${
                  course.status === "locked" ? "italic text-[#8A8070]" : "text-[#8A8070]"
                }`}>
                  {course.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <hr className="border-[#E0D8CC] mb-12" />

        {/* SECTION ALTERNATIVE ARCHETYPES */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[#1C1A16]">
              ALTERNATIVE ARCHETYPES
            </h2>
            <div className="flex gap-2">
              <div className="w-9 h-9 border border-[#E0D8CC] flex items-center justify-center hover:bg-white transition-colors cursor-pointer">
                <ChevronLeft size={18} className="text-[#8A8070]" />
              </div>
              <div className="w-9 h-9 border border-[#E0D8CC] flex items-center justify-center hover:bg-white transition-colors cursor-pointer">
                <ChevronRight size={18} className="text-[#8A8070]" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-[#E0D8CC] pt-4">
            {archetypes.map((item, index) => (
              <div 
                key={index}
                className={`p-6 border-l-2 transition-all hover:bg-white/50 cursor-pointer ${
                    item.active ? 'border-[#C9A227]' : 'border-[#E0D8CC]'
                }`}
              >
                <p className={`text-[10px] font-bold tracking-widest mb-1 ${item.active ? 'text-[#C9A227]' : 'text-[#8A8070]'}`}>
                  {item.category}
                </p>
                <h4 className="text-xl font-semibold text-[#1C1A16]">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}