"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ReactNode } from "react";


export default function SlidingBackground() {
  const x = useMotionValue(0);
  const width = useTransform(x, (latestX) =>
    Math.max(0, Math.min(latestX, window.innerWidth))
  );

  const handleMouseMove: React.MouseEventHandler<HTMLElement> = (event) => {
    x.set(event.clientX);
  };

  const handleTouchMove: React.TouchEventHandler<HTMLElement> = (event) => {
    x.set(event.touches[0].clientX);
  }


  return (
    <main onMouseMove={handleMouseMove} onTouchMove={handleTouchMove} className="fixed w-screen h-screen">
      <motion.div 
        className="grid h-screen overflow-hidden place-items-center absolute w-full bg-background select-none z-10"
        style={{
          width,
          overflow: "hidden",
        }}
      >
        <h1 className="fancy sm:text-6vw text-5xl leading-tight m-10-screen w-80vw text-center font-bold">
          Making something great should take{" "}
          <span className="fancy text-primary font-normal sm:text-8vw text-7xl">Effort</span>
        </h1>
      </motion.div>

      {/* First Div (Background) */}
      <div
        className="grid h-screen overflow-hidden place-items-center absolute w-full bg-primary"
      >
        <h1 className="fancy sm:text-6vw text-5xl leading-tight m-10-screen w-80vw text-center text-background font-bold">
          Making something great should take{" "}
          <span className="fancy text-white font-normal sm:text-8vw text-7xl">Skill</span>
        </h1>
      </div>
    </main>
  );
}
