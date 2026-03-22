import ProgressBar from "./Progressbar";

const topicOptions = [
  { id: "coding", label: "Lập trình", icon: "💻", description: "Web, mobile, data, AI" },
  { id: "language", label: "Ngoại ngữ", icon: "🌍", description: "Anh, Nhật, Hàn, Trung..." },
  { id: "business", label: "Kinh doanh", icon: "📊", description: "Marketing, tài chính, quản lý" },
  { id: "design", label: "Thiết kế", icon: "🎨", description: "UI/UX, đồ họa, 3D" },
];

function StepTopic({ selected, onSelect, onNext }) {
  return (
    <div className="max-w-xl mx-auto px-8 py-16 min-h-screen flex flex-col justify-center">
      <ProgressBar currentStep={1} totalSteps={4} />
      <h2 className="text-slate-200 text-3xl font-bold mb-8">
        Bạn muốn học gì?
      </h2>

      <div className="flex flex-col gap-3 mb-8">
        {topicOptions.map((option) => (
          <div
            key={option.id}
            className={`p-5 rounded-xl border-2 cursor-pointer transition-all duration-200
              ${selected === option.id
                ? "bg-blue-500/20 border-blue-500"
                : "bg-slate-800 border-slate-700 hover:border-slate-500"
              }`}
            onClick={() => onSelect("topic", option.id)}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{option.icon}</span>
              <div>
                <div className="text-slate-200 font-medium">{option.label}</div>
                <div className="text-slate-500 text-sm">{option.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className={`py-3.5 px-8 rounded-lg text-base font-semibold transition-colors duration-200
          ${selected === ""
            ? "bg-slate-700 text-slate-500 cursor-not-allowed"
            : "bg-blue-500 text-white cursor-pointer hover:bg-blue-600"
          }`}
        onClick={onNext}
        disabled={selected === ""}
      >
        Tiếp tục
      </button>
    </div>
  );
}

export default StepTopic;