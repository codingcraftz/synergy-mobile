"use client";

import {
  ArrowLeft,
  ExternalLink,
  FileText,
  AlertTriangle,
  CheckCircle,
  Info,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Step4_4() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">계약체결 이후 필수 서류 (비교3종)</h2>

      <div className="bg-blue-50 p-4 rounded-md">
        <h3 className="font-medium mb-2">비교 3종 서류</h3>
        <div className="border-l-4 border-blue-500 pl-3 py-1 bg-white rounded-r-md">
          <p className="text-sm">
            간단하게 생각하면 금소법 개정 이후 고객이 여러 보험사 상품을{" "}
            <span className="font-bold">직접 비교하고 선택했다는 증빙용 서류</span>로, 계약체결 이후
            필수적으로 작성해야하는 서류입니다.
          </p>
        </div>
        <p className="text-sm mt-3">
          메타온 & 이지페이퍼를 통해서 쉽게 등록할 수 있으며, 아래의 절차 확인 부탁드립니다!
          출력/모바일발송 2가지입니다. <span className="font-medium">제목 옆 삼각형</span>을
          클릭하여 절차 확인하세요 😊
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border rounded-md">
          <AccordionTrigger className="px-4 hover:no-underline">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-purple-600" />
              <h3 className="font-medium">1. 서류출력하여 등록하는 방법</h3>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            <ol className="space-y-6">
              <li className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <p className="text-sm">
                      <a
                        href="http://meta-on.co.kr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-medium hover:underline"
                      >
                        메타온
                      </a>{" "}
                      접속 &gt; 오른쪽 상단 비교확인서 발송 클릭 (메타온 글자 클릭하면 링크
                      이동됩니다)
                    </p>
                    <div className="mt-2 border rounded-md overflow-hidden">
                      <Image
                        src="/files/계약체결_1.png"
                        alt="메타온 접속 화면"
                        width={600}
                        height={400}
                        className="w-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </li>

              <li className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <p className="text-sm">
                      이지페이퍼 로그인 (메타온 아이디입니다. 비밀번호는 별도라서 따로 설정하세요
                      아래 찾기 버튼 활용!)
                    </p>
                    <div className="mt-2 bg-yellow-50 p-3 rounded-md border border-yellow-200 text-sm">
                      <p>
                        <span className="font-medium">처음 로그인 시</span>, 생/손보 등록증
                        입력하라는 화면이 뜹니다. 이건 네이버에 손해보험협회 또는 생명보험협회
                        검색하신 뒤 협회 사이트 들어가셔서 등록증 발급받으신 뒤에
                        JPG파일(이미지파일)로 변환하시고 입력해주시면 됩니다.
                      </p>
                      <p className="mt-1">
                        <span className="font-medium">
                          설계사 등록번호는 협회사이트에서 확인 가능합니다.
                        </span>{" "}
                        높은 확률로 모집종사자 메뉴에서 모두 확인 가능합니다.
                      </p>
                    </div>
                    <div className="mt-2 border rounded-md overflow-hidden">
                      <Image
                        src="/files/계약체결_2.png"
                        alt="이지페이퍼 로그인 화면"
                        width={600}
                        height={400}
                        className="w-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </li>

              <li className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <p className="text-sm">왼쪽 상단 집모양(홈) 클릭 &gt; PDF 서류 다운로드</p>
                    <div className="mt-2 border rounded-md overflow-hidden">
                      <Image
                        src="/files/계약체결_3.png"
                        alt="PDF 서류 다운로드 화면"
                        width={600}
                        height={400}
                        className="w-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </li>

              <li className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <p className="text-sm">모두 선택</p>
                    <div className="mt-2 border rounded-md overflow-hidden">
                      <Image
                        src="/files/계약체결_4.png"
                        alt="서류 모두 선택 화면"
                        width={600}
                        height={400}
                        className="w-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </li>

              <li className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                    5
                  </div>
                  <div>
                    <p className="text-sm">고객 정보 입력</p>
                    <div className="mt-2 border rounded-md overflow-hidden">
                      <Image
                        src="/files/계약체결_5.png"
                        alt="고객 정보 입력 화면"
                        width={600}
                        height={400}
                        className="w-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </li>

              <li className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                    6
                  </div>
                  <div>
                    <p className="text-sm">계약 정보 입력</p>
                    <div className="mt-2 border rounded-md overflow-hidden">
                      <Image
                        src="/files/계약체결_6.png"
                        alt="계약 정보 입력 화면"
                        width={600}
                        height={400}
                        className="w-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </li>

              <li className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                    7
                  </div>
                  <div>
                    <p className="text-sm">
                      청약상품 선택 &gt; 상품명 입력 후 계약에 맞는 상품 선택
                    </p>
                    <div className="mt-2 border rounded-md overflow-hidden">
                      <Image
                        src="/files/계약체결_7.png"
                        alt="청약상품 선택 화면"
                        width={600}
                        height={400}
                        className="w-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </li>

              <li className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                    8
                  </div>
                  <div>
                    <p className="text-sm">고객정보를 확인합니다 체크 후 &gt; PDF 다운로드</p>
                    <div className="mt-2 border rounded-md overflow-hidden">
                      <Image
                        src="/files/계약체결_8.png"
                        alt="PDF 다운로드 화면"
                        width={600}
                        height={400}
                        className="w-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </li>

              <li className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                    9
                  </div>
                  <div>
                    <p className="text-sm">
                      아래와 같이 알집 파일로 3가지 서류 PDF파일이 일괄 다운로드 됩니다. 이 서류를
                      출력 후 고객 서명 등 항목들 작성하신 뒤 이미지파일로 스캔하시면 됩니다.
                    </p>
                    <div className="mt-1 text-sm bg-green-50 p-2 rounded-md border border-green-200">
                      <p className="flex items-center gap-1">
                        <span className="font-medium">꿀팁</span>
                        <ChevronRight className="h-4 w-4" />
                        vFLAT 어플 사용 시 핸드폰으로 빠르게 스캔 가능
                      </p>
                    </div>
                    <div className="mt-2 bg-yellow-50 p-2 rounded-md border border-yellow-200">
                      <p className="text-sm font-medium">
                        종신보험 선택 시 서류 1개 추가, 총 4개를 등록해주셔야합니다
                      </p>
                    </div>
                    <div className="mt-2 border rounded-md overflow-hidden">
                      <Image
                        src="/files/계약체결_9.png"
                        alt="다운로드된 PDF 파일 화면"
                        width={600}
                        height={400}
                        className="w-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </li>

              <li className="space-y-4">
                <div className="flex items-start gap-2">
                  <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                    10
                  </div>
                  <div className="space-y-4 w-full">
                    <div>
                      <p className="text-sm font-medium mb-2">10-1. 메타온에서 등록하는 방법</p>
                      <p className="text-sm">
                        이 서류를 메타온 &gt; 계약 화면 &gt; 가장 하단
                        비교설명확인서/계약체결고지의무확인서/개인정보확인서 각각의 서류에 맞게
                        '업로드'
                      </p>
                      <p className="text-sm mt-1">
                        오른쪽 사진처럼 계약건 오른쪽 스크롤 했을 때 확인서징구(금소법) 란에 Y로
                        되어있으면 등록이 완료된 것입니다.
                      </p>
                      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="border rounded-md overflow-hidden">
                          <Image
                            src="/files/계약체결_10.png"
                            alt="메타온 서류 업로드 화면"
                            width={400}
                            height={300}
                            className="w-full object-contain"
                          />
                        </div>
                        <div className="border rounded-md overflow-hidden">
                          <Image
                            src="/files/계약체결_11.png"
                            alt="메타온 서류 등록 완료 화면"
                            width={400}
                            height={300}
                            className="w-full object-contain"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium mb-2">10-2. 이지페이퍼에서 등록하는 방법</p>
                      <p className="text-sm">
                        이지페이퍼 홈 &gt; 확인서 관리 &gt; 등록한 계약 목록에서 '업로드' 선택 이후
                        상단 탭에서 해당하는 서류 클릭 후 맞게 업로드 해주시면 됩니다.
                      </p>
                      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="border rounded-md overflow-hidden">
                          <Image
                            src="/files/계약체결_12.png"
                            alt="이지페이퍼 서류 업로드 화면 1"
                            width={400}
                            height={300}
                            className="w-full object-contain"
                          />
                        </div>
                        <div className="border rounded-md overflow-hidden">
                          <Image
                            src="/files/계약체결_13.png"
                            alt="이지페이퍼 서류 업로드 화면 2"
                            width={400}
                            height={300}
                            className="w-full object-contain"
                          />
                        </div>
                      </div>
                      <div className="mt-2 border rounded-md overflow-hidden">
                        <Image
                          src="/files/계약체결_14.png"
                          alt="이지페이퍼 서류 업로드 화면 3"
                          width={600}
                          height={400}
                          className="w-full object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ol>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border rounded-md mt-2">
          <AccordionTrigger className="px-4 hover:no-underline">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-purple-600" />
              <h3 className="font-medium">2. 모바일로 고객에게 발송하는 방법</h3>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            <p className="text-sm mb-4">서류출력과 1~2번 동일</p>

            <ol className="space-y-6">
              <li className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <p className="text-sm">
                      이지페이퍼 첫화면에서 알림톡 고객동의로 확인서 받기 선택
                    </p>
                    <div className="mt-2 border rounded-md overflow-hidden">
                      <Image
                        src="/files/계약체결_15.png"
                        alt="알림톡 고객동의 화면"
                        width={600}
                        height={400}
                        className="w-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </li>

              <li className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <p className="text-sm">
                      동일하게 고객정보/계약정보 입력한 뒤 발송 클릭 이후 고객이 카카오톡 알림톡으로
                      해당 동의건 전달받으면 서명 완료하시면 됩니다.
                    </p>
                    <div className="mt-2 border rounded-md overflow-hidden">
                      <Image
                        src="/files/계약체결_16.png"
                        alt="고객정보 입력 및 발송 화면"
                        width={600}
                        height={400}
                        className="w-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </li>
            </ol>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md">
        <div className="flex items-start gap-2">
          <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-medium">중요 안내사항</h4>
            <p className="text-sm mt-1">
              비교 3종 서류는 금소법 준수를 위한 필수 서류입니다. 모든 계약에 대해 반드시 작성하고
              보관해야 하며, 미작성 시 법적 제재를 받을 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
