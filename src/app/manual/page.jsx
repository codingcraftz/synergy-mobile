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

  // 사이드바 토글 시 스크롤 방지/허용
  useEffect(() => {
    if (isSidebarOpen && window.innerWidth < 1024) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 사이드바 토글 핸들러
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // 사이드바 닫기 핸들러 (아이템 선택 후 모바일에서 자동으로 닫히도록)
  const handleItemSelect = (itemId) => {
    setActiveItem(itemId);
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* 모바일 메뉴 버튼 */}
      <div className="lg:hidden fixed top-4 left-4 z-30">
        <button
          onClick={toggleSidebar}
          className="p-2 bg-white rounded-md shadow-md"
          aria-label="메뉴 토글"
        >
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* 사이드바 오버레이 (모바일) */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}

      {/* 사이드바 */}
      <Sidebar
        sections={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        activeItem={activeItem}
        setActiveItem={handleItemSelect}
        isSidebarOpen={isSidebarOpen}
      />

      {/* 메인 콘텐츠 */}
      <div
        className={`transition-all duration-300 ${
          isSidebarOpen ? "lg:ml-64" : ""
        } lg:ml-64 pb-safe`}
      >
        {/* 헤더 */}
        <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-4 md:p-6 lg:p-10">
          <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
            <div className="border-white/30 text-white bg-white/10 inline-flex items-center text-xs px-2.5 py-0.5 rounded-md font-semibold">
              신입 설계사 가이드
            </div>
            <h1 className="text-2xl md:text-3xl font-bold">📝 신입 설계사 입문 메뉴얼</h1>
            <p className="text-lg md:text-xl font-medium">🚀 신입 설계사 입문 로드맵 (진짜 쉬움)</p>
          </div>
        </header>

        {/* 콘텐츠 영역 */}
        <Content
          sections={sections}
          activeSection={activeSection}
          activeItem={activeItem}
          setActiveItem={handleItemSelect}
          copied={copied}
          copyToClipboard={copyToClipboard}
          setActiveSection={setActiveSection}
        />
      </div>
    </main>
  );
}
