"use client";

import { motion } from "framer-motion";

export default function CyberpunkGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Perspective grid */}
      <div className="absolute bottom-0 left-0 right-0 h-[40vh] opacity-20">
        <svg
          className="w-full h-full"
          viewBox="0 0 1000 400"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gridGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6366F1" stopOpacity="0" />
              <stop offset="50%" stopColor="#6366F1" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#A855F7" stopOpacity="0.6" />
            </linearGradient>
          </defs>

          {/* Horizontal lines with perspective */}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
            const y = 400 - (i * 40);
            const leftX = 200 - (i * 20);
            const rightX = 800 + (i * 20);
            return (
              <motion.line
                key={`h-${i}`}
                x1={leftX}
                y1={y}
                x2={rightX}
                y2={y}
                stroke="url(#gridGradient)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: i * 0.1 }}
              />
            );
          })}

          {/* Vertical lines converging to vanishing point */}
          {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((i) => {
            const bottomX = 500 + (i * 80);
            const topX = 500 + (i * 20);
            return (
              <motion.line
                key={`v-${i}`}
                x1={bottomX}
                y1={400}
                x2={topX}
                y2={80}
                stroke="url(#gridGradient)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: Math.abs(i) * 0.1 }}
              />
            );
          })}
        </svg>
      </div>

      {/* Subtle corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-30">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <motion.polyline
            points="0,20 0,0 20,0"
            fill="none"
            stroke="#6366F1"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.line
            x1="0"
            y1="30"
            x2="0"
            y2="40"
            stroke="#A855F7"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          />
          <motion.line
            x1="30"
            y1="0"
            x2="40"
            y2="0"
            stroke="#A855F7"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          />
        </svg>
      </div>

      <div className="absolute top-0 right-0 w-32 h-32 opacity-30">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <motion.polyline
            points="100,20 100,0 80,0"
            fill="none"
            stroke="#6366F1"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.line
            x1="100"
            y1="30"
            x2="100"
            y2="40"
            stroke="#A855F7"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          />
          <motion.line
            x1="70"
            y1="0"
            x2="60"
            y2="0"
            stroke="#A855F7"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          />
        </svg>
      </div>

      {/* Ambient glow spots */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px] opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary rounded-full blur-[120px] opacity-10"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.12, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
}
