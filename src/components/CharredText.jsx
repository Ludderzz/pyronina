export const CharredText = ({ children, size = "1rem" }) => (
  <span style={{
    fontSize: size,
    fontWeight: "bold",
    color: "#281912",
    textShadow: "1px 1px 1px rgba(255,255,255,0.1), 0 0 5px rgba(0,0,0,0.8)",
    letterSpacing: "1px",
    display: "block"
  }}>
    {children}
  </span>
);
