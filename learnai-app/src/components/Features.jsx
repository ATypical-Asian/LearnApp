import FeatureCard from "./Card";

const featuresData = [
  {
    id: 1,
    title: "Cá nhân hóa hoàn toàn",
    description: "AI hỏi bạn muốn gì, trình độ ra sao, rồi tạo curriculum riêng.",
    icon: "🎯",
  },
  {
    id: 2,
    title: "Upload tài liệu",
    description: "Đưa sách, slide, PDF — AI đọc và tích hợp vào lộ trình.",
    icon: "📄",
  },
  {
    id: 3,
    title: "Điều chỉnh liên tục",
    description: "Sau mỗi giai đoạn, AI hỏi lại và điều chỉnh nội dung phù hợp.",
    icon: "🔄",
  },
  {
    id: 4,
    title: "Quiz tương tác",
    description: "Kiểm tra kiến thức sau mỗi bài học, AI phân tích điểm yếu.",
    icon: "🧪",
  },
];

function Features() {
  return (
    <section id="features" style={{ padding: "60px 32px" }}>
      <h2 style={{
        textAlign: "center",
        fontSize: "28px",
        color: "#e2e8f0",
        marginBottom: "32px",
        fontWeight: "700",
      }}>
        Tính năng nổi bật
      </h2>

      <div style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        maxWidth: "900px",
        margin: "0 auto",
      }}>
        {featuresData.map((feature) => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </section>
  );
}

export default Features;