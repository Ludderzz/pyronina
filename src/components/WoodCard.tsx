import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { type ReactNode } from "react";
export const WoodCard = ({ children }: { children: ReactNode }) => {
  const triggerSparks = (e: React.MouseEvent) => {
    confetti({
      particleCount: 15,
      spread: 40,
      origin: { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight },
      colors: ["#ff4500", "#ff8c00", "#ffd700"],
      gravity: 0.5,
      ticks: 60,
      shapes: ["circle"]
    });
  };

  return (
    <motion.div 
      onMouseEnter={triggerSparks}
      whileHover={{ y: -10, rotateX: 5, rotateY: -5 }}
      className="wood-card"
      style={{
        background: "linear-gradient(135deg, #2d1f16 0%, #1a110a 100%)",
        backgroundImage: "url(\"https://www.transparenttextures.com/patterns/wood-pattern.png\")",
        padding: "30px",
        borderRadius: "4px",
        border: "1px solid #000",
        boxShadow: "inset 0 0 40px #000, 15px 20px 30px rgba(0,0,0,0.6)",
        position: "relative",
        perspective: "1000px"
      }}
    >
      {/* Soot / Burnt Edges */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.4) 100%)",
        pointerEvents: "none"
      }} />
      {children}
    </motion.div>
  );
};
