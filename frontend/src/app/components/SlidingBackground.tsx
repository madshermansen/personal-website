"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function SlidingBackground() {
  const x = useMotionValue(0);
  const width = useTransform(x, (latestX) =>
    Math.max(0, Math.min(latestX, window.innerWidth))
  );

  const handleMouseMove: React.MouseEventHandler<HTMLElement> = (event) => {
    x.set(event.clientX);
  };

  return (
    <main onMouseMove={handleMouseMove} className="relative">
      {/* Second Div (Foreground, Initially Hidden) */}
      <motion.div
        className="grid h-screen overflow-hidden place-items-center fixed w-full bg-background select-none z-10"
        style={{
          width,
          overflow: "hidden",
        }}
      >
        <h1 className="text-6vw leading-tight m-10-screen w-80vw text-center font-bold">
          Making something great should take{" "}
          <span className="fancy text-primary font-normal">Effort</span>
        </h1>
      </motion.div>

      {/* First Div (Background) */}
      <div
        className="grid h-screen overflow-hidden place-items-center fixed w-full bg-primary"
      >
        <h1 className="text-6vw leading-tight m-10-screen w-80vw text-center text-background font-bold">
          Making something great should take{" "}
          <span className="fancy text-white font-normal">Skill</span>
        </h1>
      </div>
    </main>
  );
}
