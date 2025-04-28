"use client";

import { ExternalLink } from "lucide-react";

const Step1_2 = ({ copied, copyToClipboard }) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold">위촉 및 코드 발급 절차</h3>
    <p>위촉 및 코드 발급 절차는 아래와 같이 진행됩니다. 각 단계를 꼼꼼히 확인해주세요.</p>
    <div className="divide-y">
      <div className="py-4">
        <h4 className="font-medium">1. 필요서류 준비</h4>
        <p className="text-sm text-gray-600 mt-1">아래 서류들을 작성/준비해주세요</p>
        <div className="mt-2 space-y-2">
          <div className="border p-3 rounded-md">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium">위촉서류양식</h4>
              <a
                href="/files/위촉서류양식.pdf"
                download
                className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm"
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
            <p className="text-sm text-gray-600 mt-1">서류 양식을 다운로드하여 작성해주세요.</p>
          </div>

          <div className="border p-3 rounded-md">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium">협회 등록 양식</h4>
              <a
                href="/files/롯데손보_보험대리점_설계사_협회_등록_양식.pdf.pdf"
                download
                className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm"
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
            <p className="text-sm text-gray-600 mt-1">
              협회 등록 양식을 다운로드하여 작성해주세요.
            </p>
          </div>
        </div>
      </div>

      <div className="py-4">
        <h4 className="font-medium">2. 보험 설계사 자격증</h4>
        <p className="text-sm text-gray-600 mt-1">
          보험 설계사 자격증 취득 여부에 따라 달라집니다.
        </p>
        <div className="mt-3 bg-gray-50 p-3 rounded-md">
          <h5 className="font-medium">보험 설계사 자격증이 있는 경우</h5>
          <ul className="list-disc pl-5 mt-1 text-sm space-y-1">
            <li>자격증사본, 주민등록등본, 통장사본, 이력서를 준비해주세요.</li>
            <li>현 소속이 있는 경우 말소처리가 필요하니 담당자에게 말소처리를 요청해주세요.</li>
          </ul>
        </div>
        <div className="mt-3 bg-gray-50 p-3 rounded-md">
          <h5 className="font-medium">보험 설계사 자격증이 없는 경우</h5>
          <ul className="list-disc pl-5 mt-1 text-sm space-y-1">
            <li>
              주민등록등본, 통장사본, 이력서와 함께 별도의 자격시험 응시 및 합격이 필요합니다.
            </li>
            <li>
              <a
                href="https://www.efiu.or.kr:8443/front/main.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 inline-flex items-center gap-1"
              >
                자격시험 접수 사이트 <ExternalLink className="h-3 w-3" />
              </a>
              에서 시험 접수를 진행해주세요.
            </li>
          </ul>
        </div>
      </div>

      <div className="py-4">
        <h4 className="font-medium">3. 서류 제출</h4>
        <p className="text-sm text-gray-600 mt-1">준비된 서류들을 다음 방법으로 제출해주세요.</p>
        <div className="mt-2">
          <div className="bg-blue-50 p-3 rounded-md">
            <p className="font-medium">제출 방법</p>
            <ul className="list-disc pl-5 mt-1 text-sm space-y-1">
              <li>모든 서류를 취합하여 경영지원팀으로 보내주세요.</li>
              <li>
                <span className="font-medium">이메일 제출:</span> support@synergy.co.kr
              </li>
              <li>
                <span className="font-medium">카카오톡 제출:</span>{" "}
                <a
                  href="http://pf.kakao.com/_DNpMn/chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 inline-flex items-center gap-1"
                >
                  경영지원팀 카카오톡 채널 <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Step1_2;
