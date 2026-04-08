"use client";
import { motion } from "framer-motion";

export const InteractiveBackground = () => {
  return (
    <div className="fixed inset-0 z-0 bg-zinc-900 overflow-hidden pointer-events-none">
      {/* Dynamic Animated Orbs */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-accent/20 blur-[120px]"
        animate={{
          x: ["0%", "20%", "0%", "-20%", "0%"],
          y: ["0%", "10%", "30%", "10%", "0%"],
          scale: [1, 1.2, 1, 0.8, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-secondary/20 blur-[130px]"
        animate={{
          x: ["0%", "-30%", "0%", "20%", "0%"],
          y: ["0%", "-20%", "-40%", "-10%", "0%"],
          scale: [1, 1.1, 0.9, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div
        className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-primary/10 blur-[100px]"
        animate={{
          x: ["0%", "30%", "-10%", "10%", "0%"],
          y: ["0%", "-10%", "20%", "-20%", "0%"],
          scale: [1, 0.8, 1.1, 1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
      />
      {/* Subtle overlay to blend out the colors smoothly */}
      <div className="absolute inset-0 bg-background/40 backdrop-blur-[50px] z-[-5]"></div>
    </div>
  );
};
