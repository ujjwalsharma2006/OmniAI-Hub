export default function DashboardPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "40px",
      }}
    >
      <h1>📊 Dashboard</h1>

      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          background: "#1e293b",
          borderRadius: "12px",
        }}
      >
        <h2>Welcome to OmniAI Hub</h2>
        <p>Total Credits: 100</p>
        <p>Plan: Free</p>
      </div>
    </main>
  );
}
