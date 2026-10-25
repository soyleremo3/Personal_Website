import { ImageResponse } from "next/og";

export const alt = "Emrullah Söyler — AI & software developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0b0b0d",
          backgroundImage:
            "radial-gradient(ellipse 70% 60% at 15% 0%, rgba(232,163,61,0.22), transparent 70%)",
          color: "#edede6",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 12,
              background: "#e8a33d",
              color: "#0b0b0d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            ES
          </div>
          <div style={{ fontSize: 26, color: "#85858c" }}>emrullahsoylerpersonalwebsite.vercel.app</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 800, letterSpacing: -3, lineHeight: 1 }}>Emrullah Söyler</div>
          <div style={{ fontSize: 44, color: "#e8a33d", marginTop: 24 }}>AI & software developer</div>
          <div style={{ fontSize: 28, color: "#85858c", marginTop: 20 }}>
            Computer vision · Reinforcement learning · LLM agents · Mobile · Games · FRC
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
