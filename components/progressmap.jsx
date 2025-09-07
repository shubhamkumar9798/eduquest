// components/ProgressMap.jsx
"use client";
import CliffhangerCard from "./CliffhangerCard";
import { LESSONS } from "@/data/lessons";

export default function ProgressMap({ unlockedSlugs = [] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {LESSONS.map((l) => (
        <CliffhangerCard key={l.slug} lesson={l} unlocked={unlockedSlugs.includes(l.slug)} />
      ))}
    </div>
  );
}
