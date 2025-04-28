"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import sections from "./data/sections";

export default function ManualPage() {
  const [activeSection, setActiveSection] = useState("step1");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // 현재 활성화된 섹션의 아이템 찾기
  const activeItems = sections.find((section) => section.id === activeSection)?.items || [];
  const [activeItem, setActiveItem] = useState(activeItems[0]?.id || "");

  // 섹션이 변경될 때 해당 섹션의 첫 번째 아이템을 활성화
  useEffect(() => {
    // 콘텐츠가 있는 첫 번째 아이템 찾기
    const firstItemWithContent = activeItems.find((item) => item.content);
    setActiveItem(firstItemWithContent?.id || activeItems[0]?.id || "");
  }, [activeSection, activeItems]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* 모바일 메뉴 버튼 */}
      <div className="lg:hidden fixed top-4 left-4 z-30">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 bg-white rounded-md shadow-md"
        >
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* 사이드바 */}
      <Sidebar
        sections={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        isSidebarOpen={isSidebarOpen}
      />

      {/* 메인 콘텐츠 */}
      <div className={`transition-all duration-300 ${isSidebarOpen ? "lg:ml-64" : ""} lg:ml-64`}>
        {/* 헤더 */}
        <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 md:p-10">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="border-white/30 text-white bg-white/10 inline-flex items-center text-xs px-2.5 py-0.5 rounded-md font-semibold">
              신입 설계사 가이드
            </div>
            <h1 className="text-3xl font-bold">📝 신입 설계사 입문 메뉴얼</h1>
            <p className="text-xl font-medium">🚀 신입 설계사 입문 로드맵 (진짜 쉬움)</p>
          </div>
        </header>

        {/* 콘텐츠 영역 */}
        <Content
          sections={sections}
          activeSection={activeSection}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          copied={copied}
          copyToClipboard={copyToClipboard}
          setActiveSection={setActiveSection}
        />
      </div>
    </main>
  );
}
