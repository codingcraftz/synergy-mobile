import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

export default function FinanceSchoolScreen1() {
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
