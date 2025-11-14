"use client";

import { useState } from "react";

interface IconSidebarProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

export default function IconSidebar({ activeView, onViewChange }: IconSidebarProps) {
  return (
    <div className="w-[60px] h-full bg-black/60 border-r border-primary/30 flex flex-col items-center py-4 gap-4">
      {/* Explorer */}
      <button
        onClick={() => onViewChange('explorer')}
        className={`w-10 h-10 flex items-center justify-center rounded-md transition-all duration-200 relative
          ${activeView === 'explorer' ? 'bg-primary/30' : 'hover:bg-primary/20'}`}
        title="Explorer"
      >
        <span className="text-xl">📁</span>
        {activeView === 'explorer' && (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-6 bg-primary rounded-r-md -ml-[15px]" />
        )}
      </button>

      {/* Search */}
      <button
        onClick={() => onViewChange('search')}
        className={`w-10 h-10 flex items-center justify-center rounded-md transition-all duration-200 relative
          ${activeView === 'search' ? 'bg-primary/30' : 'hover:bg-primary/20'}`}
        title="Search"
      >
        <span className="text-xl">🔍</span>
        {activeView === 'search' && (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-6 bg-primary rounded-r-md -ml-[15px]" />
        )}
      </button>

      {/* Projects */}
      <button
        onClick={() => onViewChange('projects')}
        className={`w-10 h-10 flex items-center justify-center rounded-md transition-all duration-200 relative
          ${activeView === 'projects' ? 'bg-primary/30' : 'hover:bg-primary/20'}`}
        title="Projects"
      >
        <span className="text-xl">📦</span>
        {activeView === 'projects' && (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-6 bg-primary rounded-r-md -ml-[15px]" />
        )}
      </button>

      {/* Settings */}
      <button
        onClick={() => onViewChange('settings')}
        className={`w-10 h-10 flex items-center justify-center rounded-md transition-all duration-200 relative
          ${activeView === 'settings' ? 'bg-primary/30' : 'hover:bg-primary/20'}`}
        title="Settings"
      >
        <span className="text-xl">⚙️</span>
        {activeView === 'settings' && (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-6 bg-primary rounded-r-md -ml-[15px]" />
        )}
      </button>

      {/* Spacer */}
      <div className="flex-1" />

      {/* User/Contact */}
      <button
        onClick={() => onViewChange('contact')}
        className={`w-10 h-10 flex items-center justify-center rounded-md transition-all duration-200 relative
          ${activeView === 'contact' ? 'bg-primary/30' : 'hover:bg-primary/20'}`}
        title="Contact"
      >
        <span className="text-xl">👤</span>
        {activeView === 'contact' && (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-6 bg-primary rounded-r-md -ml-[15px]" />
        )}
      </button>
    </div>
  );
}
