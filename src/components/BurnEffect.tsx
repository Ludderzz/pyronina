import { motion } from "framer-motion";
import { ReactNode } from "react";

export const BurnEffect = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
  <motion.div
    initial={{ filter: "brightness(0) contrast(5)", opacity: 0 }}
    whileInView={{ filter: "brightness(1) contrast(1)", opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.8, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);
