"use client";

import { ExternalLink, AlertTriangle, Bell, Info } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Step1_2 = ({ copied, copyToClipboard }) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold">위촉 & 코드 발급</h3>

    <div className="bg-gray-100 p-4 rounded-md">
      <Link
        href="https://www.notion.so/1d06d4627c4a80e9a729f9616d1c7c2e?pvs=21"
        target="_blank"
        className="text-blue-600 flex items-center gap-1 mb-4"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
        뒤로가기
      </Link>

      <blockquote className="border-l-4 border-gray-300 pl-4 py-2 text-gray-700 my-4 italic">
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

      <div className="flex items-center gap-2 my-4">
        <p className="italic text-sm">이 페이지의 모든 내용은</p>
        <Link
          href="http://pf.kakao.com/_DNpMn/chat"
          target="_blank"
          className="flex items-center gap-1 text-yellow-700 font-bold"
        >
          카카오톡 경영지원팀 <ExternalLink className="h-3 w-3" />
        </Link>
        <p className="italic text-sm">에서도 안내 받아보실 수 있습니다!</p>
      </div>
    </div>

    <div className="bg-gray-100 rounded-md p-4 flex gap-3">
      <div className="flex-shrink-0 mt-1">
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
          <svg
            width="20"
            height="20"
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
        <h4 className="font-medium text-lg">위촉 절차</h4>
        <p className="text-gray-700 mt-2">
          메타온 위촉 &gt; 이지페이퍼 위촉 &gt; 시험 신청(손보/생보) &gt; 합격 &gt; 협회등록 &gt;
          코드발급
        </p>
      </div>
    </div>

    <div className="space-y-6 mt-6">
      <div className="border rounded-md">
        <div className="bg-blue-50 p-4 font-semibold flex gap-2 items-center">
          <span className="bg-blue-500 rounded-full text-white w-6 h-6 flex items-center justify-center text-sm">
            1
          </span>
          먼저 메타리치의 코드를 내는 과정인 '메타온 위촉' 을 해 봅시다.
        </div>

        <div className="p-4">
          <div className="bg-gray-100 rounded-md p-4 flex gap-3">
            <div className="flex-shrink-0 mt-1">
              <Bell className="h-5 w-5 text-gray-600" />
            </div>
            <div>
              <h4 className="font-medium">메타리치 위촉 방법</h4>
              <p className="text-sm text-gray-700 my-2">- 전자서명으로 이루어집니다.</p>

              <p className="text-sm mb-2">
                사이트 :{" "}
                <Link
                  href="https://www.easypaper.co.kr/metarich"
                  target="_blank"
                  className="text-blue-600"
                >
                  https://www.easypaper.co.kr/metarich
                </Link>
              </p>

              <ul className="space-y-1 text-sm text-gray-700">
                <li className="flex items-start gap-1">
                  <span className="text-blue-600 font-bold mt-1">✔️</span>
                  프로필 사진(정면이 양호하게 보이는 사진이라면 셀카도 상관X)
                </li>
                <li className="flex items-start gap-1">
                  <span className="text-blue-600 font-bold mt-1">✔️</span>
                  등록전교육 수료증(현재기준 1년이 지났으면 다시 수료 필요)
                  <br />
                  (다시 수료하는데 시간이 굉장히 오래 걸리므로 가장 먼저 수료증 날짜 체크하시는 걸
                  추천)
                </li>
                <li className="flex items-start gap-1">
                  <span className="text-blue-600 font-bold mt-1">✔️</span>
                  신분증 사본
                </li>
                <li className="flex items-start gap-1">
                  <span className="text-blue-600 font-bold mt-1">✔️</span>
                  주민등록'초본'
                  <br />
                  ('등본'이 아니라 ★초본★, 3개월 이내 발급본만 가능, 주민번호 뒷자리 공개 필수,
                  열람용은 사용 불가능)
                </li>
                <li className="flex items-start gap-1">
                  <span className="text-blue-600 font-bold mt-1">✔️</span>
                  손생보변액 합격증(신입만, 경력자는 필요X)
                  <br />
                  (이클린 확인했을 때 대리점 근무기간 3년이내 365일 미만은 신입으로 간주)
                </li>
                <li className="flex items-start gap-1">
                  <span className="text-blue-600 font-bold mt-1">✔️</span>
                  가족관계증명서
                  <br />
                  (3개월 이내 발급본만 가능, 본인 주민등록번호 뒷자리 필수, 열람용은 사용 불가능)
                </li>
                <li className="flex items-start gap-1">
                  <span className="text-blue-600 font-bold mt-1">✔️</span>
                  E클린보험서비스 본인정보 조회(별도 특이사항 없음)
                </li>
                <li className="flex items-start gap-1">
                  <span className="text-blue-600 font-bold mt-1">✔️</span>
                  통장사본(별도 특이사항 없음)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border rounded-md">
        <div className="bg-blue-50 p-4 font-semibold flex gap-2 items-center">
          <span className="bg-blue-500 rounded-full text-white w-6 h-6 flex items-center justify-center text-sm">
            2
          </span>
          다 하셨으면 '이지페이퍼 위촉' 을 해 봅시다.
        </div>

        <div className="p-4">
          <Link
            href="http://pf.kakao.com/_DNpMn/chat"
            target="_blank"
            className="text-blue-600 font-bold flex items-center gap-1"
          >
            카카오톡 경영지원팀 <ExternalLink className="h-4 w-4" />
          </Link>
          으로 연락주시면 PDF 자료를 드리겠습니다 (1분 안에 드림)
        </div>
      </div>

      <div className="border rounded-md">
        <div className="bg-blue-50 p-4 font-semibold flex gap-2 items-center">
          <span className="bg-blue-500 rounded-full text-white w-6 h-6 flex items-center justify-center text-sm">
            3
          </span>
          시험 신청 (손보/생보)
        </div>

        <div className="p-4">
          <p className="mb-4">
            <Link
              href="http://pf.kakao.com/_DNpMn/chat"
              target="_blank"
              className="text-blue-600 font-bold flex items-center gap-1"
            >
              카카오톡 경영지원팀 <ExternalLink className="h-4 w-4" />
            </Link>
            으로 아래의 양식을 채워서 보내주세요
          </p>

          <p className="mb-2">
            <strong>시험 일정/수험표 등이 확인되면 개별 안내드립니다</strong>
          </p>

          <div className="bg-gray-100 p-4 rounded-md font-mono text-sm">
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

      <div className="border rounded-md">
        <div className="bg-blue-50 p-4 font-semibold flex gap-2 items-center">
          <span className="bg-blue-500 rounded-full text-white w-6 h-6 flex items-center justify-center text-sm">
            4
          </span>
          합격
        </div>

        <div className="p-4">
          <p className="mb-4">우선 축하드립니다. 🥳🎊</p>

          <ul className="space-y-4">
            <li className="flex items-start gap-2">
              <span className="font-medium">손해보험 →</span>
              <Link href="https://www.knia.or.kr/main" target="_blank" className="text-blue-600">
                손해보험협회
              </Link>
              <span>들어가셔서 모집종사자 &gt; 합격조회 &gt; 합격증 발급</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium">생명보험 →</span>
              <Link href="https://www.klia.or.kr/" target="_blank" className="text-blue-600">
                생명보험협회
              </Link>
              <span>들어가셔서 모집종사자 &gt; 합격조회 &gt; 합격증 발급</span>
            </li>
          </ul>

          <p className="mt-4">
            해 주신 다음에, 합격증 파일을
            <Link
              href="http://pf.kakao.com/_DNpMn/chat"
              target="_blank"
              className="mx-1 text-blue-600 font-bold inline-flex items-center gap-1"
            >
              카카오톡 경영지원팀 <ExternalLink className="h-3 w-3" />
            </Link>
            에 보내주시면 됩니다.
          </p>
        </div>
      </div>

      <div className="border rounded-md">
        <div className="bg-blue-50 p-4 font-semibold flex gap-2 items-center">
          <span className="bg-blue-500 rounded-full text-white w-6 h-6 flex items-center justify-center text-sm">
            5
          </span>
          협회등록
        </div>

        <div className="p-4">
          <div className="mb-4">
            <h5 className="font-medium">손해보험의 경우</h5>
            <p className="mt-2">
              <a
                href="/files/롯데손보_보험대리점_설계사_협회_등록_양식.pdf"
                download
                className="text-blue-600 inline-flex items-center gap-1"
              >
                ♣롯데손보_보험대리점 설계사 협회 등록 양식.pdf <ExternalLink className="h-3 w-3" />
              </a>
            </p>
            <p className="mt-1 text-gray-700">이 파일을 작성하셔서 보내주시면 됩니다.</p>
          </div>

          <div>
            <h5 className="font-medium">생명보험의 경우</h5>
            <p className="mt-2">
              협회등록 일정이 상시 다르므로,
              <Link
                href="http://pf.kakao.com/_DNpMn/chat"
                target="_blank"
                className="mx-1 text-blue-600 font-bold inline-flex items-center gap-1"
              >
                카카오톡 경영지원팀 <ExternalLink className="h-3 w-3" />
              </Link>
              으로 문의 주셔서 진행해주시면 됩니다.
            </p>
          </div>
        </div>
      </div>

      <div className="border rounded-md">
        <div className="bg-blue-50 p-4 font-semibold flex gap-2 items-center">
          <span className="bg-blue-500 rounded-full text-white w-6 h-6 flex items-center justify-center text-sm">
            6
          </span>
          코드발급
        </div>

        <div className="p-4">
          <p>
            위 1~5번을 모두 마치셨다면 <span className="font-bold italic">기다리시면 됩니다</span>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Step1_2;
