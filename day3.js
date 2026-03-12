// === BÀI 1: Hàm đề xuất lộ trình theo trình độ ===
const suggestPlan = (level, hoursPerDay) => {
  let weeks;
  let startFrom;

  if (level === "beginner") {
    weeks = 24;
    startFrom = "HTML/CSS cơ bản";
  } else if (level === "intermediate") {
    weeks = 16;
    startFrom = "React";
  } else if (level === "advanced") {
    weeks = 8;
    startFrom = "Project thực tế";
  } else {
    return "Trình độ không hợp lệ";
  }

  const totalHours = hoursPerDay * weeks * 7;
  const speed = hoursPerDay >= 2 ? "nhanh" : hoursPerDay >= 1 ? "vừa" : "chậm";

  return `Lộ trình ${weeks} tuần, bắt đầu từ ${startFrom}. Tổng ${totalHours} giờ. Tốc độ: ${speed}.`;
};

console.log(suggestPlan("beginner", 1));
console.log(suggestPlan("intermediate", 2));
console.log(suggestPlan("advanced", 0.5));
console.log(suggestPlan("expert", 1));

// === BÀI 2: In lộ trình chi tiết ===
const curriculum = [
  { week: 1, topic: "HTML cơ bản", phase: 0 },
  { week: 2, topic: "CSS + Flexbox", phase: 0 },
  { week: 3, topic: "JavaScript biến & hàm", phase: 0 },
  { week: 4, topic: "JavaScript DOM & Event", phase: 0 },
  { week: 5, topic: "React cơ bản", phase: 1 },
  { week: 6, topic: "React state & props", phase: 1 },
  { week: 7, topic: "Next.js routing", phase: 2 },
  { week: 8, topic: "Claude API", phase: 2 },
];

console.log("\n=== LỘ TRÌNH HỌC ===\n");

let currentPhase = -1;

for (const item of curriculum) {
  // In header phase khi chuyển sang phase mới
  if (item.phase !== currentPhase) {
    currentPhase = item.phase;
    console.log(`\n--- PHASE ${currentPhase} ---`);
  }

  // Đánh dấu tuần hiện tại (giả sử đang ở tuần 3)
  const currentWeek = 6;
  const marker = item.week === currentWeek ? "👉" : "  ";
  const status = item.week < currentWeek ? "✅" : item.week === currentWeek ? "🔵" : "⬜";

  console.log(`${marker} ${status} Tuần ${item.week}: ${item.topic}`);
}