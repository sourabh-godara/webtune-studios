import { ImageResponse } from "next/og";

export const alt = "WebTune Studios";
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
          background: "#0d0d0f",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 32,
            border: "1px solid rgba(255, 255, 255, 0.12)",
            borderRadius: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span>WebTune</span>
            <span style={{ color: "#b5ff00", marginLeft: 6 }}>Studios</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
