"use client";
import Navbar from "@/components/NavBar";
import Spline from "@splinetool/react-spline";
import Image from "next/image";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth/login");
    }
  }, [user, loading, router]);

  if (loading) return <div>Loading...</div>; // prevents flicker
  if (!user) return null;

  return (
    <main className="relative min-h-screen w-full font-sans overflow-hidden">
      {/* Background Spline */}
      <div className="absolute inset-0 -z-10">
        <Spline scene="https://prod.spline.design/ZQUUklRCZbhiIno7/scene.splinecode" />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Center Image */}
      
      <div className="absolute bottom-5 right-4 bg-white/20 text-purple-100 text-lg font-semibold px-3 py-1 rounded-lg shadow-md backdrop-blur-md">
             Learn with Fun
        </div>
    </main>
  );
}
