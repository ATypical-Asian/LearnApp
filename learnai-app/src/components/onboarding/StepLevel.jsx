import ProgressBar from "./Progressbar";

const levelOptions = [
  { id: "beginner", label: "Mới bắt đầu", description: "Chưa biết gì, muốn học từ đầu" },
  { id: "intermediate", label: "Cơ bản", description: "Đã biết 1 ít, muốn đi sâu hơn" },
  { id: "advanced", label: "Nâng cao", description: "Có kinh nghiệm, muốn nâng level" },
];

function StepLevel({ selected, onSelect, onNext, onBack }) {
  return (
    <div className="max-w-xl mx-auto px-8 py-16 min-h-screen flex flex-col justify-center">
      <ProgressBar currentStep={2} totalSteps={4} />
      <h2 className="text-slate-200 text-3xl font-bold mb-8">
        Trình độ hiện tại của bạn?
      </h2>

      <div className="flex flex-col gap-3 mb-8">
        {levelOptions.map((option) => (
          <div
            key={option.id}
            className={`p-5 rounded-xl border-2 cursor-pointer transition-all duration-200
              ${selected === option.id
                ? "bg-blue-500/20 border-blue-500"
                : "bg-slate-800 border-slate-700 hover:border-slate-500"
              }`}
            onClick={() => onSelect("level", option.id)}
          >
            <div className="text-slate-200 font-medium">{option.label}</div>
            <div className="text-slate-500 text-sm mt-1">{option.description}</div>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <button
          className="py-3.5 px-8 rounded-lg border border-slate-700 text-slate-400 cursor-pointer hover:border-slate-500 transition-colors"
          onClick={onBack}
        >
          Quay lại
        </button>
        <button
          className={`py-3.5 px-8 rounded-lg font-semibold transition-colors duration-200
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
    </div>
  );
}

export default StepLevel;