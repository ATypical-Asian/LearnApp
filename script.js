// === DATA ===
const features = [
  {
    title: "Cá nhân hóa hoàn toàn",
    description: "AI hỏi bạn muốn gì, trình độ ra sao, rồi tạo curriculum riêng.",
    icon: "🎯",
  },
  {
    title: "Upload tài liệu",
    description: "Đưa sách, slide, PDF — AI đọc và tích hợp vào lộ trình.",
    icon: "📄",
  },
  {
    title: "Điều chỉnh liên tục",
    description: "Sau mỗi giai đoạn, AI hỏi lại và điều chỉnh nội dung phù hợp.",
    icon: "🔄",
  },
  {
    title: "Quiz tương tác",
    description: "Kiểm tra kiến thức sau mỗi bài học, AI phân tích điểm yếu.",
    icon: "🧪",
  },
];

// === RENDER FEATURES ===
const renderFeatures = () => {
  const grid = document.querySelector(".features-grid");

  grid.innerHTML = features
    .map((feature) => {
      return `
        <div class="feature-card">
          <div class="card-icon">${feature.icon}</div>
          <h3>${feature.title}</h3>
          <p>${feature.description}</p>
        </div>
      `;
    })
    .join("");
};

renderFeatures();

// === THAY ĐỔI TIÊU ĐỀ ===
const updateHero = () => {
  const heroTitle = document.querySelector(".hero h2");
  const featureCount = features.length;
  heroTitle.textContent = `Học bất cứ thứ gì, với ${featureCount} tính năng mạnh mẽ`;
};

updateHero();

// === HIGHLIGHT CARD KHI HOVER (bằng JS) ===
const addCardEffects = () => {
  const cards = document.querySelectorAll(".feature-card");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.borderColor = "#3b82f6";
    });

    card.addEventListener("mouseleave", () => {
      card.style.borderColor = "";
    });
  });
};

addCardEffects();
// === FORM HANDLING ===
const showMessage = (text, isError) => {
  const existing = document.querySelector(".message");
  if (existing) existing.remove();

  const msg = document.createElement("div");
  msg.className = isError ? "message message-error" : "message message-success";
  msg.textContent = text;

  const form = document.querySelector(".signup-form");
  form.appendChild(msg);

  // Tự xóa sau 5 giây
  setTimeout(() => {
    msg.remove();
  }, 5000);
};

const clearErrors = () => {
  const errorInputs = document.querySelectorAll(".input-error");
  errorInputs.forEach((input) => input.classList.remove("input-error"));
};

const handleSubmit = (e) => {
  e.preventDefault();
  clearErrors();

  // Lấy giá trị
  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const topic = document.querySelector("#topic").value;
  const goal = document.querySelector("#goal").value.trim();

  // Validate
  if (name === "") {
    document.querySelector("#name").classList.add("input-error");
    showMessage("Vui lòng nhập tên của bạn", true);
    return;
  }

  if (email === "") {
    document.querySelector("#email").classList.add("input-error");
    showMessage("Vui lòng nhập email", true);
    return;
  }

  if (topic === "") {
    document.querySelector("#topic").classList.add("input-error");
    showMessage("Vui lòng chọn chủ đề", true);
    return;
  }

  // Thành công
  const topicNames = {
    coding: "Lập trình",
    language: "Ngoại ngữ",
    business: "Kinh doanh",
    other: "Khác",
  };

  showMessage(`Cảm ơn ${name}! Lộ trình ${topicNames[topic]} đang được tạo...`, false);

  // In dữ liệu ra console
  console.log("Form data:", { name, email, topic, goal });

  // Reset form
  e.target.reset();
};

const form = document.querySelector(".signup-form");
form.addEventListener("submit", handleSubmit);

// === REALTIME VALIDATION ===
const nameInput = document.querySelector("#name");
nameInput.addEventListener("input", () => {
  if (nameInput.value.trim() !== "") {
    nameInput.classList.remove("input-error");
  }
});

const emailInput = document.querySelector("#email");
emailInput.addEventListener("input", () => {
  if (emailInput.value.trim() !== "") {
    emailInput.classList.remove("input-error");
  }
});
// === LOAD TESTIMONIALS FROM API ===
const loadTestimonials = async () => {
  const grid = document.querySelector(".testimonials-grid");
  const loadingText = document.querySelector("#testimonials .text-muted");

  try {
    // Gọi API lấy users + posts
    const usersResponse = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await usersResponse.json();

    const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await postsResponse.json();

    // Lấy 4 user đầu tiên, ghép với post của họ
    const testimonials = users.slice(0, 4).map((user) => {
      const userPost = posts.find((post) => post.userId === user.id);
      return {
        name: user.name,
        email: user.email,
        quote: userPost ? userPost.body.slice(0, 80) + "..." : "Great app!",
      };
    });

    // Xóa text "Đang tải..."
    loadingText.style.display = "none";

    // Render
    grid.innerHTML = testimonials
      .map((t) => {
        return `
          <div class="testimonial-card">
            <div class="user-name">${t.name}</div>
            <div class="user-email">${t.email}</div>
            <div class="user-quote">"${t.quote}"</div>
          </div>
        `;
      })
      .join("");

  } catch (error) {
    loadingText.textContent = "Không thể tải dữ liệu. Vui lòng thử lại.";
    console.log("Lỗi:", error.message);
  }
};

loadTestimonials();