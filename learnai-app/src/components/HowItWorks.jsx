const steps = [
  { id: 1, text: "Trả lời vài câu hỏi về mục tiêu học tập" },
  { id: 2, text: "AI tạo curriculum chi tiết theo tuần" },
  { id: 3, text: "Học theo tốc độ của bạn, AI hỗ trợ 24/7" },
  { id: 4, text: "Checkpoint định kỳ để điều chỉnh lộ trình" },
];

function StepItem({ number, text }) {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: "16px",
      padding: "12px 0",
    }}>
      <div style={{
        width: "36px",
        height: "36px",
        borderRadius: "50%",
        backgroundColor: "#3b82f6",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "700",
        flexShrink: 0,
      }}>
        {number}
      </div>
      <p style={{ color: "#94a3b8", fontSize: "16px" }}>{text}</p>
    </div>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" style={{
      padding: "60px 32px",
      backgroundColor: "#1e293b",
    }}>
      <h2 style={{
        textAlign: "center",
        fontSize: "28px",
        color: "#e2e8f0",
        marginBottom: "24px",
        fontWeight: "700",
      }}>
        Cách hoạt động
      </h2>

      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        {steps.map((step) => (
          <StepItem key={step.id} number={step.id} text={step.text} />
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;