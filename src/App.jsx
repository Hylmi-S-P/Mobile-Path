import React, { useState } from 'react';
import { DeviceFrame } from './components/DeviceFrame';
import { TopHeader } from './components/TopHeader';
import { BottomNavBar } from './components/BottomNavBar';
import { HomeView } from './components/views/HomeView';
import { RoadmapView } from './components/views/RoadmapView';
import { PromptLabView } from './components/views/PromptLabView';
import { CapstoneRubricView } from './components/views/CapstoneRubricView';
import { WeekDetailModal } from './components/WeekDetailModal';
import { CapstoneDetailModal } from './components/CapstoneDetailModal';
import { NotificationModal } from './components/NotificationModal';
import { curriculumData } from './data/curriculumData';

export default function App() {
  // Navigation tabs: 'home' | 'roadmap' | 'prompts' | 'capstone'
  const [activeTab, setActiveTab] = useState('home');

  // Selected modals
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [selectedCapstone, setSelectedCapstone] = useState(null);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  // Switch tab
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <DeviceFrame>
      <div className="min-h-screen flex flex-col bg-white text-stone-900 relative">
        
        {/* Top Sticky Header */}
        <TopHeader
          onOpenNotifications={() => setIsNotificationOpen(true)}
        />

        {/* Main View Content */}
        <main className="flex-1 w-full">
          {activeTab === 'home' && (
            <HomeView
              curriculumData={curriculumData}
              onSelectWeek={(week) => setSelectedWeek(week)}
              onSelectCapstone={(cap) => setSelectedCapstone(cap)}
              onNavigateTab={handleTabChange}
              isLoading={false}
            />
          )}

          {activeTab === 'roadmap' && (
            <RoadmapView
              curriculumData={curriculumData}
              onSelectWeek={(week) => setSelectedWeek(week)}
            />
          )}

          {activeTab === 'prompts' && (
            <PromptLabView
              curriculumData={curriculumData}
            />
          )}

          {activeTab === 'capstone' && (
            <CapstoneRubricView
              curriculumData={curriculumData}
              onSelectCapstone={(cap) => setSelectedCapstone(cap)}
            />
          )}
        </main>

        {/* Floating Island Bottom Navigation Bar */}
        <BottomNavBar
          activeTab={activeTab}
          onSelectTab={handleTabChange}
        />

        {/* Detail Modals */}
        {selectedWeek && (
          <WeekDetailModal
            week={selectedWeek}
            onClose={() => setSelectedWeek(null)}
            onOpenPromptLab={() => {
              setActiveTab('prompts');
              setSelectedWeek(null);
            }}
          />
        )}

        {selectedCapstone && (
          <CapstoneDetailModal
            project={selectedCapstone}
            onClose={() => setSelectedCapstone(null)}
          />
        )}

        {/* Notification Modal */}
        <NotificationModal
          isOpen={isNotificationOpen}
          onClose={() => setIsNotificationOpen(false)}
        />

      </div>
    </DeviceFrame>
  );
}
