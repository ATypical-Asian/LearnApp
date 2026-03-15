function Hero() {
  return (
    <section style={{
      textAlign: "center",
      padding: "80px 32px",
      background: "linear-gradient(135deg, #0f172a, #1a2744)",
      color: "#e2e8f0",
    }}>
      <h2 style={{ fontSize: "36px", marginBottom: "16px", fontWeight: "700" }}>
        Học bất cứ thứ gì, theo cách của bạn
      </h2>
      <p style={{ fontSize: "18px", color: "#94a3b8", maxWidth: "600px", margin: "0 auto 24px" }}>
        AI tạo lộ trình học riêng cho bạn — không giáo trình rập khuôn, không bài tập vô nghĩa.
      </p>
      <a href="#signup" style={{
        display: "inline-block",
        backgroundColor: "#3b82f6",
        color: "white",
        padding: "14px 36px",
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: "600",
        fontSize: "16px",
      }}>
        Bắt đầu miễn phí
      </a>
    </section>
  );
}

export default Hero;