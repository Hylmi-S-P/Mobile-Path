import React from 'react';

export const HeaderSkeleton = () => (
  <div className="flex items-center justify-between py-3 px-1">
    <div className="flex items-center gap-3">
      <div className="w-11 h-11 rounded-full skeleton-shimmer" />
      <div className="space-y-1.5">
        <div className="w-20 h-3 rounded skeleton-shimmer" />
        <div className="w-32 h-4 rounded skeleton-shimmer" />
      </div>
    </div>
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 rounded-full skeleton-shimmer" />
      <div className="w-10 h-10 rounded-full skeleton-shimmer" />
    </div>
  </div>
);

export const SearchBarSkeleton = () => (
  <div className="flex items-center gap-2 my-2">
    <div className="flex-1 h-12 rounded-2xl skeleton-shimmer" />
    <div className="w-12 h-12 rounded-2xl skeleton-shimmer" />
  </div>
);

export const CategoriesSkeleton = () => (
  <div className="flex gap-2 overflow-x-hidden my-3">
    <div className="w-16 h-9 rounded-full skeleton-shimmer flex-shrink-0" />
    <div className="w-28 h-9 rounded-full skeleton-shimmer flex-shrink-0" />
    <div className="w-28 h-9 rounded-full skeleton-shimmer flex-shrink-0" />
    <div className="w-24 h-9 rounded-full skeleton-shimmer flex-shrink-0" />
  </div>
);

export const FeaturedCardSkeleton = () => (
  <div className="w-full h-64 rounded-3xl skeleton-shimmer my-3 relative overflow-hidden">
    <div className="p-6 flex flex-col justify-between h-full">
      <div className="flex justify-between items-center">
        <div className="w-24 h-6 rounded-full bg-white/40" />
        <div className="w-16 h-6 rounded-full bg-white/40" />
      </div>
      <div className="space-y-2">
        <div className="w-3/4 h-7 rounded-lg bg-white/50" />
        <div className="w-1/2 h-5 rounded-lg bg-white/40" />
      </div>
      <div className="flex items-center justify-between pt-2">
        <div className="w-24 h-8 rounded-lg bg-white/50" />
        <div className="w-28 h-10 rounded-full bg-white/60" />
      </div>
    </div>
  </div>
);

export const WeekCardSkeleton = () => (
  <div className="p-4 rounded-2xl border border-gray-100 bg-white shadow-sm my-2 space-y-3">
    <div className="flex justify-between items-center">
      <div className="w-20 h-5 rounded-md skeleton-shimmer" />
      <div className="w-16 h-5 rounded-full skeleton-shimmer" />
    </div>
    <div className="w-3/4 h-5 rounded skeleton-shimmer" />
    <div className="w-full h-3.5 rounded skeleton-shimmer" />
    <div className="flex gap-2 pt-1">
      <div className="w-16 h-6 rounded-md skeleton-shimmer" />
      <div className="w-16 h-6 rounded-md skeleton-shimmer" />
      <div className="w-16 h-6 rounded-md skeleton-shimmer" />
    </div>
  </div>
);

export const DetailViewSkeleton = () => (
  <div className="p-5 space-y-5 animate-pulse">
    <div className="h-48 rounded-3xl skeleton-shimmer" />
    <div className="flex justify-between gap-2">
      <div className="flex-1 h-16 rounded-2xl skeleton-shimmer" />
      <div className="flex-1 h-16 rounded-2xl skeleton-shimmer" />
      <div className="flex-1 h-16 rounded-2xl skeleton-shimmer" />
      <div className="flex-1 h-16 rounded-2xl skeleton-shimmer" />
    </div>
    <div className="w-2/3 h-6 rounded skeleton-shimmer" />
    <div className="space-y-2">
      <div className="w-full h-3.5 rounded skeleton-shimmer" />
      <div className="w-full h-3.5 rounded skeleton-shimmer" />
      <div className="w-4/5 h-3.5 rounded skeleton-shimmer" />
    </div>
    <div className="h-24 rounded-2xl skeleton-shimmer" />
  </div>
);
