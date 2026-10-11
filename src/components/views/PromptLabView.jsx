import React, { useState } from 'react';
import { 
  Sparkles, 
  Copy, 
  Check, 
  Search, 
  Layers, 
  Terminal, 
  Cpu, 
  ArrowRight,
  Info
} from 'lucide-react';

export const PromptLabView = ({ curriculumData }) => {
  const [copiedId, setCopiedId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['Semua', 'UI Scaffolding', 'Data Models', 'State Management', 'Networking', 'Architecture'];

  const prompts = curriculumData.promptLab || [];

  const filteredPrompts = prompts.filter(p => {
    const matchCat = selectedCategory === 'Semua' || p.category === selectedCategory;
    const matchSearch = 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.prompt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchSearch;
  });

  const handleCopy = (id, promptText) => {
    navigator.clipboard.writeText(promptText);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-5 px-5 pt-2 pb-28 text-stone-900">
      
      {/* Title */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 text-xs font-bold border border-orange-500/20 mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Vibe Prompting Cheatsheet</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
          Vibe Prompt Lab
        </h2>
        <p className="text-xs text-stone-500 mt-0.5">
          Koleksi template prompt AI teruji untuk akselerasi Flutter di VS Code
        </p>
      </div>

      {/* Guide Banner */}
      <div className="p-4 rounded-3xl bg-stone-900 text-white shadow-md space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center">
            <Info className="w-4 h-4" />
          </div>
          <h4 className="text-xs font-bold">Protokol Prompting 3x Iterasi</h4>
        </div>
        <p className="text-[11px] text-stone-300 leading-relaxed">
          1. <strong>Struktur Dasar</strong> (nama widget & parameter) → 2. <strong>Visual & Styling</strong> (Card, elevation, warna) → 3. <strong>Interaktivitas & State</strong> (callback & review logic).
        </p>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5 pointer-events-none" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Cari prompt Flutter..."
          className="w-full h-11 pl-10 pr-4 bg-stone-100 text-stone-800 placeholder-stone-400 rounded-2xl text-xs font-medium border border-transparent focus:border-orange-500 focus:bg-white focus:outline-none transition-all"
        />
      </div>

      {/* Filter Categories */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar py-0.5 -mx-5 px-5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all flex-shrink-0 ${
              selectedCategory === cat
                ? 'bg-stone-900 text-white shadow-sm'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Prompts List */}
      <div className="space-y-4">
        {filteredPrompts.map((item) => {
          const isCopied = copiedId === item.id;
          return (
            <div
              key={item.id}
              className="p-4 rounded-3xl bg-white border border-stone-200 shadow-sm hover:border-orange-300 transition-all space-y-3"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-md border border-orange-200/50">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-bold text-stone-900 mt-1.5">
                    {item.title}
                  </h3>
                </div>

                <button
                  onClick={() => handleCopy(item.id, item.prompt)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm active:scale-95 flex-shrink-0 ${
                    isCopied
                      ? 'bg-emerald-500 text-white'
                      : 'bg-stone-900 hover:bg-orange-600 text-white'
                  }`}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Box */}
              <div className="p-3.5 rounded-2xl bg-stone-950 text-stone-200 font-mono text-xs leading-relaxed border border-stone-800 select-all whitespace-pre-wrap">
                {item.prompt}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {item.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-medium bg-stone-100 text-stone-600 px-2 py-0.5 rounded-md"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
