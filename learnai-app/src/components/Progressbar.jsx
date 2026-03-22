function ProgressBar({ currentStep, totalSteps }) {
  const percent = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        <span className="text-slate-500 text-sm">Bước {currentStep}/{totalSteps}</span>
        <span className="text-slate-500 text-sm">{percent}%</span>
      </div>
      <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 rounded-full transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;