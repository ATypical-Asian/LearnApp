import { useState, useEffect } from "react";
import StepTopic from "./StepTopic";
import StepLevel from "./StepLevel";
import StepGoal from "./StepGoal";
import StepSummary from "./StepSummary";

function Onboarding() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    topic: "",
    level: "",
    goal: "",
    hoursPerDay: "",
  });

  // Side effect 1: Scroll lên đầu mỗi khi đổi step
  // Tại sao? Vì trên mobile, user có thể đang ở giữa trang
  // khi bấm "Tiếp tục", trang mới nên bắt đầu từ trên cùng
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  // Side effect 2: Log answers ra Console mỗi khi thay đổi
  // Tại sao? Để debug — bạn thấy data đang đúng hay sai
  // Sau này xóa đi, chỉ dùng lúc phát triển
  useEffect(() => {
    console.log("Answers updated:", answers);
  }, [answers]);

  const handleSelect = (field, value) => {
    setAnswers({ ...answers, [field]: value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  if (step === 1) {
    return <StepTopic selected={answers.topic} onSelect={handleSelect} onNext={nextStep} />;
  }

  if (step === 2) {
    return <StepLevel selected={answers.level} onSelect={handleSelect} onNext={nextStep} onBack={prevStep} />;
  }

  if (step === 3) {
    return <StepGoal answers={answers} onSelect={handleSelect} onNext={nextStep} onBack={prevStep} />;
  }

  if (step === 4) {
    return (
      <StepSummary
        answers={answers}
        onRestart={() => {
          setStep(1);
          setAnswers({ topic: "", level: "", goal: "", hoursPerDay: "" });
        }}
      />
    );
  }
}

export default Onboarding;