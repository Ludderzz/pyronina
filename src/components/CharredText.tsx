import { ReactNode } from "react";

export const CharredText = ({ children, size = "1rem", isHeader = false }: { children: ReactNode; size?: string; isHeader?: boolean }) => (
  <span style={{
    fontSize: size,
    fontFamily: "Courier, monospace",
    fontWeight: "900",
    color: isHeader ? "#ff4500" : "#0a0705",
    textShadow: isHeader ? "0 0 15px rgba(255,69,0,0.3)" : "0.5px 0.5px 0px rgba(255,255,255,0.1)",
    display: "block",
    letterSpacing: isHeader ? "6px" : "-0.5px",
    textTransform: isHeader ? "uppercase" : "none",
    filter: isHeader ? "blur(0.3px)" : "none"
  }}>
    {children}
  </span>
);
