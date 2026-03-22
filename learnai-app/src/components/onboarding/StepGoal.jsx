import ProgressBar from "./Progressbar";

function StepGoal({ answers, onSelect, onNext, onBack }) {
  const canContinue = answers.goal.trim() !== "" && answers.hoursPerDay !== "";

  return (
    <div className="max-w-xl mx-auto px-8 py-16 min-h-screen flex flex-col justify-center">
      <ProgressBar currentStep={3} totalSteps={4} />
      <h2 className="text-slate-200 text-3xl font-bold mb-8">
        Mục tiêu và thời gian
      </h2>

      <div className="mb-5">
        <label className="block text-slate-200 text-sm mb-2">Mục tiêu của bạn là gì?</label>
        <textarea
          value={answers.goal}
          onChange={(e) => onSelect("goal", e.target.value)}
          rows={3}
          placeholder="Ví dụ: Tôi muốn build được 1 web app hoàn chỉnh..."
          className="w-full p-3 rounded-lg border border-slate-700 bg-slate-800 text-slate-200 text-base resize-y focus:border-blue-500 focus:outline-none transition-colors"
        />
      </div>

      <div className="mb-8">
        <label className="block text-slate-200 text-sm mb-2">Bạn dành được bao nhiêu giờ/ngày?</label>
        <div className="flex gap-3">
          {["0.5", "1", "2", "3"].map((hours) => (
            <div
              key={hours}
              className={`flex-1 text-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-200
                ${answers.hoursPerDay === hours
                  ? "bg-blue-500/20 border-blue-500"
                  : "bg-slate-800 border-slate-700 hover:border-slate-500"
                }`}
              onClick={() => onSelect("hoursPerDay", hours)}
            >
              <div className="text-slate-200 text-xl font-bold">{hours}h</div>
              <div className="text-slate-500 text-xs">/ngày</div>
            </div>
          ))}
        </div>
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
            ${!canContinue
              ? "bg-slate-700 text-slate-500 cursor-not-allowed"
              : "bg-blue-500 text-white cursor-pointer hover:bg-blue-600"
            }`}
          onClick={onNext}
          disabled={!canContinue}
        >
          Xem kết quả
        </button>
      </div>
    </div>
  );
}

export default StepGoal;