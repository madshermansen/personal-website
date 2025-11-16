"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface SplitScreenLayoutProps {
  codeContent: React.ReactNode;
  outputContent: React.ReactNode;
  fileName: string;
  lineCount?: number;
}

export default function SplitScreenLayout({ codeContent, outputContent, fileName, lineCount = 50 }: SplitScreenLayoutProps) {
  const [splitPercent, setSplitPercent] = useState(50); // 50% split by default
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const handleDragStart = (_: any, info: any) => {
    setIsDragging(true);
    setDragStart(splitPercent);
  };

  const handleDrag = (_: any, info: any) => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const percentChange = (info.offset.x / containerWidth) * 100;
      const newPercent = Math.max(30, Math.min(70, dragStart + percentChange));
      setSplitPercent(newPercent);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div ref={containerRef} className="h-full flex flex-col lg:flex-row relative">
      {/* Code Panel */}
      <div
        className="flex-1 lg:flex-none flex flex-col border-b lg:border-b-0 lg:border-r border-primary/20 relative"
        style={isDesktop ? { width: `${splitPercent}%` } : undefined}
      >
        {/* Code Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-black/40 to-black/20 border-b border-primary/30 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors cursor-pointer" />
            </div>
            <div className="h-4 w-px bg-primary/20" />
            <span className="text-xs font-mono text-primary/90 font-semibold">{fileName}</span>
            <span className="text-xs font-mono text-text/40">— Editor</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="px-2 py-0.5 bg-primary/10 border border-primary/30 rounded text-xs font-mono text-primary/80">
              TypeScript
            </div>
          </div>
        </div>

        {/* Code Content */}
        <div className="flex-1 overflow-auto bg-[#1e1e1e]">
          <div className="flex min-w-max">
            {/* Line numbers */}
            <div className="select-none bg-[#1e1e1e] border-r border-primary/10 px-3 py-6 font-mono text-xs text-text/30 text-right min-w-[3rem] sticky left-0 z-10">
              {Array.from({ length: lineCount }, (_, i) => (
                <div key={i} className="leading-relaxed whitespace-nowrap">
                  {i + 1}
                </div>
              ))}
            </div>
            {/* Code */}
            <div className="px-6 py-6 min-w-max">
              {codeContent}
            </div>
          </div>
        </div>

        {/* Drag Handle - Desktop only */}
        <motion.div
          drag="x"
          dragMomentum={false}
          dragElastic={0}
          dragConstraints={{ left: 0, right: 0 }}
          onDrag={handleDrag}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          className={`hidden lg:block absolute top-0 right-0 bottom-0 w-1 cursor-col-resize hover:w-1.5 transition-all z-10
            ${isDragging ? 'bg-primary w-1.5' : 'bg-transparent hover:bg-primary/50'}`}
        >
          <div className="absolute inset-y-0 -right-1 w-3" />
        </motion.div>
      </div>

      {/* Output Panel */}
      <div
        className="flex-1 lg:flex-none flex flex-col"
        style={isDesktop ? { width: `${100 - splitPercent}%` } : undefined}
      >
        {/* Output Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-black/40 to-black/20 border-b border-green-500/30 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-2 py-0.5 bg-green-500/10 border border-green-500/30 rounded">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-sm shadow-green-500/50" />
              <span className="text-xs font-mono text-green-400 font-semibold">LIVE</span>
            </div>
            <div className="h-4 w-px bg-green-500/20" />
            <span className="text-xs font-mono text-text/50">http://</span>
            <span className="text-xs font-mono text-green-400/90">localhost:3000</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-xs font-mono text-text/40">Preview</div>
            <svg className="w-4 h-4 text-green-400/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
        </div>

        {/* Output Content */}
        <div className="flex-1 overflow-y-auto bg-gradient-to-br from-[#0a0118] via-background to-black/60 p-8">
          <div className="max-w-full">
            {outputContent}
          </div>
        </div>
      </div>
    </div>
  );
}
