import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { WoodCard } from "./components/WoodCard";
import { BurnEffect } from "./components/BurnEffect";
import artworkData from "./data.json";
import { PyrographyLore } from "./components/PyrographyLore";

export default function App() {
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <div style={{ backgroundColor: "#0a0705", minHeight: "100vh" }}>
      <div className="heat-haze" />
      
      <motion.header style={{ 
        padding: "60px 20px", display: "flex", flexDirection: "column", 
        justifyContent: "center", alignItems: "center",
        opacity: headerOpacity
      }}>
        {/* SVG Pyrography Pen Icon */}
        <svg className="pyro-pen" viewBox="0 0 24 24" fill="none" stroke="#ff4500" strokeWidth="2">
          <path d="M12 2l3.5 7h-7L12 2zM12 22v-7M9 15l3 3 3-3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="2" fill="#ff4500" />
        </svg>

        <h1 className="distorted-text" style={{ 
    fontSize: "clamp(2rem, 7vw, 5rem)", 
    margin: "10px 0", 
    textAlign: "center",
    lineHeight: "1.1" 
}}>
  Nina B's <br /> 
  <span style={{ fontSize: "1.2em" }}>Pyrography</span>
</h1>
      </motion.header>

      <PyrographyLore />
      <main style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 15px 100px" }}>
        <div className="masonry-grid">
          {artworkData.map((item: any, i: number) => (
            <BurnEffect key={i} delay={i * 0.02}>
              <WoodCard>
                <div className="artifact-container">
                  <div style={{ position: "relative", overflow: "hidden" }}>
                    <img 
                      src={`https://images.weserv.nl/?url=${encodeURIComponent(item.image)}`} 
                      className="burned-image"
                      alt="Art"
                    />
                    <div className="artifact-overlay" style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                      <span style={{ fontSize: "0.6rem", opacity: 0.5 }}>PIECE_{i + 100}</span>
                      <a href={item.facebookUrl} target="_blank" rel="noopener"><ExternalLink size={14} color="#ff4500" /></a>
                    </div>
                  </div>
                </div>
              </WoodCard>
            </BurnEffect>
          ))}
        </div>
      </main>

      {/* SVG Distortion Filter remains at bottom */}
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="wood-distort"><feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2" /><feDisplacementMap in="SourceGraphic" scale="4" /></filter>
      </svg>
    </div>
  );
}
