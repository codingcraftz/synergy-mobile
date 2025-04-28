"use client";

import { MapPin } from "lucide-react";

export function ScrollToTopButton() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleScrollToTop}
      className="p-3 rounded-lg border hover:border-blue-300 hover:bg-blue-50 flex items-center gap-3 transition-colors w-full"
    >
      <div className="flex-shrink-0">
        <MapPin className="h-5 w-5 text-gray-600" />
      </div>
      <span className="font-medium">▲TOP</span>
    </button>
  );
}
