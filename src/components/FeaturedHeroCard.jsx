import React, { useState } from 'react';
import { Percent, Star, Heart, ArrowUpRight, Sparkles, Clock, CheckCircle } from 'lucide-react';

export const FeaturedHeroCard = ({ onExploreRoadmap, onOpenPromptLab }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div className="relative w-full rounded-[32px] bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 text-white p-6 shadow-xl shadow-orange-600/25 overflow-hidden transition-all duration-300 select-none">
      {/* Background subtle radial texture */}
      <div className="absolute top-0 right-0 -mr-12 -mt-12 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-48 h-48 bg-black/10 rounded-full blur-xl pointer-events-none" />

      {/* Top Header Badges & Bookmark Heart (matching screen 2) */}
      <div className="relative z-10 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          {/* Badge 1: 60% Vibe Coding */}
          <div className="flex items-center gap-1.5 bg-black/25 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 text-xs font-bold text-white shadow-sm">
            <Percent className="w-3.5 h-3.5 text-amber-300" />
            <span>60% Vibe Coding</span>
          </div>

          {/* Badge 2: Clean Arch Rating */}
          <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-2.5 py-1.5 rounded-full text-xs font-semibold text-white/95">
            <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
            <span>100% Clean Arch</span>
          </div>
        </div>

        {/* Favorite Heart Button */}
        <button
          onClick={() => setIsBookmarked(!isBookmarked)}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 active:scale-90 shadow-md ${
            isBookmarked
              ? 'bg-white text-rose-500 fill-rose-500'
              : 'bg-white/90 hover:bg-white text-stone-800'
          }`}
          aria-label="Bookmark Kurikulum"
          title="Simpan Kurikulum"
        >
          <Heart className={`w-5 h-5 ${isBookmarked ? 'fill-rose-500 text-rose-500' : 'text-stone-700'}`} />
        </button>
      </div>

      {/* Title & Scope */}
      <div className="relative z-10 mt-5">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
          Path Mobile Provoks
        </h2>
        <p className="text-sm font-medium text-orange-100/90 mt-0.5">
          Kurikulum Flutter & AI Workflow • 8 Minggu
        </p>

        {/* Pill tags (matching screen 2) */}
        <div className="flex flex-wrap items-center gap-1.5 mt-3">
          {['Dart OOP', 'Riverpod', 'Supabase', 'Clean Arch', '+5 Modul'].map((tag, i) => (
            <span
              key={i}
              className="text-[11px] font-semibold bg-white/20 backdrop-blur-sm border border-white/20 px-2.5 py-0.5 rounded-full text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Area: Highlight Value & Action Button (matching screen 2) */}
      <div className="relative z-10 mt-6 pt-2 flex items-end justify-between gap-4">
        <div>
          <div className="text-[11px] font-bold text-orange-200 uppercase tracking-wider flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>Alokasi Harian</span>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-baseline gap-1.5">
            <span className="font-black">120</span>
            <span className="text-xl font-black text-outline-white">MIN</span>
            <span className="text-xs font-bold text-orange-200">/Hari</span>
          </div>
          <div className="text-[10px] text-orange-100/90 font-mono tracking-tight">
            15m Teori • 60m Vibe • 45m Review
          </div>
        </div>

        {/* Action Button: Pill white with vibrant text */}
        <button
          onClick={onExploreRoadmap}
          className="px-6 py-3.5 rounded-full bg-white hover:bg-orange-50 text-orange-600 hover:text-orange-700 font-extrabold text-sm shadow-xl active:scale-95 transition-all flex items-center gap-1.5"
        >
          <span>Eksplor Silabus</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      {/* Decorative Outline Grotesk typography watermark */}
      <div className="absolute -bottom-3 -right-2 text-6xl sm:text-7xl font-black text-outline-white opacity-15 pointer-events-none select-none tracking-tighter">
        FLUTTER
      </div>
    </div>
  );
};
