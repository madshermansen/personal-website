"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface SplitScreenLayoutProps {
  codeContent: React.ReactNode;
  outputContent: React.ReactNode;
  fileName: string;
}

export default function SplitScreenLayout({ codeContent, outputContent, fileName }: SplitScreenLayoutProps) {
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
