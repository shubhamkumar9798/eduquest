"use client";
import { useState, useEffect } from "react";
import { LESSONS } from "@/components/lessons";
import { MCQ, OrderingPuzzle, PictureQuestion } from "@/components/minipuzzles";
import Navbar from "@/components/NavBar";

export default function LessonFlow() {
  const [unlocked, setUnlocked] = useState([]);
  const [activeSlug, setActiveSlug] = useState(LESSONS[0].slug);

  useEffect(() => {
    const raw = localStorage.getItem("unlocked");
    if (raw) {
      setUnlocked(JSON.parse(raw));
    } else {
      setUnlocked([LESSONS[0].slug]); // unlock first lesson by default
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("unlocked", JSON.stringify(unlocked));
  }, [unlocked]);

  const activeLesson = LESSONS.find((l) => l.slug === activeSlug);
  const isUnlocked = unlocked.includes(activeSlug);

  function markNextUnlocked() {
    const idx = LESSONS.findIndex((l) => l.slug === activeSlug);
    const next = LESSONS[idx + 1];
    if (next && !unlocked.includes(next.slug)) {
      setUnlocked([...unlocked, next.slug]);
    }
  }

  function handleSuccess() {
    markNextUnlocked();
    alert("✅ Lesson Complete! Next lesson unlocked."); // swap with toast or confetti
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-purple-800 p-8 text-white">
        <Navbar/>
      <div className="max-w-5xl mx-auto pt-14">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-6">Light & Optics</h1>

        {/* Progress map */}
        <div className="flex flex-wrap gap-3 mb-8">
          {LESSONS.map((l) => (
            <button
              key={l.slug}
              onClick={() => unlocked.includes(l.slug) && setActiveSlug(l.slug)}
              className={`px-4 py-2 rounded-xl ${
                activeSlug === l.slug
                  ? "bg-gradient-to-r from-purple-600 to-pink-500"
                  : unlocked.includes(l.slug)
                  ? "bg-purple-700/60"
                  : "bg-purple-900/40 opacity-50"
              }`}
            >
              {l.title}
            </button>
          ))}
        </div>
          <div className="bg-purple-800/30 backdrop-blur-xl border border-purple-600/40 rounded-2xl p-6 pb-4">
          <h2 className="text-2xl font-semibold mb-2">{activeLesson.title}</h2>
          <p className="text-gray-300 mb-3">{activeLesson.concept}</p>
          </div>
        {/* Lesson area */}
        <div className="bg-purple-800/30 backdrop-blur-xl border border-purple-600/40 rounded-2xl p-6">
          {/* <h2 className="text-2xl font-semibold mb-2">{activeLesson.title}</h2> */}
          <p className="text-gray-300 mb-3">{activeLesson.summary}</p>
          <p className="text-sm text-gray-400 italic mb-6">
            Cliffhanger: {activeLesson.cliffhanger}
          </p>

          {!isUnlocked ? (
            <p className="text-gray-400">🚫 Locked. Complete earlier lessons.</p>
          ) : (
            <div>
              {/* Activity types */}
              {activeLesson.type === "mcq" &&
                activeLesson.content.questions.map((q, i) => (
                  <MCQ key={i} question={q} onAnswer={(ok) => ok && handleSuccess()} />
                ))}

              {activeLesson.type === "ordering" && (
                <OrderingPuzzle
                  items={activeLesson.content.items}
                  correctOrder={activeLesson.content.correctOrder}
                  onComplete={(ok) => ok && handleSuccess()}
                />
              )}

              {activeLesson.type === "picture" && (
                <PictureQuestion
                  instruction={activeLesson.content.instructions}
                  onAnswer={(ok) => ok && handleSuccess()}
                />
              )}

              {activeLesson.type === "final" && (
                <div>
                  <p className="mb-4">{activeLesson.content.message}</p>
                  <button
                    onClick={() => {
                      alert("🎉 You finished all lessons!");
                    }}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500"
                  >
                    Finish
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
