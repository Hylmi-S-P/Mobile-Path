import React from 'react';
import { 
  Clock, 
  ChevronRight, 
  ArrowRight
} from 'lucide-react';
import { FeaturedHeroCard } from '../FeaturedHeroCard';

export const HomeView = ({ 
  curriculumData, 
  onSelectWeek, 
  onSelectCapstone, 
  onNavigateTab 
}) => {
  // Flatten all weeks
  const allWeeks = curriculumData.months.flatMap(m => m.weeks);

  return (
    <div className="space-y-5 px-5 pt-3 pb-28 text-stone-900">
      
      {/* Hero Featured Card (Matching screen 2 orange card) */}
      <FeaturedHeroCard 
        onExploreRoadmap={() => onNavigateTab('roadmap')} 
        onOpenPromptLab={() => onNavigateTab('prompts')}
      />

      {/* Rutinitas Harian 120 Menit Box */}
      <div className="p-4 rounded-3xl bg-gradient-to-r from-stone-900 to-stone-850 text-white shadow-lg space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">Target Rutinitas Harian</h4>
              <p className="text-[10px] text-stone-400">Batch Intensif 120 Menit / Hari</p>
            </div>
          </div>
          <span className="text-[11px] font-black text-orange-400 bg-orange-500/10 border border-orange-500/20 px-2.5 py-1 rounded-full">
            2 Jam / Hari
          </span>
        </div>

        {/* 3 Progress Bars breakdown with Grotesk + Outline accents */}
        <div className="grid grid-cols-3 gap-2 pt-1 text-center">
          <div className="bg-stone-800/80 rounded-2xl p-2.5 border border-stone-700/50">
            <div className="flex items-center justify-center gap-1">
              <span className="text-base font-black text-amber-400">15</span>
              <span className="text-[10px] font-black text-outline-white">MIN</span>
            </div>
            <div className="text-[10px] text-stone-400 mt-0.5">Teori Dasar</div>
          </div>
          <div className="bg-orange-950/60 rounded-2xl p-2.5 border border-orange-700/40">
            <div className="flex items-center justify-center gap-1">
              <span className="text-base font-black text-orange-400">60</span>
              <span className="text-[10px] font-black text-outline-white">MIN</span>
            </div>
            <div className="text-[10px] text-orange-300 mt-0.5">Vibe Coding</div>
          </div>
          <div className="bg-stone-800/80 rounded-2xl p-2.5 border border-stone-700/50">
            <div className="flex items-center justify-center gap-1">
              <span className="text-base font-black text-stone-200">45</span>
              <span className="text-[10px] font-black text-outline-white">MIN</span>
            </div>
            <div className="text-[10px] text-stone-400 mt-0.5">Code Review</div>
          </div>
        </div>
      </div>

      {/* Section: Silabus Mingguan (Weekly Modules) */}
      <div className="space-y-3 pt-1">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-extrabold text-stone-900 tracking-tight">
              Modul Kurikulum (8 Minggu)
            </h3>
            <p className="text-xs text-stone-400">
              {allWeeks.length} modul kurikulum intensif
            </p>
          </div>
          <button
            onClick={() => onNavigateTab('roadmap')}
            className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-0.5"
          >
            <span>Lihat Semua</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Week Cards List */}
        <div className="space-y-3">
          {allWeeks.map((week) => (
            <div
              key={week.id}
              onClick={() => onSelectWeek(week)}
              className="p-4 rounded-3xl border border-stone-200/80 bg-white hover:border-orange-300 shadow-sm hover:shadow-md transition-all cursor-pointer group active:scale-99 flex flex-col justify-between gap-3 relative overflow-hidden"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-xl bg-orange-500/10 text-orange-600 font-extrabold text-xs flex items-center justify-center border border-orange-500/20">
                    W{week.weekNumber}
                  </span>
                  <div>
                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">
                      Bulan {week.month} • {week.stats?.duration}
                    </span>
                    <h4 className="text-sm font-bold text-stone-900 group-hover:text-orange-600 transition-colors line-clamp-1">
                      {week.title}
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xl font-black text-outline-dark opacity-15 select-none">
                    0{week.weekNumber}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-stone-100 group-hover:bg-orange-500 group-hover:text-white flex items-center justify-center text-stone-400 transition-all flex-shrink-0">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed">
                {week.focus}
              </p>

              {/* Tags & Day pill */}
              <div className="flex items-center justify-between pt-1 border-t border-stone-100">
                <div className="flex flex-wrap gap-1.5">
                  {week.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-medium bg-stone-100 text-stone-600 px-2 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="text-[10px] font-bold text-orange-600 flex items-center gap-1">
                  <span>{week.days.length} Sesi Belajar</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section: Capstone Project Showcase Cards */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-extrabold text-stone-900 tracking-tight">
              Capstone Mini Project
            </h3>
            <p className="text-xs text-stone-400">Pilih 1 dari 3 skenario aplikasi portofolio</p>
          </div>
          <button
            onClick={() => onNavigateTab('capstone')}
            className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-0.5"
          >
            <span>Detail Rubrik</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {curriculumData.capstoneProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => onSelectCapstone(proj)}
              className="p-4 rounded-3xl bg-gradient-to-r from-stone-900 to-stone-850 text-white shadow-md hover:shadow-lg transition-all cursor-pointer group active:scale-99 border border-stone-800"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-bold text-orange-400 bg-orange-500/10 border border-orange-500/30 px-2.5 py-0.5 rounded-full">
                    {proj.dataComplexity}
                  </span>
                  <h4 className="text-sm font-extrabold text-white mt-1.5 group-hover:text-orange-400 transition-colors">
                    {proj.name}
                  </h4>
                </div>
                <div className="w-8 h-8 rounded-full bg-stone-800 group-hover:bg-orange-500 group-hover:text-white flex items-center justify-center text-stone-400 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
              <p className="text-xs text-stone-300 mt-2 line-clamp-2">
                {proj.description}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
