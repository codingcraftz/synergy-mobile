import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "시너지그룹 신입 설계사 입문 메뉴얼";
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
          background: "linear-gradient(to right, #2563eb, #4f46e5)",
          color: "white",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          <img
            src="https://synergymobile.vercel.app/synergy_logo.png"
            alt="Synergy Logo"
            width={300}
            height={80}
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
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              margin: "0",
              marginBottom: "20px",
            }}
          >
            신입 설계사 입문 메뉴얼
          </h1>
          <p
            style={{
              fontSize: "36px",
              margin: "0",
              opacity: "0.9",
            }}
          >
            시너지그룹과 함께하는 성공적인 첫걸음 🚀
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
