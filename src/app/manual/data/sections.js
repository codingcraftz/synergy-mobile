import {
  BookOpen,
  Users,
  FileText,
  PieChart,
  MapPin,
  LifeBuoy,
  Zap,
  PhoneCall,
  Folder,
  FileCheck,
  ExternalLink,
  Copy,
  Check,
  Info,
  AlertTriangle,
  Download,
  ListOrdered,
  Clock,
  Award,
  ShoppingBag,
  Calendar,
  CreditCard,
  Gift,
  DollarSign,
  Database,
  Utensils,
  UserCheck,
  Bell,
  PenLine,
  Printer,
  Coins,
  PiggyBank,
  Smartphone,
  FileEdit,
  BarChart,
  MonitorSmartphone,
  ArrowRight,
} from "lucide-react";
import { RiKakaoTalkFill } from "react-icons/ri";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// 각 스텝 컴포넌트 import
import Step1_1 from "./step1/step1-1.jsx";
import Step1_2 from "./step1/step1-2.jsx";
import Step1_3 from "./step1/step1-3.jsx";
import Step2_1 from "./step2/step2-1.jsx";
import Step2_2 from "./step2/step2-2.jsx";
import Step3_1 from "./step3/step3-1.jsx";
import Step3_2 from "./step3/step3-2.jsx";
import Step4_1 from "./step4/step4-1.jsx";
import Step4_2 from "./step4/step4-2.jsx";
import Step4_3 from "./step4/step4-3.jsx";
import Step4_4 from "./step4/step4-4.jsx";
import Step5_1 from "./step5/step5-1.jsx";
import Step5_2 from "./step5/step5-2.jsx";
import Step5_3 from "./step5/step5-3.jsx";
import Step5_4 from "./step5/step5-4.jsx";
import Step5_5 from "./step5/step5-5.jsx";

const SectionContent = {
  step1: {
    "step1-1": Step1_1,
    "step1-2": Step1_2,
    "step1-3": Step1_3,
  },
  step2: {
    "step2-1": Step2_1,
    "step2-2": Step2_2,
    "step2-3": ({ copied, copyToClipboard }) => (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">시너지그룹 영업규정</h3>

        <div className="bg-blue-50 p-4 rounded-md mb-4">
          <p className="text-sm">
            시너지그룹의 영업 활동에는 엄격한 규정이 있습니다. 모든 설계사분들은 이 규정을 숙지하고
            준수하셔야 합니다. 아래 문서를 다운로드하여 정독해주세요.
          </p>
        </div>

        <div className="border border-gray-200 rounded-md overflow-hidden">
          <div className="bg-gray-50 p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-red-500" />
              <span className="font-medium">영업규정.pdf</span>
            </div>
            <a
              href="/files/영업규정.pdf"
              download
              className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm hover:bg-blue-700 transition-colors"
            >
              <Download className="h-4 w-4" />
              다운로드
            </a>
          </div>
          <div className="p-4 bg-white">
            <div className="bg-gray-100 rounded-md p-4">
              <div className="flex items-center gap-2 mb-3">
                <ListOrdered className="h-5 w-5 text-indigo-600" />
                <h4 className="font-medium">목차</h4>
              </div>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-medium">제 1장</td>
                    <td className="py-2">총 칙</td>
                    <td className="py-2 text-right text-gray-500">2P</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-medium">제 2장</td>
                    <td className="py-2">위촉계약 지침</td>
                    <td className="py-2 text-right text-gray-500">3P</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-medium">제 3장</td>
                    <td className="py-2">Pro-CP 수수료 제 규정</td>
                    <td className="py-2 text-right text-gray-500">5P</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-medium">제 4장</td>
                    <td className="py-2">수수료 지급을 위한 담보 방법</td>
                    <td className="py-2 text-right text-gray-500">10P</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-medium">제 5장</td>
                    <td className="py-2">해촉 규정</td>
                    <td className="py-2 text-right text-gray-500">13P</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-medium">제 6장</td>
                    <td className="py-2">관리자 제 규정</td>
                    <td className="py-2 text-right text-gray-500">15P</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-medium">제 7장</td>
                    <td className="py-2">정착교육비 제 규정</td>
                    <td className="py-2 text-right text-gray-500">21P</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-medium">제 8장</td>
                    <td className="py-2">DB 운영 규정</td>
                    <td className="py-2 text-right text-gray-500">25P</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-medium">제 9장</td>
                    <td className="py-2">효율 부진자 관리 규정</td>
                    <td className="py-2 text-right text-gray-500">27P</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-medium">제 10장</td>
                    <td className="py-2">기타 관리 규정</td>
                    <td className="py-2 text-right text-gray-500">29P</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-medium">제 11장</td>
                    <td className="py-2">사무실 임차 효율 평가</td>
                    <td className="py-2 text-right text-gray-500">32P</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-medium">제 12장</td>
                    <td className="py-2">공동계약 관리 규정</td>
                    <td className="py-2 text-right text-gray-500">34P</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md mt-4">
          <div className="flex gap-2">
            <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0" />
            <div>
              <h4 className="font-medium">중요 안내사항</h4>
              <p className="text-sm mt-1">
                본 영업규정은 금융감독원 및 보험업법의 규정을 준수하여 작성되었습니다. 규정 위반 시
                회사 내규에 따라 제재를 받을 수 있으며, 심각한 위반의 경우 법적 책임이 따를 수
                있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    "step2-4": ({ copied, copyToClipboard }) => (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">마일리지 제도란?</h3>

        <div className="bg-blue-50 p-4 rounded-md mb-4">
          <div className="flex gap-2 items-start">
            <Info className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
            <p className="text-sm">
              시너지그룹의 마일리지 제도는 영업가족분들의 활동과 성과에 대한 보상으로 제공됩니다.
              적립된 마일리지는 다양한 방식으로 활용하실 수 있습니다.
            </p>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md">
          <h4 className="font-medium mb-2 flex items-center gap-2">
            <Info className="h-5 w-5 text-yellow-600" />
            마일리지 공지사항
          </h4>
          <ul className="list-disc pl-5 text-sm space-y-1.5">
            <li>2024년 1월부터 시행</li>
            <li>
              <span className="font-semibold">해촉시 모든 잔여 마일리지는 소멸</span>
            </li>
            <li>마일리지는 매월 누적되며 해촉 전까지 미 소멸</li>
            <li>마일리지 양도 불가</li>
            <li>영업 코드가 있는 분들만 해당</li>
          </ul>
        </div>

        <div className="border rounded-md overflow-hidden">
          <div className="bg-indigo-50 p-3 border-b">
            <h4 className="font-medium flex items-center gap-2">
              <Award className="h-5 w-5 text-indigo-600" />
              마일리지 획득 방법
            </h4>
          </div>

          <div className="divide-y">
            <div className="p-4">
              <h5 className="font-medium flex items-center gap-2 mb-3">
                <Clock className="h-4 w-4 text-indigo-600" />
                1) 근태
              </h5>
              <ul className="list-disc pl-5 text-sm space-y-2">
                <li>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">09시까지 사무실 출근 및 출근 보고:</span>
                    <span className="bg-indigo-100 text-indigo-800 px-1.5 rounded text-xs font-medium">
                      1P
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mt-0.5">
                    타임스탬프 인증_전체방 업로드 / 답글로 [마일리지 적립 요청] 기재
                  </p>
                </li>
                <li>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">월 첫 영업일 오전까지 사업계획서 보고:</span>
                    <span className="bg-indigo-100 text-indigo-800 px-1.5 rounded text-xs font-medium">
                      1P
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mt-0.5">
                    사업계획서_전체방 업로드(파일 제목에 영업가족 이름 기재 필수) / 답글로 [마일리지
                    적립 요청] 기재
                  </p>
                </li>
              </ul>
            </div>

            <div className="p-4">
              <h5 className="font-medium flex items-center gap-2 mb-3">
                <BookOpen className="h-4 w-4 text-indigo-600" />
                2) 교육 <span className="text-red-500 text-xs ml-1">[시간 준수 필]</span>
              </h5>
              <ul className="list-disc pl-5 text-sm space-y-2">
                <li>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">대면 교육 시작 전 참석 보고:</span>
                    <span className="bg-indigo-100 text-indigo-800 px-1.5 rounded text-xs font-medium">
                      1P
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mt-0.5">
                    교육 시작 시간 15분전까지 인정 / 타임스탬프 인증_전체방 업로드 / 답글로
                    [마일리지 적립 요청] 기재
                  </p>
                </li>
                <li>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">비대면 교육 후기:</span>
                    <span className="bg-indigo-100 text-indigo-800 px-1.5 rounded text-xs font-medium">
                      1P
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mt-0.5">
                    다음 영업일 오전까지 인정 / 전체방 업로드 / 답글로 [마일리지 적립 요청] 기재
                  </p>
                </li>
                <li>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">대면 교육 후기:</span>
                    <span className="bg-indigo-100 text-indigo-800 px-1.5 rounded text-xs font-medium">
                      1P
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mt-0.5">
                    다음 영업일 오전까지 인정 / 전체방 업로드 / 답글로 [마일리지 적립 요청] 기재
                  </p>
                </li>
              </ul>
            </div>

            <div className="p-4">
              <h5 className="font-medium flex items-center gap-2 mb-3">
                <Zap className="h-4 w-4 text-indigo-600" />
                3) 조기가동 <span className="text-red-500 text-xs ml-1">[월초 5 영업일까지]</span>
              </h5>
              <ul className="list-disc pl-5 text-sm space-y-2">
                <li>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">평가업적 2만원 이상 수납 완료:</span>
                    <span className="bg-indigo-100 text-indigo-800 px-1.5 rounded text-xs font-medium">
                      2P
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">평가업적 5만원 이상 수납 완료:</span>
                    <span className="bg-indigo-100 text-indigo-800 px-1.5 rounded text-xs font-medium">
                      5P
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">평가업적 10만원 이상 수납 완료:</span>
                    <span className="bg-indigo-100 text-indigo-800 px-1.5 rounded text-xs font-medium">
                      10P
                    </span>
                  </div>
                </li>
              </ul>
              <p className="text-xs text-gray-600 mt-2">
                대상자는 6영업일에 본인 평가업적과 함께 [마일리지 적립 요청] 기재
              </p>
            </div>

            <div className="p-4">
              <h5 className="font-medium flex items-center gap-2 mb-3">
                <Award className="h-4 w-4 text-indigo-600" />
                4) 데일리 실적 MVP
              </h5>
              <div className="flex gap-4 mt-2">
                <div className="px-3 py-2 bg-indigo-50 rounded-md text-center">
                  <span className="text-xs font-medium">1위</span>
                  <div className="font-semibold text-indigo-700">3P</div>
                </div>
                <div className="px-3 py-2 bg-indigo-50 rounded-md text-center">
                  <span className="text-xs font-medium">2위</span>
                  <div className="font-semibold text-indigo-700">2P</div>
                </div>
                <div className="px-3 py-2 bg-indigo-50 rounded-md text-center">
                  <span className="text-xs font-medium">3위</span>
                  <div className="font-semibold text-indigo-700">1P</div>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-2">세부공지 참조</p>
            </div>

            <div className="p-4">
              <h5 className="font-medium flex items-center gap-2 mb-3">
                <Calendar className="h-4 w-4 text-indigo-600" />
                5) 주간 실적 MVP <span className="text-xs text-gray-600">(업적부문)</span>
              </h5>
              <div className="grid grid-cols-3 gap-2 mt-2">
                <div className="px-2 py-1.5 bg-indigo-50 rounded-md text-center">
                  <span className="text-xs font-medium">1위</span>
                  <div className="font-semibold text-indigo-700">6P</div>
                </div>
                <div className="px-2 py-1.5 bg-indigo-50 rounded-md text-center">
                  <span className="text-xs font-medium">2위</span>
                  <div className="font-semibold text-indigo-700">5P</div>
                </div>
                <div className="px-2 py-1.5 bg-indigo-50 rounded-md text-center">
                  <span className="text-xs font-medium">3위</span>
                  <div className="font-semibold text-indigo-700">4P</div>
                </div>
                <div className="px-2 py-1.5 bg-indigo-50 rounded-md text-center">
                  <span className="text-xs font-medium">4위</span>
                  <div className="font-semibold text-indigo-700">3P</div>
                </div>
                <div className="px-2 py-1.5 bg-indigo-50 rounded-md text-center">
                  <span className="text-xs font-medium">5위</span>
                  <div className="font-semibold text-indigo-700">2P</div>
                </div>
                <div className="px-2 py-1.5 bg-indigo-50 rounded-md text-center">
                  <span className="text-xs font-medium">6위</span>
                  <div className="font-semibold text-indigo-700">1P</div>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-2">세부공지 참조</p>
            </div>

            <div className="p-4">
              <h5 className="font-medium flex items-center gap-2 mb-3">
                <BarChart className="h-4 w-4 text-indigo-600" />
                6) 월간 MVP
              </h5>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="px-3 py-2 bg-indigo-50 rounded-md text-center">
                  <span className="text-xs font-medium">업적 부문</span>
                </div>
                <div className="px-3 py-2 bg-indigo-50 rounded-md text-center">
                  <span className="text-xs font-medium">건수 부문</span>
                </div>
                <div className="px-3 py-2 bg-indigo-50 rounded-md text-center">
                  <span className="text-xs font-medium">도입 부문</span>
                </div>
                <div className="px-3 py-2 bg-indigo-50 rounded-md text-center">
                  <span className="text-xs font-medium">활동량 부문</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-2">세부공지 참조</p>
            </div>

            <div className="p-4">
              <h5 className="font-medium flex items-center gap-2 mb-3">
                <Users className="h-4 w-4 text-indigo-600" />
                7) 우수 활동 누적
              </h5>
              <p className="text-xs text-gray-600">세부공지 참조</p>
            </div>
          </div>
        </div>

        <div className="border rounded-md overflow-hidden mt-6">
          <div className="bg-green-50 p-3 border-b">
            <h4 className="font-medium flex items-center gap-2">
              <Gift className="h-5 w-5 text-green-600" />
              마일리지 사용 방법
            </h4>
          </div>

          <div className="divide-y">
            <div className="p-4">
              <h5 className="font-medium flex items-center gap-2 mb-2">
                <ShoppingBag className="h-4 w-4 text-green-600" />
                1) 컴패니언 쇼핑몰
              </h5>
              <div className="bg-gray-50 rounded-md p-3 text-sm">
                <div className="flex items-center gap-1 mb-1">
                  <span>누적 마일리지</span>
                  <span className="font-semibold text-green-700">1P</span>
                  <span>당</span>
                  <span className="font-semibold text-green-700">1,000원</span>
                  <span>으로 사용 가능</span>
                </div>
                <p className="text-xs text-gray-600">
                  쇼핑몰 내 농협 건강식품, 컴패니언 굿즈, 고객 사은품 등 다양한 상품들 구매 가능
                </p>
              </div>
            </div>

            <div className="p-4">
              <h5 className="font-medium flex items-center gap-2 mb-2">
                <Database className="h-4 w-4 text-green-600" />
                2) DB구매
              </h5>
              <div className="bg-gray-50 rounded-md p-3 text-sm">
                <div className="flex items-center gap-1 mb-1">
                  <span>누적 마일리지</span>
                  <span className="font-semibold text-green-700">1P</span>
                  <span>당</span>
                  <span className="font-semibold text-green-700">1,000원</span>
                  <span>으로 사용 가능</span>
                </div>
                <p className="text-xs text-gray-600">
                  본사 및 컴패니언 사업부가 취급하는 다양한 DB 구매 가능
                </p>
              </div>
            </div>

            <div className="p-4">
              <h5 className="font-medium flex items-center gap-2 mb-2">
                <Utensils className="h-4 w-4 text-green-600" />
                3) 회식 지원
              </h5>
              <div className="bg-gray-50 rounded-md p-3 text-sm">
                <div className="flex items-center gap-1 mb-1">
                  <span>누적 마일리지</span>
                  <span className="font-semibold text-green-700">1P</span>
                  <span>당</span>
                  <span className="font-semibold text-green-700">1,000원</span>
                  <span>으로 사용 가능</span>
                </div>
                <p className="text-xs text-gray-600">
                  본인 포함 4인 이상의 영업가족 명단 제출 및 대표 승인시 회식비로 사용 가능
                </p>
                <p className="text-xs text-red-500 font-medium mt-1">
                  (단, 지점장 이상 관리자 1명 이상 반드시 참여)
                </p>
              </div>
            </div>

            <div className="p-4">
              <h5 className="font-medium flex items-center gap-2 mb-2">
                <DollarSign className="h-4 w-4 text-green-600" />
                4) 현금 전환
              </h5>
              <div className="bg-gray-50 rounded-md p-3 text-sm">
                <div className="flex items-center gap-1 mb-1">
                  <span>누적 마일리지</span>
                  <span className="font-semibold text-green-700">1P</span>
                  <span>당</span>
                  <span className="font-semibold text-green-700">500원</span>
                  <span>으로 사용 가능</span>
                </div>
                <p className="text-xs text-gray-600">신청 익월 급여로 지급</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 p-4 rounded-md mt-4">
          <div className="flex items-start gap-2">
            <AlertTriangle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-medium">유의사항</p>
              <p className="mt-1">
                마일리지 적립 요청시 반드시 [마일리지 적립 요청] 문구를 함께 작성해 주셔야 정확한
                집계가 가능합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    "step2-5": ({ copied, copyToClipboard }) => (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">팀비서 이용 관련</h3>

        <div className="bg-blue-50 p-4 rounded-md mb-5">
          <h4 className="font-medium text-lg flex items-center gap-2 mb-3">
            <Bell className="h-5 w-5 text-blue-500" />
            팀비서 신청 공지
          </h4>

          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <Clock className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm">
                팀 비서에게 요청할 수 있는 업무는{" "}
                <span className="font-medium">[평일 10:00~16:30]</span> 사이에 진행해드립니다.
              </p>
            </div>

            <div className="flex items-start gap-2">
              <RiKakaoTalkFill className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm">
                모든 업무 지시는
                <a
                  href="http://pf.kakao.com/_DNpMn/chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium mx-1 inline-flex items-center gap-0.5"
                >
                  카카오톡 채널 <ExternalLink className="h-3 w-3" />
                </a>
                에서 이루어집니다.
              </p>
            </div>

            <div className="flex items-start gap-2">
              <Info className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm">
                신청할 분은 11/29, 17:00까지
                <span className="font-semibold text-red-500">★입금 캡쳐와 함께★</span>
                <a
                  href="http://pf.kakao.com/_DNpMn/chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold mx-1 inline-flex items-center gap-0.5"
                >
                  카카오톡 경영지원팀 <ExternalLink className="h-3 w-3" />
                </a>
                으로 신청 부탁드립니다.
              </p>
            </div>
          </div>

          <div className="mt-4 bg-white p-3 rounded-md border border-blue-200">
            <ul className="space-y-1 text-sm">
              <li className="flex items-center gap-2">
                <PiggyBank className="h-4 w-4 text-blue-600" />
                <span>3333077283954 김윤성 카카오뱅크</span>
              </li>
              <li className="flex items-center gap-2">
                <Coins className="h-4 w-4 text-blue-600" />
                <span className="font-medium">월 비용은 17만원입니다.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border rounded-md overflow-hidden">
          <div className="bg-indigo-50 p-3 border-b">
            <h4 className="font-medium flex items-center gap-2">
              <Bell className="h-5 w-5 text-indigo-600" />
              팀비서 업무 범위
            </h4>
          </div>

          <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="flex items-start gap-2 p-3 bg-gray-50 rounded-md">
              <UserCheck className="h-4 w-4 text-indigo-600 mt-0.5" />
              <span className="text-sm">가입설계동의</span>
            </div>

            <div className="flex items-start gap-2 p-3 bg-gray-50 rounded-md">
              <Users className="h-4 w-4 text-indigo-600 mt-0.5" />
              <span className="text-sm">고객 등록</span>
            </div>

            <div className="flex items-start gap-2 p-3 bg-gray-50 rounded-md">
              <PenLine className="h-4 w-4 text-indigo-600 mt-0.5" />
              <span className="text-sm">설계 수정</span>
            </div>

            <div className="flex items-start gap-2 p-3 bg-gray-50 rounded-md">
              <Printer className="h-4 w-4 text-indigo-600 mt-0.5" />
              <span className="text-sm">가입제안서 출력 & PDF 전달</span>
            </div>

            <div className="flex items-start gap-2 p-3 bg-gray-50 rounded-md">
              <Coins className="h-4 w-4 text-indigo-600 mt-0.5" />
              <span className="text-sm">보험금 청구</span>
            </div>

            <div className="flex items-start gap-2 p-3 bg-gray-50 rounded-md">
              <FileText className="h-4 w-4 text-indigo-600 mt-0.5" />
              <span className="text-sm">증권 발급 & PDF 전달</span>
            </div>

            <div className="flex items-start gap-2 p-3 bg-gray-50 rounded-md">
              <CreditCard className="h-4 w-4 text-indigo-600 mt-0.5" />
              <span className="text-sm">가상계좌 발급</span>
            </div>

            <div className="flex items-start gap-2 p-3 bg-gray-50 rounded-md">
              <Smartphone className="h-4 w-4 text-indigo-600 mt-0.5" />
              <span className="text-sm">모바일 청약 발송</span>
            </div>

            <div className="flex items-start gap-2 p-3 bg-gray-50 rounded-md">
              <FileEdit className="h-4 w-4 text-indigo-600 mt-0.5" />
              <span className="text-sm">배서</span>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md">
          <div className="flex items-start gap-2">
            <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-yellow-800">
                ⭐⭐⭐ 해당 원수사 매니저가 할 수 있는 업무는 팀비서가 중복해서 하지 않습니다. 해당
                원수사 매니저가 거부하는 업무만 팀비서가 진행합니다. ⭐⭐⭐
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  step3: {
    "step3-1": Step3_1,
    "step3-2": Step3_2,
  },
  step4: {
    "step4-1": Step4_1,
    "step4-2": Step4_2,
    "step4-3": Step4_3,
    "step4-4": Step4_4,
  },
  step5: {
    "step5-1": Step5_1,
    "step5-2": Step5_2,
    "step5-3": Step5_3,
    "step5-4": Step5_4,
    "step5-5": Step5_5,
  },
};

const sections = [
  {
    id: "step1",
    title: "입사 절차 따라가기",
    icon: <MapPin className="h-5 w-5 text-blue-800" />,
    color: "text-blue-800",
    bgColor: "bg-blue-50",
    items: [
      {
        id: "step1-1",
        title: "입사지원서 작성",
        icon: <FileText className="h-5 w-5 text-blue-600" />,
        content: SectionContent.step1["step1-1"],
      },
      {
        id: "step1-2",
        title: "위촉 & 코드 발급",
        icon: <FileCheck className="h-5 w-5 text-blue-600" />,
        content: SectionContent.step1["step1-2"],
      },
      {
        id: "step1-3",
        title: "보증보험 선조회",
        icon: <FileCheck className="h-5 w-5 text-blue-600" />,
        content: SectionContent.step1["step1-3"],
      },
    ],
  },
  {
    id: "step2",
    title: "시너지그룹 적응하기",
    icon: <Users className="h-5 w-5 text-indigo-800" />,
    color: "text-indigo-800",
    bgColor: "bg-indigo-50",
    items: [
      {
        id: "step2-1",
        title: "단톡방 입장",
        icon: <Users className="h-5 w-5 text-indigo-600" />,
        content: SectionContent.step2["step2-1"],
      },
      {
        id: "step2-2",
        title: "카카오톡 채널 이용",
        icon: <RiKakaoTalkFill className="h-5 w-5 text-indigo-600" />,
        content: SectionContent.step2["step2-2"],
      },
      {
        id: "step2-3",
        title: "시너지그룹 영업규정",
        icon: <FileText className="h-5 w-5 text-indigo-600" />,
        content: SectionContent.step2["step2-3"],
      },
      {
        id: "step2-4",
        title: "마일리지 제도란?",
        icon: <PieChart className="h-5 w-5 text-indigo-600" />,
        content: SectionContent.step2["step2-4"],
      },
      {
        id: "step2-5",
        title: "팀비서 이용 관련",
        icon: <Users className="h-5 w-5 text-indigo-600" />,
        content: SectionContent.step2["step2-5"],
      },
    ],
  },
  {
    id: "step3",
    title: "영업왕이 되기 위한 준비 단계",
    icon: <BookOpen className="h-5 w-5 text-emerald-800" />,
    color: "text-emerald-800",
    bgColor: "bg-emerald-50",
    items: [
      {
        id: "step3-1",
        title: "FP파트너즈 가입",
        icon: <Users className="h-5 w-5 text-emerald-600" />,
        content: SectionContent.step3["step3-1"],
      },
      {
        id: "step3-2",
        title: "신입교육 수강",
        icon: <BookOpen className="h-5 w-5 text-emerald-600" />,
        content: SectionContent.step3["step3-2"],
      },
    ],
  },
  {
    id: "step4",
    title: "실전 계약과 설계가 궁금해요!",
    icon: <Zap className="h-5 w-5 text-purple-800" />,
    color: "text-purple-800",
    bgColor: "bg-purple-50",
    items: [
      {
        id: "step4-1",
        title: "보험회사 전산",
        icon: <MonitorSmartphone className="h-5 w-5 text-purple-600" />,
        content: SectionContent.step4["step4-1"],
      },
      {
        id: "step4-2",
        title: "원수사 연락처 정리",
        icon: <PhoneCall className="h-5 w-5 text-purple-600" />,
        content: SectionContent.step4["step4-2"],
      },
      {
        id: "step4-3",
        title: "수납방법",
        icon: <FileCheck className="h-5 w-5 text-purple-600" />,
        content: SectionContent.step4["step4-3"],
      },
      {
        id: "step4-4",
        title: "계약체결 이후 필수 서류 (비교3종)",
        icon: <FileText className="h-5 w-5 text-purple-600" />,
        content: SectionContent.step4["step4-4"],
      },
    ],
  },
  {
    id: "step5",
    title: "시너지는 유명한 DB맛집",
    icon: <Folder className="h-5 w-5 text-red-800" />,
    color: "text-red-800",
    bgColor: "bg-red-50",
    items: [
      {
        id: "step5-1",
        title: "(매우 중요) DB 과제",
        icon: <FileText className="h-5 w-5 text-red-600 font-bold" />,
        content: SectionContent.step5["step5-1"],
      },
      {
        id: "step5-2",
        title: "DB 종류 안내",
        icon: <Database className="h-5 w-5 text-red-600" />,
        content: SectionContent.step5["step5-2"],
      },
      {
        id: "step5-3",
        title: "DB 스크립트",
        icon: <FileEdit className="h-5 w-5 text-red-600" />,
        content: SectionContent.step5["step5-3"],
      },
      {
        id: "step5-4",
        title: "DB 매뉴얼",
        icon: <BookOpen className="h-5 w-5 text-red-600" />,
        content: SectionContent.step5["step5-4"],
      },
      {
        id: "step5-5",
        title: "DB자료 통합(대외비)",
        icon: <LifeBuoy className="h-5 w-5 text-red-600" />,
        content: SectionContent.step5["step5-5"],
      },
    ],
  },
];

export default sections;
