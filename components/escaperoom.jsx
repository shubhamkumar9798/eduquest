import Link from "next/link";

export default function EscapeRoomIframe({ src }) {
  return (
    <div className="fixed inset-0 z-50">
      {/* Exit button overlay */}
      
<Link href="/dashboard" className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white rounded-xl px-5 py-2 z-50 shadow-lg">
              Exit
          </Link>
      {/* Fullscreen iframe */}
      <iframe
        title="Escape Room"
        src={src}
        className="w-full h-full border-none"
        allowFullScreen
      />

      {/* Bottom-left overlay box (hides Genially branding) */}
      <div className="absolute bottom-2 left-2 bg-purple-800/70 text-white text-sm md:text-base font-semibold px-3 py-2 rounded-lg shadow-lg backdrop-blur-sm">
        Escape Room by Saksham
      </div>

      {/* Bottom-right overlay box (hides Share icon/logo) */}
      <div className="absolute bottom-1 right-1 bg-pink-600/70 text-white text-lg md:text-base font-semibold px-3 py-2 rounded-lg shadow-lg backdrop-blur-sm">
        Gamified Learning
      </div>
    </div>
  );
}
