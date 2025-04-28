import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "시너지그룹 - 2025년 3월 현재 납품 가능한 DB";
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
          backgroundColor: "#ffffff",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f8fafc",
            borderRadius: "16px",
            padding: "40px",
            width: "90%",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Logo */}
          <img
            src="https://synergymobile.vercel.app/synergy_logo.png"
            alt="Synergy Logo"
            width={500}
            height={150}
            style={{
              objectFit: "contain",
              marginBottom: "24px",
            }}
          />

          {/* Title */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "32px",
            }}
          >
            <h1
              style={{
                fontSize: "48px",
                fontWeight: "bold",
                color: "#0f172a",
                textAlign: "center",
                margin: "0",
                marginBottom: "16px",
              }}
            >
              2025년 3월 현재
            </h1>
            <h1
              style={{
                fontSize: "48px",
                fontWeight: "bold",
                color: "#0f172a",
                textAlign: "center",
                margin: "0",
                marginBottom: "16px",
              }}
            >
              납품 가능한 DB
            </h1>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
