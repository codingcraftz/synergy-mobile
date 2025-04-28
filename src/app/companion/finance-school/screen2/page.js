import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays } from "lucide-react";

export default function FinanceSchoolScreen2() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white p-6">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">1주차 커리큘럼</h1>

      {/* 주차별 시간표 */}
      <Tabs defaultValue="week1-tue" className="w-full">
        <TabsList className="grid grid-cols-2 mb-4">
          <TabsTrigger value="week1-tue">1주 화요일</TabsTrigger>
          <TabsTrigger value="week1-thu">1주 목요일</TabsTrigger>
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
      </Tabs>
    </div>
  );
}
