import React from 'react';

export const DeviceFrame = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-stone-100/70 flex justify-center">
      {/* Direct responsive web container capped at max tablet size (768px) */}
      <div className="w-full max-w-[768px] min-h-screen bg-white border-x border-stone-200/50 shadow-sm flex flex-col relative">
        {children}
      </div>
    </div>
  );
};
