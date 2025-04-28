import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "시너지그룹 단톡방 입장 안내";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f8fafc",
          padding: "40px 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <img
            src="https://synergymobile.vercel.app/synergy_logo.png"
            alt="Synergy Logo"
            width={500}
            height={120}
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <h1
          style={{
            fontSize: "60px",
            fontWeight: "bold",
            color: "#1e40af",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          단톡방 입장 안내
        </h1>
        <p
          style={{
            fontSize: "28px",
            color: "#4b5563",
            maxWidth: "800px",
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          시너지그룹의 모든 단톡방 정보를 한 곳에서 확인하세요. 원활한 소통과 빠른 정보 공유를 위한
          필수 가이드!
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "40px",
            padding: "16px 24px",
            backgroundColor: "#eff6ff",
            borderRadius: "12px",
            border: "1px solid #dbeafe",
          }}
        >
          <p style={{ fontSize: "24px", color: "#2563eb" }}>
            공지사항 · 실적보고 · 우수 활동 보고 · 지점별 단톡방
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
