import React, { useState } from 'react';
import { 
  Award, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  AlertCircle, 
  Wrench, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Star
} from 'lucide-react';

export const CapstoneRubricView = ({ curriculumData, onSelectCapstone }) => {
  const [activeSubTab, setActiveSubTab] = useState('capstone'); // 'capstone' | 'rubric' | 'tools'

  const { vibeCodingProtocol, rubric, capstoneProjects, meta } = curriculumData;

  return (
    <div className="space-y-5 px-5 pt-2 pb-28 text-stone-900">
      
      {/* Title */}
      <div>
        <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
          Capstone & Evaluasi
        </h2>
        <p className="text-xs text-stone-500 mt-0.5">
          Standar kelulusan, rubrik penilaian, dan pilihan proyek akhir
        </p>
      </div>

      {/* Segmented Control */}
      <div className="flex p-1 bg-stone-100 rounded-2xl border border-stone-200/60">
        <button
          onClick={() => setActiveSubTab('capstone')}
          className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
            activeSubTab === 'capstone'
              ? 'bg-white text-orange-600 shadow-sm'
              : 'text-stone-500 hover:text-stone-800'
          }`}
        >
          Pilihan Proyek
        </button>
        <button
          onClick={() => setActiveSubTab('rubric')}
          className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
            activeSubTab === 'rubric'
              ? 'bg-white text-orange-600 shadow-sm'
              : 'text-stone-500 hover:text-stone-800'
          }`}
        >
          Protokol & Rubrik
        </button>
        <button
          onClick={() => setActiveSubTab('tools')}
          className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
            activeSubTab === 'tools'
              ? 'bg-white text-orange-600 shadow-sm'
              : 'text-stone-500 hover:text-stone-800'
          }`}
        >
          Tooling
        </button>
      </div>

      {/* TAB 1: CAPSTONE PROJECTS */}
      {activeSubTab === 'capstone' && (
        <div className="space-y-4">
          <div className="p-4 rounded-3xl bg-stone-950 text-white shadow-lg space-y-1">
            <span className="text-[10px] font-bold tracking-widest uppercase text-orange-400">
              Syarat Portofolio
            </span>
            <h3 className="text-sm font-extrabold text-white">
              Pilih 1 dari 3 Skenario Proyek
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              Dikerjakan pada Minggu 7 dan 8 dengan Clean Architecture, state management Riverpod, dan siap di-build menjadi APK.
            </p>
          </div>

          <div className="space-y-3">
            {capstoneProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectCapstone(project)}
                className="p-4 rounded-3xl bg-white border border-stone-200/90 shadow-sm hover:border-orange-400 hover:shadow-md transition-all cursor-pointer group active:scale-99 space-y-3"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-orange-600 bg-orange-50 border border-orange-200 px-2 py-0.5 rounded-full">
                      {project.category}
                    </span>
                    <h4 className="text-base font-extrabold text-stone-900 mt-1.5 group-hover:text-orange-600 transition-colors">
                      {project.name}
                    </h4>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-stone-100 group-hover:bg-orange-500 group-hover:text-white flex items-center justify-center text-stone-400 transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {project.description}
                </p>

                <div className="p-2.5 rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-between text-[11px]">
                  <span className="text-stone-500 font-medium">Kompleksitas:</span>
                  <span className="font-bold text-stone-800">{project.dataComplexity}</span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.highlights.map((h, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-medium bg-stone-100 text-stone-600 px-2.5 py-0.5 rounded-md"
                    >
                      ✓ {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: PROTOKOL 60/40 & RUBRIK PENILAIAN */}
      {activeSubTab === 'rubric' && (
        <div className="space-y-5">
          
          {/* Protokol 60/40 */}
          <div className="space-y-3">
            <h3 className="text-sm font-extrabold text-stone-900 uppercase tracking-wider flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-orange-500" />
              <span>Protokol "60% Vibe Coding" yang Benar</span>
            </h3>

            {/* Split cards: AI vs Human */}
            <div className="grid grid-cols-1 gap-3">
              {/* Card Boleh Didelegasikan ke AI */}
              <div className="p-4 rounded-3xl bg-emerald-50/70 border border-emerald-200/80 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-emerald-800 uppercase tracking-wider">
                    {vibeCodingProtocol.aiShare.label}
                  </span>
                  <span className="text-xs font-black bg-emerald-600 text-white px-2 py-0.5 rounded-full">
                    60%
                  </span>
                </div>
                <ul className="space-y-1.5 text-xs text-emerald-900">
                  {vibeCodingProtocol.aiShare.items.map((it, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Wajib Ditangani Developer */}
              <div className="p-4 rounded-3xl bg-amber-50/70 border border-amber-200/80 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-amber-900 uppercase tracking-wider">
                    {vibeCodingProtocol.humanShare.label}
                  </span>
                  <span className="text-xs font-black bg-amber-600 text-white px-2 py-0.5 rounded-full">
                    40%
                  </span>
                </div>
                <ul className="space-y-1.5 text-xs text-amber-950">
                  {vibeCodingProtocol.humanShare.items.map((it, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-700 font-bold">★</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Rubrik Penilaian Kelulusan */}
          <div className="space-y-3 pt-2">
            <h3 className="text-sm font-extrabold text-stone-900 uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-4 h-4 text-orange-500" />
              <span>Rubrik Penilaian Kelulusan (Bobot 100%)</span>
            </h3>

            <div className="space-y-2.5">
              {rubric.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-stone-900">
                      {idx + 1}. {item.title}
                    </h4>
                    <span className="text-xs font-black text-orange-600 bg-orange-50 border border-orange-200/60 px-2 py-0.5 rounded-full">
                      Bobot {item.weight}%
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* TAB 3: TOOLING ECOSYSTEM */}
      {activeSubTab === 'tools' && (
        <div className="space-y-4">
          <div className="p-4 rounded-3xl bg-stone-900 text-white space-y-1 shadow-md">
            <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider">
              Lingkungan Kerja
            </span>
            <h3 className="text-sm font-bold">VS Code AI Ecosystem</h3>
            <p className="text-xs text-stone-300">
              Kombinasi editor ringan dan alat bantu AI terintegrasi untuk akselerasi coding Flutter.
            </p>
          </div>

          <div className="space-y-2.5">
            {meta.tools.map((t, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-white border border-stone-200 shadow-sm flex items-start gap-3"
              >
                <div className="w-8 h-8 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center font-bold text-xs flex-shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-900">{t.name}</h4>
                  <p className="text-xs text-stone-500 mt-0.5">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
