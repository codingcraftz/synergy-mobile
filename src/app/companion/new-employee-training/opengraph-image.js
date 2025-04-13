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
          background: "linear-gradient(to right, #1e40af, #3b82f6)",
          color: "white",
          padding: "40px",
        }}
      >
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
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#eab308",
              padding: "8px 16px",
              borderRadius: "20px",
              marginBottom: "16px",
            }}
          >
            <p
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                margin: "0",
              }}
            >
              컴패니언 사업부
            </p>
          </div>

          <h1
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              margin: "0",
              marginBottom: "16px",
            }}
          >
            04월 신입교육
          </h1>

          <h2
            style={{
              fontSize: "36px",
              fontWeight: "normal",
              margin: "0",
              marginBottom: "32px",
              maxWidth: "800px",
            }}
          >
            25.04.14~25.04.18 (월~금)
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "12px",
              padding: "24px",
              backgroundColor: "rgba(255,255,255,0.1)",
              borderRadius: "12px",
              marginBottom: "32px",
              width: "70%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: "#eab308",
                }}
              />
              <p
                style={{
                  fontSize: "20px",
                  margin: "0",
                }}
              >
                5일간 진행 / 10:00~17:00
              </p>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: "#eab308",
                }}
              />
              <p
                style={{
                  fontSize: "20px",
                  margin: "0",
                }}
              >
                서울시 송파구 위례서로252 208호
              </p>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: "#eab308",
                }}
              />
              <p
                style={{
                  fontSize: "20px",
                  margin: "0",
                }}
              >
                건물 주차 가능 (현재 무료)
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "16px",
              marginTop: "8px",
            }}
          >
            <p
              style={{
                fontSize: "20px",
                margin: "0",
                backgroundColor: "#2563eb",
                padding: "8px 16px",
                borderRadius: "20px",
              }}
            >
              DB영업
            </p>
            <p
              style={{
                fontSize: "20px",
                margin: "0",
                backgroundColor: "#2563eb",
                padding: "8px 16px",
                borderRadius: "20px",
              }}
            >
              화법교육
            </p>
            <p
              style={{
                fontSize: "20px",
                margin: "0",
                backgroundColor: "#2563eb",
                padding: "8px 16px",
                borderRadius: "20px",
              }}
            >
              상담노하우
            </p>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
