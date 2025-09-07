"use client";
import Navbar from "@/components/NavBar";

import React from "react";

export default function FullScreenIframe() {
  return (
    <div className="w-screen h-screen">
        <Navbar/>
      <iframe
        src="https://collab-canvas-tan.vercel.app" // 🔗 Replace this with your link
        className="w-full h-full border-none"
        allowFullScreen
      />
    </div>
  );
}
