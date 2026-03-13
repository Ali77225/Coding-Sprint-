"use client";

import React from 'react';
import Link from 'next/link';
import { Inter } from 'next/font/google';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#F5F0E8] px-4 text-[#1C1A16]">
      <div className="flex w-full max-w-[400px] flex-col items-center">
        
        {/* Cercle avec Icône Livre */}
        <div className="mb-6 flex h-80 w-80 items-center justify-center rounded-full bg-[#F5EDD6]">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C9A227" strokeWidth="2">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          </svg>
        </div>

        {/* Titres */}
        <h1 className="mb-2 text-center text-[52px] font-bold leading-tight" style={{ fontFamily: 'serif' }}>
          Wikipedia Learn
        </h1>
        <p className="mb-10 text-[16px] font-[300] text-[#C9A227]">
          Connectez-vous rapidement
        </p>

        {/* Boutons SSO */}
        <div className="flex w-full flex-col gap-3">
          <button className="flex w-full items-center justify-center gap-3 rounded-full border border-[#E0D8CC] rounded-full bg-white py-3, flex items-center gap-3 hover:bg-gray-50 transition-colors">
            <span className="font-medium">Continuer avec Google</span>
          </button>

          <button className="flex w-full items-center justify-center gap-3 rounded-full border border-[#E0D8CC] bg-white py-3 hover:bg-gray-50 transition-colors">
            <span className="font-medium">Continuer avec Apple</span>
          </button>

          <button className="flex w-full items-center justify-center gap-3 rounded-full border border-[#E0D8CC] bg-white py-3 hover:bg-gray-50 transition-colors">
            <span className="font-medium">Continuer avec Microsoft</span>
          </button>
        </div>

        {/* Lien vers Email */}
        <Link href="/login/email" className="mt-8 text-[16px] font-medium text-[#C9A227] hover:underline">
          Ou utilisez votre email
        </Link>
        
      </div>
    </main>
  );
}
