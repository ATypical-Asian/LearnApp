import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import Onboarding from "./components/onboarding/Onboarding";

function App() {
  const [showOnboarding, setShowOnboarding] = useState(false);

  // Nếu bật onboarding → hiện onboarding
  if (showOnboarding) {
    return (
      <div className="bg-slate-950 min-h-screen">
        <button
          className="fixed top-4 left-4 text-slate-500 text-sm cursor-pointer hover:text-slate-300 transition-colors z-10"
          onClick={() => setShowOnboarding(false)}
        >
          ← Quay lại trang chủ
        </button>
        <Onboarding />
      </div>
    );
  }

  // Mặc định → hiện landing page
  return (
    <div className="bg-slate-950 min-h-screen">
      <Header />
      <Hero onStart={() => setShowOnboarding(true)} />
      <Features />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;