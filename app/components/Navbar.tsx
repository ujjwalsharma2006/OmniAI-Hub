export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        background: "#111827",
        color: "white",
      }}
    >
      <h2>🚀 OmniAI Hub</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          Home
        </a>

        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          Chat
        </a>

        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          Image
        </a>

        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          Video
        </a>
      </div>
    </nav>
  );
}
