// components/CliffhangerCard.jsx
"use client";
import Link from "next/link";

export default function CliffhangerCard({ lesson, unlocked }) {
  return (
    <div
      className={`relative rounded-2xl p-6 max-w-md w-full bg-purple-800/30 border border-purple-600/40 backdrop-blur-xl shadow-lg transition transform hover:scale-[1.02]`}
    >
      <h3 className="text-xl font-semibold text-white mb-2">{lesson.title}</h3>
      <p className="text-sm text-gray-300 mb-4">{lesson.summary}</p>

      {!unlocked ? (
        <>
          <div className="absolute inset-0 rounded-2xl bg-black/60 flex items-center justify-center">
            <div className="text-center px-4">
              <p className="text-sm text-gray-200 mb-3">Locked</p>
              <p className="text-xs text-gray-300 mb-4">{lesson.cliffhanger}</p>
              <div className="flex justify-center gap-2">
                <span className="text-xs px-3 py-1 bg-purple-700/60 text-white rounded-lg">
                  Complete previous lesson
                </span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex items-center justify-between">
          <span className="text-sm text-green-200">Unlocked</span>
          <Link href={`/lessons/${lesson.slug}`}>
            <a className="text-sm bg-gradient-to-r from-purple-600 to-pink-500 text-white px-3 py-1 rounded-lg">
              Start
            </a>
          </Link>
        </div>
      )}
    </div>
  );
}
