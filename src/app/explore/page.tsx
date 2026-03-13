"use client";

import React from "react";
import Link from "next/link";
import { Lock, ChevronLeft, ChevronRight } from "lucide-react";

// Données des cours
const courses = [
  { id: "01", title: "Déclenchement", desc: "Foundational Linguistics & The Decipherment of Hieroglyphs.", status: "done" },
  { id: "02", title: "Entrée en guerre", desc: "The transition from nomadic life to sedentary agriculture.", status: "in-progress" },
  { id: "03", title: "Opérations militaires", desc: "Preserving knowledge through the Dark Ages.", status: "locked" },
  { id: "04", title: "Guerre renouvelable", desc: "The Renaissance and the explosion of knowledge.", status: "locked" },
  { id: "05", title: "Front intérieur", desc: "The Scientific Revolution and the birth of modern science.", status: "locked" },
  { id: "06", title: "Conséquences", desc: "The Industrial Revolution and the rise of technology.", status: "locked" },
  { id: "07", title: "Autres aspects", desc: "The World Wars and the mobilization of entire societies.", status: "locked" },
];

// Données des archétypes
const archetypes = [
  { category: "SOCIAL SCIENCE", title: "Sociology 101", active: true },
  { category: "PHYSICS", title: "Cosmology", active: false },
  { category: "ARTS", title: "Renaissance", active: false },
  { category: "LOGIC", title: "Meta-Ethics", active: false },
];

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-[#F5F0E8] pt-16 pb-20 px-6 font-inter text-[#1C1A16]">
      <div className="max-w-5xl mx-auto">
        
        {/* --- SECTION EN-TÊTE --- */}
        <section className="mb-16">
          <span className="block font-inter text-[11px] font-semibold tracking-[0.2em] text-[#8A8070] uppercase mb-2">
            Current Domain
          </span>
          <h1 className="font-playfair italic text-6xl md:text-7xl mb-6">
            Première Guerre mondiale
          </h1>

          {/* TITRE D'INTRODUCTION AJOUTÉ ICI */}
          <div className="mb-10">
            <h2 className="text-[#C9A227] font-bold text-[10px] tracking-[0.3em] uppercase mb-2">
              Introduction
            </h2>
          </div>
          
          <div className="font-inter text-[#3D3A30] max-w-3xl leading-relaxed text-sm space-y-8">
            
            {/* Point 1 */}
            <div>
              <p className="text-[#E53935] font-bold">1. Les Origines et le Déclenchement (1914) :</p>
              <p className="font-bold mt-1 text-[#1C1A16]">
                Le conflit éclate suite à l'assassinat de l'archiduc François-Ferdinand à Sarajevo le 28 juin 1914. Ce qui aurait pu rester une crise locale dégénère en guerre mondiale à cause du jeu des alliances entre les grandes puissances européennes.
              </p>
            </div>

            {/* Point 2 */}
            <div>
              <p className="text-[#E53935] font-bold">2. Les Forces en Présence :</p>
              <div className="font-bold mt-1 space-y-2 text-[#1C1A16]">
                <p>Deux blocs principaux s'affrontent :</p>
                <p>La Triple-Entente (Alliés) : Initialement la France, le Royaume-Uni et la Russie. Ils seront rejoints plus tard par l'Italie (1915), les États-Unis (1917) et d'autres nations, tandis que la Russie se retire fin 1917 après sa révolution.</p>
                <p>Les Empires Centraux : L'Allemagne et l'Autriche-Hongrie, rejoints par l'Empire ottoman et la Bulgarie.</p>
              </div>
            </div>

            {/* Point 3 */}
            <div>
              <p className="text-[#E53935] font-bold">3. Une Guerre d'une Ampleur Inédite :</p>
              <div className="font-bold mt-1 space-y-2 text-[#1C1A16]">
                <p>Nature du combat : À l'Ouest, le conflit s'enlise dans une guerre de tranchées sur plus de 600 km. À l'Est, les fronts sont plus mobiles.</p>
                <p>Innovations techniques : C'est l'apparition massive des avions (reconnaissance et bombardement), des premiers blindés et des sous-marins de combat.</p>
                <p>Guerre Totale : Elle mobilise plus de 60 millions de soldats et touche tous les aspects de la société. Le bilan humain est effroyable : environ 19 millions de morts (10 millions de militaires et 9 millions de civils).</p>
              </div>
            </div>

            {/* Point 4 */}
            <div>
              <p className="text-[#E53935] font-bold">4. Conséquences et Nouveau Monde (1918) :</p>
              <div className="font-bold mt-1 space-y-2 text-[#1C1A16]">
                <p>La guerre prend fin en 1918 et redessine totalement la carte du monde :</p>
                <p>Effondrement des empires : Les empires allemand, austro-hongrois, russe et ottoman disparaissent ou se fragmentent.</p>
                <p>Changements politiques : De nouvelles républiques et des États communistes apparaissent. L'Allemagne est lourdement sanctionnée par le traité de Versailles.</p>
                <p>Paix internationale : Création de la Société des Nations (SDN), première tentative d'organisation internationale pour prévenir les futurs conflits.</p>
              </div>
            </div>

          </div>
        </section>

        {/* --- GRILLE DE CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {courses.map((course) => (
            <Link 
              key={course.id} 
              href={course.status === "locked" ? "#" : `/learn/${course.id}`}
              className={`group block bg-white border border-[#E0D8CC] overflow-hidden transition-all duration-300 ${
                course.status === "locked" ? "bg-[#E8E4DC] cursor-not-allowed opacity-90" : "hover:shadow-md cursor-pointer"
              }`}
            >
              <div className="relative h-[260px] bg-stone-300">
                {course.status === "in-progress" && (
                  <div className="absolute top-3 right-3 bg-[#C9A227] text-white text-[10px] font-bold uppercase px-2 py-1 tracking-widest z-20 font-inter">
                    IN PROGRESS
                  </div>
                )}
                {course.status === "locked" && (
                  <div className="absolute inset-0 bg-[#E8E4DC]/40 backdrop-blur-[2px] flex items-center justify-center z-20">
                    <Lock className="text-[#8A8070]" size={32} />
                  </div>
                )}
              </div>

              <div className="p-5 space-y-2">
                <div className="flex items-center gap-2">
                  {course.status === "locked" ? (
                    <Lock size={12} className="text-[#8A8070]" />
                  ) : (
                    <span className="text-[#C9A227] font-bold text-xs tracking-widest font-inter">{course.id}</span>
                  )}
                </div>
                
                <h3 className={`text-[22px] font-playfair font-bold leading-tight ${
                  course.status === "locked" ? "italic text-[#8A8070]" : "text-[#1C1A16]"
                }`}>
                  {course.title}
                </h3>
                
                <p className={`text-[13px] font-inter leading-relaxed ${
                  course.status === "locked" ? "italic text-[#8A8070]" : "text-[#8A8070]"
                }`}>
                  {course.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <hr className="border-[#E0D8CC] mb-12" />

        {/* --- SECTION ALTERNATIVE ARCHETYPES --- */}
        <section className="pb-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] font-inter">
              Alternative Archetypes
            </h2>
            <div className="flex gap-2">
              <div className="w-9 h-9 border border-[#E0D8CC] flex items-center justify-center hover:bg-white transition-colors cursor-pointer text-[#8A8070]">
                <ChevronLeft size={18} />
              </div>
              <div className="w-9 h-9 border border-[#E0D8CC] flex items-center justify-center hover:bg-white transition-colors cursor-pointer text-[#8A8070]">
                <ChevronRight size={18} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-[#E0D8CC]">
            {archetypes.map((item, index) => (
              <div 
                key={index}
                className={`p-6 border-l border-[#E0D8CC] first:border-l-0 transition-all hover:bg-white/50 cursor-pointer ${
                    item.active ? 'border-l-2 border-l-[#C9A227]' : ''
                }`}
              >
                <p className={`text-[10px] font-bold tracking-widest mb-1 font-inter ${item.active ? 'text-[#C9A227]' : 'text-[#8A8070]'}`}>
                  {item.category}
                </p>
                <h4 className="text-xl font-semibold font-inter">
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