export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>🚀 OmniAI Hub</h1>
      <p>All-in-One AI Platform</p>

      <button
        style={{
          marginTop: 20,
          padding: "12px 24px",
          borderRadius: 10,
          border: "none",
          background: "#2563eb",
          color: "white",
          cursor: "pointer",
        }}
      >
        Get Started
      </button>
    </main>
  );
}
