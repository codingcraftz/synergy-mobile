"use client";

import {
  ArrowLeft,
  ExternalLink,
  FileText,
  AlertTriangle,
  CheckCircle,
  Bell,
  FileCheck,
  BookOpen,
  Mic,
  BookMarked,
  ArrowDown,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Step5_1() {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-semibold">(매우 중요) DB 과제</h2>
      </div>

      <div className="bg-red-50 p-3 sm:p-4 rounded-md">
        <h3 className="font-medium mb-2 text-sm sm:text-base">
          보장분석 DB사용 전 DB영업 초심자 과제
        </h3>
        <p className="text-xs sm:text-sm">
          모든 과제는{" "}
          <a
            href="https://www.notion.so/1d06d4627c4a80ddb80de5b4356bf9eb?pvs=21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-medium hover:underline"
          >
            DB코칭방
          </a>
          에 올리시면 됩니다. 초심자들은 과제가 수행되는 인원부터 다음주부터 선별적으로 우선
          DB지급이 시작됩니다. 과제 못하셔서 DB지급을 못받으시는 일이 없으시길 바랍니다.
        </p>
      </div>

      <div className="border border-gray-200 rounded-md overflow-hidden">
        <div className="bg-red-50 p-3 border-b border-gray-200 flex items-center gap-2">
          <Bell className="h-5 w-5 text-red-600" />
          <h3 className="font-medium text-sm sm:text-base">과제 목록</h3>
        </div>

        <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
          <div className="flex items-start gap-3 p-3 border rounded-md hover:bg-gray-50 transition-colors">
            <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-red-100 rounded-full flex items-center justify-center text-red-700 font-medium">
              1
            </div>
            <div>
              <h4 className="font-medium text-sm sm:text-base mb-1 flex items-center gap-1">
                <BookOpen className="h-4 w-4 text-red-600" />
                과제1
              </h4>
              <p className="text-xs sm:text-sm">
                TA교육자료 교안을 보면서 TA공식 강의 1,2를 수강하고 내용에 대한 요약과 수강 후기,
                느낀점을 작성(강의 1개당 최소 20줄 이상)하여 카톡방에 양식없이 제출.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 border rounded-md hover:bg-gray-50 transition-colors">
            <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-red-100 rounded-full flex items-center justify-center text-red-700 font-medium">
              2
            </div>
            <div>
              <h4 className="font-medium text-sm sm:text-base mb-1 flex items-center gap-1">
                <Mic className="h-4 w-4 text-red-600" />
                과제2
              </h4>
              <p className="text-xs sm:text-sm">
                메타리치 보장분석 TA스크립트" 파일을 출력하여 여러번 숙지한 후, 동료 혹은 리더와
                실제 통화로 롤플레잉하고 녹취한 녹취록 3개(각각 다른 상대로) 제출
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 border rounded-md hover:bg-gray-50 transition-colors">
            <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-red-100 rounded-full flex items-center justify-center text-red-700 font-medium">
              3
            </div>
            <div>
              <h4 className="font-medium text-sm sm:text-base mb-1 flex items-center gap-1">
                <Mic className="h-4 w-4 text-red-600" />
                과제3
              </h4>
              <p className="text-xs sm:text-sm">
                반대극복 연습을 충분히 한 후, 반대멘트를 하는 고객의 역할을 선배에게 부탁하여
                롤플레잉하고 녹취한 녹취록 3개(각각 다른 상대로) 제출
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 border rounded-md hover:bg-gray-50 transition-colors">
            <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-red-100 rounded-full flex items-center justify-center text-red-700 font-medium">
              4
            </div>
            <div>
              <h4 className="font-medium text-sm sm:text-base mb-1 flex items-center gap-1">
                <FileCheck className="h-4 w-4 text-red-600" />
                과제4
              </h4>
              <p className="text-xs sm:text-sm">
                본인이 했던 롤플레잉 녹취록 3개를 본인이 직접 듣고 고칠점, 향후 발전 방향에 대한
                자체 평가 후기 5줄 이상, 디테일하게 작성하여 카톡방에 양식없이 제출.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 p-3 sm:p-4 rounded-md">
        <div className="flex items-start gap-2">
          <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-medium text-sm sm:text-base">요약</h4>
            <p className="text-xs sm:text-sm mt-1 font-medium">
              강의 후기 1개, 녹취 6개, 본인 녹취 듣고 후기 1개
            </p>
            <p className="text-xs sm:text-sm mt-2">
              올려주시는 내용은 과제부터 실제 DB활동 내용까지 지속적으로 피드백 드릴 예정입니다.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-4 sm:mt-6">
        <p className="text-xs sm:text-sm text-gray-600 mb-2 flex items-center gap-1">
          <ArrowDown className="h-4 w-4" />
          아래 링크로 들어가면 과제 동영상 및 모든 스크립트가 있습니다.
        </p>
        <a
          href="https://www.notion.so/DB-54cb52b5f682497f8aa756e8c07f8476?pvs=21"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
        >
          <BookMarked className="h-5 w-5" />
          <span className="font-medium text-xs sm:text-sm">컴패니언 사업부 DB자료 모음</span>
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
