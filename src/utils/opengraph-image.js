import { ImageResponse } from "next/og";
// Image 컴포넌트를 사용하지 않으므로 임포트 제거
// import Image from "next/image";

export const runtime = "edge";
export const alt = "시너지그룹 송파지점 개소식";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// 함수 이름을 OGImage로 변경
export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
        }}
      >
        {/* 
          Note: OpenGraph 이미지는 Next.js의 Image 컴포넌트를 지원하지 않으므로,
          직접 이미지 URL을 사용합니다.
          OpenGraph 이미지 생성 중에는 img 태그를 사용하는 것이 유효합니다.
        */}
        <img
          src="https://synergymobile.vercel.app/synergy_logo.png"
          alt="Synergy Logo"
          width={800}
          height={200}
          style={{
            objectFit: "contain",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
