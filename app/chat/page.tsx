import ChatInput from "../../../components/ChatInput";export default function ChatPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#111827",
        color: "white",
        padding: "40px",
      }}
    >
      <h1>💬 AI Chat</h1>

      <p style={{ marginTop: "20px" }}>
        Welcome to OmniAI Chat.
      </p>

      <div
        style={{
          marginTop: "30px",
          background: "#1f2937",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        Chat interface will be added in the next step.
      </div>
    </main>
  );
}
<ChatInput />
