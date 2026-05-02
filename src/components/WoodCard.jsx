import { motion } from "framer-motion";

export const WoodCard = ({ children }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    style={{
      background: "linear-gradient(145deg, #3c2a21, #2d1f16)",
      border: "12px solid #1a110a",
      borderImage: "none",
      boxShadow: "inset 0 0 20px #000, 10px 10px 20px rgba(0,0,0,0.5)",
      padding: "25px",
      position: "relative",
      overflow: "hidden",
      borderRadius: "2px"
    }}
  >
    {children}
    {/* Grain Overlay */}
    <div style={{
      position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
      opacity: 0.05, pointerEvents: "none",
      backgroundImage: "url(\"https://www.transparenttextures.com/patterns/wood-pattern.png\")"
    }} />
  </motion.div>
);
