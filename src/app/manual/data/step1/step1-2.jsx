"use client";

import { ExternalLink, AlertTriangle, Bell, Info } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Step1_2 = ({ copied, copyToClipboard }) => (
  <div className="space-y-5">
    <div>
      <h2 className="text-xl font-semibold">위촉 & 코드 발급</h2>
    </div>

    <div className="bg-blue-50 p-3 sm:p-4 rounded-md">
      <blockquote className="border-l-4 border-blue-300 pl-4 py-2 text-gray-700 my-2 italic text-xs sm:text-sm">
        <p>
          입사지원서 멋지게 잘 써주셨나요? 그럼 이제 보험업의 첫 단계라고 할 수 있는 "위촉" 을
          진행할 거에요! 위촉이란 "설계사가 해당 보험사와 공식적으로 계약을 맺는 행위"를 말합니다.
          위촉을 위해서는 우선 보험설계사가 될 수 있는 자격시험을 합격하고, 보험협회에 등록을
          신청하여 "코드발급"을 진행합니다. 그러면 드디어 내 이름 석 자로 보험을 설계하고, 권유할 수
          있게 됩니다.
        </p>
        <p className="mt-2">
          설계사로 나아가는 첫 걸음이기에, 빠르게 확인하여 얼른 코드 내고 월급을 하루라도 빨리 받을
          수 있다면 좋겠죠?! 그런 만큼 집중해서 잘 봐주세요~
        </p>
      </blockquote>

      <div className="flex items-center gap-2 mt-3 text-xs sm:text-sm">
        <p className="italic">이 페이지의 모든 내용은</p>
        <Link
          href="http://pf.kakao.com/_DNpMn/chat"
          target="_blank"
          className="flex items-center gap-1 text-blue-600 font-medium"
        >
          카카오톡 경영지원팀 <ExternalLink className="h-3 w-3" />
        </Link>
        <p className="italic">에서도 안내 받아보실 수 있습니다!</p>
      </div>
    </div>

    <div className="bg-blue-50 p-3 sm:p-4 rounded-md flex gap-3">
      <div className="flex-shrink-0 mt-1">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
          </svg>
        </div>
      </div>
      <div>
        <h4 className="font-medium text-sm sm:text-base mb-2">위촉 절차</h4>
        <p className="text-xs sm:text-sm text-gray-700">
          메타온 위촉 &gt; 이지페이퍼 위촉 &gt; 시험 신청(손보/생보) &gt; 합격 &gt; 협회등록 &gt;
          코드발급
        </p>
      </div>
    </div>

    <div className="space-y-4 sm:space-y-5">
      <div className="border rounded-md overflow-hidden">
        <div className="bg-blue-50 p-3 sm:p-4 font-medium flex gap-2 items-center border-b">
          <span className="bg-blue-500 rounded-full text-white w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">
            1
          </span>
          <span className="text-sm sm:text-base">
            먼저 메타리치의 코드를 내는 과정인 '메타온 위촉' 을 해 봅시다.
          </span>
        </div>

        <div className="p-3 sm:p-4">
          <div className="bg-gray-50 rounded-md p-3 sm:p-4 flex gap-3">
            <div className="flex-shrink-0 mt-1">
              <Bell className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h4 className="font-medium text-sm sm:text-base mb-2">메타리치 위촉 방법</h4>
              <p className="text-xs sm:text-sm text-gray-700 mb-2">- 전자서명으로 이루어집니다.</p>

              <p className="text-xs sm:text-sm mb-2">
                사이트 :{" "}
                <Link
                  href="https://www.easypaper.co.kr/metarich"
                  target="_blank"
                  className="text-blue-600 break-all"
                >
                  https://www.easypaper.co.kr/metarich
                </Link>
              </p>

              <ul className="space-y-1 text-xs sm:text-sm text-gray-700">
                <li className="flex items-start gap-1">
                  <span className="text-blue-600 font-bold mt-1 flex-shrink-0">✔️</span>
                  프로필 사진(정면이 양호하게 보이는 사진이라면 셀카도 상관X)
                </li>
                <li className="flex items-start gap-1">
                  <span className="text-blue-600 font-bold mt-1 flex-shrink-0">✔️</span>
                  등록전교육 수료증(현재기준 1년이 지났으면 다시 수료 필요)
                  <br />
                  <span className="text-xs text-gray-600">
                    (다시 수료하는데 시간이 굉장히 오래 걸리므로 가장 먼저 수료증 날짜 체크하시는 걸
                    추천)
                  </span>
                </li>
                <li className="flex items-start gap-1">
                  <span className="text-blue-600 font-bold mt-1 flex-shrink-0">✔️</span>
                  신분증 사본
                </li>
                <li className="flex items-start gap-1">
                  <span className="text-blue-600 font-bold mt-1 flex-shrink-0">✔️</span>
                  주민등록'초본'
                  <br />
                  <span className="text-xs text-gray-600">
                    ('등본'이 아니라 ★초본★, 3개월 이내 발급본만 가능, 주민번호 뒷자리 공개 필수,
                    열람용은 사용 불가능)
                  </span>
                </li>
                <li className="flex items-start gap-1">
                  <span className="text-blue-600 font-bold mt-1 flex-shrink-0">✔️</span>
                  손생보변액 합격증(신입만, 경력자는 필요X)
                  <br />
                  <span className="text-xs text-gray-600">
                    (이클린 확인했을 때 대리점 근무기간 3년이내 365일 미만은 신입으로 간주)
                  </span>
                </li>
                <li className="flex items-start gap-1">
                  <span className="text-blue-600 font-bold mt-1 flex-shrink-0">✔️</span>
                  가족관계증명서
                  <br />
                  <span className="text-xs text-gray-600">
                    (3개월 이내 발급본만 가능, 본인 주민등록번호 뒷자리 필수, 열람용은 사용 불가능)
                  </span>
                </li>
                <li className="flex items-start gap-1">
                  <span className="text-blue-600 font-bold mt-1 flex-shrink-0">✔️</span>
                  E클린보험서비스 본인정보 조회(별도 특이사항 없음)
                </li>
                <li className="flex items-start gap-1">
                  <span className="text-blue-600 font-bold mt-1 flex-shrink-0">✔️</span>
                  통장사본(별도 특이사항 없음)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border rounded-md overflow-hidden">
        <div className="bg-blue-50 p-3 sm:p-4 font-medium flex gap-2 items-center border-b">
          <span className="bg-blue-500 rounded-full text-white w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">
            2
          </span>
          <span className="text-sm sm:text-base">다 하셨으면 '이지페이퍼 위촉' 을 해 봅시다.</span>
        </div>

        <div className="p-3 sm:p-4">
          <Link
            href="http://pf.kakao.com/_DNpMn/chat"
            target="_blank"
            className="text-blue-600 font-medium flex items-center gap-1 text-xs sm:text-sm"
          >
            카카오톡 경영지원팀 <ExternalLink className="h-3 w-3" />
          </Link>
          <p className="text-xs sm:text-sm mt-1">
            으로 연락주시면 PDF 자료를 드리겠습니다 (1분 안에 드림)
          </p>
        </div>
      </div>

      <div className="border rounded-md overflow-hidden">
        <div className="bg-blue-50 p-3 sm:p-4 font-medium flex gap-2 items-center border-b">
          <span className="bg-blue-500 rounded-full text-white w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">
            3
          </span>
          <span className="text-sm sm:text-base">시험 신청 (손보/생보)</span>
        </div>

        <div className="p-3 sm:p-4">
          <p className="text-xs sm:text-sm mb-3">
            <Link
              href="http://pf.kakao.com/_DNpMn/chat"
              target="_blank"
              className="text-blue-600 font-medium inline-flex items-center gap-1"
            >
              카카오톡 경영지원팀 <ExternalLink className="h-3 w-3" />
            </Link>
            으로 아래의 양식을 채워서 보내주세요
          </p>

          <p className="text-xs sm:text-sm mb-2 font-medium">
            시험 일정/수험표 등이 확인되면 개별 안내드립니다
          </p>

          <div className="bg-gray-50 p-3 sm:p-4 rounded-md font-mono text-xs sm:text-sm">
            시험 신청 양식 전달드립니다. 작성 후 회신 부탁드립니다. <br />
            <br />
            시험 응시자 이름 : <br />
            소속 지점의 지점장님 이름 : <br />
            주민번호 : <br />
            핸드폰번호 : <br />
            시험구분 : 생명 or 생명+변액 <br />
            <br />
            응시 지역 : 아래 지역 中 택1 <br />
            <br />
            🔵생명보험 : 서울, 인천, 부산, 울산,대구, 광주, 제주, 전주, 대전, 서산, 강릉, 원주, 춘천{" "}
            <br />
            🔵변액보험 : 광주, 대구, 대전, 부산, 서울, 원주, 제주 <br />
            🔵손해보험 : 서울, 수원, 원주, 대전, 광주, 포항, 부산 <br />
            <br />
            *변액시험의 경우 짝수달만 신청받습니다.
          </div>
        </div>
      </div>

      <div className="border rounded-md overflow-hidden">
        <div className="bg-blue-50 p-3 sm:p-4 font-medium flex gap-2 items-center border-b">
          <span className="bg-blue-500 rounded-full text-white w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">
            4
          </span>
          <span className="text-sm sm:text-base">합격</span>
        </div>

        <div className="p-3 sm:p-4">
          <p className="text-xs sm:text-sm mb-3">우선 축하드립니다. 🥳🎊</p>

          <ul className="space-y-3 text-xs sm:text-sm">
            <li className="flex items-start gap-2">
              <span className="font-medium">손해보험 →</span>
              <Link
                href="https://www.knia.or.kr/main"
                target="_blank"
                className="text-blue-600 break-all"
              >
                손해보험협회
              </Link>
              <span>들어가셔서 모집종사자 &gt; 합격조회 &gt; 합격증 발급</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium">생명보험 →</span>
              <Link
                href="https://www.klia.or.kr/"
                target="_blank"
                className="text-blue-600 break-all"
              >
                생명보험협회
              </Link>
              <span>들어가셔서 모집종사자 &gt; 합격조회 &gt; 합격증 발급</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Step1_2;
