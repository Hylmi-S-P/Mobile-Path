import React, { useState } from 'react';
import { 
  ChevronLeft, 
  Bookmark, 
  Percent, 
  Star, 
  Clock, 
  Copy, 
  Check, 
  CheckCircle2, 
  Circle,
  Share2, 
  Code2, 
  Sparkles,
  BookOpen
} from 'lucide-react';

export const WeekDetailModal = ({ week, onClose, onOpenPromptLab }) => {
  const [copied, setCopied] = useState(false);
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [completedDays, setCompletedDays] = useState(() => {
    // initialize from week data
    const initial = {};
    week.days.forEach((d, idx) => {
      initial[idx] = d.completed || false;
    });
    return initial;
  });
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleDay = (idx) => {
    setCompletedDays(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const handleCopyPrompt = () => {
    if (week.promptSnippet?.prompt) {
      navigator.clipboard.writeText(week.promptSnippet.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex justify-center items-end sm:items-center overflow-y-auto p-0 sm:p-4 animate-in fade-in duration-200">
      {/* Modal / Sheet Container */}
      <div className="w-full max-w-lg bg-white rounded-t-[36px] sm:rounded-[36px] shadow-2xl overflow-hidden flex flex-col max-h-[92vh] text-stone-900 border border-stone-100">
        
        {/* Top Floating App Bar (Matching screen 3 in reference image) */}
        <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-md px-5 py-3.5 flex items-center justify-between border-b border-stone-100">
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full border border-stone-200 bg-white hover:bg-stone-50 flex items-center justify-center text-stone-700 active:scale-95 transition-all shadow-sm"
            aria-label="Kembali"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <h3 className="font-bold text-base text-stone-900">
            Detail Modul
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

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto flex-1 pb-24">
          
          {/* Top Hero Banner with visual & badge */}
          <div className="relative h-44 bg-gradient-to-br from-stone-900 via-stone-850 to-orange-950 p-6 flex flex-col justify-end text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/20 rounded-full blur-2xl pointer-events-none" />
            
            {/* Outline Week Number Watermark */}
            <div className="absolute -top-3 -right-2 text-8xl font-black text-outline-white opacity-15 pointer-events-none select-none tracking-tighter">
              0{week.weekNumber}
            </div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-orange-500 text-white shadow-md mb-1.5">
                Minggu {week.weekNumber} • Bulan {week.month}
              </span>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight leading-snug">
                {week.title}
              </h2>
            </div>
          </div>

          {/* Overlapping Content Container with rounded top */}
          <div className="px-5 pt-4 space-y-5">
            
            {/* Badges Bar (Matching screen 3: % 20% OFF and Rating) */}
            <div className="flex items-center justify-between py-1 border-b border-stone-100">
              <div className="flex items-center gap-1.5 bg-orange-500/10 text-orange-600 border border-orange-500/20 px-3 py-1 rounded-full text-xs font-bold">
                <Percent className="w-3.5 h-3.5" />
                <span>60% Vibe Coding</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-semibold text-stone-600">
                <div className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>4.9 (Kurikulum Resmi)</span>
                </div>
                <span className="text-stone-300">•</span>
                <span className="text-stone-500">Clean Arch</span>
              </div>
            </div>

            {/* 4 Stat Boxes (Matching screen 3: 189 Kcal, 28 Proteins, 18 Fats, 24 Carbo) */}
            <div>
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-stone-50 border border-stone-100 rounded-2xl p-2.5 shadow-sm">
                  <div className="text-sm font-extrabold text-stone-900">{week.stats?.theory || '15m'}</div>
                  <div className="text-[10px] font-medium text-stone-400 mt-0.5">Teori</div>
                </div>
                <div className="bg-orange-50/80 border border-orange-200/60 rounded-2xl p-2.5 shadow-sm">
                  <div className="text-sm font-extrabold text-orange-600">{week.stats?.vibe || '60m'}</div>
                  <div className="text-[10px] font-medium text-orange-500 mt-0.5">Vibe Code</div>
                </div>
                <div className="bg-stone-50 border border-stone-100 rounded-2xl p-2.5 shadow-sm">
                  <div className="text-sm font-extrabold text-stone-900">{week.stats?.review || '45m'}</div>
                  <div className="text-[10px] font-medium text-stone-400 mt-0.5">Review</div>
                </div>
                <div className="bg-stone-50 border border-stone-100 rounded-2xl p-2.5 shadow-sm">
                  <div className="text-sm font-extrabold text-stone-900">{week.stats?.duration || '7 Hari'}</div>
                  <div className="text-[10px] font-medium text-stone-400 mt-0.5">Durasi</div>
                </div>
              </div>
            </div>

            {/* Description Section with "See more" toggle (Matching screen 3) */}
            <div className="space-y-1.5">
              <h4 className="text-sm font-bold text-stone-900">
                Fokus & Deskripsi Materi
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                {showFullDesc ? week.focus : `${week.focus.slice(0, 100)}...`}
                <button
                  onClick={() => setShowFullDesc(!showFullDesc)}
                  className="text-orange-600 font-bold ml-1.5 hover:underline focus:outline-none"
                >
                  {showFullDesc ? 'Lihat lebih sedikit' : 'Lihat selengkapnya'}
                </button>
              </p>
            </div>

            {/* Daily Curriculum Checklist (Day-by-Day Breakdown) */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-stone-900 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-orange-500" />
                  <span>Jadwal Harian ({week.days.length} Sesi)</span>
                </h4>
                <span className="text-[11px] font-medium text-stone-400">
                  Klik untuk centang
                </span>
              </div>

              <div className="space-y-2">
                {week.days.map((day, idx) => {
                  const isDone = completedDays[idx];
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleDay(idx)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                        isDone
                          ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                          : 'bg-stone-50/70 hover:bg-stone-100/70 border-stone-200/80 text-stone-800'
                      }`}
                    >
                      <div className="pt-0.5 text-stone-400">
                        {isDone ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                        ) : (
                          <Circle className="w-5 h-5 text-stone-400" />
                        )}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className={`text-[11px] font-bold uppercase tracking-wider ${isDone ? 'text-emerald-700' : 'text-orange-600'}`}>
                            {day.days}
                          </span>
                          {isDone && (
                            <span className="text-[10px] font-bold bg-emerald-200/60 text-emerald-800 px-2 py-0.5 rounded-full">
                              Selesai
                            </span>
                          )}
                        </div>
                        <h5 className={`text-xs font-bold mt-0.5 ${isDone ? 'line-through text-stone-500' : 'text-stone-900'}`}>
                          {day.topic}
                        </h5>
                        <p className="text-[11px] text-stone-500 mt-1 leading-relaxed">
                          {day.detail}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Prompt Snippet Box (Cheatsheet Prompt AI) */}
            {week.promptSnippet && (
              <div className="rounded-2xl bg-stone-900 text-stone-100 p-4 border border-stone-800 space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-orange-400 text-xs font-bold">
                    <Sparkles className="w-4 h-4" />
                    <span>{week.promptSnippet.title}</span>
                  </div>
                  <button
                    onClick={handleCopyPrompt}
                    className="flex items-center gap-1 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs px-2.5 py-1 rounded-full font-medium transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Salin Prompt</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="bg-stone-950 p-3 rounded-xl font-mono text-[11px] text-stone-300 leading-relaxed border border-stone-800/80 whitespace-pre-wrap select-all">
                  {week.promptSnippet.prompt}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sticky Floating Bottom Action Bar (Matching screen 3 in reference image) */}
        <div className="sticky bottom-0 z-30 bg-white/95 backdrop-blur-md px-5 py-3 border-t border-stone-100 flex items-center gap-3">
          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className="w-13 h-13 rounded-full border border-stone-200 bg-white hover:bg-stone-50 flex items-center justify-center text-stone-800 active:scale-95 transition-all shadow-sm"
            aria-label="Bookmark"
          >
            <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-orange-600 text-orange-600' : ''}`} />
          </button>

          <button
            onClick={() => {
              onClose();
              if (onOpenPromptLab) onOpenPromptLab();
            }}
            className="flex-1 py-4 px-6 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-sm shadow-xl shadow-orange-600/30 flex items-center justify-center gap-2 active:scale-98 transition-all"
          >
            <span>Buka Prompt Lab Terkait</span>
            <Sparkles className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
