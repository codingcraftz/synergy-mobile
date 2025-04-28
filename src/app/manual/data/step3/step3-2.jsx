"use client";

import {
  AlertTriangle,
  ArrowLeft,
  Bell,
  PenSquare,
  Clock,
  MapPin,
  Users,
  BookOpen,
  List,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Step3_2 = ({ copied, copyToClipboard }) => {
  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">신입교육 수강</h2>
        <Link href="/manual" className="flex items-center text-blue-600 gap-1 text-sm">
          <ArrowLeft className="h-4 w-4" />
          <span>뒤로가기</span>
        </Link>
      </div>

      <div className="bg-indigo-50 p-5 rounded-md">
        <h3 className="flex items-center gap-2 text-lg font-semibold mb-3">
          <CheckCircle className="h-5 w-5 text-indigo-600" />
          신입교육이란?
        </h3>

        <div className="space-y-4">
          <div className="flex items-start gap-3 bg-white p-4 rounded-md shadow-sm">
            <Bell className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-medium text-indigo-700 mb-2">
                시너지그룹의 신입교육은 단순한 입문 강의가 아닙니다.
              </h4>
              <p className="text-sm">
                <span className="font-semibold">
                  경력, 연차 불문. 현업에서 바로 통하는 실무 중심 커리큘럼으로 누구든 하이퍼포머로
                  성장할 수 있는 기반을 다지는 5일간의 집중 과정
                </span>
                입니다.
              </p>
              <p className="text-sm mt-2">
                <span className="font-semibold">보험업계의 A to Z</span>,{" "}
                <span className="font-semibold">설계사의 태도와 기본기</span>,{" "}
                <span className="font-semibold">실전 약관 해석법</span>부터{" "}
                <span className="font-semibold">DB영업 전략</span>,{" "}
                <span className="font-semibold">자기소개 및 TA 화법</span>,{" "}
                <span className="font-semibold">인적 네트워킹까지</span> 설계사로서 꼭 알아야 할
                핵심 주제들로 탄탄하게 구성되어 있습니다.
              </p>
              <p className="text-sm mt-2">
                교육은{" "}
                <span className="font-semibold">
                  각 분야에서 실적과 노하우를 입증한 그룹 내 레전드 강사들
                </span>
                이 진행하며, 이론과 실전이 절묘하게 버무려진 강의로{" "}
                <span className="font-semibold">
                  "지루할 틈 없이, 한 시간 한 시간이 실력으로 바뀌는"
                </span>{" "}
                밀도 높은 강의 경험을 제공합니다.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white p-4 rounded-md shadow-sm">
            <Bell className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-1" />
            <div className="space-y-2">
              <ul className="list-disc pl-5 text-sm space-y-3">
                <li>
                  <span className="font-semibold">
                    교육은 매월 5일간 송파사무실에서 진행되며, 시간은 매일 오전 10시부터 오후
                    5시까지입니다.
                  </span>
                </li>
                <li>
                  <span className="font-semibold">교육 종료 후에는 간단한 과제가 주어지며</span>,
                  이를 통해 교육 내용을 실제 업무에 녹여내는 과정을 거치게 됩니다.
                  <p className="mt-1">
                    주어진 과제에 <span className="font-semibold">성실히 임해주시길 바랍니다.</span>
                  </p>
                </li>
                <li>교육은 수도권 권역 및 경남 권역 모두 운영합니다.</li>
                <li>교육 일정은 매달 전체방에 공지되니 참고 부탁드립니다.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border rounded-md overflow-hidden">
        <div className="bg-yellow-50 p-4 border-b">
          <h4 className="font-medium flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
            (필수) 📸교육 인증 방법 📸
          </h4>
        </div>

        <div className="p-4 bg-white">
          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-1" />
            <p className="text-sm">
              강의를 듣기 위해 강의실에 도착하면, 잊지 말고{" "}
              <span className="font-semibold">
                타임스탬프 앱으로 강의실 사진을 찍어서 수도권 단톡방에 올려주세요!
              </span>{" "}
              스탬프 사진은 입실 인증 도장과 같은 거랍니다!
            </p>
          </div>

          <div className="mt-3 bg-yellow-50 p-3 rounded-md">
            <p className="text-sm font-medium text-yellow-800">
              만약 타임스탬프 인증 없이 강의를 들으면... 🥺 미수강 처리될 수 있으니 꼭꼭 잊지
              마세요! 🤙
            </p>
          </div>
        </div>
      </div>

      <div className="border rounded-md overflow-hidden">
        <div className="bg-blue-50 p-4 border-b">
          <h4 className="font-medium flex items-center gap-2">
            <PenSquare className="h-5 w-5 text-blue-600" />
            교육 후기 작성 가이드
          </h4>
        </div>

        <div className="p-4 bg-white">
          <p className="text-sm mb-3">
            교육을 마치면, <span className="font-semibold">전체방</span>에 신입교육 후기를
            작성해주세요. <span className="font-semibold">후기 작성 예시는</span> 아래와 같습니다.
          </p>

          <div className="border border-gray-200 rounded-md p-4 mb-4">
            <p className="text-sm font-medium mb-2">컴패니언사업부 EF지점 고인상 프로</p>
            <p className="text-sm font-medium">[2025. 04. 10 첫째날]</p>

            <div className="mt-3">
              <p className="text-sm font-medium">1.장사꾼이 될 것인가? 사업가가 될 것인가?</p>
              <p className="text-sm">:협력으로 급성장하는 영업조직의 기준과 원칙 / 정상윤 강사님</p>

              <p className="text-sm mt-2">
                이 강의에서는 리더십과 관련된 내용도 있었지만, 영업에 대한 내용도 포함이 되어 있어
                너무 도움이 많이 되었습니다. 가장 기억에 많이 남았던 것은 서울대 갈 노력으로 보험을
                하면 어떻게 될까 과연 부가가치로만 봤을 때 현재랑 비슷할지 비교가 안된다는 것이
                기억에 남았고 왜 조직장을 해야 하는지에 대해 다시 한번 생각하게 되었습니다. 영업만
                해도 물론 좋지만 저는 제가 왜 조직장이 되고 싶은지 다시 한번 생각했을 때 성취감이
                필요했던 것 같습니다. 나 혼자만 잘되어 영업을 하기 보다 함께 성장하여 서로 서포트
                해주고 도와줘서 같이 성장 할 수 있는 동료가 필요했던 것 같습니다. 결국 다 중요하지만
                가장 중요한 것은 성실함이 가장 중요하다는 것을 느꼈습니다.
              </p>
            </div>

            <p className="text-sm mt-3 font-medium">신입교육 후기 25.04.14</p>
          </div>

          <div className="border border-gray-200 rounded-md p-4">
            <p className="text-sm mb-1">컴패니언사업부 EF지점 서문웅프로 (소속 및 이름 작성)</p>
            <p className="text-sm mb-2">'신입성장 가이드' 경명구대표님 (강의 제목 작성)</p>
            <p className="text-sm text-gray-500">(하단에 위 예시 참고하여 후기 작성)</p>
            <p className="text-sm text-red-500 mt-3">*※ 과제와 별도입니다*</p>
          </div>
        </div>
      </div>

      <div className="bg-emerald-50 p-4 rounded-md">
        <div className="flex items-start gap-2">
          <MapPin className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-medium text-emerald-800">교육 장소 안내</h4>
            <p className="text-sm mt-1">
              송파사무실 교육장: 서울 송파구 법원로11길 11, 현대지식산업센터한벨 B동 716호
            </p>
            <p className="text-sm mt-1 text-gray-600">(지하철 8호선 문정역 도보 5분 거리)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3_2;
