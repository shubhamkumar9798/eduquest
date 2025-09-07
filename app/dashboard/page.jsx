"use client";
import Navbar from "@/components/NavBar";
import Spline from "@splinetool/react-spline";
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

  if (loading) return <div>Loading...</div>;
  if (!user) return null;

  return (
    <main className="w-full min-h-screen font-sans bg-gradient-to-b from-purple-950 via-purple-900 to-purple-800">
      {/* Top Section with Spline */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background spline */}
        <Spline scene="https://prod.spline.design/ZQUUklRCZbhiIno7/scene.splinecode" />

        {/* Navbar on top */}
        <Navbar />

        {/* Overlay Tagline */}
        <div className="absolute bottom-5 right-4 bg-white/20 text-purple-100 text-lg font-semibold px-3 py-1 rounded-lg shadow-md backdrop-blur-md">
          Learn with Fun
        </div>
      </section>

      {/* Next Section: Iframe */}
      <section className="relative w-full h-screen">
        <iframe
          src="https://eduquest-car.vercel.app"
          title="Embedded Page"
          className="w-full h-full border-none"
          allowFullScreen
        />
      </section>
    </main>
  );
}
