import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/Howitworks";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ backgroundColor: "#0f172a", minHeight: "100vh" }}>
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;