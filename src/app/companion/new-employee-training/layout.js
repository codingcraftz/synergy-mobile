import { Metadata } from "next";

export const metadata = {
  title: "04월 신입교육 | 컴패니언 사업부",
  description:
    "컴패니언 사업부의 신입 교육 프로그램 (25.04.14~25.04.18). DB영업, 화법, 상담노하우까지 설계사로 성장하기 위한 실전 커리큘럼을 제공합니다.",
  openGraph: {
    title: "04월 신입교육 | 컴패니언 사업부",
    description:
      "컴패니언 사업부의 신입 교육 프로그램 (25.04.14~25.04.18). DB영업, 화법, 상담노하우까지 설계사로 성장하기 위한 실전 커리큘럼을 제공합니다.",
    type: "website",
    images: [
      {
        url: "https://synergy-mobile.vercel.app/api/og?title=04월 신입교육&subtitle=컴패니언 사업부",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function NewEmployeeTrainingLayout({ children }) {
  return <div className="min-h-screen bg-white overflow-hidden">{children}</div>;
}
