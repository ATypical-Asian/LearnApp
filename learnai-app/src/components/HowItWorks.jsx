const steps = [
  { id: 1, text: "Trả lời vài câu hỏi về mục tiêu học tập" },
  { id: 2, text: "AI tạo curriculum chi tiết theo tuần" },
  { id: 3, text: "Học theo tốc độ của bạn, AI hỗ trợ 24/7" },
  { id: 4, text: "Checkpoint định kỳ để điều chỉnh lộ trình" },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 px-8 bg-slate-800">
      <h2 className="text-center text-3xl font-bold text-slate-200 mb-6">Cách hoạt động</h2>
      <div className="max-w-xl mx-auto">
        {steps.map((step) => (
          <div key={step.id} className="flex items-center gap-4 py-3">
            <div className="w-9 h-9 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold shrink-0">{step.id}</div>
            <p className="text-slate-400">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;