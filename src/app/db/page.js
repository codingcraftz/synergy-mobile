import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Info,
  Star,
  Users,
  Wallet,
  Phone,
  MapPin,
  AlertCircle,
  CheckCircle2,
  Shield,
  Award,
  Sparkles,
  Clock,
} from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "시너지 그룹 - 2025년 3월 현재 납품 가능한 DB",
  description: "시너지 그룹에서 제공하는 2025년 3월 현재 납품 가능한 DB 정보입니다.",
};

export default function DBPage() {
  const dbList = [
    {
      id: 1,
      name: "시너지 세미방문확정DB",
      price: "140,000원",
      asConditions: ["장기부재", "단박거절", "본인아님", "본인설계사"],
      longAbsenceCondition: "3일간 오전/오후 각 1통씩 필수, 하루에 2통 총 6통이상",
      features: ["AS 범위가 넓어 사실상 만남이 확정된 DB"],
      category: "premium",
    },
    {
      id: 2,
      name: "컴패니언 세미방문확정DB",
      price: "140,000원",
      asConditions: ["장기부재", "단박거절", "본인아님", "본인설계사"],
      longAbsenceCondition: "3일간 3통씩 총 9통이상",
      features: ["AS 범위가 넓어 사실상 만남이 확정된 DB"],
      category: "premium",
    },
    {
      id: 3,
      name: "펀다 프리미엄DB",
      price: "150,000원",
      asConditions: [
        "고객과 연락 불가",
        "단박거절",
        "약속후 거절",
        "피보험자 병력 등으로 보험가입불가",
      ],
      features: [
        "평균 유지 보험료 월 50만원~100만원 이상의 소상공인 자영업자를 대상으로 타겟팅",
        "대출중개플랫폼 주식회사 펀다의 대출서비스를 신청한 고객들에게 보장내용을 점검해주고 부족한 보장내용을 채울시 대출 승인, 우대금리&우대한도 제공, 플랫폼 수수료 감면 등의 베네핏을 주어 청약으로 이끄는 펀다 제휴 독점계약 DB",
      ],
      category: "premium",
    },
    {
      id: 4,
      name: "동행 보장분석DB",
      price: "80,000원",
      asConditions: ["결번", "본인아님", "본인설계사"],
      features: ["저렴하고 가성비 좋은 보장분석 퍼미션DB"],
      category: "standard",
    },
    {
      id: 5,
      name: "동행 실버DB",
      price: "70,000원",
      asConditions: ["결번", "본인아님", "본인설계사", "가족설계사", "병원 입원 등 유병자"],
      features: ["고령 고객 대상(60~69세) 저렴하고 가성비 좋은 보장분석 퍼미션DB"],
      category: "standard",
    },
    {
      id: 6,
      name: "무료화재보험DB",
      price: "50,000원",
      asConditions: ["결번", "본인아님", "본인설계사"],
      features: [
        "입주박람회에서 무료화재보험(1년에 1만원) 가입 지원 받겠다고 직접 오프라인 서명한 고객들을 타겟팅",
        "만남 확률이 매우 높고 고객들의 온도가 좋은 것이 장점",
      ],
      category: "standard",
    },
    {
      id: 7,
      name: "리사이클DB",
      price: "20,000원",
      asConditions: ["결번", "본인아님", "본인설계사"],
      features: [
        "개인정보동의 1년 미만, 아직 마케팅 허용 기간이 남아있는 DB들중에 1차 터치가 제대로 되지 않은 DB들을 재터치할 수 있도록 제공하며 매우 저렴한 가격이 장점",
      ],
      category: "economy",
    },
  ];

  const otherDBs = [
    "법인DB(자금,인증,세무 등)",
    "배달기사&택배기사&대리기사 등 라이더DB",
    "비대면상담DB",
    "건강검진DB",
    "AI네이버DB",
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <div className="flex flex-col items-center mb-8 animate-fade-in">
        <div className="w-48 h-auto mb-4 relative">
          <Image
            src="/synergy_logo.png"
            alt="시너지 그룹 로고"
            width={200}
            height={50}
            className="object-contain"
            priority
          />
        </div>
        <h1 className="text-3xl font-bold mb-2 tracking-tight text-center">
          2025년 3월 현재 납품 가능한 DB
        </h1>
        <p className="text-gray-500 font-medium text-center">
          시너지 그룹에서 제공하는 최신 DB 정보
          
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full mb-6">
        <TabsList className="grid grid-cols-4 mb-4">
          <TabsTrigger value="all" className="transition-all duration-200 hover:bg-gray-100">
            전체
          </TabsTrigger>
          <TabsTrigger value="premium" className="transition-all duration-200 hover:bg-amber-50">
            프리미엄
          </TabsTrigger>
          <TabsTrigger value="standard" className="transition-all duration-200 hover:bg-blue-50">
            스탠다드
          </TabsTrigger>
          <TabsTrigger value="economy" className="transition-all duration-200 hover:bg-green-50">
            이코노미
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {dbList.map((db, index) => (
            <div
              key={db.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <DBCard db={db} />
            </div>
          ))}
        </TabsContent>

        <TabsContent value="premium" className="space-y-4">
          {dbList
            .filter((db) => db.category === "premium")
            .map((db, index) => (
              <div
                key={db.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <DBCard db={db} />
              </div>
            ))}
        </TabsContent>

        <TabsContent value="standard" className="space-y-4">
          {dbList
            .filter((db) => db.category === "standard")
            .map((db, index) => (
              <div
                key={db.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <DBCard db={db} />
              </div>
            ))}
        </TabsContent>

        <TabsContent value="economy" className="space-y-4">
          {dbList
            .filter((db) => db.category === "economy")
            .map((db, index) => (
              <div
                key={db.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <DBCard db={db} />
              </div>
            ))}
        </TabsContent>
      </Tabs>

      <div
        className="mt-8 bg-gray-50 p-4 rounded-lg animate-fade-in"
        style={{ animationDelay: "500ms" }}
      >
        <h2 className="text-xl font-semibold mb-3 flex items-center">
          <Info className="w-5 h-5 mr-2 text-blue-500" />
          기타 정보
        </h2>
        <div className="space-y-3">
          <div className="bg-white p-3 rounded-md shadow-sm transition-all duration-300 hover:shadow-md">
            <h3 className="font-medium mb-2 flex items-center">
              <Sparkles className="w-4 h-4 mr-1 text-amber-500" />그 외 다양한 DB
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              {otherDBs.map((item, index) => (
                <li key={index} className="text-sm">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm mt-2">다양한 DB 런칭중</p>
          </div>

          <div className="bg-white p-3 rounded-md shadow-sm transition-all duration-300 hover:shadow-md">
            <h3 className="font-medium mb-2 flex items-center">
              <Shield className="w-4 h-4 mr-1 text-blue-500" />
              추가 정보
            </h3>
            <p className="text-sm flex items-center mb-1">
              <AlertCircle className="w-4 h-4 mr-1 text-red-500" />
              부가세 10% 별도
            </p>
            <p className="text-sm flex items-center">
              <MapPin className="w-4 h-4 mr-1 text-green-500" />
              지역 타겟팅 가능
            </p>
            <p className="text-sm text-gray-500 ml-5">
              (강원도/제주도/수도권/충청도/전라도/경상북도/경상남도 등)
            </p>
          </div>
        </div>
      </div>

      <footer
        className="mt-12 pt-6 border-t border-gray-200 flex flex-col items-center animate-fade-in"
        style={{ animationDelay: "700ms" }}
      >
        <div className="w-32 h-auto mb-3">
          <Image
            src="/synergy_logo.png"
            alt="시너지 그룹 로고"
            width={128}
            height={32}
            className="object-contain"
          />
        </div>
        <p className="text-xs text-gray-500 text-center">
          © {new Date().getFullYear()} 시너지 그룹. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

function DBCard({ db }) {
  const getCategoryColor = (category) => {
    switch (category) {
      case "premium":
        return "bg-amber-100 text-amber-800 hover:bg-amber-200";
      case "standard":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200";
      case "economy":
        return "bg-green-100 text-green-800 hover:bg-green-200";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
  };

  const getCategoryName = (category) => {
    switch (category) {
      case "premium":
        return "프리미엄";
      case "standard":
        return "스탠다드";
      case "economy":
        return "이코노미";
      default:
        return "기타";
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "premium":
        return <Award className="w-4 h-4 mr-1 text-amber-600" />;
      case "standard":
        return <Shield className="w-4 h-4 mr-1 text-blue-600" />;
      case "economy":
        return <Wallet className="w-4 h-4 mr-1 text-green-600" />;
      default:
        return <Info className="w-4 h-4 mr-1" />;
    }
  };

  return (
    <Card
      className="overflow-hidden border-t-4 transition-all duration-300 hover:shadow-lg"
      style={{
        borderTopColor:
          db.category === "premium"
            ? "#f59e0b"
            : db.category === "standard"
            ? "#3b82f6"
            : "#10b981",
      }}
    >
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl flex items-center gap-2">{db.name}</CardTitle>
            <CardDescription className="mt-1">
              <Badge
                className={`inline-flex items-center px-2 py-1 ${getCategoryColor(db.category)}`}
              >
                {getCategoryIcon(db.category)}
                {getCategoryName(db.category)}
              </Badge>
            </CardDescription>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-primary">{db.price}</div>
            <div className="text-xs text-gray-500">부가세 별도</div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-3">
          <div>
            <h3 className="text-sm font-medium flex items-center mb-2">
              <CheckCircle2 className="w-4 h-4 mr-1 text-blue-500" />
              AS 조건
            </h3>
            <div className="bg-gray-50 p-2 rounded-md">
              <p className="text-sm text-gray-700">{db.asConditions.join(", ")}</p>

              {db.longAbsenceCondition && (
                <div className="mt-2 pt-2 border-t border-gray-200">
                  <div className="text-xs text-gray-600 flex items-center gap-1">
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1 text-blue-400" />
                      <span className="font-medium whitespace-nowrap">장기부재 조건:</span>
                    </div>
                    <div>{db.longAbsenceCondition}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium flex items-center mb-2">
              <Star className="w-4 h-4 mr-1 text-amber-500" />
              특징
            </h3>
            <ul className="list-disc pl-5 text-sm space-y-0.5">
              {db.features.map((feature, index) => (
                <li key={index} className="text-gray-700">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
