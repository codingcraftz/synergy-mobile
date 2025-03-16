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
            width={300}
            height={80}
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
                fontSize: "56px",
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

          {/* DB Cards Preview */}
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              marginBottom: "24px",
            }}
          >
            {["프리미엄", "스탠다드", "이코노미"].map((category, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: index === 0 ? "#fef3c7" : index === 1 ? "#dbeafe" : "#d1fae5",
                  borderRadius: "8px",
                  padding: "16px",
                  width: "30%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
                }}
              >
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: index === 0 ? "#92400e" : index === 1 ? "#1e40af" : "#047857",
                    marginBottom: "8px",
                  }}
                >
                  {category}
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "8px",
                    backgroundColor: index === 0 ? "#f59e0b" : index === 1 ? "#3b82f6" : "#10b981",
                    borderRadius: "4px",
                  }}
                />
              </div>
            ))}
          </div>

          <div
            style={{
              fontSize: "24px",
              color: "#64748b",
              textAlign: "center",
            }}
          >
            시너지 그룹에서 제공하는 최신 DB 정보
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
