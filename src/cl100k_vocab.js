import cl100k_base from "js-tiktoken/ranks/cl100k_base";

const decodeBase64 = (str) => {
  try {
    return decodeURIComponent(
      atob(str)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
  } catch {
    return "";
  }
};

// Sorted by token ID (rank) to replicate Python's ordering
export const fullVocab = Object.entries(cl100k_base)
  .map(([b64, id]) => ({
    token: decodeBase64(b64),
    id: id,
  }))
  .sort((a, b) => a.id - b.id); 