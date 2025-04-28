"use client";

import { Bell, ExternalLink, Info } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Step2_1 = () => {
  const [isPerformanceModalOpen, setIsPerformanceModalOpen] = useState(false);
  const [isActivityModalOpen, setIsActivityModalOpen] = useState(false);

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-semibold">단톡방 입장</h2>
      </div>

      <div className="bg-indigo-50 p-3 sm:p-4 rounded-md">
        <p className="text-xs sm:text-sm italic">
          시너지그룹은 원활한 소통과 업무에 도움이 되는 정보 공유를 위해 많은 단톡방이
          활성화되어있습니다! 그래서 처음 오시는 분들은 많은 단톡방에 혼란스러워 하실 수 있는데요.
          이 페이지에서 깔끔하게 정리를 해드릴게요! 참고 부탁드려요!
        </p>
      </div>

      <div className="border rounded-md overflow-hidden">
        <div className="bg-yellow-50 p-3 sm:p-4 border-b">
          <h3 className="font-medium flex items-center gap-2 text-sm sm:text-base">
            <span className="text-yellow-600 text-lg sm:text-xl">⭐</span>
            공통 공지&규정
          </h3>
        </div>

        <div className="p-3 sm:p-4 space-y-3">
          <div className="flex items-start gap-2">
            <div className="w-1 h-1 rounded-full bg-gray-500 mt-2"></div>
            <div className="text-sm sm:text-base">
              <p>
                <span className="font-medium">닉네임양식</span> -{" "}
                <strong>ㅇㅇㅇ 프로/ㅇㅇㅇ지점</strong> 통일
              </p>
              <p className="text-xs sm:text-sm text-gray-600">
                이름과 직급 사이에 띄어쓰기 주의해주세요. ㅇㅇㅇV프로
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-1 h-1 rounded-full bg-gray-500 mt-2"></div>
            <div className="text-sm sm:text-base">
              <p>
                참여코드 개별문의로 되어있는 단톡방은
                <a
                  href="http://pf.kakao.com/_DNpMn/chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 inline-flex items-center gap-1 mx-1"
                >
                  <strong>카카오톡 경영지원팀</strong>
                  <ExternalLink className="h-3 w-3" />
                </a>
                으로 문의 주세요
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border rounded-md overflow-hidden">
        <div className="bg-yellow-50 p-3 sm:p-4 border-b">
          <h3 className="font-medium flex items-center gap-2 text-sm sm:text-base">
            <span className="text-yellow-600 text-lg sm:text-xl">⭐</span>
            반드시 들어와야 하는 단톡방 - 전체방/정보방/지역별 사무실 방
          </h3>
        </div>

        <div className="p-3 sm:p-4 space-y-4">
          <div className="border rounded-lg p-4 sm:p-5 bg-gray-50">
            <div className="flex items-start gap-2 sm:gap-3 mb-3">
              <Bell className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 flex-shrink-0 mt-0.5 sm:mt-1" />
              <h4 className="text-base sm:text-lg font-medium">컴패니언 사업부 전체 단톡방</h4>
            </div>

            <a
              href="https://open.kakao.com/o/gp307Gxf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 flex items-center gap-1 mb-2 text-sm sm:text-base break-all"
            >
              https://open.kakao.com/o/gp307Gxf
              <ExternalLink className="h-3 w-3 flex-shrink-0" />
            </a>

            <p className="font-medium mb-2 text-sm sm:text-base">참여코드 3131</p>

            <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li>이 단톡방은 모든 컴패니언 사업부 인원이 참여하는 단톡방입니다.</li>
              <li>
                사업부 전체 주요 공지, 인별 계약 현황, 계약 보고, 우수 활동 보고, 진급 공지 등
                총괄적인 모든 내용이 올라온다고 보시면 됩니다.
              </li>
              <li>
                본인의 관리자가 <strong>'전체방에 올려'</strong> 라고 하면 여기에 올리시면 됩니다.
              </li>
            </ul>

            <div className="mt-3 p-3 bg-white rounded-md border">
              <p className="font-medium mb-2 text-xs sm:text-sm">
                처음 입장시 아래의 양식을 작성해주세요!
              </p>
              <ol className="list-decimal pl-4 sm:pl-5 space-y-1 text-xs sm:text-sm">
                <li>이름</li>
                <li>지역/출근</li>
                <li>소속</li>
                <li>유치자</li>
                <li>상위지점장</li>
                <li>앞으로의포부</li>
              </ol>
            </div>

            <div className="mt-3 space-y-2">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-blue-600 flex items-center gap-1 text-xs sm:text-sm">
                    실적보고 올리는 방법 [Click!]
                    <ExternalLink className="h-3 w-3" />
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-center">실적보고 올리는 방법</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 mt-4">
                    <p className="text-xs sm:text-sm">
                      아래 양식을 그대로 복사하시고 지점/계약유형/본인 이름/유치자 이름/계약한 회사
                      상품명 보험료/ 건수/ 총 보험료/. 수납일 / 월 누적 보험료 및 건수를 수정해서
                      사용하세요
                    </p>

                    <div className="bg-gray-50 p-3 rounded-md border border-gray-200 text-xs font-mono whitespace-pre-wrap">
                      {`─────────────
메타리치 컴패니언 사업부
동행지점                          
𝐂𝐞𝐥𝐞𝐛𝐫𝐚𝐭𝐢𝐨𝐧 𝐂𝐨𝐧𝐭𝐫𝐚𝐜𝐭
─────────────
계약유형: 지인고객님💕
─────────────
▪️ 이지우 프로
─────────────
▪️ 유치자: 김윤성대표님
─────────────
▪️삼성화재 간편보험 34,257원
▪️흥국화재 건강보험 73,308원
총 2건 107,565원
─────────────
▪️수납일 : 2024.11.14(목)
─────────────
▪️총 누적 월납 보험료 : 107,565원
─────────────
▪️총 월 누적 건수 : 2건
─────────────
💎 수납 완료 입니다💎
─────────────`}
                    </div>

                    <div className="bg-yellow-50 p-3 rounded-md border border-yellow-200">
                      <h4 className="font-medium mb-2">계약 유형 종류</h4>
                      <ul className="text-xs space-y-1">
                        <li>시너지 DB고객</li>
                        <li>컴패니언 DB고객</li>
                        <li>무료화재보험 DB고객</li>
                        <li>AI네이버 DB고객</li>
                        <li>펀다대출 DB고객</li>
                        <li>펫사랑멤버쉽 DB고객</li>
                        <li>신밧드유튜브 DB고객</li>
                        <li>온라인카페 고객</li>
                        <li>온라인지식인 고객</li>
                        <li>온라인 유튜브 고객</li>
                        <li>보험라운지 고객</li>
                        <li>인하우스 고객</li>
                        <li>지인고객</li>
                        <li>지인 소개고객</li>
                        <li>DB 소개고객</li>
                        <li>인하우스 소개고객</li>
                        <li>기타 소개고객</li>
                      </ul>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-blue-600 flex items-center gap-1 text-xs sm:text-sm">
                    우수 활동 점수 보고 하는 방법 [Click!]
                    <ExternalLink className="h-3 w-3" />
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-center">우수 활동 점수 보고 하는 방법</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 mt-4">
                    <p className="text-xs sm:text-sm">
                      <strong>
                        고객과 상담하는 사진 타임스탬프로 찍고 아래형식과 함께 타임스탬프 사진과
                        같이 올리기
                      </strong>
                    </p>

                    <p className="text-xs italic">
                      점수는 고객 신체부위가 내얼굴이 같이나오면 0.5점 고객과 같이 얼굴이 찍혀서
                      나오면 1점(고객요청시 얼굴모자이크처리해도됨) <strong>주말엔 2배</strong>점수
                    </p>

                    <div className="bg-gray-50 p-3 rounded-md border border-gray-200 text-xs font-mono whitespace-pre-wrap">
                      {`우수 활동점수 보고 
------------------- 
홍길동 프로 
------------------- 
2025.04.09(수) 
-------------------- 
시너지DB기고객님 1점 
-------------------- 
어떤 목적으로 만나고 어떤이야기를했는지 상담일지작성
-----------‐---------  
총 00점`}
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium text-sm">예시 이미지</h4>
                      <div className="grid grid-cols-1 gap-4">
                        <Image
                          src="/files/우수_활동점수_예시_1.png"
                          alt="우수 활동점수 예시 1"
                          width={300}
                          height={300}
                          className="rounded-md border w-full h-auto"
                        />
                        <Image
                          src="/files/우수_활동점수_예시_2.png"
                          alt="우수 활동점수 예시 2"
                          width={300}
                          height={300}
                          className="rounded-md border w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="border rounded-lg p-4 sm:p-5 bg-gray-50">
            <div className="flex items-start gap-2 sm:gap-3 mb-3">
              <Bell className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 flex-shrink-0 mt-0.5 sm:mt-1" />
              <h4 className="text-base sm:text-lg font-medium">컴패니언 사업부 정보공유방</h4>
            </div>

            <a
              href="https://open.kakao.com/o/gcDcajGg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 flex items-center gap-1 mb-2 text-sm sm:text-base break-all"
            >
              https://open.kakao.com/o/gcDcajGg
              <ExternalLink className="h-3 w-3 flex-shrink-0" />
            </a>

            <p className="font-medium mb-2 text-sm sm:text-base">참여코드 8221</p>

            <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li>
                이 단톡방에서는 매달의 소식지, 상품 정보, 영업 시 도움이 되는 다양한 보험 정보가
                실시간으로 올라옵니다.
              </li>
              <li>사담은 금지이며, 정보를 올려주신 분께 하트 이모지는 매너 ❤️</li>
            </ul>
          </div>

          <div className="border rounded-lg p-4 sm:p-5 bg-gray-50">
            <div className="flex items-start gap-2 sm:gap-3 mb-3">
              <Bell className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 flex-shrink-0 mt-0.5 sm:mt-1" />
              <h4 className="text-base sm:text-lg font-medium">소속 지점/사무실 단톡방</h4>
            </div>

            <ul className="list-disc pl-4 sm:pl-5 space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li>
                <span className="font-medium">수도권 (서초·송파)</span> -
                <a
                  href="https://open.kakao.com/o/g39omzEf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 inline-flex items-center gap-1 ml-1 break-all"
                >
                  https://open.kakao.com/o/g39omzEf
                  <ExternalLink className="h-3 w-3 flex-shrink-0" />
                </a>
                <p className="text-gray-600">(참여코드 개별문의)</p>
              </li>
              <li>
                <span className="font-medium">양산지점</span> -
                <a
                  href="https://open.kakao.com/o/gGVlO1lf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 inline-flex items-center gap-1 ml-1 break-all"
                >
                  https://open.kakao.com/o/gGVlO1lf
                  <ExternalLink className="h-3 w-3 flex-shrink-0" />
                </a>
                <p className="text-gray-600">(참여코드 개별문의)</p>
              </li>
              <li>
                <span className="font-medium">제주지점</span> -
                <a
                  href="https://open.kakao.com/o/gUkyisRg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 inline-flex items-center gap-1 ml-1 break-all"
                >
                  https://open.kakao.com/o/gUkyisRg
                  <ExternalLink className="h-3 w-3 flex-shrink-0" />
                </a>
                <p className="text-gray-600">(참여코드 개별문의)</p>
              </li>
            </ul>

            <p className="mt-3 text-xs sm:text-sm">
              → 자신이 소속된 지점/지역별 사무실 단톡방으로, 함께 출퇴근하는 인원들끼리의 공지 확인
              방이라고 봐주시면 됩니다!
            </p>
          </div>
        </div>
      </div>

      <div className="border rounded-md overflow-hidden">
        <div className="bg-yellow-50 p-3 sm:p-4 border-b">
          <h3 className="font-medium flex items-center gap-2 text-sm sm:text-base">
            <span className="text-yellow-600 text-lg sm:text-xl">⭐</span>
            DB영업 해당할 시 들어와야할 단톡
          </h3>
        </div>

        <div className="p-3 sm:p-4">
          <div className="border rounded-lg p-4 sm:p-5 bg-gray-50">
            <div className="flex items-start gap-2 sm:gap-3 mb-3">
              <Bell className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 flex-shrink-0 mt-0.5 sm:mt-1" />
              <h4 className="text-base sm:text-lg font-medium">컴패니언 DB코칭방</h4>
            </div>

            <a
              href="https://open.kakao.com/o/gdOhmQDf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 flex items-center gap-1 mb-2 text-sm sm:text-base break-all"
            >
              https://open.kakao.com/o/gdOhmQDf
              <ExternalLink className="h-3 w-3 flex-shrink-0" />
            </a>

            <p className="font-medium mb-2 text-sm sm:text-base">
              참여코드 - 입장 해당 시 개별문의
            </p>

            <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li>
                이 단톡방은 DB를 받는 컴패니언 사업부 인원들 중, DB를 받고 DB영업을 진행하는 분들이
                들어오는 방입니다
              </li>
              <li>DB고객과의 통화 녹취 업로드 및 피드백 (DB보고) 을 업로드 합니다.</li>
              <li>
                녹취파일, 통화목록 캡처화면에 고객의 연락처 정보가 보이지 않도록 조치 후
                업로드해주세요.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2_1;
