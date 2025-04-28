"use client";

import { AlertTriangle, ArrowLeft, ExternalLink } from "lucide-react";
import { RiKakaoTalkFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Step3_1 = ({ copied, copyToClipboard }) => {
  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">FP파트너즈 가입</h2>
        <Link href="/manual" className="flex items-center text-blue-600 gap-1 text-sm">
          <ArrowLeft className="h-4 w-4" />
          <span>뒤로가기</span>
        </Link>
      </div>

      <div className="bg-blue-50 p-4 rounded-md">
        <p className="text-sm">
          FP파트너즈는 보험설계사를 위한 통합 플랫폼으로, 다양한 서비스와 정보를 제공합니다. 아래
          안내에 따라 가입을 진행해주세요.
        </p>
      </div>

      <div className="border rounded-md overflow-hidden">
        <div className="bg-indigo-50 p-3 border-b">
          <h4 className="font-medium flex items-center gap-2">
            <RiKakaoTalkFill className="h-5 w-5 text-indigo-600" />
            FP파트너즈 가입 방법
          </h4>
        </div>

        <div className="p-4">
          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md mb-4">
            <div className="flex gap-2 items-start">
              <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <h5 className="font-medium">아이디 신청 안내</h5>
                <p className="text-sm mt-1">
                  FP파트너즈 가입을 위해서는 시너지그룹 경영지원팀을 통해 아이디를 신청해야 합니다.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h5 className="font-medium">시너지그룹 경영지원팀 카카오톡 채널로 문의하세요</h5>

            <div className="border p-3 rounded-md">
              <div className="flex items-center gap-2 mb-2">
                <RiKakaoTalkFill className="text-lg text-[#391B1B]" />
                <h6 className="font-medium">시너지그룹 경영지원팀 카카오톡 채널</h6>
              </div>
              <a
                href="http://pf.kakao.com/_DNpMn/chat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 inline-flex items-center gap-1"
              >
                http://pf.kakao.com/_DNpMn/chat
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            <div className="bg-gray-50 p-4 rounded-md">
              <h6 className="font-medium mb-2">신청 시 필요한 정보</h6>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  <span className="font-medium">희망 아이디</span>
                  <p className="text-gray-600 text-xs mt-0.5">
                    원하는 아이디를 2-3개 정도 작성해주세요
                  </p>
                </li>
                <li>
                  <span className="font-medium">이름(실명)</span>
                </li>
                <li>
                  <span className="font-medium">이메일</span>
                  <p className="text-gray-600 text-xs mt-0.5">
                    실제 사용 중인 이메일을 정확히 작성해주세요
                  </p>
                </li>
              </ul>
            </div>

            <div className="p-4 border rounded-md bg-indigo-50">
              <div className="flex items-start gap-2">
                <RiKakaoTalkFill className="text-lg text-[#391B1B] mt-0.5" />
                <div>
                  <h6 className="font-medium">카카오톡 메시지 작성 예시</h6>
                  <p className="text-sm mt-1 text-gray-700">
                    안녕하세요, FP파트너즈 아이디 신청합니다.
                    <br />
                    희망아이디: synergy123, synergykim (2개 중 가능한 것으로)
                    <br />
                    이름: 홍길동
                    <br />
                    이메일: example@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3_1;
