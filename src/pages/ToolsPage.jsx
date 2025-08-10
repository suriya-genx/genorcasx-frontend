import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFont, FaLayerGroup, FaRobot, FaCompressAlt, FaCodeBranch, FaMagnet, FaCheckCircle, FaSearch, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const cardsData = [
  { title: 'Tokenization', icon: <FaFont />, desc: 'Break text into tokens using rules and encodings.' },
  { title: 'Chunking', icon: <FaLayerGroup />, desc: 'Split large documents into retrievable chunks.' },
  { title: 'RAG', icon: <FaRobot />, desc: 'Retrieval-Augmented Generation uses external info.' },
  { title: 'Quantization', icon: <FaCompressAlt />, desc: 'Reduce model size while preserving performance.' },
  { title: 'Embedding', icon: <FaCodeBranch />, desc: 'Convert text into vectors for semantic meaning.' },
  { title: 'Retrieval', icon: <FaMagnet />, desc: 'Retrieve relevant documents from vector DBs.' },
  { title: 'Evaluation', icon: <FaCheckCircle />, desc: 'Evaluate LLM performance using metrics.' },
  { title: 'Groq Chatbot', icon: <FaRobot />, desc: 'Chat with Groq LLMs using your API key.' },
];

function getCardStyle(pos, isFlipped, isActive) {
  // pos: 0=center, 1=right, -1=left, 2=far right, -2=far left, etc.
  let offset = 0, scale = 0.5, zIndex = 0, opacity = 0.2, filter = 'blur(0px)';
  if (pos === 0) {
    offset = 0; scale = 1.2; zIndex = 5; opacity = 1; filter = 'none';
  } else if (pos === 1) {
    offset = 260; scale = 0.9; zIndex = 4; opacity = 0.8; filter = 'none';
  } else if (pos === -1) {
    offset = -260; scale = 0.9; zIndex = 4; opacity = 0.8; filter = 'none';
  } else if (pos === 2) {
    offset = 480; scale = 0.7; zIndex = 2; opacity = 0.5; filter = 'blur(1px)';
  } else if (pos === -2) {
    offset = -480; scale = 0.7; zIndex = 2; opacity = 0.5; filter = 'blur(1px)';
  }
  return {
    position: 'absolute',
    left: '50%',
    top: 0,
    transform: `translateX(-50%) translateX(${offset}px) scale(${scale})`,
    zIndex,
    opacity,
    filter,
    width: 280,
    height: 280,
    cursor: 'grab',
    perspective: 1200,
    transition: 'transform 0.5s, opacity 0.5s, filter 0.5s',
    borderRadius: 24,
    boxShadow: '0 4px 30px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.05) inset',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    backdropFilter: 'blur(12px)',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    overflow: 'visible',
    boxSizing: 'border-box',
    pointerEvents: opacity > 0.3 ? 'auto' : 'none',
  };
}

export default function ToolsPage() {
  const [search, setSearch] = useState('');
  const [current, setCurrent] = useState(0);
  const [flipped, setFlipped] = useState(Array(cardsData.length).fill(false));
  const carouselRef = useRef(null);
  const navigate = useNavigate();

  const filteredCards = cardsData
    .map((card, i) => ({ ...card, origIndex: i }))
    .filter(card => card.title.toLowerCase().includes(search.toLowerCase()));
  const total = filteredCards.length;
  const showCards = 5; // center + 2 left + 2 right

  // For dots
  const activeIndex = Math.min(current, total - 1);

  // Handle swipe
  let startX = null;
  function handleTouchStart(e) {
    startX = e.touches[0].clientX;
  }
  function handleTouchEnd(e) {
    if (startX === null) return;
    const diff = e.changedTouches[0].clientX - startX;
    if (Math.abs(diff) > 50) {
      if (diff < 0) next();
      else prev();
    }
    startX = null;
  }

  function prev() {
    setCurrent(c => (c - 1 + total) % total);
  }
  function next() {
    setCurrent(c => (c + 1) % total);
  }
  function handleDot(idx) {
    setCurrent(idx);
  }
  function handleFlip(idx) {
    setFlipped(f => {
      const arr = [...f];
      arr[filteredCards[idx].origIndex] = !arr[filteredCards[idx].origIndex];
      return arr;
    });
  }

  return (
    <div style={{ minHeight: '80vh', background: 'radial-gradient(ellipse at top, #1e1e1e, #0c0c0c)', padding: '64px 0 0 0' }}>
      <h1 style={{ fontWeight: 900, fontSize: 48, color: '#fff', textAlign: 'center', marginBottom: 32, letterSpacing: 1 }}>Tools</h1>
      <div style={{ maxWidth: 600, margin: '0 auto', marginBottom: 40, position: 'relative' }}>
        <input
          type="text"
          value={search}
          onChange={e => { setSearch(e.target.value); setCurrent(0); }}
          placeholder="Search tools..."
          style={{
            width: '100%',
            padding: '18px 56px 18px 24px',
            borderRadius: 9999,
            background: 'rgba(255,255,255,0.05)',
            color: '#fff',
            border: '1.5px solid #222',
            fontSize: 20,
            outline: 'none',
            boxShadow: '0 0 16px #0008',
          }}
        />
        <FaSearch style={{ position: 'absolute', right: 24, top: 22, color: '#b0b8c1', pointerEvents: 'none', fontSize: 22 }} />
      </div>
      <div style={{ position: 'relative', width: '100%', maxWidth: 1000, height: 360, margin: '0 auto', perspective: 1400 }}
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {filteredCards.length === 0 && (
          <div style={{ color: '#fff', textAlign: 'center', fontSize: 24, marginTop: 80 }}>No tools found.</div>
        )}
        {filteredCards.length > 0 && Array.from({ length: Math.min(showCards, filteredCards.length) }, (_, i) => {
          // Calculate the index in filteredCards for each visible card
          // Center card is current, then +/-1, +/-2 (with wrap-around)
          const half = Math.floor(showCards / 2);
          let idx = (current + i - half + filteredCards.length) % filteredCards.length;
          let pos = i - half;
          const card = filteredCards[idx];
          const isFlipped = flipped[card.origIndex];
          const isActive = pos === 0;
          return (
            <div
              key={card.title}
              style={getCardStyle(pos, isFlipped, isActive)}
              onClick={() => handleFlip(idx)}
              className={isFlipped ? 'is-flipped' : ''}
            >
              <div style={{
                width: '100%', height: '100%', position: 'relative', borderRadius: 24, transformStyle: 'preserve-3d', transition: 'transform 0.9s', transform: isFlipped ? 'rotateY(180deg)' : 'none', boxShadow: isActive ? '0 8px 40px #00faff33' : undefined,
              }}>
                {/* Front */}
                <div style={{
                  position: 'absolute', width: '100%', height: '100%', borderRadius: 24, padding: 32, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backfaceVisibility: 'hidden', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', color: '#fff', zIndex: 2,
                }}>
                  <div style={{ fontSize: 44, marginBottom: 18, color: '#e0e0e0', textShadow: '0 0 8px #00faff44', animation: 'pulse 2.5s infinite ease-in-out' }}>{card.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 26, marginBottom: 12, letterSpacing: 1 }}>{card.title}</div>
                </div>
                {/* Back */}
                <div style={{
                  position: 'absolute', width: '100%', height: '100%', borderRadius: 24, padding: 32, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backfaceVisibility: 'hidden', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', color: '#fff', zIndex: 2, transform: 'rotateY(180deg)', textAlign: 'center',
                }}>
                  <div style={{ fontSize: 16, color: '#cccccc', marginBottom: 18 }}>{card.desc}</div>
                  <button style={{
                    padding: '10px 28px',
                    borderRadius: 9999,
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))',
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: 15,
                    border: '1.5px solid #00faff55',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                  onClick={e => {
                    e.stopPropagation();
                    if (card.title === 'Tokenization') navigate('/tools/tokenizer');
                    if (card.title === 'Embedding') navigate('/tools/text-embedding');
                    if (card.title === 'Chunking') navigate('/tools/chunking');
                    if (card.title === 'Groq Chatbot') navigate('/tools/groq-chatbot');
                  }}>
                    Start →
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        {/* Navigation Controls */}
        {filteredCards.length > 1 && (
          <>
            <button onClick={prev} style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 10, width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, cursor: 'pointer', boxShadow: '0 0 0 rgba(255,255,255,0)', outline: 'none', borderWidth: 1, borderStyle: 'solid', borderColor: 'rgba(255,255,255,0.1)' }}>
              <FaChevronLeft className="arrow-icon" />
            </button>
            <button onClick={next} style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 10, width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, cursor: 'pointer', boxShadow: '0 0 0 rgba(255,255,255,0)', outline: 'none', borderWidth: 1, borderStyle: 'solid', borderColor: 'rgba(255,255,255,0.1)' }}>
              <FaChevronRight className="arrow-icon" />
            </button>
          </>
        )}
        {/* Dots */}
        <div style={{ position: 'absolute', left: '50%', bottom: 16, transform: 'translateX(-50%)', display: 'flex', gap: 10, zIndex: 20 }}>
          {filteredCards.map((_, idx) => (
            <div
              key={idx}
              onClick={() => handleDot(idx)}
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: idx === activeIndex ? '#fff' : '#555',
                transform: idx === activeIndex ? 'scale(1.4)' : 'scale(1)',
                transition: 'all 0.3s',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>
      </div>
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }
      `}</style>
    </div>
  );
} 