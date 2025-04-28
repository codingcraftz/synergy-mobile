"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, AlertTriangle, Lock, Shield } from "lucide-react";
import Link from "next/link";

export default function Step5_5() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">DB자료 통합 ⚠️대외비⚠️</h2>
        <p className="text-muted-foreground">시너지그룹 DB 관련 대외비 자료 모음</p>
      </div>

      <Alert variant="destructive" className="bg-red-50 border-red-300 text-red-800">
        <AlertTriangle className="h-4 w-4 text-red-600" />
        <AlertTitle>⚠️ 중요 안내: 대외비 ⚠️</AlertTitle>
        <AlertDescription>
          <p className="mb-4">
            이 자료는 시너지그룹 내부 대외비 자료입니다. 무단 공유, 유출을 금지합니다.
          </p>
        </AlertDescription>
      </Alert>

      <Card className="border border-red-200 bg-red-50">
        <CardHeader className="pb-0">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Lock className="h-5 w-5 text-red-500" />
            DB자료 통합 대외비 자료실
          </h3>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 mb-4">
            시너지그룹 DB 관련 대외비 통합 자료입니다. 외부 유출 시 법적 책임이 발생할 수 있으니
            주의하시기 바랍니다.
          </p>
          <div className="flex items-center gap-2 bg-white p-3 rounded-md border border-red-200">
            <Shield className="h-5 w-5 text-red-500" />
            <p className="text-sm font-medium">접근 권한이 있는 사용자만 열람 가능합니다</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center pt-0">
          <Link
            href="https://www.notion.so/1fc7b890321e4aadad59d2fc469a5abe?pvs=25"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white">
              <Lock className="h-4 w-4" />
              대외비 자료 열람하기
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
