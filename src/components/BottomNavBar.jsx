import React from 'react';
import { Home, Map, Sparkles, Award } from 'lucide-react';

export const BottomNavBar = ({ activeTab, onSelectTab }) => {
  const tabs = [
    {
      id: 'home',
      label: 'Beranda',
      icon: Home,
    },
    {
      id: 'roadmap',
      label: 'Silabus',
      icon: Map,
    },
    {
      id: 'prompts',
      label: 'Prompt Lab',
      icon: Sparkles,
    },
    {
      id: 'capstone',
      label: 'Capstone',
      icon: Award,
    },
  ];

  return (
    <div className="fixed bottom-4 left-0 right-0 z-40 flex justify-center pointer-events-none px-4">
      {/* Organic dark island pill nav (matching Screen 2 in reference image) */}
      <nav 
        aria-label="Navigasi Utama"
        className="pointer-events-auto bg-stone-950/95 text-white backdrop-blur-xl border border-stone-800/80 rounded-full px-3 py-2 flex items-center gap-1 sm:gap-3 shadow-2xl shadow-black/40 transition-all duration-300"
      >
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className={`relative flex items-center justify-center transition-all duration-300 min-w-[50px] sm:min-w-[58px] h-12 rounded-full ${
                isActive
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-600/40'
                  : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900/60'
              }`}
              aria-label={tab.label}
              title={tab.label}
            >
              <div className="flex flex-col items-center justify-center gap-0.5">
                <Icon className={`w-5 h-5 transition-transform duration-200 ${isActive ? 'scale-110' : ''}`} />
                <span className={`text-[9px] font-semibold tracking-tight transition-opacity ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                  {tab.label}
                </span>
              </div>
            </button>
          );
        })}
      </nav>
    </div>
  );
};
