"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const { user, login } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("https://srm.startuplair.com/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.token) {
        login(data.token, data.user);
        setMessage("✅ Login successful! Redirecting...");
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 1500);
      } else {
        setMessage(data.message || "❌ Invalid credentials");
      }
    } catch {
      setMessage("⚠ Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-950 via-purple-900 to-purple-800 px-6 relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-700/40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-pink-600/30 rounded-full blur-3xl animate-pulse" />

      <div className="relative bg-purple-800/30 backdrop-blur-xl border border-purple-600/50 shadow-2xl rounded-3xl p-10 w-full max-w-md z-10">
        <h1 className="text-4xl font-extrabold text-center mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Welcome Back
        </h1>
        <p className="text-center text-gray-300 mb-8 text-sm">
          Login to continue your escape adventure.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-2xl bg-purple-900/40 border border-purple-600/40 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-400 transition"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-2xl bg-purple-900/40 border border-purple-600/40 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-400 transition"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 text-white rounded-2xl font-semibold shadow-lg transition disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {message && (
          <p className="text-sm text-center text-gray-300 mt-4">{message}</p>
        )}

        <p className="text-sm text-center text-gray-300 mt-8">
          Don’t have an account?{" "}
          <a href="/auth/register" className="text-purple-400 hover:underline">
            Register
          </a>
        </p>
      </div>
    </main>
  );
}
