import { motion } from "framer-motion";
import { History, FlameKindling, Zap } from "lucide-react";

export const PyrographyLore = () => {
  return (
    <section style={{ padding: "100px 20px", background: "rgba(0,0,0,0.3)", color: "#d4a373" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <h2 className="distorted-text" style={{ fontSize: "3rem", color: "#ff4500" }}>The Ancient Art</h2>
          <div style={{ width: "60px", height: "2px", background: "#ff4500", margin: "20px auto" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "60px" }}>
          {/* History */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <History color="#ff4500" size={32} style={{ marginBottom: "20px" }} />
            <h3 style={{ fontSize: "1.5rem" }}>Writing with Fire</h3>
            <p style={{ opacity: 0.7, lineHeight: "1.6", fontSize: "0.9rem" }}>
              Derived from the Greek words <strong>pur</strong> (fire) and <strong>graphos</strong> (writing), 
              pyrography dates back to ancient Egypt and China. 
              Every piece in this forge is a continuation of that prehistoric tradition of decorating with heat.
            </p>
          </motion.div>

          {/* Technique */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <FlameKindling color="#ff4500" size={32} style={{ marginBottom: "20px" }} />
            <h3 style={{ fontSize: "1.5rem" }}>The Alchemy of Heat</h3>
            <p style={{ opacity: 0.7, lineHeight: "1.6", fontSize: "0.9rem" }}>
              By controlling temperatures up to 700°F, I manipulate wood grain to create depth and shadow. 
              Whether it is <strong>Stippling</strong> (dot-work) or <strong>Shading</strong>, 
              each stroke is permanent—there is no "undo" button in the forge.
            </p>
          </motion.div>

          {/* Materials */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <Zap color="#ff4500" size={32} style={{ marginBottom: "20px" }} />
            <h3 style={{ fontSize: "1.5rem" }}>The Canvas</h3>
            <p style={{ opacity: 0.7, lineHeight: "1.6", fontSize: "0.9rem" }}>
              I primarily use light hardwoods like <strong>Basswood</strong> or <strong>Birch</strong> for their 
              fine, non-obtrusive grain. Every board is hand-sanded to a mirror finish 
              before a single ember touches the surface.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};