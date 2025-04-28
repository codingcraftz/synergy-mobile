import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, DollarSign, Award, Users } from "lucide-react";

export default function FinanceSchoolScreen4() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white p-6">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">금융스쿨 혜택</h1>

      {/* 혜택 섹션 */}
      <section className="p-4 bg-blue-50 rounded-3xl">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <Award className="w-5 h-5 mr-2 text-blue-500" />
          금융스쿨에서 얻을 수 있는 것
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
      <footer className="bg-blue-600 text-white p-6 mt-auto rounded-t-3xl">
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
