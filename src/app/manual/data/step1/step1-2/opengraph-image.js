import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "위촉 & 코드 발급 - 시너지그룹 신입 설계사 가이드";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
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
          background: "linear-gradient(to right, #2563eb, #4338ca)",
          color: "white",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "30px",
          }}
        >
          <img
            src="https://synergymobile.vercel.app/synergy_logo.png"
            alt="Synergy Logo"
            width={280}
            height={70}
            style={{
              objectFit: "contain",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "28px",
              background: "rgba(255, 255, 255, 0.2)",
              padding: "8px 24px",
              borderRadius: "20px",
              marginBottom: "20px",
            }}
          >
            신입 설계사 입문 가이드
          </div>
          <h1
            style={{
              fontSize: "68px",
              fontWeight: "bold",
              margin: "0",
              marginBottom: "20px",
            }}
          >
            위촉 & 코드 발급
          </h1>
          <p
            style={{
              fontSize: "32px",
              margin: "0",
              opacity: "0.9",
              maxWidth: "800px",
              lineHeight: "1.4",
            }}
          >
            설계사로 나아가는 첫 걸음, 코드 발급 절차를 알아보세요 📝
          </p>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              opacity: "0.8",
              display: "flex",
              alignItems: "center",
            }}
          >
            시너지그룹 © 2024
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
