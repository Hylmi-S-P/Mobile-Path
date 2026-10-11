import React from 'react';
import { Bell, ChevronDown } from 'lucide-react';

export const TopHeader = ({
  onOpenNotifications,
  hasUnread = true
}) => {
  return (
    <header className="px-5 pt-3.5 pb-2.5 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-30 border-b border-stone-100">
      {/* User Info & Hub Location */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-stone-900 to-stone-700 p-0.5 shadow-md">
            <div className="w-full h-full rounded-full bg-stone-100 flex items-center justify-center text-stone-800 font-bold text-sm overflow-hidden">
              <span className="bg-gradient-to-tr from-orange-500 to-amber-500 text-white w-full h-full flex items-center justify-center font-bold text-xs">
                PRO
              </span>
            </div>
          </div>
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full" />
        </div>

        <div className="flex flex-col">
          <span className="text-[11px] font-medium text-stone-400">
            Student • Mobile Path
          </span>
          <div className="flex items-center gap-1 text-sm font-bold text-stone-900">
            <span>Provoks Hub, ID</span>
            <ChevronDown className="w-3.5 h-3.5 text-stone-500" />
          </div>
        </div>
      </div>

      {/* Action Button: Notification Bell */}
      <div className="flex items-center gap-2">
        <button
          onClick={onOpenNotifications}
          className="relative w-10 h-10 rounded-full border border-stone-200 bg-white hover:bg-stone-50 flex items-center justify-center text-stone-700 active:scale-95 transition-all shadow-sm"
          aria-label="Notifikasi"
        >
          <Bell className="w-4 h-4" />
          {hasUnread && (
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-orange-500 animate-ping" />
          )}
          {hasUnread && (
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-orange-500" />
          )}
        </button>
      </div>
    </header>
  );
};
