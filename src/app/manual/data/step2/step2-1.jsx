"use client";

import { ExternalLink } from "lucide-react";

const Step2_1 = () => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold">신입 단톡방 입장하기</h3>
    <p>
      시너지는 공식 오픈채팅방으로 새로운 메이트들을 기다리고 있습니다. 아래 링크를 통해
      가입해주세요.
    </p>

    <div className="space-y-5">
      <div className="p-4 border rounded-lg shadow-sm">
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 bg-yellow-400 rounded-md flex items-center justify-center">
            <svg
              width="24"
              height="22"
              viewBox="0 0 24 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0C5.37321 0 0 4.23797 0 9.47185C0 12.8141 2.22321 15.7653 5.59018 17.5189C5.33304 18.4618 4.67411 20.9096 4.53348 21.4909C4.35804 22.2203 4.84286 22.2055 5.18839 21.9666C5.45893 21.7795 8.49911 19.6778 9.79554 18.7793C10.5054 18.8677 11.2411 18.9437 12 18.9437C18.6268 18.9437 24 14.7057 24 9.47185C24 4.23797 18.6268 0 12 0Z"
                fill="black"
              />
              <path
                d="M5.39285 11.0803C4.95535 11.0803 4.60714 10.7321 4.60714 10.2946C4.60714 9.85712 4.95535 9.50891 5.39285 9.50891H11.2143C11.6518 9.50891 12 9.85712 12 10.2946C12 10.7321 11.6518 11.0803 11.2143 11.0803H5.39285ZM12.7857 7.93748C12.3482 7.93748 12 7.58927 12 7.15177C12 6.71427 12.3482 6.36605 12.7857 6.36605H18.6071C19.0446 6.36605 19.3929 6.71427 19.3929 7.15177C19.3929 7.58927 19.0446 7.93748 18.6071 7.93748H12.7857ZM12.7857 11.0803C12.3482 11.0803 12 10.7321 12 10.2946C12 9.85712 12.3482 9.50891 12.7857 9.50891H18.6071C19.0446 9.50891 19.3929 9.85712 19.3929 10.2946C19.3929 10.7321 19.0446 11.0803 18.6071 11.0803H12.7857ZM5.39285 7.93748C4.95535 7.93748 4.60714 7.58927 4.60714 7.15177C4.60714 6.71427 4.95535 6.36605 5.39285 6.36605H11.2143C11.6518 6.36605 12 6.71427 12 7.15177C12 7.58927 11.6518 7.93748 11.2143 7.93748H5.39285Z"
                fill="#FFE812"
              />
            </svg>
          </div>
          <div>
            <h4 className="font-medium text-base">오픈 카카오톡 방</h4>
            <p className="text-xs text-gray-500">방에 입장하셔서 본인의 이름/근무지를 알려주세요</p>
          </div>
        </div>

        <a
          href="https://open.kakao.com/o/gvShvQhf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center justify-between p-3 bg-gray-50 border rounded-md text-sm text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <span className="font-medium">시너지그룹 신입메이트 오픈채팅방</span>
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      <div className="bg-yellow-50 p-4 rounded-md border border-yellow-100">
        <h4 className="font-semibold flex items-center gap-1 mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-yellow-600"
          >
            <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" x2="12" y1="9" y2="13"></line>
            <line x1="12" x2="12.01" y1="17" y2="17"></line>
          </svg>
          단톡방 이용 시 주의사항
        </h4>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>
            <strong>입장 후 본인 이름과 근무지점을 꼭 공유해주세요.</strong>
          </li>
          <li>비즈니스 환경에 맞는 예의와 존중을 지켜주세요.</li>
          <li>질문과 도움 요청은 언제든지 환영합니다.</li>
          <li>회사 정보 및 개인정보 유출에 주의해주세요.</li>
        </ul>
      </div>

      <div className="p-4 bg-blue-50 rounded-md border border-blue-100">
        <div className="flex items-start gap-2">
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
            className="text-blue-500"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" x2="12" y1="8" y2="12"></line>
            <line x1="12" x2="12.01" y1="16" y2="16"></line>
          </svg>
          <div>
            <h4 className="font-medium">단톡방은 신입메이트의 가장 빠른 정보창구입니다!</h4>
            <p className="text-sm mt-1">
              시너지그룹의 최신 소식, 중요 공지사항, 경력자들의 노하우 등 많은 정보를 얻을 수 있는
              공간입니다. 적극적으로 참여하셔서 성장의 발판으로 삼으세요!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Step2_1;
