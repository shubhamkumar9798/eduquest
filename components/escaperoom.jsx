export default function EscapeRoomIframe({ src }) {
  return (
    <div className="fixed inset-0 z-50">
      {/* Exit button overlay */}
      <a
        href="/escaperoom"
        className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white rounded-xl px-5 py-2 z-50 shadow-lg"
      >
        Exit
      </a>

      {/* Fullscreen iframe */}
      <iframe
        title="Escape Room"
        src={src}
        className="w-full h-full border-none"
        allowFullScreen
      />
    </div>
  );
}
