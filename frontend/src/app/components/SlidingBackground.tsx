"use client";
import { useEffect, useRef } from "react";


export default function SlidingBackground() {

  const leftSideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const leftSide = leftSideRef.current;

    if (!leftSide) return;

    const handleMouseMove = (e: MouseEvent) => {
      const p = (e.clientX / window.innerWidth) * 100;
      console.log(p);
      leftSide.style.width = `${p}%`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); 

  return (
    <main>
      <div ref={leftSideRef} className="grid h-screen overflow-hidden place-items-center absolute w-full z-10 bg-background">
        <h1 className="text-8xl m-10-screen w-80vw text-center font-bold">Making something new should take effort</h1>
      </div>
      <div className="grid h-screen overflow-hidden place-items-center absolute w-full bg-primary">
        <h1 className="text-8xl m-10-screen w-80vw text-center text-background font-bold">Making something new should take skill</h1>
      </div>
    </main>
  );
}
