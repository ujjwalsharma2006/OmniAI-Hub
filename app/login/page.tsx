export default function LoginPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a",
      }}
    >
      <div
        style={{
          width: "350px",
          background: "#1e293b",
          padding: "30px",
          borderRadius: "12px",
        }}
      >
        <h1 style={{ color: "white" }}>Login</h1>

        <input
          placeholder="Email"
          style={{
            width: "100%",
            marginTop: "20px",
            padding: "12px",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{
            width: "100%",
            marginTop: "10px",
            padding: "12px",
          }}
        />

        <button
          style={{
            width: "100%",
            marginTop: "20px",
            padding: "12px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
          }}
        >
          Login
        </button>
      </div>
    </main>
  );
}
