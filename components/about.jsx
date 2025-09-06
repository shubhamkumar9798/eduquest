"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import MaskedDiv from "@/components/ui/masked-div";

export default function AboutSection() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 md:px-20  text-center text-white">
      <div className="m-auto  flex flex-wrap justify-center  max-w-6xl">
        
        {/* First Image */}
        <MaskedDiv
          maskType="type-1"
          size={0.35} // reduced from 0.45
          className="my-4 w-full sm:w-[45%] md:w-[40%]"
        >
          <Image
            src="/eduqu.webp"
            alt="Feature 1"
            width={500}
            height={300}
            className="cursor-pointer transition-all duration-300 hover:scale-105 rounded-xl shadow-lg"
          />
        </MaskedDiv>

        {/* Second Image */}
        <MaskedDiv
          maskType="type-1"
          size={0.35}
          className="rotate-180 w-full sm:w-[45%] md:w-[40%]"
        >
          <Image
            src="/abt5.png"
            alt="Feature 2"
            width={500}
            height={300}
            className="cursor-pointer transition-all duration-300 hover:scale-105 rounded-xl shadow-lg"
          />
        </MaskedDiv>

      </div>
    </section>
  );
}
