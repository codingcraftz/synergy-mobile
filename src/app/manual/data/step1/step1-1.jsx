"use client";

import { ExternalLink } from "lucide-react";

const Step1_1 = ({ copied, copyToClipboard }) => (
  <div className="space-y-5">
    <div>
      <h2 className="text-xl font-semibold">입사지원서 작성</h2>
    </div>

    <p className="text-xs sm:text-sm">
      입사지원서 양식은{" "}
      <a
        href="http://pf.kakao.com/_DNpMn/chat"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 font-medium inline-flex items-center gap-1"
      >
        카카오톡 경영지원팀 채널 <ExternalLink className="h-3 w-3" />
      </a>
      로 요청을 주시면 빠르게 보내드립니다 (1분 이내)
    </p>

    <div className="bg-blue-50 p-3 sm:p-4 rounded-md">
      <p className="font-medium text-xs sm:text-sm">
        아래의 입사지원서 내용을 빠짐없이 꼼꼼히 작성해주시면 됩니다!
      </p>
      <p className="mt-2 text-xs sm:text-sm">어렵지않죠? 👌</p>
    </div>

    <div className="border rounded-md p-3 sm:p-4">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-medium text-sm sm:text-base">입사지원서 첨부파일</h4>
        <a
          href="/files/입사지원서.png"
          download
          className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-xs sm:text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-download"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" x2="12" y1="15" y2="3"></line>
          </svg>
          다운로드
        </a>
      </div>
      <p className="text-xs sm:text-sm text-gray-600">
        입사지원서를 다운로드하여 작성 후 카카오톡 채널로 보내주세요.
      </p>
    </div>
  </div>
);

export default Step1_1;
