import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: "16px",
      padding: "20px",
      backgroundColor: "#1e293b",
      borderRadius: "8px",
      width: "fit-content",
    }}>
      <button
        onClick={() => setCount(count - 1)}
        style={{
          backgroundColor: "#ef4444",
          color: "white",
          border: "none",
          borderRadius: "6px",
          padding: "8px 16px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        -
      </button>

      <span style={{ color: "#e2e8f0", fontSize: "24px", fontWeight: "700", minWidth: "40px", textAlign: "center" }}>
        {count}
      </span>

      <button
        onClick={() => setCount(count + 1)}
        style={{
          backgroundColor: "#10b981",
          color: "white",
          border: "none",
          borderRadius: "6px",
          padding: "8px 16px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        +
      </button>

      <button
        onClick={() => setCount(0)}
        style={{
          backgroundColor: "#334155",
          color: "#94a3b8",
          border: "none",
          borderRadius: "6px",
          padding: "8px 16px",
          fontSize: "14px",
          cursor: "pointer",
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;