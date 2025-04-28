"use client";

import {
  ArrowLeft,
  ExternalLink,
  PhoneCall,
  Users,
  Building,
  LinkIcon,
  Check,
  Info,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Step4_2() {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-semibold">원수사 연락처 정리</h2>
      </div>

      <div className="bg-purple-50 p-3 sm:p-4 rounded-md">
        <p className="text-xs sm:text-sm">
          지점별 원수사 설계매니저, 지점장 등의 연락처를 확인할 수 있습니다. 아래 링크를 통해 원수사
          연락처 정보를 확인하세요.
        </p>
      </div>

      <div className="border border-gray-200 rounded-md p-3 sm:p-4">
        <a
          href="https://docs.google.com/spreadsheets/d/1DrIPuxDDBQyUvwNdimMqPADGH8qtMov8BnAVu1merB4/edit?gid=784524292#gid=784524292"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-between items-center"
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="p-2 bg-purple-100 rounded-full flex-shrink-0">
              <ExternalLink className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <h3 className="font-medium text-sm sm:text-base">원수사 연락처 바로가기</h3>
              <p className="text-xs sm:text-sm text-gray-500">지점별 담당자 연락처 목록</p>
            </div>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700 text-xs sm:text-sm">바로가기</Button>
        </a>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 p-3 sm:p-4 rounded-md">
        <div className="flex items-start gap-2">
          <Info className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm">
            <span className="font-medium">참고:</span> 연락처 목록에서 지점별 원수사 설계매니저,
            지점장 등의 연락처를 확인하실 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
