"use client";

import { ExternalLink, Info } from "lucide-react";
import Link from "next/link";

const Step2_2 = () => (
  <div className="space-y-5">
    <div>
      <h2 className="text-xl font-semibold">카카오톡 채널 이용</h2>
    </div>

    <div className="bg-indigo-50 p-3 sm:p-4 rounded-md">
      <blockquote className="border-l-4 border-indigo-300 pl-4 py-2 text-gray-700 my-2 italic text-xs sm:text-sm">
        <p>
          자 이렇게 이용을 해도 아직도 뭐가 뭔지 모르시겠고 글 읽는게 너무 힘들고 사람과 소통하고
          싶고 물어볼 곳이 필요하고 너무나 도움이 필요하다!!!!! 그래서 준비한 문의 창구. 카카오톡
          채널입니다.
        </p>
        <p className="mt-2">
          수납/위촉/기타등등/도와줘요 → 전부 아래 채널 중 1로 문의 주시면 됩니다.
        </p>
      </blockquote>
    </div>

    <div className="bg-white border rounded-md p-4 sm:p-6">
      <h4 className="text-lg sm:text-xl font-bold mb-5">
        시너지그룹 영업채널은 <span className="text-blue-600">총 4가지</span>입니다.
      </h4>

      <div className="space-y-4 sm:space-y-6">
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
          <div className="flex items-start gap-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold flex-shrink-0">
              <span>1</span>
            </div>
            <div>
              <h5 className="font-medium text-blue-800 mb-2 text-sm sm:text-base">
                시너지그룹 멤버쉽 (DB관련)
              </h5>
              <Link
                href="http://pf.kakao.com/_Mxnhxhn"
                target="_blank"
                className="text-blue-600 inline-flex items-center gap-1 mb-2 text-xs sm:text-sm break-all"
              >
                http://pf.kakao.com/_Mxnhxhn <ExternalLink className="h-3 w-3 flex-shrink-0" />
              </Link>
              <p className="text-xs sm:text-sm text-gray-700">
                이 채널에서는 DB영업을 하는 분들께 DB배분, 공지 등을 드립니다.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
          <div className="flex items-start gap-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold flex-shrink-0">
              <span>2</span>
            </div>
            <div>
              <h5 className="font-medium text-blue-800 mb-2 text-sm sm:text-base">
                시너지그룹 오피셜
              </h5>
              <Link
                href="http://pf.kakao.com/_xkxaHMn"
                target="_blank"
                className="text-blue-600 inline-flex items-center gap-1 mb-2 text-xs sm:text-sm break-all"
              >
                http://pf.kakao.com/_xkxaHMn <ExternalLink className="h-3 w-3 flex-shrink-0" />
              </Link>
              <p className="text-xs sm:text-sm text-gray-700">
                이 채널은 고객님들 또한 연락을 주시는 채널입니다. 시너지그룹의 공식 전체 채널이라고
                봐주시면 됩니다.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
          <div className="flex items-start gap-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold flex-shrink-0">
              <span>3</span>
            </div>
            <div>
              <h5 className="font-medium text-blue-800 mb-2 text-sm sm:text-base">
                시너지그룹 준법관리
              </h5>
              <Link
                href="http://pf.kakao.com/_mBAxhn"
                target="_blank"
                className="text-blue-600 inline-flex items-center gap-1 mb-2 text-xs sm:text-sm break-all"
              >
                http://pf.kakao.com/_mBAxhn <ExternalLink className="h-3 w-3 flex-shrink-0" />
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
          <div className="flex items-start gap-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold flex-shrink-0">
              <span>4</span>
            </div>
            <div>
              <h5 className="font-medium text-blue-800 mb-2 text-sm sm:text-base">
                시너지그룹 경영지원
              </h5>
              <Link
                href="http://pf.kakao.com/_DNpMn/chat"
                target="_blank"
                className="text-blue-600 inline-flex items-center gap-1 mb-2 text-xs sm:text-sm break-all"
              >
                http://pf.kakao.com/_DNpMn/chat <ExternalLink className="h-3 w-3 flex-shrink-0" />
              </Link>
              <div className="space-y-2 text-xs sm:text-sm text-gray-700">
                <p>수납/위촉/코드/시험/교육/기존 영업지원/교육행정/인사행정에 보냈던 모든내용들</p>
                <p>
                  아마 대부분의 궁금하신 내용은 이 채널로 연락을 주시면 해결이 될 것입니다. 가장
                  자주 이용하실 채널일 거에요 😊
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 sm:mt-8 bg-yellow-50 p-4 rounded-md border border-yellow-200">
        <div className="flex items-start gap-2">
          <Info className="h-5 w-5 text-yellow-600 mt-0.5" />
          <p className="text-xs sm:text-sm text-yellow-800">
            <span className="font-bold">중요!</span> 각 채널은 목적에 맞게 사용해 주세요. 특히
            수납/위촉/코드발급 등의 문의는 반드시 경영지원 채널로 문의해 주세요.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Step2_2;
