// components/MiniPuzzles.jsx
"use client";
import { useState } from "react";

/* Simple MCQ */
export function MCQ({ question, onAnswer }) {
  const [selected, setSelected] = useState(null);
  return (
    <div className="space-y-3">
      <p className="text-white font-medium">{question.q}</p>
      <div className="flex flex-col gap-2">
        {question.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => {
              setSelected(i);
              onAnswer(i === question.answerIndex);
            }}
            className={`text-left px-4 py-2 rounded-xl border ${
              selected === i ? "bg-purple-600 text-white" : "bg-purple-900/30 text-gray-200"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

/* Ordering puzzle: click items in order */
export function OrderingPuzzle({ items, correctOrder, onComplete }) {
  const [picked, setPicked] = useState([]);
  function pick(i) {
    if (picked.includes(i)) return;
    const next = [...picked, i];
    setPicked(next);
    if (next.length === items.length) {
      const isCorrect = next.every((id, idx) => id === correctOrder[idx]);
      onComplete(isCorrect);
    }
  }
  return (
    <div className="space-y-3">
      <p className="text-white text-sm">Tap items in the correct sequence</p>
      <div className="grid gap-2 grid-cols-1">
        {items.map((it, i) => (
          <button
            key={i}
            onClick={() => pick(i)}
            className={`px-4 py-3 rounded-lg text-left ${
              picked.includes(i) ? "bg-pink-500 text-white" : "bg-purple-900/30 text-gray-200"
            }`}
          >
            <span className="font-medium mr-2">{picked.indexOf(i) >= 0 ? picked.indexOf(i) + 1 + "." : ""}</span>
            {it}
          </button>
        ))}
      </div>
    </div>
  );
}

/* Placeholder PictureQuestion */
export function PictureQuestion({ instruction, onAnswer }) {
  return (
    <div className="space-y-3">
      <p className="text-white">{instruction}</p>
      <div className="bg-purple-900/20 rounded-lg h-40 flex items-center justify-center text-gray-400">
        [Place an image here — user identifies object]
      </div>
      <div className="mt-3 flex gap-2">
        <button onClick={() => onAnswer(true)} className="px-3 py-2 bg-green-600 rounded">Correct</button>
        <button onClick={() => onAnswer(false)} className="px-3 py-2 bg-red-600 rounded">Wrong</button>
      </div>
    </div>
  );
}
