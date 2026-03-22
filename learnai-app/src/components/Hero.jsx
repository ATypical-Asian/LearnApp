function Hero({ onStart }) {
  return (
    <section className="text-center py-20 px-8 bg-gradient-to-br from-slate-950 to-slate-900">
      <h2 className="text-4xl font-bold text-slate-200 mb-4">
        Học bất cứ thứ gì, theo cách của bạn
      </h2>
      <p className="text-lg text-slate-400 max-w-xl mx-auto mb-6">
        AI tạo lộ trình học riêng cho bạn — không giáo trình rập khuôn, không bài tập vô nghĩa.
      </p>
      <button
        className="bg-blue-500 text-white py-3.5 px-9 rounded-lg font-semibold text-base cursor-pointer hover:bg-blue-600 transition-colors duration-200"
        onClick={onStart}
      >
        Bắt đầu miễn phí
      </button>
    </section>
  );
}

export default Hero;