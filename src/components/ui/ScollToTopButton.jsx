"use client";

import { ArrowUp } from "lucide-react";

export function ScrollToTopButton() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleScrollToTop}
      className="flex items-center justify-center w-full py-3 rounded-full border border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50 transition-colors shadow-sm"
    >
      <div className="flex items-center gap-2">
        <ArrowUp className="h-4 w-4 text-gray-600" />
        <span className="font-medium text-sm text-gray-700">맨 위로 가기</span>
      </div>
    </button>
  );
}
