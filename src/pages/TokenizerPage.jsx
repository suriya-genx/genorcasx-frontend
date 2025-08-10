import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tiktoken } from "js-tiktoken/lite";
import cl100k_base from "js-tiktoken/ranks/cl100k_base";
import { FaTable } from "react-icons/fa";
import { fullVocab } from "../cl100k_vocab";

export default function TokenizerPage() {
  const [input, setInput] = useState("");
  const [showTable, setShowTable] = useState(false);
  const [search, setSearch] = useState("");
  const [visibleRows, setVisibleRows] = useState(5);

  const enc = useMemo(() => new Tiktoken(cl100k_base), []);
  const tokenIds = useMemo(() => enc.encode(input), [input, enc]);
  const tokens = useMemo(() => tokenIds.map((id) => enc.decode([id])), [tokenIds, enc]);
  const wordCount = useMemo(() => input.trim().split(/\s+/).filter(Boolean).length, [input]);
  const charCount = input.length;

  const allTokenData = useMemo(() => {
    if (!input.trim()) return fullVocab;
    return tokens.map((token, i) => ({ index: i + 1, token, id: tokenIds[i] }));
  }, [tokens, tokenIds, input]);

  const filteredData = useMemo(() => {
    const data = allTokenData.map((entry, i) => ({ ...entry, index: i + 1 }));
    return search.trim()
      ? data.filter(({ token, id }) =>
          token.toLowerCase().includes(search.toLowerCase()) || id.toString().includes(search)
        )
      : data.slice(0, visibleRows);
  }, [search, allTokenData, visibleRows]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '70vh', padding: '40px 0' }}>
      <div style={{ maxWidth: 900, width: '100%', margin: '0 auto', textAlign: 'center', marginBottom: 32 }}>
        <h1 style={{ fontWeight: 900, fontSize: 48, color: '#F2F9FF', textShadow: '0 0 16px #00faff, 0 0 2px #fff', marginBottom: 8, letterSpacing: -1 }}>
          Tokenization
        </h1>
        <p style={{ color: '#b0b8c1', fontSize: 18, marginBottom: 32 }}>Enter text below to tokenize in real time.</p>
      </div>

      <textarea
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
        rows={5}
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setVisibleRows(5);
          setSearch("");
        }}
        placeholder="Type your sentence here..."
      />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center', marginBottom: 32 }}>
        <AnimatePresence>
          {tokens.map((token, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              style={{
                background: 'linear-gradient(145deg, rgba(0,255,255,0.08), rgba(255,255,255,0.01))',
                border: '1.5px solid #00faff',
                borderRadius: 18,
                padding: 18,
                minWidth: 120,
                textAlign: 'center',
                color: `hsl(${index * 37 % 360}, 80%, 70%)`,
                boxShadow: '0 4px 30px rgba(0,255,255,0.12)',
                fontWeight: 700,
                fontSize: 22,
                marginBottom: 8,
              }}
            >
              <div style={{ fontSize: 12, color: '#b0b8c1', marginBottom: 4 }}>Token #{index + 1}</div>
              <div style={{ fontSize: 20, fontWeight: 700, wordBreak: 'break-word' }}>{token}</div>
              <div style={{ fontSize: 12, color: '#b0b8c1', marginTop: 4 }}>ID: {tokenIds[index]}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Floating Table Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: 'fixed', bottom: 32, right: 32, background: '#00cfff', color: '#fff', padding: 18, borderRadius: '50%', boxShadow: '0 4px 24px #00faff88', border: 'none', cursor: 'pointer', zIndex: 50
        }}
        onClick={() => setShowTable(true)}
        title="Show Token Table"
      >
        <FaTable size={20} />
      </motion.button>

      {/* Table Modal */}
      <AnimatePresence>
        {showTable && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              style={{ background: '#1b1b1b', padding: 32, borderRadius: 18, maxWidth: 600, width: '100%', boxShadow: '0 4px 32px #00faff33', border: '1.5px solid #00faff', color: '#F2F9FF', position: 'relative' }}
            >
              <button
                onClick={() => setShowTable(false)}
                style={{ position: 'absolute', top: 16, right: 16, color: '#b0b8c1', background: 'none', border: 'none', fontSize: 24, cursor: 'pointer' }}
              >
                ✕
              </button>

              <h2 style={{ fontSize: 22, fontWeight: 700, color: '#00faff', marginBottom: 16 }}>Token Table</h2>

              <input
                type="text"
                placeholder="Search by token or ID..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ width: '100%', padding: 8, marginBottom: 16, borderRadius: 8, background: '#111', border: '1.5px solid #00faff', color: '#F2F9FF', fontSize: 16, outline: 'none' }}
              />

              <div style={{ maxHeight: 300, overflowY: 'auto', borderRadius: 8, border: '1.5px solid #00faff' }}>
                <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse', fontSize: 15 }}>
                  <thead>
                    <tr style={{ background: 'rgba(0,255,255,0.05)', color: '#00faff' }}>
                      <th style={{ padding: 8, borderBottom: '1.5px solid #00faff' }}>#</th>
                      <th style={{ padding: 8, borderBottom: '1.5px solid #00faff' }}>Token</th>
                      <th style={{ padding: 8, borderBottom: '1.5px solid #00faff' }}>Token ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map(({ index, token, id }, i) => (
                      <tr key={i} style={{ background: i % 2 === 0 ? 'rgba(0,255,255,0.03)' : 'transparent' }}>
                        <td style={{ padding: 8, borderBottom: '1.5px solid #00faff' }}>{index}</td>
                        <td style={{ padding: 8, borderBottom: '1.5px solid #00faff', wordBreak: 'break-all' }}>{token}</td>
                        <td style={{ padding: 8, borderBottom: '1.5px solid #00faff' }}>{id}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {filteredData.length === 0 && (
                  <div style={{ padding: 16, textAlign: 'center', color: '#b0b8c1' }}>No tokens found.</div>
                )}
              </div>

              {!search && visibleRows < allTokenData.length && (
                <div style={{ textAlign: 'center', marginTop: 16 }}>
                  <button
                    onClick={() => setVisibleRows((prev) => prev + 10)}
                    style={{ padding: '8px 24px', fontSize: 15, color: '#00faff', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
                  >
                    Show more...
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Summary */}
      <footer style={{ marginTop: 48, textAlign: 'center', fontSize: 15, color: '#b0b8c1', borderTop: '1.5px solid #222', paddingTop: 24, width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap', marginBottom: 8 }}>
          <span>Total Tokens: <span style={{ color: '#00faff', fontWeight: 700 }}>{tokenIds.length}</span></span>
          <span>Words: <span style={{ color: '#00ffae', fontWeight: 700 }}>{wordCount}</span></span>
          <span>Characters: <span style={{ color: '#ffe066', fontWeight: 700 }}>{charCount}</span></span>
        </div>
        <div style={{ marginTop: 8 }}>© 2025 GenOrcasX Tokenization</div>
      </footer>
    </div>
  );
} 