"use client";
import { useState, useRef, useEffect } from "react";

export default function GrokChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messageEndRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "You", text: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/grok", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await res.json();

      setMessages([
        ...newMessages,
        {
          sender: "Grok",
          text: data.reply || "⚠️ Grok is silent… probably roasting someone else.",
        },
      ]);
    } catch (err) {
      setMessages([
        ...newMessages,
        { sender: "Grok", text: "⚠️ API Error: Grok rage quit 🤯" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Chat window */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex items-start ${
              msg.sender === "You" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.sender === "Grok" && (
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mr-2 text-sm font-bold">
                🤖
              </div>
            )}
            <div
              className={`p-3 rounded-2xl max-w-[70%] shadow-md ${
                msg.sender === "You"
                  ? "bg-blue-600 text-white rounded-br-none"
                  : "bg-green-600 text-white rounded-bl-none"
              }`}
            >
              <p className="text-sm font-semibold mb-1">{msg.sender}</p>
              <p>{msg.text}</p>
            </div>
            {msg.sender === "You" && (
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center ml-2 text-sm font-bold">
                🧑
              </div>
            )}
          </div>
        ))}

        {/* Typing indicator */}
        {loading && (
          <div className="flex items-center space-x-2 text-green-400">
            <span className="animate-bounce">🤖</span>
            <span className="italic">Grok is typing…</span>
          </div>
        )}

        <div ref={messageEndRef} />
      </div>

      {/* Input area */}
      <div className="p-3 flex border-t border-gray-700 bg-gray-900">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="flex-1 border border-gray-600 rounded-lg p-2 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ask Grok something sarcastic..."
          disabled={loading}
        />
        <button
          onClick={sendMessage}
          className="ml-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow disabled:bg-gray-500"
          disabled={loading}
        >
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
}
