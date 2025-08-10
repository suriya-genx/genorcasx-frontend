import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
//import "./index.css";

const Input = ({ className, ...props }) => (
  <input
    className={`bg-[#0f0f0f] text-white border border-gray-600 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-silver ${className}`}
    {...props}
  />
);

const Textarea = ({ className, ...props }) => (
  <textarea
    className={`bg-[#0f0f0f] text-white border border-gray-600 px-3 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-silver ${className}`}
    {...props}
  />
);

const Button = ({ children, variant = "default", ...props }) => {
  const base =
    "px-4 py-2 rounded-xl shadow-lg font-medium transition-all duration-300 text-sm md:text-base";
  const variants = {
    default:
      "bg-gradient-to-br from-gray-700 to-black text-white hover:from-silver hover:to-gray-700",
    outline:
      "border border-silver text-silver hover:bg-gray-800 hover:text-white",
  };
  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};

const Card = ({ className, children }) => (
  <div
    className={`bg-gradient-to-br from-black via-gray-900 to-[#1a1a1a] border border-silver text-white rounded-xl p-4 shadow-xl ${className}`}
  >
    {children}
  </div>
);

const CardContent = ({ className, children }) => (
  <div className={`text-sm font-mono whitespace-pre-wrap ${className}`}>{children}</div>
);

const strategies = [
  "Fixed Size Chunking",
  "Fixed Size with Overlap",
  "Recursive-Based Chunking",
  "Document-Based Chunking",
  "Semantic Chunking",
  "Token-Based Chunking",
  "Sentence-Based Chunking",
  "Agentic Chunking",
];

const chunkText = (text, size, strategy) => {
  switch (strategy) {
    case "Fixed Size Chunking":
      return text.match(new RegExp(`.{1,${size}}`, "g")) || [];
    case "Fixed Size with Overlap": {
      const overlap = Math.floor(size / 3);
      const chunks = [];
      for (let i = 0; i < text.length; i += size - overlap) {
        chunks.push(text.slice(i, i + size));
      }
      return chunks;
    }
    case "Sentence-Based Chunking":
      return text.match(/[^.!?]+[.!?]+\s*/g) || [];
    case "Recursive-Based Chunking":
      return text
        .split(/(?:\n\n|\n|(?<=\.)\s)/g)
        .map((chunk) => chunk.trim())
        .filter(Boolean);
    case "Document-Based Chunking":
      return [text];
    case "Semantic Chunking":
      return text.split(/(\n\n|\n)/g).filter(Boolean);
    case "Token-Based Chunking":
      return text
        .split(/\s+/)
        .reduce((acc, word, i) => {
          const idx = Math.floor(i / size);
          if (!acc[idx]) acc[idx] = [];
          acc[idx].push(word);
          return acc;
        }, [])
        .map((chunk) => chunk.join(" "));
    case "Agentic Chunking":
      return ["Thinking...", ...(text.match(new RegExp(`.{1,${size}}`, "g")) || [])];
    default:
      return [];
  }
};

export default function Chunking() {
  const [input, setInput] = useState("");
  const [chunkSize, setChunkSize] = useState(100);
  const [debouncedSize, setDebouncedSize] = useState(100);
  const [visibleStrategies, setVisibleStrategies] = useState([])

  // Debounce chunk size changes
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSize(chunkSize), 300)
    return () => clearTimeout(timer)
  }, [chunkSize])

  // When input text changes, keep current selections but refresh output naturally
  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const toggleStrategy = (strategy) => {
    setVisibleStrategies((prev) =>
      prev.includes(strategy)
        ? prev.filter((s) => s !== strategy)
        : [...prev, strategy]
    )
  }

  return (
    <div className="chunking-page min-h-screen p-6 bg-gradient-to-br from-black via-[#0f0f0f] to-gray-900 text-white font-sans">
      <div className="chunking-container">
        <h1 className="chunking-title text-center">Text Chunking Demo</h1>
        <p className="chunking-subtitle text-center">Experiment with multiple chunking strategies and compare outputs side-by-side.</p>

        <Textarea
          rows={5}
          className="chunking-textarea"
          placeholder="Paste your paragraph here..."
          value={input}
          onChange={handleInputChange}
        />

        <div className="chunking-controls">
          <label className="label">Chunk Size / Token Count:</label>
          <Input
            type="number"
            value={chunkSize}
            className="size-input"
            onChange={(e) => setChunkSize(Number(e.target.value))}
          />
        </div>

        <div className="chunking-buttons">
          {strategies.map((strategy) => (
            <button
              key={strategy}
              className={`chunk-btn ${visibleStrategies.includes(strategy) ? 'active' : ''}`}
              onClick={() => toggleStrategy(strategy)}
              aria-pressed={visibleStrategies.includes(strategy)}
            >
              {strategy}
            </button>
          ))}
          <button
            className="chunk-btn compare"
            onClick={() => setVisibleStrategies(strategies)}
          >
            Compare All
          </button>
        </div>
      </div>

      <div className="chunking-output">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6">
          {visibleStrategies.map((strategy) => {
            const chunks = chunkText(input, debouncedSize, strategy).slice(0, 50) // limit to 50 chunks
            return (
              <div key={strategy} className="chunking-section">
                <h2 className="text-xl text-center bg-gray-800 py-2 rounded font-bold border border-silver">
                  {strategy}
                </h2>
                <AnimatePresence mode="wait">
                  {chunks.map((chunk, index) => (
                    <motion.div
                      key={`${strategy}-${index}-${chunk.slice(0, 10)}`}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: index * 0.03 }}
                      className="chunk-item"
                    >
                      <Card>
                        <CardContent>{chunk}</CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
