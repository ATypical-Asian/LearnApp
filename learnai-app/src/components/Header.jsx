function Header() {
  return (
    <header style={{
      backgroundColor: "#1e293b",
      padding: "16px 32px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "1px solid #334155",
    }}>
      <h1 style={{ color: "#e2e8f0", fontSize: "22px" }}>LearnAI</h1>
      <nav>
        <a href="#features" style={{ color: "#94a3b8", marginLeft: "24px", textDecoration: "none", fontSize: "14px" }}>Tính năng</a>
        <a href="#how-it-works" style={{ color: "#94a3b8", marginLeft: "24px", textDecoration: "none", fontSize: "14px" }}>Cách hoạt động</a>
        <a href="#signup" style={{ color: "#94a3b8", marginLeft: "24px", textDecoration: "none", fontSize: "14px" }}>Đăng ký</a>
      </nav>
    </header>
  );
}

export default Header;