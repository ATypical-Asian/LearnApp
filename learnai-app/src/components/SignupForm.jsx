import { useState } from "react";

function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    goal: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name.trim() === "") {
      setError("Vui lòng nhập tên");
      return;
    }
    if (formData.email.trim() === "") {
      setError("Vui lòng nhập email");
      return;
    }
    if (formData.topic === "") {
      setError("Vui lòng chọn chủ đề");
      return;
    }

    console.log("Form data:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="signup" style={{
        padding: "60px 32px",
        textAlign: "center",
      }}>
        <div style={{
          backgroundColor: "rgba(16, 185, 129, 0.2)",
          border: "1px solid rgba(16, 185, 129, 0.3)",
          borderRadius: "8px",
          padding: "32px",
          maxWidth: "460px",
          margin: "0 auto",
        }}>
          <div style={{ fontSize: "48px", marginBottom: "16px" }}>🎉</div>
          <h2 style={{ color: "#34d399", fontSize: "24px", marginBottom: "8px" }}>
            Cảm ơn {formData.name}!
          </h2>
          <p style={{ color: "#94a3b8" }}>
            Lộ trình học {formData.topic === "coding" ? "Lập trình" : formData.topic === "language" ? "Ngoại ngữ" : "Kinh doanh"} đang được tạo...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="signup" style={{
      padding: "60px 32px",
      textAlign: "center",
    }}>
      <h2 style={{ color: "#e2e8f0", fontSize: "28px", marginBottom: "8px" }}>
        Đăng ký dùng thử
      </h2>
      <p style={{ color: "#94a3b8", marginBottom: "24px" }}>
        Miễn phí. Không cần thẻ tín dụng.
      </p>

      <form onSubmit={handleSubmit} style={{
        maxWidth: "460px",
        margin: "0 auto",
        textAlign: "left",
      }}>
        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", color: "#e2e8f0", fontSize: "14px", fontWeight: "500", marginBottom: "6px" }}>
            Tên của bạn
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nhập tên..."
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #334155",
              backgroundColor: "#1e293b",
              color: "#e2e8f0",
              fontSize: "16px",
            }}
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", color: "#e2e8f0", fontSize: "14px", fontWeight: "500", marginBottom: "6px" }}>
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #334155",
              backgroundColor: "#1e293b",
              color: "#e2e8f0",
              fontSize: "16px",
            }}
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", color: "#e2e8f0", fontSize: "14px", fontWeight: "500", marginBottom: "6px" }}>
            Bạn muốn học gì?
          </label>
          <select
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #334155",
              backgroundColor: "#1e293b",
              color: "#e2e8f0",
              fontSize: "16px",
            }}
          >
            <option value="">-- Chọn chủ đề --</option>
            <option value="coding">Lập trình</option>
            <option value="language">Ngoại ngữ</option>
            <option value="business">Kinh doanh</option>
          </select>
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", color: "#e2e8f0", fontSize: "14px", fontWeight: "500", marginBottom: "6px" }}>
            Mục tiêu của bạn
          </label>
          <textarea
            name="goal"
            value={formData.goal}
            onChange={handleChange}
            rows={3}
            placeholder="Mô tả ngắn mục tiêu..."
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #334155",
              backgroundColor: "#1e293b",
              color: "#e2e8f0",
              fontSize: "16px",
              fontFamily: "inherit",
              resize: "vertical",
            }}
          />
        </div>

        {error && (
          <div style={{
            backgroundColor: "rgba(239, 68, 68, 0.2)",
            color: "#f87171",
            padding: "12px 16px",
            borderRadius: "6px",
            marginBottom: "16px",
            fontSize: "14px",
          }}>
            {error}
          </div>
        )}

        <button type="submit" style={{
          width: "100%",
          padding: "14px",
          backgroundColor: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "6px",
          fontSize: "16px",
          fontWeight: "600",
          cursor: "pointer",
        }}>
          Bắt đầu miễn phí
        </button>
      </form>

      <div style={{
        maxWidth: "460px",
        margin: "24px auto 0",
        padding: "16px",
        backgroundColor: "#1e293b",
        borderRadius: "8px",
        textAlign: "left",
      }}>
        <p style={{ color: "#64748b", fontSize: "13px", marginBottom: "4px" }}>Live preview:</p>
        <p style={{ color: "#94a3b8", fontSize: "14px" }}>
          {formData.name ? formData.name : "..."} | {formData.email ? formData.email : "..."} | {formData.topic ? formData.topic : "..."}
        </p>
      </div>
    </section>
  );
}

export default SignupForm;