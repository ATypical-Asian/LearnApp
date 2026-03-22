function Header() {
  return (
    <header className="bg-slate-800 px-8 py-4 flex justify-between items-center border-b border-slate-700">
      <h1 className="text-slate-200 text-xl font-bold">LearnAI</h1>
      <nav className="flex gap-6">
        <a href="#features" className="text-slate-400 text-sm no-underline hover:text-slate-200 transition-colors">Tính năng</a>
        <a href="#how-it-works" className="text-slate-400 text-sm no-underline hover:text-slate-200 transition-colors">Cách hoạt động</a>
      </nav>
    </header>
  );
}

export default Header;