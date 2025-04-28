"use client";

import { AlertTriangle, ExternalLink } from "lucide-react";
import { RiKakaoTalkFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";

const Step3_1 = () => {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-semibold">FP파트너즈 가입</h2>
      </div>

      <div className="border rounded-md p-3 sm:p-5 space-y-4">
        <div className="flex items-start gap-3">
          <div className="bg-emerald-100 p-2 rounded-md flex-shrink-0">
            <ExternalLink className="h-5 w-5 text-emerald-600" />
          </div>
          <div>
            <h3 className="font-medium mb-1 text-sm sm:text-base">FP파트너즈 링크</h3>
            <a
              href="https://www.fppartners.co.kr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 inline-flex items-center gap-1 text-xs sm:text-sm break-all"
            >
              https://www.fppartners.co.kr/
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="bg-emerald-100 p-2 rounded-md flex-shrink-0">
            <RiKakaoTalkFill className="h-5 w-5 text-[#391B1B]" />
          </div>
          <div>
            <h3 className="font-medium mb-1 text-sm sm:text-base">아이디 신청 방법</h3>
            <p className="text-xs sm:text-sm text-gray-700 mb-2">
              아이디 신청은 <strong>카카오톡 경영지원팀</strong>으로 부탁드립니다.
            </p>
            <a
              href="http://pf.kakao.com/_DNpMn/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 inline-flex items-center gap-1 text-xs sm:text-sm"
            >
              카카오톡 경영지원팀 문의하기
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="bg-emerald-100 p-2 rounded-md flex-shrink-0 text-emerald-600 font-bold">
            #
          </div>
          <div>
            <h3 className="font-medium mb-1 text-sm sm:text-base">신청양식</h3>
            <div className="bg-gray-50 p-3 rounded-md">
              <p className="text-xs sm:text-sm text-gray-700">희망아이디/이름/이메일</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3_1;
