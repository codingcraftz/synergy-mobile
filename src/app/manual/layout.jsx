import { Noto_Serif_KR } from "next/font/google";

const serif = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-serif",
  preload: true,
});

export const metadata = {
  title: "신입 설계사 입문 메뉴얼 | 시너지그룹",
  description: "시너지그룹 신입 설계사를 위한 입문 메뉴얼 및 로드맵",
};

export default function ManualLayout({ children }) {
  return <div className={`${serif.variable} font-sans`}>{children}</div>;
}
