import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, Clock, MapPin, Users, BookOpen, DollarSign, Award } from "lucide-react";

export default function FinanceSchool() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* 헤더 섹션 */}
      <header className="bg-blue-600 text-white p-6 rounded-b-3xl shadow-lg">
        <h1 className="text-3xl font-bold mb-2">금융스쿨</h1>
        <div className="flex items-center space-x-2 mb-4">
          <Badge className="bg-yellow-500 hover:bg-yellow-600">컴패니언 사업부</Badge>
        </div>
        <h2 className="text-xl font-semibold mb-4">
          최소 100만원에서 최대 1억 이상 벌어가는 &apos;금융스쿨&apos;
        </h2>
        <div className="flex items-center text-sm mt-2">
          <Clock className="w-4 h-4 mr-1" />
          <span>2주 과정 (화/목)</span>
        </div>
      </header>

      {/* 시간표 섹션 */}
      <section className="p-6">
        <Card className="mb-6 border-none shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Clock className="w-5 h-5 mr-2 text-blue-500" />
              수업 시간
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex justify-between items-center">
                <span className="font-medium">0교시</span>
                <span>10:30 - 10:50</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="font-medium">1교시</span>
                <span>10:50 - 12:00</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="font-medium">점심시간</span>
                <span>12:00 - 13:00</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="font-medium">2교시</span>
                <span>13:00 - 14:30</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* 주차별 시간표 */}
        <Tabs defaultValue="week1-tue" className="w-full">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="week1-tue">1주 화</TabsTrigger>
            <TabsTrigger value="week1-thu">1주 목</TabsTrigger>
            <TabsTrigger value="week2-tue">2주 화</TabsTrigger>
            <TabsTrigger value="week2-thu">2주 목</TabsTrigger>
          </TabsList>

          {/* 1주차 화요일 */}
          <TabsContent value="week1-tue">
            <Card className="border-none shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <CalendarDays className="w-5 h-5 mr-2 text-blue-500" />
                  1주차 화요일
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h3 className="font-bold">0교시 (10:30 - 10:50)</h3>
                  <p className="text-sm text-gray-700">김윤성 대표님</p>
                  <p>오리엔테이션 과정안내, 프로모션</p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h3 className="font-bold">1교시 (10:50 - 12:00)</h3>
                  <p className="text-sm text-gray-700">윤성환 지점장</p>
                  <p>
                    숨은보험금 찾기(내통장 잔고를 채워주는 &apos;11가지 숨은 보험금 솔루션&apos;
                    part1)
                  </p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4 py-2">
                  <h3 className="font-bold">점심식사 (12:00 - 13:00)</h3>
                  <p>식사지원, 관리자와 식사</p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h3 className="font-bold">2교시 (13:00 - 14:30)</h3>
                  <p className="text-sm text-gray-700">김윤성 대표님</p>
                  <p>보장분석(필수 5대보장자산으로 &apos;내보험 바로잡기&apos; part1)</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 1주차 목요일 */}
          <TabsContent value="week1-thu">
            <Card className="border-none shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <CalendarDays className="w-5 h-5 mr-2 text-blue-500" />
                  1주차 목요일
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h3 className="font-bold">0교시 (10:30 - 10:50)</h3>
                  <p className="text-sm text-gray-700">고능률 영업임원</p>
                  <p>선배와의 대화 동기부여 스피치</p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h3 className="font-bold">1교시 (10:50 - 12:00)</h3>
                  <p className="text-sm text-gray-700">윤성환 지점장</p>
                  <p>
                    숨은보험금찾기(내 통장 잔고를 채워주는 &apos;11가지 숨은 보험금 솔루션&apos;
                    part2)
                  </p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4 py-2">
                  <h3 className="font-bold">점심식사 (12:00 - 13:00)</h3>
                  <p>식사지원, 관리자와 식사</p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h3 className="font-bold">2교시 (13:00 - 14:30)</h3>
                  <p className="text-sm text-gray-700">김윤성 대표님</p>
                  <p>보장분석(필수 5대보정자산으로 &apos;내보험 바로잡기&apos; part2)</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 2주차 화요일 */}
          <TabsContent value="week2-tue">
            <Card className="border-none shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <CalendarDays className="w-5 h-5 mr-2 text-blue-500" />
                  2주차 화요일
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h3 className="font-bold">1교시 (10:30 - 12:00)</h3>
                  <p className="text-sm text-gray-700">김윤성 대표</p>
                  <p>입사설명회 (간절해봤니?)</p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4 py-2">
                  <h3 className="font-bold">점심식사 (12:00 - 13:00)</h3>
                  <p>식사지원, 관리자와 식사</p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h3 className="font-bold">2교시 (13:00 - 14:30)</h3>
                  <p className="text-sm text-gray-700">황우현 지점장</p>
                  <p>재무설계 (3대까지 혜택보는 상속,증여,절세 노하우)</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 2주차 목요일 */}
          <TabsContent value="week2-thu">
            <Card className="border-none shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <CalendarDays className="w-5 h-5 mr-2 text-blue-500" />
                  2주차 목요일
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h3 className="font-bold">1교시 (10:30 - 12:00)</h3>
                  <p className="text-sm text-gray-700">정상윤 대표님</p>
                  <p>재테크세미나</p>
                </div>

                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <h3 className="font-bold">점심식사 (12:00 - 14:00)</h3>
                  <p>수료식, 시상식</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* 혜택 섹션 */}
      <section className="p-6 bg-blue-50 rounded-t-3xl mt-4">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <Award className="w-5 h-5 mr-2 text-blue-500" />
          금융스쿨 혜택
        </h2>
        <div className="grid grid-cols-1 gap-4">
          <Card className="border-none shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-start">
                <DollarSign className="w-5 h-5 mr-3 text-green-500 mt-1" />
                <div>
                  <h3 className="font-bold text-lg">수익 창출 기회</h3>
                  <p className="text-gray-700">최소 100만원에서 최대 1억 이상의 수익 창출 가능</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-start">
                <BookOpen className="w-5 h-5 mr-3 text-blue-500 mt-1" />
                <div>
                  <h3 className="font-bold text-lg">전문 교육</h3>
                  <p className="text-gray-700">금융 전문가들의 실전 노하우와 전략 학습</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-start">
                <Users className="w-5 h-5 mr-3 text-purple-500 mt-1" />
                <div>
                  <h3 className="font-bold text-lg">네트워킹</h3>
                  <p className="text-gray-700">업계 전문가 및 동료들과의 인맥 형성</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-blue-600 text-white p-6 mt-auto">
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold mb-2">지금 바로 신청하세요!</h3>
          <p className="text-center mb-4">금융 전문가로 성장할 수 있는 기회를 놓치지 마세요</p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
            신청하기
          </button>
        </div>
      </footer>
    </div>
  );
}
