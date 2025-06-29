"use client";

import {
  ArrowLeft,
  ExternalLink,
  MonitorSmartphone,
  Link as LinkIcon,
  FileText,
  BookOpen,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Step4_1() {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-semibold">보험회사 전산</h2>
      </div>

      <div className="bg-purple-50 p-3 sm:p-4 rounded-md">
        <p className="text-xs sm:text-sm">
          각 보험회사별 전산 시스템에 접속하여 계약 관리 및 업무를 수행할 수 있습니다. 아래 링크를
          통해 회사별 전산 바로가기가 가능합니다.
        </p>
      </div>

      <div className="border border-gray-200 rounded-md p-3 sm:p-4">
        <a
          href="http://www.gasupport.co.kr/gasys/mega/inc/pop_insucon.asp"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-between items-center"
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="p-2 bg-purple-100 rounded-full flex-shrink-0">
              <ExternalLink className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <h3 className="font-medium text-sm sm:text-base">보험회사 전산 바로가기</h3>
              <p className="text-xs sm:text-sm text-gray-500">회사별 전산 사이트 링크 모음</p>
            </div>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700 text-xs sm:text-sm">바로가기</Button>
        </a>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 p-3 sm:p-4 rounded-md">
        <p className="text-xs sm:text-sm">
          <span className="font-medium">참고:</span> 전산 시스템 접속을 위해서는 설계사 코드와
          비밀번호가 필요합니다. 위촉 완료 후 접속 가능합니다.
        </p>
      </div>
    </div>
  );
}
