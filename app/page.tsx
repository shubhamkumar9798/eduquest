"use client";
import Spline from "@splinetool/react-spline";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import AboutSection from "@/components/about";
import MaskedDivDemo from "@/components/abtfeatures";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";

export default function LandingPage() {
  const { user } = useAuth();

  return (
    <div className="w-full min-h-screen flex flex-col bg-gradient-to-b from-purple-900 via-purple-800 to-purple-950 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-700/40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-pink-600/30 rounded-full blur-3xl animate-pulse" />

      {/* Hero Section with Spline */}
      <section className="relative w-full h-screen overflow-hidden">
        <Spline scene="https://prod.spline.design/CB-UC3stQadErlab/scene.splinecode" />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
          <Image
            src="/logonobg.png"
            alt="Saksham Logo"
            width={600}
            height={200}
            priority
            className="w-[70%] md:w-[40%] h-auto drop-shadow-lg"
          />
        </div>

        {/* Top Navbar Buttons */}
        <div className="absolute top-6 right-6 flex gap-3 z-20">
          {!user ? (
            <>
              <Link href="/auth/login" passHref>
                <Button
                  variant="outline"
                  className="border-purple-400 text-purple-300 hover:bg-purple-500 hover:text-white"
                >
                  Login
                </Button>
              </Link>

              <Link href="/auth/register" passHref>
                <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold shadow-md">
                  Register
                </Button>
              </Link>
            </>
          ) : (
            <Link href="/dashboard" passHref>
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold shadow-md">
                Go to Dashboard
              </Button>
            </Link>
          )}
        </div>

        {/* Covering the "Built with Spline" watermark */}
        <div className="absolute bottom-5 right-4 bg-white/20 text-purple-100 text-lg font-semibold px-3 py-1 rounded-lg shadow-md backdrop-blur-md">
          Gamified Learning
        </div>
      </section>

      {/* About Section */}
      <AboutSection />
      <MaskedDivDemo />

      {/* Footer */}
      <footer className="w-full bg-purple-800/40 backdrop-blur-md border-t border-purple-600/50 py-6 mt-10 flex flex-col md:flex-row items-center justify-between px-6 text-white">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <span className="font-bold text-lg">Saksham Edu</span>
          <p className="text-gray-300 text-sm mt-1">© 2025 All Rights Reserved</p>
        </div>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-pink-400 transition">About</Link>
          <Link href="#" className="hover:text-pink-400 transition">Contact</Link>
          <Link href="#" className="hover:text-pink-400 transition">Privacy</Link>
        </div>
      </footer>
    </div>
  );
}
