"use client";
import Link from "next/link";
import Spline from "@splinetool/react-spline";

export default function EscapeRoomsPage() {
  return (
    <main className="relative min-h-screen w-full font-sans text-white overflow-hidden">
      {/* Background Spline */}
      <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Spline scene="https://prod.spline.design/p87HkT0ISPu0UV6T/scene.splinecode" />
      </div>

      {/* Content overlay */}
      <div className="relative flex flex-col items-center py-16 px-6">
       <div className="bg-purple-800/40 backdrop-blur-md border border-purple-600 shadow-xl rounded-xl p-4  flex flex-col items-center hover:scale-105 transition-transform duration-300 max-w-sm mb-12">
  <h1 className="text-2xl font-bold tracking-wide">Escape Rooms</h1>
</div>


        <div className="grid gap-8 md:grid-cols-3 max-w-6xl w-full">
          {/* Escape Room 1 */}
          <div className="bg-purple-800/40 backdrop-blur-md border border-purple-600 shadow-2xl rounded-2xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold mb-3">Physics Escape Room</h2>
            <p className="text-sm text-gray-200 text-center mb-6">
              Solve puzzles and test your knowledge in this interactive room.
            </p>
            <Link
              href="/escaperoom/physics"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl shadow-lg transition-colors"
            >
              Enter
            </Link>
          </div>

          {/* Escape Room 2 */}
          <div className="bg-purple-800/40 backdrop-blur-md border border-purple-600 shadow-2xl rounded-2xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold mb-3">Science Escape Room</h2>
            <p className="text-sm text-gray-200 text-center mb-6">
              A fun science-based escape challenge. (Coming soon)
            </p>
            <Link
              href="/escape/science"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl shadow-lg transition-colors"
            >
              Enter
            </Link>
          </div>

          {/* Escape Room 3 */}
          <div className="bg-purple-800/40 backdrop-blur-md border border-purple-600 shadow-2xl rounded-2xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold mb-3">History Escape Room</h2>
            <p className="text-sm text-gray-200 text-center mb-6">
              Travel back in time and escape using history clues. (Coming soon)
            </p>
            <Link
              href="/escape/history"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl shadow-lg transition-colors"
            >
              Enter
            </Link>
          </div>
        </div>
        
      </div>
      <div className="absolute bottom-5 right-4 bg-white/90 text-purple-700 text-lg font-semibold px-3 py-1 rounded-lg shadow-md">
          Think. Solve. Escape.
        </div>
      </section>
      
    </main>
  );
}
