"use client";

import {
  ArrowLeft,
  ExternalLink,
  FileCheck,
  FileText,
  Smartphone,
  AlertTriangle,
  Phone,
  PrinterIcon,
  Mail,
  Check,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RiKakaoTalkFill } from "react-icons/ri";

export default function Step4_3() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">수납방법</h2>

      <div className="bg-blue-50 p-4 rounded-md">
        <p className="text-sm">
          청약 방식에 따른 수납 처리 방법과 안내사항을 확인하세요. 모바일청약과 서면청약 두 가지
          방법이 있습니다.
        </p>
      </div>

      <div className="border border-gray-200 rounded-md overflow-hidden">
        <div className="bg-purple-50 p-3 border-b border-gray-200">
          <h3 className="font-medium flex items-center gap-2">
            <Smartphone className="h-5 w-5 text-purple-600" />
            모바일청약
          </h3>
        </div>

        <div className="p-4 space-y-3">
          <div className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
            <p className="text-sm">회사별 모바일 청약을 완료합니다.</p>
          </div>

          <div className="bg-yellow-50 p-3 rounded-md border border-yellow-200">
            <h4 className="font-medium text-sm mb-2">수납이 안될 경우</h4>
            <p className="text-sm">
              다음 정보를 카카오톡 경영지원팀 각 권역별 총무님들께 전달하세요:
            </p>
            <ul className="mt-2 space-y-1 pl-5 list-disc text-sm">
              <li>설계번호</li>
              <li>보험사명</li>
              <li>계약자 성함</li>
              <li>피보험자 성함</li>
            </ul>
            <p className="text-xs mt-2 text-gray-600">
              채널로 메시지 보낸 후 이름직급+지점+연락처 말씀하시면 자동으로 담당 총무님께
              배정됩니다.
            </p>
          </div>

          <div className="bg-green-50 p-3 rounded-md border border-green-200">
            <h4 className="font-medium text-sm mb-2">수납이 되었을 경우</h4>
            <p className="text-sm">다음 정보를 카카오톡 경영지원팀에 보내세요:</p>
            <ul className="mt-2 space-y-1 pl-5 list-disc text-sm">
              <li>증번 혹은 설계번호</li>
              <li>계약자 성함</li>
              <li>피보험자 성함</li>
              <li>보험사</li>
              <li>상품명</li>
              <li>보험료</li>
              <li>납입/만기</li>
            </ul>
          </div>

          <div className="flex items-center gap-2 bg-blue-50 p-2 rounded-md">
            <AlertTriangle className="h-4 w-4 text-blue-600" />
            <p className="text-sm font-medium">그래야 MVP 선정이 원활하게 가능합니다.</p>
          </div>
        </div>
      </div>

      <div className="border border-gray-200 rounded-md overflow-hidden">
        <div className="bg-purple-50 p-3 border-b border-gray-200">
          <h3 className="font-medium flex items-center gap-2">
            <FileText className="h-5 w-5 text-purple-600" />
            서면청약
          </h3>
        </div>

        <div className="p-4 space-y-3">
          <div className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
            <p className="text-sm">청약서를 작성합니다.</p>
          </div>

          <div className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
            <p className="text-sm">
              모집인 서명, 계약자/피보험자 서명 등 빠진 곳이 없는지 3번 정도 확인합니다.
            </p>
          </div>

          <div className="flex flex-col gap-3 pl-6 mt-1">
            <div className="flex items-start gap-2">
              <div className="bg-gray-200 text-gray-800 rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                1
              </div>
              <p className="text-sm">
                스캔 후 스캔 파일(PDF)을 카카오톡 경영지원팀 권역별 총무님들에게 전달해주거나
              </p>
            </div>

            <div className="flex items-start gap-2">
              <div className="bg-gray-200 text-gray-800 rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                2
              </div>
              <p className="text-sm">각 사무실에 총무님이 계신다면 총무님에게 전달합니다.</p>
            </div>
          </div>

          <div className="bg-yellow-50 p-3 rounded-md border border-yellow-200">
            <p className="text-sm font-medium">참고</p>
            <p className="text-sm mt-1">수도권 권역의 경우 양하은 대리 연락망으로 주시면 됩니다.</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-md">
        <h3 className="font-medium flex items-center gap-2 mb-3">
          <Phone className="h-5 w-5 text-gray-700" />
          양하은 대리 연락처
        </h3>

        <div className="space-y-3">
          <a
            href="http://pf.kakao.com/_DNpMn/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md transition-colors"
          >
            <RiKakaoTalkFill className="h-5 w-5 text-[#391B1B]" />
            <span className="text-sm">http://pf.kakao.com/_DNpMn/chat</span>
          </a>

          <div className="flex items-center gap-2 p-2">
            <Phone className="h-5 w-5 text-gray-700" />
            <span className="text-sm">07041382398</span>
          </div>

          <div className="flex items-center gap-2 p-2">
            <PrinterIcon className="h-5 w-5 text-gray-700" />
            <span className="text-sm">청약서 팩스: 05042571032</span>
          </div>

          <div className="flex items-center gap-2 p-2">
            <Mail className="h-5 w-5 text-gray-700" />
            <span className="text-sm">네이트온: mikasa822@nate.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
