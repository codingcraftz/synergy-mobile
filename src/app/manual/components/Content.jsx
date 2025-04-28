"use client";

import { Badge } from "@/components/ui/badge";
import { ChevronRight, ChevronLeft, ArrowRight, ArrowLeft } from "lucide-react";
import { ScrollToTopButton } from "@/components/ui/ScollToTopButton";
import { Button } from "@/components/ui/button";

export default function Content({
  sections,
  activeSection,
  activeItem,
  setActiveItem,
  setActiveSection,
  copied,
  copyToClipboard,
  section,
  item,
}) {
  // 두 가지 사용 방식 지원: sections + activeSection 또는 section
  const currentSection = section || sections?.find((s) => s.id === activeSection);
  const currentItem =
    item || sections?.find((s) => s.id === activeSection)?.items?.find((i) => i.id === activeItem);

  // sections가 전달된 경우에만 이동 관련 기능 활성화
  if (sections && activeSection && activeItem) {
    // 현재 활성화된 섹션의 아이템 찾기
    const activeItems = sections.find((section) => section.id === activeSection)?.items || [];

    // 다음 섹션 찾기
    const getNextSection = () => {
      const currentSectionIndex = sections.findIndex((section) => section.id === activeSection);
      if (currentSectionIndex < sections.length - 1) {
        return sections[currentSectionIndex + 1];
      }
      return null;
    };

    // 이전 섹션 찾기
    const getPrevSection = () => {
      const currentSectionIndex = sections.findIndex((section) => section.id === activeSection);
      if (currentSectionIndex > 0) {
        return sections[currentSectionIndex - 1];
      }
      return null;
    };

    // 이전/다음 항목으로 이동하는 함수
    const goToPrevItem = () => {
      const currentIndex = activeItems.findIndex((item) => item.id === activeItem);
      if (currentIndex > 0) {
        // 이전에 콘텐츠가 정의된 항목 찾기
        for (let i = currentIndex - 1; i >= 0; i--) {
          if (activeItems[i].content) {
            setActiveItem(activeItems[i].id);
            return;
          }
        }
      } else {
        // 현재 첫 번째 아이템이라면 이전 섹션의 마지막 아이템으로 이동
        const prevSection = getPrevSection();
        if (prevSection && setActiveSection) {
          const prevSectionItems = prevSection.items || [];
          // 이전 섹션의 마지막 콘텐츠가 정의된 아이템 찾기
          for (let i = prevSectionItems.length - 1; i >= 0; i--) {
            if (prevSectionItems[i].content) {
              setActiveItem(prevSectionItems[i].id);
              // activeSection도 업데이트
              setActiveSection(prevSection.id);
              return;
            }
          }
        }
      }
    };

    const goToNextItem = () => {
      const currentIndex = activeItems.findIndex((item) => item.id === activeItem);
      if (currentIndex < activeItems.length - 1) {
        // 다음에 콘텐츠가 정의된 항목 찾기
        for (let i = currentIndex + 1; i < activeItems.length; i++) {
          if (activeItems[i].content) {
            setActiveItem(activeItems[i].id);
            return;
          }
        }
      } else {
        // 현재 마지막 아이템이라면 다음 섹션의 첫 번째 아이템으로 이동
        const nextSection = getNextSection();
        if (nextSection && setActiveSection) {
          const nextSectionItems = nextSection.items || [];
          // 다음 섹션의 첫 번째 콘텐츠가 정의된 아이템 찾기
          for (let i = 0; i < nextSectionItems.length; i++) {
            if (nextSectionItems[i].content) {
              setActiveItem(nextSectionItems[i].id);
              // activeSection도 업데이트
              setActiveSection(nextSection.id);
              return;
            }
          }
        }
      }
    };

    // 이전/다음 항목이 있는지 확인
    const hasPrevItem = () => {
      const currentIndex = activeItems.findIndex((item) => item.id === activeItem);
      if (currentIndex > 0) {
        // 이전에 콘텐츠가 정의된 항목이 있는지 확인
        for (let i = currentIndex - 1; i >= 0; i--) {
          if (activeItems[i].content) return true;
        }
      }

      // 이전 섹션의 아이템 확인
      if (setActiveSection) {
        const prevSection = getPrevSection();
        if (prevSection) {
          const prevSectionItems = prevSection.items || [];
          for (let i = 0; i < prevSectionItems.length; i++) {
            if (prevSectionItems[i].content) return true;
          }
        }
      }

      return false;
    };

    const hasNextItem = () => {
      const currentIndex = activeItems.findIndex((item) => item.id === activeItem);
      if (currentIndex < activeItems.length - 1) {
        // 다음에 콘텐츠가 정의된 항목이 있는지 확인
        for (let i = currentIndex + 1; i < activeItems.length; i++) {
          if (activeItems[i].content) return true;
        }
      }

      // 다음 섹션의 아이템 확인
      if (setActiveSection) {
        const nextSection = getNextSection();
        if (nextSection) {
          const nextSectionItems = nextSection.items || [];
          for (let i = 0; i < nextSectionItems.length; i++) {
            if (nextSectionItems[i].content) return true;
          }
        }
      }

      return false;
    };

    // 이전 항목과 다음 항목의 제목 가져오기
    const getPrevItemTitle = () => {
      const currentIndex = activeItems.findIndex((item) => item.id === activeItem);
      if (currentIndex > 0) {
        // 이전에 콘텐츠가 정의된 항목 찾기
        for (let i = currentIndex - 1; i >= 0; i--) {
          if (activeItems[i].content) {
            return activeItems[i].title;
          }
        }
      }

      // 이전 섹션의 마지막 아이템 제목 찾기 (setActiveSection이 있을 때만)
      if (setActiveSection) {
        const prevSection = getPrevSection();
        if (prevSection) {
          const prevSectionItems = prevSection.items || [];
          for (let i = prevSectionItems.length - 1; i >= 0; i--) {
            if (prevSectionItems[i].content) {
              return prevSectionItems[i].title;
            }
          }
        }
      }

      return "";
    };

    const getNextItemTitle = () => {
      const currentIndex = activeItems.findIndex((item) => item.id === activeItem);
      if (currentIndex < activeItems.length - 1) {
        // 다음에 콘텐츠가 정의된 항목 찾기
        for (let i = currentIndex + 1; i < activeItems.length; i++) {
          if (activeItems[i].content) {
            return activeItems[i].title;
          }
        }
      }

      // 다음 섹션의 첫 번째 아이템 제목 찾기 (setActiveSection이 있을 때만)
      if (setActiveSection) {
        const nextSection = getNextSection();
        if (nextSection) {
          const nextSectionItems = nextSection.items || [];
          for (let i = 0; i < nextSectionItems.length; i++) {
            if (nextSectionItems[i].content) {
              return nextSectionItems[i].title;
            }
          }
        }
      }

      return "";
    };

    return (
      <div className="max-w-3xl mx-auto p-3 sm:p-4 pt-6 sm:pt-8 pb-20">
        {/* 환영 메시지 */}
        <div className="bg-white rounded-lg border p-4 mb-6 sm:mb-8 text-sm sm:text-base">
          <p className="font-medium">안녕하세요!</p>
          <p className="mt-2">입사를 결정해주셔서 진심으로 감사합니다.</p>
          <p className="mt-2">
            보험이 처음이신 분들, 혹은 다른 회사에서 경력이 있으신 분들 모두 새로운 환경에
            적응하느라 어려움이 많으실 거예요.
          </p>
          <p className="mt-2">
            최대한 알기 쉽게, 하나하나 따라가실 수 있도록 정리해드릴 테니 꼭 순서대로 확인해 주세요!
          </p>
          <p className="mt-2">
            또한 <strong>신입 후보자를 도입하시려는 관리자분들도</strong> 이 자료를 참고해 주세요.
          </p>
        </div>

        {/* 안내 메시지 */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 sm:mb-8 text-sm sm:text-base">
          <p className="font-medium text-yellow-800">
            사이드바에서 원하는 섹션과 항목을 선택하거나, 하단의 이전/다음 버튼을 사용해 순서대로
            진행하세요.
          </p>
          <p className="mt-2 text-yellow-700">
            모바일에서는 좌측 상단의 메뉴 버튼을 클릭하여 사이드바를 열 수 있습니다.
          </p>
        </div>

        {/* 현재 위치 표시 */}
        <div className="flex items-center flex-wrap gap-1 sm:gap-2 text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
          <span>홈</span>
          <ChevronRight className="h-3 w-3" />
          {currentSection && (
            <>
              <span>{currentSection.title}</span>
              <ChevronRight className="h-3 w-3" />
            </>
          )}
          {currentItem && <span className="font-medium text-gray-700">{currentItem.title}</span>}
        </div>

        {/* 메인 콘텐츠 */}
        <div className="bg-white rounded-lg border p-4 sm:p-6">
          {/* 헤더 */}
          <div className="border-b pb-3 mb-4">
            <Badge
              className={currentSection?.bgColor || "bg-blue-50"}
              style={{ color: currentSection?.badgeColor || "inherit" }}
            >
              {currentSection?.title || "섹션"}
            </Badge>
            <h1 className="text-xl sm:text-2xl font-bold mt-2">{currentItem?.title || "제목"}</h1>
          </div>

          {/* 콘텐츠 렌더링 */}
          <div className="prose prose-sm sm:prose prose-slate max-w-none">
            {currentItem?.content ? (
              currentItem.content({ copied, copyToClipboard })
            ) : (
              <p>준비 중인 콘텐츠입니다.</p>
            )}
          </div>
        </div>

        {/* 이전/다음 네비게이션 - 원래 스타일로 복원 */}
        <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-4 border-t">
          {hasPrevItem() ? (
            <Button
              onClick={goToPrevItem}
              variant="outline"
              className="w-full sm:w-1/2 border-gray-300 text-gray-700 hover:bg-gray-100 flex items-center justify-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="truncate">이전: {getPrevItemTitle()}</span>
            </Button>
          ) : (
            <div className="w-full sm:w-1/2"></div>
          )}

          {hasNextItem() ? (
            <Button
              onClick={goToNextItem}
              className="w-full sm:w-1/2 bg-black text-white hover:bg-gray-800 flex items-center justify-center gap-2"
            >
              <span className="truncate">다음: {getNextItemTitle()}</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          ) : (
            <div className="w-full sm:w-1/2"></div>
          )}
        </div>

        {/* 최상단으로 스크롤 버튼 - 간격 추가 */}
        <div className="mt-10 mb-10">
          <ScrollToTopButton />
        </div>
      </div>
    );
  }

  // 단일 콘텐츠 사용 사례 (section과 item만 제공된 경우)
  return (
    <div className="max-w-3xl mx-auto p-3 sm:p-4 pt-6 sm:pt-8 pb-20">
      {/* 메인 콘텐츠 */}
      <div className="bg-white rounded-lg border p-4 sm:p-6">
        {/* 헤더 */}
        <div className="border-b pb-3 mb-4">
          <Badge
            className={currentSection?.bgColor || "bg-blue-50"}
            style={{ color: currentSection?.badgeColor || "inherit" }}
          >
            {currentSection?.title || "섹션"}
          </Badge>
          <h1 className="text-xl sm:text-2xl font-bold mt-2">{currentItem?.title || "제목"}</h1>
        </div>

        {/* 콘텐츠 렌더링 */}
        <div className="prose prose-sm sm:prose prose-slate max-w-none">
          {currentItem?.content ? (
            currentItem.content({ copied, copyToClipboard })
          ) : (
            <p>준비 중인 콘텐츠입니다.</p>
          )}
        </div>
      </div>

      {/* 최상단으로 스크롤 버튼 - 간격 추가 */}
      <div className="mt-10 mb-10">
        <ScrollToTopButton />
      </div>
    </div>
  );
}
