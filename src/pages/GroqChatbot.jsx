import { useState } from "react";
import { FiZap, FiSend, FiKey, FiCpu, FiTrash2, FiCopy } from "react-icons/fi";

const models = [
  "llama3-8b-8192",
  "llama3-70b-8192",
  "mixtral-8x7b-32768",
  "gemma-7b-it",
  "codellama-34b-instruct"
];

const suggestions = [
  "Summarize this article in 3 bullet points",
  "Write a short LinkedIn post about AI in fintech",
  "Explain transformers to a 10-year-old",
  "Generate 3 creative brand taglines for a cloud platform",
];

export default function GroqChatbot() {
  const [apiKey, setApiKey] = useState("");
  const [model, setModel] = useState(models[0]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [messages, setMessages] = useState([]); // {role: 'user'|'assistant', text: string}
  const [loading, setLoading] = useState(false);

  const askLLM = async () => {
    if (!apiKey || !question) {
      alert("Please fill in all fields.");
      return;
    }
    setLoading(true);
    setAnswer("");

    // Optimistically append the user message
    setMessages((prev) => [...prev, { role: "user", text: question }]);

    try {
      const res = await fetch("https://genorcasx1.onrender.com/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ apiKey, model, question })
      });
      const data = await res.json();
      const assistantText = data.answer || "No response received.";
      setAnswer(assistantText);
      setMessages((prev) => [...prev, { role: "assistant", text: assistantText }]);
    } catch (e) {
      const errText = "Request failed. Please try again.";
      setAnswer(errText);
      setMessages((prev) => [...prev, { role: "assistant", text: errText }]);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
    setAnswer("");
    setQuestion("");
  };

  const copyLastAnswer = async () => {
    const last = [...messages].reverse().find((m) => m.role === "assistant");
    if (last?.text) {
      await navigator.clipboard.writeText(last.text);
      alert("Copied!");
    }
  };

  const useSuggestion = (text) => setQuestion(text);

  return (
    <div className="groq-page relative min-h-screen bg-gradient-to-br from-[#0d0d0d] via-[#1a1a1a] to-[#0f0f0f] text-white flex items-start justify-center px-4 py-12 animate-gradient">
      {/* Decorative sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 floating-grid">
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            className="sparkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-5xl">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 shadow-glow">
            <FiZap className="text-silver" size={22} />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide mt-4">
              <span className="heading-gradient">Groq AI Assistant</span>
            </h1>
            <p className="text-sm text-zinc-300/80 mt-1">Fast, delightful chat with Groq LLMs. Bring your key, pick a model, ask anything.</p>
          </div>
        </div>

        {/* Card */}
        <div className="glass-card rounded-3xl p-6 md:p-8 shadow-2xl">
          {/* Controls */}
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <div className="md:col-span-2">
              <label className="flex items-center gap-2 text-xs font-semibold mb-2 text-zinc-300"><FiKey /> Groq API Key</label>
              <input
                type="password"
                placeholder="Enter your API key"
                className="w-full input-ornament"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
              />
            </div>
            <div>
              <label className="flex items-center gap-2 text-xs font-semibold mb-2 text-zinc-300"><FiCpu /> Model</label>
              <select
                className="w-full input-ornament"
                value={model}
                onChange={(e) => setModel(e.target.value)}
              >
                {models.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Question */}
          <div className="mt-6">
            <label className="text-xs font-semibold mb-2 text-zinc-300 block">Your Question</label>
            <textarea
              rows="4"
              placeholder="Type your question..."
              className="w-full input-ornament"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            {/* Suggestions */}
            <div className="flex flex-wrap gap-2 mt-3">
              {suggestions.map((s, i) => (
                <button key={i} type="button" className="suggestion-pill" onClick={() => useSuggestion(s)}>{s}</button>
              ))}
            </div>
            <div className="actions flex items-center mt-4">
              <button
                onClick={askLLM}
                disabled={loading}
                className="btn btn-primary btn-glow font-semibold"
              >
                <FiSend /> {loading ? "Thinking..." : "Ask Model"}
              </button>
              <button onClick={clearChat} className="btn btn-secondary">
                <FiTrash2 /> Clear
              </button>
              <button onClick={copyLastAnswer} className="btn btn-copy">
                <FiCopy /> Copy Answer
              </button>
            </div>
          </div>

          {/* Transcript */}
          <div className="chat-container mt-8 rounded-2xl border border-white/10 bg-black/30">
            {messages.length === 0 ? (
              <div className="p-8 text-center text-zinc-400 text-sm">Your conversation will appear here.</div>
            ) : (
              <div className="p-4 space-y-4 max-h-[52vh] overflow-y-auto custom-scroll">
                {messages.map((m, idx) => (
                  <div key={idx} className={`chat-row ${m.role}`}>
                    <div className={`avatar ${m.role}`} aria-hidden />
                    <div className={m.role === 'user' ? 'chat-bubble user' : 'chat-bubble assistant'}>
                      <div className="text-sm leading-relaxed whitespace-pre-line">{m.text}</div>
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="chat-row assistant">
                    <div className="avatar assistant" aria-hidden />
                    <div className="chat-bubble assistant"><span className="typing"><span></span><span></span><span></span></span></div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}