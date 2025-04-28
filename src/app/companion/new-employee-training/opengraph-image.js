import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "컴패니언 사업부 04월 신입교육";
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
          background: "white",
          color: "#1e3a8a",
          padding: "40px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            width: "90%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f0f9ff",
              padding: "12px 24px",
              borderRadius: "12px",
              marginBottom: "24px",
              borderLeft: "6px solid #3b82f6",
            }}
          >
            <p
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                margin: "0",
                color: "#2563eb",
              }}
            >
              컴패니언 사업부
            </p>
          </div>

          <h1
            style={{
              fontSize: "64px",
              fontWeight: "bold",
              margin: "0",
              marginBottom: "16px",
              color: "#1e3a8a",
            }}
          >
            4월 신입 교육 일정 안내
          </h1>

          <div
            style={{
              width: "120px",
              height: "6px",
              backgroundColor: "#3b82f6",
              marginBottom: "32px",
              borderRadius: "3px",
            }}
          />

          <p
            style={{
              fontSize: "32px",
              margin: "0",
              marginBottom: "24px",
              color: "#475569",
            }}
          >
            25.04.14~25.04.18 (월~금)
          </p>

          <p
            style={{
              fontSize: "24px",
              margin: "0",
              color: "#64748b",
            }}
          >
            서울시 송파구 위례서로252 208호
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
