import { Badge } from "@/components/ui/badge";
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
  Calendar,
  Clock,
  MapPin,
  Phone,
  Info,
  ChevronRight,
  User,
  BookOpen,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function NewEmployeeTraining() {
  return (
    <div className="min-h-screen bg-slate-50 pb-16 md:pb-8">
      {/* 헤더 섹션 */}
      <div className="bg-white pt-5 pb-5 px-4 mb-4 shadow-sm">
        <Badge className="mb-2 text-xs font-medium" variant="outline">
          신입교육
        </Badge>
        <h1 className="text-2xl font-bold tracking-tight mb-1.5">04월 신입교육</h1>
        <p className="text-sm text-muted-foreground">
          보험업 경력 24차월 미만 설계사를 위한 5일 집중 교육
        </p>
      </div>

      <div className="px-4 space-y-4">
        {/* 교육 소개 카드 */}
        <Card className="shadow-sm border-0">
          <CardHeader className="pb-2 pt-4 px-4">
            <CardTitle className="text-base flex items-center">
              <Info className="w-4 h-4 mr-1.5 text-blue-500" />
              교육 소개
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 text-sm">
            <p className="mb-3 leading-relaxed">
              DB영업과 화법, 상담노하우까지 보험설계사로 성장하기 위한 실전 커리큘럼
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-xs">
              <li>모집인 등록 완료된 설계사만 신청 가능</li>
              <li>교육 전 과정 필수 참석</li>
              <li>교육비 15만원 (식대 별도)</li>
              <li>계좌이체 : 국민은행 000000-00-000000 홍길동</li>
            </ul>
          </CardContent>
        </Card>

        {/* 일정 탭 */}
        <Tabs defaultValue="day1" className="space-y-4">
          <TabsList className="grid grid-cols-5 h-auto p-1 rounded-lg">
            <TabsTrigger value="day1" className="text-xs py-2 px-1 rounded-md">
              1일차
            </TabsTrigger>
            <TabsTrigger value="day2" className="text-xs py-2 px-1 rounded-md">
              2일차
            </TabsTrigger>
            <TabsTrigger value="day3" className="text-xs py-2 px-1 rounded-md">
              3일차
            </TabsTrigger>
            <TabsTrigger value="day4" className="text-xs py-2 px-1 rounded-md">
              4일차
            </TabsTrigger>
            <TabsTrigger value="day5" className="text-xs py-2 px-1 rounded-md">
              5일차
            </TabsTrigger>
          </TabsList>

          {/* 각 일차별 컨텐츠 */}
          <TabsContent value="day1" className="space-y-3 mt-3">
            <div className="grid grid-cols-1 gap-3">
              <ScheduleCard
                time="10:00 - 12:00"
                title="보험업 오리엔테이션"
                instructor="김강사"
                description="보험업의 기본 이해와 설계사로서의 마인드셋"
                icon={<BookOpen className="w-3.5 h-3.5 text-blue-500" />}
              />
              <ScheduleCard
                time="13:00 - 15:00"
                title="상품 기초교육 I"
                instructor="이강사"
                description="주요 보험상품의 이해와 특징"
                icon={<BookOpen className="w-3.5 h-3.5 text-blue-500" />}
              />
              <ScheduleCard
                time="15:30 - 17:30"
                title="고객 응대 기본 화법"
                instructor="박강사"
                description="첫인상 관리와 기본 상담 화법"
                icon={<MessageSquare className="w-3.5 h-3.5 text-blue-500" />}
              />
            </div>
          </TabsContent>

          <TabsContent value="day2" className="space-y-3 mt-3">
            <div className="grid grid-cols-1 gap-3">
              <ScheduleCard
                time="10:00 - 12:00"
                title="DB 영업 전략 I"
                instructor="김강사"
                description="효과적인 DB 관리와 접근법"
                icon={<User className="w-3.5 h-3.5 text-blue-500" />}
              />
              <ScheduleCard
                time="13:00 - 15:00"
                title="상품 기초교육 II"
                instructor="이강사"
                description="상품별 보장 내용과 판매 포인트"
                icon={<BookOpen className="w-3.5 h-3.5 text-blue-500" />}
              />
              <ScheduleCard
                time="15:30 - 17:30"
                title="실전 화법 훈련"
                instructor="박강사"
                description="거절 극복과 신뢰 구축 화법"
                icon={<MessageSquare className="w-3.5 h-3.5 text-blue-500" />}
              />
            </div>
          </TabsContent>

          <TabsContent value="day3" className="space-y-3 mt-3">
            <div className="grid grid-cols-1 gap-3">
              <ScheduleCard
                time="10:00 - 12:00"
                title="DB 영업 전략 II"
                instructor="김강사"
                description="리스트 확보와 관계형성 노하우"
                icon={<User className="w-3.5 h-3.5 text-blue-500" />}
              />
              <ScheduleCard
                time="13:00 - 15:00"
                title="고객 니즈 발굴"
                instructor="이강사"
                description="고객의 숨은 니즈 찾기와 솔루션 제시"
                icon={<BookOpen className="w-3.5 h-3.5 text-blue-500" />}
              />
              <ScheduleCard
                time="15:30 - 17:30"
                title="실전 롤플레잉 I"
                instructor="박강사"
                description="첫 통화부터 약속 잡기까지"
                icon={<MessageSquare className="w-3.5 h-3.5 text-blue-500" />}
              />
            </div>
          </TabsContent>

          <TabsContent value="day4" className="space-y-3 mt-3">
            <div className="grid grid-cols-1 gap-3">
              <ScheduleCard
                time="10:00 - 12:00"
                title="설계사 자기관리"
                instructor="김강사"
                description="목표 설정과 시간 관리 노하우"
                icon={<User className="w-3.5 h-3.5 text-blue-500" />}
              />
              <ScheduleCard
                time="13:00 - 15:00"
                title="실전 제안서 작성"
                instructor="이강사"
                description="효과적인 제안서 작성법과 활용"
                icon={<BookOpen className="w-3.5 h-3.5 text-blue-500" />}
              />
              <ScheduleCard
                time="15:30 - 17:30"
                title="실전 롤플레잉 II"
                instructor="박강사"
                description="상담부터 가입 설득까지"
                icon={<MessageSquare className="w-3.5 h-3.5 text-blue-500" />}
              />
            </div>
          </TabsContent>

          <TabsContent value="day5" className="space-y-3 mt-3">
            <div className="grid grid-cols-1 gap-3">
              <ScheduleCard
                time="10:00 - 12:00"
                title="성공 설계사의 비결"
                instructor="김강사"
                description="현장 톱 설계사의 성공 노하우 공유"
                icon={<User className="w-3.5 h-3.5 text-blue-500" />}
              />
              <ScheduleCard
                time="13:00 - 15:00"
                title="계약 관리와 유지"
                instructor="이강사"
                description="계약 체결 후 고객 관리와 추가 영업 전략"
                icon={<BookOpen className="w-3.5 h-3.5 text-blue-500" />}
              />
              <ScheduleCard
                time="15:30 - 17:00"
                title="수료식 및 네트워킹"
                instructor="박강사"
                description="교육 총정리 및 향후 실천 계획 수립"
                icon={<MessageSquare className="w-3.5 h-3.5 text-blue-500" />}
              />
            </div>
          </TabsContent>
        </Tabs>

        {/* 날짜 및 위치 정보 카드 */}
        <Card className="shadow-sm border-0">
          <CardHeader className="pb-2 pt-4 px-4">
            <CardTitle className="text-base flex items-center">
              <Calendar className="w-4 h-4 mr-1.5 text-blue-500" />
              교육 일정
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-4 text-sm">
            <p className="mb-1">2023년 4월 10일(월) ~ 4월 14일(금)</p>
            <p className="text-xs text-muted-foreground">
              매일 10:00 ~ 17:30 (점심시간 12:00 ~ 13:00)
            </p>
          </CardContent>
        </Card>

        {/* 교육 장소 정보 */}
        <Card className="shadow-sm border-0">
          <CardHeader className="pb-2 pt-4 px-4">
            <CardTitle className="text-base flex items-center">
              <MapPin className="w-4 h-4 mr-1.5 text-blue-500" />
              교육 장소
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-4 text-sm">
            <p className="mb-3">서울시 강남구 테헤란로 123 OO빌딩 8층 교육장</p>
            <div className="rounded-md overflow-hidden h-36 bg-slate-100 flex items-center justify-center mb-3">
              <span className="text-xs text-slate-500">지도 이미지</span>
            </div>
            <Button variant="outline" size="sm" className="w-full text-xs h-9">
              지도 앱에서 보기
              <ChevronRight className="ml-1 h-3.5 w-3.5" />
            </Button>
          </CardContent>
        </Card>

        {/* 강사 정보 카드 */}
        <Card className="shadow-sm overflow-hidden border-0">
          <CardHeader className="pb-2 pt-4 px-4">
            <CardTitle className="text-base flex items-center">
              <User className="w-4 h-4 mr-1.5 text-blue-500" />
              강사진 소개
            </CardTitle>
          </CardHeader>
          <Separator />
          <CardContent className="px-0 py-3">
            <div className="space-y-3">
              <InstructorCard
                name="김강사"
                role="영업 전략 전문가"
                experience="15년 경력 | 연간 계약 100억"
                image="/instructors/instructor1.jpg"
              />
              <Separator />
              <InstructorCard
                name="이강사"
                role="상품 교육 전문가"
                experience="12년 경력 | 우수 지사장"
                image="/instructors/instructor2.jpg"
              />
              <Separator />
              <InstructorCard
                name="박강사"
                role="화법 전문가"
                experience="10년 경력 | 신인상담사 교육 담당"
                image="/instructors/instructor3.jpg"
              />
            </div>
          </CardContent>
        </Card>

        {/* 안내 사항 */}
        <Card className="shadow-sm border-0">
          <CardHeader className="pb-2 pt-4 px-4">
            <CardTitle className="text-base flex items-center">
              <Info className="w-4 h-4 mr-1.5 text-blue-500" />
              안내 사항
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 text-xs">
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>준비물: 필기도구, 노트북(선택), 명함</li>
              <li>점심식사는 제공되지 않으며, 주변 식당 이용 안내드립니다.</li>
              <li>출석체크는 매일 아침 9시 50분까지 완료해주세요.</li>
              <li className="flex items-start">
                <Phone className="w-3.5 h-3.5 mr-1.5 mt-0.5 flex-shrink-0" />
                <span>교육 관련 문의: 홍길동 팀장 (010-1234-5678)</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="px-4 pt-2 pb-4">
            <p className="text-xs text-muted-foreground">
              * 신청 후 불참 시 향후 교육 참여에 제한이 있을 수 있습니다.
            </p>
          </CardFooter>
          <div className="px-4 pb-5">
            <Button className="w-full h-12 text-base font-medium">교육 신청하기</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

function ScheduleCard({ time, title, instructor, description, icon }) {
  return (
    <Card className="shadow-sm overflow-hidden border-0 hover:bg-slate-50 transition-colors">
      <CardHeader className="pb-1.5 pt-3 px-4">
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center">
            <Clock className="w-3.5 h-3.5 mr-1.5 text-blue-500" />
            <span className="text-xs text-muted-foreground">{time}</span>
          </div>
          <Badge variant="outline" className="text-[10px] font-normal py-0 h-5">
            {instructor}
          </Badge>
        </div>
        <div className="flex items-start">
          {icon && <div className="mt-0.5 mr-2">{icon}</div>}
          <CardTitle className="text-sm leading-tight">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-0 px-4 pb-3">
        <CardDescription className="text-xs mt-1">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

function InstructorCard({ name, role, experience, image }) {
  return (
    <Link href="#" className="block">
      <div className="flex items-center px-4 py-2 hover:bg-slate-50">
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-200 flex-shrink-0">
          <Image src={image} alt={name} fill className="object-cover" sizes="48px" />
        </div>
        <div className="ml-3.5">
          <h3 className="font-medium text-sm">{name}</h3>
          <p className="text-xs text-muted-foreground">{role}</p>
          <p className="text-[10px] text-muted-foreground">{experience}</p>
        </div>
        <ChevronRight className="ml-auto h-5 w-5 text-muted-foreground" />
      </div>
    </Link>
  );
}
