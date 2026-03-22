import ProgressBar from "./Progressbar";

const topicLabels = { coding: "Lập trình", language: "Ngoại ngữ", business: "Kinh doanh", design: "Thiết kế" };
const levelLabels = { beginner: "Mới bắt đầu", intermediate: "Cơ bản", advanced: "Nâng cao" };

function StepSummary({ answers, onRestart }) {
  const weeks = answers.level === "beginner" ? 24 : answers.level === "intermediate" ? 16 : 8;
  const totalHours = parseFloat(answers.hoursPerDay) * weeks * 7;

  const rows = [
    { label: "Chủ đề", value: topicLabels[answers.topic] },
    { label: "Trình độ", value: levelLabels[answers.level] },
    { label: "Thời gian học", value: `${answers.hoursPerDay}h/ngày` },
    { label: "Lộ trình", value: `${weeks} tuần (${totalHours} giờ)`, highlight: true },
  ];

  return (
    <div className="max-w-xl mx-auto px-8 py-16 min-h-screen flex flex-col justify-center">
      <ProgressBar currentStep={4} totalSteps={4} />

      <div className="text-center mb-8">
        <div className="text-5xl mb-4">🎉</div>
        <h2 className="text-slate-200 text-3xl font-bold mb-2">
          Lộ trình của bạn đã sẵn sàng!
        </h2>
        <p className="text-slate-400">Dựa trên câu trả lời của bạn</p>
      </div>

      <div className="bg-slate-800 rounded-xl p-6 mb-6">
        {rows.map((row) => (
          <div key={row.label} className="flex justify-between py-3 border-b border-slate-700 last:border-0">
            <span className="text-slate-500">{row.label}</span>
            <span className={`font-semibold ${row.highlight ? "text-blue-400" : "text-slate-200"}`}>
              {row.value}
            </span>
          </div>
        ))}
        <div className="pt-3">
          <span className="text-slate-500">Mục tiêu</span>
          <p className="text-slate-200 mt-1">{answers.goal}</p>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          className="py-3.5 px-8 rounded-lg border border-slate-700 text-slate-400 cursor-pointer hover:border-slate-500 transition-colors"
          onClick={onRestart}
        >
          Làm lại
        </button>
        <button
          className="py-3.5 px-8 rounded-lg bg-blue-500 text-white font-semibold cursor-pointer hover:bg-blue-600 transition-colors duration-200"
          onClick={() => {
            console.log("Tạo curriculum với:", answers);
            alert("Phase 2 sẽ gọi Claude API tại đây!");
          }}
        >
          Tạo curriculum
        </button>
      </div>
    </div>
  );
}

export default StepSummary;