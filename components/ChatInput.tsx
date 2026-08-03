export default function ChatInput() {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        marginTop: "20px",
      }}
    >
      <input
        placeholder="Ask anything..."
        style={{
          flex: 1,
          padding: "14px",
          borderRadius: "10px",
          border: "1px solid #374151",
          background: "#111827",
          color: "white",
        }}
      />

      <button
        style={{
          padding: "14px 22px",
          borderRadius: "10px",
          background: "#2563eb",
          color: "white",
          border: "none",
        }}
      >
        Send
      </button>
    </div>
  );
}
