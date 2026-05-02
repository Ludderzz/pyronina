import { motion } from "framer-motion";

export const BurnEffect = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ filter: "brightness(0) contrast(5)", opacity: 0 }}
    whileInView={{ filter: "brightness(1) contrast(1)", opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 2, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);
