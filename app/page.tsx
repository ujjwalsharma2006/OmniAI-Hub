import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main
        style={{
          minHeight: "90vh",
          background: "#0f172a",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ fontSize: "48px" }}>🚀 OmniAI Hub</h1>

        <p style={{ marginTop: "15px", fontSize: "20px" }}>
          All in One AI Platform
        </p>

        <button
          style={{
            marginTop: "30px",
            padding: "14px 30px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "12px",
            fontSize: "18px",
          }}
        >
          Get Started
        </button>
      </main>
    </>
  );
}
