"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  AlertTriangle,
  ListChecks,
  InfoIcon,
  Clock,
  MinusCircle,
  CheckCircle2,
} from "lucide-react";

export default function Step5_4() {
  const deductionRules = [
    {
      id: 1,
      title: "지급 당일 포함 3일간 미보고/미녹취시 하루당 -1개 차감",
      description: "내용은 물론 녹취본까지 모두 보고 원칙",
      examples: [
        "월요일 지급 → 월 화 수 까지 양식대로 보고",
        "월요일에 1개를 받아서 목요일에 보고시 -1개, 금요일에 보고시 -2개 차감",
        "월요일에 2개를 받아서 모두 목요일에 보고시 개당 -1개씩이므로 -2개 차감",
        "월요일에 3개를 받아서 모두 금요일에 보고시 개당 -1개씩이므로 -6개 차감",
      ],
    },
    {
      id: 2,
      title: "부재건 보고 시 통화 증빙 미비",
      description: "부재콜 이후 당일 포함 7영업일동안 10회 이상 통화 기록 부재 캡처 필수",
      examples: ["월요일에 받은 경우 - 월화수목금월화까지 카운팅 / 수요일부터 -1개씩 차감"],
    },
    {
      id: 3,
      title: "AS신청 이후 해당 고객에게 터치 적발시",
      description: "심각한 규정 위반으로 간주됩니다",
      penalties: [
        "향후 무상디비 지원 금지",
        "유상디비 구매 지원 금지",
        "지급된 무상DB 지원 금액 전액 몰수 가능",
        "경우에 따라 강등 및 강제해촉 가능",
      ],
      note: "* AS 신청 건에 대해 증빙 부족이나 사유 불충분으로 인한 반려 이후는 터치 가능",
    },
  ];

  const reportingGuidelines = [
    "DB 수령 당일 반드시 첫 통화 기록을 남기세요",
    "통화 내용은 반드시 녹취하여 보관하세요",
    "장기부재 또는 연락불가 건은 반드시 증빙자료를 첨부하세요",
    "보고서 양식은 정확히 준수해야 합니다",
    "미보고 또는 지연 보고 시 사전에 담당자에게 알려야 합니다",
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">DB 매뉴얼</h2>
        <p className="text-muted-foreground">
          DB 관리 및 운영에 관한 주요 지침과 규정을 안내합니다
        </p>
      </div>

      <Alert variant="destructive" className="bg-red-50 border-red-300 text-red-800">
        <AlertTriangle className="h-4 w-4 text-red-600" />
        <AlertTitle>중요 안내</AlertTitle>
        <AlertDescription>
          다음 규정을 위반할 경우 DB 지급이 중단되거나 차감될 수 있으니 반드시 숙지하세요.
        </AlertDescription>
      </Alert>

      <Card className="border-t-4 border-t-red-500">
        <CardHeader className="pb-3">
          <CardTitle className="text-xl flex items-center gap-2">
            <ListChecks className="h-5 w-5 text-red-500" />
            DB지급 차감 조건
          </CardTitle>
          <CardDescription>다음 조건에 해당하는 경우 DB가 차감됩니다</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {deductionRules.map((rule) => (
            <div key={rule.id} className="border-l-4 border-l-red-200 pl-4 py-2">
              <h3 className="font-medium mb-2 flex items-center gap-2">
                <MinusCircle className="h-4 w-4 text-red-500" />
                {rule.title}
              </h3>

              <p className="text-sm flex items-center mb-2">
                <CheckCircle2 className="h-4 w-4 text-blue-500 mr-1.5 flex-shrink-0" />
                {rule.description}
              </p>

              {rule.examples && (
                <div className="bg-gray-50 p-3 rounded-md text-sm mt-2">
                  <p className="font-medium mb-1">예시:</p>
                  <ul className="space-y-1 list-inside">
                    {rule.examples.map((example, idx) => (
                      <li key={idx} className="text-gray-700">
                        - {example}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {rule.penalties && (
                <div className="mt-2 space-y-1">
                  <p className="font-medium text-sm">처벌 사항:</p>
                  <ul className="space-y-1">
                    {rule.penalties.map((penalty, idx) => (
                      <li key={idx} className="text-sm flex items-start">
                        <CheckCircle2 className="h-3.5 w-3.5 text-red-500 mr-1.5 mt-0.5 flex-shrink-0" />
                        {penalty}
                      </li>
                    ))}
                  </ul>
                  {rule.note && <p className="text-xs text-gray-600 italic mt-1">{rule.note}</p>}
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <InfoIcon className="h-5 w-5 text-blue-500" />
              DB 보고 지침
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {reportingGuidelines.map((guideline, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{guideline}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-amber-500" />
              보고 마감 시간
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="bg-amber-50 p-3 rounded-md">
                <p className="text-sm font-medium text-amber-800">일일 보고</p>
                <p className="text-sm">매일 오후 6시까지</p>
              </div>

              <div className="bg-green-50 p-3 rounded-md">
                <p className="text-sm font-medium text-green-800">주간 보고</p>
                <p className="text-sm">매주 금요일 오후 3시까지</p>
              </div>

              <div className="bg-blue-50 p-3 rounded-md">
                <p className="text-sm font-medium text-blue-800">월간 보고</p>
                <p className="text-sm">매월 마지막 영업일 오후 2시까지</p>
              </div>

              <p className="text-xs text-gray-500 italic">
                * 보고 마감 시간을 준수하지 않을 경우 추가 차감이 발생할 수 있습니다.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Alert className="bg-blue-50 border-blue-200">
        <InfoIcon className="h-4 w-4 text-blue-500" />
        <AlertTitle>참고사항</AlertTitle>
        <AlertDescription>
          DB 운영 규정은 상황에 따라 변경될 수 있으며, 변경 시 공지사항을 통해 안내됩니다. 항상 최신
          정보를 확인하세요.
        </AlertDescription>
      </Alert>
    </div>
  );
}
