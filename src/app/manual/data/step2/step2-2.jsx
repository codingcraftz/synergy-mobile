"use client";

import { ThumbsUp, ThumbsDown, AlertCircle } from "lucide-react";

const Step2_2 = () => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold">필수앱 설치하기</h3>
    <p>
      시너지에서 업무를 원활하게 수행하기 위해 필요한 앱들을 소개합니다. 이 앱들은 일상적인 업무
      수행에 꼭 필요합니다.
    </p>

    <div className="space-y-6">
      {/* 앱 항목 1 */}
      <div className="border rounded-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 text-white">
          <h4 className="font-medium text-lg flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
              <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
              <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
            </svg>
            모바일 뱅킹앱
          </h4>
        </div>
        <div className="p-4">
          <p className="mb-3">본인 주거래 은행 앱을 필수적으로 설치하세요.</p>
          <div className="bg-yellow-50 p-3 rounded-md mb-4 border border-yellow-100">
            <div className="flex items-start">
              <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
              <p className="text-sm">
                <strong>급여계좌 등록을 위해 필요합니다.</strong> 영업활동 중 고객으로부터 받은
                수수료 또는 보험료 입금을 확인하기 위해서도 필요합니다.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-4">
            <a
              href="https://apps.apple.com/kr/app/kb-%EC%8A%A4%ED%83%80%EB%B1%85%ED%82%B9/id373742138"
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-md p-3 flex flex-col items-center justify-center hover:bg-gray-50 transition"
            >
              <img
                src="/files/app_icons/kb.png"
                alt="KB스타뱅킹"
                className="w-12 h-12 rounded-xl mb-2"
              />
              <span className="text-sm font-medium">KB스타뱅킹</span>
            </a>

            <a
              href="https://apps.apple.com/kr/app/%EC%8B%A0%ED%95%9C-sol/id507692946"
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-md p-3 flex flex-col items-center justify-center hover:bg-gray-50 transition"
            >
              <img
                src="/files/app_icons/shinhan.png"
                alt="신한 SOL"
                className="w-12 h-12 rounded-xl mb-2"
              />
              <span className="text-sm font-medium">신한 SOL</span>
            </a>

            <a
              href="https://apps.apple.com/kr/app/%EC%9A%B0%EB%A6%AC-woori/id1470704207"
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-md p-3 flex flex-col items-center justify-center hover:bg-gray-50 transition"
            >
              <img
                src="/files/app_icons/woori.png"
                alt="우리 Woori"
                className="w-12 h-12 rounded-xl mb-2"
              />
              <span className="text-sm font-medium">우리 Woori</span>
            </a>

            <a
              href="https://apps.apple.com/kr/app/%ED%86%A0%EC%8A%A4/id839333328"
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-md p-3 flex flex-col items-center justify-center hover:bg-gray-50 transition"
            >
              <img
                src="/files/app_icons/toss.png"
                alt="토스"
                className="w-12 h-12 rounded-xl mb-2"
              />
              <span className="text-sm font-medium">토스</span>
            </a>
          </div>
        </div>
      </div>

      {/* 앱 항목 2 */}
      <div className="border rounded-xl overflow-hidden">
        <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white">
          <h4 className="font-medium text-lg flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="m12 19-2 2-2-2"></path>
              <path d="M4 15a8 8 0 0 0 16 0"></path>
              <path d="M12 3v14"></path>
            </svg>
            시너지그룹 CRM
          </h4>
        </div>
        <div className="p-4">
          <p className="mb-3">시너지그룹 CRM 앱은 영업활동의 핵심 도구입니다.</p>

          <div className="grid grid-cols-1 gap-3 mb-4">
            <div className="flex items-start">
              <ThumbsUp className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium mb-1">주요 기능</p>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>계약 현황 확인 및 관리</li>
                  <li>고객 정보 관리</li>
                  <li>일정 관리 및 할일 목록</li>
                  <li>영업 기회 추적</li>
                  <li>DB 배분 및 관리</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4 mt-2">
            <a
              href="https://apps.apple.com/kr/app/%EC%8B%9C%EB%84%88%EC%A7%80-crm/id6450980642"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-3 bg-black text-white rounded-md hover:bg-gray-800 transition gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
                <path d="M10 2c1 .5 2 2 2 5"></path>
              </svg>
              <span>App Store 다운로드</span>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=org.synergygroup.crm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-3 bg-blue-500 text-white rounded-md mt-2 hover:bg-blue-600 transition gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9v6h4l5 5V4L7 9H3Z"></path>
                <path d="M15 9.3v5.4"></path>
                <path d="M18 8v8"></path>
                <path d="M21 7v10"></path>
              </svg>
              <span>Google Play 다운로드</span>
            </a>
          </div>
        </div>
      </div>

      {/* 앱 항목 3 */}
      <div className="border rounded-xl overflow-hidden">
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 text-white">
          <h4 className="font-medium text-lg flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            금융사 필수 앱
          </h4>
        </div>
        <div className="p-4">
          <p className="mb-3">보험 설계와 가입에 필요한 보험사 앱들입니다.</p>

          <div className="mb-4">
            <div className="flex items-start mb-3">
              <ThumbsUp className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">권장 사항</p>
                <p className="text-sm">
                  주요 보험사 앱을 모두 설치해두면 고객 상담 시 유용하게 활용할 수 있습니다.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <ThumbsDown className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">주의 사항</p>
                <p className="text-sm">
                  법인 휴대폰 사용자는 어플 설치 후 금융사 담당자, 법인 등록 절차를 거쳐야 합니다.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <a
              href="https://apps.apple.com/kr/app/%EC%82%BC%EC%84%B1%ED%99%94%EC%9E%AC-%ED%96%89%EB%B3%B5%EC%84%A0%EC%96%B8/id1141137775"
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-md p-2 flex flex-col items-center justify-center hover:bg-gray-50 transition"
            >
              <img
                src="/files/app_icons/samsung.png"
                alt="삼성화재"
                className="w-10 h-10 rounded-xl mb-1"
              />
              <span className="text-xs font-medium text-center">삼성화재</span>
            </a>

            <a
              href="https://apps.apple.com/kr/app/%ED%95%9C%ED%99%94%EC%83%9D%EB%AA%85-%ED%97%AC%EC%8A%A4%EC%95%B1/id1470280163"
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-md p-2 flex flex-col items-center justify-center hover:bg-gray-50 transition"
            >
              <img
                src="/files/app_icons/hanwha.png"
                alt="한화생명"
                className="w-10 h-10 rounded-xl mb-1"
              />
              <span className="text-xs font-medium text-center">한화생명</span>
            </a>

            <a
              href="https://apps.apple.com/kr/app/db%EC%83%9D%EB%AA%85-%EB%9D%BC%EC%9D%B4%ED%94%84-%EC%95%A4-%EC%9B%B0%EB%8B%88%EC%8A%A4/id1589979372"
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-md p-2 flex flex-col items-center justify-center hover:bg-gray-50 transition"
            >
              <img
                src="/files/app_icons/dblife.png"
                alt="DB생명"
                className="w-10 h-10 rounded-xl mb-1"
              />
              <span className="text-xs font-medium text-center">DB생명</span>
            </a>

            <a
              href="https://apps.apple.com/kr/app/%EB%AF%B8%EB%9E%98%EC%97%90%EC%85%8B-%EC%BB%A8%EC%8B%9C%EC%96%B4%EC%A7%80/id1660582882"
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-md p-2 flex flex-col items-center justify-center hover:bg-gray-50 transition"
            >
              <img
                src="/files/app_icons/mirae.png"
                alt="미래에셋"
                className="w-10 h-10 rounded-xl mb-1"
              />
              <span className="text-xs font-medium text-center">미래에셋</span>
            </a>

            <a
              href="https://apps.apple.com/kr/app/%EB%A9%94%EB%A6%AC%EC%B8%A0%ED%99%94%EC%9E%AC/id1456675266"
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-md p-2 flex flex-col items-center justify-center hover:bg-gray-50 transition"
            >
              <img
                src="/files/app_icons/meritz.png"
                alt="메리츠화재"
                className="w-10 h-10 rounded-xl mb-1"
              />
              <span className="text-xs font-medium text-center">메리츠화재</span>
            </a>

            <a
              href="https://apps.apple.com/kr/app/%EB%A9%94%EB%94%94%EC%B9%B4%EC%86%90%ED%95%B4%EB%B3%B4%ED%97%98/id1547875918"
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-md p-2 flex flex-col items-center justify-center hover:bg-gray-50 transition"
            >
              <img
                src="/files/app_icons/medicafire.png"
                alt="메디카"
                className="w-10 h-10 rounded-xl mb-1"
              />
              <span className="text-xs font-medium text-center">메디카</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Step2_2;
