import React, { useState } from 'react';
import { 
  ChevronLeft, 
  Bookmark, 
  Percent, 
  Star, 
  CheckCircle2, 
  Database, 
  Layers, 
  Cpu, 
  Check 
} from 'lucide-react';

export const CapstoneDetailModal = ({ project, onClose }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [completedFeatures, setCompletedFeatures] = useState({});

  const toggleFeature = (index) => {
    setCompletedFeatures(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex justify-center items-end sm:items-center overflow-y-auto p-0 sm:p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-lg bg-white rounded-t-[36px] sm:rounded-[36px] shadow-2xl overflow-hidden flex flex-col max-h-[92vh] text-stone-900 border border-stone-100">
        
        {/* Top Header */}
        <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-md px-5 py-3.5 flex items-center justify-between border-b border-stone-100">
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full border border-stone-200 bg-white hover:bg-stone-50 flex items-center justify-center text-stone-700 active:scale-95 transition-all shadow-sm"
            aria-label="Kembali"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <h3 className="font-bold text-base text-stone-900">
            Detail Capstone Project
          </h3>

          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center active:scale-95 transition-all shadow-sm ${
              isBookmarked ? 'bg-orange-50 border-orange-300 text-orange-600' : 'bg-white text-stone-700 hover:bg-stone-50'
            }`}
            aria-label="Bookmark"
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-orange-600' : ''}`} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto flex-1 pb-24">
          
          {/* Hero Banner */}
          <div className="relative h-44 bg-gradient-to-br from-stone-900 via-stone-800 to-indigo-950 p-6 flex flex-col justify-end text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />
            
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-indigo-500 text-white shadow-md mb-1.5">
                {project.category}
              </span>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight leading-snug">
                {project.name}
              </h2>
            </div>
          </div>

          <div className="px-5 pt-4 space-y-5">
            
            {/* Badges Bar */}
            <div className="flex items-center justify-between py-1 border-b border-stone-100">
              <div className="flex items-center gap-1.5 bg-indigo-50 text-indigo-700 border border-indigo-200/60 px-3 py-1 rounded-full text-xs font-bold">
                <Database className="w-3.5 h-3.5" />
                <span>{project.dataComplexity}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-600">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span>Portfolio Ready</span>
              </div>
            </div>

            {/* 4 Stat Boxes (Layout serupa referensi) */}
            <div>
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-stone-50 border border-stone-100 rounded-2xl p-2.5 shadow-sm">
                  <div className="text-xs font-extrabold text-stone-900">{project.stats?.complexity || 'Menengah'}</div>
                  <div className="text-[10px] font-medium text-stone-400 mt-0.5">Level</div>
                </div>
                <div className="bg-indigo-50/80 border border-indigo-200/60 rounded-2xl p-2.5 shadow-sm">
                  <div className="text-xs font-extrabold text-indigo-700">{project.stats?.storage || 'DB'}</div>
                  <div className="text-[10px] font-medium text-indigo-500 mt-0.5">Storage</div>
                </div>
                <div className="bg-stone-50 border border-stone-100 rounded-2xl p-2.5 shadow-sm">
                  <div className="text-xs font-extrabold text-stone-900">{project.stats?.api || 'REST'}</div>
                  <div className="text-[10px] font-medium text-stone-400 mt-0.5">Network</div>
                </div>
                <div className="bg-stone-50 border border-stone-100 rounded-2xl p-2.5 shadow-sm">
                  <div className="text-xs font-extrabold text-stone-900">{project.stats?.offline || 'Ready'}</div>
                  <div className="text-[10px] font-medium text-stone-400 mt-0.5">Status</div>
                </div>
              </div>
            </div>

            {/* Deskripsi */}
            <div className="space-y-1.5">
              <h4 className="text-sm font-bold text-stone-900">
                Deskripsi Project
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Fitur Utama */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-stone-900 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-indigo-600" />
                  <span>Checklist Fitur Mandatori ({project.features.length})</span>
                </h4>
                <span className="text-[11px] font-medium text-stone-400">
                  Tap to check
                </span>
              </div>

              <div className="space-y-2">
                {project.features.map((feat, idx) => {
                  const isDone = completedFeatures[idx];
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleFeature(idx)}
                      className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center gap-3 ${
                        isDone
                          ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                          : 'bg-stone-50 hover:bg-stone-100/70 border-stone-200 text-stone-800'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                        isDone ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-stone-300'
                      }`}>
                        {isDone && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <span className={`text-xs font-medium ${isDone ? 'line-through text-stone-500' : 'text-stone-800'}`}>
                        {feat}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Rubrik Reminder */}
            <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/70 text-amber-900 space-y-1">
              <div className="text-xs font-bold flex items-center gap-1.5 text-amber-800">
                <Cpu className="w-3.5 h-3.5" />
                <span>Aturan Vibe Coding 60/40 untuk Capstone</span>
              </div>
              <p className="text-[11px] text-amber-700 leading-relaxed">
                Manfaatkan AI untuk mempercepat pembuatan layar UI dan mock JSON, namun pastikan arsitektur state management dan integrasi API Anda validasi secara mandiri.
              </p>
            </div>

          </div>
        </div>

        {/* Sticky Bottom Bar */}
        <div className="sticky bottom-0 z-30 bg-white/95 backdrop-blur-md px-5 py-3 border-t border-stone-100 flex items-center gap-3">
          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className="w-13 h-13 rounded-full border border-stone-200 bg-white hover:bg-stone-50 flex items-center justify-center text-stone-800 active:scale-95 transition-all shadow-sm"
          >
            <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-orange-600 text-orange-600' : ''}`} />
          </button>

          <button
            onClick={onClose}
            className="flex-1 py-4 px-6 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2 active:scale-98 transition-all"
          >
            <span>Pilih Project Ini</span>
            <CheckCircle2 className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
