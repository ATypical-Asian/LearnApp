function FeatureCard({ title, description, icon }) {
  return (
    <div style={{
      backgroundColor: "#1e293b",
      padding: "28px",
      borderRadius: "8px",
      border: "1px solid #334155",
      flex: 1,
      minWidth: "200px",
      transition: "transform 0.2s, border-color 0.2s",
      cursor: "pointer",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.borderColor = "#3b82f6";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.borderColor = "#334155";
    }}
    >
      <div style={{ fontSize: "32px", marginBottom: "12px" }}>{icon}</div>
      <h3 style={{ color: "#e2e8f0", fontSize: "18px", marginBottom: "8px" }}>{title}</h3>
      <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: "1.6" }}>{description}</p>
    </div>
  );
}

export default FeatureCard;