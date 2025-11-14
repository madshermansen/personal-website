"use client";

import { useState } from "react";

interface SplitScreenLayoutProps {
  codeContent: React.ReactNode;
  outputContent: React.ReactNode;
  fileName: string;
}

export default function SplitScreenLayout({ codeContent, outputContent, fileName }: SplitScreenLayoutProps) {
  return (
    <div className="h-full flex flex-col lg:flex-row">
      {/* Code Panel */}
      <div className="flex-1 flex flex-col border-b lg:border-b-0 lg:border-r border-primary/20">
        {/* Code Header */}
        <div className="flex items-center justify-between px-4 py-2 bg-black/20 border-b border-primary/20">
          <div className="flex items-center gap-2">
            <span className="text-xs text-text/50 font-mono">📝 CODE</span>
            <span className="text-xs text-primary/70 font-mono">{fileName}</span>
          </div>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
        </div>

        {/* Code Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {codeContent}
        </div>
      </div>

      {/* Output Panel */}
      <div className="flex-1 flex flex-col">
        {/* Output Header */}
        <div className="flex items-center justify-between px-4 py-2 bg-black/20 border-b border-primary/20">
          <div className="flex items-center gap-2">
            <span className="text-xs text-text/50 font-mono">▶ OUTPUT</span>
            <span className="text-xs text-green-400/70 font-mono">localhost:3000</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-green-400/70 font-mono">Running</span>
          </div>
        </div>

        {/* Output Content */}
        <div className="flex-1 overflow-y-auto bg-gradient-to-br from-background to-black/40 p-6">
          {outputContent}
        </div>
      </div>
    </div>
  );
}
