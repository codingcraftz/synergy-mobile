"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

// colorMap 객체를 제거하고 Tailwind CSS를 직접 사용

export default function Sidebar({
  sections,
  activeSection,
  setActiveSection,
  activeItem,
  setActiveItem,
  isSidebarOpen,
}) {
  return (
    <aside
      className={`fixed top-0 left-0 z-30 h-full bg-white border-r w-full sm:w-80 md:w-72 lg:w-64 transform transition-all duration-300 ease-in-out ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 shadow-lg lg:shadow-none overflow-hidden`}
    >
      <div className="p-4 border-b sticky top-0 bg-white z-10">
        <h2 className="font-bold text-lg">신입 설계사 메뉴얼</h2>
        <p className="text-sm text-gray-500 mt-1">시너지그룹 로드맵</p>
      </div>

      <nav className="p-2 overflow-y-auto h-[calc(100vh-65px)] pb-safe">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <div key={section.id} className="mb-4">
              <button
                onClick={() => {
                  setActiveSection(section.id);
                }}
                className={`w-full text-left px-4 py-3 rounded-md flex items-center justify-between ${
                  isActive
                    ? `${section.bgColor} ${section.color} font-medium`
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span className="flex items-center gap-2">
                  {section.icon}
                  <span>{section.title}</span>
                </span>
                <ChevronRight
                  size={16}
                  className={`transform transition-transform ${isActive ? "rotate-90" : ""}`}
                />
              </button>

              {isActive && (
                <div className="ml-5 mt-2 border-l pl-3 space-y-2">
                  {section.items.map((item) => {
                    const isItemActive = activeItem === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          if (item.content) {
                            setActiveItem(item.id);
                          }
                        }}
                        disabled={!item.content}
                        className={`w-full text-left px-3 py-2.5 rounded-md text-sm ${
                          isItemActive
                            ? `${section.bgColor} ${section.color} font-medium`
                            : !item.content
                            ? "text-gray-400 cursor-not-allowed"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          {item.icon}
                          <span>{item.title}</span>
                          {!item.content && <span className="text-xs ml-1">(준비중)</span>}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
