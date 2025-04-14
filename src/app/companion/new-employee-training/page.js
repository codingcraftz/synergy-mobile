import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CalendarDays,
  Clock,
  Users,
  BookOpen,
  MapPin,
  Car,
  Calendar,
  GraduationCap,
} from "lucide-react";

export default function NewEmployeeTraining() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* 헤더 섹션 */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white p-6 rounded-b-3xl shadow-xl">
        <div className="max-w-4xl mx-auto">
          <Badge className="bg-yellow-500 hover:bg-yellow-600 mb-3 text-sm font-medium">
            컴패니언 사업부
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">04월 신입교육</h1>
          <h2 className="text-xl font-semibold mb-4 opacity-90">25.04.14~25.04.18 (월~금)</h2>

          <div className="flex flex-col space-y-2 mt-4">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-yellow-300" />
              <span>5일간 진행 / 10:00~17:00</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-yellow-300" />
              <span>서울시 송파구 위례서로252 208호</span>
            </div>
            <div className="flex items-center">
              <Car className="w-5 h-5 mr-2 text-yellow-300" />
              <span>건물 주차 가능 (현재 무료)</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2 text-yellow-300" />
              <span>
                참여 대상: 컴패니언 사업부 산하 신입 (보험업 경력 24차월 미만) 또는 수강 희망자
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* 주요 안내 배너 */}
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 m-6 rounded-lg shadow-md">
        <div className="flex">
          <GraduationCap className="w-6 h-6 mr-3 text-yellow-500" />
          <div>
            <h3 className="font-bold text-lg text-yellow-800">5일 집중 교육 프로그램</h3>
            <p className="text-yellow-700">
              DB영업, 화법, 상담노하우까지 설계사로 성장하기 위한 실전 커리큘럼
            </p>
          </div>
        </div>
      </div>

      {/* 스케줄 섹션 */}
      <section className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">교육 일정표</h2>

        <Tabs defaultValue="mon" className="w-full">
          <TabsList className="grid grid-cols-5 mb-6 rounded-xl">
            <TabsTrigger value="mon" className="rounded-l-xl">
              월
            </TabsTrigger>
            <TabsTrigger value="tue">화</TabsTrigger>
            <TabsTrigger value="wed">수</TabsTrigger>
            <TabsTrigger value="thu">목</TabsTrigger>
            <TabsTrigger value="fri" className="rounded-r-xl">
              금
            </TabsTrigger>
          </TabsList>

          {/* 월요일 */}
          <TabsContent value="mon">
            <Card className="border-none shadow-lg overflow-hidden">
              <CardHeader className="bg-blue-50 pb-3 border-b">
                <CardTitle className="text-lg flex items-center text-blue-800">
                  <CalendarDays className="w-5 h-5 mr-2 text-blue-600" />
                  04월 14일 (월요일)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  <div className="flex p-4 hover:bg-gray-50">
                    <div className="w-24 flex-shrink-0 font-medium text-blue-700">10:00-12:00</div>
                    <div className="ml-4">
                      <h3 className="font-bold">사업부별 자체 비대면 OT</h3>
                      <p className="text-sm text-gray-500 mt-1">-</p>
                    </div>
                  </div>

                  <div className="flex p-4 hover:bg-gray-50">
                    <div className="w-24 flex-shrink-0 font-medium text-blue-700">13:00-14:00</div>
                    <div className="ml-4">
                      <h3 className="font-bold">신입성장 가이드 (보험업계의 이해)</h3>
                      <p className="text-sm text-gray-500 mt-1">경명구 대표님</p>
                    </div>
                  </div>

                  <div className="flex p-4 hover:bg-gray-50">
                    <div className="w-24 flex-shrink-0 font-medium text-blue-700">14:00-15:00</div>
                    <div className="ml-4">
                      <h3 className="font-bold">신입성장 가이드 (for 하이퍼포머)</h3>
                      <p className="text-sm text-gray-500 mt-1">경명구 대표님</p>
                    </div>
                  </div>

                  <div className="flex p-4 hover:bg-gray-50">
                    <div className="w-24 flex-shrink-0 font-medium text-blue-700">15:00-17:00</div>
                    <div className="ml-4">
                      <h3 className="font-bold">DB영업 기본다지기</h3>
                      <p className="text-sm text-gray-500 mt-1">안인선 지점장님</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 화요일 */}
          <TabsContent value="tue">
            <Card className="border-none shadow-lg overflow-hidden">
              <CardHeader className="bg-blue-50 pb-3 border-b">
                <CardTitle className="text-lg flex items-center text-blue-800">
                  <CalendarDays className="w-5 h-5 mr-2 text-blue-600" />
                  04월 15일 (화요일)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  <div className="flex p-4 hover:bg-gray-50">
                    <div className="w-24 flex-shrink-0 font-medium text-blue-700">10:00-12:00</div>
                    <div className="ml-4">
                      <h3 className="font-bold">상상을 현실로 만드는 방법</h3>
                      <p className="text-sm text-gray-500 mt-1">이명길 영업이사님</p>
                    </div>
                  </div>

                  <div className="flex p-4 hover:bg-gray-50">
                    <div className="w-24 flex-shrink-0 font-medium text-blue-700">13:00-15:00</div>
                    <div className="ml-4">
                      <h3 className="font-bold">약관해석 및 증권분석 보상사례를 이용한 화법</h3>
                      <p className="text-sm text-gray-500 mt-1">임현진 프로님</p>
                    </div>
                  </div>

                  <div className="flex p-4 hover:bg-gray-50">
                    <div className="w-24 flex-shrink-0 font-medium text-blue-700">15:00-17:00</div>
                    <div className="ml-4">
                      <h3 className="font-bold">간절한 설계사의 기본기</h3>
                      <p className="text-sm text-gray-500 mt-1">김윤성 대표님</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 수요일 */}
          <TabsContent value="wed">
            <Card className="border-none shadow-lg overflow-hidden">
              <CardHeader className="bg-blue-50 pb-3 border-b">
                <CardTitle className="text-lg flex items-center text-blue-800">
                  <CalendarDays className="w-5 h-5 mr-2 text-blue-600" />
                  04월 16일 (수요일)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  <div className="flex p-4 hover:bg-gray-50">
                    <div className="w-24 flex-shrink-0 font-medium text-blue-700">10:00-12:00</div>
                    <div className="ml-4">
                      <h3 className="font-bold">TA / PC 시작과 끝</h3>
                      <p className="text-sm text-gray-500 mt-1">김민혁 영업이사님</p>
                    </div>
                  </div>

                  <div className="flex p-4 hover:bg-gray-50">
                    <div className="w-24 flex-shrink-0 font-medium text-blue-700">13:00-15:00</div>
                    <div className="ml-4">
                      <h3 className="font-bold">까먹기 싫은 TA화법과 자기소개법</h3>
                      <p className="text-sm text-gray-500 mt-1">김다행 영업수석님</p>
                    </div>
                  </div>

                  <div className="flex p-4 hover:bg-gray-50">
                    <div className="w-24 flex-shrink-0 font-medium text-blue-700">15:00-17:00</div>
                    <div className="ml-4">
                      <h3 className="font-bold">DB영업 마인드부터 계약까지</h3>
                      <p className="text-sm text-gray-500 mt-1">윤길상 영업이사님</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 목요일 */}
          <TabsContent value="thu">
            <Card className="border-none shadow-lg overflow-hidden">
              <CardHeader className="bg-blue-50 pb-3 border-b">
                <CardTitle className="text-lg flex items-center text-blue-800">
                  <CalendarDays className="w-5 h-5 mr-2 text-blue-600" />
                  04월 17일 (목요일)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  <div className="flex p-4 hover:bg-gray-50">
                    <div className="w-24 flex-shrink-0 font-medium text-blue-700">10:00-11:00</div>
                    <div className="ml-4">
                      <h3 className="font-bold">신입의 정석</h3>
                      <p className="text-sm text-gray-500 mt-1">윤길준 본부장님</p>
                    </div>
                  </div>

                  <div className="flex p-4 hover:bg-gray-50">
                    <div className="w-24 flex-shrink-0 font-medium text-blue-700">11:00-12:00</div>
                    <div className="ml-4">
                      <h3 className="font-bold">자동차보험 기초교육</h3>
                      <p className="text-sm text-gray-500 mt-1">윤길준 본부장님</p>
                    </div>
                  </div>

                  <div className="flex p-4 hover:bg-gray-50">
                    <div className="w-24 flex-shrink-0 font-medium text-blue-700">13:00-15:00</div>
                    <div className="ml-4">
                      <h3 className="font-bold">어제까지 일반인, 오늘부터 보험전문가?</h3>
                      <p className="text-sm text-gray-500 mt-1">강현택 S.L님</p>
                    </div>
                  </div>

                  <div className="flex p-4 hover:bg-gray-50">
                    <div className="w-24 flex-shrink-0 font-medium text-blue-700">15:00-17:00</div>
                    <div className="ml-4">
                      <h3 className="font-bold">모르면 망신당하는 세일즈 포인트</h3>
                      <p className="text-sm text-gray-500 mt-1">김영빈 팀장님</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 금요일 */}
          <TabsContent value="fri">
            <Card className="border-none shadow-lg overflow-hidden">
              <CardHeader className="bg-blue-50 pb-3 border-b">
                <CardTitle className="text-lg flex items-center text-blue-800">
                  <CalendarDays className="w-5 h-5 mr-2 text-blue-600" />
                  04월 18일 (금요일)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  <div className="flex p-4 hover:bg-gray-50">
                    <div className="w-24 flex-shrink-0 font-medium text-blue-700">10:00-12:00</div>
                    <div className="ml-4">
                      <h3 className="font-bold">보험업 첫 걸음을 위한 필수 상담노하우</h3>
                      <p className="text-sm text-gray-500 mt-1">윤성환 지점장님</p>
                    </div>
                  </div>

                  <div className="flex p-4 hover:bg-gray-50">
                    <div className="w-24 flex-shrink-0 font-medium text-blue-700">13:00-15:00</div>
                    <div className="ml-4">
                      <h3 className="font-bold">코드네임 '두마리 토끼'</h3>
                      <p className="text-sm text-gray-500 mt-1">최준용 부지점장님</p>
                    </div>
                  </div>

                  <div className="flex p-4 hover:bg-gray-50">
                    <div className="w-24 flex-shrink-0 font-medium text-blue-700">15:00-17:00</div>
                    <div className="ml-4">
                      <h3 className="font-bold">소개로 만드는 인적 네트워킹</h3>
                      <p className="text-sm text-gray-500 mt-1">강성무 수석 지점장님</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* 요약 섹션 */}
      <section className="px-6 py-10 bg-gradient-to-b from-blue-50 to-white rounded-t-3xl mt-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">교육 프로그램 특징</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-none shadow-lg overflow-hidden transform transition-transform hover:scale-105">
              <CardContent className="p-0">
                <div className="bg-blue-600 text-white p-4">
                  <BookOpen className="w-8 h-8 mb-2" />
                  <h3 className="text-xl font-bold">실전 교육</h3>
                </div>
                <div className="p-4">
                  <p className="text-gray-700">
                    DB영업, 화법, 상담노하우 등 신입 설계사를 위한 실전 중심 교육으로 현장에서 바로
                    활용 가능한 기술 습득
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg overflow-hidden transform transition-transform hover:scale-105">
              <CardContent className="p-0">
                <div className="bg-yellow-500 text-white p-4">
                  <Users className="w-8 h-8 mb-2" />
                  <h3 className="text-xl font-bold">강사진</h3>
                </div>
                <div className="p-4">
                  <p className="text-gray-700">
                    각 분야 전문가들의 노하우와 경험을 바탕으로 한 체계적인 교육을 통해 현장에서의
                    성공 전략 학습
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10">
            <div className="bg-blue-50 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-800 flex items-center">
                <Calendar className="w-6 h-6 mr-2" />
                교육 일정 요약
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-24 flex-shrink-0 font-medium text-blue-700">교육 기간</span>
                  <span>25.04.14~25.04.18 (월~금) 5일간</span>
                </li>
                <li className="flex items-start">
                  <span className="w-24 flex-shrink-0 font-medium text-blue-700">교육 시간</span>
                  <span>10:00~17:00 (점심시간 12:00-13:00)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-24 flex-shrink-0 font-medium text-blue-700">참여 대상</span>
                  <span>컴패니언 사업부 산하 신입 (보험업 경력 24차월 미만) 또는 수강 희망자</span>
                </li>
                <li className="flex items-start">
                  <span className="w-24 flex-shrink-0 font-medium text-blue-700">교육 장소</span>
                  <span>서울시 송파구 위례서로252 208호</span>
                </li>
                <li className="flex items-start">
                  <span className="w-24 flex-shrink-0 font-medium text-blue-700">주차</span>
                  <span>건물 주차 가능 (현재 무료)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-8 mt-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-3">신청하기</h3>
          <p className="text-lg mb-6 opacity-90">
            지금 바로 신청하고 금융 전문가의 길을 시작하세요
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="http://pf.kakao.com/_xkxaHMn"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C6.5 3 2 6.93 2 12c0 2.97 1.46 5.68 3.76 7.4l-1.5 5.1 5.45-3.35c0.77 0.11 1.55 0.17 2.29 0.17 5.5 0 10-3.93 10-9C22 6.93 17.5 3 12 3z" />
              </svg>
              카카오톡 문의하기
            </a>

            <button className="bg-white hover:bg-gray-100 text-blue-800 font-bold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105">
              전화 문의하기
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
