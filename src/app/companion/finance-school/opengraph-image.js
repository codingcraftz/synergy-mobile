import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "컴패니언 사업부 금융스쿨";
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
          backgroundColor: "#1e40af", // 진한 파란색 배경
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
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              margin: "0",
              marginBottom: "20px",
            }}
          >
            금융스쿨
          </h1>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: "normal",
              margin: "0",
              marginBottom: "40px",
              maxWidth: "800px",
            }}
          >
            최소 100만원에서 최대 1억 이상 벌어가는 금융 전문가 과정
          </h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#eab308", // 노란색 배지
              padding: "10px 20px",
              borderRadius: "20px",
              marginBottom: "40px",
            }}
          >
            <p
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                margin: "0",
              }}
            >
              컴패니언 사업부
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            <p
              style={{
                fontSize: "24px",
                margin: "0",
              }}
            >
              2주 과정 (화/목)
            </p>
            <p
              style={{
                fontSize: "24px",
                margin: "0",
              }}
            >
              전문가 강의
            </p>
            <p
              style={{
                fontSize: "24px",
                margin: "0",
              }}
            >
              식사 제공
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
