import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays } from "lucide-react";

export default function FinanceSchoolScreen3() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white p-6">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">2주차 커리큘럼</h1>

      {/* 주차별 시간표 */}
      <Tabs defaultValue="week2-tue" className="w-full">
        <TabsList className="grid grid-cols-2 mb-4">
          <TabsTrigger value="week2-tue">2주 화요일</TabsTrigger>
          <TabsTrigger value="week2-thu">2주 목요일</TabsTrigger>
        </TabsList>

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
    </div>
  );
}
