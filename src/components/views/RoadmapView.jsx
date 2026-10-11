import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  ChevronRight, 
  Layers, 
  Sparkles, 
  Clock, 
  Code2,
  Calendar,
  Search
} from 'lucide-react';

export const RoadmapView = ({ curriculumData, onSelectWeek }) => {
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [filterQuery, setFilterQuery] = useState('');

  const currentMonthData = curriculumData.months.find(m => m.monthNumber === selectedMonth);

  const filteredWeeks = currentMonthData?.weeks.filter(w =>
    w.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
    w.focus.toLowerCase().includes(filterQuery.toLowerCase()) ||
    w.tags.some(t => t.toLowerCase().includes(filterQuery.toLowerCase()))
  ) || [];

  return (
    <div className="space-y-5 px-5 pt-2 pb-28 text-stone-900">
      
      {/* Header title */}
      <div>
        <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
          Silabus & Roadmap Belajar
        </h2>
        <p className="text-xs text-stone-500 mt-0.5">
          Roadmap intensif 8 Minggu Flutter + VS Code AI Workflow
        </p>
      </div>

      {/* Month Switcher Tabs (Segmented Control) */}
      <div className="flex p-1 bg-stone-100 rounded-2xl border border-stone-200/60">
        <button
          onClick={() => setSelectedMonth(1)}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-extrabold transition-all duration-200 ${
            selectedMonth === 1
              ? 'bg-white text-orange-600 shadow-sm border border-stone-200/40'
              : 'text-stone-500 hover:text-stone-800'
          }`}
        >
          <span>Bulan I: Fondasi Dart & AI UI</span>
          <span className="block text-[10px] font-normal text-stone-400">Minggu 1 - 4</span>
        </button>

        <button
          onClick={() => setSelectedMonth(2)}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-extrabold transition-all duration-200 ${
            selectedMonth === 2
              ? 'bg-white text-orange-600 shadow-sm border border-stone-200/40'
              : 'text-stone-500 hover:text-stone-800'
          }`}
        >
          <span>Bulan II: Data & Capstone</span>
          <span className="block text-[10px] font-normal text-stone-400">Minggu 5 - 8</span>
        </button>
      </div>

      {/* Month description card */}
      <div className="p-4 rounded-3xl bg-stone-50 border border-stone-200/80">
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
          <h3 className="text-xs font-black uppercase tracking-wider text-stone-800">
            {currentMonthData?.title}
          </h3>
        </div>
        <p className="text-xs text-stone-600 leading-relaxed">
          {currentMonthData?.description}
        </p>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5 pointer-events-none" />
        <input
          type="text"
          value={filterQuery}
          onChange={(e) => setFilterQuery(e.target.value)}
          placeholder="Cari topik di bulan ini..."
          className="w-full h-11 pl-10 pr-4 bg-stone-100 text-stone-800 placeholder-stone-400 rounded-2xl text-xs font-medium border border-transparent focus:border-orange-500 focus:bg-white focus:outline-none transition-all"
        />
      </div>

      {/* Timeline of Weeks */}
      <div className="space-y-4 relative before:absolute before:left-4 before:top-4 before:bottom-4 before:w-0.5 before:bg-stone-200">
        {filteredWeeks.map((week, idx) => (
          <div
            key={week.id}
            onClick={() => onSelectWeek(week)}
            className="relative pl-10 group cursor-pointer"
          >
            {/* Timeline bullet icon */}
            <div className="absolute left-1.5 top-4 w-5 h-5 rounded-full bg-white border-4 border-orange-500 group-hover:scale-125 transition-transform shadow-sm" />

            <div className="p-4 rounded-3xl bg-white border border-stone-200/80 group-hover:border-orange-400 shadow-sm group-hover:shadow-md transition-all active:scale-99">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-orange-600 bg-orange-50 border border-orange-200/60 px-2 py-0.5 rounded-md">
                      Minggu {week.weekNumber}
                    </span>
                    <span className="text-[10px] text-stone-400 font-medium">
                      {week.days.length} Sesi Belajar
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-stone-900 mt-1.5 group-hover:text-orange-600 transition-colors">
                    {week.title}
                  </h4>
                </div>

                <div className="w-8 h-8 rounded-full bg-stone-100 group-hover:bg-orange-500 group-hover:text-white flex items-center justify-center text-stone-400 transition-colors flex-shrink-0">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>

              <p className="text-xs text-stone-500 mt-2 line-clamp-2 leading-relaxed">
                {week.focus}
              </p>

              {/* Sub-Days preview */}
              <div className="mt-3 pt-2.5 border-t border-stone-100 space-y-1.5">
                {week.days.map((d, dIdx) => (
                  <div key={dIdx} className="flex items-center justify-between text-[11px] text-stone-600">
                    <span className="font-semibold text-stone-700">{d.days}: {d.topic}</span>
                    <span className="text-[10px] text-stone-400">Teori+Code</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-3">
                {week.tags.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-medium bg-stone-100 text-stone-600 px-2 py-0.5 rounded-md"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
