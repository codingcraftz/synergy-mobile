import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "카카오톡 채널 이용 - 시너지그룹 신입 설계사 가이드";
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
          background: "linear-gradient(to right, #F9E000, #FADE81)",
          color: "#391B1B",
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
          <svg
            width="120"
            height="120"
            viewBox="0 0 256 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M128 0C57.3073 0 0 45.2051 0 101.031C0 136.683 23.7143 168.164 59.6286 186.868C56.8857 197.192 49.8571 223.035 48.3571 229.504C46.4857 237.017 51.6571 236.859 55.3714 234.311C58.2286 232.315 90.6571 209.9 104.486 200.313C112.057 201.256 119.904 201.063 128 201.063C198.693 201.063 256 156.059 256 101.031C256 45.2051 198.693 0 128 0Z"
              fill="#391B1B"
            />
            <path
              d="M57.5238 118.189C52.8571 118.189 49.1429 114.475 49.1429 109.809C49.1429 105.143 52.8571 101.429 57.5238 101.429H119.619C124.286 101.429 128 105.143 128 109.809C128 114.475 124.286 118.189 119.619 118.189H57.5238ZM136.381 84.6667C131.714 84.6667 128 80.9524 128 76.2857C128 71.619 131.714 67.9048 136.381 67.9048H198.476C203.143 67.9048 206.857 71.619 206.857 76.2857C206.857 80.9524 203.143 84.6667 198.476 84.6667H136.381ZM136.381 118.189C131.714 118.189 128 114.475 128 109.809C128 105.143 131.714 101.429 136.381 101.429H198.476C203.143 101.429 206.857 105.143 206.857 109.809C206.857 114.475 203.143 118.189 198.476 118.189H136.381ZM57.5238 84.6667C52.8571 84.6667 49.1429 80.9524 49.1429 76.2857C49.1429 71.619 52.8571 67.9048 57.5238 67.9048H119.619C124.286 67.9048 128 71.619 128 76.2857C128 80.9524 124.286 84.6667 119.619 84.6667H57.5238Z"
              fill="#F9E000"
            />
          </svg>
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
              background: "rgba(57, 27, 27, 0.2)",
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
            카카오톡 채널 이용
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
            시너지그룹의 영업채널 및 카카오톡 채널 안내 💬
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
