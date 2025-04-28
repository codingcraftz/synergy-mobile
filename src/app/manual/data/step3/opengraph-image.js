import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "FP파트너즈 가입 안내";
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
          backgroundColor: "#f0f4ff",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            borderRadius: "16px",
            padding: "40px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "90%",
            height: "80%",
          }}
        >
          <img
            src="https://synergymobile.vercel.app/synergy_logo.png"
            alt="Synergy Logo"
            width={400}
            height={100}
            style={{
              objectFit: "contain",
              marginBottom: "32px",
            }}
          />

          <h1
            style={{
              fontSize: "64px",
              fontWeight: "bold",
              textAlign: "center",
              color: "#312e81",
              marginBottom: "24px",
            }}
          >
            FP파트너즈 가입 안내
          </h1>

          <div
            style={{
              display: "flex",
              backgroundColor: "#e0e7ff",
              borderRadius: "12px",
              padding: "24px",
              fontSize: "32px",
              color: "#4338ca",
              maxWidth: "80%",
              textAlign: "center",
            }}
          >
            보험설계사를 위한 통합 플랫폼 가입 방법 및 절차 안내
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
