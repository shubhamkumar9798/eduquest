import EscapeRoomIframe from "@/components/escaperoom";

export default function EducationEscapeRoom() {
  return (
    <div className="relative w-full h-screen">
      {/* Iframe */}
      <EscapeRoomIframe src="https://view.genially.com/68bc232ea456f6ebd8edcf1d" />

      {/* Overlay box to cover watermark */}
      <div className="absolute bottom-0 left-0 w-40 h-10 bg-gradient-to-r from-purple-900/80 to-transparent backdrop-blur-sm rounded-tr-xl"></div>
    </div>
  );
}
