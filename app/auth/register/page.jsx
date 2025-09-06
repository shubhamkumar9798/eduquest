"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RegisterPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);

  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://srm.startuplair.com/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Registration successful! Redirecting...");
        setTimeout(() => {
          window.location.href = "/auth/login";
        }, 1500);
      } else {
        setMessage(data.message || "❌ Registration failed.");
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
          Create Account
        </h1>
        <p className="text-center text-gray-300 mb-8 text-sm">
          Join the adventure and unlock your escape journey.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-2xl bg-purple-900/40 border border-purple-600/40 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-400 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-2xl bg-purple-900/40 border border-purple-600/40 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-400 transition"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-2xl bg-purple-900/40 border border-purple-600/40 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-400 transition"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 text-white rounded-2xl font-semibold shadow-lg transition disabled:opacity-50"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        {message && (
          <p className="text-sm text-center text-gray-300 mt-4">{message}</p>
        )}

        <p className="text-sm text-center text-gray-300 mt-8">
          Already have an account?{" "}
          <a href="/auth/login" className="text-purple-400 hover:underline">
            Login
          </a>
        </p>
      </div>
    </main>
  );
}
