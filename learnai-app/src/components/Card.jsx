function FeatureCard({ title, description, icon }) {
  return (
    <div className="bg-slate-800 p-7 rounded-lg border border-slate-700 flex-1 min-w-[200px] cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-slate-200 text-lg font-semibold mb-2">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export default FeatureCard;