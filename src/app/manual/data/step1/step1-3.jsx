"use client";

import { AlertTriangle, ExternalLink, Info } from "lucide-react";
import Image from "next/image";

const Step1_3 = () => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold">보증보험 선조회</h3>

    <div className="bg-blue-50 p-4 rounded-md">
      <p className="text-sm">
        <span className="font-medium">설계사로 활동하시기 위한 필수 단계입니다.</span>
      </p>
    </div>

    <div className="space-y-3">
      <h4 className="font-medium">보증보험이란?</h4>
      <p>
        보험설계사는 금융소비자를 상대하니까,{" "}
        <strong>문제가 생기면 책임질 장치가 필요합니다</strong>. 그게 바로 보증보험!
      </p>
      <p>
        이 절차는 추후 보증보험을 가입을 위하여 사전 동의를 하는 과정이며, 미리 해두셔야 보증보험
        "가입"이 가능하고 <strong>보증보험 가입이 완료되어야만 첫 월급 수령이 가능합니다.</strong>{" "}
        그만큼 중요한 절차이니 꼭! 미리미리 완료해주세요! (월급은 받아야죠…👌)
      </p>
    </div>

    <div className="bg-gray-100 p-4 rounded-md border border-gray-200">
      <div className="flex items-start gap-2">
        <AlertTriangle className="h-5 w-5 text-gray-700 mt-0.5" />
        <div className="space-y-3">
          <h4 className="font-medium">보증조회 신청 방법</h4>
          <ol className="list-decimal pl-5 space-y-2">
            <li>서울보증보험 앱에 들어가 동의한다.</li>
            <li>
              동의 후 양하은 대리에게 알려준다.{" "}
              <a
                href="http://pf.kakao.com/_DNpMn/chat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium inline-flex items-center gap-1"
              >
                카카오톡 경영지원팀 <ExternalLink className="h-3 w-3" />
              </a>
              <p className="text-sm mt-1">이름 / 주민번호 / 핸드폰번호 / 동의여부</p>
            </li>
          </ol>
        </div>
      </div>
    </div>

    <div className="space-y-3">
      <h4 className="font-medium">서울보증보험 앱 동의 방법</h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border rounded-md p-2 bg-white">
          <div className="flex items-center justify-center mb-2">
            <h5 className="text-sm font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
              Step 1
            </h5>
          </div>
          <div className="aspect-[9/16] relative bg-gray-100 flex items-center justify-center">
            <Image
              src="/files/선조회_1.jpg"
              alt="서울보증보험 앱 설치"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-xs text-gray-600 mt-2 text-center">서울보증보험 앱을 설치하세요</p>
        </div>

        <div className="border rounded-md p-2 bg-white">
          <div className="flex items-center justify-center mb-2">
            <h5 className="text-sm font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
              Step 2
            </h5>
          </div>
          <div className="aspect-[9/16] relative bg-gray-100 flex items-center justify-center">
            <Image
              src="/files/선조회_2.jpg"
              alt="앱 실행 후 비대면 동의 클릭"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-xs text-gray-600 mt-2 text-center">
            앱 실행 후 비대면 동의를 클릭하세요
          </p>
        </div>

        <div className="border rounded-md p-2 bg-white">
          <div className="flex items-center justify-center mb-2">
            <h5 className="text-sm font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
              Step 3
            </h5>
          </div>
          <div className="aspect-[9/16] relative bg-gray-100 flex items-center justify-center">
            <Image src="/files/선조회_3.jpg" alt="신원정보 입력" fill className="object-contain" />
          </div>
          <p className="text-xs text-gray-600 mt-2 text-center">신원정보를 정확하게 입력하세요</p>
        </div>

        <div className="border rounded-md p-2 bg-white">
          <div className="flex items-center justify-center mb-2">
            <h5 className="text-sm font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
              Step 4
            </h5>
          </div>
          <div className="aspect-[9/16] relative bg-gray-100 flex items-center justify-center">
            <Image src="/files/선조회_4.jpg" alt="모든 항목 동의" fill className="object-contain" />
          </div>
          <p className="text-xs text-gray-600 mt-2 text-center">모든 항목에 동의해주세요</p>
        </div>

        <div className="border rounded-md p-2 bg-white md:col-span-2">
          <div className="flex items-center justify-center mb-2">
            <h5 className="text-sm font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
              Step 5
            </h5>
          </div>
          <div className="aspect-[9/16] md:aspect-[16/9] relative bg-gray-100 flex items-center justify-center">
            <Image src="/files/선조회_5.jpg" alt="완료 확인" fill className="object-contain" />
          </div>
          <p className="text-xs text-gray-600 mt-2 text-center">
            완료 후 경영지원팀에 동의 완료 사실을 알려주세요
          </p>
        </div>
      </div>
    </div>

    <div className="bg-yellow-50 p-4 rounded-md border border-yellow-200">
      <div className="flex items-start gap-2">
        <Info className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-medium text-yellow-800">중요 안내</p>
          <p className="text-sm mt-1">
            보증보험 선조회는 단순히 조회만 하는 것으로, 실제 보증보험 가입은 나중에 별도로
            진행됩니다. 하지만 이 단계가 없으면 보증보험 가입이 불가능하니 반드시 완료해주세요.
          </p>
          <p className="text-sm mt-1 font-medium">
            선조회 완료 후 경영지원팀에 동의 여부를 알려주지 않으시면 절차가 진행되지 않으니 반드시
            통보해주세요!
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Step1_3;
