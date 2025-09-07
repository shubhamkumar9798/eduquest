"use client";
import Navbar from "@/components/NavBar";

import React from "react";

export default function FullScreenIframe() {
  return (
    <div className="w-screen h-screen bg-black">
        <Navbar/>

      <iframe
        src="https://mpo3.mypowerworld.com/twin" // 🔗 Replace this with your link
        className="w-full h-full border-none pt-15"
        allowFullScreen
      />
    </div>
  );
}
