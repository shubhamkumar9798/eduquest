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
        <Spline scene="https://prod.spline.design/nhrL2wWCmsPAQ1-9/scene.splinecode" />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Center Image */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <Image
          src="/dash2.png"
          alt="Saksham Logo"
          width={600}
          height={200}
          priority
          className="w-[70%] md:w-[40%] h-auto drop-shadow-lg"
        />
      </div>
    </main>
  );
}
