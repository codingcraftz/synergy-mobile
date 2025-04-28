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
                <h5 className="font-medium">가입 안내</h5>
                <p className="text-sm mt-1">
                  FP파트너즈 가입은 공식 홈페이지를 통해 직접 진행할 수 있습니다.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h5 className="font-medium">FP파트너즈 공식 홈페이지 방문</h5>

            <div className="border p-3 rounded-md">
              <div className="flex items-center gap-2 mb-2">
                <ExternalLink className="h-5 w-5 text-indigo-600" />
                <h6 className="font-medium">FP파트너즈 공식 홈페이지</h6>
              </div>
              <a
                href="https://www.fppartners.co.kr/join/join_step01.jsp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 inline-flex items-center gap-1"
              >
                https://www.fppartners.co.kr
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            <div className="bg-gray-50 p-4 rounded-md">
              <h6 className="font-medium mb-2">가입 시 필요한 정보</h6>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  <span className="font-medium">개인정보</span>
                  <p className="text-gray-600 text-xs mt-0.5">
                    이름, 생년월일, 성별, 휴대폰 번호, 이메일 등 기본 정보
                  </p>
                </li>
                <li>
                  <span className="font-medium">설계사 정보</span>
                  <p className="text-gray-600 text-xs mt-0.5">
                    소속 GA명, 사원번호, 모집인 등록번호 등
                  </p>
                </li>
                <li>
                  <span className="font-medium">본인인증</span>
                  <p className="text-gray-600 text-xs mt-0.5">
                    휴대폰 또는 공동인증서를 통한 본인인증 필요
                  </p>
                </li>
              </ul>
            </div>

            <div className="p-4 border rounded-md">
              <h6 className="font-medium mb-2">가입 절차</h6>
              <ol className="list-decimal pl-5 space-y-3 text-sm">
                <li>
                  <span className="font-medium">홈페이지 접속</span>
                  <p className="text-gray-600 text-xs mt-0.5">
                    FP파트너즈 공식 홈페이지(www.fppartners.co.kr)에 접속합니다.
                  </p>
                </li>
                <li>
                  <span className="font-medium">회원가입 클릭</span>
                  <p className="text-gray-600 text-xs mt-0.5">
                    메인 페이지 상단 메뉴에서 '회원가입'을 클릭합니다.
                  </p>
                </li>
                <li>
                  <span className="font-medium">약관 동의</span>
                  <p className="text-gray-600 text-xs mt-0.5">
                    이용약관, 개인정보 수집 및 이용 동의 등 필수 약관에 동의합니다.
                  </p>
                </li>
                <li>
                  <span className="font-medium">본인인증</span>
                  <p className="text-gray-600 text-xs mt-0.5">
                    휴대폰 또는 공동인증서를 통해 본인인증을 진행합니다.
                  </p>
                </li>
                <li>
                  <span className="font-medium">정보 입력</span>
                  <p className="text-gray-600 text-xs mt-0.5">
                    필요한 개인정보 및 설계사 정보를 정확히 입력합니다.
                  </p>
                </li>
                <li>
                  <span className="font-medium">가입 완료</span>
                  <p className="text-gray-600 text-xs mt-0.5">
                    모든 정보를 입력하고 가입을 완료합니다.
                  </p>
                </li>
              </ol>
            </div>

            <div className="bg-indigo-50 p-4 rounded-md">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h6 className="font-medium">도움이 필요하신가요?</h6>
                  <p className="text-sm mt-1 text-gray-700">
                    가입 과정에서 도움이 필요하시면 시너지그룹 경영지원팀 카카오톡 채널로
                    문의해주세요.
                  </p>
                  <a
                    href="http://pf.kakao.com/_DNpMn/chat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 inline-flex items-center gap-1 mt-2 text-sm"
                  >
                    카카오톡 경영지원팀 문의하기
                    <ExternalLink className="h-3 w-3" />
                  </a>
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
