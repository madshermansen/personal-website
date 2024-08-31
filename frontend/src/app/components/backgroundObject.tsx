"use client";
import { useEffect, useRef, RefObject } from "react";
import { motion } from "framer-motion";
import { useMotionValue, useSpring, frame } from "framer-motion";

export default function BackgroundObject() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
      ref={ref}
      className="-z-20 fixed"
      style={{ x, y }}
    >
        <div className="bg-gradient-to-tr from-primary to-secondary animation-rotate w-80 aspect-square rounded-full scale-x-50"></div>
    </motion.div>
  );
}

const spring = { damping: 15, stiffness: 100, restDelta: 0.001 };

export function useFollowPointer(ref: RefObject<HTMLElement>) {
  const xPoint = useMotionValue(0);
  const yPoint = useMotionValue(0);
  const x = useSpring(xPoint, spring);
  const y = useSpring(yPoint, spring);

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;

      frame.read(() => {
        xPoint.set(clientX - element.offsetLeft - element.offsetWidth / 2);
        yPoint.set(clientY - element.offsetTop - element.offsetHeight / 2);
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return { x, y };
}
