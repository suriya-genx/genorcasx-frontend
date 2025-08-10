import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, Stars } from "@react-three/drei";

function generatePastelColor(index) {
  const hue = (index * 47) % 360;
  return `hsl(${hue}, 70%, 80%)`;
}

const SpherePoint = ({ position, text, color }) => (
  <mesh position={position}>
    <sphereGeometry args={[0.1, 32, 32]} />
    <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
    <Html distanceFactor={10}>
      <div className="text-xs text-white bg-black bg-opacity-70 px-2 py-1 rounded-lg border border-gray-400">
        {text}
      </div>
    </Html>
  </mesh>
);

function Embedding3D({ embeddings }) {
  const to3D = (vec) => {
    const scale = 5;
    return [vec[0] * scale, vec[1] * scale, vec[2] * scale];
  };

  return (
    <div className="w-full mt-10 rounded-xl border border-gray-700 overflow-hidden"
      style={{ height: 400, minHeight: 400, maxHeight: 400 }}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }} style={{ width: '100%', height: '100%' }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} />
        <Stars radius={50} depth={30} count={2000} factor={4} saturation={0} fade />
        <OrbitControls />
        {embeddings.map((item, i) => (
          <SpherePoint
            key={i}
            position={to3D(item.embedding)}
            text={item.text}
            color={generatePastelColor(i)}
          />
        ))}
      </Canvas>
    </div>
  );
}

export default function TextEmbedding() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    const sentenceList = input.split("\n").filter((s) => s.trim());
    if (sentenceList.length === 0) return;

    setLoading(true);

    try {
      const res = await axios.post("https://genorcasx1.onrender.com/embed", {
        sentences: sentenceList,
      });

      const newResults = sentenceList.map((text, i) => ({
        text,
        embedding: res.data.embeddings[i],
      }));

      setResults(newResults);
    } catch (err) {
      console.error("Error generating embeddings:", err);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] text-white font-sans">
      <br />
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-6 text-center"
        style={{ color: "#C0C0C0" }}
      >
        Text Embedding Visualizer
      </motion.h1>
      <br />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <textarea
          rows={6}
          placeholder="Enter sentences here, one per line..."
          style={{
            width: '100%',
            maxWidth: 900,
            background: '#18191a',
            border: '1.5px solid #00faff',
            borderRadius: 16,
            padding: 24,
            color: '#F2F9FF',
            fontSize: 20,
            fontFamily: 'monospace',
            boxShadow: '0 0 32px 0 #00faff33',
            outline: 'none',
            marginBottom: 32,
          }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <button
            onClick={handleGenerate}
            disabled={loading}
            style={{
              background: 'linear-gradient(90deg, #00faff 0%, #00cfff 100%)',
              color: '#18191a',
              fontWeight: 700,
              fontSize: 18,
              padding: '14px 36px',
              borderRadius: 14,
              border: 'none',
              boxShadow: '0 4px 24px #00faff44',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.7 : 1,
              transition: 'all 0.2s',
            }}
          >
            {loading ? "Generating..." : "Generate Embeddings"}
          </button>
        </div>
        <br />  
        {results.length > 0 && (
          <div className="mt-10 space-y-6 max-w-4xl mx-auto">
            {results.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative bg-[#1f1f1f] border border-gray-700 p-5 rounded-xl shadow-md hover:shadow-xl transition group"
              >
                <p className="text-gray-100 font-medium mb-2">{item.text}</p>
                <p className="text-sm text-gray-400 truncate">
                  <span className="text-gray-300 font-semibold">Embedding:</span>{" "}
                  [{item.embedding.slice(0, 6).join(", ")}...]
                </p>
                <br />
                {/* Hover Panel */}
                <div className="absolute z-50 hidden group-hover:block top-full mt-2 left-0 bg-[#2c2c2c] text-sm text-gray-200 p-4 rounded-lg border border-gray-600 shadow-lg w-[90vw] max-w-4xl max-h-[300px] overflow-auto custom-scroll">
                  <span className="font-semibold" style={{ color: "#C0C0C0" }}>Full Embedding:</span>
                  <div className="mt-2 text-xs font-mono leading-relaxed space-y-1">
                    {item.text.split(" ").map((word, i) => {
                      const hue = (i * 47) % 360;
                      const color = `hsl(${hue}, 70%, 75%)`;
                      const chunkSize = Math.floor(item.embedding.length / item.text.split(" ").length);
                      const start = i * chunkSize;
                      const end = start + chunkSize;
                      const wordEmbedding = item.embedding.slice(start, end);
                      return (
                        <div key={i} style={{ color }} className="break-words">
                          <span className="font-semibold">{word}</span>: [
                          {wordEmbedding.map((num, j) => (
                            <span key={j}>{num.toFixed(4)}{j < wordEmbedding.length - 1 ? ", " : ""}</span>
                          ))}]
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
            <Embedding3D embeddings={results} />
          </div>
        )}
      </div>
    </div>
  );
}