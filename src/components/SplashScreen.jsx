import React, { useState } from 'react';
import { Sparkles, ArrowRight, Code2, Layers, Cpu } from 'lucide-react';

export const SplashScreen = ({ onGetStarted }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      badge: "60% VIBE CODING • 40% ARCHITECTURE",
      title: "Kuasai Mobile Flutter Lebih Cepat dengan AI",
      subtitle: "Pelatihan intensif 8 Minggu menggunakan VS Code AI Workflow. Tulis UI scaffolding instan, bangun fondasi Clean Architecture yang kokoh.",
      tag: "8 Minggu Intensif",
      icon: <Sparkles className="w-8 h-8 text-orange-400" />,
      visualDetail: "VS Code + Copilot/Cursor + Flutter SDK"
    },
    {
      badge: "100% CLEAN ARCHITECTURE",
      title: "Dari Nol Dart Sampai Portfolio Ready",
      subtitle: "Bulan 1 fondasi & UI scaffolding, Bulan 2 integrasi REST API, Supabase Realtime, hingga build APK siap rilis.",
      tag: "1 Portfolio Ready App",
      icon: <Layers className="w-8 h-8 text-orange-400" />,
      visualDetail: "Riverpod + GoRouter + Supabase"
    },
    {
      badge: "RUTINITAS BELAJAR TERUKUR",
      title: "Metodologi 120 Menit / Hari Terstruktur",
      subtitle: "15 Menit teori & dokumentasi, 60 Menit live vibe coding, dan 45 Menit code review serta debugging logika kritis.",
      tag: "120 Menit / Hari",
      icon: <Cpu className="w-8 h-8 text-orange-400" />,
      visualDetail: "Teori 15m • Code 60m • Review 45m"
    }
  ];

  const current = slides[activeSlide];

  return (
    <div className="relative w-full min-h-screen bg-stone-950 text-white flex flex-col justify-between p-6 sm:p-8 overflow-hidden select-none">
      {/* Background Ambient Glow */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-orange-600/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-28 w-72 h-72 bg-amber-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Badge */}
      <div className="relative z-10 flex items-center justify-between pt-2">
        <div className="flex items-center gap-2 bg-stone-900/80 border border-stone-800 px-3 py-1.5 rounded-full backdrop-blur-md">
          <div className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
          <span className="text-xs font-semibold tracking-wider uppercase text-stone-200">
            Provoks Mobile Path
          </span>
        </div>
        <button
          onClick={onGetStarted}
          className="text-xs font-medium text-stone-400 hover:text-white px-2 py-1 transition-colors"
        >
          Lewati
        </button>
      </div>

      {/* Hero Visual Presentation (App-like Card) */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center my-6">
        <div className="relative w-full max-w-[340px] aspect-square rounded-3xl bg-gradient-to-b from-stone-900 to-stone-950 border border-stone-800/80 p-6 flex flex-col items-center justify-center shadow-2xl overflow-hidden group">
          {/* Subtle Grid pattern in card */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* Big Outline Number in Grotesk */}
          <div className="absolute -top-3 -right-2 text-8xl font-black text-outline-white opacity-15 pointer-events-none select-none tracking-tighter">
            0{activeSlide + 1}
          </div>

          {/* Central Animated Badge */}
          <div className="relative z-10 w-24 h-24 rounded-2xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-600/30 mb-6 transform group-hover:scale-105 transition-transform duration-300">
            {current.icon}
          </div>

          <div className="relative z-10 text-center">
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-orange-500/15 text-orange-400 border border-orange-500/30 mb-2">
              {current.tag}
            </span>
            <p className="text-xs text-stone-400 font-mono">
              {current.visualDetail}
            </p>
          </div>

          {/* Floating Accent chips */}
          <div className="absolute top-4 left-4 bg-stone-800/90 border border-stone-700/60 rounded-xl px-2.5 py-1 text-[10px] text-stone-300 font-medium">
            ⚡ Flutter 3.x
          </div>
          <div className="absolute bottom-4 right-4 bg-stone-800/90 border border-stone-700/60 rounded-xl px-2.5 py-1 text-[10px] text-stone-300 font-medium">
            🤖 AI-Powered
          </div>
        </div>
      </div>

      {/* Bottom Content Area: Headline, Subtitle, Pagination Dots & Primary CTA */}
      <div className="relative z-10 space-y-5 pb-2">
        <div>
          <div className="inline-block text-[11px] font-bold tracking-widest text-orange-400 uppercase mb-2">
            {current.badge}
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
            {current.title}
          </h1>
          <p className="mt-2.5 text-sm text-stone-300 leading-relaxed">
            {current.subtitle}
          </p>
        </div>

        {/* Carousel Indicators */}
        <div className="flex items-center gap-2 pt-1">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeSlide === idx
                  ? 'w-7 bg-orange-500'
                  : 'w-2 bg-stone-700 hover:bg-stone-600'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Big Orange Pill CTA Button (Matching screen 1 in reference image) */}
        <div className="pt-2">
          {activeSlide < slides.length - 1 ? (
            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveSlide(prev => prev + 1)}
                className="flex-1 py-4 px-6 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-base shadow-lg shadow-orange-600/30 flex items-center justify-center gap-2 active:scale-98 transition-all"
              >
                <span>Lanjut</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <button
              onClick={onGetStarted}
              className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-base shadow-lg shadow-orange-600/30 flex items-center justify-center gap-2 active:scale-98 transition-all"
            >
              <span>Mulai Belajar Sekarang</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
