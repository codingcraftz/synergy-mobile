"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, AlertTriangle, FileText } from "lucide-react";
import Link from "next/link";

export default function Step5_3() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">DB 스크립트</h2>
        <p className="text-muted-foreground">효과적인 고객 상담을 위한 DB 스크립트 자료</p>
      </div>

      <Alert className="bg-amber-50 border-amber-200">
        <AlertTriangle className="h-4 w-4 text-amber-600" />
        <AlertTitle className="text-amber-800">중요 안내</AlertTitle>
        <AlertDescription>
          <p className="mb-4">상세한 DB 스크립트와 자료는 아래 노션 링크를 참고해주세요.</p>
          <a
            href="https://www.notion.so/DB-54cb52b5f682497f8aa756e8c07f8476"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:underline font-medium"
          >
            컴패니언 사업부 DB자료 모음 <ExternalLink className="ml-1 h-3 w-3" />
          </a>
        </AlertDescription>
      </Alert>

      <Card className="border border-gray-200">
        <CardHeader className="pb-0">
          <h3 className="text-lg font-semibold">DB 스크립트 자료실</h3>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 mb-4">
            효과적인 고객 상담을 위한 스크립트, 템플릿 및 가이드라인을 확인하세요. 다양한 상황별
            스크립트와 베스트 프랙티스를 제공합니다.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center pt-0">
          <Link
            href="https://www.notion.so/DB-54cb52b5f682497f8aa756e8c07f8476"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
              <FileText className="h-4 w-4" />
              DB 스크립트 노션 페이지로 이동
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
