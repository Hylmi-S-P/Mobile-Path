import React from 'react';
import { X, Bell, Sparkles, Clock, CheckCircle2 } from 'lucide-react';

export const NotificationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const notifications = [
    {
      id: 1,
      title: "Jadwal Belajar Hari Ini",
      message: "Target harian 120 menit: 15m Teori, 60m Vibe Coding di VS Code, dan 45m Code Review.",
      time: "10 menit yang lalu",
      icon: Clock,
      color: "text-orange-500 bg-orange-50"
    },
    {
      id: 2,
      title: "Vibe Prompting Update",
      message: "Template baru ditambahkan: Boilerplate Riverpod StateNotifier dengan AsyncValue pattern.",
      time: "1 jam yang lalu",
      icon: Sparkles,
      color: "text-amber-500 bg-amber-50"
    },
    {
      id: 3,
      title: "Persiapan Capstone Project",
      message: "Skenario Capstone telah dibuka: Provoks POS Mini, Task Master AI, atau Catalog App.",
      time: "Kemarin",
      icon: CheckCircle2,
      color: "text-emerald-500 bg-emerald-50"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-center items-end sm:items-center p-0 sm:p-4 animate-in fade-in duration-150">
      <div className="w-full max-w-sm bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl p-5 text-stone-900 border border-stone-100 max-h-[85vh] overflow-y-auto">
        
        <div className="flex items-center justify-between pb-3 border-b border-stone-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
              <Bell className="w-4 h-4" />
            </div>
            <h3 className="font-extrabold text-sm text-stone-900">Notifikasi Pembelajaran</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-500"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3 mt-4">
          {notifications.map((n) => {
            const Icon = n.icon;
            return (
              <div key={n.id} className="p-3 rounded-2xl bg-stone-50 border border-stone-100 flex items-start gap-3">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${n.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-stone-900">{n.title}</h4>
                    <span className="text-[10px] text-stone-400">{n.time}</span>
                  </div>
                  <p className="text-[11px] text-stone-600 mt-1 leading-relaxed">{n.message}</p>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={onClose}
          className="w-full mt-4 py-3 rounded-2xl bg-stone-900 text-white font-bold text-xs hover:bg-stone-800 transition-colors"
        >
          Tutup
        </button>
      </div>
    </div>
  );
};
